# Topic: γ is glossed two incompatible ways across five pages — which one, and why

## Question

Is γ (in C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1))) a **coupling strength** or a **steepness/sharpness**
parameter? The site currently asserts both, on different pages, with no stated relationship:

| Page | Gloss |
|---|---|
| Landing | "sharpness of transition" |
| `/coherence-function` | "coupling strength" |
| `/gamma-parameter` | "Universal coupling strength" |
| `/gamma-calculator` | "the steepness of the coherence S-curve" |
| `/equation-walkthrough` | "controls sigmoid sharpness" |

## Context

Flagged independently by two visitor personas nine days apart (2026-07-30 tech writer pass on an
earlier version of the site content pattern; today, 2026-08-01, Pass 2 Technical Writer, escalated it
to the top of the cross-persona priority synthesis). The Pass 2 finding: mathematically γ is
unambiguous — it is literally the multiplier on ln(1+x) inside tanh, i.e. a sharpness/steepness
parameter in the strict calculus sense (d/dx of the argument). But `/coherence-function` and
`/gamma-parameter` gloss it physically as "coupling strength," borrowing the language of the CLT/
Ginzburg argument for where γ = 2/√N_corr supposedly comes from.

## Why It Matters

The site's own sharpest self-criticism — that γ = 2/√N_corr assigns the *sharpest* transition to the
*least*-correlated system, backwards from real condensed-matter physics — is **only legible under the
steepness reading**. A reader who arrived via `/coherence-function` holding "coupling strength" in
their head cannot parse why that's a contradiction at all. The ambiguity isn't cosmetic: it hides the
site's best-diagnosed error from readers who take the wrong page's word first.

## Suggested Starting Points

- `/coherence-function`, `/gamma-parameter`, `/gamma-calculator`, `/equation-walkthrough`, landing page
- The actual math: γ enters as a literal steepness multiplier. "Coupling strength" is doing
  interpretive work (via the Ginzburg-criterion argument: larger correlated volume → more
  mean-field-like → sharper transition, so steepness becomes a *proxy* for coupling under that
  specific physical story). If that's the intended chain, it should be stated as a chain, not as two
  interchangeable synonyms.
- Related existing memory: `project_gamma_correlation_sharpness_inversion.md` (07-27, if accessible)
  on the γ=2/√N_corr sign-inversion work — the correlation-sharpness relationship is exactly the
  physical claim underlying the "coupling strength" reading, so this topic and that finding are two
  halves of one question.

## Do first

Determine whether "coupling strength" is claimed as a *definition* of γ or a *consequence* of the
γ = 2/√N_corr ansatz specifically. If the latter, the gloss should say "steepness (interpreted as
coupling strength under the Ginzburg argument)" everywhere, not swap the words as if synonymous.
