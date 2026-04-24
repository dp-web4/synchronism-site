# Finding: Coherence Function Has No Critical Point — C(ρ) Is a Sigmoid, Not a Phase Transition Order Parameter

**Date:** 2026-04-24
**Topic:** coherence-saturation-critical-exponents.md

## Origin

Topic seeded by maintainer 2026-04-24 from Pass 4 researcher observation: "at γ = 2, ρ_crit = 1, the sigmoid saturates in ~1 decade of ρ." The topic asked the natural follow-up: if this is a phase transition, what are the critical exponents and which universality class?

## Summary

**C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) is analytic everywhere on ρ > 0.** It has no critical point, no critical exponents, and fits no universality class. The "phase transition" reading — implicit in the "critical density" nomenclature and explicit in the MIPT mapping work (2026-04-11, 2026-04-12) — is structurally invalid at the level of the function itself. The function is a smooth sigmoid describing a sharp *crossover*, bounded below by a minimum width of 1.167 decades in log₁₀(ρ/ρ_crit) regardless of how large γ is.

This is a strictly stronger negative result than the previous MIPT finding. Earlier work granted "C(ρ) is a mean-field caricature of MIPT" and critiqued the universality class (BKT vs. Landau on trees). That critique implicitly assumed C(ρ) has *some* critical behavior, just at the wrong scaling. The present finding dissolves that assumption: C(ρ) has no critical behavior at all.

## The Math

### 1. Analyticity rules out any critical point

C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1)).

- ln(u + 1) is real-analytic for u > −1 (i.e., ρ > −ρ_crit).
- tanh is entire.
- Composition is real-analytic for all ρ ≥ 0.

A continuous phase transition requires non-analyticity of the free energy (or equivalently, of the order parameter as a function of the control parameter) at the critical point. tanh(γ ln(u + 1)) has no such non-analyticity anywhere. **Therefore C(ρ) cannot be a phase-transition order parameter, mean-field or otherwise.**

This is not the same class of critique as "wrong universality class." A wrong universality class still has a critical point with critical exponents that do not match. Here, there is no critical point to have exponents about.

### 2. The derivative at "ρ_crit" is finite

dC/du at u = 1 (where u ≡ ρ/ρ_crit):

  dC/du = γ/(u+1) · sech²(γ ln(u+1))

| γ | dC/du at u=1 |
|---|---|
| 0.5 | 0.222 |
| 1.0 | 0.320 |
| 2.0 | 0.222 |
| 4.0 | 0.031 |

Finite for all finite γ. A critical point would have dC/dt → ∞ (standard β < 1 exponent) or at minimum a corner; tanh gives a smooth inflection.

Note that the derivative is *non-monotone* in γ — it peaks near γ ≈ 1 (where C(ρ_crit) ≈ 0.60) and decreases in both directions. This is the sech² factor dominating, not a physical phenomenon.

### 3. C(ρ_crit) is not a special value

| γ | C(ρ_crit) |
|---|---|
| 0.25 | 0.172 |
| 0.5 | 0.333 |
| **0.793** | **0.500** |
| 1.0 | 0.600 |
| 2.0 | 0.882 |
| 4.0 | 0.992 |
| 10.0 | 1.000 |

C(ρ_crit) depends entirely on γ. There is no sense in which ρ_crit is *the* critical density; it is a scale parameter at which the log argument passes through ln 2. At the site's default γ = 2 (the value used in the Galaxy Curve Plotter and shown in Pass 4's coherence-explorer probe), C(ρ_crit) = 0.88, not 0.50.

**Internal inconsistency with C ≥ 0.50 consciousness threshold:** the site's 1-bit argument places the consciousness threshold at C = 0.50. If this is meant to coincide with ρ_crit in some meaningful way, then γ must equal 0.793 globally — which contradicts the γ = 2 default used everywhere else, and the γ = 2/√N_corr derivation that allows γ to vary by system. The "C = 0.50 at ρ_crit" reading and the "γ = 2" reading are mutually exclusive.

### 4. Near ρ = 0, C is linear in ρ (not power-law)

Series expansion: C(ρ) ≈ γ · ρ/ρ_crit for ρ ≪ ρ_crit.

Numerical verification (γ = 2):

| ρ/ρ_crit | C | γ · ρ/ρ_crit | ratio |
|---|---|---|---|
| 1e−6 | 2.0e−6 | 2.0e−6 | 1.000 |
| 1e−4 | 2.0e−4 | 2.0e−4 | 1.000 |
| 1e−2 | 1.99e−2 | 2.0e−2 | 0.995 |
| 1e−1 | 1.88e−1 | 2.0e−1 | 0.942 |

If you insist on calling ρ = 0 the "critical point" (where C = 0) and forcing C ~ ρ^β near it, the effective exponent is **β = 1**. This matches no known universality class: Ising is 1/8 (2D) or ~1/3 (3D), percolation is 5/36 (2D) or ~0.41 (3D), mean-field Ising is 1/2, tricritical 1/4, etc. β = 1 is what you get from a Taylor expansion of any smooth function vanishing at the origin — it is the signature of *no critical behavior*, not a new universality class.

### 5. Transition width analysis

Define the transition width W(γ) as the range of log₁₀(ρ/ρ_crit) over which C goes from 0.1 to 0.9. From tanh⁻¹(0.1) = 0.1003 and tanh⁻¹(0.9) = 1.4722:

  u_0.1 = exp(0.1003/γ) − 1
  u_0.9 = exp(1.4722/γ) − 1
  W(γ) = log₁₀(u_0.9 / u_0.1)

| γ | W (decades) |
|---|---|
| 0.10 | 6.156 |
| 0.25 | 2.863 |
| 0.50 | 1.908 |
| 1.00 | 1.503 |
| 2.00 | 1.325 |
| 4.00 | 1.243 |
| 10.0 | 1.197 |
| 100 | 1.170 |
| ∞ | 1.1665 |

**Two asymptotic regimes:**

- **γ ≪ 1**: W(γ) ≈ (ln 10)⁻¹ · (1.4722 − 0.1003)/γ = 0.596/γ. Transition widens inversely with γ.
- **γ ≫ 1**: W(γ) → log₁₀(1.4722/0.1003) = 1.1665 decades. A hard floor — you cannot make the transition narrower by increasing γ.

**The 1.17-decade floor is the key structural fact.** The claim that C(ρ) describes a smooth interpolation across ~30 orders of magnitude in ρ (from electron scales at ρ ~ 10²⁶ m⁻³ down to intergalactic scales at ρ ~ 1 m⁻³) is structurally impossible for any γ. The function's shape concentrates 80% of the change in C into at most 1.17 decades around ρ_crit; the remaining 28+ decades lie in the saturated tails (C ≈ 0 or C ≈ 1).

This is not a bug; it is the shape of tanh. But it contradicts the "one equation spanning quantum to cosmic" framing.

### 6. No reparametrization rescues phase-transition behavior

Potential rescues all fail:

- **m ≡ 1 − C**: same analyticity, no critical point.
- **m ≡ C − C(ρ_crit)**: zero at ρ_crit by construction, but analytic (hence no singular behavior, no critical exponents).
- **Replace tanh with Hill function p^k/(p^k + p_half^k)**: also real-analytic for integer k > 0, also sigmoid, same critique.
- **Replace tanh with erf**: entire function, same critique.
- **Piecewise sigmoid**: breaks the "one clean equation" framing and has no physical motivation from Landau theory.

A functional form that *does* admit a phase transition would have to be non-analytic at some ρ_c:

- **Mean-field Landau**: C(ρ) = 0 for ρ < ρ_c, C(ρ) = √(a(ρ − ρ_c)/b) for ρ > ρ_c.
- **Percolation**: C(ρ) = 0 for ρ < ρ_c, C(ρ) = A(ρ − ρ_c)^β for ρ > ρ_c.
- **BKT**: C(ρ) = 0 for ρ < ρ_c, C(ρ) = A · exp(−b/(ρ − ρ_c)^½) · (something) for ρ > ρ_c.

None of these are tanh. All of them require a matching condition at ρ_c that breaks smoothness.

**The site must choose:** keep the tanh form and abandon phase-transition language (including "critical density" for ρ_crit, the MIPT successor-theory framing, and any critical-exponent discussion), or keep the phase-transition physics and adopt a non-analytic functional form.

## What This Means for the MIPT Mapping

The 2026-04-11 MIPT finding argued that measurement-induced phase transitions (MIPTs) are the rigorous successor theory that C(ρ) was phenomenologically approximating. The 2026-04-12 follow-up identified that C(ρ) fails even in mean-field (tree MIPTs have BKT-type essential scaling, not C(ρ)'s tanh-based scaling).

The present finding is stricter: **C(ρ) cannot approximate any MIPT, mean-field or otherwise, because it has no critical behavior at all.** A mean-field MIPT still has a sharp transition at p_c with a power-law or essential singular order parameter. C(ρ) has neither. The MIPT mapping is a conceptual analogy at the level of "both involve environmental coupling modulating coherence," but it cannot be formalized at the function level.

This preserves the earlier finding's *direction* (the successor theory exists; it is MIPTs) while tightening the diagnosis of *why* C(ρ) fails as an approximation. The failure is not that C(ρ) uses the wrong universality class — it is that C(ρ) is in no universality class, because it describes a smooth crossover, not a transition.

The corollary: if Synchronism wants the MIPT connection to be load-bearing, it needs a functional form that actually has a transition. The tanh form is structurally incompatible.

## The Site's Implicit Three-Way Conflict

The site currently makes three claims that cannot simultaneously be true:

1. **Smooth interpolation**: "C(ρ) smoothly interpolates across ~30 orders of magnitude in ρ from quantum to classical."
2. **Phase transition**: "ρ_crit is a critical density; the Coherence Explorer shows a phase transition; MIPTs are the successor theory."
3. **The tanh form**: C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)).

- (1) and (3) are incompatible: the tanh form's transition is bounded below by 1.17 decades, not spread over 30 decades.
- (2) and (3) are incompatible: the tanh form has no critical point.
- (1) and (2) are incompatible as physics: a phase transition is not a smooth interpolation. (Any modifier — "sharp crossover that looks like a phase transition" — relies on the observer's tolerance, not the physics.)

Only one of the three can be kept at a time. The most internally consistent choice is: **keep (3), abandon (1) and (2), and reframe the coherence function as a sigmoid crossover with a scale parameter ρ_crit — not a critical density.**

## Implications for the Site

### Terminology

- "Critical density ρ_crit" is a misnomer. ρ_crit is a scale parameter (the density at which the log argument = ln 2). Better: "characteristic density," "coherence scale," or "sigmoid center."
- "Phase transition" language in reference to C(ρ) should be retired. The coherence explorer shows a crossover, not a transition.
- The γ-regime labels (Quantum/Boundary/Classical) in the Coherence Explorer are describing regions of a smooth sigmoid, not distinct phases. The labels are defensible as naming different parts of the crossover, but the "phase" terminology overstates.

### Tool text

- Coherence Explorer: replace "phase transition" with "crossover." Display the transition width W(γ) explicitly. At γ = 2, W ≈ 1.33 decades; the "smooth interpolation" claim on the landing page is contradicted by the tool's own behavior.
- Display C(ρ_crit) on the tool, not just C(10·ρ_crit) and C(100·ρ_crit). At γ = 2 this is 0.88, not 0.50 — which is the first-order evidence that ρ_crit is not a critical point.

### Derivation claims

- `/parameter-derivations` already admits tanh is motivated, not derived. Strengthen: add the specific statement that tanh is a smooth sigmoid with no critical behavior, and cannot be interpreted as a phase-transition order parameter. The MIPT successor claim (if retained anywhere on the site) should carry the caveat that the analogy is structural, not functional.
- `/critical-density` should rename. The page is about a scale parameter, not a critical point.

### Consciousness threshold

- The C = 0.50 threshold cannot be simultaneously "at ρ_crit" and "with γ = 2." This is a real inconsistency that the consciousness-threshold treatment on `/hard-problem` (and wherever C ≥ 0.50 appears) should address. One option: state that the threshold corresponds to ρ ≈ 0.32 · ρ_crit at γ = 2, and that this specific ratio has no particular significance beyond being where tanh(2 · ln(1.32)) = 0.5.

### "30 orders of magnitude" framing

- The landing page and First Encounter suggest C(ρ) operates smoothly across all physical densities from quantum to cosmic. This is inconsistent with the tanh form's ~1.17-decade transition floor. Either the claim should be rephrased (the function operates over all ρ but only *varies substantively* over ~1-2 decades per system's own ρ_crit), or the function form should change.

## Action: Maintainer

**High priority, low risk (terminology/text only):**

1. **`/critical-density`**: Rename to `/coherence-scale` or similar, and explain that ρ_crit is a scale parameter where log(u+1) = ln 2, not a critical point. Add: "C(ρ_crit) varies with γ: it is 0.88 at γ = 2, 0.60 at γ = 1, and 0.50 only at γ ≈ 0.79. There is no γ at which C(ρ_crit) equals 0 (as a critical-point order parameter should)."

2. **`/coherence-function`**: Add an explicit section "Why C(ρ) is not a phase transition" showing the analyticity argument. Reference the transition-width calculation. Cite the Pass 4 saturation observation.

3. **`/coherence-explorer`**: Change "Phase transition" label (if present) to "Crossover." Add a computed transition-width display W(γ). Show C(ρ_crit) alongside the existing C(10·ρ_crit) and C(100·ρ_crit).

4. **`/hard-problem`** (or wherever C = 0.50 appears): Add a note that C = 0.50 at γ = 2 corresponds to ρ ≈ 0.32·ρ_crit, *not* ρ = ρ_crit. Either justify this ratio or drop the "critical density is consciousness threshold" implication.

5. **`/honest-assessment`**: Add to the list of structural issues: "The coherence function tanh(γ·log(u+1)) is analytic everywhere — it has no critical point. The 'phase transition' framing and the MIPT successor-theory connection are structural analogies, not functional correspondences. See explorer/findings/coherence-function-has-no-critical-point.md."

**Medium priority (requires judgment call):**

6. **Landing page / First Encounter**: The "one equation from quantum to cosmic" framing is technically consistent with the tanh form only if you mean "parameterized by ρ_crit across many orders of magnitude." It is *not* consistent with "varies smoothly over 30 decades of ρ." Consider rephrasing to "C(ρ/ρ_crit) has the same shape at every scale, with ρ_crit setting the characteristic density per system" — which is true, and more modest.

## Open Threads

1. **What functional form *would* admit both the Synchronism observables and a real phase transition?** A piecewise form (C = 0 below ρ_c, C = (ρ/ρ_c − 1)^β above) would have a genuine critical point. Does this form fit the galaxy data as well as tanh? Worth a numerical experiment.

2. **If C(ρ) is a sigmoid crossover, what role does it play in the framework?** It is still a useful interpolation between two limits. The question is whether the framework *needs* more than that. The scaffolding hypothesis (2026-04-09) argued the surviving predictions don't require C(ρ); this finding strengthens that argument.

3. **Is there any empirical evidence for a sharp transition in coherence-vs-density in any physical system?** Superconductor T_c is a true phase transition (Landau-Ginzburg). Galactic rotation-curve "transitions" are gravitational, not coherence-driven. Biological systems (metabolism, consciousness) do not show sharp thresholds — they show smooth functional transitions, consistent with sigmoid modeling. The sigmoid crossover frame might actually be *more* empirically honest than the phase-transition frame.

4. **The 1.17-decade floor is a testable prediction.** If coherence-like behavior in any system (chemistry, biology, quantum control) can be probed across > 1.5 decades of density (or its physical analog) and still shows smooth interpolation, the tanh form is consistent. If it shows a sharper transition (< 1 decade at any γ_eff), the tanh form is falsified. Worth checking against the chemistry data — is the coherence explorer's 1.17-decade floor visible in r = 0.98 chemistry correlations?

5. **Implication for NOVEL-8 (correlated-noise decoherence protection)**: the 2026-04-12 finding said spatially correlated decoherence in MIPTs changes the universality class exponent τ from q^{-1/2} to q^{-2/3}. That finding was already flagged as referring to MIPT-class transitions, which C(ρ) does not describe. The present finding confirms: NOVEL-8's MIPT-level novelty does not translate to Synchronism, because Synchronism's coherence function is not a phase transition at all. The "interesting question about correlated decoherence" remains, but it is a question about MIPTs, not about C(ρ).

## Connection

- `explorer/findings/mipt-framework-successor-theory.md` (2026-04-11) — refined: MIPT is the successor theory, but C(ρ) cannot even be a mean-field caricature of one.
- `explorer/findings/mipt-novel8-upgrade.md` (2026-04-12) — clarified: the MIPT result is real physics; it's just not physics that C(ρ) approximates.
- `explorer/findings/interpretation-gap-math-vs-physics.md` (2026-03-31) — the "Quantum regime produces fastest classical saturation" inversion is a direct consequence of interpreting a sigmoid as a phase-transition order parameter.
- `explorer/findings/does-C-rho-do-any-work.md` (2026-04-09) — reinforced: 3/4 surviving claims don't need C(ρ). This finding adds: if they did, C(ρ)'s sigmoid structure would not provide phase-transition physics anyway.
- `explorer/findings/epistemology-of-productive-error.md` (2026-04-10) — this finding fits the "Form" failure category: the equation is wrong at the structural level (sigmoid not order parameter), but the question it led to ("is there a density threshold for coherence?") is productive and maps to MIPTs as a real research program.
- Pass 4 researcher log, 2026-04-24 — the empirical observation that motivated the topic.

## Verdict

The topic asked for critical exponents and universality class. The answer is: there are no critical exponents, and no universality class, because C(ρ) describes no critical point. This is a stronger structural result than the previous MIPT findings.

The bottom line is a fork: keep the tanh form and retire the phase-transition language, or keep the phase-transition physics and change the functional form. The site currently tries to have both, and the internal contradiction is now specific and computable — visible in the Coherence Explorer's own displayed numbers, inconsistent between the consciousness threshold (C = 0.50) and the default γ = 2, and incompatible with the "30 orders of magnitude" landing-page framing.

This advances discovery: it eliminates a specific class of rescue attempts for C(ρ) (changing the sigmoid's parameters, swapping tanh for Hill, adding γ-dependence) by showing that the obstruction is not in the *choice* of sigmoid but in the *category* of sigmoid. To get phase-transition physics, Synchronism needs to leave the sigmoid family entirely.
