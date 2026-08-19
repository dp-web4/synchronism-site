#!/usr/bin/env python3
"""
COMPLETION B AT CASSINI-ALLOWED omega -- executed, not complained about.

Origin: visitor 2026-08-19 Pass 4 (Leading-Edge Researcher), friction item
"/honest-assessment (Completion B)":

    "Brans-Dicke omega scanned over {0, 1, 5, 50}; Cassini requires omega >~ 4e4
     for an unscreened scalar (Bertotti, Iess & Tortora 2003).  No solar-system
     bound on omega is mentioned, while the same spacecraft is cited for TEST-25."

VERIFIED AGAINST SOURCE FIRST (per the persona-verification rule): the grid really
is {0, 1, 5, 50} --
    explorer/findings/scripts/fit_gamma_family_to_desi_dr2.py:531
    explorer/findings/scripts/covariant_00_component_sign_lock_audit.py:355
and no solar-system bound appears in either script or on /dark-energy or
/honest-assessment (grep: no "Cassini", no "PPN", no "Bertotti" in the DE sections).

THE ARITHMETIC (analytic, no data needed)
-----------------------------------------
Brans-Dicke:      gamma_PPN = (1 + omega) / (2 + omega)
                  => gamma_PPN - 1 = -1 / (2 + omega)
Cassini (Bertotti, Iess & Tortora 2003, Nature 425, 374):
                  gamma_PPN - 1 = (2.1 +/- 2.3) x 10^-5
2-sigma interval: [-2.5, +6.7] x 10^-5.  Since gamma_PPN - 1 < 0 for omega > 0,
the binding side is  1/(2 + omega) <= 2.5e-5  =>  omega >= 4.0e4.

WHY THIS SCRIPT EXISTS RATHER THAN A FRICTION TICKET
----------------------------------------------------
"The grid is too small" is a complaint.  The question that decides anything is:
*** does the 0/192 no-go SURVIVE at Cassini-allowed omega, or does the completion
    become viable up there? ***
Both answers matter and they point opposite ways:
  - no-go survives  => the DESI framing is REDUNDANT; the completion was already
                       dead in 2003 and the site should say so (cleaner no-go).
  - no-go fails     => the published 0/192 is an artifact of scanning a region
                       PPN excludes, and the DE sector's headline result is wrong.

There is also a third possibility that neither the visitor nor the site raised, and
PART C shows it is the one that actually obtains.

Reuses the 2026-08-11/08-12 implementations verbatim so numbers are comparable.
"""

import os
import sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

from fit_gamma_family_to_desi_dr2 import (      # noqa: E402
    C_of_x, eps_of_x, B_of_x, Ceff_of_x, x0_completionB, x0_substituted,
)
from scipy.optimize import brentq               # noqa: E402


def hdr(s):
    print("\n" + "=" * 78)
    print(s)
    print("=" * 78)


# ------------------------------------------------------------------ PART A
def part_a():
    hdr("PART A -- THE CASSINI BOUND ON THE SCANNED GRID")
    print("""
  gamma_PPN = (1 + omega)/(2 + omega)   =>   gamma_PPN - 1 = -1/(2 + omega)
  Cassini 2003:  gamma_PPN - 1 = (2.1 +/- 2.3)e-5,  2-sigma [-2.5, +6.7]e-5
""")
    print(f"  {'omega':>10}{'gamma_PPN - 1':>18}{'|dev| / 2sigma-allowed':>26}{'':>6}")
    for om in (0.0, 1.0, 5.0, 50.0, 1e3, 1e4, 4e4, 1e5, 1e6):
        dev = -1.0 / (2.0 + om)
        ratio = abs(dev) / 2.5e-5
        tag = "EXCLUDED" if ratio > 1 else "allowed"
        print(f"  {om:>10.0f}{dev:>18.3e}{ratio:>26.1f}x  {tag}")
    om_min = 1.0 / 2.5e-5 - 2.0
    print(f"\n  omega_min (Cassini, 2 sigma, unscreened massless BD) = {om_min:.3g}")
    print(f"  scanned grid maximum                                  = 50")
    print(f"  the published scan sits a factor {om_min/50:.0f} inside the excluded region")
    return om_min


# ------------------------------------------------------------------ PART B
def part_b(om_min):
    hdr("PART B -- DOES THE NO-GO SURVIVE AT CASSINI-ALLOWED omega?")
    print("""
  Re-run the completion-B construction at omega values the solar system allows.
  The DESI-quadrant question is a SIGN question about the effective equation of
  state, so it is decided by w_DE(z) = dln(rho_DE)/dln a / (-3) - 1 evaluated on
  the completed background.  Here we use the site's own diagnostic: the departure
  of C_eff from C, which is what the omega term controls.
""")
    print(f"  {'omega':>10}{'gamma':>8}{'x0':>14}{'B(x0)':>12}"
          f"{'C_eff(x0)':>12}{'|B-1|':>12}")
    C0 = 0.315 / (1.0 - 8.5e-5)     # same closure as the 08-12 fit
    for om in (0.0, 1.0, 5.0, 50.0, 1e3, 1e4, 4e4, 1e6):
        for g in (0.489, 0.5, 2.0):
            try:
                x0 = x0_completionB(g, om, C0)
            except (ValueError, RuntimeError):
                print(f"  {om:>10.0f}{g:>8.3f}{'no solution':>14}")
                continue
            B = B_of_x(x0, g, om)
            print(f"  {om:>10.0f}{g:>8.3f}{x0:>14.4e}{B:>12.6f}"
                  f"{Ceff_of_x(x0, g, om):>12.6f}{abs(B-1):>12.3e}")
    print("""
  READ THE |B-1| COLUMN.  B(x) = 1 - 3 eps - 1.5 omega eps^2 is the ONLY place
  omega enters the background.  The completion's entire departure from the
  substituted model is carried by B.
""")


# ------------------------------------------------------------------ PART C
def part_c(om_min):
    hdr("PART C -- THE LIMIT NOBODY TOOK: WHAT IS COMPLETION B AT LARGE omega?")
    print("""
  Standard Brans-Dicke fact: as omega -> inf the scalar decouples and BD -> GR.
  If completion B inherits that, then at every Cassini-allowed omega it collapses
  onto some omega-independent limit, and the question "does the no-go survive at
  omega >= 4e4" has a structural answer instead of a numerical one.

  eps(x) is fixed by gamma alone (no omega).  The BD pinning condition that sets
  x0 is eps(x0) = eps_crit(omega) with

      eps_crit(omega) = (-3 + sqrt(9 + 6 omega)) / (3 omega)   ->   0 as omega -> inf

  so the pinning point runs to wherever eps -> 0.  Track it.
""")
    print(f"  {'omega':>10}{'eps_crit':>14}{'x0(g=0.489)':>16}"
          f"{'C(x0)':>12}{'C_eff(x0)':>12}{'ratio':>10}")
    g = 0.489
    C0 = 0.315 / (1.0 - 8.5e-5)
    prev = None
    for om in (0.0, 1.0, 5.0, 50.0, 1e3, 1e4, 4e4, 1e5, 1e6, 1e8):
        eps_crit = (1.0 / 3.0 if om == 0.0
                    else (-3.0 + np.sqrt(9.0 + 6.0 * om)) / (3.0 * om))
        try:
            x0 = x0_completionB(g, om, C0)
        except (ValueError, RuntimeError):
            print(f"  {om:>10.0f}{eps_crit:>14.3e}{'no solution':>16}")
            continue
        C = C_of_x(x0, g)
        Ce = Ceff_of_x(x0, g, om)
        print(f"  {om:>10.0f}{eps_crit:>14.3e}{x0:>16.4e}"
              f"{C:>12.6f}{Ce:>12.6f}{Ce/C:>10.6f}")
        prev = (x0, C, Ce)

    x0s = x0_substituted(g, C0)
    print(f"\n  substituted model (no completion) at gamma={g}: x0 = {x0s:.4e}")
    if prev:
        print(f"  completion B at omega = 1e8:                    x0 = {prev[0]:.4e}")
        print(f"  ratio x0(compB, omega->inf) / x0(subst)         = "
              f"{prev[0]/x0s:.6f}")


# ------------------------------------------------------------------ PART D
def part_d():
    hdr("PART D -- THE FORK, AND WHY BOTH HORNS COST THE SITE SOMETHING")
    print("""
  HORN (a) -- the scalar is an unscreened massless Brans-Dicke field.
      Then Cassini applies and omega >= 4e4.  PART C shows what the completion
      does up there.  Whatever the DESI verdict is, it is decided by 2003
      solar-system data BEFORE DESI is consulted: the published grid {0,1,5,50}
      is a scan over models that were already excluded.  The 0/192 no-go is then
      REDUNDANT, not wrong -- and redundancy is worth stating, because a cleaner
      no-go (dead in 2003) replaces a weaker one (disfavoured by DR2).

  HORN (b) -- "pinned to its algebraic trajectory" means C is held to a
      prescribed function of rho by some potential.
      A potential that pins a field to the ambient density gives it an effective
      MASS, hence Yukawa suppression in the solar system, hence PPN evasion --
      this is chameleon/symmetron logic and it is a real escape.
      BUT: the background used in the fit is
             B(x) = 1 - 3 eps - 1.5 omega eps^2
      which is the MASSLESS BD scalar's energy density.  A potential term V(C)
      contributes to B and is absent from it.  So horn (b) does not rescue the
      analysis -- it INVALIDATES it: the same masslessness that makes Cassini
      apply is the assumption that produced the B(x, omega) the scan integrates.

  *** The scan cannot be simultaneously PPN-safe and self-consistent. ***
  That is stronger than the visitor's version (which offered horn (b) as merely
  "not a covariant completion a referee would accept"), and it is a statement
  about the site's own code, not about taste.
""")


def main():
    print(__doc__)
    om_min = part_a()
    part_b(om_min)
    part_c(om_min)
    part_d()


if __name__ == "__main__":
    main()


# ------------------------------------------------------------------ PART E
def part_e():
    hdr("PART E -- THE BACKGROUND TRAJECTORY AT CASSINI-ALLOWED omega")
    print("""
  PART C showed the PINNING POINT runs away (x0: 0.95 -> 6.7e2 -> 3.5e4) while
  C_eff(x0) is held at C0 = 0.315 by the closure.  The DESI-quadrant question is
  not about x0 though -- it is about the SHAPE of C_eff(z), because

      E^2(z) = Om (1+z)^3 / C_eff(x0 (1+z)^3) + Or (1+z)^4

  and the implied dark-energy sector is whatever the departure of C_eff from 1
  does as a function of z.  Print the trajectory.
""")
    g = 0.489
    C0 = 0.315 / (1.0 - 8.5e-5)
    zs = [0.0, 0.3, 0.5, 1.0, 2.0, 5.0, 10.0]
    print(f"  {'omega':>10}" + "".join(f"{'C_eff(z=' + str(z) + ')':>15}" for z in zs))
    traj = {}
    for om in (0.0, 5.0, 50.0, 4e4, 1e6):
        try:
            x0 = x0_completionB(g, om, C0)
        except (ValueError, RuntimeError):
            continue
        row = [Ceff_of_x(x0 * (1 + z) ** 3, g, om) for z in zs]
        traj[om] = row
        print(f"  {om:>10.0f}" + "".join(f"{v:>15.6f}" for v in row))

    print("\n  Implied rho_DE(z)/rho_DE(0), where rho_DE is defined by")
    print("  E^2 = Om(1+z)^3 + Or(1+z)^4 + rho_DE/rho_c0  (the site's own split):\n")
    om_m, orad = 0.315, 8.5e-5
    print(f"  {'omega':>10}" + "".join(f"{'z=' + str(z):>13}" for z in zs))
    for om, row in traj.items():
        de = []
        for z, Ce in zip(zs, row):
            E2 = om_m * (1 + z) ** 3 / Ce + orad * (1 + z) ** 4
            de.append(E2 - om_m * (1 + z) ** 3 - orad * (1 + z) ** 4)
        de0 = de[0]
        print(f"  {om:>10.0f}" + "".join(f"{d/de0:>13.5f}" for d in de))
    print("""
  A COSMOLOGICAL CONSTANT is the flat row 1.00000 ... 1.00000.
  MATTER-LIKE dilution is (1+z)^3 = 1, 2.2, 3.4, 8, 27, 216, 1331.
""")
    # w_DE(z) from the DE trajectory
    print("  Effective w_DE(z) = -1 + (1/3) dln(rho_DE)/dln(1+z):\n")
    print(f"  {'omega':>10}" + "".join(f"{'z=' + str(z):>13}" for z in zs[:-1]))
    for om, row in traj.items():
        de = []
        for z, Ce in zip(zs, row):
            E2 = om_m * (1 + z) ** 3 / Ce + orad * (1 + z) ** 4
            de.append(E2 - om_m * (1 + z) ** 3 - orad * (1 + z) ** 4)
        ws = []
        for i in range(len(zs) - 1):
            dl = (np.log(abs(de[i + 1])) - np.log(abs(de[i]))) / \
                 (np.log(1 + zs[i + 1]) - np.log(1 + zs[i]))
            ws.append(-1.0 + dl / 3.0)
        print(f"  {om:>10.0f}" + "".join(f"{w:>13.4f}" for w in ws))
    print("""
  DESI DR2 prefers w0 > -1 WITH wa < 0, i.e. w RISING above -1 today and FALLING
  with z.  Read the rows: sign of (w(z=0) + 1) and the sign of dw/dz.
""")


if __name__ == "__main__":
    part_e()
