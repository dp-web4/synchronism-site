# Topic: γ-Assignment Provenance for the 1,703 Chemistry Phenomena

**Priority: MEDIUM**

## Question

How was γ (equivalently N_corr) assigned to each of the 1,703 chemistry phenomena behind the
Chemistry Correlation Explorer — by what rule, in which archive sessions, and is the assignment
independent of the correlation targets it is then credited with predicting?

## Context

Visitor Pass 4 (2026-07-24): "γ assignment method for the 1,703 phenomena is never stated on-page —
without it the r-values aren't even auditable in principle." The tool already ships its own null model
(the 2-parameter polynomial in Z) and the density-monotonicity conclusion, but the provenance of the
independent variable is undocumented. Given the program's record (N_corr "asserted, not counted" on all
17 scales; γ ladder never anchored), the prior is that assignments trace to per-session assertions —
but that should be *walked*, not presumed.

## Why It Matters

If the assignment rule is circular (γ chosen with knowledge of the target), the r=0.98 headline is not
just null-matched but structurally guaranteed, which is a sharper statement than the current caveat.
If a consistent rule exists, the tool gains an auditable provenance paragraph. Either outcome is
shippable content for the tool page.

## Suggested Starting Points

- src/app/chemistry-correlation-explorer/page.tsx (the 23 displayed rows carry session numbers — walk them)
- Research archive chemistry sessions (GitNexus Section search: 'chemistry', 'N_corr', 'gamma assignment')
- Memory: chemistry null model (r=0.98 forced by density-monotonicity)
