# Finding: DESI Has Spoken — The Cosmic Gap is Now an Active Discrepancy

## Origin
Self-directed, prompted by researcher-persona friction in 2026-03-12 visitor log: "the site is entirely silent on DESI 2024–2025 BAO results. A framework claiming cosmic-scale validity that doesn't address these is incomplete."

## Summary

DESI DR1 (April 2024) found a 2.6–3.9σ preference for evolving dark energy (w ≠ -1), and DESI DR2 (March 2025) strengthened this signal to 2.8–4.2σ. The site's cosmology predictions page treats DESI as a *future* dataset with a 2025–2027 testing window — but DESI is already producing results. More critically: the evolving dark energy signal is precisely the type of density-dependent modification that Synchronism would need to explain, yet the framework makes no specific prediction about the dark energy equation of state evolution w(z). This is both a gap and an opportunity.

The Gaia DR3 wide binary debate (TEST-02) has also advanced: a February 2026 paper found no observational evidence for MOND-induced velocity boosts, though the methodology of the strongest refutations (Banik 2024) has itself been critiqued. TEST-02 remains viable but the anomaly it was designed to test is currently unconfirmed.

---

## Research Notes

### 1. What DESI Has Actually Found

**DESI DR1 (April 2024): arXiv:2404.03002**
- Used BAO measurements from 6 million galaxies across 0.1 < z < 4.2
- Combined with CMB (Planck): 2.6σ preference for w₀ > -1 and wₐ < 0
- Combined with CMB + supernovae: 2.5–3.9σ depending on SN dataset (DES-SN5YR gives highest significance)
- Best-fit w₀ ≈ -0.8, wₐ ≈ -0.7 (dark energy less negative than cosmological constant, evolving with time)
- DESI alone (constant w): w = -0.99⁺⁰·¹⁵₋₀.₁₃ — consistent with ΛCDM but not conclusive

**DESI DR2 (March 2025): Three years of data**
- Preference for dynamical dark energy has *increased*, now 2.8–4.2σ combined
- Signal robust at low redshift (z < 0.3) across multiple analysis methods
- Horndeski scalar-tensor theory provides comparable fit: w₀ = -0.856 ± 0.062, wₐ = -0.53⁺⁰·²⁸₋₀.₂₆ at 2.4σ
- Modified gravity constraints: μ₀ = 0.04 ± 0.22, Σ₀ = 0.044 ± 0.047 (both consistent with GR = 0)
- "Beyond-Horndeski" physics now being tested; null energy condition violation not excluded

**The phantom crossing hint**: DESI data suggest dark energy may have been phantom-like (w < -1) at higher redshift and is now transitioning to w > -1. This phantom crossing cannot be achieved by minimally coupled scalar fields in GR — it requires scalar-tensor dynamics or something that modifies the vacuum structure.

### 2. The Critical Missing Piece: Synchronism Has No w(z) Prediction

The site says dark energy is "residual vacuum tension" — the coherence field relaxing toward its ground state. This is a qualitative picture. The site does NOT predict:

- A specific functional form w(z) = w₀ + wₐ(1 - a) for the dark energy equation of state
- Whether dark energy should be more or less negative at high z versus low z
- Whether Synchronism predicts phantom crossing (w crossing through -1)
- How the coherence density ρ_crit scales with the Hubble parameter H(z)

**This is the most actionable gap.** The claim "dark energy is coherence field relaxation" *must* produce a specific w(z). If coherence C(ρ, z) evolves as the universe expands and matter dilutes, the effective equation of state should follow a trajectory. Deriving this trajectory would:

1. Allow direct comparison with DESI's best-fit w₀ ≈ -0.8, wₐ ≈ -0.7
2. Create the first genuinely novel cosmological prediction of the framework
3. Either survive or be falsified by DESI DR3 (coming ~2027)

**Rough sketch of what would be needed:**

The coherence density evolves as ρ_matter ∝ (1+z)³. So C(ρ) decreases as z increases (less matter → lower coherence). If dark energy density ρ_DE traces (1 - C(ρ)) × vacuum_energy_density:

```
ρ_DE(z) ≈ Λ_vac × (1 - C(ρ_matter(z)))
```

For C(ρ) = tanh(γ log(ρ/ρ_crit + 1)):

- At high z: ρ_matter >> ρ_crit, C → 1, ρ_DE → 0 (coherent universe, no residual vacuum)
- At low z: ρ_matter << ρ_crit, C → 0, ρ_DE → Λ_vac (decoherent universe, vacuum tension dominates)
- The transition epoch z* where ρ_matter ≈ ρ_crit is when dark energy "turns on"

This is actually phantom-crossing-like behavior! C decreases as universe expands → w(z) becomes less negative at lower z → consistent with DESI's wa < 0 finding. But to check this, someone needs to actually compute w(z) = -1 - (1/3)(d ln ρ_DE/d ln a).

### 3. TEST-04 (BAO Modulation at 10⁻⁴): Already Partially Testable

The site's TEST-04 prediction: BAO peak shifts ~10⁻⁴ between high/low-density regions.

**What DESI has already done that is relevant:**
- DESI DR1 measured BAO in 6 separate redshift bins across 0.1 < z < 4.2
- DESI measures large-scale structure in traced overdensities *and* voids separately
- The growing cosmological literature on "BAO in voids" (e.g., Nadathur et al. 2019) provides exactly the split between low-density and high-density environments

**The concrete test**: DESI's void vs. cluster BAO measurement already exists or is being done. A 10⁻⁴ shift in the BAO scale (0.01%) between void environments and overdense environments should be detectable at DESI's precision. DESI DR1 achieves ~0.5% BAO precision in individual bins; the kill criterion (sub-0.1% across multiple environments finding no modulation) may be achievable with DR2 or already-published catalog-level analyses.

The site says TEST-04 is planned for 2025–2027. But the 2025 is now *here* and DESI has published. Has anyone checked whether the published DESI void/wall/cluster BAO measurements show the predicted 10⁻⁴ modulation? This should be the next step.

### 4. Gaia Wide Binary Debate: TEST-02 Is Now Harder to Design

**Summary of the debate status (early 2026):**

| Paper | Year | Finding |
|-------|------|---------|
| Hernandez et al. | 2022–2023 | 18–22% velocity enhancement at a < 2a₀; consistent with MOND |
| Chae et al. | 2023–2025 | Independent confirmation; ~40–50% acceleration boost at large separation |
| Banik et al. | 2024 | 19σ preference for Newtonian gravity |
| Banik rebuttal | 2024 | Methodological critique: Banik failed to incorporate observational errors; 30–62% bin misassignment |
| Pittordis et al. | 2025 | Improved triple modelling; GR still preferred |
| Chae | 2025 | Bayesian analysis of best-quality radial velocities favors MOND for s > 2 kAU |
| Anonymous | Feb 2026 (arXiv:2602.24035) | "No observational evidence for MOND-induced velocity boosts"; Newtonian 1500× more likely |

**Current status**: Deeply contested. The signal appears to diminish as methodological rigor increases, but methodological critiques exist on both sides. No consensus.

**Implications for TEST-02**: Synchronism's prediction is that wide binary anomalies depend on *local stellar density*, which would explain why studies find conflicting results — they're sampling different density environments. This is an elegant hypothesis, but it requires:

1. The anomaly to exist in *some* environments (currently uncertain)
2. Density-stratified samples that haven't been published yet
3. A prediction for how the anomaly magnitude scales with density

If the Feb 2026 result holds (no anomaly anywhere), TEST-02 cannot distinguish Synchronism from GR because both predict no anomaly. The density-dependence prediction becomes a prediction about *why* the anomaly doesn't show up uniformly, not about explaining observed data. This is a less testable position.

**Recommended site update**: The wide binaries page should acknowledge the contested status and explain that Synchronism's *specific* prediction (density-dependent anomaly) could actually unify the conflicting results *if* the anomaly exists in sparse environments and is suppressed in dense ones. This framing turns the controversy into an opportunity.

### 5. What Synchronism Needs to Say About DESI Specifically

The researcher persona's exact complaint: "A framework claiming cosmic-scale validity that doesn't address these is incomplete."

Three things DESI has found that Synchronism must engage:

**5a. Evolving dark energy (w ≠ -1)**
The 2.8–4.2σ signal for dynamical dark energy is the biggest cosmological news since Planck. If Synchronism claims dark energy is "coherence field relaxation," it must predict whether this relaxation produces an evolving w(z) and what that trajectory looks like. The qualitative story (coherence decreasing → vacuum tension increasing → w evolving toward -1 from below) is actually consistent with DESI's wa < 0 finding! But this has never been made quantitative.

**5b. BAO environment-dependence is measurable now**
DESI has achieved the precision needed to test TEST-04. The question is no longer "when will DESI be precise enough?" but "has anyone applied the coherence-dependent BAO prediction to published DESI data?" This is a zero-cost analysis someone could do today.

**5c. Modified gravity constraints**
DESI DR2 constrains the bulk modified gravity parameters (μ₀, Σ₀) to be consistent with GR. Synchronism's modifications are *density-dependent* and wouldn't show up as constant bulk modifications. This is important: DESI's modified gravity constraints do NOT directly constrain Synchronism, because Synchronism predicts environment-dependent (not bulk) modifications. This should be stated clearly on the site.

---

## Implications for the Site

The site's cosmology content is organized around *predictions to be tested* but is missing the *current state of the relevant tests*. DESI has already published two major data releases. The site should be updated to reflect:

1. DESI DR1 (2024) and DR2 (2025) found tantalizing dark energy evolution hints at 2.8–4.2σ — this is the observational context for TEST-04
2. Synchronism's dark energy picture ("coherence relaxation") is qualitatively consistent with DESI's wa < 0 finding, but requires quantitative development
3. DESI's bulk modified gravity constraints (consistent with GR) do not constrain Synchronism's *density-dependent* modifications specifically
4. Wide binary TEST-02 is now contested — the site should explain how Synchronism's density-dependent prediction could reconcile the conflicting results

---

## Action: Maintainer

### Priority 1 (High): Update cosmology status timeline
On `/cosmology-predictions`, the BAO modulation test says "2025–2027." DESI DR2 was published March 2025. The test window has opened. Update the status to reflect this and add a note: "DESI DR2 (March 2025) has achieved sufficient precision to begin testing this prediction; analysis pending."

### Priority 2 (Medium): Add DESI context paragraph
On `/cosmology-predictions` or `/dark-matter`, add a brief paragraph: "DESI DR1/DR2 (2024–2025) found [2.8–4.2σ] evidence for evolving dark energy with best-fit w₀ ≈ -0.8, wa ≈ -0.7. Synchronism's picture of dark energy as coherence field relaxation is qualitatively consistent with this evolution, but the framework has not yet derived a specific w(z) prediction. This derivation is the next research milestone for cosmological validation."

### Priority 3 (Medium): Update wide binaries page
On `/wide-binaries` or wherever TEST-02 is described, add: "Note: The wide binary anomaly is actively contested (Banik 2024 finds no effect; Chae 2025 confirms enhancement). Synchronism's density-dependent prediction could explain the conflicting results — studies sampling different density environments would naturally find different anomaly magnitudes. A definitive test requires density-stratified samples."

### Priority 4 (Research): Derive w(z) prediction
This is a research task, not a site fix. The coherence-relaxation picture of dark energy should produce a specific w(z). A Synchronism research note deriving this would create the framework's most novel cosmological prediction and could be compared directly to DESI constraints.

---

## Research Archive: Sessions #100–101 Are the Missing Piece

The research archive already worked through the cosmic dark energy derivation in December 2025, and these sessions are directly relevant to the DESI gap. They are apparently not surfaced on the site.

### Session #100 (Dec 8 2025): Modified Friedmann Equation

Derived the coherence-modified Friedmann equation: H² = (8πG/3C) × ρ_m, where the "extra" density ρ_DE = ρ_m × (1-C)/C emerges naturally from coherence dynamics. This dissolved the coincidence problem (Ω_Λ ≈ Ω_m is a tautology when dark energy is coherence-based).

**Problem found**: The naive galactic C form gives w_eff ≈ +0.24 at z=0. This contradicts observations.

**Session #100 already predicted**: "w ≠ -1 (exactly)" and "w(z) evolves." Test: DESI measurements. This is now confirmed at ~3σ by DESI DR2.

### Session #101 (Dec 8 2025): Resolution — Cosmic vs. Galactic Coherence

Resolved the w_eff problem by deriving that **cosmic coherence has a different form than galactic coherence**:
- C_galactic = tanh(γ log(ρ/ρ_crit + 1)) — local pattern interaction in bound systems
- C_cosmic = Ω_m (matter fraction) — global coherence of the expanding universe

Using the cosmic form:
- w_eff = -1 exactly (reproduces ΛCDM at background level)
- S₈ tension predicted: enhanced growth from G_eff > G at galactic scale, while cosmic background is ΛCDM

**Critical observation**: Session #101 achieves EXACT ΛCDM reproduction at background level. But DESI found w₀ ≈ -0.8, wₐ ≈ -0.7 — a deviation from ΛCDM at 2.8–4.2σ. This means:

1. Session #101's cosmic C form (w = -1 exactly) is now in tension with DESI DR2 results
2. The "prediction" from Session #100 that w ≠ -1 may be more accurate than the Session #101 "fix"
3. OR the cosmic C form needs to be extended beyond simple C_cosmic = Ω_m to reproduce the wa < 0 evolution

**This is the live research question**: The research archive oscillated between w_eff > 0 (wrong direction), w = -1 exactly (too precise), and the DESI finding of w₀ ≈ -0.8 (slightly different from -1, evolving). Does the Synchronism framework have enough freedom in C_cosmic to fit DESI's best-fit trajectory without adding free parameters?

### Session #103: Cluster Growth Rate

Session #103 explored cluster mass growth rates, which is relevant to DESI's σ₈/S₈ constraints. The S₈ tension prediction from Session #101 should be compared to current measurements.

---

## Open Threads

1. **Can ρ_crit(z) evolution reproduce DESI's w₀ ≈ -0.8, wₐ ≈ -0.7?** The back-of-envelope in section 2 suggests it might — work it out.

2. **Has anyone done BAO in voids vs. walls vs. filaments with DESI DR1/DR2?** The Nadathur et al. void BAO work shows this is feasible. A 10⁻⁴ shift is small but DESI precision is now at ~0.5% per bin; searching for correlated shifts across many bin comparisons could detect it.

3. **What does Synchronism predict for the CMB lensing power spectrum?** This is another DESI/Planck observable where density-dependent modifications would leave fingerprints.

4. **The phantom crossing question**: DESI hints at w crossing -1. Synchronism's coherence-relaxation picture might naturally produce this if C(ρ) transitions through 0.5 at some redshift. Is there a critical z where this happens?

5. **Does the February 2026 wide binary result (arXiv:2602.24035) also stratify by local stellar density?** If not, it hasn't actually tested Synchronism's specific prediction. Worth reading.

6. **Sessions #100–101 tension with DESI**: Session #101 achieves exact ΛCDM (w = -1) but DESI shows w₀ ≈ -0.8. Can C_cosmic = Ω_m(z) (matter fraction evolving with redshift) reproduce wa < 0? If Ω_m(z) changes with redshift (as it does in standard cosmology), then C_cosmic also evolves, potentially producing wa ≠ 0. Work this out.

7. **The S₈ tension**: Session #101 predicted enhanced growth (S₈ tension) from the galactic-scale G_eff > G. Current DES Y3, KiDS, and Planck measurements show S₈ tension at ~2-3σ. Does Synchronism's prediction match the sign and magnitude? This is another already-published observational constraint the site hasn't engaged.
