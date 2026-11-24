# Topic: What is the persona loop's catch rate? Plant known errors in an offline export and count

## Question
The simulated-visitor persona loop now supplies most of the site's corrections. Source counts on 2026-11-24 found 34
persona attributions on /honest-assessment, 22 on /tier-1-existing, 21 on /for-researchers, and 320 mentions of
"persona" in `src/`. Nobody has measured how often it catches a real error, or how often it flags a correct statement.
How often does a persona pass catch a planted error of each class, and how often does it raise a false flag?

## Proposed answer (stake, registered by the maintainer before any run)
- **Numeric errors that need recomputation** (wrong conversion, stale calibration, mixed-units ratio): caught **< ⅓** of the
  time.
- **Wording overclaims** (upgraded badge, "refuted" for "disfavoured"): caught **> ⅔** of the time.
- **False positives** on unplanted correct statements: > 10 % of flags before the persona's own artifact filter, < 5 % after.
- **Refuted if** numeric catches ≥ ½ or wording catches ≤ ⅓.

## Context
- Visitor log 2026-11-24, Pass 4, frame point: the A2ACW same-corpus objection applies to the site's own correction loop.
- Today's log shows the shape: real numeric catches (the plotter survey at the retired knee, the "600×" units ratio) that
  arrived late, since the plotter was visited in 8 of 9 logs before the stale survey was noticed. Wording catches were fast.
  Artifacts were filtered by the persona itself.
- Proposal: `../../Synchronism/Research/proposals/the_persona_loop_is_the_review_instrument_and_needs_a_catch_rate_20261124.md`.

## Design (Arm A, in-family, offline; the explorer can run this)
1. Freeze a commit and build a static export (`next build` output HTML; client-rendered steps live in JS chunks, see memory).
2. A planter, which should not also be the scorer, writes N ≈ 20 errors in five classes into a copy and records them in a
   sealed PREREG file:
   - arithmetic;
   - stale calibration (a number left at an old default beside a new one);
   - citation/locator;
   - overclaim;
   - over-refutation, since the self-critical direction is where the 05→08 share rose 1/20 → 9/24.
3. Run the four persona prompts through `claude -p` against the planted export and the clean export. Allow file read
   only; record the model per run, `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`, and keep batches under the 600 s ceiling (memory).
4. Score catches per class and false flags per pass. Report Wilson intervals, since N is small.
- Limitation to state up front: the real loop reads through WebFetch summaries. That is part of its error profile, and
  Arm A cannot see it.

## What not to do
- **Never plant errors on the public site.** The real-instrument arm (Arm B, a Vercel preview deployment through the
  visitor track's WebFetch path) gates on the project lead and on whoever owns the visitor track's configuration.

## Why It Matters
If numeric catches really run below ⅓, the site's correction record is biased toward wording. Number-level defects then
need a different instrument, for example a number-extraction sweep against scripts (`orphan-sweep-by-number-extraction.md`).
A catch rate also turns "corrected after a persona pointed it out" from provenance into evidence with a known weight.

## Suggested Starting Points
- `../visitor/logs/` (past catches; do not read `../visitor/CLAUDE.md`, to keep the persona prompts unseen by the planter if
  the planter is you; or have a subagent plant).
- `explorer/topics/which-demotions-survive-a-worthless-auditor.md`, `a2acw-positive-control-sensitivity.md` (related method).
- Memory: `strip-auto-memory-from-claude-p-raters`, `batch-long-rater-runs-under-600s-ceiling`, `client-rendered-steps-live-in-the-js-chunk`.

---
## Status (explorer 2026-11-24): Arm A and a mediated Arm A2 done; Arm B still gated
- Full text: loop 31/40 = 0.78. Through fetch briefs (how the real visitor reads): 9/40 = 0.23. Clean control 0/80.
- Both class stakes are refuted: numeric 0.81 in A, overclaim 0.12 in A2; over-refutation caught ≥ overclaim in both arms.
- Catch requires exposure: 0/110 unexposed vs 9/50 exposed in A2.
- Finding: `findings/persona-loop-catch-rate-is-set-by-how-it-reads-not-by-error-class-78pct-full-text-23pct-through-fetch-briefs.md`.
- Open: the orphan class (not planted), coverage, Arm B, cross-vendor planter.
