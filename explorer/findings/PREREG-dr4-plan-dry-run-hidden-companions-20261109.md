# PREREG — DR4 plan dry run on DR3, with a physical hidden-companion model (2026-11-09)

Committed **before** any script for this session exists and before any statistic has been computed on real velocities. Column headers of the two Zenodo CSVs and the g_N list for the Chae table have been seen. No velocity has been read.

## Already known when this was written (descriptive; not predictions)
- `github.com/HBoufourou/paperI-wide-binaries` @ `2d0c922`, `CORRECTION.md` (8 Sep 2026): the 81,088-pair input of arXiv:2608.24556v1 is numerically Chae's `Newton_dr3_MSMS_d200pc_5.csv`, a Newtonian mock. Its observational measurements and gravity exclusions are withdrawn by the author. arXiv v1 is unchanged and carries no notice. `/wide-binaries`, my 11-08 finding and the DR4 plan's open point still cite it.
- Zenodo checksums match the correction: real `gaia_dr3_MSMS_d200pc_ruwe.csv` md5 `1b6c5063…` (81,880 rows), mock md5 `997069b5…` (81,088 rows).
- Chae's mock generator takes a `f_multi` input. The value for file `_5` is not yet known to me.
- Chae+ 2026 (2601.21728v4) §4: "q < 0.5 is quite rare", P(q < 0.3) = 4.5 %, P(q < 0.15) = 1.7 %, from 578 pairs in Tokovinin's catalogue at 0.1″–0.5″. "(0.05)^9" comes from a 5 % speckle detection rate. Only 10 of 36 have speckle clearance.
- Cookson+ 2026 §3.2.4: inner binaries with periods ≳ 10 yr escape RUWE and matter most at large separation. Their sample assumes the companion fraction is separation-independent.

## Arms
**A. Provenance and real-data 2D trend (`wb_real_vs_mock_2d.py`).** Same code on real and mock files. ṽ = |Δv⊥|/√(GM/s), angular perspective correction at common distance. Own Newtonian f = 0 template per pair (same s, M, errors; Kepler orbit; e prior thermal, α = 1.3, and Chae's s-dependent polynomial as a band). Estimators: E1 (median, no truncation) and E2 (median truncated at ṽ < √2, identical on data and template), inverted to γ by zone and in the plan's g_N bins (< 0.3, 0.3–0.6, 0.6–1, 1–3, > 3 in 10⁻¹⁰ m/s²). Bootstrap by pair. Cuts: Boufourou fiducial (RUWE < 1.4, R_chance < 0.01, σ_ṽ < 0.10), and S2-like (d ≤ 130 pc, s 1–30 kau, RUWE < 1.25; `ipd_frac_multi_peak` is not in the file, stated as a gap).

**B. Forward hidden-companion model (`wb_hidden_companions.py`).** Each component independently hosts an inner companion with probability F, lognormal a (median 40 AU, 1.5 dex, Offner+ 2023), e density 0.4 + 1.2e, q flat on 0.1–1 (variants: Moe & Di Stefano 2017 shape; Chae's catalogue shape), L ∝ M⁴. Photocentre orbit simulated over the mission baseline with Gaia-like scan angles, 2D linear fit, RUWE from along-scan residuals, proper-motion bias from the fit. Cuts modelled in sequence: RUWE < 1.25, resolved/IPD, CMD over-luminous, RV stability (two epochs, 3–11 yr, 100 m/s), speckle. Baselines 34 and 66 months; for DR4 also an acceleration-significance flag. Reports surviving fraction, f among survivors, kick distribution, mass bias.

**C. Mocks through the plan (`wb_plan_dryrun_mocks.py`).** Template: the 36 (S1) at N = 36, and resampled at N = 150, 500. Truths: Newton; Newton + forward-model companions; flat boost (EFE-dominated, γ ≈ 1.38 for g < 1, tapering to 1.03 at g = 10); EFE-free (simple ν at a₀ = 1.2). Plan's statistics: pooled level, per-bin γ, trend slope β = d ln γ/d ln g_N across the three low bins, calibration bin > 3. Frequency of every row of the plan's outcome table per truth. 300 catalogues per arm where N = 36 (fewer allowed at larger N, stated).

**D. DR3 real S1.** Plan's statistics on the 36 real rows (v4 inputs), plus bin counts.

**E. Literature.** q distribution and companion fraction from Moe & Di Stefano 2017 against Chae+'s 4.5 %.

## Predictions
- **P1 (identity).** Boufourou's fiducial cuts on the mock file give 41,760 pairs within 0.5 %. The row count on the real file differs. E2 on the mock with the thermal-to-superthermal band contains 0.95–1.05.
- **P2 (the unmeasured number).** E2 on the *real* file, 2–30 kau, fiducial cuts: γ between 1.05 and 1.25, above the mock's value by ≥ 0.02. So far as I know nobody has printed this after the correction.
- **P3.** E1 exceeds E2 on the real file by ≥ 0.05 in the test zone.
- **P4 (real trend).** On real data, E2 slope β across the low bins lies in [−0.25, 0.05] (rising toward low g means negative). EFE-free's β ≈ −0.36 is excluded at ≥ 2σ under E2, and not excluded under E1.
- **P5 (forward-model control).** With Pittordis-like cuts the model gives overall survival 40.5 ± 12 % and RUWE rejection 37 ± 12 %. Published values: 40.5 %, ~37 %. Median ṽ for triples rises with separation, from about 0.9 to about 1.6 over 0.2–30 kau.
- **P6 (the f that survives).** With F = 0.3 per star: f among survivors is 0.25–0.45 for RUWE + IPD + CMD. With the two-epoch RV cut (only part of the 36 has it) it is 0.05–0.20. So Chae+'s 0.03 ± 0.03 is low by ≥ 2×, and "≲ 0.1" sits inside the range rather than above it.
- **P7 (kick).** Survivors' kick has median 200–800 m/s, not log-uniform on 100–2000. Contributing inner orbits are concentrated at a ≈ 30–300 AU.
- **P8 (the key one: the plan's primary statistic is confounded).** Newton + forward-model companions at the f of P6 produces mean β ≤ −0.18 (at least half of EFE-free's) at N = 500, and the calibration bin passes ≥ 90 % of the time. So the row "trend rises: EFE-free shape" fires under contaminated Newton at a rate comparable to its power.
- **P9 (power).** At N = 36 the trend has < 20 % power at 2σ against EFE-free, and its binned γ has empty or single-digit bins. It needs N ≥ 150 for 80 %.
- **P10 (what DR4 buys S1).** Dividing proper-motion errors by 3 shrinks σ(γ) on S1 by < 10 %. A 66-month baseline plus an acceleration flag reduces surviving f by 1.5–3×, mostly at a ≈ 10–50 AU. The value of DR4 for S1 is vetting, not precision.
- **P11 (literature).** Moe & Di Stefano's q distribution gives P(q < 0.3) ≥ 20 % at these separations, ≥ 4× Chae+'s 4.5 %. If P6's f moves by less than 30 % between q shapes this does not matter much.
- **P12 (instrument).** `wb_estimators.py` cannot be applied as written to an S2-class sample: most pairs have no RV on both members with useful error. The plan's "one instrument, both samples" fails.

## Reading rules
- R1. If P8 holds, the plan's trend row is invalid as written and needs a contaminant-calibrated null. If it fails, the trend stands and my suspicion was wrong: say so.
- R2. If P9 holds, S1 cannot speak to the trend at all, and the plan's in-house section should be cut to S2-class data, or dropped in favour of reading outside analyses.
- R3. The forward model is a model. A contaminant number from it is conditional on F, a, q. Print the range; pick no headline.
- R4. A DR3 2D number here is one AI session's quick implementation, not a measurement of gravity. Compare it to the literature before reading it, and to its own mock control always. Mock arm must recover truth before the real number is quoted.
- R5. Nothing here moves Bucket 0 or the count.
