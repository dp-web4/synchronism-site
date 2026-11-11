#!/usr/bin/env python3
"""Which acceleration is the argument of C in the 'EFE-free corner', and which potential does light follow?

PREREG: efe_free_corner_which_acceleration_PREREG.md (site commit 3d53a42, before this file).
Not blind: the hand estimate preceded the PREREG. This is the numerical check with controls.

Corner: g_N = g * tanh(gamma * ln(1 + g/a0p)), a0p = gamma * a_M, a_M = 1.1e-10 m/s^2.
Reading (I): g = internal relative acceleration of a chosen system (what the site ran).
Reading (T): g = each body's total acceleration; g_N = total Newtonian field at the body.
"""
import numpy as np
from scipy.integrate import solve_ivp

GM = 1.32712440018e20          # m^3/s^2
AU = 1.495978707e11
A_SAT, E_SAT = 9.5826 * AU, 0.0565
A_M = 1.1e-10
CY = 100 * 365.25 * 86400.0
MAS = np.degrees(1) * 3600e3   # mas per rad
EPM_VAL, EPM_ERR = -0.32, 0.47 # mas/cy, EPM2011 Saturn (as used 2026-10-16)
LON_GC, LON_PERI = 266.8, 92.4 # ecliptic longitudes, deg


def C(g, gam):
    return np.tanh(gam * np.log1p(g / (gam * A_M)))


def nu_and_L(g, gam):
    """nu = g/g_N at true acceleration g; L = dln nu / dln g_N."""
    x = g / (gam * A_M)
    c = C(g, gam)
    s = x * gam * (1 - c * c) / ((1 + x) * c)      # dlnC/dln g
    return 1 / c, -s / (1 + s)


def peri_rate(Ax, Ay, norb=12):
    """Secular perihelion rate (mas/cy) of Saturn under a uniform acceleration (Ax, Ay); x along perihelion."""
    n = np.sqrt(GM / A_SAT**3)
    T = 2 * np.pi / n
    r0 = A_SAT * (1 - E_SAT)
    v0 = np.sqrt(GM / A_SAT * (1 + E_SAT) / (1 - E_SAT))

    def rhs(t, y):
        r3 = (y[0]**2 + y[1]**2) ** 1.5
        return [y[2], y[3], -GM * y[0] / r3 + Ax, -GM * y[1] / r3 + Ay]

    ts = np.arange(0, norb + 1) * T
    sol = solve_ivp(rhs, (0, ts[-1]), [r0, 0, 0, v0], t_eval=ts, method="DOP853", rtol=1e-12, atol=1e-3)
    x, y, vx, vy = sol.y
    h = x * vy - y * vx
    r = np.hypot(x, y)
    ex = vy * h / GM - x / r
    ey = -vx * h / GM - y / r
    w = np.unwrap(np.arctan2(ey, ex))
    return np.polyfit(ts, w, 1)[0] * CY * MAS, np.polyfit(ts, np.hypot(ex, ey), 1)[0] * CY


print("=== Controls ===")
r0, _ = peri_rate(0.0, 0.0)
print(f"C1 zero perturbation: {r0:+.2e} mas/cy  ({'PASS' if abs(r0) < 0.01 else 'FAIL'})")
n = np.sqrt(GM / A_SAT**3)
A_test = 5e-11
formula = 1.5 * A_test * np.sqrt(1 - E_SAT**2) / (n * A_SAT * E_SAT) * CY * MAS
num, _ = peri_rate(A_test, 0.0)
print(f"C2 force along apsidal line, A = 5e-11: numerical {num:+.4e}, secular formula magnitude {formula:.4e} mas/cy, "
      f"ratio {abs(num) / formula:.3f}  ({'PASS' if abs(abs(num) / formula - 1) < 0.05 else 'FAIL'})")
row = []
for ge in (1.6e-10, 1.9e-10, 2.2e-10):
    nu, L = nu_and_L(ge, 0.5)
    row.append(nu * (1 + L / 3))
print(f"C3 gamma = 1/2 wide-binary boost nu_e(1+L_e/3) at g_e 1.6/1.9/2.2e-10: " + " / ".join(f"{b:.3f}" for b in row)
      + "   (11-06 QUMOND row: 1.38-1.53; note a_M here is 1.1e-10 with a0p = gamma*a_M)")

print("\n=== 1. Reading (T): Sun vs Saturn ===")
ang = np.radians(LON_GC - LON_PERI)  # direction of Galactic centre relative to Saturn's perihelion
print(f"Galactic centre is {LON_GC - LON_PERI:.1f} deg from Saturn's perihelion direction (in-plane; cos 5.5 deg = 0.995)")
print("gamma  g_gal     nu_e   g_N,gal    (nu_e-1)g_N   peri rate mas/cy   sigma vs EPM2011   de/dt per cy")
worst = np.inf
for gam in (0.87, 0.90, 0.95):
    for ge in (1.6e-10, 1.9e-10, 2.2e-10):
        nu, L = nu_and_L(ge, gam)
        gN = ge / nu
        dA = (nu - 1) * gN
        # Saturn is left behind: relative acceleration is -(nu_e-1) g_N,gal, g_N,gal pointing at the Galactic centre
        Ax, Ay = -dA * 0.995 * np.cos(ang), -dA * 0.995 * np.sin(ang)
        rate, edot = peri_rate(Ax, Ay)
        z = (rate - EPM_VAL) / EPM_ERR
        worst = min(worst, abs(z))
        print(f"{gam:.2f}  {ge:.1e}  {nu:.3f}  {gN:.2e}  {dA:.2e}   {rate:+.3e}        {z:+.2e}        {edot:+.2e}")
print(f"smallest |sigma| on the grid: {worst:.2e}")

print("\nDirection scan (gamma = 0.90, g_gal = 1.9e-10): fraction of in-plane directions with |rate - EPM| < 3 sigma")
nu, L = nu_and_L(1.9e-10, 0.90)
dA = (nu - 1) * 1.9e-10 / nu
# secular rate is linear in the force, so two integrations span every direction
rx, _ = peri_rate(dA, 0.0)
ry, _ = peri_rate(0.0, dA)
th = np.linspace(0, 2 * np.pi, 3_600_001)
rates = rx * np.cos(th) + ry * np.sin(th)
frac = np.mean(np.abs(rates - EPM_VAL) < 3 * EPM_ERR)
print(f"rate(x) = {rx:+.3e}, rate(y) = {ry:+.3e} mas/cy; fraction inside 3 sigma = {frac:.2e}")
print("(where the perihelion rate vanishes the eccentricity drift is maximal; no sourced bound on e-dot is used here)")

print("\n=== 2. Wide-binary boost: reading (T) vs reading (I) ===")
print("gamma  g_e      nu_e    L_e     (T) nu_e(1+L_e/3)   radial-only nu_e(1+L_e)  transverse nu_e")
for gam in (0.87, 0.90, 0.95):
    for ge in (1.6e-10, 1.9e-10, 2.2e-10):
        nu, L = nu_and_L(ge, gam)
        print(f"{gam:.2f}  {ge:.1e}  {nu:.3f}  {L:+.3f}   {nu * (1 + L / 3):.3f}               {nu * (1 + L):.3f}                   {nu:.3f}")
print("(I) at gamma = 0.90, internal g_N = 1.0e-10 and 0.2e-10 (ledger: 1.49 and 2.70):")
for gN in (1.0e-10, 0.2e-10):
    g = gN
    for _ in range(200):
        g = gN / C(g, 0.90)
    print(f"   g_N = {gN:.1e}: boost {g / gN:.2f}")

print("\n=== 3. Lensing: the framework's own cap 1/Omega_m = 3.175 on the KiDS-1000 isolated bins ===")
bins = [(1.4e-15, 307, 39, "flagged"), (7.6e-15, 193, 15, "flagged"), (4.2e-14, 84, 6, "flagged"),
        (1.3e-13, 46, 3.4, "reliable (edge)"), (2.3e-13, 29.7, 2.5, "reliable"), (4.0e-13, 23.7, 1.9, "reliable"),
        (1.3e-12, 11.5, 1.1, "reliable"), (3.9e-12, 4.9, 0.6, "reliable")]
print("C4 identity (cap 6.389, 1.3e-13 bin): z at x5 = %+.1f, at x10 = %+.1f  (explorer: +4.1, -5.3)"
      % ((46 - 6.389 * 5) / 3.4, (46 - 6.389 * 10) / 3.4))
print("g_bar      B_obs        (a) light on boosted potential, cap 3.175     (b) light on baryons only      B21")
print("                        z at x5    z at x10                            z at x5    z at x10")
na5 = na10 = nb10 = 0
for gb, B, s, flag in bins:
    za5, za10 = (B - 3.175 * 5) / s, (B - 3.175 * 10) / s
    zb5, zb10 = (B - 5) / s, (B - 10) / s
    if flag.startswith("reliable"):
        na5 += za5 >= 3
        na10 += za10 >= 3
        nb10 += zb10 >= 5
    print(f"{gb:.1e}  {B:5.1f} ± {s:4.1f}   {za5:+6.1f}     {za10:+6.1f}                            {zb5:+6.1f}     {zb10:+6.1f}        {flag}")
print(f"reliable bins: (a) >= 3 sigma at x5: {na5}, at x10: {na10};  (b) >= 5 sigma at x10: {nb10}")
print("slip needed for cap 3.175 to pass the 1.3e-13 bin at -2 sigma, lensing boost = B(1+eta)/2:")
for f in (5, 10):
    eta = 2 * (46 - 2 * 3.4) / (3.175 * f) - 1
    print(f"   f = {f}: eta >= {eta:.2f}   (eta = 1 is the GR relation)")
