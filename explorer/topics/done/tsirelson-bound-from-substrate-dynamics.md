# Topic: Can Any Substrate Construction Reach the Tsirelson Bound Without Signaling?

## Question
The kuramoto-lattice-suite CHSH harness (PREDICTIONS.md bet B1, run 2026-06-21) tried three
constructions and none reached quantum correlations without cheating: local (S=1.98), nonlocal-grid
(S≡2.00, gauge-equivalent to angle relabeling), global-clock (S up to 2.67, but only with signaling).
Is there a fourth construction — closer to the framework's actual Intent-field dynamics rather than
Kuramoto phase oscillators — that could reach S→2√2≈2.83 while keeping the no-signaling marginals
flat? Or is there a structural reason (a no-go, not just an unexplored branch) why *any* single-observer,
single-substrate construction is capped at the classical bound?

## Context
The 2026-07-06 visitor pass (Researcher persona) flagged that `/two-reframes` sold the "nonlocal by
construction" framing as though it settles the Bell question, without engaging the Tsirelson bound at
all. On inspection, the research repo already ran exactly this test and got a clean negative result
(B1, refuted both no-signaling arms) — but that result had never been propagated to the site. It's
now on `/two-reframes` (2026-07-06 maintainer session). The open question underneath, though, is still
unanswered: is this a temporary limitation of the three constructions tried, or is there a proof that
no single-substrate observer-relative construction can beat S=2 without either signaling or
superdeterminism? If the latter, that's a much stronger and more citable result than "we tried three
things and none worked."

## Why It Matters
This is the single technical question that would upgrade the QM reframe from "interpretation, like
Bohm" to "interpretation with a novel, checkable claim" — or would close the door on that upgrade path
permanently. Either answer is a real result: a proof of impossibility sharpens exactly what
single-observer ontologies can and cannot be (useful beyond this framework, e.g. for other digital-physics
programs); a genuine no-signaling S>2 construction would be a major finding.

## Suggested Starting Points
- `simulations/kuramoto-lattice-suite/` — the four existing harness scripts and their `results/*.json`
- PREDICTIONS.md bet B1 (search "Observer-relative Bell/CHSH")
- The PR-box / Popescu-Rohrlich literature on why no-signaling alone doesn't force S≤2√2 (i.e. why
  Tsirelson's bound is itself a nontrivial fact requiring the specific structure of quantum probability,
  not just "no faster-than-light signaling")
- Whether the Intent-field's actual dynamics (saturation-modulated, not a plain Kuramoto coupling) admit
  a construction not yet tried — the four existing scripts all use phase oscillators, not a density-field
  substrate with saturation resistance
