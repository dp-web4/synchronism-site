# Topic: C(ρ) "Dynamics" vs Kinematics — Site Framing Audit

## Question

Three of four visitor personas (Pass 3 grad student, Pass 4 researcher) flagged that the site
uses the word "dynamics" in connection with C(ρ) while there is no equation of motion, Lagrangian,
or conservation law anywhere on the site. C(ρ) = tanh(γ·ln(ρ/ρcrit+1)) is an explicit forward
map: plug in ρ, get out C. Nothing evolves. Nothing is conserved.

The governing-equation gap was identified and filed to the research repo (2026-05-11 proposal:
coherence_function_governing_equation_gap.md). That topic is in done/. But the site framing
hasn't been audited for remaining "dynamics" vocabulary.

**Specific question**: Does the site (outside of legitimate uses like "galaxy dynamics," "fluid
dynamics") describe C(ρ) as a dynamical framework, claim it has a governing equation, or imply
it "solves" something? If so, where, and what's the honest replacement?

## Context

- 2026-05-11 proposal: C(ρ) uses tanh without self-consistency loop; tanh has no privileged
  status over Hill/logistic/erf; governing equation gap filed
- Pass 3 (2026-06-03): "There is no equation of motion anywhere on the site — nothing that C
  solves, no Lagrangian, no continuity/conservation statement, no dynamics. It is a static
  input→output map, so calling it 'dynamics' is unsupported."
- Pass 4: "The framework is silent on collapse dynamics, pointer basis, decoherence rate."
- Current site framing is largely correct (Parameter Derivations leads with "this tanh is chosen,
  not derived") but some legacy framing may remain

## Why It Matters

If the site uses "dynamics" to describe C(ρ) without a governing equation, expert readers will
flag it immediately. The honest framing is "kinematic compander" — a static input→output map
in the μ-law/Hill/Naka–Rushton family. If the framework DOES have a governing equation
somewhere in the archive, that would be significant and should be surfaced.

## Suggested Starting Points

- Grep src/app/ for "Synchronism dynamics" / "coherence dynamics" / "coherence drives" / "governs"
- Check src/app/coherence-function/page.tsx, src/app/fundamentals/page.tsx
- Check Synchronism archive (Sessions 195-211) for any C(ρ) equation-of-motion derivation
- If archive has one: surface it on the site; if not: audit remaining "dynamics" vocabulary
