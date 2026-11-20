# Topic: Does a one-grid substrate generate a Toner–Bacon bit, or does it have to be put in by hand?

**Priority: LOW** (deep, unlikely to close in one session; but it is SPINE's "one test that matters")
**Seeded:** maintainer 2026-09-11

## Question

Toner & Bacon (PRL 91, 187904, 2003): local hidden variables plus **one hidden bit** of communication per
trial reproduce the singlet correlations exactly, with no observable signaling. SPINE says a no-signaling
Bell violation needs "a non-relabelable, conditional setting-dependence — a primitive the ontology does
not contain and would have to derive." Toner–Bacon is the minimal known instance of that primitive.
**Can any update rule native to the framework (parallel global tick, saturation, phase-lock) produce that
conditional bit from local dynamics, or must it be inserted as a nonlocal rule?**

## Context

- 2026-09-11: the site's Bell pages now say "three constructions, not the substrate class;
  hidden-communication substrates untested" (visitor researcher persona). The executed global-clock
  construction signaled *observably* (`Synchronism/simulations/kuramoto-lattice-suite/04_global_clock_chsh.py`
  measures Alice's marginal against Bob's setting), so it is not a Toner–Bacon construction.
- Building a Toner–Bacon simulation that reaches 2√2 is trivial; it is a theorem. **That is not the
  question.** The question is whether the framework's own dynamics *yield* the bit, or whether adding it
  amounts to adopting Bohm-style nonlocality by fiat.

## Guards

- A construction that hard-codes "send Bob sign(a·λ₁)·sign(a·λ₂)" reproduces Toner–Bacon and says nothing
  about the framework. Say in advance what would count as "derived."
- Hidden communication between spacelike-separated regions is superluminal at the substrate level. The
  single global tick makes that expressible, but the preferred frame it implies runs into the dim-4 LIV
  bounds already on the site. Check whether a bit channel reopens that problem.
- A negative ("no native rule produces it") is only as strong as the rule family searched. Name the family.

## Why It Matters

This is the only unexplored branch of the program's one structurally distinctive test. If the bit can be
derived, B1 has a live path. If it can only be inserted, the honest statement is: the single-observer
ontology reproduces quantum correlations exactly when it adopts a Bohm-like nonlocal channel, and not
otherwise. That is a sharp statement of what the ontology is.

## Suggested Starting Points

- Toner & Bacon 2003, PRL 91, 187904; Brassard, Cleve & Tapp 1999 (the communication-cost framing)
- `Synchronism/simulations/kuramoto-lattice-suite/` (constructions 02–06)
- `Synchronism/SPINE.md` "The one test that matters"; PREDICTIONS B1
- Proposal `Synchronism/Research/proposals/instruments_sentence_floor_identity_and_refutation_scopes_20260911.md` item 5

## Addendum (maintainer 2026-11-20): the class is constrained, and the update rule decides the branch

A researcher simulated-visitor persona, with abstracts read verbatim:
- **The local substrate is excluded by data.** Hensen et al. 2015 (Nature 526, 682): "S = 2.42 ± 0.20", p = 0.039 against
  local realism. Every construction capped at S ≤ 2 is excluded by experiment, not only by Bell's theorem.
- **Finite-speed hidden influences are excluded.** Bancal et al. 2012 (Nature Physics 8, 867): influences at "any finite speed v
  with c < v < ∞" permit faster-than-light signalling. Salart et al. 2008 (Nature 454, 861): ≥ 10⁴ c in any preferred frame in
  which Earth moves slower than 10⁻³ c.
- **The framework's own update rule is nearest-neighbour.** FUNDAMENTALS: "all cells simultaneously evaluate neighbor tensions and
  step forward together". That gives at most one cell per tick, so a Toner–Bacon bit across spacelike separation cannot come from
  it. It needs a global, instantaneous update in the absolute frame, which is the Bohm class with a preferred foliation.

**Sharpened question:** is there any version of the framework's dynamics (saturation, phase-lock, the absolute tick) in which a
*global* update is natural, rather than added by hand? If it is added by hand, is the result anything other than Bohmian mechanics
with a preferred foliation (Dürr et al.; Valentini)? Write down what would distinguish it, or record that nothing does. The project
lead is being asked which update rule is the framework's
(`Synchronism/Research/proposals/oort_amplitude_cancels_and_the_cfd_substrate_meets_bell_experiments_20261120.md`).
Priority raised to MEDIUM: this is now SPINE's "one test that matters" with the experimental side already in.
