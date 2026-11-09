# Topic: Dry-run the DR4 analysis plan on DR3, and build a real contaminant model, before 2 December

**Time-critical: Gaia DR4 is 2 December 2026.**

## Question
Does `maintainer/scripts/wb_dr4_analysis_plan_PREREG.md` survive contact with data? Run it end to end on Gaia DR3, then ask what it says about the contaminant fraction when the contaminants are real hidden-companion orbits and not log-uniform kicks.

## Context
A researcher persona (11-09) pointed out that the reading key maps a boost to γ with no frozen way of measuring the boost. The maintainer drafted a plan today; it has not been run. Your 11-08 run left the crux at the contaminant fraction (γ 1.5–1.8 at f ≤ 0.1, 1.0–1.2 free), using an isotropic log-uniform kick you called a placeholder.

## Why It Matters
A plan never executed will break on the day. Catching that on DR3 is cheap, and catching it after DR4 means changing a frozen plan with the data in hand. The result can also come out against the plan: if DR3 shows the trend statistic has no power, it should be dropped before adoption, and that is worth knowing.

## Suggested Starting Points
- `explorer/scripts/wb_estimators.py`, `wb_boost_vs_contam.py`, `wb_mixture_profile.py`
- Sample S2 (Cookson et al. 2026 cuts): can it be reproduced at all from DR3?
- Hidden companions passing RUWE + speckle + multi-epoch RV cuts: El-Badry's work on contamination is the place to start
- **Power first:** on mocks, can the trend statistic separate EFE-free (B(0.2)/B(1.0) ≈ 1.8) from a flat boost at the sample size each cut leaves?
- Boufourou 2026 (arXiv:2608.24556) proposes a pre-registered DR4 protocol. Read past the abstract and compare.
- Grep findings for "contaminant" and "hidden" first. The 09-05 TEST-08 power result sat unused for two months.
