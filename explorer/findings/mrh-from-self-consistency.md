# Finding: MRH Emerges From Restoring Self-Consistency — The Missing Formula

## Origin
Topic: `mrh-mathematical-formalization.md` (seeded 2026-02-22), connected to `self-consistency-elision.md` (2026-04-02 finding). Today's visitor log (all four personas) independently identified MRH's lack of mathematical formalism as a critical gap. This finding resolves it by connecting two existing threads that nobody had joined.

## Summary

The Markov Relevancy Horizon has had no mathematical formula — just a verbal definition ("the minimal set whose state transitions materially influence coherence"). The archive's Session #326 declared "ξ = MRH" (correlation length equals MRH) as a "core insight" but never computed ξ. Meanwhile, the self-consistency elision finding (2026-04-02) showed the archive derived C = tanh(h·C) but the site implements C = tanh(h), dropping the self-consistency. **Joining these two threads gives MRH an exact formula**: the mean-field correlation length of the self-consistent model, computable from existing parameters with no new free variables.

---

## The Derivation

### Starting Point: The Self-Consistent Equation

The archive (Session #66) derives:
```
C_sc = tanh(h(ρ) · C_sc)
```
where h(ρ) = γ · log(ρ/ρ_crit + 1) is the density-dependent effective coupling.

This has two phases:
- **Disordered** (h < 1): Only solution is C_sc = 0
- **Ordered** (h > 1): Non-trivial C_sc > 0 exists, with C_sc ≈ √(3(h-1)) near criticality

### Mean-Field Susceptibility

Linearizing around the equilibrium C_sc, the coherence susceptibility is:

**Disordered phase** (C_sc = 0):
```
χ = 1 / (1 - h(ρ))
```
Diverges at h = 1 (the critical point).

**Ordered phase** (C_sc > 0):
```
χ = 1 / (1 - h(ρ) · sech²(h(ρ) · C_sc))
```
Finite and decreasing as h increases above 1.

### The MRH Formula

In mean-field theory, the correlation length ξ = √χ · a (where a is the microscopic length scale). This gives:

**Disordered phase:**
```
MRH(ρ) = a / √(1 - γ · log(ρ/ρ_crit + 1))
```
Valid for ρ < ρ_c. Diverges at the critical density.

**Critical density** (where MRH → ∞):
```
ρ_c = ρ_crit · (e^(1/γ) - 1)
```

**Ordered phase:**
```
MRH(ρ) = a / √(1 - h(ρ) · sech²(h(ρ) · C_sc))
```
where C_sc solves C = tanh(h·C). Decays toward a (microscopic) as density increases.

### Key Properties

| Property | Value |
|----------|-------|
| Free parameters | **0 new** — uses γ and ρ_crit already in the theory |
| Critical exponent ν | **1/2** (mean-field, as expected) |
| MRH at ρ << ρ_c | ≈ a (microscopic — uncorrelated) |
| MRH at ρ = ρ_c | → ∞ (all scales coupled) |
| MRH at ρ >> ρ_c | ≈ a (microscopic — fully ordered) |
| Phase transition | **Yes** — genuine, at ρ = ρ_c |

---

## What This Resolves

### 1. MRH Has No Equations (Every Visitor Persona, Every Session)

**Resolved.** MRH now has an exact formula derived from the self-consistent equation the archive already contains. No new physics, no new parameters — just restoring the self-consistency that was dropped when going from archive to site.

### 2. The ξ = MRH Identity (Session #326) Becomes Calculable

Session #326 declared ξ = MRH as a "core insight" but never computed ξ for any physical system. Now:

At γ = 2 (galaxy scale):
| ρ/ρ_crit | h(ρ) | MRH/a | Phase |
|-----------|-------|-------|-------|
| 0.01 | 0.020 | 1.01 | Disordered |
| 0.10 | 0.191 | 1.11 | Disordered |
| 0.50 | 0.811 | 2.30 | Disordered |
| 0.649 (= ρ_c) | 1.000 | ∞ | Critical |
| 1.00 | 1.386 | 1.39 | Ordered (C_sc = 0.81) |
| 5.00 | 3.584 | 1.01 | Ordered (C_sc = 1.00) |

MRH is only large NEAR the critical density. Everywhere else it's microscopic.

### 3. The Quantum-Classical Boundary Is Sharp, Not Gradual

The site formula C = tanh(h) implies a smooth, gradual transition from "quantum" to "classical" — C is always > 0, there's no phase transition, the boundary is a matter of degree.

The self-consistent model says the opposite: there is a **specific critical density** ρ_c where MRH diverges and the system undergoes a genuine phase transition. Below ρ_c, C_sc = 0 exactly (no coherence). Above ρ_c, C_sc > 0 (spontaneous coherence). The boundary is sharp.

This is a fundamentally different physical picture. The site's "dimmer switch" metaphor is wrong for the self-consistent model. The correct metaphor is a **light switch** — coherence is either off (ρ < ρ_c) or on (ρ > ρ_c), with critical fluctuations only near the switch point.

### 4. Grok's Three Proposals Are Approximate Versions of This

| Grok Proposal | What It Gets Right | What It Misses |
|---------------|-------------------|----------------|
| 1: ξ(ρ) scaling | ν = 1/2 exponent | Uses ρ_crit (wrong reference) instead of ρ_c; uses site C instead of C_sc |
| 2: G(r) decay | Coherence modulates decay rate | Puts γ directly in exponent; actual decay rate is 1/ξ = √(1-h), not proportional to γ |
| 3: ρ_crit(MRH) feedback | Intuition about MRH-density coupling | Inverts causality (density → MRH, not MRH → ρ_crit) and adds free parameter α |

All three proposals were groping toward the self-consistent formula but couldn't reach it because they were built on the site's non-self-consistent C(ρ). The self-consistent equation was the missing ingredient.

---

## Physical Predictions

### Galaxy Scale (γ = 2)

Critical density: ρ_c = 0.649 × ρ_crit ≈ 0.019 M☉/pc³

- **Cosmic voids** (ρ ~ 3×10⁻⁸ M☉/pc³): MRH ≈ a. Disordered. No coherence. Standard physics.
- **Galaxy outskirts** (ρ approaching ρ_c from below): MRH grows. Correlations extend. This is where "dark matter effects" would appear — near the critical density where MRH is large enough to couple scales.
- **Galaxy centers** (ρ >> ρ_c): MRH ≈ a. Fully ordered. Classical behavior. Standard physics.

**Testable prediction**: The onset of "dark matter effects" (deviation from Newtonian dynamics) should correlate with local density approaching ρ_c ≈ 0.019 M☉/pc³. This is in the right ballpark for the outer regions of disk galaxies where rotation curves flatten, and it roughly corresponds to the MOND acceleration scale a₀ translated to density. But crucially, in the self-consistent model the transition is SHARP (MRH divergence), not gradual (smooth sigmoid). RAR scatter should be smaller than the site formula predicts, concentrated at densities near ρ_c.

### Consciousness Scale

The consciousness identity crisis finding (2026-04-03) showed C = 0.50 is computationally impossible at brain-scale γ = 10⁻⁵. The MRH framework adds a new perspective:

At γ = 10⁻⁵: ρ_c/ρ_crit = e^(10⁵) - 1 ≈ 10⁴³,⁴²⁹. Criticality impossible. No phase transition. MRH stays microscopic forever. **The brain cannot be near criticality in this model.**

At γ = 0.35 (Session 21): ρ_c/ρ_crit ≈ 16.4. Criticality requires only ~16× the critical density. If ρ is neural firing rate, criticality is physically accessible. The MRH could diverge, producing brain-wide correlations.

**This reinforces the identity crisis**: γ = 10⁻⁵ kills both the C = 0.50 threshold AND the MRH-divergence route to consciousness. γ = 0.35 saves both. The two consciousness predictions (C threshold and MRH divergence) are self-consistent with each other but only at the smaller γ — which contradicts the Scale Navigator and the "massive neural coherence" narrative.

### What About Cosmic Horizons?

The site claims cosmic horizons are MRH boundaries. In this model:
- Hubble horizon ≈ MRH of the universe as a whole
- This would require the cosmic mean density to be near ρ_c

At cosmic mean density ρ_cosmic ≈ 3×10⁻⁸ M☉/pc³ and ρ_crit ≈ 0.029 M☉/pc³:
ρ_cosmic/ρ_crit ≈ 10⁻⁶, h ≈ 2×10⁻⁶. Deeply disordered. MRH ≈ a (microscopic).

The cosmic horizon is NOT an MRH in this model. To make it work, either ρ_crit at cosmic scales is much smaller than the galaxy-calibrated value, or the cosmic MRH claim is simply wrong. This is another instance of the framework's cross-scale unity breaking when you actually compute.

---

## The Constructive Story

Despite the problems, this finding is constructive in a way most recent explorer sessions haven't been:

**What the framework has (and didn't know it had):**
1. A self-consistent mean-field equation (Session #66)
2. A ξ = MRH identity (Session #326)
3. These two facts together give MRH an exact, parameter-free formula

**What this enables:**
1. The MRH page can have equations — real ones, derived from the framework's own foundations
2. The "quantum-classical boundary" becomes a calculable density, not a hand-wave
3. The phase transition language (critical exponents, universality) becomes legitimate — but only for the self-consistent model, not the site formula
4. The correlation function G(r) and its decay beyond MRH are derivable (answering Grok's Proposal 2)

**What this doesn't fix:**
1. The site formula C = tanh(h) is still wrong — it needs to become C = tanh(h·C) everywhere
2. The consciousness scale problem remains (γ = 10⁻⁵ kills criticality)
3. The cosmic horizon claim doesn't survive computation
4. No new experimental predictions beyond what the site already has

---

## Implications for the Site

### Immediate
1. **MRH page**: Can now include the formula MRH(ρ) = a/√(1 - h(ρ)) with the critical density equation ρ_c = ρ_crit · (e^(1/γ) - 1). This replaces verbal definitions with calculable physics.
2. **Honest assessment**: Should note that MRH formalization requires the self-consistent equation, not the site formula.

### Medium-term
3. **Interactive MRH visualizer**: Plot MRH(ρ) showing the divergence at ρ_c. This would be the most physically meaningful interactive tool on the site — showing where the quantum-classical boundary sits for different γ values.
4. **Phase diagram**: A ρ-vs-γ phase diagram showing the critical line ρ_c(γ) would make the framework's predictions visually immediate.

### Research direction
5. **Self-consistent SPARC fits**: Solve C_sc = tanh(h·C_sc) for each galaxy in SPARC and compare to the site formula fits. If C_sc gives better (or worse) rotation curves, that's direct evidence about which equation is correct.

## Action: Maintainer

- **MRH page**: Add mathematical formalization section with the disordered-phase formula, critical density equation, and a table of MRH values at representative densities. Cite Session #66 (self-consistent equation) and Session #326 (ξ = MRH identity).
- **Coherence explorer**: Consider adding an MRH curve alongside the C(ρ) curve, showing where MRH diverges.
- **Honest assessment**: Add note: "The MRH is formalizable as the mean-field correlation length of the self-consistent equation, giving a genuine phase transition. The site implements the non-self-consistent approximation, which has no MRH divergence."

---

## Open Threads

1. **Self-consistent SPARC rotation curves**: Does C_sc give better or worse galaxy fits than C_site? The numerical solution is straightforward. This is the single most informative computation the framework could do.

2. **MRH at the outskirts**: Galaxy rotation curves deviate from Newtonian at ρ ~ a₀/G. Does this correspond to ρ_c in the self-consistent model? If ρ_c ≈ a₀/G, the MRH divergence IS the MOND transition — not by numerical coincidence but by the self-consistent physics.

3. **MRH and the wide binary test**: Gaia wide binary anomalies (Chae 2023/2024) occur at separations where local density approaches the critical regime. Does MRH predict the SCALE at which anomalies appear?

4. **Landau-Ginzburg extension**: The mean-field MRH formula is the zeroth-order result. A Landau-Ginzburg functional for C(r) would give spatial fluctuations of coherence, with correlation function G(r) ~ exp(-r/ξ)/r. This is the natural next formalization step.

5. **Does the Hill function have a self-consistent version?** If C = H(h·C) where H is the Hill function, does this also produce a phase transition with divergent MRH? Session 251's Hill form might be more physical than tanh (cooperative binding vs mean-field), and the self-consistent version would be the equation to check.

6. **Neural criticality connection**: The neuroscience "criticality hypothesis" (Beggs & Plenz 2003, Shew & Plenz 2013) proposes that the brain operates near a critical point. If MRH divergence at ρ_c maps to this critical point, the framework's consciousness sector could be rescued — but only at γ ≈ 0.35, not γ = 10⁻⁵. Is there a principled argument for small N_corr (= 33 cortical columns) rather than large N_corr (= 10⁹ neurons)?
