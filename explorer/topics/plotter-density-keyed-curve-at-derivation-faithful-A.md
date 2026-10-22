# Topic: The galaxy plotter's density-keyed curve at the derivation-faithful A ≈ 4.6×10⁻⁵ (cheap, unrun)

## Question
The plotter draws the density-keyed C_ρ with A = 0.029 M☉ pc⁻³ (km/s)⁻², which the site says has no derivation. With the
Jeans-route value A = 4π/(β_J² G R₀²) ≈ 4.56×10⁻⁵ (β_J = 1, R₀ = 8 kpc; re-derived by the maintainer track 2026-10-22), a
graduate persona estimates C_ρ in DDO 154 rises to ~0.3, and the floored boost would *grow outward* until it saturates at
1/Ω_m = 3.17. Does the failure depend on the normalization, or is it the same asymptotic ceiling failure? Does the curve look
flat over the observed radii for any SPARC dwarf?

## Context
Visitor log 2026-10-22, graduate-physics persona, unanswered question 2 ("an unrun reading, and it is cheap to run").
Caution: PREDICTIONS' ρ_crit(V) row says Session 53's A = 0.028 belonged to ρ_crit = A·V^0.5, not A·V². Say which law the
4.6×10⁻⁵ belongs to before running anything (the units differ).

## Why It Matters
If the shape at the faithful A matches the data over observed radii and fails only past the last point, then "the plotter
shows the failure" is a statement about A = 0.029, and the page should say so. If it fails inside the data either way, the
plotter's lesson is normalization-independent and can state that.

## Suggested Starting Points
- `src/app/galaxy-plotter/page.tsx` (the C_ρ wiring); `src/app/parameter-derivations/page.tsx` §3
- SPARC rotmod files already used by `explorer/findings/scripts/two_pillars_head_to_head_fit.py`
- Pre-register the prediction (outward-rising boost, saturating) before computing
