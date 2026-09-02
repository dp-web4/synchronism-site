#!/usr/bin/env python3
r"""
SUPPLEMENT to eps0_mass_relation_last_escape.py  (explorer 2026-09-02)
======================================================================
The 09-01 run finished after its session died.  Its R4 (is eps0_data anything
other than what MOND induces?) was executed only for treatment A (rho_c frozen).
Treatment B (rho_c co-fit) produced the ONLY number that passed the 'tight'
threshold on a robust estimator (0.197 dex about M_bar) -- and 59% of its
galaxies put rho_c above any disc density, i.e. C == eps0 everywhere, which is
Newton with G/eps0: a UNIFORM boost B = 1/eps0.  For those galaxies the
MOND-induced eps0 needs no PDE solve at all:
    eps0_MOND,uniform = argmin sum_i ((V_MOND,i - V_bar,i/sqrt(eps0))/sigma_i)^2
S1  verify: uniform eps0 fitted to DATA reproduces the co-fit eps0 on the
    top-edge subset (else the uniform reading of treatment B is wrong).
S2  treatment-B R4: eps0_cofit vs eps0_MOND,uniform; joint OLS with log M.
S3  permutation null for the partial slope c (M_bar | eps0_MOND) of the 09-01 run.
S4  what the class knows that MOND does not: residual (eps0_data - eps0_MOND)
    vs every observable.
S5  lensing cross-check: the ceiling implied by the best R3 relation
    eps0 = 0.1187 (M/1e10)^0.325 vs the boost MOND predicts (and KiDS-1000
    measures) at g_bar = 1e-13 .. 1e-15 m/s^2.
"""
import os, sys, numpy as np
from scipy.stats import spearmanr
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import l2_sparc_core as K
import l2_field_equation_on_sparc as D
rng = np.random.default_rng(20260902)

def ols(X, y):
    coef, *_ = np.linalg.lstsq(X, y, rcond=None); res = y - X @ coef
    return coef, res, float(np.sqrt(np.sum(res**2) / (len(y) - X.shape[1])))
def rob(r): return float(1.4826 * np.median(np.abs(r - np.median(r))))
def perm_p(x, y, n=20000):
    r0 = spearmanr(x, y)[0]; c = sum(abs(spearmanr(x, rng.permutation(y))[0]) >= abs(r0) for _ in range(n))
    return r0, (c + 1) / (n + 1)

S = np.load(os.path.join(HERE, "eps0_mass_relation_last_escape.npy"))
e_data, e_mond, a_gal, logM, logVf, logRd, lg_last, lB_last, lRlast, lSig, edge_e, edge_m, edge_a, NN = S
co = np.load(os.path.join(HERE, "epsilon0_per_galaxy_fw.npy")); e_cofit = np.log10(co[0]); rc_cofit = co[1]
NG = len(logM)
gals = K.load_sparc(); G = [D.Gal(d) for d in gals.values()]; assert len(G) == NG

def uniform_eps0(g, target):
    """closed-form: v_pred^2 = vbar2/eps0.  Minimise sum ((target - vbar/sqrt(eps0))/s)^2 over eps0 on a fine grid."""
    o = g.ok; vb = np.sqrt(g.vbar2[o]); t = target[o]; s = g.d["eVobs"][o]
    grid = np.logspace(np.log10(0.005), np.log10(0.98), 400)
    chi = np.array([np.sum(((t - vb / np.sqrt(e)) / s)**2) for e in grid])
    return np.log10(grid[chi.argmin()])
V_MOND = [np.sqrt(np.clip(K.mond_simple(g.gbar_sparc) * g.d["R"], 0, None)) for g in G]
eu_data = np.array([uniform_eps0(g, g.d["Vobs"]) for g in G])
eu_mond = np.array([uniform_eps0(g, V_MOND[i]) for i, g in enumerate(G)])
top = rc_cofit >= 30

print("=" * 78 + "\nS1. does the uniform-boost reading of treatment B hold?\n" + "=" * 78)
print(f"   top-edge galaxies (rho_c >= 30 Msun/pc^3): {top.sum()}/{NG} = {100*top.mean():.0f}%")
d = eu_data[top] - e_cofit[top]
print(f"   log(eps0_uniform,data / eps0_cofit) on top-edge: median {np.median(d):+.3f}, robust sigma {rob(d):.3f} dex, max |.| {np.abs(d).max():.3f}")
print(f"   (grid spacing of the 08-30 E2 eps0 grid ~0.1-0.15 dex; agreement within that = same object)")
print(f"   all galaxies: Spearman(eps0_uniform,data, eps0_cofit) = {spearmanr(eu_data, e_cofit)[0]:+.3f}")

print("\n" + "=" * 78 + "\nS2. TREATMENT-B R4: is the co-fit eps0 anything other than what MOND induces?\n" + "=" * 78)
for nm, m in (("top-edge subset", top), ("all galaxies", np.ones(NG, bool))):
    ec, em, lm = e_cofit[m], eu_mond[m], logM[m]
    r, p = perm_p(em, ec)
    dd = ec - em
    print(f"\n   [{nm}, n={m.sum()}]")
    print(f"   log(eps0_cofit / eps0_MOND,uniform): median {np.median(dd):+.3f}, sigma {np.std(dd):.3f}, robust {rob(dd):.3f} dex")
    print(f"   Spearman(eps0_cofit, eps0_MOND,uniform) = {r:+.3f} (perm p = {p:.1e})")
    r2, p2 = perm_p(lm, em); print(f"   Spearman(eps0_MOND,uniform, log M) = {r2:+.3f} (perm p = {p2:.1e})   <- MOND-induced mass relation, uniform-boost form")
    _, resM, sM = ols(np.vstack([np.ones(m.sum()), lm]).T, ec)
    _, resE, sE = ols(np.vstack([np.ones(m.sum()), em]).T, ec)
    coef, res2, s2 = ols(np.vstack([np.ones(m.sum()), em, lm]).T, ec)
    bs = np.array([np.linalg.lstsq(np.vstack([np.ones(m.sum()), em, lm]).T[idx], ec[idx], rcond=None)[0]
                   for idx in (rng.integers(0, m.sum(), m.sum()) for _ in range(2000))])
    print(f"   resid sigma about M only {sM:.3f} (robust {rob(resM):.3f});  about eps0_MOND only {sE:.3f} (robust {rob(resE):.3f});  joint {s2:.3f} (robust {rob(res2):.3f})")
    print(f"   joint: b(eps0_MOND) = {coef[1]:+.3f} [{np.percentile(bs[:,1],2.5):+.3f},{np.percentile(bs[:,1],97.5):+.3f}]   c(log M) = {coef[2]:+.3f} [{np.percentile(bs[:,2],2.5):+.3f},{np.percentile(bs[:,2],97.5):+.3f}]")

print("\n" + "=" * 78 + "\nS3. permutation null for the 09-01 partial slope c (log M | eps0_MOND), treatment A\n" + "=" * 78)
X = np.vstack([np.ones(NG), e_mond, logM]).T
coef, res, _ = ols(X, e_data); c0 = coef[2]
# Freedman-Lane: permute residuals of the reduced model
Xr = np.vstack([np.ones(NG), e_mond]).T
cr, rr, _ = ols(Xr, e_data); fit_r = Xr @ cr
cs = []
for _ in range(20000):
    yp = fit_r + rng.permutation(rr)
    cs.append(np.linalg.lstsq(X, yp, rcond=None)[0][2])
cs = np.array(cs)
print(f"   c = {c0:+.3f};  permutation p(|c| >= obs) = {(np.sum(np.abs(cs) >= abs(c0)) + 1)/(len(cs)+1):.3f};  null sigma(c) = {cs.std():.3f}")
# and the reverse: does eps0_MOND add beyond M?
Xr2 = np.vstack([np.ones(NG), logM]).T; cr2, rr2, _ = ols(Xr2, e_data); fit2 = Xr2 @ cr2
bs2 = np.array([np.linalg.lstsq(X, fit2 + rng.permutation(rr2), rcond=None)[0][1] for _ in range(20000)])
print(f"   b = {coef[1]:+.3f};  permutation p(|b| >= obs | M already in) = {(np.sum(np.abs(bs2) >= abs(coef[1])) + 1)/(len(bs2)+1):.1e}")

print("\n" + "=" * 78 + "\nS4. what the class fitted to DATA knows that the class fitted to MOND does not\n" + "=" * 78)
_, resD, _ = ols(np.vstack([np.ones(NG), e_mond]).T, e_data)
print(f"   {'observable':<16s} {'rho_s(eps0_data - eps0_MOND)':>30s} {'perm p':>8s}")
for nm, v in (("log M_bar", logM), ("log g_bar,last", lg_last), ("log B_req,last", lB_last), ("log R_last/R_d", lRlast - logRd),
              ("log Sigma_eff", lSig), ("log V_flat", logVf), ("log R_d", logRd), ("log a0 (per gal)", a_gal)):
    r, p = perm_p(v, resD, 5000); print(f"   {nm:<16s} {r:+30.3f} {p:8.1e}")
print(f"   robust sigma of that residual: {rob(resD):.3f} dex;  of log(a0_gal): {rob(a_gal - np.median(a_gal)):.3f} dex")

print("\n" + "=" * 78 + "\nS5. the R3 relation against the weak-lensing RAR (Brouwer+2021, KiDS-1000)\n" + "=" * 78)
A, k = 1.187e-01, 0.325
print(f"   relation: eps0 = {A:.4f} (M/1e10)^{k:+.3f}   =>   B_max = 1/eps0")
a0 = 1.2e-10
for M in (1e9, 1e10, 1e11):
    e = A * (M / 1e10)**k; print(f"   M_bar = {M:.0e}: eps0 = {e:.3f}, B_max = {1/e:6.2f}")
print(f"   MOND (simple nu) boost g_obs/g_bar at g_bar:")
for gb in (1e-12, 1e-13, 1e-14, 1e-15):
    y = gb / a0; nu = 0.5 + np.sqrt(0.25 + 1 / y); print(f"      g_bar = {gb:.0e} m/s^2: nu = {nu:7.1f}")
print("   Brouwer+2021 isolated-lens RAR tracks the MOND branch to g_bar ~ 1e-15 (their Fig. 3 / Sect. 5); lenses are M_* ~ 1e10-1e11.")
print(f"   ceiling deficit at 1e-14 for a 1e10 lens: {(0.5+np.sqrt(0.25+a0/1e-14)) / (1/(A)):.0f}x;  at 1e-15: {(0.5+np.sqrt(0.25+a0/1e-15)) / (1/A):.0f}x")
