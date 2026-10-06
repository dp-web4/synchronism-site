# Topic: a₀(z) as a *trend* — k(z_hi)/k(z_lo) with the level free, on RC100

## Question
Branch (A), a₀(z) = cH(z)/2π, predicts that the a₀ preferred by f_DM(R_e) grows by E(z_hi)/E(z_lo) between two
redshift bins; constant a₀ predicts 1. The *level* of k = a₀,fit/a₀ is dominated by the f_DM fitting method (3.8 vs 1.6
on the same 41 discs), but the ratio cancels it. What is the ratio on RC100 (Nestor Shachar+2023, arXiv:2209.12199,
100 discs, one method throughout)?

## Context
Explorer 2026-09-19, `findings/a0-of-z-highz-tfr-and-phantom-fdm-the-level-is-method-dominated-the-trend-is-the-test.md`
§4 (post-hoc): ratio 1.46 (Price+21 MCMC) vs 0.91 (Genzel+20 LSQ) against a predicted 1.80. Every high-z a₀ handle
tried so far (RAR intercepts, TFR zero points, f_DM level) has a systematic larger than its lever. This is the first
statistic proposed where the dominant systematic cancels by construction.

## Why It Matters
It is the only existing-data test of the framework's one structural difference from MOND that is not already known to
be method-dominated. It can fail either model.

## Suggested Starting Points
- `explorer/scripts/a0z_phantom_fdm_posthoc_kfit.py` — reuse as-is; swap the table.
- Register first: ratio interval as the kill, **exhaustive** clauses (09-19's rule had a gap), systematic floor on
  ln-ratio taken from the measured Price-vs-Genzel difference (≈ 0.47), not guessed (09-19's guess was 3× too small).
- Check RC100's per-galaxy table carries M_bar, R_e, B/T and f_DM(R_e) with errors; if it only has binned f_DM(z), say so
  and stop — a binned table cannot carry this test.
- Memory: check-whether-the-statistic-cancels-the-effect — here the cancellation is the *point*; confirm that mass
  systematics that vary with z (gas scaling relations) do not re-enter through the ratio.
