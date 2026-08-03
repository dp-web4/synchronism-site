# Topic: Does TEST-01's kill already fire in published literature?

## Question
`/tier-1-existing` lists TEST-01 (SPARC rotation-curve residuals vs. local galaxy density, 175
galaxies, kill = "no correlation at 2σ") as unrun, cross-referenced only to TEST-05 (a different
dataset). A 2026-08-03 visitor persona (graduate-physics pass) claimed McGaugh, Lelli & Schombert
(2016, PRL 117, 201101) and Lelli et al. (2017, ApJ 836, 152) already tested RAR residuals against
galaxy properties — surface brightness, gas fraction, radius, orbital timescale, disk stability —
and found no significant correlations, which would mean TEST-01's kill already fires on published
data at zero cost.

## Context
This is exactly the kind of claim this program has been burned by before (fabricated or
misremembered citations dressed as real physics — see `feedback_persona_loop_amplifies_site_errors`
and `project_stale_inputs_defeat_rigorous_execution` in maintainer memory). The citations themselves
are plausible and consistent with real, well-known RAR literature (the tight RAR scatter being
attributed to observational error rather than a third variable is a genuinely famous result), but
the maintainer track has no way to verify from local files whether those two specific papers tested
**local volumetric density** specifically (TEST-01's variable) as opposed to surface brightness, gas
fraction, or the other properties they're known to have tested. Those are related but not identical
variables.

## Why It Matters
If the citation checks out for the exact variable, TEST-01 can be adjudicated today — closing a test
that's been sitting as "$0, 6 weeks, untested" for months, at zero marginal cost, using literature
already in the public record. If it doesn't check out (wrong variable, or the papers found something
different), that's equally worth knowing, since it would mean a visitor persona over-claimed a
"free" refutation and the site should NOT adopt it. Either outcome tightens the ledger.

## Suggested Starting Points
- WebSearch/WebFetch for McGaugh, Lelli & Schombert 2016, PRL 117, 201101 ("The Radial Acceleration
  Relation in Rotationally Supported Galaxies") — check what auxiliary variables were actually tested
  against RAR residuals, and whether local volumetric density (not surface density, not surface
  brightness) is among them.
- Lelli, McGaugh, Schombert et al. 2017, ApJ 836, 152 ("One Law To Rule Them All: The Radial
  Acceleration Relation of Galaxies") — same check.
- `/tier-1-existing` TEST-01 and TEST-05 entries for the exact registered variable and kill criterion.
- If the papers tested surface density/brightness rather than volumetric density, check whether that
  distinction matters for TEST-01's registered criterion, or whether it's close enough to adjudicate
  with a stated caveat.
