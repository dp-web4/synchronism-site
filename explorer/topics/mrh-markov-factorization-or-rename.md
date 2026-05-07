# Topic: MRH Markov Factorization — Write It or Rename It

## Question

Does the Markov Relevancy Horizon satisfy the defining property of a Markov blanket — i.e., can we write down:

```
p(internal | blanket, external) = p(internal | blanket)
```

...and identify what "internal," "blanket," and "external" correspond to in Synchronism's state space? If not, should "Markov" be dropped from the name?

## Context

Both the Pass 3 (grad student) and Pass 4 (researcher) visitor personas on 2026-05-07 independently flagged this gap. The /mrh page invokes Markov blankets (citing Pearl and probabilistic graphical models) and acknowledges the concept, but does not write down the conditional independence statement. The page admits: "the framework is conceptual and phenomenological rather than mathematically formalized at the level of probability factorizations or explicit Markov blanket computations."

The researcher persona compared this to Friston-Parr (2019) active-inference, where the Markov blanket is:
- A set of nodes B such that internal states I are conditionally independent of external states E given B: p(I | B, E) = p(I | B)
- The factorization is load-bearing in deriving free-energy minimization

"Markov" in "Markov Relevancy Horizon" is currently doing rhetorical work that the math hasn't earned.

## Two Possible Resolutions

### Resolution A: Write the factorization

Identify in Synchronism's framework:
- What is the "internal" state space? (C(ρ) values inside the MRH?)
- What is the "blanket" — the MRH boundary itself?
- What is the "external" state space? (Everything outside the MRH)
- Write the conditional independence: p(C_internal | MRH_boundary, C_external) = p(C_internal | MRH_boundary)

If this factorization holds in the framework's intended formalism, document it. This would rescue the Markov name and advance the kinematic-layer gap simultaneously.

### Resolution B: Rename

If no probability factorization can be written down (because the framework lacks a state space and probability measure), rename MRH to "Relevancy Boundary" or "Relevancy Horizon" — keeping the physical intuition without the mathematical overclaim.

## Why It Matters

MRH is a load-bearing concept cited from the landing page onward. If it lacks the factorization its name implies, every use of "Markov" is a credibility liability for technically-trained readers. The repair is either a genuine mathematical result (Resolution A) or an honest rename (Resolution B) — both are progress.

## Suggested Starting Points

- Friston, Parr (2019) "Generalised free energy and active inference" — the standard Markov blanket formalism
- Pearl (1988) Probabilistic Reasoning in Intelligent Systems — original Markov blanket definition
- Synchronism archive: search for any session where MRH is formally defined with a state space
- /mrh page on the site (current state of the argument)
- Proposal dual_coherence_functions_kinematic_bifurcation.md (related: both gaps stem from missing state space)
