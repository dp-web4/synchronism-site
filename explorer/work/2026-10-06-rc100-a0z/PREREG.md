# PREREG — a₀(z) as a trend: k(z ≥ 1.5)/k(z < 1.5) on RC100 (Nestor Shachar+2023, arXiv:2209.12199)

Written 2026-10-06 by the explorer, **before any Table 3 value has been read**.

## Exposure declaration
Read so far: the arXiv PDF text layer only. That covers the Table 3 caption ("RC100 galaxy best-fit parameters and
characteristics"), Appendix C, and Table 4. Appendix C says each galaxy was fit by three methods (A/B/C) for four primary
parameters: f_DM(R_e), log M_baryon, R_e, σ0. Table 4 says the mean method-to-method difference in f_DM(R_e) is 0.56–0.77
combined σ. Table 3 is an embedded raster image (pages 27–29) and has not been rendered or viewed. I also carry the
09-19 post-hoc numbers for the Price+21 subset (ratio 1.46) and the Genzel+20 subset (0.91). Those overlap RC100, so
this is **not** a blind test on unseen galaxies. It is a registered test of a statistic on a larger, single-method table.

## Models
- **A** (Synchronism branch A): a₀(z) = a₀·E(z), with E(z) = √(0.3(1+z)³ + 0.7). Predicted ρ_A = ⟨E⟩_hi / ⟨E⟩_lo, the
  mean over the galaxies actually in each bin. It is computed from the redshifts alone, before any f_DM is used.
- **C** (constant a₀): ρ_C = 1.
- The level k is free in each bin. Only the ratio ρ = k_hi/k_lo is scored.

## Procedure (fixed)
1. Transcribe Table 3 per galaxy: z, f_DM(R_e) ± err, log M_bar ± err, R_e, plus B/T or n_s if present. Transcription is
   checked by re-reading every row against a second render. If the table has no per-galaxy f_DM(R_e) or M_bar, **stop**
   and record "not runnable".
2. g_N(R_e): Freeman disc of mass (1−B/T)M_bar with R_d = R_e/1.678, plus point bulge G·(B/T)·M_bar/R_e. This is the
   same mass model as `scripts/a0z_highz_tfr_and_phantom_fdm.py`. With no B/T column, use a pure disc and say so.
3. f_pred = 1 − 1/ν(g_N/(k·a₀)), with simple ν primary and RAR ν as sensitivity. Mass scatter: the table's log M_bar
   error if given, otherwise 0.2 dex, Monte-Carlo'd into σ_pred as in 09-19.
4. In each bin (split at z = 1.5, as in 09-19), k = argmin χ² over the same grid.
5. σ_stat(ln ρ): galaxy bootstrap within each bin, 2000 resamples, refitting k each time, then half the 16–84 % width.
6. σ_sys(ln ρ) = 0.33 primary. This is the measured 09-19 Price-vs-Genzel ln-ratio difference, 0.47, divided by √2
   (one method's share if the two are independent). Sensitivity at 0.47 and at 0, all three reported. σ = σ_stat ⊕ σ_sys.

## Decision rule (exhaustive: two booleans, four cells)
Let nearC = |ln ρ_obs| < 2σ and nearA = |ln ρ_obs − ln ρ_A| < 2σ.
- nearC ∧ ¬nearA → **A DISFAVOURED** (C preferred)
- ¬nearC ∧ nearA → **C DISFAVOURED** (A preferred)
- ¬nearC ∧ ¬nearA → **BOTH FAIL** (trend present at the wrong amplitude or with the wrong sign)
- nearC ∧ nearA → **NON-DISCRIMINATING**

The verdict is the primary (σ_sys = 0.33, simple ν). If the primary verdict differs from the verdict at σ_sys = 0.47 or
under RAR ν, the weaker of the verdicts is recorded (NON-DISCRIMINATING is weakest), and the disagreement is reported.

## Power statement, made now
ln ρ_A ≈ ln 1.8 ≈ 0.59 for a 0.6–2.5 sample split at 1.5. σ ≥ σ_sys = 0.33, so separation ≤ 0.59/0.33 = 1.8σ < 2σ even
at zero statistical error. **Under the primary floor, the cell nearC ∧ nearA always contains a band of ρ values, so a
NON-DISCRIMINATING verdict is possible whatever the data are.** A discriminating verdict needs ρ_obs to fall outside
that band. This is stated before execution so it cannot be added afterwards as an excuse.

## Predictions (scored after)
- P1: Table 3 carries per-galaxy f_DM(R_e), M_bar, R_e and z (runnable).
- P2: k_lo > 1.5 (every earlier handle wanted more dynamical mass than a₀ supplies at z ≈ 1).
- P3: the primary verdict is NON-DISCRIMINATING.
- P4: 1 < ρ_obs < ρ_A.
- P5: σ_stat(ln ρ) < 0.33 (the floor, not the sample size, limits this test).

## Caveat registered now
M_bar in RC100 is a dynamical-fit parameter, degenerate with f_DM. So g_obs/g_N = 1/(1 − f_DM) is a single RAR point per
galaxy at R_e, with correlated errors. Pressure-support corrections grow with σ0, and σ0 is larger at high z. That can
put a z-dependent bias into the ratio that does not cancel. It is not modelled. If the verdict is discriminating, this
is the first suspect.
