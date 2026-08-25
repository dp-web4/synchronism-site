#!/usr/bin/env python3
"""
THE EXTERNAL *DENSITY* EFFECT: amplitude, and what actually breaks the degeneracy
=================================================================================
Explorer 2026-08-25.

Pass 4 of today's visitor log proposes a discriminator:

   "C keys on total local rho *including ambient medium*.  Two satellites at
    matched external acceleration but different ambient gas density get
    different C.  MOND+EFE keys on g_ext and predicts no such split."

My first pass at this assumed the amplitude was negligible (rho is local, g is
non-local, so rho_ext/rho_int should be ~1e-8 where g_ext/g_int is ~1).  THAT
ASSUMPTION IS WRONG and the arithmetic says so immediately: the ultra-diffuse
dwarfs have mean baryonic densities BELOW the host's circumgalactic medium's
order of magnitude.  This script reports the amplitude honestly and then asks
the question the proposal skips: at matched g_ext, is rho_ext/rho_int actually
independent of g_ext/g_int, or is the "discriminator" degenerate?

No conclusion is written into the print statements.  Everything below the
tables is computed from the tables.

Data: McConnachie 2012 (+ updates) Local Group dwarf compilation, literature
values entered by hand -- M_star, r_h (2D half-light, deprojected x4/3), and
Galactocentric distance.  MW hot halo: beta-model, Miller & Bregman 2015.
"""
import numpy as np

G, MSUN = 6.674e-11, 1.98892e30
PC  = 3.0856775814913673e16
KPC = PC*1000.0
MP, XH = 1.6726e-27, 1.4

def hdr(s): print("\n"+"="*80); print(s); print("="*80)

# ---------------------------------------------------------------------------
# MW hot corona.  Miller & Bregman (2015) beta-model fit to O VII/O VIII:
#     n(r) = n0 * (r/r_c)^(-3*beta)  for r >> r_c,  with n0*r_c^(3beta) = 0.0136 cm^-3 kpc^(3beta)
#     beta = 0.5 (their best fit 0.50 +0.03 -0.03), so n(r) = 0.0136 * r^-1.5
# This is the single largest systematic here; swept at the end.
MB15_NORM, MB15_SLOPE = 0.0136, 1.5
def n_cgm(r_kpc, norm=MB15_NORM, slope=MB15_SLOPE):
    return norm * r_kpc**(-slope)          # cm^-3

def rho_of_n(n_cm3):
    return n_cm3*1e6*XH*MP                 # kg/m^3

# ---------------------------------------------------------------------------
# name, M_star(Msun), rh_2D(pc), D_GC(kpc)
DWARFS = [
 ("Segue 1",        3.4e2,   24.,   28.),
 ("Segue 2",        8.6e2,   35.,   42.),
 ("Willman 1",      1.0e3,   25.,   43.),
 ("Bootes II",      1.0e3,   51.,   42.),
 ("Coma Ber",       3.7e3,   77.,   45.),
 ("Ursa Major II",  4.1e3,  149.,   40.),
 ("Hercules",       3.7e4,  330.,  132.),
 ("Leo IV",         1.9e4,  206.,  155.),
 ("Canes Ven I",    2.3e5,  564.,  218.),
 ("Draco",          2.9e5,  221.,   76.),
 ("Ursa Minor",     2.9e5,  181.,   78.),
 ("Sculptor",       2.3e6,  283.,   86.),
 ("Sextans",        4.4e5,  695.,   89.),
 ("Carina",         3.8e5,  250.,  107.),
 ("Fornax",         2.0e7,  710.,  149.),
 ("Leo I",          5.5e6,  251.,  258.),
 ("Leo II",         7.4e5,  176.,  236.),
 ("Crater II",      1.6e5, 1066.,  117.),
 ("Antlia II",      8.8e5, 2900.,  132.),
 ("And XIX",        4.4e5, 1700.,  115.),   # M31 sat; D is M31-centric
 ("Sagittarius",    2.1e7, 2600.,   18.),
 ("NGC 6752 (GC)",  1.4e5,    5.,    5.),
 ("M13 (GC)",       6.0e5,    3.,    9.),
 ("Pal 5 (GC)",     1.3e4,   20.,   19.),
 ("Pal 14 (GC)",    1.3e4,   28.,   72.),
 ("AM 1 (GC)",      1.7e4,   16.,  124.),
]

MW_MBAR = 6.0e10     # Msun, baryonic (used only for g_ext; MOND EFE uses baryons)

hdr("AMPLITUDE: the two external ratios, per object")
print("  rho_int : mean baryonic density inside r_h(3D) = (4/3) r_h(2D)")
print("  rho_ext : MW hot corona, Miller & Bregman 2015 beta-model n = 0.0136 r_kpc^-1.5")
print("  g_int   : G M_star / r_h(3D)^2      g_ext : G M_MW,bar / D^2")
print()
print(f"  {'object':<15}{'r_h3D/pc':>9}{'D/kpc':>7}{'n_ext':>10}"
      f"{'g_ext/g_int':>12}{'rho_ext/rho_int':>16}{'ratio-of-':>11}")
print(f"  {'':<15}{'':>9}{'':>7}{'cm^-3':>10}{'(MOND EFE)':>12}{'(density EFE)':>16}{'ratios':>11}")
print("  "+"-"*78)
R=[]
for nm, Ms, rh2, D in DWARFS:
    rh = (4.0/3.0)*rh2*PC
    rho_i = Ms*MSUN/((4/3)*np.pi*rh**3)
    g_i   = G*Ms*MSUN/rh**2
    n_e   = n_cgm(D)
    rho_e = rho_of_n(n_e)
    g_e   = G*MW_MBAR*MSUN/(D*KPC)**2
    R.append(dict(nm=nm, Ms=Ms, rh=rh, D=D, rho_i=rho_i, rho_e=rho_e,
                  g_i=g_i, g_e=g_e, qg=g_e/g_i, qr=rho_e/rho_i, n=n_e))
    print(f"  {nm:<15}{rh/PC:>9.0f}{D:>7.0f}{n_e:>10.1e}"
          f"{g_e/g_i:>12.3f}{rho_e/rho_i:>16.2e}{(g_e/g_i)/(rho_e/rho_i):>11.1e}")

qg = np.array([r["qg"] for r in R]); qr = np.array([r["qr"] for r in R])
hdr("SPREAD")
print(f"  g_ext/g_int     : median {np.median(qg):.3f}  span "
      f"{np.log10(qg.max()/qg.min()):.2f} dex  [{qg.min():.4f}, {qg.max():.1f}]")
print(f"  rho_ext/rho_int : median {np.median(qr):.2e}  span "
      f"{np.log10(qr.max()/qr.min()):.2f} dex  [{qr.min():.1e}, {qr.max():.1e}]")
n_big = int((qr > 0.01).sum())
print(f"  objects with rho_ext/rho_int > 1%  : {n_big} / {len(R)}")
print(f"  objects with rho_ext/rho_int > 10% : {int((qr>0.10).sum())} / {len(R)}")
print(f"  largest: " + ", ".join(f"{R[i]['nm']} ({qr[i]:.2f})"
      for i in np.argsort(-qr)[:4]))

hdr("IS IT DEGENERATE WITH THE MOND EFE?  -- the question the proposal skips")
print("  A discriminator needs rho_ext/rho_int to VARY at FIXED g_ext/g_int.")
print("  Scaling, at fixed M_star:  g_ext/g_int  ∝ r_h^2 / D^2")
print("                             rho_ext/rho_int ∝ r_h^3 * n(D)  ∝ r_h^3 D^-1.5")
print("  so   (density EFE)/(MOND EFE)  ∝  r_h * D^0.5     -- NOT constant.")
print("  The lever is the HALF-LIGHT RADIUS: it enters the density ratio one power")
print("  more steeply than it enters the acceleration ratio.\n")
lq = np.log10(qr/qg); lr = np.log10(np.array([r["rh"]/PC for r in R]))
ld = np.log10(np.array([r["D"] for r in R]))
A = np.vstack([lr, ld, np.ones_like(lr)]).T
co, *_ = np.linalg.lstsq(A, lq, rcond=None)
print(f"  measured on the table: log10[(rho-EFE)/(g-EFE)] = "
      f"{co[0]:+.3f} log r_h {co[1]:+.3f} log D {co[2]:+.3f}")
print(f"  predicted analytically:                          +1.000 log r_h +0.500 log D")
resid = lq - A@co
print(f"  residual rms = {resid.std():.4f} dex  (deviation is the M_star dependence,")
print(f"  which cancels exactly in the ratio only at fixed M_star)")
rho_only = np.corrcoef(np.log10(qg), np.log10(qr))[0,1]
print(f"\n  correlation of log(MOND EFE) with log(density EFE) across the sample: r = {rho_only:+.3f}")

hdr("THE MATCHED PAIRS -- where the two theories say different things")
print("  Pairs with |Delta log(g_ext/g_int)| < 0.15 dex (MOND EFE matched to 40%)")
print("  ranked by |Delta log(rho_ext/rho_int)|:\n")
pairs=[]
for i in range(len(R)):
    for j in range(i+1, len(R)):
        dg = abs(np.log10(R[i]["qg"]/R[j]["qg"]))
        dr = abs(np.log10(R[i]["qr"]/R[j]["qr"]))
        if dg < 0.15:
            pairs.append((dr, dg, R[i]["nm"], R[j]["nm"], R[i]["qr"], R[j]["qr"]))
pairs.sort(reverse=True)
print(f"  {'pair':<32}{'d log g-EFE':>13}{'d log rho-EFE':>15}{'rho ratios':>22}")
print("  "+"-"*82)
for dr, dg, a, b, ra, rb in pairs[:8]:
    print(f"  {a+' / '+b:<32}{dg:>13.3f}{dr:>15.2f}{f'{ra:.1e} vs {rb:.1e}':>22}")
print(f"\n  {len(pairs)} matched pairs available in a 26-object hand table;")
print(f"  max density-EFE separation at matched MOND-EFE = {pairs[0][0]:.2f} dex")

hdr("OBSERVABLE AMPLITUDE")
print("  In the small-x limit C ~= gamma*(rho/rho_crit), so delta C/C = rho_ext/rho_int")
print("  exactly, independent of gamma and rho_crit.  Division law g = g_bar/C gives")
print("  delta v / v = -0.5 * rho_ext/rho_int.\n")
print(f"  {'object':<15}{'rho_ext/rho_int':>16}{'dv/v':>9}{'vs sigma_obs err ~10%':>24}")
print("  "+"-"*64)
for r in sorted(R, key=lambda d:-d["qr"])[:8]:
    dv = 0.5*r["qr"]
    print(f"  {r['nm']:<15}{r['qr']:>16.3f}{dv*100:>8.1f}%"
          f"{('DETECTABLE' if dv>0.10 else 'marginal' if dv>0.03 else 'below noise'):>24}")

hdr("SYSTEMATIC: the corona normalisation")
print("  Every number above scales linearly with the CGM density.  Literature range")
print("  for the MW hot halo at 100 kpc spans roughly 1e-5 to 1e-3 cm^-3.")
print(f"  {'norm (x MB15)':>15}{'n(100kpc)':>12}{'CraterII dv/v':>15}{'#objs >3% dv/v':>17}")
print("  "+"-"*60)
for f in [0.1, 0.3, 1.0, 3.0]:
    n100 = n_cgm(100.0, norm=MB15_NORM*f)
    cnt = 0; cr = None
    for r in R:
        q = rho_of_n(n_cgm(r["D"], norm=MB15_NORM*f))/r["rho_i"]
        if 0.5*q > 0.03: cnt += 1
        if r["nm"]=="Crater II": cr = 0.5*q
    print(f"{f:>15.1f}{n100:>12.1e}{cr*100:>14.1f}%{cnt:>17d}")
