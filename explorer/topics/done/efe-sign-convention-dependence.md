# P0 — Is EFE's sign *actually* convention-dependent? (The cheapest unblock on the board)

**Seeded:** 2026-08-07 (maintainer)
**Why P0:** if the answer is "no," the framework's only structurally discriminating prediction
against MOND unblocks immediately and can be registered with a TEST ID today. If "yes," a theory
decision is required and the refutation count needs restating. Either answer is worth having, and
the check is arithmetic on already-published relations — no new data.

---

## The situation

`/tier-1-existing` now states (shipped 2026-08-07) that **EFE = 0 is absent from the ledger
because it is blocked, not overlooked.** The stated blocker is the 2026-08-04 finding that *the
two C conventions give EFE of opposite sign*, so there is no single prediction to register.

That blocker has never been independently re-derived. It is load-bearing for:

- whether the framework's only MOND-discriminating prediction can be tested at all;
- whether "0 of 24 tests could select Synchronism" is a result or a denominator artifact;
- how much of the "6 refutations" headline survives (TEST-09/10 are one root, and that root
  presupposes the division convention).

## The question, precisely

For each of the three live readings of the g_bar → ρ substitution —

| reading | form |
|---|---|
| amplitude | v² = v_b² + (V_flat·C)² |
| division | g_obs = g_bar/C(ρ) |
| multiplication | g_obs = C·g_bar |

— compute the **sign and magnitude of the external field effect**: how the internal dynamics of a
system change when it is embedded in an external field g_ext, holding internal baryons fixed.

**Then answer:** is the *sign* convention-dependent, or only the magnitude?

## Why this might come out "not convention-dependent"

EFE = 0 was argued structurally, from **∇·[C(ρ)∇Φ] = 4πGρ being linear in Φ** — superposition
then kills the external field's influence on internal dynamics. That argument is about the
*field equation*, not about which algebraic reading you take downstream of it. If EFE = 0 follows
from linearity in Φ, it may hold for **any** C-keyed-on-ρ coupling, because none of the three
readings changes what ρ is or that Φ enters linearly. In that case the "opposite sign" result
from 08-04 would be an artifact of comparing conventions at fixed *output* rather than at fixed
*field equation* — and registration unblocks.

**Guardrail:** this is a reason to *check*, not a prediction of the answer. The amplitude reading
in particular is not obviously derivable from any field equation — it is coded directly in the
plotter and may have no Lagrangian behind it at all, in which case "EFE under the amplitude
reading" may be undefined rather than opposite-signed. **"Undefined" is a third possible answer
and would itself be a finding** — it would mean the amplitude reading is not a force law but a
curve-fitting device, which would settle the fork by elimination.

## What to produce

1. **The EFE sign under each reading**, derived, with the derivation shown — not asserted.
2. **A verdict on the blocker**: unblocked / genuinely blocked / one reading is not a force law.
3. If unblocked: **a registrable TEST-12 statement** — prediction, kill criterion, dataset,
   and the pre-registration date. Chae+2020 is the obvious dataset, but note the 08-04 finding
   that the framework's *baseline* is off by 2–4 dex there, which made the comparison
   not-evaluable. **A registrable test needs a baseline the framework can actually produce** —
   if it can't, say so, and that is the finding.

## Explicit non-goals / guardrails

- **Do not bump the refutation count.** Nothing here adds a refutation. If EFE = 0 turns out to
  be refuted, that is a *registration* first and a count question second — and the 08-04
  retraction of "EFE=0 is refuted by Chae+2020" (baseline off by 2–4 dex ⇒ not-evaluable) stands
  until something displaces it on its own merits. Do not re-derive that retraction as new.
- **Do not treat "0 discriminating tests" as settled either way** until this resolves. It has
  already been wrong in both directions once (a false under-claim on 07-27).
- **Check whether this already has an answer on file before producing a new one.** This is the
  rule the 08-05 coarse-graining episode produced, and it applies with full force here: grep
  `Synchronism/Research/` for prior EFE sign derivations first. If one exists, the task is to
  verify or displace it, not to write a parallel story.

## Related

- `Synchronism/Research/proposals/force_law_fork_blocks_efe_registration_and_makes_count_convention_dependent_20260807.md` (seeded with this)
- `Synchronism/Research/proposals/tier1_mond_efe_discriminator_gap.md`
- `/galaxy-rotation` C-convention note (2026-08-04) — the three readings and their three failure directions
- `src/app/galaxy-plotter/page.tsx:106` — the amplitude reading as actually coded
