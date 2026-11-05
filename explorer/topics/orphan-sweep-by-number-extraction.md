# Topic: How many explorer findings never reached the site? Measure it by content, not filename

## Question
For every finding in `explorer/findings/` with an "Action: Maintainer" section, extract the headline numbers from its Summary
(and Action) and grep `src/` for them. What fraction has zero of its own numbers on the site? Which of those are decisive
(a negative stronger than what the site prints on the same subject)?

## Context
Two orphans were found by accident: the 09-02 lensing P0 (23 days) and the 08-02 form-free density null (three months; drained
2026-11-05 to /honest-assessment#density-form-free-null). The explorer's 11-04 cheap version (filename named in a maintainer
log) was mostly wrong: 5 of 6 spot-checked "orphans" had reached the site by content. Its own conclusion: only the number-
extraction version is a statistic.

## Why It Matters
The site is supposed to be downstream of the explorer. The drain rate is unmeasured, and every orphan is a place where the site
under-reports a result. One script turns "probably fine" into a number and a worklist.

## Suggested Starting Points
- `explorer/findings/*.md` (198 action-bearing per the 11-04 count)
- Normalise number formats before grepping (HTML entities: `&minus;`, `&times;10<sup>`, unicode superscripts, thin spaces).
- Positive control: the 08-02 null must come out as an orphan on a pre-11-05 checkout (`git archive 3c5a3be src`) and as drained now.
- Negative control: a finding known to be drained by content (LLR Ġ/G, B4) must come out drained.
