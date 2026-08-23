#!/usr/bin/env python3
"""FINAL: Crater II as a discriminating test. Framework ceiling vs MOND+EFE vs measurement."""
import math
G = 4.300917270e-6
LV, ML, rh = 1.6e5, 2.0, 1.42
M = LV*ML
sN = math.sqrt(G*(M/2.0)/(4.0*rh))
sobs, serr = 2.7, 0.3
mcg, mcg_hi, mcg_lo = 2.1, 0.9, 0.6      # McGaugh 2016 ApJL 832 L8, a priori, MOND+EFE
print(f"Crater II   M_bar = {M:.2e} Msun (L_V=1.6e5, M/L=2)   r_1/2 = {rh} kpc")
print(f"  Newtonian baryons only        sigma_N   = {sN:.2f} km/s")
print(f"  MEASURED (Caldwell+2017)      sigma_obs = {sobs} +/- {serr} km/s")
print(f"  Required boost B_req = (obs/N)^2        = {(sobs/sN)**2:.1f}\n")
print(f"  MOND+EFE, a priori (McGaugh 2016)       = {mcg} (+{mcg_hi}/-{mcg_lo}) km/s"
      f"   -> {(sobs-mcg)/math.hypot(serr,mcg_hi):.1f} sigma  CONSISTENT")
for B,lbl in [(3.17,"B_max = 1/Omega_m  = 3.17"),(13.7,"B_max = 1/(1-f_DM,max) = 13.7")]:
    smax = sN*math.sqrt(B)
    print(f"  Framework MAX at {lbl:<32} = {smax:.2f} km/s"
          f"   -> {(sobs-smax)/serr:.1f} sigma  EXCEEDED")
print("\n  Errors are RANDOM-ONLY on sigma_obs. M/L in [1,4] moves B_req to [30,120];")
print("  the whole band exceeds both ceilings. Sole live escape: Crater II out of")
print("  equilibrium (needs sigma inflated >=1.63x), which also voids McGaugh's a-priori hit.")
print("\n  NOTE: EFE=0 -- the framework's OTHER structural difference -- is the framework's")
print("  MOST FAVOURABLE case here (an EFE only LOWERS sigma). The ceiling fails anyway.")
