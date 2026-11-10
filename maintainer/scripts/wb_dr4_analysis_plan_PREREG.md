# Gaia DR4 wide binaries: draft analysis plan, dated before the data

**Date:** 2026-11-09 (site maintainer). DR4 is set for 2 December 2026. No DR4 wide-binary analysis exists yet.
**Status:** a draft, written by one AI session, and **not adopted**. Adopting it as a registered test gates on the project lead. Until then it is a dated record of what one session would do.
**Companion:** `wb_dr4_reading_key_PREREG.md` maps a boost to a compander γ. This file says how a boost would be measured in-house, and how outside analyses would be read.

## Why this exists
A simulated-visitor researcher persona (2026-11-09): "A map from a boost to γ without a frozen way of measuring the boost isn't a registered test, because every result can be argued afterwards." Explorer 2026-11-08 shows the dispute is decided by settings: one separation-error setting moves γ by a factor 0.65, and the allowed contaminant fraction moves it from 1.8 to 1.0.

**What this cannot do.** It cannot move Bucket 0 or the count of 6. Every branch lands on a family already excluded by Cassini, or on MOND's question. Its value is that it would be the first prospective analysis on the site, and it would measure MOND's question with a method fixed in advance.

**What I do not know yet.** The DR4 column names, the epoch-astrometry format and the DR4 RV coverage are not checked here. Anything that depends on them is marked **[check at release]**. A change under that mark must be logged with its reason before any boost is computed.

## A. Reading outside analyses (fixed now)
For every published DR4 wide-binary analysis that reports a boost with an error:
1. Check the error settings used in the code or the paper against the settings stated. Record any difference.
2. Check that any injection test ran at the real-data configuration (explorer 2026-11-08: Saad & Ting's ran at 5 %, not at the setting used on the data).
3. Record the contaminant model and the fraction it allows or fits.
4. Map the 2σ interval through the reading key. Report each analysis separately. Do not choose between them.

## B. In-house analysis
**Instrument.** `explorer/scripts/wb_estimators.py` (orbital-element reduction; mock-tested 2026-11-08, reads 2–4 % low at 1.0–1.6). No change to the estimator after the data arrive, other than a bug fix logged with a before-and-after number on the same frozen mocks.

**Separation error.** The physical value, from the parallax and angular-separation errors propagated to projected separation. No fractional floor above 1 %.

**Sample.** Both, always reported side by side:
- *S1, Chae-type, high quality:* d < 150 pc, RV error < 100 m/s on both members, the 36-system criteria applied to DR4 values. **[check at release]**
- *S2, purity-first:* d ≤ 130 pc, s = 1–30 kau, the Cookson et al. 2026 quality cuts. **[check at release]**
Both samples use RUWE < 1.2 on both members and exclude any system flagged as a multiple in DR4's non-single-star tables. **[check at release]**

**Bins.** Internal Newtonian acceleration g_N in 10⁻¹⁰ m/s²: < 0.3, 0.3–0.6, 0.6–1.0, 1.0–3.0, > 3.0 (the calibration bin). Bins are fixed by g_N computed at the catalogue masses.

**Statistics, all pre-named.**
1. **Level:** γ_g in each bin, plus the pooled value below 1.0×10⁻¹⁰.
2. **Trend (primary for the EFE question):** the slope of ln γ_g against ln g_N across the three low bins. Algebraic EFE-free reading: rises toward low g_N, B(0.2)/B(1.0) ≈ 1.8. External-field-dominated MOND: flat at the bin scale. Newton: flat at 1. This separates EFE-free from EFE-dominated without relying on the level, which is where Chae and Banik disagree.
3. **Calibration:** γ_g in the > 3.0 bin must be consistent with 1 at 2σ. If it is not, the low bins are reported as uncalibrated and no boost is claimed.

**Contaminants.** The mixture in `explorer/scripts/wb_boost_vs_contam.py` as a baseline: orbit at γ, or orbit plus an isotropic kick, log-uniform from 100 m/s to a cap. Report the γ posterior on a grid of allowed f (0, 0.05, 0.1, 0.2, free) at caps of 500, 1000 and 2000 m/s. **No single f is chosen as the headline.** A physical hidden-companion model, if one is ready before release (explorer open thread), would be added as a further row, dated, before any boost is computed.

**Mock calibration, fixed before reading any real number.** 300 catalogues per arm on the real sample's masses, separations and errors, at γ_true = 1.0, 1.2, 1.4, 1.6, and for f = 0 and 0.15. Report bias and 68 % coverage per arm. A published γ is read through this calibration.

## C. Outcome table (fixed now)
Pooled γ_g below 1.0×10⁻¹⁰, at each allowed f. An outcome is the same on S1 and S2, or it is reported as "sample-dependent".

| Result | Reads as | Framework consequence |
|---|---|---|
| 2σ interval contains 1 and excludes ≥ 1.2, at all f | Newtonian null | MOND's simple μ falls with the compander near γ ≈ ½. Density branch: identically null here, already excluded. Algebraic EFE-free corner dead. |
| Interval contains 1.3–1.5, excludes 1, at f ≤ 0.1 and also at f free | Boost robust to contaminants | Tension with Cassini for modified-Poisson MOND. Compander γ ≲ 0.85, already failed through TEST-25. |
| Excludes 1 at f ≤ 0.1, contains 1 at f free | Hung, crux unchanged | Report the f at which it crosses. No framework consequence. |
| Trend rises across low bins at ≥ 2σ | EFE-free shape | Keeps the corner, which is MOND-without-EFE's. Does not select the framework. |
| Trend flat, level > 1 at ≥ 2σ | EFE-dominated shape | Algebraic EFE-free corner dead. |
| Calibration bin fails | Uncalibrated | No result. Say so. |

## D. Freeze
Adopting this file means: no changes after adoption except **[check at release]** items, each logged before any boost is computed. A deviation is printed beside the result, and the script's commit hash is printed with every number.

## Open points for the lead
- Adopt this, adopt a revised version, or leave it as a dated draft?
- Boufourou 2026 proposes a pre-registered DR4 protocol of its own. It may be better to adopt or compare with that one. Abstract read only.

## Addendum 2026-11-10 (maintainer): do not adopt as written

The explorer dry-ran this plan on DR3 (PREREG `c31d20e`, finding
`explorer/findings/dr4-plan-dry-run-returns-no-result-on-dr3-its-calibration-bin-is-a-mond-regime-and-boufourou-is-withdrawn.md`).
Run as written it returns "Calibration bin fails → no result" on both samples. The body above is left unchanged as the dated draft;
these are the defects and the tested revisions, for whichever version the lead adopts.

1. **Calibration bin.** g_N > 3×10⁻¹⁰ m/s² is a MOND regime (EFE-free predicts 1.2–1.4 there; EFE taper ≈ 1.1; the rule rejects
   55 % of EFE-free mocks at N = 150 and 100 % at N = 500). Revise to g_N ≥ 10⁻⁸ m/s² (Chae's Newtonian regime) or s = 0.2–2 kau.
   S1 has no such systems, so calibrate on Chae's high-acceleration sample.
2. **Calibration rule.** On the 2D catalogue the > 3 bin reads 1.036–1.047 ± 0.008 and the e-prior systematic is ± 5 %, so
   "consistent with 1 at 2σ" cannot pass on any large sample. State a systematic tolerance, or read the low bins as a ratio to
   calibration.
3. **Outcome table.** Add the row "pooled γ > 1.5, excludes 1" (EFE-free predicts ≈ 2.6 on S1's g distribution). The table above
   cannot record the outcome it was built to detect.
4. **S2 instrument.** `wb_estimators.py` needs ΔRV to ≈ 100 m/s; no pair in Chae's 81,880-pair DR3 catalogue has σ(ΔRV) < 0.1 km/s
   (median 10 km/s). S2 needs a 2D estimator (E2/E3 type, zone-matched noise).
5. **S1 baseline.** Use the mixture with a physical companion pool (photocentre orbits through the RUWE/CMD/IPD/RV cuts). The
   no-mixture likelihood reads Newton + F = 0.3 as γ ≈ 2.2.
6. **Open point withdrawn.** Boufourou 2026's protocol is not a candidate: the author withdrew the paper's observational premises on
   8 September 2026 (its input was Chae's Newtonian mock; `CORRECTION.md` in `HBoufourou/paperI-wide-binaries`, confirmed read
   2026-11-10). The arXiv listing carries no notice.

The reading key (`wb_dr4_reading_key_PREREG.md`) is unaffected by any of this and can be adopted on its own.
