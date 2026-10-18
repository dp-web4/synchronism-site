#!/usr/bin/env python3
"""Does the +2843 (C_rho density-keyed vs C_g acceleration-keyed, SPARC) survive galaxy-level scoring?
Maintainer 2026-10-18.  Pre-registered in dbic2843_galaxy_level_PREREG.md before this file existed.

Source comparison: explorer/findings/scripts/two_pillars_head_to_head_fit.py (explorer 2026-08-24), imported
unchanged (same loader, cut, likelihood, models).  Additions: per-point / per-galaxy contributions to -2lnL and a
galaxy-block bootstrap with both laws refit per replicate.

  C_g   : g_obs * tanh(gamma ln(1 + g_obs/a0)) = g_bar           (implicit, unfloored)   free gamma, a0, sigma_int
  C_rho : g_obs = g_bar / tanh(gamma ln(1 + rho/rho_crit))        (global rho_crit, unfloored) free gamma, rho_c, sigma_int
  rho = Sigma/2h, h = 0.3 kpc; Upsilon_disk 0.5, Upsilon_bul 0.7.  Equal parameter counts -> Delta(-2lnL) = Delta BIC.

Usage:  python3 -I dbic2843_galaxy_level.py boot START COUNT   (writes dbic2843_boot_START.npy)
        python3 -I dbic2843_galaxy_level.py report             (identity control + all statistics)
"""
import glob
import os
import sys
import numpy as np
from multiprocessing import Pool
from scipy.optimize import minimize

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.normpath(os.path.join(HERE, "..", ".."))
sys.path.insert(0, os.path.join(SITE, "explorer", "findings", "scripts"))
import two_pillars_head_to_head_fit as H  # noqa: E402

SEED = 20261018
NM = dict(maxiter=8000, xatol=1e-8, fatol=1e-9)

# ---------------------------------------------------------------- data (module level so workers inherit it)
GID, GB, GO, RHO, VF, EL = H.build()            # h const 0.3 kpc, Upsilon_disk 0.5
GL = np.log10(GO)
N = len(GO)
GAL = np.unique(GID)
NGAL = len(GAL)
IDX = [np.where(GID == g)[0] for g in GAL]


def objB(th, gb, gl, el):
    lgam, la0, lsig = th
    gam, a0 = np.exp(lgam), np.exp(la0)
    if not (1e-3 < gam < 20 and 1e-13 < a0 < 1e-8 and 1e-4 < np.exp(lsig) < 3):
        return 1e12
    return H.neglnL(np.log10(H.solve_gobs_implicit(gb, gam, a0)), gl, el, lsig)


def objA(th, gb, gl, el, rho):
    lgam, lp, lsig = th
    gam, rc = np.exp(lgam), np.exp(lp)
    if not (1e-3 < gam < 20 and 1e-4 < np.exp(lsig) < 3 and 1e-30 < rc < 1e-14):
        return 1e12
    C = np.clip(H.C_tanh(rho / rc, gam), 1e-12, None)
    return H.neglnL(np.log10(gb / C), gl, el, lsig)


def per_point_m2lnL(model_log, gl, el, lsig):
    v = el ** 2 + np.exp(lsig) ** 2
    d = gl - model_log
    return d * d / v + np.log(v)


def model_logs(thB, thA, gb, rho):
    gam, a0 = np.exp(thB[0]), np.exp(thB[1])
    mB = np.log10(H.solve_gobs_implicit(gb, gam, a0))
    gA, rc = np.exp(thA[0]), np.exp(thA[1])
    mA = np.log10(gb / np.clip(H.C_tanh(rho / rc, gA), 1e-12, None))
    return mB, mA


def full_fits():
    rB = H.fit_pillarB(GB, GL, EL)
    rA = H.fit_pillarA(GB, GL, EL, RHO, VF, mode="global")
    return rB, rA


# ---------------------------------------------------------------- bootstrap
_W = {}


def _init(thB, thA):
    _W["thB"], _W["thA"] = np.asarray(thB), np.asarray(thA)


def one_rep(b):
    rng = np.random.default_rng([SEED, b])
    pick = rng.integers(0, NGAL, NGAL)
    idx = np.concatenate([IDX[i] for i in pick])
    gb, gl, el, rho = GB[idx], GL[idx], EL[idx], RHO[idx]
    thB, thA = _W["thB"], _W["thA"]
    # parameter-held-fixed statistic
    mB, mA = model_logs(thB, thA, gb, rho)
    fixed = float(np.sum(per_point_m2lnL(mA, gl, el, thA[2]) - per_point_m2lnL(mB, gl, el, thB[2])))
    # refit both laws
    rB = minimize(objB, thB, args=(gb, gl, el), method="Nelder-Mead", options=NM)
    bestA = None
    for start in (thA, np.array([np.log(0.3), np.log(1e-22), np.log(0.2)])):
        r = minimize(objA, start, args=(gb, gl, el, rho), method="Nelder-Mead",
                     options=dict(maxiter=12000, xatol=1e-9, fatol=1e-10))
        if bestA is None or r.fun < bestA.fun:
            bestA = r
    refit = 2.0 * (bestA.fun - rB.fun)
    return b, fixed, refit, float(np.exp(rB.x[0])), float(np.exp(bestA.x[0]))


def boot(start, count):
    rB, rA = full_fits()
    with Pool(8, initializer=_init, initargs=(rB.x, rA.x)) as pool:
        out = pool.map(one_rep, range(start, start + count), chunksize=4)
    arr = np.array(out)
    np.save(os.path.join(HERE, f"dbic2843_boot_{start:04d}.npy"), arr)
    print(f"boot {start}..{start+count-1} done; refit median {np.median(arr[:,2]):.0f}")


# ---------------------------------------------------------------- report
def report():
    print(f"BASE {H.L.BASE}")
    print(f"rows {N}, galaxies {NGAL}  (N/N_gal = {N/NGAL:.2f})")
    rB, rA = full_fits()
    dbic = 2.0 * (rA.fun - rB.fun)
    gB, aB, sB = np.exp(rB.x)
    gA, rcA, sA = np.exp(rA.x)
    print(f"C_g  (accel-keyed, implicit, unfloored): -2lnL {2*rB.fun:.1f}  gamma {gB:.4f}  a0 {aB:.4g}  sigma_int {sB:.4f}")
    print(f"C_rho(density-keyed, global rho_c)     : -2lnL {2*rA.fun:.1f}  gamma {gA:.4f}  rho_c {rcA:.4g}  sigma_int {sA:.4f}")
    ok = abs(dbic - 2842.6) <= 0.01 * 2842.6
    print(f"IDENTITY  dBIC(C_rho - C_g) = {dbic:+.1f}  (target +2842.6 +/- 1%)  {'PASS' if ok else 'FAIL'}")
    if not ok:
        print("IDENTITY CONTROL FAILED -- stop")
        return 1

    mB, mA = model_logs(rB.x, rA.x, GB, RHO)
    dpt = per_point_m2lnL(mA, GL, EL, rA.x[2]) - per_point_m2lnL(mB, GL, EL, rB.x[2])
    print(f"    sum of per-point contributions = {dpt.sum():+.1f} (must equal dBIC)")
    d_gal = np.array([dpt[i].sum() for i in IDX])

    # P5 breadth
    nw = int((d_gal > 0).sum())
    from scipy.stats import binomtest
    p = binomtest(nw, NGAL, 0.5, alternative="greater").pvalue
    print(f"P5  C_rho worse in {nw}/{NGAL} = {100*nw/NGAL:.1f}% of galaxies (sign-test p = {p:.1e})  "
          f"{'HELD' if nw/NGAL > 0.80 else ('REFUTED' if nw/NGAL < 0.65 else 'NEITHER')}")
    # P6 concentration
    order = np.argsort(d_gal)[::-1]
    tot = d_gal.sum()
    for k in (1, 5, 10, 20):
        print(f"    top {k:2d} galaxies carry {100*d_gal[order[:k]].sum()/tot:5.1f}% of the total")
    print("    top 10: " + ", ".join(f"{GAL[i]} {d_gal[i]:+.0f} ({len(IDX[i])} pts)" for i in order[:10]))
    print("    most C_rho-favoured 3: " + ", ".join(f"{GAL[i]} {d_gal[i]:+.0f}" for i in order[-3:]))
    s10 = d_gal[order[:10]].sum() / tot
    print(f"P6  top-10 share {100*s10:.1f}%  {'HELD' if s10 < 0.40 else 'REFUTED'}")
    # leave-out-top-k
    for k in (10, 20):
        print(f"    dBIC with the top {k} galaxies removed (params held): {tot - d_gal[order[:k]].sum():+.1f}")

    # point-iid widths
    sd_iid = np.sqrt(N * dpt.var(ddof=1))
    print(f"    point-iid sd: sqrt(N var(per-point delta)) = {sd_iid:.1f};  crude sqrt(2|dBIC|) = {np.sqrt(2*abs(dbic)):.1f}")
    sd_gal_analytic = np.sqrt(NGAL * d_gal.var(ddof=1))
    print(f"    galaxy-iid analytic sd: sqrt(N_gal var(Delta_i)) = {sd_gal_analytic:.1f}")

    # bootstrap
    files = sorted(glob.glob(os.path.join(HERE, "dbic2843_boot_*.npy")))
    if not files:
        print("no bootstrap files yet")
        return 0
    arr = np.concatenate([np.load(f) for f in files])
    _, ui = np.unique(arr[:, 0], return_index=True)
    arr = arr[ui]
    B = len(arr)
    fixed, refit = arr[:, 1], arr[:, 2]
    for name, x in (("refit", refit), ("params-fixed", fixed)):
        lo, hi = np.percentile(x, [2.5, 97.5])
        print(f"BOOT ({name}, B={B}): median {np.median(x):.0f}, mean {x.mean():.0f}, sd {x.std(ddof=1):.1f}, "
              f"95% [{lo:.0f}, {hi:.0f}], min {x.min():.0f}")
    print(f"    refit gamma: C_g median {np.median(arr[:,3]):.3f} [{np.percentile(arr[:,3],2.5):.3f}, {np.percentile(arr[:,3],97.5):.3f}];"
          f"  C_rho median {np.median(arr[:,4]):.4f} [{np.percentile(arr[:,4],2.5):.4f}, {np.percentile(arr[:,4],97.5):.4f}]")
    lo_r = np.percentile(refit, 2.5)
    print(f"P1  refit 95% lower edge {lo_r:.0f}: > 10 {'HELD' if lo_r > 10 else 'REFUTED'};  strong (> 1000) {'HELD' if lo_r > 1000 else 'REFUTED'}")
    sd_r, sd_f = refit.std(ddof=1), fixed.std(ddof=1)
    print(f"P2  bootstrap sd (refit) {sd_r:.1f}: in [150, 600] {'HELD' if 150 <= sd_r <= 600 else 'REFUTED'}")
    neff_f = N * sd_iid ** 2 / sd_f ** 2
    neff_r = N * sd_iid ** 2 / sd_r ** 2
    print(f"P3  N_eff = N var_iid/var_boot: params-fixed (like-for-like) {neff_f:.0f};  refit {neff_r:.0f}  "
          f"(N/N_eff = {N/neff_f:.1f} / {N/neff_r:.1f})  {'HELD' if 75 <= neff_f <= 300 else 'REFUTED'}")
    print(f"P4  dBIC x N_eff/N: {dbic*neff_f/N:+.1f} (fixed)  {dbic*neff_r/N:+.1f} (refit)  "
          f"{'HELD' if dbic*min(neff_f, neff_r)/N > 50 else ('REFUTED' if dbic*min(neff_f, neff_r)/N < 10 else 'NEITHER')}")
    print(f"    dBIC with N -> N_gal (x N_gal/N): {dbic*NGAL/N:+.1f}")
    print(f"    z = dBIC / sd_boot(refit) = {dbic/sd_r:.1f}")
    return 0


if __name__ == "__main__":
    if len(sys.argv) >= 2 and sys.argv[1] == "boot":
        boot(int(sys.argv[2]), int(sys.argv[3]))
    else:
        sys.exit(report())
