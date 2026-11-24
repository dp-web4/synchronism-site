"""Draco cap reach under the modern line-of-sight dispersion (explorer 2026-11-24; post-hoc re-read, not pre-registered).

Maintainer re-raise 2026-11-24: every dSph significance rests on sigma = 9.1 +/- 1.2 km/s (Walker+2009a Table 1, a
compilation value with no derivation found; four later compilations copy it). Modern samples, as read by a retrieval agent
(locators in the finding):
  Geha+2026 arXiv:2602.10200 Table A1: 9.55 -0.25/+0.26 (within 2 R_h, velocity-variable stars removed)
  Ding+2025 (DESI) arXiv:2509.21822 Table 1: 9.57 +0.66/-0.62; Table 4 refit of Walker+2023 catalogue: 9.33 +/- 0.33
  Spencer+2018 arXiv:1811.06597 sec 2.2: 9.0 +/- 0.3 (Walker 2015 data, binaries not removed)
Definition spread across modern values ~0.55 km/s -> adopt a +/-0.3 km/s "global sigma definition" systematic in quadrature.

Inputs otherwise identical to maintainer/scripts/cap6p39_vs_dsph_estimator.py (L = 2.2e5 Lsun, r_half,3D = 0.29 kpc,
M/L = 4 = heaviest plausible). Identity control: the 9.1 +/- 1.2 rows must reproduce that script's Draco rows.
z = (sigma_obs - sigma_N sqrt(B)) / err; Sidak 6-trial threshold 3.51 (as the maintainer's script).
"""
import math
G = 4.300917270e-6
L, R, MLH = 2.2e5, 0.29, 4.0
EST = {"Wolf+2010 (3 r3D)": 3.0, "site 11-15 (4 r3D)": 4.0, "Walker+2009 (1.875 r3D)": 1.875}
SIG = [("identity: 9.1 +/- 1.2 (W09)", 9.1, 1.2),
       ("Geha+2026 stat only", 9.55, 0.26),
       ("Geha+2026 + 0.3 defn sys", 9.55, math.hypot(0.26, 0.3)),
       ("Spencer+2018 9.0 +/- 0.3 (+0.3 sys)", 9.0, math.hypot(0.3, 0.3)),
       ("Walker23 refit 9.33 +/- 0.33 (+0.3 sys)", 9.33, math.hypot(0.33, 0.3))]

def sN(ml, k):
    return math.sqrt(G * (L * ml / 2) / (k * R))

print("Identity control (must equal cap6p39_vs_dsph_estimator.py Draco rows):")
for lab, k in EST.items():
    s, e = 9.1, 1.2
    z4 = (s - sN(4, k) * math.sqrt(6.39)) / e
    b351 = ((s - 3.51 * e) / sN(4, k)) ** 2
    print(f"  {lab:<26} z@6.39(M/L=4) = {z4:4.1f}  B_excl(3.51) = {b351:5.1f}")

for lab, k in EST.items():
    print(f"\n=== {lab} ===  sigma_N(M/L=4) = {sN(4, k):.3f} km/s")
    print(f"{'sigma input':<42} {'B_req':>6} {'z@6.39':>7} {'z@20.3':>7} {'B_excl3.51':>10} "
          f"{'M/L_esc(6.39)':>13} {'M/L_esc(20.3)':>13} {'infl(20.3)':>10}")
    for name, s, e in SIG:
        sn = sN(MLH, k)
        breq = (s / sn) ** 2
        z639 = (s - sn * math.sqrt(6.39)) / e
        z203 = (s - sn * math.sqrt(20.3)) / e
        bex = ((s - 3.51 * e) / sn) ** 2
        s3 = s - 3.51 * e
        ml639 = (s3 / math.sqrt(6.39)) ** 2 * k * R / G * 2 / L
        ml203 = (s3 / math.sqrt(20.3)) ** 2 * k * R / G * 2 / L
        infl = s3 / (sn * math.sqrt(20.3))
        print(f"{name:<42} {breq:6.1f} {z639:7.1f} {z203:7.1f} {bex:10.1f} {ml639:13.1f} {ml203:13.1f} {infl:10.2f}")

# Error budget on B_req (fractional, 1 sigma) once sigma is modern: what limits the bound now?
print("\nFractional 1-sigma contributions to B_req = sigma^2 * k r / (G M):")
s, e = 9.55, math.hypot(0.26, 0.3)
print(f"  sigma (stat+defn): 2*de/s = {2 * e / s:.3f}")
print("  luminosity (M_V +/- 0.3 mag, McConnachie-class): 0.4*ln10*0.3 = %.3f" % (0.4 * math.log(10) * 0.3))
print("  r_half (+/- 19/221 pc, McConnachie 2012 Table 3, read): %.3f" % (19 / 221))
print("  distance (+/- 6/76 kpc): L/r ~ D -> %.3f" % (6 / 76))
print("  stellar M/L: not an error bar but a prior; M/L=4 is the site's 'heaviest plausible' ceiling")

# Full budget in ln(B_req): sigma, luminosity, r_half, distance in quadrature. M/L held at its prior ceiling (4).
# L provenance: the inherited script uses L = 2.2e5 (M_V = -8.53, source not stated). McConnachie 2012 (READ: arXiv:1204.1562 Table 3 Draco row M_V = -8.8 +/- 0.3, r_h = 221 +/- 19 pc; Table 4 L_V = 0.29e6 Lsun; Table 2 D = 76 +/- 6 kpc
# ) M_V = -8.8 +/- 0.3 -> L = 2.83e5. Both shown; dM_V = 0.3 and 0.1 shown.
print("\nFull-budget z in ln(B_req) at M/L = 4, Wolf+2010 (sigma 9.55, stat+defn 0.40):")
for Lx, lab in ((2.2e5, "L=2.2e5 (inherited)"), (2.83e5, "L=2.83e5 (M_V=-8.8)")):
    for dMV in (0.3, 0.1):
        s, e = 9.55, math.hypot(0.26, 0.3)
        sn = math.sqrt(G * (Lx * 4 / 2) / (3.0 * R))
        breq = (s / sn) ** 2
        dln = math.sqrt((2 * e / s) ** 2 + (0.4 * math.log(10) * dMV) ** 2 + (19 / 221) ** 2 + (6 / 76) ** 2)
        z639 = math.log(breq / 6.39) / dln
        z203 = math.log(breq / 20.3) / dln
        print(f"  {lab:<22} dM_V={dMV}: B_req={breq:5.1f}  sd(lnB)={dln:.3f}  z@6.39={z639:4.1f}  z@20.3={z203:4.1f}")
