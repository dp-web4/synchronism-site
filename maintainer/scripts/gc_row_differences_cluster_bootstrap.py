#!/usr/bin/env python3
"""
WARNING (maintainer 2026-10-31): the arithmetic here is right, the STATISTIC is data-free. For two laws,
d_A - d_B = (s_obs - s_A) - (s_obs - s_B) = s_B - s_A: the observation cancels, and shuffling s_obs
reproduces every difference (explorer/findings/gc-paired-differences-cancel-the-data-...md). Its 8 / 4.4 /
10.6 / 10.8 sigma are model separations. Data-facing scores: explorer/findings/scripts/gc_per_law_refit.py.

Maintainer 2026-10-30 -- GC table scored on row DIFFERENCES with a cluster bootstrap, plus the
external-field-free compander at gamma ~ 0.9 (the corner that survives SPARC at galaxy level and the
planetary perihelia). PREREG: gc_row_differences_cluster_bootstrap_PREREG.md (committed fcc4809
before this file existed).

Selection, Jeans solver, mass model and weights are those of gc_rg_permittivity_form_check.py.
"""
import sys, math, json, os
import numpy as np
EXPL = '/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts'
sys.path.insert(0, EXPL); os.chdir(EXPL)
from gc_knee_jeans_test import ModHubble, OMEGA_M
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope, A0

d = json.load(open('baumgardt_gc.json')); cl, pr = d['clusters'], d['profiles']
sel = []
for name, p in pr.items():
    c = cl.get(name)
    if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','R_GC','sigma0')): continue
    D = c['R_sun']*1000.0
    b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
    b = [x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98]; b.sort()
    if len(b) < 10: continue
    rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b]); ee = np.array([x[2] for x in b])
    m = rr > rr.max()/3.0
    if m.sum() < 5: continue
    w = 1.0/(ee[m]/ss[m])**2
    sel.append((name, c, rr[m], ss[m], wslope(rr[m], ss[m], w)))
WW = np.array([1/s[4][1]**2 for s in sel])

def per_cluster(gf):
    dd = []
    for name, c, rr, ss, (so, eo) in sel:
        mo = sigma_los_general(ModHubble(c['M'], c['r_c'], c['r_t']), gf(c), rr)
        ok = np.isfinite(mo) & (mo > 0)
        dd.append(so - (wslope(rr[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan))
    return np.array(dd)

def wmean(dd, idx=None):
    if idx is None: idx = np.arange(len(dd))
    x, w = dd[idx], WW[idx]; ok = np.isfinite(x)
    return np.sum(x[ok]*w[ok])/np.sum(w[ok])

def make_dens(gamma, rho_c=0.161):
    law = lambda x: OMEGA_M + (1-OMEGA_M)*np.tanh(gamma*np.log1p(x))
    def f(gN, rho, r): return gN/law(rho/rho_c)
    return f

A0P_ID = 1.1e-10/1.2e-10*A0   # identified Milgrom-equivalent scale a0'/gamma, (km/s)^2/pc
def make_compander_noefe(gamma):
    a0p = gamma*A0P_ID
    def f(gN, rho, r):
        gN = np.array(gN, dtype=float)
        lo = gN.copy(); hi = gN*200 + 1e-12
        for _ in range(90):
            mid = 0.5*(lo+hi)
            m = mid*np.tanh(gamma*np.log1p(mid/a0p)) < gN
            lo = np.where(m, mid, lo); hi = np.where(m, hi, mid)
        return 0.5*(lo+hi)
    return f

laws = {
    'Newton': lambda c: g_newton,
    'MOND+EFE': lambda c: make_g_mond(233.0**2/(c['R_GC']*1000.0)),
    'MOND EFE-off': lambda c: make_g_mond(0.0),
    'dens g=0.489': lambda c: make_dens(0.489),
    'dens g=2': lambda c: make_dens(2.0),
}
for g in (0.5, 0.87, 0.9, 0.95):
    laws[f'compander EFE-off g={g}'] = (lambda gg: (lambda c: make_compander_noefe(gg)))(g)

D = {k: per_cluster(v) for k, v in laws.items()}
N = len(sel)
print(f"N clusters {N}")
print("IDENTITY CONTROL (published: Newton -0.057, MOND+EFE -0.093, EFE-off -0.245, g0.489 -0.211, g2 -0.111)")
for k in D: print(f"  {k:28s} {wmean(D[k]):+.4f}")

rng = np.random.default_rng(1); B = 4000
boots = rng.integers(0, N, size=(B, N))
def boot(dd):
    return np.array([wmean(dd, i) for i in boots])
print("\nROW LEVELS with cluster-bootstrap s.d.")
for k in D: print(f"  {k:28s} {wmean(D[k]):+.4f} +/- {boot(D[k]).std():.4f}")

def pair(a, b):
    diff = D[a] - D[b]; v = wmean(diff); s = boot(diff).std()
    return v, s
print("\nPAIRED DIFFERENCES (row A minus row B; negative = A worse in the observed direction)")
pairs = [('Newton','MOND+EFE'), ('MOND EFE-off','MOND+EFE'), ('MOND EFE-off','Newton'),
         ('dens g=0.489','MOND+EFE'), ('dens g=2','MOND+EFE'), ('dens g=2','Newton'),
         ('compander EFE-off g=0.5','MOND EFE-off')]
for g in (0.87, 0.9, 0.95):
    pairs += [(f'compander EFE-off g={g}','MOND+EFE'), (f'compander EFE-off g={g}','Newton')]
res = {}
for a, b in pairs:
    v, s = pair(a, b); res[(a, b)] = (v, s)
    print(f"  {a:26s} - {b:14s} {v:+.4f} +/- {s:.4f}  ({v/s:+.1f} sigma)  {'SEPARATED' if abs(v) > 2*s else 'not separated'}")

closed = all(res[(f'compander EFE-off g={g}', ref)][0] < -2*res[(f'compander EFE-off g={g}', ref)][1]
             for g in (0.87, 0.9, 0.95) for ref in ('MOND+EFE', 'Newton'))
print(f"\n>>> PRE-FIXED RULE: EFE-free corner closed by GCs on this statistic: {'YES' if closed else 'NO'}")
