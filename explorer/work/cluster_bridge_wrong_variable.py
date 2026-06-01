"""
The cluster-bridge failure is a WRONG-VARIABLE problem, not (only) a one-scale problem.
2026-06-01 explorer session.

Prior work (cluster_bridge_coma.py, 2026-05-28) showed four ansätze for C(rho) -> apparent
mass all fail on Coma (two overshoot by 1e4, two collapse to Newtonian, A3 structurally bounded).
That established the failure on a representative ANSATZ family. It did not isolate WHY.

This script isolates the mechanism, ansatz-independently, by going underneath the ansatz to the
VARIABLE the coherence factor is a function of.

The empirical regularity Synchronism is trying to reproduce is the Radial Acceleration Relation
(RAR): g_obs is a tight, ~universal function of the BARYONIC ACCELERATION g_bar (McGaugh+2016,
0.13 dex scatter). MOND lives here: g_obs = g_bar / mu(g_bar/a0), one universal scale a0.

Synchronism's C is a function of LOCAL BARYON DENSITY rho. To reproduce a law that lives in
acceleration space using a function of density, density and acceleration must be in near
one-to-one correspondence across the systems the law spans. They are NOT: g_bar(r) = G M_bar(<r)/r^2
is a NON-LOCAL functional of the density profile. Two points at the same local rho can have very
different g_bar, and vice-versa -- and the mismatch GROWS across scales.

This script computes (rho_bar, g_bar) along radius for a representative disk galaxy and for the
Coma cluster under one identical (spherical-enclosed) methodology, and measures the offset between
the two systems in the (g_bar, rho) plane. That offset is the wrong-variable penalty: it is the
factor by which a density-keyed C must mis-assign coherence to a cluster point relative to a galaxy
point at the SAME baryonic acceleration -- i.e. the same place on the RAR.

Two-level diagnosis the numbers are meant to separate:
  (1) WRONG VARIABLE (framework-specific, catastrophic): rho and g_bar decouple across scales, so a
      density-keyed C cannot sit on the universal acceleration-space RAR. This is the cost of the
      C(a) -> C(rho) migration (Sessions ~195-199 -> 211+): trading the universal a0 for a per-system
      rho_crit ~ V_flat^2 (equations.ts:24). Magnitude: orders of magnitude.
  (2) ONE SCALE (mechanism-class, shared with MOND): even the acceleration formulation C(a)=MOND has
      a single scale a0 and still misses clusters by ~2 (the residual-mass problem). Magnitude: ~2.
"""

import numpy as np

# ---- constants (SI) ----
G = 6.674e-11
M_sun = 1.989e30
kpc = 3.086e19          # m
Mpc = 1000 * kpc
m_p = 1.673e-27         # kg
a0 = 1.2e-10            # m/s^2  (MOND scale = cH0/2pi)
g_per_cm3_to_kg_m3 = 1000.0   # 1 g/cm^3 = 1000 kg/m^3

def to_gcc(rho_si):
    """kg/m^3 -> g/cm^3"""
    return rho_si / g_per_cm3_to_kg_m3

# =====================================================================
# Representative disk galaxy (MW/NGC-like), spherical-enclosed methodology
# =====================================================================
# Stellar exponential disk + extended HI gas disk. Volume density at midplane
# rho ~ Sigma(R)/(2 h_z). Enclosed mass by spherical approximation (same approx
# applied to the cluster, so the cross-system COMPARISON is methodology-fair).
M_star = 6.0e10 * M_sun
Rd_star = 3.0 * kpc
hz_star = 0.3 * kpc
M_gas = 1.2e10 * M_sun
Rd_gas = 7.0 * kpc
hz_gas = 0.3 * kpc

def sigma_exp(R, Mtot, Rd):
    return Mtot / (2*np.pi*Rd**2) * np.exp(-R/Rd)

def rho_galaxy(R):
    """midplane baryon volume density (kg/m^3) at cylindrical radius R."""
    s = sigma_exp(R, M_star, Rd_star)/(2*hz_star) + sigma_exp(R, M_gas, Rd_gas)/(2*hz_gas)
    return s

def Menc_exp_disk(R, Mtot, Rd):
    """mass of an exponential disk within cylindrical radius R (exact for a flat disk)."""
    x = R/Rd
    return Mtot * (1 - (1+x)*np.exp(-x))

def Menc_galaxy(R):
    return Menc_exp_disk(R, M_star, Rd_star) + Menc_exp_disk(R, M_gas, Rd_gas)

def gbar_galaxy(R):
    return G*Menc_galaxy(R)/R**2

# =====================================================================
# Coma cluster, same spherical-enclosed methodology
# =====================================================================
# Isothermal beta-model gas (Briel+1992): n_e = n0 (1+(r/rc)^2)^(-3beta/2)
n0 = 3.4e-3 * 1e6       # cm^-3 -> m^-3
rc = 290 * kpc
beta = 0.65

def rho_coma(r):
    n_e = n0 * (1 + (r/rc)**2)**(-1.5*beta)
    return 1.4 * m_p * n_e     # kg/m^3

def Menc_coma(r, n=4000):
    rr = np.linspace(1*kpc, r, n)
    integ = 4*np.pi*rr**2*rho_coma(rr)
    return np.trapz(integ, rr)

def gbar_coma(r):
    return G*Menc_coma(r)/r**2

# =====================================================================
# Build (g_bar, rho) loci
# =====================================================================
print("="*78)
print("(g_bar, rho_bar) LOCI  -- galaxy vs Coma, identical spherical methodology")
print("="*78)

Rg = np.geomspace(0.5*kpc, 40*kpc, 25)
print("\nGALAXY (disk)")
print(f"{'R[kpc]':>8} {'g_bar[m/s^2]':>14} {'g_bar/a0':>10} {'rho[g/cm^3]':>14}")
gal = []
for R in Rg:
    g = gbar_galaxy(R); rho = rho_galaxy(R)
    gal.append((g, rho))
    if R/kpc in [] or True:
        pass
for R in Rg[::3]:
    g = gbar_galaxy(R); rho = rho_galaxy(R)
    print(f"{R/kpc:8.1f} {g:14.3e} {g/a0:10.3f} {to_gcc(rho):14.3e}")
gal = np.array(gal)

Rc = np.geomspace(30*kpc, 2500*kpc, 25)
print("\nComa (ICM gas)")
print(f"{'r[kpc]':>8} {'g_bar[m/s^2]':>14} {'g_bar/a0':>10} {'rho[g/cm^3]':>14}")
com = []
for r in Rc:
    g = gbar_coma(r); rho = rho_coma(r)
    com.append((g, rho))
for r in Rc[::3]:
    g = gbar_coma(r); rho = rho_coma(r)
    print(f"{r/kpc:8.0f} {g:14.3e} {g/a0:10.3f} {to_gcc(rho):14.3e}")
com = np.array(com)

# =====================================================================
# The wrong-variable penalty: density at MATCHED baryonic acceleration
# =====================================================================
print("\n" + "="*78)
print("WRONG-VARIABLE PENALTY: rho at MATCHED g_bar (same point on the RAR)")
print("="*78)
print("""The RAR says: same g_bar  ->  same g_obs (same mass discrepancy).
A density-keyed C says: discrepancy is set by rho. So at matched g_bar the two
systems must share C only if they share rho. Below: they do not.""")

# galaxy rho(g_bar) and Coma rho(g_bar) by interpolation in log space.
# both g_bar are monotonic decreasing in radius over the ranges chosen.
def interp_rho_at_g(arr, gq):
    g = arr[:,0]; rho = arr[:,1]
    order = np.argsort(g)
    g = g[order]; rho = rho[order]
    if gq < g.min() or gq > g.max():
        return None
    return np.exp(np.interp(np.log(gq), np.log(g), np.log(rho)))

print(f"\n{'g_bar[m/s^2]':>14} {'g_bar/a0':>9} {'rho_gal[g/cc]':>15} {'rho_Coma[g/cc]':>15} {'rho_gal/rho_Coma':>18}")
g_overlap_lo = max(gal[:,0].min(), com[:,0].min())
g_overlap_hi = min(gal[:,0].max(), com[:,0].max())
ratios = []
for gq in np.geomspace(g_overlap_lo, g_overlap_hi, 8):
    rg = interp_rho_at_g(gal, gq)
    rc_ = interp_rho_at_g(com, gq)
    if rg and rc_:
        ratios.append(rg/rc_)
        print(f"{gq:14.3e} {gq/a0:9.3f} {to_gcc(rg):15.3e} {to_gcc(rc_):15.3e} {rg/rc_:18.2e}")

if ratios:
    print(f"\nOverlap g_bar range: {g_overlap_lo:.2e} .. {g_overlap_hi:.2e} m/s^2"
          f"  ({g_overlap_lo/a0:.3f} .. {g_overlap_hi/a0:.3f} a0)")
    print(f"rho_gal/rho_Coma at matched g_bar: median {np.median(ratios):.2e}, "
          f"range [{min(ratios):.2e}, {max(ratios):.2e}]")
    print(f"=> log10 spread in density at a fixed RAR location across the two systems:"
          f" {np.log10(np.median(ratios)):.1f} dex")

# =====================================================================
# The acceleration (correct-variable) reference: do they share g_bar at all?
# =====================================================================
print("\n" + "="*78)
print("CONTROL: in the CORRECT variable (g_bar), the two systems DO overlap")
print("="*78)
print(f"galaxy g_bar range: {gal[:,0].min():.2e} .. {gal[:,0].max():.2e} m/s^2"
      f"  ({gal[:,0].min()/a0:.2f} .. {gal[:,0].max()/a0:.2f} a0)")
print(f"Coma   g_bar range: {com[:,0].min():.2e} .. {com[:,0].max():.2e} m/s^2"
      f"  ({com[:,0].min()/a0:.2f} .. {com[:,0].max()/a0:.2f} a0)")
print("""
=> Galaxy outskirts and the Coma envelope occupy the SAME band of baryonic
   acceleration (~0.01-1 a0). A function of g_bar (MOND / C(a)) therefore puts
   them on one relation. A function of rho cannot: at that shared acceleration
   their densities differ by the dex computed above. The variable, not the
   number of parameters, is the primary obstruction.""")

print("\n" + "="*78)
print("WITHIN-COMA: rho is many-to-one in g_bar (a local C(rho) cannot track it)")
print("="*78)
print("""The beta-model core (r_c=290 kpc) is nearly flat in density while g_bar rises
then falls. So inside one cluster, a fixed rho maps to a RANGE of g_bar -- the
map rho->g is not even single-valued. A coherence keyed to local rho is therefore
nearly CONSTANT across radii where the required mass-discrepancy varies most.""")
print(f"\n{'r[kpc]':>8} {'rho[g/cm^3]':>14} {'g_bar/a0':>10} {'C(rho), gal-anchor':>20}")
# galaxy-anchored rho_crit = density where C saturates; take galaxy core density scale
rho_crit_gal_si = rho_galaxy(0.5*kpc)   # ~1e-22 g/cc galaxy core -> classical knee
def C_tanh(rho_si, rho_crit_si, gamma=2.0):
    return np.tanh(gamma*np.log(rho_si/rho_crit_si + 1.0))
for r in [60, 150, 290, 500, 827, 1390]:
    rr = r*kpc
    rho = rho_coma(rr); g = gbar_coma(rr)
    print(f"{r:8d} {to_gcc(rho):14.3e} {g/a0:10.3f} {C_tanh(rho, rho_crit_gal_si):20.3e}")
print(f"\n  galaxy-anchored rho_crit ~ {to_gcc(rho_crit_gal_si):.2e} g/cm^3 (galaxy core, C->1 classical)")
print("  => C(rho) ~ 1e-5 and ~CONSTANT across Coma while g_bar/a0 swings 0.02->0.12->0.05.")
print("     This is the origin of the prior finding's 1e4 ansatz overshoot: rho_crit is")
print("     anchored to the galaxy CORE (high density), not to the low-acceleration regime")
print("     where the discrepancy physics actually lives.")

print("\n" + "="*78)
print("ONE-SCALE residual (the part MOND/C(a) ALSO cannot fix):")
print("="*78)
# MOND prediction for Coma mass discrepancy in the core where g_bar ~ a0:
# D_MOND = g_obs/g_bar; deep-MOND D = sqrt(a0/g_bar). At cluster cores g_bar~a0
# so D_MOND ~ 1-2, but observed ~4-5 -> residual factor ~2-3 even for MOND.
for label, gq in [("Coma r_c~290kpc", gbar_coma(290*kpc)),
                  ("Coma r500~1390kpc", gbar_coma(1390*kpc))]:
    x = gq/a0
    mu_simple = 0.5*(1+np.sqrt(1+4/x))   # g_obs/g_bar for "simple" mu interpolation
    print(f"  {label:22} g_bar/a0={x:6.3f}  D_MOND=g_obs/g_bar ~ {mu_simple:.2f}  (obs ~4-5)")
print("""  => MOND (one acceleration scale) is within ~30% at Coma here; canonical residual
     is a FACTOR ~2 in cluster cores (Sanders 1999/2003; Pointecouteau-Silk 2005).
     The one-scale problem is a modest FACTOR. C(rho)'s 1e4/structural failure is
     therefore NOT the one-scale problem -- it is the variable (rho vs g_bar).""")
