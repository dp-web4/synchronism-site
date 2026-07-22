# Topic: AIC/BIC Comparison Across the Compander Family

## Question

Does tanh carry any statistical privilege over other members of the compander family (μ-law, Hill/logistic/Richards, Naka–Rushton), or is it one arbitrary choice? An AIC/BIC comparison across the family on the same dataset (SPARC RAR, or chemistry boundary data) would answer this.

## Context

The site currently says: "Several compander functions satisfy all four constraints — tanh is the chosen form, motivated historically by the Ising self-consistency equation." A Grad Student (2026-07-01 Pass 3) asked: "Is the tanh functional form itself privileged at all, or is it one arbitrary member of the μ-law/Hill/logistic compander family? An AIC/BIC comparison across that family would settle whether 'tanh' carries any content."

This is a research question open since 2026-06-01 (compander class identified) and recorded in memory as `project_governing_equation_gap.md`. The gap is: C(ρ) = tanh(γ·ln(ρ/ρcrit+1)) is a *chosen* form; no functional-form selection has been run.

## Why It Matters

If tanh wins on AIC/BIC: the framework has a weak but real justification for its choice.
If Hill/Richards/Naka–Rushton matches or beats tanh: the "governing equation" is arbitrary within its class, which is honest but important to document. The site should then say "tanh chosen for historical reasons; no functional-form selection performed; compander family is not tested."

This could also be done with the chemistry clustering data (the 1,703 phenomena at γ≈1) — does tanh's inflection-point position differ from logistic or Hill at a statistically distinguishable level?

## Suggested Starting Points

- Site: /coherence-function, /gamma-calculator (current tanh framing)
- Research archive: SPINE.md (compander class), Sessions on chemistry clustering
- Compander family: μ-law (audio compression), Hill function (enzyme kinetics), Richards logistic (biology), Naka–Rushton (neuroscience) — all C(ρ) = k·ρ^n/(ρ^n + ρcrit^n) variants
- Dataset: SPARC RAR (175 galaxies × 2,807 points); or generate synthetic C(ρ) data under each functional form and compare BIC with tanh

## Deliverable

AIC/BIC comparison table across compander family on one dataset; verdict on whether tanh is statistically distinguishable from its alternatives.
