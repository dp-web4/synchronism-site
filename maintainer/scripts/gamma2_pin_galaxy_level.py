#!/usr/bin/env python3
"""Does the gamma = 2 pin survive without an N_eff convention?  Maintainer 2026-09-29.

Pre-registered in gamma2_pin_galaxy_level_PREREG.md (site commit 976e3f9) BEFORE this file
existed.  Verdict rules live there; restated inline.

Pipeline is the frozen 2026-07-22 artifact (Synchronism/simulations/sparc_tanhlog_profile.py):
same row cut, same Upsilons, log-space SSR, a0 profiled 1-D.  Only addition: the galaxy name is
kept per row so the galaxy can be the replication unit.
"""
import os
import sys
import numpy as np
from scipy.optimize import minimize_scalar

HERE = os.path.dirname(os.path.abspath(__file__))
WS = os.path.normpath(os.path.join(HERE, "..", "..", ".."))
DATA = os.path.join(WS, "Synchronism", "simulations", "sparc_real_data", "MassModels_Lelli2016c.mrt")
KPC_M, KMS = 3.0856775814913673e19, 1.0e3
UP_DISK, UP_BUL, ERR_CUT = 0.5, 0.7, 0.10
SEED = 20260929
LN10 = np.log(10.0)


def load():
    names, gobs, gbar = [], [], []
    with open(DATA, encoding="utf-8") as fh:
        for line in fh:
            p = line.split()
            if len(p) != 10:
                continue
            try:
                r, vo, evo, vg, vd, vb = map(float, p[2:8])
            except ValueError:
                continue
            if r <= 0 or vo <= 0 or evo / vo > ERR_CUT:
                continue
            vb2 = (vg * abs(vg) + UP_DISK * vd * abs(vd) + UP_BUL * vb * abs(vb)) * KMS**2
            if vb2 <= 0:
                continue
            rm = r * KPC_M
            names.append(p[0]); gbar.append(vb2 / rm); gobs.append((vo * KMS) ** 2 / rm)
    return np.array(names), np.array(gobs), np.array(gbar)


# --- models: prediction of g_obs from g_bar -----------------------------------------------
_TGRID = np.linspace(-7.0, 5.0, 6001)  # log10(g_bar/a0)
_XCACHE = {}


def _implicit_x_of_t(gamma):
    """x = g_obs/a0 solving x*tanh(gamma*ln(1+x)) = t, tabulated on the t grid."""
    if gamma in _XCACHE:
        return _XCACHE[gamma]
    t = 10.0 ** _TGRID
    lo = t.copy()
    hi = np.maximum(2.0 * t + 1.0, 2.0)
    f = lambda x: x * np.tanh(gamma * np.log1p(x)) - t
    for _ in range(60):
        m = f(hi) < 0
        if not m.any():
            break
        hi[m] *= 2.0
    for _ in range(100):
        mid = 0.5 * (lo + hi)
        m = f(mid) < 0
        lo[m] = mid[m]; hi[~m] = mid[~m]
    _XCACHE[gamma] = np.log10(0.5 * (lo + hi))
    return _XCACHE[gamma]


def tanhlog_pred(gbar, a0, gamma):
    lx = _implicit_x_of_t(gamma)
    return a0 * 10.0 ** np.interp(np.log10(gbar / a0), _TGRID, lx)


def mcgaugh_pred(gbar, a0):
    y = gbar / a0
    return gbar / (-np.expm1(-np.sqrt(y)))


def ssr(gobs, pred):
    r = np.log10(gobs) - np.log10(pred)
    return float(r @ r)


def fit_a0(gobs, gbar, pred):
    res = minimize_scalar(lambda la: ssr(gobs, pred(gbar, 10.0 ** la)), bounds=(-11.0, -9.0),
                          method="bounded", options={"xatol": 1e-9})
    return 10.0 ** float(res.x), float(res.fun)


def fit_gamma_a0(gobs, gbar, grid):
    best = None
    for g in grid:
        a0, s = fit_a0(gobs, gbar, lambda gb, a, g=g: tanhlog_pred(gb, a, g))
        if best is None or s < best[2]:
            best = (g, a0, s)
    return best


def main():
    names, gobs, gbar = load()
    N = len(gobs)
    gal = np.unique(names)
    Ngal = len(gal)
    print(f"rows {N}, galaxies {Ngal}")

    grid = sorted(set(np.round(np.arange(0.35, 1.2500001, 0.025), 6)) | {0.489, 0.5, 2.0})

    # ---- identity controls ------------------------------------------------------------
    a0_m, s_m = fit_a0(gobs, gbar, mcgaugh_pred)
    a0_2, s_2 = fit_a0(gobs, gbar, lambda gb, a: tanhlog_pred(gb, a, 2.0))
    g_hat, a0_f, s_f = fit_gamma_a0(gobs, gbar, grid)
    dbic_2 = N * np.log(s_2 / s_m)
    dbic_f = N * np.log(s_f / s_m) + np.log(N)
    print(f"C1  gamma=2 vs McGaugh: dBIC = {dbic_2:+.1f}  (rms {np.sqrt(s_2/N):.4f} vs {np.sqrt(s_m/N):.4f}; a0'={a0_2:.3e}, a0_McG={a0_m:.3e})")
    print(f"C2  free gamma: gamma_hat = {g_hat:.3f}, a0' = {a0_f:.3e}, dBIC vs McGaugh = {dbic_f:+.1f}")
    ok1 = abs(dbic_2 - 184) <= 2 or abs(dbic_2 - 184) <= 0.02 * 184
    ok2 = abs(g_hat - 0.489) <= 0.013 and abs(dbic_f - 7.1) <= 1.0
    print(f"    C1 {'PASS' if ok1 else 'FAIL'}   C2 {'PASS' if ok2 else 'FAIL'}  (C2 tolerance widened to the 0.025 grid step)")
    if not (ok1 and ok2):
        print("IDENTITY CONTROL FAILED — stop, script is wrong")
        return 1

    # ---- P1: per-galaxy paired sign test ----------------------------------------------
    p2 = tanhlog_pred(gbar, a0_2, 2.0)
    pf = tanhlog_pred(gbar, a0_f, g_hat)
    r2 = (np.log10(gobs) - np.log10(p2)) ** 2
    rf = (np.log10(gobs) - np.log10(pf)) ** 2
    d_gal = np.array([r2[names == g].sum() - rf[names == g].sum() for g in gal])
    n_worse = int((d_gal > 0).sum())
    frac = n_worse / Ngal
    from scipy.stats import binomtest, wilcoxon
    p_sign = binomtest(n_worse, Ngal, 0.5, alternative="greater").pvalue
    w = wilcoxon(d_gal, alternative="greater")
    print(f"P1  gamma=2 worse in {n_worse}/{Ngal} = {100*frac:.1f}% of galaxies; sign-test p = {p_sign:.2e}; Wilcoxon p = {w.pvalue:.2e}")
    p1 = "HELD" if (frac > 0.65 and p_sign < 1e-3) else ("REFUTED" if (frac < 0.55 or p_sign > 0.01) else "NEITHER")
    print(f"    P1 {p1}")
    med_drms = np.median([np.sqrt(r2[names == g].mean()) - np.sqrt(rf[names == g].mean()) for g in gal])
    print(f"P4' median per-galaxy rms excess of gamma=2 over free: {med_drms:+.4f} dex")

    # ---- P3: dBIC with N -> N_gal ------------------------------------------------------
    dbic_gal = Ngal * np.log(s_2 / s_m)
    print(f"P3  dBIC(gamma=2 vs McGaugh) with N_eff = N_gal = {Ngal}: {dbic_gal:+.1f}   (5.6x convention: {dbic_2/5.6:+.1f})")
    p3 = "HELD" if 5 <= dbic_gal <= 15 else "REFUTED"
    print(f"    P3 {p3}")

    # ---- P5: where the signal lives ---------------------------------------------------
    med_x = np.array([np.median(gbar[names == g]) / a0_m for g in gal])
    share = d_gal[med_x < 1].sum() / d_gal.sum()
    print(f"P5  share of total paired excess from galaxies with median g_bar/a0 < 1: {100*share:.1f}%  ({(med_x<1).sum()} galaxies)")
    p5 = "HELD" if share > 0.60 else "REFUTED"
    print(f"    P5 {p5}")

    # ---- P2: galaxy-level 10-fold CV ---------------------------------------------------
    rng = np.random.default_rng(SEED)
    perm = rng.permutation(Ngal)
    folds = np.array_split(perm, 10)
    ll_pin = np.zeros(N); ll_free = np.zeros(N)
    for k, fold in enumerate(folds):
        test_gal = set(gal[fold])
        te = np.array([n in test_gal for n in names]); tr = ~te
        a0p, sp = fit_a0(gobs[tr], gbar[tr], lambda gb, a: tanhlog_pred(gb, a, 2.0))
        gh, a0h, sh = fit_gamma_a0(gobs[tr], gbar[tr], grid)
        sig_p = np.sqrt(sp / tr.sum()); sig_f = np.sqrt(sh / tr.sum())
        rp = np.log10(gobs[te]) - np.log10(tanhlog_pred(gbar[te], a0p, 2.0))
        rf_ = np.log10(gobs[te]) - np.log10(tanhlog_pred(gbar[te], a0h, gh))
        ll_pin[te] = -0.5 * (rp / sig_p) ** 2 - np.log(sig_p)
        ll_free[te] = -0.5 * (rf_ / sig_f) ** 2 - np.log(sig_f)
        print(f"    fold {k}: train gamma_hat={gh:.3f}  test gal={len(fold)}")
    dll = ll_free - ll_pin
    # galaxy-level paired SE: per-galaxy mean of dll weighted by points
    per_gal = np.array([dll[names == g].sum() for g in gal])
    npts = np.array([(names == g).sum() for g in gal])
    mean_pt = per_gal.sum() / N
    # SE of the total via galaxy-level resampling variance
    se_total = np.sqrt(Ngal / (Ngal - 1) * ((per_gal - per_gal.mean()) ** 2).sum())
    z = per_gal.sum() / se_total
    print(f"P2  held-out lnL/pt: free {ll_free.mean():.5f}  pin {ll_pin.mean():.5f}  diff {mean_pt:+.5f}/pt;  total {per_gal.sum():+.1f} ± {se_total:.1f} (galaxy-level) => {z:.1f} sigma")
    p2v = "HELD" if z > 3 else ("REFUTED" if z < 2 else "NEITHER")
    print(f"    P2 {p2v}")

    # ---- P4: galaxy-block bootstrap of full-N dBIC --------------------------------------
    B = 2000
    idx_by_gal = {g: np.where(names == g)[0] for g in gal}
    boots = np.empty(B)
    for b in range(B):
        pick = rng.integers(0, Ngal, Ngal)
        idx = np.concatenate([idx_by_gal[gal[i]] for i in pick])
        go, gb = gobs[idx], gbar[idx]
        _, sm = fit_a0(go, gb, mcgaugh_pred)
        _, s2 = fit_a0(go, gb, lambda x, a: tanhlog_pred(x, a, 2.0))
        boots[b] = len(idx) * np.log(s2 / sm)
    lo, hi = np.percentile(boots, [2.5, 97.5])
    print(f"P4  galaxy-block bootstrap (B={B}) of dBIC(gamma=2 vs McGaugh) at full N: median {np.median(boots):.0f}, 95% [{lo:.0f}, {hi:.0f}]")
    p4 = "HELD" if lo > 30 else ("REFUTED" if lo <= 10 else "NEITHER")
    print(f"    P4 {p4}")
    print(f"    implied N_eff from bootstrap spread (N * (var_iid_est / var_boot)): "
          f"sigma_boot = {boots.std():.1f}; a plain point-iid chi2-difference sd would be ~{np.sqrt(2*abs(dbic_2)):.1f}")

    print("\nVERDICT (registered rule: pin stays refuted convention-free iff P1 and P2 HELD):",
          "REFUTED CONVENTION-FREE" if (p1 == "HELD" and p2v == "HELD") else "CONVENTION-DEPENDENT")
    return 0


if __name__ == "__main__":
    sys.exit(main())
