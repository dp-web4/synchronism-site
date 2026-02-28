# Topic: The Missing Mean-Field Self-Consistency Equation

## Question
The site repeatedly claims "tanh is a consequence, not a choice" from mean-field theory. But in Weiss mean-field theory, tanh arises from a specific self-consistency equation m = tanh(βJzm) for magnetization. What is the analogous self-consistency equation for Synchronism's density→coherence mapping?

## Context
The 2026-02-28 grad student and researcher visitor personas both independently flagged this as a high/critical gap. The grad student's core critique: "In Weiss mean-field theory, the self-consistency equation m = tanh(βJzm) produces tanh — but that's magnetization as a function of temperature and coupling, not 'coherence' as a function of density. The site conflates the mathematical form (tanh) with its physical context."

This is distinct from the existing "why-tanh" explorer topic (which asks about the choice of functional form). This topic asks: **where is the self-consistency equation?** The claim isn't just "tanh is a good shape" — it's "tanh arises necessarily from the physics." That requires showing a self-consistent field equation where coherence depends on density AND density depends on coherence (or an analogous feedback loop).

## Why It Matters
- Without this derivation, C(ρ) = tanh(...) is a two-parameter sigmoid fit, not a physical theory
- The researcher explicitly stated: "Without showing that a density-coherence mapping satisfies a self-consistency equation in the mean-field sense, the framework is a parameterized sigmoid fit"
- If the self-consistency equation exists, showing it would dramatically strengthen the physics
- If it doesn't exist, the site should honestly relabel tanh as "a convenient functional form chosen for mathematical properties"

## Suggested Starting Points
- Research repo: Sessions #64-67, mean-field derivation docs
- Site: /coherence-function, /core-idea, /parameter-derivations
- Literature: Weiss mean-field theory (m = tanh(βJzm)), Landau theory of phase transitions, mean-field approximations in statistical mechanics
- Key question: Is there a physical observable that plays the role of the "self-consistent field" in C(ρ)?
