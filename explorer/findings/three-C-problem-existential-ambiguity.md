# Finding: The Three-C Problem — Synchronism's Predictions Are Indeterminate

## Origin
Self-directed from WAKE phase, triggered by 2026-03-20 visitor log (Pass 4, leading-edge researcher): "After reviewing the full site, I cannot identify one prediction that differs from MOND + dimensional analysis." Traced to root cause: the framework has three incompatible formulations that make opposite predictions about its most distinctive claims.

## Summary

Synchronism presents C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) as its central equation. But the framework actually uses **three different C functions** across different contexts, and these make **opposite predictions** about the External Field Effect — the framework's most distinctive testable claim. The site never acknowledges this multiplicity. Until the framework commits to one formulation, its predictions are literally indeterminate: "what does Synchronism predict?" has no definite answer.

---

## The Three Formulations

### Formulation 1: The Site Equation (tanh-density)

```
C(ρ) = tanh(γ · log(ρ/ρ_crit + 1))
```

- **Where**: Core idea page, equation walkthrough, equations.ts (line 6), parameter derivations, all interactive tools
- **Range**: [0, 1), no floor
- **Context**: Presented as THE equation. "One function. Three parameters. Every scale."
- **EFE prediction**: **Stronger than MOND** — C → 0 as ρ → 0 means unlimited gravity boost, steep transition, near-complete suppression by external fields (see `efe-interpolation-function-comparison.md`)

### Formulation 2: The Research Archive Equation (Hill-acceleration)

```
C(a) = Ω_m + (1 - Ω_m) × (a/a₀)^{1/φ} / [1 + (a/a₀)^{1/φ}]
```

- **Where**: Research archive Session #218, used for galaxy rotation fits, EFE numerical tests
- **Range**: [Ω_m, 1], floor at Ω_m ≈ 0.315
- **Context**: Never appears on the site. Used internally for actual galaxy fitting
- **EFE prediction**: **Weaker than MOND** — bounded C ≥ Ω_m caps gravity boost at 3.17G, EFE ~0.3-0.4x MOND's strength (see `efe-numerical-test-results.md`)

### Formulation 3: The Galaxy Rotation Page (empirical RAR)

```
g_obs = g_bar / (1 − e^{−√(g_bar/a₀)})
```

- **Where**: Galaxy rotation page on the live site
- **Range**: Standard RAR interpolation (McGaugh et al. 2016)
- **Context**: Used to present the galaxy rotation curve analysis. This is the empirical RAR formula — it's not the Synchronism C function at all
- **EFE prediction**: Whatever the standard MOND/RAR literature says

### Summary Table

| Property | Site (tanh) | Archive (Hill) | Galaxy page (RAR) |
|----------|------------|----------------|-------------------|
| Variable | density ρ | acceleration a | acceleration g_bar |
| Floor | 0 | Ω_m ≈ 0.315 | ~0 |
| Max G_eff/G | ∞ | 3.17 | ∞ |
| EFE strength | > MOND | 0.3-0.4× MOND | ≈ MOND |
| Deep regime | 1/(2x) | 1/Ω_m = 3.17 | 1/√x |
| Transition width | ~1 decade | ~2 decades | ~2 decades |
| Golden ratio? | No | Yes (exponent 1/φ) | No |
| On the site? | Yes (core) | No | Yes (galaxy page) |

---

## Why This Matters: Opposite Predictions

### The EFE — the framework's most distinctive prediction

The External Field Effect is where Synchronism could distinguish itself from both MOND and ΛCDM. But which EFE does it predict?

- **Tanh form** → EFE **stronger** than MOND. Dwarf satellites of the Milky Way should be nearly Newtonian. Wide binaries should show a sharp transition.
- **Hill form** → EFE **weaker** than MOND (~1/3 strength). TDGs should show ~28% velocity suppression vs MOND's ~73%. This is the "Novel-10" prediction.
- **RAR form** → Whatever MOND predicts. No novelty.

These are not small quantitative differences. They are **qualitatively opposite predictions**. "Stronger than MOND" and "weaker than MOND" cannot both be right.

### The novel predictions depend on which C

From `novel-predictions-compiled.md`:

- **NOVEL-1** (environment-dependent RAR scatter): The predicted scatter depends on which C function generates the modified Poisson equation
- **NOVEL-2** (BAO modulation): The predicted amplitude depends on C's deep-regime behavior
- **NOVEL-3** (wide binary density dependence): The predicted signal depends on the interpolation function shape
- **NOVEL-10** (weaker-than-MOND EFE): This prediction is **specific to the Hill form** — the tanh form predicts the opposite

The researcher's question — "What does Synchronism predict that's new?" — literally cannot be answered because the prediction depends on an unresolved choice.

---

## How the Site Hides This

The site presents a unified picture by using different formulations in different contexts without cross-referencing:

1. **Core theory pages** show C(ρ) = tanh(...). Visitors think this is THE equation.
2. **Galaxy rotation page** shows the empirical RAR formula. It never connects this to the tanh function. Visitors don't notice the formulas are different.
3. **The Hill form never appears on the site at all.** It's used internally for galaxy fitting but is invisible to visitors.
4. **The honest assessment** doesn't mention the formulation ambiguity.
5. **equations.ts** contains both `coherence()` (tanh) and `hillSigmoid()` (Hill), but the Hill function isn't used by any page I could find.

This isn't deliberate deception — it reads as organic drift. The tanh form was likely the original theoretical proposal, the Hill form emerged from empirical fitting, and the RAR form was adopted for the galaxy page because it's the standard in the literature. Nobody reconciled them.

---

## The Deeper Problem: Is C a Function of Density or Acceleration?

The three formulations disagree on the fundamental question: what is C a function of?

- **Tanh**: C = C(ρ) — coherence depends on **density** (number of compatible elements in the MRH)
- **Hill**: C = C(a) — coherence depends on **acceleration** (gravitational field strength)
- **RAR**: g_obs = f(g_bar) — an empirical acceleration-acceleration relation, no coherence variable needed

If C depends on density, it's a genuinely different theory from MOND (which is acceleration-based). Environment dependence would come from local density, not from the external gravitational field. This is potentially distinctive.

If C depends on acceleration, it's structurally identical to MOND with a different interpolation function. The EFE follows from the same mathematics as MOND's EFE. The "novelty" reduces to the shape of the interpolation function.

The framework claims density is fundamental ("presence" = density of compatible elements). But the galaxy fitting uses acceleration. The mapping between density and acceleration depends on the galaxy's mass profile and geometry — it's not a simple substitution. A density-based C could predict environment dependence that acceleration-based C cannot, and vice versa.

This isn't a mathematical detail. It's the difference between "Synchronism is MOND with a different sigmoid" and "Synchronism is a genuinely different theory."

---

## What Would Resolution Look Like?

### Option A: Commit to the tanh-density form (the site's equation)
- **Pro**: Density-based C is the framework's theoretical claim. It's what makes Synchronism potentially distinct from MOND.
- **Con**: The steep transition likely fails to reproduce the empirical RAR shape (the "shape problem" from `efe-interpolation-function-comparison.md`). γ = 2 gives amplitudes ~700% too large against SPARC data (Session #395).
- **Implication**: Must confront the empirical failure honestly. The equation on the landing page may not fit the galaxy data.

### Option B: Commit to the Hill-acceleration form (the archive's equation)
- **Pro**: Better galaxy fits. Bounded C gives the "weaker EFE" prediction (Novel-10). Golden ratio exponent is aesthetically interesting.
- **Con**: An acceleration-based C makes Synchronism structurally identical to MOND — just a different interpolation function. The theoretical distinctiveness evaporates. The Ω_m floor is ad hoc.
- **Implication**: Must change the site's core equation. Explain why the published equation isn't used for actual fitting.

### Option C: Show that both forms are limits of a deeper formulation
- **Pro**: Would be the intellectually satisfying resolution. Density and acceleration are related through the Poisson equation; perhaps C(ρ) generates C(a) through the field equation.
- **Con**: Nobody has done this calculation. It requires solving the modified Poisson equation with C(ρ) and showing that the resulting rotation curves match the RAR.
- **Implication**: This is the "single most important open calculation" identified in `efe-interpolation-function-comparison.md`. Until it's done, the framework has an unresolved ambiguity at its core.

### Option D: Acknowledge the ambiguity openly
- **Pro**: Consistent with the site's culture of honesty. Would be unprecedented for a "theory of everything" site.
- **Con**: Undermines the "one equation, every scale" pitch.
- **Implication**: The honest assessment should include: "We have not determined whether the coherence function should be evaluated on density (as theorized) or acceleration (as fitted). These give different predictions. Resolving this is a prerequisite for definitive tests."

---

## The Visitor's Question, Answered

**"Is there any prediction that differs from MOND + dimensional analysis?"**

Honest answer: **We don't know yet, because the framework's predictions depend on an unresolved formulation choice.**

- If C = C(ρ) (density-based), there are potentially novel predictions: density-dependent environment effects, a different EFE mechanism, and the BAO/500 Mpc predictions. But C(ρ) hasn't been shown to reproduce basic galaxy rotation curves.
- If C = C(a) (acceleration-based), the framework is MOND with a different sigmoid, and the novel predictions reduce to the shape difference of that sigmoid.
- The two quantum predictions (Novel-8, Novel-9) are independent of this choice and may be genuinely novel — if their derivation predated the experiments.

This is not a comfortable answer. But it's the true one.

---

## Implications for the Site

### The honest assessment needs updating
The current honest assessment addresses what failed and what's untested. It does not address the more fundamental problem: the framework hasn't committed to its own formulation. A framework that uses different equations in different contexts doesn't have well-defined predictions.

### The "one equation" pitch is currently misleading
The landing page says "One function. Three parameters. Every scale." In practice, the framework uses at least three different functions. The pitch should either be made true (by committing to one form and showing it works across scales) or made honest (by acknowledging the formulation is still being developed).

### The test catalog assumes a definite formulation
The 24 tests on the tracker assume we know what the framework predicts. But for the galactic tests (the most actionable ones), the predictions depend on which C is used. The test catalog should note which formulation each test assumes.

---

## Action: Maintainer

1. **Add an "Open Theoretical Questions" section to the honest assessment** that acknowledges the density-vs-acceleration ambiguity. This is not a weakness to hide — it's an active research question.

2. **The galaxy rotation page should state which C form it uses and why.** Currently it uses the empirical RAR formula without connecting it to the framework's coherence function.

3. **equations.ts already has hillSigmoid() — clarify its role.** Is it an alternative to tanh or a legacy function? If the Hill form is used for galaxy fitting, say so.

4. **Consider Option D** (acknowledge openly). This would be consistent with the site's culture of honesty and would actually strengthen credibility with expert visitors.

---

## Open Threads

1. **The key calculation**: Solve the modified Poisson equation with C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) for a realistic galaxy density profile and check whether the resulting rotation curve matches the empirical RAR. This determines whether the "site equation" can actually do what the site claims.

2. **The quantum predictions escape**: Novel-8 and Novel-9 (shared-environment decoherence, Bell freezing/revival) don't depend on the galactic C form. They use the general coherence framework. These may be the framework's genuine contributions regardless of how the galactic ambiguity resolves.

3. **History of drift**: When did the Hill form enter the archive? Was it always there, or did it emerge from fitting when the tanh form failed? The git history of the research archive would answer this.

4. **Is density-to-acceleration mapping unique?** For a given galaxy, does C(ρ) uniquely determine C(a)? If so, Option C is feasible. If not, the two formulations are genuinely different theories.

5. **The chemistry C is also different**: For chemistry applications, C operates on "presence" (number of compatible structural elements), which is neither density nor acceleration. This is a fourth interpretation of C that may or may not be compatible with the others.
