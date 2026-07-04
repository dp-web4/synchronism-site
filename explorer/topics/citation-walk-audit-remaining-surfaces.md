# Topic: Citation-Walk Audit of Remaining Compilation Surfaces

**Seeded**: 2026-07-04 (maintainer, HIGH)
**Origin**: 2026-07-03 explorer finding (`research-contributions-top3-prior-art-sweep-zero-survive.md`) proposed a "citation-walk" audit as a new A2ACW failure-taxonomy clause, but only ran it reactively on the one page (`/cdm-discrimination`) a visitor persona happened to flag. The method itself has not been run systematically.

## The Pattern (two confirmed instances so far)

1. **TEST-04a direction framing** (2026-07-01/02): a maintainer edit re-inverted a verdict the 2026-06-24/07-01 explorer sessions had already corrected — caught only because a visitor persona re-derived it from primaries a day later.
2. **CDM σ_int "below CDM"** (2026-07-03/04): the site carried Session #606's premature reading for months after the *same research program's* Session #610 explicitly retracted it as premature and gave a different verdict (CDM-consistent, z=+0.5). Caught by the 2026-07-03 explorer's prior-art sweep, independently re-flagged by 2026-07-04's visitor Pass 4.

Both are **retraction-survival** failures: a compilation surface (site page, `navigation.ts` description, a badge) cites a number whose *own source session* was later revised or retracted in-archive, and nothing walked the edge from citation to current source truth.

## The Question

**Is retraction-survival systemic across the site's remaining ~44 uncharacterized "research contributions," or was CDM σ_int an isolated case?**

A "citation-walk" audit would: for every headline number/claim quoted on a compilation surface (site pages, `navigation.ts`, `prediction-tracker`), trace it back to its origin session in the Synchronism research archive, and check whether *that session or a later one* revised or retracted the claim. This is mechanically different from a prior-art sweep (which asks "does external literature already have this?") — it asks "does the framework's own archive still agree with itself?"

## Why This Might Matter More Than It Sounds

- Prior-art sweeps (9/9 demotions so far) test novelty against the *outside* literature — a slow, effortful check per claim.
- A citation-walk audit tests internal consistency against the *framework's own record* — potentially much cheaper per claim (grep the archive for the claim's session ID, check for later sessions revising it) and it has now caught 2/2 times it's been tried informally.
- If retraction-survival is common in the remaining 44, the honest characterization of "uncharacterized surface" understates the actual defect rate — some fraction may already be self-contradicted by the archive without needing any external comparison at all.

## Suggested Approach

1. Take the remaining 44 contributions listed in `/publication-roadmap` (or the Session #615 final accounting).
2. For each headline number, find its origin session number in the Synchronism archive (GitNexus `query`/`cypher` can search session titles/content).
3. Check whether any later session revises, qualifies, or retracts that number.
4. Report: how many of the 44 show retraction-survival vs. how many are actually current with their own archive.

## Open Threads

- Does the retraction-survival rate differ by contribution "arc" (chemistry vs. SPARC vs. ALFALFA-SDSS vs. CDM)? The two known instances are both in the cosmology arcs, which had the highest "discovery rates" (71.4%) — arc enthusiasm may correlate with under-checked verdicts.
- Could this audit be partially mechanized (a script that extracts session-ID citations from site pages and cross-references archive dates) rather than run by hand per-claim?
