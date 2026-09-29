# PREREG — The γ = 2 pin with per-galaxy nuisances free (explorer 2026-09-29)

Written and committed BEFORE `gamma2_pin_nuisance_refit.py` exists. The committed copy is authoritative.

## Why
Maintainer 2026-09-29 showed the +184 kill of the γ = 2 compander is N_eff-dependent (galaxy-level: 57 % of
galaxies, 1.6σ CV, ΔBIC ≈ 11 at N_gal). Seven galaxies carried 98 % of the net excess and three of them are
high-acceleration spirals where a mass-to-light error slides a whole curve. The frozen pipeline holds
Υ_disk = 0.5, Υ_bulge = 0.7, D and i at the SPARC nominal values and uses an unweighted log-space SSR. The
published method (Li, Lelli, McGaugh & Schombert 2018, A&A 615, A3; Desmond, Hees & Famaey 2024) fits each
galaxy in velocity space with its own errors and marginalizes Υ_disk, Υ_bulge, D and i under Gaussian priors.
The explorer's 2026-08-14 run showed a *global* Υ_disk sweep 0.4→0.6 moves γ̂ across 0.27→0.96 at constant rms,
so the free-γ optimum itself is not stable under the nuisance the pin's kill ignores. Nobody has run the pin
through the published method. This does.

## Data and pipeline
- `Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt` (per-radius V components) and
  `SPARC_Lelli2016c.mrt` (D, e_D, Inc, e_Inc per galaxy).
- Row cut for arms A–C: the frozen 2026-07-22 cut (e_Vobs/Vobs ≤ 0.10, V_bar² > 0 at nominal Υ), 2807 rows,
  166 galaxies. The row set is fixed once at nominal values and not re-cut when nuisances move.
- Models: implicit tanh-log compander g_bar = g_obs·tanh(γ ln(1 + g_obs/a₀′)) (the frozen inversion), and
  McGaugh ν as reference. γ grid {0.30, 0.35, 0.40, 0.45, 0.489, 0.50, 0.55, 0.60, 0.70, 0.80, 0.90, 1.00,
  1.20, 1.50, 2.00, 2.50, 3.00}; log10 a₀′ grid −10.6 → −9.2 in 0.05 dex, profiled per γ, with a parabolic
  refinement of the minimum.
- Nuisance model (arm C): R → R·(D/D₀); V_gas, V_disk, V_bul → ×√(D/D₀); V_bar² = V_gas|V_gas| + Υ_d V_d² +
  Υ_b V_b²; V_obs → V_obs·sin i₀/sin i and likewise e_V. Priors: log10 Υ_d ~ N(log10 0.5, 0.1 dex),
  log10 Υ_b ~ N(log10 0.7, 0.1 dex) (only where V_bul ≠ 0), D ~ N(D₀, e_D), i ~ N(i₀, e_i) — Li+2018's
  choices. Bounds: |Δlog Υ| ≤ 0.5, D ∈ [0.2, 3] D₀, i ∈ [5°, 90°]. If e_D or e_i is zero in the table, floor
  them at 10 % of D₀ and 3°, and print how many galaxies that touches.
- Statistic (arms B, C): χ²_g = Σ_pts ((V_obs′ − V_pred)/e_V′)² + prior terms; V_pred = √(g_pred·R′). Per galaxy
  and per (γ, a₀′) grid point the nuisances are profiled (minimized). Arm A uses the frozen unweighted
  log-space SSR with nuisances frozen. Arm B uses the velocity χ² with nuisances frozen (isolates the
  weighting change from the nuisance change).
- Everything downstream (profile in γ, a₀′ re-profiling, galaxy-block bootstrap, sign test) is computed from
  the stored per-galaxy table χ²_g(γ, a₀′), so the bootstrap re-profiles a₀′ and γ̂ per resample exactly.

## Identity controls (must reproduce before any new number is read)
- C1 (arm A): γ = 2 vs McGaugh on all rows, N·ln(SSR_2/SSR_McG) = +184 ± 2; free-γ optimum on the grid at
  0.489 (grid point) with N·ln(SSR_f/SSR_McG) + ln N = +7.1 ± 1.
- C2 (arm C at the prior means): setting every nuisance at its prior mean and skipping the optimizer must
  return arm B exactly (difference < 10⁻⁶ in χ²). This checks the nuisance plumbing (D, i, Υ scalings) is the
  identity at the nominal point.
- C3 (positive control of the optimizer): a synthetic galaxy generated from the γ = 2 compander with known
  nuisance offsets (Υ_d × 1.2, D × 1.1, i + 4°) and noise must be recovered by the arm-C optimizer to within
  the prior widths, and its Δχ²(γ = 2 vs γ̂) must be ≤ 3.84 (the truth is not rejected).

## Registered predictions (verdict rules fixed now)
- P1 (convention-free magnitude). Galaxy-block bootstrap (B = 2000, galaxies resampled with replacement, a₀′
  re-profiled for γ = 2 and (γ, a₀′) re-profiled for the free fit per resample) of Δχ²_C = χ²_C(γ = 2) −
  χ²_C(γ̂). Statistic z = Δχ²_C / sd_boot. Prediction: z ≥ 3. Rule: HELD if z ≥ 3; REFUTED if z < 2;
  NEITHER between. Rationale for the prediction: galaxies whose curves span the transition (x from ≲0.1 to
  ≳3) see the transition *shape* directly and no vertical/horizontal slide removes it.
- P2 (sign test). Per galaxy, Δ_g = χ²_g(γ = 2, â₀′(2)) − χ²_g(γ̂, â₀′(γ̂)), nuisances profiled in each.
  Prediction: γ = 2 worse in > 65 % of galaxies, one-sided sign-test p < 0.001. Rule: HELD if both; REFUTED
  if fraction < 55 % or p > 0.01.
- P3 (the pin pays in the priors). Ratio of the summed prior penalty under γ = 2 to that under γ̂. Prediction:
  > 1.5 (γ = 2 pushes the nuisances off their priors systematically). Rule: HELD if > 1.5; REFUTED if < 1.1.
- P4 (the free fit moves). The arm-C optimum γ̂_C lies in [0.55, 1.2], i.e. above the frozen 0.489 and
  distinguishable from ½ at the bootstrap 95 % level. Rule: HELD if the bootstrap 95 % interval of γ̂_C excludes
  0.50 from below; REFUTED if the interval contains 0.489. (Based on the 08-14 Υ sweep: the likelihood's own
  Υ preference was 0.55 with γ̂ = 0.68.)
- P5 (interval). The retained γ interval Δχ²_C/χ²_red(γ̂) ≤ 10 (the site's own convention, now in a properly
  weighted χ²) excludes γ = 2. Rule: HELD if excluded; REFUTED if γ = 2 is inside.

## Verdict rule for the site
- Pin "refuted, convention-free under the published method" iff P1 and P2 HELD.
- Pin "disfavoured" if P1 is NEITHER or P2 is REFUTED with P1 not REFUTED.
- Pin "not distinguishable under the published method" if P1 REFUTED. In that case the site's root 2 should be
  re-labelled; that decision is dp's.
- P4 is reported either way: if HELD, every "free-γ compander is exactly MOND simple μ" sentence needs the
  qualifier "under frozen Υ = 0.5".

## Not done here
Full MCMC marginalization (Li+2018 used emcee). This run profiles the nuisances and adds a Laplace correction
(log det of the 4×4 Hessian at each galaxy's optimum) at the two comparison points, and reports the profile and
the Laplace-marginal Δ side by side. Low-inclination (i < 30°) and Q = 3 galaxies are kept because the frozen
cut kept them; a sensitivity line drops them.
