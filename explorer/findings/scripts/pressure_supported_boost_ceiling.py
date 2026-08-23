#!/usr/bin/env python3
"""
Does the framework's BOOST CEILING survive pressure-supported dwarfs?

The ceiling is the framework's single structural difference from MOND that has
teeth (TEST-09, TEST-10).  Two published forms on the site:
    B_max = 1/Omega_m          = 3.17   (headline)
    B_max = 1/(1 - f_DM,max)   = 13.7   (the form that actually carries TEST-10,
                                         f_DM,max = 0.927; see boost-ceiling audit)
Required boost for a pressure-supported system is B_req = M_dyn/M_bar = (sigma_obs/sigma_N)^2,
with sigma_N from Wolf+2010: M_1/2 = 4 sigma^2 r_1/2 / G.

B_req is INDEPENDENT of:
  - the coupling-branch fork (1/C vs V_flat*C) -- it is a statement about total boost
  - the sigma->V_flat convention needed to define rho_crit
  - gamma, rho_crit, A, and the coarse-graining length
It depends on M_bar (i.e. on M/L) and on the equilibrium assumption.  Both are swept below.
"""
import math

G = 4.300917270e-6   # kpc (km/s)^2 / Msun
CEILINGS = {"1/Omega_m = 3.17": 3.17, "1/(1-f_DM,max) = 13.7": 13.7}

# name, L_V(Lsun), r_half_3D(kpc), sigma_obs, sigma_err, ML_fid, ML_lo, ML_hi
SYS = [
    ("Crater II",     1.6e5, 1.42,  2.7, 0.3, 2.0, 1.0, 4.0),
    ("Sculptor dSph", 1.4e6, 0.38,  9.2, 1.4, 1.6, 1.0, 3.0),
    ("Fornax dSph",   1.7e7, 0.93, 11.7, 0.9, 2.5, 1.5, 4.0),
    ("Draco dSph",    2.2e5, 0.29,  9.1, 1.2, 2.0, 1.0, 4.0),
    ("NGC 1052-DF2",  1.0e8, 2.90,  8.5, 2.3, 2.0, 1.5, 3.0),
    ("NGC 1052-DF4",  0.8e8, 2.10,  4.2, 3.0, 2.0, 1.5, 3.0),
]

def sigma_N(M, rh):
    return math.sqrt(G * (M / 2.0) / (4.0 * rh))

print("=" * 104)
print("REQUIRED BOOST B_req = (sigma_obs/sigma_N)^2  vs the framework's own ceiling")
print("M/L SYSTEMATIC IS REPORTED AS A BAND, NOT MARGINALISED INTO THE SIGNIFICANCE.")
print("=" * 104)
hdr = (f"{'system':<15}{'M_bar(fid)':>11}{'sig_N':>7}{'sig_obs':>9}{'B_req(fid)':>11}"
       f"{'B_req band(M/L)':>20}{'n_sig vs 3.17':>14}{'n_sig vs 13.7':>14}")
print(hdr)
print("-" * 104)
rows = []
for name, LV, rh, sobs, serr, mlf, mllo, mlhi in SYS:
    M = LV * mlf
    sN = sigma_N(M, rh)
    B = (sobs / sN) ** 2
    # random-only error on B from sigma_obs (B propto sigma^2)
    dB = 2.0 * B * (serr / sobs)
    # M/L band: B propto 1/M  => B_hi at ML_lo, B_lo at ML_hi
    B_hi = (sobs / sigma_N(LV * mllo, rh)) ** 2
    B_lo = (sobs / sigma_N(LV * mlhi, rh)) ** 2
    n317 = (B - 3.17) / dB
    n137 = (B - 13.7) / dB
    rows.append((name, B, B_lo, B_hi, dB, n317, n137))
    print(f"{name:<15}{M:>11.2e}{sN:>7.2f}{sobs:>9.2f}{B:>11.1f}"
          f"{f'[{B_lo:.1f}, {B_hi:.1f}]':>20}{n317:>14.1f}{n137:>14.1f}")

print("-" * 104)
print("\nVERDICT PER SYSTEM (ceiling exceeded at >3 sigma on the RANDOM error, and")
print("the WHOLE M/L band above the ceiling => the exceedance is not an M/L artifact):")
for name, B, B_lo, B_hi, dB, n317, n137 in rows:
    for label, ceil in CEILINGS.items():
        band_clears = B_lo > ceil
        sig_clears = (B - ceil) / dB > 3.0
        verdict = ("EXCEEDS (band-robust)" if band_clears and sig_clears else
                   "exceeds (fid only)" if B > ceil else "passes")
        print(f"  {name:<15} vs {label:<24} B_req={B:>7.1f}  band=[{B_lo:.1f},{B_hi:.1f}]  -> {verdict}")

print("\n" + "=" * 104)
print("CONTROL: same statistic on the ROTATING sector the ceiling was calibrated on")
print("TEST-10 reports 69% of SPARC galaxies exceed the 3.17 ceiling.  Typical SPARC")
print("dwarf f_DM ~ 0.85-0.95 => B ~ 6.7-20.  Crater II's B_req is ~3-9x THAT.")
print("=" * 104)
