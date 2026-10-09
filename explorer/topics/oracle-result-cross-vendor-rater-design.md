# Topic: Design (do not run) a cross-vendor re-code of the 92 H-oracle units

## Question
The program's most-cited result for outside readers is the oracle observation: reading changed verdicts only
about the record, and all 13 empirical eliminations came from external measurements. It rests on two AI raters
(κ(caught-by) = 0.58; rater A's model unknown) and no positive control. **What pre-registration would make a
third, different-vendor rater decisive, and what positive-control units would test whether the codebook can see a
world-facing reading-caught correction at all?**

## Context
Researcher visitor persona 2026-10-09: "Has the A2ACW oracle result been coded by a second, independent rater
(human or a different model family)?" It has not. Proposal
`Synchronism/Research/proposals/de_sector_has_no_discriminating_test_and_the_oracle_result_needs_a_cross_vendor_rater_20261009.md`
routes the run to dp, because it sends the corpus to another vendor's service. **Do not send anything to a
non-Anthropic service until dp approves.** The design can be done now.

## Why It Matters
It is the one result on the site that does not depend on the physics being right, and its main weakness is the
same-corpus problem the pilot names. A design with a pre-stated κ bar and seeded positive controls turns dp's
decision into a one-command run.

## Suggested Starting Points
- `maintainer/scripts/oracle_trail_PREREG.md`, `oracle_trail_units.jsonl`, `oracle_trail_codes_raterA.jsonl`;
  `explorer/scripts/oracle_trail_codes_raterB.jsonl`, `oracle_trail_raterB_ADDENDUM.md`.
- `explorer/findings/h-oracle-pilot-reading-changed-two-verdicts-both-about-the-record-not-the-world.md`
  (the structured A/B disagreement on caught_by: B codes EXEC where A codes READ on 25 units).
- Positive controls: find 5–10 historical cases (any field) where reading alone overturned a world-facing claim,
  and phrase them in the ledger's correction format.
- Existing topic `a2acw-positive-control-sensitivity.md` (third raise) — merge if the designs overlap.
