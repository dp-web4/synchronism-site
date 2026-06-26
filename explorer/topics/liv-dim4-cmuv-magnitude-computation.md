# Topic: Compute the Dim-4 c_μν Bound Implied by Discrete-Substrate Preferred Frame

**Priority**: HIGH
**Seeded by**: Maintainer 2026-06-26
**Research context**: Phase-13 (2026-06-23) + Phase-16 (2026-06-24) in PREDICTIONS.md B7 ledger;
`liv-preferred-frame-leak-seals-but-site-overclaims-symmetry-protection.md` (explorer finding);
`liv_dim4_preferred_frame_refutation_exposure.md` (Synchronism research proposal)

## The Open Question

Phase-13 established a structural obligation: the framework's absolute-time / universal-clock commitment
gives up boost invariance, which is the only custodial symmetry that could forbid radiative generation
of dim-4 LIV (SME c_μν coefficients) from the Planck sector.

The Collins–Perez–Sudarsky–Gambini–Pullin theorem (*PRL* 93, 191301, 2004) says: for any Lorentz-violating
QFT coupled to matter at the Planck scale, SM matter at low energy acquires dim-4 LIV coefficients at
O(α/π) ≈ 10⁻³. Combined with the current cavity-MM bound |c_μν| ≲ 10⁻¹⁸, this gives an upper bound
of ~10⁻¹⁸/10⁻³ = ~10⁻¹⁵ on the Planck-sector LIV coefficient before fine-tuning enters.

**The open computation**: Given the framework's lattice dispersion ω² = m² + 2c²(1−cos ka) and its
preferred frame, what is the tree-level dim-4 LIV coefficient c_μν for photons? For electrons?

## Why It Matters

The `/for-researchers` page now states the dim-4 face is "refutation-exposed (magnitude uncomputed)."
A computation would either:
- **Confirm refutation**: if the predicted c_μν exceeds ~10⁻¹⁸, the framework is already excluded
  by existing terrestrial cavity experiments (the "most precise null experiments in physics")
- **Narrow the fine-tuning requirement**: if the framework's emergent-Lorentz mechanism suppresses
  dim-4 LIV by a known factor, quantify the residual tension
- **Open a custodial mechanism question**: does the framework's N≫1 emergent-Lorentz pattern act as
  an *effective* custodial symmetry (even if not a symmetry of the action)?

## Concrete Steps

1. **Read Collins et al. (2004)** — the percolation calculation is explicit; estimate the coefficient
   for the Synchronism dispersion relation specifically

2. **Compute the tree-level c_μν** for photons: ω² = m² + 2c²(1−cos ka). At small k:
   ω² ≈ c²k² + c²(ka)²/12 + ... → c_LIV ≈ (c²a²/12)k². This is a k²-suppressed (dim-6)
   correction at tree level. **Key question: does the preferred frame generate a k⁰ (dim-4) term?**
   A preferred frame means the dispersion is frame-dependent → Lorentz boost of ω=ck gives
   ω'² = (γ(ω−βk))² ≠ ω² → an anisotropic dim-4 contribution of order β × c_LIV_tree.

3. **Estimate the loop contribution** using Collins et al.: for a theory with Planck-scale LIV at dim-5/6,
   the dim-4 contribution is O(α_SM × Λ²_LIV/M²_Pl). At Λ_LIV = M_Pl (Planck-scale discreteness),
   this is O(α_SM) ≈ 10⁻³ before any suppression from the propagator structure.

4. **Check against the SME Data Tables**: Kostelecký & Russell, currently at arXiv:0801.0287 (2024 update)

## Expected Outcome

The framework is in one of three states:
- **Already refuted**: tree-level or loop dim-4 c_μν above 10⁻¹⁸ with no custodial mechanism
- **Fine-tuned**: mechanism suppresses loop contributions but requires (currently unjustified) cancellations
- **Escaped via emergent Lorentz**: N≫1 phase cancels dim-4 LIV — if so, quantify the suppression
  and document explicitly (this would be a genuine positive contribution of the model)

Any outcome is more honest and citable than "refutation-exposed (magnitude uncomputed)."

## Related Findings
- `explorer/findings/liv-preferred-frame-leak-seals-but-site-overclaims-symmetry-protection.md`
- `Synchronism/Research/proposals/liv_dim4_preferred_frame_refutation_exposure.md`
- PREDICTIONS.md B7 Phase-12/13/16
