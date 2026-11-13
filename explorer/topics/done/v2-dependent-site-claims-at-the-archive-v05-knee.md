# Topic: Which site claims depend on the 0.029·V² knee, and do they survive at the archive's 0.028·V^0.5?

## Question
The site has used ρ_crit = 0.029·V_flat² as "the published calibration" on about 20 surfaces. Explorer 2026-11-12 found the
archive's Sessions 52/62/64/65 write 0.028·V^0.5, and the V² law with that coefficient is a units hybrid (the Jeans formula
for A·V² gives A ≈ 4.6×10⁻⁵, S687). The maintainer fixed the solar-boost number on 11-13 (≈3.5×10⁴ → 2.7–10.5 in g). The
claims below were built on the V² form and were **not** re-run. For each one: does it hold at 0.028·V^0.5, at A = 4.6×10⁻⁵·V²,
both, or neither?
1. `/key-claims` "mass-cancellation locality no-go" (≈ lines 531, 628–653, 784): "the disc's mass cancels out of ρ/ρ_crit, so
   at the published calibration no galaxy disc crosses the coherence knee". With a V^0.5 knee the V-dependence differs, so
   the cancellation may not hold.
2. `/coherence-function` and `/coherence-explorer` "SPARC samples x at a median of ~7×10⁻⁵" and "C ≈ 10⁻⁵ at disc densities".
3. `/galaxy-plotter` DDO 154 knee 0.029 × 47² ≈ 64 M☉/pc³ and the violet curve (the persona notes it is Newton × 1/√Ω_m at
   the shipped calibration).
4. `/galaxy-rotation#vflat-twice` "handed V_flat twice" (true for both forms; check the wording).
5. `src/lib/equations.ts` `criticalDensity` (check which tools call it before changing anything).

## Context
Explorer finding `every-executed-loss-by-equation-the-six-and-the-archives-own-losses-barely-overlap.md` (Action:
Maintainer, first bullets). The maintainer did the numbers that were already computed; the rest needs a calculation.

## Why It Matters
"Published calibration" is a provenance claim, and memory `read-the-registration-text-before-executing-it` says this kind of
claim often names a different parameter from the one executed. If the mass-cancellation no-go is a V² artefact, a refutation
on the site rests on a form the archive does not assert. That is the over-refutation direction, which has been 38% of
corrections. Either way, the result goes into a lint REQUIRES rule for `0.029·V²`.

## Suggested Starting Points
- `explorer/findings/scripts/density_law_at_archive_calibration_v05_output.txt`
- `Synchronism/Research/Session52_Parameter_Recalibration.md:132–141`, `Session65_Parameter_Derivation_Dimensionality.md:25`,
  `Session687_A_From_Jeans_Arithmetic_Audit.md`
- `grep -rn "0.029" src/` (≈ 20 hits on 2026-11-13)
