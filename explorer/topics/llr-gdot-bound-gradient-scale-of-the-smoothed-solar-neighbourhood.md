# Topic: The LLR Ġ/G no-go is now a numbered citable result. Measure the one assumption it rests on.

## Question
What is |v_⊙ · ∇ ln ρ_s| for the matter density actually smoothed on ℓ = 1, 3, 10, 30, 100 pc around the Sun, using a real census of the solar neighbourhood (Gaia within 25–100 pc for stars; a local ISM model for gas), and what transferable bound |d ln G_eff / d ln ρ_s|(ℓ) follows from lunar laser ranging?

## Context
The 2026-10-27 researcher persona asked why the lunar-laser-ranging exclusion of ambient-density-keyed G (ledger 2026-09-24; `explorer/scripts/density_keyed_gdot_solar_motion.py`) was not on the citable register while a withdrawn-mechanism DESI null was. It is now item 6 on /for-researchers. The card states two assumptions: ℓ ∈ [1, 10] pc, and a density gradient scale ~ℓ. The second was argued, not measured: it holds if the discrete stellar neighbourhood is inside ρ_s (nearest stars ~1 pc apart). If ρ_s is a smooth stars-plus-halo density on ≥ 100 pc, the gradient scale is the disc scale height and the bound weakens by ~10², still six orders. Nobody has computed the curve in between.

## Why It Matters
The register's first item should carry a measured assumption, not an argued one. The result is the program's most transferable negative: a referee can apply it to any proposal whose G is a function of smoothed ambient density. The bound as a function of ℓ turns "eight orders at 1–10 pc" into a statement a reader can use at their own ℓ. It also closes the one escape the card names only verbally: at what ℓ does the solar gradient become so small that the LLR bound no longer binds a law with O(1) sensitivity? That ℓ is a lower bound on the smoothing length any surviving density-keyed law must declare (the 09-15/09-24 bracket: planets need ℓ ≳ 30 AU; unsaturated laws pass only at ℓ ≲ 0.1–0.3 pc).

## Pre-register before running
- Prediction 1: |v·∇ln ρ_s| falls roughly as ℓ⁻¹ from ~2×10⁻⁵ yr⁻¹ at 1 pc to ~2×10⁻⁷ yr⁻¹ at 100 pc, then flattens at the vertical scale-height value (~v_z/h ≈ 7 km/s / 300 pc ≈ 2×10⁻⁸ yr⁻¹).
- Prediction 2: the LLR bound on |d ln G/d ln ρ_s| stays below 10⁻⁵ for every ℓ ≤ 1 kpc. If it does, "O(1)-sensitive G is dead by LLR at every astrophysically sensible ℓ" is the citable sentence.
- Control: run the same gradient on a uniform density (should give zero) and on a single point mass at 1 pc (should reproduce the ℓ⁻¹ scaling analytically).

## Suggested Starting Points
- /for-researchers#gdot-llr (the new card, with the two assumptions)
- /tier-1-existing#TEST-02 (the original "density-branch exclusion by rate")
- `explorer/scripts/density_keyed_gdot_solar_motion.py` (the 2026-09-23 run, PREREG site `80b8c9c`)
- Synchronism `PREDICTIONS.md` blocks 2026-09-15, 09-24, 10-20 (smoothing-length bracket; L3 carry-over)
- Hofmann & Müller 2018 (LLR Ġ/G = (7.1 ± 7.6)×10⁻¹⁴ yr⁻¹); Gaia Catalogue of Nearby Stars (GCNS, Gaia Collaboration 2021) for the census
