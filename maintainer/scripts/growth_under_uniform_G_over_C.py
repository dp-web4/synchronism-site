"""Linear growth when the framework's g = g_N / C is applied uniformly to cosmology.

Question (visitor researcher persona, 2026-10-07): /dark-energy forecasts an fσ8 shift of
-0.22 % while TEST-04a carries fσ8(0.51) = 0.418 (12 % suppression). Which perturbation
equation gives which, and if G_eff = G/C(ρ̄) enters the growth source, why is growth not
ENHANCED (C ≤ 1)?

Three operationalizations of "G/C" in the growth source 4πG_eff ρ_m δ:
  (F) fluid / background-only (08-18 locality fork): mu = 1 + (ρ_DE/ρ_m)(1+w_DE)  -> ~ΛCDM
  (U) uniform modified gravity: the same G -> G/C(ρ̄_m) that builds H² = 8πGρ_m/(3C)
      also sources perturbations. With the ledger identity C ≡ ρ_m/(ρ_m+ρ_DE) = Ω_m(a),
      mu = 1/Ω_m(a), so the source is 1.5 H² δ for every γ (no free parameter).
  (S) Session 107: G_local/G_global = C_cosmic/C_galactic < 1 (suppression; the
      C_cosmic != C_galactic distinction was withdrawn 2026-08-11).

Predictions written before running (2026-10-07):
  P1  (U) enhances growth: D(0)/D_ΛCDM(0) > 1.5 when both are normalized at z = 1000.
  P2  (U) fσ8(z=0.51) > 0.8, i.e. > 1.6× ΛCDM's 0.474 and on the opposite side from 0.418.
  P3  identity control: mu = 1 reproduces ΛCDM's f(z=0.51) to 1e-3 and fσ8(0.51) = 0.474
      (σ8,0 = 0.811 normalization) within 2 %.
Background: flat ΛCDM, Ω_m0 = 0.315 (the substituted family sits at Λ's corner, γ = 0.487).
"""
import numpy as np
from scipy.integrate import solve_ivp

OM0 = 0.315
SIG8_LCDM = 0.811


def E2(a):
    return OM0 / a**3 + (1 - OM0)


def Om(a):
    return OM0 / a**3 / E2(a)


def dlnH_dlna(a):
    return -1.5 * OM0 / a**3 / E2(a)


def grow(mu_fn, a0=1e-3):
    # y = [D, dD/dlna]; EdS start D = a
    def rhs(lna, y):
        a = np.exp(lna)
        D, Dp = y
        return [Dp, -(2 + dlnH_dlna(a)) * Dp + 1.5 * Om(a) * mu_fn(a) * D]
    sol = solve_ivp(rhs, [np.log(a0), 0.0], [a0, a0], dense_output=True, rtol=1e-10, atol=1e-14)
    return sol


def at(sol, z):
    D, Dp = sol.sol(np.log(1 / (1 + z)))
    return D, Dp / D


lcdm = grow(lambda a: 1.0)
unif = grow(lambda a: 1.0 / Om(a))

D0_l, f0_l = at(lcdm, 0.0)
D0_u, f0_u = at(unif, 0.0)
z = 0.51
Dz_l, fz_l = at(lcdm, z)
Dz_u, fz_u = at(unif, z)

# Normalize both to the same amplitude at a = 1e-3 (CMB-anchored), sigma8 scaled by D
s8z_l = SIG8_LCDM * Dz_l / D0_l
s8z_u = SIG8_LCDM * Dz_u / D0_l  # same early amplitude, so ratio of D's carries over
fs8_l = fz_l * s8z_l
fs8_u = fz_u * s8z_u

# reference: fitting-formula f = Om^0.55 at z = 0.51
f_fit = Om(1 / (1 + z)) ** 0.55

print("Identity control (mu = 1, ΛCDM):")
print(f"  f(0.51) = {fz_l:.4f}  vs Om^0.55 = {f_fit:.4f}  (diff {abs(fz_l - f_fit):.1e})")
print(f"  fσ8(0.51) = {fs8_l:.4f}  (target 0.474)")
print()
print("Uniform G/C reading (mu = 1/Ω_m(a); γ-independent through C ≡ Ω_m(a)):")
print(f"  mu(z=0) = {1 / Om(1.0):.3f}, mu(z=0.51) = {1 / Om(1 / (1 + z)):.3f}")
print(f"  D(0)/D_ΛCDM(0) at equal z=1000 amplitude = {D0_u / D0_l:.3f}")
print(f"  σ8(0) = {SIG8_LCDM * D0_u / D0_l:.3f}")
print(f"  f(0.51) = {fz_u:.4f}   σ8(0.51) = {s8z_u:.4f}")
print(f"  fσ8(0.51) = {fs8_u:.4f}  = {fs8_u / fs8_l:.2f}× ΛCDM")
print()
print("Comparison at z = 0.51:")
print(f"  (F) fluid / background-only : ≈ {0.474 * (1 - 0.0022):.3f}  (-0.22 %, archive 08-18)")
print(f"  (U) uniform G/C             : {fs8_u:.3f}")
print(f"  (S) Session 107 ratio       : 0.418  (withdrawn C_cosmic/C_galactic construction)")
print(f"  DESI DR1 LRG1               : 0.550 ± 0.062")
print(f"  (U) vs DR1: {(fs8_u - 0.550) / 0.062:+.1f} σ")
print()
print("P1", "HELD" if D0_u / D0_l > 1.5 else "FAILED")
print("P2", "HELD" if fs8_u > 0.8 else "FAILED")
print("P3", "HELD" if abs(fz_l - f_fit) < 1e-3 and abs(fs8_l - 0.474) / 0.474 < 0.02 else "FAILED")
