--- PRIMARY ---
# Round 1: PRIMARY

**Bounded claim.** Over the SPARC domain (about 10⁻² ≲ x ≲ 10²), the radial acceleration relation is g_bar = g_obs·C(x) with C = tanh(γ ln(1+x)). It is a two-parameter interpolating function, statistically equivalent to McGaugh's ν (ΔBIC +7.1, same RMS). The claim is empirical. I do not claim it is a new law, and I concede that the "derived γ = 2" is falsified by the data (ΔBIC +184).

**Operational variables.**
- g_obs = V²/R from rotation curves, g_bar = Newtonian acceleration from the gas, disk and bulge decomposition.
- x = g_obs/a₀′.
- Free parameters: γ and a₀′, fit over all 2,807 points.

**What the form implies.** These are algebraic consequences, not additional assumptions.

1. *Deep regime (x ≪ 1).* C ≈ γx, so g_obs ≈ √(g_bar·a₀′/γ). This is the MOND scaling with effective a₀ = a₀′/γ = 5.3×10⁻¹¹/0.49 ≈ 1.08×10⁻¹⁰ m s⁻². That sits close to McGaugh's g† ≈ 1.2×10⁻¹⁰, which is a non-trivial consistency check.

2. *Exact case γ = ½.* tanh(½ ln u) = (u−1)/(u+1), so C = x/(x+2). This gives g_bar = g_obs²/(g_obs + 2a₀′). That is the known "simple" MOND interpolating function with a₀ = 2a₀′. The fitted γ = 0.49 is close to ½.

I should state the consequence plainly: the construction is probably a reparametrization of a known interpolating function, and γ = 2 was never compatible with it. The value of the contribution is the one-parameter version with γ = ½. That is more falsifiable than the free-γ version, and it has fewer parameters than McGaugh's ν.

3. *High-acceleration tail (x ≫ 1).* 1 − C ≈ 2(1+x)^(−2γ), a power law with exponent about 0.98. McGaugh's ν deficit falls off as exp(−√y), which is exponential. So g_obs − g_bar tends to a roughly constant ≈ 10⁻¹⁰ m s⁻² in this construction, whereas it vanishes in McGaugh's form.

**Falsifiable consequence (one).** The two forms are tied together by a prediction. Fit the low-x (x < 0.3) and high-x (x > 3) subsets separately:
- The low-x subset gives a₀′/γ.
- The high-x subset gives the tail exponent 2γ.

The construction requires both subsets to return the same γ within errors, and that γ must be consistent with ½. At x ≈ 100 it predicts a residual (g_obs/g_bar − 1) ≈ 2%, against ≈ 0.14% for McGaugh. If the high-x subset prefers an exponential tail, or gives γ_high inconsistent with γ_low, the functional form is falsified, not merely refit.

**Stated boundary (a concession).** Extrapolated to the Solar System (x ~ 10⁸), the constant tail predicts an anomalous acceleration of ~10⁻¹⁰ m s⁻². Planetary ephemerides exclude that by many orders of magnitude. So the claim is bounded to the galactic domain. Outside it, the construction either needs a screening or external-field mechanism or it fails. I treat this as an open cost, not something to wave away.

**Questions for the Challenger.**
1. Is there any content in the construction beyond "γ = ½ simple interpolating function with a₀ = 2a₀′"? If you can name it, what is it?
2. Given that the 2%-level tail difference at x ~ 100 is comparable to M/L and bulge systematics, do you accept the split-sample γ test as the discriminator, or do you want a different one?

**Held:** the empirical equivalence to McGaugh's ν over SPARC, and the deep-regime a₀ consistency (≈1.08×10⁻¹⁰ vs 1.2×10⁻¹⁰).
**Narrowed:** the claim is reduced to a galactic-domain interpolating function, with γ = ½ as the sharpest form.
**Failed:** the derived γ = 2, which is excluded by ΔBIC +184, and any unscreened extrapolation to high g.
**Would settle:** the split-sample γ_low vs γ_high test, plus a fit with γ pinned to ½ (BIC against free γ and against McGaugh).

--- CHALLENGER ---
# Round 2: CHALLENGER

**Conceded, not contested.** The algebra checks: tanh(½ln(1+x)) = x/(x+2), the deep-regime a₀ = a₀′/γ ≈ 1.08×10⁻¹⁰ is correct, and the tail coefficient is correct. I accept your reduction, so the construction is the "simple" ν-function with a₀ = 2a₀′ plus a nuisance parameter.

**Pressure 1: the x range is overstated, so the tail test has little leverage.**
You state the domain as x up to ~10². SPARC's g_obs tops out near 10⁻⁹ m s⁻², so x_max ≈ 20 with a₀′ = 5.3×10⁻¹¹. Your 2% vs 0.14% contrast at x ≈ 100 is therefore outside the data. At x ≈ 20 the gap is roughly 10% (power law, 2·21^(−0.98) ≈ 0.10) vs 6% (exponential), which is a difference of order 0.02 dex. Per-point scatter is ~0.1–0.14 dex. With a few hundred points at x > 3, that gives Δχ² of order 10, about 3σ at best, before systematics.

**Pressure 2: the discriminator is degenerate with the nuisance parameters.**
Bulge M/L shifts g_bar by 10–20% exactly where x > 3. Adopting fixed Υ★ (0.5/0.7?) imports an assumption into the tail exponent. A free bulge Υ★ can absorb the entire tail difference. So the split-sample γ test, as stated, cannot falsify the form unless M/L is marginalized or varied.

**Pressure 3: "identical to four digits" is a statement about the noise floor.**
An RMS of 0.1437 dex that matches to four digits means the data are saturated by scatter. Any smooth family with the right deep-limit slope and a transition near a₀ will match. The ΔBIC +7.1 is essentially the bare parameter penalty (ln 2807 ≈ 7.9), so γ is unconstrained in practice. It also assumes independent points. SPARC points within a galaxy are correlated, so the BIC differences, including +184, are overconfident. A galaxy-level bootstrap is needed before any BIC is quoted.

**Pressure 4: hidden premises in the fit.**
- Regression direction: x is built from g_obs, the noisy variable, and g_bar is the response. Are the 0.1437 dex residuals in log g_bar at fixed g_obs? McGaugh's convention is the reverse. The γ and a₀′ estimates are not invariant to this choice (errors-in-variables bias).
- The quoted 2,807 points are not McGaugh's 2,693 (153 galaxies). Were the same cuts, distances, inclinations and Υ★ used? If not, "identical to McGaugh" compares different datasets.

**Pressure 5: the residual content.**
After γ = 2 is gone, what remains of the "coherence" interpretation? C ∈ (0,1) is just μ(g_obs/a₀). If γ = ½ is the surviving form, then tanh(γ ln(1+x)) is a decorative wrapper, and the claim should be restated as the simple interpolating function, whose standing is already known.

**Questions.**
1. Report the profile-likelihood (galaxy-bootstrapped) interval on γ, and the BIC of γ = ½ pinned against McGaugh. If ½ lies inside the interval, will you withdraw the tanh–ln form as the claim and keep only x/(x+2)?
2. State the number of points with x > 3 and the maximum x in your sample. With bulge and disk Υ★ free (priors ~0.1 dex), what Δχ² between γ = ½ and an exponential tail do you expect? If it is below ~9, will you drop the tail test as a discriminator?

**Held:** the algebraic reduction to x/(x+2), and the deep-regime a₀ consistency.
**Narrowed:** the tail prediction to x ≲ 20, where it is confounded with M/L; the "equivalence" claim to a statement that the data cannot resolve between the forms.
**Failed:** the x ~ 10² domain statement as a testable regime; the BIC numbers as stated, since they ignore intra-galaxy correlation; the "coherence" form as distinct content.
**Would settle:** a galaxy-bootstrapped γ interval, the γ = ½ pinned BIC against McGaugh, the tail test with free Υ★, and an explicit regression-direction statement.

--- PRIMARY ---
# Round 3: PRIMARY

**Concessions.**
- **Domain.** I overstated it. SPARC reaches g_obs ≈ 10⁻⁹ m s⁻², so x_max ≈ 20, not 10². At x = 20 the deficit is 2/(x+2) ≈ 9.1% for this form against ≈ 5% for McGaugh. That is ≈ 0.02 dex against 0.1 to 0.14 dex of scatter. My x ≈ 100 numbers are arithmetically right but lie outside the data.
- **Tail test.** With bulge Υ★ shifting g_bar by 10 to 20% exactly where x > 3, the split-sample tail test cannot discriminate. I withdraw it as the discriminator. I will drop it if the Υ★-marginalized Δχ² is below ~9, which I expect.
- **BIC.** ΔBIC +7.1 is essentially the bare penalty (ln 2807 ≈ 7.9). The data therefore give no evidence for free γ, and γ is not constrained beyond "near ½". The BIC values ignore intra-galaxy correlation. The +184 against γ = 2 will shrink under a galaxy-level bootstrap, but I expect it to stay decisive, since this is a 4-fold change in the exponent rather than a marginal shift.
- **Coherence.** "Coherence function" adds no content beyond μ(g_obs/a₀). If γ = ½ survives, tanh(γ ln(1+x)) is a wrapper and the claim is the simple interpolating function.

**Answers.**
1. **Yes, I commit to withdrawing the wrapper.** If the galaxy-bootstrapped profile interval on γ contains ½, I withdraw the tanh–ln form and keep only g_bar = g_obs²/(g_obs + 2a₀′) with a₀ ≈ 1.06×10⁻¹⁰. I have not run the bootstrap, so I give no interval. I do predict that it contains ½ and excludes 2.
2. **I will not quote n(x > 3) or the maximum x as established.** I expect x_max ≈ 20 and have no counted subset to report. I accept your Δχ² < 9 criterion for dropping the tail test.

**Open items, stated as unresolved.**
- **Regression direction.** The form g_bar = g_obs·C(g_obs/a₀′) treats g_obs as the regressor. McGaugh's convention is the reverse. With noise in both variables, γ and a₀′ are not invariant to this choice. I cannot say which direction produced 0.1437 dex. This must be reported, and the fit repeated in the other direction (or with orthogonal or errors-in-variables residuals). If the "four-digit identity" holds only in one direction, the equivalence claim narrows further.
- **Dataset.** 2,807 points is not McGaugh's 2,693. Until the cuts, Υ★ and distances are matched, "identical" compares different samples. The comparison must be rerun on one sample.

**One testable prediction (pre-registered).** On a common sample, with the same cuts, Υ★ priors of ±0.1 dex, and galaxy-level bootstrap:
- (a) the γ interval contains 0.5 and excludes 2;
- (b) the γ = ½ fit, with one free parameter a₀, matches McGaugh's ν within |ΔBIC| ≲ 3;
- (c) the γ = ½ fit beats free γ in BIC by ≈ 6 to 8, the parameter penalty.

Failure of (a) or (b) falsifies the form. Failure of (c) would mean γ carries real information, which would reopen the tanh–ln claim. A distinct empirical discriminator needs data at g_obs ≳ 10⁻⁸ m s⁻², where the deficit is ≈ 1% against ≈ 0.01%. That means high-acceleration early-type or lensing data, not SPARC. It is untested here.

**Standing cost.** The 1/(x+2) tail leaves a roughly constant ~10⁻¹⁰ m s⁻² excess at high g, excluded by planetary ephemerides. Any claim outside the galactic domain needs a screening or external-field mechanism that the construction does not supply.

**Questions for the Challenger.**
1. Is a claim reduced to "γ = ½ simple interpolating function, one-parameter, equivalent to McGaugh on a common sample" something you accept as a reproducible but unoriginal result? If not, what would it need?
2. Do you accept the bootstrap, common-sample and direction-swapped fit as the minimal test set, or is something else required before (a) to (c) count?

**Held:** the algebraic reduction to x/(x+2); the deep-regime a₀ ≈ 1.08×10⁻¹⁰ against 1.2×10⁻¹⁰; the ΔBIC against γ = 2 in direction, though not in magnitude.
**Narrowed:** the claim to the one-parameter simple interpolating function over x ≲ 20; "equivalence" to "data cannot resolve the forms"; the tail test to a high-acceleration dataset outside SPARC.
**Failed:** the x ~ 10² domain; the tail split-sample test as a SPARC discriminator; "coherence" as distinct content; the quoted BIC values as stated.
**Would settle:** the galaxy-bootstrapped γ interval, the pinned-γ = ½ BIC against McGaugh on a common sample, the direction-swapped fit, and the free-Υ★ tail Δχ².

--- CHALLENGER ---
# Round 4: CHALLENGER, final stress

**Answers to your questions.**
1. Yes. "γ = ½ simple interpolating function, one parameter, equivalent to McGaugh on a common sample" is a reproducible but unoriginal result. The program owns neither the form nor the a₀ value. The tanh–ln wrapper has to be withdrawn explicitly, not left as "an alternative parametrization."
2. The minimal test set is incomplete. Three items are missing, listed under "Where it breaks" below.

**Where it breaks.**

**1. The ΔBIC +184 does not support "stays decisive."** Under an RMS-based likelihood, ΔBIC = N·ln(RSS ratio) − (parameter penalty). Recovering the numbers:
- N·ln(RSS ratio) ≈ 184 + 7.9 ≈ 192, so the RSS ratio is ≈ 1.07.
- That puts the RMS for γ = 2 at about 0.149 dex against 0.1437, a 3.5% difference.
- If the effective sample is the galaxies (~150) rather than the 2,807 points, the 192 shrinks by ~18× to ~10, and the penalty becomes ln 150 ≈ 5. The result is ΔBIC of order +5.
- Free per-galaxy Υ★, distances and inclinations can plausibly absorb a 3.5% RMS shift.

Your prediction that γ = 2 stays excluded is a guess, not an expectation derived from the numbers. The falsification of γ = 2, the one clean result so far, may be marginal once the correlations are handled. This is the most likely place for the conclusion to reverse: the data may not distinguish γ = ½ from γ = 2 at all.

**2. The "non-trivial" a₀ check is circular.** With γ and a₀′ both free, a₀′/γ is fixed by the deep-regime slope of the same data that fix McGaugh's g†. Agreement at 1.08 vs 1.2×10⁻¹⁰ (about 10%) is the same asymptote fitted twice. An independent check would need an external a₀, for example from a different dataset or a different observable. Please remove this from "Held."

**3. The pre-registration has almost no risk.**
- (a) is already known: the point estimate is 0.49, so the interval will almost certainly contain ½. The only open part is whether it excludes 2, which is item 1.
- (c) holds by arithmetic, since a pinned fit saves the penalty.
- (b) is the only real test, and |ΔBIC| ≲ 3 corresponds to an RMS ratio of 1.0005, which is the fourth digit. At that level the outcome depends on cuts, regression direction and optimizer tolerance, not on physics. A pass or a fail there means little.

**4. The form is dominated outside SPARC.** Your own result that g_obs − g_bar → 2a₀′ ≈ 10⁻¹⁰ m s⁻² at high g is the "simple" function's known weakness. McGaugh's form does not have it. Since the two are indistinguishable on SPARC, any use beyond x ≈ 20 should prefer McGaugh's. The γ = ½ form therefore has no regime where it is better, only regimes where it is equal or worse.

**5. Direction and sample are still unresolved.** The regression direction and the 2,807 vs 2,693 mismatch are open, so "identical to four digits" is currently unsupported as a comparison. The measure of the difference between the two functional forms is also conditional on the 0.1437 dex RMS, which is dominated by observational scatter rather than by model misfit.

**Additions required before (a) to (c) count:**
- Free Υ★ per galaxy, with distance and inclination priors.
- A galaxy-level bootstrap that reports ΔBIC with effective N, not N = 2,807.
- Both regression directions.

**Questions.**
1. After the galaxy-level bootstrap with free Υ★, does γ = 2 remain excluded at your own ΔBIC > 10 threshold? If not, will you retract "falsified" for γ = 2 and describe the data as unable to select γ?
2. Do you accept dropping the deep-regime a₀ agreement as evidence, and restating (b) as an equivalence test with a tolerance set by bootstrap uncertainty instead of |ΔBIC| ≲ 3?

**Held:** the algebra, tanh(½ ln(1+x)) = x/(x+2), with a₀ = 2a₀′; the standing Solar-System cost.
**Narrowed:** the claim to "SPARC cannot distinguish this from the simple interpolating function"; the empirical content to equivalence, with no preference shown.
**Failed:** the derived γ = 2 as a derivation; the circular a₀ check; the "decisive" ΔBIC +184 as stated; the pre-registration as a risky test; the wrapper as distinct content.
**Would settle:** a galaxy-bootstrapped ΔBIC (γ = 2 vs ½, free Υ★, both directions, common sample); a high-g dataset (g_obs ≳ 10⁻⁸ m s⁻²) where the tails differ by orders of magnitude.

--- PRIMARY ---
# Round 5: PRIMARY, closing

**Answers.**
1. **No, I do not expect to be able to say γ = 2 remains excluded.** Your recovery of the numbers is correct. ΔBIC = N·ln(RSS₂/RSS₁) − ln N gives N·ln(ratio) ≈ 192, an RSS ratio ≈ 1.07 and an RMS ratio ≈ 1.035. My "stays decisive" was a guess. If the effective N is about 150 galaxies, ΔBIC is of order +5, below my own threshold of 10. I retract "falsified" for γ = 2. The status is "disfavored at the point level under an independence assumption that does not hold." It is not established until the galaxy-bootstrapped ΔBIC with free Υ★, distances and inclinations is run. If that stays below 10, the data cannot select γ, and the program's derived γ = 2 is untested rather than refuted.
2. **Yes on both.** I drop the a₀ agreement as evidence, since it is the same asymptote fitted twice. I restate (b) as an equivalence test (TOST) with its tolerance set by the bootstrap spread of ΔBIC, not a fixed |ΔBIC| ≲ 3. I also concede that (c) is arithmetic and (a) is nearly guaranteed, so the pre-registration has one real test, (b), and that test is sensitive to cuts and regression direction.

**Overall.** What survives is an algebraic identity, an empirical equivalence on SPARC that is not yet properly measured, and a Solar-System cost. The program's own distinguishing content (the "coherence" wrapper, the derived γ = 2) is either withdrawn or untested. The γ = ½ form has no regime where it beats McGaugh's ν, only regimes where it is equal or worse.

## HELD (survives)
- The identity tanh(½ ln(1+x)) = x/(x+2), so g_bar = g_obs²/(g_obs + 2a₀′). With γ = 0.49 fitted, the construction is numerically the "simple" interpolating function with a₀ = 2a₀′.
- The BIC arithmetic: ΔBIC +7.1 for the extra parameter is essentially the bare penalty, so free γ is not supported over γ ≈ ½.
- The standing cost: at high g the deficit g_obs − g_bar tends to about 2a₀′ ≈ 10⁻¹⁰ m s⁻². Planetary ephemerides exclude this, so any claim outside the galactic domain needs a screening or external-field mechanism that the construction does not supply.

## NARROWED (must be scoped)
- The claim is reduced to "SPARC cannot distinguish this form from the simple interpolating function." That is an equivalence result with no demonstrated preference, and it is reproducible but unoriginal.
- The domain is x ≲ 20 (g_obs ≲ 10⁻⁹ m s⁻²), not 10².
- The ΔBIC against γ = 2 is a point-level number only. The effective N is between about 150 and 2,807 until bootstrapped.
- "Identical to four digits" holds only on the author's sample and in the author's regression direction. Both are unreported, and the sample (2,807 points) differs from McGaugh's (2,693).
- The tail discriminator applies only to a high-acceleration dataset (g_obs ≳ 10⁻⁸ m s⁻²) outside SPARC. Within SPARC it is confounded with Υ★.

## FAILED (unsupported / overreach)
- The derived γ = 2 as a derivation. It is not shown to be falsified, and it is not shown to be supported.
- The "falsified" and "decisive" language for ΔBIC +184.
- The deep-regime a₀ agreement as a non-trivial check. It is circular.
- The "coherence" wrapper as content distinct from μ(g_obs/a₀). It is to be withdrawn explicitly if the bootstrapped γ interval contains ½.
- The x ~ 10² domain as a testable regime.
- The split-sample tail test as a SPARC discriminator.
- The pre-registration (a) to (c) as a risky test. Only (b) carries risk, and its tolerance was mis-set.

## WOULD SETTLE (decisive evidence/test)
- On one common sample, with the same cuts, distances and inclination priors, and Υ★ free per galaxy with ~0.1 dex priors, run a galaxy-level bootstrap and report the profile interval on γ and the ΔBIC (γ = 2 vs ½ vs McGaugh) at effective N. The γ = 2 claim is settled if ΔBIC > 10 survives, and abandoned if it does not.
- Repeat in both regression directions, or with orthogonal or errors-in-variables residuals. Report whether the equivalence to McGaugh holds in both.
- Run an equivalence test (TOST) of γ = ½ against McGaugh with the tolerance set by the bootstrap spread.
- Test on data with g_obs ≳ 10⁻⁸ m s⁻² (early-type, lensing), where the 1/(x+2) tail and the exponential tail differ by orders of magnitude.
- Provide a screening or external-field mechanism that recovers the Solar-System limits, or state that the claim stops at galactic scales.

HEADLINE: NARROWED

--- CHALLENGER ---
# CHALLENGER closing artifact

**HELD (survives)**
- The algebra: tanh(½ ln(1+x)) = x/(x+2), so g_bar = g_obs²/(g_obs + 2a₀′). This is the known "simple" interpolating function with a₀ = 2a₀′ ≈ 1.06×10⁻¹⁰ m s⁻².
- The deep-regime scaling g_obs ≈ √(g_bar·a₀′/γ), as an algebraic consequence of the form.
- The high-g tail: the deficit tends to a constant ≈ 2a₀′ ≈ 10⁻¹⁰ m s⁻², which planetary ephemerides exclude. The Primary acknowledged this standing cost, and it is unscreened.
- The Primary's concessions: the domain is x ≲ 20, not 10²; the tail split-sample test is not a SPARC discriminator; "coherence" adds no content beyond μ(g_obs/a₀); and the tanh–ln wrapper is withdrawn if the bootstrapped γ interval contains ½.

**NARROWED (must be scoped)**
- The claim is "SPARC cannot distinguish this one-parameter form from McGaugh's ν." It is a reproducible but unoriginal result with no demonstrated preference.
- The domain is x ≲ 20 (g_obs ≲ 10⁻⁹ m s⁻²), and the claim holds only for the galactic regime.
- "Identical to four digits" is a statement about the noise floor. The RMS is dominated by observational scatter, so it carries no discriminating power.
- The comparison to McGaugh is conditional on a common sample (2,807 vs 2,693 points) and a stated regression direction. Neither is established.
- The rejection of γ = 2 is a direction-of-effect statement only. My back-calculation puts the RMS difference at ≈ 3.5% (0.149 vs 0.1437 dex). That figure assumes an RMS-based Gaussian likelihood and is recovered from the quoted ΔBIC, not from a refit.
- Where the tails differ, the γ = ½ form is equal or worse than McGaugh's, never better. Beyond SPARC it should be disfavored.

**FAILED (unsupported / overreach)**
- γ = 2 as a derived value: excluded in direction, and the Primary has conceded it.
- ΔBIC +184 as "decisive." It assumes 2,807 independent points. With galaxy-level effective N (~150) and free Υ★, distance and inclination, it plausibly drops to order +5. The Primary's "stays decisive" is a guess, not a derived expectation.
- The deep-regime a₀ agreement (1.08 vs 1.2×10⁻¹⁰) as a "non-trivial" check. It is circular: the same asymptote is fitted twice, so it should not appear under "Held."
- The pre-registration as a risky test:
  - (a) is nearly guaranteed by the point estimate γ = 0.49.
  - (c) holds by arithmetic.
  - (b) at |ΔBIC| ≲ 3 corresponds to an RMS ratio of about 1.0005, which depends on cuts, optimizer and direction rather than physics.
- The tanh–ln "coherence function" as distinct content.
- The x ~ 10² regime as testable within SPARC.

**WOULD SETTLE (decisive evidence/test)**
- A galaxy-level bootstrap on a common sample with free per-galaxy Υ★ (±0.1 dex priors), plus distance and inclination priors. It would report ΔBIC (γ = 2 vs γ = ½) with effective N, in both regression directions. If γ = 2 is not excluded at ΔBIC > 10, "falsified" must be retracted and the data described as unable to select γ.
- The pinned γ = ½ fit against McGaugh with an equivalence tolerance set by the bootstrap uncertainty, replacing the fixed |ΔBIC| ≲ 3.
- A high-acceleration dataset (g_obs ≳ 10⁻⁸ m s⁻², such as early-type or lensing data), where the tails differ by orders of magnitude. This is the only regime with real discriminating power.
- An independent a₀ from a different observable or dataset, if any a₀ agreement is to count as evidence.
- A screening or external-field mechanism that reconciles the constant high-g residual with Solar-System bounds, if any claim beyond galaxies is retained.

HEADLINE: NARROWED