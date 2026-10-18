"""Density-keyed C(rho) read pointwise inside a laboratory vacuum chamber (2026-10-18).

Question (simulated-visitor researcher persona, visitor log 2026-10-18): the density-keyed law
g_eff = g_N / C(rho) is screened-modified-gravity phenomenology (Newtonian when dense, enhanced
when sparse). What does it predict for a test mass in a vacuum chamber, and does that force the
averaging scale?

Predictions written before running (maintainer, same session):
  P1  Even UHV residual gas is denser than every galaxy knee on file (x = rho/rho_c >> 1), so the
      effect is a small fractional excess 1/C - 1 ~ 2 x^(-2 gamma), not the huge low-density boost.
  P2  At gamma = 0.489 the UHV excess is ~1e-5 g; at gamma = 2 it is < 1e-15 (invisible).
  P3  The FG5-class (1e-4 Pa) vs atom-gravimeter (1e-8 Pa) difference at gamma = 0.489 exceeds the
      ~1e-9 g level at which such instruments are compared, for every knee in the joint window.
  P4  None of this matters at a smoothing length l >~ 30 AU (the planetary bound, PREDICTIONS
      2026-09-15), because no chamber is resolved at that scale.

Inputs are round numbers; this is an order-of-magnitude estimate, not an execution against data.
C is the unfloored density-keyed C_rho = tanh(gamma ln(1+x)) (PREDICTIONS 2026-09-18: C_rho has no floor).
"""
import math

K_B = 1.380649e-23        # J/K
AMU = 1.66053907e-27      # kg
MSUN_PC3 = 1.98847e30 / (3.0857e16) ** 3   # kg/m^3 per Msun/pc^3

def gas_density(p_pa, mass_amu, T=295.0):
    return p_pa / (K_B * T) * mass_amu * AMU

def C(x, g):
    return math.tanh(g * math.log1p(x))

# knees on file: joint Oort/GC window at gamma 0.489 (0.0039-0.0079) and gamma 2 (0.0735-0.078),
# the measured Jeans knee 0.161, the RG elliptical calibration 0.0083 (Msun/pc^3)
KNEES = {0.489: [0.0039, 0.0079, 0.161], 2.0: [0.0735, 0.078, 0.161]}
CHAMBERS = [("FG5-class dropping chamber, 1e-4 Pa, N2", 1e-4, 28),
            ("atom gravimeter UHV, 1e-8 Pa, H2", 1e-8, 2),
            ("best UHV, 1e-10 Pa, H2", 1e-10, 2)]
AIR = ("laboratory air", 1.0e5, 29)

print("1 Msun/pc^3 = %.3e kg/m^3" % MSUN_PC3)
for name, p, m in CHAMBERS + [AIR]:
    print("%-42s rho = %.2e kg/m^3 = %.2e Msun/pc^3" % (name, gas_density(p, m), gas_density(p, m) / MSUN_PC3))
print()
print("excess 1/C - 1 (fractional increase of g over Newton), pointwise reading")
for g, knees in KNEES.items():
    for rc in knees:
        row = []
        for name, p, m in CHAMBERS:
            x = gas_density(p, m) / MSUN_PC3 / rc
            row.append(1.0 / C(x, g) - 1.0)
        diff = row[1] - row[0]
        print("gamma=%-5s rho_c=%-7s  FG5 %.2e  atomUHV %.2e  1e-10Pa %.2e   atom-FG5 %.2e" % (g, rc, row[0], row[1], row[2], diff))
print()
# identity control: in air the law must be Newtonian to far below 1e-9
for g, knees in KNEES.items():
    x = gas_density(AIR[1], AIR[2]) / MSUN_PC3 / min(knees)
    print("control, air, gamma=%s: 1/C - 1 = %.1e" % (g, 1.0 / C(x, g) - 1.0))
