#!/usr/bin/env python3
"""
TEST-09 EXECUTION: the BTFR slope Synchronism's own formula predicts, on real SPARC galaxies.

The site (/tier-1-existing, TEST-09) badges the BTFR "MOND-Shared" and asserts a regime-mix
prediction: deep-MOND sample -> n ~ 4; transition-dominated -> n ~ 2.75; near-Newtonian -> n -> 2.
It concludes "regime-dependence adds no discriminating content."

The n~4 limb of that claim is asserted, never derived. Synchronism's galaxy formula
(Sessions #191-193) is:

    C(a) = Om + (1 - Om) * x / (1 + x),   x = (a/a0)^(1/phi)
    g_obs = g_bar / C(g_bar)

This C is BOUNDED BELOW by Om: as g_bar -> 0, C -> Om, so g_obs -> g_bar / Om = 3.17 * g_bar.
A constant multiple of g_bar is Newtonian gravity with a bigger G. It gives V^2 = (G/Om) M / r,
i.e. Keplerian decline and BTFR slope n = 2 -- NOT n = 4.

MOND's boost is unbounded: g_obs -> sqrt(g_bar a0), boost = sqrt(a0/g_bar) -> infinity.
That divergence is precisely what makes rotation curves asymptotically flat and BTFR n = 4.

So the prediction is: a bounded-boost theory CANNOT sit on the BTFR. This script measures how
badly, using the framework's own formula, real SPARC baryonic mass models, and the same V_flat
estimator applied identically to observation, MOND, and Synchronism.

Data: Lelli, McGaugh & Schombert (2016), SPARC. Comparison: Lelli et al. (2019) n = 3.85 +/- 0.09.
"""
import numpy as np

BASE = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/"
KPC = 3.0856775814913673e19   # m
KMS = 1.0e3                   # m/s
MSUN = 1.98892e30             # kg
G = 6.67430e-11

UP_DISK, UP_BUL = 0.5, 0.7    # McGaugh (2016) standard mass-to-light at 3.6um
OM = 0.315                    # Omega_m (Session 191-193)
PHI = (1.0 + 5.0 ** 0.5) / 2.0
A0_SYNC = 1.05e-10            # m/s^2, "derived" c*H0*Om^phi (Session 193)
A0_MOND = 1.20e-10            # m/s^2, standard Milgrom


# ---------------------------------------------------------------- the two force laws
def g_obs_sync(g_bar):
    """Synchronism: g_obs = g_bar / C(g_bar), C bounded in [Om, 1]. Boost capped at 1/Om = 3.17."""
    x = (g_bar / A0_SYNC) ** (1.0 / PHI)
    C = OM + (1.0 - OM) * x / (1.0 + x)
    return g_bar / C


def g_obs_mond(g_bar):
    """MOND (McGaugh nu-function). Boost = sqrt(a0/g_bar) -> infinity as g_bar -> 0."""
    return g_bar / (1.0 - np.exp(-np.sqrt(g_bar / A0_MOND)))


# ---------------------------------------------------------------- data loading
def load_galaxy_table():
    """
    SPARC Table 1: name -> (L36 [1e9 Lsun], MHI [1e9 Msun], Vflat, e_Vflat, Q, Inc).

    NB: the .mrt byte-offset header does not match the actual column positions in this file,
    so parse on whitespace. Columns:
      0 name, 1 T, 2 D, 3 e_D, 4 f_D, 5 Inc, 6 e_Inc, 7 L36, 8 e_L36, 9 Reff, 10 SBeff,
      11 Rdisk, 12 SBdisk, 13 MHI, 14 RHI, 15 Vflat, 16 e_Vflat, 17 Q, [18 Ref]
    """
    out = {}
    with open(BASE + "SPARC_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 18:
                continue
            try:
                name = p[0]
                inc = float(p[5])
                l36 = float(p[7])
                mhi = float(p[13])
                vflat = float(p[15])
                e_vflat = float(p[16])
                q = int(p[17])
            except ValueError:
                continue
            out[name] = dict(L36=l36, MHI=mhi, Vflat=vflat, e_Vflat=e_vflat, Q=q, Inc=inc)
    return out


def load_mass_models():
    """SPARC mass models: name -> arrays of R [kpc], Vobs, Vgas, Vdisk, Vbul [km/s]."""
    rows = {}
    with open(BASE + "MassModels_Lelli2016c.mrt") as f:
        for line in f:
            parts = line.split()
            if len(parts) != 10:
                continue
            gid = parts[0]
            try:
                vals = list(map(float, parts[1:]))
            except ValueError:
                continue
            D, R, Vobs, eVobs, Vgas, Vdisk, Vbul, SBd, SBb = vals
            rows.setdefault(gid, []).append((R, Vobs, eVobs, Vgas, Vdisk, Vbul))
    out = {}
    for gid, rr in rows.items():
        rr.sort()
        a = np.array(rr)
        out[gid] = dict(R=a[:, 0], Vobs=a[:, 1], eVobs=a[:, 2],
                        Vgas=a[:, 3], Vdisk=a[:, 4], Vbul=a[:, 5])
    return out


def v_bar(gal):
    """Baryonic rotation velocity. Gas term keeps its sign (SPARC convention)."""
    vg, vd, vb = gal["Vgas"], gal["Vdisk"], gal["Vbul"]
    v2 = vg * np.abs(vg) + UP_DISK * vd ** 2 + UP_BUL * vb ** 2
    return np.sqrt(np.clip(v2, 0.0, None))


# ---------------------------------------------------------------- V_flat estimator
def v_flat_estimator(R, V):
    """
    SPARC's V_flat is the mean over the outer, flat part of the curve. We apply one identical
    estimator to observed / MOND / Synchronism curves: mean of the outermost 3 points
    (>=3 points required). What matters is that all three models are measured the same way --
    any bias from the estimator is common-mode and cancels in the model comparison.
    """
    if len(R) < 3:
        return np.nan
    return float(np.mean(V[-3:]))


# ---------------------------------------------------------------- BTFR fit
def fit_btfr(logM, logV, n_boot=2000, seed=12345):
    """
    Fit log10(V) = a * log10(M) + b, report BTFR slope n = 1/a  (since M ~ V^n).
    Bootstrap for the uncertainty.  (Vertical fit in logV; same for all models, so comparable.)
    """
    a, b = np.polyfit(logM, logV, 1)
    rng = np.random.default_rng(seed)
    slopes = []
    idx = np.arange(len(logM))
    for _ in range(n_boot):
        s = rng.choice(idx, size=len(idx), replace=True)
        try:
            aa, _ = np.polyfit(logM[s], logV[s], 1)
            if aa > 1e-6:
                slopes.append(1.0 / aa)
        except Exception:
            pass
    slopes = np.array(slopes)
    return 1.0 / a, float(np.std(slopes)), b


# ---------------------------------------------------------------- main
def main():
    tbl = load_galaxy_table()
    mm = load_mass_models()

    print("=" * 78)
    print("TEST-09 -- BTFR slope predicted by Synchronism's own bounded-boost formula")
    print("=" * 78)
    print(f"  Synchronism: C(a) = {OM} + {1-OM:.3f} * x/(1+x), x = (a/a0)^(1/phi), a0 = {A0_SYNC:.2e}")
    print(f"               boost ceiling  1/Om = {1/OM:.2f}x in acceleration"
          f"  ({1/np.sqrt(OM):.2f}x in velocity)")
    print(f"  MOND:        McGaugh nu, a0 = {A0_MOND:.2e}, boost UNBOUNDED\n")

    # ---- sanity check on the asymptotics, before touching any data
    print("  Boost g_obs/g_bar as a function of g_bar (the whole argument in one table):")
    print(f"  {'g_bar [m/s^2]':>16} {'Synchronism':>13} {'MOND':>13}")
    for gb in [1e-8, 1e-9, 1.2e-10, 1e-11, 1e-12, 1e-13, 1e-14]:
        print(f"  {gb:>16.1e} {g_obs_sync(gb)/gb:>13.2f} {g_obs_mond(gb)/gb:>13.2f}")
    print("  -> Synchronism saturates at 3.17. MOND diverges. This is the entire finding.\n")

    rows = []
    for name, t in tbl.items():
        if name not in mm:
            continue
        # Lelli+2019 BTFR sample cuts: quality flag Q <= 2, inclination > 30 deg,
        # and a measured V_flat (SPARC sets Vflat = 0 where the curve is not flat).
        if t["Q"] > 2 or t["Inc"] < 30.0 or t["Vflat"] <= 0:
            continue
        if t["L36"] <= 0:
            continue

        gal = mm[name]
        R, Vb = gal["R"], v_bar(gal)
        ok = (R > 0) & np.isfinite(Vb) & (Vb > 0)
        R, Vb, Vobs = R[ok], Vb[ok], gal["Vobs"][ok]
        if len(R) < 3:
            continue

        r_m = R * KPC
        g_bar = (Vb * KMS) ** 2 / r_m                       # baryonic acceleration

        v_sync = np.sqrt(g_obs_sync(g_bar) * r_m) / KMS     # km/s
        v_mond = np.sqrt(g_obs_mond(g_bar) * r_m) / KMS

        # M_bar = 0.5 * L[3.6]  +  1.33 * M_HI   (helium correction), in Msun
        m_bar = (UP_DISK * t["L36"] + 1.33 * t["MHI"]) * 1e9
        if m_bar <= 0:
            continue

        rows.append(dict(
            name=name, M=m_bar,
            V_obs_cat=t["Vflat"],                            # SPARC catalogue V_flat
            V_obs_est=v_flat_estimator(R, Vobs),             # our estimator on observed curve
            V_sync=v_flat_estimator(R, v_sync),
            V_mond=v_flat_estimator(R, v_mond),
            g_bar_out=g_bar[-1],
            boost_sync=g_obs_sync(g_bar[-1]) / g_bar[-1],
            boost_mond=g_obs_mond(g_bar[-1]) / g_bar[-1],
            # observed boost at the outermost point: (V_obs/V_bar)^2
            boost_obs=(Vobs[-1] / Vb[-1]) ** 2,
        ))

    rows = [r for r in rows if np.isfinite(r["V_sync"]) and np.isfinite(r["V_mond"])
            and r["V_sync"] > 0 and r["V_mond"] > 0 and np.isfinite(r["V_obs_est"])]
    logM = np.log10(np.array([r["M"] for r in rows]))
    print(f"  Sample: {len(rows)} SPARC galaxies (Q<=2, Inc>30deg, Vflat measured)")
    print(f"  Mass range: {logM.min():.2f} to {logM.max():.2f} dex "
          f"({logM.max()-logM.min():.1f} decades)\n")

    print("  " + "-" * 74)
    print(f"  {'BTFR slope n (M ~ V^n)':<34} {'n':>8} {'+/-':>7}   note")
    print("  " + "-" * 74)

    results = {}
    for key, label in [("V_obs_cat", "OBSERVED (SPARC catalogue Vflat)"),
                       ("V_obs_est", "OBSERVED (our outer-3 estimator)"),
                       ("V_mond",    "MOND (unbounded boost)"),
                       ("V_sync",    "SYNCHRONISM (bounded boost)")]:
        v = np.array([r[key] for r in rows])
        n, sd, _ = fit_btfr(logM, np.log10(v))
        results[key] = (n, sd)
        note = ""
        if key == "V_obs_cat":
            note = "Lelli+2019 report 3.85 +/- 0.09"
        if key == "V_sync":
            note = "<-- the framework's own prediction"
        print(f"  {label:<34} {n:>8.2f} {sd:>7.2f}   {note}")
    print("  " + "-" * 74 + "\n")

    n_obs, sd_obs = results["V_obs_cat"]
    n_sync, sd_sync = results["V_sync"]
    n_mond, sd_mond = results["V_mond"]

    # tension of Synchronism's predicted slope against the observed slope
    sig = abs(n_obs - n_sync) / np.sqrt(sd_obs ** 2 + sd_sync ** 2)
    print(f"  Synchronism vs observed:  |{n_obs:.2f} - {n_sync:.2f}| = {abs(n_obs-n_sync):.2f}"
          f"  ->  {sig:.1f} sigma")
    print(f"  MOND vs observed:         |{n_obs:.2f} - {n_mond:.2f}| = {abs(n_obs-n_mond):.2f}"
          f"  ->  {abs(n_obs-n_mond)/np.sqrt(sd_obs**2+sd_mond**2):.1f} sigma")
    print(f"\n  Site's registered TEST-09 kill criterion: slope off its regime prediction by > 0.3")
    print(f"  Synchronism deviates from observation by {abs(n_obs - n_sync):.2f} "
          f"({'FIRES' if abs(n_obs-n_sync) > 0.3 else 'does not fire'}).\n")

    # ---- the deep-MOND subsample: the site claims n -> 4 there. Test it.
    print("  " + "=" * 74)
    print("  The site's claim: 'deep-MOND sample -> n ~ 4'. Test it on the deep-MOND half.")
    print("  " + "=" * 74)
    gout = np.array([r["g_bar_out"] for r in rows])
    deep = gout < A0_MOND / 3.0          # well below a0 at the outermost measured radius
    print(f"  Deep-MOND subsample (g_bar_outer < a0/3): {deep.sum()} galaxies")
    if deep.sum() >= 10:
        for key, label in [("V_obs_cat", "OBSERVED"), ("V_mond", "MOND"), ("V_sync", "SYNCHRONISM")]:
            v = np.array([r[key] for r in rows])[deep]
            n, sd, _ = fit_btfr(logM[deep], np.log10(v))
            flag = "  <-- site says this should be ~4.0" if key == "V_sync" else ""
            print(f"  {label:<14} n = {n:5.2f} +/- {sd:.2f}{flag}")
    print()

    # ---- how much boost the framework can supply, vs how much the data demands
    bs = np.array([r["boost_sync"] for r in rows])
    bm = np.array([r["boost_mond"] for r in rows])
    bo = np.array([r["boost_obs"] for r in rows])
    print("  " + "=" * 74)
    print("  Boost g_obs/g_bar demanded at the outermost measured radius")
    print("  " + "=" * 74)
    print(f"    Synchronism: median {np.median(bs):5.2f}   max {bs.max():6.2f}   (hard ceiling {1/OM:.2f})")
    print(f"    MOND:        median {np.median(bm):5.2f}   max {bm.max():6.2f}   (no ceiling)")
    print(f"    OBSERVED:    median {np.median(bo):5.2f}   max {bo.max():6.2f}")
    over = (bo > 1.0 / OM).sum()
    print(f"\n    Galaxies whose observed outer boost EXCEEDS the framework's ceiling of "
          f"{1/OM:.2f}: {over}/{len(bo)} ({100*over/len(bo):.0f}%)")
    print("    The ceiling is not a fitting inconvenience -- those galaxies are unreachable")
    print("    for ANY choice of parameters, because 1/Om is the supremum of 1/C.\n")


if __name__ == "__main__":
    main()
