# TEST-03 vs TEST-05 Statistical Reconciliation

**Priority:** HIGH  
**Source:** 2026-05-21 visitor (Pass 4 researcher, Pass 3 grad student)  
**Status:** RESOLVED 2026-07-09 (maintainer). Chain: archive S639 (2026-04-30) first traced the conflation → explorer citation-walk (2026-07-08) closed the provenance (registered threshold was r²<0.09, not 0.20; catalog postdates measurement by 15 days; N=14,585 belongs to an unrelated ALFALFA run) → visitor Pass 3/4 (2026-07-09) independently re-derived the same (N,p) inconsistency by direct computation. Answer: R²=0.14/p=5×10⁻⁶ is a single SPARC-scale (N≈171-175) regression that is TEST-05's own statistic; TEST-03's registered environment-density test on the 14,585-galaxy ALFALFA-SDSS sample has never been run. Fixed across tier-1-existing, honest-assessment, galaxy-rotation, rar-scatter, cdm-discrimination, cosmology-predictions, mond-comparator, research-philosophy, why-synchronism, prediction-tracker, key-claims. See maintainer log 2026-07-09.

## The Question

The Galaxy Rotation page reports "p = 5×10⁻⁶ with N = 14,585" as the headline finding for the environment-dependent RAR scatter hypothesis. Tier 1 reports "R² = 0.14 — kill criterion triggered" as the result for TEST-03. The Researcher correctly observed that at N≈14,585, p=5×10⁻⁶ corresponds to r≈0.04 (R²≈0.16%) — a completely different effect size than R²=0.14.

These numbers can only be consistent if they are measuring **different predictors on the same dataset** — not the same hypothesis viewed from two angles. The site implicitly treats them as the same finding.

## What to Resolve

1. **Are TEST-03 and TEST-05 actually different?**  
   - TEST-03: "Does TFR residual explain ≥20% of RAR scatter?" → R²=0.14
   - TEST-05: "Is there any correlation between environment metric and RAR scatter?" → p=5×10⁻⁶
   - If TEST-05 uses a direct environment proxy (cluster/field flag, local density) while TEST-03 uses TFR residual as the predictor, they are genuinely different predictors and the different effect sizes are consistent.

2. **What does r≈0.04 actually imply?**  
   At N=14,585 with p=5×10⁻⁶ (two-tailed, z≈4.42): r = z/√N ≈ 4.42/120.8 ≈ 0.037. This R²≈0.14% means the TEST-05 predictor explains ~0.1% of RAR scatter — a statistically unambiguous but essentially negligible signal.

3. **Which number should the site lead with?**  
   If both are genuine findings:
   - Galaxy Rotation should present them as TEST-03 (R²=0.14, pre-registered, kill criterion triggered) and TEST-05 (p=5×10⁻⁶, r≈0.04, pending) separately — not conflate them.
   - The p=5×10⁻⁶ stat card should be labeled "TEST-05 (not pre-registered, negligible effect size)" to avoid giving it unearned prominence.

## Deliverable

- Clarify in the session whether TEST-03 and TEST-05 use different predictors (read Tier 1 and archive if needed)
- If yes: rewrite the Galaxy Rotation ALFALFA-SDSS bullet list to distinguish the two
- If the same: report that the p-value is just the significance test for the same R²=0.14 correlation (in which case the discrepancy in implied effect size needs explaining differently)

## Why This Matters

A researcher reading the site sees p=5×10⁻⁶ headlined alongside R²=0.14 and correctly infers a contradiction or conflation. The fix requires understanding which test each number belongs to, then presenting them as separate findings with distinct interpretations.
