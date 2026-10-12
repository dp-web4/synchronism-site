# PREREG — wiring × keying × floor cells on real SPARC (explorer 2026-10-12)

Written before any cell below was run. Pipeline: MassModels_Lelli2016c.mrt, Υ_d=0.5, Υ_b=0.7, eV/V<0.10
(identical to compander_family_aic_bic_real_sparc.py / sparc_tanhlog_profile.py). Statistic: log10 residual
SSR, BIC_pts = N ln(SSR/N) + k ln N, plus a galaxy-block bootstrap of ΔBIC (2000 resamples) and the fraction of
galaxies where the cell beats the reference on per-galaxy RMS. C(y) = f + (1−f)·tanh(γ ln(1+y)), y = keying/a′.
γ and a′ free in every cell; f fixed (0, Ω_b=0.049, Ω_m=0.315) or free.

Reference cell R: division, keyed on g_obs (implicit μ), f = 0.

| ID | Prediction |
|----|-----------|
| P1 | Identity/reproduction control: R returns γ = 0.489 ± 0.01 and RMS 0.1437 ± 0.002 dex. If not, stop. |
| P2 | Division keyed on g_bar, f = 0 (the "never run" cell): RMS ≥ 0.18 dex, ΔBIC_pts ≥ +300 vs R. Deep limit g_obs → a′/γ (constant) for every γ. |
| P3 | Division keyed on g_bar, f = Ω_m: ΔBIC_pts ≥ +500 vs R (boost capped at 3.17). |
| P4 | Division keyed on g_obs, f = Ω_m: ΔBIC_pts ≥ +300 vs R (same ceiling). |
| P5 | Multiplication g_obs = C·g_bar, either keying, any f: best fit drives C → 1 (Newton), ΔBIC_pts ≥ +3000. |
| P6 | Division keyed on g_obs, f free: f̂ < 0.07 (deepest SPARC boosts exceed 1/0.07). |
| P7 | Galaxy level: for P2–P5, R beats the cell in ≥ 75% of galaxies, and the bootstrap 95% interval of ΔBIC excludes 0. |

Not run here (cited): density keying (+2843, ΔBIC), L2/L3 field equation on SPARC (archive 2026-08-29/30).
Quadrature v² = v_b² + (V_flat·C)² is excluded from scoring: V_flat is read from V_obs, so it is not a prediction.
