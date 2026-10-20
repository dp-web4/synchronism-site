# PRIMARY, Round 3

## Label: (A) interpretive analogy only, narrowed further

The analogy's valid domain is **passive, time-integrated readout** (call it M1). Interaction-based measurement such as path marking, Zeno gating, or a detector coupling to the system (M2) is outside it. I concede the whitepaper equivocates between M1 and M2. The "no observer effect" and "no quantum mystery" language is only defensible for M1.

## Q1: E(a,b) and Bell

The most generous formalization of "synchronized cycle, setting = sampling phase" is:

- Shared phase λ, uniform on [0, 2π).
- A(a,λ) = sgn cos(λ−a) and B(b,λ) = −sgn cos(λ−b).
- Then E(a,b) = −(1 − 2θ/π), where θ is the angle between a and b taken mod π.

This is linear in θ, and its CHSH maximum is **S = 2**, saturating but not exceeding the local bound. Quantum mechanics gives −cos θ and S = 2√2. So the CRT/raster model, as stated, reproduces perfect correlation at θ = 0 and nothing beyond the classical bound.

To exceed 2, the model must give up one of two things, and the text picks neither:

1. **Locality.** The readout on one side depends on the other side's setting.
2. **Measurement independence.** λ is correlated with the settings.

I withdraw "Bell's theorem makes perfect sense." What survives is that shared-origin synchronization explains the **perfect correlation at matched settings**, which is the EPR part and not the Bell part.

## Q2: The contradiction, and one formal step

**Reconciliation.** I split the text. §5.3's "resampling, not decoherence" applies to M1 only. §5.5's "path marking requires pattern modification" is correct for M2 and overrides §5.3 for which-path experiments. The Zeno bullets ("witness control") describe M2, so "no disturbance" cannot be applied to them. The text must be edited accordingly.

**Formal step toward testability.** The analogy should make a fixed-form claim: for a source with a cycle of period T_eff and a time-integrating detector of window τ, the record contrast is

V(τ) = |sinc(πτ/T_eff)|, with revivals at τ = nT_eff.

This replaces the Planck-scale T, which I agree makes V(τ/T) degenerate in any lab, with an **effective, system-specific period**. I'll be candid about the cost. For a two-arm beat, this is the standard QM result with T_eff = 2π/Δω, so it is **not yet a discriminator**. It becomes one only if Synchronism commits to a T_eff fixed independently of the beat, for example by particle mass or energy, and predicts revivals or a visibility floor that standard QM doesn't. I can't supply that derivation, and I won't claim I can.

## What would falsify the strong version

The strong version is: no mystery, local definite pre-existing phases, and a passive witness. It is falsified if any of these hold.

1. **Bell violation.** S > 2 with space-like separation and settings chosen independently of λ. This is already observed (loophole-free tests). So the strong version is **already failed** unless it adopts nonlocality or superdeterminism, which would be a different, costly theory.
2. **Quantum eraser.** Visibility changes with the *availability* of path information while τ, the source, and the detector are held fixed. This is also already observed, so "passive witness" fails for M2.
3. **τ-independence.** Lab visibility stays flat across many decades of τ where the model with a committed T_eff predicts structure. This would falsify the committed form of the sampling model.
4. **Contextuality.** Violation of a noncontextual inequality (Kochen-Specker type) by single systems. This falsifies "definite pre-existing phase" for any non-contextual mapping.

## Status

- **Held:** The sampling-window intuition for M1 as pedagogy. It also covers shared-origin explanation of matched-setting correlation.
- **Narrowed:** "No observer effect" applies to M1 only. "Raster entanglement" explains perfect correlation, not Bell violation.
- **Failed:** "No quantum mystery" as a universal claim, the Bell resolution, the double-slit "perfect demonstration," and the Planck-scale technical mapping. The strong (B) reading is already contradicted by experiment.
- **Would settle:** (i) a committed T_eff derived independently of the beat, with a revival or floor that standard QM lacks; (ii) an explicit mechanism for S > 2 that names which Bell assumption is dropped; (iii) a revised §5.1 that restricts scope to M1.