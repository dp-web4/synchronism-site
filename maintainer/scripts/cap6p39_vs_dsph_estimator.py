"""Estimator dependence of the 2026-11-15 dSph exclusion of the 6.39 cap (cap6p39_vs_dsph.py).

A researcher persona (visitor log 2026-11-19) said the headline boosts (Draco ~100, Crater II ~60) carry no estimator and
called the site's choice "the conservative one" (Walker+2009 vs Wolf+2010). Checked here, not pre-registered (a re-read of
an existing statistic under the two published estimators). The 11-15 script uses sigma^2 = G M_half / (4 r_half,3D).
Wolf+2010: M_half = 3 sigma^2 r_half,3D / G  ->  sigma^2 = G M_half / (3 r3D).
Walker+2009: M(R_e) = 2.5 sigma^2 R_e / G with R_e ~ (3/4) r3D, read as the half-mass -> sigma^2 = G M_half / (1.875 r3D).
A larger denominator means more dynamical mass per sigma, a larger required boost, and a stronger exclusion.
Inputs identical to cap6p39_vs_dsph.py. z = (sigma_obs - sigma_N sqrt(Bmax)) / err; Sidak 6-trial threshold 3.51.
"""
import math
G = 4.300917270e-6
SYS = [("Crater II", 1.6e5, 1.42, 2.7, 0.3, 2.0, 4.0), ("Draco", 2.2e5, 0.29, 9.1, 1.2, 2.0, 4.0)]
EST = {"site 11-15 (4 r3D)": 4.0, "Wolf+2010 (3 r3D)": 3.0, "Walker+2009 (2.5 R_e = 1.875 r3D)": 1.875}
for name, L, r, s, e, mf, mh in SYS:
    for lab, k in EST.items():
        out = []
        for ml in (mf, mh):
            sN = math.sqrt(G * (L * ml / 2) / (k * r))
            B = (s / sN) ** 2
            z = (s - sN * math.sqrt(6.39)) / e
            out.append(f"M/L={ml:g}: B_req={B:6.1f} z@6.39={z:4.1f}")
        # escape M/L at 3.51 sigma
        s3 = s - 3.51 * e
        ml_esc = (s3 / math.sqrt(6.39)) ** 2 * k * r / G * 2 / L
        print(f"{name:<10} {lab:<36} " + " | ".join(out) + f" | escape M/L (z=3.51) >= {ml_esc:.1f}")

print("\nAt M/L = 4 (heaviest plausible): cap excluded up to B (z = 3.51 after trials / local z = 3); "
      "tidal inflation of sigma needed to pass 6.39 at z = 3.51")
for name, L, r, s, e, mf, mh in SYS:
    for lab, k in EST.items():
        sN = math.sqrt(G * (L * mh / 2) / (k * r))
        b351 = ((s - 3.51 * e) / sN) ** 2
        b3 = ((s - 3.0 * e) / sN) ** 2
        infl = (s - 3.51 * e) / (sN * math.sqrt(6.39))
        print(f"{name:<10} {lab:<36} B_excl {b351:5.1f} (local {b3:5.1f}); sigma inflation >= {infl:.2f}x")
