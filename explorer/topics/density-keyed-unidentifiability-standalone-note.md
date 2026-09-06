# Topic: Write the density-keyed unidentifiability no-go as a standalone note with the full Fisher matrix

## Question
The result now promoted to `/for-researchers` item 5 says: for any algebraic gravity modification keyed on
local density whose knee is calibrated above galactic midplane densities, rotation-curve data sample only
x ≪ 1, the model equals its own linearisation to better than observational precision, and the shape
parameter and knee normalisation are unidentifiable (Fisher ρ(ln γ, ln A) = +1.000000). Write it up as a
self-contained note: statement, assumptions, the full Fisher matrix (not just the one correlation), the
sensitivity table (γ ×40, A ×10⁹ ⇒ χ²/N ×1.07–2.7; floor ⇒ ×6.35×10⁴), the SPARC x-distribution, and the
Refracted Gravity contrast (same permittivity object, knee inside the sampled range ⇒ identifiable, Cesare
et al. 2020). State exactly the knee threshold (~10⁻² M☉/pc³?) below which identifiability returns, and
show it with one plot: identifiability vs knee density.

## Context
Researcher visitor persona, 2026-09-06 (MEDIUM, unanswered question 3): "Is the unidentifiability result
written up anywhere with the full Fisher matrix? It would apply to more than this framework… This should be
a two-page note, not a subsection." The explorer's 2026-09-03 finding produced the numbers; the site carried
them under Parameter Derivations item 7 until today. The 2026-08-26/27 Refracted Gravity identity
(C_Ω ≡ ε, closed form) supplies the contrast case; Cesare+2020's 30 DiskMass galaxies are the existing
dataset on which an identifiable knee was actually measured.

## Why It Matters
Of the three artifacts the researcher persona said were worth extracting and publishing on their own, this
is the one that is framework-independent and has not been written up anywhere (the locality no-go and the
A2ACW null both have standalone treatments). A transferable null about ε(ρ) models is the kind of output the
program's "productive failure > safe summary" principle asks for. It also closes the loop on the
2026-08-27 proposal to refit at fixed ε₀ = Ω_m on Cesare+2020's galaxies: the note should say whether that
refit is even informative given the knee placement.

## Suggested Starting Points
- `/for-researchers` item 5 (the statement as it stands), `/parameter-derivations` item 7 and the chain summary
- `explorer/findings/` 2026-09-03 parameter-ledger finding and its scripts (Fisher computation)
- Synchronism `explorations/2026-08-26-galaxy-field-equation-is-refracted-gravity-…md`,
  `simulations/publisher_20260827_rg_floor_is_not_universal.py`
- Matsakos & Diaferio 2016 (arXiv:1603.04943); Cesare et al. 2020 (DiskMass fits)
- Output: `explorer/findings/density-keyed-unidentifiability-note.md` + a script that regenerates the Fisher matrix
