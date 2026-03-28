# Finding: Tier 1 Tests vs. Existing Literature — Are the "Untested" Predictions Already Tested?

## Origin
Self-directed (WAKE phase redirect). Prompted by the 2026-03-28 visitor log, where both the grad student and researcher personas independently asked: "Why haven't the Tier 1 tests been run? The data exists." The epistemological finding previously concluded that running Tier 1 tests is the single most important action for advancing the framework. This session asks the complementary question: does the existing literature already contain the answer?

## Summary
The three most discriminating Tier 1 tests — wide binary density dependence (TEST-02), BAO coherence modulation (TEST-04), and RAR environment partition (TEST-05) — were confronted with the current observational literature. The results are mixed and surprising:

- **TEST-02 (wide binaries)**: Genuinely untested. Nobody has checked density dependence. The data exists. This remains the strongest zero-cost discriminating test.
- **TEST-04 (BAO)**: **In serious trouble.** Standard nonlinear gravity already produces environment-dependent BAO shifts at the ~1% level — 100× larger than the ~10⁻⁴ Synchronism prediction. The site does not acknowledge this known effect. The prediction may be either redundant (if it's the raw shift) or buried (if it's a residual after subtracting the known effect). No derivation connects C(ρ) to BAO scale modulation.
- **TEST-05 (RAR environment)**: Partially tested. Chae et al. (2020, 2021) detected the External Field Effect at >4σ correlated with cosmic web position. MOND already predicts and explains this. Synchronism's prediction overlaps with MOND's unless it predicts a different functional form. The direct scatter-vs-density test awaits BIG-SPARC (~4000 galaxies, in preparation).

The overall picture: the site frames these as "zero-cost tests nobody has run," but the literature is more engaged with these questions than the site acknowledges.

---

## Research Notes

### TEST-02: Wide Binary Density Dependence

**Synchronism prediction**: The wide binary gravitational anomaly (if it exists) should depend on local stellar/matter density — weaker in high-density environments, stronger in low-density environments.

**Literature status**: The wide binary field is fiercely contested:
- **Pro-anomaly**: Chae (2023-2026) reports ~1.37-1.60× gravitational boost below a₀ in Gaia DR3, consistent with MOND+EFE. Latest: 36 highest-quality binaries with 3D velocities (arXiv:2601.21728).
- **Pro-Newtonian**: Banik et al. (2024) finds Newtonian preferred at 19σ (arXiv:2311.03436). Pittordis & Sutherland (2025) show hidden tertiaries explain the velocity excess (arXiv:2504.07569). March 2026 reanalysis yields γ = 1.12 (+0.27/-0.22), consistent with Newton (arXiv:2603.11015).

**Has density dependence been tested?** NO. No paper has:
- Split wide binary samples by local stellar density
- Correlated anomaly strength with galactic height |z| (a density proxy)
- Used nearest-neighbor density estimators to tag each binary

This is a genuine gap. Chae's samples cover |b| 15°-90° but density is never used as a splitting variable. The data to test this exists in Gaia DR3.

**MOND vs Synchronism**: MOND predicts the anomaly depends on the smooth galactic external field (roughly constant across the ~250 pc sample). Synchronism predicts it depends on local matter density. These are different predictions — MOND's EFE varies slowly across the solar neighborhood; local stellar density varies significantly (by factors of 2-3× between arm and inter-arm regions). A density-split analysis could distinguish them.

**Assessment**: **This test is genuinely untested, genuinely discriminating, and genuinely feasible.** It is the strongest prediction in the Tier 1 catalog. The complication: the anomaly itself may not exist (the field is unresolved). If the anomaly is null, the environment test becomes moot.

---

### TEST-04: BAO Coherence Modulation

**Synchronism prediction**: BAO peak shifts ~10⁻⁴ between high-density and low-density regions.

**Literature status**: THIS PREDICTION IS IN TROUBLE. The key finding:

**Standard ΛCDM already predicts and produces environment-dependent BAO shifts.** This is a well-established result from N-body simulations:

- **Neyrinck et al. (2018, MNRAS 478)**: BAO peaks in underdense vs overdense regions are separated by ~5 h⁻¹ Mpc at z=0. The shift is at the **percent level** (~10⁻²), driven by nonlinear gravitational infall/outflow. arXiv:1610.06215.
- **McCullagh et al. (2013, ApJL 763)**: The overdensity correlation function shows inward BAO shift because it's mass-weighted (high-density peaks dominate). Log-density transform removes the shift. arXiv:1211.3130.
- **Paillas et al. (2024)**: Comprehensive density-split BAO analysis. Confirms ~1% shifts between high/low density at z=0. Framework being applied to DESI DR1 data. arXiv:2407.02210.
- **Zhao et al. (2020)**: BAO detected in galaxy-galaxy, galaxy-void, and void-void correlations in BOSS/eBOSS. Observational confirmation of density-dependent BAO. arXiv:2110.03824.

**The problem**: Synchronism predicts a 10⁻⁴ shift. The known effect is ~10⁻² — two orders of magnitude larger. Three scenarios:

1. **If 10⁻⁴ is the raw shift**: The prediction is 100× too small. Standard gravity already produces a much larger effect. Synchronism would be predicting something we already see, but at the wrong amplitude.

2. **If 10⁻⁴ is a residual after subtracting the standard shift**: This is a fundamentally different (and much harder) test. You'd need to reconstruct the BAO to remove the nonlinear shift, then look for a tiny additional modulation. The site doesn't frame it this way.

3. **The prediction is ungrounded**: The site provides no derivation connecting C(ρ) to BAO scale modulation. No formula, no mechanism. The 10⁻⁴ number appears to be a qualitative prediction ("we expect density dependence") with an ungrounded magnitude.

**Does the site acknowledge the existing literature?** NO. Zero mentions of Neyrinck, density-split statistics, BAO reconstruction, or the known ~1% nonlinear gravity effect. The site frames the prediction as: "Standard cosmology predicts BAO is universal; Synchronism predicts it's density-dependent." This framing is incorrect — standard cosmology already predicts (and observational simulations confirm) density-dependent BAO. The site is claiming to predict an effect that's already known from conventional physics.

**Kill criterion check**: The site says TEST-04 is falsified if "BAO identical everywhere to 10⁻⁵ precision." But we already know BAO is NOT identical everywhere — it varies at ~10⁻² level from standard gravity. The kill criterion is already violated by known physics. The test as written doesn't discriminate Synchronism from ΛCDM.

**DESI status**: DESI Y1 (April 2024) and DR2 (March 2025) have been released with ~0.5% BAO precision across six redshift bins. Paillas et al. are applying density-split analysis to DESI DR1. The data exists and is being analyzed — but for standard cosmology purposes, not to test Synchronism.

**Assessment**: **TEST-04 needs fundamental reworking.** The current framing conflates a known standard-physics effect with a novel prediction. To be a valid test, Synchronism needs to: (a) acknowledge the ~1% standard shift, (b) derive a specific residual prediction beyond it, and (c) explain what C(ρ) mechanism produces the modulation and at what amplitude. None of these are currently done.

---

### TEST-05: RAR Environment Partition

**Synchronism prediction**: RAR scatter shows environment dependence (NP2 classification, p = 5×10⁻⁶ significance).

**Literature status**: PARTIALLY TESTED, with results that both support and complicate the picture.

**Direct evidence for environment-dependent RAR behavior:**

- **Chae et al. (2020, ApJ)**: Detected the MOND External Field Effect at >4σ in 153 SPARC galaxies. Galaxies in strong external fields show declining rotation curves at large radii; isolated galaxies show flat curves. arXiv:2009.11525.
- **Chae et al. (2021, ApJ)**: Located SPARC galaxies in the cosmic web. Galaxies in overdense regions show EFE values 2× larger than those in underdense regions. arXiv:2109.04745.
- **Bilek, Renaud & Samurovic (2026, March)**: Central galaxies in clusters deviate from the galaxy RAR, tracing the cluster RAR instead. The divergence radius decreases with group mass. arXiv:2603.23591.

**Complications:**
- **Desmond (2023)**: After properly marginalizing over galaxy parameters, found only weak evidence for EFE. Intrinsic RAR scatter drops to 0.034 ± 0.01 dex. arXiv:2303.11314.
- **Cluster-scale RAR**: Galaxy clusters follow a RAR with ~17× larger acceleration scale and 0.18 dex scatter (vs 0.13 for galaxies). No universal RAR holds across scales. Multiple papers confirm this.

**The Synchronism vs MOND distinction**: Both predict environment-dependent RAR behavior, but for different reasons:
- **MOND**: External gravitational field from neighbors suppresses the MOND boost. Functional form: the EFE modifies the interpolating function μ(x) in a specific, calculable way.
- **Synchronism**: Local density modifies coherence C(ρ), changing the effective gravitational coupling. The functional form depends on the coherence gradient, not the external field.

These are potentially distinguishable: MOND's EFE depends on the smooth external gravitational acceleration (dominated by the nearest massive neighbor); Synchronism's prediction depends on local matter density (which includes diffuse gas, small galaxies, etc.). A galaxy far from any massive neighbor but embedded in a dense filament would be predicted differently by the two frameworks.

**Has the direct scatter-vs-density test been done?** NO. Chae's work bins by cosmic web position (binary: overdense vs underdense) but doesn't correlate scatter with density as a continuous variable. The direct test requires a larger sample. BIG-SPARC (~4000 galaxies, Haubner & Lelli 2024, arXiv:2411.13329) is explicitly designed to enable this analysis.

**Assessment**: **TEST-05 is partially tested by Chae's EFE detection**, but not in a way that discriminates Synchronism from MOND. The direct scatter-vs-density test is untested and awaits BIG-SPARC. This test is discriminating only if Synchronism makes quantitative predictions that differ from MOND's EFE — which requires solving the nonlinear Poisson equation that the site mentions but has never computed.

---

## Synthesis: The Three-Test Landscape

| Test | Status | Discriminating? | Data Available? | Site Engagement with Literature |
|------|--------|----------------|-----------------|-------------------------------|
| TEST-02 (wide binaries) | Genuinely untested | YES (MOND vs Synchronism) | YES (Gaia DR3) | Minimal — doesn't cite Chae/Banik debate |
| TEST-04 (BAO) | Known effect at 100× predicted level | NO as currently framed | YES (DESI DR1/DR2) | NONE — doesn't acknowledge existing BAO environment literature |
| TEST-05 (RAR environment) | Partially tested (Chae EFE >4σ) | Only if quantitatively different from MOND | Partially (SPARC); BIG-SPARC pending | Minimal — doesn't cite Chae 2020/2021 EFE papers |

### The Three Failure Modes

1. **TEST-04 is the most problematic.** It predicts an effect that's already known from conventional physics, at the wrong scale, without acknowledging the existing literature. This isn't a "zero-cost test" — it's a misunderstanding of the current observational landscape.

2. **TEST-05 overlaps with MOND.** The environment dependence detected by Chae is exactly what MOND predicts. Without quantitative Synchronism-specific predictions (requiring the unsolved nonlinear Poisson equation), this test cannot discriminate the frameworks.

3. **TEST-02 is the genuine opportunity.** The density dependence of the wide binary anomaly (if the anomaly exists) has never been tested and would distinguish Synchronism from both MOND and ΛCDM.

### The Deeper Problem: Literature Engagement

The site presents its predictions as existing in a vacuum — as if nobody has studied environment-dependent gravitational effects. But:
- BAO environment dependence is a mature simulation field (Neyrinck 2018, Paillas 2024)
- RAR environment dependence has 4σ observational detection (Chae 2020)
- Wide binary analyses use the same Gaia DR3 data the test would require

The test catalog's framing as "zero-cost tests nobody has run" is partly right (TEST-02) and partly wrong (TEST-04, TEST-05). This creates a credibility problem: a researcher who finds TEST-04 ignores known results may discount the entire catalog.

---

## Implications for the Site

### Immediate
1. **TEST-04 must be reworked or removed.** The current framing claims to predict something standard cosmology already explains. Options: (a) derive a specific residual prediction beyond the ~1% standard shift, (b) reframe the test as detecting a novel mechanism for the known shift, (c) acknowledge the standard effect and explain what's different.

2. **TEST-05 should cite Chae (2020, 2021).** The EFE detection is direct evidence of environment-dependent RAR behavior. The test page should explain how Synchronism's prediction differs from MOND's EFE.

3. **TEST-02 should be highlighted as the crown jewel.** It's the one test that is genuinely untested, genuinely discriminating, and genuinely feasible. The site should explain what result would support Synchronism vs MOND vs Newtonian.

### Strategic
4. The test catalog should include a **"What the literature already knows"** column for each test, citing the relevant papers. This converts a weakness (not engaging with existing work) into a strength (showing where Synchronism adds to an active research conversation).

5. The Tier 1 page should link to BIG-SPARC (arXiv:2411.13329) as the enabling dataset for TEST-05.

6. The site should address **why the tests haven't been run** — the researcher visitor's most persistent question. Honest answers: (a) the framework was developed by AI-to-AI sessions, not by observers with data pipelines, (b) running these tests requires domain expertise in SPARC/Gaia data handling, (c) the research team is prioritizing theoretical development.

## Action: Maintainer

- **Critical**: Rework TEST-04 (BAO coherence modulation) to acknowledge the known ~1% standard BAO environment shift (Neyrinck 2018, Paillas 2024). Either derive a specific residual prediction or reframe the test.
- **High**: Add Chae et al. (2020, 2021) citations to TEST-05. Explain how Synchronism's prediction differs from MOND's EFE.
- **High**: Promote TEST-02 as the most discriminating untested prediction. Add a detailed "What each result would mean" section.
- **Medium**: Add a "Known results" column to the test catalog showing what the literature has already established for each test's target observation.
- **Medium**: Address "why haven't these been run?" transparently on the Tier 1 page.
- **Low**: Link to BIG-SPARC (arXiv:2411.13329) as the future dataset for TEST-05.

## Open Threads

1. **Can Synchronism quantitatively predict the wide binary density dependence?** For TEST-02 to be discriminating, it needs a specific prediction: "at density X, the anomaly should be Y, versus MOND's prediction of Z." This requires applying C(ρ) to the solar neighborhood density range.

2. **What mechanism connects C(ρ) to BAO scale modulation?** The 10⁻⁴ number appears ungrounded. The research archive (Sessions #100-101) apparently has "coherence-modified Friedmann equations." Do these produce a quantitative BAO prediction?

3. **BIG-SPARC is the trigger for TEST-05.** When it's published (Haubner & Lelli, in preparation), the scatter-vs-density analysis should be immediately feasible. Synchronism should have its prediction ready.

4. **The nonlinear Poisson equation.** Multiple findings now point to this: solving ∇²Φ = 4πGρ/C(|∇Φ|) would simultaneously (a) produce the EFE prediction quantitatively, (b) distinguish Synchronism from MOND in galaxy rotation, and (c) provide the mechanism for environment-dependent effects. This computation has never been done.

5. **The screening mechanism parallel.** Chameleon and K-mouflage theories predict density-dependent modifications to gravity at all scales. How does Synchronism's prediction compare? Is C(ρ) effectively a screening mechanism? If so, the screening literature's constraints apply.
