# Explorer 2026-09-17: WAKE + pre-registration (committed before any outcome is built or read)

## WAKE

**1. What am I inheriting?**
- The maintainer's framing in `correction-trail-error-profile-of-llm-research-agents.md`: code the *corrections*, then
  read off an error profile. Its H-a is "over-refutation's share of corrections rises after 2026-08-01."
- My own persistent memory, `over-refutation-is-the-live-failure-mode`: "the site's characteristic error is
  over-refutation". It holds eight instances plus four addenda, and every one of them is a numerator.
- The SESSION_FOCUS narrative since 09-07: "the credibility risk is now entirely on the refutation side."

**2. What if the frame is wrong?**
This program already ran this study and it failed. On 2026-07-09 the explorer
(`findings/directional-bias-law-fails-its-own-null-reflexivity-is-the-real-predictor.md`) showed that "6/6
over-refutations" carried p = 0.821⁶ = 0.31. Breaks are found among statistics, and 82% of the site's verdict-bearing
statistics faced against the framework. What survived was **reflexivity**: 3/3 breaks on SELF statistics against 4/27
on PHYSICS (Fisher p = 0.0086, 0.094 conservative). CBP verified it and self-corrected the same day
(`Synchronism/explorations/2026-07-09-selfcorrect-...`).

Ten weeks later the directional law is back. It is in the focus file, in my memory and in today's topic. None of them
cites the July null, and none carries a denominator. So the frame may be wrong twice over:
- (a) Coding corrections is a case series selected on the outcome. It cannot estimate an error *rate* or a *direction*
  without an exposure pool.
- (b) The program forgets its own methodological negatives faster than its physics negatives. site_lint catches
  retired phrasings; nothing catches retired *inferences*.

**3. The highest-information experiment.**
A **cohort**, not a case series:
- Freeze the site as it stood at T0 = 2026-08-01 (`fae5536`).
- Sample the verdict-bearing sentences.
- Code each one blind to its fate: valence, reflexivity, form.
- Follow each to HEAD and code whether it was corrected, and in which direction.

That gives hazards per valence class, which is the denominator every directional claim since July has lacked. It also
directly tests the 09-10 memory addendum's "the classification column is the unaudited surface" (form = CLASS/MODAL).
It uses data that already exists, and its outcome is genuinely uncertain to me.

**4. What would falsify the current posture?**
- If ANTI sentences are corrected toward "too negative" at a hazard ≥ 2× that of PRO sentences corrected toward "too
  positive" (Fisher p < 0.05), the directional narrative is right for Aug–Sep, the July null was period-specific, and my
  memory stands.
- If the hazards are indistinguishable, the narrative is a numerator artifact for the second time, and the memory must
  be rewritten.

**Decision:** the queue's HIGH topic has the right data but the wrong design. I am running the cohort version. The
maintainer's H-a to H-d are still recorded below, and where the cohort can speak to them it will. The QUMOND/Cassini
topic is a reproduction of Desmond+2024's structure on the program's instrument: lower information, deferred.

## Pre-registration

### Units
- **Script:** `scripts/correction_cohort_extract.py`, with its regex frozen as committed.
- **Source:** `src/` at `fae5536` (last commit ≤ 2026-08-01), tags stripped.
- **Pool:** prose-like sentences matching the verdict regex, deduplicated by text. Pool = 980.
- **Sample:** 240, seed 20260917.

### T0 codes (sentence + ±350 chars T0 context only; never HEAD)
- **VALENCE**
  - ANTI: asserts a failure, refutation, limit or demotion of the framework or its claims.
  - PRO: asserts a success, match, derivation or credential.
  - NEUTRAL: an evaluative sentence with no framework-facing polarity.
  - NOT_VERDICT: definitions, navigation, code comments, pure description.
- **REFLEX**
  - SELF: about the program, its process, counts, audits, agents or tools' own record.
  - PHYSICS: a model against data or logic.
  - OTHER: statements about other theories or literature only.
- **FORM**
  - NUMERIC: the verdict rests on a stated number.
  - CLASS: a categorical label for a result, such as inherited, reparametrization, discriminating, badge, bucket.
  - MODAL: cannot / could / structurally / impossible / no X exists.
  - NARRATIVE: anything else.
- **Raters.**
  - Rater A: a fresh-context Claude subagent. No session history; told nothing about the hypotheses.
  - Rater B: `gemma4:e4b` (Google, local, temperature 0, think off). This is the cross-vendor arm.
  - κ is reported per code. **The primary analysis uses rater A.** Sensitivity runs use rater B and the both-agree
    subset.

### Outcome (T0 → HEAD at session start, `24b9c87`)
- **Evidence package, built mechanically:**
  - Whether the sentence is present verbatim (normalized) at HEAD, with HEAD context.
  - If absent: the removing commit, found by `git log -S` on the longest tag-free run, with its subject and the
    replacement text of the hunk.
- **Codes:**
  - UNCHANGED.
  - REWORDED: same claim.
  - UPDATED: status changed because new work was done. This is not an error.
  - CORRECTED: the original was wrong or mis-stated. Sub-code **ERR_DIR**:
    - TOO_NEGATIVE: the original over-refuted, over-closed or under-attributed.
    - TOO_POSITIVE: the original over-claimed or under-refuted.
    - NONDIRECTIONAL: provenance, label or number without verdict direction.
  - REMOVED_UNCLEAR.
- **Outcome raters:**
  - Fresh-context Claude subagents, given no T0 codes and no hypotheses.
  - A second independent subagent on a random 25% (60 units) for κ.
  - gemma4 as a third rater on CORRECTED vs not.
- **Human arm:** a random 10% (24 units) is exported uncoded for dp as `work/2026-09-17-dp-blind-24.jsonl`.

### Hypotheses (mine, before data)
- **H1 (direction; replication of 07-09).**
  - Primary measure: the hazard of a TOO_NEGATIVE correction among ANTI units vs the hazard of a TOO_POSITIVE
    correction among PRO units.
  - Prediction: the risk ratio is **not** > 2 with Fisher p < 0.05.
  - Secondary measure: among directional corrections, a binomial test of the TOO_NEGATIVE count against
    p = ANTI/(ANTI+PRO). Prediction: p > 0.05.
  - Belief ~55%.
- **H2 (reflexivity).** Any-correction hazard SELF / PHYSICS ≥ 1.5. Belief ~60%.
- **H3 (form).** Any-correction hazard (CLASS ∪ MODAL) / NUMERIC ≥ 1.5. Belief ~60%.
- **H4 (UPDATED vs CORRECTED).** At least 25% of units whose claim changed are UPDATED rather than CORRECTED, so a
  correction series that doesn't separate them overstates the error rate. Belief ~50%.

### Maintainer's hypotheses and what this design can say
- **H-a:** only through the ANTI share of the pool at T0 vs HEAD. A secondary measurement: rerun the extractor on HEAD
  and have rater B code valence on a 120-unit sample. H-a's "rising share" would be predicted by a rising ANTI share
  alone.
- **H-b to H-d:** not addressed (caught-by and track need the case series). Deferred.

### Power, stated in advance
PRO is expected to be about 15–25% of verdict units, which is roughly 25–40 units. A risk ratio CI that spans 1 is
reported as **"not distinguishable"**, never as "no bias".

### Positive control
The pool must contain at least one T0 sentence that the program is known to have corrected by HEAD. The
**"Kill criterion (fσ₈ > 0.46) triggered"** wording was retired 07-14, so it is already gone at T0 and useless here. I
use any `site_lint.py` RETIRED rule dated ≥ 2026-08-02 whose regex hits the T0 tree, and report how many such
sentences land in the pool. The package builder must mark them absent at HEAD. It is a check on the machinery, not on
the coders.

---

## Addendum A1 — registered AFTER the primary results were seen (exploratory, labelled as such)

**Seen before writing this.** The primary codes: 28 CORRECTED among verdict units, all on ANTI sentences (PRO 0/17).
Directional split: 15 TOO_POSITIVE, 9 TOO_NEGATIVE. Rater A's one-line reasons.

**Deviation D1** (applied before the analysis was run, flagged by an outcome rater): a unit present verbatim at HEAD
whose ±900-char neighbourhood is byte-identical at T0 and HEAD is recoded CORRECTED → UNCHANGED, because any note there
predates T0. It changed 1 unit for rater A.

**Hypothesis H5 (two generators with opposite signs).** Each correction is caused by one of two mechanisms:
- **PROPAGATION:** the corrected answer already existed elsewhere in the program before the fix (another page, the
  ledger, an earlier finding), and this sentence lagged it. Stale counts, un-swept retractions, superseded labels.
- **ARGUMENT:** the reasoning, statistic or scope in the sentence was itself wrong when the program first examined it.

**Prediction.** PROPAGATION corrections are mostly TOO_POSITIVE, because in a program whose verdicts drift negative,
stale text inherits the sign of the drift. ARGUMENT corrections are mostly TOO_NEGATIVE, because fresh verdicts are
written against the framework.

**Test.** A fresh-context coder codes mechanism only, given the 28 packages plus the 4 D1-neutral cases. It gets no
err_dir codes and no hypothesis. Fisher exact on mechanism × err_dir (rater A's codes). Prediction: odds ratio > 1 in the
stated direction, one-sided p < 0.10.

**Belief ~50%.** Exploratory whatever the result.
