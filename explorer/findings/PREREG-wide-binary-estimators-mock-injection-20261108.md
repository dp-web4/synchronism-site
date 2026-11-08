# PREREG — Wide-binary γ estimators: mock injection and decomposition of 1.00 vs 1.56 (2026-11-08)

Committed **before** the estimator script exists and before any estimator has seen the real rows or a mock.

## Already known when this was written (descriptive; not predictions)
Read from `github.com/seratsaad/wb3d-gamma` at `4333e9f` and the arXiv texts (2603.11015v2, 2610.40388v2):
- `run_gamma_analysis.py` lines 105–106: `r_err = max(0.05·r_obs, 0.5·sqrt(σ_dA² + σ_dB²))`. The second term is an absolute line-of-sight
  distance error, not multiplied by the angular separation. Recomputed from their CSVs: σ_s/s as coded has median 1.88, range 0.23–17.9,
  > 1 in 24/36. The physical value (θ·σ_d) has median 0.088%. The paper says "median fractional value of about 0.1%". No system sits at the 5% floor.
- `run_injection.py` line 95 sets the mock `r_err` to 5% and passes it to the fit, so the injection did not run at the real-data σ_s.
- The repo's `injection_recovery.json` holds γ_true = 1.6 runs (1.72, 1.75, 1.18, 1.21, 1.68); the paper's Appendix C reports only γ_true = 1.
- `posterior_samples.npz` reproduces the paper's quantiles (baseline 0.998 [0.809, 1.24]; geometric 1.557 [1.375, 1.767]).

## Estimator (independent of both codes)
Marginal likelihood of γ from a phase-space reduction, not sampling orbital elements. Delaunay variables give, for isotropic orbits with uniform
phase and priors p(a), p(e),

  f(r, v | μ) = p(a) p(e) / [(2π)³ μ^{3/2} a^{1/2} e], with 1/a = 2/r − v²/μ, μ = γ G M.

For thermal p(e) = 2e the dependence on e cancels and f depends on (r, v², μ) only. L_j(γ) then integrates f over z (and over s when σ_s > 0, with the
d²s factor), the velocity-noise kernel and the mass prior. Non-thermal e needs the r×v angle and is done by direct Monte Carlo on the real rows.

**Knobs:** σ_s (exact / 1% / 5% / as coded); a prior (Öpik / softplus BPL as coded, range log(a/s) ∈ (−1, 2.5)); e prior (thermal / Hwang-style α as coded);
RV kernel (Gaussian with table σ / Student-t5 with √(σ² + 40² + jit²) as coded); z (measured / none); v_sys (perspective-corrected velocities / N(0, 30 km/s) marginalized as coded).

## Predictions
- **P1 (lemma).** In the exact-s limit, free a with an Öpik prior and the geometric model are the same model: Jacobian ∫dln a δ(s − a g) = 1/s. Numerically |Δγ| < 1%.
- **P2 (sign).** At exact s, the BPL prior moves γ **up** relative to Öpik, by 0–10%, because small a at fixed v requires larger γ. Prior on a alone cannot produce the fall to 1.00.
- **P3 (identity controls).** My estimator reproduces, on the real rows: S&T geometric 1.56 ± 0.08; Chae Γ = 0.102 → 1.60 ± 0.08 with Chae's kernel; S&T baseline 1.00 ± 0.12 as coded. Failure of any one means the reduction misses something, and the decomposition below is labelled accordingly.
- **P4 (decomposition).** The as-coded σ_s accounts for ≥ 70% of ln(γ_geometric/γ_baseline). At σ_s = 5% and 1% the baseline lands within 0.15 of geometric.
- **P5 (positive control at the real configuration).** Mocks with precise s (0.1%), analysed at the as-coded σ_s with the as-coded kernel and BPL: γ_true = 1.6 recovers a median < 1.35, and γ_true = 1 recovers ≤ 1.05. That is, the as-coded configuration compresses a real boost.
- **P6 (calibration).** Exact-s Öpik/Gaussian on matching mocks (Öpik truth): no bias beyond 2 standard errors of the ensemble mean, 68% coverage in 0.63–0.73, at every γ_true ∈ {1, 1.2, 1.4, 1.6}. On BPL-truth mocks: |bias| ≤ 5%.
- **P7 (contamination).** Newtonian mocks through the exact-s Gaussian estimator: unmodelled RV scatter of 100 m/s, or a 10% hidden-companion fraction (kick log-uniform 100–2000 m/s, isotropic), each gives a median recovered γ ≥ 1.3.
- **P8 (kernel).** On the real rows at exact s, swapping only to the t5/40 m/s kernel gives γ in [1.35, 1.55].
- **P9 (model-free count).** The number of systems with central v/v_esc(s) > 1. Real: 6 (S&T Appendix D, to be recounted). Newtonian mocks with real errors: expectation ≤ 1.5 and P(≥ observed) < 1%. γ = 1.6 mocks: expectation 4–8.

## Reading rules, fixed now
- If P3's baseline identity fails, I do **not** claim to have reproduced S&T's number from σ_s. I report the gap and, if cheap, run their PyMC code.
- Mock recovery says which estimator is calibrated **under its model**. It does not say whether the real binaries are clean. P7/P9 are the only arms that bear on that, and a large recovered γ remains consistent with gravity or contamination.
- The verdict on Saad & Ting's code applies to the code at `4333e9f`. I cannot prove which code produced the published numbers beyond `posterior_samples.npz` matching.
- Nothing here moves Bucket 0 or the count. Publish whichever way it goes.
