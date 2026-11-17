# Finding: DR4 cannot measure the hidden-companion rate in the 36-system sample. It can measure it in the 2D parent, if the single-star false-flag rate is pinned to ±0.005. And #3 needs a companion under every reading, Chae's included

**Date:** 2026-11-17 · **PREREG:** `1a4d020` (committed before any code) · **Gaia DR4:** 2 December 2026 (15 days).
**Status:** one AI session's calculation on the 11-09 companion model. Not reviewed; authors not contacted.
- Every number is conditional on that model: a lognormal inner orbit with median 40 AU and σ 1.5 dex, q flat on 0.1–1 unless
  stated, and the 11-09 DR3 cuts.
- It does not touch γ, this framework, the count, or Bucket 0.

## Origin
Topic `register-a-dr4-reading-of-the-hidden-companion-rate-not-of-gamma.md` (maintainer 2026-11-17). It is the first concrete
step of the proposal "the external value has moved to other people's theories".

## Summary
1. **On S1, DR4 companion flags carry almost no information about the crux.** S1 is the 36 Chae 2026 systems with 3D
   velocities. The crux is Newton with a per-star companion rate F = 0.45–0.5 against a boost of γ = 1.3–1.4 with F = 0.3.
   - The expected information is **0.17–0.27 nats** at a 1 % single-star false-flag rate, and **0.06–0.12** at 5 %. That is a
     typical likelihood ratio of 1.1–1.3.
   - A *perfect* census of companions in the same 36 systems would carry **1.8–2.1 nats** (LR ≈ 7). DR4 delivers 1/8 to
     1/30 of it.
   - The most extreme plausible flag counts give LR ≈ 2.6 (three of the six η > 1 systems flagged) or ≈ 3 (five of 36). At
     α = 0.05 the power is 3–10 %. No reading of DR4 flags on S1 alone should be reported as deciding Newton against a boost.
2. **Why DR4 is weak here.**
   - DR4 flags only about half of the companions that survived DR3: median 0.49 per system, range 0.31–0.84, and 0.61 of those
     with |kick| > 500 m/s.
   - The systems carrying the largest velocities, #3 and #4, need a companion under Newton *and* under a γ = 1.3–1.4 boost
     (P ≥ 0.95). Their flags therefore inform neither reading.
   - The discriminating systems are #59 (P(companion) 1.00 vs 0.48–0.71) and #6 (0.77–0.80 vs 0.38–0.45). DR4 sees #6's
     companion rarely (p ≈ 0.06), because its escape speed is 330 m/s and a wide, slow companion is enough.
3. **#3 needs a companion under every reading considered, Chae's own γ = 1.60 with low contamination included** (P = 0.86).
   At v4's η = 1.67 it exceeds even the γ = 1.6 escape speed. A deep companion search on #3 tests the S1 data, not gravity.
   **#59 is the one system that orders all three readings**: P(companion) is 1.00 under Newton, 0.49 at γ 1.4, and 0.07 at
   γ 1.6 with F 0.1.
4. **In the parent sample DR4 can measure F, and the limit is systematic, not statistical.**
   - Take DR3-clean stars matched to S1. The per-star DR4 flag rate is **0.032 at F = 0.3, 0.057 at F = 0.45 and 0.068 at
     F = 0.5** (base model, no false flags).
   - At 20,000 stars the binomial error is 0.0015.
   - **The single-star false-flag rate ε adds directly.** ε = 0.01 → 0.05 moves r by 0.04, as much as F = 0.3 → 0.5. The
     reading needs ε pinned to about ±0.005 from DR4 itself.
   - Model choices (σ_AL × 2, q shape) move F̂ by about ±0.05.
5. **A ground RV campaign on S1 reaches half of the census ceiling; DR4 does not.**
   - Two new epochs 12–15 years after the archival RVs flag 0.83–0.90 of surviving companions.
   - They carry 0.8–1.1 nats at ε = 0.01, about 4× DR4 alone.
6. **Pasquini et al. 2026 (arXiv:2602.04661) is the closest existing direct measurement, and it is field-like, not S1-like.**
   - VLT-ESPRESSO, 3–10 epochs per star at 3–9 m/s, December 2020 to March 2022. 26 pairs with s > 13 kau from a Tycho–Gaia
     DR2 list.
   - **12 of 26 pairs were discarded for RV variability** (16 m/s to about 1 km/s, per their Appendix A). No numeric
     criterion and no RUWE pre-cut is stated.
   - 12/26 = 0.46 per system is what F ≈ 0.25–0.3 per star gives if most companions are RV-visible: 1 − (1 − F)² = 0.44–0.51.
   - It does not test S1's post-vetting rate. It does show that an RV census of wide-binary components is cheap and finds
     companions in about half of the pairs.

## Research Notes

### A. Method (`scripts/wb_dr4_companion_reading.py`)
- **Pools.** For each S1 system, 30,000 inner companions are drawn with `wb_hidden_companions.forward` (11-09). DR3 cuts are
  applied as in 11-09: RUWE < 1.25, resolved, IPD, CMD 0.4 mag, and RV-stable at 100 m/s for a random 21/36. The DR4 flag is
  then computed on each survivor.
- **Identity control.** `forward_dr4` calls `forward` with the same generator state and replays its draws to recover the orbit
  angles.
  - It asserts that the replayed q, a and e equal `forward`'s.
  - It reproduces `forward` exactly on every shared key (`IDENTITY: True` in every output).
- **DR4 flag on a star.** Any one of:
  - the 66-month 7-parameter acceleration Δχ² > 30, as a noncentral χ²(2);
  - 66-month RUWE > 1.25;
  - |ΔPM(34 → 66 months)| > 5σ, with the nested-data σ = √(σ₃₄² − σ₆₆²), noise included;
  - Gaia epoch RV: quadratic against constant Δχ² > 30 over 33 transits. Per-transit σ_RV(G_RVS) is anchored on Katz+2023:
    1.3 km/s combined at G_RVS 12 and 6.4 at 14, with a median of 18 transits. G_RVS ≈ G − 0.8.
- **Conditioning.** Each draw:
  - simulates the 3D relative velocity under γ;
  - adds a companion with the 11-09 probability f_j(F), including the F² case where both stars host one;
  - adds measurement noise;
  - is accepted within ±0.04 of the observed η.
  - The outputs are p_j = P(flag | η_obs, H) and P(companion | η_obs, H). A false-flag floor ε (0.01 or 0.05) is applied to
    each clean star.
- **Expected information** = Σ_j KL(Bern(p_j^N) ‖ Bern(p_j^B)), with truth = the first-named hypothesis. The "ideal census"
  uses P(companion | η) in place of p_j.
- **Bug caught before the registered runs.** The first draft used the catalogue η_err as the kernel width while also simulating
  noise, which counted measurement error twice. It was replaced by a narrow acceptance tolerance.
- **η values.** v4 Table 3 (Chae v4, 5 Nov 2026) gives #3 1.67 and #4 1.34. The older `vobs_over_vesc` CSV column gives 1.16
  and 1.17. The η > 1 set is the same six systems either way. I use v4, as 11-09 did.

### B. Base results (`wb_dr4_companion_reading_output.txt`, 200,000 draws per system and hypothesis)
p_j = P(DR4 flag | η) [P(companion | η)], ε = 0.01:

| id | η (v4) | Newton F 0.45 | Newton F 0.50 | γ 1.3, F 0.3 | γ 1.4, F 0.3 |
|---|---|---|---|---|---|
| 3 | 1.67 | 0.24 [1.00] | 0.25 [1.00] | 0.23 [0.99] | 0.22 [0.99] |
| 4 | 1.34 | 0.45 [1.00] | 0.46 [1.00] | 0.41 [0.98] | 0.42 [0.95] |
| 6 | 1.33 | 0.06 [0.77] | 0.07 [0.80] | 0.05 [0.45] | 0.05 [0.38] |
| 33 | 1.18 | 0.03 [0.09] | 0.04 [0.11] | 0.03 [0.04] | 0.03 [0.04] |
| 59 | 1.16 | 0.33 [1.00] | 0.33 [1.00] | 0.23 [0.71] | 0.15 [0.48] |
| 42 | 1.07 | 0.12 [0.17] | 0.15 [0.20] | 0.05 [0.04] | 0.04 [0.03] |
| 54 | 0.90 | 0.08 [0.31] | 0.09 [0.36] | 0.04 [0.08] | 0.03 [0.07] |

- #33 (v4 velocity error 141 m/s on v_esc 351) and #42 (135 on 585) are noise-compatible with Newton without a companion.

Count distributions, ε = 0.01, Newton F 0.45 against γ 1.4 F 0.3:

| statistic | E under Newton, P(0) | E under γ 1.4, P(0) | LR at the extreme likely outcome |
|---|---|---|---|
| T_hi (6 with η > 1) | 1.23, 0.225 | 0.91, 0.343 | T = 3: 0.077/0.030 = 2.6; T = 0: 0.66 |
| T_mid (11 with η > 0.8) | 1.54, 0.164 | 1.05, 0.295 | T = 4: 0.035/0.007 = 5, at P = 4 % under Newton |
| T_lo (25) | 0.64, 0.521 | 0.57, 0.562 | ≈ 1 everywhere |
| T_all (36) | 2.18, 0.085 | 1.62, 0.166 | T = 5: 0.037/0.012 = 3.1; T = 0: 0.51 |

- At α = 0.05 the k_N thresholds have power 0.03–0.10. No k_B threshold exists at ε = 0.01: no outcome is improbable enough
  under Newton.

### C. Chae's reading: γ = 1.60 with contamination ≲ 0.1 (`wb_dr4_companion_reading_chae_output.txt`, ε = 0.01)
Columns: Newton F 0.45 / γ 1.4 F 0.3 / γ 1.6 F 0.1 / γ 1.6 F 0.3.

| id | η | P(companion \| η) | DR4 p_j |
|---|---|---|---|
| 3 | 1.67 | 1.00 / 0.98 / 0.86 / 0.96 | 0.22 / 0.20 / 0.22 / 0.20 |
| 4 | 1.34 | 1.00 / 0.96 / 0.56 / 0.83 | 0.44 / 0.40 / 0.20 / 0.33 |
| 59 | 1.16 | 1.00 / 0.49 / 0.07 / 0.23 | 0.29 / 0.16 / 0.04 / 0.09 |
| 6 | 1.33 | 0.77 / 0.37 / 0.09 / 0.30 | 0.07 / 0.04 / 0.03 / 0.04 |

- γ 1.4 F 0.3 against γ 1.6 F 0.1, DR4 alone: 0.24 nats at ε = 0.01 and 0.09 at ε = 0.05. An ideal census gives 1.9–2.0.
  - The script's "(truth = N)" label is wrong for this pair. The truth in the KL is the first-named hypothesis, γ 1.4.
- Unless #3's 90 m/s velocity error is underestimated, #3 hosts a companion whichever reading is right.

### D. DR4 plus a ground RV campaign (`_rvcamp30_output.txt`, `_rvcamp50_output.txt`)
- **Design.**
  - Two new epochs, 12 and 15 years after each system's archival RV epoch, phase-matched through the model's own rv0 epoch.
  - A flag is a change of more than 30 (or 50) m/s against the archival RV, combined with the DR4 flag (logical OR).
- **Coverage.** The campaign flags 0.90 (30 m/s) or 0.83 (50 m/s) of DR3-surviving companions.
- **Expected information**, Newton F 0.45 against γ 1.4 F 0.3:
  - 30 m/s: **1.07 nats** at ε = 0.01, 0.73 at ε = 0.05.
  - 50 m/s: 0.86 and 0.55.
- Per system at 30 m/s, ε = 0.01:

| id | flag probability, Newton / γ 1.4 | LR if flagged | LR if clean |
|---|---|---|---|
| 59 | 0.84 / 0.42 | 2.0 | 0.28 |
| 6 | 0.41 / 0.19 | 2.2 | 0.73 |
| 54 | 0.25 / 0.07 | 3.6 | 0.81 |
| 3 | 0.79 / 0.78 | ≈ 1 | ≈ 1 |
| 4 | 0.88 / 0.84 | ≈ 1 | ≈ 1 |

- **Even a perfect census of S1 is worth about 2 nats (LR ≈ 7).** No companion measurement on these 36 systems can decide the
  crux by itself. It can move it by a factor of a few.

### E. Robustness (ε = 0.01 / ε = 0.05; two hypothesis pairs: N F .45 vs γ1.4, N F .50 vs γ1.3)
| variant | DR4 flag rate on survivors | info, ε 0.01 | info, ε 0.05 | ideal census, ε 0.01 |
|---|---|---|---|---|
| base (200k draws) | 0.49 | 0.241 / 0.228 | 0.118 / 0.090 | 2.007 / 1.838 |
| σ_AL × 2 (DR3 cuts and DR4 flags) | 0.46 | 0.174 / 0.170 | 0.068 / 0.061 | 2.005 / 1.973 |
| q MD17 | 0.48 | 0.202 / 0.224 | 0.112 / 0.099 | 2.065 / 1.984 |
| epoch-RV channel off | 0.38 | 0.272 / 0.211 | 0.117 / 0.091 | 2.104 / 1.875 |
| η tolerance 0.02 | 0.49 | 0.260 / 0.247 | 0.121 / 0.097 | 1.964 / 1.898 |
| η tolerance 0.08 | 0.49 | 0.233 / 0.251 | 0.139 / 0.112 | 2.087 / 2.034 |
| DR4 + RV campaign 50 m/s | 0.83 | 0.861 / 0.784 | 0.550 / 0.432 | 2.013 / 1.926 |
| DR4 + RV campaign 30 m/s | 0.90 | 1.067 / 0.965 | 0.733 / 0.566 | 2.013 / 1.926 |

- Turning off Gaia's epoch-RV channel lowers DR4's flag rate (0.49 → 0.38) but not its information. The Monte Carlo spread is
  about ±0.03 nats.
- The η tolerance (0.02–0.08) moves nothing that matters. At 0.08, #59's companion posterior under γ 1.4 falls to 0.35,
  which widens the census contrast slightly.

### F. Parent leg (`scripts/wb_dr4_parent_flag_rate.py` → `wb_dr4_parent_flag_rate_output.txt`)
Per-star DR4 flag rate r among DR3-clean stars matched to S1 (RUWE + resolved + IPD + CMD; no RV or speckle):

| model | DR3 survival of hosts | DR4 flags among survivors | r at F 0.3 / 0.45 / 0.5 (ε = 0) | same at ε = 0.03 |
|---|---|---|---|---|
| base | 0.133 | 0.608 | 0.0315 / 0.0570 / 0.0680 | 0.0599 / 0.0840 / 0.0945 |
| σ_AL × 2 | 0.177 | 0.585 | 0.0385 / 0.0688 / 0.0816 | 0.0664 / 0.0951 / 0.1072 |
| q MD17 | 0.151 | 0.590 | 0.0344 / 0.0618 / 0.0735 | 0.0625 / 0.0885 / 0.0996 |

- dr/dF ≈ 0.12–0.17. The binomial σ is 0.0015 at 20,000 stars and 0.0049 at 2,000.
- Any ε between 0.01 and 0.05 can be traded against F between 0.3 and 0.5.

## The registered reading (dated 2026-11-17, before DR4)

**R-A. S1 flag counts. Registered as a consistency check and declared non-decisive in advance.**
- **Data.** DR4 for the 72 S1 stars.
- **Flag.** Any of the four channels in Section A, computed on DR4 epoch astrometry and epoch RVs with DPAC's recommended error
  inflation, or any DR4 NSS solution.
- **Frozen expectations** (ε = 0.01, base), Newton F 0.45 against γ 1.4 F 0.3:
  - T_hi: E 1.23 vs 0.91. T_all: E 2.18 vs 1.62.
  - LR ≈ 2.6 at T_hi = 3, ≈ 3.1 at T_all = 5, and 0.5–0.7 at zero flags.
- **No outcome of R-A will be reported as deciding Newton against a boost.** Flags on #3 or #4 are predicted by every reading.
- Flagged systems are removed and the S1 mixture re-run. This is reported as vetting.

**R-B. Parent per-star rate. The leg that can decide F.**
- **Sample.** Chae's 2D catalogue (Zenodo 10986733), d ≤ 150 pc, G 5.5–13, s 2–30 kau.
  - Both stars must be DR3-clean: RUWE < 1.25, no NSS solution, IPD multi-peak 0, within 0.4 mag of the main sequence.
  - Weighted to S1's mass and distance distribution.
- **Statistic.** r = fraction of stars with a DR4 flag (Section A).
- **ε, measured on DR4 itself, two ways that must agree within 0.01.**
  - (i) The same flag on field stars in the same G and colour range with ≥ 10 years of precise-RV monitoring and no trend above
    10 m/s (for example the California Legacy Survey and HARPS volume-limited samples). About 1,000 stars give ±0.005.
  - (ii) A fit of r(d) = ε + F·c(d) over 20–150 pc. c(d) falls with distance as the photocentre signal does, while ε is flat
    in d at fixed G.
- **F̂** is read from the base model's r(F) at the measured ε, and also reported under σ_AL × 2 and q MD17.
- **Outcomes.**
  - **F̂ ≥ 0.40 under all three models:** the parent supplies the rate Newton needs in S1. The S1 excess is a
    typical-companions outcome, and the 11-09 "3–5× the parent" was an artefact of the eccentricity prior.
  - **F̂ ≤ 0.25 under all three:** Newton needs S1 to carry at least 1.8× its parent's rate after stricter vetting. The
    companion explanation is disfavoured. This favours a boost or an unmodelled systematic. It says nothing about which boost
    law, this framework's included.
  - **Otherwise:** undecided.
  - **ε not pinned to ±0.01 by (i) and (ii):** no reading, stated as such.

**R-C. Targeted RV census. Not DR4; offered to anyone with RV time.**
- Targets in order of value: #59, then #6, #54, #42, #36, #32. #3 and #4 are data checks predicted under every reading.
- Two epochs at ≤ 30 m/s, 12–15 years after the archival RVs, carry about 1 nat, half of what any companion census of S1 can.

## Predictions scorecard (PREREG `1a4d020`)
| | Result |
|---|---|
| P1 mean p_j (η > 1) ≥ 0.40 under Newton and ≤ 0.15 under boost | **Failed**: 0.205 under Newton. The boost side failed narrowly: 0.152 = 0.91/6 |
| P2 E[T_hi] ≥ 2.5 under N, ≤ 1.0 under B; P(T_hi = 0 \| N) ≤ 0.10 | **Failed** on N (1.23; 0.225). **Held** on B (0.91) |
| P3 T_all median \|lnLR\| < 1.1 | **Held** (0.33) |
| P4 epoch RV alone < 30 % of flags | **Held** in base (0.25). **Failed** under σ_AL × 2 (0.33) |
| P5 σ_AL × 2 lowers Newton's mean p_j by less than half | **Held** (0.205 → 0.15) |
| P6 decisions unchanged under MD17 | **Held**: same thresholds, one T_all cut at 8 instead of 9 |
| P7 at least one η > 1 system with p_j(N) < 0.25; guess #6 or #33 | **Held**: #6 0.06, #33 0.03, #42 0.12, #3 0.24 |
| Pre-stated "useless" test: P(T_hi = 0 \| N) > 0.3 and P(T_hi ≥ 2 \| B) > 0.3 | **Not met** (0.225; 0.21). **The test was mis-specified**: it bounded each tail loosely and separately, while power at α = 0.05 is 3–10 % and the information is 0.24 nats. The finding reports the information, not the test |

**Where my forecasts went wrong.** 11-09's "DR4 removes about half the survivors" is true. I carried it over as "about half the
anomaly-carriers get flagged", which is also roughly true. But the anomaly-carriers that are most visible (#3, #4) carry the
anomaly under both readings, so flagging them decides nothing.

## Implications for the Site
- `/wide-binaries` (`src/app/wide-binaries/page.tsx:245`) says the rate "is measurable (RV monitoring; DR4 epoch astrometry)".
  - For S1 itself, DR4 cannot measure it.
  - DR4 can measure the parent's rate, conditional on pinning ε.
  - Targeted RV on named systems is what reaches the S1 rate, and even a perfect census is worth LR ≈ 7, not a verdict.
- The "results about other people's theories" list now has a dated registration to point to, together with a statement of
  what it cannot decide.

## Action: Maintainer
1. **`/wide-binaries` crux box (line 245).** Replace "and that rate is measurable (RV monitoring; DR4 epoch astrometry)" with:
   > "DR4 cannot measure it in these 36. Its companion flags carry about a tenth of what a perfect companion census would, and
   > even that census is worth a likelihood ratio of about 7, not a verdict. DR4 can measure the rate in the parent sample if
   > the single-star false-flag rate is pinned from DR4 itself. Two new RV epochs on #59, #6 and #54 would carry half of what
   > any census of the 36 can. System #3 needs a companion under every reading, Chae's γ = 1.6 included (explorer 2026-11-17,
   > PREREG `1a4d020`; conditional on the companion model; one AI session)."
2. **`/for-researchers#other-theories`, item 1.** Append: "A dated DR4 reading (the parent rate; S1 flag counts declared
   non-decisive in advance) is in `explorer/findings/` (2026-11-17)."
3. **`maintainer/scripts/wb_dr4_analysis_plan_PREREG.md`.** Add R-A, R-B and R-C as the companion-rate leg, with R-A's
   non-decisive declaration verbatim. Commit before 2 December so the plan counts as dated.

## Action: Project lead
- The outreach question (proposal decision 2) now has specific content. An outside group would use R-B's ε requirement and
  R-C's ordered target list, not a γ.
- #3 is a data check that Chae's group would want to know about.

## Open Threads
- **A continuous DR4 statistic.** Binary flags at Δχ² > 30 discard sub-threshold information. A per-system likelihood on the
  measured acceleration and ΔPM could close part of the gap, but the census ceiling of about 2 nats still binds.
- **S1's Hipparcos–Gaia PM-consistency cut** (Chae v4 abstract) is not in the forward model. For Hipparcos stars it pre-empts
  some of what DR4's ΔPM channel would flag, so DR4's information on S1 is, if anything, lower than computed here.
- **Is #3's 90 m/s error right?** #3 is the one system whose reading does not depend on gravity.
- **Pasquini 2026 as an F calibrator.** Running the forward model on their selection would turn 12/26 into an F estimate for
  field wide-binary components. Their selection: Tycho–Gaia DR2, s > 13 kau, equal-brightness pairs, 3–10 ESPRESSO epochs over
  about 1.3 years. This is the closest thing to R-B available before DR4.
- **The parent leg used S1-matched pools, not Chae's actual 2D star list.** Matching on the real catalogue is step one after DR4.

## Artifacts
- `explorer/scripts/wb_dr4_companion_reading.py`. Outputs: `wb_dr4_companion_reading_output.txt` (base) and the variants
  `_sal2`, `_md17`, `_rvoff`, `_chae`, `_rvcamp30`, `_rvcamp50`, `_tol0.02`, `_tol0.08`.
- `explorer/scripts/wb_dr4_parent_flag_rate.py` → `wb_dr4_parent_flag_rate_output.txt`.
- `wb_hidden_companions.forward` now also returns `t0`, `dt` and its orbit-state function. Its random-number order is
  unchanged; the identity check is in every output.
- Data: `seratsaad/wb3d-gamma` @ `4333e9f` (`data/chae_2026_*.csv`) and `wb_chae_v4_tables.json` (Chae v4 Tables 2–3).
