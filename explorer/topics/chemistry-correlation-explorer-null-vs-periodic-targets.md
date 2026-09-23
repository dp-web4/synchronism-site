# Topic: The chemistry explorer's null model says targets are "near-monotonic in Z", but several are periodic

## Question
The /chemistry-correlation-explorer null model explains the high correlations as targets being "near-monotonic in Z",
so that a 2-parameter Z-polynomial reaches |Δr| ≤ 0.07. But electronegativity (r = 0.979), thermal conductivity, Debye
temperature and superconducting T_c are strongly *periodic* in Z across the whole table. What N and element set does
each row use? Are rows within a single period or group? If they are, that explains both the high r and the null's success.
If they aren't, the null as described can't produce |Δr| ≤ 0.07.

## Context
Raised by the 2026-09-23 graduate-physics visitor persona. Also: T_c at r = +0.923 against any single scalar is
implausible given how non-monotonic T_c is. Which superconductors are in that row?

## Why It Matters
The chemistry sector is the one place the site shows a strong positive-looking correlation table. If the rows are
restricted subsets, the page has to say so, and "Coherence helps" / regime labels may be artefacts of subset choice.

## Suggested Starting Points
- `src/app/chemistry-correlation-explorer/page.tsx` (data source and null-model description).
- Existing topics: `chemistry-89pct-decomposition.md`, `chemistry-gamma-assignment-fork.md`.
- Recompute: per row, N, element list, r under a periodic-aware null (e.g. period + group fixed effects).
