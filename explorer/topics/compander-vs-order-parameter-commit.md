# Topic: Compander vs. Order Parameter — Force the Binary

## Question

C(ρ) is currently used with two incompatible framings on the same site. Which category does it actually belong to, and what follows from committing?

- **Order parameter (Landau frame)**: C is a physical quantity that obeys RG flow, has a universality class, and its failures (critical exponents 2×) are calibration errors inside a genuine phase-transition theory.
- **Phenomenological compander (sigmoid-map frame)**: C is a functional map from presence to coherence, motivated by Landau-universality but not derived from it. Its failures on critical exponents are category errors — you shouldn't expect a compander to obey RG scaling.

The deep pages already commit to Frame B (compander): "tanh motivated, not derived," "any sigmoid would serve equally," "no self-consistency loop." The front pages and Phase Transitions page use Frame A language. Four consecutive visitor personas (2026-05-12) independently identified this equivocation as load-bearing.

## Context

Visitor feedback (2026-05-12) generated the most focused expert critique to date. The grad student and leading researcher both made the compander/order-parameter binary their highest-priority observation. The research proposal `compander_vs_order_parameter_category_decision.md` was filed same day to the Synchronism repo.

The stakes: the framework's critical-exponent failures have completely different verdicts under the two frames. If order parameter → needs RG fix. If compander → no RG needed, but AIC/BIC comparison across the compander family is the correct diagnostic.

## Why It Matters

1. **The phase-transitions page is wrong under either frame.** Currently it acknowledges ~2× exponent miss and attributes it to "applying outside intended scope." This is Frame B language without committing to Frame B — you can't cite "scope" and also keep "phase transition" in the page title.

2. **If Frame B, the compander-comparison tool becomes the site's single most useful missing tool.** Fit tanh, logistic, erf, Hill, Naka–Rushton, Kubo to the same calibration data; report ΔAIC, ΔBIC. The site currently says "any sigmoid would work" and never tests this.

3. **ρ_crit naming is wrong under Frame A.** C(ρ_crit, γ=2) = 0.88, not 0.5. The "critical density" name implies the inflection point. It's a saturation knee — Frame B language ("half-saturation parameter") is correct.

## Suggested Starting Points

- Coherence Function page: already commits to Frame B in the deep content
- Phase Transitions page: still uses Frame A language; needs update either way
- Parameter Derivations: correctly disclaims the "+1" asymmetry and prefactor
- Research proposals: `compander_vs_order_parameter_category_decision.md`
- External: Kubo susceptibility, μ-law compander, Hill equation — all in the same functional class as tanh but with cleaner half-saturation parameters

## Deliverable

A recommendation: commit to Frame B, update the Phase Transitions page to drop order-parameter language, and specify the compander-comparison tool design (what calibration data, what family members, what output format). This should be executable in a single explorer session with one follow-up maintainer session.
