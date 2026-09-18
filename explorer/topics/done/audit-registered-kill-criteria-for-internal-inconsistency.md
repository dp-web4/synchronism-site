# Topic: Audit every registered kill criterion for internal inconsistency, before execution

## Question

How many of the registered-but-unrun kill criteria state a **threshold** and a **significance** that
cannot both be satisfied given the error budget of the data they will be adjudicated against? TEST-04a
did. Can that be checked mechanically, and what does the audit return?

## Context

A grad-student visitor persona (2026-09-18, Pass 3) worked TEST-04a's registration text:

> prediction fσ₈(z = 0.51) ≈ 0.418; kill criterion "fσ₈ > 0.46 rules out at > 3σ."

A 3σ exclusion of 0.418 at a measured value of 0.46 requires σ = (0.46 − 0.418)/3 = **0.014**. The
measurement carries σ = 0.062, 4.4× larger. So the threshold fired (0.550 > 0.46) while the significance
did not (2.13σ), and the test is badged "Underpowered." The persona's point is that the badge is correct
and the *moment* is wrong: **the underpowering was derivable from the registration text and the survey's
known error budget before any data were looked at.** A criterion stating two mutually unsatisfiable
conditions is a defect in the registration, not an outcome of the execution.

They nominate TEST-06 (σ_int ≤ 0.086 dex requiring N > 1000) as smelling the same way. This is worth
verifying rather than assuming.

A second, independent instance surfaced the same day from a different direction. The 2026-09-18 ceiling
sweep found TEST-09's kill landing at |Δn| = **0.30** against a registered threshold of a strict **> 0.3**
under one candidate ceiling — a verdict decided by a rounding convention the registration never states.
Same family: a criterion whose precision is under-specified relative to the quantity it adjudicates.

## Why It Matters

This site's discipline is built on registering criteria *before* execution. That discipline buys nothing
if the criteria are unsatisfiable — the test then reports on the registration rather than on nature, and
the ledger records it as an empirical outcome. Both directions are live: a criterion too tight to fire
produces a spurious "underpowered", and one too loose produces a spurious kill.

This is also the standing lesson the program has already paid for twice: *read the registration text
before executing against it* — six recorded instances where the criterion or the reused window named a
different γ or parameter than the program actually ran against, two of them published. The fix has never
been "try harder"; it has been reading the artifact. This topic proposes reading them **all**, once,
mechanically.

## Suggested Starting Points

- Enumerate every registered criterion across `/tier-1-existing`, `/test-catalog` and the archive's
  `Research/preregistrations/`. For each, extract: the predicted value, the threshold, the stated
  significance, and the error budget of the adjudicating dataset.
- The consistency check is one line: does the threshold sit at ≥ (stated significance) × σ from the
  prediction, at the *actual* σ of the data? Flag every row where it does not, in both directions.
- Where the criterion states a bare inequality on a continuous statistic (TEST-09's `> 0.3`), record
  whether any precision or rounding convention is stated. If not, that is its own flag class.
- Report the flags **before** proposing fixes. A criterion found inconsistent after its test has executed
  is a different object from one found inconsistent while still unrun — the first is a correction to the
  ledger, the second is a chance to repair the registration honestly, and only the second is still open.
- Prior art within the program: `Research/proposals/test03_kill_criterion_self_trigger.md` and
  `test04a_dr2_preregistration_timing_check_20260801.md` are the same genre; check whether either already
  built the enumeration this topic asks for.
