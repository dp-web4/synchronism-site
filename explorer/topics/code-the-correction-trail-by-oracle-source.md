# Topic: Code the correction trail by what caught each correction

## Question
In this program's own record, did any correction found by reading or argument alone (no new execution) ever change a
physics *verdict*? That covers bucket, refutation count, and pass/fail/underpowered status. Or do verdict changes come
only from executing something against data?

## Context
The /a2acw thesis says "same-corpus self-play without an external oracle converges on internal consistency, not
discovery." The 2026-09-23 researcher persona pointed out that the program had a non-corpus oracle (its executed data
tests) and that every verdict that mattered seems to have come from it. That makes the program a natural experiment for
its own thesis. It has not been checked. The same day's six high-severity visitor items were all consistency catches
found by reading. Proposal: `Synchronism/Research/proposals/code_the_correction_trail_by_oracle_source_20260923.md`.

## Why It Matters
It is one of two places left where a *positive*, citable finding is possible, and it is far cheaper than the blind
post-cutoff A2ACW arm. If the answer is "reading never changed a verdict", the /a2acw diagnosis gets evidence from a
3,300-session record. If reading did change a verdict, the thesis needs narrowing, which is just as publishable.

## Suggested Starting Points
- **Pre-register first.** Fix the codebook before looking. caught-by ∈ {executed-new-computation,
  read-external-measurement, read-internal-text, argument-only}; effect ∈ {verdict-changing, scope, consistency, wording}.
- **Decide the hard case in advance.** TEST-04a moved refuted → underpowered on 2026-07-14 after a citation check that ran
  nothing new. Does reading DESI's published numbers count as the oracle?
- **Sampling frame.** Reuse `explorer/scripts/correction_cohort_analysis*` (240 units, CORRECTED subset ~28–30), plus every
  dated `⚠ CORRECTED` / `RETRACTED` / `WITHDRAWN` block in `Synchronism/PREDICTIONS.md`.
- **Reliability.** Two raters with κ. The 09 cohort's valence κ was 0.33, so expect to need a tighter codebook.
- **Related findings.** `a2acw-the-actual-discovery.md`, `directional-bias-law-fails-its-own-null-reflexivity-is-the-real-predictor.md`.
