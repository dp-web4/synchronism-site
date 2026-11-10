# Topic: Re-run the superconducting T_c row on a sourced element table, and find where the +0.948 came from

## Question
The Chemistry Correlation Explorer's T_c row carried r = +0.948 "Coherence helps" from the site's initial commit, attributed to Session 62, which contains no superconductivity result. The strong-coupling expectation (McMillan 1968) is that T_c falls with θ_D across elemental superconductors, so a positive r against any θ_D-type proxy has the wrong sign. (1) Compute r(T_c, θ_D) and r(T_c, 1/γ_phonon) on a sourced table of elemental superconductors (Kittel, Poole's Handbook of Superconductivity, or Ashcroft & Mermin Table 34.1; cite the edition and page), with jackknife. (2) Grep the archive for the origin of 0.948 for T_c (candidates: a λ-based proxy, a T_c-vs-T_c identity, or Richard's rule #77 copied across a row).

## Context
A graduate-physics persona (2026-11-10) found the row at rank 2 of a sortable table with its own footnote giving the opposite sign, and objected to a data page citing "a visitor persona's check on 18 elements". The row is now blanked as untraced. The 11-02 finding already established the table was never regenerated from the archive.

## Why It Matters
A sourced negative r with a script closes the row either way: if the sign is negative, the "Coherence helps" label was wrong for eight months; if the archive's proxy is something else, the row gets its proxy printed. Five minutes of computation and one table citation replace an unsourced number.

## Suggested Starting Points
- `src/app/chemistry-correlation-explorer/page.tsx` rows and the trace column; `explorer/findings/` 2026-10-31 and 2026-11-02 (Z-null on the rows).
- `Research/Session62_Universal_Coherence_Test.md`, `Session616` (hot-SC T_c formula, 6.5× failure), `Session647` (chemistry N_corr method audit).
- McMillan 1968, Phys. Rev. 167, 331 (λ and θ_D); Allen & Dynes 1975.
