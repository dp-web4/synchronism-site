#!/usr/bin/env python3
"""
Does the weak-lensing RAR exclude the bounded boost under EVERY ceiling convention,
including a hidden-baryon allowance? (maintainer 2026-09-25)

Context. The site carries "TEST-09/TEST-10 are convention-dependent; whether they stay in the
count of 6 is pending dp". The explorer's 2026-09-02 finding (§5, scripts/eps0_mass_relation_
treatment_b_and_lensing.py) already set the ceiling against Brouwer+2021's KiDS-1000 isolated-lens
RAR, which follows the extrapolated MOND branch from g_bar = 5e-12 down to ~1e-15 m/s^2. That
finding's gas allowance ("a factor-2 gas correction moves nu by sqrt 2") takes the MOND
re-prediction view. For a CEILING the relevant quantity is the boost the data REQUIRE on the true
baryons: B_req = g_obs / (f * g_bar_obs) = nu_obs / f, where f multiplies the observed baryons.
So hidden gas divides the requirement by f, not sqrt(f). This script redoes the table that way.

Registered before running (not blind: the maintainer hand-estimated the f=1 and f=5 values at
1e-14 while reading the visitor log):
  P1. At f = 1 every convention cap (3.175, 5.389, 6.389) is exceeded by >= 5x at g_bar <= 1e-13.
  P2. At f = 5 (every cosmic baryon inside the radius) and a 0.3 dex downward allowance on g_obs,
      the 6.389 cap is still exceeded at g_bar = 1e-14 (ratio > 1).
  P3. The no-CDM reading of the floor (C_min = Omega_b, B_max = 1/Omega_b = 20.3) is NOT excluded
      at 1e-14 with f = 5, and IS excluded at 1e-15 with f = 5 (i.e. it hinges on the lowest bin).
Verdict rule: the "convention-dependent" label on the ceiling is retired iff P1 and P2 hold.

Inputs are published parameters only; the observed RAR is represented by the MOND simple-nu
branch (Brouwer+2021's statement that the lensing RAR follows it; not re-read by this script —
no network in the sandbox). A downward allowance delta (dex) covers the data sitting below it.
"""
import numpy as np

A0 = 1.2e-10          # m s^-2 (McGaugh+2016)
OM, OB = 0.315, 0.0493
G = 6.674e-11
MSUN = 1.989e30
KPC = 3.086e19

CAPS = {
    "1/Omega_m (site)":             1 / OM,
    "(Omega_m-Omega_b)/Omega_b":    (OM - OB) / OB,
    "Omega_m/Omega_b (baryon budget)": OM / OB,
    "1/Omega_b (no-CDM floor)":     1 / OB,
}

def nu_simple(gbar):
    y = gbar / A0
    return 0.5 + np.sqrt(0.25 + 1 / y)

def radius_kpc(gbar, mbar):
    return np.sqrt(G * mbar * MSUN / gbar) / KPC

def main():
    gbars = [1e-12, 1e-13, 1e-14, 1e-15]
    print("identity control: nu_simple(A0) =", round(nu_simple(A0), 4), "(expect 1.618)")
    print("caps:", {k: round(v, 3) for k, v in CAPS.items()})
    print()
    print("radius at which g_bar is reached (point mass):")
    for m in (1e10, 1e11):
        print(f"  M_bar={m:.0e}:", ", ".join(f"{g:.0e}->{radius_kpc(g, m):.0f} kpc" for g in gbars))
    print()
    for delta in (0.0, 0.3):
        for f in (1, 2, 5):
            print(f"--- data allowance {delta} dex below MOND, hidden-baryon factor f = {f} ---")
            for g in gbars:
                breq = nu_simple(g) * 10 ** (-delta) / f
                row = "  ".join(f"{breq / c:6.2f}" for c in CAPS.values())
                print(f"  g_bar={g:.0e}: B_req={breq:7.2f}   B_req/cap: {row}")
    print()
    print("f needed to bring B_req down to each cap (delta = 0.3 dex):")
    for g in gbars:
        nu = nu_simple(g) * 10 ** (-0.3)
        print(f"  g_bar={g:.0e}: " + "  ".join(f"{k.split(' ')[0]}: {nu / c:5.1f}" for k, c in CAPS.items()))

    # verdicts
    p1 = all(nu_simple(g) / c >= 5 for g in (1e-13, 1e-14, 1e-15)
             for k, c in CAPS.items() if "no-CDM" not in k)
    p2 = nu_simple(1e-14) * 10 ** -0.3 / 5 / CAPS["Omega_m/Omega_b (baryon budget)"] > 1
    nc = CAPS["1/Omega_b (no-CDM floor)"]
    p3 = (nu_simple(1e-14) * 10 ** -0.3 / 5 / nc <= 1) and (nu_simple(1e-15) * 10 ** -0.3 / 5 / nc > 1)
    print()
    print(f"P1 (f=1, all convention caps exceeded >=5x at <=1e-13): {'HELD' if p1 else 'FAILED'}")
    print(f"P2 (f=5, -0.3 dex, 6.389 still exceeded at 1e-14):     {'HELD' if p2 else 'FAILED'}")
    print(f"P3 (no-CDM 20.3 survives 1e-14@f=5, dies 1e-15@f=5):     {'HELD' if p3 else 'FAILED'}")
    print("Verdict:", "convention label RETIRED (lensing excludes every Omega_m-based cap)" if (p1 and p2)
          else "convention label STANDS")

if __name__ == "__main__":
    main()
