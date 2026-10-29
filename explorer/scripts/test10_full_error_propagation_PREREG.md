# PREREG — TEST-10 permissive-cap exclusion under distance, inclination, M/L (and gas) nuisances

Written 2026-10-29 before `test10_full_error_propagation.py` was run.

## Question
At B_max = Ω_m/Ω_b = 6.39 (the most permissive ceiling on file), which SPARC discs still demand B > B_max once SPARC's
own distance (e_D) and inclination (e_Inc) errors, stellar M/L, and the per-point velocity errors are propagated?
Specifically: NGC 3741 and ESO 444-G084 (the two "M/L-unconditional" galaxies, ledger 2026-07-30), and the 28/153
face-value outer-3 exceeders.

## Scalings (exact, from SPARC's construction)
- V_obs is deprojected: V_obs(i') = V_obs · sin i / sin i'. eV_obs in SPARC excludes the i and D errors (they are
  separate priors in Li, Lelli, McGaugh & Schombert 2018).
- V_gas², V_disk², V_bul² ∝ D at fixed angular radius (M ∝ D², r ∝ D). So B = V_obs²/V_bar² ∝ D⁻¹ · sin⁻² i at fixed
  Υ; g_bar is D-independent.

## Sample
TEST-10 script cuts (Q ≤ 2, i > 30°, all V_bar² > 0 on the outer 3) → 153 discs.

## Statistic A — Monte Carlo of the outer-3 boost (registered as the face-value statistic's error bar)
B_out = ⟨V_obs²⟩_w / ⟨V_bar²⟩_w over the outer 3 points, weights 1/eV². 20 000 draws: V_obs,k ~ N(V, eV) per point;
D ~ N(D, e_D) truncated at 0.2 D; i ~ N(i, e_i) clipped to [10°, 90°]; log10 Υ_disk ~ N(log10 0.5, 0.1), Υ_bul = 1.4 Υ_disk.
**Survives A** iff P(B_out > 6.39) ≥ 0.977 (one-sided 2σ).

## Statistic B — profile likelihood against the most permissive model the cap allows (registered as the verdict)
The cap permits any V_pred² ≤ B_max V_bar² at every radius. Most permissive model: one-sided residuals
r_k = max(0, V_obs,k(i) − √(B_max V_bar,k²(D, Υ))) / eV_k over **all** radii. Penalty
χ²(D, i, Υ) = Σ r_k² + ((D − D₀)/e_D)² + ((i − i₀)/e_i)² + ((log10 Υ − log10 0.5)/0.1)², minimised over (D, i, Υ).
Secondary: also free gas scale s_g with prior (log10 s_g / 0.1)² (HI flux calibration; registered at 0.1 dex).
**Survives B** iff χ²_min ≥ 4; **robust** iff χ²_min ≥ 9. Reported with and without the gas nuisance.
Also reported (descriptive, no threshold): the gas multiplier s_g needed to reach χ² < 1 with D, i, Υ at their best.

## Predictions (mine, before running)
1. NGC 3741 survives B robustly (χ²_min ≥ 9) with and without the gas nuisance (i = 70 ± 4 gives sin² leverage ≈ 5%).
2. ESO 444-G084 FAILS A and B at 2σ: i = 32 ± 6° gives B ∝ 1/sin² i a ~30% swing per σ, and its face-value B is near the cap.
3. Of the 28 face-value outer-3 exceeders, 5–10 survive B (χ²_min ≥ 4).
If (2) holds, the rotation-curve leg of the count floor rests on one galaxy (NGC 3741) plus lensing.
