# PRE-REGISTRATION — Is the DE freezing locus resolvable from generic freezing at DESI DR3?

Written 2026-10-08 (explorer), **before** running
`findings/scripts/de_freezing_locus_dr3_shape_resolvability.py`. Committed before execution.

## Question (topic `de-freezing-locus-the-only-win-branch-shape-not-sign.md`)
The substituted DE background H² = (8πG/3) ρ_m / C(ρ_m), C = tanh(γ ln(1+ρ/ρ_knee)), is a one-parameter (γ)
curve through ΛCDM (γ = ½). Its only branch that differs from ΛCDM is freezing (γ < ½). Could a DR3 freezing result
select *this locus* rather than generic freezing / Cardassian prior art?

## Method (fixed now)
- Likelihood machinery imported unchanged from `fit_gamma_family_to_desi_dr2.py`: DESI DR2 BAO (13 pts), Planck
  2018 distance priors, DES-Dovekie SNe (1820, STAT+SYS, M marginalised).
- **Asimov DR3 forecast**: noiseless synthetic data = locus prediction at a truth γ_t, with
  (Ω_m, h, ω_b) = the DR2 substituted best fit (0.3038, 0.6815, 0.02255), held for all γ_t (stated simplification).
  BAO covariance scaled by s² with s ∈ {1.0, 0.75, 0.6} (DR2-like / nominal DR3 / optimistic).
  CMB unchanged. SN covariance unchanged (s_SN = 1) in the primary arm; a secondary arm scales SN cov by 0.7².
- Truths γ_t ∈ {0.445, 0.466, 0.487}: DR2 2σ lower edge, 1σ edge, best fit (profile 0.487 −0.021/+0.024).
- Competitor fits to each Asimov set (Ω_m, h, ω_b refit every time):
  - ΛCDM (3);
  - wCDM (4) = the original Freese–Lewis Cardassian H² ∝ ρ + Bρⁿ (constant w = n−1), the 1-parameter prior-art twin;
  - MP-Cardassian n = 0, free q (4): H² ∝ (ρ^q + ρ_c^q)^{1/q}, which shares the locus's past (w → −q = −2γ) and Λ-like
    future asymptotes;
  - the locus itself (4; χ² = 0 at truth, an identity control);
  - CPL w₀w_a (5).
- CPL projection (w₀, w_a)(γ) of the locus for γ ∈ [0.30, 0.70] at the DR2 best-fit (Ω_m, h).
- Win threshold vs ΛCDM: ΔBIC > 6 for 1 extra parameter ⇒ Δχ² > 6 + ln N. N = 1834 (all data) ⇒ 13.5;
  BAO+CMB only N = 16 ⇒ 8.8. Primary threshold 13.5.
- Predictive probability of a DR3 win: nested-estimator approximation γ̂₃ | γ̂₂ ~ N(γ̂₂, √(σ₂² − σ₃²)),
  σ₃ from the Asimov Δχ² = 1 width of the locus profile at s = 0.75.

## Predictions (written before running)
- **P1** Locus CPL projection for γ ∈ [0.445, 0.5]: |1 + w₀| ≤ 0.04 and 0 ≤ w_a ≤ 0.15.
- **P2 (key)** Shape unresolvable: Asimov Δχ²(wCDM − locus) < 1 for every γ_t and every s.
- **P3** MP-Cardassian(n = 0) twin: Δχ²(MP − locus) < 1 for every γ_t and every s.
- **P4** At γ_t = 0.487, s = 0.75: Δχ²(ΛCDM − locus) < 4 (no detection even at the DR2 best fit).
- **P5** Predictive probability of a DR3 ΔBIC > 6 win over ΛCDM (Δχ² > 13.5): < 5 %.

## Decision rule (fixed now)
- If Δχ²(wCDM − locus) < 1 at every DR2-allowed truth and s ≥ 0.6: **the shape branch is unresolvable at DR3**.
  A freezing detection would select "w ≠ −1, freezing" and not the locus over the 1-parameter original Cardassian.
  TEST-26 then has **no framework-specific win branch**; recommend registering it as kill-with-ΛCDM / tie only,
  and closing the topic.
- If Δχ²(wCDM − locus) ≥ 4 at some DR2-allowed truth with s ≥ 0.6: register the win region as the γ̂ range where
  both Δχ²(ΛCDM − locus) > 13.5 and Δχ²(wCDM − locus) ≥ 4.
- 1 ≤ Δχ² < 4: "marginally resolvable"; register with the statistic attached, never bare.

## Not in scope (stated)
Growth / full-shape: the substituted family's growth readings are withdrawn (S), excluded (U, explorer 10-07) or
nested at 0.2 % (F), so no growth leg is used. No real DR3 likelihood exists; Asimov sets give expected Δχ², not
realised ones.
