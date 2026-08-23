#!/usr/bin/env python3
"""
Pressure-supported systems under the framework's own galaxy law.

Question (from visitor 2026-08-23 Pass 4): EFE=0 is the last untested structural
difference from MOND; pressure-supported dSphs in an external field test it for free.
Pass 4 asserts the test is "fork-immune".

This script executes the framework's OWN law on those systems, across every
convention fork the framework leaves open, and asks whether the EFE signal is
even reachable -- i.e. whether the BASELINE is right to better than the ~factor-2
EFE effect. (This is the 2026-08-05 "not-evaluable" test applied to a new channel.)

Units throughout: rho in Msun/pc^3, V and sigma in km/s, r in kpc, M in Msun.
rho_crit = A * V_flat^2 with A = 0.029  (site: src/lib/equations.ts, galaxy-plotter)
C(rho)   = tanh(gamma * ln(rho/rho_crit + 1))
"""
import math, itertools

G = 4.300917270e-6      # kpc (km/s)^2 / Msun
A_SITE = 0.029          # rho_crit = A * V^2, rho in Msun/pc^3
GAMMA_SPARC = 0.489     # SPARC optimum
GAMMA_FRAMEWORK = 2.0   # framework's own asserted gamma (plotter)
A0 = 1.2e-10            # m/s^2
# a0 in kpc (km/s)^2 units: 1 m/s^2 = 3.2408e-17 kpc/s^2 ... do it explicitly
KMS2_PER_KPC_TO_MS2 = (1e3**2) / (3.0856775814913673e19)   # (km/s)^2/kpc -> m/s^2
A0_KPC = A0 / KMS2_PER_KPC_TO_MS2                          # (km/s)^2 / kpc

SYSTEMS = [
    # name,            M_bar(Msun), r_half_3D(kpc), sigma_obs, sigma_err, D_host(kpc), ref
    ("Crater II",      3.2e5,  1.42, 2.7, 0.3, 117.5, "Torrealba+2016; Caldwell+2017"),
    ("NGC 1052-DF2",   2.0e8,  2.90, 8.5, 2.3,  80.0, "van Dokkum+2018; Danieli+2019"),
    ("NGC 1052-DF4",   1.5e8,  2.10, 4.2, 3.0,  80.0, "van Dokkum+2019"),
    ("Fornax dSph",    4.3e7,  0.93, 11.7, 0.9, 147.0, "de Boer+2012; Walker+2009"),
    ("Sculptor dSph",  2.3e6,  0.38, 9.2, 1.4,  86.0, "de Boer+2012; Walker+2009"),
]

def sigma_newton(M, rh):
    """Wolf+2010: M_1/2 = 4 sigma^2 r_1/2 / G  =>  sigma^2 = G*(M/2)/(4*r_h)."""
    return math.sqrt(G * (M / 2.0) / (4.0 * rh))

def sigma_mond_isolated(M):
    """Milgrom deep-MOND isolated: sigma^4 = (4/81) G M a0."""
    return ((4.0 / 81.0) * G * M * A0_KPC) ** 0.25

def mean_density(M, rh, frac=0.5):
    """Mean density inside r_half, Msun/pc^3.  frac = mass fraction inside r_half."""
    vol_pc3 = (4.0 / 3.0) * math.pi * (rh * 1e3) ** 3
    return (frac * M) / vol_pc3

def C_of(rho, gamma, rho_crit):
    if rho <= 0 or rho_crit <= 0:
        return 0.0
    return math.tanh(gamma * math.log(rho / rho_crit + 1.0))

# --- the convention forks the framework leaves open for a NON-rotating system ---
V_CONVENTIONS = {
    "V = sqrt(3)*sigma_obs":      lambda s, M, rh: math.sqrt(3.0) * s,
    "V = sqrt(2)*sigma_obs":      lambda s, M, rh: math.sqrt(2.0) * s,
    "V = sigma_obs":              lambda s, M, rh: s,
    "V = V_circ,bar(r_half)":     lambda s, M, rh: math.sqrt(G * (M / 2.0) / rh),
}
RHO_CONVENTIONS = {
    "rho_bar(<r_half)":  lambda M, rh: mean_density(M, rh, 0.5),
    "rho_bar(<r_half) total M": lambda M, rh: mean_density(M, rh, 1.0),
    "Plummer central":   lambda M, rh: mean_density(M, rh, 0.5) * 3.0,  # ~3x mean for Plummer core
}

print("=" * 100)
print("PRESSURE-SUPPORTED SYSTEMS UNDER THE FRAMEWORK'S OWN LAW")
print(f"a0 = {A0:.2e} m/s^2 = {A0_KPC:.4f} (km/s)^2/kpc")
print("=" * 100)

for name, M, rh, sobs, serr, D, ref in SYSTEMS:
    sN = sigma_newton(M, rh)
    sM = sigma_mond_isolated(M)
    print(f"\n### {name}   M_bar={M:.2e} Msun  r_1/2={rh} kpc   [{ref}]")
    print(f"    observed sigma_los       = {sobs:.2f} +/- {serr:.2f} km/s")
    print(f"    Newtonian baryons only   = {sN:.2f} km/s        (ratio obs/N = {sobs/sN:.2f})")
    print(f"    MOND isolated (deep)     = {sM:.2f} km/s        (ratio obs/M = {sobs/sM:.2f})")
    print(f"    {'V convention':<28} {'rho convention':<26} {'x=rho/rhoc':>11} {'C':>9} "
          f"{'sig 1/C branch':>15} {'sig V*C branch':>15}")
    for (vk, vf), (rk, rf) in itertools.product(V_CONVENTIONS.items(), RHO_CONVENTIONS.items()):
        V = vf(sobs, M, rh)
        rho = rf(M, rh)
        rho_crit = A_SITE * V * V
        x = rho / rho_crit
        C = C_of(rho, GAMMA_SPARC, rho_crit)
        # branch 1: f_DM = 1 - C  =>  M_dyn = M_bar / C  =>  sigma = sigma_N / sqrt(C)
        s1 = sN / math.sqrt(C) if C > 0 else float('inf')
        # branch 2 (galaxy-plotter): v^2 = v_b^2 + (V_flat*C)^2
        s2 = math.sqrt(sN * sN + (V * C) ** 2)
        print(f"    {vk:<28} {rk:<26} {x:>11.3e} {C:>9.5f} {s1:>15.2f} {s2:>15.2f}")
