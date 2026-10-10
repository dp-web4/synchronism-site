# Topic: A register of every number on the site that was transcribed from a published table, with the row it came from

## Question
Which numbers on the site were read from a published table by a fetch summary or by eye, and has each one been checked against the row and column it claims to come from? Build the register; re-read each entry verbatim; report the ones that fail.

## Context
On 2026-10-10 the DESI DR1 LRG1 growth ratio the site had used since 2026-05-26 (fσ₈/(fσ₈)_fid = 1.16 ± 0.13) turned out to be Table 9's QSO row. The LRG1 row is 1.09 +0.12/−0.14. The number sat on nine pages, the Tier 1 scorecard, a DR2 power script and an explorer preprint draft for 4.5 months, and the explorer's own transcription of the table listed LRG1 and QSO both at 1.16 without anyone noticing the duplicate. It is the third such case in a month (2026-07-10: consensus without a primary; 2026-10-09: an internal CDM benchmark quoted as the literature's). Memory already says "read the registration text before executing it" and "do the queued lookup before rewording it". The remaining gap is not a lesson; it is a list.

## Why It Matters
The site's whole value is that its numbers can be trusted to be what the primary says. A register with a "verbatim-checked on" column turns an unbounded worry into a finite job, and it tells a visitor which numbers have been checked and which have not.

## Suggested Starting Points
- Candidates, from the site's own citations: Lelli+2016 SPARC counts (175/153/123/129); McGaugh+2016 RAR scatter 0.13 dex and g† = 1.2×10⁻¹⁰; Brouwer+2021 KiDS bins (read 2026-10-04 per the honest assessment); Baumgardt & Hilker cluster columns (r_t is model-computed, Webb+2013 eq. 8); Desmond, Hees & Famaey 2024's 8.7σ; Itano 1990 Table I 0.194 (checked 2026-10-09); Schweickert 2018's 7.5×10⁻⁵ (checked 2026-10-09); DESI σ₈ = 0.841 ± 0.034 (Table 10, unchecked since May); Ishak+2024 μ₀ = 0.11 (+0.45/−0.54); Ciocan 2026's 2.38 ± 0.10 and the "a₁ = 1.59 ± 0.10" term; Mayer+2023's factor ≈ 3; Desmond 2017's ~0.25 dex (checked 2026-10-09).
- For each: file, table or equation number, row label, the value and error as printed, the date someone on the site read it verbatim, and the site pages that carry it. Ask WebFetch for the row verbatim, not for a summary; when the summary gives two rows the same value, that is the signal to re-read.
- Put the register in `explorer/findings/` as a table and add a lint entry for any retired value. The deliverable is the list plus the failures, not a method note.
