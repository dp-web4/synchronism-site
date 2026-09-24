# PREREG — H-oracle pilot: what caught each correction in PREDICTIONS.md, and did it change a verdict?

**Maintainer, 2026-09-24. Committed before any unit was coded.** Proposal:
`Synchronism/Research/proposals/code_the_correction_trail_by_oracle_source_20260923.md` (items 1–2), amended today
with the visitor researcher persona's point that "reading the literature" is a third oracle channel.

## Units (fixed)
`oracle_trail_extract.py` → `oracle_trail_units.jsonl`: every occurrence of a correction marker in
`Synchronism/PREDICTIONS.md` (source sha1 prefix printed by the script), markers < 150 chars apart merged, text to the next
marker or 1400 chars, plus 300 chars of preceding context. Raters decide whether a unit is a correction at all.
Pilot scope: this one file only. The site revision notes and the archive are out of scope.

## Codebook (fixed)
- **Q1 is_correction** yes/no: the unit reports that an earlier statement by the program (a claim, number, status,
  attribution or framing) was wrong, and changes it. Pure additions of new results → no.
- **Q2 caught_by** (if yes). The decisive channel, meaning the one without which the correction would not have happened:
  - `EXEC-DATA`: a new or re-run computation that uses external data (SPARC, DESI, LLR, catalogues, Planck parameters…).
  - `EXEC-INTERNAL`: a new computation on the model alone (symbolic or numerical algebra, grid solve, simulation) with no external dataset.
  - `READ-MEAS`: reading published *measurements* (numbers from observational or experimental papers), with no new computation.
  - `READ-LIT`: reading published *theory or prior art* (a method, classification, derivation or existing model), with no new computation.
  - `READ-INTERNAL`: reading the program's own documents or scripts and noticing a contradiction or mismatch.
  - `ARGUMENT`: reasoning alone, with no specific source read and nothing executed.
  - `UNCLEAR`.
- **Q3 effect** (if yes):
  - `VERDICT`: changes a bucket, the refutation count, or a test's or prediction's outcome status (refuted / failed / passed /
    underpowered / excluded / untestable / not-evaluable), or withdraws or establishes a refutation or no-go *as such*.
  - `SCOPE`: narrows or widens what an existing verdict covers, without flipping it.
  - `CONSISTENCY`: fixes a wrong number, attribution or internal contradiction, with no verdict or scope change.
  - `WORDING`: phrasing or framing only.
- **Q4 direction** (if yes): `OVERCLAIM-FIX` (the framework looked better than warranted) / `OVERREFUTATION-FIX` (it looked worse
  than warranted) / `NEUTRAL`.

**Hard case, fixed in advance:** TEST-04a refuted → underpowered after reading DESI's published numbers = `READ-MEAS`.
That is external-anchored but *not* execution.

## Raters
Two independent agents with fresh context, the codebook and the units file only (no other files). Rater A is the
session default model and rater B is Sonnet. Primary analysis = units where both raters code is_correction = yes; a
unit counts toward a cell only if both raters agree on that field. Disagreements are reported, not adjudicated into the
primary. Secondary: maintainer adjudication, reported separately and labelled as such.

## Predictions
- **P1 (the thesis, internal-reading form):** 0 agreed VERDICT units have agreed caught_by ∈ {READ-INTERNAL, ARGUMENT}.
  **Refuted by any one.** This is the /a2acw claim that reading one's own corpus does not change verdicts.
- **P2 (strict H-oracle is false):** ≥ 1 agreed VERDICT unit has caught_by ∉ {EXEC-DATA}. Expected carrier: TEST-04a (READ-MEAS).
- **P3:** ≥ 1 agreed VERDICT unit has caught_by = EXEC-INTERNAL (internal computation can change verdicts, e.g. the covariant check).
- **P4:** Cohen's κ on caught_by (over units both code yes) ≥ 0.40.
- **P5:** OVERREFUTATION-FIX is ≥ 25 % of the agreed-direction corrections.

Stated before coding: a pass on P1 is weak evidence at pilot N (the ledger self-reports its own provenance, and it was
written mostly by executing tracks). A fail on P1 is informative.
