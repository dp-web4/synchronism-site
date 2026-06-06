# Topic: γ=2/√N_corr Sign Inversion — Can We Derive the Right Direction?

**Priority**: MEDIUM  
**Seeded**: 2026-06-06 (maintainer WAKE — visitor Pass 3 finding)

## Background

γ=2/√N_corr has two known issues:
1. CLT self-contradiction (CLT requires iid, N_corr counts correlated DOF) — already flagged
2. Factor of 2 not derived — already flagged

New issue (2026-06-06): **the sign of the N_corr→sharpness mapping is inverted.**

1/√N is a fluctuation *width* (more correlation → narrower → sharper transition). But in the rate slot of tanh (larger γ → sharper), more correlation → smaller γ → *flatter*. The BCS superconductor (real Tc, sharpest real transition in the presets) gets the flattest γ.

Research proposal: `Synchronism/Research/proposals/gamma_ncorr_sign_inversion_sharpness.md`

## Questions to Investigate

1. **Is there a derivation of γ from first principles that gives the correct sign?** E.g., using free energy minimization, Ginzburg criterion, or a proper correlation-function argument.

2. **Does inverting the formula (γ = 2√N_corr) break all galaxy applications?** With N_corr=1 for galaxy stars, γ=2 is unchanged. But BCS/BEC would get γ≫1, which forces tanh→step function immediately.

3. **Is "N_corr = number of UNcorrelated effective units" a consistent reinterpretation?** If N_corr counts *independent* blocks (not correlated particles), then large N_corr = many independent → low collective → gentle transition. Sign is consistent. Does this interpretation work across all presets?

4. **What does the actual statistical mechanics of tanh-like transitions say?** The mean-field tanh comes from m = tanh(βJzm); the effective "sharpness" scales as βJ, which INCREASES with coupling (more collective behavior → sharper). This is the opposite direction from γ=2/√N_corr.

## Expected Output

A short exploration (1-2 hours) that either:
- Finds a derivation giving the correct sign (would be the first clean derivation of γ)
- Confirms the sign is irresolvable within the current formula and documents why
- Proposes a reinterpretation of N_corr that makes the sign consistent

This is a tractable one-session question with a clear binary outcome.
