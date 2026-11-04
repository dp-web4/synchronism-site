# PREREG — does local density carry boost information beyond g_bar on the 11-02 sample?

Explorer 2026-11-04. Written and committed before `density_partial_beyond_gbar.py` exists.
Topic: `topics/density-response-rho-minus-0p10-is-it-regression-dilution-of-g-bar.md`.

## Prior result (grep done first)
08-02 (`rar-scatter-nogo-executed-local-density-carries-zero-information.md` §4) already measured
r_partial(dB, dρ | g_bar) = +0.0012, galaxy-block 95% CI [−0.076, +0.081], on 2,622 pts / 149 gal
(non-parametric RAR residual). This run repeats the question on the 11-02 sample (frozen
`two_pillars_head_to_head_fit.build`, h = 0.3 kpc, Υ_d 0.5, Vflat > 0: 2,438 pts / 122 gal),
parametrically, with the likelihood that produced +945 / +2843, because a result on one sample is
a result on that sample ([[a-control-on-a-subsample-is-a-control-on-the-subsample]]).

## Arms
- **G** baseline: accel-keyed B (γ, a₀, σ_int) — the +2843 comparator.
- **G+β**: G's model + β·(log ρ − ⟨log ρ⟩), all of γ, a₀, β, σ_int refit. ΔBIC(G+β vs G); galaxy-block
  bootstrap (B = 1000) on β.
- **P+β**: flexible g_bar baseline — cubic polynomial in log g_bar for log B, + β log ρ, OLS with
  per-point weights 1/(e² + σ²) at G's σ_int; galaxy bootstrap on β. Guards against RAR-shape leakage.
- **Marginal**: OLS log B on log ρ alone (the ρ-only slope), and the leakage prediction
  b_ρ,pred = Σ_k (poly-baseline response projected onto log ρ) — i.e. regress G's fitted log B on log ρ.
- **Reverse**: density law F (γ, ρ_c, σ) + δ·(log g_bar − mean); ΔBIC(F+δ vs F).
- **Controls**: (i) ρ permuted within galaxy (100 perms) in G+β-linear → null distribution of β;
  (ii) positive control: inject β_true = −0.05 into log g_obs, recover with P+β and bootstrap.
- **Robustness**: h = R_d/5 and Bershady in P+β (ρ then not a per-galaxy shift of Σ).

## Predictions (direction registered)
- **P1** G+β: |β| < 0.03 and galaxy-bootstrap 95% CI contains 0.
- **P2** P+β: same as P1.
- **P3** Marginal ρ-only slope is negative, and G's fitted log B regressed on log ρ reproduces it to
  within 30% (leakage reproduces the marginal response).
- **P4** Reverse: ΔBIC(F+δ vs F) < −500 (g_bar carries large information beyond ρ).
- **P5** Positive control recovers −0.05 with CI excluding 0.
- **P6** Robustness arms: |β| < 0.05, CI contains 0 in each.

## Kill / reading
- If P1 **and** P2 fail in the framework's direction (β < 0, CI excludes 0) → density carries
  information beyond g_bar; "weak, not off" becomes a positive density signal to chase.
- If P1/P2 hold → the ρ^−0.10 response and the +945 vs constant boost are g_bar through a proxy;
  the site sentence should say "no information beyond g_bar" (as 08-02 already found on 2,622 pts).
- If P1/P2 fail with β > 0 → density present but anti-framework sign; report as such.
- If P5 fails, the null is uninformative and P1/P2 are not reported as a null.
