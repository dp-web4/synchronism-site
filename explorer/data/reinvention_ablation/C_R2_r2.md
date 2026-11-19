**Short answer:** I don't know of a published paper with this exact tanh/log form of C(ρ). Structurally, though, it is a known class of model, and the "emergent dark energy" claim doesn't hold up as stated.

**Where it sits in the literature**
- **Cardassian expansion** (Freese & Lewis 2002, Phys. Lett. B 540, 1, astro-ph/0201229). It sets H² = F(ρ_m) with no Λ, and the extra term is read as an effective dark component. Your H² = 8πGρ_m/(3C(ρ_m)) is a Cardassian-type model with a particular F. The citation details are from memory, so treat them as moderately certain.
- **Unified dark-matter and energy-density models**, such as the generalized Chaplygin gas (Kamenshchik, Moschella & Pasquier 2001, Phys. Lett. B 511, 265; Bento, Bertolami & Sen 2002, uncertain on details). These also generate acceleration from a function of density alone.
- **Running-G and running-Λ cosmologies** (Shapiro & Solà, various papers, uncertain on specific citations). These make G or Λ scale-dependent.
- **Varying-G ideas**, from Dirac and Brans–Dicke onward, are the conceptual ancestors of a density-dependent G.

**Problems with the claim itself**
1. **The calibration is tautological.** Writing H² = 8πGρ_m/(3C) and setting C₀ = Ω_m gives H₀² = 8πGρ_m0/(3Ω_m). That is just the definition of Ω_m, so reproducing H₀ is not a test.
2. **The "emergence" is a redefinition.** Any H(ρ_m) can be written as ρ_m/C by defining C = ρ_m/ρ_eff. Calling ρ_eff − ρ_m "dark energy" adds no content beyond the choice of C.
3. **A Λ is smuggled in.** As ρ → 0, C ≈ γρ/ρ_crit, so ρ_eff → ρ_crit/γ, a constant. This is a de Sitter asymptote set by the free parameters ρ_crit and γ, i.e. an effective cosmological constant in disguise. Fitting it to today's value just sets ρ_crit/γ.
4. **Consistency is not shown.** If ρ_m ∝ a⁻³, then ρ_eff = ρ_m/C does not obey standard continuity unless the Bianchi identity and energy exchange are handled. The acceleration equation and w_eff need to be derived from a covariant action, not assumed. Otherwise a ä equation inconsistent with the Friedmann one is easy to produce.
5. **Local constraints are an issue.** G_eff = G/C > G wherever ρ is low, which includes galaxies and the solar system. Depending on ρ_crit, this faces strong constraints, for example from Cassini and the lunar laser ranging bounds on varying G.

**Verdict:** the construction reduces to a Cardassian/modified-Friedmann model with a specific F(ρ). The tanh-log form may be unpublished, but I can't confirm that. The "no cosmological constant" claim is not supported, because the asymptotic constant ρ_crit/γ plays that role. To make it a real result, the program should derive the dynamics from an action, test against SN/BAO/CMB data (w(z), growth), and check local-gravity bounds.