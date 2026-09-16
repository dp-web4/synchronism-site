#!/usr/bin/env python3
r"""
P5 on an OBSERVATIONAL tidal radius (explorer 2026-09-16).  POST-HOC INPUT SWAP, same registered statistic and
decision rule.  Why: the Baumgardt catalogue r_t used by gc_rt_scaling_catalogue.py is "eq. 8 of Webb et al. 2013",
a theoretical tidal radius from a Galactic potential -- so its Jacobi-like scaling is circular (the registered
0.05 dex provenance threshold did not catch it; the catalogue documentation did).
Here r_t = r_c 10^c from Harris (1996, 2010 ed.) King fits (data/harris2010_mwgc.dat, fetched 2026-09-16),
core-collapsed clusters ('c' flag) excluded, arcmin -> pc with Baumgardt R_sun, masses and R_GC from Baumgardt.
Caveat known in advance: King r_t are notoriously poorly constrained (limiting radius set by outermost counts),
and many clusters under-fill their Roche lobes.
"""
import json
import numpy as np
G = 4.30091e-3; V = 233.0; K = 0.35; CF = 0.315
cl = json.load(open('baumgardt_gc.json'))['clusters']
lines = open('data/harris2010_mwgc.dat').read().splitlines()
start = next(i for i, l in enumerate(lines) if 'Part III' in l)
harris = {}
for l in lines[start:]:
    if len(l) < 64 or l.strip().startswith('ID'): continue
    name = l[:12].strip()
    try:
        c = float(l[48:54]); rc = float(l[58:64])
    except ValueError:
        continue
    harris[name] = (c, rc, 'c' in l[54:58])
rows = []
for name, (c, rc, cc) in harris.items():
    b = cl.get(name)
    if cc or not b or not (b.get('M') and b.get('R_GC') and b.get('R_sun')): continue
    rt = rc * 10**c / 60 * np.pi / 180 * b['R_sun'] * 1000.0
    rows.append((name, b['M'], b['R_GC'] * 1000.0, rt, b['r_t']))
n = len(rows)
M = np.array([r[1] for r in rows]); R = np.array([r[2] for r in rows]); rt = np.array([r[3] for r in rows])
rtB = np.array([r[4] for r in rows])
rJ = (G * M * R**2 / (2 * V**2)) ** (1 / 3)
print(f"N = {n} (non-core-collapsed, matched to Baumgardt)")
print(f"King r_t vs Webb/Baumgardt r_t: median ratio {np.median(rt/rtB):.2f}, rms log {np.std(np.log10(rt/rtB)):.2f} dex")
print(f"King r_t vs simple r_J: mean log {np.mean(np.log10(rt/rJ)):+.3f}, rms {np.std(np.log10(rt/rJ)):.3f} dex")
X = np.column_stack([np.ones(n), np.log10(M), np.log10(R)]); y = np.log10(rt)
beta = np.linalg.lstsq(X, y, rcond=None)[0]
rng = np.random.default_rng(16092026); bs = []
for _ in range(4000):
    i = rng.integers(0, n, n); bs.append(np.linalg.lstsq(X[i], y[i], rcond=None)[0])
bs = np.array(bs); se = bs.std(0); inv = np.linalg.inv(np.cov(bs[:, 1:].T))
print(f"\nOLS log r_t = a + b log M + c log R_GC: b = {beta[1]:.3f} +/- {se[1]:.3f}, c = {beta[2]:.3f} +/- {se[2]:.3f}"
      f"  (resid rms {np.std(y - X @ beta):.3f} dex)")
res = {}
for lab, t in (("Jacobi (1/3, 2/3)", (1/3, 2/3)), ("L2 refraction (1/2, 1/2)", (0.5, 0.5))):
    dv = beta[1:] - np.array(t); chi2 = float(dv @ inv @ dv); res[lab] = chi2
    print(f"  {lab:26s}: db {dv[0]:+.3f} ({dv[0]/se[1]:+.1f} sig), dc {dv[1]:+.3f} ({dv[1]/se[2]:+.1f} sig), joint chi2(2) {chi2:.1f}")
req = np.sqrt(G * M / (CF * K * V**2 / R)); q = rt / req
print(f"\nKing r_t / r_eq(L2): median {np.median(q):.2f}, 16-84% {np.percentile(q,16):.2f}-{np.percentile(q,84):.2f}; "
      f"r_t > r_eq: {np.mean(q>1):.2f}; r_t > 2 r_eq: {np.mean(q>2):.2f}")
print(f"King r_t / r_J(simple): median {np.median(rt/rJ):.2f}")
for lo in (8e3, 15e3):
    m = R > lo; bm = np.linalg.lstsq(X[m], y[m], rcond=None)[0]
    print(f"  R_GC > {lo/1e3:.0f} kpc (N={m.sum()}): b = {bm[1]:.3f}, c = {bm[2]:.3f}; median r_t/r_eq {np.median(q[m]):.2f}")

# POST-HOC (not registered): low-mass clusters are expected to fill their tidal limit (relaxation-driven expansion,
# e.g. Baumgardt+2010), so their King r_t is the best proxy for the truncation radius itself.  Compare r_t to both.
print("\nPOST-HOC by mass bin:  median King r_t / r_J(simple)   and   r_t / r_eq(L2)")
for lo, hi in ((0, 3e4), (3e4, 1e5), (1e5, 3e5), (3e5, 1e7)):
    m = (M >= lo) & (M < hi)
    print(f"  M {lo:8.0e}-{hi:8.0e} (N={m.sum():3d}):  r_t/r_J {np.median(rt[m]/rJ[m]):.2f}   r_t/r_eq {np.median(q[m]):.2f}"
          f"   frac r_t > r_eq {np.mean(q[m]>1):.2f}")
bJ = np.polyfit(np.log10(M), np.log10(rt / rJ), 1)[0]; bE = np.polyfit(np.log10(M), np.log10(q), 1)[0]
print(f"  d log(r_t/r_J)/d log M = {bJ:+.3f}  (Jacobi-filling predicts 0; L2 truncation predicts +1/6)")
print(f"  d log(r_t/r_eq)/d log M = {bE:+.3f} (L2-filling predicts 0; Jacobi truncation predicts -1/6)")
