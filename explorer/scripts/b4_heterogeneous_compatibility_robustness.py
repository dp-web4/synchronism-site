"""POST-HOC robustness for b4_heterogeneous_compatibility.py (not registered).
(a) winner stability under bootstrap over reps; (b) same model table on the secondary estimator (original Hill p_half);
(c) residual structure of M7 vs Fiedler on the block structures."""
import json, numpy as np
from collections import Counter
from scipy.optimize import least_squares
import b4_heterogeneous_compatibility as B

out = json.load(open(B.RAW)); ps = np.array(B.P_GRID)
data = {n: np.zeros((len(ps), B.REPS)) for n in B.ALL}
for n, p, rep, c, *_ in out: data[n][B.P_GRID.index(p), rep] = c
S = {n: B.scalars(B.ALL[n]) for n in B.ALL}
cal, test = list(B.CAL), list(B.TEST)

def table(est):
    y = np.array([est[n] for n in cal]); obs = np.array([est[n] for n in test])
    preds = {}
    for mid, kind, key in [('M1','prop','mean'),('M2','prop','lmax'),('M3','prop','fiedler'),('M4','aff','mean'),('M5','aff','lmax'),('M6','aff','fiedler')]:
        xc = np.array([S[n][key] for n in cal]); xt = np.array([S[n][key] for n in test])
        if kind == 'prop':
            K = np.exp(np.mean(np.log(y*xc))); preds[mid] = K/xt
        else:
            f = lambda th, X: th[0]+th[1]/X
            r = least_squares(lambda th: np.log(np.clip(f(th,xc),1e-9,None))-np.log(y), [0.01,0.005])
            preds[mid] = f(r.x, xt)
            if mid == 'M4': a4, b4 = r.x
    preds['M7'] = np.array([a4/S[n]['d'] + b4/S[n]['mean'] for n in test])
    return {m: float(np.sqrt(np.mean(np.log10(v/obs)**2))) for m, v in preds.items()}

rng = np.random.default_rng(1); wins = Counter(); gaps = []
for _ in range(500):
    est = {n: B.p_mid(ps, M[:, rng.integers(0, B.REPS, B.REPS)].mean(1)) for n, M in data.items()}
    r = table(est); w = min(r, key=r.get); wins[w] += 1
    gaps.append(r['M7'] / min(r['M1'], r['M4']))
print('(a) bootstrap winner counts (500):', dict(wins))
print('    M7 / best-mean-model RMS ratio: median %.2f, 95%% [%.2f, %.2f]; frac < 0.8 = %.2f' % (np.median(gaps), *np.percentile(gaps,[2.5,97.5]), np.mean(np.array(gaps)<0.8)))
hill = {n: B.hill_phalf(ps, M.mean(1))[1] for n, M in data.items()}
print('(b) secondary estimator (orig. Hill p_half) RMS:', {m: round(v,3) for m, v in table(hill).items()})
