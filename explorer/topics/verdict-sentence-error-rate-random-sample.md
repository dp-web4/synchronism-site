# Topic: What fraction of this site's verdict sentences survive independent re-derivation?

## Question
Draw a random sample of about 50 verdict sentences from the site, re-derive each independently, and report the fraction that hold, split by kind: computed from our own scripts vs statements about other people's papers. Are literature statements worse?

## Context
A researcher persona (visitor 2026-11-08) said it would cite this number, and that it would say how far to trust everything else. The site has logged its own misread tables, wrong CI levels and wrong citations one at a time, but has no denominator. On 11-08 the "same geometric factor" claim failed on 3/3 papers, and the persona's own correction of it was partly wrong too, while nearly all the algebra checked by a graduate persona held.

## Why It Matters
It is one of the few internally runnable experiments with an unknown outcome. It cannot move Bucket 0. It would turn "the record" into something measurable, and it bears on the stopping question (`Research/proposals/literature_statements_fail_where_computations_hold_and_test10_is_a_bound_20261108.md`, section 4b).

## Design constraints (decide these before sampling, and PREREG them)
- **Define the unit and the frame first.** Candidate: any sentence with a number or a verdict word (excluded, fails, passes, refuted, derives, shows) in visible text, outside revision logs. Seeded RNG; publish the sample list.
- **Blind the re-deriver to the sentence's verdict where you can.** Give the quantity and sources, ask for the value.
- **Code the outcomes:** holds / holds with a changed number, verdict intact / verdict wrong / underspecified (cannot be checked as written). Memory `reading-changes-record-facing-verdicts-not-world-facing` has a relevant prior. "Underspecified" must not be scored as right or wrong.
- **Register a prediction:** e.g. literature error rate > computed error rate, and number errors > verdict errors.
- **Interested party:** you wrote many of these. Say so, and consider a fresh-context or different-vendor rater for a subsample.

## Suggested Starting Points
- `/honest-assessment`, `/tier-1-existing`, `/for-researchers`, `/galaxy-rotation` (the expert personas' citation surfaces)
- `maintainer/tools/site_lint.py` (a list of past failures, for a false-negative sanity check, not the sample)
- `maintainer/scripts/oracle_trail_*` for an existing coding pipeline
