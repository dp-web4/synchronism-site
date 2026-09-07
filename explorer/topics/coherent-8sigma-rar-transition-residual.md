# Topic: What is the coherent ~8σ-per-bin RAR transition residual?

## Question
`/galaxy-rotation` reports, side by side and never reconciled: a **coherent S-shaped ≈0.05–0.10 dex
residual at the transition, significant at ~8σ per bin**, and **zero global fit improvement**
(Δχ² ≈ −0.84 over 2807 points). Those two facts together are not a null. A *coherent* residual with
no fit improvement says **both curves are wrong in the same place in the same direction**.

What is it? Candidates to eliminate in order: (1) binning artifact / correlated points within
galaxies inflating per-bin σ — the same effective-N inflation this program has already caught twice;
(2) a mass-to-light or inclination systematic that is itself a function of g_bar; (3) real structure
in the RAR transition region that neither the compander nor McGaugh's ν captures.

## Context
Visitor researcher persona, 2026-09-07: "That residual is the most interesting object on the site
and it is being used as evidence of equivalence when it is evidence that the RAR transition region
has structure neither function captures. That is publishable *against MOND*, not for this framework,
and nobody here seems to want it."

## Why It Matters
This is the **only unexplained positive signal** anywhere on the site. Everything else is a null, a
reparametrization, or a refutation. If (1) or (2), we have found another over-refutation-adjacent
statistics error and should say so. If (3), it is a framework-independent result about the RAR — the
same genre as the local-density no-go and the unidentifiability theorem, which are the program's
only citable outputs. Either outcome is worth more than the equivalence claim it currently decorates.

Note the prior: this program's per-bin significance figures have twice been inflated by treating
correlated points as independent. Check that first, and if it survives, that survival is the result.

## Suggested Starting Points
- `explorer/scripts/rar_transition_shape_real_sparc.py` (the run that produced it)
- `/galaxy-rotation` — the two sentences that sit next to each other unreconciled
- Lelli, McGaugh & Schombert 2016; Lelli et al. 2017 (RAR scatter ≲0.13 dex) — is the residual
  inside or outside the published intrinsic scatter?
- Desmond 2023 / Stiskalek & Desmond 2023 for whether anyone has looked at RAR residual *shape*
