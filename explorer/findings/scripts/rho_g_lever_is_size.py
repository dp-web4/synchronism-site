#!/usr/bin/env python3
"""
THE rho-vs-g DISCRIMINATION LEVER IS EXACTLY log r_h
=====================================================
Explorer 2026-08-25.

Pass 4 proposes three "regimes where rho and g_bar decouple," each justified by
a large density contrast:

   "globular clusters vs. diffuse dwarfs at matched internal acceleration --
    same g_int, rho differing by MANY ORDERS OF MAGNITUDE -- a *pure* C-vs-mu
    discriminator by construction"
   "molecular clouds ... rho is 10^3-10^6x the disk mean at still-low accelerations"

The density contrast quoted is the contrast between the objects AS THEY ARE.
It is not the contrast available AT MATCHED ACCELERATION, and those are not the
same number, because for any self-gravitating system

        g = G M / r^2        rho = 3M / (4 pi r^3)
   =>   rho / g  =  3 / (4 pi G r)          <-- M CANCELS EXACTLY

So AT FIXED g, log rho = -log r + const.  The entire discriminating lever
between a density-keyed and an acceleration-keyed coupling is the dynamic range
of the SIZE, and nothing else.  Mass, luminosity, M/L, and the density contrast
between unmatched objects are all irrelevant.

This script (a) verifies the identity numerically, (b) measures the lever
actually available in the Local Group, and (c) asks whether matched-g_int pairs
spanning it EXIST rather than assuming they do.
"""
import numpy as np
G, MSUN = 6.674e-11, 1.98892e30
PC = 3.0856775814913673e16
KPC = PC*1000.0

def hdr(s): print("\n"+"="*80); print(s); print("="*80)

# name, M_star (Msun), r_h 2D (pc), class
OBJ = [
 ("M13",            6.0e5,     3.,  "GC"),
 ("NGC 6752",       1.4e5,     5.,  "GC"),
 ("47 Tuc",         7.0e5,     4.,  "GC"),
 ("Omega Cen",      3.6e6,     6.,  "GC"),
 ("NGC 6397",       1.0e5,     3.,  "GC"),
 ("Pal 5",          1.3e4,    20.,  "GC"),
 ("Pal 14",         1.3e4,    28.,  "GC"),
 ("Pal 4",          2.0e4,    18.,  "GC"),
 ("AM 1",           1.7e4,    16.,  "GC"),
 ("Eridanus",       1.4e4,    13.,  "GC"),
 ("Segue 1",        3.4e2,    24.,  "UFD"),
 ("Segue 2",        8.6e2,    35.,  "UFD"),
 ("Willman 1",      1.0e3,    25.,  "UFD"),
 ("Bootes II",      1.0e3,    51.,  "UFD"),
 ("Coma Ber",       3.7e3,    77.,  "UFD"),
 ("Ursa Major II",  4.1e3,   149.,  "UFD"),
 ("Hercules",       3.7e4,   330.,  "UFD"),
 ("Leo IV",         1.9e4,   206.,  "UFD"),
 ("Canes Ven I",    2.3e5,   564.,  "dSph"),
 ("Draco",          2.9e5,   221.,  "dSph"),
 ("Ursa Minor",     2.9e5,   181.,  "dSph"),
 ("Sculptor",       2.3e6,   283.,  "dSph"),
 ("Sextans",        4.4e5,   695.,  "dSph"),
 ("Carina",         3.8e5,   250.,  "dSph"),
 ("Fornax",         2.0e7,   710.,  "dSph"),
 ("Leo I",          5.5e6,   251.,  "dSph"),
 ("Leo II",         7.4e5,   176.,  "dSph"),
 ("Crater II",      1.6e5,  1066.,  "UDG-like"),
 ("Antlia II",      8.8e5,  2900.,  "UDG-like"),
 ("And XIX",        4.4e5,  1700.,  "UDG-like"),
 ("NGC1052-DF2",    2.0e8,  2200.,  "UDG"),
 ("NGC1052-DF4",    1.5e8,  1600.,  "UDG"),
 ("Dragonfly 44",   3.0e8,  4700.,  "UDG"),
]

rows=[]
for nm, Ms, rh2, cl in OBJ:
    r = (4.0/3.0)*rh2*PC
    M = Ms*MSUN
    g   = G*M/r**2
    rho = 3*M/(4*np.pi*r**3)
    rows.append(dict(nm=nm, cl=cl, M=Ms, r=r, g=g, rho=rho))

hdr("(a) THE IDENTITY  rho/g = 3/(4 pi G r),  verified numerically")
print(f"  {'object':<15}{'class':<10}{'r_h3D/pc':>10}{'g_int':>11}{'rho_int':>11}"
      f"{'rho/g':>12}{'3/(4piGr)':>12}{'ratio':>8}")
print("  "+"-"*89)
for d in rows[:6] + rows[-6:]:
    pred = 3.0/(4*np.pi*G*d["r"])
    print(f"  {d['nm']:<15}{d['cl']:<10}{d['r']/PC:>10.1f}{d['g']:>11.2e}"
          f"{d['rho']:>11.2e}{d['rho']/d['g']:>12.4e}{pred:>12.4e}"
          f"{(d['rho']/d['g'])/pred:>8.5f}")
err = max(abs((d["rho"]/d["g"])/(3.0/(4*np.pi*G*d["r"]))-1) for d in rows)
print(f"\n  max fractional deviation over all {len(rows)} objects: {err:.2e}  (exact)")

hdr("(b) THE LEVER ACTUALLY AVAILABLE")
lr = np.log10(np.array([d["r"]/PC for d in rows]))
lg = np.log10(np.array([d["g"] for d in rows]))
lp = np.log10(np.array([d["rho"] for d in rows]))
print(f"  UNMATCHED density contrast in the sample   : {lp.max()-lp.min():.2f} dex")
print(f"  (this is the number Pass 4 quotes as the discriminating power)")
print(f"  size range in the sample                   : {lr.max()-lr.min():.2f} dex")
print(f"  => MAXIMUM density contrast AT MATCHED g   : {lr.max()-lr.min():.2f} dex")
print(f"     ({rows[int(np.argmin(lr))]['nm']} at {10**lr.min():.0f} pc"
      f"  vs  {rows[int(np.argmax(lr))]['nm']} at {10**lr.max():.0f} pc)")
print(f"\n  the two differ by {(lp.max()-lp.min())-(lr.max()-lr.min()):.2f} dex."
      f"  The missing factor is MASS, which is")
print(f"  not a lever: it cancels out of rho/g identically.")
print(f"\n  M_star range in the sample: {np.log10(max(d['M'] for d in rows)/min(d['M'] for d in rows)):.2f} dex"
      f"  -- carries ZERO discriminating information")

hdr("(c) DO MATCHED-g PAIRS SPANNING THE LEVER EXIST?")
print("  A usable pair needs |d log g_int| small AND |d log r_h| large.")
print("  Matching g at fixed rho-lever requires M ~ r^2, i.e. 2x the size range in mass.\n")
pairs=[]
for i in range(len(rows)):
    for j in range(len(rows)):
        if i>=j: continue
        dg = abs(lg[i]-lg[j]); dr = abs(lr[i]-lr[j])
        pairs.append((dr, dg, i, j))
for tol in (0.10, 0.20, 0.30, 0.50):
    ok = [p for p in pairs if p[1] < tol]
    best = max(ok, key=lambda p:p[0]) if ok else None
    print(f"  |d log g| < {tol:.2f} : {len(ok):>4} pairs,"
          f" best d log rho = {best[0]:.2f} dex"
          f"  ({rows[best[2]]['nm']} / {rows[best[3]]['nm']})" if best else
          f"  |d log g| < {tol:.2f} : none")
print()
ok = sorted([p for p in pairs if p[1] < 0.30], key=lambda p:-p[0])[:10]
print(f"  {'pair':<34}{'class':<20}{'d log g':>9}{'d log rho':>11}")
print("  "+"-"*76)
for dr, dg, i, j in ok:
    print(f"  {rows[i]['nm']+' / '+rows[j]['nm']:<34}"
          f"{rows[i]['cl']+'/'+rows[j]['cl']:<20}{dg:>9.3f}{dr:>11.2f}")

hdr("(d) WHAT THE BEST PAIR BUYS, AS A FUNCTION OF beta")
print("  delta ln C = beta * dlnC/dlnrho * delta ln rho.  In the deep regime")
print("  (x << 1, which holds for every object here) dlnC/dlnrho -> 1, so")
print("  delta ln C = beta * ln(10) * d log rho, and delta v / v = -0.5 delta ln C.\n")
best = ok[0]
print(f"  best matched pair: {rows[best[2]]['nm']} / {rows[best[3]]['nm']},"
      f" d log rho = {best[0]:.2f} dex\n")
print(f"  {'beta':>8}{'|d ln C|':>12}{'|dv/v|':>10}{'detectable vs 10% sigma?':>28}")
print("  "+"-"*58)
for b in (1.0, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01):
    dlnC = b*np.log(10)*best[0]
    dv = 0.5*dlnC
    print(f"  {b:>8.2f}{dlnC:>12.3f}{dv*100:>9.1f}%"
          f"{('YES' if dv>0.10 else 'marginal' if dv>0.05 else 'no'):>28}")
print("\n  beta required for a 10% velocity split on the best available pair:"
      f"  beta > {0.10*2/(np.log(10)*best[0]):.4f}")

hdr("(e) THE VERTICAL TEST IS DIFFERENT -- and it is the one that is not a size test")
print("  At fixed R in a disk, varying z:  rho(z) falls ~exponentially, but g_z RISES")
print("  then saturates.  The system is not virialised in z, so rho/g is NOT fixed by")
print("  a radius, and the identity above does not apply.  For a sech^2 disk of scale")
print("  height h and midplane density rho0:")
print("     rho(z) = rho0 sech^2(z/2h)      g_z(z) = 4 pi G rho0 * 2h tanh(z/2h)")
print("     => rho/g_z = sech^2(z/2h) / (8 pi G h tanh(z/2h))    -- z-DEPENDENT\n")
h_kpc = 0.3
z = np.array([0.1,0.2,0.3,0.5,0.8,1.1,1.5,2.0])
u = z/(2*h_kpc)
lrho = np.log10(1.0/np.cosh(u)**2)
lg   = np.log10(np.tanh(u))
print(f"  h = {h_kpc} kpc (thin disk).  Referenced to z = 0.1 kpc:")
print(f"  {'z/kpc':>7}{'d log rho':>11}{'d log g_z':>11}{'LEVER d log(rho/g)':>21}")
print("  "+"-"*52)
for k in range(len(z)):
    print(f"  {z[k]:>7.1f}{lrho[k]-lrho[0]:>11.2f}{lg[k]-lg[0]:>11.2f}"
          f"{(lrho[k]-lrho[0])-(lg[k]-lg[0]):>21.2f}")
print(f"\n  lever over the Gaia DR3 range |z| < 1.1 kpc:"
      f" {abs((lrho[5]-lrho[0])-(lg[5]-lg[0])):.2f} dex")
print(f"  -- comparable to the best matched-pair lever ({best[0]:.2f} dex), in ONE galaxy,")
print(f"  with a sample of 10^6 stars instead of a pair of objects with ~10% errors.")
