# Topic: How was γ actually assigned to each of the 1,703 chemistry phenomena?

## Question

`/chemistry-correlation-explorer` reports 23 hand-curated correlations between chemistry properties
and "γ," topped by sound velocity at r = +0.982. Two independent expert visitor personas
(2026-07-30) flagged that the page never states how γ was computed per material, and that the two
possible answers have very different consequences:

- **If γ = 2/√N_corr per material**: the γ-calculator's own audited-negative finding applies (high
  γ ⇒ low N_corr ⇒ gas-like; low γ ⇒ high N_corr ⇒ collective/solid-like). Sound velocity is highest
  in the stiffest, most collective solids (diamond ≈12,000 m/s vs air ≈340 m/s) — so a *positive*
  correlation between sound velocity and γ would mean the flagship result runs in the same inverted
  direction the site already badges audited-negative on `/gamma-calculator`.
- **If γ was fit per material independently of N_corr**: then r = 0.982 is a goodness-of-fit
  statistic for a free parameter chosen to match the target, not a correlation with anything the
  framework predicts from first principles — a much weaker claim than the page currently implies
  ("phenomena tested against γ").

A same-session maintainer fix added a caveat box naming this fork on the page itself (see commit
this session), but did not resolve it — resolving it requires finding or reconstructing the actual
per-material γ-assignment method from the original research sessions.

## Why It Matters

The chemistry sector is one of the site's most-cited "successes" (23 high-r correlations across a
curated sample). If the flagship correlation's sign is the same sign the site independently proved
wrong elsewhere, that's not a minor bookkeeping issue — it would mean the sector's headline result
either needs the sign flipped in its interpretation, or needs to be explicitly reclassified as
"fit, not predicted." The existing null-model caveat on the page (a 2-parameter polynomial in Z
matches these correlations, |Δr| ≤ 0.07) already establishes that high r is weak evidence on its
own; resolving the sign question determines whether even the *direction* is meaningful.

## Suggested Starting Points

- The phenomena list in `src/app/chemistry-correlation-explorer/page.tsx` cites session numbers per
  row (e.g. sound velocity — Session #47, electronegativity — Session #62). These point at specific
  research-archive sessions that likely contain the original γ-computation method.
- `/gamma-calculator` and `/gamma-boundary` for the reference sign-inversion finding to compare
  against once the assignment method is known.
- Related prior finding: [[project_two_coherence_orientations_chemistry_flipped]] (2026-07-29) found
  that C(ρ) vs. sound velocity is r = −0.32 for essentially all (γ, ρcrit) while the site badges
  +0.982 — suggesting the sign question may already have a partial answer buried in that session's
  work that hasn't been fully connected to this page yet.
