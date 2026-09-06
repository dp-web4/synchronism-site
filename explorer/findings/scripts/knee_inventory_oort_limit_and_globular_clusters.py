#!/usr/bin/env python3
"""
Knee inventory: where has any measurement placed a system at x = rho/rho_crit ~ 1,
and what does the density-keyed law predict THERE and in the linear regime it never
registered a test in (the solar neighbourhood)?

Explorer 2026-09-06.  Pure arithmetic on published numbers; no fit.

The site's ledger law (TEST-09/10, l2_sparc_core.C_framework):
    C = Om + (1 - Om) tanh(gamma ln(1 + rho/rho_crit)),   B = g_obs/g_bar = 1/C,  f_DM = 1 - C
The plotter's quadrature law:  v^2 = v_b^2 + (V_flat C)^2.
Three rho_crit placements exist in the archive/site for the galaxy sector:
    calibrated  A = 0.029  M_sun pc^-3 (km/s)^-2   (site headline)
    stated      A = 4.6e-5                          (S687: what the stated formula gives)
    S691        rho_crit = 1e-23 kg/m^3             (wide-binary null derivation)

PRE-STATED expectations (written before running):
  E1. The floored division law gives B = 1/Om = 3.17 at the Sun under the calibrated and
      stated placements (x << 1) -> f_DM,local = 0.685, vs McKee+2015 0.13 +/- 0.04.
  E2. Under the S691 placement the Sun is saturated (B = 1) but so is every SPARC midplane
      density above ~1e-3 M_sun/pc^3 -> no galaxy boost anywhere. The null and the boost
      need incompatible knees.
  E3. A globular cluster crosses the knee inside one object under the calibrated placement.
  E4. Only the quadrature branch yields a sub-percent wide-binary velocity deviation with
      rho_crit anywhere near the calibrated/stated values.
Verdicts are written at the bottom AFTER the numbers, not in the print statements.
"""
import numpy as np

OM = 0.315
MSPC3_TO_KGM3 = 1.98847e30 / (3.0857e16) ** 3      # M_sun/pc^3 -> kg/m^3
KGM3_TO_MSPC3 = 1.0 / MSPC3_TO_KGM3

def C_floor(x, gamma, floor=OM):
    return floor + (1 - floor) * np.tanh(gamma * np.log1p(x))

def C_bare(x, gamma):
    return np.tanh(gamma * np.log1p(x))

def hdr(s):
    print("\n" + "=" * 96 + "\n" + s + "\n" + "=" * 96)

# ----------------------------------------------------------------------------- placements
V_MW = 220.0          # km/s, solar circle (Gaia/Reid 2019: 229-236; 220 keeps the site's convention)
placements = {
    "calibrated A=0.029":  0.029 * V_MW**2,
    "stated    A=4.6e-5":  4.6e-5 * V_MW**2,
    "S691 1e-23 kg/m^3":   1e-23 * KGM3_TO_MSPC3,
}
hdr("rho_crit placements at the solar circle (V = 220 km/s), M_sun/pc^3")
for k, v in placements.items():
    print(f"  {k:24s} rho_crit = {v:12.4e} M_sun/pc^3 = {v*MSPC3_TO_KGM3:10.3e} kg/m^3")
print(f"  spread calibrated / S691 = {placements['calibrated A=0.029']/placements['S691 1e-23 kg/m^3']:.3e}")

# ----------------------------------------------------------------------------- Oort limit
# McKee, Parravano & Hollenbach 2015 (arXiv:1509.05334): rho_tot = 0.097 +/- 0.013, rho_DM = 0.013 +/- 0.003
# -> rho_bar = 0.084; Sigma_bar(|z|<1.1 kpc) = 47.1 +/- 3.4.  Bovy & Tremaine 2012: rho_DM = 0.008 +/- 0.003.
# Bovy & Rix 2013: Sigma_tot(1.1 kpc, R0) = 68 +/- 4 (used for the surface-density cross-check).
rho_tot, s_tot = 0.097, 0.013
rho_dm,  s_dm  = 0.013, 0.003
rho_bar = rho_tot - rho_dm            # 0.084
fdm_obs = rho_dm / rho_tot
s_fdm   = fdm_obs * np.sqrt((s_dm/rho_dm)**2 + (s_tot/rho_tot)**2)
fdm_bt  = 0.008 / (0.008 + 0.09); s_fdm_bt = 0.03
Sig_bar, s_Sig_bar = 47.1, 3.4
Sig_tot, s_Sig_tot = 68.0, 4.0

hdr("Solar neighbourhood (rho_bar = 0.084 M_sun/pc^3 midplane): the density law's prediction")
print(f"  measured f_DM,local = {fdm_obs:.3f} +/- {s_fdm:.3f}  (McKee+2015);  {fdm_bt:.3f} +/- {s_fdm_bt:.2f} (Bovy&Tremaine 2012)")
print(f"  measured Sigma_tot/Sigma_bar (1.1 kpc) = {Sig_tot/Sig_bar:.2f} +/- {Sig_tot/Sig_bar*np.sqrt((s_Sig_tot/Sig_tot)**2+(s_Sig_bar/Sig_bar)**2):.2f}")
print(f"\n  {'placement':24s} {'gamma':>6s} {'x_local':>10s} {'C_floor':>8s} {'B=1/C':>7s} {'f_DM pred':>9s} {'sigma vs McKee':>14s} {'sigma vs B&T':>12s}   {'B_bare':>9s}")
for k, rc in placements.items():
    x = rho_bar / rc
    for g in (2.0, 0.489):
        C = C_floor(x, g); B = 1 / C; f = 1 - C
        sig1 = (f - fdm_obs) / s_fdm; sig2 = (f - fdm_bt) / s_fdm_bt
        print(f"  {k:24s} {g:6.3f} {x:10.3e} {C:8.4f} {B:7.3f} {f:9.3f} {sig1:14.1f} {sig2:12.1f}   {1/C_bare(x,g):9.3g}")

# surface-density version: Sigma_dyn = Sigma_bar / C  (C = const at all z since rho(z) <= rho(0) << rho_crit)
print("\n  surface-density cross-check (Sigma_dyn(1.1 kpc) = Sigma_bar / C, calibrated placement, gamma=2):")
C0 = C_floor(rho_bar / placements["calibrated A=0.029"], 2.0)
Sig_pred = Sig_bar / C0; s_pred = s_Sig_bar / C0
print(f"    predicted {Sig_pred:.1f} +/- {s_pred:.1f} M_sun/pc^2 vs measured {Sig_tot} +/- {s_Sig_tot}: "
      f"{(Sig_pred - Sig_tot)/np.hypot(s_pred, s_Sig_tot):.1f} sigma")

# MOND comparison at the solar circle (simple nu) -- radial boost only, as a scale
a0 = 1.2e-10; G = 6.674e-11
gN_solar = (V_MW * 1e3)**2 / (8.2 * 3.0857e19) / 1.366   # crude: g_obs/nu with nu~1.37 to get g_N ~ 1.5 a0
y = gN_solar / a0
nu = 0.5 + np.sqrt(0.25 + 1 / y)
print(f"\n  MOND scale at the solar circle: g_N ~ {y:.2f} a0 -> simple nu = {nu:.2f} (radial).  Bienayme+2009 (arXiv:0904.3893):")
print(f"  MOND Newtonian-inferred Sigma(1.1 kpc) at R0 = 78 M_sun/pc^2 -> 78/47.1 = {78/47.1:.2f} vs measured 68 +/- 4 (1.44 +/- 0.13).")

# ----------------------------------------------------------------------------- E2: the SPARC contradiction
hdr("E2: can any single rho_crit give a Newtonian null at the Sun AND a boost in SPARC disks?")
# SPARC midplane density quantiles from the 2026-09-03 finding: median 2.61e-2 M_sun/pc^3;
# x median 6.86e-5 under rho_crit_calibrated(median V) = 653 -> rho_median = 4.48e-2 (consistent);
# use the finding's max x 3.59e-2 -> rho_max ~ 23 M_sun/pc^3, and p99 4.98e-3 -> ~3.3.
sparc_rho = {"p50": 2.61e-2, "p99 (from x p99*653)": 4.98e-3 * 653, "max (from x max*653)": 3.59e-2 * 653}
print(f"  Sun midplane baryon density 0.084 M_sun/pc^3 vs SPARC midplane: "
      + ", ".join(f"{k} {v:.3g}" for k, v in sparc_rho.items()))
print("  -> the Sun is a SPARC-typical midplane density (3.2x the median, inside the p50-p99 range).")
print("\n  for a knee at rho_crit, C at the Sun and at the SPARC median (gamma = 2, floored):")
print(f"  {'rho_crit':>10s} {'x_sun':>9s} {'C_sun':>7s} {'f_DM,sun':>8s} {'x_sparc50':>10s} {'C_sparc50':>9s} {'B_sparc50':>9s}")
for rc in np.logspace(-4, 3, 8):
    xs, xg = rho_bar / rc, 2.61e-2 / rc
    Cs, Cg = C_floor(xs, 2), C_floor(xg, 2)
    print(f"  {rc:10.1e} {xs:9.2e} {Cs:7.3f} {1-Cs:8.3f} {xg:10.2e} {Cg:9.3f} {1/Cg:9.2f}")
# window where the Sun is within 2 sigma of the Oort limit (f_DM in [0.05, 0.21]):
rcs = np.logspace(-4, 4, 4001)
fs = 1 - C_floor(rho_bar / rcs, 2)
ok = (fs > fdm_obs - 2 * s_fdm) & (fs < fdm_obs + 2 * s_fdm)
lo, hi = rcs[ok].min(), rcs[ok].max()
print(f"\n  Oort-limit window (gamma=2, floored, 2 sigma): {lo:.3g} <= rho_crit <= {hi:.3g} M_sun/pc^3")
print(f"  boost at the SPARC median inside that window: B = {1/C_floor(2.61e-2/lo,2):.2f} .. {1/C_floor(2.61e-2/hi,2):.2f}")
print(f"  boost at a dwarf outer disk (rho ~ 1e-3): B = {1/C_floor(1e-3/lo,2):.2f} .. {1/C_floor(1e-3/hi,2):.2f}  (TEST-10 needs >= 13.7)")
print(f"  calibrated knee / window top = {placements['calibrated A=0.029']/hi:.3g};  S691 knee / window bottom = {placements['S691 1e-23 kg/m^3']/lo:.3g}")
for g in (0.489, 0.1):
    fs = 1 - C_floor(rho_bar / rcs, g); ok = (fs > fdm_obs - 2*s_fdm) & (fs < fdm_obs + 2*s_fdm)
    if ok.any(): print(f"  same window at gamma = {g}: {rcs[ok].min():.3g} .. {rcs[ok].max():.3g}")
    else:        print(f"  same window at gamma = {g}: none inside 1e-4..1e4 M_sun/pc^3 (window slides below 1e-4)")

# ----------------------------------------------------------------------------- E3: a globular cluster
hdr("E3: a globular cluster crosses the knee inside one object")
# Plummer sphere, M = 3e5 M_sun, a = 3 pc (r_h = 1.305 a ~ 3.9 pc): rho_0 = 3M/(4 pi a^3)
M, a = 3e5, 3.0
rho0 = 3 * M / (4 * np.pi * a**3)
r = np.array([0.0, 1, 2, 3.9, 8, 15, 30, 60])          # pc
rho_r = rho0 * (1 + (r / a)**2) ** (-2.5)
print(f"  Plummer M=3e5 M_sun, a=3 pc: rho_0 = {rho0:.0f} M_sun/pc^3, r_h = {1.305*a:.1f} pc")
print(f"  (Harris-catalogue GC central densities: 1e-1 .. 1e5+ M_sun/pc^3; Baumgardt+2018 fit 112 GCs with DM-free N-body)")
for label, V in (("host V=220", V_MW), ("internal sigma=10", 10.0)):
    for pk, A in (("calibrated", 0.029), ("stated", 4.6e-5)):
        rc = A * V**2
        print(f"\n  rho_crit = A V^2 with {pk} A, {label}: rho_crit = {rc:.3g} M_sun/pc^3")
        print(f"    {'r [pc]':>7s} {'rho':>10s} {'x':>10s} {'C_floor':>8s} {'B':>6s} {'sqrt(B) (sigma_los boost)':>26s}")
        for ri, rh in zip(r, rho_r):
            x = rh / rc; C = C_floor(x, 2.0)
            print(f"    {ri:7.1f} {rh:10.3e} {x:10.3e} {C:8.3f} {1/C:6.2f} {np.sqrt(1/C):26.2f}")
print("\n  Observed: Baumgardt & Hilker 2018 -- DM-free N-body fits to dispersion + density profiles, M/L_V ~ 1.5-2.5;")
print("  Conroy, Loeb & Spergel 2011 -- M_DM/M_* < 1 for NGC 2419 and MGC1; Ibata+2011 -- Newtonian Michie model fits")
print("  NGC 2419, MOND 1e4x less likely.  A radial M/L rise by 1/Om = 3.17 from core to outskirts is not seen.")

# ----------------------------------------------------------------------------- E4: wide binaries by branch
hdr("E4: which coupling branch gives the 0.05-0.4 % wide-binary velocity null?")
print("  velocity deviation = sqrt(B) - 1 for the division branch; for quadrature (v^2 = v_b^2 + (V C)^2)")
print("  the coupling is defined for a disk V_flat, not a binary -- taking the binary's own v_orb as V gives")
print("  dv/v = sqrt(1 + C^2) - 1 ~ C^2/2.")
for k, rc in placements.items():
    x = rho_bar / rc
    for g in (2.0, 0.489):
        Cf, Cb = C_floor(x, g), C_bare(x, g)
        print(f"  {k:24s} g={g:<5} x={x:9.2e}  division floored: {100*(np.sqrt(1/Cf)-1):8.2f} %   "
              f"division bare: {100*(np.sqrt(1/Cb)-1):10.3g} %   quadrature (C bare): {100*(np.sqrt(1+Cb**2)-1):9.3g} %")
print("\n  S691's derivation evaluated rho_local INCLUDING a 0.4 GeV/cm^3 dark-matter halo term and used rho_crit = 1e-23 kg/m^3.")
print("  Gaia (Banik+2024): alpha_grav = -0.021 (+0.065/-0.045); gravity within ~8 % of Newton in g -> velocity within ~4 %.")
print("  Chae 2023-2025: gamma_g = 1.34-1.49 -> velocity +16-22 %.  Division-floored B = 3.17 -> velocity +78 %.")

# ----------------------------------------------------------------------------- inventory table
hdr("KNEE INVENTORY: x ranges by sector")
rows = [
 ("Galaxy disks, density-keyed (SPARC, calibrated A)", "rho_mid/rho_crit(V)", "1e-6 .. 3.6e-2 (median 6.9e-5)", "linear", "no: C = gamma x to 0.22x precision (09-03)"),
 ("Galaxy RAR, acceleration-keyed", "g_bar/a0", "0.01 .. 30 (median 0.18, p90 3.0)", "KNEE", "yes, free gamma -> 0.489 = MOND simple mu; dBIC gap = ln N"),
 ("Cosmology, DE substitution", "2 rho_m/rho_Lambda (gamma=1/2 identity)", f"{2*OM/(1-OM):.2f} today .. {2*OM/(1-OM)*27:.0f} at z=2", "KNEE", "yes, free gamma -> 0.487 = LCDM (08-12 direct fit)"),
 ("Solar neighbourhood / wide-binary environment", "rho_local/rho_crit(220)", "6e-5 (calibrated) / 3.8e-2 (stated) / 5.7e2 (S691)", "linear / linear / saturated", "NEVER REGISTERED; Oort limit available since 1932"),
 ("Globular clusters (core -> tidal radius)", "rho(r)/rho_crit", "calibrated, host V: 3e-3 .. 3 ; stated, internal V: 2e2 .. 2e5", "CROSSES THE KNEE / saturated", "NEVER REGISTERED (S611 P611.2 predicted gamma=2 internal dynamics, never run)"),
 ("Open clusters (cores 1-100 M_sun/pc^3)", "rho_core/rho_crit", "7e-4 .. 7e-2 (calibrated) / 0.5 .. 45 (stated)", "linear / KNEE", "never registered"),
 ("Chemistry (22 elemental solids)", "undefined: no rho_crit for materials; Spearman invariant", "-", "-", "not a compander test (Spearman -0.32 for every gamma, rho_crit)"),
 ("Superconductivity / phase-boundary visualizer", "gamma from N_corr; x never measured", "-", "-", "no"),
 ("Consciousness", "C ~ 0.5 asserted, no x", "-", "knee by assertion", "no"),
 ("Quantum (dephasing, cos^2)", "C = correlation coefficient, no compander", "-", "-", "no"),
]
for r_ in rows:
    print(f"  {r_[0]:48s} | x = {r_[1]:44s} | {r_[2]:52s} | {r_[3]:28s} | {r_[4]}")

print("""
ADJUDICATION (written after the numbers):
  E1 as expected: calibrated and stated placements both give f_DM,local = 0.68 vs 0.13 +/- 0.04 (>10 sigma).
  E2 as expected: the Sun sits inside SPARC's midplane-density range, so no knee makes it saturated while the
     disks are boosted; the surviving 2-sigma Oort window is ~0.03-0.2 M_sun/pc^3 -- 3 to 4 decades from BOTH
     the calibrated knee (above) and the S691 knee (below) -- and inside that window the SPARC-median boost is
     < 1.6 and the dwarf-outer-disk boost < 3.2, still under TEST-10's 13.7. The window was inside the 09-03 L2
     scan's A range (1e-11..1e-1), whose best cell anywhere was 3.06x worse than parameter-free MOND.
  E3 as expected only for (calibrated A, host V); with internal V or stated A the cluster is saturated
     throughout (Newtonian, B = 1) -- which passes the GC data and fails the galaxy sector by construction.
  E4: the sub-percent null comes from the quadrature branch (or from S691's saturated placement, which also
     kills the galaxy boost). The division branch -- the ledger's law behind TEST-09/10 -- predicts +78 % in
     velocity for wide binaries, excluded by Gaia at every reading (Banik AND Chae).
""")
