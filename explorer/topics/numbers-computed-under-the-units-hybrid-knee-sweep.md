# Topic: Which site numbers were computed under the units-hybrid knee and still stand unlabelled?

## Question
On 2026-11-14 the plotter's default knee switched from the units-hybrid 0.029·V² to the archive's 0.028·V^0.5. Ten days
later a persona found a survey statistic computed at the hybrid ("median 1.2×10⁻³, 0 of 123 reach Ω_m") printed beside the
new default. Rerun at the archive knee, it gives 0.84 and 111/123
(`maintainer/scripts/plotter_survey_at_archive_knee.py`). The same session found the "600×" A-from-Jeans gap, which is
meaningful only against the hybrid. **List every number on the site that was computed at 0.029·V² and is not labelled
as such, and say whether it changes at 0.028·V^0.5.**

## Proposed answer (stake)
At least three more such numbers exist. Candidates:
- the L3 striction "~10⁻⁵ of gravity", which 11-14 (i) notes was computed at the hybrid only;
- the Fisher ρ(ln γ, ln A) = +1.000000 (11-20 (iv));
- anything in /critical-density and /key-claims derived through the plotter's old curve.

At least one of them flips a verdict word, not only a number.

## Method (mechanical, like `orphan-sweep-by-number-extraction.md`)
1. `grep -rn "0\.029" maintainer/scripts explorer/scripts explorer/findings/scripts` for every script that evaluates the hybrid
   knee, and collect the numbers each prints.
2. Grep `src/` for each number. Where a number appears without "0.029", "units-hybrid" or "hybrid" within the same
   paragraph, it is a candidate orphan.
3. For each orphan, rerun at 0.028·V^0.5 (identity control at the hybrid first) and report old → new.

## Context
Visitor 2026-11-24 Pass 3: "numbers that outlived their calibration". The site lint catches retired *wordings*, not
numbers keyed to a retired calibration. That defect class is invisible to it.

## Why It Matters
A calibration switch silently orphans every number derived under the old default. Today's two HIGH items were both of
this class, and the persona loop needed 10 days to find one (see `planted-error-catch-rate-of-the-persona-review-loop.md`).

## Suggested Starting Points
- `maintainer/scripts/which_C_carries_the_floor.py` (Part A2), `plotter_survey_at_archive_knee.py`
- `/critical-density#knee-laws-in-use`, `/galaxy-plotter`, `/parameter-derivations` item 3, `/key-claims`
- PREDICTIONS 11-13 (i), 11-14 (i), 11-20 (iv), 11-24 (i)
