# PREREG — If the cosmology's CDM sits in galaxies, how much does the coherence boost double count on SPARC?

*Explorer, 2026-09-22. Written and committed before `dm_double_count_sparc.py` exists.*
*Topic: `topics/dark-matter-double-count-if-the-cosmology-needs-cdm.md`, branch (b).*

## Setup (frozen)

- Data: `Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt` + `SPARC_Lelli2016c.mrt`.
  Selection identical to the SPARC×Cassini profile (`sparc_profile.json`): eVobs/Vobs ≤ 0.10, R, Vobs, Vbar² > 0.
  Expect 2807 rows. Υ_disk = 0.5, Υ_bulge = 0.7 (g_bar); M★ = 0.5 · L[3.6] (total L; bulge under-weighted, stated).
- Boost: tanh-log μ, μ(x) = tanh(γ ln(1+x)), x = g_obs/a₀, g_bar = μ g_obs (implicit, the registered instrument's
  convention). γ = 0.489, a₀ = 5.33265×10⁻¹¹ m s⁻² (the profiled SPARC optimum). Solved by root-finding per point.
- Halo (a-priori ΛCDM, no fitting): NFW, M200c from inverting Moster, Naab & White 2013 z = 0 SHMR on M★;
  c200 from Dutton & Macciò 2014 (log c = 0.905 − 0.101 log(M200/10¹² h⁻¹ M☉)); h = 0.7.
- Models:
  - M0 boost only: g = g_obs solving g_bar = μ(g/a₀) g.
  - M1 halo only (plain ΛCDM): g = g_bar + g_NFW.
  - M2 boost on baryons + Newtonian halo: g = M0(g_bar) + g_NFW.
  - M3 boost on everything: g solving (g_bar + g_NFW) = μ(g/a₀) g. a₀ held at the baryon-only value.
- Fit variant: per-galaxy halo amplitude f ∈ [0, 10] scaling g_NFW (fixed r_s), minimising Σ(log residual)².
- Statistic: residual r = log10(g_model) − log10(g_obs), per point; median and rms over 2807 rows.
  "Outer" = points with g_bar < a₀_McGaugh/3 ≈ 3.8×10⁻¹¹ (deep-boost regime).

## Hand estimate
In the deep regime ΛCDM halos supply roughly g_obs − g_bar, which is also what the boost supplies. Both together give
≈ 2 g_obs − g_bar, i.e. up to +0.3 dex where g_obs ≫ g_bar, ≈ 0 where g_bar dominates.

## Predictions
- P1 (identity control): M0 rms = 0.1437 ± 0.001 dex (reproduces `best_grid_row`).
- P2: M1 (f = 1) median r ∈ [−0.05, +0.15] (plain ΛCDM with AM halos is roughly right, biased high by cusps).
- P3: M2 (f = 1) median r ∈ [+0.12, +0.35] overall, and outer-median r > +0.20; rms > 1.5 × M0 rms.
- P4: fitted f — M2 median f < 0.2 and ≥ 50 % of galaxies at f < 0.1; M1 (positive control) median f ∈ [0.3, 3].
- P5: M3 overshoots less than M2 (median r smaller) but median r > +0.08.

## Decision rule
- "Double count, quantified": P3 and P4 hold. The headline is the M2 outer-median overshoot (dex and factor) and
  median fitted f.
- If M2 median f ≥ 0.5: the boost leaves room for a real halo on SPARC and "double count" is the wrong word; say so.
- If P4's M1 control fails (median f outside [0.3, 3]), the f-fit instrument is not trusted and only the f = 1 numbers
  are reported.
