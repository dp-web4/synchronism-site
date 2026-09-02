#!/usr/bin/env python3
r"""
TREATMENT B, DONE PROPERLY  (explorer 2026-09-02)
=================================================
The 09-01 script read column 1 of epsilon0_per_galaxy_fw.npy as the per-galaxy
co-fit rho_c.  That column is the per-galaxy best CHI^2 (the 08-30 save line is
np.vstack([e0s, best_per_gal, MOND_F, NN])).  So "59% of galaxies put rho_c at
the top grid edge" and "rho_c tracks M_bar at +0.56" in logs/2026-09-01.md are
statements about chi^2, not rho_c.  The E2 cache keeps only global chi2/N per
grid point, so the per-galaxy (eps0, rho_c) must be re-solved.  Every solve is
scored against DATA and against MOND's predicted curve (simple mu, a0=1.2e-10),
exactly as in eps0_mass_relation_last_escape.py, so that treatment B gets the
same R4 test treatment A got:  is the co-fit eps0 anything other than what MOND
induces?  Grid = the 08-30 E2 grid (13 eps0 x 12 rho_c), Upsilon_disk = 0.5 fixed.
"""
import os, sys, time, numpy as np
from scipy.stats import spearmanr
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import l2_sparc_core as K
import l2_field_equation_on_sparc as D
GAMMA = 0.489
EPS = np.array([0.02, 0.035, 0.05, 0.073, 0.089, 0.12, 0.16, 0.22, 0.315, 0.42, 0.56, 0.661, 0.80])
RHOC = np.logspace(-7, 1.5, 12)
rng = np.random.default_rng(20260902)
SMOKE = "--smoke" in sys.argv

def score_to(g, v2pred, target):
    v = np.sqrt(np.clip(v2pred, 0, None)); o = g.ok & (v > 0)
    r = (target[o] - v[o]) / g.d["eVobs"][o]; return float(np.sum(r**2))
def ols(X, y):
    coef, *_ = np.linalg.lstsq(X, y, rcond=None); res = y - X @ coef
    return coef, res, float(np.sqrt(np.sum(res**2) / (len(y) - X.shape[1])))
def rob(r): return float(1.4826 * np.median(np.abs(r - np.median(r))))
def perm_p(x, y, n=20000):
    r0 = spearmanr(x, y)[0]; c = sum(abs(spearmanr(x, rng.permutation(y))[0]) >= abs(r0) for _ in range(n))
    return r0, (c + 1) / (n + 1)

t0 = time.time()
gals = K.load_sparc(); G = [D.Gal(d) for d in gals.values()]
if SMOKE: G = G[:6]; EPS = EPS[::4]; RHOC = RHOC[::4]
NG = len(G); NN = np.array([int(g.ok.sum()) for g in G])
V_MOND = [np.sqrt(np.clip(K.mond_simple(g.gbar_sparc) * g.d["R"], 0, None)) for g in G]
logM = np.array([np.log10(g.Mtot) for g in G]) - 10.0
print(f"built {NG} galaxies;  grid {len(EPS)} eps0 x {len(RHOC)} rho_c = {len(EPS)*len(RHOC)} solves/galaxy", flush=True)

chi_d = np.zeros((len(EPS), len(RHOC), NG)); chi_m = np.zeros_like(chi_d)
for a, e0 in enumerate(EPS):
    for b, rc in enumerate(RHOC):
        Cf = K.C_framework(GAMMA, rc, e0)
        for i, g in enumerate(G):
            v2 = g.solve(Cf, e0)[0] * g.vbar2
            chi_d[a, b, i] = score_to(g, v2, g.d["Vobs"]); chi_m[a, b, i] = score_to(g, v2, V_MOND[i])
    print(f"   eps0 = {e0:.3f} done   row-min chi2/N vs data {chi_d[a].sum(1).min()/NN.sum():8.2f}   vs MOND {chi_m[a].sum(1).min()/NN.sum():8.2f}   [{time.time()-t0:.0f}s]", flush=True)
np.save(os.path.join(HERE, "eps0_rhoc_cofit_vs_mond_induced.npy"), np.stack([chi_d, chi_m]))

def argbest(chi):
    e = np.zeros(NG); r = np.zeros(NG); ee = np.zeros(NG, bool); re_top = np.zeros(NG, bool); re_bot = np.zeros(NG, bool)
    for i in range(NG):
        a, b = np.unravel_index(chi[:, :, i].argmin(), chi[:, :, i].shape)
        e[i] = np.log10(EPS[a]); r[i] = np.log10(RHOC[b]); ee[i] = a in (0, len(EPS) - 1)
        re_top[i] = b == len(RHOC) - 1; re_bot[i] = b == 0
    return e, r, ee, re_top, re_bot
eD, rD, eeD, topD, botD = argbest(chi_d); eM, rM, eeM, topM, botM = argbest(chi_m)

print("\n" + "=" * 78 + "\nB0. PER-GALAXY CO-FIT (eps0, rho_c) -- data target and MOND target\n" + "=" * 78)
print(f"   global best (data): eps0 = {EPS[np.unravel_index(chi_d.sum(2).argmin(), chi_d.shape[:2])[0]]:.3f}, rho_c = {RHOC[np.unravel_index(chi_d.sum(2).argmin(), chi_d.shape[:2])[1]]:.2e}, chi2/N = {chi_d.sum(2).min()/NN.sum():.2f}   (08-30: 0.220, 3.5e-6, 126.53)")
print(f"   per-galaxy free chi2/N: data-target {chi_d.min(axis=(0,1)).sum()/NN.sum():.2f} (08-30: 18.69);  MOND-target {chi_m.min(axis=(0,1)).sum()/NN.sum():.2f} (how well 2 params/galaxy can imitate MOND's curve)")
for nm, e, r, ee, tp, bt in (("data", eD, rD, eeD, topD, botD), ("MOND", eM, rM, eeM, topM, botM)):
    print(f"   [{nm}-target]  eps0 median {10**np.median(e):.3f}, std {np.std(e):.3f} dex, at eps0 edge {100*ee.mean():.0f}%;"
          f"  rho_c median {10**np.median(r):.2e}, at TOP edge {100*tp.mean():.0f}%, at BOTTOM edge {100*bt.mean():.0f}%")
print(f"   Spearman(rho_c,data, log M) = {spearmanr(rD, logM)[0]:+.3f};  Spearman(eps0,data, rho_c,data) = {spearmanr(eD, rD)[0]:+.3f}")
try:
    co = np.load(os.path.join(HERE, "epsilon0_per_galaxy_fw.npy"))
    if len(co[0]) == NG:
        print(f"   consistency with 08-30 cache: eps0 identical for {100*np.mean(np.isclose(np.log10(co[0]), eD, atol=1e-6)):.0f}% of galaxies")
except Exception: pass

print("\n" + "=" * 78 + "\nB1. THE MASS RELATION, treatment B\n" + "=" * 78)
for nm, e in (("eps0 (data)", eD), ("eps0 (MOND)", eM)):
    coef, res, s = ols(np.vstack([np.ones(NG), logM]).T, e); r, p = perm_p(logM, e)
    print(f"   {nm:<12s}: k = {coef[1]:+.3f} dex/dex, resid sigma {s:.3f} (robust {rob(res):.3f}), rho_s = {r:+.3f} (perm p {p:.1e})")
print("\n" + "=" * 78 + "\nB2. R4 FOR TREATMENT B: is the co-fit eps0 anything other than what MOND induces?\n" + "=" * 78)
d = eD - eM; print(f"   log(eps0_data / eps0_MOND): median {np.median(d):+.3f}, sigma {np.std(d):.3f}, robust {rob(d):.3f} dex")
r, p = perm_p(eM, eD); print(f"   Spearman(eps0_data, eps0_MOND) = {r:+.3f} (perm p {p:.1e})")
X = np.vstack([np.ones(NG), eM, logM]).T; coef, res, s = ols(X, eD)
bs = np.array([np.linalg.lstsq(X[idx], eD[idx], rcond=None)[0] for idx in (rng.integers(0, NG, NG) for _ in range(2000))])
_, _, sE = ols(np.vstack([np.ones(NG), eM]).T, eD); _, _, sM = ols(np.vstack([np.ones(NG), logM]).T, eD)
print(f"   joint OLS log eps0_data = a + b log eps0_MOND + c log M:  b = {coef[1]:+.3f} [{np.percentile(bs[:,1],2.5):+.3f},{np.percentile(bs[:,1],97.5):+.3f}]"
      f"   c = {coef[2]:+.3f} [{np.percentile(bs[:,2],2.5):+.3f},{np.percentile(bs[:,2],97.5):+.3f}]")
print(f"   resid sigma: M only {sM:.3f};  eps0_MOND only {sE:.3f};  joint {s:.3f}")
# Freedman-Lane permutation for c
Xr = np.vstack([np.ones(NG), eM]).T; cr, rr, _ = ols(Xr, eD); fit_r = Xr @ cr
cs = np.array([np.linalg.lstsq(X, fit_r + rng.permutation(rr), rcond=None)[0][2] for _ in range(20000)])
print(f"   permutation p(|c| >= obs) = {(np.sum(np.abs(cs) >= abs(coef[2])) + 1)/(len(cs)+1):.3f}")
# rho_c: is the co-fit rho_c MOND-induced too?
print(f"\n   rho_c: Spearman(rho_c,data, rho_c,MOND) = {spearmanr(rD, rM)[0]:+.3f};  same edge class for {100*np.mean((topD==topM)&(botD==botM)):.0f}% of galaxies")
# residual of the (eps0,rho_c) fit itself: what the co-fit knows beyond MOND
a_res = eD - (cr[0] + cr[1] * eM)
Bl = np.array([g.d["Vobs"][g.ok][-1]**2 / g.vbar2[g.ok][-1] for g in G])
print(f"   residual (eps0_data | eps0_MOND) vs log B_req,last: rho_s = {spearmanr(np.log10(Bl), a_res)[0]:+.3f};  vs log M: {spearmanr(logM, a_res)[0]:+.3f}")
print(f"\ntotal {time.time()-t0:.0f}s")
