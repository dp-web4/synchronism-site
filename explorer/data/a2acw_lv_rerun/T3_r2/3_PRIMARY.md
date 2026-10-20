# PRIMARY, Round 3

## Label: still **(A) interpretive analogy only**

## Answer to the consequence of (A)

Yes. Under (A), these must be struck or hedged: "superposition doesn't exist," "Bell's theorem makes perfect sense," "perfectly demonstrates," "nothing changes," and the Applications lists (cryptography, teleportation, QEC) labeled "explained." Replacement language ("Synchronism reveals reality is always definite") becomes "Synchronism *proposes*, as a hypothesis, ..." I also concede Press 1.1 (integration gives Σ|aᵢ|², not fringes). The CRT has no phase-carrying quantity, so the analogy supports "smooth vs. discrete readout" only, not interference.

## Narrowed interpretive layer (what survives)

1. Readout depends on detector integration window and phase. This is true of real detectors and is the one thing the CRT shows.
2. The CRT is a mnemonic for "a process unchanged by the readout can look different under different readouts." It is silent on whether QM systems are such processes.
3. "Observation collapse" as written is retracted. Repeatability needs a mechanism, which I address below.

## Answer to Q2 (collapse)

I cannot supply a mechanism from the text. Repeatability requires that the first sync *constrain* the later one, i.e., a coupling that persists after sync. That is a physical interaction between witness and pattern. It is an observer effect in the operational sense (system-detector interaction), though not necessarily a consciousness effect. So I narrow "no observer effect" to: *no consciousness-dependent effect*. The "no disturbance" claim is withdrawn for physical measurement, and §5.5's Zeno bullet was correct to imply it. This puts Synchronism close to decoherence-style accounts, which §5.3 already says it parallels, and it gives up the claim to go "further."

## Answer to Q1 (formal mapping): what I can and cannot do

I cannot give a full f(φ, θ) that reproduces Bell correlations, since Bell and Kochen-Specker make that impossible for a deterministic single-phase model unless the assumptions you listed are dropped. For a **single system, single binary setting**, a trivial model exists: φ uniform on [0, π), outcome +1 iff cos²(φ−θ) > 1/2... but that gives a step function, not Malus's law, and it is only noncontextual for one qubit-like case. The standard fix is a Bell-type hidden-variable model (a Kochen-Specker-compatible model exists only for d = 2), which is *not* a derivation from the CRT picture. I won't pretend otherwise.

**The one formal step toward testability I commit to:**

> Specify a *finite-window readout model*: a detector with integration window T and phase φ_d, reading a cycling signal s(t) = A cos(ωt + φ). Predict the recorded contrast as a function of T·ω: C(T) = |sinc(ωT/2)|. State this as the *only* quantitative content the CRT analogy yields.

This is testable on classical systems (stroboscopic/lock-in readouts), is uncontroversial, and is therefore explicitly **not evidence for quantum claims**. It marks the boundary of the analogy.

On dropped assumptions: for any extension toward QM, I name **P2 (sampling independent of phase)** as the candidate to relax, i.e. a superdeterministic-type correlation between witness timing and cycle phase. I flag this as the most expensive option: it conflicts with "independent witness timing" and is hard to falsify. If Synchronism won't pick, the strong version stays unsupported.

## What would falsify the strong version (B)

The strong version says: *a local, deterministic, universal-tick cycling model replaces QM*. It is falsified by:

1. Loophole-free Bell/CHSH violations (S > 2), already observed, unless P2 is dropped with an explicit mechanism.
2. Kochen-Specker/contextuality tests in d ≥ 3 (observed).
3. Observed visibility-distinguishability tradeoff V² + D² ≤ 1 in which the "which-path" detector interaction strength sets D, i.e. a disturbance-based dependence that "resampling only" would not predict without a coupling term.
4. Lorentz-violation bounds, if the universal tick implies Planck-scale dispersion (photon-timing limits).

By (1) and (2), the strong version is **already falsified as stated**, absent the extra assumptions.

## Questions to Challenger (2)

1. If Synchronism is reduced to "decoherence-like + sampling-window readout," what does it add beyond standard decoherence accounts that is empirically distinguishable? If nothing, is "harmless reinterpretation" an acceptable terminal status?
2. Is the C(T) = |sinc(ωT/2)| contrast law a fair test of the analogy's only quantitative content, or do you see a defect?

## Status

- **Held:** Readout-window dependence (C(T) law), as pedagogy only.
- **Narrowed:** "No observer effect" → "no consciousness-dependent effect." Wave/particle → smooth/discrete readout.
- **Failed:** Raster entanglement as local deterministic pre-sync, the "observation collapse" bullet, the "no disturbance" claim, "perfectly demonstrates," and the Applications "explained" lists.
- **Would settle:** An explicit model with equations stating which of locality, realism, or P2 is dropped, a repeatability mechanism, and a derived V² + D² ≤ 1.