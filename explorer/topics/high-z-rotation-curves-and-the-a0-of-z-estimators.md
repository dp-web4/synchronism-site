# Topic: a₀(z) — the high-redshift rotation-curve literature, and why the two Ciocan estimators straddle n = 1

## Question
The site's only surviving archive equation that differs from constant-a₀ MOND is a₀(z) = cH(z)/2π. It is now labelled
"survives; does not discriminate", because ΛCDM with baryons predicts the same growth (Mayer et al. 2023). A referee
would ask two things the site does not answer:
1. How do the high-z rotation-curve results bear on a₀(z)? The researcher persona named Genzel et al. 2017/2020
   (declining outer curves at z ~ 1–2), Übler et al. 2017 and Nestor Shachar et al. 2023. Read each abstract, verbatim,
   and say in one line per paper whether it constrains a₀(z), and why or why not. The site currently cites only Milgrom
   2017 §4 (V_max zero points do not constrain a₀(z)).
2. Why does the site's fit to Ciocan's four quantile bins give n = 0.71 ± 0.13, when the paper's global line gives
   E(z)^1.15? Is it the estimator, the binning, the error convention (the figure bars state no CI level and were read as
   1σ), or the anchor? If the bars are 95% CIs, n = 0.71 ± ~0.07 puts n = 1 near 4σ off on the bin estimator. Would that
   change the verdict, given that ΛCDM+baryons also gives n ≈ 1?

## Context
- Visitor 2026-11-16, graduate (Pass 3) and researcher (Pass 4) personas.
- `/mond-unification` (the a₀(z) paragraph and "three numbers, like for like"), `/parameter-derivations` row 4.
- PREDICTIONS.md blocks 10-10 (iii), 10-12 (iv), 10-29 (ii), 11-12 (iii), 11-16 (iv).
- Memory note from past sessions: a fetch summary can return the wrong table row. Ask for whole tables verbatim, and
  check the CI level before dividing by it.

## Why It Matters
This is the one live row on the landing table that is not an identity or an exclusion. If the high-z literature already
disfavours n ≈ 1 or n ≈ 0, the row's status changes. If it does not constrain a₀(z), one sentence saying so, with
citations, closes a referee question the site leaves open.

## Suggested Starting Points
- arXiv:2604.22613 (Ciocan et al. 2026), Fig. 3 and the text around it: does it state the bar convention anywhere?
- `explorer/findings/scripts/a0_epoch_anchor_dependence.py`, `a0_epoch_highz.py`
- Genzel et al. 2017 (Nature 543, 397), Übler et al. 2017 (ApJ 842, 121), Nestor Shachar et al. 2023 (ApJ 944, 78).
  These locators are from recall: verify each before citing.

## Addendum (maintainer 2026-11-19): estimator-matched ΛCDM comparison
A researcher persona (visitor 2026-11-19) points out the a₀(z) row is a MOND-vs-ΛCDM question: RC100's n = 0.0 ± 0.5 sits ~2σ from
the *apparent*-a₀ trend of ΛCDM+baryons simulations (Mayer et al. 2023, n ≈ 1) as well as from cH(z)/2π. Has anyone checked that the
simulated n ≈ 1 survives the estimator RC100 used? An estimator-matched comparison (run RC100's estimator on simulated galaxies, or
Mayer's on RC100) is the cheapest version. Now item 5 on `/for-researchers#other-theories`.

## Addendum (maintainer 2026-11-20): shape, not endpoint

A researcher simulated-visitor persona asked: in Mayer, Teklu, Dolag & Remus 2023 (MNRAS 518, 257; Magneticum), does the RAR-fitted
a₀(z) track H(z) in *shape*, or only in endpoint (about ×3 from z = 0 to 2)? If the shapes differ between z ≈ 0.5 and 1.5, the RC100
or Ciocan bins could in principle separate cosmologically coupled MOND (a₀ ∝ H(z)) from ΛCDM + baryons. That would select
MOND-with-a₀(z), not this framework, and it would go under "results about other people's theories". Read the paper's a₀(z) table or
figure (not the abstract), compare both shapes against the estimator-matched bins, and compute the power before claiming anything.
