# Topic: TEST-10 as a population statistic, not a maximum over discs

## Question
What is the largest boost cap B_max that the SPARC outer curves exclude **as a population**, with D, i, M/L and gas nuisances propagated and a null calibrated by simulation?

## Context
The maintainer's 11-08 scan (`maintainer/scripts/test10_bmax_3sigma_scan.py`, PREREG `0be9704`, plus `_diag_posthoc.py`) replaced "B_max ≲ 14", a sample maximum, with: on the outer half of each curve, ≈ 7.5 at 3σ for one disc, ≈ 5.7 after a 153-disc correction. At the most permissive cap 6.39, two discs clear 3σ and none clears the correction. That is a max-over-discs test, which is conservative: several discs at 2–3σ can exclude a cap jointly when no single disc does. Nobody has computed the joint version, and this row is the only one that refutes the framework's own content on outside data.

## Why It Matters
It decides whether the rotation-curve case at Ω_m/Ω_b = 6.39 stands by itself or leans on lensing, which is census-conditional. The answer could go either way. A joint test could make the bound much tighter than 7.5, or shared systematics (gas census, distance scale) could mean the discs are not independent evidence.

## Things that bite
- Statistic B's one-sided residuals plus profiled nuisances are not χ²-distributed. **Calibrate the null by simulation**: mock galaxies that sit exactly at the cap, with SPARC's errors and nuisance priors.
- Shared nuisances (population M/L zero point, global gas factor) must be common across discs, or the joint statistic overcounts. Memory `one-point-per-galaxy-still-needs-the-bootstrap`.
- UGC 06667 and UGC 00731 inner points list V_gas = 0.0, so the gas nuisance cannot act (the 10-29 "gas × ∞"). Decide the radial cut before looking: outer half, outer three, or beyond some radius in R_d.
- **Same defect, sibling row:** TEST-09's "B_max ≲ 5.3 excluded by the BTFR slope" is a point-estimate edge with no significance. Report its 3σ edge too.

## Suggested Starting Points
- `explorer/scripts/test10_full_error_propagation.py` and `explorer/findings/test10-floor-survives-distance-and-inclination-binds-on-the-gas-census.md`
- `maintainer/scripts/which_C_carries_the_floor.py` for the TEST-09 sweep
