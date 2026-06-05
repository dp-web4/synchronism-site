#!/usr/bin/env python3
"""
TEST-02 condition (b): does Synchronism C(rho) predict a *different* wide-binary
boost curve than MOND+EFE, and where?

The discriminating axis is NOT separation and NOT Galactocentric radius (along both,
local density rho and external field g_ext are tightly correlated). It is HEIGHT z
above the Galactic plane at fixed Galactocentric radius R, where the two variables
DECOUPLE:

  - local mass density rho(z) falls steeply (disk scale height ~300 pc)
  - external field |g_ext|(z) is ~flat and, if anything, *rises* slightly with z
    (the vertical field component K_z grows away from the midplane)

Synchronism boost = 1/C(rho_local)  -> tracks rho   -> INCREASES with z
MOND+EFE boost     = f(a_int, g_ext) -> tracks g_ext -> FLAT / DECREASES with z

=> opposite-sign vertical gradient. That is the (in-principle) discriminator.
This script computes the magnitudes to show it is unmeasurable in the clean sample.

All numbers illustrative; the SIGN of d(boost)/dz is independent of rho_crit and of
the MOND interpolation choice.
"""
import numpy as np

# ---- constants ----
G    = 6.674e-11           # m^3 kg^-1 s^-2
a0   = 1.2e-10             # m/s^2  (MOND scale)
Msun = 1.989e30            # kg
pc   = 3.0857e16           # m
AU   = 1.496e11            # m
kpc  = 1000 * pc

Msun_pc3_to_SI = Msun / pc**3      # kg/m^3 per (Msun/pc^3)
Msun_pc2_to_SI = Msun / pc**2      # kg/m^2 per (Msun/pc^2)

# ---- Milky Way disk model at the solar circle R0 = 8.2 kpc ----
R0   = 8.2 * kpc
Vc   = 233e3               # m/s  circular speed
g_R  = Vc**2 / R0          # radial (in-plane) external field
print(f"Radial external field g_R = {g_R:.3e} m/s^2 = {g_R/a0:.2f} a0")

# Vertical mass distribution near the Sun (mass-weighted effective profile).
# Total midplane density rho0 ~ 0.1 Msun/pc^3 (Oort limit). Components:
#   thin disk  : rho ~ exp(-|z|/h_thin),  h_thin ~ 300 pc
#   thick+DM   : ~flat floor over ~1 kpc, rho_floor ~ 0.015 Msun/pc^3
rho0_thin  = 0.085         # Msun/pc^3
h_thin     = 300.0         # pc
rho_floor  = 0.015         # Msun/pc^3 (thick disk + local DM, ~flat over a kpc)

def rho_local(z_pc):
    return rho0_thin * np.exp(-np.abs(z_pc) / h_thin) + rho_floor   # Msun/pc^3

# Vertical field K_z(z) = 2 pi G Sigma(<z). Integrate rho(z).
def Sigma_below(z_pc, n=2000):
    zz = np.linspace(0, z_pc, n)
    rr = rho_local(zz) * Msun_pc3_to_SI          # kg/m^3
    return np.trapz(rr, zz * pc)                 # kg/m^2 (one-sided column)

def g_ext_total(z_pc):
    Kz = 2 * np.pi * G * Sigma_below(z_pc)       # vertical field at height z
    return np.hypot(g_R, Kz)

# ---- Synchronism C(rho): calibrate rho_crit so the midplane boost matches the
#      site's stated "~80x below Gaia reach" (Gaia reach ~ 4% velocity anomaly,
#      so Synchronism midplane velocity deviation ~ 0.05%). gamma = 2 (N_corr=1). ----
gamma = 2.0
def C_of_rho(rho, rho_crit):
    return np.tanh(gamma * np.log(rho / rho_crit + 1.0))

# solve rho_crit s.t. velocity dev = 1/sqrt(C) - 1 = 0.0005 at midplane
target_vdev = 0.0005
rho_mid = rho_local(0.0)
C_target = 1.0 / (1.0 + target_vdev)**2
# C = tanh(gamma ln(rho/rhoc + 1))  ->  rho/rhoc + 1 = exp(atanh(C)/gamma)
ratio = np.exp(np.arctanh(C_target) / gamma)        # = rho/rhoc + 1
rho_crit = rho_mid / (ratio - 1.0)
print(f"Calibrated rho_crit (wide-binary regime) = {rho_crit:.4f} Msun/pc^3")
print(f"  (galaxy-rotation rho_crit and cluster rho_crit are different values "
      f"-> no universal scale)\n")

def sync_velocity_boost(z_pc):
    C = C_of_rho(rho_local(z_pc), rho_crit)
    return 1.0 / np.sqrt(C)        # v_eff / v_Newton

# ---- MOND+EFE velocity boost for a wide binary of given internal acceleration ----
def nu_simple(y):                  # "simple" interpolation: g = g_N * nu(g_N/a0)
    return 0.5 + np.sqrt(0.25 + 1.0 / y)

def mond_velocity_boost(a_int, z_pc):
    # quadrature add internal + external (Session 238 recipe; EFE)
    a_tot = np.hypot(a_int, g_ext_total(z_pc))
    g_boost = nu_simple(a_tot / a0)             # gravity boost vs Newton (EFE-suppressed
                                                # from the isolated deep-MOND value)
    return np.sqrt(g_boost)                     # velocity boost vs Newton

# representative wide binary: total mass 1.5 Msun, separation 20 000 AU
M_bin = 1.5 * Msun
s_bin = 20000 * AU
a_int = G * M_bin / s_bin**2
print(f"Representative binary: M=1.5 Msun, s=20000 AU -> a_int = {a_int:.3e} "
      f"m/s^2 = {a_int/a0:.3f} a0\n")

print(f"{'z (pc)':>8} {'rho(z)':>10} {'g_ext/a0':>9} "
      f"{'Sync vdev%':>11} {'MOND vdev%':>11}")
mond_ref = mond_velocity_boost(a_int, 0.0)
for z in [0, 100, 250, 500, 1000, 2000]:
    rho = rho_local(z)
    gext = g_ext_total(z) / a0
    sdev = (sync_velocity_boost(z) - 1.0) * 100
    mdev = (mond_velocity_boost(a_int, z) - 1.0) * 100
    print(f"{z:>8} {rho:>10.4f} {gext:>9.3f} {sdev:>11.4f} {mdev:>11.4f}")

print("\n--- vertical gradient sign (the discriminator) ---")
z1, z2 = 100.0, 1000.0
dsync = sync_velocity_boost(z2) - sync_velocity_boost(z1)
dmond = mond_velocity_boost(a_int, z2) - mond_velocity_boost(a_int, z1)
print(f"Synchronism d(boost) over z=100->1000 pc: {dsync:+.5f}  "
      f"({'INCREASES' if dsync>0 else 'decreases'} with height)")
print(f"MOND+EFE    d(boost) over z=100->1000 pc: {dmond:+.5f}  "
      f"({'increases' if dmond>0 else 'DECREASES'} with height)")
print("=> opposite-sign vertical gradient: the in-principle TEST-02 discriminator.")

print("\n--- the C(rho) form sits on the NEWTONIAN side, not the MOND side ---")
print("Clean Gaia wide-binary samples (Banik+2024, Pittordis&Sutherland) sit within")
print("~250 pc of the Sun, i.e. |z| < 250 pc. Over that range:")
for z in [0, 250]:
    print(f"  z={z:>4} pc: Sync-C(rho) vdev={ (sync_velocity_boost(z)-1)*100:.4f}% "
          f"|  MOND+EFE vdev={ (mond_velocity_boost(a_int,z)-1)*100:.4f}%")
print("These are NOT degenerate. Sync-C(rho) predicts ~Newtonian (<0.4%, the site's")
print("'80x below reach'); MOND predicts a large (~18%) anomaly. They make OPPOSITE")
print("verdicts -- and Sync-C(rho) is on the Newtonian side. So a *detected* anomaly")
print("(Chae) REFUTES Sync-C(rho); a *null* (Banik) is consistent with it but identical")
print("to plain GR. TEST-02 can refute Synchronism-C(rho) but cannot confirm it over GR.")
print("The structural discriminator that survives -- the opposite-sign vertical gradient")
print("-- lives at z > ~500 pc, exactly where parallaxes degrade -> unmeasurable.")
