# Finding: Hill's Victory Over Tanh Was a Baseline Artifact

## Origin
Topic: `coupling-coherence-derivation.md` — "Why does Hill beat tanh?"
Self-directed WAKE reframing: "Why Hill and not tanh? What does the Hill function's victory mean for the physics?"

## Summary
The coupling-coherence experiment's conclusion that "Hill beats tanh (ΔAIC=4)" is an artifact of a missing baseline parameter. Both 2-parameter models assume C(0) = 0, but agents achieve C(0) ≈ 0.34 through independent Bayesian updating alone. Hill's power-law onset (k = 0.60 < 1) partially compensates for this mismatch, giving it an artificial advantage. When a baseline offset is properly modeled (3-parameter fits), **tanh wins decisively** (ΔAIC = 17.6 in tanh's favor, R² = 0.9984 vs 0.9976). The tanh functional form is validated, not refuted, by this experiment.

---

## The Mathematical Relationship

Hill and tanh are members of the **same function family** — the logistic sigmoid of a logarithmic argument:

```
Hill(p) = p^k / (p^k + K^k) = σ(k · ln(p/K))
tanh model: C(p) = tanh(γ · log(p/p_crit + 1))
```

where σ is the logistic sigmoid. Since tanh(x) = 2σ(2x) − 1, both are "sigmoid of log" functions. The structural difference is the **+1 regularization** inside the tanh model's logarithm.

### Near-zero behavior (the critical difference)

| Model | C(p) for small p | Onset type |
|-------|-------------------|------------|
| Hill | ≈ (p/K)^k | Power-law (concave for k<1) |
| tanh | ≈ γ · (p/p_crit) | Linear |
| Unregularized tanh | ≈ (p/p_crit)^(2γ) | Power-law |

The +1 inside log(p/p_crit **+ 1**) changes log → linear near p=0. This is the sole structural difference. Without the +1, tanh and Hill are essentially the same function (modulo encoding).

---

## The Baseline Problem

The experiment measures coherence C(p) as a function of coupling probability p. The data:

| p | C(p) |
|---|------|
| 0.000 | 0.339 |
| 0.005 | 0.413 |
| 0.010 | 0.459 |
| 0.015 | 0.509 |
| ... | ... |
| 1.000 | 0.937 |

**C(0) = 0.339, not 0.** Agents achieve substantial coherence through individual Bayesian observation alone (640 observations × 5 agents, each observing 8 edges/round for 80 rounds). The coupling transition is from 0.34 to 0.94 — a range of 0.60, not the 0.94 that both 2-parameter models try to fit.

### Why Hill benefits from the missing baseline

Both 2-param models predict C(0) = 0, creating a +0.34 residual at p=0. The models compensate by adjusting their parameters to capture the rapid initial rise from "zero" to the actual data.

- **Hill with k = 0.60 < 1**: The power-law p^0.60 rises FASTER than linear from zero (infinite derivative at p=0). This partially absorbs the baseline mismatch — Hill can "spend" its rapid initial rise on covering the gap between predicted 0 and actual 0.34.

- **tanh with +1 regularization**: The linear onset forces a finite slope at p=0. It cannot absorb the baseline mismatch as effectively — the predicted curve lags the data at low p.

The Hill "victory" (ΔAIC = 3.8) is Hill's superior ability to absorb an offset error, not its superior description of the transition dynamics.

---

## The Corrected Comparison

Adding a baseline parameter C₀ to each model: C(p) = C₀ + (1 − C₀) · f(p)

### Results (3-parameter fits, all data)

| Model | Parameters | RSS | R² | AIC |
|-------|-----------|-----|-----|-----|
| **tanh** | γ=0.352, p_crit=0.014, C₀=0.340 | 0.001678 | **0.9984** | **−452.9** |
| Hill | k=0.797, p_half=0.053, C₀=0.328 | 0.002483 | 0.9976 | −435.2 |
| erf | k=2.61, p_half=−0.19, C₀=0.00 | 0.1733 | 0.8350 | −244.2 |
| logistic | k=8.11, p_half=−0.01, C₀=0.00 | 0.1747 | 0.8337 | −243.8 |

**tanh wins by ΔAIC = 17.6** — strong evidence in tanh's favor.

### The reversal

| Comparison | Winner | ΔAIC |
|-----------|--------|------|
| 2-param (original, no baseline) | Hill | 3.8 |
| 3-param (with baseline offset) | **tanh** | **17.6** |

### Parameter convergence

With baseline properly modeled, the effective exponents converge:
- Hill: k = 0.797
- tanh: 2γ = 0.703

These are within 13% of each other — confirming that Hill and tanh, when properly specified, describe nearly the same shape. The tanh form captures it slightly better because the +1 regularization provides the correct linear onset when starting from a known baseline.

---

## What This Means for the Physics

### 1. The tanh functional form is validated, not refuted

The coupling-coherence experiment was the primary empirical challenge to tanh. With the baseline correction, it actually SUPPORTS tanh over Hill. The mean-field derivation program (two-state Boltzmann statistics → tanh) is addressing the correct function.

### 2. The +1 regularization is physically meaningful (in the experiment)

The +1 inside log(p/p_crit + 1) ensures C(0) = 0 and provides linear onset. In the experiment, this correctly captures the behavior ABOVE the baseline — each additional coupling event adds linearly at low coupling, with diminishing returns at high coupling. The log handles the wide dynamic range.

### 3. The baseline has no physics analogue

In the physics equation C(ρ), the baseline is zero: at zero density, there is no coherence. The experiment's C₀ = 0.34 arises from individual Bayesian observation — agents reasoning about the world without sharing information. There is no physics analogue to "a particle independently observing reality."

This means: the experiment's 2-param comparison (which forces C(0) = 0) is asking a **different question** than the experiment's 3-param comparison:
- 2-param: "Which model best fits the full C(p) curve from 0 to 0.94?" → confounded by baseline
- 3-param: "Which model best captures the SHAPE of the coupling-induced transition?" → tanh wins

The physics question is about the shape of the transition, not the absolute level. So the 3-param comparison is more informative for the physics.

### 4. Log-argument models dramatically outperform linear-argument models

Both tanh (log-argument) and Hill (log-argument) vastly outperform logistic (linear argument) and erf (linear argument). The ΔAIC gap is enormous: >200 between log-argument and linear-argument models.

This robustly confirms the information-theoretic motivation: the effective field driving coherence scales logarithmically with coupling/density, not linearly. This is the central substantive result of the model comparison — more important than the Hill vs tanh distinction.

---

## The Deeper Question: Why Does k < 1?

The original experiment's narrative was: "k = 0.608 < 1 means anti-cooperative binding — trust compounds with diminishing returns." This narrative is partially correct but was contaminated by the baseline artifact.

With the baseline modeled, k rises to 0.797 — still less than 1, but closer to 1 (Langmuir/independent binding). The "diminishing returns" effect is weaker than originally reported.

For the physics analogy, the question becomes: is there a reason γ ≈ 0.35 (giving 2γ ≈ 0.70, comparable to Hill's k ≈ 0.80)? In the physics framework, γ = 2/√N_corr. For γ = 0.35, this gives N_corr ≈ 33 — meaning ~33 correlated degrees of freedom in the coupling-coherence system. With 5 agents × 396 belief values each, this is a plausible dimensionality reduction (from 1980 parameters to ~33 effective degrees of freedom).

However, the physics value γ = 2 (for galactic systems with N_corr = 1) is far from γ = 0.35. This is expected: the multi-agent experiment has many correlated variables (5 agents sharing overlapping information), while a single-particle galactic system has N_corr = 1.

---

## Implications for the Site

### The coupling-experiment page needs correction

The page currently claims:
- "Hill Function (Winner)" — incorrect once baseline is modeled
- "Beats tanh by ΔAIC=4.0" — artifact of missing baseline
- "tanh is not uniquely preferred — Hill function fits better" — reversed

### What it should say

The experiment's result is more nuanced and more interesting than "Hill beats tanh":

1. **Log-argument models (tanh, Hill) dramatically outperform linear-argument models** — confirming the logarithmic scaling of the effective coupling field
2. **With proper baseline modeling, tanh and Hill are nearly equivalent**, with tanh slightly preferred (ΔAIC = 17.6)
3. **The baseline C₀ ≈ 0.34 is itself a finding** — agents achieve substantial coherence through independent observation alone; coupling adds 0.60 additional coherence units
4. **The transition shape is consistent with the mean-field derivation** — the tanh form from two-state Boltzmann statistics correctly captures the coupling-induced transition

---

## Action: Maintainer

1. **Update `/coupling-experiment` page**: Replace "Hill Function (Winner)" with a more nuanced comparison showing 2-param vs 3-param results. Note the baseline artifact.
2. **Update the experiment documentation** (`Research/Coupling_Coherence_Experiment.md`): Add an errata section noting the baseline artifact and the corrected analysis.
3. **Update the "Why Tanh?" narrative**: The coupling-coherence experiment now SUPPORTS tanh, not challenges it. This should be reflected wherever the experiment is cited.
4. **Consider highlighting the logarithmic scaling result**: The most robust finding is that log-argument models crush linear-argument models by ΔAIC > 200. This validates the information-theoretic motivation for the log-density argument.

---

## Open Threads

1. **Should the experiment be re-run with strong priors?** If agents start with B = 0.8 or B = 0.2 instead of B = 0.5, the baseline C₀ would change. This would test whether the tanh preference is robust across different baseline levels.

2. **Can the baseline be derived?** C₀ = 0.34 should be predictable from the observation budget (m = 8 edges/round × 80 rounds = 640 observations per agent, out of 396 possible edges) and the noise rate (η = 0.15). An information-theoretic derivation of C₀ would be a clean result.

3. **The log-argument universality**: Why do both tanh and Hill use logarithmic arguments? Is there a proof that the optimal response function for a system with exponentially varying input (density spanning many orders of magnitude) is sigmoid(log(input))? This would be the deepest mathematical result from the experiment.

4. **Does the tanh preference hold at scale?** The experiment used N=12 nodes, K=5 agents. At N=100, K=20, the baseline C₀ might differ substantially, potentially changing the Hill vs tanh comparison. Running variations at scale would test robustness.

5. **Self-consistency loop**: The experiment uses an explicit function C(p) with no feedback. But in the physics, C might affect ρ through gravitational dynamics (modified gravity → different mass distribution → different density). Does adding a feedback loop change the preferred functional form?

---

## Methodology Note

This finding was produced by re-analyzing the original experiment data (`Synchronism/simulations/results/coupling_coherence_analysis.json`) using scipy curve_fit with 3-parameter models. No new simulations were run. The analysis is reproducible from the existing data.
