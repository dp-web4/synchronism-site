--- PRIMARY ---
# PRIMARY, Round 1

**Bounded claim.** The construction is a one-function phenomenological closure of the background expansion. It makes no claim about local gravity or perturbations yet.

- **Setup:** ρ ≡ mean matter density, with ρ_m = ρ_m0(1+z)³ and matter separately conserved.
- **Friedmann equation:** H² = 8πGρ_m/(3C(ρ_m)).
- **Parameters:** γ and ρ_crit, with one relation between them, C(ρ_m0) = Ω_m = 0.3. This leaves **one free parameter, γ**, and no Λ.

**Concession up front.** "Reproduces H₀ exactly" is an identity, not a test. Since ρ_m0 = Ω_m ρ_c0, setting C₀ = Ω_m gives ρ_m0/C₀ = ρ_c0 by definition. The content lies in the *shape* of H(z).

**Operational variables and derived results** (my derivation, so please check it):

- Define ρ_DE ≡ ρ_m(1−C)/C. Continuity of the total effective fluid gives w_tot = −d ln C/d ln ρ.
- With matter conserved, w_DE = −(d ln C/d ln ρ)/(1−C).
- **Late-time limit:** as ρ→0, C ≈ γρ/ρ_crit, so ρ_eff → ρ_crit/γ. This is an emergent de Sitter attractor with w_DE → −1.
- **Early-time limit:** 1−C ≈ 2(1+x)^(−2γ) with x = ρ/ρ_crit, so ρ_DE/ρ_m → 0 as a power law in (1+z). Early-universe physics is standard, and w_DE → −2γ.
- **Today:** C₀ = 0.3 gives u₀ = atanh(0.3) = 0.3095 and x₀ = e^(u₀/γ) − 1. This yields:

| γ | w_DE(0) |
|---|---|
| 0.5 | ≈ −1.00 |
| 1 | ≈ −1.15 |
| γ→∞ | → −1.34 (floor) |
| γ→0 | → 0 |

**Falsifiable consequences** (flat, Ω_m = C₀, no extra freedom):

1. **Bound:** w_DE(0) ∈ (−1.34, 0) for every γ. A robust measurement of w₀ < −1.34 at Ω_m = 0.3 kills the model.
2. **Sign correlation (the sharpest test):** w_DE approaches −1 monotonically from the side set by γ ≶ 0.5.
   - For γ > 0.5, w goes from −2γ in the past to −1 in the future, so (1+w₀) < 0 and w_a < 0.
   - For γ < 0.5, w rises from −2γ to a w₀ above −1, so (1+w₀) > 0 and w_a > 0.
   - In CPL language, **(1+w₀) and w_a must have the same sign**. The quadrant w₀ > −1, w_a < 0 is excluded. That is the region some recent BAO+SNe+CMB combinations have favored, so this is a real exposure.

   The asymptotics are analytic. Monotonicity in the intermediate range I would verify numerically, and I flag it as unverified.
3. **No phantom pathology:** the effective w < −1 for γ > 0.5 arises without a ghost field, because ρ_DE is not an independent degree of freedom.

**Known open flanks** (stated now so they don't surprise us):

- **Local density vs. cosmic mean:** G/C(ρ) is only defined here for the cosmic mean. If ρ is local, voids (ρ < ρ_m) would show enhanced G_eff, which is a separate and more dangerous prediction. I am deliberately excluding it from the bounded claim.
- **Perturbation sector:** growth (fσ₈) is not specified. Without a rule for G_eff in δ̈ + 2Hδ̇ = 4πG_eff ρδ, the model is untestable against growth data. This is a gap, not a result.
- **Covariance:** no action or field equation yet. The closure is consistent at the background level only.

**Questions for the Challenger:**

1. Do you accept that the same-sign (1+w₀), w_a relation is a genuine parameter-free discriminator, or do you see a way the closure can escape it without adding parameters?
2. Which is the more damaging gap: the absence of a covariant origin, or the unspecified perturbation rule?

**Status:**
- **Held:** one-parameter background closure; emergent de Sitter limit; w_DE formula; the sign-correlation prediction (analytically at the asymptotes).
- **Narrowed:** scope restricted to the homogeneous background with mean-density ρ; "H₀ reproduced" demoted to an identity.
- **Failed:** nothing yet conceded beyond the H₀ tautology.
- **Would settle:** a fit of H(z) to BAO+SNe+CMB with γ the only free parameter, checking the w₀ bound and the sign correlation. Also a stated rule for G_eff in perturbations, to test fσ₈.

--- CHALLENGER ---
# CHALLENGER, Round 2

**Answers to your questions.**
1. Yes, the same-sign (1+w₀), w_a relation is a real discriminator. I rechecked your w_DE = w_tot/(1−C) and the table values (γ=1: −1.152; γ→∞: −1.341), and they hold. Two caveats:
   - The floor depends on Ω_m. It is exactly atanh(C₀)(1+C₀)/C₀, so it is about −1.32 at Ω_m=0.28 and −1.41 at 0.35, not a fixed −1.34.
   - I have only checked the endpoints for monotonicity, not the interior.
2. Neither of your two gaps is the most damaging, because they share one root: what "ρ" is. The mean/local ambiguity feeds both the perturbation rule and the covariant origin.

**Main finding: γ = 1/2 is exactly ΛCDM.**

For γ=½, C = tanh(½ ln(1+x)) = x/(2+x), with x = ρ/ρ_crit. Then ρ_eff = ρ_m/C = ρ_m + 2ρ_crit. This is ΛCDM exactly, with ρ_Λ = 2ρ_crit, and it matches your w_DE(0) ≈ −1 at γ=0.5. Consequences:

- **"No cosmological constant" is a rename at γ=½.** The late-time attractor ρ_crit/γ is a dimensionful constant put in by hand. It must be about 10⁻³⁰ g/cm³, which is the same magnitude as ρ_Λ. The coincidence problem (why ρ_crit ≈ ρ_m0) is reparametrized, not solved.
- **The model is ΛCDM plus one deformation parameter, δ = γ−½.** All of its distinctive content lives in δ.
- **"Dark energy from coherence" is not derived.** Nothing here explains why C is a tanh of a log, or why the scale ρ_crit takes its value.

**Quantitative check: the shape of H(z) at fixed Ω_m=0.3.**

At z=0.5, γ=1 gives x=1.224, C=0.664, E²=1.526, so E=1.235. ΛCDM gives E=1.309. That is a **5.6% deficit in H(z=0.5)**, against roughly 1% BAO precision. So γ=1 is excluded at fixed Ω_m. Refitting Ω_m can absorb some of this, but then the "C₀=Ω_m identity" fixes the other end, and the freedom is limited.

A rough linear scaling (not computed) suggests |γ−½| ≲ 0.1. Data then force the model to sit within a small neighbourhood of ΛCDM. At that point:
- the sign-correlation test is an extremely thin discriminator, with w₀+1 and w_a both O(δ);
- the model's predictions are nearly degenerate with ΛCDM, so it is not distinguishable from "ΛCDM with a renamed Λ."

**Hidden premises to state explicitly:**

1. **Radiation and the choice of ρ.** Does C act on ρ_m alone or on ρ_m+ρ_r? Early on it doesn't matter, but the definition of ρ_DE does depend on the choice, and so does the neutrino/BBN era.
2. **Dark matter is still assumed.** Ω_m=0.3 is mostly CDM. "No dark sector" is not claimed, but the framing "emerges with no Λ" invites that reading. Please scope it.
3. **w_DE is a decomposition artifact.** The phantom behavior for γ>½ comes from subtracting a conserved ρ_m from ρ_eff. Comparing w₀/w_a to data requires the same ρ_m ∝ (1+z)³ assumption that fit analyses use, which is fine, but it means "no ghost" is trivially true and carries no evidential weight.
4. **Local density.** Taking ρ literally as local density, with γ=1, a void at 0.2ρ_m0 has C≈0.07 and G_eff ≈ 15G. For γ≈½, x/(2+x) gives a similar enhancement. This is not a side issue. It is a direct falsifier of any local reading, so the model must say ρ is the cosmic mean and explain why gravity sees a global average.

**Falsifier I'd propose:** if the best-fit γ from joint BAO+SNe+CMB is consistent with ½ within errors, the construction has no content beyond ΛCDM. Conversely, a best fit with γ≠½ and the correct sign correlation would be real evidence. The DESI-favored quadrant (w₀>−1, w_a<0) is excluded, as you note.

**Questions (max 2):**
1. Given γ=½ reproduces ΛCDM exactly with ρ_Λ=2ρ_crit, what principle selects γ, and what predicts ρ_crit ≈ 10⁻³⁰ g/cm³ rather than inserting it?
2. Is ρ in C(ρ) the cosmic mean only, and if so, what mechanism makes G_eff depend on a global average rather than local density?

**Status:**
- **Held:** w_DE formula, asymptotic limits, w₀ floor (Ω_m-dependent), exclusion of the DESI-like quadrant.
- **Narrowed:** the claim "no Λ" shrinks to "Λ reparametrized as ρ_crit" at γ=½, with δ=γ−½ the only genuinely new content. Data likely confine |δ| to small values.
- **Failed:** γ=1 at fixed Ω_m=0.3 (5.6% H deficit at z=0.5). "Emergence from coherence" is not derived.
- **Would settle:** a joint BAO+SNe+CMB fit for γ and Ω_m, reporting whether γ−½ is nonzero; a derivation of ρ_crit and γ from a principle; a stated rule for ρ in perturbations.

--- PRIMARY ---
# PRIMARY, Round 3

**Conceded outright**
- **γ=½ is exactly ΛCDM.** I checked C = x/(2+x), so ρ_m/C = ρ_m + 2ρ_crit. My table entry "w_DE ≈ −1.00 at γ=0.5" was this fact and I should have flagged it.
- **"No cosmological constant" is false at γ=½.** It is a rename, ρ_Λ = 2ρ_crit. The coincidence problem is only relocated: C₀ = 0.3 gives x₀ = 6/7, so ρ_crit ≈ 1.17 ρ_m0.
- **The 5.6% deficit at z=0.5 for γ=1, Ω_m=0.3 reproduces.** I get E=1.235 against 1.309.
- **"Dark energy from coherence" is not derived.** The tanh-of-log form is an ansatz.
- **The w₀ floor depends on Ω_m.** Your formula is correct.
- **"No ghost" carries no evidential weight.** ρ_DE is defined by subtraction, so w_DE is a CPL projection of E(z). The real object is the family E(z; γ, Ω_m).

**Direct answers**
1. **What selects γ, and what predicts ρ_crit?** Nothing does. Both are inserted. The program owes a derivation, and until it has one, γ and ρ_crit are fit parameters. Because C₀ = Ω_m only fixes ρ_crit in terms of γ and Ω_m, the real parameter count is (γ, Ω_m) against ΛCDM's Ω_m.
2. **Is ρ the cosmic mean only?** Yes, and I restrict the claim to that. The local reading is falsified on its face. At γ=1, a void at 0.2ρ_m0 has C ≈ 0.07, so G_eff ≈ 14G. I have no mechanism that makes gravity see a global average. That is an open, possibly fatal gap for any claim beyond the background.

**Narrowed claim.** The construction is a one-parameter deformation of ΛCDM, E²(z) = Ω_m(1+z)³/C(ρ_m(z)), with δ = γ−½ as its only new content. Radiation is added standardly and C acts on ρ_m only. At recombination, 1−C ~ 2x^(−2γ) is about 10⁻⁹ for γ≈½, so the CMB is untouched.

**Your |δ| ≲ 0.1 estimate.** The linear scaling is plausible. Refitting Ω_m and H₀ will loosen it somewhat, so I expect |δ| ≲ 0.1–0.2. Neither bound is computed, so both stay provisional.

**One testable prediction (structure fixed, number not yet computed)**
- **Perturbation rule:** take C to act on the background only, with G unmodified in δ̈ + 2Hδ̇ = 4πGρ_mδ. This is the minimal choice, and it gives growth a parameter-free prediction once (γ, Ω_m) are fixed from E(z).
- **Linear relations at small δ:** (1+w₀) and w_a are both linear in δ. Their ratio w_a/(1+w₀) is therefore a pure function of Ω_m. I have not computed it, and I'd flag it as the next derivation.
- **Falsifiers:**
  - A BAO+SNe+CMB fit with w₀ > −1, w_a < 0 at more than 2σ excludes the family.
  - A fit consistent with δ=0 means no content beyond ΛCDM.
  - A fit with δ≠0 but a ratio w_a/(1+w₀) disagreeing with the predicted function of Ω_m also excludes the family.
  - Growth: if the fitted δ≠0, then fσ₈ with unmodified G must match that fit. A mismatch excludes the minimal perturbation rule.

**Questions for the Challenger**
1. Is "ΛCDM plus a one-parameter deformation with a fixed w_a/(1+w₀) relation" a legitimate falsifiable object, or does the missing derivation of γ disqualify it as physics rather than curve-fitting?
2. Can you give a case where the minimal perturbation rule (G unmodified) fails independently of the background fit?

**Status**
- **Held:** E(z) family; w_tot and w_DE formulas; the same-sign relation as a structural prediction; the cosmic-mean restriction as a consistent scope.
- **Narrowed:** the claim is now a one-parameter deformation of ΛCDM. γ=½ is ΛCDM, ρ_crit plays Λ's role, and the claim covers the background plus minimal-G growth.
- **Failed:** "no Λ" at γ=½; emergence from coherence; any local-density reading; γ=1 at fixed Ω_m=0.3; the ghost-free argument as evidence.
- **Would settle:** a joint BAO+SNe+CMB fit for (γ, Ω_m) reporting δ and its sign; the computed w_a/(1+w₀)(Ω_m) relation; fσ₈ under the minimal rule; a derivation of the tanh-log form and ρ_crit.

--- CHALLENGER ---
# CHALLENGER, Round 4 (final stress)

**Where it holds.** I accept the narrowed object: E²(z) = Ω_m(1+z)³/C(ρ_m), a ΛCDM deformation with δ = γ−½ as its only new content. The quadrant exclusion (w₀>−1, w_a<0) also holds. For γ>½, w_DE approaches −1 from below. For γ<½ it approaches from above, with w_a>0. Neither case can cross −1 or fit a DESI-like w(z).

**Failure 1: the ratio w_a/(1+w₀) is not parameter-free.**
- You call it "a pure function of Ω_m." But w_DE(a) from this closure is not CPL-shaped. It runs from −2γ at early times to the de Sitter value −1 at late times, with a transition fixed by x(z).
- (w₀, w_a) are therefore properties of a CPL *projection*, and that projection depends on the redshift window, the weighting, and the dataset.
- The ratio is a function of Ω_m *and* the analysis choice. As a test it is weaker than you claim.
- The clean falsifier is the shape of E(z) directly, with one fitted δ.
- I have not computed this ratio. This is a structural objection, not a numerical one.

**Failure 2: "minimal perturbation rule" is internally inconsistent.**
- You keep G unmodified in δ̈ + 2Hδ̇ = 4πGρ_mδ, but the background H uses C(ρ_m).
- The separate-universe argument says an overdense patch is its own FRW universe with its own ρ_m. Applying your closure there gives H_patch² = 8πGρ_patch/(3C(ρ_patch)), so the patch feels a different effective gravity.
- You cannot apply C(ρ_m) to the background and then switch it off for perturbations. Either C acts on every patch's density, which modifies growth, or it acts on no patch, in which case the closure is just a fitting function for a smooth component.
- Relatedly, ρ_DE = ρ_m(1−C)/C is a function of ρ_m, so δρ_DE = (dρ_DE/dρ_m)δρ_m ≠ 0. A "smooth" dark component is not available.
- The sound speed and clustering of the effective fluid are therefore *predicted*, not free, and they are unspecified. This is a failure independent of the background fit, and it answers your question 2.

**Failure 3: the local reading fails even at γ=½.**
- At γ=½ the background is exactly ΛCDM, yet C = x/(2+x) gives a void at 0.2ρ_m0 (x≈0.23) C≈0.10, so G_eff≈10G.
- The model cannot be "ΛCDM-equivalent" and also use local density. Only the mean-density reading survives, and it has no mechanism.
- Dense regions are safe. At galactic density 1−C ~ 10⁻⁵ or less, and solar-system values are negligible.
- The danger is confined to voids. That is where the model is most exposed, and where it is also most testable (void lensing, void-profile growth).

**Failure 4: the data test is lopsided.**
- The sign-correlation prediction only bites if |δ| is large enough to measure. If |δ| ≲ 0.1, then w₀+1 and w_a are O(0.1) at most, and current data cannot separate them from ΛCDM.
- Even a "γ≠½ detection" would need the same CPL projection noted in Failure 1.

**What reverses the conclusion.**
- *Toward real content:* a fit giving δ≠0 at >3σ with the right E(z) shape, and a covariant derivation that fixes both the perturbation rule and the form of C.
- *Toward ΛCDM-in-disguise:* δ consistent with 0.
- *Toward falsified:* w₀>−1 with w_a<0 at >2σ, or void/separate-universe growth that contradicts the closure.

**Verdict on "dark energy emerges from coherence."** Not supported. The background is a reparametrized Λ with a one-parameter deformation. The "coherence" interpretation, the form of C, γ, and ρ_crit are all inserted, and no perturbation or covariant sector exists to test them.

**Questions (max 2):**
1. If C acts on each patch's density, what modified growth equation does the model predict? Without it, the "minimal rule" is not a prediction.
2. Is ρ_crit ≈ 1.17ρ_m0 a prediction of anything, or the same coincidence as ρ_Λ≈ρ_m0 under a new name?

**Status:**
- **Held:** the E(z) family; the quadrant exclusion; the w₀ floor (Ω_m-dependent); the cosmic-mean scope as a consistent but unmotivated restriction.
- **Narrowed:** the testable content is the E(z) shape at small δ. The CPL ratio is analysis-dependent. The growth rule must be derived, not chosen.
- **Failed:** "no Λ" at γ=½; the "emergent from coherence" claim; the minimal perturbation rule (separate-universe inconsistency); the parameter-free status of w_a/(1+w₀); any local-density reading.
- **Would settle:** a joint BAO+SNe+CMB fit for δ; a modified-growth derivation from separate-universe C(ρ_patch); void-profile or lensing data; a first-principles origin for tanh(γ ln(1+ρ/ρ_crit)) and ρ_crit.

--- PRIMARY ---
# PRIMARY, Round 5 (closing)

**Concessions and one repair**
- **Failure 1 (CPL ratio):** conceded. w_a/(1+w₀) depends on the CPL projection, so I drop it as a test. The clean object is E²(z) = E²_ΛCDM + δ·f(z; Ω_m) at small δ. That is a single fixed shape with one amplitude, which is what should be fitted directly.
- **Failure 2 (separate universe):** conceded. "Minimal G" is withdrawn because it is inconsistent. The rule must be derived. If C acts on each patch, the patch obeys H_p² = (8πG/3)ρ_eff(ρ_p) with ρ_eff = ρ/C.
- **Failure 3 (voids):** partly rebutted. At γ=½, ρ_eff = ρ + 2ρ_crit, so a void patch is exactly a ΛCDM patch with no enhancement, and growth is exactly ΛCDM. The "G_eff ≈ 10G" figure comes from reading G/C as a force-law rescaling. The Friedmann closure fixes only ρ_eff(ρ), not 1/C alone, so that language should be dropped. The void problem therefore reduces to O(δ) deviations in dρ_eff/dρ. That is a computable prediction, but I have not computed it and no covariant origin supports it.
- **Question 2 (ρ_crit):** it is not a prediction. ρ_crit ≈ 1.17ρ_m0 is the old Λ coincidence under a new name.

**Answer to Question 1.** The structure is dρ_eff/dρ = (1/C)(1 − dlnC/dlnρ), together with the effective pressure p_eff = w_tot·ρ_eff, so growth is modified only through terms that vanish at δ=0. The coefficient is uncomputed. It is a derivation task, not a result.

---

## HELD (survives)
- E²(z) = Ω_m(1+z)³/C(ρ_m) is a well-defined one-extra-parameter family, (γ, Ω_m) against ΛCDM's Ω_m.
- γ=½ is exactly ΛCDM at the background level. Under the separate-universe reading it is also exact for growth.
- The w_tot and w_DE formulas, the asymptotics (w_DE → −2γ early, → −1 late), and the Ω_m-dependent floor on w₀ all stand.
- The quadrant (w₀>−1, w_a<0) is excluded. This is robust, but only as a statement about the E(z) shape.
- Early-time physics is untouched, since 1−C is ~10⁻⁹ at recombination for γ≈½.

## NARROWED (must be scoped)
- The claim is a ΛCDM deformation with δ = γ−½ as its only new content. It is not "dark energy without Λ."
- ρ is the cosmic mean or the separate-universe patch density. It is never a local-force density, and G_eff = G/C should be retired in favour of ρ_eff(ρ).
- Dark matter is assumed, and C acts on ρ_m only, with radiation added standardly.
- The testable content is the E(z) shape at fitted δ. The data likely confine |δ| to ≲0.1–0.2, which is uncomputed, and the CPL quantities (w₀, w_a) are analysis-dependent projections.
- The perturbation rule must be derived from separate-universe ρ_eff(ρ_patch). It cannot be chosen.
- Whether deviations at δ≠0 are detectable depends on the data, so the test is likely weak.

## FAILED (unsupported / overreach)
- "No cosmological constant": ρ_Λ = 2ρ_crit at γ=½.
- "Dark energy emerges from coherence": the tanh-log form, γ, and ρ_crit are all inserted.
- γ=1 at fixed Ω_m=0.3: 5.6% deficit in H(z=0.5).
- "H₀ reproduced" as evidence: it is an identity.
- "No ghost" as an advantage: ρ_DE is defined by subtraction.
- The parameter-free status of w_a/(1+w₀).
- "Minimal G" perturbations: inconsistent with the separate-universe picture.
- Any local-density, force-law reading of G/C.
- ρ_crit ≈ 1.17ρ_m0 as anything but the coincidence problem renamed.

## WOULD SETTLE (decisive evidence/test)
- A joint BAO+SNe+CMB fit of E(z) for (γ, Ω_m). The outcomes:
  - δ consistent with 0: no content beyond ΛCDM.
  - δ≠0 at >3σ with the predicted shape f(z; Ω_m): real evidence.
  - w₀>−1 with w_a<0 at >2σ: family excluded.
- The linear growth equation from separate-universe ρ_eff(ρ_patch), tested against fσ₈ and void-profile or lensing data at the fitted δ.
- A first-principles derivation of the tanh(γ ln(1+ρ/ρ_crit)) form and of ρ_crit. Without it the model stays a fitting family.

**HEADLINE: NARROWED**

--- CHALLENGER ---
# CHALLENGER, Closing Artifact

## HELD (survives)
- **The background family E²(z) = Ω_m(1+z)³/C(ρ_m).** It is a well-defined one-parameter deformation of ΛCDM in δ = γ−½, with ρ_m conserved and radiation added standardly.
- **The w_tot and w_DE formulas** and their asymptotics: w_DE → −2γ early and → −1 late (de Sitter attractor).
- **The quadrant exclusion.** The region w₀>−1, w_a<0 is not reachable, and w(z) cannot cross −1. This is a structural prediction, though it is weak when |δ| is small.
- **The Ω_m-dependent floor on w₀** at large γ: atanh(C₀)(1+C₀)/C₀ ≈ −1.34 at Ω_m=0.3.
- **Early-universe safety.** At recombination 1−C is about 10⁻⁹ for γ≈½, so the CMB sector is untouched.
- **Galactic and solar-system safety** if ρ is read locally in dense regions, where 1−C is of order 10⁻⁵ or smaller.

## NARROWED (must be scoped)
- **The claim is "ΛCDM plus one deformation δ=γ−½."** At γ=½ the model is exactly ΛCDM, with ρ_Λ = 2ρ_crit. Only δ carries new content.
- **"H₀ reproduced" is an identity**, not a test. The test is the shape of E(z).
- **The parameter count is (γ, Ω_m)** against ΛCDM's Ω_m. ρ_crit is fixed by C₀=Ω_m.
- **The data likely confine |δ| to roughly 0.1–0.2.** This is a linear estimate and has not been computed, so it stays provisional.
- **w_a/(1+w₀) is analysis-dependent.** The model's w(z) is not CPL-shaped, so the ratio depends on the redshift window and dataset. The clean test is a direct fit of E(z) for δ.
- **The cosmic-mean reading of ρ is the only one that survives.** It is unmotivated and has no mechanism.
- **Dark matter is still assumed.** Ω_m≈0.3 is mostly CDM. The claim concerns only the Λ-like component.
- **w_DE and "no ghost" are decomposition artifacts**, because ρ_DE is defined by subtraction. They carry no evidential weight.

## FAILED (unsupported / overreach)
- **"No cosmological constant" and "dark energy emerges from coherence."** At γ=½ this is a rename of Λ. The coincidence ρ_crit ≈ 1.17ρ_m0 is the old ρ_Λ≈ρ_m0 coincidence under a new name. The tanh-of-log form, γ, and ρ_crit are all inserted, not derived.
- **γ=1 at fixed Ω_m=0.3.** It gives a 5.6% deficit in H(z=0.5) (E=1.235 against 1.309), which is excluded by BAO.
- **The "minimal perturbation rule" (G unmodified in growth).** It is inconsistent with the background closure. Under separate-universe logic, C acts on each patch's density, which modifies growth. Also, ρ_DE depends on ρ_m, so δρ_DE ≠ 0 and a smooth dark component is not available.
- **Any local-density reading.** Even at γ=½, where the background equals ΛCDM, a void at 0.2ρ_m0 has C≈0.10 and G_eff≈10G. This is unobserved, and it is the model's most exposed flank.
- **The ratio w_a/(1+w₀) as a parameter-free prediction.**

## WOULD SETTLE (decisive evidence/test)
- **A joint BAO+SNe+CMB fit of E(z) for (γ, Ω_m)** that reports δ and its significance:
  - δ consistent with 0 means ΛCDM in disguise.
  - δ≠0 at more than 3σ with the right E(z) shape is real content.
  - A preference for w₀>−1 with w_a<0 at more than 2σ falsifies the family.
- **A derived modified growth equation** from C(ρ_patch), including the clustering and sound speed of the effective component, tested against fσ₈, weak lensing, and ISW.
- **Void tests.** Void-profile lensing and void growth would directly test any local or patch-density dependence of G_eff.
- **A first-principles derivation** of the tanh(γ ln(1+ρ/ρ_crit)) form, of γ, and of ρ_crit, together with a covariant action or field equation. The derivation would also have to explain why gravity responds to a mean density.

HEADLINE: NARROWED