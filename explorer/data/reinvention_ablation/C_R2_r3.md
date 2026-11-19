**Short answer:** I don't know of a published model with this exact C(ρ) = tanh(γ ln(1+ρ/ρ_crit)). The structure is not new, though, and it reduces to a known class.

**What it reduces to**
- Writing H² = (8πG/3)·ρ_m/C(ρ_m) is the same as H² = (8πG/3)·F(ρ_m) with F = ρ_m/C. This is a **modified Friedmann equation in which the matter density alone drives the expansion**. The "dark energy" is just F(ρ_m) − ρ_m.
- The closest published family is **Cardassian expansion**: Freese & Lewis, Phys. Lett. B 540, 1 (2002), astro-ph/0201229. It has H² = (8πG/3)(ρ + Bρⁿ) with no Λ and no dark energy component. Your F(ρ) is a different functional form of the same idea.
- Related precedents are DGP gravity (Deffayet, Dvali & Gabadadze, PRD 65, 044023, 2002) and Chaplygin-gas unified dark matter (Kamenshchik, Moschella & Pasquier, PLB 511, 265, 2001). These are loose analogues, not special cases. Density-dependent or variable G also appears in Brans–Dicke-type and screening (chameleon) literature, though with different dynamics. I'm moderately confident in these citations. Treat the page and volume numbers as uncertain.

**Problems with the "emergence" claim**
1. **The calibration is a tautology.** Setting C₀ = Ω_m gives H₀² = 8πGρ_m0/(3Ω_m), which is just the definition of Ω_m. Reproducing H₀ "exactly" is not a test. The real tests are the shape of H(z), distances, growth, and the CMB.
2. **A hidden cosmological constant appears at late times.** For ρ ≪ ρ_crit, C ≈ γρ/ρ_crit, so ρ_eff → ρ_crit/γ, a constant. The model has a de Sitter asymptote, with ρ_crit/γ playing the role of Λ. This is an effective Λ, not an absence of one.
3. **Consistency with the Bianchi identity.** If G varies with ρ, the Einstein equations require the effective source to be conserved, or extra terms must appear. With ρ_m ∝ a⁻³ and ρ_eff = ρ_m/C, ρ_eff is generally not conserved. The covariant origin of G(ρ) therefore needs to be specified. This is a known problem for such models.
4. **C does not reach 1 at finite density.** tanh(γ ln(1+x)) → 1 only as x → ∞. The high-density limit is therefore approached only asymptotically, and any early-universe constraints (BBN, CMB) need checking.
5. **Local gravity.** Solar-system and galactic densities are far above the cosmic mean. Whether C ≈ 1 there depends on ρ_crit, and this needs to be shown.

**Verdict:** I believe the specific tanh–log coherence function is unpublished. The mechanism is a known type of modified-Friedmann model (Cardassian-like), and I'm not aware of any published confirmation of it. A literature search for "density-dependent G" and "Cardassian" is advisable before claiming novelty.