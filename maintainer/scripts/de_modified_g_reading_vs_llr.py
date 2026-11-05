#!/usr/bin/env python3
"""
Does the modified-G reading of the DE sector survive lunar laser ranging?  (maintainer 2026-11-05)

Origin: visitor researcher persona 2026-11-05 (HIGH). The DE sector builds H^2 = 8 pi G rho_m / (3 C(rho_bar_m)).
Read as a fluid (gravity unmodified) it is Cardassian-class dark energy. Read as modified gravity, G_eff = G / C(rho_bar_m(t)),
the same G/C that the "uniform G/C" growth row (/dark-energy #growth-readings) applies to perturbations. If that G_eff is
the G that binds the Earth-Moon system, it drifts with the cosmic mean density:
    Gdot/G = -Cdot/C = -(dlnC/dln rho) * dln rho/dt = 3 H0 * (dlnC/dln rho)|_today       (rho_m ~ a^-3)

Calibration: C0 = Omega_m (Session 100), i.e. x0 = rho_bar/rho_crit solves tanh(gamma ln(1+x0)) = Omega_m.
At gamma = 1/2, C = x/(x+2) and dlnC/dlnx = 2/(x+2) = 1 - C = 1 - Omega_m exactly.

PREDICTIONS (written before running; the gamma = 1/2 value was done by hand from the identity above):
  P1. gamma = 1/2: Gdot/G = 3 (1 - Omega_m) H0 = 1.4e-10 /yr (H0 = 67.4), ~1,900x the LLR central value and
      > 500x the LLR 2-sigma upper edge (7.1 + 2*7.6 = 22.3e-14 /yr).
  P2. Over gamma in [0.3, 3] the factor dlnC/dln rho stays O(0.3-1), so every gamma is excluded by > 100x.
  P3. Sign: Gdot/G > 0 (C falls as rho_bar falls, G_eff rises) for every gamma.
Identity control: at gamma = 1/2 the numeric derivative must equal 1 - Omega_m to < 1e-6.

Scope: this tests only the reading in which the cosmic-mean G/C is the G of local dynamics. The fluid reading (gravity
unmodified) has Gdot = 0 and is untouched. The local-density reading is the 2026-09-24 LLR exclusion (68/74 laws).
LLR: Hofmann & Mueller 2018, Gdot/G = (7.1 +/- 7.6)e-14 /yr (number as quoted on /for-researchers; not re-read here).
"""
import math

OM = 0.315
H0_KMSMPC = 67.4
MPC_KM = 3.0857e19
YR_S = 3.15576e7
H0 = H0_KMSMPC / MPC_KM * YR_S          # per year
LLR_C, LLR_S = 7.1e-14, 7.6e-14


def C(x, g):
    return math.tanh(g * math.log1p(x))


def solve_x0(g):
    lo, hi = 1e-12, 1e12
    for _ in range(300):
        mid = math.sqrt(lo * hi)
        if C(mid, g) < OM:
            lo = mid
        else:
            hi = mid
    return math.sqrt(lo * hi)


def dlnC_dlnx(x, g, h=1e-6):
    return (math.log(C(x * math.exp(h), g)) - math.log(C(x * math.exp(-h), g))) / (2 * h)


print(f"H0 = {H0:.4e} /yr; LLR {LLR_C:.1e} +/- {LLR_S:.1e} /yr (2-sigma upper {LLR_C + 2 * LLR_S:.2e})")
x_half = solve_x0(0.5)
d_half = dlnC_dlnx(x_half, 0.5)
print(f"IDENTITY gamma=1/2: x0 = {x_half:.6f} (expect 2*Om/(1-Om) = {2 * OM / (1 - OM):.6f}); "
      f"dlnC/dlnx = {d_half:.8f} vs 1-Om = {1 - OM:.8f}; diff {abs(d_half - (1 - OM)):.1e}")
print(f"{'gamma':>6} {'x0':>11} {'dlnC/dlnrho':>12} {'Gdot/G [/yr]':>13} {'/LLR central':>13} {'/LLR 2sig up':>13}")
worst = None
for g in [0.3, 0.4, 0.45, 0.487, 0.5, 0.55, 0.6, 0.8, 1.0, 1.5, 2.0, 3.0]:
    x0 = solve_x0(g)
    d = dlnC_dlnx(x0, g)
    gdot = 3 * H0 * d
    r1, r2 = gdot / LLR_C, gdot / (LLR_C + 2 * LLR_S)
    worst = r2 if worst is None else min(worst, r2)
    print(f"{g:6.3f} {x0:11.4e} {d:12.4f} {gdot:13.3e} {r1:13.0f} {r2:13.0f}")
print(f"Smallest exclusion factor over the grid (vs 2-sigma upper edge): {worst:.0f}x")
