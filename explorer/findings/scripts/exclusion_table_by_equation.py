#!/usr/bin/env python3
"""Every executed loss of a Synchronism equation or reading, one table, by kind, inside and outside the count.
Explorer 2026-11-12. Desk synthesis: rows come from src/lib/ledger.ts, Synchronism/PREDICTIONS.md (Buckets 1-2 and the
dated blocks), explorer/maintainer *_output.txt files, and two runs made today (density law at the archive's calibration,
PREREG 09bea5e; Hyades cleaned dispersion, PREREG 8d8070a). Numbers are copied from the cited output where one exists;
'rec' in `src` marks a number taken from a ledger sentence that I did not re-open this session.

TIER (who asserts the equation or reading):
  A0  canonical current self-description: FUNDAMENTALS.md, README 'The Framework' / honest limitations, PREDICTIONS.md
      bet text and frame blocks
  A1  a framework paper that writes it as the framework's: arXiv_preprint_outline, Paper_Summary,
      DECEMBER_2025_COMPREHENSIVE_FRAMEWORK, whitepaper Appendix D, EXPERIMENTAL_TEST_CATALOG
  A2  one session or exploration document
  S   a reading built on the site; no archive document asserts it
KIND: fs-data (framework-specific, external data) | mond (shared with MOND's functions) | lcdm (shared with LCDM)
      | constr (construction / internal-consistency check, no external data) | reg (a registered amplitude the
      equation itself never produced) | premise (a derivation premise contradicted by data)
STATUS: stands | weak (about 2 sigma or convention-dependent) | cond (conditional on an unwritten rule) |
        withdrawn (statistic withdrawn or died on execution) | unresolved
"""
import collections

ROWS = [
    # id, equation / reading, C, tier, kind, status, statistic, data, prereg, root, in6, src
    ("1", "bounded boost, cap 1/Om (BTFR slope, TEST-09)", "C_a floored", "A2", "fs-data", "weak",
     "n 3.35+-0.07 vs obs 3.75+-0.10 (3.3s); fires only at B_max = 1/Om", "123 SPARC", "registered", "cap", 1,
     "ledger.ts REFUTATION_ROWS #1"),
    ("2", "bounded boost, cap 1/Om (dwarf f_DM, TEST-10)", "C_a floored", "A2", "fs-data", "stands",
     "106/153 exceed at face value; 28 at >=3s at 3.17; caps <= ~7.5 excluded at 3s by one disc", "153 SPARC",
     "registered", "cap", 1, "ledger.ts #2, TEST10_ONE_STATEMENT"),
    ("3", "bounded boost vs galaxy weak lensing", "C_a floored", "A2", "fs-data", "cond",
     "3.17 cap exceeded in 3 reliable bins at x5 (4-9s); conditional on a light-deflection rule", "KiDS-1000 RAR",
     "none", "cap", 0, "ledger.ts LENSING_LEG_ASSUMPTION"),
    ("4", "Om floor at the solar mid-plane (Oort limit)", "C_a floored", "A2", "fs-data", "stands",
     "f_DM 0.685 vs 0.13+-0.04 (15s; 7s in surface density)", "local Oort limit",
     "script header only", "cap", 0, "XF knee_inventory_oort_limit_and_globular_clusters_output.txt"),
    ("5", "field equation div[C grad Phi], density-keyed, floored", "C_rho floored", "A2", "fs-data", "stands",
     "chi2/N 69-160 vs MOND simple-mu 21.2; at RG's floor 195-2700", "153 SPARC", "none", "cap", 0,
     "PRED 2026-09-09; XF sparc_pinned_at_rg_knee_l2_output.txt"),
    ("6", "evolving floor 1-Om(z) at high z", "C_a floored", "S", "fs-data", "stands",
     "Price+21: 10-13 of 21 above cap at >2s; RC100 slope 1.07+-0.33 vs 2.2-2.9", "high-z discs",
     "a9dfc48", "cap", 0, "XF evolving_floor_highz_and_ambient_z0_output.txt"),
    ("7", "gamma = 2 pin (RAR transition shape)", "C_g", "A1", "mond", "weak",
     "dBIC +184 by point, ~+11 by galaxy; ~2s with own Upsilon per law", "SPARC RAR", "registered", "gamma2", 1,
     "ledger.ts #3"),
    ("8", "environment raises G_eff in voids (> 20% of RAR scatter)", "C_rho", "A2", "reg", "stands",
     "r2 = 0.0001 vs bar 0.09", "SPARC + Cosmicflows-4", "registered", "env", 1, "ledger.ts #4"),
    ("9", "compander under a modified-Poisson completion vs Cassini", "C_g", "S", "mond", "stands",
     "14.5-19.3s for gamma 0.3-3 at pinned M/L; family needs Upsilon_d 1.2-1.4 (2.9s on SPARC)",
     "Cassini + SPARC", "registered (TEST-25, post-registry)", "solar-tail", 1, "ledger.ts TEST25_STATUS_SENTENCE"),
    ("10", "compander direct tail, no EFE (planetary perihelia)", "C_g", "A2", "mond", "stands",
     "Saturn -9,576 mas/cy vs -0.32+-0.47; gamma < 0.87 excluded at 3s", "EPM2011", "cbfa9c5", "solar-tail", 0,
     "X direct_tail_planetary_precession_output.txt"),
    ("11", "observer-relative Bell/CHSH (bet B1)", "none", "A0", "constr", "stands",
     "local S = 1.98; nonlocal grid S = 2.0; 2.67 only with signalling", "simulation", "registered (B1)", "bell", 1,
     "ledger.ts #6; PRED B1"),
    ("12", "Peres-Mermin on the substrate", "none", "A2", "constr", "stands", "0/512 assignments", "simulation",
     "none", "bell", 0, "kuramoto-lattice-suite/06_peres_mermin_contextuality.py (rec)"),
    ("13", "density-keyed law, one global knee free", "C_rho", "A1", "fs-data", "stands",
     "dBIC +2843 (galaxy bootstrap 2178-3590), worse in 105/122", "SPARC 2438 pts / 122 gal",
     "PREREG for the galaxy-level rerun only (10-18)", "dens-gal", 0, "ledger.ts DBIC2843_SPEC"),
    ("14", "density-keyed law AS WRITTEN: rho_crit = 0.028 V^0.5, gamma = 2", "C_rho", "A1", "fs-data", "stands",
     "dBIC +8404, worse in 115/122 (gal-sd 824); gamma free +6407; A,B free best B ~ -4 at +2295", "SPARC 2438 / 122",
     "09bea5e (today)", "dens-gal", 0, "XF density_law_at_archive_calibration_v05_output.txt"),
    ("15", "local density as the boost variable", "C_rho", "A2", "fs-data", "stands",
     "sigma(logB|rho) 0.161 vs sigma(logB|g_bar) 0.118; mixing weight 1.00 [0.75,1.00] excludes all-local-rho",
     "SPARC", "not checked", "dens-gal", 0, "X rar_scatter_nogo_output.txt (rec)"),
    ("16", "density-keyed law at the solar neighbourhood, archive calibration", "C_rho", "A1", "fs-data", "stands",
     "boost in g 2.7 (gamma 2) to 10.5 (gamma 0.489) at rho 0.09; Oort limit allows ~1.0-1.3 (recall). "
     "The site's 3.5e4 uses 0.029 V^2, not the archive's form", "Oort limit / wide binaries", "09bea5e (P7)",
     "dens-local", 0, "XF density_law_at_archive_calibration_v05_output.txt LOCAL"),
    ("17", "density-keyed law at Chae's wide-binary radii", "C_rho", "A2", "fs-data", "stands",
     "rotation curve missed by +2.0 to +4.2 dex", "Gaia wide binaries", "none", "dens-local", 0,
     "X efe_required_ambient_density_output.txt (rec)"),
    ("18", "density-keyed G drifting with the Sun's motion (LLR)", "C_rho smoothed", "S", "fs-data", "cond",
     "68/74 grid laws excluded at l = 1 pc, 62/74 at 10 pc; needs a smoothing length no document states",
     "LLR Gdot/G", "80b8c9c", "dens-local", 0, "X density_keyed_gdot_solar_motion_output.txt (rec)"),
    ("19", "density-keyed law read pointwise in the interplanetary medium", "C_rho", "S", "fs-data", "cond",
     "192/192 grid points exceed 1e-6 in GM_sun(Earth)/GM_sun(Saturn)", "ephemerides", "0ad68f3", "dens-local", 0,
     "M density_keyed_law_vs_interplanetary_medium_output.txt; 'not a refutation'"),
    ("20", "rho_crit velocity exponent B = 0.5 (premise R_half ~ V^0.75)", "C_rho", "A1", "premise", "stands",
     "measured exponent -0.15+-0.18 (p = 1.08+-0.09): B = 0.5 at 3.6s; the site's V^+2 at 12.2s", "SPARC Table 1, 129",
     "none", "rhocrit-V", 0, "F rho-crit-has-no-velocity-exponent-A-is-a-half-power-coefficient.md"),
    ("21", "gamma = 2/sqrt(N_corr) vs RAR offset", "C_g/gamma", "A0", "fs-data", "stands",
     "predicted r = +0.55, measured r = -0.55", "SPARC", "S430 prediction (rec)", "gammaNcorr", 0,
     "PRED Bucket 2 (S430/S437; not re-run)"),
    ("22", "Appendix D sec. D.3 covariant DE completion as written (EdS)", "DE sector", "A1", "fs-data", "stands",
     "chi2 ~ 9,900", "DESI DR2 + CMB + SN", "none", "de-cov", 0, "PRED 2026-08-12 block"),
    ("23", "completion B (site pinning)", "DE sector", "S", "fs-data", "stands", "dChi2 >= +79 vs LCDM at every omega",
     "DESI DR2 + CMB + SN", "none", "de-cov", 0, "PRED 2026-08-12"),
    ("24", "DE sector without CDM (C0 = Om_b)", "DE sector", "S", "fs-data", "stands",
     "no gamma gives q0 < 0 and dark/baryon 5.36 (best 1.54)", "recombination ratio", "71ba3e0", "de-nocdm", 0,
     "M de_sector_without_cdm_output.txt (rec)"),
    ("25", "local-fluid DE horn", "DE sector", "S", "fs-data", "stands", "excluded unless |eps| < ~1e-5", "P(k)",
     "7d8efbf", "de-local", 0, "F de-sector-local-horn (rec)"),
    ("26", "uniform G/C governs growth and local dynamics", "DE sector", "S", "fs-data", "stands",
     "ISW A = -8.5 (-47.5s); Gdot/G >= 527x the LLR 2s edge for gamma 0.3-3", "ISW, KiDS, LLR",
     "be3ecba; script header", "uniformG", 0, "XF uniform_g_over_c_growth_vs_isw_s8_mu_output.txt; M de_modified_g_reading_vs_llr_output.txt"),
    ("27", "Session 107 growth suppression (TEST-04a)", "DE/growth", "A2", "fs-data", "weak",
     "registered bin ~0.9s (LRG1 row corrected); mechanism withdrawn 08-11", "DESI fs8", "registered", "test04a", 0,
     "PRED Bucket 2 row; ledger COUNT_RULE_SENTENCE (+1 under point-estimate rule)"),
    ("28", "inflow gravity, radiative sector (scalar GW)", "substrate", "A2", "fs-data", "stands",
     "Hulse-Taylor 0.9983+-0.0016 of GR tensor quadrupole; LIGO polarization tensor", "binary pulsar, LIGO",
     "none", "spin2", 0, "PRED Bucket 2 (Phase-14)"),
    ("29", "velocity-anisotropic identity threshold", "substrate", "A2", "fs-data", "stands",
     "11-19 orders above cavity / clock-comparison bounds (10-19: 1e-22 figure uncheckable as written)",
     "isotropy bounds", "none", "aniso", 0, "PRED Bucket 2 (Phase-16)"),
    ("30", "door #3 intrinsic decoherence D k^2 at Planck D ('near-reach, not Planck-killed')", "substrate", "A0",
     "fs-data", "stands", "D/D_Pl < 4e-39 (Borexino 11C); hydrogen heating at D_Pl", "Borexino, matter stability",
     "none", "door3", 0, "PRED frame block l.~70 vs block l.987; X door3_*_output.txt"),
    ("31", "dimension-4 Lorentz violation at natural c ~ 1e-2", "substrate", "A2", "fs-data", "stands",
     "15-27 orders (corrected 10-30 from 16-28)", "LIV bounds", "none", "liv", 0, "F liv-dim4 (rec)"),
    ("32", "'measurement is sampling' (CRT reading of witnessing)", "substrate", "S", "fs-data", "stands",
     "Zeno (Itano) 40.3s at n = 8; T_scan rule g2(0) ~ 1 vs 7.5e-5", "Itano 1990; HBT",
     "ee7f509; 5139489", "crt", 0, "X crt_zeno_itano_fit_output.txt; X t_scan_window_rule_hbt_output.txt"),
    ("33", "transfer rule + saturation = Navier-Stokes", "substrate", "A0", "constr", "stands",
     "proved 1-DOF scalar diffusion (irrotational, dissipative)", "proof", "none", "ns", 0,
     "PRED Bucket 2; FUNDAMENTALS still states it unannotated in its last section"),
    ("34", "monotonic saturation builds the walls (Foundation 3)", "substrate", "A0", "constr", "stands",
     "monotonic-R substrates disperse at 0%", "CA simulation", "none", "f3", 0, "PRED Bucket 2"),
    ("35", "80-orders unification by one tanh", "C (any)", "A0", "constr", "stands",
     "tanh(gamma log) saturates within ~1.6 decades", "construction", "none", "80orders", 0, "PRED Bucket 2 (S633)"),
    ("36", "cosmic interference scale ~500 Mpc", "cosmology", "A2", "constr", "stands", "dimensional error",
     "construction", "none", "lambda500", 0, "PRED Bucket 2 (S632)"),
    ("37", "a0 from the Jeans analysis", "a0", "A2", "constr", "stands", "stated formula off by 614x",
     "construction", "none", "a0jeans", 0, "PRED Bucket 2 (S687)"),
    ("38", "fractal coherence bridge (OQ007)", "cosmology", "A2", "fs-data", "stands", "0/7 scale boundaries",
     "scale boundaries", "none", "oq007", 0, "PRED Bucket 2 (S611-614)"),
    ("39", "hot-SC T_c formula (TEST-18 candidates)", "eta / chemistry", "A1", "fs-data", "stands",
     "YBCO 607 K vs 93 K (6.5x); registered falsification is dated 2035", "YBCO T_c", "registered (2035 date)",
     "tc", 0, "PRED Bucket 2; EXPERIMENTAL_TEST_CATALOG TEST-18"),
    ("40", "chemistry gamma ladder: melting points, critical exponents, conductivity", "gamma (chemistry)", "A0",
     "fs-data", "stands", "melting 53% mean error; exponents 2x off; conductivity r = -0.414 (site showed +0.955)",
     "chemistry tables", "none", "chem", 0, "README honest limitations; PRED 11-02"),
    ("41", "compatibility law p_crit ~ 1/<C> (bet B4)", "coupling", "A0", "fs-data", "stands",
     "0.0925 predicted vs 0.0320 at C = 0.2 (2.9x); affine fit 82% intercept", "own coupling runs", "none", "b4", 0,
     "PRED B4 (09-25)"),
    ("42", "EFE-free corner, internal reading (Milgrom 2011 rule)", "C_g", "S", "mond", "stands",
     "Hyades cleaned 0.21+-0.05 = 0.30 of prediction (3.3s with 20% sys); 4 of 4 cleaned clusters <= 0.65",
     "Torres+2026, Geller+, Torres+21", "8d8070a (reading); thresholds set 11-12 after DR3 values", "corner", 0,
     "XF hyades_torres2026_inner_posthoc_output.txt; XF system_partition_rules_output.txt sec. 6"),
    ("43", "EFE-free corner, total-acceleration reading", "C_g", "S", "mond", "stands",
     "Saturn ~85,000 mas/cy vs -0.32+-0.47", "EPM2011", "3d53a42", "corner", 0, "ledger.ts EFE_FREE_CORNER_STATUS"),
    ("44", "a0(z) = cH(z)/2pi", "a0", "A1", "fs-data", "unresolved",
     "level-free slope n: Ciocan bins 0.71+-0.13, global line 1.15 (straddle n = 1); RC100 0.0+-0.5; z~2.3 BTFR on constant a0. (Level at z~1, 1.86 vs 2.38, is anchor-dominated)",
     "Ciocan+2026 MUSE-DARK", "post-hoc", "a0z", 0, "XF a0_constant_branch_four_anchors_output.txt; TEST CATALOG l.504-518"),
    # withdrawn, kept so the table is complete in both directions
    ("W1", "density-keyed law at universal gamma on globular clusters", "C_rho", "A2", "fs-data", "withdrawn",
     "'3.7-4.4x Newton' was a ratio to a near-zero baseline; model separation", "Baumgardt-Hilker", "none", "gc", 0,
     "PRED 09-19, 10-31"),
    ("W2", "EFE-free corner on 42 globular clusters, 10.6s", "C_g", "S", "mond", "withdrawn",
     "model separation (shuffled-data control reproduces it); replacement +2.9s, conditional on mass model",
     "Baumgardt-Hilker", "fcc4809", "corner", 0, "PRED 10-31"),
    ("W3", "compander form loses 2.10x to MOND mu", "C_g", "S", "mond", "withdrawn",
     "function-only swap 0.988x", "153 SPARC", "04c4037", "form", 0, "PRED 09-16"),
    ("W4", "substituted DE branch forced w_a, 3.4-5.4s", "DE sector", "S", "lcdm", "withdrawn",
     "died on execution: gamma 0.487, dChi2 -0.3 vs LCDM", "DESI DR2", "none", "de-sub", 0, "PRED 08-12"),
]

COLS = ("id", "eq", "C", "tier", "kind", "status", "stat", "data", "prereg", "root", "in6", "src")
R = [dict(zip(COLS, r)) for r in ROWS]


def count(pred, label):
    rows = [r for r in R if pred(r)]
    roots = collections.OrderedDict()
    for r in rows:
        roots.setdefault(r["root"], []).append(r["id"])
    print(f"{label}\n   rows {len(rows)}; independent roots {len(roots)}: " +
          "; ".join(f"{k} [{','.join(v)}]" for k, v in roots.items()))
    return len(rows), len(roots)


def main():
    print("| # | equation or reading | C | tier | kind | status | statistic | data | written before | root | in the 6 | source |")
    print("|---|---|---|---|---|---|---|---|---|---|---|---|")
    for r in R:
        print("| " + " | ".join(str(r[c]) if c != "in6" else ("yes" if r[c] else "") for c in COLS) + " |")
    live = lambda r: r["status"] in ("stands", "weak")  # noqa: E731
    print("\nCOUNTS (live = status stands or weak; cond / unresolved / withdrawn excluded unless stated)")
    count(lambda r: r["in6"] == 1, "R0  the count today (registered, fired)")
    count(lambda r: live(r), "R1  every live executed loss, any tier, any kind")
    count(lambda r: live(r) and r["tier"] in ("A0", "A1", "A2"), "R2  the archive asserts it (A0-A2), any kind")
    count(lambda r: live(r) and r["tier"] in ("A0", "A1"), "R3  canonical docs or framework papers assert it (A0-A1)")
    count(lambda r: live(r) and r["tier"] in ("A0", "A1", "A2") and r["kind"] == "fs-data",
          "R4  archive-asserted, framework-specific, external data")
    count(lambda r: live(r) and r["tier"] in ("A0", "A1") and r["kind"] == "fs-data" and r["status"] == "stands",
          "R5  strictest: A0-A1, framework-specific data, stands (no 'weak')")
    count(lambda r: live(r) and r["tier"] == "S", "    site-built readings (no archive assertion)")
    count(lambda r: r["status"] == "cond", "    conditional on an unwritten rule")
    print("\nTHE SIX UNDER R2-R5 (does each row survive an 'archive asserts it' clause?)")
    for r in R:
        if r["in6"]:
            print(f"   #{r['id']:>2} tier {r['tier']:2s} kind {r['kind']:7s} status {r['status']:6s}  "
                  f"R2 {'in' if r['tier'] != 'S' else 'OUT'}  R4 {'in' if r['tier'] != 'S' and r['kind'] == 'fs-data' else 'OUT'}  "
                  f"R5 {'in' if r['tier'] in ('A0','A1') and r['kind'] == 'fs-data' and r['status'] == 'stands' else 'OUT'}  {r['eq']}")
    by = collections.Counter((r["tier"], r["kind"]) for r in R if live(r))
    print("\nlive rows by tier x kind:", dict(sorted(by.items())))


if __name__ == "__main__":
    main()
