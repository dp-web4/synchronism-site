**Short answer:** I don't think this exact functional form is published, but the construction is a special case of known frameworks and is not new in structure.

**What it reduces to**
- The Friedmann equation is H² = (8πG/3)·F(ρ_m) with F = ρ_m/C(ρ_m). Any modification of this type, where the expansion rate depends only on ρ_m and no Λ is included, is the **Cardassian expansion** class: Freese & Lewis, Phys. Lett. B 540, 1 (2002), astro-ph/0201229. Cardassian models use H² = (8πG/3)(ρ + Bρⁿ), and generalizations use arbitrary F(ρ). The tanh-log C(ρ) is just a particular choice of F.
- Reading the same thing as a density-dependent G puts it in the broader literature on varying G and on screened or running-coupling gravity (Brans–Dicke, chameleon-type models, "running G" proposals by Bertolami, Shapiro and others). I can't point to a specific paper that uses a tanh(γ ln(1+ρ/ρ_c)) form, and I can't confirm that none exists (uncertain).

**Problems with the claim of "emergence from coherence"**
1. **The H₀ match is a tautology.** Setting C₀ = Ω_m gives ρ_m0/C₀ = ρ_crit,0 by definition of Ω_m in a flat universe. This is a normalization and not a test.
2. **A cosmological constant is hidden in the parameters.** For ρ → 0, C ≈ γρ/ρ_crit, so ρ_eff → ρ_crit/γ, a constant. The late-time limit is de Sitter with Λ_eff = 8πGρ_crit/γ. The program has traded Λ for the parameter pair (ρ_crit, γ), and it must explain why that combination equals the observed dark-energy scale.
3. **ρ_DE is not an independent component.** ρ_DE = ρ_m(1−C)/C is just ρ_eff − ρ_m, a redefinition. Any H(ρ_m) can be written this way by choosing C.
4. **Gravity is stronger in low-density regions.** G_eff = G/C > G where C < 1. This needs checking against solar-system, laboratory and void or structure-growth constraints, and against what "ρ" means locally versus as the cosmic mean.
5. **No covariant derivation is given.** Putting a ρ-dependent G into the Friedmann equation by hand does not specify the field equations. Bianchi-identity consistency requires an action or an explicit extra field, and perturbations (growth, ISW, lensing) are undefined without one.
6. **The expansion history needs a fit.** With F(ρ) = ρ_m/C, the effective w(z) and the distance-redshift relation must be compared to SN, BAO and CMB data. This is the same test Cardassian models faced, and the simplest versions were strongly constrained.

**Recommendation:** Cite Freese & Lewis (2002) as the structural precedent. Present the model as a Cardassian-type F(ρ_m) with a specific interpolating function, and not as dark energy arising without a cosmological constant. Check the literature on density-dependent or running G for any prior tanh/log interpolation (uncertain).