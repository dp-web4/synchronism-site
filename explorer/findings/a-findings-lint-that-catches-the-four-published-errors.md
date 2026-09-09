# Finding: A findings-lint, measured — it catches all four published errors, and its most useful rule is the one the topic did not ask for

## Origin

Topic `findings-lint-placeholder-and-gamma-tagging.md` (maintainer 2026-09-09). The topic's question:
*"Can this be caught by a check rather than by a warning? Concretely: what is the smallest lint that would
have caught all three?"* — and its sharp sub-question about the strongest proposed rule: *"Is that worth
the tooling, or does it just move the failure to the view layer?"*

## Summary

Built and measured. `explorer/tools/findings_lint.py`, four rules, run over the whole corpus
(174 findings + 145 logs = 319 files).

**It catches all four known published errors, at the exact lines**, including the one the topic did not
count: `SOWHAT_PLACEHOLDER`, still sitting at the bottom of `logs/2026-09-08.md`, committed and pushed.

The topic's proposed strong rule (R3: every table number greppable in the cited artifact) is **not** the
useful one. Corpus coverage is already 87.7%, and the tail is not transcription error — it is findings
whose cited script saved no output at all. That converts R3 into a cheaper and far more precise rule the
topic never proposed: **R4, "the artifact does not exist."** 31% of the scripts cited by findings and
present in this repo have no saved `<script>_output.txt`.

## Research Notes

### The four errors, and whether a rule catches them

| # | error | where | rule | caught? |
|---|-------|-------|------|---------|
| 1 | `GAMMA2_ROWS`, `FLOOR089_ROWS` shipped as literal strings in a results table | `findings/joint-local-window-oort-gc-sparc-...md:115,116` | R1 | **yes** |
| 2 | a γ=2 density window compared against a γ=0.489 exclusion band | `findings/globular-cluster-knee-test-...md:330` | R2 | **yes** |
| 2b | both source sentences of that mismatch, each quoting a window with no γ in the cell | `logs/2026-09-06.md:50`, `logs/2026-09-07.md:69` | R2 | **yes, both** |
| 3 | `SOWHAT_PLACEHOLDER` in a committed session log | `logs/2026-09-08.md:83` | R1 | **yes** |

Error 2 is the one that matters, because R2 flags it at *both* ends. The mismatch was only possible
because two different windows were each written down without the parameter that produced them, a day
apart, in two different files. Neither sentence is wrong on its own. The rule does not need to understand
the physics — it only needs to insist that a window is not a window until its γ is in the same cell.

### Rule set, and the honest hit counts

| rule | severity | corpus hits | files | precision (hand-scored) |
|------|----------|-------------|-------|-------------------------|
| R1 `PLACEHOLDER` | error | 12 | 9 | 4/12 true placeholders; the other 8 are unbackticked artifact names, which the rule's own contract says should be backticked |
| R2 `UNTAGGED WINDOW` | error | 14 | 7 | ~10/14 — the 4 misses are observed density ranges sitting next to the word "window" |
| R4 `NO SAVED ARTIFACT` | warn | 59 | 47 | exact by construction |
| R3 `UNGROUNDED TABLE` | report | 440 ungrounded of 3581 | 44 | 87.7% coverage; use as an anomaly detector, not a gate |

R1 needed one round of tuning that is worth recording, because it is the difference between a lint that
gets used and one that gets ignored. The first draft (`[A-Z][A-Z0-9]*_[A-Z0-9_]{2,}`) fired **101 times**,
dominated by legitimate physics subscripts — `E_QG`, `M_HI`, `R_GC`, `W_P20`, `D_LCDM`. A placeholder is
*wordy on both sides of the underscore*; a subscript has a 1–2 character stem. Requiring ≥3 characters each
side took 101 → 12 with no loss of recall on the known cases. **A lint at 101 hits would have been turned
off within a day; the tuning is the deliverable, not the regex.**

### The topic's own question about R3, answered

> "Rule 3 is the strong one and the hardest — it turns the finding into a *view* of the artifact rather
> than a retelling of it. Is that worth the tooling, or does it just move the failure to the view layer?"

Measured: **neither.** R3 as specified is too noisy to gate on (12.3% of all table numbers fail it, and
legitimately — ratios, percentages and derived quantities do not appear in the raw output). But the
*distribution* is informative. The four least-grounded findings in the corpus are:

| finding | table numbers missing | cited script | has `_output.txt`? |
|---------|----------------------|--------------|--------------------|
| `compander-aic-bic-real-data-attempt.md` | 67 / 69 (97%) | `work/compander_aic_extended.py` | **no** |
| `gamma-ncorr-sign-inversion-resolution.md` | 15 / 17 (88%) | `scripts/gamma_sign_inversion_resolution.py` | **no** |
| `efe-numerical-test-results.md` | 35 / 68 (51%) | `work/efe_numerical_test.py` | **no** |
| `refutation-1-argument-audit-and-the-systematics-corner.md` | 14 / 28 (50%) | two scripts | **no** |

All four for the same reason. R3 was not detecting bad transcription; it was detecting **absent
artifacts**. So the rule that earns its tooling is the trivial one underneath it:

> **R4** — a finding cites a script that exists in this repo and there is no `<script>_output.txt` beside it.

27 of 174 findings, 27 of 88 cited scripts (31%). The debt is mostly legacy: 22 of the 27 live in the older
`scripts/` and `work/` directories, only 5 in `findings/scripts/`, so the save-the-output convention has
in fact been adopted — it just was not enforced, and nothing until now could say how much of the archive
predates it.

### What this does not fix

The lint is a transcription check. It cannot catch the *fifth* error class — the one the memory note calls
"read the registration text before executing it," where the program computes a well-formed, correctly
transcribed answer to the wrong question. Six recorded instances, two published. R2 is the closest thing
to a mechanical grip on it, and only because in this program the wrong question has so far always been
*a different value of γ*. If the next instance is a different variable, R2 will not see it.

The general form would be: a registration file per executed prediction, naming its parameters, that the
script must load rather than restate. That is a design session, not a patch, and it is the natural next
step if a seventh instance occurs.

## Implications for the Site

None directly — this is track tooling. Indirectly: the site published error 2 (the γ-mismatch no-go) and
had to retract it on 2026-09-08. A lint that runs in three seconds in the explorer track is upstream of
the maintainer's publication decision, so it is cheapest here.

## Action: Maintainer

- **P2** Nothing to publish. If you want a line for `/for-researchers` on how this program handles its own
  error rate, the honest version is: *"Four published errors in three days shared one shape — a conclusion
  written from a narrative rather than from the artifact. The response was a lint, not a warning, because
  the warning had already been written and had already failed."*
- **P3** The R4 debt (27 findings citing scripts with no saved output) is a back-fill job, not a fix. It is
  only worth doing for findings whose numbers are still load-bearing on the site.

## Open Threads

- Should the lint run as a pre-commit hook? Argument for: the efficiency attractor guarantees a
  voluntary check is skipped. Argument against: the track commits from an automated session and a failing
  hook would silently drop a session's work. Preferred middle: run it at the end of every session and paste
  the summary line into the log, which makes the number visible without gating.
- R2's precision is 71% and its recall on the known cases is 100%. The 4 false positives are all
  "observed density range next to the word window." A cheap fix is to require the range to be an *interval
  of ρ_c* specifically (`ρ_c ∈`, `ρ_crit ∈`, `window`, `excluded`) rather than any density; not done today
  because at 14 hits the list is short enough to read.
- **The lint fires on this finding.** R1 tripped on the rule's own name (`PLACEHOLDER` in a table cell —
  fixed by backticking) and R4 fires four times, because this finding *cites* the four scripts whose
  missing outputs are its subject. A rule cannot distinguish "cites a broken artifact" from "relies on a
  broken artifact." That is a real limitation of the whole approach and not worth engineering around at
  this corpus size — but it means the lint's output is a reading list, never a verdict.
- The `_output.txt` convention has no counterpart for figures or `.json` artifacts. `parameter_identifiability_l2_refit.npy` and friends are cited but opaque.
