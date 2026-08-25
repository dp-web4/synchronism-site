#!/usr/bin/env python3
"""
THE FRAMEWORK'S FIELD EQUATION IS REFRACTED GRAVITY (Matsakos & Diaferio 2016)
==============================================================================
Explorer 2026-08-25.

Pass 4 of today's visitor log identified the site's largest prior-art exposure
and named the wrong prior art:

   "that is Bekenstein & Milgrom (1984) AQUAL with mu -> C(rho) ... and the
    class of theories in which the coupling depends on local density --
    chameleon (Khoury & Weltman 2004), symmetron, dilaton, Blanchet's dipolar
    dark matter.  This is the framework's single most important prior-art
    exposure."

The chameleon/symmetron family is NOT the right comparison: those are scalar
fields with a thin-shell/Yukawa screening mechanism and a fifth force, not a
density-dependent coefficient on the Poisson operator.  There is an exact
match, and it is closer than a family resemblance -- it is the same equation:

  REFRACTED GRAVITY, Matsakos & Diaferio (2016), arXiv:1603.04943
    field eq (their 2.3):   div( epsilon grad Phi ) = 4 pi G rho
    permittivity (their 4.1):
        epsilon(rho) = eps0 + (1 - eps0) * 0.5 * { tanh[ log( (rho/rho_c)^q ) ] + 1 }
    eps0  = "vacuum permittivity", 0 < eps0 < 1   -- a FLOOR on the coupling
    rho_c = critical density
    q     = steepness

  SYNCHRONISM SITE
    field eq (/for-researchers):  div( C(rho) grad Phi ) = 4 pi G rho
    C_rho  = tanh( gamma * ln(1 + rho/rho_crit) )                 [no floor]
    C_Omega= Omega_m + (1-Omega_m) * x/(1+x),  x = (g_bar/a0)^(1/phi)  [floor]

Same operator, same tanh-of-log-density transition, same two parameters plus a
floor.  Published ten years earlier.  This script checks HOW close, numerically,
rather than asserting it.
"""
import numpy as np
from scipy.optimize import minimize

def hdr(s): print("\n"+"="*80); print(s); print("="*80)

def eps_RG(rho, rho_c, q, eps0, base10=True):
    l = np.log10(rho/rho_c) if base10 else np.log(rho/rho_c)
    return eps0 + (1-eps0)*0.5*(np.tanh(q*l) + 1.0)

def C_rho(rho, rho_crit, gam):
    return np.tanh(gam*np.log1p(rho/rho_crit))

def C_Omega(x, Om, p):
    xx = np.power(x, p)
    return Om + (1-Om)*xx/(1+xx)

hdr("(1) C_Omega IS RG's PERMITTIVITY, ALGEBRAICALLY -- the logistic written twice")
print("  0.5*(tanh(u)+1) = 1/(1+exp(-2u))                       [logistic]")
print("  y/(1+y) with y = z^p = exp(p ln z) = 1/(1+exp(-p ln z)) [logistic]")
print("  => identical with  u = (p/2) ln z,  i.e.  q*log10(z) = (p/2) ln z")
print("     =>  p = 2q/ln(10) = 0.8686 q      (RG uses log base 10)\n")
z = np.logspace(-4, 4, 4000)
for q in (0.5, 0.75, 2.0):
    p = 2*q/np.log(10)
    a = eps_RG(z, 1.0, q, 0.315)
    b = C_Omega(z, 0.315, p)
    print(f"  q = {q:<5}  ->  p = {p:.4f}   max |eps_RG - C_Omega| over 8 decades"
          f" = {np.max(np.abs(a-b)):.3e}")
print("\n  ** EXACT.  C_Omega's functional form is RG's permittivity, with the")
print("     'vacuum permittivity' eps0 renamed Omega_m and 1/phi in place of p. **")
print("  The site calls the resulting bounded boost B <= 1/Omega_m 'the framework's")
print("  only feature distinguishing it from MOND'.  In RG that is B <= 1/eps0, a")
print("  published property of the 2016 construction.")

hdr("(2) C_rho IS RG's PERMITTIVITY AT eps0 = 0, up to the regulator")
print("  RG at eps0=0:  eps = 0.5*(tanh(q log10(rho/rho_c)) + 1)")
print("  Site:          C   = tanh(gamma ln(1 + rho/rho_crit))")
print("  Both are tanh-of-log-density on [0,1).  They differ ONLY in how the")
print("  rho -> 0 limit is regulated: RG shifts and halves, the site adds 1")
print("  inside the log.  Fit one to the other and report the residual.\n")
r = np.logspace(-26, -19, 3000)      # kg/m^3, galaxy-relevant
for (rc_rg, q) in [(1e-21, 0.75), (1e-24, 0.75), (1e-21, 2.0)]:
    tgt = eps_RG(r, rc_rg, q, 0.0)
    def cost(th):
        lrc, lg = th
        return np.mean((C_rho(r, np.exp(lrc), np.exp(lg)) - tgt)**2)
    best = min((minimize(cost, [np.log(rc_rg*s), np.log(q*t)], method="Nelder-Mead",
                         options=dict(maxiter=4000, fatol=1e-14))
                for s in (0.1,1,10) for t in (0.5,1,2)), key=lambda o: o.fun)
    rc_f, g_f = np.exp(best.x)
    res = C_rho(r, rc_f, g_f) - tgt
    print(f"  RG(rho_c={rc_rg:.0e}, q={q:.2f})  ->  best C_rho: rho_crit={rc_f:.3e},"
          f" gamma={g_f:.4f}")
    print(f"      rms residual = {res.std():.4f}   max |residual| = {np.abs(res).max():.4f}"
          f"   over 7 decades in rho")

hdr("(3) WHERE THE SITE'S FITTED PARAMETERS SIT IN RG's PUBLISHED SPACE")
print("  RG's published values (Matsakos & Diaferio 2016, sec 4; Cesare+2020):")
print("    galaxies : q = 3/4,  eps0 = 0.20-0.25,  rho_c = 1e-24 to 1e-27 g/cm^3")
print("    clusters : q = 2,    eps0 = 0.045-0.065, rho_c = 1e-24 g/cm^3")
print("               (1 g/cm^3 = 1000 kg/m^3, so rho_c = 1e-21 to 1e-24 kg/m^3)\n")
print(f"  {'quantity':<34}{'site':>22}{'RG published':>24}")
print("  "+"-"*80)
rows = [
 ("steepness",            "gamma = 2 (asserted)",       "q = 0.75 (galaxies)"),
 ("steepness, fitted",    "gamma = 0.489 / 0.4983",     "q = 0.75 / 2"),
 ("critical density",     "rho_crit = 3.0e-25 kg/m^3",  "rho_c = 1e-21..1e-24 kg/m^3"),
 ("floor",                "Omega_m = 0.315 (C_Omega)",  "eps0 = 0.20-0.25 (galaxies)"),
 ("max boost",            "1/Omega_m = 3.17",           "1/eps0 = 4.0-5.0"),
 ("field equation",       "div(C grad Phi) = 4 pi G rho","div(eps grad Phi) = 4 pi G rho"),
 ("covariant completion", "'none exists' / Brans-Dicke", "scalar-tensor, phi = 2 eps"),
 ("EFE / SEP",            "EFE = 0, claimed a theorem",  "'possible violation of SEP',"),
 ("",                     "",                            "flagged OPEN (their 2.2.1)"),
]
for a,b,c in rows: print(f"  {a:<34}{b:>22}{c:>24}")
print("\n  CAUTION -- these must be compared THROUGH the regulator mapping in (2),")
print("  not by reading the raw symbols side by side.  Done properly:")
print()
print("    rho_crit: the site's fitted 3.0e-25 kg/m^3 maps to RG rho_c ~ 2.7e-24")
print("      kg/m^3 = 2.7e-27 g/cm^3, which IS inside RG's quoted galaxy range")
print("      (1e-24 to 1e-27 g/cm^3).  Agreement is real.")
print("    steepness: RG's galaxy q = 0.75 maps to gamma = 0.245, NOT to 0.75.")
print("      The site's fitted gamma = 0.489-0.498 is therefore ~2x STEEPER than")
print("      RG's disc-galaxy value, sitting between RG's galaxies (q=0.75) and")
print("      its clusters (q=2).  It does not 'bracket q=3/4 from below' -- that")
print("      reading compares a natural-log slope to a base-10 one.")
print("    floor: Omega_m = 0.315 vs RG's disc eps0 = 0.20-0.25, a ~30% offset;")
print("      the site DERIVES its floor from cosmology, RG FITS its floor.  That")
print("      is a real difference and it is the one place the site's version is")
print("      more constrained than the prior art.")
print()
print("  Two of three parameters agree once mapped; the third is 2x off.  None is")
print("  cited.  The site's floor being derived rather than fitted is the single")
print("  defensible novelty in the comparison, and it is a novelty about")
print("  PARAMETER ECONOMY, not about the equation.")

hdr("(4) THE TEST PASS 4 CALLS UNREGISTERED IS THIS LITERATURE'S STANDARD METHOD")
print("  Pass 4: 'Vertical disk structure ... Gaia DR3 vertical-Jeans measurements")
print("  exist now.  This is a Tier-1, existing-data, zero-cost test.' and 'the")
print("  catalog contains none of them'.")
print()
print("  Cesare, Diaferio, Matsakos & Dominguez Romero (2020), A&A 637, A70:")
print("    'the rotation curves AND the radial profiles of the stellar velocity")
print("     dispersion PERPENDICULAR to the galactic disks of 30 galaxies from the")
print("     DiskMass Survey ... to determine the gravitational permittivity'")
print()
print("  So the vertical channel is not an unexploited gap -- it is how the")
print("  competing implementation of the SAME equation fixed its free function,")
print("  six years ago, on 30 galaxies.  That does not make the test worthless.")
print("  It makes it CHEAPER and SHARPER than Pass 4 realised: there is a")
print("  published, fitted, three-parameter competitor with the identical field")
print("  equation to run head-to-head against, instead of a blank-sheet forecast.")
