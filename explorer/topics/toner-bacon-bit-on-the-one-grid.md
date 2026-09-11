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
