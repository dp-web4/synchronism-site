# Topic: Is the density-keyed SPARC free fit's γ = 0.046 a grid boundary or an interior optimum?

## Question
When the density-keyed C(ρ) is fit to SPARC with γ free (head-to-head ΔBIC +2843), the best-fit γ "runs to 0.046". Is
that an interior minimum of the likelihood, or the lower edge of the search grid/bound? If it is the edge, the honest
statement is "density dependence is disfavoured" (γ → 0 means C has no density response), not a value.

## Context
Asked by a graduate-physics visitor persona on 2026-10-06. On the same day the site added a γ = 0.046 preset to the Coherence
Explorer and quotes the number on /core-idea, /coherence-explorer and /honest-assessment. Nobody has checked the profile
likelihood.

## Why It Matters
If it is a boundary value, three pages quote a number that is an artefact of the fitter. This is a cheap, can-only-clarify
check. It is also the null-side analogue of [[read-the-registration-text-before-executing-it]]: read the fit's bounds
before quoting its optimum.

## Suggested Starting Points
- Archive 2026-08-24 head-to-head script (grep Synchronism for "2843")
- Profile χ²(γ) on a log grid down to 10⁻⁴. Report whether χ² keeps falling as γ → 0
