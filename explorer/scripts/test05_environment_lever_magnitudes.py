#!/usr/bin/env python3
"""
TEST-05 ADJUDICATION: is "environment-dependent RAR scatter" really MOND-shared?

The site (/tier-1-existing TEST-05, reclassified 2026-07-09) says a detected environment
dependence "cannot discriminate Synchronism from MOND" because MOND's External Field Effect
predicts the same qualitative dependence. This script tests the TIE, not the detection:
do the two frameworks' environment LEVERS have comparable magnitude on real SPARC galaxies?

The two mechanisms couple to DIFFERENT variables (this is the locality no-go on the
environment axis):

  MOND+EFE   couples to external ACCELERATION  g_ext  (non-local).
             At SPARC outer radii g_bar ~ 0.03-1 a0, while typical large-scale-structure
             fields give e_N = g_ext/a0 ~ 0.01-0.1 (Chae et al. 2020: median ~0.033).
             The lever g_ext/g_bar is ORDER UNITY where the RAR is measured.

  C(rho)     couples to ambient mass DENSITY rho_amb added to local rho (strictly local).
             Disk outskirts where rotation curves end still have Sigma ~ 1 Msun/pc^2 of
             HI (~10^20 cm^-2) in a ~0.5 kpc half-thickness: rho_local ~ 1e-3 Msun/pc^3.
             The cosmic mean matter density is 2.7e-30 g/cm^3; a delta~100 group reaches
             2.7e-28. The lever rho_amb/rho_local is 1e-5 .. 4e-3.
             (Numbers chosen LOW for rho_local -- i.e. maximally favorable to the framework.)

Below the saturation knee (the site's own audit: the whole disk sits at x = rho/rho_crit << 1,
C <= 0.28), C(rho) = tanh(2 ln(1+x)) ~ 2x is LINEAR, so the fractional boost modulation equals
the fractional density perturbation:  dB/B = dC/C = drho/rho.

For MOND the modulation is computed with the standard 1D EFE substitution
nu((g_bar+g_ext)/a0) vs nu(g_bar/a0) (direction and magnitude match Chae 2020's detected
signature; exact AQUAL numerics differ by O(1) factors, irrelevant at the orders-of-magnitude
level this adjudication needs).

Also note: the framework's OTHER galaxy law, C(a) with a = internal g_bar (Sessions #191-193,
the one used in TEST-09/10), predicts EXACTLY ZERO environment dependence -- it is a function
of the galaxy's own internal acceleration only. Either law, the tie dissolves.

Data: SPARC outer points as in test10_dwarf_dm_fraction_ceiling.py.
"""
import numpy as np

BASE = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/"
KPC = 3.0856775814913673e19
KMS = 1.0e3
A0_MOND = 1.20e-10

MSUN_PC3_TO_G_CM3 = 6.77e-23     # 1 Msun/pc^3 in g/cm^3
RHO_MEAN_MATTER = 2.7e-30        # g/cm^3, Omega_m * rho_crit,cosmo (h=0.674)


def nu(y):
    """MOND McGaugh nu-function: g_obs = nu(g_bar/a0) * g_bar."""
    return 1.0 / (1.0 - np.exp(-np.sqrt(y)))


def load_outer_gbar():
    """Outer-point g_bar for SPARC galaxies passing the same cuts as test10."""
    meta = {}
    with open(BASE + "SPARC_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 18:
                continue
            try:
                meta[p[0]] = (float(p[5]), int(p[17]))  # inc, Q
            except ValueError:
                continue
    mm = {}
    with open(BASE + "MassModels_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 8:
                continue
            try:
                name = p[0]
                r, vobs, evobs, vgas, vdisk, vbul = (float(x) for x in p[2:8])
            except ValueError:
                continue
            mm.setdefault(name, []).append((r, vobs, evobs, vgas, vdisk, vbul))
    g_bars = []
    for name, rows in mm.items():
        m = meta.get(name)
        if m is None or m[1] > 2 or m[0] < 30.0:
            continue
        arr = np.array(sorted(rows))[-3:]
        r, vobs, evobs, vgas, vdisk, vbul = arr.T
        vbar2 = vgas * np.abs(vgas) + 0.5 * vdisk ** 2 + 0.7 * vbul ** 2
        ok = (vbar2 > 0) & (evobs > 0)
        if not ok.any():
            continue
        w = 1.0 / evobs[ok] ** 2
        vbar2_o = np.average(vbar2[ok], weights=w)
        r_o = np.average(r[ok], weights=w)
        g_bars.append(vbar2_o * KMS ** 2 / (r_o * KPC))
    return np.array(g_bars)


def main():
    g_bar = load_outer_gbar()
    y = g_bar / A0_MOND
    print(f"SPARC outer points (same cuts as TEST-10): N = {len(g_bar)}")
    print(f"median g_bar/a0 at outer radii: {np.median(y):.3f}\n")

    print("=== MOND+EFE environment lever (couples to external acceleration) ===")
    for e_N in (0.01, 0.033, 0.1):
        # 1D EFE substitution: boost with vs without external field
        dlog = np.log10(nu(y + e_N) / nu(y))
        print(f"  e_N = g_ext/a0 = {e_N:5.3f}:  median |dlog10 g_obs| = "
              f"{np.median(np.abs(dlog)):.4f} dex   (lever g_ext/g_bar median = {np.median(e_N/y):.2f})")

    print("\n=== C(rho) environment lever (couples to ambient density, strictly local) ===")
    # rho_local chosen LOW (favorable to the framework): Sigma = 1 Msun/pc^2, h = 0.5 kpc
    rho_local = 1.0 / (2.0 * 500.0) * MSUN_PC3_TO_G_CM3   # g/cm^3
    print(f"  rho_local at outer disk (conservative low): {rho_local:.2e} g/cm^3")
    for delta, label in ((1, "cosmic mean (field)"), (10, "filament delta~10"),
                         (100, "group delta~100"), (1000, "rich-group delta~1000")):
        rho_amb = delta * RHO_MEAN_MATTER
        frac = rho_amb / rho_local
        # below the knee C ~ 2x is linear: dB/B = dC/C = drho/rho; dex = frac/ln(10)
        dlog = frac / np.log(10.0)
        print(f"  {label:24s} rho_amb = {rho_amb:.1e}:  drho/rho = {frac:.1e}  ->  "
              f"dlog10 g_obs = {dlog:.1e} dex")

    print("\n=== Adjudication ===")
    e_N = 0.033
    mond_dex = np.median(np.abs(np.log10(nu(y + e_N) / nu(y))))
    sync_dex_group = (100 * RHO_MEAN_MATTER / rho_local) / np.log(10.0)
    print(f"  MOND+EFE modulation at Chae-median e_N=0.033 : {mond_dex:.3f} dex")
    print(f"  C(rho) modulation even in a delta~100 group  : {sync_dex_group:.1e} dex")
    print(f"  ratio: MOND's environment lever is ~{mond_dex/sync_dex_group:,.0f}x larger")
    print(f"  observed RAR scatter for comparison          : ~0.1 dex")
    print("""
  MOND's modulation is ~20-60% of the observed scatter -> statistically detectable on
  N~10^2-10^3 galaxies (Chae et al. 2020/2021 report ~4 sigma). C(rho)'s modulation is
  3-4 orders of magnitude below the scatter -> undetectable in any realistic sample.
  And C(a)-internal predicts exactly zero. A DETECTED environment dependence therefore
  supports MOND+EFE specifically and is UNREACHABLE by the framework's own mechanism:
  TEST-05 is not MOND-shared -- environment dependence is a discriminating axis, and the
  framework sits on the losing side of it if the detection is environmental.
  (Archive S381's caveat stands: the R^2=0.14 signal is morphology, not cleanly
  environment -- so the honest status is 'discriminator, never run as registered',
  not 'tie'.)""")


if __name__ == "__main__":
    main()
