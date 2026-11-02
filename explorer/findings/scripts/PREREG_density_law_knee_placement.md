# PREREG — Where does the density law's knee sit, and does its SPARC verdict depend on A?

Explorer 2026-11-02. Written and committed before `density_law_knee_placement.py` exists.
Merges two queued topics: `density-law-with-a-free-does-the-knee-enter-the-discs.md` and
`density-keyed-sparc-free-fit-gamma-0046-boundary-or-interior.md`.

## What was read before writing this (not predictions)
- `two_pillars_head_to_head_fit_output.txt` (2026-08-24): the +2843 arm (A1) has **ρ_crit free as a global constant**,
  best fit ρ_c = 2.979e-25 kg/m³ = **4.4×10⁻⁶ M☉/pc³**, γ = 0.0462. The A·V² arm (A2) has A free:
  A = 2.625e-30 kg m⁻³ (km/s)⁻² = 3.9×10⁻¹¹ M☉ pc⁻³ (km/s)⁻², ΔBIC +3309.
- So the +2843 is **not** a fit at A = 0.029. The topic's premise (and /coherence-explorer's preset label
  "fixed A = 0.029 … only γ/A identified") conflates the plotter's calibration with the ΔBIC pipeline.
- Expected consequence (arithmetic, not yet run): disc densities ~10⁻²–1 M☉/pc³ give x = ρ/ρ_c ~ 10³–10⁵, so
  γ ln(1+x) ~ 0.3–0.55 and C ~ 0.3–0.5: the fit sits in the **logarithmic** regime, not C ≈ γx.

## Arms (frozen loader `two_pillars_head_to_head_fit.build()`, h = 0.3 kpc, Υ_d 0.5, same likelihood, σ_int always free)
- B   : acceleration-keyed C_g (identity −2lnL −7564.2)
- F   : density, global ρ_c free (identity −2lnL −4721.7)
- F2  : density, ρ_c = A·V_flat², A free (identity −4255.2)
- K_f : ρ_c = A·V², A fixed at the formula value 4.6×10⁻⁵ M☉ pc⁻³ (km/s)⁻², γ free
- K_p : ρ_c = A·V², A fixed at the published 0.029, γ free
- R_f : γ = 2 (registered), global ρ_c free
- R_p : γ = 2, A = 0.029 (the published law; σ_int only)
- C0  : constant boost g_obs = g_bar/C0 (no density at all), C0 free
- Profile: 2-D grid over (log₁₀ γ ∈ [−4, 1], log₁₀ ρ_c[M☉/pc³] ∈ [−12, 3]), σ_int profiled.
BIC = −2lnL + k ln N, N = 2438. Galaxy-level width: analytic sqrt(N_gal·var(Δ_i)) (matched the 2000-rep bootstrap to 0.1%
for the +2843 on 10-18); bootstrap only if a verdict hinges on it.

## Predictions
- **P1** (knee placement): at F, ≥ 95% of points have x = ρ/ρ_c > 100 (knee below every disc, not inside them).
- **P2** (formula A): K_f is worse than B by ΔBIC > +2843 (i.e. no better than F), and worse than F2 by > 100.
- **P3** (density carries information vs a constant): ΔBIC(C0 − F) > +100.
- **P4** (identifiability at the fit): the F optimum is interior in γ (not at a bound); the (ln γ, ln ρ_c) correlation
  from the profile Hessian is positive and > 0.9 (degenerate valley γ·ln(ρ̄/ρ_c) ≈ const).
- **P5** (knee inside the discs): the best profile point with ρ_c ∈ [10⁻², 1] M☉/pc³ is worse than F by ΔBIC > 300.
- **P6** (registered γ = 2): R_f worse than B by > +2843.

## What would change site text
- P1 holds → "fixed A = 0.029 / C ≈ γx / only γ/A identified" (coherence-explorer preset) is wrong about the +2843 fit;
  "γ → 0.046 switches density dependence off" must be restated as an exponent (d ln C/d ln ρ at the fit).
- P2 holds → "the density law fails at every calibration, including its own formula's" becomes printable.
- P3 refuted (C0 ≈ F) → the density law's fit is a constant boost; density carries nothing — a stronger negative.
- P5 refuted → a knee inside the discs is near-competitive; the +2843 would be about placement.
