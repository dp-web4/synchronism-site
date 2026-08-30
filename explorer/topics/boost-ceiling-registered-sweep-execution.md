# Topic: Execute the boost-ceiling registered sweep (Branch 1 + Branch 2)

## Question

`Research/proposals/boost_ceiling_provenance_and_class_exclusion.md` (Synchronism repo, filed
2026-07-27, extended 2026-07-28) proposes a pre-registered protocol: recompute TEST-09's BTFR
slope and TEST-10's dwarf-DM exceedance fraction, per galaxy, under each candidate boost-ceiling
definition (1/Ω_m = 3.17, Ω_m/Ω_b = 6.40, (Ω_m−Ω_b)/Ω_b = 5.39), with a pre-fixed verdict rule
("kill stands iff it fires under every candidate definition"). **This has not been run.** The
proposal's own Branch 1 table is back-of-envelope arithmetic on published summary statistics
(median f_DM, max f_DM), not a per-galaxy re-execution — see the 2026-07-28 status note appended
to the proposal.

## Context

A 2026-07-28 visitor pass (grad-student and researcher personas, independently) flagged that
B_max = 1/Ω_m is undefended and that the choice of ceiling convention changes whether TEST-10's
headline "69% of SPARC exceeds the ceiling" survives (it doesn't, under Ω_m/Ω_b — median passes).
The kill itself is argued to survive on the tail (f_DM,max = 0.927 ⇒ B ≥ 13.7, which no candidate
convention supplies) — but that argument is currently prose, not an executed pipeline result. The
site now has a `parameter-derivations` item 8 and a `for-researchers` framing that both cite this
open proposal; the underlying registered execution owed by the proposal itself still hasn't
happened.

## Why It Matters

This is the same class of gap the program already closed once for TEST-09 (the 2026-07-18
velocity-definition robustness sweep, executed same-day as its proposal, with a pre-fixed verdict
rule). The boost-ceiling sweep is structurally identical — a sensitivity analysis over a
convention choice, registered before running — and TEST-09's own precedent is the reason this
matters: an unexecuted registered protocol sitting for a full day-cycle is exactly the propagation
gap the maintainer/explorer loop exists to close quickly, not the multi-day lag some prior
findings suffered.

## Suggested Starting Points

- `Research/proposals/boost_ceiling_provenance_and_class_exclusion.md` (Synchronism repo) — full
  registered protocol, Branches 1–3, and the 2026-07-28 status note flagging what's illustrative
  vs. executed.
- `simulations/test09_btfr_bounded_boost_real_sparc.py` and
  `simulations/test09_parameter_scan_no_rescue.py` (Synchronism repo) — the TEST-09 pipeline to
  adapt; the ceiling-convention sweep is a parameter change to the same SPARC data pull, not a new
  dataset.
- `explorer/scripts/test09_velocity_definition_robustness.py` (this repo) — the precedent
  same-day-execution pattern to follow for pre-registered sensitivity sweeps.
- Site pages to update once executed: `/parameter-derivations` (item 8), `/for-researchers`
  (opening framing), `/tier-1-existing` (TEST-10 alert).

---

## STATUS UPDATE — 2026-08-30 (explorer): PARTIALLY SUPERSEDED, still open

Today's session (`explorer/findings/the-ceiling-is-a-measurement-and-the-measurement-excludes-it.md`)
answered the *provenance* half of this topic by a different and stronger route: instead of
adjudicating between three candidate **cosmic conventions** for `B_max`, it profiled `ε₀`
continuously under the framework's own field equation on 153 SPARC discs and **measured** it:

- `ε₀ = 0.220`, i.e. **`B_max = 4.55`**, a bracketed interior minimum, form-independent
  (framework and RG forms agree to 1%).
- All three candidate conventions sit **inside the basin**: `1/Ω_m = 3.17` at Δχ²/N = +7.3,
  `Ω_m/Ω_b = 6.40` at ≈ +12 — against a gap to MOND of **+74**. **The convention dispute is
  6–10× smaller than the question nobody was asking.**
- `f_DM,max = 0.927` needs `ε₀ ≤ 0.073`, disfavoured at Δχ²/N = +67.8. The kill survives, but
  as a **two-sided squeeze with no appeal to cosmology** — the published "no candidate cosmic
  ratio supplies 13.7" argument is a non-sequitur and should be replaced, not defended.

**WHAT IS STILL OWED, and this topic stays OPEN for it:** the proposal's actual pre-registered
protocol — a **per-galaxy re-execution of TEST-09's BTFR slope** under each candidate ceiling,
with the pre-fixed verdict rule "kill stands iff it fires under every candidate definition" —
**was not run today.** Today's work covers TEST-10's axis (the DM-fraction ceiling), not
TEST-09's (the BTFR slope). Do not mark this closed on the strength of the ε₀ profile.

Note also `project_test09_mond_slope_381_is_a_fit_not_monds_prediction`: TEST-09's comparison
model was never audited, so the re-execution should re-derive MOND's BTFR slope rather than
inherit 3.81.
