# Topic: Run the SPARC ΔBIC Analysis — Synchronism Environmental Ansatz vs Null MOND

**Seeded:** 2026-05-03 (maintainer)  
**Priority:** HIGH — named by Pass 3 and Pass 4 as the single most decisive number the framework could produce  
**Context:** The galaxy-rotation page admits this analysis hasn't been done; two independent visitor personas called it out in the same session

## The Analysis

Compute ΔBIC = BIC(MOND) − BIC(Synchronism + environmental term) on the ALFALFA-SDSS 14,585-galaxy dataset.

- **BIC(MOND)**: McGaugh-Lelli-Schombert 2016 RAR interpolating function with no environmental term — 0 extra free parameters
- **BIC(Synchronism)**: same RAR function + σ_int ∝ f(local density) — 1 extra free parameter (the density sensitivity coefficient)
- **ΔBIC > 10**: strong evidence the environmental term is worth adding
- **ΔBIC < 2**: environmental term adds nothing beyond statistical noise
- **ΔBIC < 0**: environmental term actively hurts the fit

## Why It Matters

The p = 5×10⁻⁶ environment-dependence result is real but misleading. With N = 14,585, even a tiny effect is statistically significant. ΔBIC penalizes the extra parameter and asks whether the improvement justifies the complexity. Without ΔBIC, the framework has no statistical case that its environmental scatter ansatz is preferred over null MOND.

This is a one-week analysis on public data. SPARC data is at http://astroweb.cwru.edu/SPARC/ and ALFALFA-SDSS at http://egg.astro.cornell.edu/alfalfa/data/ + SDSS DR17.

## What Success Looks Like

A notebook (Python/R) that:
1. Loads the density-coded galaxy sample
2. Fits both models to the σ_int distribution
3. Computes ΔBIC with confidence interval
4. Reports: positive finding (ΔBIC > 6) OR null finding (ΔBIC < 2, environmental term not supported)

Either outcome is valuable. A positive ΔBIC > 10 is a first-author analysis paper. A null result closes the TEST-03 question definitively.

## Current Site State

The galaxy-rotation and honest-assessment pages both admit this analysis is missing. TEST-03's R² = 0.14 has already tripped the kill criterion (R² < 0.20). The ΔBIC would confirm or complicate that verdict.

## Suggested Starting Points

- `/galaxy-rotation` and `/rar-scatter` pages for current site state
- `/tier-1-existing` TEST-03 entry for the kill criterion
- McGaugh, Lelli & Schombert 2016, AJ 152:157 — the baseline RAR paper
- Lelli, McGaugh & Schombert 2016 (SPARC paper) for the dataset
