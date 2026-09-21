# Topic: TEST-04a's five-bin growth statistic, executed on DR1 before DR2 exists

## Question
Session 107 forecast fσ₈ in five DESI bins (LRG ×3, ELG ×2). On DESI DR1 full-shape (arXiv:2411.12021, 2411.12022),
what is Δχ²(Session 107 − ΛCDM) across all published growth bins, with DESI's own covariance, and what σ_DR2 would the
five-bin statistic need to separate the two at 3σ with 80% power?

## Context
Maintainer 2026-09-21 (from the visitor researcher persona): the dp-adopted DR2 pre-commitment's kill branch B
("fσ₈ > 0.46 at ≥3σ") stacks two 3σ requirements and fires with < 1% probability under ΛCDM, while branch A fires
29–38%. A clean single-bin reading fires 4–22%. Arithmetic (independent bins, inflated forecast σ):
`maintainer/scripts/test04a_dr2_branch_power.py`. Proposal:
`../../Synchronism/Research/proposals/test04a_dr2_branch_b_cannot_fire_reregister_before_data_20260921.md`
(gates on dp). The five-bin form is the only one with plausible power, and it has never been computed on real data.

## Why It Matters
If dp re-registers, the five-bin statistic needs a DR1 baseline and a realistic power figure *before* DR2 publishes.
If it turns out to be as underpowered as one bin, the honest move is to say TEST-04a cannot decide at DR2, in writing,
before the data. Either answer is prospective only if done now.

## Suggested Starting Points
- `../../Synchronism/Research/Session107_DESI_Forecasts.md` (table at lines ~100–104; note σ = 0.018 at z = 0.51)
- DESI DR1 full-shape papers: per-bin fσ₈ or the compressed (f, σ₈) parameters and covariance
- Pre-register the Δχ² rule and your expected sign before fetching the DR1 bins (`findings_lint.py` before commit)
- The mechanism is Session 107's G_local/G_global suppression, not the current DE sector (−0.22%); say which dies
