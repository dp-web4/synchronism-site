# PREREG: a DR4 reading of the hidden-companion rate in the 36-system 3D wide-binary sample (S1), not of γ

**Date:** 2026-11-17, written and committed before any code for this design exists. **Gaia DR4:** 2 December 2026.
**Topic:** `register-a-dr4-reading-of-the-hidden-companion-rate-not-of-gamma.md`.
**Not blind in one respect:** I know S1's per-system η (Chae 2026 sample, `seratsaad/wb3d-gamma` @ `4333e9f`) and the 11-09
forward model's DR4 vetting fractions (DR4 removes ~½ of DR3-surviving companions without RV, ~⅓ with RV).

## The question this registration answers

Explorer 11-09 found that S1 (36 systems with precise RVs) needs either a gravity boost (γ ≈ 1.2–1.4 with a per-star companion rate
F ≈ 0.3), or Newton with F ≈ 0.45–0.5. DR4 publishes epoch astrometry for every source and epoch RVs for G_RVS ≤ 14, so every S1 star
gets a 66-month companion test. The design question is which DR4 count separates those two readings, and whether any count can.

## Design (fixed here)

**Hypotheses.**
- H_N: Newton (γ = 1) with F = 0.45 and F = 0.50 per star.
- H_B: a boost of γ = 1.3 and γ = 1.4 with F = 0.30.
- Same companion population in both: the 11-09 forward model (`wb_hidden_companions.forward`, q flat 0.1–1, a lognormal with
  median 40 AU and σ 1.5 dex, e density 0.4 + 1.2e, hierarchy a(1+e) < s/5). DR3-era survival uses the 11-09 cuts: RUWE < 1.25,
  resolved, IPD, CMD 0.4 mag, and RV-stable at 100 m/s for 21 of 36.

**DR4 flag on a star (the observable).** Any one of:
1. the 66-month 7-parameter refit: Δχ²(5 → 7 parameters) > 30;
2. 66-month RUWE > 1.25 (refit residuals plus noise);
3. a change of proper motion between the 34- and 66-month fits of more than 5σ;
4. epoch RV: Δχ² of a quadratic RV(t) over a constant > 30, with per-transit σ_RV(G_RVS) taken from the Gaia DR3 literature.
A system is flagged if either star is flagged.

**Per-system conditional probability.** For each system j and hypothesis H, simulate the system's 3D relative velocity under γ (as
in `wb_s1_predictive.py`). With probability f_j(F), add a companion drawn from that system's DR3-surviving pool, carrying its kick
and its DR4 flag. Add measurement noise. Weight each draw by a Gaussian kernel on η (width max(η_err, 0.05)) around the observed η.
p_j(H) = P(flagged | η_obs, H).

**Registered statistics.**
- **T_hi**: flagged systems among the six with η > 1 (#3, #4, #6, #33, #59, #42).
- **T_mid**: flagged among the eleven with η > 0.8.
- **T_lo**: flagged among the 25 with η ≤ 0.8.
- **T_all**: flagged among all 36.
- Each has a Poisson-binomial distribution from the p_j. Thresholds k_N and k_B are set so that P(T ≥ k_N | H_B) ≤ 0.05 and
  P(T ≤ k_B | H_N) ≤ 0.05. The threshold numbers are frozen in the finding committed before 2 December.

**False flags.** A noise floor is added to every star: single stars are flagged at rate ε. This is run at ε = 0.01 and 0.05, because
the real DR4 single-star false-flag rate is unknown until DR4. The reading rule must say how ε is measured on DR4 itself.

## Predictions (my forecasts, scored in the finding)

- **P1.** For the six η > 1 systems, the mean p_j is ≥ 0.40 under H_N(F = 0.45) and ≤ 0.15 under H_B(γ = 1.4).
- **P2.** E[T_hi] ≥ 2.5 under H_N and ≤ 1.0 under H_B. P(T_hi = 0 | H_N) ≤ 0.10.
- **P3.** T_all alone cannot separate F = 0.3 from F = 0.5. The median |ln LR| over H_N draws is < 1.1, so LR < 3 typically.
- **P4.** At G 8–12, the epoch-RV channel alone carries < 30 % of the flags on companion hosts. Astrometry dominates.
- **P5.** Doubling σ_AL lowers the H_N mean p_j on the η > 1 systems by less than half.
- **P6.** Under the MD17 q shape, the direction of every registered decision is the same as under flat q.
- **P7.** At least one of the six η > 1 systems is a poor case: p_j(H_N) < 0.25, because a small required kick lets a wide
  companion that DR4 cannot see do the job. My guess is #6 or #33 (low v_esc, large s).

## What would make the design useless (stated in advance)

- If P(T_hi = 0 | H_N) > 0.3, a clean DR4 cannot rule against Newton. If P(T_hi ≥ 2 | H_B) > 0.3, flags cannot rule against a
  boost. If both hold, the registration says plainly that DR4 cannot decide S1, and points to the 2D parent instead.

## Reading rules
- R1: Every number is conditional on the companion model (rule R3 of 11-09).
- R2: This registers the reading rule for DR4. It does not use DR4 data, which do not exist yet.
- R3: An outcome favouring H_B does not favour any particular boost law, this framework's included.
