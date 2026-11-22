#!/usr/bin/env python3
"""BBN sees the density-keyed law's "invisible" absolute boost (maintainer 2026-11-22).

Claim under test (visitor log 2026-11-22, researcher persona, numbers from recall):
  /wide-binaries says "no local measurement sees an absolute boost ... laboratory G is
  measured at the same smoothed density, so G_lab already equals G/C(rho_s)". True
  locally. But at BBN the density is ~1e19 Msun/pc^3, far above every knee, so C = 1 and
  G_BBN = G_bare. Hence

      G_BBN / G_lab = C(rho_local)            (rho_local ~ 0.09 Msun/pc^3, smoothed >= pc)

  is the absolute boost, read through cosmic time instead of a local ratio.

Bound (retrieved 2026-11-22, abstract verbatim):
  Alvey, Sabti, Escudero & Fairbairn, EPJC 80, 148 (2020), arXiv:1910.10730:
  "G_BBN/G_0 = 0.99^{+0.06}_{-0.05} at 2 sigma".  -> 1 sigma lower half-width 0.025.
  Copi, Davis & Krauss, PRL 92, 171301 (2004), astro-ph/0311334:
  "G_BBN/G_0 = 1.01^{+0.20}_{-0.16} at the 68.3% confidence level" (weaker; shown too).

Condition: applies only if density is smoothed over a scale >= the one that puts the
laboratory and the solar neighbourhood at one density (the reading the galaxy fits and the
/wide-binaries amplitudes use). Under pointwise density lab G sits at Earth's density
(C = 1) and this argument says nothing.

PREDICTIONS (written before running; committed with this file):
  P1. Archive knee 0.42 (0.028*V^0.5 at MW): excluded > 10 sigma under Alvey, both gamma,
      both floored and unfloored C.
  P2. Velocity-blind knee 0.161: excluded > 5 sigma, both gamma, both forms.
  P3. RG elliptical knee 0.0083, gamma = 0.489: excluded at 4-8 sigma (floored form, which
      is the form the /wide-binaries +9.4% uses); gamma = 2 at that knee passes (< 1 sigma).
  P4. BBN-era C at the archive knee is 1 to better than 1e-6 (both gamma).
"""
import math

OM = 0.315
RHO_LOCAL = 0.09          # Msun/pc^3, the /wide-binaries value
# BBN-era matter density: rho_m0 * (1+z)^3 at T ~ 0.1 MeV (z ~ 4e8)
RHO_C0 = 2.775e11 * 0.674**2 / 1e18   # Msun/pc^3
RHO_M0 = OM * RHO_C0
Z_BBN = 4.0e8

ALVEY_CENTRAL, ALVEY_SIG_LO = 0.99, 0.05 / 2   # 2 sigma lower half-width -> 1 sigma
COPI_CENTRAL, COPI_SIG_LO = 1.01, 0.16          # already 68.3%

def c_unfloored(rho, knee, g):
    return math.tanh(g * math.log(1 + rho / knee))

def c_floored(rho, knee, g):
    return OM + (1 - OM) * c_unfloored(rho, knee, g)

KNEES = [("archive 0.028*V^0.5 (MW)", 0.42), ("velocity-blind (measured)", 0.161),
         ("RG elliptical", 0.0083)]
GAMMAS = [2.0, 0.489]

rho_bbn = RHO_M0 * (1 + Z_BBN) ** 3
print(f"rho_m at BBN (z={Z_BBN:.0e}) = {rho_bbn:.2e} Msun/pc^3")
print()
hdr = f"{'knee':28s} {'gamma':>6s} {'form':>10s} {'C_local':>8s} {'boost 1/C':>9s} {'v excess':>9s} {'C_BBN':>12s} {'z Alvey':>8s} {'z Copi':>7s}"
print(hdr)
print("-" * len(hdr))
for name, knee in KNEES:
    for g in GAMMAS:
        for form, fn in (("floored", c_floored), ("unfloored", c_unfloored)):
            c_loc = fn(RHO_LOCAL, knee, g)
            c_bbn = fn(rho_bbn, knee, g)
            ratio = c_loc / c_bbn            # predicted G_BBN / G_lab
            z_a = (ALVEY_CENTRAL - ratio) / ALVEY_SIG_LO
            z_c = (COPI_CENTRAL - ratio) / COPI_SIG_LO
            vex = (1 / math.sqrt(c_loc) - 1) * 100
            print(f"{name:28s} {g:6.3f} {form:>10s} {c_loc:8.4f} {1/c_loc:9.3f} {vex:8.1f}% {1-c_bbn:12.1e} {z_a:8.1f} {z_c:7.1f}")
print()
print("z = (central - predicted G_BBN/G_lab) / (1-sigma lower half-width); positive = prediction below the data.")
print("C_BBN column shows 1 - C at BBN (0 means C = 1 to double precision).")
