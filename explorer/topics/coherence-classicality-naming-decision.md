# Topic: "Coherence" = Classicality — Research-Level Naming Decision

**Priority:** HIGH  
**Source:** 2026-05-27 visitor (Pass 3 grad student, Pass 4 researcher) — 3 personas flagged this in one day  
**Status:** Open

## The Problem

C(ρ) is named "coherence" and its axis runs C≈0 (quantum/independent) → C≈1 (classical/ordered). But in condensed-matter physics, "coherence" means quantum phase coherence — maximized in BEC/BCS condensates. The framework assigns "low coherence" to the most quantum-coherent systems known to physics.

The two axes are orthogonal:
- **Classical ordering** (Ising m: 0=disordered, 1=ordered) — what C actually measures
- **Quantum phase coherence** (off-diagonal long-range order; ODLRO) — what "coherence" means in CM

A BEC is simultaneously: (a) high quantum coherence (large ODLRO wavefunction), and (b) low C in Synchronism (large N_corr → small γ → flatter C curve). These axes are orthogonal.

## The Research Question

What does C(ρ) actually measure? Options:
1. **Classical ordering** — C is an order parameter analog (0=disordered, 1=ordered)
2. **Decoherence fraction** — C measures how much a system has decohered from quantum to classical behavior
3. **Collective behavior intensity** — C measures how "collectively" a system behaves, regardless of quantum/classical
4. **Classicality** — directly the ratio of classical-to-quantum character

All four are more accurate than "coherence." The question is which one the framework actually intends, and which resolves the inversion relative to CM usage.

## Why This Is Research-Level

The naming choice determines:
- Which community can engage with the framework without getting confused (quantum info vs statistical mech vs decoherence)
- Whether the claims about BEC/BCS sitting at "low coherence" are a feature (they're "not yet classical") or a bug (the word means the opposite of the CM meaning)
- Whether the compander-as-classicality interpretation is the correct one

The maintainer added a disambiguation note to the Coherence Explorer (2026-05-27). But the research decision — should C be renamed? — requires commitment from the framework, not just a site caveat.

## What to Investigate

1. Read archive sessions that discuss what C(ρ) is supposed to represent physically. Is there an explicit statement about what "coherence=0" means for a BEC?

2. What does the compander-family literature (μ-law, Hill, Naka-Rushton) call the output variable? Is there a standard name for the output of a compander in the physics/signal processing literature?

3. Is there a natural resolution within the framework? For example: C is "classicality" for quantum systems (C≈0 = quantum-dominated, C≈1 = classically-dominated) but "collective ordering" for classical systems (C≈0 = disordered, C≈1 = ordered). These are actually the same direction of C.

4. Proposal: rename C to "classicality index" or introduce notation C_cl to distinguish from quantum coherence C_q. Evaluate whether this breaks anything in the existing framework.

## Deliverable

- Finding with recommendation: rename C or add permanent disambiguation?
- If rename: specific new symbol/name and implications for framework documents
- If disambiguation: stronger canonical statement for /coherence-explorer, /why-synchronism, /key-claims

## Back-Annotation Pointer

Research proposal filed 2026-05-27 to Synchronism/Research/proposals/ (`coherence_classicality_naming_and_test03_test05_double_filing.md`) covering this issue.
