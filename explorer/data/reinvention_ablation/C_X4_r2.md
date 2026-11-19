**Short answer:** I don't know of this formula in the published literature. I believe it is not a known result, though I can't rule out an obscure source.

**What I checked against**
- **BCS (Bardeen–Cooper–Schrieffer 1957, Phys. Rev. 108, 1175):** k_BT_c ≈ 1.13 ħω_D exp(−1/N(0)V).
- **McMillan (1968, Phys. Rev. 167, 331):** T_c = (θ_D/1.45) exp[−1.04(1+λ)/(λ − μ*(1+0.62λ))].
- **Allen–Dynes (1975, Phys. Rev. B 12, 905):** a modified McMillan form with ω_log and correction factors. At strong coupling, T_c ∝ √λ·ω_log.
- **Eliashberg theory:** the underlying framework for these results.

I know of no published T_c of the form (θ_D/2)·tanh(γ ln(1+λ)), and no published definition of "N_corr correlated ions per coherence volume" that gives γ = 2/√N_corr.

**Physical problems with the form (my analysis, not a literature claim)**
1. **Weak coupling:** for small λ it gives T_c ≈ (θ_D/2)·γλ, which is linear in λ. BCS and McMillan give an essential singularity, exp(−1/λ), which is non-perturbative in the coupling. A linear dependence contradicts the Cooper instability, so the formula can't reduce to BCS in any limit.
2. **Strong coupling:** it saturates at θ_D/2 as λ→∞. Allen–Dynes asymptotics instead grow as √λ·ω_log, and ω_log is not θ_D in general.
3. **Missing Coulomb pseudopotential:** there is no μ*, so it cannot account for materials with λ > 0 that are not superconducting, or for the onset threshold.
4. **γ = 2/√N_corr:** this looks like a central-limit-type 1/√N scaling, but I know of no derivation connecting it to T_c. For N_corr = 1, tanh(2 ln(1+λ)) = [(1+λ)⁴−1]/[(1+λ)⁴+1], which is just an algebraic rational function of λ. So it is effectively a two-parameter interpolating fit, not a derived result.
5. **Dependence on the Debye temperature:** using θ_D instead of ω_log or a phonon-spectrum moment discards the spectral information that Allen–Dynes showed matters.

**Assessment:** The ingredients (θ_D, λ, ln(1+λ), tanh) are all standard, but I find no match. Neither the construction nor its stated result coincides with, reduces to, or is a special case of a published model that I know of. To test it, I'd fit it against the Allen–Dynes tabulation of λ, ω_log and T_c for elemental superconductors, and check whether N_corr can be fixed independently, for example from the coherence length ξ₀ and the ion density, instead of being fitted per material. If it is fitted per material, it is a parametrization and not a prediction.

I'm not citing anything uncertain except the page numbers above, which are from memory, though I'm fairly confident of them.