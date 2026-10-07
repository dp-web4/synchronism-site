"""Uniform G/C growth reading (U) vs ISW sign, S8, DESI binned mu and mu0. Pre-registered be3ecba.

(U): mu(a) = 1/Omega_m(a) (maintainer 2026-10-07), flat LCDM background Om0 = 0.315, amplitude fixed at a = 1e-3.
Branches: Sigma = mu (no slip) and Sigma = 1.
"""
import numpy as np
from scipy.integrate import solve_ivp, quad
from scipy.optimize import brentq

OM0 = 0.315
OL0 = 1 - OM0
SIG8 = 0.811
A_INI = 1e-3


def E2(a): return OM0 / a**3 + OL0
def Om(a): return OM0 / a**3 / E2(a)
def Ode(a): return 1 - Om(a)
def dlnH(a): return -1.5 * OM0 / a**3 / E2(a)


def grow(mu, a_start=A_INI, y0=None):
    def rhs(lna, y):
        a = np.exp(lna)
        return [y[1], -(2 + dlnH(a)) * y[1] + 1.5 * Om(a) * mu(a) * y[0]]
    if y0 is None:
        y0 = [a_start, a_start]
    return solve_ivp(rhs, [np.log(a_start), 0.0], y0, dense_output=True, rtol=1e-10, atol=1e-14)


def Dz(sol, z):
    return sol.sol(np.log(1 / (1 + z)))[0]


def fz(sol, z):
    D, Dp = sol.sol(np.log(1 / (1 + z)))
    return Dp / D


mu_U = lambda a: 1 / Om(a)
mu_1 = lambda a: 1.0
L = grow(mu_1)
U = grow(mu_U)


def isw_A(sol, Sigma, zc, sz):
    """A = int n D_L d[Sigma D/a]/dz dz / int n D_L d[D_L/a]/dz dz."""
    def phi(s, Sg, z):
        a = 1 / (1 + z)
        return Sg(a) * Dz(s, z) / a
    def dphidz(s, Sg, z, h=1e-4):
        return (phi(s, Sg, z + h) - phi(s, Sg, z - h)) / (2 * h)
    n = lambda z: np.exp(-0.5 * ((z - zc) / sz) ** 2)
    num = quad(lambda z: n(z) * Dz(L, z) * dphidz(sol, Sigma, z), 0.0, 3.0, limit=200)[0]
    den = quad(lambda z: n(z) * Dz(L, z) * dphidz(L, mu_1, z), 0.0, 3.0, limit=200)[0]
    return num / den


def mu_eff_bin(z_lo, z_hi, start_from_U=True):
    """Constant mu in [z_lo, z_hi) reproducing U's D at z_lo, starting from U's state at z_hi."""
    a_s = 1 / (1 + z_hi)
    st = U.sol(np.log(a_s))
    target = Dz(U, z_lo)
    def D_with(m):
        def rhs(lna, y):
            a = np.exp(lna)
            return [y[1], -(2 + dlnH(a)) * y[1] + 1.5 * Om(a) * m * y[0]]
        s = solve_ivp(rhs, [np.log(a_s), np.log(1 / (1 + z_lo))], list(st), rtol=1e-10, atol=1e-14)
        return s.y[0, -1]
    return brentq(lambda m: D_with(m) - target, 0.5, 10)


def mu_eff_bin_ctrl(z_lo, z_hi, sol_ref):
    a_s = 1 / (1 + z_hi)
    st = sol_ref.sol(np.log(a_s))
    target = Dz(sol_ref, z_lo)
    def D_with(m):
        def rhs(lna, y):
            a = np.exp(lna)
            return [y[1], -(2 + dlnH(a)) * y[1] + 1.5 * Om(a) * m * y[0]]
        s = solve_ivp(rhs, [np.log(a_s), np.log(1 / (1 + z_lo))], list(st), rtol=1e-10, atol=1e-14)
        return s.y[0, -1]
    return brentq(lambda m: D_with(m) - target, 0.5, 10)


def template(mu0):
    return lambda a: 1 + mu0 * Ode(a) / OL0


def mu0_eff_D0(sol_ref):
    t = Dz(sol_ref, 0.0)
    return brentq(lambda m0: Dz(grow(template(m0)), 0.0) - t, -0.9, 20)


def fs8(sol, z):
    return fz(sol, z) * SIG8 * Dz(sol, z) / Dz(L, 0.0)


def mu0_eff_fs8(sol_ref, z=0.5):
    t = fs8(sol_ref, z)
    return brentq(lambda m0: fs8(grow(template(m0)), z) - t, -0.9, 20)


print("=== Identity controls ===")
print(f"ISW A (mu=1, Sigma=1, z=0.5 kernel) = {isw_A(L, mu_1, 0.5, 0.2):.5f}  (want 1)")
print(f"mu_eff bin1 on LCDM = {mu_eff_bin_ctrl(0, 1, L):.5f}  bin2 = {mu_eff_bin_ctrl(1, 2, L):.5f}  (want 1)")
print(f"mu0_eff(D0) on LCDM = {mu0_eff_D0(L):+.5f}  (want 0)")
T05 = grow(template(0.05))
print(f"mu0_eff(D0) on template(0.05) = {mu0_eff_D0(T05):+.5f}  (want +0.05)")
print()

print("=== (U) growth ===")
r0 = Dz(U, 0) / Dz(L, 0)
print(f"D_U/D_L at z=0: {r0:.4f}  sigma8(0) = {SIG8 * r0:.3f};  mu(z=0) = {mu_U(1):.3f}")
for z in [0.3, 0.5, 1.0, 1.5, 2.0]:
    print(f"  z={z}: D ratio {Dz(U, z) / Dz(L, z):.4f}  mu={mu_U(1 / (1 + z)):.3f}  "
          f"fs8_U={fs8(U, z):.3f} fs8_L={fs8(L, z):.3f}")
print()

print("=== ISW proxy amplitude A (LCDM = 1; data ≈ 1.0 ± 0.2 derived from 4.7-5σ detection) ===")
res_isw = {}
for zc, sz in [(0.3, 0.15), (0.5, 0.2), (1.0, 0.4)]:
    a_nos = isw_A(U, mu_U, zc, sz)
    a_one = isw_A(U, mu_1, zc, sz)
    res_isw[zc] = (a_nos, a_one)
    print(f"  kernel z={zc}: Sigma=mu A={a_nos:+.3f} ({(a_nos - 1) / 0.2:+.1f}σ)   "
          f"Sigma=1 A={a_one:+.3f} ({(a_one - 1) / 0.2:+.1f}σ)")
# where does the potential turn around?
zs = np.linspace(0, 3, 301)
def phi_curve(Sg): return np.array([Sg(1 / (1 + z)) * Dz(U, z) * (1 + z) for z in zs])
for name, Sg in [("Sigma=mu", mu_U), ("Sigma=1", mu_1)]:
    p = phi_curve(Sg)
    dp = np.gradient(p, zs)
    print(f"  {name}: Phi(z=0)/Phi(z=3) = {p[0] / p[-1]:.3f};  dPhi/dz sign at z=0,0.5,1,2: "
          f"{[np.sign(dp[i]) for i in (0, 50, 100, 200)]}")
pL = np.array([Dz(L, z) * (1 + z) for z in zs])
print(f"  LCDM: Phi(z=0)/Phi(z=3) = {pL[0] / pL[-1]:.3f}")
print()

print("=== DESI DR1 binned mu (Ishak+2024: mu1 = 1.02 ± 0.13 [0,1), mu2 = 1.04 ± 0.11 [1,2)) ===")
m1 = mu_eff_bin(0, 1)
m2 = mu_eff_bin(1, 2)
print(f"  mu1_eff = {m1:.3f}  ({(m1 - 1.02) / 0.13:+.1f}σ)   mu2_eff = {m2:.3f}  ({(m2 - 1.04) / 0.11:+.1f}σ)")
s1 = mu_eff_bin(0, 1)  # Sigma=mu branch: Sigma tracks mu
print(f"  Sigma=mu branch: Sigma1_eff ≈ mu1_eff = {s1:.3f} vs 1.021 ± 0.029 ({(s1 - 1.021) / 0.029:+.0f}σ)")
print()

print("=== Template mu0 (Ishak+2024: mu0 = 0.05 ± 0.22, Sigma0 = 0.008 ± 0.045) ===")
a = mu0_eff_D0(U)
b = mu0_eff_fs8(U)
print(f"  mu0_eff matching D(0) = {a:.3f} ({(a - 0.05) / 0.22:+.1f}σ);  matching fs8(0.5) = {b:.3f} ({(b - 0.05) / 0.22:+.1f}σ)")
print(f"  pointwise mu-1 at z=0: U {mu_U(1) - 1:.3f} vs template needs mu0 = that")
print()

print("=== S8 (KiDS-Legacy 0.815 +0.016-0.021; DES Y3 0.776 ± 0.017) ===")
zeff = 0.3
rz = Dz(U, zeff) / Dz(L, zeff)
S8L = SIG8 * np.sqrt(OM0 / 0.3)
S8_one = S8L * rz
S8_nos = S8L * rz * mu_U(1 / (1 + zeff))
for name, s in [("LCDM", S8L), ("U, Sigma=1", S8_one), ("U, Sigma=mu", S8_nos)]:
    print(f"  {name:12s} S8_eff = {s:.3f}  KiDS {(s - 0.815) / 0.016:+.1f}σ   DES {(s - 0.776) / 0.017:+.1f}σ")
print()

# verdict
def excl(sig): return abs(sig) >= 3
isw_one = excl((res_isw[0.5][1] - 1) / 0.2) and res_isw[0.5][1] <= 0.4
isw_nos = res_isw[0.5][0] <= 0.4
grow_x = excl((m1 - 1.02) / 0.13) or excl((a - 0.05) / 0.22)
s8_one = excl((S8_one - 0.815) / 0.016)
s8_nos = excl((S8_nos - 0.815) / 0.016)
n_one = sum([isw_one, grow_x, s8_one]); n_nos = sum([isw_nos, grow_x, s8_nos])
print(f"Probes excluding at ≥3σ: Sigma=1 -> {n_one}/3 (ISW {isw_one}, growth {grow_x}, S8 {s8_one});"
      f" Sigma=mu -> {n_nos}/3 (ISW {isw_nos}, growth {grow_x}, S8 {s8_nos})")
if n_one >= 2 and n_nos >= 2: v = "EXCLUDED-BY-EXISTING-DATA"
elif n_one >= 2 or n_nos >= 2: v = "BRANCH-SPLIT"
else: v = "LIVE"
print("VERDICT:", v)
print()
print("Predictions:")
print("P1 (Sigma=mu A<0 for z=0.3,0.5):", "HELD" if res_isw[0.3][0] < 0 and res_isw[0.5][0] < 0 else "FAILED")
print("P2 (Sigma=1 0<A<0.6):", "HELD" if all(0 < res_isw[z][1] < 0.6 for z in (0.3, 0.5)) else "FAILED")
print("P3 (mu1_eff >= 1.5):", "HELD" if m1 >= 1.5 else "FAILED")
print("P4 (mu2_eff <= 1.26):", "HELD" if m2 <= 1.26 else "FAILED")
print("P5 (S8_eff Sigma=1 >= 0.90):", "HELD" if S8_one >= 0.90 else "FAILED")
print("P6 (mu0_eff >= 1.0):", "HELD" if a >= 1.0 else "FAILED")
