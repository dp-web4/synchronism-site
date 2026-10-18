# PREREG — Does the +2843 (C_ρ vs C_g on SPARC) survive galaxy-level scoring? (maintainer 2026-10-18)

Written BEFORE `dbic2843_galaxy_level.py` exists and before any bootstrap number was seen. Only the identity
control (below) had been run when this was written.

## Why
/dark-matter quotes ΔBIC +2843 for the density-keyed law vs the acceleration-keyed law as "a point-count figure;
discounted ~20× for correlated points within a galaxy it is still ≈ +142". The 20× was chosen, not measured. The
+184 (γ = 2 pin) was re-scored with a galaxy-block bootstrap on 2026-09-29 (`gamma2_pin_galaxy_level.py`):
95 % [23, 351], sd 82 vs ~19 point-iid, N_eff ≈ 150. The +2843 needs the same treatment.

Note recorded before running: 2438 points / 122 galaxies = 19.98. The "~20×" discount is exactly N/N_gal for this
cut, so "≈ +142" is already the N → N_gal number (2842.6 × 122/2438 = 142.2). The bootstrap is what is new.

## Source and identity control (already run, passed)
- Script: `explorer/findings/scripts/two_pillars_head_to_head_fit.py` (explorer 2026-08-24), loader
  `explorer/scripts/rar_scatter_nogo_real_sparc.py` (resolves to the home-tree SPARC copy).
- Cut: Q < 3 (qmax = 2), inc > 30°, e_V/V < 0.10, V_flat > 0; Υ_disk = 0.5, Υ_bul = 0.7; ρ = Σ/2h, h = 0.3 kpc.
- C_g (acceleration-keyed, implicit): g_obs · tanh(γ ln(1 + g_obs/a₀)) = g_bar. Free γ, a₀, σ_int. UNFLOORED.
- C_ρ (density-keyed, global ρ_crit): g_obs = g_bar / tanh(γ ln(1 + ρ/ρ_crit)). Free γ, ρ_crit, σ_int. UNFLOORED
  (clipped at 1e-12 only).
- Likelihood: Gaussian in log10 g_obs, per-point error ⊕ profiled σ_int. Equal parameter counts, so Δ(−2lnL) = ΔBIC
  at any N.
- Re-run today: −2lnL(C_g) = −7564.2 (γ 0.5093, a₀ 6.061e-11, σ 0.1215), −2lnL(C_ρ) = −4721.7 (γ 0.0462,
  ρ_c 2.98e-25, σ 0.2261), ΔBIC = +2842.6. Reproduces to 0.0 %. The script must re-check this (±1 %) and stop if not.

## Method
Per-point contribution to −2lnL for each model at its full-sample best fit: d²/v + ln v (the 2π constant cancels).
Per-galaxy Δ_i = Σ over the galaxy's points of (C_ρ − C_g). Σ_i Δ_i = ΔBIC exactly.
- Galaxy-block bootstrap: resample 122 galaxies with replacement, B = 1000, seed 20261018. Both laws' three
  parameters REFIT per replicate (Nelder-Mead warm-started from the full-sample optimum; C_ρ also from a second
  start). A parameter-held-fixed bootstrap is reported alongside (cheap; understates width).
- Point-iid sd: sqrt(N · var(per-point Δ)) at the full-sample fit (the point-bootstrap sd with parameters held),
  and the crude sqrt(2|Δ|) used in the γ = 2 run, both reported.
- N_eff = N · var_iid / var_boot (fixed-parameter versions of both, so like-for-like; refit version also shown).

## Registered predictions
- P1 (survival). The galaxy-bootstrap 95 % lower edge of the full-N ΔBIC is > 10. Stronger: > 1000.
  Rule: HELD if lower edge > 10; strong form HELD if > 1000. REFUTED if the interval includes 10.
- P2 (width). Bootstrap sd between 150 and 600 (point-iid sd ~ 75–100 expected).
- P3 (N_eff). Measured N_eff between 75 and 300 (i.e. the 20× discount is within a factor 2 of the measured one).
  Rule: HELD if in [75, 300].
- P4 (N_eff-scaled ΔBIC). ΔBIC × N_eff/N > 50. HELD if > 50, REFUTED if < 10.
- P5 (breadth). C_ρ is worse (Δ_i > 0) in > 80 % of galaxies. HELD if > 80 %; REFUTED if < 65 %.
- P6 (concentration). The top 10 galaxies carry < 40 % of Σ Δ_i. HELD if < 40 %.

## Not done here
No per-galaxy nuisance refits (Υ, D, inc). h and Υ conventions held at the headline (const 0.3 kpc, 0.5); the
2026-08-24 sweep showed every convention gives a larger ΔBIC, so the headline is the least favourable to the kill.
The C_ρ(A·V_flat²) variant (+3309) is not re-scored.
