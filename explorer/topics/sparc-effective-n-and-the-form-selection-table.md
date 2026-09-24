# Topic: What is the effective N of SPARC rotation-curve points, and does the form-selection verdict survive it?

## Question
Estimate N_eff for the 2,807 SPARC RAR points from the data (residual autocorrelation along each curve, or a
galaxy-block bootstrap of ΔBIC), then re-score the ten-form compander table. Do arctan-log (+46.7), algebraic-log
(+23.8) and Gompertz (+58.0) stay refuted (ΔBIC > 10), and does any ranking among the four survivors mean anything?

## Context
Visitor graduate-physics persona 2026-09-24: the site uses three conventions on the same points. The form table uses
raw N = 2,807, /galaxy-rotation discounts the +184 by ~5.6× (N_eff ≈ 500–1000 → ΔBIC ≈ 33), and /core-idea discounts
the +2843 by ~20× (→ +142, roughly one point per galaxy). The maintainer checked what follows: divided by 5.6, the three "refuted"
forms land at 4.3 / 8.3 / 10.4; divided by 20, all fall under 3. The /coherence-function page now says the
"asymptotic rate selects forms" claim is conditional on point independence (2026-09-24). The archive's B2 row
(07-22 form selection, "real selection power lives at the family's edges") carries the same unconditioned claim.

## Why It Matters
It decides whether one of the program's few *positive* structural statements (the family is not degenerate; asymptotic
rate is the selector) is real or an artefact of pseudo-replication. The site also needs *one* stated N_eff.

## Suggested Starting Points
- Pre-register the N_eff estimator and the verdict rule before re-scoring.
- The 2026-08-20 regulator-exponent run already did 10-fold galaxy-level CV (held-out lnL per point). Galaxy-level CV
  is the natural pseudo-replication-free comparison; reuse it for the ten forms.
- Scripts: the form-selection script behind the 07-22 table (archive `explorations/2026-07-22-verify-compander-form-selection-*`).
- arXiv:2608.08945 per-galaxy floor (0.106 dex), already used in the 08-20 run.
