#!/usr/bin/env python3
"""
A-from-Jeans chain-of-custody audit (Explorer 2026-06-07).

Topic: a-from-jeans-r0-derivation-audit.md
Question (as posed): is R0 = 8 kpc a universal constant or a Milky Way coincidence?

What this script establishes by direct numerical reconstruction:

1. The ORIGINAL derivation (simulations/session66_A_gap_investigation.py) does
   NOT use R0 = 8 kpc. It uses R0 = 0.07 kpc/(km/s)^0.75, the *coefficient* of an
   empirical size-velocity relation R_half = R0 * V^0.75, plus alpha=4.5 and a 4pi.

2. The Session66 markdown "Numerical Verification" block (alpha=1.0, R0=8 kpc)
   does NOT reproduce 0.0294 from its own stated numbers -- it needs an unexplained
   ~640x "unit conversion." It is a garbled retelling, not the real computation.

3. The velocity exponent FORK: the only way to get the framework's signature law
   rho_crit ∝ V^2 (equations.ts line 23) is to FREEZE the length at a constant.
   The actual derivation, with a galaxy-intrinsic length R_half = R0*V^0.75,
   produces rho_crit ∝ V^0.5 -- a different scaling law.

This is the decisive test the topic asked for, and it was already implicitly run
in Session 66's own script.
"""

import numpy as np

# ---- Physical constants (SI) ----
G_SI   = 6.674e-11      # m^3 kg^-1 s^-2
M_sun  = 1.989e30       # kg
pc     = 3.086e16       # m
kpc    = pc * 1e3
km     = 1e3            # m

# G in "galactic" units: (km/s)^2 * kpc / M_sun   (so V^2 = G_gal M / R works)
G_gal = G_SI * M_sun / kpc / km**2
print(f"G_gal = {G_gal:.4e}  (km/s)^2 kpc / M_sun")
print(f"sanity: V^2 for M=1e11 Msun, R=8 kpc -> {G_gal*1e11/8:.1f} (km/s)^2 "
      f"=> V={np.sqrt(G_gal*1e11/8):.0f} km/s\n")

print("="*72)
print("PART 1 -- Reproduce the ACTUAL Session 66 script result")
print("="*72)
# From session66_A_gap_investigation.py:
#   A = 4pi / (alpha^2 * G_gal * R0^2) / 1e9   [kpc^3 -> pc^3]
#   with alpha=4.5, R0=0.07 kpc/(km/s)^0.75
alpha_script = 4.5
R0_script    = 0.07           # kpc / (km/s)^0.75   <-- a size-velocity SLOPE, not 8 kpc
A_bare   = 1.0 / (alpha_script**2 * G_gal * R0_script**2) / 1e9
A_4pi    = 4*np.pi * A_bare
print(f"alpha = {alpha_script}, R0 = {R0_script} kpc/(km/s)^0.75 (size-velocity coefficient)")
print(f"A_bare           = {A_bare:.5f}")
print(f"A_bare * 4pi     = {A_4pi:.5f}   (empirical 0.028 -> ratio {A_4pi/0.028:.3f})")
print(f"   -> reproduces the archived 0.0294 / '5% agreement'. CONFIRMED.\n")

print("   NOTE the velocity scaling this derivation produces:")
print("   lambda_J = alpha * R_half ; R_half = R0 * V^0.75")
print("   rho_crit = V^2 / (alpha^2 G R_half^2) = V^2 / (alpha^2 G R0^2 V^1.5)")
print("            = V^0.5 / (alpha^2 G R0^2)   ==>  rho_crit ∝ V^0.5  (NOT V^2)\n")

print("="*72)
print("PART 2 -- The Session 66 MARKDOWN 'verification' (alpha=1, R0=8 kpc)")
print("="*72)
# markdown: A_computed = 4pi/(1.0 * 4.30e-3 * 6.4e7) "= 4.57e-5", then
# "converting to (km/s)^-2 units: 0.0294".
G_md   = 4.30e-3          # markdown's stated G
R0_md_pc2 = (8000.0)**2   # 6.4e7 pc^2
md_val = 4*np.pi / (1.0 * G_md * R0_md_pc2)
print(f"markdown numbers: 4pi/(1.0 * {G_md:g} * {R0_md_pc2:g}) = {md_val:.3e}")
print(f"markdown then claims this 'converts' to 0.0294")
print(f"   required conversion factor = 0.0294 / {md_val:.3e} = {0.0294/md_val:.1f}x  (UNEXPLAINED)")
print(f"   -> the markdown block does NOT reproduce 0.0294 from its own numbers.\n")

# What does a genuine fixed-length Jeans calc with R_half=8 kpc, beta_J=1 give,
# in the framework's A = rho_crit/V^2 units (Msun/pc^3 / (km/s)^2)?
print("   Honest fixed-length version (beta_J=1, R_half=8 kpc, rho_crit=V^2/(G beta^2 R^2)):")
beta_J = 1.0
R_half_fixed_kpc = 8.0
# rho_crit/V^2 = 1/(beta^2 G_gal R^2) in Msun/kpc^3/(km/s)^2 ; /1e9 -> /pc^3
A_fixed = 1.0/(beta_J**2 * G_gal * R_half_fixed_kpc**2) / 1e9
A_fixed_4pi = 4*np.pi*A_fixed
print(f"   A (no 4pi)   = {A_fixed:.3e}   A*4pi = {A_fixed_4pi:.3e}  Msun/pc^3/(km/s)^2")
print(f"   vs empirical 0.028 -> 4pi version is {0.028/A_fixed_4pi:.0f}x too SMALL.")
print(f"   (8 kpc is far too large a 'half-radius'; the script's effective R_half")
print(f"    at V~150 is R0*V^0.75 = {R0_script*150**0.75:.2f} kpc, ~17x smaller.)\n")

print("="*72)
print("PART 3 -- The exponent fork = the decisive test, already answered")
print("="*72)
print("Framework signature law (equations.ts:23):     rho_crit = A * V_flat^2")
print("Session 66 script's actual derivation:          rho_crit = A * V_flat^0.5")
print()
print("To convert V^0.5 -> V^2 you must REMOVE the galaxy-intrinsic V-dependence of")
print("the length, i.e. replace R_half = R0*V^0.75 (intrinsic) with R_half = const.")
print("The only 'const' on offer is 8 kpc. So:")
print("  * galaxy-intrinsic length  => rho_crit ∝ V^0.5  (wrong law, not used anywhere)")
print("  * fixed 8 kpc length        => rho_crit ∝ V^2    (framework law, but 8 kpc is")
print("                                 asserted identical for every galaxy)")
print()
# Demonstrate: what fixed length reproduces the empirical V^2 coefficient 0.028?
# A = 4pi/(beta^2 G_gal L^2)/1e9 = 0.028  ->  L^2 = 4pi/(beta^2 G_gal 0.028 1e9)
L_needed = np.sqrt(4*np.pi/(1.0**2 * G_gal * 0.028 * 1e9))
print(f"Fixed length L that makes the V^2 coefficient = 0.028 (beta=1, with 4pi):")
print(f"   L = {L_needed:.3f} kpc")
print(f"   -> i.e. you must pick L ~ {L_needed:.1f} kpc by hand. '8 kpc' is chosen to")
print(f"      land near 0.028, not derived. With beta_J also free, it is 2 knobs for 1 number.")
