# PREREG — Ciocan+2026 (MUSE-DARK III) a₀(z) refit as a₀ ∝ E(z)ⁿ, level free — 2026-10-10

Topic: `explorer/topics/a0z-ciocan-per-bin-exponent-vs-rc100.md`.

## Exposure declared before registration
Read from arXiv:2604.22613v1 text (not the figure): abstract; Sect. 3.2 (four quantile bins; binned a₀ "rising from
~1.99 in the lowest z-bin to 2.71 in the highest", ×10⁻¹⁰ m/s²); Eq. 4: a₀(0) = 1.0 ± 0.04, a₁ = 1.59 ± 0.10, errors
= **95% CI**; Appendix E Eq. 14 (MOND-track refit: a₀(0) = 1.03 ± 0.05, a₁ = 1.20 ± 0.10) and the per-galaxy
regression a₁ = 1.42 (+0.94/−0.89), a₀(0) = 1.11 (+0.39/−0.51); Sect. 4 ("faster than that of H(z)"; "factor ~4 from
z=0 to 2" vs Mayer ~3; "~30σ"); Appendix F (global fit is a single likelihood over all points, not a regression
through the bins; higher-z points carry less weight). The four per-bin values, their errors, and the bin edges have
NOT been read (they are in Fig. 3 only). No per-galaxy a₀ table is published; a galaxy bootstrap is therefore
impossible and the paper's bin errors (Roxy MNR with intrinsic scatter marginalised) are the unit of error.

## Statistic
ln a₀_i = ln k + n · ln E(z_i), E(z) = √(Ω_m(1+z)³ + 1−Ω_m), Ω_m = 0.315 (same E as the RC100 run). Weighted least
squares in ln a₀ with σ_i = half the (+/−) span converted to ln; if the figure's error bars are 95% CI (as Eq. 4's
are), halve them. z_i = bin median if the figure prints it, else the midpoint of the blue bar. Formal error from
Δχ² = 1. Two conventions reported for every number: (M) measurement errors only, no anchor; (A) SPARC anchor
1.2 ± 0.26 at z = 0 added as a fifth point. Second estimator: the paper's own global line 1.0 + 1.59z, sampled at 50
points over 0.33–1.44, projected onto k·E(z)ⁿ by least squares in ln; error by propagating a₀(0) and a₁ at 1σ
(= 95% CI / 1.96), assumed uncorrelated (Appendix F: "no significant correlations").

## Predictions (scored after the read)
- P1. Binned estimator, convention M: 0.4 ≤ n ≤ 0.9. (Private point estimate from the endpoints: ~0.65.)
- P2. Global-line estimator, level free over the measured range: 1.0 ≤ n ≤ 1.3. I.e. inside the data range the
  paper's own line is branch A (n = 1) to within 30%; "faster than H(z)" is carried by the intercept a₀(0) = 1.0,
  which is below the data range and below the SPARC 1.2.
- P3. The two estimators disagree on n by more than the binned formal σ_n (the paper itself flags the offset).
- P4. Convention A (anchor added) pulls the binned n up by ≥ 0.2 and reduces σ_n by ≥ 30%: the anchor dominates.
- P5. Against RC100's post-hoc n = 0.0 with galaxy-bootstrap 95% ≈ [−1, +1] (σ ≈ 0.5), the binned Ciocan n is
  compatible below 2σ; the global-line n is not (≥ 2σ). So "the surveys disagree" is true for one Ciocan estimator
  and false for the other.
- P6. Eq. 2's a₀|z~1 = 2.38 (+0.12/−0.10) error is also a 95% CI, so the site's "12σ on the measurement error
  alone" understates by ~2× and the 4.2σ (anchor carried) is essentially unchanged (the anchor's 0.26 dominates).

## Decision rule for the site row
- If binned n (M) excludes 0 at ≥ 2σ and does not exclude 1 at 2σ: row text "Ciocan prefers evolution; slope
  consistent with cH(z); RC100 cannot tell" (level-free). Still non-discriminating vs ΛCDM+baryons (Mayer).
- If binned n (M) is within 2σ of both 0 and 1: "survey-dominated, undecidable at intermediate z" stands.
- If binned n (M) excludes 1 at ≥ 2σ: the forced commitment a₀ ∝ H(z) is disfavoured by Ciocan's own bins at the
  level the paper's errors allow; report alongside RC100's compatibility with 0.
