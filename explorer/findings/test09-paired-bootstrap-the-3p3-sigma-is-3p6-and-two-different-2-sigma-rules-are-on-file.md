# Finding: TEST-09 paired bootstrap. The 3.3σ is 3.6σ, the count's −1 stands, and the site uses one name for two different "2σ rules"

## Origin
Topic `test09-paired-bootstrap-of-delta-n.md` (graduate persona, via maintainer 2026-11-05). Pre-registered at site commit
`c9ff6ab` before the script existed: `findings/scripts/test09_paired_bootstrap_delta_n_PREREG.md`. Script and output:
`findings/scripts/test09_paired_bootstrap_delta_n.py` and `_output.txt`.

## Summary
I resampled the 123 galaxies once per draw (B = 4000) and refit both slopes on the same resample.
- **The errors are positively correlated, but weakly:** ρ = +0.14. The paired σ(Δn) is 7% smaller than quadrature.
- **The triple becomes 3.6 / 2.8 / 2.5σ** (paired) instead of 3.3 / 2.5 / 2.2σ. The site's own caveat already said quadrature
  was the conservative direction.
- **The count's "2σ rule drops TEST-09 (−1)" stands.** That rule asks whether the 0.3 threshold itself is excluded at 2σ. The
  margin is 0.106, which is 0.95σ paired; reaching 2σ would need ρ ≈ 0.85.
- **All five pre-registered predictions held.** The topic's premise of "two σ's on file for one quantity" is not a
  contradiction. The 07-18 "~1.2σ" is the margin over the threshold (S2). The 3.3σ is the separation from zero (S1).
- **The live defect is in the wording.** The site prints both quantities under the same name, "a 2σ rule", and they give
  opposite answers for TEST-09.

## Research Notes

### Result (catalogue V_flat, N = 123; identity control reproduced 3.75±0.10 / 3.35±0.07 / 3.46±0.06 / 3.49±0.06)

| ceiling | Δn | ρ | σ paired | σ quad | S1 = Δn/σ (paired) | S1 quad | S2 = (Δn−0.3)/σ | P(Δn* ≤ 0.3) | 95% of Δn* |
|---|---|---|---|---|---|---|---|---|---|
| 1/Ω_m | 0.406 | +0.136 | 0.112 | 0.120 | **3.63** | 3.39 | +0.95 | 0.164 | 0.19–0.63 |
| (Ω_m−Ω_b)/Ω_b | 0.297 | +0.151 | 0.106 | 0.115 | **2.79** | 2.59 | −0.03 | 0.509 | 0.10–0.51 |
| Ω_m/Ω_b | 0.260 | +0.159 | 0.105 | 0.113 | **2.49** | 2.31 | −0.38 | 0.645 | 0.06–0.47 |

The site's printed quadrature σ is 0.1235 (unrounded seed-12345 errors 0.10015 and 0.07230). My B = 4000 draw gives 0.120. Both are
correct for their draw, and the ratio paired/quad = 0.93 is what transfers. On the site's own basis, 0.406 / 0.112 = 3.6σ.

Method control: with the observed V_flat replaced by the outer-3 mean of V_obs, as in the 07-18 robustness run, I get
Δn = 0.439 ± 0.115 and P(≤0.3) = 0.105. The 07-18 finding has 0.44 ± 0.12 and P = 0.111. Reproduced.

### Why ρ is small
- log V_obs and log V_pred correlate at 0.95 per galaxy. That correlation is almost entirely the shared mass axis.
- What drives slope covariance under resampling is the BTFR residuals. Those correlate at only +0.29.
- The two residual sets have the same rms (0.062 vs 0.064 dex). The model curve carries the baryonic scatter of each galaxy
  at full size, but only about 30% of it lines up with the observed scatter.
- Leverage galaxies therefore move the two slopes together only weakly. Most of the observed-slope error is V_flat
  measurement and intrinsic scatter, which the model does not share.

### The record defect: one name, two rules
- `src/lib/ledger.ts:59` (count range): "a 2σ significance rule drops TEST-09 (−1)". The source is the maintainer's 10-13 log:
  "Threshold excluded at 2σ". That is **S2**.
- `/tier-1-existing` TEST-09 alert (2026-10-16): "Under a zero-tolerance 2σ rule all three candidates fire". That is **S1**,
  and under it TEST-09 is *no longer* convention-dependent.
- A reader who meets both learns that "the 2σ rule" both removes TEST-09 from the count and makes its kill
  convention-*independent*. Both statements are true, but about different rules.
- Under S1 at 2σ, TEST-09 stays in the count, and the "fires only at B_max = 1/Ω_m" convention note in `REFUTATION_ROWS` #1
  would not apply. Under S1 at 3σ, paired, only 1/Ω_m fires (3.63; the next is 2.79). In quadrature, only 1/Ω_m fires too.
  So no 3σ verdict changes.
- So the range bound under the rules on file is unchanged. The *naming* is what makes it look as though it should move.

## Implications for the Site
- The triple can be printed as paired: 3.6 / 2.8 / 2.5σ. This replaces the "quadrature is an approximation" sentence with the
  measured correction.
- The count sentence should name its rule ("a rule that the threshold itself be excluded at 2σ"), and the TEST-09 alert
  should name its own ("a zero-tolerance 2σ separation").
- Neither change moves the 6 or the 3–8 range.

## Action: Maintainer
- `/tier-1-existing` TEST-09 `alert` "AS σ-DISTANCES" block and `scorecard.separation`:
  - Add the paired numbers: 3.6σ (σ 0.112, ρ +0.14), 2.8σ, 2.5σ. Keep the quadrature 3.3/2.5/2.2 as the earlier reading.
  - The scorecard's "combined σ = 0.124" is right: unrounded √(0.10015² + 0.07230²) = 0.12352. The alert's "0.123" is a
    truncation. This is cosmetic, but the two sentences sit side by side.
- `src/lib/ledger.ts:59`: change "a 2σ significance rule drops TEST-09 (−1)" to "a rule requiring the 0.3 threshold itself to
  be excluded at 2σ drops TEST-09 (−1; the margin 0.106 is 0.95σ on a paired galaxy bootstrap)".
- In the TEST-09 alert, rename "zero-tolerance 2σ rule" to "zero-tolerance 2σ separation (a different rule from the count's)".
- Lint candidates:
  - a REQUIRES rule tying "2σ" near "drops TEST-09" to "threshold";
  - a rule forbidding a bare "3.4σ" for TEST-09 (already retired);
  - leave 3.3σ allowed while it is labelled quadrature.
- Back-annotation (Synchronism repo, TEST-09 entry): the paired σ(Δn) and ρ, plus the two-rule distinction.

## Open Threads
- **The fair σ for "does the model differ on this sample" may not be a bootstrap at all.** n_pred is a deterministic function
  of the same galaxies. Conditional on the sample, the only noise is in V_obs: the measurement error on catalogue V_flat
  plus intrinsic scatter. A Monte Carlo over SPARC's e_Vflat column would give the measurement-only σ. It should come out
  smaller still, but it answers a narrower question.
- Run the same paired bootstrap for MOND's 0.6σ. It shares the mass axis in the same way, so its σ should also shrink by
  about 7%, which leaves its verdict unchanged.
- **Prior-art lead for the queued `modified-g-cardassian-prior-art-and-other-gdot-bounds.md`** (one search, not yet read):
  - The class result "a modified G_eff that drives late acceleration gives Ġ/G ~ H₀, which LLR excludes unless screened" is
    published for nonlocal gravity: "Testing nonlocal gravity with Lunar Laser Ranging", arXiv:1812.11181.
  - A review states that Ġ/G ≃ H₀ is generic on cosmological scales: arXiv:2001.07619.
  - The site's modified-G LLR exclusion is therefore probably a known class result applied in-house, not a new one.
  - Verify the locators before citing either paper.
