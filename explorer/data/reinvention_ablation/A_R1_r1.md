--- PRIMARY ---
**Bounded claim (what I defend)**

C(x) = tanh(γ ln(1+x)) is a two-parameter phenomenological interpolating function for the RAR. It is not a derivation. I concede two things up front:

1. The program's derived γ = 2 is falsified by the program's own fit (ΔBIC +184). Any claim that γ is derived is dropped.
2. The free fit is only parity with McGaugh's ν, and at ΔBIC +7.1 it is mildly disfavored. The construction earns no preference from the RAR alone.

**Operational variables**
- g_bar is computed from SPARC 3.6 μm photometry plus gas, with fixed Υ★ (e.g. 0.5 disk, 0.7 bulge) and no per-galaxy tuning.
- g_obs = V²/r, and the RMS is in dex over the 2,807 points.
- Free parameters: γ and a₀′. The scale a₀′ = 5.3×10⁻¹¹ m s⁻² is a factor of about 2.3 below the usual g† ≈ 1.2×10⁻¹⁰. That offset is itself a test, because it must be explained by the form of C and not by tuning.

**A problem in my own steelman, which I flag before the Critic does**

For x ≪ 1, C ≈ γx, so g_obs → a₀′/γ, which is constant. The deep-MOND regime needs g_obs ∝ g_bar^½, a log-slope of 0.5. This form gives slope 0. At g_bar = 5×10⁻¹³ m s⁻², it predicts g_obs ≈ 10⁻¹⁰, against about 8×10⁻¹² for McGaugh. That is roughly a 1 dex miss, which cannot coexist with RMS 0.1437 and four-digit agreement with ν.

So one of these is true:
- x or C is defined differently from the stated form (e.g. a square root somewhere).
- The reported fit was not run on this function.
- The fit statistic is wrong.

**One falsifiable consequence (as written)**

d ln g_obs / d ln g_bar → 0 as g_bar → 0. Binning the lowest-acceleration SPARC points (g_bar < 10⁻¹¹ m s⁻²) therefore gives a slope of 0.0 ± small. McGaugh/MOND predicts 0.5, and the data are known to lie near 0.5. If the measured slope is about 0.5, the stated form is falsified at low x. If the program's code reproduces RMS 0.1437, then the code and the stated formula differ, and the formula must be corrected before anything else is discussed.

A secondary test, valid once the form is fixed: γ and a₀′ fitted separately by morphology, surface-brightness, and mass bins must agree within their uncertainties. A significant drift falsifies universality.

**Questions for the Critic**
1. Do you reproduce the low-x asymptote g_obs → a₀′/γ, or is there a definition of x under which the stated fit holds?
2. If the form is repaired (e.g. C ∝ x^½ at small x), is anything left that is distinguishable from ν beyond a reparametrization?

**Status:** Narrowed. The γ = 2 derivation has Failed. The free-γ form is Held only as an empirical interpolant, and only if the low-x asymptote check passes. A binned low-g_bar slope plus a rerun of the fit code would settle it.

--- CHALLENGER ---
**CHALLENGER, Round 2**

**Verification.** I reproduce your asymptote. For x ≪ 1, ln(1+x) ≈ x and tanh(u) ≈ u, so C ≈ γx and g_obs = g_bar/C → a₀′/γ = 5.3×10⁻¹¹/0.49 ≈ 1.08×10⁻¹⁰ m s⁻². McGaugh's ν at g_bar = 5×10⁻¹³ gives about 8×10⁻¹², so the miss is about 1.1 dex. Your arithmetic holds. The same asymptote applies to γ = 2, where C ≈ 2x, so the ΔBIC +184 "falsification" of the derived value was also computed on a function that cannot fit the low end. It tells us nothing about γ = 2 specifically.

**Pressure points**

1. **The reported fit is internally inconsistent.** A 1 dex miss across the g_bar < 10⁻¹¹ points, which are a large share of SPARC's 2,807, would push the RMS far above 0.14 dex. Check the BIC bookkeeping: with N = 2807, ln N ≈ 7.94. ΔBIC = +7.1 means Δ(−2 ln L) ≈ −0.84, so the RMS agrees to about 1.5×10⁻⁴ in relative terms. That is consistent with "identical to four digits", which makes it more implausible that the function as stated was run. Either the code differs from the formula, or x is not g_bar/a₀′. Until that is resolved, no number in the shared context (γ = 0.49, a₀′, RMS, either ΔBIC) is attributable to the stated C(x).

2. **The obvious repair has a quantitative consequence you haven't checked.** Suppose the repair is x → √x inside the log, so C = tanh(γ ln(1+√x)). This restores the deep-MOND limit, with g_obs → √(g_bar a₀′)/γ. The effective MOND scale is then g† = a₀′/γ². With the reported values, g† = 5.3×10⁻¹¹/0.24 ≈ 2.2×10⁻¹⁰, which is 0.26 dex above the canonical 1.2×10⁻¹⁰ for Υ★ = 0.5/0.7. So the "factor 2.3 below g†" offset you flagged is not explained by the form. It reverses sign under this repair. Any repair must predict a₀′ from γ and g†, not leave it free. Otherwise "explained by the form of C, not by tuning" is vacuous.

3. **Hidden premise: parity with ν is cheap.** Any function with the right asymptotes (g_obs → g_bar at high x, √(g_bar a₀) at low x) and a single smooth crossover will match ν within the scatter. The RAR scatter is about 0.13 dex, mostly observational. So the RMS tie at four digits says the data cannot distinguish interpolants. It is not evidence for the program's structure. The test that would separate them is the shape of the transition near x ~ 1, which has little leverage.

4. **Scope.** The RAR fit by itself cannot support a claim about "coherence". Nothing in the stated function refers to anything but g_bar.

**Questions (max 2)**
1. What is the exact function in the fit code, and what is x? Please give C at x = 0.01 and x = 100 from the code, not from the formula.
2. Under your preferred repair, what does the program predict for a₀′ in terms of g† and γ, given that g† ≈ 1.2×10⁻¹⁰ is independently measured? If the answer is "it is free", name the distinguishing prediction the program makes that ν does not.

**Status**
- **Held:** your flag of the asymptote, and your admission that γ = 2 failed.
- **Narrowed:** the stated form is falsified at low x by arithmetic alone, with no data needed. All reported fit numbers are unattributed.
- **Failed:** the claim that the a₀′ offset is a test passed by the form. Under the natural repair it worsens.
- **Would settle:** (a) printing C(0.01) and C(100) from the fit code; (b) refitting the repaired form with a₀′ tied to g†/γ⁻² and checking the RMS against 0.1437 dex; (c) a prediction of the program that departs from ν (e.g. external-field or scatter structure) and is not a reparametrization.

--- PRIMARY ---
**PRIMARY, Round 3**

**Q1 (the fit code).** I have no access to the program's fit code, so I won't invent C(0.01) or C(100). I'm making the request a precondition: until those two numbers are printed from the code, every reported fit number is unattributed. I accept your point that the ΔBIC +184 against γ = 2 is also void, since it was computed on a form with the same flat low-x plateau. I withdraw it as evidence either way.

**Q2 (the repair).** I checked your repair at both ends. It is squeezed from two sides.

- **Low end.** For C = tanh(γ ln(1+√x)), the deep limit is g† = a₀′/γ² ≈ 2.2×10⁻¹⁰. The low-x points fix the deep-MOND amplitude, so a good fit must return g† ≈ 1.2×10⁻¹⁰. That requires a₀′ ≈ γ²g† ≈ 2.9×10⁻¹¹, not 5.3×10⁻¹¹. So (γ, a₀′) = (0.49, 5.3×10⁻¹¹) is inconsistent with this repair.
- **High end.** For large x, 1−C ≈ 2x^(−γ), a power law with γ = 0.49. At x = 100, u = 0.49·ln 11 ≈ 1.18, so C ≈ 0.81 and g_obs/g_bar ≈ 1.23, an excess of about 0.09 dex. McGaugh's ν has an exponentially small excess there (~e⁻¹⁰). So this repair predicts a systematic Newtonian-regime offset that ν does not.
- **Coincidence worth flagging.** The stated form's plateau, a₀′/γ ≈ 1.08×10⁻¹⁰, lies within 0.05 dex of canonical g†. I cannot say whether that is meaningful. It might mean the quoted pair came from a different asymptote, one with k = 1 in g† = a₀′/γᵏ. Since a repair with k ≈ 1 is not obvious from tanh(γ ln(1+x)), the code has to answer this, not me.

So the stated form fails at low x, and the √x repair with γ = 0.49 fails at high x or at the a₀′ consistency check. I know of no one-line fix that survives both.

**One testable prediction (for any repaired form with 1−C ∝ x^(−γ))**

Bin SPARC points with g_bar > 50 a₀′, roughly g_bar ≳ 2×10⁻⁹ m s⁻². The prediction is a mean log(g_obs/g_bar) of +0.08 to +0.10 dex at x = 100, with a power-law decline in x. ν predicts ≈ 0 there. The statistic is the binned mean offset, with a bootstrap over galaxies, not points, to respect correlated errors. If the offset is consistent with 0 at better than ~0.03 dex, any form with power-law Newtonian convergence at γ ≈ 0.5 is falsified. This is a prediction the program makes that ν does not. It is a prediction of failure, which is the honest status.

**What would still be a contribution**

If C is repaired to meet both asymptotes with exponential or steeper convergence, the surviving content is a two-parameter family whose transition width is set by γ. The distinguishing quantity is the fitted transition shape near x ~ 0.3 to 3, where ν and C differ by a few hundredths of a dex. I concede, per your point 3, that the current scatter has little leverage there. Realistic claims are:
- (a) an interpolant that ties with ν
- (b) a γ that is empirical, not derived
- (c) nothing about "coherence" beyond the name

**Status**
- **Failed:** the stated C(x) as a low-x description; the derived γ = 2; the a₀′-offset-as-test claim; every attribution of the quoted fit numbers to this formula.
- **Narrowed:** the repair space. A √x repair at γ = 0.49 conflicts with the low-x amplitude (a₀′ should be ≈2.9×10⁻¹¹) and with Newtonian convergence at high x.
- **Held:** only the bounded claim that some two-parameter tanh-log family can tie ν on the RAR. That is unshown for the stated form.
- **Would settle:** (a) C(0.01) and C(100) printed from the code; (b) the binned low-g_bar slope (0 vs 0.5); (c) the binned high-g_bar mean offset (+0.09 dex vs 0), with a galaxy-level bootstrap.

--- CHALLENGER ---
**CHALLENGER, Round 4 (final stress)**

**1. Both candidate forms fail at the quoted parameters, and the repair fails inside SPARC's data range.**

Residuals are log₁₀[(g_obs/g_bar)_C / ν], using ν = 1/(1−e^(−√y)) with g† = 1.2×10⁻¹⁰, γ = 0.49 and a₀′ = 5.3×10⁻¹¹.

| x | g_bar (m s⁻²) | Stated form | √x repair |
|---|---|---|---|
| 0.01 | 5×10⁻¹³ | +1.1 dex | +0.14 |
| 0.1 | 5×10⁻¹² | +0.61 | not computed |
| 1 | 5×10⁻¹¹ | +0.17 | +0.17 |
| 10 | 5×10⁻¹⁰ | +0.03 | **+0.16** |

- The stated form misses badly at x ≤ 1, where a large fraction of SPARC points sit. That cannot coexist with RMS = 0.1437 dex.
- The √x repair at γ = 0.49 misses by about +0.16 dex at g_bar ≈ 5×10⁻¹⁰. That is well inside SPARC's range and carries thousands of points. It is a much stronger exclusion than your x > 50 test.
- So (0.49, 5.3×10⁻¹¹, 0.1437) fits neither form. The numbers must come from a third function, or from a pipeline that is not as described.

**2. Correction to your test (c).**
- x > 50 means g_bar > 2.6×10⁻⁹. To my recollection the published RAR tops out near 10⁻⁹, so that bin is nearly empty. Please verify.
- A +0.08 dex offset is degenerate with a ~20% shift in bulge or disk Υ★. Unless Υ★ is marginalized, the test cannot discriminate.
- Test (c) should be replaced by the x ≈ 5–20 bins, where the predicted split from ν is ~0.15 dex.

**3. Possible rescue: Υ★.**
- A 0.26 dex g† offset under the √x repair could be absorbed by Υ★ ≈ 0.9. The offset in a₀′ then becomes a nuisance-parameter artifact, not a form-level prediction.
- Even so, this does not repair the +0.16 dex miss at x = 10. It only moves it.
- A fit with Υ★ free would test the rescue. The shared context says Υ★ is fixed.

**4. The ΔBIC numbers are inflated by an independence assumption.**
- N = 2807 treats points as independent, but they come from about 150 galaxies, each with correlated residuals (distance, inclination, Υ★).
- With N_eff ≈ 150, ln N_eff ≈ 5.0 and Δ(−2lnL) scales by roughly 0.05.
- The ΔBIC +184 for γ = 2 is then worth about +5, not "decisive". The +7.1 becomes about +5.
- This is moot if the numbers are unattributed, but it shows the statistical framing was weak even if the code is vindicated.

**5. Where the conclusion would reverse.**
- It would reverse if the code prints C(0.01) ≈ 6×10⁻³ (the stated form would then differ from the written formula) and a function that matches ν to ~10⁻⁴ in RMS. The question would then be what the function actually is.
- A genuine tie with ν to four digits makes the program's contribution a reparametrization. The ties in scatter are information about the data, not about "coherence".
- For the program to be distinguishable it must predict something outside the RAR mean relation. Candidates are residual dependence on morphology or surface brightness, external-field effects, and lensing. Nothing in the shared context does this.

**Questions (max 2)**
1. Do you accept that the entire quantitative record is unattributed until C(0.01) and C(100) are printed from the code, and that nothing in this debate supports the formula as written?
2. Name one observable outside the RAR mean where C and ν differ, with a sign and a size. If you cannot, say so and concede the content is zero beyond the name.

**Status**
- **Held:** the narrow claim that some smooth two-parameter interpolant can tie ν. The stated formula is not shown to be one.
- **Narrowed:** the quoted parameters fit neither form. Mid-range data (x ≈ 5–20) exclude the repair, so the earlier "x > 50" test was misplaced.
- **Failed:** the stated C(x) at low x. The derived γ = 2 and the a₀′-offset-as-test claim are also dead. ΔBIC as framed overstates evidence.
- **Would settle:** (a) C(0.01) and C(100) printed from the code. (b) A refit with N_eff-aware errors and Υ★ marginalized. (c) A non-RAR prediction where C and ν differ.

--- PRIMARY ---
**PRIMARY, Round 5 (closing)**

**Q1.** Yes. Until C(0.01) and C(100) are printed from the fit code, every quoted number (γ = 0.49, a₀′ = 5.3×10⁻¹¹, RMS 0.1437, ΔBIC +7.1 and +184) is unattributed to the formula as written. I rechecked your table. The stated form gives +1.1 dex at x = 0.01, +0.60 at x = 0.1, +0.16 at x = 1 and +0.02 at x = 10. The √x repair gives +0.16 at x = 10. My arithmetic agrees with yours, so nothing in this debate supports the formula as written.

**Q2.** I can't name one. Nothing in the shared context gives a sign and a size for a non-RAR observable where C and ν differ. Residual dependence on morphology, external-field effects and lensing are candidate directions, not predictions. So the content beyond the name is zero until the program supplies one.

**Concessions on my own tests**
- My x > 50 test was misplaced. That bin is nearly empty, and a +0.08 dex offset is degenerate with Υ★. Your x ≈ 5–20 test supersedes it. It excludes the √x repair at γ = 0.49 with thousands of points, unless Υ★ is freed.
- Your N_eff point is correct in direction. Correlated residuals within about 150 galaxies shrink the ΔBIC evidence by roughly 20×, so ΔBIC +184 would be about +5. A galaxy-level bootstrap is needed.

---

**CLOSING ARTIFACT**

**HELD (survives)**
- The narrow claim that a smooth two-parameter interpolant can tie ν on the RAR mean relation, since the data cannot separate interpolants with the right asymptotes. This is shown for the class, not for the stated C(x).
- The γ = 2 derivation is dropped, and the free γ is empirical.
- The diagnostic method: asymptote slopes, binned offsets with a galaxy-level bootstrap, and a refit with Υ★ marginalized.

**NARROWED (must be scoped)**
- Any claim is limited to "an empirical interpolant that ties ν on the RAR mean". It is not a claim about coherence or physical mechanism.
- The quoted parameters (0.49, 5.3×10⁻¹¹) fit neither the stated form nor the √x repair. They must come from a third function or a different pipeline, so the fit numbers cannot be cited until that is identified.
- A repair needs a₀′ tied to g† by its asymptote. Under √x it needs a₀′ ≈ γ²g† ≈ 2.9×10⁻¹¹, and then the x ≈ 10 mismatch must be resolved.
- ΔBIC must be recomputed with N_eff, not N = 2807.

**FAILED (unsupported or overreach)**
- C(x) = tanh(γ ln(1+x)) with x = g_bar/a₀′ as a low-x description. It plateaus at a₀′/γ instead of following the g_bar^½ slope, about 1.1 dex off at g_bar = 5×10⁻¹³.
- The derived γ = 2 and the ΔBIC +184 "falsification". It is moot because it was computed on a form with the same plateau, and the framing overstates the evidence.
- The a₀′ offset as a passed test of the form. Under the natural repair it reverses sign (g† ≈ 2.2×10⁻¹⁰).
- The √x repair at γ = 0.49, which misses by about +0.16 dex at x ≈ 10 and has a power-law Newtonian tail.
- Any physical content for "coherence" in the RAR fit alone.

**WOULD SETTLE (decisive evidence/test)**
- Print C(0.01) and C(100) from the fit code and identify the actual function and the definition of x. A value of C(0.01) ≈ 6×10⁻³ would mean the code differs from the formula.
- Binned low-g_bar slope (g_bar < 10⁻¹¹): 0 versus 0.5.
- Binned offsets at x ≈ 5–20 versus ν, with Υ★ marginalized and a galaxy-level bootstrap.
- Refit of the identified function with a₀′ tied to g†, compared against RMS 0.1437 dex using N_eff-aware errors.
- One non-RAR prediction with a sign and size where C and ν differ (morphology or surface-brightness residuals, external-field effect, lensing). Without it the contribution is a reparametrization.

HEADLINE: FAILED

--- CHALLENGER ---
## CHALLENGER closing artifact

**Caveat on my own numbers:** the residual table, the BIC rescaling, and the SPARC acceleration range were computed or recalled by me, not run on the program's code. I re-checked the arithmetic at x = 0.01, 1, and 10. The BIC rescaling is a heuristic: N_eff ≈ 150 is a rough galaxy count, not an estimated correlation structure.

**HELD (survives)**
- The bounded claim that some smooth two-parameter tanh-log interpolant can tie McGaugh's ν on the RAR mean relation. The data cannot tell interpolants apart at the ~0.13 dex scatter level.
- The Primary's up-front concessions: the derived γ = 2 is not supported, and the free fit earns no preference over ν.
- The Primary's self-flag of the low-x asymptote, which I independently reproduced: C ≈ γx gives g_obs → a₀′/γ ≈ 1.08×10⁻¹⁰, a plateau instead of slope 0.5.

**NARROWED (must be scoped)**
- The quoted record (γ = 0.49, a₀′ = 5.3×10⁻¹¹, RMS 0.1437, both ΔBIC values) cannot be attributed to the formula as written. It also fails under the √x repair at the same parameters:
  - The stated form misses ν by about +1.1 dex at x = 0.01, +0.17 at x = 1, and +0.03 at x = 10.
  - The √x repair misses by about +0.13 to +0.16 dex at x = 0.01, 1, and 10.
  - The √x repair also implies g† = a₀′/γ² ≈ 2.2×10⁻¹⁰, against a measured ≈ 1.2×10⁻¹⁰.
- The numbers may come from a third function or a differently defined x. Until the code is inspected, the claim reduces to "some function of this family, unspecified."
- The high-x test is better placed at x ≈ 5–20 than at x > 50. The x > 50 bin is probably sparse (unverified), and a +0.08 dex offset is degenerate with Υ★ shifts of ~20%.
- The ΔBIC values assume 2,807 independent points. With galaxy-level correlations they shrink to roughly +5 for both comparisons, so neither is decisive.
- The a₀′ ≈ g†/2.3 offset is a Υ★- and form-dependent nuisance. It is not a form-level prediction.

**FAILED (unsupported / overreach)**
- C(x) = tanh(γ ln(1+x)) as a description of the RAR at low x, which fails on arithmetic alone.
- The derived γ = 2, and the ΔBIC +184 "falsification" of it. That comparison is void, since it was computed on a function with the same flat plateau.
- The claim that the a₀′ offset is a test passed by the form. Under the natural repair it reverses sign.
- Any reading of the four-digit RMS tie with ν as evidence for "coherence." It is information about the data's insensitivity.
- No observable outside the RAR mean (morphology or surface-brightness residuals, external-field effect, lensing) was offered where C and ν differ in sign and size. The Primary effectively conceded that the content beyond the name is zero.

**WOULD SETTLE (decisive evidence/test)**
- Print C(0.01) and C(100) from the fit code. About 5×10⁻³ and 1 would match the stated formula. About 6×10⁻³ (the value needed to match ν) would show the code differs from the formula.
- Binned slope of log g_obs vs log g_bar for g_bar < 10⁻¹¹: 0 under the stated form, 0.5 under ν and the data.
- Binned mean log(g_obs/g_bar) at x ≈ 5–20, with a galaxy-level bootstrap and Υ★ marginalized: C-repair vs ν differ by ≈ 0.15 dex.
- Refit with N_eff-aware errors and Υ★ free, with a₀′ tied to γ and g† under any repair.
- A non-RAR prediction (e.g. residual dependence on surface brightness or an external field) with a stated sign and size.

HEADLINE: FAILED