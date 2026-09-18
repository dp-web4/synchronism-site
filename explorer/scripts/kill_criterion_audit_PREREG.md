# PRE-REGISTRATION — Mechanical audit of every registered kill criterion

**Registered**: 2026-09-18, explorer track, BEFORE the classification was run and before any
verdict was formed. Topic: `explorer/topics/audit-registered-kill-criteria-for-internal-inconsistency.md`.

## Exposure declaration (honesty about what I had already seen)

Before drafting these rules I had already read, in a grep listing, the 14 `kill:` strings of
Tier 2 (4), Tier 3 (7) and Tier 4 (3), and two Tier 1 strings (TEST-01, TEST-02). I had NOT read
the other eight Tier 1 strings, had not read any `prediction:` field except those two, and had not
formed or written any per-test verdict. The rules below are therefore **partly informed** by the
Tier 2–4 wording. This is declared rather than concealed; the pre-execution counts in §4 are the
part that can still be scored, and they are given separately for the exposed and unexposed halves.

## 1. Population

Every element of the `kill:` field in the four tier pages, which is the site's own registry:

- `src/app/tier-1-existing/page.tsx` (TEST-01 … TEST-10, plus post-registry TEST-25, TEST-26 if carried)
- `src/app/tier-2-pilots/page.tsx` (TEST-11 … TEST-14)
- `src/app/tier-3-major/page.tsx` (TEST-15 … TEST-21)
- `src/app/tier-4-frontier/page.tsx` (TEST-22 … TEST-24)

No test is excluded for being unrunnable, withdrawn, or already executed. Exclusions would be the
place a favourable denominator could be manufactured, so there are none. Executed and unrun rows
are reported separately, because a criterion found defective *after* its test ran is a correction to
the ledger while one found defective *before* is a repairable registration.

## 2. What is extracted per row (mechanical, no judgement)

`id`, `prediction`, `kill`, and whether an adjudicating dataset is named anywhere in the row.
The extraction is a script (`kill_criterion_audit.py`); its raw output is committed.

## 3. Classification rules — fixed here, applied after

Each criterion gets **all** flags that apply. A criterion with no flags is CLEAN.

- **A — TWO-SIDED UNSATISFIABLE.** The criterion states both a numeric threshold and a significance
  (e.g. "> 3σ"), the prediction states a numeric central value, and an adjudicating dataset with a
  known σ exists. Flag iff `|threshold − prediction| < stated_significance × σ_data`. This is
  TEST-04a's shape. Requires a real σ; if none is available the row goes to D instead, never to A.
- **B — UNSTATED PRECISION.** The criterion is a bare inequality on a continuous statistic
  (`>`, `<`, `≥`, `≤`) with no stated rounding or reporting precision, AND the threshold is written
  with fewer significant figures than the statistic is reported to elsewhere on the site. This is
  TEST-09's `> 0.3` against a computed 0.30. Flag is about the *registration*, not the outcome.
- **C — EXACT-NULL / UNREACHABLE KILL.** The criterion's firing condition is an exact statement that
  no finite-precision measurement can establish: "perfectly", "identical", "no correlation",
  "uncorrelated", "independent of", "at all measured X", with no tolerance, no σ and no confidence
  level attached. Such a criterion can never be *met*, so the test can never kill through it.
- **D — NO ERROR BUDGET.** The criterion is quantitative but names no adjudicating dataset, or names
  one whose σ appears nowhere in the row or its linked page. Distinct from C: a D criterion is
  satisfiable in principle, it just cannot be checked for A-consistency today.
- **E — DEPENDS ON AN UNMAPPED QUANTITY.** Firing requires measuring C, γ, N_corr, Φ, or an MRH
  boundary. This is the site's own already-published "unrunnable as stated" verdict; it is counted
  here only so that the other classes can be reported both with and without it. **E alone is not a
  new finding** and will not be presented as one.
- **CLEAN.** None of the above: a numeric threshold, a stated significance or tolerance, and a named
  dataset whose σ makes the two jointly satisfiable.

## 4. Pre-execution predictions (scored afterwards)

On the 14 rows I had already seen (Tier 2–4), I predict: C ≥ 8, E ≥ 10, CLEAN = 0.
On the 10 Tier 1 rows I had not read, I predict: CLEAN ≥ 3 (Tier 1 runs on real catalogues with
published errors), C ≤ 3, and **at least one further A instance besides TEST-04a**.
Across all rows I predict **CLEAN ≤ 6 of 26**, i.e. the site's `/test-catalog` sentence *"Every
experiment has an explicit kill criterion — a result that would falsify the prediction"* is
quantitatively overstated.

I also predict the persona's nomination **TEST-06 (σ_int ≤ 0.086 dex requiring N > 1000) is NOT an
A instance** — a power requirement stated in the registration is the opposite defect from an
unsatisfiable one. If it flags, it flags D.

## 5. Verdict rule, fixed before execution

- The topic's question ("how many registered criteria are internally inconsistent?") is answered by
  the A + B count, with 26 as the denominator.
- The stronger claim — that the site's falsifiability sentence is overstated — stands **iff**
  `CLEAN < 26`, and its size is reported as `CLEAN/26`, never as an adjective.
- If CLEAN ≥ 20, the finding is that the registry is in good shape and TEST-04a is an isolated
  defect. That outcome is reportable and will be reported.
- No fix is proposed for any criterion in the same session as its flag, except where the repair is
  purely a restatement of an already-published number.

## 6. What would make this audit itself wrong

The classification is mine and unblinded — there is no second coder. The A class is objective given
a σ; **C and D are judgement calls and will be reported with the full criterion text inline** so a
reader can re-code them. If C's rate is the headline, the headline is a coding decision, and the
write-up must say so.
