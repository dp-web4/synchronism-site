#!/usr/bin/env python3
"""Head-to-head: MOND (isolated and with EFE) vs the framework's CEILING-CAPPED maximum,
on pressure-supported dwarfs.  Is this a discriminator, or does MOND fail too?"""
import math
G = 4.300917270e-6
KMS2_PER_KPC_TO_MS2 = (1e3**2) / (3.0856775814913673e19)
A0 = 1.2e-10
A0_KPC = A0 / KMS2_PER_KPC_TO_MS2

# name, M_bar, r_half, sigma_obs, err, D_host(kpc), M_host(Msun)
SYS = [
    ("Crater II",    3.20e5, 1.42,  2.7, 0.3, 117.5, 1.0e12),
    ("Draco dSph",   4.40e5, 0.29,  9.1, 1.2,  76.0, 1.0e12),
    ("Sculptor dSph",2.24e6, 0.38,  9.2, 1.4,  86.0, 1.0e12),
    ("Fornax dSph",  4.25e7, 0.93, 11.7, 0.9, 147.0, 1.0e12),
    ("NGC 1052-DF2", 2.00e8, 2.90,  8.5, 2.3,  80.0, 1.0e12),
]
def sigN(M, rh): return math.sqrt(G*(M/2.0)/(4.0*rh))
def mond_iso(M):  return ((4.0/81.0)*G*M*A0_KPC)**0.25
def g_ext(Mh, D): return G*Mh/(D*D)            # (km/s)^2/kpc
def mu_simple(y): return y/(1.0+y)

print("="*112)
print("MOND vs the framework's CEILING-CAPPED maximum on pressure-supported dwarfs")
print(f"{'system':<15}{'sig_N':>7}{'sig_obs':>9}{'MOND iso':>10}{'x_ext':>8}{'MOND+EFE':>10}"
      f"{'Sync max(3.17)':>15}{'Sync max(13.7)':>15}{'n_sig(13.7)':>12}")
print("-"*112)
for name, M, rh, sobs, serr, D, Mh in SYS:
    sN = sigN(M, rh); mi = mond_iso(M)
    x = g_ext(Mh, D)/A0_KPC
    # EFE-dominated quasi-Newtonian: G_eff = G/mu(x_ext)
    s_efe = sN/math.sqrt(mu_simple(x))
    # framework: sigma <= sigma_N * sqrt(B_max)
    s317 = sN*math.sqrt(3.17); s137 = sN*math.sqrt(13.7)
    n137 = (sobs - s137)/serr
    print(f"{name:<15}{sN:>7.2f}{sobs:>9.2f}{mi:>10.2f}{x:>8.3f}{s_efe:>10.2f}"
          f"{s317:>15.2f}{s137:>15.2f}{n137:>12.1f}")
print("-"*112)
print("MOND+EFE column uses the quasi-Newtonian EFE-dominated limit G_eff=G/mu_simple(g_ext/a0).")
print("For Crater II, Milgrom (2016) published sigma ~= 2.1 km/s a priori (full treatment);")
print("this crude limit is shown only to confirm the regime, not to replace that prediction.")
print("\nDISCRIMINATION TEST -- does MOND succeed where the framework's ceiling fails?")
for name, M, rh, sobs, serr, D, Mh in SYS:
    sN = sigN(M, rh); mi = mond_iso(M); s137 = sN*math.sqrt(13.7)
    mond_ok = abs(sobs-mi) <= 2.5*serr or (mi > sobs)   # MOND can reach it (EFE only lowers)
    sync_ok = s137 >= sobs - 2.0*serr
    print(f"  {name:<15} MOND can reach obs: {str(mond_ok):<6} | framework ceiling can reach obs: {str(sync_ok):<6}"
          f" | -> {'DISCRIMINATES' if mond_ok and not sync_ok else 'no discrimination'}")
