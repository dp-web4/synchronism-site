"""Wide-binary asymptotic boost vs gamma for the acceleration-keyed compander, quasi-linear QUMOND + EFE.

Maintainer 2026-11-06. Replaces the 2026-10-06 quasi-1D bracket (wb_boost_vs_gamma_efe_bracket.py), whose
range [nu_e(1+L_e), nu_e] is 0.25-0.5 wide, wider than the spacing between gamma values, so it cannot map an
outcome to a gamma interval. Written after a hand calculation (NOT blind); the prospective object is the DR4
reading, not this arithmetic.

Physics (QUMOND, external field g_e along z, internal Newtonian field g_Ni << g_e; Milgrom 1986 regime):
  nabla^2 Phi = div[ nu(|g_N|/a) g_N ],  g_N = g_Ne + g_Ni.
  Linearize: nu(|g_Ne+g_Ni|) ~ nu_e + nu_e L_e (z_hat . g_Ni)/g_Ne, L_e = dln nu / dln y_N at g_Ne.
  => nabla^2 Phi_i = nu_e [ 4 pi G rho + L_e d^2_z Phi_N ].
  Point mass: Phi_i = -(G M nu_e / r) [ 1 + (L_e/2) sin^2 theta ].    (derived by hand; checked numerically below)
  Orientation-averaged radial force (monopole): boost B = nu_e (1 + L_e/3).
The script's identity controls: (1) reproduce the 10-06 bracket's nu_e and L_e; (2) finite-difference check that
the closed form satisfies the linearized equation away from the origin; (3) at gamma = 1/2 (MOND simple mu,
a0 = 2 a0'), B lands in the published MOND range for the solar neighbourhood (~1.4-1.5 in g; Chae 2024, Banik & Zhao 2018).
Limits: asymptotic (g_int << g_e, s >~ 10-20 kau) value only; orbit-shape and projection effects beyond the monopole
are not modelled; Chae's gamma_g is a G_eff/G ratio so the monopole is the matching first-order quantity.
"""
import math

A = 1.08e-10  # identified a0'/gamma scale (2026-10-04 block)


def C(g, gm):
    return math.tanh(gm * math.log1p(g / (gm * A)))


def gN_of_g(g, gm):
    return g * C(g, gm)


def g_of_gN(gN, gm):
    lo, hi = gN, 1e4 * gN + 1e-8
    for _ in range(300):
        mid = math.sqrt(lo * hi)
        if gN_of_g(mid, gm) < gN:
            lo = mid
        else:
            hi = mid
    return math.sqrt(lo * hi)


def nu_L(ge, gm):
    gNe = gN_of_g(ge, gm)
    nu = ge / gNe
    h = 1e-5
    nup = g_of_gN(gNe * (1 + h), gm) / (gNe * (1 + h))
    num = g_of_gN(gNe * (1 - h), gm) / (gNe * (1 - h))
    L = (math.log(nup) - math.log(num)) / (math.log(1 + h) - math.log(1 - h))
    return nu, L


# --- control (2): closed form satisfies nabla^2 Phi_i = nu_e L_e d2z Phi_N (units G M = 1, nu_e = 1) away from origin
def phi_i(x, y, z, L):
    r = math.sqrt(x * x + y * y + z * z)
    s2 = (x * x + y * y) / (r * r)
    return -(1.0 / r) * (1 + 0.5 * L * s2)


def phi_N(x, y, z):
    return -1.0 / math.sqrt(x * x + y * y + z * z)


def lap(f, x, y, z, h=1e-3):
    return (f(x + h, y, z) + f(x - h, y, z) + f(x, y + h, z) + f(x, y - h, z) + f(x, y, z + h) + f(x, y, z - h)
            - 6 * f(x, y, z)) / h ** 2


def d2z(f, x, y, z, h=1e-3):
    return (f(x, y, z + h) - 2 * f(x, y, z) + f(x, y, z - h)) / h ** 2


Ltest = -0.27
worst = 0.0
for (x, y, z) in [(1.0, 0.3, 0.2), (0.2, 0.5, 1.1), (0.7, -0.4, -0.9), (1.5, 1.0, 0.1)]:
    lhs = lap(lambda a, b, c: phi_i(a, b, c, Ltest), x, y, z)
    rhs = Ltest * d2z(phi_N, x, y, z)
    worst = max(worst, abs(lhs - rhs) / max(abs(rhs), 1e-12))
print(f"Control 2 (closed form solves the linearized QUMOND eq. off-origin): worst rel. residual = {worst:.1e}")

# monopole check by direct angular average of the radial force factor
n = 2000
avg = sum((1 + 0.5 * Ltest * (1 - ((i + 0.5) / n * 2 - 1) ** 2)) for i in range(n)) / n
print(f"Control 2b: <1 + (L/2) sin^2> over the sphere = {avg:.5f} vs 1 + L/3 = {1 + Ltest / 3:.5f}")

print("\nControl 1 (reproduce 10-06 bracket nu_e, L_e at g_e = 1.9e-10):")
for gm in (0.489, 1.0, 2.0):
    nu, L = nu_L(1.9e-10, gm)
    print(f"  gamma={gm:5.3f} nu_e={nu:6.3f} L_e={L:+6.3f}")

gammas = [0.3, 0.4, 0.489, 0.5, 0.6, 0.75, 0.87, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0, 5.0]
ges = [1.6e-10, 1.9e-10, 2.2e-10]
print("\nAsymptotic wide-binary boost in g, B = nu_e(1 + L_e/3) (monopole of quasi-linear QUMOND point mass)")
print("gamma  " + "  ".join(f"g_e={g:.1e}" for g in ges) + "   old bracket @1.9e-10")
table = {}
for gm in gammas:
    row = []
    for ge in ges:
        nu, L = nu_L(ge, gm)
        row.append(nu * (1 + L / 3))
    nu, L = nu_L(1.9e-10, gm)
    table[gm] = row
    print(f"{gm:5.3f}  " + "  ".join(f"{b:12.3f}" for b in row) + f"   [{nu*(1+L):.3f}, {nu:.3f}]")


def gamma_for_B(B, ge):
    lo, hi = 0.05, 50.0
    f = lambda gm: (lambda nu_l: nu_l[0] * (1 + nu_l[1] / 3))(nu_L(ge, gm)) - B
    if f(lo) < 0 or f(hi) > 0:
        return float('nan')
    for _ in range(80):
        mid = math.sqrt(lo * hi)
        if f(mid) > 0:
            lo = mid
        else:
            hi = mid
    return mid


print("\nInverse map: outcome B -> gamma (g_e band 1.6-2.2e-10)")
for B in (1.50, 1.45, 1.40, 1.30, 1.20, 1.15, 1.12, 1.10, 1.08, 1.06, 1.04, 1.02):
    gs = [gamma_for_B(B, ge) for ge in ges]
    print(f"  B={B:.2f}: gamma = {min(gs):.2f} - {max(gs):.2f}")

print("\nBoost at the window edges named in the ledger (g_e band):")
for gm in (0.87, 1.5, 1.7, 2.0):
    bs = [nu_L(ge, gm)[0] * (1 + nu_L(ge, gm)[1] / 3) for ge in ges]
    print(f"  gamma={gm}: B = {min(bs):.3f} - {max(bs):.3f}")
