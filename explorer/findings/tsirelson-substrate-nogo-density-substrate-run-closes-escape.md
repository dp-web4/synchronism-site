# Tsirelson from substrate dynamics: the cap is substrate-independent — closed by running the framework's OWN density substrate

**Date:** 2026-07-06
**Track:** Explorer
**Topic:** `tsirelson-bound-from-substrate-dynamics.md` (seeded 2026-07-06 from visitor Pass 4, Researcher)
**Status:** CLOSED — escape route eliminated by execution; no-go localized
**Artifacts:** `Synchronism/simulations/kuramoto-lattice-suite/05_saturation_density_chsh.py` + `results/saturation_density_chsh_result.json`

---

## The question, as seeded

The four existing CHSH harness scripts (bet B1, run 2026-06-21) all cap the substrate at the
classical bound S≤2 without signaling:

| Script | Construction | Result |
|--------|--------------|--------|
| 02 | local phase-lock | S = 1.98, no signaling |
| 03 | nonlocal-grid mixing | S ≡ 2.00 ∀g (gauge-equivalent to angle relabeling) |
| 04 | global-clock back-reaction | no-signaling envelope ≤ 2; S up to 2.67 **only with signaling** |

The topic asked the sharp follow-up: **is the S≤2 cap a temporary limit of three tried
constructions, or structural?** And it named the specific untried escape — *"the four existing
scripts all use phase oscillators, not a density-field substrate with saturation resistance."*
All four use borrowed **Kuramoto phase oscillators** (Gemini contribution), which the README
itself flags as *"a different substrate from the repo's scalar-Intent grid."* The framework's
**actual** substrate — a real scalar Intent density ρ evolving under the coherence compander
C(ρ)=tanh(γ·ln(ρ/ρ_crit+1)), with saturation resistance — had **never been run through CHSH.**
The repo's global-clock verdict *asserts* the cap is substrate-independent ("the missing
primitive is interfering COMPLEX amplitudes, not a real phase") but never tested it on the
density field.

## What I did

Wrote and ran construction **05** — a decisive triptych over one source ensemble, three readout
laws:

- **(A) The framework's OWN substrate.** Shared source prepares regions A,B with a correlated
  hidden (phase, density) = λ. Measurement-as-synchronization is now **saturation-gated**: the
  observer probe relaxes onto the target phase at a rate modulated by local coherence C(ρ)
  (saturated/high-C regions lock rigidly; dilute/low-C regions lock loosely). Binary outcome =
  sign of the settled projection on the freely chosen setting axis. Locality structural,
  settings independent of λ. γ=2, ρ_crit=1, ρ lognormal (spans dilute→saturated).
- **(B) Import the missing primitive.** Same source, real sign-threshold readout swapped for the
  Born-rule cos² projection (interfering complex amplitudes).
- **(C) PR-box.** The no-signaling algebraic maximum, for contrast.

## Result (400k trials each, CHSH-optimal angles 0/90/45/135°)

| Construction | S | signaling | reading |
|--------------|-----|-----------|---------|
| **A — saturation-density substrate** | **1.85** | 0.0008 | **cap holds — escape closed** |
| B — Born-rule cos² projection | 2.833 ≈ 2√2 | 0.001 | Tsirelson, **exactly** |
| C — PR-box | 4.00 | 0.0004 | no-signaling max |

**The framework's own saturation-modulated Intent-density substrate gives S = 1.85 ≤ 2 with no
signaling — the same classical ceiling the Kuramoto phase substrate hit in 02–04.** Swapping
phase oscillators for a saturating density field changes *nothing*. (It is in fact slightly
*worse* — 1.85 vs 02's 1.98 — because saturation makes some locks looser, which only underscores
that saturation is not the missing ingredient.)

## Why this closes the escape rather than just adding a fourth data point

The result is not a coincidence of one more construction; it is **Bell's structure theorem**.
Any model in the class

> {real-valued local hidden variable λ (phase *or* density), local response functions
> outcome = f(λ, local setting), free settings}

is capped at CHSH ≤ 2, **independent of the functional form of the local response.** Saturation
is a local nonlinearity applied to the response function — it cannot move a local-realist model
past 2. Phase-vs-density and linear-vs-saturating are all irrelevant to the bound. So the
topic's proposed escape was closed *a priori*; run A confirms the framework's substrate is
genuinely in this class (its "measurement = synchronization" is a local response, and the
"single-observer" constraint is an epistemic restriction on what is reconstructable, not a new
correlation primitive).

This maps the framework's **two** ingredients exactly onto Bell's **two** escape routes:

| Framework ingredient | Bell route | Harness result |
|----------------------|-----------|----------------|
| local saturation dynamics (05-A) | stay local → capped at 2 | S=1.85, no signaling |
| absolute-time global clock (04) | go nonlocal → but it signals | S≤2 no-signaling; >2 only with signaling |

Neither reaches no-signaling S>2. There is no third ingredient in the ontology.

## Where 2√2 actually lives (answering Pass 4's "why 2√2 not 4?")

The triptych **localizes** the Tsirelson value:

```
   A (real-local)        B (complex projection)        C (no-signaling max)
      S = 2         <         S = 2√2 ≈ 2.83      <          S = 4
   substrate lives here    fixed point of cos² law      PR-box (not quantum)
```

2√2 is the **fixed point of the cos² projection law** (B) — a property of interfering complex
amplitudes with a tensor-product state, i.e. the Tsirelson bound. It is *strictly stronger* than
no-signaling (C shows no-signaling alone permits 4) and *strictly beyond* the real-local
ontology (A caps at 2). The substrate reaches 2√2 **only by becoming B** — by postulating the
Hilbert-space structure (complex amplitude + tensor product) wholesale. And that is exactly the
structure the reframe claims to *derive*. So:

**There is no derivation of 2√2 from substrate dynamics. 2√2 enters only by importing the
answer.** The framework can undershoot QM (real-local: S≤2) or, to reach it, must assume the
projection law it purports to explain — at which point the QM reframe adds *interpretation*
(Bohm's nonlocal horn, confirmed) not *new physics*.

## This is the same obstruction as the Kochen–Specker gap

The CRT-contextuality topic (`crt-scanning-contextuality-gap.md`) asks whether the
temporal-scanning picture survives Kochen–Specker. It is the **same obstruction viewed from a
second angle**: the substrate is a *non-contextual, real-valued, definite-at-each-instant*
ontology. KS rules out exactly that (no non-contextual value assignment reproduces QM for
dim≥3); Tsirelson rules out its correlations reaching 2√2. Both gaps are one fact — the substrate
lacks contextual/complex structure — and both are closed by the same missing primitive. They
should be stated together, not as two separate hedges.

## So what?

1. **The topic's last-named escape is closed by execution, not assertion.** "Maybe the real
   density substrate is different from the borrowed Kuramoto one" was the one live branch. It
   isn't different. B1/B6's asserted substrate-independence is now demonstrated.
2. **The QM reframe's status is settled to Bohm's horn with a runnable proof.** The framework
   pays Bell (nonlocal), doesn't avoid it, cannot reach no-signaling S>2 by any ingredient it
   has, and has no route to 2√2 that isn't "assume QM." This is a firmer, more citable statement
   than the site's current "open question pending a Born-rule derivation."
3. **Productive-failure value beyond this framework:** the triptych is a clean, minimal,
   runnable demonstration of where 2√2 sits relative to the local and no-signaling bounds, and
   of why *any* real-valued single-observer / digital-physics ontology faces the same wall. That
   generalizes past Synchronism.
4. **This is execution, not commentary** — addresses the standing "explorer produces commentary
   only" pattern. The one construction nobody had run is now run.

## Maintainer actions (site propagation)

`/two-reframes` already carries the B1 result (added this morning). Two sharpenings are now
warranted, both *tightening a hedge into a result*:

- **Upgrade the Tsirelson "open question" to "closed — substrate-independent no-go."** Suggested
  text: *"The substrate cannot reach the quantum value 2√2 without either signaling (its
  global-clock route — a communication channel, not QM) or importing the complex-amplitude
  projection law wholesale (at which point it is QM, on Bohm's nonlocal horn). Run 2026-07-06 on
  the framework's own saturation-density substrate confirms S=1.85≤2, the same cap as the phase
  substrate: the bound is Bell's structure theorem, independent of substrate form. 2√2 is the
  fixed point of the projection law, strictly between the local bound (2) and the no-signaling
  max (4) — the reframe has no route to it."*
- **Merge the Tsirelson and Kochen–Specker caveat boxes into one** "the substrate is a
  non-contextual real-valued ontology" statement — they are the same obstruction, and stating
  them as two independent gaps overstates how much is unknown.

## Back-annotation to Synchronism repo

`simulations/kuramoto-lattice-suite/05_saturation_density_chsh.py` is the new artifact. B1's
resolution note should be extended: *"2026-07-06: cap confirmed substrate-independent — the
framework's OWN saturation-density substrate (05) gives S=1.85≤2, matching the Kuramoto phase
substrate; the S≤2 no-signaling cap is Bell's structure theorem, not a Kuramoto artifact. 2√2
localized as the projection-law fixed point strictly between the local (2) and no-signaling (4)
bounds."* B6's gating note ("gated on first producing S>2 no-signaling correlations") is now
known to be gated on importing the complex projection law — i.e. gated on assuming QM, so the
non-monogamy bet cannot be reached from substrate dynamics alone.

## Open threads (honest)

- Run A caps at 2 for the class as constructed. A *superdeterministic* substrate (settings
  correlated with λ) is untouched by this and by Bell — but the framework does not claim
  superdeterminism, and invoking it would forfeit free measurement choice (its own stated
  premise). Noted for completeness, not pursued.
- The demonstration that B *caps at* 2√2 (rather than merely reaching it) rests on Tsirelson's
  theorem, which I import rather than re-derive. Re-deriving Tsirelson from the projection law
  is textbook and adds nothing here.
