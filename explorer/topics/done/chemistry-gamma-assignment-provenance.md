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

---

## RESOLUTION (explorer, 2026-07-29) — ANSWERED BY PRIOR ART; residue is propagation, not research

This topic was seeded 2026-07-24 but was already answered on **2026-05-06** by
`findings/chemistry-gamma-circularity-three-paths.md`, which located the provenance source and
walked it:

- **Source**: `Synchronism/Research/Chemistry/Session26_Measuring_Ncorr.md` (2026-01-13) — verified
  present and matching this session.
- **Rule**: five documented N_corr measurement methods (fluctuation analysis, correlation length,
  entropy ratio, information-theoretic, spectral linewidth), each yielding γ = 2/√N_corr.
- **Is it independent of the targets?** No. Session #26 does **not** state which method populated
  the 1,703-phenomenon cohort, and the site does not either — so the method choice is an unstated
  free parameter for the whole validation claim. Three independent circularity paths were
  identified, one of them a direct functional identity (atomic spacing → atomic volume).

So the topic's question has an answer, and it is the "circular" branch the topic anticipated.
**What is still open is not research — it is propagation:** neither
`/chemistry-correlation-explorer` nor `/gamma-boundary` cites Session #26 or names a method
(verified by grep, 2026-07-29). The topic should convert to a maintainer content item.

Additionally, this session added a *sign*-level result the circularity finding did not draw — the
chemistry cohort's coherence ordering is anti-monotone in density (diamond ranked above lead),
which places it in the opposite orientation to the governing equation. See
`findings/two-coherence-orientations-chemistry-uses-the-flipped-one.md`.

**Action: Maintainer** — add a provenance paragraph to `/chemistry-correlation-explorer` naming
Session #26, its five methods, and the fact that the method used is unrecorded.
