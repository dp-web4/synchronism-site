# Topic: Compander-Family AIC/BIC Model Selection

**Priority:** HIGH — the single most decisive missing artifact (all four visitor personas demanded it)  
**Seeded:** 2026-05-17 (maintainer)  
**Research proposal:** Synchronism/Research/proposals/compander_family_model_selection_aic_bic.md

## Question

Run AIC/BIC model selection across the compander family (tanh, Hill/Naka–Rushton, logistic, erf, μ-law, Gompertz) on the same datasets the framework has already used — SPARC rotation curves, chemistry γ≈1 boundary data, superconductor Tc data. Does tanh win? By how much?

## Context

The Why Synchronism page already admits: "The shape — tanh — is a phenomenological choice, not a derived result: any S-curve with the same saturation properties would fit the same data equally well."

This admission is accurate and has been on the site for months. It is an explicit invitation for model selection that has never been accepted. All four visitor personas in the 2026-05-17 session flagged this gap independently:

- Casual enthusiast: "I can't tell why you picked this shape"
- Tech writer: "the sentence invites the comparison; where is it?"
- Grad student: explicitly demanded the AIC/BIC table, named the compander siblings
- Researcher: "The framework cannot defend tanh against its compander siblings without this comparison, and the comparison is not done."

The Hill/Naka–Rushton form is particularly important: it contains a free shape parameter n (tanh is the n→∞ limit) and is the canonical compander in sensory physiology and biochemistry. If n ≠ ∞ is preferred by AIC/BIC, tanh is not the right functional form for those domains.

## Why It Matters

1. Without this, the framework cannot defend tanh against any S-curve alternative
2. Critical exponent failures (~2× off) are a functional-form diagnostic — different companders have different near-transition expansions; this comparison would tell us if a different form does better on that specific failure
3. The Why Synchronism page has been advertising this comparison as necessary; running it closes the explicit gap the site created

## Suggested Starting Points

- SPARC dataset (175 galaxies): fit each compander to rotation curve data; V_flat as input (current practice); minimize χ²; report k (parameters), ln(L), AIC, BIC
- Chemistry data: the γ≈1 boundary dataset; same procedure
- Superconductor Tc: YBCO and conventional BCS superconductors
- Expected runtime: one Python session, 2-4 hours
- Prior art: Hill vs. tanh was tested 2026-03-27 for the coupling-coherence dataset — Hill won on one specific dataset but the result was a baseline artifact (with proper 3-param fit, tanh won by ΔAIC=17.6). The present topic is broader: full SPARC + chemistry + Tc combined picture.

## Expected Result Format

| Form | Free params | ΔAIC (SPARC) | ΔBIC (SPARC) | ΔAIC (chem) | ΔBIC (chem) | ΔAIC (Tc) | Note |
|------|-------------|--------------|--------------|-------------|-------------|-----------|------|
| tanh (current) | 3 | 0 (ref) | 0 (ref) | 0 (ref) | 0 (ref) | 0 (ref) | |
| Hill (n free) | 4 | ? | ? | ? | ? | ? | If ΔBIC < -2, tanh is better than Hill |
| logistic | 3 | ? | ? | ? | ? | ? | |
| erf | 3 | ? | ? | ? | ? | ? | |
| μ-law | 4 | ? | ? | ? | ? | ? | |

## Outputs

The result goes directly to:
- `/why-synchronism` — replace "any S-curve fits equally well" with the actual comparison
- `/honest-assessment` — add "Model Selection" entry
- `/equation-walkthrough` — note which compander won and why tanh was chosen (or replaced)
- Back-annotate to Synchronism repo if tanh loses
