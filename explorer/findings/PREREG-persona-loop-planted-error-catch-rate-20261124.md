# PREREG: persona-loop planted-error catch rate, Arm A (offline, in-family)

*Explorer 2026-11-24. Committed before any persona run and before the scorer (me) has seen the planted-error manifest.*
Topic: `topics/planted-error-catch-rate-of-the-persona-review-loop.md`. Proposal:
`Synchronism/Research/proposals/the_persona_loop_is_the_review_instrument_and_needs_a_catch_rate_20261124.md`.

## Question
When the four visitor personas read a page that contains a planted error, how often do they flag it, by class?
And do they flag self-critical overstatement (over-refutation) as readily as favourable overstatement?

## Design as frozen
- **Corpus.** Seven live pages, fetched 2026-11-24 16:02 UTC (site HEAD `22fe049`), stripped to text: `/`, `/why-synchronism`,
  `/first-encounter`, `/galaxy-plotter`, `/wide-binaries`, `/critical-density`, `/key-claims` (~36k words). Clean-file sha1s
  are in `/tmp/pcatch/clean.sha1` and will be copied into the data archive.
- **Planter ≠ scorer.** A separate subagent copies the corpus and plants 20 errors, 4 in each of 5 classes: ARITH, STALE
  (calibration/inconsistency), CITE, OVERCLAIM, OVERREFUTE. It writes a sealed manifest. The planter was told not to read
  `visitor/`, so it has not seen the persona prompts. I (scorer) do not open the manifest until all persona runs finish.
- **Personas.** The four prompts are adapted from `visitor/run_visitor.sh` and `visitor/CLAUDE.md`. Diff: WebFetch → Read on
  `./site/`; tools are text only; the file list is given; Pass 1 reads "as many as your persona would", Passes 2–4 read
  "all 7". Model `opus` (the visitor cron default). Isolation: `--setting-sources ""`, `--strict-mcp-config`,
  `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`, tools `Read,Edit,Write,Glob`. A probe confirmed no CLAUDE.md or memory in context.
  Prompt sha1s: p1 `0e1ea1d8`, p2 `f2e0378f`, p3 `f91037a7`, p4 `eae61940`, CLAUDE.md `542fd945`.
- **Runs.** Planted: 4 personas × 2 replicates. Clean: 4 personas × 1. Run IDs are random hex. The condition map is kept
  apart from the scoring inputs.
- **Scoring.** A blinded scorer (`claude -p`, Sonnet, no tools) gets the manifest (original vs planted text, why wrong) and
  one persona log, without its condition. Each item is scored **CAUGHT** (the log identifies the specific statement or number
  as wrong, inconsistent or overstated), **NOTICED** (the log touches the passage, e.g. as confusing, without naming the
  defect) or **MISSED**. Clean logs are scored against the same manifest, which gives the coincidental-match rate.
  I hand-check every CAUGHT.
- **Aggregation.** The *per-pass* rate is catches over (items × persona-runs). The *loop* rate is, per replicate, an item
  caught by any of the 4 personas; averaged over the 2 replicates. Wilson 95% intervals. N = 8 item-trials per class at
  loop level, so intervals will be wide and only large gaps are readable.

## Deviations from the real loop, stated up front (each biases catch rates UP unless noted)
1. Full text, no WebFetch summariser in between. The real loop sees a small-model summary, which drops numbers.
2. Coverage forced: Passes 2–4 read all 7 pages. The real loop picks 6–12 of ~70 pages. Arm A measures the catch rate
   *conditional on the page being read*. Loop catch ≈ coverage × this.
3. Passes are independent. The real loop is sequential, and later passes read earlier ones (direction unknown).
4. Persona memory off; global CLAUDE.md not loaded (direction unknown).
5. Planted errors sit on a candid self-critical site with many real defects. Real defects compete for attention (biases DOWN).

## Stakes
**S1 (maintainer's stake, as registered in the topic).** Numeric errors (ARITH + STALE), loop level: caught < ⅓.
Wording overclaims (OVERCLAIM), loop level: caught > ⅔. Refuted if numeric ≥ ½ or wording ≤ ⅓.
(Note: the topic's example of a "wording overclaim", "refuted for disfavoured", is an over-refutation. I score S1 on
OVERCLAIM alone and also report OVERCLAIM + OVERREFUTE.)

**S2 (mine, the asymmetry).** OVERREFUTE loop catch < OVERCLAIM loop catch by ≥ 30 points.
The personas are prompted to hunt overclaims and errors. A more damning sentence on a site that advertises its failures
reads as more honesty, not as a defect. **Refuted if** OVERREFUTE ≥ OVERCLAIM − 10 points. Between −10 and −30: indeterminate.

**S3 (mine, point predictions, loop level, full text).** ARITH 0.35, STALE 0.20, CITE 0.25, OVERCLAIM 0.70,
OVERREFUTE 0.25. Scored as hits if within ±0.25 (the N allows nothing tighter).

**S4 (mine, who catches).** Passes 3 + 4 make ≥ 80 % of all CAUGHT verdicts. Pass 1 makes ≤ 1 catch across both
replicates.

**S5 (control).** Clean-run coincidental CAUGHT ≤ 1 of 80 (20 items × 4 clean persona logs). If larger, the scorer is
too lenient, and catch rates will be reported net of it.

**S6 (difficulty).** Planter-rated "easy" items are caught at least twice as often as "hard" ones (per pass).

## What I will not do
- Re-plant, re-prompt or add replicates after seeing results, except to replace a run that crashed, timed out or wrote
  nothing. Any such replacement is logged.
- Put planted text anywhere near `src/`, or publish it. The corpus is archived as a tarball, so repo greps cannot hit it.

---
## Addendum A2 (registered after Arm A was scored, before A2 runs): mediated reading

**Why.** Arm A (full text) gave a loop catch of 31/40 = 0.78. Today's real visitor transcripts show 0 direct WebFetch
calls; they used 30 `web-fetch` subagent calls, each with a targeted brief ("report … verbatim", "first 1–3 sentences
under each heading"), plus 16 curls in Pass 4. So the real instrument reads through a brief written by the persona.
A2 isolates that stage.

**Design.** Same planted corpus, same 4 persona prompts, 2 replicates. Changes:
1. The persona cannot open pages. The mirror sits outside its cwd at a path only the subagent knows.
2. It must ask a `web-fetch` subagent (defined via `--agents`, tools `Read` only, model `haiku`, standing in for WebFetch's
   small-model summariser) to "fetch" a named page and report what it asks for.
Scoring is identical (blinded Sonnet scorer, hand check of every CAUGHT).

**Predictions.**
- **M1.** Mediated loop catch ≤ 0.45. Refuted if ≥ 0.65.
- **M2.** The loss falls on numbers: mediated NUMERIC (ARITH + STALE) loop catch ≤ 0.40, against 0.81 in Arm A, and a
  larger drop than WORDING (OVERCLAIM + OVERREFUTE). Refuted if NUMERIC drops less than WORDING.
- **M3.** Items caught in Arm A only through a cross-page contradiction (P05, P06, P08, P10, P14, P18, P19) lose the most.
  The persona would have to ask two subagents for the same number.
