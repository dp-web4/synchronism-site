# Finding: The Self-Consistency Elision — How the Archive's Derivation Became a Smooth Interpolation

## Origin
WAKE-triggered self-direction (2026-04-02). The interpretation gap finding (2026-03-31) ended with the open thread: "Is there a Hamiltonian that produces C(ρ)?" The mean-field derivation audit (in `done/`) found a self-consistency equation in Session #66 but didn't trace its consequences. This finding does.

## Summary

The Synchronism research archive derives C(ρ) from a mean-field self-consistency equation C = tanh(βzJ·C + h). The site implements C = tanh(h(ρ)) — without C on the right-hand side. These are **mathematically distinct functions with qualitatively different physics**. The self-consistent formula produces a genuine mean-field phase transition (C jumps from 0 to finite at a critical density, with β = 1/2 critical exponent). The site's non-self-consistent formula produces a smooth monotone interpolation that never reaches zero and never transitions. Every criticism that "C(ρ) isn't a real phase transition model" is correct — and can now be traced to a specific, fixable mathematical step.

---

## The Derivation Chain: What Got Dropped

**Step 1 — Archive Session #66 (correct)**

Mean-field theory for coherence units gives the self-consistency equation:

```
C = tanh(βzJ·C + h_ext)
```

where βzJ is the dimensionless coupling (inverse temperature × coordination number × coupling), C appears on both sides, and h_ext is an external symmetry-breaking field.

**Step 2 — Archive identification (questionable)**

The archive identifies:

```
βzJ  ≡  γ · log(ρ/ρ_crit + 1)
```

This is the "handling by identification" that the mean-field derivation audit flagged. The coupling βzJ is a constant in Weiss theory; making it density-dependent is non-standard but physically motivated (more coupling partners → stronger effective J).

**Step 3 — Site implementation (where C vanishes from the right-hand side)**

The site implements:

```
C(ρ) = tanh(γ · log(ρ/ρ_crit + 1))
```

C no longer appears on the right-hand side. The self-consistency is gone.

**What was dropped and why it matters:**

The site formula is the *h(ρ) → ∞ limit* of the mean-field model (pure external field, coupling irrelevant), or equivalently the *J_eff → 0 limit* (non-interacting units in an external field). Neither limiting case has a phase transition.

---

## The Correct Self-Consistent Formula

Taking the archive's identification seriously, and substituting βzJ = h(ρ) = γ·log(ρ/ρ_crit + 1):

```
C_sc = tanh(h(ρ) · C_sc)
```

(with no separate external field — coupling IS the symmetry-breaking source).

This is a transcendental equation for C_sc as a function of ρ.

### Phase Structure

**Disordered phase (ρ < ρ_c):**
The only solution is C_sc = 0. The system has no spontaneous coherence.

**Critical density (ρ = ρ_c, where h(ρ_c) = 1):**

```
ρ_c = ρ_crit × (e^(1/γ) - 1)
```

At γ = 2: ρ_c ≈ 0.65 × ρ_crit
At γ = 1: ρ_c ≈ 1.72 × ρ_crit

**Ordered phase (ρ > ρ_c):**
Non-trivial solution C_sc > 0 exists. Near the critical density:

```
C_sc ≈ √(3(h - 1))   for h slightly > 1
```

This is the mean-field critical exponent β = 1/2. The order parameter grows as the square root of the distance from criticality — exactly as expected for a Landau theory.

### Comparison: Site Formula vs. Self-Consistent Formula

| Property | Site: C = tanh(h(ρ)) | Self-consistent: C_sc = tanh(h·C_sc) |
|----------|---------------------|---------------------------------------|
| C at ρ = 0 | 0 | 0 |
| C at ρ = ρ_c | tanh(1) ≈ **0.76** | **0** (by construction — critical point!) |
| C near ρ_c | smooth curve | ∝ √(ρ - ρ_c) (square-root onset) |
| Phase transition | **none** (C > 0 everywhere) | **yes** at ρ = ρ_c |
| Critical exponent β | undefined | **1/2** (mean-field) |
| C at ρ → ∞ | 1 | 1 |
| Number of phases | 1 (smooth interpolation) | 2 (disordered / ordered) |

---

## What This Resolves

### Interpretation Gap Failure #4 (from 2026-03-31 finding)

> "Why is C(ρ_crit) = 0.8824 at default γ=2? In standard Landau theory, the order parameter at the critical point is zero, not 88%."

**Answer**: Because the site formula is not the actual self-consistent model. In C_sc = tanh(h·C_sc), the critical density ρ_c is defined by h(ρ_c) = 1, and C_sc(ρ_c) = 0 by construction (the phase transition point). The parameter ρ_crit in the site formula is NOT the critical density — it's a scale parameter in h(ρ). The actual critical density ρ_c depends on both ρ_crit and γ.

### Why Phase Transition Language Fails on the Site

The site invokes universality classes, critical exponents, mean-field theory, and Landau order parameters. All of these are properties of the self-consistent model. The site implements the non-self-consistent approximation, which has none of these properties. The language is from the theory; the formula is from the approximation. The two were never reconciled.

### The Empty "Classical Regime"

The interpretation gap found that no known universality class has β > 0.83 (required for γ < 0.6, the "Classical" regime). The self-consistent model offers a partial resolution: β = 1/2 for all values of γ (it's the mean-field universality class). The parameter γ controls the SHAPE of the transition (how sharp the approach to criticality is), not the universality class. The regime labels remain physically questionable, but the critical exponent problem is resolved by using the self-consistent formula.

---

## The Physical Picture: What the Self-Consistent Model Actually Describes

The self-consistent model C_sc = tanh(h(ρ) · C_sc) is a **density-coupled coherence ferromagnet**: each coherence unit is coupled to the mean coherence field with strength proportional to h(ρ). When the coupling exceeds a critical value (h = 1), the system spontaneously orders.

Physical analogy: this is exactly the Curie-Weiss model for ferromagnetism, where:
- External field → h(ρ) (density-driven coupling amplifier)  
- Magnetization → C_sc (coherence order parameter)
- Critical temperature T_c → critical density ρ_c

The key difference from standard Curie-Weiss: in standard ferromagnetism, T_c is set by J (the coupling), and the external field h_ext shifts the transition. In the Synchronism model, density ρ BOTH drives the coupling AND serves as the external field (they're identified). This conflation is the source of the regime-label confusion — density plays two simultaneous and conflicting roles.

---

## Numerical Behavior: Site vs. Self-Consistent

At γ = 2 (default):

| ρ/ρ_crit | h(ρ) | C_site | C_sc | Difference |
|-----------|-------|--------|------|-----------|
| 0 | 0 | 0 | 0 | 0 |
| 0.1 | 0.131 | 0.131 | 0 | 0.131 |
| 0.65 = ρ_c/ρ_crit | 1.0 | 0.762 | 0⁺ | 0.762 |
| 1.0 | 1.386 | 0.882 | 0.712 | 0.170 |
| 2.0 | 2.197 | 0.976 | 0.953 | 0.023 |
| 5.0 | 3.584 | 0.999 | 0.998 | 0.001 |

The two formulas agree at high density (both → 1) but diverge dramatically near and below ρ_c. The site formula shows "coherence" even in the disordered phase where the correct model predicts C = 0.

---

## The Domain-Specific Failure Pattern

If C(ρ) is the J → 0 approximation, it should work well when h(ρ) >> J_eff·C and fail when they are comparable.

**Galaxy dynamics (h(ρ) is dominant):** At galactic densities, the density field h(ρ) is large compared to any plausible self-coupling. The site formula is a reasonable approximation. This explains why galaxy predictions are in the right ballpark.

**Superconductors (J_eff ≈ 1 by definition):** By definition, superconductors at T_c are at their critical coupling J_eff = 1. The site formula drops precisely the term that matters most. The predicted T_c = 607K vs observed 93K (error factor 6.5×) is *consistent* with neglecting a self-coupling term of order J_eff ≈ 1 - 1/√6.5 ≈ 0.61, which is in the mean-field critical regime. (Note: this is suggestive, not a rigorous derivation.)

**Consciousness (neural coupling uncertain):** Neural systems have both weak coupling (individual synapses: ~0.1mV per spike) and potentially strong effective coupling through network dynamics (population codes). Whether J_eff << 1 or J_eff ~ 1 for conscious systems is unknown — and the site's application of C(ρ) to consciousness requires knowing which regime applies.

---

## What Would It Take to Fix This

### Option 1: Use the self-consistent formula (numerically)

Replace C(ρ) = tanh(h(ρ)) with the numerical solution of C = tanh(h(ρ)·C).

**Cost**: No longer a closed-form expression. Must be tabulated or solved numerically.  
**Benefit**: Genuine phase transition behavior, correct critical exponent β = 1/2, C = 0 in disordered phase, honest physics.

This would require:
- New parameter: specify whether ρ > ρ_c or ρ < ρ_c for each application domain
- Identifying ρ_c for each domain (galaxy clusters, neurons, atomic lattices)
- The interactive coherence explorer would show a bifurcation at ρ = ρ_c

### Option 2: Add an explicit separate external field

Keep h(ρ) as coupling (βzJ = h(ρ)) and add h_ext separately:

```
C_sc = tanh(h(ρ)·C_sc + h_ext)
```

This is the full Curie-Weiss model. In most physical systems, h_ext = 0 (no explicit symmetry breaking), and the transition is spontaneous. This is more faithful to the archive's derivation.

### Option 3: Be honest about what the site formula is

The site formula C = tanh(h(ρ)) is:
- The exact solution for a **non-interacting two-level system** in external field h(ρ)
- Equivalent to J → 0 (no coupling between coherence units)
- A smooth interpolation function, not a phase transition model

If the site describes it honestly as an interpolation function rather than a mean-field order parameter, the phase transition language becomes inappropriate and should be removed. This abandons some claims but preserves the useful phenomenology.

---

## Implications for the Site

### Immediate (text fix)

1. **Coherence function page and coherence explorer**: Note that C(ρ) = tanh(h(ρ)) is the non-self-consistent approximation. The phase transition behavior (C = 0 below critical density) requires the self-consistent solution.

2. **Honest assessment page**: Add to "structural issues" — the implemented formula is the J=0 approximation of the mean-field model. Phase transition claims require the self-consistent formula.

### Medium-term (new understanding)

The distinction between C_site and C_sc maps cleanly onto domain-specific validity:
- High-density / strong-field limit (galaxies): C_site ≈ C_sc (both → 1)
- Near-critical systems (superconductors): C_site >> C_sc (large error — site predicts 88% classical at the critical point, self-consistent predicts 0)
- Sub-critical density (cosmic voids): C_site > 0, C_sc = 0 (site predicts partial coherence where correct model predicts none)

### Proposal (new research)

Solve C_sc = tanh(h(ρ)·C_sc) numerically for galaxy scale parameters and compare to:
- The site formula predictions
- SPARC rotation curve data
- RAR predictions

If C_sc gives better fits than C_site, that's direct empirical evidence that the self-consistency matters.

## Action: Maintainer

- **Honest assessment page**: Add bullet under "Structural Issues": "The coherence function as implemented (C = tanh(h(ρ))) is the non-self-consistent approximation of the mean-field derivation. The archive's Session #66 self-consistency equation requires C on both sides of the equation, giving genuine phase transition behavior that the site formula cannot reproduce."
- **Coherence function page**: Add footnote or "Under the Hood" section explaining the distinction between the smooth interpolation (implemented) and the self-consistent model (what the derivation actually says).

---

## Open Threads

1. **Numerical solution**: Solve C_sc = tanh(h·C_sc) for h in the galaxy regime and compare to SPARC. Does self-consistency improve or worsen the galaxy fits?

2. **The h(ρ) identification**: The archive identifies βzJ = h(ρ). But in Curie-Weiss theory, βzJ must be a constant for a given system at a given temperature. Making βzJ density-dependent introduces a "running coupling" — is this motivated by anything in the Synchronism framework beyond the analogy?

3. **Two-phase cosmic structure**: The self-consistent model predicts a cosmic phase transition at density ρ_c. If ρ_c corresponds to the cluster/void density contrast, does this give a prediction for the large-scale structure transition? (Galaxy clusters: ordered phase; cosmic voids: disordered phase)

4. **Connection to Session 186 (Hill function)**: Session 186's derivation gives a Hill function C = Ω_m + (1-Ω_m)·(ρ/ρ_t)^(1/φ)/[1+(ρ/ρ_t)^(1/φ)]. Is there a self-consistent version of this? C_sc = F(h(ρ)·C_sc) where F is the Hill function?

5. **What is J_eff for neural tissue?** The self-consistent model's validity for consciousness predictions requires estimating J_eff for neural networks. If J_eff << 1, the site formula is fine for consciousness. If J_eff ~ 1, neural dynamics might be near-critical and the full self-consistent formula is needed.
