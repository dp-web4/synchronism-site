# Round 4: Challenger (Final Stress)

I pick **"show where it breaks,"** and finish with the **patch-point count**.

## 1. Convention dependence of the drift

Your attraction comes from ∂ₜp = ∇²(Dp). The general family is ∂ₜp = ∇·(D^(1−λ) ∇(D^λ p)), where λ = 1 is Itô, λ = ½ is Stratonovich, and λ = 0 is Fick. The drift is v = −λ∇D for λ = 1, ½, 0, so the force is −∇D, −½∇D, or zero depending on a discretization choice. The microscopic lattice rule is the physics, and the whitepaper's "transfer resistance" doesn't select among them.

In the λ = 1 case the steady tracer density is p ∝ 1/D, so tracers pile up where D is low. That is a Soret/blowtorch-type effect, and the "attraction" is accumulation in a low-mobility region. It is not a force.

## 2. The break: sources are also walkers

Your drift test uses low-saturation tracers. Real matter in this framework is a high-saturation pattern.

- **Mobility collapse:** a body whose own cells sit near s ≈ 1 has D → 0 at its location, so under the departure-cell rule its hop rate is about 0. Heavy objects are frozen, and acceleration falls as Q rises. That is the opposite of the equivalence principle.
- **Escape route:** if you say the drift −∇D acts on the pattern independent of its own D, you have added a second hop rule for composites, which is a new patch.
- **Test-body limit:** the Round 3 simulation validates only probes that are not matter. A two-core run where both cores are mobile would fail your own "composite additivity" criterion.

## 3. The break: G depends on ambient saturation

The coupling is g ≈ |D′(I_b)|, evaluated at the local background. Other sources raise the background, so G varies with environment. This is a chameleon- or Jordan-type scalar-tensor effect.

- Superposition holds only to first order in ΔI/I_max. The cross-terms are O(ΔI²).
- Solar-system constraints (Cassini γ − 1 < 10⁻⁵, lunar laser ranging Nordtvedt η) then force the ambient s to be extremely small and effectively fixed. That is tuning. It also means saturation is invisible in the weak field, so the "gravity = saturation" claim is empirically indistinguishable from "gravity = a linear potential."

## 4. Simplest alternative model

A **Keller–Segel / chemotaxis model**: sources emit a diffusing, decaying-at-the-boundary scalar, and probes drift up its gradient with velocity χ∇c. It gives the same 1/r in the far field, the same 1/r² drift, linear superposition, and attraction. It needs no saturation, and it is the same patch (a drift coupling) written honestly as an axiom. Your model matches it everywhere you have tested, with extra baggage. Your control run (D′ = 0) only shows that the drift coupling is required, not that saturation is its origin.

## 5. Patch points, counted

1. **Sign and magnitude of attraction:** the hop-rule convention (λ).
2. **Source:** a pump plus a baseline sink, so the pattern is an open system.
3. **Inertia:** an unspecified second-order axiom, needed for any orbit.
4. **Mass:** Q ≡ M, with no derivation.
5. **Composite mobility:** the rule for saturated bodies (section 2).

Five added rules, against one output (the exponent) that Laplace gives for free. The fitted parameters, g, Q, and I_b, together can absorb any amplitude.

## Answers to your questions

1. I won't accept the departure-cell rule as a reading of "transfer resistance." It must be derived from a conservative microscopic update, such as a lattice gas with exclusion. In a symmetric exclusion process the hydrodynamic limit gives plain Fickian diffusion, with no tracer drift. Show that the drift survives there, or concede it is imposed.
2. The microscopic derivation comes first, then Kepler. Without inertia and equivalence, this is a candidate for a static scalar field only, not for gravity.

## Questions (max 2)

1. In an exclusion-process lattice gas with a pinned core, does the tracer drift come out nonzero, and with what sign? Give the measured value.
2. In a two-mobile-core run, do both bodies' velocities scale as the other's Q, independent of their own Q?

## Status: **Narrowed**

The static 1/r² profile holds, but only as a Laplace result. The attractive drift is convention-dependent (section 1), and the framework fails on the equivalence principle for matter bodies (section 2) and on the constancy of G (section 3). A positive answer to both questions would settle the static sector. Otherwise the gravity claim is a **Failed** derivation and survives only as a posited chemotaxis-type coupling.