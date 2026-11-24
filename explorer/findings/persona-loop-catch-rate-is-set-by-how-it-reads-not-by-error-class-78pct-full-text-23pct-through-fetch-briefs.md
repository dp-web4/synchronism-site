# Finding: The persona loop's catch rate is set by how it reads, not by the error class. 78 % on full text, 23 % through fetch briefs

## Origin
Topic `topics/planted-error-catch-rate-of-the-persona-review-loop.md` (maintainer 2026-11-24). Pre-registered in
`findings/PREREG-persona-loop-planted-error-catch-rate-20261124.md`: Arm A at `947f4b1`, Arm A2 addendum at `bdfd8ce`. Both were
committed before the runs they cover.

## Summary
A separate planter agent seeded 20 errors (4 each of ARITH, STALE, CITE, OVERCLAIM, OVERREFUTE) into an offline text copy
of 7 live pages. The four visitor personas then read it (Opus, prompts adapted from `visitor/run_visitor.sh`, 2 replicates).
- **Full text (Arm A):** the four-persona loop caught **31/40 = 0.78** [0.62, 0.88].
- **Mediated (Arm A2):** the personas had to brief a Read-only Haiku "web-fetch" subagent, which is how today's real
  visitor transcripts read the site (30 subagent fetches, 0 direct WebFetch). Loop catch fell to **9/40 = 0.23** [0.12, 0.38].
- Clean-corpus control: 0/80 coincidental matches. All 64 CAUGHT verdicts hand-checked; all stand.

The registered class asymmetries did not survive.
- **Maintainer's stake (S1)** is refuted in both arms, on opposite legs. In Arm A, numeric errors were caught at 0.81
  (stake: < ⅓). In Arm A2, overclaims were caught at 0.12 (stake: > ⅔).
- **My over-refutation stake (S2)** is refuted in both arms. Self-critical overstatement was caught *at least* as often as
  favourable overstatement: 0.75 vs 0.62 in Arm A, 0.38 vs 0.12 in Arm A2.

What predicts a catch is whether the planted sentence reached the persona's eyes, and whether its contradicting partner
did too.

## Research Notes

### Design (as frozen; deviations listed in the PREREG)
- **Corpus:** `/`, `/why-synchronism`, `/first-encounter`, `/galaxy-plotter`, `/wide-binaries`, `/critical-density`,
  `/key-claims`, fetched 2026-11-24 16:02 UTC at site HEAD `22fe049` (~36k words).
- **Planting:** a subagent that never read `visitor/`; sealed manifest; diff-checked (each planted snippet occurs exactly
  once, and reverting gives byte-identical files). 6 easy / 11 medium / 3 hard.
- **Isolation:** `--setting-sources ""`, `--strict-mcp-config`, auto-memory off. A probe confirmed no CLAUDE.md or
  memory in context.
- **Scoring:** a blinded Sonnet scorer (no tools; condition hidden by random run ID) marked each item CAUGHT / NOTICED /
  MISSED. I hand-checked every CAUGHT. No overrides were needed.
- **Data:** `explorer/data/persona-catch-20261124-PLANTED-ERRORS-NOT-SITE-CONTENT.tar.gz` (tarball on purpose, so repo greps
  can't hit planted text). Outputs: `findings/scripts/persona_catch_aggregate_output.txt` and `..._exposure_output.txt`.

### Results, loop level (an item counts as caught if any of the 4 personas catches it in a replicate; 8 item-trials per class)
| Class | Arm A, full text | Arm A2, mediated | Arm A per pass | A2 per pass |
|---|---|---|---|---|
| ARITH | 5/8 = 0.62 | 3/8 = 0.38 | 0.19 | 0.09 |
| STALE (contradiction with a newer value printed elsewhere) | **8/8 = 1.00** | 2/8 = 0.25 | 0.62 | 0.06 |
| CITE | 7/8 = 0.88 | **0/8 = 0.00** | 0.28 | 0.00 |
| OVERCLAIM | 5/8 = 0.62 | 1/8 = 0.12 | 0.28 | 0.03 |
| OVERREFUTE | 6/8 = 0.75 | 3/8 = 0.38 | 0.34 | 0.09 |
| **All** | **31/40 = 0.78** | **9/40 = 0.23** | 0.34 | 0.06 |

CAUGHT by persona (Arm A / A2):
- Pass 1 (casual): 1 / 0
- Pass 2 (tech writer): 14 / 0
- Pass 3 (grad): 27 / 6
- Pass 4 (researcher): 13 / 3

The tech writer catches contradictions between pages when it sees whole pages. Its fetch briefs ask for structure, so in
A2 it saw almost no planted text.

### Why A2 loses: two compounding stages (`exposure2.py`)
Did a planted-specific string appear in what the persona actually received (its subagent reports)?
- **Exposure:** 50/160 item-trials. By persona: Pass 3 got 23/40, Pass 4 21/40, Pass 2 4/40, Pass 1 2/40. The briefs pick
  what gets through: "report the equations verbatim" carries numbers; "first 1–3 sentences per heading" does not.
- **Catch given exposure:** 9/50 = 0.18. **Catch without exposure: 0/110.** Passes 3–4 reading full text caught 0.50 per pass.
  Even when the planted sentence comes through, its contradicting partner on another page usually does not.
- Cross-page items (P05, P06, P08, P10, P14, P18, P19) went from 14/14 to 5/14. The other items went from 17/26 to 4/26.
  M3 is indeterminate: the absolute loss is larger for the cross-page items, the relative loss smaller.

### What was never caught, even with full text
- **P04**, "1 kpc ≈ 326 light-years" (easy, standard knowledge): 0/8 passes. The plotter's beginner box was read by
  everyone. Nobody checks a unit conversion that looks familiar.
- **P15**, "All three fit the observations" (easy overclaim; the *same sentence* goes on to say the framework's equation
  does not): 0/8, NOTICED by the casual persona only.
- **P17**, "γ = 2 is excluded at about 6σ" on the landing page (easy over-refutation; the same page's table says
  "about 2σ … Disfavoured, not decisive"): 0/8.

All three sat in short lines that were fully visible, so Read truncation is ruled out (`visibility.py`). Difficulty as
the planter rated it ran backwards: per pass, easy 0.21, medium 0.43, hard 0.29 (S6 refuted). The caught items have a
**printed counterpart to check against**: a formula with its result (P02, P18), counts beside a percentage (P01), or the
same number on another page (P05–P08). Of the three total misses, only P04 lacks one. The other two had a counterpart a
few lines away and were still missed. So the counterpart explains some misses, not all.

### Scorecard of registered predictions
| Stake | Prediction | Outcome |
|---|---|---|
| S1 (maintainer) | numeric < ⅓, overclaim > ⅔ | **Refuted.** A: numeric 0.81. A2: overclaim 0.12 |
| S2 (mine) | OVERREFUTE < OVERCLAIM by ≥ 30 pts | **Refuted** in both (+13, +25 pts the other way) |
| S3 | point rates ±0.25 | 1/5 (OVERCLAIM only) |
| S4 | Pass 3+4 ≥ 80 % of catches; Pass 1 ≤ 1 | 73 % (refuted narrowly); Pass 1 = 1 (held) |
| S5 | clean coincidental ≤ 1/80 | 0/80 (held) |
| S6 | easy ≥ 2× hard | **Refuted** (0.21 vs 0.29) |
| M1 | mediated loop ≤ 0.45 | **Held** (0.23) |
| M2 | mediated numeric ≤ 0.40 and drops more than wording | Held narrowly (0.31; drop 0.50 vs 0.44, not resolvable at N = 16) |
| M3 | cross-page items lose most | Indeterminate |

### Consistency check against the real loop (not a validation)
The motivating case: the plotter survey at the retired knee was visited in 8 of 9 logs before anyone flagged it.
That is roughly 1 catch per 8 expert-ish visits ≈ 0.12. A2's Pass 3+4 per-item catch is 9/80 = 0.11, the same order.
Arm A's 0.50 would have found it in one or two days. Note that the real case was an *orphan* (no contradicting number on
the page). Arm A did not plant that class, so it may be harder still.

### False flags (stake in the topic): only partly tested
The clean-run logs are real reviews of live text, so their accuracy flags are either real defects or false flags. Two of
the sample, adjudicated:
- **True.** /wide-binaries BBN paragraph: "the archive knee (0.42) predicts 0.37–0.57 and is excluded at 17–36σ".
  `maintainer/scripts/bbn_g_ratio_density_keyed_output.txt` gives 16.9σ at 0.568 and 24.8σ at 0.370. The 35.8σ end belongs
  to the γ = 0.489 unfloored row, which predicts 0.095. The printed range and σ span describe different row sets.
- **False.** "arXiv:2610.40388 has an unusually high sequence number" (memory: check arXiv IDs before flagging; it is real).

The rest are unadjudicated and listed under Action for the maintainer. The false-flag stake stays **untested**.

## Implications for the Site
- Every "corrected after a persona pointed it out" note on the site came through the mediated path, which in this
  corpus catches ~1 in 4 planted errors per four-pass day on pages it reads. The correction record is not biased toward
  wording, as the stake assumed. It is biased toward **what a fetch brief asks to see**, and toward errors whose partner
  shows up in the same report.
- The site's self-description ("the honest assessment is maintained by a review loop") would be more accurate with a
  rate. Suggested wording: "In a planted-error test (2026-11-24, 7 pages, N = 20) the loop as configured caught 23 %; reading
  full page text it caught 78 %."
- An absent persona flag on a page is weak evidence that the page is clean.

## Action: Maintainer
1. **Real defect:** /wide-binaries BBN sentence. Either "predicts 0.37–0.57, excluded at 17–25σ (γ = 2 forms)" or
   "0.095–0.57, excluded at 17–36σ (all four forms)". Do the same check on the velocity-blind (0.21–0.80, 7.5–31σ, consistent)
   and RG rows.
2. **Unadjudicated clean-run flags** (archive `runs/925896/log.md` Pass 3 and `runs/ee9692/log.md` Pass 4). Highest value:
   - plotter "What You're Seeing" / legend captions describing the hybrid knee (constant 1.78× boost) under the archive-knee
     default;
   - plotter "Two assumptions" box ("draws only A = 0.029");
   - /key-claims "~116× apart at V = 300 km/s" is A-dependent, though called parameter-free;
   - /critical-density Freeman "≈4 %" vs the 13 % a₀ gap;
   - landing Bell row vs refutation table (S ≤ 2 constructions vs "the one arm above 2 (up to 2.67) signals").
3. **Instrument change (project lead / visitor-config owner):** have Passes 3–4 read full page text (curl + strip, e.g.
   `fetch.py` in the archive) instead of web-fetch briefs. Expected effect in this corpus: conditional loop catch 0.23 → ~0.78.
   A two-week before/after count of numeric catches would test it on the real loop.
4. **Mechanize the class personas catch best when they can see it:** a cross-page number-consistency sweep (same
   quantity, different value on two pages). STALE items were caught 8/8 with full text and 2/8 mediated, and a script would
   catch them 8/8 every day.

## Open Threads
- **Orphan class** (a number computed under a retired calibration, with no contradicting partner anywhere): the real
  motivating defect, and not planted here. Prediction: < 0.2 even on full text. A script that reruns numbers is the only
  instrument for it (`numbers-computed-under-the-units-hybrid-knee-sweep.md`).
- **Coverage:** Arm A forced all 7 pages. The real loop reads ~8 of ~74 pages per pass. Real per-error daily catch ≈
  coverage × the A2 rate.
- **Arm B** (a Vercel preview through the real visitor track) remains gated on the project lead, and is now sharper. It
  would test whether the real web-fetch stack (WebFetch's own summariser behind the subagent) loses more or less than
  Haiku-reading-the-file.
- **Same-corpus objection:** planter, personas and scorer are all Claude models. A cross-vendor planter would test whether
  the 0.78 is partly shared style. Errors Claude plants may be errors Claude spots.
- Why were P15 and P17 invisible even on full text? Both are short verdict sentences contradicted within a few lines.
  A focused probe (the same sentence moved, or its partner moved closer or further) would test whether *locality to the
  partner* or *tone match* hides them.
