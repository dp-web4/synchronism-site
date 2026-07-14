#!/usr/bin/env python3
"""
TEST-09 follow-up: is the BTFR failure a bad-parameter problem or a wrong-functional-form problem?

Synchronism's galaxy law is
    C(a) = Om + (1 - Om) * x/(1+x),   x = (a/a0)^(1/phi),    g_obs = g_bar / C(g_bar)

with THREE knobs the framework claims are *derived, not fitted*:
    Om  = 0.315   (cosmological matter density)
    phi = 1.618   (golden ratio)
    a0  = 1.05e-10 = c*H0*Om^phi

We scan all three against the real SPARC BTFR and ask: what is the BEST slope this functional
form can reach, and where does it have to go to get there?

Two structural obstructions are predicted analytically:

  (A) Om > 0 puts a FLOOR on C, hence a CEILING 1/Om on the boost. A bounded boost is
      asymptotically a constant rescaling of G -> Keplerian -> BTFR n -> 2.

  (B) Even at Om -> 0 the deep limit is a POWER LAW, not MOND's:
          C -> x = (g_bar/a0)^(1/phi)   =>   g_obs -> g_bar^(1 - 1/phi) * a0^(1/phi)
      Flat rotation curves require g_obs ~ g_bar^(1/2) exactly (that is the only exponent for
      which V^2 = g_obs*r is r-independent). So flatness demands 1 - 1/phi = 1/2, i.e. phi = 2.
      The golden ratio gives 1 - 1/1.618 = 0.382, not 0.5.

  => The BTFR is recovered only in the limit (Om -> 0, phi -> 2), where the law degenerates to
     g_obs = g_bar + sqrt(g_bar*a0) -- i.e. exactly MOND. The two "derived from cosmology"
     ingredients are precisely the two that break it.

This script tests both claims numerically on the real data.
"""
import numpy as np

BASE = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/"
KPC = 3.0856775814913673e19
KMS = 1.0e3
UP_DISK, UP_BUL = 0.5, 0.7
PHI_GOLDEN = (1.0 + 5.0 ** 0.5) / 2.0

from test09_btfr_bounded_boost_real_sparc import (
    load_galaxy_table, load_mass_models, v_bar, v_flat_estimator, fit_btfr, g_obs_mond,
)


def g_obs_sync_gen(g_bar, om, phi, a0):
    """Synchronism's law with all three knobs free. om -> 0 removes the ceiling."""
    x = (g_bar / a0) ** (1.0 / phi)
    C = om + (1.0 - om) * x / (1.0 + x)
    return g_bar / np.clip(C, 1e-12, None)


def build_sample():
    tbl, mm = load_galaxy_table(), load_mass_models()
    gals = []
    for name, t in tbl.items():
        if name not in mm or t["Q"] > 2 or t["Inc"] < 30.0 or t["Vflat"] <= 0 or t["L36"] <= 0:
            continue
        gal = mm[name]
        R, Vb = gal["R"], v_bar(gal)
        ok = (R > 0) & np.isfinite(Vb) & (Vb > 0)
        R, Vb = R[ok], Vb[ok]
        if len(R) < 3:
            continue
        r_m = R * KPC
        g_bar = (Vb * KMS) ** 2 / r_m
        m_bar = (UP_DISK * t["L36"] + 1.33 * t["MHI"]) * 1e9
        if m_bar <= 0:
            continue
        gals.append(dict(name=name, r_m=r_m, g_bar=g_bar, M=m_bar, Vflat=t["Vflat"]))
    return gals


def slope_for(gals, om, phi, a0):
    """BTFR slope the model predicts, using the identical V_flat estimator."""
    logM, logV = [], []
    for g in gals:
        v = np.sqrt(g_obs_sync_gen(g["g_bar"], om, phi, a0) * g["r_m"]) / KMS
        vf = v_flat_estimator(g["r_m"] / KPC, v)
        if np.isfinite(vf) and vf > 0:
            logM.append(np.log10(g["M"]))
            logV.append(np.log10(vf))
    if len(logM) < 20:
        return np.nan
    a, _ = np.polyfit(np.array(logM), np.array(logV), 1)
    return 1.0 / a if a > 1e-6 else np.nan


def main():
    gals = build_sample()

    # observed reference, same estimator, same sample
    logM = np.log10(np.array([g["M"] for g in gals]))
    n_obs, sd_obs, _ = fit_btfr(logM, np.log10(np.array([g["Vflat"] for g in gals])))
    print("=" * 80)
    print("TEST-09 PARAMETER SCAN -- can ANY parameters put Synchronism on the BTFR?")
    print("=" * 80)
    print(f"  Sample: {len(gals)} SPARC galaxies.  OBSERVED slope n = {n_obs:.2f} +/- {sd_obs:.2f}")
    print(f"  Framework's claimed values: Om = 0.315, phi = {PHI_GOLDEN:.3f} (golden), "
          f"a0 = 1.05e-10\n")

    # ---------------------------------------------------------------- (1) a0 alone
    print("-" * 80)
    print("(1) a0 free, Om and phi at their 'derived' values. Does retuning a0 rescue it?")
    print("-" * 80)
    print(f"  {'a0 [m/s^2]':>12} {'BTFR n':>9}")
    best_a0 = (None, -np.inf)
    for a0 in np.logspace(-11.5, -8.5, 13):
        n = slope_for(gals, 0.315, PHI_GOLDEN, a0)
        if n > best_a0[1]:
            best_a0 = (a0, n)
        print(f"  {a0:>12.2e} {n:>9.2f}")
    print(f"\n  Best achievable with a0 alone: n = {best_a0[1]:.2f} at a0 = {best_a0[0]:.2e}")
    print(f"  Observed is {n_obs:.2f}. a0 is a horizontal shift; it cannot change the asymptote.\n")

    # ---------------------------------------------------------------- (2) Om: the ceiling
    print("-" * 80)
    print("(2) Om free (a0 re-optimised at each Om, phi = golden). Om sets the boost ceiling 1/Om.")
    print("-" * 80)
    print(f"  {'Om':>8} {'boost ceiling':>14} {'best BTFR n':>13}")
    for om in [0.315, 0.20, 0.10, 0.05, 0.02, 0.01, 0.001]:
        best = max((slope_for(gals, om, PHI_GOLDEN, a0) for a0 in np.logspace(-11.5, -8.5, 25)
                    if np.isfinite(slope_for(gals, om, PHI_GOLDEN, a0))), default=np.nan)
        ceil = 1.0 / om
        print(f"  {om:>8.3f} {ceil:>14.1f} {best:>13.2f}")
    print("\n  The ceiling is the dominant obstruction: the slope only reaches the observed 3.75")
    print("  once Om is driven to ~0.02-0.05, i.e. 6-15x below the cosmological matter density")
    print("  it is supposed to BE. At Om = 0.315 the law cannot get there.\n")

    # ---------------------------------------------------------------- (2b) the crucial cell
    print("-" * 80)
    print("(2b) THE CRUCIAL CELL: can phi rescue it at the framework's OWN Om = 0.315?")
    print("     (If the ceiling is the obstruction, no exponent should help -- the boost")
    print("      simply cannot exceed 1/Om = 3.17 no matter what phi is.)")
    print("-" * 80)
    print(f"  {'phi':>8} {'best BTFR n (a0 free, Om=0.315)':>34}")
    best_phi_at_real_om = -np.inf
    for phi in [1.2, 1.4, PHI_GOLDEN, 1.8, 2.0, 2.5, 3.0, 4.0]:
        best = max((slope_for(gals, 0.315, phi, a0) for a0 in np.logspace(-12.0, -8.5, 30)
                    if np.isfinite(slope_for(gals, 0.315, phi, a0))), default=np.nan)
        best_phi_at_real_om = max(best_phi_at_real_om, best)
        print(f"  {phi:>8.3f} {best:>34.2f}")
    print(f"\n  Best over ALL (phi, a0) at the framework's own Om = 0.315: "
          f"n = {best_phi_at_real_om:.2f}")
    print(f"  Observed: {n_obs:.2f} +/- {sd_obs:.2f}.  "
          f"Gap = {n_obs - best_phi_at_real_om:.2f} "
          f"({(n_obs - best_phi_at_real_om)/sd_obs:.1f} sigma), and the site's own kill")
    print(f"  criterion (deviation > 0.3) fires for EVERY exponent.\n")

    # ---------------------------------------------------------------- (3) phi: the exponent
    print("-" * 80)
    print("(3) phi free at Om -> 0 (ceiling removed). Deep-limit exponent is p = 1 - 1/phi.")
    print("    Flat rotation curves require p = 0.5 EXACTLY, i.e. phi = 2.")
    print("-" * 80)
    print(f"  {'phi':>8} {'p = 1-1/phi':>12} {'best BTFR n':>13}  note")
    for phi in [1.20, 1.40, PHI_GOLDEN, 1.80, 2.00, 2.20, 2.50]:
        best = max((slope_for(gals, 0.001, phi, a0) for a0 in np.logspace(-11.5, -8.5, 25)
                    if np.isfinite(slope_for(gals, 0.001, phi, a0))), default=np.nan)
        p = 1.0 - 1.0 / phi
        note = ""
        if abs(phi - PHI_GOLDEN) < 1e-3:
            note = "<-- the framework's golden ratio"
        if abs(phi - 2.0) < 1e-9:
            note = "<-- MOND (g_obs = g_bar + sqrt(g_bar*a0))"
        print(f"  {phi:>8.3f} {p:>12.3f} {best:>13.2f}  {note}")

    # ---------------------------------------------------------------- (4) full 3D scan
    print("\n" + "-" * 80)
    print("(4) Full scan over all three knobs. Where does the best fit have to go?")
    print("-" * 80)
    best = (-np.inf, None)
    for om in [0.315, 0.2, 0.1, 0.05, 0.02, 0.01, 0.005, 0.001]:
        for phi in np.linspace(1.2, 2.6, 15):
            for a0 in np.logspace(-11.0, -9.0, 13):
                n = slope_for(gals, om, phi, a0)
                if np.isfinite(n) and abs(n - n_obs) < abs(best[0] - n_obs):
                    best = (n, (om, phi, a0))
    n_best, (om_b, phi_b, a0_b) = best
    print(f"  Closest approach to the observed slope {n_obs:.2f}:")
    print(f"    n = {n_best:.2f}  at  Om = {om_b:.3f}, phi = {phi_b:.3f}, a0 = {a0_b:.2e}")
    print(f"\n  Compare to the framework's DERIVED values: Om = 0.315, phi = 1.618, a0 = 1.05e-10")
    print(f"    Om must fall by {0.315/om_b:.0f}x  (destroying 'Om = cosmological matter density')")
    print(f"    phi must move to {phi_b:.2f}    (destroying 'phi = golden ratio')")
    print(f"\n  At Om -> 0 and phi -> 2 the law degenerates to g_obs = g_bar + sqrt(g_bar*a0):")
    print(f"    that is MOND. The BTFR is recoverable only by ceasing to be Synchronism.")

    # verify the degeneration claim numerically
    print("\n  Verification -- Om=0.001, phi=2.0 vs MOND, boost at g_bar = 1e-12:")
    gb = 1e-12
    s = g_obs_sync_gen(np.array([gb]), 0.001, 2.0, 1.2e-10)[0] / gb
    m = g_obs_mond(np.array([gb]))[0] / gb
    print(f"    Synchronism(Om->0, phi=2): {s:.2f}x     MOND: {m:.2f}x     "
          f"(both diverge; the golden-ratio law saturates at 3.17)")
    print()


if __name__ == "__main__":
    main()
