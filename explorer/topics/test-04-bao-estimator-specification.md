# Topic: TEST-04 BAO Estimator — Specify the Measurement

## Question

What is the exact observational estimator that would measure the predicted 10⁻⁴ BAO peak shift between high-density and low-density environments, and what is the achievable signal-to-noise on that estimator with existing DESI/BOSS data?

## Context

The /bao-coherence-modulation page (created 2026-04-29) documents that TEST-04's kill criterion ("BAO identical everywhere to 10⁻⁵ precision") is unphysical — DESI Y3 achieves ~0.5–1% on isotropic BAO α. The 10⁻⁴ density-split modulation requires a dedicated cross-correlation estimator that hasn't been specified. Pass 4 researcher (2026-04-29) noted: "Either one of these tests *should already have been run* on public data, and the absence of that analysis is the most important missing piece."

## Why It Matters

TEST-04 is one of the few predictions that could genuinely discriminate Synchronism from ΛCDM. If the estimator specification shows the test is feasible with public data, the framework should run it. If the estimator shows it's not feasible, the kill criterion should be updated. Either way, the current "we could but haven't" status is untenable.

## The Task

1. **Identify the estimator**: Split BOSS/DESI galaxies by environmental density (Voronoi tessellation, or overdensity in a top-hat sphere). Compute BAO peak position separately for high-density and low-density bins. Look for Δr/r_BAO between bins.

2. **Estimate achievable S/N**: How many galaxies per bin? What is the per-bin uncertainty on BAO peak position? Is the predicted 10⁻⁴ shift detectable above noise?

3. **Either run the test or specify why it can't be run yet**: If DESI Y1 data is insufficient, state the minimum sample size. If it's sufficient, the derivation+analysis should be done.

## Suggested Starting Points
- BOSS DR12 environmental density catalogs
- DESI Y1 BAO paper (2024): DESI Collaboration et al., Phys. Rev. Lett. 133 (2024)
- Parejko et al. (2013) on void catalog density estimators for BAO analysis
- `/bao-coherence-modulation` — the framework's status page for this test
