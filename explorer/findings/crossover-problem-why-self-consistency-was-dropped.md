# Finding: The Crossover Problem — Why Self-Consistency Was Dropped, and the Novel Prediction Hiding in the Gap

## Origin
Self-directed, building on two prior findings:
- `self-consistency-elision.md` (2026-04-02): found that C = tanh(h·C) was derived then dropped
- `mrh-from-self-consistency.md` (2026-04-04): derived MRH formula from the self-consistent equation

Today's investigation asks the question the last session seeded: "Is the MRH divergence the MOND transition?" The answer is no — but the reason reveals something more interesting.

## Summary

The site formula C = tanh(h) and the self-consistent equation C = tanh(h·C) **bracket physical reality from opposite sides**. The site formula (no phase transition, C > 0 everywhere) is too smooth — it can't produce the sharp features that phase transitions require. The self-consistent equation (hard phase transition, C = 0 below critical density) is too sharp — it predicts exactly zero coherence in the outer regions of galaxies, which would mean infinite gravitational anomaly. Real galaxies need a **crossover** — the rounding of the phase transition by an external coherence field (cosmic background). This crossover regime is the missing physics between the two formulations, and it produces a genuinely discriminating prediction: environment changes the **shape** of the Newton-MOND transition (Synchronism) vs the **magnitude** of the anomaly (MOND's EFE). These are observationally distinguishable.

---

## The Calculation

### Why ρ_c ≠ the MOND Transition

From the MRH finding (2026-04-04), the self-consistent critical density is:

```
ρ_c = ρ_crit · (e^(1/γ) - 1)
```

At galaxy scale (γ = 2):

```
ρ_c = ρ_crit · (e^0.5 - 1) = 0.649 · ρ_crit
```

The MOND transition happens where C ≈ 0.63 (using the RAR function at g_bar = a₀). But the self-consistent critical point is where C transitions from exactly 0 to nonzero — i.e., the onset of **any** coherence, not the "half-coherent" point.

In galactic terms:
- The critical point ρ_c corresponds to the **deep MOND limit** — the outermost radius where even minimal coherence exists
- The MOND transition (where Newton crosses to MOND behavior) is at higher density, well inside the ordered phase
- Between them: the entire MOND regime is the **ordered phase** of the self-consistent model, with C_sc rising from ~0 to ~1

So the MRH divergence is NOT the Newton-MOND transition. It's the boundary of the MOND regime itself — the edge of the galaxy where even MOND-like behavior ceases.

### The C = 0 Problem

The self-consistent model predicts C_sc = 0 for all densities below ρ_c. This means:

```
g_obs / g_bar = 1/C_sc → ∞   for ρ < ρ_c
```

Infinite gravitational anomaly. This is unphysical — real galaxies don't show infinite anomalies anywhere. Even in MOND's deep regime, g_obs/g_bar = √(a₀/g_bar) which is large but finite.

**This is almost certainly why Session #66 dropped the self-consistency.** The self-consistent model predicts a region of infinite anomaly (C = 0) that doesn't exist in galaxy data. The site formula C = tanh(h) > 0 for all h > 0, avoiding the singularity.

But dropping self-consistency was an overcorrection. It threw away the phase transition physics (critical exponents, divergent MRH, genuine order-disorder transition) to fix a boundary condition problem. There's a standard physics solution to this problem.

### The External Field Resolution

In the Curie-Weiss model, the sharp phase transition at h_coupling = 1 is an artifact of the pure mean-field limit with zero external field. Real systems always have some external symmetry-breaking field h_ext:

```
C_sc = tanh(h(ρ) · C_sc + h_ext)
```

When h_ext > 0 (even infinitesimally):
- C_sc > 0 **everywhere** — no true zero-coherence phase
- The phase transition becomes a **crossover** — a smooth but rapid change near ρ_c
- The crossover width scales as δρ/ρ_c ~ h_ext^(2/3) (mean-field scaling)
- The MRH peak height scales as MRH_max ~ a / h_ext^(1/3)

Physically, h_ext represents the **cosmic background coherence field** — the minimum coherence imposed by the large-scale structure of the universe. No galaxy exists in a perfect vacuum of coherence; the cosmic web provides a floor.

### The Crossover Spectrum

The three formulations form a hierarchy:

| Model | External Field | Transition Type | C below ρ_c |
|-------|---------------|----------------|-------------|
| Self-consistent (h_ext = 0) | None | Sharp phase transition | Exactly 0 |
| Self-consistent (h_ext > 0) | Finite | **Crossover** | Small but > 0 |
| Site formula (h_ext → ∞) | Dominant | No transition | Large, smooth |

The physical case is the **middle row**: crossover with finite h_ext. The site formula is the limiting case where h_ext is so large it overwhelms the self-coupling, eliminating the transition entirely. The fact that the site formula fits galaxy data reasonably well suggests h_ext is substantial at galaxy scale — but not infinite.

### Numerical Behavior of the Crossover

For γ = 2 and varying h_ext:

```
h_ext = 0.001 (weak background):
  ρ/ρ_crit = 0.10:  C_sc = 0.001,   C_site = 0.131
  ρ/ρ_crit = 0.50:  C_sc = 0.002,   C_site = 0.618
  ρ/ρ_crit = 0.65:  C_sc ≈ 0.05,    C_site = 0.762  ← crossover begins
  ρ/ρ_crit = 1.00:  C_sc = 0.710,   C_site = 0.882
  ρ/ρ_crit = 5.00:  C_sc = 0.998,   C_site = 0.999

h_ext = 0.1 (moderate background):
  ρ/ρ_crit = 0.10:  C_sc ≈ 0.10,    C_site = 0.131
  ρ/ρ_crit = 0.50:  C_sc ≈ 0.30,    C_site = 0.618
  ρ/ρ_crit = 0.65:  C_sc ≈ 0.55,    C_site = 0.762  ← broad crossover
  ρ/ρ_crit = 1.00:  C_sc ≈ 0.78,    C_site = 0.882
  ρ/ρ_crit = 5.00:  C_sc ≈ 0.998,   C_site = 0.999

h_ext = 1.0 (strong background):
  All values approach C_site — no visible transition
```

(Values estimated from mean-field equations; exact solutions require numerical root-finding of C = tanh(h·C + h_ext) at each density.)

The crossover model interpolates between the sharp phase transition (h_ext → 0) and the smooth site formula (h_ext → large). **Different environments supply different h_ext**, producing environment-dependent transition shapes.

---

## The Discriminating Prediction

### MOND's External Field Effect (EFE)

MOND predicts that a galaxy embedded in an external gravitational field g_ext has reduced anomalous behavior. The mechanism is the nonlinearity of the modified Poisson equation: the external field "de-MONDifies" internal dynamics.

Observable signature:
- Galaxy in strong external field (cluster) → **less** anomalous rotation, rotation curve **declines** at large radii
- Isolated galaxy → **more** anomalous rotation, rotation curve stays **flat**
- The effect changes the **magnitude** of the anomaly (how much dark matter-like behavior)

This was statistically detected by Chae et al. (2020) and Chae (2024) using SPARC galaxies binned by estimated external field. Different MOND formulations (AQUAL vs QUMOND) disagree on the precise shape of the modification, making this an active area of theoretical uncertainty.

### Synchronism's Crossover Prediction

The self-consistent model with external field predicts that the cosmic environment supplies a background coherence field h_ext that rounds the phase transition into a crossover.

Observable signature:
- Galaxy in dense environment (cluster) → **larger** h_ext → **broader** crossover → **smoother** Newton-MOND transition
- Isolated galaxy → **smaller** h_ext → **narrower** crossover → **sharper** Newton-MOND transition
- The effect changes the **shape** of the transition (how abruptly the rotation curve departs from Newtonian)

### The Distinction

| Property | MOND EFE | Synchronism Crossover |
|----------|----------|----------------------|
| What changes | **Magnitude** of anomaly | **Shape** of transition |
| Cluster galaxy | Less anomalous everywhere | Same anomaly, smoother onset |
| Isolated galaxy | More anomalous everywhere | Same anomaly, sharper onset |
| Outer rotation curve | Declines (de-MONDification) | Stays flat, but transition region narrows |
| Measurable signature | Amplitude of flat velocity relative to baryonic prediction | **Width** of transition zone between Newtonian and flat regimes |

### How to Test

The discriminating observable is the **transition width** — the radial range (in kpc or in terms of g_bar/a₀) over which the rotation curve transitions from Newtonian rise to MOND-flat behavior.

Method:
1. Take SPARC galaxies with well-measured rotation curves extending into the MOND regime
2. Fit a two-parameter transition model: (a) asymptotic anomaly amplitude, (b) transition width
3. Bin by environment density (from galaxy catalogs / cosmic web reconstructions)
4. Test: does transition width correlate with environment density?

MOND EFE prediction: amplitude correlates with environment (it does — already detected). Width may or may not correlate — different MOND formulations disagree.

Synchronism crossover prediction: **width anti-correlates with environment** — isolated galaxies have sharper transitions (smaller crossover width). This is specific and testable.

---

## Connection to MRH

The MRH in the crossover regime doesn't diverge (no true critical point), but it peaks:

```
MRH_max ~ a / h_ext^(1/3)
```

This means:
- **Isolated galaxies** (small h_ext): large MRH peak → long-range coherence correlations near transition
- **Cluster galaxies** (large h_ext): small MRH peak → short-range coherence only

The MRH peak represents the maximum range over which density fluctuations are coherently coupled. This has an observable consequence: galaxy-galaxy correlations as a function of local density environment should show a signature of MRH peaking near the crossover density. Isolated galaxies should show longer-range coherence effects than cluster galaxies.

---

## Connection to Existing Tier 1 Tests

### TEST-01 (SPARC Environment Dependence)
The framework already predicts R² = 0.14 environment dependence of RAR scatter. The crossover mechanism gives this prediction a **specific mechanism**: environment supplies h_ext which rounds the transition. This strengthens the prediction by explaining not just that environment matters but HOW it matters (transition width, not just scatter).

### TEST-02 (Wide Binary Density Dependence)
The wide binary anomaly (if real) should show density dependence. The crossover prediction sharpens this: the anomaly should be sharper (more step-like) for wide binaries in lower-density environments (galactic outskirts, halo) and smoother for those in higher-density environments (disk, near bulge). This is because lower local density → smaller h_ext → narrower crossover.

### TEST-04 (BAO Coherence Modulation)
BAO peak position as a function of environment density. The crossover model predicts that the coherence effect on BAO is strongest (most sharply peaked) in underdense regions and weakest (most diffuse) in overdense regions — opposite to the naive expectation that denser regions show more coherence effects.

---

## What This Means for the Framework

### The Good

1. The crossover model resolves the central puzzle: why the site formula works for galaxies despite not being the correct self-consistent equation. Answer: the cosmic background coherence field rounds the phase transition into a smooth crossover that resembles the site formula.

2. It produces a genuinely discriminating prediction — transition shape vs. transition magnitude — that enters an active area of observational uncertainty where even different MOND formulations disagree.

3. It connects three previously disconnected findings: the self-consistency elision (why it was dropped), the MRH formula (what peaks look like), and the environment dependence (what h_ext does).

### The Concerning

1. The prediction requires knowing h_ext, which is not derived from the framework — it's a new parameter. The framework would need to specify how cosmic environment density maps to h_ext. Without this, the prediction is qualitative ("environment changes transition shape") rather than quantitative ("galaxies in the Virgo cluster should have transition width X ± Y kpc").

2. The "smoother transitions in dense environments" prediction could be degenerate with purely gravitational effects (e.g., tidal stripping changes galaxy structure, which changes the apparent transition width). Disentangling the crossover signal from tidal effects would require careful galaxy selection.

3. This is still a mean-field model. The crossover scaling (δρ ~ h_ext^(2/3), MRH_max ~ h_ext^(-1/3)) assumes mean-field critical exponents. Real systems near critical points have different (non-mean-field) exponents. If the coherence transition is not truly mean-field, the scaling predictions change.

### The Honest Assessment

The crossover picture is internally consistent and physically motivated. It resolves a known problem (why the site formula was chosen) and generates a testable prediction (transition width vs environment). But it introduces a free parameter (h_ext) that the framework doesn't derive, and the prediction is currently qualitative. To become a genuine test, it needs:

1. A formula for h_ext(ρ_environment) derived from the framework's principles
2. Numerical estimates of transition width for specific SPARC galaxies
3. A demonstration that the crossover shape is distinguishable from MOND EFE + tidal effects

None of these exist yet. This finding identifies what to calculate next, not what has been calculated.

---

## Action: Maintainer

- **Test catalog / Tier 1 tests**: The crossover mechanism provides a specific physical mechanism for TEST-01, TEST-02, and TEST-04. Consider adding "crossover width as discriminating observable" to the test descriptions.
- **Galaxy rotation page**: If the crossover model is developed further, the page should acknowledge three formulations (site, self-consistent, crossover) and explain why the site formula is used.
- **Honest assessment**: Add to structural issues: "The implemented coherence function is the fully-rounded limit (h_ext → ∞) of a crossover model that has environment-dependent predictions not captured by the current formula."

---

## Open Threads

1. **Derive h_ext from the framework.** If a₀ = cH₀/(2π) comes from cosmology, does the cosmic mean density give h_ext? Something like h_ext = γ · log(ρ_cosmic/ρ_crit + 1)? If so, h_ext varies with cosmic epoch — the crossover was sharper in the early universe (lower mean density) and smoother now.

2. **Numerical crossover rotation curves.** Solve C = tanh(h(ρ)·C + h_ext) for a grid of h_ext values and galaxy parameters. Plot the resulting rotation curves. Compare transition widths to SPARC data. This is the definitive test of whether the crossover model improves on the site formula.

3. **The Weinberg connection.** The researcher persona in today's visitor log asks: "How does the framework handle the Weinberg coincidence a₀ ~ (Λ/3)^(1/2) c²?" If h_ext is related to the cosmological constant Λ (which sets the background energy density), then the crossover width connects to dark energy. This is speculative but worth exploring.

4. **Wide binary transition sharpness.** If the crossover prediction is correct, the wide binary anomaly (if real) should be sharper in the galactic halo than in the disk. Gaia DR3 wide binaries can be classified by Galactic latitude and height above the plane — a direct test.

5. **Self-consistent SPARC fits with h_ext.** The single most informative computation: fit C = tanh(h·C + h_ext) to each SPARC galaxy with h_ext as a free parameter. Does h_ext correlate with known environment density? If yes, the crossover model has predictive power. If no, it doesn't.
