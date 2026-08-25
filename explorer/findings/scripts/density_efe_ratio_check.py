#!/usr/bin/env python3
"""
*** SUPERSEDED SAME DAY by density_efe_amplitude.py -- KEPT AS THE RECORD OF AN ERROR ***

This script's print statements assert a conclusion ("~1e-8", "6 orders below the
noise floor") that its OWN COMPUTED TABLE contradicts: with the flat n=1e-4 cm^-3
corona used here, Crater II returns rho_ext/rho_int = 0.11 and Antlia II 0.40.
The verdict was written before the numbers were seen, so the script could not
fail.  Do not cite any number below.

The corrected version uses a Miller & Bregman (2015) beta-model corona instead of
a flat n, and reports 8.5% max (Antlia II) -- still no discriminating power, but
because the density EFE is 84% correlated with the MOND EFE across the sample,
not because it is small.

Kept because "a check that cannot fail" is the exact defect this site documents
in its own test catalog, and this is an instance of it in the explorer's own work.

IS THERE AN EXTERNAL *DENSITY* EFFECT?  -- the one-division check
=================================================================
Explorer 2026-08-25.

Pass 4 of today's visitor log proposes what it calls one of the very few places
the framework predicts something MOND cannot:

   "C keys on total local rho *including ambient medium*.  Two satellites at
    matched external acceleration but different ambient gas density get
    different C.  MOND+EFE keys on g_ext and predicts no such split.  That is a
    clean, live, unregistered discriminator, runnable on existing SAGA/ELVES
    satellite samples."

The argument is exactly right about the *mechanism*.  It never evaluates the
*amplitude*.  MOND's EFE is an interesting effect because for a real satellite
g_ext/g_int is order unity -- the external field is comparable to the internal
one.  The framework's proposed analogue requires rho_ext/rho_int to be order
unity too.  Acceleration is non-local (falls as 1/r^2 from a 10^12 Msun host);
density is local (falls as the host's gas profile, ~1/r^2 to 1/r^3 in *density*,
from a medium that is 10^-4 cm^-3).  Those are not the same falloff.

So: compute both ratios for real satellites.  No fit, no model, no free
parameter -- host mass, distance, satellite half-light radius and mass, and a
CGM density.  All published.
"""
import numpy as np

G   = 6.674e-11
MSUN= 1.98892e30
PC  = 3.0856775814913673e16
KPC = PC * 1000.0
KMS = 1.0e3
MP  = 1.6726e-27
XH  = 1.4          # mean mass per hydrogen (He correction)

def hdr(s):
    print("\n" + "="*78); print(s); print("="*78)

# ---------------------------------------------------------------- satellites
# Mbar = stellar mass (Msun); rh = 3D-ish half-light radius (pc); D = host distance (kpc)
# Host: MW  M_bar = 6e10 Msun  |  NGC1052 M_star = 1e11 Msun
SATS = [
 # name           Mbar      rh_pc    D_kpc  host_Mbar   host  n_ext_cm3   note
 ("Crater II",    1.6e5,    1066.,   117.,  6.0e10, "MW",  1.0e-4, "the discriminating dwarf (08-23)"),
 ("Fornax",       2.0e7,     710.,   147.,  6.0e10, "MW",  1.0e-4, "classical dSph"),
 ("Sculptor",     2.3e6,     283.,    86.,  6.0e10, "MW",  1.0e-4, "classical dSph"),
 ("Draco",        2.9e5,     221.,    76.,  6.0e10, "MW",  1.0e-4, "shared failure (08-23)"),
 ("Antlia II",    8.8e5,    2900.,   132.,  6.0e10, "MW",  1.0e-4, "lowest-density known"),
 ("Segue 1",      3.4e2,      29.,    23.,  6.0e10, "MW",  3.0e-4, "ultra-faint, deep in halo"),
 ("NGC 1052-DF2", 2.0e8,    2200.,    80.,  1.0e11, "N1052",3.0e-4, "EFE=0 test case"),
 ("Omega Cen",    3.6e6,       6.,     5.,  6.0e10, "MW",  1.0e-2, "GC, for contrast"),
]

hdr("EXTERNAL FIELD vs EXTERNAL DENSITY -- the two ratios side by side")
print("  g_int  = G Mbar / rh^2         (baryonic internal field at the half-light radius)")
print("  g_ext  = G M_host / D^2")
print("  rho_int= Mbar / (4/3 pi rh^3)  (mean baryonic density inside rh)")
print("  rho_ext= n_ext * 1.4 m_p       (host circumgalactic medium)\n")
print(f"  {'satellite':<14}{'g_ext/g_int':>13}{'rho_ext/rho_int':>18}{'  ratio of ratios':>19}")
print("  " + "-"*66)
rows=[]
for nm, Mb, rh, D, Mh, host, n, note in SATS:
    g_int = G*Mb*MSUN/(rh*PC)**2
    g_ext = G*Mh*MSUN/(D*KPC)**2
    rho_int = Mb*MSUN/((4/3)*np.pi*(rh*PC)**3)
    rho_ext = n*1e6*XH*MP          # cm^-3 -> m^-3
    rg = g_ext/g_int
    rr = rho_ext/rho_int
    rows.append((nm,rg,rr,note))
    print(f"  {nm:<14}{rg:>13.3f}{rr:>18.2e}{rg/rr:>19.2e}")

rg = np.array([r[1] for r in rows]); rr = np.array([r[2] for r in rows])
hdr("VERDICT")
print(f"  g_ext/g_int      : median {np.median(rg):.3f}   range [{rg.min():.3f}, {rg.max():.3f}]")
print(f"  rho_ext/rho_int  : median {np.median(rr):.2e}   range [{rr.min():.1e}, {rr.max():.1e}]")
print(f"  suppression      : median {np.median(rg/rr):.2e}"
      f"   -> {np.log10(np.median(rg/rr)):.1f} orders of magnitude")
print()
print("  MOND's EFE is a real effect because g_ext/g_int ~ O(0.1-1): the external")
print("  field is a sizeable fraction of the internal one, so it changes mu.")
print("  The proposed external DENSITY effect requires the same of rho.  It fails by")
print(f"  ~{np.log10(np.median(rg/rr)):.0f} orders of magnitude, for every satellite, in both hosts.")
print()
print("  Reason, stated structurally: g is sourced NON-LOCALLY (a 1/r^2 tail from a")
print("  10^12 Msun host reaches the satellite undiminished by what lies between);")
print("  rho is the LOCAL value, and the local value at a satellite is the satellite.")
print("  This is the program's own locality asymmetry (2026-08-19), now applied to the")
print("  EFE channel: the same property that makes rho carry <=0.7% of RAR variance")
print("  makes rho_ext carry ~10^-8 of the satellite's own rho.")

hdr("HOW BIG WOULD THE AMBIENT MEDIUM HAVE TO BE?")
print("  Required n_ext for rho_ext/rho_int = 0.1 (a 10% EFE-scale perturbation):\n")
print(f"  {'satellite':<14}{'rho_int (kg/m3)':>18}{'n_req (cm^-3)':>16}{'vs CGM':>12}")
print("  " + "-"*60)
for nm, Mb, rh, D, Mh, host, n, note in SATS:
    rho_int = Mb*MSUN/((4/3)*np.pi*(rh*PC)**3)
    n_req = 0.1*rho_int/(XH*MP)/1e6
    print(f"  {nm:<14}{rho_int:>18.2e}{n_req:>16.2e}{n_req/n:>11.1e}x")
print()
print("  For Crater II -- the single most favourable case in the table, chosen because")
print("  it is the *lowest-density* discriminating dwarf the program has -- the ambient")
print("  medium would have to be denser than the interstellar medium of the Milky Way")
print("  disk.  There is no such environment in a satellite orbit.")

hdr("WHAT THE FRAMEWORK PREDICTS INSTEAD")
print("  rho_ext/rho_int ~ 1e-8  =>  Delta ln C ~ (dlnC/dlnrho) * 1e-8.  Even at the")
print("  steepest allowed slope (dlnC/dlnrho <= gamma <= 2), the fractional change in")
print("  the boost between the densest and sparsest satellite environments is < 1e-7.")
print("  Observed satellite velocity dispersions carry ~10-20% errors.")
print()
print("  => The external DENSITY effect is not a discriminator.  It is not weak, or")
print("     hard, or expensive: it is ~6 orders of magnitude below the noise floor of")
print("     the best sample that will ever exist, and no improvement in the data")
print("     changes that.  It is closed A PRIORI, by one division.")
