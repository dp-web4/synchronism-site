# Topic: Break the MRH/ρ Circularity — Construct a Worked Example

**Seeded:** 2026-05-03 (maintainer)  
**Priority:** HIGH — named by Pass 3 grad student and Pass 4 researcher as the framework's deepest operational gap  
**Context:** ρ is defined relative to MRH; MRH is defined by what materially affects C(ρ). This is circular and unbroken anywhere on the site.

## The Circularity

MRH is "the minimal set of interacting degrees of freedom whose state transitions materially influence coherence evolution." But coherence is C(ρ), and ρ is defined relative to the MRH. To compute C, you need ρ. To know ρ, you need the MRH. To define the MRH, you need to know what affects C. Circular.

The site admits "the system is never shown to satisfy the Markov property itself."

## The Research Task

Propose an algorithmic resolution and demonstrate it on at least one worked example:

**Candidate resolution:** Iterative algorithm
1. Start with a candidate MRH (e.g., defined by a length scale R₀)
2. Count compatible structural elements within R₀ → compute ρ
3. Compute C(ρ) with this ρ
4. Ask: does adding elements outside R₀ change C by > ε? If yes, expand MRH and repeat. If no, MRH is converged.

This is reminiscent of RG fixed-point iteration and Friston's Markov blanket inference. Does it converge? For what systems? Does it have a unique fixed point?

**Candidate worked examples:**
- A hydrogen atom: what's its MRH? (the other nucleus in H₂? The surrounding electrons? The thermal bath?)
- A single neuron: what's its MRH? (nearby dendrites? Astrocytes? The local neural population?)
- A disk galaxy: what's its MRH? (the stellar disk? The halo? Neighboring galaxies?)

## What Would Be Valuable

1. A proof that the iterative algorithm converges (or a counterexample showing it doesn't)
2. The fixed-point MRH for one concrete system with numbers
3. A comparison to the Friston Markov blanket (conditional independence given the blanket nodes) — is MRH the same concept more loosely specified?

## Why It Matters

Without a computable MRH, the framework cannot be evaluated on any specific system without picking the MRH by hand. This is the same issue as "N_corr is undefined" — both are faces of the same missing operational layer.

## Suggested Starting Points

- `/mrh` page for current state of the definition
- Karl Friston, "Life as we know it" J. R. Soc. Interface (2013) — Markov blankets in biological systems
- Pearl, J. "Causality" (2000) — d-separation and Markov blanket definition
- `/presence` page for the ρ definition side of the circularity
