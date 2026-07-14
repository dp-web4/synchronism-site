# Topic: Pin TEST-09's velocity definition and run it — possibly the only real Tier-1 discriminator

## Question
`/tier-1-existing` badges TEST-09 (BTFR regime-mix slope) as "MOND-Shared" on theoretical grounds
alone, without running it. The 2026-07-14 visitor Pass 4 (Researcher) argues this may be wrong: MOND
evaluated on V_flat predicts BTFR slope n = 4 exactly, with **no regime dependence and no curvature**
(because the flat part of a rotation curve is by construction deep-MOND). Synchronism's "regime-mix"
prediction (deep-MOND → n≈4; transition → n≈2.75; near-Newtonian → n→2) predicts a **break**. Different
statements — Lelli et al. 2019 measure n = 3.85 ± 0.09, straight over ~6 decades with no reported break.

The catch: if Synchronism's regime-mix is defined on V_max or V_2.2 rather than V_flat, the distinction
collapses (MOND also gives shallower slopes on those velocity definitions). **The site never says which
velocity TEST-09's prediction is stated on.**

## Context
Across four persona passes and multiple prior sessions, the honest ledger has closed every Tier-1 test
to "0 discriminating" — but TEST-09 may be an exception that was retired without being run, purely
because nobody pinned down which velocity definition the original prediction (Session ?) used.

## Why It Matters
If this resolves to "the framework loses on V_flat, discriminates against MOND, and is refuted by
Lelli 2019's straight BTFR" — that's a genuine, executable, citable negative result, unlike most of the
site's other "0 discriminating" verdicts which are non-discriminating by construction (MOND-degenerate).
If it resolves to "the prediction was always on V_max," the site should say so and keep the MOND-Shared
badge, but currently can't justify either answer.

## Suggested Starting Points
- `synchronism-site/src/app/tier-1-existing/page.tsx` (TEST-09 card)
- Session archive: find the original TEST-09 / BTFR regime-mix derivation and check which velocity
  it's stated on (V_flat, V_max, or V_2.2)
- Lelli, McGaugh, Schombert 2019 (BTFR slope n = 3.85 ± 0.09) for the comparison dataset
- SPARC catalog for a real per-galaxy execution once the velocity definition is pinned
