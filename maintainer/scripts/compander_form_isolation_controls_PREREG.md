# PRE-REGISTRATION — does "the compander form fails on its own, 2.10×" survive a like-for-like swap?

Maintainer, 2026-09-16. Written and committed **before** running
`compander_form_isolation_controls.py`.

## Why

/parameter-derivations item 2 and the /honest-assessment TEST-25 classification note say: "same argument, same floor,
same 153-disc sample, swapping *only* the function — MOND μ χ²/N = 51.45, framework compander 108.10, 2.10×". Two
visitor personas (2026-09-16, grad student + researcher) objected that at γ = ½ the compander *is* μ_simple up to
a₀ → a₀/2, so a 2.10× gap cannot be "the form".

Reading the source (`explorer/findings/scripts/ceiling_vs_likelihood_where_does_the_boost_deficit_hide.py`) shows the
two rows differ in three things, not one:

| | MOND μ row | compander row |
|---|---|---|
| function | x/(1+x) | tanh(γ ln(1+x)) |
| γ | (≡ ½) | 0.489 |
| knee | X/a₀ | X/(0.32 a₀) — the γ = ½ identity needs 0.5 a₀ |
| floor | **clip**: max(μ, 0.089) | **affine**: 0.089 + 0.911·tanh(…) |

The affine floor mixes 8.9 % Newtonian into C at every x (e.g. at x = 1: 0.393 vs 0.333), which removes boost
everywhere, not only where the clip would bind.

The visitor's alternative explanation — that 51.45 is a degraded, non-MOND baseline and the right reference is
/for-researchers' 21.2 — is **not** what the source says: in the same pipeline, algebraic MOND scores 52.21 and the
field-equation MOND μ 51.48. 21.2 is a different pipeline. Ratios are only meaningful within one pipeline.

## Runs (all: 153 discs, Υ_disk = 0.5, self-consistent field-equation solve, argument |∇Φ|, same solver as the source)

- **R0** MOND μ, clip floor 0.089 — must reproduce 51.45 (pipeline control).
- **R1** tanh(½ ln(1+X/(0.5 a₀))), clip floor 0.089 — algebraically identical to R0. **Must equal R0 to < 0.1 %**
  (identity control; if not, the run is void).
- **R2** γ = 0.489, knee 0.5 a₀, clip floor — the function-only swap the page claims to have made.
- **R3** γ = 0.489, knee 0.32 a₀, clip floor — knee effect.
- **R4** γ = ½, knee 0.5 a₀, **affine** floor — floor-form effect alone.
- **R5** γ = 0.489, knee 0.32 a₀, affine floor — must reproduce 108.10 (source control).

## Predictions (fixed now)

1. R1/R0 = 1.000 (identity).
2. **R2/R0 < 1.15.** At γ = 0.489 the forms differ by (γ − ½)(x − x²/2) ≈ 1 % of C. If R2/R0 ≥ 1.5 this prediction is
   refuted and the 2.10× is at least partly the function.
3. Most of the 2.10× is carried by the floor form and/or the knee: R4/R0 > 1.3 **or** R3/R0 > 1.3.

## What each outcome does to the site

- Prediction 2 holds → "the form failing on its own" is withdrawn on /parameter-derivations and on the HA TEST-25
  classification note. The note's "cannot leave γ = ½ without paying 2.10×" argument loses its number. The Reparametrization
  badge (exact identity at γ = ½) is untouched. Record as an over-refutation.
- Prediction 2 fails → keep the claim, add the controls to the page, state the knee and floor form explicitly.
