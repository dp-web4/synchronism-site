# Topic: B4, the only registered bet with a winning branch, run as a three-way test

## Question
In the Bayesian-agent compression-trust experiment, how does the critical coupling p_crit scale when the
compatibility matrix C[i][j] is **heterogeneous**? Three candidates, fixed before running:
1. **B4 as stated:** p_crit ∝ 1/⟨C⟩ (mean compatibility).
2. **Prior art:** p_crit ∝ 1/λ_max(C), the largest eigenvalue of the coupling/compatibility matrix
   (Restrepo, Ott & Hunt 2005, PRE 71, 036151, for oscillator networks; the analogous spectral threshold
   is standard for linearised spreading and consensus). Check first whether the belief-averaging dynamics
   linearise to a λ_max criterion at all. That derivation is part of the topic.
3. **Affine (what the homogeneous data actually show):** p_crit ≈ a + b/⟨C⟩ with a dominant intercept.

## Context
- The maintainer (2026-09-25) found that the homogeneous "confirmation" (r = 0.994) reads a correlation as a
  proportionality. On `Synchronism/Research/Compatibility_Synthon_Experiment.md` Experiment A's five points,
  p_crit ≈ 0.0151 + 0.0034/C, and the intercept is 82% of p_crit at C = 1. ∝ 1/⟨C⟩ predicts 0.0925 at C = 0.2,
  and 0.0320 was observed. The source says "not a perfect 5× inverse". The ledger said "confirmed". Now corrected
  in PREDICTIONS.md B4.
- The same session found that **no test in TEST-01…26 has a branch that moves Bucket 0** (TEST-04a's favourable
  branch is post-hoc by registration; TEST-26's freezing branch is Cardassian-class prior art; TEST-02 is
  self-eliminating-or-tie). B4 is runnable in-house, needs no instruments, and has a genuine win branch.
  Whether an applied-axis result could move Bucket 0 is a dp scoping question
  (`Synchronism/Research/proposals/ceiling_convention_answered_by_lensing_and_the_registry_has_no_winning_branch_20260925.md` §3).

## Why It Matters
Four weeks of maintainer effort have gone to refutation-side audits: controls, conventions, corrections. That
work is honest, and it cannot move the number the ledger exists to track. This is the one place a positive,
pre-registered result is possible at $0. A loss is also clean: if λ_max wins, B4 becomes "reproduces spectral
synchronization theory", a reparametrization with a citation, and the ledger gains a well-formed Bucket-1 → 3 move.

## Suggested design (explorer's call; pre-register before running)
- Structure types (B4's refutation criterion asks for ≥ 5): uniform; block-diagonal (2 and 3 communities);
  core–periphery; heavy-tailed (log-normal entries); random sparse. Choose parameters so that ⟨C⟩ and
  λ_max/K **separate** by ≥ 2× across the set; otherwise the test has no power (compute this first).
- Measure p_crit the same way as Experiment A (Hill p_half), with seeds and CIs.
- Score: which of the three predictors explains p_crit across structures (out-of-structure CV, not in-sample r).
- Control: reproduce Experiment A's homogeneous table first.

## Suggested Starting Points
- `Synchronism/Research/Coupling_Coherence_Experiment.md` (the Phase-1 set-up: K = 5, η = 0.15, α = 0.7)
- `Synchronism/Research/Compatibility_Synthon_Experiment.md` (Experiment A; the block-diagonal "impure crystal" remark)
- Restrepo, Ott & Hunt 2005 (PRE 71, 036151); Arenas et al. 2008 (Phys. Rep. 469, 93) for the spectral-threshold family
- PREDICTIONS.md Bucket 1 row B4 (with today's correction)
