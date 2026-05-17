"""Extended compander AIC/BIC on coupling-coherence data.

Reproduces the /coupling-experiment site result (4 forms) on aggregated n=45 data
and extends to 8 compander family members (adds erf-log, arctan-log, mu-law, Gompertz).
Also runs the comparison on the full per-repetition n=900 dataset.

Run from synchronism-site/explorer/:
    python3 work/compander_aic_extended.py
"""
import json
import numpy as np
from scipy.optimize import minimize
from collections import defaultdict

DATA = '/mnt/c/exe/projects/ai-agents/Synchronism/simulations/results/coupling_coherence_results.json'

EPS = 1e-9

def f_tanh(p, gamma, p_crit):
    return np.tanh(gamma * np.log(p / np.maximum(p_crit, EPS) + 1.0))

def f_hill(p, n, K):
    pn = np.power(np.maximum(p, EPS), n)
    Kn = np.power(np.maximum(K, EPS), n)
    return pn / (pn + Kn)

def f_logistic(p, k, p_half):
    return 1.0 / (1.0 + np.exp(-k * (p - p_half)))

def f_erf(p, k, p_half):
    from scipy.special import erf
    return 0.5 * (1.0 + erf(k * (p - p_half)))

def f_erf_log(p, alpha, p_crit):
    from scipy.special import erf
    return erf(alpha * np.log(p / np.maximum(p_crit, EPS) + 1.0))

def f_arctan_log(p, beta, p_crit):
    return (2.0 / np.pi) * np.arctan(beta * np.log(p / np.maximum(p_crit, EPS) + 1.0))

def f_mulaw(p, mu, p_max):
    mu = max(mu, EPS)
    return np.log(1.0 + mu * (p / np.maximum(p_max, EPS))) / np.log(1.0 + mu)

def f_gompertz(p, b, c):
    return np.exp(-b * np.exp(-c * p))

MODELS = {
    'tanh-log (current)':  {'f': f_tanh,        'p0': [0.3, 0.002],  'bounds': [(1e-3, 50.0), (1e-6, 5.0)]},
    'Hill':                {'f': f_hill,        'p0': [0.6, 0.015],  'bounds': [(0.05, 20.0), (1e-6, 5.0)]},
    'logistic':            {'f': f_logistic,    'p0': [7.0, 0.0],    'bounds': [(0.1, 200.0), (-2.0, 2.0)]},
    'erf':                 {'f': f_erf,         'p0': [2.3, -0.2],   'bounds': [(0.05, 100.0), (-2.0, 2.0)]},
    'erf-log':             {'f': f_erf_log,     'p0': [0.4, 0.005],  'bounds': [(1e-3, 50.0), (1e-6, 5.0)]},
    'arctan-log':          {'f': f_arctan_log,  'p0': [1.0, 0.01],   'bounds': [(1e-3, 100.0), (1e-6, 5.0)]},
    'mu-law':              {'f': f_mulaw,       'p0': [100.0, 1.0],  'bounds': [(0.1, 1e6), (0.05, 5.0)]},
    'Gompertz':            {'f': f_gompertz,    'p0': [2.0, 5.0],    'bounds': [(0.01, 50.0), (0.05, 200.0)]},
}


def nll(params, mf, p_data, C_data):
    pred = mf(p_data, *params)
    if np.any(np.isnan(pred)) or np.any(~np.isfinite(pred)):
        return 1e10
    rss = np.sum((C_data - pred)**2)
    if rss <= 0:
        return 1e10
    n = len(p_data)
    sigma2 = rss / n
    return 0.5 * n * (np.log(2*np.pi*sigma2) + 1)


def fit(name, spec, p_data, C_data, n_starts=30):
    best = None
    rng = np.random.default_rng(42)
    starts = [spec['p0']]
    for _ in range(n_starts):
        lo = np.array([b[0] for b in spec['bounds']])
        hi = np.array([b[1] for b in spec['bounds']])
        starts.append([
            rng.uniform(lo[i], hi[i]) if hi[i] - lo[i] < 10
            else float(np.exp(rng.uniform(np.log(max(lo[i], 1e-6)), np.log(hi[i]))))
            for i in range(len(lo))
        ])
    for s in starts:
        try:
            res = minimize(nll, s, args=(spec['f'], p_data, C_data),
                           method='L-BFGS-B', bounds=spec['bounds'])
            if best is None or res.fun < best.fun:
                best = res
        except Exception:
            pass
    pred = spec['f'](p_data, *best.x)
    rss = np.sum((C_data - pred)**2)
    n = len(p_data)
    k = len(best.x) + 1  # +1 for sigma
    aic = 2 * best.fun + 2 * k
    bic = 2 * best.fun + k * np.log(n)
    ss_tot = np.sum((C_data - np.mean(C_data))**2)
    r2 = 1 - rss / ss_tot
    return dict(name=name, params=best.x, rss=rss, r2=r2, aic=aic, bic=bic, k=k)


def run(p, C, label):
    print(f"\n=== {label} (N={len(p)}) ===")
    print(f"p in [{p.min():.3f}, {p.max():.3f}], C in [{C.min():.3f}, {C.max():.3f}]")
    results = [fit(n, s, p, C) for n, s in MODELS.items()]
    results.sort(key=lambda r: r['aic'])
    best = results[0]['aic']
    print(f"\n{'Model':<22} {'k':>2} {'RSS':>9} {'R^2':>8} {'AIC':>11} {'BIC':>11} {'ΔAIC':>7}")
    print("-" * 80)
    for r in results:
        print(f"{r['name']:<22} {r['k']:>2} {r['rss']:>9.4f} {r['r2']:>8.4f} {r['aic']:>11.2f} {r['bic']:>11.2f} {r['aic']-best:>7.2f}")


with open(DATA) as f:
    d = json.load(f)

# 1. Aggregated (n=45) — matches site's published fit
agg = defaultdict(list)
for e in d['results']:
    agg[e['coupling']].append(e['final']['C'])
p_agg = np.array(sorted(agg.keys()))
C_agg = np.array([np.mean(agg[k]) for k in p_agg])
run(p_agg, C_agg, "Aggregated (mean C per coupling)")

# 2. Full per-repetition (n=900)
p_full = np.array([e['coupling'] for e in d['results']])
C_full = np.array([e['final']['C'] for e in d['results']])
run(p_full, C_full, "Full per-repetition data")
