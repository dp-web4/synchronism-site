**Short answer: I found no published source for this formula. It looks unpublished as a closed form. Its ingredients are standard, and it is not a special case of any known model I could find.**

**What the searches found**
- **Nepela's preprint (arXiv:0807.1638, "Proposed Universal Relationships Describing Electron Phonon Mediated Superconductivity…").** It has the same θ_D/2 prefactor, but with an exponential instead of a tanh: T_c ≈ (θ_D/2)·exp(−2/λ). I could not confirm that it was peer reviewed. A US patent (US 7,482,298) appears to use the same plot of ln(θ_D/2T_c) against 1/λ. These are the nearest relatives I found.
- **BCS weak coupling.** T_c ≈ 1.14 ω_D·exp(−1/λ). Your tanh form is not a known limit of this one. For small λ it gives T_c ≈ (θ_D/2)·γ·λ, which is linear in λ. BCS and McMillan instead give an essential singularity, exp(−1/λ).
- **McMillan (1968, Phys. Rev. 167, 331) and Allen–Dynes (1975, PRB 12, 905).** These are the standard references. Their exponents contain (1+λ) and μ*. I am citing them from memory, and the searches did not check them. A ln(1+λ) inside a tanh does not appear in them.
- **Strong-coupling behaviour.**
  - Allen–Dynes and Eliashberg theory give T_c ∝ √λ·ω at large λ (the Allen–Dynes asymptote).
  - Your formula saturates at θ_D/2 instead, because tanh → 1.
  - So it disagrees with Eliashberg theory at large λ.
  - It also has no μ*, and uses θ_D where the standard formulas use ω_log.

**Assessment**
- I found no use of γ = 2/√N_corr, a correlated-ion count, or a coherence-volume factor in any T_c formula. I searched only twice, and the second search was general. A niche paper could still exist, so treat "not published" as "not found".
- The formula has the form of an ansatz (a saturating function with a fitted or derived exponent). I found no derivation from Eliashberg or BCS theory.
- Its physical limits are the ones to check. T_c is linear in λ at small λ, and it is capped at θ_D/2, which is probably unrealistic for hydrides. I did not test either against data.

**Sources**
- [Nepela, arXiv:0807.1638](https://arxiv.org/pdf/0807.1638)
- [US Patent 7,482,298](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/7482298)
- [Allen–Dynes and McMillan discussion, PRB 100, 174513](https://link.aps.org/accepted/10.1103/PhysRevB.100.174513)
- [Machine learning of T_c from Eliashberg theory, arXiv:2106.05235](https://arxiv.org/pdf/2106.05235)