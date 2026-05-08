# QM Kill Criterion: Specify vs DD Literature

**Priority:** HIGH
**Seeded:** 2026-05-08 (maintainer session)
**Estimated scope:** 1–2 sessions

## Context

The Key Claims page Claim #1 advertises a kill criterion:

> "Design a noise environment where resync outperforms isolation, but standard decoherence theory
> predicts it doesn't. If isolation wins uniformly, the synchronization ontology adds nothing."

The 2026-05-08 researcher-persona audit and the research proposal
`qm_kill_criterion_dd_gap.md` (filed same day) identified that this criterion:

1. Is not operationalized at QIP level (no system, bath, pulse sequence, predicted ratio)
2. Does not engage the DD literature (Viola-Knill-Lloyd 1999, UDD, CPMG, CDD) where
   periodic pulse sequences already demonstrably beat passive isolation in non-Markovian baths
3. May be trivially satisfied (true under standard QM), which would make it not a discriminator

## The Task

Determine whether the Synchronism "resync" prediction is:
(a) mathematically identical to standard DD → reparametrization, retire the kill criterion
(b) physically distinguishable from standard DD → specify the protocol and add to test catalog

### Step 1: Derive the decoherence timescale from MRH dynamics

The MRH framework describes decoherence as "phase desynchronization at the boundary."
Can this be formalized to give a decoherence rate Γ_decohere as a function of:
- System parameters (N_corr, γ)
- Bath parameters (spectral density S(ω), correlation time τ_c)
- Protocol parameters (pulse interval τ, number of pulses N)?

Compare with the standard Bloch-Redfield result:
- Passive isolation: 1/T₂ = Γ₁/2 + Γ_φ
- CPMG (n pulses): 1/T₂^CPMG ~ S(n/(2τ)) where S is the noise PSD

### Step 2: Identify the discriminating regime

If Synchronism's MRH equation gives:
T₂^resync / T₂^isolation = f(γ, N_corr, bath params)

and standard Bloch-Redfield + CPMG gives:
T₂^CPMG / T₂^passive = g(pulse interval, bath params)

Are f and g identical? If yes → reparametrization.
If no → what regime (bath spectral density, γ value) shows the largest disagreement?

### Step 3: Specify the protocol

If there is a distinguishing regime, specify the experiment:
- System: (transmon qubit? NV center? trapped ion?)
- Bath: (1/f? Ohmic? super-Ohmic? structured?)
- Protocol: (CPMG with τ = ? μs, N = ? pulses)
- Predicted T₂ ratio: Synchronism predicts ? vs standard DD predicts ?
- Kill threshold: "if T₂(resync)/T₂(isolation) < X, synchronization ontology adds nothing"

## References to Engage

- Viola, Knill, Lloyd (1999): "Dynamical Decoupling of Open Quantum Systems" — PRL 82, 2417
- Uhrig (2007): UDD — optimized sequence for pure dephasing
- Khodjasteh, Lidar (2005): CDD — concatenated DD for general Markovian noise
- Recent transmon DD experiments (2022–2024): actual measured T₂ enhancements

## Output

Write to `explorer/findings/qm-kill-criterion-dd-comparison.md` with:
- Verdict: reparametrization or distinguishable?
- If distinguishable: the fully specified protocol for the test catalog
- If reparametrization: recommendation to retire the kill criterion and label QM Claim as
  "Untested + foundationally incomplete" (the honest badge)
