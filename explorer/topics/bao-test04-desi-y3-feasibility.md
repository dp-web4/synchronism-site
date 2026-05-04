# Topic: TEST-04 BAO — Is the 10⁻⁵ Kill Threshold Feasible with Current Data?

**Seeded:** 2026-05-04 (maintainer session)
**Priority:** HIGH
**Trigger:** P4 researcher flags that TEST-04 is labeled Tier 1 ($0 cost, existing data) but the kill threshold of 10⁻⁵ BAO precision is below DESI Y3 sensitivity

## The Problem

TEST-04 predicts a ~10⁻⁴ BAO peak shift between high-density and low-density regions, with a kill criterion of "BAO identical everywhere to 10⁻⁵ precision." The test is labeled Tier 1 ($0 cost, existing data).

The researcher flags: "DESI Y3 BAO measurements achieve ~5×10⁻³ on r_drag globally; subdividing by environment to compare high-density vs low-density samples increases the error bar dramatically. A 10⁻⁴ shift may not be in DESI Y3's reach even with environment partitioning, and the site doesn't address this feasibility question. The kill threshold of 10⁻⁵ is an order of magnitude below DESI's current global precision; meeting it would require a generation of surveys past DESI."

If this is correct, TEST-04 is NOT a Tier 1 ($0, existing data) test — it's a Tier 3+ (future surveys, 10+ years) test. This matters because the entire testing strategy is built on starting with Tier 1.

## The Research Questions

1. **What precision does DESI Y3 actually achieve on BAO peak position in environment-split subsamples?** The global σ(r_drag)/r_drag ≈ 0.3–0.5% (DESI 2024-2025). Splitting into high/low density environments reduces the effective sample size — what does that do to the error bar?

2. **Is the predicted 10⁻⁴ signal above the noise floor for any current or near-term survey?** Options to check: DESI Y3 full sample, DESI Y5 projection, Euclid DR1, BOSS/eBOSS environment-split analyses.

3. **What kill threshold WOULD be feasible with DESI Y3?** If the achievable precision is ~5×10⁻³ at best on environment-split subsamples, should the kill criterion be revised to "BAO peak position does not differ by >10⁻³ between high/low density regions"? That's weaker but testable now.

4. **Should TEST-04 be reclassified?** If current data cannot settle the test, Tier 1 is wrong. The honest label might be Tier 2 (near-term surveys with some cost) or Tier 3 (future surveys, $1M+ cost for dedicated analysis).

## Useful References

- DESI 2024: "DESI 2024 VI: Cosmological Constraints from the Measurements of Baryon Acoustic Oscillations" — arxiv.org/abs/2404.03002
- DESI 2025 Y3 updates (check arXiv for latest)
- Standard BAO error scaling: σ scales as V_eff^{-1/2}, so environment-split samples with 50/50 split lose √2 in precision
- Previous environment-split BAO analyses: Ross et al. 2017 (BOSS), Beutler et al. 2021

## Proposed Output

A concrete feasibility estimate: at what survey volume/precision would a 10⁻⁴ environment-dependent BAO signal be detectable at 3σ? And what is the correct tier classification for TEST-04 given that answer?

If the conclusion is "TEST-04 is not currently testable," the site should reclassify it and be explicit about what survey generation would be needed. This is an honest update to the test catalog.
