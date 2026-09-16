#!/usr/bin/env python3
r"""
P5 (pre-registered, explorer/work/2026-09-16-wake-and-prereg.md, commit b0a82e2):
DO CATALOGUE TIDAL RADII SCALE LIKE JACOBI (M^1/3 R^2/3) OR LIKE L2 REFRACTION (M^1/2 R^1/2)?
Provenance control first: if log r_t is reproduced by r_J = (G M R^2 / 2V^2)^(1/3) to < 0.05 dex rms, r_t is
computed and the regression is not run.
L2 refraction truncation (gc_refraction_l2_vs_l3.py): r_eq = sqrt(G M / (C_floor k g_ext)), k = 0.35, C_floor 0.315,
g_ext = V^2/R_GC, V = 233 km/s.
"""
import json, math
import numpy as np
G = 4.30091e-3; V = 233.0; K = 0.35; CF = 0.315
cl = json.load(open('baumgardt_gc.json'))['clusters']
rows = [(c['name'], c['M'], c['R_GC'] * 1000.0, c['r_t'], c.get('r_hm')) for c in cl.values()
        if c.get('M') and c.get('R_GC') and c.get('r_t')]
n = len(rows)
M = np.array([r[1] for r in rows]); R = np.array([r[2] for r in rows]); rt = np.array([r[3] for r in rows])
rJ = (G * M * R**2 / (2 * V**2)) ** (1 / 3)
d = np.log10(rt / rJ)
print(f"N = {n}")
print(f"PROVENANCE: log(r_t / r_J): mean {d.mean():+.3f}, rms about mean {d.std():.3f} dex, "
      f"median {np.median(d):+.3f}.  corr(log r_t, log r_J) = {np.corrcoef(np.log10(rt), np.log10(rJ))[0,1]:.3f}")
computed = d.std() < 0.05
print(f"  -> r_t computed from (M, R_GC)? {computed}")
if not computed:
    X = np.column_stack([np.ones(n), np.log10(M), np.log10(R)]); y = np.log10(rt)
    beta = np.linalg.lstsq(X, y, rcond=None)[0]
    rng = np.random.default_rng(16092026); bs = []
    for _ in range(4000):
        i = rng.integers(0, n, n); bs.append(np.linalg.lstsq(X[i], y[i], rcond=None)[0])
    bs = np.array(bs); se = bs.std(0); cov = np.cov(bs[:, 1:].T)
    print(f"\nOLS log r_t = a + b log M + c log R_GC:  b = {beta[1]:.3f} +/- {se[1]:.3f},  c = {beta[2]:.3f} +/- {se[2]:.3f}"
          f"   (resid rms {np.std(y - X @ beta):.3f} dex)")
    inv = np.linalg.inv(cov)
    for lab, t in (("Jacobi (1/3, 2/3)", (1/3, 2/3)), ("L2 refraction (1/2, 1/2)", (0.5, 0.5))):
        dv = beta[1:] - np.array(t); chi2 = float(dv @ inv @ dv)
        print(f"  {lab:26s}: db {dv[0]:+.3f} ({dv[0]/se[1]:+.1f} sig), dc {dv[1]:+.3f} ({dv[1]/se[2]:+.1f} sig), "
              f"joint chi2(2 dof) {chi2:.1f}")
    req = np.sqrt(G * M / (CF * K * V**2 / R))
    q = rt / req
    print(f"\nr_t / r_eq(L2):  median {np.median(q):.2f}, 16-84% {np.percentile(q,16):.2f}-{np.percentile(q,84):.2f};"
          f"  fraction with r_t > r_eq: {np.mean(q>1):.2f};  r_t > 2 r_eq: {np.mean(q>2):.2f}")
    print(f"r_eq(L2) / r_J: median {np.median(req/rJ):.2f}  (range {np.min(req/rJ):.2f}-{np.max(req/rJ):.2f})")
    # sub-samples less affected by under-filling: outer halo
    for lo in (8e3, 15e3):
        m = R > lo
        Xm, ym = X[m], y[m]; bm = np.linalg.lstsq(Xm, ym, rcond=None)[0]
        print(f"  R_GC > {lo/1e3:.0f} kpc (N={m.sum()}): b = {bm[1]:.3f}, c = {bm[2]:.3f};  median r_t/r_eq {np.median(q[m]):.2f}")
