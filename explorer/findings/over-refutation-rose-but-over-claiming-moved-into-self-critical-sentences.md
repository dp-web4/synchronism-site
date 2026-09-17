# Finding: Over-refutation's share of corrections rose from 5% to 38% of directional corrections; over-claiming did not go away but moved inside the self-critical sentences. The null that should have tempered the story was stranded in a memory store.

## Origin
The topic `correction-trail-error-profile-of-llm-research-agents.md` (HIGH, maintainer 09-17) supplied the question. The
WAKE redirected the design:
- **The program had already run this study.** The 2026-07-09 explorer finding
  `directional-bias-law-fails-its-own-null-reflexivity-is-the-real-predictor.md` killed "6/6 over-refutations" on a
  base-rate null (p = 0.31).
- **The claim came back without that null.** Ten weeks later the directional claim was in the maintainer's 09-17 log (R6)
  ("the credibility risk is now entirely on the refutation side", retired), in SESSION_FOCUS as streak tallies ("the eighth
  over-refutation in a row"), in the shared memory ("the site's characteristic error is over-refutation"), and in the
  topic's H-a. None of them cited the null.
- **So I ran cohorts, not a case series.** Coding corrections samples on the outcome. Following sentences forward gives
  a denominator.

Pre-registrations:
- `work/2026-09-17-wake-and-prereg.md`, committed `e3282c4` before any outcome was built.
- Addendum A1 (`a88353a`), exploratory and registered after the primary results.
- Addendum A2 (`f35ee24`), registered before the second cohort was built.

## Summary
I sampled up to 240 verdict-candidate sentences from the site as it stood on 2026-05-01 and on 2026-08-01. Fresh-context
raters coded each one blind to its fate. I then followed each sentence for about 6 weeks, and other blind raters coded
whether it was corrected and in which direction.
- **The trend is real.** Over-refutation's share of directional corrections rose from **1/20 (May) to 9/24 (Aug)**, one-sided Fisher
  **p = 0.011**. The maintainer's H-a holds.
- **The magnitude words don't.** In August over-refutation was still a minority (9 `TOO_NEGATIVE` vs 15 `TOO_POSITIVE`), so
  "characteristic", "flipped" and "entirely" do not survive.
- **The correction hazard per verdict sentence was flat:** 13.6% vs 15.1%.
- **Over-claims moved.** In May, 10 of 19 over-claims sat on pro-framework sentences. In August, **all 15 sat on
  anti-framework sentences**: stale soft counts, "external expert audit", "~80× below reach" at one knee only. The
  program didn't stop over-claiming. The over-claims moved into the self-critical text, where nobody looks for them.

Four pre-registered sub-hypotheses mostly failed, and one of them was my own framing:
- Reflexivity did not predict corrections.
- Class and modal labels were corrected *less* often than numbers.
- UPDATED (new work, not error) was rare.
- The "propagation vs argument errors have opposite signs" idea was null.

**The mechanism of the forgetting is structural.** The workspace move on 2026-09-04 stranded 131 memories, the July null
among them.

## Research Notes

### 1. Design (what was run)
| step | artifact |
|---|---|
| **Unit extraction.** Tags stripped. Prose sentences matching a frozen verdict regex, deduplicated by text. | `scripts/correction_cohort_extract.py` |
| **Pools.** May-01 **306**, Aug-01 **980**, HEAD **1,500**. Samples: 240 each (seed 20260917). | `work/cohort-2026-05-01/sample.jsonl`, `work/cohort-2026-09-17/sample.jsonl` |
| **T0 codes.** Valence (ANTI/PRO/NEUTRAL/`NOT_VERDICT`), reflexivity (SELF/PHYSICS/OTHER), form (NUMERIC/CLASS/MODAL/NARRATIVE). Rater A: fresh Claude subagents. Rater B: `gemma4:e4b` (local, cross-vendor). | `t0_raterA_part*.jsonl`, `t0_raterB.jsonl` |
| **Outcome evidence, built mechanically.** Verbatim presence at HEAD with context. If absent: `git log -S` on the longest single-line run, the removing commit, and the hunk's replacement text. | `scripts/correction_cohort_outcome_packages.py` |
| **Outcome codes.** UNCHANGED / REWORDED / UPDATED / CORRECTED (err_dir `TOO_NEGATIVE` / `TOO_POSITIVE` / NONDIRECTIONAL) / `REMOVED_UNCLEAR`. Fresh Claude subagents that never saw the T0 codes. | `OUTCOME_CODEBOOK.md`, `outcome_raterA_part*.jsonl` |
| **Analysis** | `scripts/correction_cohort_analysis.py` (+ `_output.txt`), `scripts/correction_cohort_compare_may_aug.py` (+ `_output.txt`), `scripts/correction_cohort_mechanism_h5.py` (+ `_output.txt`) |

**Machinery positive control.** 59 `site_lint.py` RETIRED rules are dated after T0. They hit 19 sentences in the Aug-01
pool, and 17 of those are absent at HEAD. The other 2 sit inside correction notes, which the lint exempts.

**Deviation D1.** It was flagged by an outcome rater and applied before the analysis ran. A sentence present at HEAD
whose ±900-character neighbourhood is byte-identical at T0 and HEAD cannot have been corrected in the window, so any
note there predates T0. It is applied identically to every rater. Effect: 1 unit in the Aug cohort and 0 in May. The
as-coded results are saved alongside
(`scripts/correction_cohort_analysis_asCoded_output.txt`), and no conclusion changes.

**Window mismatch.** The May cohort's HEAD is the last commit on or before 06-17, which is 06-12 (no commits 06-13 to
06-17). Its window is therefore 42 days, not 47. That slightly under-counts May hazards and does not affect the share
comparison.

### 2. Inter-rater reliability (Aug cohort)
| comparison | κ | n |
|---|---|---|
| **Outcome**, Claude vs Claude (independent contexts) | **0.86** | 60 |
| CORRECTED vs not, Claude vs Claude | 0.84 | 60 |
| err_dir on units both coded CORRECTED | 0.71 | 6 |
| **T0 valence**, Claude vs gemma4 | **0.33** | 240 |
| T0 reflexivity, Claude vs gemma4 | 0.68 | 240 |
| T0 form, Claude vs gemma4 | 0.45 | 240 |
| CORRECTED vs not, Claude vs gemma4 | **0.00** | 60 (gemma coded 0 CORRECTED) |

**The cross-vendor arm failed as an instrument, and that result is informative.**
- Outcome: a 4B local model never called anything an error. It used UPDATED 6 times, where Claude raters used it 0–1
  times.
- Valence: agreement is poor (κ = 0.33). Gemma calls 60 of 217 verdict units PRO; Claude calls 17 of 185 PRO.

On a self-demoting corpus, whether "the compander reproduces MOND's μ" counts as a success or as a demotion depends on
who reads it. **Any directional law about this corpus inherits that ambiguity.** Reflexivity is the one construct raters
agree on reasonably well.

### 3. The two cohorts side by side
(`scripts/correction_cohort_compare_may_aug_output.txt`; rater A, D1 applied, verdict units only)

| | May 01 → Jun 12 | Aug 01 → Sep 17 |
|---|---|---|
| verdict units | 162 (ANTI 93, PRO 50, NEUTRAL 19) | 185 (ANTI 144, PRO 17, NEUTRAL 24) |
| ANTI / (ANTI + PRO) | 0.65 | 0.89 |
| corrected per verdict unit | 22 / 162 = **0.136** | 28 / 185 = **0.151** |
| `TOO_NEGATIVE` / `TOO_POSITIVE` / NONDIR | **1 / 19** / 2 | **9 / 15** / 4 |
| `TOO_POSITIVE` on PRO sentences | 10 | **0** |
| `TOO_POSITIVE` on ANTI sentences | 8 | **15** |
| UPDATED share of claim changes (H4) | 3/25 | 1/29 |

**A2 (H-a): `TOO_NEGATIVE` share 0.05 → 0.38, one-sided Fisher p = 0.011. The prediction held.**

**Base-rate trend** (a single blinded rater on a shuffled May-01 + HEAD mix, plus the Aug cohort's rater A). ANTI /
(ANTI + PRO) was **0.56** on May 01, **0.89** on Aug 01 and **0.82** on Sep 17. So the pool the errors sit in turned
anti-framework between May and August, and has stayed there since.

### 4. Pre-registered hypotheses: verdicts
| H | prediction | Aug cohort (primary) | sensitivity | verdict |
|---|---|---|---|---|
| **H1** primary: `TOO_NEG`\|ANTI vs `TOO_POS`\|PRO | not RR > 2 at p < 0.05 | 9/144 vs 0/17, RR 2.36 [0.14, 38.8], p = 0.60 | gemma T0: RR 1.04, p = 1.0 | **Held, but only through lack of power.** PRO has 17 units and 0 events, so this is *not distinguishable*. It is not "no bias". |
| **H1** secondary: `TOO_NEG` count vs p_anti | p > 0.05 (upper tail) | 9/24 vs 21.5 expected at 0.894; upper P = 1.0, **lower P = 1.2×10⁻⁹** | gemma: lower P = 2×10⁻⁴; agree subset: 2×10⁻¹¹ | **Held**, with a twist: far *fewer* over-refutations than "break direction = sentence valence" predicts. See §5. |
| **H2** reflexivity: SELF / PHYSICS ≥ 1.5 | ≥ 1.5 | 0.180 vs 0.145, RR 1.26 [0.62, 2.55] | gemma 1.41 (p = 0.40); agree 1.61 (p = 0.22); May cohort 0.98 | **Not supported.** The direction is consistent in the Aug cohort but weak, and it is absent in May. |
| **H3** CLASS ∪ MODAL / NUMERIC ≥ 1.5 | ≥ 1.5 | 0.123 vs 0.240, RR **0.53** [0.24, 1.16] | gemma 0.36 (p = 0.045); agree 0.49; May 0.55 | **Refuted in direction.** Numbers were corrected about twice as often as labels in both cohorts. |
| **H4** UPDATED ≥ 25% of claim changes | ≥ 0.25 | 1/29 = 0.03 | May 3/25 = 0.12 | **Refuted.** |
| **H5** (A1, exploratory): propagation → `TOO_POS`, argument → `TOO_NEG` | OR > 1, p < 0.10 | propagation 8 `TOO_POS` / 4 `TOO_NEG`; argument 6 / 5; OR 1.60, p = 0.43 | — | **Not supported.** Both mechanisms err in both directions. |
| **A2** (H-a): May `TOO_NEG` share lower | p < 0.10 | 1/20 vs 9/24, p = 0.011 | — | **Held.** |

**H3 caveat.** A correction hazard is error rate × detection rate. Numbers may simply be easier to check, so H3 cannot
say labels are *more accurate*. It says they are *corrected less*. That is the opposite of what my 09-10 memory addendum
("the classification column is the unaudited surface") would lead you to act on. If anything, the label surface is
under-*detected*. That is untested, not refuted.

### 5. The two axes the July null and the directional law both collapsed
The July null assumed that a break on an anti-framework sentence *is* an over-refutation, and so modelled P(break
direction) = P(valence). The cohort separates the two axes. In August, **15 of the 24 directional corrections on ANTI
sentences were `TOO_POSITIVE`.** The sentence faced against the framework but was still too kind:
- "four executed refutations" while the same page's header said six (U123);
- "0 of 6 survived *external* domain-expert audit" when the auditors were LLM agents (U009, U136);
- "~80× below reach" when that is true at one knee only and the published calibration is already excluded (U089, U154,
  U192);
- a Galaxy Plotter caption calling a hand-tuned overlap "what a reparametrization looks like" when the real equation
  never fills the gap (U161).

**Rater dependence.** With gemma's valence codes instead (κ = 0.33 against rater A), 14 of 16 August `TOO_POSITIVE`
corrections still sit on ANTI sentences. The migration survives the weakest rater.

These are the July finding's "flattery of the auditing process" and CBP's "humility theater", measured as a rate
instead of caught as anecdotes. **A self-critical sentence is where over-claiming goes once the pro-framework sentences
have been audited away.** In May, 50 PRO sentences had 10 over-claim corrections. In August, 17 surviving PRO sentences
had 0.

**Object-level check** (post-hoc, my own clustering, so a contaminated coder):
- The 28 August corrections collapse to about 16 objects: 10 `TOO_POSITIVE`, 5 `TOO_NEGATIVE`, and one A2ACW/audit object
  whose units were coded in both directions.
- Counting the split object as `TOO_NEGATIVE` gives 6 vs 10. Against 50/50, p = 0.45: not distinguishable. Against the
  valence base rate, p = 8×10⁻⁷.
- The A2ACW object is the clearest example of the two axes. "The program-level null says LLMs don't detect novelty" is
  anti the agents' capability and pro the audit's credential. Its correction was coded `TOO_NEGATIVE` three times and
  `TOO_POSITIVE` three times.

### 6. About half of corrections are propagation, not discovery
The A1 mechanism coder was blind to err_dir. Of the 28 August corrections it coded **14 PROPAGATION, 13 ARGUMENT and 1
UNCLEAR**: in about half, the right answer already existed elsewhere in the program. The sharpest case is **H₀**
(U092, U221):
- The explorer flagged "above SH0ES by several σ" as error-bar deflation on **07-26**.
- The /key-claims box carrying it was written on **07-27**.
- It was softened on **09-06**, 41 days later, after a visitor persona re-derived it.

An over-refutation that was also a propagation failure: the correction existed before the error did.

### 7. Why the directional law came back: a stranded memory store (structural, measured)
- `~/.claude/projects/-mnt-c-exe-projects-ai-agents-synchronism-site/memory/`: **131 memories**. The last write was
  **2026-09-03 08:40**. It includes `project_directional_law_fails_null_reflexivity_predictor.md`.
- `~/.claude/projects/-home-dp-ai-workspace-synchronism-site/memory/` was created **2026-09-04 05:00**, the first
  visitor session on the new path. Claude Code keys memory by launch directory.
- Three days later (09-07) the new store held "As of 2026-09-07 the Synchronism site's characteristic error is
  **over-refutation**", built from eight instances and no denominator. The phrase first appears in the maintainer's 09-07
  log ("error direction has flipped").
- Site docs mentioning over-refutation, and how many also mention reflexivity or the null:

  | month | docs | citing the null |
  |---|---|---|
  | Jul | 27 | 8 |
  | Aug | 55 | 5 |
  | Sep | 41 | **0** |

  August explorer logs cite the old memory by name. No document does after 08-30.
- The 09-17 phrasing (now R6-retired) "the credibility risk is now entirely on the refutation side" is the visitor researcher persona's
  line ("has moved entirely to the refutation side"), relayed into the maintainer's 09-17 log. That is another
  instance of `persona-phrasing-launders-into-site-claims`.

**The instructive part: the law came back *stronger* and was *half right*.** The trend it described is real (A2), but
the dominance claim was never measured. The null had been an overcorrection too: it modelled direction = valence, which
§5 shows is false. Neither the law nor its null was measured on outcomes until today.

### 8. Guardrail built
`tools/findings_lint.py` **R6: DIRECTION LAW, NO DENOMINATOR** (warn). It is wrap-aware, because prose is hard-wrapped.
- **Positive controls (R6), 4/4:** the 09-07 memory line, maintainer logs 07-17 ("every provenance break over-refutes"),
  09-07 ("error direction has flipped", retired) and 09-17 ("risk is now entirely on the refutation side").
- **Corpus** (after adding "N-th over-refutation in a row"): 2 hits in 335 files. One is a true positive, explorer log
  09-07 ("the eighth over-refutation in a row"). The other is a quotation inside the July null finding, a false positive.

This is the first lint for a retired **inference**; site_lint handles retired phrasings. It checks explorer files only.

## Implications for the Site
- **/a2acw and /for-researchers (A2ACW current state).** The correction trail is now a dataset with a denominator.
  Numbers the site can cite, with the dated caveats:
  - Hazard of about 14–15% per verdict sentence per ~6 weeks.
  - Over-refutation share of corrections 5% → 38% (May → Aug).
  - About half of corrections are propagation.
  - Outcome κ = 0.86 between Claude contexts, 0.00 against a 4B cross-vendor model.

  This is the "error profile of the instrument" that "0 of 9" needs. It is **LLM-coded** and the human arm is pending,
  so it is not a citable rate yet.
- **The site should not say (retired, R6) "the risk is entirely on the refutation side"**, or anything like it. Both directions are
  live, and the fastest-growing hiding place for over-claims is self-critical copy.
- **Structural:** half the corrections are propagation. That supports the single-source move (`ledger.ts`-style
  current-state objects), not more auditing. `correction-palimpsest-rate.md` should reuse these packages.

## Action: Maintainer
- **P0: maintainer-log and SESSION_FOCUS wording.** Replace the retired (R6) "the credibility risk is now entirely on the refutation side" (09-17 block,
  maintainer log line 5) with the measured statement: "over-refutation's share of corrections rose from 1/20 (May) to
  9/24 (Aug); over-claims now sit inside self-critical sentences (15/15 in Aug)". Run
  `explorer/tools/findings_lint.py --rule R6 SESSION_FOCUS.md maintainer/logs/<new>.md` before committing a session log.
- **P1: site_lint candidates**, for retired phrasings on the site, if any exist in `src/`: "credibility risk … refutation
  side", "characteristic error … over-refut". A grep of `src/` at HEAD found none today, so this is preventive only.
- **P1: /a2acw current-state box.** Add the cohort as "measured, LLM-coded, human arm pending". Link this finding. Do
  not upgrade the A2ACW badge.
- **P2: an audit target that follows from §5.** Self-critical copy that credits the process ("audited", "external",
  "below reach", counts of refutations): grep `src/` for counts next to "refutation(s)" and check them against
  `ledger.ts`.
- **Topic status.** `correction-trail-error-profile-of-llm-research-agents.md` is archived. H-b to H-d need the
  caught-by and track codes from a case series, and are still open: seed them if wanted, reusing
  `outcome_packages.jsonl`.
- **→ dp (gated)**
  1. **Memory stores.** 131 memories in the `/mnt/c` store stopped loading on 09-04. Merge, symlink, or leave them? I
     wrote a pointer memory (`stranded-memory-store-mnt-c`) and copied nothing.
  2. **Human arm.** `explorer/work/2026-09-17-dp-blind-24.jsonl` holds 24 random August-cohort units with empty `dp_*`
     fields and the same codebooks (`work/cohort-2026-09-17/OUTCOME_CODEBOOK.md`, T0 codebook in
     `scripts/correction_cohort_rater_gemma.py`). Would dp code them blind?

## Open Threads
- **Detection vs error.** Is H3's "labels are corrected less" a detection artifact? Test: seed known label errors
  (positive controls) on a branch and have a visitor persona and the maintainer sweep. That's capture–recapture on the
  program's own instruments.
- **A third cohort at T0 = 2026-06-15** would show whether the 5% → 38% shift is a step (the 07-09 audit-of-audits era)
  or a ramp.
- **Survivorship of PRO sentences.** August's 17 PRO sentences had 0 corrections. Are they the audited residue, or
  unexamined? Pull their first-appearance dates (`git log -S`).
- **Valence κ = 0.33 is a result in itself.** On a self-demoting corpus, polarity is reader-dependent. Would a
  two-axis valence (framework-facing vs process-facing) reach κ > 0.6? §5 suggests the A2ACW object needs it.
- **Other re-learnings from the stranded store.** Old `feedback_verify_visitor_findings_against_source` vs new
  `visitor-tallies-can-be-fetch-artifacts`, and old `feedback_check_for_an_existing_explanation_before_accepting_a_new_one`.
  How many of the 19 new memories re-derive old ones, and did any re-derive them *wrong*?
