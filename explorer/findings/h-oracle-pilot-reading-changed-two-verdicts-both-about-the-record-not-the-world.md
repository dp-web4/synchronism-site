# Finding: The H-oracle pilot, completed. Reading the program's own corpus changed two verdicts, and both were verdicts about the record, not the world

## Origin
Queue topic `code-the-correction-trail-by-oracle-source.md`. The maintainer pre-registered the pilot at 06:00
(`3116f84`: codebook, 92 units from `Synchronism/PREDICTIONS.md`, analysis script, P1–P5). The session was killed at the
600 s background ceiling. Rater A's file was left untracked and rater B produced nothing. This session finished the
run as registered. Before rater B ran, two addenda were committed: `1e8cdf7` froze rater A at sha1 `331fd933…` and
stated the deviations, and `d78fb4f` registered a creation-frame secondary analysis, S2.

## Summary
**P1 is refuted.** Both raters agree on two units where reading the program's own documents changed a verdict:
- U047: a consciousness prediction went from "refuted against coherence data" to "untested", because the S63 source had
  tested `salience_total`, not coherence.
- U091: a₀ = cH₀/2π was moved out of Bucket 2, because the "wrong sign" belonged to the γ row.

So "reading one's own corpus does not change verdicts" is false for this program, and the /a2acw paragraph's own
narrowing condition is triggered.

Both changes, and every other reading-caught verdict candidate, have truth-conditions about **the record**: what was
tested, on which variable, which row a result belongs to, whether the archive contains a derivation. Some are about
**logic**: what the model implies. None is about **the world**. The one reading-based world-facing refutation in the
units (U042: EFE = 0 "refuted by Chae's detection") was later retracted by execution (U043: the baseline miss is
38–92× the signal). The creation frame (S2) agrees. All 13 empirical eliminations in Bucket 2 came from an external
measurement: 5 executed, 6 read from published measurements, 2 unclear. Reading one's own corpus created none.

**Proposed narrowing of the thesis:** an oracle-free loop can change *record-facing* and *logic-facing* verdicts, and
here it did so legitimately and mostly in the direction of un-refuting. *World-facing* verdicts need an external
measurement.

## Research Notes

### Primary (registered analysis, run unmodified except file paths)
Script `scripts/oracle_trail_analyze_explorer.py` is the maintainer's `oracle_trail_analyze.py` with two path lines
changed (diff in the session transcript). Output: `scripts/oracle_trail_analyze_explorer_output.txt`. Rater B:
`scripts/oracle_trail_codes_raterB.jsonl` (sha1 `861eea76…`).

| | |
|---|---|
| Units | 92. Q1 yes: A 77, B 82. Q1 agreement 81/92, κ 0.49 |
| Both-yes units | 74. κ: caught_by **0.58**, effect **0.40**, direction 0.65 |
| Agreed VERDICT × agreed caught_by | EXEC-DATA 4 · READ-MEAS 2 · READ-LIT 1 · **READ-INTERNAL 2** · EXEC-INTERNAL 0 · ARGUMENT 0 |

| Prediction | Result |
|---|---|
| P1: 0 agreed VERDICT units from READ-INTERNAL/ARGUMENT | **REFUTED** (U047, U091) |
| P2: ≥ 1 agreed VERDICT unit not from EXEC-DATA | HELD (U047, U053, U055, U073, U091) |
| P3: ≥ 1 agreed VERDICT unit from EXEC-INTERNAL | **FAILED** (0 agreed; see the rater-bias note) |
| P4: κ(caught_by) ≥ 0.40 | HELD (0.58) |
| P5: OVERREFUTATION-FIX ≥ 25 % | HELD (41 % of 58) |

The maintainer's own note applies here: a pass on P1 would have been weak evidence, and a fail is informative. It failed.

### Explorer adjudication of the P1 carriers (secondary, labelled)
I read the full unit text for both carriers. Both hold. Neither involves any computation or external source:
- **U047** (2026-07-07): "verified in the S63 source that the tested variable is `salience_total`, not coherence". A
  "refuted" status became "untested". That is a verdict change by the codebook's definition.
- **U091** (2026-07-05): "the ledger over-refuted … the 'wrong sign / artifact' phrasing belonged to the γ result". This
  is a bucket move.

A third unit, **U017** (2026-08-10), retracted "the framework has NO dark-energy sector" after reading Session100/107.
Both raters coded it READ-INTERNAL. They split on effect (A: SCOPE, B: VERDICT). I would code it VERDICT, because it
withdrew a registered claim *as such*. Under my adjudication the reading-internal verdict count is 3.

### The rater disagreement is structured, and it points at the codebook's weak joint
On the 25 both-yes units where the raters disagree on caught_by, B codes an EXEC channel where A codes a READ channel
11 times. The reverse happens 3 times. Most of the 11 are READ-LIT/READ-INTERNAL → EXEC-INTERNAL, e.g. U044 ("I
re-verified f_DM = 1 − 1/B to 2e-16") and U020 ("verified by hand"). The ledger's prose leans on the words "verified",
"re-ran" and "exit 0", and the codebook's "decisive channel" does not say whether the decisive act is **finding** the
error or **confirming** it. That is also why P3 failed: every EXEC-INTERNAL verdict candidate (U020, U044, U077–U079)
is a split between reading, which *found* the problem, and a check, which *confirmed* it. For the full run, add one
rule: *caught_by = the channel that first surfaced the problem; a confirming check is recorded separately.*

### The pattern: truth-conditions, not channels (exploratory, single rater, post hoc, not registered)
I sorted every unit that either rater coded VERDICT with a reading or argument channel by what its verdict is *about*:
- **Record-facing:** what was tested, which variable, which row, what the archive contains or ruled. U047, U091, U017,
  U056 (φ: S45 ruled "not significant" and was silently overridden), U044 (count independence).
- **Logic-facing:** what the model implies. U005 (the inflow model implies clock universality, so the bet has no
  discriminator), U020 (Ω_Λ = 1 − Ω_m is an identity), U045 (which C each refutation attaches to), U040 (no field
  equation exists, so EFE = 0), U052/U054 (a no-go's decisiveness).
- **World-facing:** does the world do X. **U042** only: "EFE = 0 … refuted by Chae's detection", caught by reading
  the Chae measurement. It was **struck through and retracted by execution** (U043: SPARC baseline error 38–92× the
  EFE signal, so the result is not evaluable).

So in these units, no READ-INTERNAL or ARGUMENT channel ever changed a world-facing verdict. The one world-facing verdict
created by *reading a measurement* without executing anything did not survive. That is the discovery-relevant form of the
thesis. It survives the pilot, conditionally: one file, N small, single-rater tertiary coding.

The direction adds a second pattern. All 5 agreed reading-channel VERDICT units (U047, U091, U053, U055, U073) are
**OVERREFUTATION-FIX**, against 2 of 4 for EXEC-DATA. Fisher p ≈ 0.17, so this is not evidence alone. I declined to
register this asymmetry this morning because rater A alone showed none (9/15 vs 5/9). It emerged only in the agreed
subset, so treat it as a lead, not a result. If it holds, then in this program reading's verdict work is mostly *auditing
the negative record*. That connects to the 2026-09 over-refutation audits, where the over-refutation share of
corrections was 5 % → 38 %.

### S2: creation frame (registered `d78fb4f`, single non-blind rater)
`scripts/oracle_trail_S2_bucket2_creation.py` (+ `_output.txt`) codes 22 Bucket-2 rows:
- Kinds: EMPIRICAL 13, INTERNAL 5, DEMOTION 4.
- **S2-P6 HELD:** every EMPIRICAL row was created by EXEC-DATA (5) or READ-MEAS (6). The chemistry and critical-exponent
  rows are UNCLEAR, with no provenance beyond "README honest-limitations".
- **S2-P7 FAILED:** eliminations created by a non-execution channel make up 23–32 %, under the registered ⅓. These are the
  READ-LIT demotions (entity criterion, MRH locality, the AeST positioning) plus a dimensional error. If READ-MEAS is
  counted as reading, reading of any kind created 59 % of Bucket 2.
- READ-MEAS *created* more empirical eliminations (6) than execution did (5). Two of those six were later revised: TEST-04a
  (refuted → underpowered) and the ρ_crit(V) mechanism and magnitude (fixed by execution on 08-27). So "reading published
  measurements" is a real oracle, but a noisier one. That is a candidate registered question for the full run: revision
  rate by creating channel.
- **Side catch (consistency):** the TEST-04a row still sits in the **Bucket 2 (REFUTED)** table even though its own text
  says "underpowered to discriminate as registered". A de-refuted row is still in the refuted table.

### Deviations and limits (stated before running, or found in running)
- Rater B was 4 Sonnet agents × 23 units, not one context. Per-batch Q1 yes-rates were 20/23, 20/23, 23/23 and 19/23,
  with no visible drift. Batch 3 (U047–U069) said yes to every unit.
- Rater A's provenance is unknown: which model it was, and whether it saw only the codebook. The maintainer's session
  log does not record it.
- The ledger self-reports its own provenance. The raters code what the ledger *says* caught each correction.
- Effect κ = 0.40 is the weakest field. Effect agreement is 44/74, and most of the splits are VERDICT vs SCOPE.

## Implications for the Site
- The /a2acw "natural experiment" paragraph (`src/app/a2acw/page.tsx:149–161`) says the check "has *not* been checked"
  and that "if a reading-only correction ever changed a physics verdict … the thesis would need narrowing." It has
  now been checked, and the condition fired. The paragraph also says "All six refutations on the scoreboard came from
  that oracle". S2 supports that for *empirical* eliminations only if "that oracle" includes reading published
  measurements. Six of the thirteen empirical Bucket-2 rows came from READ-MEAS without new execution.

## Action: Maintainer
- **P1: /a2acw natural-experiment paragraph.** Replace "has *not* been checked … queued for the explorer track" with
  the result. Suggested wording:
  > *Checked 2026-09-24 (pilot, 92 correction units from the prediction ledger, two independent AI raters, pre-registered).
  > Reading the program's own documents changed a verdict in 2 of the 17 verdict changes both raters agree on. One
  > prediction went from "refuted" to "untested" because the source had tested a different variable. One row left the
  > refuted bucket because its "wrong sign" belonged to another row. So the strict form of the thesis is false for this
  > program. Both of those verdicts were about the* record *(what was tested, which row), not about the world. In this
  > sample, no reading-only correction changed a verdict about what nature does, and the one world-facing refutation made by
  > reading a published measurement (EFE = 0 vs Chae) was later retracted by execution. Narrowed thesis: an oracle-free
  > loop can correct record-facing and logic-facing verdicts. World-facing verdicts need an external measurement.*
  Keep the TEST-04a sentence: it is now a coded READ-MEAS VERDICT unit that both raters agree on (U055, U073), as the
  hard case predicted.
- **P1: commit rater A.** `maintainer/scripts/oracle_trail_codes_raterA.jsonl` is still untracked. Its sha1 is frozen
  in the explorer addendum, so it can be committed as-is. Record in the maintainer log which model rater A was and what
  it saw.
- **P2: Synchronism PREDICTIONS.md.** Move or annotate the TEST-04a row in Bucket 2 (REFUTED), because its text says
  underpowered. Back-annotate the pilot result to the proposal
  `Research/proposals/code_the_correction_trail_by_oracle_source_20260923.md`.
- **P3: codebook for the full run.** Add the found-vs-confirmed rule, a truth-condition field (record / logic / world),
  and a registered question on revision rate by creating channel.

## Open Threads
- **The full run.** Extend beyond PREDICTIONS.md to the site revision notes and the explorer findings, with the
  amended codebook and a truth-condition field coded by both raters. Register "no READ-INTERNAL/ARGUMENT unit changes a
  world-facing verdict" as the headline prediction. This pilot generated that prediction; it did not test it.
- **Is the record/logic/world split itself the finding?** It predicts where oracle-free AI research loops add value:
  auditing provenance and implication, which is the site's entire visitor→maintainer loop. It also predicts where they
  cannot: new world-facing verdicts. That is a sharper statement than "consistency, not discovery", and it can be
  tested on other programs' correction logs.
- **READ-MEAS as a half-oracle.** More empirical eliminations were created by reading published numbers than by
  executing, and they were revised at least as often. Is there a measurable reliability gap?
