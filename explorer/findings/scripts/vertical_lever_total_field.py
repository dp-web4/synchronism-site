#!/usr/bin/env python3
"""
THE VERTICAL TEST IS THE ONLY ONE THAT IS NOT A SIZE TEST -- and it is the best
==============================================================================
Explorer 2026-08-25.  Correction + extension of rho_g_lever_is_size.py part (e).

My first pass computed the vertical lever as d log rho - d log g_z.  That is
wrong: the coupling in C_g keys on the TOTAL field |grad Phi|, and at fixed
galactocentric R the total field is dominated by the RADIAL component, which
does not change with z at all over the range Gaia measures.  Redo it with
|g| = sqrt(g_R^2 + g_z^2).

The consequence is that the vertical direction is a nearly PURE lever: rho falls
by orders of magnitude while |g| moves by a few percent.  That is exactly the
configuration Pass 4 was looking for, and it is better than Pass 4 realised --
but for a reason Pass 4 does not give, and it is the ONE test of the four that
does not reduce to the size identity rho/g = 3/(4 pi G r).
"""
import numpy as np
G  = 6.674e-11
MSUN = 1.98892e30
PC = 3.0856775814913673e16
KPC = PC*1000.0
KMS = 1e3

def hdr(s): print("\n"+"="*80); print(s); print("="*80)

# Solar neighbourhood, MW: R0 = 8.122 kpc, V_c = 229 km/s (GRAVITY/Eilers+2019)
R0, VC = 8.122, 229.0
SIGMA_TOT = 47.0        # Msun/pc^2 baryonic surface density, |z|<1.1 kpc (Bovy&Rix 2013)
Z0 = 0.30               # kpc, sech^2 scale for the combined thin/thick baryons

g_R = (VC*KMS)**2/(R0*KPC)
Sig = SIGMA_TOT*MSUN/PC**2
rho0 = Sig/(4*Z0*KPC)                     # sech^2 sheet: Sigma = 4 rho0 z0
A0 = 1.20e-10

hdr("SETUP -- solar neighbourhood, baryons only")
print(f"  R0 = {R0} kpc,  V_c = {VC} km/s   ->  g_R = {g_R:.3e} m/s^2 = {g_R/A0:.2f} a0")
print(f"  Sigma_bar(|z|<1.1kpc) = {SIGMA_TOT} Msun/pc^2 (Bovy & Rix 2013)")
print(f"  sech^2 scale z0 = {Z0} kpc  ->  rho0 = {rho0:.3e} kg/m^3"
      f" = {rho0/(MSUN/PC**3):.4f} Msun/pc^3")
print(f"  (Local baryonic midplane density, literature ~0.084-0.10 Msun/pc^3.)")

z = np.array([0.0,0.1,0.2,0.3,0.5,0.8,1.1,1.5,2.0,2.5,3.0])
u = z/(2*Z0)
rho = rho0/np.cosh(u)**2
g_z = 4*np.pi*G*rho0*(2*Z0*KPC)*np.tanh(u)
g_tot = np.hypot(g_R, g_z)

hdr("(1) THE LEVER, DONE RIGHT")
print("  C keys on the TOTAL field.  At fixed R the radial part is z-independent,")
print("  so |g| barely moves while rho collapses.\n")
print(f"  {'z/kpc':>7}{'rho/rho0':>11}{'d log rho':>11}{'g_z/a0':>9}"
      f"{'|g|/a0':>9}{'d log|g|':>10}{'LEVER':>9}")
print("  "+"-"*68)
for k in range(len(z)):
    dl_r = np.log10(rho[k]/rho[0])
    dl_g = np.log10(g_tot[k]/g_tot[0])
    print(f"  {z[k]:>7.1f}{rho[k]/rho0:>11.4f}{dl_r:>11.2f}{g_z[k]/A0:>9.3f}"
          f"{g_tot[k]/A0:>9.3f}{dl_g:>10.4f}{dl_r-dl_g:>9.2f}")
i11 = int(np.argmin(abs(z-1.1))); i20 = int(np.argmin(abs(z-2.0)))
lev11 = abs(np.log10(rho[i11]/rho[0]) - np.log10(g_tot[i11]/g_tot[0]))
lev20 = abs(np.log10(rho[i20]/rho[0]) - np.log10(g_tot[i20]/g_tot[0]))
print(f"\n  lever over |z| < 1.1 kpc (Bovy & Rix regime) : {lev11:.2f} dex")
print(f"  lever over |z| < 2.0 kpc (Gaia DR3 regime)   : {lev20:.2f} dex")
print(f"  |g| changes over |z| < 2.0 kpc               : "
      f"{100*(g_tot[i20]/g_tot[0]-1):.1f}%  -- essentially fixed")
print("\n  Compare: the best matched-pair lever available anywhere in the Local Group")
print("  (Pal 14 / Dragonfly 44) is 2.22 dex, needs two objects in two different")
print("  hosts with ~10% dispersion errors and unmatched tidal histories.  This is")
print("  the same lever, inside ONE galaxy, along ONE line, with 10^6 stars.")

hdr("(2) WHY IT ESCAPES THE SIZE IDENTITY")
print("  For a virialised system rho/g = 3/(4 pi G r) exactly -- mass cancels and")
print("  the only lever is size.  A disk column at fixed R is NOT such a system:")
print("  it is supported in z by pressure against a field set mostly at another")
print("  scale (the radial one).  So rho and |g| are genuinely decoupled here,")
print("  and the decoupling is not bought by making an object physically bigger.\n")
print(f"  {'system':<38}{'rho/|g| at z=0':>16}{'at z=2kpc':>13}{'ratio':>8}")
print("  "+"-"*76)
print(f"  {'solar column (this calc)':<38}{rho[0]/g_tot[0]:>16.3e}"
      f"{rho[i20]/g_tot[i20]:>13.3e}{(rho[i20]/g_tot[i20])/(rho[0]/g_tot[0]):>8.4f}")
r_eq = 3.0/(4*np.pi*G*(rho[0]/g_tot[0]))
print(f"  equivalent virial radius at z=0        : {r_eq/PC:>8.1f} pc")
r_eq2 = 3.0/(4*np.pi*G*(rho[i20]/g_tot[i20]))
print(f"  equivalent virial radius at z=2 kpc    : {r_eq2/PC:>8.1f} pc")
print(f"  -> the column 'looks like' an object {r_eq2/r_eq:.0f}x larger at z=2 kpc without")
print(f"     anything getting larger.  That is the loophole, and it is free.")

hdr("(3) PREDICTED K_z SPLIT, as a function of beta")
print("  Hybrid: x = (|g|/a0)*(rho/rho_ref)^beta.  Working observable is the")
print("  vertical force K_z(z) = |g_z| including the coherence boost:")
print("     K_z^pred(z) = K_z^bar(z) / C(x(z))")
print("  Both keyings agree at z=0 by construction (a0/rho_ref absorb it); the")
print("  SHAPE in z is the discriminant.\n")
rho_ref = rho[0]
def Kz_ratio(beta, gam=0.4983, a0=None):
    """K_z(beta)/K_z(beta=0), i.e. the extra tilt density-keying introduces."""
    x0 = g_tot/A0
    xb = x0*np.power(rho/rho_ref, beta)
    Cb = np.tanh(gam*np.log1p(xb)); C0 = np.tanh(gam*np.log1p(x0))
    return C0/Cb
print(f"  {'z/kpc':>7}" + "".join(f"{'b='+str(b):>11}" for b in (0.01,0.02,0.05,0.10,0.20)))
print("  "+"-"*62)
for k in [i11//2, i11, i20, len(z)-1]:
    row = f"  {z[k]:>7.1f}"
    for b in (0.01,0.02,0.05,0.10,0.20):
        row += f"{100*(Kz_ratio(b)[k]-1):>10.2f}%"
    print(row)
print("\n  (entries are the % change in the predicted vertical force relative to the")
print("   pure acceleration-keyed model, at the same z)")

hdr("(4) WHAT THE DATA CAN ACTUALLY SEE")
print("  Bovy & Rix (2013): Sigma(|z|<1.1 kpc) measured to ~6% per mono-abundance")
print("  population, ~3% combined.  Gaia DR3 vertical Jeans analyses reach 2-5%")
print("  on K_z out to |z| ~ 2 kpc.  Take 3% as the achievable systematic floor.\n")
for thr, lbl in [(0.03, "3% (Gaia DR3 systematic floor)"),
                 (0.06, "6% (single mono-abundance population)"),
                 (0.10, "10% (dSph dispersion, for comparison)")]:
    lo, hi_ = 0.0, 1.0
    for _ in range(60):
        mid = 0.5*(lo+hi_)
        if abs(Kz_ratio(mid)[i20]-1) < thr: lo = mid
        else: hi_ = mid
    print(f"  beta detectable at {lbl:<38}: beta > {0.5*(lo+hi_):.4f}")

hdr("(5) THE HONEST CAVEAT")
print("  This is a Newtonian sech^2 column used to compute a LEVER, not a")
print("  self-consistent solution of the modified vertical Jeans equation.  A")
print("  real test must re-solve hydrostatic equilibrium with the boost included,")
print("  because changing K_z changes the scale height that sets rho(z).  The")
print("  back-reaction is second order in the boost and will REDUCE the split")
print("  somewhat.  Quoted numbers are therefore upper bounds on the signal --")
print("  which is the direction that matters, since the conclusion is a ceiling.")
