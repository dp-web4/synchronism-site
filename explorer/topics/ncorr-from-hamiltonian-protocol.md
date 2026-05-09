# Topic: N_corr Measurement Protocol — From Hamiltonian to Integer

## Question

Given a physical system with a known Hamiltonian H (or operational specification), can
N_corr be computed without first observing γ and back-inferring N_corr = 4/γ²?

## Context

Today's visitor log (2026-05-09) had both Pass 3 (grad student) and Pass 4 (researcher)
independently call this the **dispositive gap** in the framework: without a first-principles
N_corr protocol, every γ "prediction" is a downstream consistency check on an inferred
parameter, not a first-principles calculation.

From Pass 3: "If N_corr cannot be computed from a system specification, then γ cannot be
computed, then C(ρ) cannot be computed, then the framework has no operational predictions
independent of fitting N_corr to outcomes."

From Pass 4: "Until a Hamiltonian (or operational specification) of a system can be turned
into an integer N_corr without consulting observed γ, the framework has no first-principles
predictive map."

This is the **most important open theoretical question** in the framework.

## Why It Matters

The γ Calculator uses preset N_corr values (Ideal gas: 1, Water: 4, Enzyme: 30, BCS: 10000)
but notes they are "approximate estimates, not measured physical pair counts." The 2026-05-09
maintainer session promoted this caveat to the top of the calculator page — but the underlying
gap is a research question, not a UI fix.

Specifically:
1. If N_corr is computed from observed γ (back-inference), all chemistry "validations" are
   consistency checks, not predictions.
2. If N_corr can be derived from a Hamiltonian (e.g., via correlation functions, block-spin
   renormalization, or information-theoretic criteria), the framework has a path to genuine
   first-principles predictions.

## Candidate Protocols

Three natural approaches to derive N_corr from physics:

1. **Connected correlation functions**: N_corr = Σ_{i≠j} <σ_i σ_j>_connected / <σ_i²>_connected
   For Ising-class systems. Computable from the Hamiltonian via transfer matrix or linked-cluster expansion.

2. **Cluster entropy / block-spin**: Define N_corr as the block size at which coarse-graining
   stops reducing entropy (i.e., the natural scale where a single degree of freedom captures
   the block's variance). Relatedly, N_corr ≈ (correlation length ξ)^d in d dimensions.

3. **Mutual information**: N_corr = block size at which the mutual information between a block
   and its complement saturates. This is the definition the MIPT literature uses (entanglement
   membrane). Connects to the MIPT mapping explored in the 2026-04-11 finding.

4. **Operational: pair counting by spectroscopy**: For correlated systems, N_corr can sometimes
   be read off from the coherence time τ_c and the microscopic timescale τ_0:
   N_corr ~ (τ_c/τ_0)^(some power). This is the QM kill criterion derivation path (see
   topic `qm-kill-criterion-dd-specification.md` in done/).

## Suggested Starting Points

- Synchronism research archive: does any session specify how N_corr is to be computed? Search
  for "N_corr" or "N_crit" in session headers.
- MIPT literature: Li-Chen-Fisher 2018, Skinner-Ruhman-Nahum 2019 — how do they operationalize
  the coherence length / "block size" in the circuit context?
- Kubo's linear response theory: the "number of correlated particles" in a response function
  is formally χ(q→0)/χ_single, where χ is the susceptibility. This may give a Hamiltonian→N_corr
  path for simple systems.

## What a Successful Answer Looks Like

A protocol that:
1. Takes as input a system's Hamiltonian (or interaction graph) and temperature
2. Outputs an integer N_corr
3. When fed into γ = 2/√N_corr, produces γ values that match the calculator's presets
   (or corrects them)
4. Makes a first-principles prediction for at least one system NOT already used to calibrate
   the framework

If such a protocol exists, it transforms the framework from a consistency-checker into a
predictor. If it doesn't, that's also a significant finding — it would mean γ is permanently
a phenomenological fitting parameter.
