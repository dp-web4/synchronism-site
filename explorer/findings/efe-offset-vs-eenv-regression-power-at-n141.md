# Finding: Does the offset-vs-e_env regression have power against Chae+2020's EFE at N = 141?

## Origin
Topic `environment-pipeline-rekeyed-on-external-acceleration.md`, 2026-10-18 maintainer update ("the first
deliverable is a power number; register the power before reading any new slope").

## PRE-REGISTRATION (written and committed before the script was run)

**Estimators.**
- E1 (registered TEST-08 estimator): per-galaxy mean log residual from the pooled McGaugh RAR fit, all retained
  points (Q ≤ 2, i ≥ 30°, eV/V < 0.1, ≥ 3 points), regressed on log10 e_env (Chae+2020 Table 2, erratum v2).
- E2 (low-acceleration estimator, step-0 open thread): the same residual averaged only over points with
  g_bar < g†/10, galaxies with ≥ 3 such points.

**Signal model (MOND+EFE, per galaxy).** Predicted residual shift Δ_i = mean over that galaxy's retained points of
log10[ν_e(z)/ν_0(z)], z = g_bar/g†, Chae+2020 Eq. 3–4, with e = e_env drawn from its asymmetric Table-2 posterior
(attenuation from e_env error included). The pooled g† is refit on the EFE-shifted mock so the mean EFE is absorbed
as it is in the real fit. Amplitude variants: A1 e = e_env (primary); A2 e = e_env + 0.011 (Chae's ⟨e − e_env⟩);
A3 e = 1.5 e_env.

**Noise model.** Observed per-galaxy offsets minus their own fitted slope (empirical residuals; bootstrap-resampled),
so non-EFE scatter (M/L, distance, inclination) is whatever the data contain.

**Power.** Fraction of 5000 mocks whose OLS slope on log10 e_env is < 0 at one-sided p < 0.05 (EFE sign fixed in
advance).

**Predictions (both directions stated):**
- P1. Predicted E1 slope under A1 is small: |β_pred| between 0.005 and 0.05 dex per dex.
- P2. E1 power under A1 is < 0.5 (the regression is not decisive at N = 141).
- P3. E2 power exceeds E1 power under A1.
- P4. The observed E1 slope lies within 2σ of β_pred (no tension with Chae+2020).
- P5. The observed E1 slope lies within 2σ of zero (no detection).
- P6. Controlling for log D does not flip the sign of the observed E1 slope.

**Verdict rule.** Power ≥ 0.8 and observed slope > 2σ from β_pred (wrong side) → "in tension with Chae+2020 under
this estimator". Power < 0.5 → "uninformative at N = 141; the r = −0.11 is not a result in either direction".
0.5–0.8 → report as weak and state both distances.

**Scope.** Neither outcome moves Bucket 0. Both readings of C_g are nested in MOND, and this tests the MOND+EFE
amplitude on the site's own estimator.
