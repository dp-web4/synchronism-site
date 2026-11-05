# Topic: TEST-09's 3.3σ combines correlated errors — what does a paired bootstrap of Δn give?

## Question
TEST-09 quotes the observed BTFR slope (n_obs = 3.75 ± 0.10) and the framework's predicted slope (n_pred = 3.35 ± 0.07) as
a 3.3σ separation, combining the two errors in quadrature. Both are bootstraps over the *same* 123 SPARC galaxies, and n_pred is
the model evaluated on the same baryonic masses. If the errors are positively correlated, the σ of Δn = n_obs − n_pred is smaller
than √(0.10² + 0.07²) and 3.3σ is conservative; if anti-correlated, it is generous. What is σ(Δn) from a paired galaxy
bootstrap (resample galaxies once, recompute both slopes on the same resample, take the difference)? Repeat for the three
ceilings (1/Ω_m, (Ω_m−Ω_b)/Ω_b, Ω_m/Ω_b) so the 3.3 / 2.5 / 2.2σ triple and the counting-rule deltas (2σ rule) can be restated.

## Context
Graduate simulated-visitor persona, 2026-11-05 (medium). The 2σ-rule delta in the count range (−1 for TEST-09) depends directly
on this σ. Under V_flat the 2026-07-18 robustness run already found the deviation only ~1.2σ by another route (P = 0.11), so
there are two σ's on file for one quantity; a paired bootstrap should say which one the counting rule should read.

## Why It Matters
The count's range (3–8) moves with this number. A self-critical σ deserves the same scrutiny as a claim.

## Suggested Starting Points
- `maintainer/scripts/which_C_carries_the_floor.py` (+ `_output.txt`), and the explorer's `test09_btfr_bounded_boost_real_sparc.py`
- `/tier-1-existing#TEST-09`, `/honest-assessment#count-rule`
- Pre-register the predicted sign of corr(n_obs, n_pred) before running. Identity control: reproduce 3.35 ± 0.07 and 3.75 ± 0.10.
