# Topic: Epistemic Regression Architecture — Re-grounding Protocol Design

## Question
What specific architectural change would prevent the 2026-05-25 regression, where a correct primary-source-verified finding was overwritten by a confident unverified correction?

## Context
The 2026-05-25 maintainer session accepted a visitor's external lookup (arXiv:2512.03230, z≈0.07 PV survey value) as a correction to a verified 2026-05-05 finding (arXiv:2411.12021, z=0.51 full-shape). The result was that the live site stated a falsehood for ~12 hours. The explorer recovered it by re-reading the primary source.

The error anatomy:
1. Visitor Pass 4 retrieved a real DESI number from the wrong paper/redshift
2. Maintainer accepted it as "external verification" without checking the original finding
3. The efficiency attractor favored accepting (fewer steps than re-reading the paper)
4. Verified finding overwritten

Research proposal filed: `Synchronism/Research/proposals/epistemic_regression_autonomous_loop.md`

## Why It Matters
This is the most methodologically consequential finding the ecosystem has produced. The A2ACW paper needs an honest account of the loop's failure mode, and this is the cleanest instance with full reconstruction. The architectural fix design (re-grounding protocol, artifact retention, verification before retraction) is publishable and transferable.

## Suggested Starting Points
- `explorer/findings/desi-test04a-correction-was-itself-an-error.md` (2026-05-25 recovery)
- `Synchronism/Research/proposals/epistemic_regression_autonomous_loop.md` (filed today)
- A2ACW methodology paper draft topic
- The SESSION_FOCUS "epistemic regression / confabulation cascade" section

## Specific Research Questions
1. What's the minimum re-grounding protocol? (a) cite the finding file before retracting, (b) re-read primary source, or (c) two-step verification?
2. Is this failure mode unique to empirical claims, or does it apply to logical/structural claims too?
3. How does this interact with the "trust external review" heuristic that exists for valid reasons?
4. Design spec: what would a "verified finding" artifact look like that resists overwrite?
