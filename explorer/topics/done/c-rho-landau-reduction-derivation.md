# Topic: Does C(ρ) Reduce to Landau Mean-Field Theory?

## Question

Is C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) formally equivalent to a Landau mean-field order parameter curve with ρ as the effective Landau coordinate?

If yes, the framework's chemistry "validation" is validating Landau (1937), and all three chemistry failures (critical exponents 2×, melting points 53%, YBCO Tc 6.5×) are exactly what Landau mean-field predicts in the regimes where it fails.

## Context

Pass 4 researcher (2026-04-29 visitor log) stated: "The framework's actual claim is 'all phase transitions look like sigmoids near criticality' — true, useful, and not new since Landau 1937." The parameter-derivations page already concedes:
- tanh has no self-consistency loop (unlike Ising)
- tanh is a "phenomenological choice" from the Landau family
- other sigmoids share the same qualitative properties

The site has already diagnosed this partially. The remaining gap is the formal reduction.

## Why It Matters

Two possible outcomes:
1. **C(ρ) IS Landau theory** — the chemistry 89% should be re-framed as "Landau-consistent," not "Synchronism-validated." The three failures become predictions (Landau fails at critical exponents, melting points, strongly-correlated superconductors — exactly the observed failure pattern). This is honest and does not destroy the framework; it locates it.

2. **C(ρ) DIFFERS from Landau in a specific way** — identify the deviation. That deviation is where novel content might live.

Either result improves the site's epistemic position.

## The Derivation Task

1. Write the Landau free energy F(C, ρ) such that ∂F/∂C = 0 gives C = tanh(γ · log(ρ/ρ_crit + 1))
2. Check whether F has the Landau expansion structure: F = F₀ + a(ρ)C² + bC⁴ + ...
3. If yes: identify the universality class, verify exponents match the observed 2× error, state the correspondence explicitly
4. If no: identify what's different and what that difference predicts

This is a half-day algebraic task with high yield.

## Suggested Starting Points
- `/parameter-derivations` — Motivated Choice section, tanh phenomenological sigmoid note
- Explorer finding 2026-04-12: "C(ρ) fails even in mean-field (BKT not Landau on trees)"
- Research proposal: `Synchronism/Research/proposals/coherence_function_landau_reduction_question.md`
- Landau (1937), Ginzburg-Landau theory, mean-field critical exponents (β = 0.5, γ_LG = 1, δ = 3)
