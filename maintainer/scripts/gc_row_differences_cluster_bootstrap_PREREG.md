# PREREG — GC table scored on row differences; EFE-free compander at γ ≈ 0.9

Maintainer, 2026-10-30. Written and committed before the script exists.

## Why
A simulated-visitor researcher persona (visitor log 2026-10-30, Pass 4, two HIGH items):
1. The GC fork's decision rule uses MOND+EFE's own residual as the pass bar, so MOND+EFE passes by
   construction; the ±0.027 is shared across rows and no covariance was computed. Score row
   *differences* with a cluster bootstrap and call the fork a ranking until then.
2. The external-field-free (EFE-free) compander corner γ ≈ 0.87–0.95, which survives SPARC at galaxy
   level and the planetary perihelia, has never been run on the GC statistic (only simple μ at γ = ½
   with EFE off was run).

## Method
Same selection, Jeans solver, King (modified Hubble) mass model, outer-factor-3 slope and weights as
`gc_rg_permittivity_form_check.py` (which reproduced the published table's numbers). For each law,
keep the per-cluster mismatch d_i = slope_obs − slope_pred. Row statistic = weighted mean (weights
1/e_obs²). Differences between rows are computed per cluster, then the weighted mean of the paired
difference. Uncertainty: cluster bootstrap (resample the 42 clusters with replacement, 4000 draws, seed 1).

Laws: Newton; MOND simple μ + EFE (g_ext = 233²/R_GC); MOND simple μ EFE off; density-keyed floored
γ = 0.489 and γ = 2 at knee 0.161 M☉/pc³; **compander, EFE-free, algebraic**: g solves
g·tanh(γ ln(1 + g/a₀′)) = g_N with a₀′ = γ × 1.1×10⁻¹⁰ m/s² (identified scale a₀′/γ held fixed, as in
the 2026-10-04 block), γ ∈ {0.5, 0.87, 0.9, 0.95}.

## Predictions (before running)
- **P1 identity control:** Newton −0.057, MOND+EFE −0.093, MOND EFE-off −0.245, density γ = 0.489
  −0.211, γ = 2 −0.111 reproduced to ±0.003. If not, the run is void.
- **P2:** the bootstrap s.d. of row *differences* is smaller than 0.027 (shared mass models): predict
  0.008–0.020.
- **P3:** compander EFE-free at γ = 0.5 lands within 0.03 of MOND EFE-off (−0.245), since at γ = ½ it is
  simple μ (with a₀′/γ = 1.1 vs 1.2×10⁻¹⁰, a small shift).
- **P4:** compander EFE-free at γ = 0.87–0.95 has residual between −0.17 and −0.25 and differs from
  MOND+EFE by > 3σ (bootstrap). I.e. the GC table closes the corner.
- **P5:** density γ = 2 vs MOND+EFE is not separable (< 2σ). The "marginal" verdict is a ranking, not
  a separation.
- **P6 (uncertain):** Newton vs MOND+EFE separated at ≥ 2σ. I give this ~50%.

## Decision rule (fixed now)
A row is **separated** from another iff |paired difference| > 2σ_boot. The fork is called a *ranking*
for any pair that is not separated. The EFE-free corner is **closed by GCs** iff every γ in
{0.87, 0.9, 0.95} is separated from MOND+EFE in the worse direction *and* from Newton in the worse
direction. Otherwise it stays open on this statistic.

## Not addressed
Escapers, anisotropy, L3, mass-model refits per law (09-19 showed −7% on the ratio), EFE refraction.
