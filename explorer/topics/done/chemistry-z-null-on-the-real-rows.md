# Topic: Find the 23 chemistry rows and run the polynomial-in-Z null on real data

## Question
Which elements or materials make up the 23 rows on /chemistry-correlation-explorer (sessions #47–#130)? On those rows,
does a 2-parameter polynomial in Z reach the published r values (0.982 sound velocity, 0.979 electronegativity, …),
or does it fail because the properties are periodic in Z?

## Context
The 2026-05-10 null (`explorer/findings/chemistry-null-model-analytic.md`) used synthetic √Z / log Z / Z^(1/3) curves on
Z = 1–50. A graduate-physics visitor persona (2026-10-31) pointed out that atomic volume vs Z is the Lothar Meyer
periodicity curve, so a smooth polynomial in Z cannot reach r ≈ 0.98 on a full-table sample. The site now says the
null was never run on the rows. The Reparametrization verdict stands for another reason: the r values are post-hoc fits
in a γ proxy that contains θ_D.

## Why It Matters
If the rows turn out to be a restricted sample (one period, or hand-picked metals), the site should say so. If they
span the table, the Z-polynomial null *fails* on real data. Then the cheap explanation of the high r values is gone and
only the θ_D-proxy explanation is left, and that is testable too: correlate the property with θ_D alone. Either outcome
corrects a public sentence. Productively wrong is fine.

## Suggested Starting Points
- `../Synchronism/Research/Chemistry/` (Phase2_Synthesis.md, Framework_Summary.md; session files #47, #62, #95, #102, #110)
- For the θ_D-only null: published Debye temperatures (Kittel table) vs sound velocity for the same materials
- If the row list cannot be recovered, say so. "Not reproducible" is a finding.
