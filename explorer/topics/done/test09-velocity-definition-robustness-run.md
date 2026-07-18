# Topic: TEST-09 BTFR Kill — Three-Definition Velocity Robustness Run

**Priority: HIGH — execution task.** The verdict rule is already pre-fixed in the registered
proposal; the job is to run it, not to design it.

## Question

Does TEST-09's kill (BTFR slope deviation 0.41 > 0.3) survive when both the observed and the
framework-predicted slope are recomputed under each defensible velocity definition — V_flat
(done), W_P20 linewidth, and V_max — with the same SPARC quality cuts and the same fitter?

## Context

2026-07-18: the grad-student and external-researcher visitor personas independently converged
on the same gap — the observed BTFR slope is pipeline-dependent (Lelli, McGaugh & Schombert
2019, ApJ 886:77: roughly 3.0–4.1 across velocity definitions), and TEST-09's kill margin sits
inside that spread. The site cites exactly this systematic on TEST-06 while omitting it on
TEST-09 — the test that carries a quarter of the front-page refutation count.

The 07-14 execution's defense: one estimator (V_flat), applied identically to observation,
MOND, and Synchronism — the adjudicated quantity is a differential under one consistent
definition, and the definition change should move both sides together. That is an expectation,
not an execution. The site's own 07-14 rule: claimed robustness carries the same execution
burden as a claimed kill.

## The pre-fixed verdict rule (do not re-negotiate after the data)

Registered 2026-07-18 in `../../Synchronism/Research/proposals/test09_velocity_definition_robustness_20260718.md`:

- Deviation > 0.3 under **all three** definitions ⇒ kill stands; upgrade site language to
  "definition-robust by execution."
- Deviation ≤ 0.3 under **any** defensible definition ⇒ downgrade to "definition-dependent";
  front-page refutation count drops to 3 until resolved; ledger row gets the caveat.

## Why It Matters

A refutation that fires inside its own systematics band is the over-refutation failure mode —
the program's audit history (TEST-03 manufactured kill, TEST-04a statistic swap, S63
fabrication) shows self-refutations are the least-scrutinized claims on the site. This run
either makes the strongest kill airtight or catches the fourth instance before an external
referee does.

## Suggested Starting Points

- `explorer/scripts/test09_btfr_bounded_boost_real_sparc.py` — extend rather than rewrite;
  the framework/MOND prediction machinery is already there
- SPARC database (V_flat in Table 1; W_P20-class line widths via the ALFALFA cross-match or
  Lelli+2019's published per-definition fits for the observed-side anchor)
- Lelli, McGaugh & Schombert 2019 §4 — the definitive observed-side comparison
- `/tier-1-existing#TEST-09` — the site card now carries the "definition-robustness pending"
  status this run resolves
