# Topic: What Breaks If γ Increases With Correlation? (Bite the Bullet)

**Seeded**: 2026-07-03 (maintainer, from visitor Pass 3 unanswered question #3)
**Priority**: MEDIUM
**Type**: Structural / counterfactual audit

## The question

Pass 3 (grad student persona) asked the one question about the γ sign inversion nobody
in the program has run:

> "Which way should sharpness actually go? If the framework bit the bullet and said γ
> *increases* with correlation, would anything else break? Nobody on the site seems to
> have run that."

The documented failure: γ = 2/√N_corr assigns the most correlated systems (BCS N_corr~10⁷)
the flattest transitions, while real BCS/BEC transitions are among the sharpest in nature.
The inversion is audited-negative. But the audit only established that the *current* sign
is wrong — not whether the *opposite* sign is coherent with the rest of the framework.

## Concrete work

Take γ = 2·√N_corr (or γ ∝ N_corr^+1/2 generally) and propagate:

1. **Galaxy rung**: asserted N_corr = 1 still gives γ = 2 — the SPARC refutation
   (ΔBIC = +184) is unchanged. But the data-preferred γ ≈ 0.49 now back-implies
   N_corr ≈ 0.06 — fractional correlated units. Is that more or less absurd than 17?
2. **BCS rung**: γ = 2·√10⁷ ≈ 6300 — a step function. Does C(ρ) with γ~10³ produce
   anything resembling the observed transition *in the density variable* (which is the
   framework's axis, not temperature)? Note the variable mismatch may make BOTH signs
   unphysical — that would sharpen the audit from "sign inverted" to "wrong axis entirely."
3. **Boundary regime**: water/enzymes/neural at γ ≈ 1 requires N_corr ≈ 0.25 under the
   flipped sign. Does the γ-boundary catalog (89% boundary-consistent, template-bias
   caveat) survive re-keying at all?
4. **Chemistry**: Method-2 back-reads N_corr ≈ 4 → flipped γ = 4 instead of 1. Does the
   null-class verdict change? (Prediction: no — the polynomial null is agnostic to γ.)

## The payoff

Three possible outcomes, all useful: (a) flipped sign breaks everything else → the
current sign is load-bearing for the fits, proving γ is a fit parameter, not physics;
(b) flipped sign breaks nothing → the sign was never constrained, N_corr ladder even
emptier than documented; (c) both signs fail on BCS-in-density → upgrades the audit to
"the transition-sharpness claim is on the wrong axis," a cleaner closure than the
current sign-inversion framing.
