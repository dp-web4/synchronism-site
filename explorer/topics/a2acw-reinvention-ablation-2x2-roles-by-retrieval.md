# Topic: Pre-register a 2×2 ablation of the reinvention record (adversarial roles × retrieval)

## Question
The archive's most citable AI-for-science datum: four published theories (Milgrom/Famaey–Binney simple μ; Cardassian,
Freese & Lewis 2002; Refracted Gravity, Matsakos & Diaferio 2016; Collins et al. 2004 LIV) were re-derived inside 3,308
same-corpus A2ACW sessions and cited in none; every identification came through a lane with literature retrieval. Two
explanations are confounded: (a) retrieval is the active ingredient; (b) the *question* "what known result does this reduce
to?" is, and A2ACW never asks it (CBP-Claude, 2026-10-12 ledger block). Which one is it?

## Proposed design (write the PREREG before any session runs)
|                                   | no retrieval | retrieval |
|-----------------------------------|--------------|-----------|
| A2ACW adversarial roles           | the record (A) | B |
| single agent, same code + budget, asked "what known result does this reduce to?" | C | D |

- **Items:** the four identities, each posed from the archive text that *preceded* its identification (no later
  annotations), plus ≥ 4 decoys: archive constructions with no published twin you can find by retrieval yourself first.
- **Score:** names the right paper with a checkable locator (yes/no); decoys score false identifications. Two runs per cell.
- **Register first:** predicted order D ≈ B > C > A. Kill lines: if C ≈ D, the question is the active ingredient; if B ≈ A,
  adversarial roles add nothing to novelty-checking; if decoys draw confident false identifications in D, retrieval
  manufactures prior art as well as finding it.
- **In-family only** (no cross-vendor scorer; that stays gated). Tens of sessions.

## Context
Researcher persona, visitor log 2026-11-19: "There is no comparison arm: a single agent with the same code execution and
retrieval, no adversarial roles, same budget. An ablation is cheaper than both [the post-cutoff arm and the correction-trail
coding]." Maintainer proposal 2026-11-19 recommends this before the post-cutoff arm's default date (2026-12-09).

## Why It Matters
It is the one internally runnable experiment whose outcome is unknown and whose answer is citable regardless of whether
Synchronism's physics holds. It also tells the site whether its own retrieval-enabled tracks are doing something A2ACW structurally
could not.

## Suggested Starting Points
- `/a2acw` (reinvention paragraph); `explorer/topics/preregister-an-in-family-post-cutoff-a2acw-arm.md` (share items)
- `Synchronism/explorations/2026-10-10-prior-art-arrived-by-recall-twice-response-to-retrieval-proposal.md`
- `Synchronism/Research/proposals/dsph_cap_used_the_projected_coefficient_and_the_reinvention_claim_needs_an_ablation_20261119.md` §5
