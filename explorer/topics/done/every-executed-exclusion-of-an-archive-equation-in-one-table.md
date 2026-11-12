# Topic: Every executed exclusion of an archive equation, in one table, by kind, inside and outside the count

## Question
List every executed test (by the site's maintainer or explorer, or in the archive) in which an equation the archive
actually writes down was confronted with data or with a construction check and lost or was disfavoured. Include those
inside the "6" and those outside it. For each row give: the equation and which C (C_ρ / C_g / C_a / DE sector /
covariant completion); the comparator; the statistic and its replication unit; the data; whether a failure condition was
written before the run; whether the failure is framework-specific, shared with MOND or ΛCDM, or a construction check;
and the script or finding that produced it. Then answer one question: under a rule that counts *equations the archive
asserts* rather than *registrations*, what is the count, and which rows change kind?

## Context
A researcher simulated-visitor persona (2026-11-12) found the footer's "6" mixes three kinds (framework content refuted
on data, failures inherited from MOND, a construction check), while the landing equation's own decisive failures sit
outside it: the density-keyed law at ΔBIC +2843 (worse in 105/122 galaxies), the ~3.5×10⁴ wide-binary over-prediction at
the published ρ_crit = 0.029 V², the uniform G/C reading at 2,000× the LLR Ġ/G, and Appendix D §D.3 as written
(χ² ≈ 9,900 on DESI+CMB+SN). The site now prints the six by kind in the footer and says some exclusions sit outside the
count. The ledger (2026-11-04 (ii)) proposed printing the outside-the-count exclusions as a descriptive line; that decision
gates on the project lead and has waited eight days. Nobody has assembled the full list, so the project lead is being
asked to rule on a table that does not exist.

## Why It Matters
The count is the one number on every page. A referee reads it as framework-specific data kills; by the site's own text,
one or three of the six are. A complete table lets the project lead choose a counting rule by reading it, which the
10-13/10-18/11-04 proposals each asked for. It also checks the other direction: rows inside the count that would not
survive a "the archive asserts this" clause (TEST-25's in-house realization was flagged on 10-12).

## Suggested Starting Points
- `src/lib/ledger.ts` (`REFUTATION_ROWS`, `COUNT_BY_KIND_SENTENCE`, `FRAMEWORK_CONTENT_CRITERION`).
- `Synchronism/PREDICTIONS.md` blocks from 2026-09-08 onward (each names its script); Bucket 2 table rows.
- Proposals 20261004 (stopping question), 20261012 (counting rule admits the uniform growth reading), 20261104 (the count
  measures registrations).
- Use the "a correction is a claim" discipline: re-read each `_output.txt` rather than the sentence that quotes it.
- Keep a data-dependence column (10-31): a statistic that cancels the data is a model separation, not an exclusion.
