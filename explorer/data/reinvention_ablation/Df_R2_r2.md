**Short answer:** I found no published model with this specific C(ρ) = tanh(γ ln(1+ρ/ρ_crit)). The general idea is not new, though. It is a density-dependent running G, which the Markov–Mukhanov-type models and related "running G" papers already cover. The "dark energy" it produces is a relabeling, not a new prediction.

**What I found (two standard searches, so not exhaustive):**
- arXiv:2411.05965 ("Running gravitational constant induced dark energy as a solution to σ₈ tension"). Matter couples non-minimally through a density-dependent function ξ(ρ), which gives G(ρ) and a Λ-like term. The Friedmann equation is H²/H₀² = (G(a)/G₀)Ω_m/a³ + Ω_Λ(a). This is the closest match. I haven't checked the authors or year. That paper builds on earlier Markov–Mukhanov work, which I'm citing from memory and am uncertain about.
- arXiv:2412.14747 ("Running Einstein Constant and a Possible Vacuum State of the Universe"). G runs with energy density and gives a Chaplygin-like effective dark-energy term.
- arXiv:2405.02636 ("An emergent cosmological model from running Newton constant"). The coupling depends on energy density, G(ε).
- arXiv:2411.06489 ("Varying Newton's constant: a cure for gravitational maladies?"). This uses G_eff = G/(1+S) in H² = 8πG_eff ρ/3 with no Λ. The function S depends on time, not density.
- gr-qc/0608074 (MOG). It has Λ = 0, with acceleration coming from a varying G.

**Assessment of the construction:**
1. H² = 8πGρ/(3C) is just a rescaling of G to G/C(ρ). Defining ρ_eff = ρ_m/C and ρ_DE = ρ_m(1−C)/C is an algebraic identity. It holds for any C, so it makes no prediction.
2. Setting C₀ = Ω_m = 0.3 reproduces H₀ by construction. That is a calibration, not a test, because H₀² = 8πGρ_m0/(3Ω_m) is the flat-ΛCDM relation.
3. A problem I noticed myself and haven't found discussed in the literature. With C < 1 at low density, C → 0 as ρ → 0 (tanh of a quantity that goes to 0). So ρ_eff = ρ_m/C tends to a finite constant only if C ∝ ρ. Here C ≈ γρ/ρ_crit at small ρ, so ρ_eff → ρ_crit/γ. This acts like a cosmological constant, so it is Λ in disguise, with Λ set by ρ_crit/γ. The "no cosmological constant" claim therefore fails. The constant is hidden in the parameters.
4. Background cosmology also needs consistency checks. These are the Bianchi identity and continuity equation with a ρ-dependent G, the equation of state w_DE, and the constraints from BBN, the CMB and solar-system tests. The papers above handle these through an action.

**Verdict:** The tanh-log form is probably unpublished, but I'm not certain. The mechanism reduces to known density-dependent running-G / non-minimal matter-coupling cosmologies. I'd cite arXiv:2411.05965 and arXiv:2412.14747 as the nearest published relatives.

Sources:
- [Running gravitational constant induced dark energy (2411.05965)](https://arxiv.org/pdf/2411.05965)
- [Running Einstein Constant (2412.14747)](https://arxiv.org/pdf/2412.14747)
- [Emergent cosmological model from running Newton constant (2405.02636)](https://arxiv.org/pdf/2405.02636)
- [Varying Newton's constant (2411.06489)](https://arxiv.org/pdf/2411.06489)
- [MOG (gr-qc/0608074)](https://arxiv.org/pdf/gr-qc/0608074)