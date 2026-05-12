# Explorer Topic: What Equation Does C(ρ) Solve?

**Priority**: HIGH — foundational  
**Seeded**: 2026-05-11 (maintainer)  
**Origin**: Pass 3 grad student + Pass 4 researcher in today's visitor log; back-annotated to Synchronism repo as `coherence_function_governing_equation_gap.md`

---

## The Question

The Ising/Landau mean-field tanh is the **fixed-point solution** of the self-consistency equation:

```
m = tanh(βJzm)
```

C(ρ) uses the same tanh functional form but is a **forward map** (ρ → C) with no self-consistency
loop. The site explicitly admits: "C(ρ) is not a self-consistency equation — ρ goes in, C comes
out, with no feedback loop."

This raises a decisive question: **What field equation, if any, generates C(ρ) as its solution?**

## Three Options (from the back-annotation proposal)

**Option A** (Most likely): No governing equation — C(ρ) is a pure phenomenological compander.
The tanh is chosen from the compander family (μ-law, Hill, Naka-Rushton) for its saturation
properties. This is a valid, honest position — but it means the "motivated by mean-field theory"
framing is decorative, and the tanh has no privileged status over Hill/logistic/erf.

**Option B**: C(ρ) is the fixed-point of a yet-unwritten coherence self-consistency equation.
There exists some F[C, ρ, γ] = 0 whose solution is C(ρ). Challenge: the "+1" log-regulator
asymmetrizes the sigmoid in a way that doesn't arise from standard symmetric mean-field theory.

**Option C**: C(ρ) is the steady-state of a dynamic equation dC/dt = G(C, ρ, γ). This would
supply the "kinematics" that multiple explorer sessions and visitor passes have identified as
missing: the framework labels regimes (forward map) but doesn't predict how systems evolve
into those regimes (dynamics).

## The Decisive Test (Option A vs B)

If Option A is correct, any member of the compander family with the same number of parameters
should fit the same datasets equally well. The test:

1. Take the same chemistry dataset (1,703 phenomena) and galaxy rotation curves (SPARC)
2. Fit Hill function, logistic function, arctan function in place of tanh
3. Compare AIC/BIC: if Δ < 2 across all families, Option A is confirmed

This is a few hours of computation and is **directly dispositive** for whether tanh is physics
or parameterization.

## Connection to Other Open Topics

- `chemistry-null-model-comparison.md` — Running the polynomial-in-Z null will also partially
  answer this (if polynomial matches tanh on chemistry, the functional form carries no information)
- `ncorr-from-hamiltonian-protocol.md` — Option B requires deriving a self-consistency equation
  from some Hamiltonian; without a Hamiltonian, Option B is closed
- `dual-C-bridge-or-rename.md` — The dual-C problem (C(ρ) vs C(γ,D,S)) is a symptom of there
  being no governing equation that would uniquely fix one C definition

## Why This Matters for the Site

The site says "tanh is motivated by Landau-class mean-field." This framing implies shared physics
with a well-understood theory. If Option A is correct, the honest framing is:

> "We chose the tanh-log compander from the family of sigmoidal squashing functions because it
> saturates naturally at both ends. The functional form is a phenomenological choice, not a
> consequence of mean-field theory — it *resembles* the mean-field solution but is not derived
> from one."

That reframe costs nothing scientifically (it's what the site already says in buried disclaimers)
but would propagate the honest assessment to the front of site as the Pass 3 and Pass 4 visitors
both demanded.
