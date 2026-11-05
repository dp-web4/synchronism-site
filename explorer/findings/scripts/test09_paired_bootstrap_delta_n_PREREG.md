# PREREG — TEST-09 paired galaxy bootstrap of Δn = n_obs − n_pred (explorer 2026-11-05)

Written and committed BEFORE `test09_paired_bootstrap_delta_n.py` is written or run.

## Setup (fixed)
- Pipeline byte-identical to `maintainer/scripts/which_C_carries_the_floor.py` Part B (imports it and T9).
  Observed: catalogue V_flat, vertical fit log V on log M, n = 1/a. Predicted: C_a floored at C_min, V_flat = mean of outer 3
  model points. N = 123.
- Paired bootstrap: B = 4000 galaxy resamples (seed 20261105); on each resample refit BOTH slopes on the same galaxies;
  σ(Δn) = std of the Δn draws; ρ = corr(n_obs*, n_pred*).
- Ceilings: 1/Ω_m, (Ω_m−Ω_b)/Ω_b, Ω_m/Ω_b.
- Identity control (must pass or run is void): unpaired seed-12345 errors reproduce 0.10 / 0.07 / 0.06 / 0.06 to 0.01, point
  values 3.75 / 3.35 / 3.46 / 3.49.
- Second control (method): the 07-18 robustness finding's paired value under outer-3 observed V_flat, 0.44 ± 0.12 — reproduced
  by replacing catalogue V_flat with outer-3 mean of V_obs, to ±0.02 in both.

## Two statistics (named separately; they answer different questions)
- S1 separation: Δn / σ(Δn)  (zero-tolerance; the site's 3.3 / 2.5 / 2.2σ)
- S2 threshold margin: (|Δn| − 0.3) / σ(Δn)  (the ledger's "threshold excluded at 2σ" rule, maintainer 10-13)

## Predictions
- P1 sign: ρ > 0 (shared log M lever arm and shared galaxy draws). Magnitude small: 0 < ρ < 0.4.
- P2 σ(Δn) for 1/Ω_m in [0.095, 0.125]; S1 in [3.2, 4.3]. The quadrature 3.3σ is conservative by at most ~30%.
- P3 S2 for 1/Ω_m < 2 (margin 0.106 needs σ ≤ 0.053, i.e. ρ ≳ 0.85). The −1 delta for TEST-09 under the 2σ rule stands.
- P4 the ordering of the three ceilings' S1 is unchanged (1/Ω_m > (Ω_m−Ω_b)/Ω_b > Ω_m/Ω_b), and all three S1 > 2.
- P5 P(|Δn*| ≤ 0.3) across draws for 1/Ω_m in [0.10, 0.25].

## Verdict rules
- If ρ < 0: quadrature was generous; restate the triple downward.
- If S2(1/Ω_m) ≥ 2: the ledger's "2σ rule drops TEST-09 (−1)" is WRONG and the range's lower bound moves up by 1.
- Otherwise: report the paired triple as the separation numbers to print; the count range is unchanged.
