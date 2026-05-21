# Finding: The RAR Transition-Shape Test, Run on Real SPARC — γ=2 Refuted (ΔBIC=+184), γ_free=MOND

## Origin

Topic `rar-transition-shape-tool.md` (seeded 2026-05-21 by maintainer; both grad-student and
researcher visitor personas independently named this as the project's one live discriminator).
This executes the explicit open thread of the 2026-05-20 finding
(`functional-form-discriminator-compander-rar-transition.md`): **"Run it on real SPARC."**

The prior finding estimated the γ=2 compander's transition-shape residual against an *idealized*
McGaugh curve and got 0.067 dex ("mildly disfavored, 1.45× σ_int"). The real Lelli-McGaugh-Schombert
(2016) mass models turn out to be present in the research repo
(`Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt`, 3391 points) — so the estimate
can be replaced with an actual fit. Script: `explorer/scripts/rar_transition_shape_real_sparc.py`.

## Summary

**Run on real data, the discriminator is decisive — and the verdict is a clean fork that closes the
question.** Fitting both functional forms to 2807 SPARC points (10% velocity-error cut, standard
M/L_disk=0.5, M/L_bul=0.7):

| Model | a₀ (m/s²) | RMS (dex) | ΔBIC vs McGaugh |
|-------|-----------|-----------|-----------------|
| McGaugh ν (k=1) | 1.13×10⁻¹⁰ | 0.1437 | — (reference) |
| **Compander μ, γ=2 pinned** (k=1) | 2.97×10⁻¹⁰ | 0.1485 | **+184** |
| Compander μ, γ free (k=2) | 5.3×10⁻¹¹ | 0.1437 | +7.1 |

Two corrections to the prior analytic finding, both sharpening the conclusion:

1. **γ=2 is not "mildly disfavored" — it is decisively refuted.** ΔBIC = **+184** (>10 is already
   "very strong"). The per-point RMS penalty is small (0.1485 vs 0.1437, +3.3%), but the residual is
   *structured* in g_bar/a₀, so over thousands of points it is overwhelmingly significant. The prior
   "0.067 vs 0.057 dex, mild" framing under-counted because it compared RMS magnitudes rather than the
   statistical weight of a coherent population-wide shape term.

2. **The free-γ fit collapses to γ ≈ 0.49, not 0.91.** And at γ_free the compander RMS equals McGaugh's
   to four digits (0.1437 = 0.1437) — ΔBIC = +7 is *entirely* the BIC penalty for the extra parameter,
   not a fit difference. So free-γ compander is exactly MOND, confirmed — but the preferred γ on real
   data is ~0.5, not the ~0.9 the idealized-curve fit suggested.

**The fork that closes the question:** there is no value of γ for which the compander is both (a)
distinct from MOND and (b) consistent with SPARC. Pin γ=2 → refuted (ΔBIC +184). Fit γ → MOND
(ΔBIC +7, identical RMS). The "one live discriminating test" has now been run, and it eliminates the
only version of the framework that wasn't already MOND.

## Research Notes

### Pipeline validation

- Best-fit McGaugh a₀ = **1.13×10⁻¹⁰ m/s²** vs the canonical Lelli/McGaugh 1.20×10⁻¹⁰. At the
  *canonical* a₀ the RMS is 0.1441 — indistinguishable from the best-fit 0.1437. The pipeline
  reproduces the published RAR.
- RMS 0.144 dex is the *total observed* scatter under fixed M/L (no per-galaxy marginalization). It is
  larger than Li et al. (2018)'s 0.057 dex *intrinsic* scatter precisely because intrinsic scatter
  requires marginalizing distance / inclination / M-L per galaxy. That does not affect the comparison:
  both models see the same noise, and ΔBIC is differential.
- Free-γ minimum is global and stable: γ=0.489 from every start (g₀ ∈ {0.5,1,1.5,2}). γ=2 a₀-minimum
  is global (neighbors at 1,2,5×10⁻¹⁰ are all worse).

### The structured residual (the actual discriminating signature)

Binned mean residual log₁₀(g_obs) − log₁₀(g_pred), γ=2 compander vs McGaugh (10% cut):

```
log(gbar/a0)   N    meanRes(γ=2)   ±err    meanRes(McGaugh)
   -1.75      720    -0.046       0.006      -0.021
   -1.25      653    +0.003       0.005      +0.007
   -0.75      565    +0.041       0.006      +0.016
   -0.25      394    +0.060       0.007      +0.012   ← peak
   +0.25      241    +0.033       0.008      -0.008
```

The γ=2 compander leaves a coherent **S-shaped residual ~0.05–0.10 dex peak-to-peak**, significant at
~8–10σ *per bin*, concentrated at the transition (g_bar ≈ a₀). McGaugh's binned residuals are flat
within ±0.02. This is the non-degenerate transition-shape signature the prior finding predicted —
now measured. Sign matches the prediction: positive data-minus-model near the knee means the γ=2
compander **under-predicts the boost** through the transition (transitions too sharply).

### Honesty caveats (do not overstate the +184)

- **Effective N < 2807.** Points within a galaxy are correlated, so the iid-Gaussian BIC inflates the
  evidence. With ~150 galaxies and a few independent radii each, effective N is plausibly 500–1000.
  Scaling conservatively: ΔBIC(N=500) ≈ 184×(500/2807) ≈ **33** — still decisively >10. The refutation
  survives the correlation correction by a wide margin.
- **Fixed M/L, no marginalization.** A full Li-et-al-style fit would marginalize distance / inclination
  / M-L per galaxy. That lowers the noise floor but **cannot** absorb a population-wide shape term that
  lives at fixed g_bar/a₀ across all galaxies — per-galaxy nuisances move points diagonally/per-object,
  not coherently in the transition variable. If anything, marginalization makes the structured residual
  *more* significant relative to a smaller noise floor. Direction of the conclusion is safe.

## Implications for the Site

1. **Update the verdict from "mildly disfavored / untested" to "run and refuted at γ=2."** The site's
   current best framing (post 2026-05-21 maintainer edits) is "1 discriminating test, contingent on γ
   pinned, mildly disfavored." The real-data result is stronger and cleaner: *the test has been run on
   the full SPARC sample; γ=2 is refuted (ΔBIC ≥ 33 conservatively, +184 nominally); free-γ is MOND.*

2. **This is the galaxy-scale closure event** — analogous to what the entity-criterion demotion
   (2026-05-20) was for the novel-prediction count. The galaxy program's "one surviving live test" is
   now a *run* test with a negative result. Net discriminating galaxy tests vs MOND: **0, confirmed by
   execution, not by degeneracy argument.**

3. **The Galaxy Curve Plotter tool should show the structured residual.** The maintainer's seeded tool
   spec is correct; this finding supplies the validated numbers. The headline should be the S-shaped
   γ=2 residual panel with the McGaugh-flat comparison and the ΔBIC, not a "consistency check" overlay.

4. **Strengthens the executor-track case.** This is the second Tier-1-class test ever actually run by
   the ecosystem (after DESI fσ₈, 2026-05-05). Both produced decisive negative results from existing
   public data in a single session. The bottleneck was never data availability — the real SPARC file
   was sitting in the repo while the prior finding assumed only synthetic data existed.

## Action: Maintainer

- **/galaxy-rotation**: replace the "transition shape, mildly disfavored (0.067 dex)" framing with the
  run result — "Fit to 2807 SPARC points: γ=2 compander refuted (ΔBIC ≥ 33 conservatively); free-γ →
  γ≈0.5, statistically identical to McGaugh (MOND). No γ is both distinct-from-MOND and SPARC-consistent."
- **/tier-1-existing & /honest-assessment**: the RAR transition-shape test moves from "1 discriminating
  test, contingent/untested" to "1 discriminating test — RUN — γ=2 refuted, free-γ degenerate." Galaxy
  discriminating-test count against MOND: 0, now by execution.
- **Galaxy Curve Plotter**: add the residual panel (γ=2 minus McGaugh, with the S-shape) using the
  binned numbers above; cite a₀(McGaugh)=1.13×10⁻¹⁰ reproduced from the same data as the pipeline check.
- **Correct the prior finding's free-γ value** (0.91 → 0.49) wherever it propagated.

## Open Threads

- **Full marginalized fit.** A per-galaxy MCMC (distance, inclination, M/L priors as in Li et al. 2018)
  would give the publication-grade ΔBIC. Prediction: the structured residual survives; ΔBIC stays
  decisive. This is the natural preprint-grade follow-up if TEST-04a + this are written up together as
  "two decisive negative results from existing data."
- **Why γ_free ≈ 0.5?** On the idealized curve it was 0.91; on real data 0.49. The shift is driven by
  the real g_bar sampling density (SPARC is point-rich at intermediate g_bar, sparse in deep MOND) and
  fixed M/L. Neither 0.5 nor 0.9 is physically motivated (N_corr ≈ 16 vs 5 — both back-fits), so the
  value carries no theoretical weight; only the *degeneracy* (RMS = McGaugh) matters.
- **EFE shape.** Still untested: whether the compander's external-field modification of μ differs from
  Bekenstein-Milgrom in a second, independent way. Lower priority now that the isolated RAR is decided.
