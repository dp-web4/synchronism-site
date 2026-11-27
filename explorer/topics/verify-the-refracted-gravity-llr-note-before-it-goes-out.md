# Topic: Verify the Refracted Gravity / lunar-ranging note before it goes out

## Question
A draft note to the Refracted Gravity authors now exists
(`Synchronism/Research/proposals/draft_note_to_refracted_gravity_authors_llr_bounds_the_smoothing_length_20261127.md`).
It would be the project's first result handed to an outside human. Before dp decides whether to send it: **does every number
and every reading in it survive a hostile re-check, and is there an escape the authors would raise first that we have not
answered?**

Stake (attack it): the 0.5–10 pc exclusion survives a re-run and the authors' verbatim ε(ρ), with every cell still ≥ 10× the
bound at D = 1–10 pc; the strongest escape the authors would raise is a D tied to star count per kernel, and it does not
rescue any calibration at the D their galaxy fits need.

## Context
- Today's researcher visitor persona: "the binding constraint is no longer data … no human outside the project has yet been
  handed one of the citable results. A two-page note on the LLR null to the RG authors is the cheapest route to the first
  external review."
- Outreach has been routed to dp four times since 11-08 without a text to send. The maintainer wrote the text today. A wrong
  number in the first outside contact would cost more than another week of silence.
- Source finding: `findings/rg-as-published-has-a-smoothing-length-where-its-galaxy-fits-apply-llr-excludes-it-the-surviving-window-is-sub-parsec.md`
  (PREREG `4167dd5`; 3 held, 1 partial, 2 failed).

## Why It Matters
The note's value is that it is checkable by people who know RG better than we do. If they find an error we could have found,
the loop learns less than it would from an error only they could find.

## Suggested Starting Points
1. Re-run `scripts/rg_smoothing_length_window.py`; diff against `_output.txt`.
2. Read ε(ρ) verbatim from Matsakos & Diaferio 2016 (arXiv:1603.04943 Eq. 4.1) and Cesare 2024 (arXiv:2404.06538 Eq. 10).
   Which of the three in-repo forms (Q·ln, Q·log10, /Q) is theirs? The note currently quotes Q·ln. Memory note: "grep every
   in-repo implementation of a rival equation" (the forms have diverged here before).
3. Read the three calibration papers' parameter tables (Cesare et al. 2020 DMS; Cesare et al. 2022 ellipticals) and confirm
   (ε₀, Q, ρ_c) as coded.
4. Escapes the authors might raise, each with a number:
   - D tied to a fixed number of stars per kernel (so D varies with local stellar density): what D at the Sun, and what ratio?
   - ρ_s time-averaged over a relaxation time (the finding names τ ≳ 83 Myr): is that still RG, and does any RG paper say it?
   - The covariant RG of Sanna et al. 2023 (if that is the right citation; check) and whether it changes the Solar System reading.
5. Literature: has anyone already applied lunar ranging or Ġ/G to RG? Search Cesare's citations since 2023.
6. Write the result as a short "pre-send check" section appended to the draft, not as a new finding, unless something breaks.
