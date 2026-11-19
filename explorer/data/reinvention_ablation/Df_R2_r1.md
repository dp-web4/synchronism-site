**Short answer:** I found no published model with this specific C(ρ) = tanh(γ ln(1+ρ/ρ_crit)). The structure is generic, though, and the "emergence" claim is a rewriting, not a result.

**What the construction amounts to**
- H² = 8πGρ_m/(3C) is the ordinary Friedmann equation with a density-dependent coupling, G_eff = G/C(ρ_m).
- Defining ρ_DE ≡ ρ_m(1−C)/C is a relabeling. Any modification of the form H² = 8πGρ_m·F(ρ_m)/3 can be split into "matter plus dark energy" this way. This is the same point made in the Barrow-entropy paper below, where the extra Friedmann term can be read either as an effective G or as dark energy.
- Calibrating C₀ = Ω_m reproduces H₀ by construction. If C₀ = 0.3, then H₀² = 8πGρ_m0/(3·0.3) = 8πGρ_crit/3, which holds because ρ_m0 = 0.3ρ_crit. This is a normalization, not a test.

**Likely problems**
1. C depends on ρ_m only, so ρ_DE ∝ ρ_m(1−C)/C. At high ρ, C→1 and ρ_DE→0. At low ρ (the far future), C ≈ γρ/ρ_crit → 0, so H² → const·(8πG ρ_crit/(3γ)). That gives a de Sitter-like phase, but only with ρ_crit and γ tuned.
2. At low density, ρ_eff = ρ_m/C tends to a constant. This is effectively a cosmological constant set by ρ_crit, so Λ is replaced by a scale, not removed.
3. The effective equation of state follows from ρ_m ∝ a⁻³. It is not guaranteed to satisfy w ≈ −1 or the BAO and SN constraints. It also needs a consistent energy-conservation and Bianchi-identity treatment (a varying G requires extra terms). I have not checked these.

**Related published work I found (none matches exactly)**
- [arXiv:2412.14747](https://arxiv.org/html/2412.14747v2) (2024). The Einstein constant varies with energy density, which acts as effective dark energy and adds a logarithmic contribution to H. This is the closest match in spirit. I didn't verify its details.
- [arXiv:2609.24361](https://arxiv.org/pdf/2609.24361). A matter–gravity coupling χ gives ε_de = ε_m(χ−1), the same algebraic structure as the program's ρ_DE. The snippet didn't show whether it is peer reviewed, and the arXiv id looks unusual, so treat it as uncertain.
- [arXiv:2205.09311](https://arxiv.org/pdf/2205.09311). Running Barrow entropy. It states the equivalence between an effective-G reading and a dark-energy reading.
- Li & Shafieloo (2019), the PEDE model ([arXiv:1907.12551](https://arxiv.org/pdf/1907.12551), cited from search snippets, so uncertain). It uses a tanh profile in log(1+z), but for the dark-energy density, not for G.
- [arXiv:0807.2639](https://arxiv.org/pdf/0807.2639) (aether fluid with an effective G) and [arXiv:gr-qc/0608074](https://arxiv.org/pdf/gr-qc/0608074) (MOG with Λ = 0). Both are loosely related.

**Verdict:** The specific tanh-log form with the "coherence" interpretation appears unpublished in what I searched. The general idea, H² ∝ ρ/C(ρ) read as emergent dark energy, is a known type of reparametrization and doesn't count as a derivation. My search was limited to two queries.

Sources:
- [arXiv:2412.14747](https://arxiv.org/html/2412.14747v2)
- [arXiv:2609.24361](https://arxiv.org/pdf/2609.24361)
- [arXiv:2205.09311](https://arxiv.org/pdf/2205.09311)
- [arXiv:1907.12551](https://arxiv.org/pdf/1907.12551)
- [arXiv:0807.2639](https://web3.arxiv.org/pdf/0807.2639)
- [arXiv:gr-qc/0608074](https://arxiv.org/pdf/gr-qc/0608074)