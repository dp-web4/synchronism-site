#!/usr/bin/env python3
"""Most permissive boost cap Omega_m/Omega_b = 6.39 vs pressure-supported dwarfs.
PREREG: cap6p39_vs_dsph_PREREG.md (committed c7d729c before this ran).
Inputs reused unchanged from explorer/findings/scripts/pressure_supported_boost_ceiling.py (2026-08-23).
sigma-space test: the cap allows sigma <= sigma_N*sqrt(Bmax)."""
import math
G = 4.300917270e-6  # kpc (km/s)^2 / Msun
CAPS = [3.17, 6.39, 13.7, 20.3]
SYS = [  # name, L_V, r_half_3D kpc, sigma_obs, err, ML_fid, ML_lo, ML_hi
    ("Crater II", 1.6e5, 1.42, 2.7, 0.3, 2.0, 1.0, 4.0),
    ("Sculptor", 1.4e6, 0.38, 9.2, 1.4, 1.6, 1.0, 3.0),
    ("Fornax", 1.7e7, 0.93, 11.7, 0.9, 2.5, 1.5, 4.0),
    ("Draco", 2.2e5, 0.29, 9.1, 1.2, 2.0, 1.0, 4.0),
    ("NGC 1052-DF2", 1.0e8, 2.90, 8.5, 2.3, 2.0, 1.5, 3.0),
    ("NGC 1052-DF4", 0.8e8, 2.10, 4.2, 3.0, 2.0, 1.5, 3.0),
]
REF = {"Crater II": 60.2, "Sculptor": 26.7, "Fornax": 5.6, "Draco": 101.5, "NGC 1052-DF2": 1.9, "NGC 1052-DF4": 0.4}
sN = lambda M, rh: math.sqrt(G * (M / 2.0) / (4.0 * rh))
# Sidak threshold, 6 trials, one-sided 3 sigma
from math import erf, sqrt
def phi(z): return 0.5 * (1 + erf(z / sqrt(2)))
p3 = 1 - phi(3.0); pS = 1 - (1 - p3) ** (1 / 6)
lo, hi = 0.0, 10.0
for _ in range(80):
    m = (lo + hi) / 2
    (lo, hi) = (m, hi) if 1 - phi(m) > pS else (lo, m)
zS = (lo + hi) / 2
print(f"Sidak 6-trial one-sided equivalent of 3 sigma: z = {zS:.2f}\n")
print("IDENTITY CONTROL (fiducial B_req vs 08-23 table)")
ok = True
for n, L, rh, s, e, mf, ml, mh in SYS:
    B = (s / sN(L * mf, rh)) ** 2
    good = abs(B - REF[n]) < 0.1 + 1e-9 or abs(round(B, 1) - REF[n]) < 1e-9
    ok &= good
    print(f"  {n:<13} B_req = {B:7.1f}  ref {REF[n]:6.1f}  {'ok' if good else 'MISMATCH'}")
print(f"  identity control: {'PASS' if ok else 'FAIL'}\n")
print(f"{'system':<13}{'cap':>6}{'sig_max fid':>12}{'z fid':>7}{'sig_max MLhi':>13}{'z MLhi':>8}  verdict")
for n, L, rh, s, e, mf, ml, mh in SYS:
    for c in CAPS:
        smf = sN(L * mf, rh) * math.sqrt(c); smh = sN(L * mh, rh) * math.sqrt(c)
        zf = (s - smf) / e; zh = (s - smh) / e
        v = ("EXCEEDS band-robust, survives trials" if zh > zS else
             "exceeds band-robust (local 3 sigma)" if zh > 3 else
             "exceeds at fid only" if zf > 3 else "not excluded at 3 sigma")
        print(f"{n:<13}{c:>6.2f}{smf:>12.2f}{zf:>7.1f}{smh:>13.2f}{zh:>8.1f}  {v}")
    Bx = ((s - 3 * e) / sN(L * mh, rh)) ** 2 if s > 3 * e else float('nan')
    print(f"{'':<13}largest cap excluded at 3 sigma at M/L={mh}: {Bx:.1f}\n")
# Escape for Draco at 6.39: M/L needed so that z = 3
for n, L, rh, s, e, mf, ml, mh in SYS:
    if n in ("Draco", "Crater II"):
        need_sN = (s - 3 * e) / math.sqrt(6.39)
        ML = (need_sN / sN(L, rh)) ** 2
        tidal = s / (sN(L * mh, rh) * math.sqrt(6.39) + 3 * e)
        print(f"{n}: passes 6.39 at 3 sigma only if M/L >= {ML:.1f} (old metal-poor pops ~1-3),"
              f" or sigma tidally inflated by >= {tidal:.2f}x at M/L={mh}")
# Post-run addition (same session, not in PREREG): largest cap excluded at the trials-corrected threshold.
print()
for n, L, rh, s, e, mf, ml, mh in SYS:
    if s > zS * e:
        print(f"{n}: largest cap excluded at z = {zS:.2f} (trials) at M/L={mh}: {((s - zS * e) / sN(L * mh, rh)) ** 2:.1f}")
