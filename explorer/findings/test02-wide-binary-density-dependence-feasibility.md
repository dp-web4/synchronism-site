# Finding: TEST-02 Is Genuinely Unstudied — But Has a Critical Confound Nobody Mentions

## Origin
Self-directed (WAKE phase redirect). Prompted by today's visitor log (2026-04-14), where the Pass 4 researcher said: "The single most important action this project could take is to execute TEST-02 or TEST-04 with existing public data." I investigated whether TEST-02 has already been done by someone else, whether it's truly discriminating, and what it would actually take.

## Summary

The site's most promising test — whether the wide binary gravitational anomaly depends on local stellar density (TEST-02) — is **genuinely unstudied**. A comprehensive literature search confirms that no group in the wide binary debate (Chae, Banik, Hernandez, Pittordis, the C3PO team) has tested for density dependence. The test IS discriminating: MOND predicts no local-density dependence (g_ext is constant to ~1% across the solar neighborhood), while Synchronism predicts a measurable correlation. However, the site's /wide-binaries page omits a **critical confound**: dynamical disruption by stellar encounters is itself density-dependent, and it produces exactly the signal Synchronism predicts, even in Newtonian gravity. The confound can be controlled for, but the site needs to acknowledge it and specify the sub-predictions that distinguish a gravity signal from a dynamical selection effect.

---

## The Literature Search

### Who has tested density dependence?

**Nobody.** I searched all major wide binary gravity papers from 2023-2026:

| Paper | Tests density dependence? | What they test instead |
|-------|--------------------------|----------------------|
| Chae 2024 (ApJ) | No | Acceleration threshold, boost factor |
| Chae 2025 (3D velocities, 36 pairs) | No | Global γ from 3D orbits |
| Banik et al. 2024 (MNRAS) | No | GR vs MOND likelihood |
| Pittordis & Sutherland 2025 (OJA) | No | Triple contamination modeling |
| Hernandez et al. 2024 (MNRAS) | No | Mass correction to Banik sample |
| March 2026 reanalysis (arXiv 2603.11015) | No | Orbital modeling sensitivity |
| C3PO 2025 (high-precision RVs) | No | Global MOND a₀ constraint |

Every paper treats the anomaly as either present or absent for the whole sample. None split by local stellar density, galactic latitude, distance from the plane, or proximity to stellar overdensities.

The closest anyone comes is Pittordis & Sutherland (2025), who cut the galactic plane (|b| < 15°) — but this is a quality cut to avoid crowding contamination, not an investigation of environmental dependence.

### Has anyone even discussed density dependence?

Not in the gravity-testing literature. The wide binary disruption literature (Jiang & Tremaine 2010, Hamilton & Modak 2023) discusses how local density affects binary survival, but treats this as a dynamical effect to control for, not a gravity signature to look for.

---

## Why TEST-02 Is Genuinely Discriminating

The key insight: the galactic external field g_ext is nearly constant across the solar neighborhood, but local stellar density varies dramatically.

### The galactic external field is constant across the sample

- Sun's galactocentric radius: R₀ ≈ 8.2 kpc
- g_ext at Sun: ≈ 1.8 a₀ ≈ 2.2 × 10⁻¹⁰ m/s²
- Wide binary samples extend to 100-250 pc
- Variation of g_ext over 250 pc: Δg/g ≈ 250 pc / 8200 pc ≈ 3%

In MOND, all solar neighborhood wide binaries experience the same external field to within ~3%. The EFE prediction is the same for all of them, regardless of local environment.

### Local stellar density varies enormously

Within the same 250 pc volume:
- Field: ρ ≈ 0.04 M☉/pc³
- Near the Hyades cluster (≈47 pc from Sun): ρ_local several times field
- Moving groups (Pleiades trail, AB Dor, β Pic): elevated density
- Above/below midplane: ρ drops by factors of 2-5 at |z| > 100 pc
- Near molecular clouds: significantly elevated

The density ratio between the densest and least dense environments in the solar neighborhood is easily 5-10×, far exceeding the 3% variation in g_ext.

### What each framework predicts

| Framework | Density dependence? | Mechanism | Magnitude |
|-----------|-------------------|-----------|-----------|
| Newton | No anomaly at all | — | — |
| MOND (AQUAL) | No | g_ext constant (~1.8 a₀) across sample; local stellar density contributes ≈10⁻⁴ a₀, negligible | 0% |
| MOND (with local EFE) | Negligible | Even a 500 M☉ cluster at 50 pc produces g ≈ 3 × 10⁻¹⁴ m/s² ≈ 0.00025 a₀ | <0.1% |
| CDM | No | No dark matter halos in wide binary systems | 0% |
| Synchronism (tanh form) | Yes (per site claim) | Higher ρ → higher C → more Newtonian | Unknown (two-C problem) |
| Synchronism (Hill form) | Yes (per site claim) | Higher ρ shifts the effective a₀ | Unknown (two-C problem) |

**MOND explicitly predicts no local-density dependence.** This makes TEST-02 a genuine three-way discriminator:
- Anomaly + no density dependence → MOND
- Anomaly + density dependence → Synchronism (or something new)
- No anomaly → Newton

---

## The Critical Confound: Dynamical Disruption

### The problem the site doesn't mention

Wide binary disruption by stellar encounters is itself density-dependent. In denser environments, gravitational encounters with passing stars disrupt wide binaries more effectively. The disruption timescale scales as:

t_dis ∝ σ_v / (n_star × G × M_perturber × a)

where a is the binary semimajor axis and n_star is the stellar number density.

Key estimates (solar neighborhood, a = 10,000 AU):
- Field density (n ≈ 0.1 pc⁻³): t_dis ≈ 10-20 Gyr → most survive
- 5× overdense region: t_dis ≈ 2-4 Gyr → significant depletion
- 10× overdense region: t_dis ≈ 1-2 Gyr → most wide binaries disrupted

For wider binaries (a = 50,000 AU), these timescales are ~5× shorter.

### Why this mimics the Synchronism signal

The disruption confound produces **exactly** the pattern Synchronism predicts:

1. Dense environments → fewer surviving wide binaries (especially the widest ones)
2. Surviving binaries in dense environments are tighter → higher internal acceleration → less anomaly
3. Sparse environments → more surviving wide binaries → lower internal acceleration → more anomaly

An observer who bins by local density would see: "the anomaly is weaker in denser environments" — precisely what Synchronism predicts, but from Newtonian dynamics + survivorship bias.

### Can the confound be controlled?

Yes, partially. The key is to compare binaries at the **same separation** across different density environments:

**Controlled test design:**
1. Select wide binaries in a narrow separation range (e.g., 5000-10000 AU)
2. Estimate local stellar density ρ_local for each binary from Gaia data
3. Bin by ρ_local
4. Compare the velocity ratio v_obs/v_Newton across density bins, controlling for separation

If the disruption confound is the only effect, binaries at the same separation should show the same velocity ratio regardless of environment (because the surviving ones have the same orbital parameters). If there's a genuine gravitational density dependence, the velocity ratio should still vary.

**Sub-predictions that discriminate:**

| Signal | Disruption confound | Gravitational effect |
|--------|-------------------|--------------------|
| Weaker anomaly in dense environments | ✓ (via sample bias) | ✓ (via C(ρ)) |
| Effect strongest for widest binaries | ✓ (widest disrupted first) | No specific prediction |
| Effect persists at fixed separation | ✗ (controlled away) | ✓ (C(ρ) acts on the dynamics) |
| Anomaly onset shifts to wider separations in dense environments | Possible (but second-order) | ✓ (ρ_crit shifts the threshold) |
| Binary eccentricity distribution differs by environment | ✓ (encounters circularize/heat) | ✗ (gravity doesn't change orbits) |

The most discriminating sub-prediction: **at fixed separation, does the velocity anomaly still depend on environment?** The confound cannot produce this signal.

---

## What ρ Means for Wide Binaries — The Specification Gap

The site's /wide-binaries page says: "higher ambient density shifts ρ_crit, altering the acceleration threshold at which modified dynamics appear." But this requires specifying what ρ means for a wide binary system.

In the galactic rotation context, ρ maps to g/a₀ (acceleration). For wide binaries, possibilities include:

1. **ρ = g_internal/a₀** — the mutual gravitational acceleration between the stars, relative to a₀. This is what determines whether the system is in the low-acceleration regime. Environmental density wouldn't enter.

2. **ρ = ρ_local** — the local stellar/matter density. This would produce the predicted environmental dependence but has no formal connection to the equations on the site.

3. **ρ = g_total/a₀** — the total acceleration (internal + external). Since g_ext ≈ 1.8 a₀ is nearly constant, this reduces to case 1.

4. **ρ = ρ_ambient** — the "presence density" of compatible structural elements within the MRH. This is the framework's own language but has no operational definition for wide binaries.

The site doesn't specify which interpretation applies. Without this specification, the prediction "anomaly depends on local density" is qualitative but not quantitative. Any of interpretations 1-3 would NOT produce environmental dependence (because they're dominated by constants). Only interpretation 4 could, but it requires defining what "presence density" means observationally.

This is a specific instance of the general MRH specification gap flagged by multiple visitor personas.

---

## Feasibility Assessment

### Data availability

| Requirement | Available? | Source |
|-------------|-----------|--------|
| Wide binary catalog with orbital parameters | ✓ | El-Badry et al. (2021): ~1.3M pairs from Gaia EDR3; Chae (2024): ~26,500 pure binaries |
| Proper motions + parallaxes | ✓ | Gaia DR3 |
| Radial velocities | Partial | Gaia DR3 (limited precision); C3PO (100 pairs, high precision) |
| Local stellar density estimates | ✓ | Gaia Catalogue of Nearby Stars (331,312 stars within 100 pc); full Gaia density maps to 250 pc |
| Galactic latitude + disk height | ✓ | Direct from Gaia coordinates + parallax |

### Analysis pipeline (estimated)

1. **Cross-match** wide binary catalog with local density estimates (1-2 weeks)
2. **Bin by density** — at least 3 bins (low, medium, high ρ_local) with enough binaries per bin for statistics (1 week)
3. **Compute velocity anomaly** per bin, controlling for separation (2-4 weeks)
4. **Model the disruption confound** — predict the expected survivorship bias as a function of density (2-4 weeks)
5. **Compare residual** — anomaly after subtracting predicted disruption effect (1-2 weeks)
6. **Systematics check** — test for correlation with galactic latitude, distance, metallicity as controls (2 weeks)

Total: ~3-4 months for a competent astronomer. The site's "6 months" estimate is reasonable.

### Statistical power

With ~26,500 binaries in Chae's catalog (or ~1.3M in El-Badry's), there should be enough in each density bin to detect a ~10% difference in the velocity anomaly at >3σ, assuming the anomaly exists at all. The C3PO sample (100 high-precision pairs) is too small for density subgroups.

---

## Implications for the Site

### The /wide-binaries page needs revision

1. **Critical**: Add the dynamical disruption confound. Any reviewer would immediately identify survivorship bias as an alternative explanation. The site's credibility depends on acknowledging this and specifying how to distinguish it from a gravitational signal.

2. **High**: Specify what ρ means for wide binaries. The current language ("higher ambient density shifts ρ_crit") doesn't connect to the framework's equations. Which ρ enters C(ρ)?

3. **High**: Add the discriminating sub-predictions (fixed-separation test, threshold shift test) that separate the gravitational signal from the dynamical confound.

4. **Medium**: Note that the quantitative prediction depends on resolving the two-C problem (which C function, what magnitude of effect).

5. **Medium**: Acknowledge the C3PO result — their 3.1σ tension with MOND's canonical a₀ is relevant context for any wide binary test.

### The test design is correct, but incomplete

The core prediction — anomaly depends on local density — is genuinely discriminating from MOND. The site is right that this could be decisive. But the current presentation omits the hard part: controlling for the dynamical confound. A more complete test specification would include:

- Fixed-separation comparison across density bins
- Predicted confound magnitude from binary population synthesis
- Specific quantitative prediction from the chosen C function
- Criteria for declaring the gravitational signal detected vs. confound-only

---

## The Deeper Question: Why Hasn't Anyone Done This?

The wide binary debate has consumed dozens of papers and thousands of hours since 2023. Groups have argued about sample selection, orbital modeling, triple contamination, and statistical methods. But nobody has tested the simplest environmental variable: local stellar density.

Possible reasons:
1. **Both sides assume the anomaly is universal** — MOND predicts it's the same everywhere (for the same g_ext), and the Newtonian camp says it's zero everywhere. Neither camp has a reason to bin by density.
2. **Density estimation is non-trivial** — estimating local stellar density from Gaia requires careful volume completeness corrections and accounting for the mass function.
3. **The samples are local** — most studies use binaries within 100-250 pc of the Sun, where density variation is modest (though not negligible).
4. **Nobody has proposed density dependence as a gravity prediction** — Synchronism's TEST-02 may be the only framework that specifically predicts this.

This last point is significant: even if Synchronism's C(ρ) is scaffolding (as the explorer arc concluded), TEST-02 represents a **genuinely novel question** about gravity that the framework generated. Whether density dependence is found or not, testing it would advance the field. This is the scaffolding hypothesis in action: the wrong equation asking the right question.

---

## Open Threads

1. **Quantify the disruption confound**: Use binary population synthesis (e.g., BINOCS or BSE codes) to predict the expected velocity distribution as a function of separation and local density under Newtonian gravity alone. This gives the null hypothesis for the controlled test.

2. **Check whether Chae's and Banik's samples differ in environment**: If the 36 3D-velocity binaries (Chae 2025) and the 8,611 binaries (Banik 2024) happen to be in different density environments, that could explain some of the disagreement — and would be immediate evidence for density dependence.

3. **The galactic latitude proxy**: Since density drops with |z| (distance from the disk midplane), galactic latitude is a rough proxy for local density. Splitting existing samples by |b| would be the cheapest first test — it requires no new density estimation, just a subgroup analysis of existing catalogs.

4. **Open cluster halo binaries**: Wide binaries in the tidal tails of dissolving open clusters (e.g., Hyades stream) experience significantly different local densities than field binaries. These are a natural test population, though dynamical history complicates interpretation.

5. **Is the C3PO result an early hint?** The C3PO team found tension with MOND's canonical a₀ at 1.9-3.1σ. Their 100 binaries have high-precision radial velocities. If these binaries happen to be in a different density environment than the broader Gaia sample, the tension could reflect density dependence rather than a wrong a₀.

---

## Sources

- Chae, K.-H. (2024). Robust Evidence for the Breakdown of Standard Gravity at Low Acceleration. ApJ.
- Chae, K.-H. (2025). Detection of Gravitational Anomaly from 36 Wide Binaries with 3D Velocities. arXiv:2601.21728
- Banik, I. et al. (2024). Strong constraints on the gravitational law from Gaia DR3 wide binaries. MNRAS 527, 4573.
- Pittordis, C. & Sutherland, W. (2025). Wide Binaries from GAIA DR3: testing GR vs MOND with realistic triple modelling. arXiv:2504.07569
- Hernandez, X. et al. (2024). A recent confirmation of the wide binary gravitational anomaly. MNRAS. arXiv:2410.17178
- March 2026 reanalysis. Gravitational Anomaly Measurement is Sensitive to Orbital Modeling. arXiv:2603.11015
- C3PO team (2025). High-Precision Differential Radial Velocities of C3PO Wide Binaries. arXiv:2512.19652
- Gaia GCNS (2021). Gaia Catalogue of Nearby Stars. A&A.
- Stellar mass density (2025). Counting mass with Gaia. arXiv:2507.06052
- Disrupted wide binaries (2024). arXiv:2407.07151
- Formation and disruption in clusters (2026). arXiv:2603.28878
- Kroupa et al. (2022). Open cluster tidal tails and MOND. Phantom of Ramses simulations.
- Site source: src/app/wide-binaries/page.tsx, src/app/tier-1-existing/page.tsx (TEST-02)
