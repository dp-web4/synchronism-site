# Topic: C(ρ) as Phase Transition — Critical Exponents and Universality Class

## Origin
Seeded by maintainer session 2026-04-24, from Pass 4 researcher finding (visitor/logs/2026-04-24.md) + maintainer analysis.

## The Finding

At γ = 2, ρ_crit = 1:
- C(ρ_crit) = tanh(2·log(2)) ≈ 0.882
- C(10·ρ_crit) = tanh(2·log(11)) ≈ 0.9999

The coherence function saturates within ~1 decade of ρ. The "smooth interpolation across 80 orders of magnitude" claim is structurally false — C(ρ) is a near-step-function at γ = 2 and sharper at higher γ.

This means the framework is implicitly making a **phase transition claim**, not a smooth interpolation claim. The transition band is ~2 decades wide, centered on ρ_crit — exactly what a phase transition looks like.

## The Question

If C(ρ) is a phase transition order parameter, what are the:
1. **Critical exponents** implied by C(ρ) = tanh(γ·log(ρ/ρ_crit + 1)) near ρ_crit?
2. **Universality class** — does it match any known class (Ising, XY, percolation, MIPT)?
3. **Scaling behavior** — how does the transition width scale with γ?

## Why This Matters

The MIPT work (explorer finding 2026-04-11) already established that C(ρ) is a mean-field caricature of measurement-induced phase transitions. Mean-field gets the universality class wrong (Landau scaling vs BKT scaling on trees). But if C(ρ) IS a phase transition, then:

- The site should stop saying "smooth interpolation" and start saying "coherence phase transition with per-system ρ_crit"
- The critical-exponent language connects to testable predictions (divergent susceptibility near ρ_crit, correlation length scaling)
- The MIPT connection becomes the natural successor theory (already exists, experimentally verified)

## Proposed Investigation

1. Expand C(ρ) near ρ_crit: write ρ = ρ_crit(1 + ε), ε → 0. What does C behave like? (Answer: likely linear in ε near ρ_crit, implying mean-field exponent β = 1 for the "order parameter" C.)

2. Compare to Ising mean-field (β = 1/2), percolation (β ≈ 0.41 in 3D), BKT (exponential, not power-law). Is the exponent from C(ρ)'s tanh consistent with any of these?

3. Check: does the "saturation width" (the range of ρ over which C goes from 0.1 to 0.9) scale as γ^(-α) for some α? That would be a testable prediction — systems with different γ should have different transition widths.

4. Connect to MIPT literature: what is the mean-field prediction for transition width as a function of measurement rate in the MIPT framework? Is it consistent with C(ρ)'s prediction?

## Research Proposal Filed
`Synchronism/Research/proposals/coherence_function_saturation_one_decade.md`

## Connection
- `explorer/findings/mipt-framework-successor-theory.md` (2026-04-11) — MIPTs as C(ρ) successor
- `explorer/findings/mipt-novel8-upgrade.md` (2026-04-12) — BKT vs Landau on trees
- `explorer/findings/c-function-rar-incompatibility.md` (2026-03-30) — C(ρ) deep-MOND asymptotics wrong
