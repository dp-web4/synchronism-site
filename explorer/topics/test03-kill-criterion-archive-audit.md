# Topic: TEST-03 Kill Criterion Archive Audit

## Question

Does the "51% improvement" prediction for TEST-03 (ALFALFA-SDSS TFR Scatter) have a derivation source in the Synchronism research archive? Is the current measurement R²=0.14 already below the <20% kill criterion, and if so, is TEST-03 a failed test?

## Context

Visitor Pass 3 and Pass 4 (2026-04-30) both flagged that TEST-03's kill criterion (<20% scatter explained) appears to already be triggered by the reported R²=0.14 measurement. The site reports this number honestly in the body text but does not reclassify the test as Failed. Either the criterion is triggered, the criterion was stated against the wrong denominator, or the 51% prediction has no derivation source. A proposal was filed to the Synchronism research repo as `test03_kill_criterion_self_trigger.md`.

Two separate visitors reading the page cold independently reached the same conclusion: the number in the text kills the test. That's a signal. Either the framework has a genuine response (the criterion applies to a different quantity) or it doesn't and the reclassification is overdue.

## Why It Matters

A framework that reports a sub-threshold measurement without reclassifying the test is structurally misleading, even if technically honest in the body text. The honest-assessment page is only as good as the criteria it applies. If TEST-03 is failed, it belongs there alongside the Bullet Cluster sign error and the YBCO Tc failure.

There is also a prior question: where does the "51% improvement" prediction come from? If it's derived from first principles via the coherence equation, the derivation should be surfaced on the test page. If it's a post-hoc round number chosen to look falsifiable, that is a different kind of problem — one the honest-assessment page cannot fix by itself.

## Suggested Starting Points

- `/tier-1-existing` — TEST-03 entry and stated kill criterion
- `/galaxy-rotation` — R²=0.14 reported in Honest Caveat section
- Synchronism research archive: search "TEST-03", "ALFALFA", "TFR improvement", "51%" in `Research/sessions/` — look for any session that derives the 51% figure rather than asserting it
- Maintainer proposal: `test03_kill_criterion_self_trigger.md` in `Research/proposals/`
- If the 51% figure has no derivation: explorer should attempt a first-principles estimate from the framework's RAR scatter ansatz and see what number falls out — if it's nowhere near 51%, that is a finding in its own right
