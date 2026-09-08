#!/usr/bin/env python3
r"""
PRE-CHECK FOR THE gamma LADDER (S611 P611.2): WHICH RESOLVED-MEMBER SYSTEMS CAN ADJUDICATE IT AT ALL?
=====================================================================================================
Explorer 2026-09-08.  The 08-27 unidentifiability lemma: a knee outside the sampled density window
makes gamma unmeasurable.  So before running the 09-07 outer-slope statistic on dwarf spheroidals
or open clusters, compute where the knee sits relative to each system's baryonic density profile,
at the knees the local data admit (joint_local_window_gamma_axis: Oort ∩ GC per gamma) and at
Refracted Gravity's 0.0083.

Two things the globular-cluster run did not have to worry about:
  (1) AMBIENT DENSITY.  C sees the total local density.  Galactic globular clusters sit in the halo
      (ambient ~1e-4 Msun/pc3, negligible).  Open clusters sit in the disc, where the field itself
      is ~0.084 Msun/pc3 at the midplane -- and the Oort window is DEFINED by C(0.084) giving
      f_DM = 0.13.  So an open cluster's outskirts can never reach the floor: its maximum boost is
      1/C(0.084/rho_c) ~ 1.06-1.27, not 3.17.
  (2) TRANSITION-BAND WIDTH.  The gamma-discriminating signal is the width of the band where C goes
      from ~1 to the floor.  x(C=0.9) / x(C=0.1 above floor) is ~ e^{2.2/gamma}: 90x at gamma=0.489,
      3x at gamma=2.  If the band straddles a system's whole density range, gamma is measurable;
      if the system sits entirely above or below it, it is not.

Systems: 10 Galactic dSphs (McConnachie 2012 structural parameters; M_bar = L_V x 1.5 as in
pressure_supported_boost_ceiling.py), Plummer profile; 5 open clusters (Gaia-era King parameters,
approximate), modified-Hubble profile as in gc_knee_jeans_test.  All densities in Msun/pc3.
"""
import math, json
import numpy as np
from gc_knee_jeans_test import ModHubble

OMEGA_M = 0.315; RHO_FIELD_MID = 0.084

def C(x, g, f=OMEGA_M): return f + (1 - f) * np.tanh(g * np.log1p(x))

# ---- dwarf spheroidals: (L_V [Lsun], r_h projected [pc], sigma_los [km/s], ambient rho [Msun/pc3])
DSPH = {
    'Fornax':     (2.0e7,  710, 11.7, 1e-4),
    'Leo I':      (5.5e6,  251,  9.2, 1e-5),
    'Sculptor':   (2.3e6,  283,  9.2, 1e-4),
    'Leo II':     (7.4e5,  176,  6.6, 1e-5),
    'Sextans':    (4.4e5,  695,  7.9, 1e-4),
    'Carina':     (3.8e5,  250,  6.6, 1e-4),
    'Ursa Minor': (2.9e5,  181,  9.5, 1e-4),
    'Draco':      (2.9e5,  221,  9.1, 1e-4),
    'Crater II':  (1.6e5, 1066,  2.7, 1e-5),
    'Antlia II':  (3.7e5, 2900,  5.7, 1e-5),
}
# ---- open clusters: (M [Msun], r_c [pc], r_t [pc], sigma_1D [km/s], ambient rho at the cluster)
OC = {
    'Hyades':   ( 400, 2.6,  9.0, 0.35, 0.084),
    'Pleiades': ( 800, 1.4, 13.1, 0.5,  0.08),
    'Praesepe': ( 600, 3.5, 12.0, 0.4,  0.08),
    'M67':      (1100, 1.5, 12.0, 0.6,  0.06),
    'NGC 188':  (1500, 1.3, 21.0, 0.6,  0.04),
}
KNEES = [0.0083, 0.017, 0.05, 0.078, 0.155, 0.161]


def plummer_rho(M, a, r): return 3 * M / (4 * math.pi * a ** 3) * (1 + (r / a) ** 2) ** -2.5

def band(g, lo=0.1, hi=0.9):
    """x-range over which the tanh factor rises from lo to hi."""
    return math.exp(math.atanh(lo) / g) - 1, math.exp(math.atanh(hi) / g) - 1

print("=" * 110)
print("0. TRANSITION BAND in x = rho/rho_c  (tanh factor 0.1 -> 0.9)")
print("=" * 110)
for g in (0.489, 1.0, 1.414, 2.0):
    a, b = band(g); print(f"  gamma {g:5.3f}: x = {a:.3g} .. {b:.3g}   (width {b/a:.3g}x in density)")

print("\n" + "=" * 110)
print("1. DWARF SPHEROIDALS  (Plummer, a = r_h; M_bar = 1.5 L_V)   rho_0 = central, rho(r_h), and r_knee / r_h per knee")
print("=" * 110)
print(f"{'system':<11s}{'M_bar':>9s}{'rho_0':>9s}{'rho(rh)':>9s}{'B_req':>7s} | " + " ".join(f"{k:>9.4g}" for k in KNEES) + "   <- r_knee/r_h  ('below' = whole system under the knee)")
out = {}
G = 4.3009e-3   # pc (km/s)^2 / Msun
for n, (L, rh, sig, amb) in DSPH.items():
    M = 1.5 * L; a = rh
    rho0 = plummer_rho(M, a, 0); rhoh = plummer_rho(M, a, rh)
    # required boost: sigma_obs^2 / sigma_N^2 with sigma_N^2 ~ G M / (7.5 a) (Plummer isotropic, 1D)  -- Wolf+2010-like
    sigN2 = G * M / (7.5 * a); Breq = sig ** 2 / sigN2
    row = []
    for k in KNEES:
        if rho0 + amb <= k: row.append('below')
        else:
            r = a * math.sqrt(max((rho0 / (k - amb)) ** 0.4 - 1, 0)) if k > amb else float('inf')
            row.append(f"{r/rh:.2f}")
    out[n] = dict(M=M, rho0=rho0, rho_rh=rhoh, Breq=Breq, rknee_over_rh=dict(zip(map(str, KNEES), row)))
    print(f"{n:<11s}{M:9.2e}{rho0:9.3g}{rhoh:9.3g}{Breq:7.1f} | " + " ".join(f"{s:>9s}" for s in row))
print("  B_req = sigma_obs^2 / (G M_bar / 7.5 r_h): the boost the system needs; the floored law delivers <= 3.17.")

print("\n" + "=" * 110)
print("2. OPEN CLUSTERS  (modified Hubble on M, r_c, r_t as for the GCs)   + ambient disc density")
print("=" * 110)
print(f"{'cluster':<10s}{'rho_0':>8s}{'rho(rh)':>8s}{'r_hm':>6s} | " + " ".join(f"{k:>8.4g}" for k in KNEES) + "   <- r_knee [pc] (cluster+ambient = knee)")
for n, (M, rc, rt, sig, amb) in OC.items():
    mh = ModHubble(M, rc, rt)
    rr = np.linspace(0.01, rt, 4000); rho = np.array([mh.rho(r) for r in rr]) + amb
    # half-mass radius
    mcum = np.cumsum(4 * math.pi * rr ** 2 * (rho - amb)) * (rr[1] - rr[0]); rhm = rr[np.searchsorted(mcum, 0.5 * mcum[-1])]
    row = []
    for k in KNEES:
        idx = np.where(rho <= k)[0]
        row.append('above' if len(idx) == 0 else (f"{rr[idx[0]]:.2f}" if idx[0] > 0 else 'below'))
    out[n] = dict(M=M, rho0=float(rho[0]), rhm=float(rhm), rknee_pc=dict(zip(map(str, KNEES), row)))
    print(f"{n:<10s}{rho[0]:8.3g}{float(np.interp(rhm, rr, rho)):8.3g}{rhm:6.2f} | " + " ".join(f"{s:>8s}" for s in row))
print("  'above' = the cluster + field never drops to the knee, so C ~ 1 everywhere: no signal at all.")

print("\n" + "=" * 110)
print("3. THE AMBIENT CAP: maximum boost available to an open cluster's outskirts = 1/C(rho_field / rho_c)")
print("=" * 110)
print(f"{'rho_c':>8s} | " + " ".join(f"g={g:<5.3g}" for g in (0.489, 1.0, 2.0)) + "    (rho_field = 0.084)   | same at rho_field = 0.04 (z ~ 300 pc)")
for k in KNEES:
    a = " ".join(f"{1/C(0.084/k, g):7.3f}" for g in (0.489, 1.0, 2.0))
    b = " ".join(f"{1/C(0.04/k, g):7.3f}" for g in (0.489, 1.0, 2.0))
    print(f"{k:8.4g} | {a}                          | {b}")
print("  Compare: GC outskirts reach B = 3.17 (ambient ~1e-4).  Open clusters are capped at the Oort-window value by construction.")
print("  Sigma scales as sqrt(B): a 1.27 cap is a 13% dispersion excess, against 0.3-0.6 km/s dispersions with binary/unbound contamination.")

print("\n" + "=" * 110)
print("4. WHAT sigma(r) LOOKS LIKE under the floored law for a dSph entirely below the knee")
print("=" * 110)
print("  C = floor everywhere -> g = g_N / 0.315 at every radius -> sigma(r) = 1.78 x Newtonian sigma(r), SAME SHAPE.")
print("  gamma does not enter.  A dSph below the knee tests the FLOOR (ceiling B=3.17 vs B_req), not the ladder.")
json.dump(out, open('gamma_ladder_precheck_dsph_open_clusters.json', 'w'), indent=1)
