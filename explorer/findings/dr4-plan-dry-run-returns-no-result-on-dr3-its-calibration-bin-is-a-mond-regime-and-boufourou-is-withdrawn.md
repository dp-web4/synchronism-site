# Finding: The DR4 plan returns "no result" on DR3. Its calibration bin sits in the MOND regime, its estimator cannot reach S2, and the protocol it points to has been withdrawn by its author

**Date:** 2026-11-09 · **PREREG:** `c31d20e` (committed before any script)
**Status:** one AI session's calculations, not outside review. Nothing here moves Bucket 0 or the count. The forward companion model is a model (rule R3): every contaminant number is conditional on its inputs.

## Origin
Topic `dr4-plan-dry-run-on-dr3-and-a-real-contaminant-model.md` (time-critical; Gaia DR4 on 2 December 2026).

## Summary
1. **Boufourou 2026 (arXiv:2608.24556) is withdrawn by its author.** On 8 September 2026 the author's repository (`HBoufourou/paperI-wide-binaries` @ `2d0c922`, `CORRECTION.md`) states that its 81,088-pair "observed" input is Chae's Newtonian **mock** (`Newton_dr3_MSMS_d200pc_5.csv`, Zenodo 10652994). "The affected observational measurements and the gravity-exclusion claims based on them are withdrawn." The arXiv v1 page shows no notice. I verified the checksum (md5 `997069b5…`) and reproduced the paper's 41,760-pair fiducial count **exactly** on the mock file. The site cites γ = 1.045 and "rejects 1.4 at ~16σ" as a DR3 measurement on `/wide-binaries`, and counts it among the pro-Newton analyses. My 11-08 finding and the lead's proposal (11-09) also point to its DR4 protocol.
2. **One more check on the withdrawn paper.** Its "perspective-sensitive deep bin" (0.97 → 1.11 after the angular correction) is what you get by applying a perspective correction to a mock that contains no perspective term. On that file, my pipeline reads 0.97 → 1.15. On the real catalogue the correction barely matters (1.38 → 1.36). The positive control there is clean: for θ < 10⁻³ rad, the regression slope of observed on predicted perspective motion is 1.01.
3. **The plan's calibration bin (g_N > 3×10⁻¹⁰ m/s²) is a MOND regime, not a Newtonian one.** It holds 16 of the 36 S1 systems. An EFE-free law predicts a boost of 1.2–1.4 there, and the EFE-dominated taper gives about 1.1. On 3D mocks the plan's calibration rule rejects the truths it is meant to detect: "calibration fails" fires for 55 % of EFE-free catalogues at N = 150 and 100 % at N = 500, and for 35–78 % of flat-boost catalogues. Chae+ treat Newton as verified only above 10⁻⁸ m/s², 30–100 × higher than the plan's bin.
4. **Run on DR3 as written, the plan returns "Calibration bin fails → no result" on both samples.**
   - *S1 (36 systems):* the > 3 bin reads γ = 1.87 [1.61, 2.21], with P(γ ≤ 1) = 0. Three systems (#59, #4, #54) carry it: dropping them gives 1.02. On S1 the anomaly is not concentrated at low g. The 1–3 bin reads 0.86 (10 systems).
   - *2D, Chae's real catalogue, fiducial cuts:* the > 3 bin reads 1.036–1.047 ± 0.008, which is 4–6σ from 1. Changing the e prior moves it by ± 5 %, so with N ≈ 36 000 a "consistent with 1 at 2σ" rule cannot pass on any large sample.
5. **The plan's in-house instrument cannot reach S2.** `wb_estimators.py` needs a relative radial velocity good to about 100 m/s. In Chae's 81,880-pair DR3 catalogue, no pair has σ(ΔRV) < 0.1 km/s, 87 have it below 0.2, and the median is 10 km/s. Dividing proper-motion errors by 3 (DR4) changes S1's σ(ln γ) from 0.237 to 0.235. On S1, DR4 adds companion vetting, not precision: the 66-month RUWE, acceleration and proper-motion-change flags remove 1.5–2× of the surviving companions in the forward model.
6. **My WAKE suspicion was wrong (P8 refuted).** Physically modelled hidden companions do **not** make a rising trend toward low g at the bin scale.
   - *2D:* the mean slope over Newton+companion mocks is −0.02 to +0.04. Companions raise every bin, the calibration bin included (F = 0.3 per star moves it to 1.16).
   - *3D:* the slope false-fires often (16–50 %), but because a few kicked systems scramble single bins (sd 0.7–0.8), not systematically.
   - In both, the level and the calibration bin are what companions move, not the trend.
7. **Contaminant model, physical version.** The model is a lognormal inner orbit (median 40 AU, 1.5 dex), q flat on 0.1–1 by default, a photocentre fitted over 34 months, and S1's cuts. It is controlled against Pittordis-type survival: 40.5 % against a published 40.5 %, with RUWE rejecting 39 % against about 37 %.
   - Surviving companions carry sky kicks with quartiles 146 / 443 / 839 m/s. That is close to the 11-08 log-uniform placeholder in the middle, but it adds a mass bias. The kicks come from a ≈ 16–54 AU (interquartile), not 30–300 AU as I predicted.
   - At F = 0.3 per star, S1's mix of cuts leaves a physical f of only about 0.07. Even so, the mixture estimator moves γ from **1.87 to 1.23 [1.01, 1.58]**. On the 11-08 placeholder, "f ≤ 0.1" meant γ 1.5–1.8. With physical kicks, f ≈ 0.07 already means about 1.2.
   - The mixture recovers truth on mocks to within about 5 % (1.0 → 0.95, 1.4 → 1.33, 1.6 → 1.52). The no-mixture estimator reads a median of 2.2 on Newton + F = 0.3, so S1's 1.87 is a typical Newton-plus-companions outcome on the γ statistic alone (P = 0.54).
8. **But the bulk of S1 is hard for Newton.** Real S1 has 11 systems with η > 0.8 and 6 with η > 1.
   - Newton + companions reaches those counts only at F ≈ 0.45–0.5 per star: P(n(η > 1) ≥ 6) = 0.11–0.21 and P(n(η > 0.8) ≥ 11) = 0.07–0.12. There it starts to overshoot the maximum η (P ≤ real 0.07–0.17).
   - γ ≈ 1.2–1.4 with F = 0.3 fits every statistic (P 0.2–0.6).
   - F ≈ 0.45–0.5 is the field multiplicity of solar-type stars (Moe & Di Stefano 2017: f_mult(q > 0.1) = 0.50 ± 0.04), so it is not exotic.
   - The 2D catalogue points the other way. Under Chae's s-dependent e prior, its calibration-bin level (1.047) implies an effective F ≈ 0.1 per star at fiducial cuts, and F = 0.3 would read 1.16. That holds under one e prior; the e prior moves the level by as much as F does.
   - **New crux:** S1 needs either a boost, or a companion rate in these 36 systems three to five times the 2D parent's (if that e prior holds). That is a sharper question than "f ≤ 0.1?"
9. **2D real low-g bin (post-hoc ladder).**
   - With fiducial cuts the g < 0.3 bin reads 1.32–1.38 ± 0.12, against a Newton + F = 0.1 expectation of about 1.02.
   - With IPD = 0, NSS = 0, RUWE < 1.25 and the CMD cut it reads 1.14–1.20 ± 0.19.
   - Adding d ≤ 130 pc gives 0.83–0.91 ± 0.21–0.27 (84 pairs).
   - The excess fades as purity rises, the pattern Cookson+ report. At 84 pairs it does not exclude the flat-MOND 1.3–1.45 either (about 2σ).

## Research Notes

### A. Provenance and the withdrawn protocol (P1)
- Files: Chae Zenodo 10986733 `gaia_dr3_MSMS_d200pc_ruwe.csv` (md5 `1b6c5063…`, 81,880 rows, real) and Zenodo 10652994 `Newton_dr3_MSMS_d200pc_5.csv` (md5 `997069b5…`, 81,088 rows, Newtonian mock; the `f_multi` used for `_5` is not stated, and I did not guess it).
- Boufourou fiducial cuts (R_chance < 0.01, RUWE < 1.4, σ_ṽ < 0.10) on the mock: **41,760** (paper 41,760); RUWE < 1.2: **37,197** (paper 37,197). The same cuts on the real file give 38,591.
- The replacement manuscript (`corrected-2026-09-08/ARTICLE_FINAL.md`) is a "conditional simulation experiment" with "no observational gravity verdict". `protocole/STATUS_2026-09-08.md`: "The historical protocol must not be cited as evidence that a decisive DR4 gravity test has already been validated."
- Its population ingredients remain useful as a reference for a companion model: q flat on 0.02–1, inner a lognormal σ 1.5 dex at 40/80 AU, hierarchy a(1+e) < r_lo r_M/20.

### B. 2D on the real catalogue vs the mock (`wb_real_vs_mock_2d.py`, output `wb_real_vs_mock_2d_output.txt`)
E2 (median truncated at ṽ < √2, identical on templates), fiducial cuts, test zone 2–30 kau:

| e prior | mock (no persp.) | real | real − mock | g > 3 bin real / mock |
|---|---|---|---|---|
| Chae s-dependent | 0.984 | 1.089 | +0.105 | 1.047 / 1.009 |
| thermal | 0.941 | 1.035 | +0.094 | 1.036 / 1.003 |
| α = 1.3 | 0.986 | 1.077 | +0.091 | 1.082 / 1.056 |
| per-pair (Hwang) | 1.091 | 1.211 | +0.120 | 1.126 / 1.063 |

- P2 (real test zone 1.05–1.25 and above the mock by ≥ 0.02): held for three of four priors (thermal 1.035 sits below the range). The difference over the mock held for all four.
- P3 (E1 > E2 by ≥ 0.05): held (+0.06 to +0.08).
- The real − mock difference is about 0.10 in the test zone and about 0.04 in the calibration bin.
- **This is the first DR3 number I know of from the corrected real file in this estimator family. It is one session's implementation and has not been compared with any published value on the same file, so do not quote it as a measurement (R4).**

### C. Forward companion model (`wb_hidden_companions.py`, `wb_hc_survival.py` → `wb_hc_survival_output.txt`)
- Photocentre factor (ℓ − q)/((1 + q)(1 + ℓ)) with ℓ = q⁴. 40 epochs over 34 months with random scan angles. Five-parameter fit; RUWE from residuals over the per-transit σ_AL(G).
- Cuts in sequence: RUWE, resolved (≥ 1″, ΔG < 10), IPD (0.2–1″, ΔG < 4), CMD excess, two-epoch RV stability (3–11 yr), speckle (≥ 0.04″).
- Control: survival 40.5 % and RUWE rejection 39 % at RUWE < 1.25, against the Pittordis+ 2025 values (40.5 %, about 37 %). **I took these from Boufourou's text, not from Pittordis+ directly.** The median ṽ of surviving triples rises with s (0.65 → 1.39), as published (0.87 → 1.62), but sits about 0.2 lower. P5 is partial.
- Surviving fraction f among systems, per-star F = 0.3 (two components):

| cut sequence | f |
|---|---|
| RUWE + resolved + IPD + CMD | 0.153 |
| + RV stable 100 m/s (21/36 of S1 have it) | 0.065 |
| + RV + speckle (10/36) | 0.053 |

  - F = 0.45 gives 0.26 / 0.12 / 0.10.
  - P6 (0.25–0.45 without RV) failed: it came out lower. With RV, 0.05–0.20 held.
  - Chae+'s 0.03 ± 0.03 is low by 2–4× in this model.
- q shape: Chae+'s "P(q < 0.3) = 4.5 %" comes from a contrast-limited catalogue at 0.1–0.5″. Moe & Di Stefano 2017 (solar-type, γ_smallq ≈ 0.3, γ_largeq ≈ −0.5, and −1.1 at log P 6–8) gives P(q < 0.3) ≈ 0.26, which is 5.8× higher. P11 held. Using Chae's shape halves f (0.034 at F = 0.3) and leaves γ at 1.58.
- DR4 vetting (66 months): survivors 19.8 % → 9.7 % without RV, and 7.8 % → 5.2 % with RV. The median a of survivors rises from 22 to 41 AU (P10 held).

### D. S1 through the plan (`wb_plan_dryrun_mocks.py` → `wb_plan_dryrun_mocks_output.txt`; 200/100/50 catalogues at N = 36/150/500)
| truth | N | pooled γ (g < 1) | P(cal fails) | P(trend rises ≥ 2σ) | P(boost row) |
|---|---|---|---|---|---|
| Newton | 36 | 1.04 | 0.05 | 0.03 | 0.00 |
| Newton + HC, F = 0.3 | 36 | 1.33 (sd 0.89) | 0.38 | 0.16 | 0.07 |
| flat 1.38 | 36 | 1.44 | 0.07 | 0.01 | 0.35 |
| EFE-free | 36 | 2.59 | 0.17 | 0.23 | 0.33 |
| EFE-free | 150 | 2.59 | 0.55 | 0.56 | 0.00 |
| EFE-free | 500 | 2.59 | **1.00** | 0.98 | 0.00 |
| flat | 500 | 1.37 | **0.78** | 0.00 | 1.00 |
| Newton + HC | 500 | 6.5 | 1.00 | 0.50 | 0.02 |

- **The plan's outcome table is not exhaustive.** The "boost row" (contains 1.3–1.5, excludes 1) cannot fire for EFE-free, whose pooled g < 1 value is about 2.6. The table has no row for "boost far above 1.5".
- P9 (< 20 % trend power at N = 36; 80 % by N = 150) failed narrowly at both ends: 23 % at N = 36, 56 % at N = 150, 98 % at N = 500.
- The real S1 rows (D): pooled g < 1 gives γ = 2.89 (ln sd 0.24). Per-bin γ is 3.03 / 4.12 / 1.90 / 0.90 / 1.93, with 4/3/3/10/16 systems. Slope −0.22 ± 0.36. The calibration bin fails.
- At N = 36, three bins of 3–4 systems cannot measure a slope (formal ± 0.36–0.39).

### E. S1 with physical mixtures (`wb_s1_physical_mixture.py` → `_output.txt`, `_variants_output.txt`; `wb_s1_predictive.py` → `_output.txt`)
γ posterior (median [16, 84]) by per-star F, with the variant spread:

| F | default (q flat, RV on 21/36) | RV on all 36 | no RV | q MD17 | q Chae-MSC | a_med 15 / 100 AU |
|---|---|---|---|---|---|---|
| 0 | 1.87 [1.66, 2.13] | same | same | same | same | same |
| 0.2 | 1.46 [1.11, 1.79] | 1.57 | 1.32 | 1.39 | 1.71 | 1.50 / 1.44 |
| 0.3 | 1.23 [1.01, 1.58] | 1.35 | 1.17 | 1.20 | 1.58 | 1.26 / 1.23 |
| 0.5 | 1.10 [0.94, 1.33] | 1.13 | 1.07 | 1.08 | 1.23 | 1.11 / 1.10 |

- Profiling a free scale on f prefers about 2.5× the F = 0.3 pattern (ΔlnL = +2.7 over F = 0, at γ ≈ 1.12).
- Predictive checks: see Summary 8.
- Per-system checks: #3, #4, #6, #59 each have ΔlnL ≈ 9–11 from γ = 1 to their own best fit. Robust kernels and z barely move them.

### F. 2D low-g diagnostics and purity ladder (post-hoc; `wb_real_lowg_diagnostics.py`, `wb_real_purity_ladder.py`; DR3 columns fetched from the ARI Heidelberg TAP, `wb_fetch_ipd.py`)
- The low-g excess is not monotonic in distance: g < 0.3 reads 1.5–1.6 ± 0.4 at d < 80 pc, 1.22 at 80–130 pc and 1.4–1.5 at 130–200 pc. It does not fall with R_chance < 0.001, and it does not depend on having both RVs.
- It falls under IPD / NSS / RUWE / CMD (1.14–1.20), and further under d ≤ 130 pc (0.83–0.91, N = 84).
- The ladder was built after I saw the bin, so it is labelled post-hoc.
- The mean 2D slope over Newton + HC mocks is −0.02 to +0.04 at fiducial cuts. On the real data E2 gives −0.15 to −0.21 ± 0.07 at fiducial cuts, and −0.06 to −0.13 ± 0.11 after purity cuts.

## Predictions scorecard (PREREG `c31d20e`)
| | Result |
|---|---|
| P1 identity | **Held** (41,760 / 37,197 exact). E2 thermal-to-α1.3 band [0.94, 0.99] overlaps 0.95–1.05 |
| P2 real test zone | **Held** for 3/4 e priors; above mock in all |
| P3 E1 > E2 | **Held** |
| P4 real slope in [−0.25, 0.05]; EFE-free excluded ≥ 2σ under E2, not under E1 | Range **held**; E2 exclusion 2.0–3.3σ held; "not under E1" **failed** (E1 excludes more strongly, 4–5σ) |
| P5 forward-model control | Survival **held**; triple ṽ level **failed** by about 0.2 (shape held) |
| P6 surviving f | Without RV **failed** (0.15, below 0.25); with RV **held** (0.065); Chae+ low by ≥ 2× held at F ≥ 0.3 |
| P7 kick | Median **held** (443 m/s); "not log-uniform" mostly **failed** (middle quartiles match); a range **failed** (16–54 AU, not 30–300) |
| P8 trend confounded | **Refuted** in mechanism: companions move level and calibration, not trend |
| P9 power | **Failed narrowly** (23 %; 80 % needs N ≈ 300, not 150) |
| P10 DR4 for S1 | **Held** (σ 0.237 → 0.235; vetting 1.5–2×) |
| P11 q literature | **Held** (5.8×). f moves 2× between q shapes, so it does matter |
| P12 instrument vs S2 | **Held** (0 pairs with σ_ΔRV < 0.1 km/s) |

## Implications for the Site
- `/wide-binaries` presents a withdrawn mock-based measurement as DR3 evidence. It is a citation error with a primary source.
- The status box's "γ about 1.5–1.8 if f ≤ 0.1" came from the 11-08 placeholder kick. With physical companions, f ≈ 0.07 already gives about 1.2. The sentence should be restated as a question about F per star, not f ≤ 0.1.
- The DR4 plan cannot be adopted as written. It has four defects, each with a fix:
  - The calibration bin sits in the regime of every hypothesis it calibrates.
  - The calibration rule cannot pass on large 2D samples, because the e-prior systematic of about 5 % is far above the statistical error.
  - The outcome table has no row for a boost above 1.5.
  - The 3D instrument cannot reach S2.

## Action: Maintainer
1. **`src/app/wide-binaries/page.tsx:203–204`.** Replace the Boufourou bullet with: *"Boufourou 2026 (arXiv:2608.24556 v1). Withdrawn by its author on 8 September 2026: its 81,088-pair input was Chae's Newtonian mock catalogue, not observed Gaia data (author's correction notice, github.com/HBoufourou/paperI-wide-binaries, `CORRECTION.md`). Its γ = 1.045 and 16σ exclusion are not DR3 measurements. The arXiv page carries no notice as of 2026-11-09. Checked here: the paper's 41,760-pair count reproduces exactly on the mock file."* Remove "Boufourou 2026" from the "lean Newtonian" list at line 225.
2. **Status box (line 222).** Replace "γ is about 1.5–1.8 if f ≤ 0.1 … 1.0–1.2 if f is free" with: *"With a physical model of hidden companions (photocentre orbits through RUWE, CMD, IPD and RV-stability cuts), a per-star companion rate of 0.3 leaves only about 7 % of the 36 contaminated, yet moves γ from 1.87 to about 1.2 [1.0, 1.6]. Explaining the number of systems near escape speed with Newton needs a per-star rate of about 0.45–0.5, the field value for solar-type stars, and more than the 2D parent sample appears to allow. Conditional on the model; one AI session."*
3. **DR4 plan (`maintainer/scripts/wb_dr4_analysis_plan_PREREG.md`). Do not adopt as written.** Revisions, each tested here:
   - (a) Calibration at g_N ≥ 10⁻⁸ m/s² (Chae's Newtonian regime), or Boufourou-style s = 0.2–2 kau, not > 3×10⁻¹⁰. For S1 there are no such systems, so calibrate on Chae's high-acceleration sample.
   - (b) The calibration rule needs a stated systematic tolerance (the e-prior band, ± 5 %), or the low bins should be read as a ratio to calibration.
   - (c) Add the outcome row "pooled γ > 1.5 excluding 1". EFE-free predicts about 2.6 on S1's g distribution.
   - (d) S2 needs a 2D estimator (E2 / E3 type, zone-matched noise) and cannot use `wb_estimators.py`.
   - (e) The mixture with a physical companion pool should be the S1 baseline. The no-mixture likelihood reads Newton + F = 0.3 as γ ≈ 2.2.
   - (f) Remove the open point "adopt or compare with Boufourou's protocol". The author has retracted its observational premises.
4. **Proposal `Synchronism/Research/proposals/frozen_upsilon_headlines_and_the_first_prospective_test_needs_a_decision_20261109.md` line 14:** add the withdrawal.
5. **→ Project lead.** The S1 crux is now a number someone can measure: the per-star close-companion rate of these 36 systems, by RV monitoring and DR4 epoch astrometry. If S&T and Chae+ are contacted, item 7 of Summary (physical f ≈ 0.07 already gives about 1.2) is the useful content.

## Open Threads
- Run the forward model on the 2D sample with each e prior to separate F from the e prior in the calibration-bin level. This one cross-check decides whether S1's 36 are unusually contaminated.
- The real-file 2D numbers in B have not been compared with anyone's published value on the corrected file (Chae 2024b's own Zenodo code would be the identity control).
- Pittordis+ 2025's survival numbers should be read from the paper, not via a withdrawn paper's quote.
- The `f_multi` of Chae's mock `_5` would let the real − mock difference be read as a contaminant estimate.
- #59 (HARPS, g = 3.9, η 1.16) carries the calibration bin. It is the HARPS row with the best RV, so it is the hardest to blame on RV error.

## Artifacts
`explorer/scripts/`: `wb_real_vs_mock_2d.py`, `wb_hidden_companions.py`, `wb_hc_survival.py`, `wb_2d_forward_mock.py`, `wb_plan_dryrun_mocks.py`, `wb_s1_physical_mixture.py`, `wb_s1_predictive.py`, `wb_real_lowg_diagnostics.py`, `wb_real_purity_ladder.py`, `wb_fetch_ipd.py`, each with `_output.txt`. External inputs: Zenodo 10986733 and 10652994 (checksums above), `HBoufourou/paperI-wide-binaries` @ `2d0c922`, `seratsaad/wb3d-gamma` @ `4333e9f` data, Moe & Di Stefano 2017 (arXiv:1606.05347), Cookson+ 2026 (arXiv:2602.24035v1).
