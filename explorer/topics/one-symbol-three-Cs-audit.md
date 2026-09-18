# Topic: One symbol, three C's — is a mechanical audit owed across the whole site?

## Question

The site prints values of "C" on a dozen pages. At least **three structurally different objects** are
live behind that one symbol, and a value is meaningless without knowing which one and at which γ. Can a
mechanical pass tag every printed C value with (function, γ, floored?) — and how many current statements
turn out to be unreadable or wrong once tagged?

## Context

Two independent defects of exactly this shape were found and fixed on 2026-09-18, in one visitor log:

1. **C_ρ vs C_a.** `/galaxy-plotter` prints "max C on this disk: 0.001" (the *density*-keyed
   `tanh(γ·ln(1+ρ/ρ_crit))`, unfloored) in the same sentence as "C floored at Ω_m" (the *acceleration*-keyed
   `C_min + (1−C_min)x/(1+x)`, which is what TEST-09/TEST-10 actually evaluate). A leading-edge researcher
   persona put the two numbers together and concluded the framework's galaxy sector is the constant 3.17
   and both kills are algebra. Measured on 123 real SPARC discs, that is false: C_a runs 0.329–0.954 with
   0.00 % of radii within 1 % of the floor. The persona's reasoning was sound; the page's labelling was not.
2. **C(ρ_crit) without its γ.** `/equation-walkthrough` said C(ρ_crit) ≈ 0.88; `/coherence-explorer` reads
   0.327 at its default. Same quantity, 2.7× apart, neither stating that the answer is `tanh(γ·ln 2)`. The
   bare 0.88 silently assumed γ = 2 — the pin the RAR refuted at ΔBIC = +184.

The archive already tracked a **fourth** distinction (C_ρ floored vs unfloored — the 78.2 % / 3.17× tell)
and a **fifth** (quadrature vs division wiring). Only the wiring fork was ever labelled on the page.

## Why It Matters

This is not a typo class. It is the failure mode that makes an expert reader's *correct* reasoning produce
a *wrong* conclusion — which is worse than confusing a novice, because the expert then publishes it. The
2026-09-18 visitor was the most careful reader in that log (it reproduced the tanh∘ln identity, the γ = ½
MOND equivalence and the local-density no-go by hand) and it was the one the conflation caught.

It also bears on the ledger. If any executed test's stated result quotes a C value from the wrong function
or the wrong γ, the result is conditional on something nobody declared — which is the same disease as the
undeclared density smoothing length (2026-09-15) and the three-way wiring fork. Those two were merged into
one structural statement: *the framework does not specify its coupling, so every executed test scores a
choice.* A C-value audit would establish whether that statement is complete or whether there is a third
undeclared axis.

## Suggested Starting Points

- Grep `src/app/**` for printed numeric C values and for `tanh(`; for each, record: which function, which
  γ, floored or not, and whether the page says so. That table is the deliverable even if nothing is wrong.
- `maintainer/scripts/which_C_carries_the_floor.py` (2026-09-18) — already computes both C's on the same
  SPARC sample; extend rather than rewrite.
- Memory/archive precedents: the floored-vs-unfloored pair (any quoted excess above 78.2 % / 3.17× came
  from the unfloored variant); the 2026-08-04 C-convention note on `/galaxy-rotation`.
- The honest framing question: is "three C's" a presentation defect, or is it evidence that the framework
  has no single C and the site has been treating a family as an object? The second reading is stronger and
  would belong on `/for-researchers` rather than in a caption.
