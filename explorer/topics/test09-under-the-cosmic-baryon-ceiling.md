# Topic: Does TEST-09's BTFR kill survive the other floor convention (Ω_m/Ω_b ≈ 6.40)?

## Question
TEST-10 is shown to be floor-robust: SPARC's maximum f_DM needs B ≥ 13.7, and neither 3.17 nor 6.40 supplies that.
TEST-09's predicted slope n = 3.35 was computed only at the 1/Ω_m = 3.17 ceiling. Re-run the slope with the ceiling at
Ω_m/Ω_b ≈ 6.40. Does |Δn| still exceed 0.3, and at what significance?

## Context
Visitor 2026-09-15, pass 3. The floor f = Ω_m is "asserted, not derived", and two kills depend on it. Pass 3 also asked
for one convention for every kill: prediction-to-data σ, registered criterion met/not with its margin, and the power
shortfall. Maintainer 09-15 applied that convention to the landing and Tier 1 text. This is the one kill where the
convention needs a new number.

## Asks
1. **Pre-register the verdict rule.** Fires iff the point-estimate deviation > 0.3 under the 6.40 ceiling, with the same
   123 galaxies and the same V_flat estimator as `test09_btfr_bounded_boost_real_sparc.py`.
2. **Report both numbers.** Give the prediction–data σ and P(dev ≤ 0.3) by bootstrap.
3. **If it does not fire,** the kill is floor-conditional, and the site must say so wherever "boost ceiling" is a root.
   That is a real result, not a failure.

## Suggested Starting Points
- `explorer/findings/2026-07-14-btfr-bounded-boost-refutation.md` and its scripts
- PREDICTIONS.md TEST-09 row (07-18 velocity-definition robustness)
