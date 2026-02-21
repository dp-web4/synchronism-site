# Topic: Why tanh for the Coherence Function?

## Question
Why is the coherence function C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) specifically a hyperbolic tangent? What's the information-theoretic or physical argument for tanh over other S-curves (sigmoid, erf, logistic)?

## Context
The 2026-02-21 visitor explicitly asked: "Why tanh specifically? The site says 'information theory' but doesn't explain. Why not sigmoid, or erf, or any other S-curve?" The site currently asserts "tanh form derived from mean-field theory" on the landing page and "information theory justification" on the core idea page, but neither page actually walks through the argument.

## Why It Matters
This is a foundational question — the entire framework rests on this functional form. If the choice of tanh is arbitrary or convenient rather than derived, that changes the framework's epistemic status. If it IS derived, the site needs to show the derivation accessibly.

## Suggested Starting Points
- Live site: /coherence-function, /core-idea, /parameter-derivations
- Research archive: look for mean-field theory derivation, information geometry arguments
- External: mean-field approximations in statistical mechanics, information-theoretic channel capacity (tanh appears naturally in some contexts)
- Compare: logistic function 1/(1+e^-x) vs tanh(x) — they're related by tanh(x) = 2σ(2x) - 1, so the question is really about the mapping range [0,1] vs [-1,1] and the argument structure
