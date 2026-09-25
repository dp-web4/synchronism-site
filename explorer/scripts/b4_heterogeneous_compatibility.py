"""B4 heterogeneous compatibility: which scalar of C[i][j] sets p_crit?

Registered in b4_heterogeneous_compatibility_PREREG.md (commit 76f15e8) before this script was written.
Simulator is imported unchanged from the Synchronism repo.
"""
import sys, os, json, zlib
import numpy as np
from multiprocessing import Pool
from scipy.optimize import curve_fit, least_squares

SIM = '/home/dp/ai-workspace/Synchronism/simulations'
sys.path.insert(0, SIM)
from compatibility_synthon_experiment import CompatibilityExperiment  # noqa: E402

N = 6
HERE = os.path.dirname(os.path.abspath(__file__))
CALIBRATED = '--prior' in sys.argv and sys.argv[sys.argv.index('--prior') + 1] == 'calibrated'
TAG = '_calprior' if CALIBRATED else ''
RAW = os.path.join(HERE, f'b4_heterogeneous_compatibility{TAG}_raw.json')
PRIOR_LOGODDS = np.log((30 / 528) / (1 - 30 / 528))  # Addendum A: calibrated edge prior, -2.81
P_GRID = [0, 0.001, 0.002, 0.005, 0.01, 0.02, 0.035, 0.05, 0.075, 0.1, 0.15, 0.2, 0.3, 0.4, 0.7, 1.0]
REPS = 40


def U(c):
    C = np.full((N, N), c); np.fill_diagonal(C, 0); return C

def block(sizes, w, b):
    C = np.full((N, N), b); s = 0
    for k in sizes:
        C[s:s + k, s:s + k] = w; s += k
    np.fill_diagonal(C, 0); return C

def ring(c=1.0):
    C = np.zeros((N, N))
    for i in range(N):
        C[i, (i + 1) % N] = C[(i + 1) % N, i] = c
    return C

def path(c=1.0):
    C = np.zeros((N, N))
    for i in range(N - 1):
        C[i, i + 1] = C[i + 1, i] = c
    return C

def star(c=1.0):
    C = np.zeros((N, N)); C[0, 1:] = C[1:, 0] = c; return C

def coreper():
    C = np.zeros((N, N)); C[:2, :2] = 1; C[:2, 2:] = C[2:, :2] = 0.5; np.fill_diagonal(C, 0); return C

def lognorm(seed=3):
    r = np.random.default_rng(seed)
    A = np.exp(r.normal(np.log(0.3), 1.0, (N, N))); A = (A + A.T) / 2
    A = np.clip(A, 0, 1); np.fill_diagonal(A, 0); return A

def er(seed=5, q=0.4):
    r = np.random.default_rng(seed)
    while True:
        A = (r.random((N, N)) < q).astype(float); A = np.triu(A, 1); A = A + A.T
        L = np.diag(A.sum(1)) - A
        if np.sort(np.linalg.eigvalsh(L))[1] > 1e-9:
            return A


CAL = {f'U{c}': U(c) for c in (0.2, 0.4, 0.6, 0.8, 1.0)}
TEST = {'block2_b0.1': block([3, 3], 1, .1), 'block2_b0.3': block([3, 3], 1, .3),
        'block3_b0.1': block([2, 2, 2], 1, .1), 'ring': ring(), 'ring0.5': ring(.5), 'path': path(),
        'star': star(), 'coreper': coreper(), 'lognorm': lognorm(), 'er0.4': er()}
ALL = {**CAL, **TEST}


def scalars(C):
    off = C[~np.eye(N, dtype=bool)]
    L = np.diag(C.sum(1)) - C
    return dict(mean=off.mean(), lmax=np.linalg.eigvalsh(C).max(),
                fiedler=np.sort(np.linalg.eigvalsh(L))[1], d=(off > 0).mean())


def one(args):
    name, p, rep = args
    rng = np.random.default_rng(zlib.crc32(f'{name}|{rep}'.encode()))  # same world+perm across p
    perm = rng.permutation(N)
    C = ALL[name][perm][:, perm].copy()
    np.fill_diagonal(C, 1.0)
    seed = int(rng.integers(0, 2**31))
    e = CompatibilityExperiment(coupling=p, compatibility_matrix=C, seed=seed)
    if CALIBRATED:
        for a in e.agents:
            a.log_odds[:] = PRIOR_LOGODDS
    r = e.run()
    return name, p, rep, r['final']['C'], r['final']['C_conv'], r['final']['C_corr']


def simulate():
    jobs = [(n, p, r) for n in ALL for p in P_GRID for r in range(REPS)]
    with Pool(8) as pool:
        out = pool.map(one, jobs, chunksize=20)
    json.dump(out, open(RAW, 'w'))
    return out


def p_mid(ps, cs):
    ps, cs = np.asarray(ps), np.asarray(cs)
    target = (cs[0] + cs[-1]) / 2
    lp = np.log(ps[1:]); c = cs[1:]
    if c[0] >= target:  # crossing between p=0 and the first nonzero grid point
        return ps[1]
    for i in range(len(c) - 1):
        if c[i] < target <= c[i + 1]:
            f = (target - c[i]) / (c[i + 1] - c[i])
            return float(np.exp(lp[i] + f * (lp[i + 1] - lp[i])))
    return np.nan


def hill(p, k, ph):
    p = np.clip(p, 1e-10, None); return p**k / (p**k + ph**k)


def hill_phalf(ps, cs):
    popt, _ = curve_fit(hill, np.array(ps), np.array(cs), p0=[0.6, 0.05], maxfev=5000, bounds=([0, 1e-6], [20, 1.0]))
    return popt


def analyse(out):
    ps = np.array(P_GRID)
    data = {n: np.zeros((len(P_GRID), REPS)) for n in ALL}
    for n, p, rep, c, *_ in out:
        data[n][P_GRID.index(p), rep] = c
    rng = np.random.default_rng(0)
    res = {}
    print(f"{'struct':12s} {'<C>':>6s} {'lmax':>6s} {'fied':>6s} {'d':>5s} | {'C(0)':>5s} {'C(1)':>5s} {'p_mid':>7s} [95% CI]          hill_ph  hill_k")
    for n, M in data.items():
        m = M.mean(1)
        pm = p_mid(ps, m)
        boots = [p_mid(ps, M[:, rng.integers(0, REPS, REPS)].mean(1)) for _ in range(1000)]
        lo, hi = np.nanpercentile(boots, [2.5, 97.5])
        k, ph = hill_phalf(ps, m)
        s = scalars(ALL[n])
        res[n] = dict(**s, pmid=pm, lo=lo, hi=hi, hill_ph=ph, hill_k=k, c0=m[0], c1=m[-1], curve=m.tolist())
        print(f"{n:12s} {s['mean']:6.3f} {s['lmax']:6.3f} {s['fiedler']:6.3f} {s['d']:5.2f} | {m[0]:5.3f} {m[-1]:5.3f} {pm:7.4f} [{lo:.4f},{hi:.4f}]  {ph:.4f}  {k:.3f}")

    # --- P1 control
    print('\nP1 control: original Hill p_half at U1.0 =', round(res['U1.0']['hill_ph'], 4), '(source 0.0185; window [0.013,0.025])')
    cal = list(CAL); test = list(TEST)
    y = np.array([res[n]['pmid'] for n in cal])
    x = np.array([1 / res[n]['mean'] for n in cal])
    b, a = np.polyfit(x, y, 1)
    print(f'uniform affine: p_mid = {a:.4f} + {b:.4f}/c ; intercept share at c=1 = {a/(a+b):.2f}')

    # --- models
    def fitpred(kind, key):
        xc = np.array([res[n][key] for n in cal]); xt = np.array([res[n][key] for n in test])
        if kind == 'prop':
            K = np.exp(np.mean(np.log(y * xc)))
            return K / xt, (K,)
        f = lambda th, X: th[0] + th[1] / X
        r = least_squares(lambda th: np.log(np.clip(f(th, xc), 1e-9, None)) - np.log(y), [0.01, 0.005])
        return f(r.x, xt), tuple(r.x)
    obs = np.array([res[n]['pmid'] for n in test])
    models = {}
    for mid, kind, key in [('M1', 'prop', 'mean'), ('M2', 'prop', 'lmax'), ('M3', 'prop', 'fiedler'),
                           ('M4', 'aff', 'mean'), ('M5', 'aff', 'lmax'), ('M6', 'aff', 'fiedler')]:
        models[mid] = fitpred(kind, key)
    # M7: a/d + b/<C>, calibrated like M4 (d = 1 on uniform)
    a4, b4 = models['M4'][1]
    models['M7'] = (np.array([a4 / res[n]['d'] + b4 / res[n]['mean'] for n in test]), (a4, b4))
    print('\nout-of-structure log10(pred/obs):')
    print(f"{'struct':12s} {'obs':>7s} " + ' '.join(f'{m:>6s}' for m in models))
    for i, n in enumerate(test):
        print(f"{n:12s} {obs[i]:7.4f} " + ' '.join(f'{np.log10(models[m][0][i]/obs[i]):+6.2f}' for m in models))
    rms = {m: float(np.sqrt(np.mean(np.log10(models[m][0] / obs)**2))) for m in models}
    print('RMS dex: ' + '  '.join(f'{m}={v:.3f}' for m, v in rms.items()))
    print('params: ' + '  '.join(f"{m}={tuple(round(v,5) for v in models[m][1])}" for m in models))
    win = min(rms, key=rms.get)
    print('winner:', win)
    r = res['ring']['pmid'] / res['U0.4']['pmid']
    print(f"P3 ring/U0.4 = {r:.2f}")
    print(f"M7 / best-mean RMS = {rms['M7'] / min(rms['M1'], rms['M4']):.2f}")
    j = P_GRID.index(0.02)
    print('C at p=0.02 across uniform c:', [round(float(data[n][j].mean()), 3) for n in cal],
          'spread', round(float(np.ptp([data[n][j].mean() for n in cal])), 3))
    json.dump(dict(res=res, rms=rms), open(os.path.join(HERE, f'b4_heterogeneous_compatibility{TAG}_summary.json'), 'w'), indent=1, default=float)
    return res, rms, data


if __name__ == '__main__':
    out = json.load(open(RAW)) if (os.path.exists(RAW) and '--rerun' not in sys.argv) else simulate()
    analyse(out)
