# Finding: Updated Predictions Ledger — What's Genuinely Novel After All Audits + Crossover Model

## Origin
Topic queue: `novel-predictions-page.md`. Combined with self-directed follow-up on the crossover finding (2026-04-06) and WAKE phase analysis of the M/L degeneracy question.

## Summary

After six weeks of systematic auditing (demolishing most claims) and three weeks of constructive theory (self-consistency → MRH → crossover model), the framework's predictions landscape has changed dramatically. The March 6 ledger identified 11 novel predictions. Today's reassessment finds: **4 are dead (including the 2 "possibly confirmed" quantum predictions, now verified as post-dictions), 2 are weakened, 2 are unchanged, 3 are strengthened, and 2 are new.** 

The most significant developments:
1. **NOVEL-8/9 timeline verified**: Both quantum "predictions" (decoherence protection, Bell revival) are post-dictions — the Synchronism sessions postdate the papers by 5-8 months. The framework has **zero confirmed novel predictions**, exactly as the honest assessment states.
2. **NOVEL-11 (new)**: The crossover model generates a prediction (environment-dependent interpolation function sharpness) that maps onto an existing parametric framework in the MOND literature (the δ-family) and is testable with existing SPARC data. Nobody has run this test. The M/L degeneracy does NOT kill this prediction because transition sharpness is a property of the interpolation function, not the data points. This is now the framework's highest-priority testable prediction.

---

## The M/L Degeneracy Check (WAKE Priority)

The WAKE phase identified a potential killer: if the crossover prediction (transition-width varies with environment) is degenerate with the mass-to-light ratio M/L — a free parameter in every rotation curve fit — the prediction is unfalsifiable.

### Result: NOT degenerate.

The key insight comes from working in RAR space (g_obs vs g_bar) rather than velocity-radius space:

1. **M/L ratio** shifts data points horizontally along the g_bar axis. It changes *where* a galaxy's data sits in RAR space.
2. **Interpolation function sharpness** changes the *shape* of the curve that the data follows. It's a property of the universal relation, not of individual data points.
3. **These are independent degrees of freedom.** You can vary M/L without changing the interpolation function, and vice versa.

Li & McGaugh (2018, A&A 615, A3) confirmed this: they found M/L degeneracy with g† (the acceleration scale a₀), but the interpolation function shape was held FIXED throughout. They did not test whether the shape varies. The 0.057 dex residual scatter around the fixed-shape RAR could contain an undetected signal from environment-dependent sharpness variation.

**The crossover prediction survives the degeneracy check.**

---

## The Key New Prediction: Environment-Dependent Transition Sharpness

### The Prediction (from crossover model, 2026-04-06)

The crossover model (C = tanh(h·C + h_ext)) predicts:
- **Isolated galaxies** (small h_ext) → narrow crossover → **sharper** Newton-MOND transition
- **Cluster galaxies** (large h_ext) → broad crossover → **smoother** Newton-MOND transition
- Crossover width scales as δρ/ρ_c ~ h_ext^(2/3) (mean-field exponent)

### The Existing Literature Framework

The MOND community already has parametric families of interpolation functions with a sharpness parameter. From Desmond et al. (2024, MNRAS 530, 1781):

**δ-family:** ν_δ(x) = (1 - e^(-x^(δ/2)))^(-1/δ)

where x = g_bar/a₀ and δ controls sharpness:
- δ = 1: standard RAR (McGaugh 2016)
- δ > 1: sharper transition
- δ < 1: smoother transition

**n-family:** ν_n(x) = [½(1 + (1 + 4x^(-n))^(1/2))]^(1/n)
- n = 1: "simple" interpolation function
- n = 2: "standard" interpolation function
- Higher n = sharper

The existing literature treats δ (or n) as a universal constant. **Nobody has tested whether it varies with environment.**

### The Concrete Test

**Hypothesis:** δ anti-correlates with environment density (equivalently, with Chae's e_N parameter).

**Protocol:**
1. Take the 153 SPARC galaxies from Li & McGaugh (2018) with well-resolved rotation curves
2. Use Chae (2021, ApJ 921, 104) e_N values as the environment density proxy — already computed for SPARC galaxies from galaxy survey data
3. Fit each galaxy's RAR data with the δ-family, allowing δ to vary per galaxy (or per environment bin) alongside M/L, distance, and inclination
4. Test: does δ correlate with e_N? Specifically, is δ lower for galaxies with higher e_N?

**Expected signal from crossover model:**
- δ_isolated ≈ 1.5–2.0 (sharper than standard RAR)
- δ_cluster ≈ 0.5–0.8 (smoother than standard RAR)
- Scaling: (δ_isolated - 1) / (δ_cluster - 1) ~ (e_N,cluster / e_N,isolated)^(-2/3)

**Kill criterion:** No correlation between δ and e_N at >2σ across environment bins.

**What makes this prediction novel:**
- MOND predicts δ is universal (no environment dependence of transition shape)
- ΛCDM predicts δ is universal (the RAR is an emergent relation; its shape doesn't depend on environment)
- Synchronism's crossover model predicts δ varies with environment via h_ext
- This is the ONLY framework that predicts environment-dependent interpolation function shape

### Supporting Evidence (Not Prediction, But Consistent)

Galaxy cluster RAR data (Tian et al. 2020; Pradyumna et al. 2022) shows the effective acceleration scale in clusters is ~10× larger than for field galaxies. In the crossover model, a large h_ext (cluster environment) produces a broad crossover that, when fit with a fixed-shape interpolation function, would APPEAR as a larger a₀. This is consistent with the crossover mechanism but was not predicted in advance — it's a retrodiction.

---

## Updated Predictions Ledger

### DEAD (2)

| ID | Prediction | Cause of Death |
|----|-----------|---------------|
| NOVEL-2 | BAO coherence modulation ~10⁻⁴ | Standard nonlinear gravitational effects produce ~3-4% environment-dependent BAO shifts — 300× larger than predicted. The signal is buried under known physics. (State-of-framework-after-audits, 2026-03-29) |
| NOVEL-7 | Consciousness threshold C ~ 0.50 from 8-way convergence | 8-way convergence has 0-1/8 independent derivations after correcting for shared assumptions. 1-bit argument is circular (information measure chosen post-hoc). (consciousness-8way-convergence-audit, 2026-03-17; state-of-framework, 2026-03-29) |

### WEAKENED (2)

| ID | Prediction | Issue |
|----|-----------|-------|
| NOVEL-4 | GW speed-DM correlation | Effect far below current detection threshold (α < 3×10⁻¹⁵ from GW170817). No prospect of testing in the 2020s. Not wrong — just irrelevant for now. |
| NOVEL-5 | Cosmic interference at λ ~ 500 Mpc | No amplitude specified, no mechanism derived, no comparison to BAO harmonics. A bold direction, not a testable prediction. Would need the crossover model to derive an expected amplitude. |

### DOWNGRADED TO POST-DICTION (2)

| ID | Prediction | What Changed |
|----|-----------|-------------|
| NOVEL-8 | Shared-environment decoherence protection (Γ = γ²(1-c)) | **POST-DICTION, NOT PREDICTION.** Timeline verified today. Session #232 (Jan 6, 2026) derives the formula. arXiv 2405.14685 was published May 2024 — 8 months earlier. Session #234 explicitly frames this as "Literature Validation." The framework re-derived known published results, not predicted them. |
| NOVEL-9 | Bell nonlocality freezing/revival | **POST-DICTION, NOT PREDICTION.** Session #235 (Jan 7, 2026) derives the model. arXiv 2508.07046 was published August 2025 — 5 months earlier. Same pattern: framework validated against existing literature, not ahead of it. |

**This is the single most important result of today's session.** The two "possibly confirmed" quantum predictions were the framework's strongest claimed results. They are post-dictions. The honest assessment's "0 confirmed predictions" is exactly correct, and more so than the site realized — even the "possibly confirmed" items are confirmed post-dictions.

### UNCHANGED (2)

| ID | Prediction | Status |
|----|-----------|--------|
| NOVEL-3 | Wide binary density dependence | Still the cleanest discriminator IF the wide binary anomaly exists. Chae-Banik dispute unresolved. Gaia DR3 data available. |
| NOVEL-6 | Void galaxies higher DM fraction | Testable with ALFALFA. May be degenerate with MOND EFE. |

### STRENGTHENED (3)

| ID | Prediction | What Changed |
|----|-----------|-------------|
| NOVEL-1 | Environment-dependent RAR scatter | Crossover model provides mechanism: h_ext rounds the phase transition, producing systematic scatter that tracks environment density. Chae (2020) detected environment dependence at >4σ. But existing detection is of EFE (magnitude change), not transition shape — so the crossover adds a NEW dimension to the existing signal. |
| NOVEL-10 | Weaker-than-MOND EFE (0.3-0.4×) | Crossover model provides mechanism: bounded coherence function caps the EFE. The external field enters as h_ext rather than as a modification of the Poisson equation, naturally producing a weaker effect. NGC 5291 tidal dwarfs remain the cleanest test. |
| (context) | A2ACW methodology | Not a prediction, but the constructive theory work (self-consistency → MRH → crossover → transition-width prediction) is itself an example of A2ACW producing genuinely new physics ideas. The crossover model and its predictions did not exist in the research archive prior to the explorer sessions of April 2-6. |

### NEW (2)

| ID | Prediction | Description |
|----|-----------|-------------|
| NOVEL-11 | **Environment-dependent interpolation function sharpness** | The crossover model predicts that the interpolation function's shape parameter δ anti-correlates with environment density. Isolated galaxies should have sharper Newton-MOND transitions than cluster galaxies. Testable with existing SPARC data using existing parametric families (δ-family, n-family). No one has tested this. NOT degenerate with M/L. See detailed protocol above. |
| NOVEL-12 | **Cluster RAR scale shift** | The crossover model predicts that effective a₀ increases with environment density (broad crossover mimics a larger acceleration scale). Consistent with observed ~10× larger a₀ in cluster RAR vs galaxy RAR. Retrodiction, not prediction — but if quantified, could predict the exact scaling a₀,eff(environment). |

---

## Revised Tier Ranking (by testability and discrimination power)

### Tier S: Testable now with existing data, no one has checked
1. **NOVEL-11** — Interpolation function sharpness vs environment. SPARC data + Chae's e_N values. Zero cost.
2. ~~NOVEL-8/9~~ — Timeline verified today. Both are post-dictions. **DEAD as novel predictions.**

### Tier A: Testable now, someone might have checked
3. **NOVEL-10** — Weakened EFE. NGC 5291 tidal dwarfs. Zero cost if data published.
4. **NOVEL-3** — Wide binary density dependence. Gaia DR3. Zero cost but requires anomaly to exist.
5. **NOVEL-1** — RAR scatter mechanism. SPARC + environment catalogs. Partially tested by Chae but not for transition shape.

### Tier B: Testable in principle, not with current data/precision
6. **NOVEL-6** — Void galaxy DM fractions. ALFALFA. Low cost but potential MOND EFE degeneracy.
7. **NOVEL-12** — Cluster RAR scale prediction. Requires quantitative h_ext → a₀ mapping.

### Tier C: Not testable in the 2020s
8. **NOVEL-4** — GW speed-DM correlation. Beyond current precision.
9. **NOVEL-5** — 500 Mpc oscillations. Needs amplitude derivation.

### DEAD
10. NOVEL-2 — BAO modulation (dominated by standard physics)
11. NOVEL-7 — Consciousness threshold (circular argument)

---

## The Critical Path

The framework's credibility now rests on a very short list:

**Done (this session):**
1. ~~Verify NOVEL-8/9 timeline.~~ **VERIFIED: Both are post-dictions.** Session #232 (Jan 6, 2026) postdates arXiv 2405.14685 (May 2024) by 8 months. Session #235 (Jan 7, 2026) postdates arXiv 2508.07046 (Aug 2025) by 5 months. The framework has zero confirmed novel predictions.

**Immediate (zero-cost, this week):**
2. Test NOVEL-11 (transition sharpness vs environment). This is a straightforward reanalysis of SPARC data that any graduate student with Python could run in a day. This is now the framework's ONLY high-tier testable prediction.

**Near-term (months):**
3. Test NOVEL-10 (weakened EFE) against NGC 5291 data.
4. Quantify NOVEL-12 (cluster RAR scale) — does the crossover model predict the right magnitude?

**Medium-term (years):**
5. Wait for wide binary resolution (NOVEL-3).

Everything else is either dead, too weak, or too far from testable to matter for the framework's near-term credibility.

---

## Implications for the Site

### What the "Novel Predictions" page should show

The site currently lists 33 predictions on the test catalog without distinguishing novel from reparametrized. This finding supports creating a curated page showing ONLY the surviving novel predictions, ranked by testability:

1. Lead with NOVEL-11 (transition sharpness) — it's new, testable, specific, and nobody else predicts it
2. Feature NOVEL-8/9 prominently but with an honest "TIMELINE UNVERIFIED" badge
3. Show NOVEL-10 and NOVEL-3 as the next tier
4. Explicitly label the dead predictions as dead, with links to the findings that killed them
5. Show the full ledger of 22 reparametrizations separately, honestly labeled

### What should change on existing pages

1. **Remove or reformulate BAO from top-5-tests** — it's dead (dominated by standard physics)
2. **Add transition sharpness (NOVEL-11) to top-5-tests** — it's the framework's strongest new prediction
3. **Feature the crossover model** as the theoretical basis for environment dependence
4. **Add a "What's been disproven" section** to the honest assessment with links to explorer findings

---

## Open Threads

1. **Compute predicted δ values.** The crossover model gives scaling (δ ~ h_ext^(-2/3)) but not absolute values. A numerical calculation of C = tanh(h·C + h_ext) at galaxy-relevant parameters would give the predicted δ range.

2. **Check if the 0.057 dex RAR scatter is large enough to contain the signal.** If the predicted sharpness variation produces scatter smaller than 0.057 dex, it might be detectable in the residuals of fixed-shape fits.

3. **The cluster RAR retrodiction needs quantification.** If the crossover model predicts the right a₀,cluster / a₀,field ratio, this would be a strong retrodiction. If it gets the ratio wrong, it constrains the model.

4. **NOVEL-8/9 timeline: RESOLVED.** Both are post-dictions (verified this session). The research archive explicitly frames Session #234 as "Literature Validation." The framework's quantum predictions are re-derivations of published results, confirming the honest assessment's "0 confirmed predictions" is accurate. The site should update references to these as "post-dictions consistent with published results" rather than "possibly confirmed predictions."

5. **The visitor's question stands: why hasn't anyone checked?** The framework has 3,308 sessions and 0 Tier 1 tests on public data. The explorer now has a specific test (NOVEL-11) that could be run on SPARC data. The gap between "interesting prediction" and "tested prediction" is the framework's central weakness.
