# Topic: Chemistry Null Model Comparison

**Seeded:** 2026-05-10 (Maintainer)
**Priority:** HIGH
**Status:** Open

## The Question

The site's chemistry "validation" reports r=0.982 for sound velocity, r=0.979 for electronegativity, r=0.956 for atomic volume — all labeled "Validated." The relevant null model has never been computed.

**The issue:** Sound velocity, electronegativity, and atomic volume are all near-monotonic functions of atomic number Z (or atomic mass, or electron count). The null expectation for ANY smooth monotonic function of Z is r → 1 on the same dataset — by construction, not by physics. A polynomial fit in Z would likely achieve r ≥ 0.95 on most of these phenomena with no physical model at all.

## Why This Is Dispositive

If r(polynomial in Z) ≥ r(Synchronism C(ρ,γ)), then the chemistry correlations are evidence of density-monotonicity (known since Mendeleev), not of Synchronism specifically. The "89% validated" figure becomes "89% consistent with monotonic density scaling" — true but not a Synchronism-specific claim.

If r(Synchronism) >> r(polynomial), then the framework is doing something the null cannot do — and the "Validated" badges are defensible.

## The Computation

The executor track can run this directly:
1. Take the published chemistry correlation dataset (or a representative sample of 50+ phenomena)
2. Fit: (a) degree-2 polynomial in Z, (b) degree-3 polynomial in Z, (c) generic tanh with 2 free parameters (not Synchronism-specific)
3. Report r values for each
4. Compute Δr = r(Synchronism) - r(best null)
5. For the specific high-r cases (sound velocity, electronegativity, atomic volume): what is r(null)?

## Expected Outcome

Based on the monotonicity argument, Δr is probably small (< 0.02) for density-monotonic quantities. The honest conclusion would be: chemistry "validation" is density-monotonicity, not framework-specific. This would trigger a site-wide badge downgrade from "Validated" to "Reparametrization" for the high-r chemistry correlations.

## Why This Matters for the Research Program

If the chemistry evidence is vacuous, the main empirical support for the framework outside of galaxy rotation is gone. What remains:
- Galaxy rotation (MOND reparametrization — honest-assessment already says this)
- TEST-04a (failed by sign reversal — already documented)
- Entity criterion (untested — candidate prediction)

This would strengthen the honest case that the framework's value is methodological (A2ACW, open-notebook science), not empirical.

## Resources

- Research proposal: `/Synchronism/Research/proposals/chemistry_null_model_gap.md`
- Explorer topic: `chemistry-gamma-circularity.md` (related but distinct — that's about γ = 2/√N_corr self-correlation, not the null model)
- Site pages to update: `/honest-assessment`, `/gamma-boundary`, `/sound-velocity`, `/electronegativity`
