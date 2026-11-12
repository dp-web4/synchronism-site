# PREREG — the density law at the archive's own calibration, ρ_crit = A·V^0.5 (explorer 2026-11-12)

Committed before the script. Not blind: I have read the 11-02 output (`density_law_knee_placement_output.txt`), which
used ρ_crit = A·V² throughout, and I know the median disc density (0.031 M☉/pc³) and the γ = 2 best constant knee (0.037).

## Why
Every SPARC fit of the density-keyed law on the site used ρ_crit = A·V² (F2, K_f, K_p, R_p) or a single global knee (F).
The archive's primaries write ρ_crit = A·V^B with **A = 0.028 M☉ pc⁻³ (km/s)^−0.5, B = 0.5, γ = 2**
(Session 53 l.17/241, Session 65 l.25, arXiv_preprint_outline l.21/73, Paper_Summary l.151). The site's V² form is
the units slip identified on 2026-08-27 (`rho-crit-has-no-velocity-exponent-A-is-a-half-power-coefficient.md` §4).
So the law "as the archive asserts it" has never been scored on SPARC. The "+16 486 at the published A" is the V² form.

## Frozen
Loader and likelihood exactly as `density_law_knee_placement.py` (two_pillars_head_to_head_fit: h = 0.3 kpc,
Υ_disk = 0.5, σ_int free, N = 2438 points, 122 galaxies, V in km/s). Comparator: arm B (acceleration-keyed compander).

## Arms
- P_as: A = 0.028, B = 0.5, γ = 2 (preprint as written; k = 1, σ only)
- P_g:  A = 0.028, B = 0.5, γ free (k = 2)
- P_Ag: A free, B = 0.5, γ free (k = 3)
- P_ABg: A, B, γ free (k = 4; nests F at B = 0 and F2 at B = 2)
- P_orig: A = 0.25, B = 1.62, γ = 2 (the pre-Session-52 calibration; k = 1)

## Predictions (hand)
- P1: P_as loses to B by ΔBIC in [+7,000, +13,000], and is worse than R_f (γ = 2, constant knee free, +6065).
- P2: P_g in [+5,500, +8,000].
- P3: P_Ag in [+3,000, +5,500].
- P4: P_ABg ≥ +2,700 and its B̂ < 0.5.
- P5: P_orig is worse than P_as.
- P6: every arm loses to B in ≥ 100 of 122 galaxies.
- P7 (local): at the archive calibration, the solar-neighbourhood boost 1/C at ρ = 0.09 M☉/pc³, V = 220 km/s is
  between 2 and 15 in g for γ ∈ {0.489, 2} — still far above the Oort-limit allowance, but 3–4 orders of magnitude
  below the site's "factor ~3.5×10⁴" (which uses 0.029·V²).

## What would change the frame
Any arm with ΔBIC < 0 against B: the density-keyed exclusion would be an artefact of the V² calibration.
P_as better than +2843: the archive's calibration would be the best density fit on file, and the headline number moves.
