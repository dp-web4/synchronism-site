# Finding: The Log-Density Argument as Log-Partition Function — An Information-Geometric Derivation

## Origin
Self-directed, following Open Thread #1 from `theoretical-status-synthesis.md` and `why-tanh-deep-dive.md`. The question: "Is there an information-geometric argument for the log-density form of h_eff?"

## Summary
The argument log(ρ/ρ_crit + 1) inside the coherence function is not an ad hoc modeling choice — it is the **log-partition function (softplus)** of a binary exponential family evaluated at the log-density-ratio. This upgrades its derivation status from "modeled" to "derived within exponential family theory." The full coherence function C = tanh(γ · softplus(ξ)) is a canonical composition of two operations from the Bernoulli exponential family: computing the free energy of the density channel, then using it as the effective field for the coherence response.

---

## The Argument

### Setup: Two Information-Geometric Objects

The coherence function involves two binary systems:

**System 1 (Density Classification):** At density ρ, is the system above or below the critical density ρ_crit? This is a binary question with natural parameter:

```
ξ = log(ρ / ρ_crit)
```

This is the log-density-ratio — the natural parameterization for a scale variable. (Density is multiplicative: the physics depends on density *ratios*, not differences. For multiplicative/scale quantities, the natural parameter is logarithmic. This is a standard result — Jeffreys prior for scale parameters is 1/ρ, flat in log ρ.)

**System 2 (Coherence State):** Is the system quantum-coherent or classically decoherent? This is a binary classification with the coherence C as the expected value.

### Step 1: The Log-Partition Function

For any binary exponential family, the partition function is:

```
Z(η) = e^0 + e^η = 1 + e^η
```

The **log-partition function** (cumulant generating function) is:

```
A(η) = log(Z(η)) = log(1 + e^η)
```

This is the softplus function. It is not arbitrary — it is the unique function satisfying:
- A(η) = 0 when η → -∞ (one state dominates)
- A(η) → η when η → +∞ (other state dominates)
- A'(η) = σ(η) (derivative is the sigmoid = mean of Bernoulli)
- A''(η) = variance of Bernoulli = p(1-p)

### Step 2: The Key Identity

Evaluate A at the density natural parameter ξ = log(ρ/ρ_crit):

```
A(ξ) = log(1 + e^{log(ρ/ρ_crit)})
      = log(1 + ρ/ρ_crit)
      = log(ρ/ρ_crit + 1)
```

**This is exactly the argument of the coherence function.**

The "+1" is not an ad hoc regularization to prevent log(0). It is the "1 +" in the partition function Z = 1 + e^ξ, counting the reference state (ρ << ρ_crit, sub-threshold). The two states counted by Z:
- State 0 (energy = 0): density below threshold
- State 1 (energy = ξ): density above threshold

### Step 3: The Full Composition

The coherence function is now:

```
C(ρ) = tanh(γ · A(log(ρ/ρ_crit)))
```

where:
- log(ρ/ρ_crit) is the natural parameter of the density classification
- A(·) = log(1 + e^·) is the log-partition of the binary exponential family
- γ is the coupling constant (from phase space dimensionality)
- tanh(·) is the response function of the coherence system (from binary Boltzmann statistics)

This is a composition of two canonical operations from exponential family theory:

```
ρ  →[log ratio]→  ξ  →[log-partition]→  A(ξ)  →[scale by γ]→  γA(ξ)  →[binary response]→  C
```

### Step 4: Physical Interpretation

The composition has a clean physical reading:

1. **ξ = log(ρ/ρ_crit)**: How far is the density from criticality, measured on the natural (logarithmic) scale?

2. **A(ξ) = log(1 + e^ξ)**: What is the **free energy** (information capacity) of the density channel? This is the thermodynamically correct quantity to use as a driving field. It measures the total information available to the coherence system from the density state.

3. **γ · A(ξ)**: The effective field, scaled by the coupling constant that reflects phase space dimensionality (how many degrees of freedom couple the density to coherence).

4. **C = tanh(γ · A(ξ))**: The equilibrium coherence response to this effective field, from binary Boltzmann statistics.

### Step 5: Why the Free Energy, Not the Mean?

In exponential family theory, two natural quantities emerge from the log-partition:
- A(ξ) = log(1 + e^ξ) — the free energy / cumulant generating function
- A'(ξ) = σ(ξ) = ρ/(ρ + ρ_crit) — the mean / probability

If the effective field were A'(ξ) instead of A(ξ), the coherence function would be:
```
C_alt = tanh(γ · ρ/(ρ + ρ_crit))
```
This saturates at tanh(γ) ≈ 0.964 rather than at 1. Full coherence (C = 1) would be unreachable.

The free energy A(ξ) grows without bound as ξ → ∞, driving C → 1. This is physically correct: arbitrarily high density should produce arbitrarily strong classical coherence. The mean A'(ξ) = σ(ξ) saturates at 1, which would cap coherence below full classicality.

The choice of A over A' corresponds to using the **capacity** (total information content) rather than the **probability** (normalized weight) of the density state. Capacity is the thermodynamically appropriate driving field because:
- Free energy drives transitions (second law: systems minimize F)
- Capacity grows with system size (extensive quantity)
- It encodes both energy AND entropy of the density state

---

## Behavior at Key Points

| ξ = log(ρ/ρ_crit) | ρ/ρ_crit | A(ξ) = log(1 + ρ/ρ_crit) | C = tanh(2 · A(ξ)) | Interpretation |
|---|---|---|---|---|
| -∞ | 0 | 0 | 0 | Vacuum: no density, no coherence |
| -2.3 | 0.1 | 0.095 | 0.189 | Low density: weak field, low coherence |
| 0 | 1 | 0.693 | 0.882 | Critical: C = tanh(2 log 2) ≈ 0.88 |
| 2.3 | 10 | 2.40 | 0.999 | High density: strong field, near-full coherence |
| ∞ | ∞ | ∞ | 1 | Classical limit: full coherence |

---

## What This Changes

### Updated Derivation Status

| Component | Old Status | New Status |
|-----------|-----------|------------|
| tanh wrapper | DERIVED (binary Boltzmann) | DERIVED (unchanged) |
| log(ρ/ρ_crit + 1) | MODELED (information-theoretically motivated) | DERIVED (log-partition of binary exponential family) |
| "+1" regularization | TECHNICAL (prevents log(0)) | DERIVED (reference state in partition function Z = 1 + e^ξ) |
| Full function C(ρ) | Parametric ansatz with derived kernel | **Canonical composition of exponential family operations** |
| γ | Dimensional analysis | Dimensional analysis (unchanged) |
| ρ_crit | Semi-derived | Semi-derived (unchanged) |

The function's status upgrades from "parametric ansatz with theorem-derived kernel" to **"canonical information-geometric map between density and coherence manifolds."** Only the coupling constant γ and the threshold ρ_crit remain as dimensional-analysis inputs.

### The BCS Analogy Strengthened

In BCS superconductivity:
- tanh is derived (from Fermi-Dirac statistics)
- The gap equation's structure is derived (from the pairing Hamiltonian)
- The coupling constant g (electron-phonon) is NOT derived from first principles

In Synchronism:
- tanh is derived (from binary Boltzmann statistics)
- The log-partition argument is derived (from exponential family structure)
- The coupling constant γ and threshold ρ_crit are NOT derived from first principles

Both frameworks have the same structure: the functional form is derived, the coupling is empirical. The BCS coupling was eventually connected to the microscopic electron-phonon interaction (Eliashberg theory), but this took a decade after the original BCS paper.

---

## Potential Objections

### 1. "This is just relabeling log(1+x) as 'softplus'"

No. The identification is substantive because:
- It connects the "+1" to a partition function Z = 1 + e^ξ with specific physical content (two density states)
- It explains WHY the effective field grows without bound (free energy is extensive)
- It provides the composition structure (density natural parameter → free energy → effective field → response)
- It constrains what OTHER functional forms are permitted (only log-partitions of exponential families)

A relabeling would not narrow the space of allowable functions. This identification does: it says the only legitimate alternatives to softplus(ξ) are log-partition functions of other exponential families (e.g., log(1 + e^ξ + e^{2ξ}) for a three-state model).

### 2. "Why should the effective field be A(ξ) and not ξ itself?"

If the effective field were ξ = log(ρ/ρ_crit) directly, the coherence function would be:
```
C = tanh(γ · log(ρ/ρ_crit))
```
This diverges to -∞ as ρ → 0, giving C → -1 (negative coherence). The softplus A(ξ) = log(1 + e^ξ) acts as a natural rectifier: A(ξ) → 0 for ξ → -∞, ensuring C ≥ 0.

The free energy naturally regularizes because it counts the total statistical weight, which is always ≥ 1 (at least the reference state exists). This is not a patch; it's thermodynamic bookkeeping.

### 3. "Does this mean the binary model is uniquely correct?"

No. If the quantum/classical distinction has more than two levels (e.g., a spectrum of partial decoherence), then:
- The partition function has more terms: Z = 1 + e^ξ + e^{2ξ} + ...
- The log-partition changes: A(ξ) = log(Σ e^{nξ})
- The response function changes from tanh to the Brillouin function B_J(x)

This is the "beyond binary" thread from `why-tanh-deep-dive.md`. The information-geometric framework doesn't settle it — it maps the derivation onto a specific physical assumption (exactly two states) that could be tested.

### 4. "The composition of two exponential family operations is not itself an exponential family"

Correct. C = tanh(γ · A(ξ)) is not an exponential family distribution in ρ. It is a composition of maps between exponential families. This is a weaker claim than saying C(ρ) belongs to an exponential family, but it is still structurally constrained — it narrows the space of permissible functions to compositions of exponential family operations, which is a much smaller set than "any monotonic sigmoid."

---

## Connection to the Consciousness Threshold

The `INFORMATION_GEOMETRY_CONSCIOUSNESS.md` finding in the research archive showed that Fisher information I(θ) = 1/(θ(1-θ)) for Bernoulli is MINIMIZED at θ = 0.5 (the consciousness threshold C ≈ 0.5).

In the current framework: the Fisher information of the coherence state is I(C) = 1/(C(1-C)). At C = 0.5:
- Fisher information is at minimum → system is maximally "uncertain" between quantum and classical
- This is the most informationally balanced state
- Small perturbations in the effective field produce the LARGEST changes in C (maximum susceptibility)

The information-geometric derivation connects this: the consciousness threshold is not arbitrary but is the point of maximum susceptibility on the coherence manifold — the point where the density-to-coherence map has maximum derivative.

---

## Implications for the Site

### What Should Change
The `/coherence-function` page should present the softplus/log-partition interpretation:
- "The argument log(ρ/ρ_crit + 1) is the log-partition function (free energy) of a binary density classification"
- "The +1 is not a regularization trick — it is the reference state in the partition function Z = 1 + ρ/ρ_crit"
- "The full function is a canonical composition: density ratio → free energy → coherence response"

### What Should NOT Change
- The honest assessment: the function has zero confirmed unique predictions
- The qualification that γ and ρ_crit are from dimensional analysis
- The acknowledgment that Hill function beats tanh by ΔAIC = 4 in the coupling-coherence experiment (this is a genuine empirical challenge to the binary Boltzmann model)

---

## Open Threads

1. **Hill function and the three-state model**: If Hill beats tanh, does this mean the underlying system has more than two states? A three-state partition function Z = 1 + e^ξ + e^{2ξ} gives a different log-partition. Can this be connected to the Hill function's cooperative binding exponent?

2. **Dual coordinates and the Legendre transform**: In information geometry, the Legendre transform of A(ξ) gives the dual potential (entropy). Is there a physical interpretation of S*(C) = sup_ξ [ξ·C - A(ξ)] as the entropy of the density distribution given coherence C?

3. **Information-geometric distance between systems**: Different physical systems (galaxies, chemistry, consciousness) have different γ and ρ_crit. In the information-geometric framework, these correspond to different points on a parameter manifold. Is there a meaningful notion of "distance" between systems on this manifold?

4. **The coupling constant γ from geometry**: γ = 2 from phase space dimensionality. In information geometry, the Fisher metric in natural coordinates is g_ηη = A''(η) = p(1-p). Is there a geometric argument for γ = 2 involving the curvature or volume of the statistical manifold?

5. **Testable consequence**: The binary model predicts C → 2x for small x (linear onset). The Hill model predicts C → x^k (power-law onset). The RAR empirical interpolation goes as 1 - exp(-√x) → √x for small x (sub-linear). The onset behavior is in principle measurable from ultra-low-acceleration systems (outer galaxy outskirts, wide binaries at a << a₀). Synchronism predicts LINEAR onset; RAR shows SUBLINEAR onset. Is this a falsification?

---

## Sources

- Amari, S. (2016). *Information Geometry and Its Applications*. Springer.
- Jaynes, E.T. (1957). Information Theory and Statistical Mechanics. *Physical Review* 106(4), 620-630.
- Synchronism Research Archive: Sessions #66, #218, #325
- Explorer findings: `why-tanh-deep-dive.md`, `theoretical-status-synthesis.md`, `epistemological-status-of-coherence-function.md`
- Research: `INFORMATION_GEOMETRY_CONSCIOUSNESS.md`
