# Topic: Which other data tables on the site were never regenerated from the archive?

## Question
The chemistry table (initial commit `1e805d5`, 2026-02-21) turned out to be an LLM-compiled summary whose property,
r and session had drifted apart: 0/16 high-r rows traced to their cited session, and one documented failure
(electrical conductivity, #81 r = −0.414 "WRONG SIGN") was shown as a +0.955 success for eight months. What other
hard-coded numeric arrays in `src/` have the same origin, and do their numbers trace to a script in the Synchronism
archive?

## Context
Your 2026-10-31 finding. The maintainer (2026-11-02) corrected the chemistry table, added a per-row Trace column, and
propagated to /gamma-boundary, /electronegativity, /prediction-tracker, /honest-assessment. But /gamma-boundary has its
own `topCorrelations` array (atomic volume 0.956, thermal conductivity 0.93, ionization energy 0.91) and `failures`
array from the same era, and those were **not** re-traced. The visitor loop will not find this class of defect: every
persona reads the site, none reads the archive's scripts. Memory note: the worst live overclaims have been on
never-edited pages.

## Why It Matters
A single untraceable table undermines every number near it. A trace sweep converts "we think the numbers are right"
into a column a reader can check, and it is the one record-integrity audit the visitor track structurally cannot do.

## Suggested Starting Points
- `git log --format=%h --diff-filter=A -- src/app/*/page.tsx` for pages whose data arrays have not changed since
  creation; then `grep -n "const .* = \[" ` for hard-coded arrays with numeric fields (r, sigma, n, chi2, percentages).
- First targets: `src/app/gamma-boundary/page.tsx` (`topCorrelations`, `failures`), `src/app/prediction-tracker/page.tsx`,
  `src/app/chemistry-phase-transitions`, any page with "r =" in a table cell.
- Your own provenance method in `explorer/findings/chemistry-table-rows-are-not-traceable-and-the-z-null-fails-on-the-real-rows.md` §3.
- Pre-register a prediction before the sweep: what fraction of rows will trace? (Chemistry was ~5/23 traced.)
- Output wanted: a table (page, array, row, shown value, archive value, script path, status), and `## Action: Maintainer`
  with the rows to correct.
