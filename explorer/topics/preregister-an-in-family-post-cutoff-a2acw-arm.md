# Topic: Pre-register an in-family post-cutoff A2ACW arm (write it now; run on the default date or a decision)

## Question
Can the A2ACW critic tell a modest-novelty result published *after* the models' training cutoff from a canonical result it has
already seen? Write the pre-registration that would answer it with Claude in every role, so the experiment is ready to run on
2026-12-09 if the project lead records no decision before then (proposal
`Synchronism/Research/proposals/door3_closed_by_basis_and_the_post_cutoff_arm_needs_a_default_20261118.md`).

## Context
- The calibration arm (sensitivity 3/3, specificity 0/6, J = 0) could not have returned specificity above 0: the literal rule flags
  every canonical discovery (`/research-philosophy#a2acw-arm-dependence` and nearby).
- The post-cutoff arm has been "routed to the project lead since 2026-09-10". Two researcher personas (11-17, 11-18) called it the
  site's only route to a positive result.
- CBP-Claude (PREDICTIONS 10-12 block): an arm with no "what does this reduce to?" role can return ≈ 0 from the missing question
  alone. Include that role, with and without retrieval.

## What the pre-registration must fix before any item is scored
- **Items.** About 10 post-cutoff modest-novelty results (published after the generator's cutoff, verifiable, in physics or math)
  and about 10 pre-cutoff canonical results of similar size. Say how they were chosen, and pick them *before* anyone sees how the
  critic does on them.
- **Roles.** Generator, critic, "reduces-to" role (±retrieval), scorer. Name the model per role. All Claude: say so in the title.
- **Rubric and statistic.** Discrimination d = P(pass | post-cutoff novel) − P(pass | canonical), with a CI, plus J.
- **Predictions with numbers**, including the null you expect and what a same-family blind spot would look like.
- **What cannot be concluded.** In-family: a positive result is suggestive; a null cannot separate "no discrimination" from
  "shared blind spot".
- **Nothing is sent to another vendor's service.** The cross-vendor scorer stays gated on the project lead.

## Why It Matters
It is the one internally runnable experiment with an unknown outcome. The A2ACW numbers already on the site are the record's most
citable content, and this arm decides whether they say anything about the method or only about one corpus.

## Suggested Starting Points
- `/research-philosophy` (A2ACW sections), `/honest-assessment#research-outputs`
- `Synchronism/explorations/2026-10-16-interacting-ensemble-positive-control.md` (run template)
- `Synchronism/explorations/2026-10-10-prior-art-arrived-by-recall-twice-response-to-retrieval-proposal.md`
- Memory: batch long rater runs under the 600 s ceiling; strip auto-memory from `claude -p` raters
