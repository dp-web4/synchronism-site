# Explorer Topic: Why Does p_crit Derivation Fail?

**Seeded**: 2026-02-22
**From**: Coupling-Coherence Experiment (response to Andrei's AI)
**Priority**: Medium

## Context

The coupling-coherence experiment found a clear sigmoid C(p) transition in multi-agent knowledge discovery, but the information-theoretic derivation of p_crit failed catastrophically (400× error).

The candidate formula was:
```
p_crit = η · H(world) / (K · m · (1 - 2η))
```

This was motivated by analogy with the physics form ρ_crit = A × V_flat², which IS derived from fundamental constants.

## Questions to Explore

1. **Why does it fail?** The formula assumes p_crit is set by when collective signal exceeds world complexity. But the actual transition happens at p ≈ 0.002, meaning even negligible coupling triggers the transition. Is this because Bayesian agents with complementary observations benefit from ANY shared information, no matter how rare?

2. **Is there a correct derivation?** Information theory has results about collective inference (e.g., distributed detection, Condorcet jury theorem, consensus protocols). Do any of these predict the critical coupling for Bayesian agents on random graphs?

3. **Why does Hill beat tanh?** The Hill function (p^k / (p^k + p_half^k)) is a power-law sigmoid. The tanh form includes a logarithmic argument that creates different curvature near p=0. Is the Hill function's superior fit because the underlying process is better described by power-law kinetics (like enzyme binding) than by logarithmic saturation?

4. **Does the sigmoid persist at scale?** The experiment used small worlds (12 nodes, 30 edges). Would the transition become sharper, smoother, or disappear entirely with N=100 or N=1000? Does p_crit scale with world size in a predictable way?

5. **Phase transition or smooth crossover?** In physics, phase transitions are sharp in the thermodynamic limit. Is the sigmoid C(p) a genuine phase transition (would become a step function as N→∞), or a smooth crossover at all scales?

## Relevant Literature

- Distributed detection theory (Tsitsiklis & Athans, 1985)
- Condorcet jury theorem and its extensions
- Consensus protocols in multi-agent systems (Olfati-Saber & Murray, 2004)
- Information-theoretic bounds on collective learning
- Hill function in cooperative binding (Hill, 1910; Weiss, 1997)
