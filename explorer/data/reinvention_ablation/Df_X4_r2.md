I found no published source for this formula. I can't confirm it is new, because two searches are a thin basis for that.

**What I searched.** One search used the formula itself with "correlated ions" and "coherence volume". The other used McMillan, Allen–Dynes and tanh closed forms. Neither returned a tanh-saturating T_c, a γ = 2/√N_corr factor, or an "N_corr ions per coherence volume" construction.

**What the literature does have.**
- McMillan (1968) and Allen–Dynes (Phys. Rev. B 12, 905, 1975) give T_c ∝ (Θ_D or ω_log)·exp[−f(λ, μ*)]. The prefactor is Θ_D/1.45 in McMillan and ω_log/1.2 in Allen–Dynes. Both forms include the Coulomb pseudopotential μ*. These are the standard references any such formula would be compared against. I checked them only through search-result summaries, not the papers themselves.
- Allen–Dynes recovers the Eliashberg strong-coupling scaling T_c ∼ √λ, while the original McMillan form saturates ([arXiv 1603.06965](https://arxiv.org/pdf/1603.06965) review, as summarized in the search results).
- Recent work on upper bounds on T_c in Eliashberg theory ([arXiv 2407.03602](https://arxiv.org/pdf/2407.03602), [arXiv 2409.02121](https://arxiv.org/pdf/2409.02121), [arXiv 2506.19326](https://arxiv.org/pdf/2506.19326)) argues that T_c saturates at a fraction of Θ_D, of order 0.1. I only saw snippets of these.

**How the proposed formula differs.**
- It is bounded by T_c → θ_D/2 as λ → ∞. That is far above the empirical and Eliashberg-based bounds, and it is not the √λ growth of Allen–Dynes.
- At small λ, tanh(γ ln(1+λ)) ≈ γλ. T_c is then linear in λ, whereas BCS and McMillan give an essential singularity, exp(−1/λ). The formula therefore cannot reproduce weak-coupling BCS behavior.
- It has no μ* and no isotope-effect structure.
- γ = 2/√N_corr looks like an ad hoc input. I found no literature basis for it.

**Verdict.** I believe this is not a published result and is not a special case of McMillan or Allen–Dynes. It looks like a phenomenological interpolation form. It is also questionable physically, given the weak-coupling limit and the θ_D/2 ceiling. I was only able to search the literature broadly, so I can't rule out an obscure paper. I'd check Google Scholar for "tanh" with "Tc" and "Debye" before claiming novelty.

Sources:
- [Electron-phonon interactions from first principles](https://arxiv.org/pdf/1603.06965)
- [Upper limit for T_c in Eliashberg-McMillan theory](https://arxiv.org/pdf/2407.03602)
- [Bounds on T_c in Eliashberg theory III: Einstein phonons](https://arxiv.org/pdf/2409.02121)
- [Upper limit for T_c in electron-phonon superconductors: very strong coupling](https://arxiv.org/pdf/2506.19326)