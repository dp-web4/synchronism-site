#!/usr/bin/env python3
"""Treatment B follow-up (explorer 2026-09-02): price the 'two stated relations' escape.
Class with GLOBAL relations  eps0 = A (M/1e10)^k,  rho_c = A2 (M/1e10)^k2  (4 params)
vs MOND with a0 = A' M^k' (2 params, from the 09-01 run: chi2/N = 52.09 interpolated, 51.81 exact).
Uses the saved (eps0 x rho_c x galaxy) chi2 grid; bilinear interpolation in (log eps0, log rho_c),
clamped to the grid.  Also: what the treatment-B residual (eps0_data | eps0_MOND) correlates with."""
import os, sys, numpy as np
from scipy.optimize import minimize
from scipy.stats import spearmanr
from scipy.interpolate import RegularGridInterpolator
HERE = os.path.dirname(os.path.abspath(__file__))
EPS = np.array([0.02, 0.035, 0.05, 0.073, 0.089, 0.12, 0.16, 0.22, 0.315, 0.42, 0.56, 0.661, 0.80]); RHOC = np.logspace(-7, 1.5, 12)
lE, lR = np.log10(EPS), np.log10(RHOC)
chi = np.load(os.path.join(HERE, "eps0_rhoc_cofit_vs_mond_induced.npy")); chi_d, chi_m = chi[0], chi[1]
S = np.load(os.path.join(HERE, "eps0_mass_relation_last_escape.npy")); logM = S[3]; a_gal = S[2]; lB = S[7]; NN = S[13]
NG = len(logM); Ntot = NN.sum()
interps = [RegularGridInterpolator((lE, lR), chi_d[:, :, i], bounds_error=False, fill_value=None) for i in range(NG)]
def total(p):
    A, k, A2, k2 = p
    le = np.clip(A + k * logM, lE[0], lE[-1]); lr = np.clip(A2 + k2 * logM, lR[0], lR[-1])
    return sum(float(interps[i]((le[i], lr[i]))) for i in range(NG)) / Ntot
best = None
rng = np.random.default_rng(1)
for _ in range(60):
    x0 = [rng.uniform(lE[0], lE[-1]), rng.uniform(-0.5, 0.8), rng.uniform(lR[0], lR[-1]), rng.uniform(-1.5, 1.0)]
    r = minimize(total, x0, method="Nelder-Mead", options=dict(xatol=1e-3, fatol=1e-3, maxiter=4000))
    if best is None or r.fun < best.fun: best = r
A, k, A2, k2 = best.x
print("4-PARAM CLASS (eps0(M), rho_c(M)) vs 2-PARAM MOND (a0(M))")
print(f"   class: eps0 = {10**A:.3f} (M/1e10)^{k:+.3f},  rho_c = {10**A2:.2e} (M/1e10)^{k2:+.3f}   ->  chi2/N = {best.fun:.2f}")
# 2-param class (universal rho_c free, eps0(M)) and 3-param (eps0(M), rho_c universal) for the ladder
def total3(p): return total([p[0], p[1], p[2], 0.0])
b3 = min((minimize(total3, [rng.uniform(lE[0], lE[-1]), rng.uniform(-0.3, 0.7), rng.uniform(lR[0], lR[-1])], method="Nelder-Mead") for _ in range(40)), key=lambda r: r.fun)
def total2(p): return total([p[0], 0.0, p[1], 0.0])
b2 = min((minimize(total2, [rng.uniform(lE[0], lE[-1]), rng.uniform(lR[0], lR[-1])], method="Nelder-Mead") for _ in range(40)), key=lambda r: r.fun)
print(f"   ladder: 2 params (eps0, rho_c universal) {b2.fun:.2f}  ->  3 params (+eps0(M)) {b3.fun:.2f}  ->  4 params (+rho_c(M)) {best.fun:.2f}")
print(f"   MOND: 0 params 52.20 (a0 = 1.194e-10 grid) / 52.56 (interp);  2 params a0(M) 52.09 (exact 51.81)")
print(f"   ratio class(4)/MOND(2) = {best.fun/52.09:.2f}x   (pre-registered R3 pass: <= 1.20)")
# per-galaxy values at the 4-param relation, galaxy-level comparison
le = np.clip(A + k * logM, lE[0], lE[-1]); lr = np.clip(A2 + k2 * logM, lR[0], lR[-1])
pg_c = np.array([float(interps[i]((le[i], lr[i]))) for i in range(NG)]) / NN
# MOND 2-param per-galaxy from the 09-01 run is not saved per galaxy; use MOND fixed a0 per-galaxy proxy from 08-30 cache
co = np.load(os.path.join(HERE, "epsilon0_per_galaxy_fw.npy")); pg_m0 = co[2] / NN
from scipy.stats import wilcoxon
print(f"   galaxy-level vs MOND (0 params, fixed a0): class(4) median red. chi2 {np.median(pg_c):.2f} vs MOND {np.median(pg_m0):.2f}; class wins {100*np.mean(pg_c < pg_m0):.0f}%; Wilcoxon p = {wilcoxon(pg_c, pg_m0).pvalue:.1e}")
print(f"   ceiling at the 4-param relation: B_max(1e9) = {1/10**(A - k):.1f}, B_max(1e10) = {1/10**A:.1f}, B_max(1e11) = {1/10**(A + k):.1f}")

print("\nTREATMENT-B RESIDUAL: what (eps0_data | eps0_MOND) correlates with")
def argbest(c):
    e = np.zeros(NG); r = np.zeros(NG)
    for i in range(NG):
        a, b = np.unravel_index(c[:, :, i].argmin(), c[:, :, i].shape); e[i] = lE[a]; r[i] = lR[b]
    return e, r
eD, rD = argbest(chi_d); eM, rM = argbest(chi_m)
X = np.vstack([np.ones(NG), eM]).T; cf, *_ = np.linalg.lstsq(X, eD, rcond=None); res = eD - X @ cf
for nm, v in (("log a0 per galaxy", a_gal), ("log B_req,last", lB), ("log M_bar", logM), ("log rho_c,data", rD), ("log rho_c,MOND", rM), ("rho_c,data - rho_c,MOND", rD - rM)):
    print(f"   {nm:<24s} rho_s = {spearmanr(v, res)[0]:+.3f}")
print(f"   rho_c(M) in the co-fit: data k = {np.polyfit(logM, rD, 1)[0]:+.3f} dex/dex (rho_s {spearmanr(logM, rD)[0]:+.3f});  MOND-induced k = {np.polyfit(logM, rM, 1)[0]:+.3f} (rho_s {spearmanr(logM, rM)[0]:+.3f})")
# joint with a0_gal: does M survive once MOND's own per-galaxy a0 scatter is allowed for?
X3 = np.vstack([np.ones(NG), eM, logM, a_gal]).T; c3, *_ = np.linalg.lstsq(X3, eD, rcond=None); r3 = eD - X3 @ c3
bs = np.array([np.linalg.lstsq(X3[idx], eD[idx], rcond=None)[0] for idx in (rng.integers(0, NG, NG) for _ in range(2000))])
print(f"   joint with per-galaxy a0:  c(log M) = {c3[2]:+.3f} [{np.percentile(bs[:,2],2.5):+.3f},{np.percentile(bs[:,2],97.5):+.3f}],  d(log a0) = {c3[3]:+.3f} [{np.percentile(bs[:,3],2.5):+.3f},{np.percentile(bs[:,3],97.5):+.3f}];  resid sigma {np.sqrt(np.sum(r3**2)/(NG-4)):.3f}")
