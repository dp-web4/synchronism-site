**Short answer:** The field equation is already published. It is Refracted Gravity (RG) by Matsakos & Diaferio. The program's specific choice C₀ ≈ Ω_m and its "natural" framing may be new, but I haven't checked that.

**Match.** The equation ∇·[ε(ρ)∇Φ] = 4πGρ, with ε a smooth function of local density, is the RG Poisson equation.
- Matsakos & Diaferio, "Physical motivation for gravitational refraction/Refracted gravity," arXiv:1603.04950 (2016). I'm fairly sure of the arXiv number but not the journal details, so treat those as uncertain.
- In RG, ε(ρ) is a "gravitational permittivity" that rises from a low-density floor ε₀ to 1 at high density. Its form is a smooth step in ln ρ, ε = ε₀ + (1−ε₀)/2·[tanh(ln(ρ/ρ_crit)^q) + 1]. The program's x/(1+x) with x = (ρ/ρ_crit)^p is the same kind of step, because ½[1 + tanh(½ ln x)] = x/(1+x). The two forms differ only in the exponent convention.
- Spherical symmetry gives g = g_N/ε, so the boost is bounded by 1/ε₀. This is exactly the program's g = g_N/C and its 1/Ω_m ≈ 3.2 bound.

**Follow-up RG papers (citations from memory, so uncertain):**
- Cesare, Diaferio, Matsakos & Angus, "Dynamics of spiral galaxies in Refracted Gravity," A&A 637, A70 (2020), arXiv:2004.xxxx. It fits rotation curves.
- Cesare, Diaferio & Matsakos, work on RG in elliptical galaxies and lensing, roughly 2021–2022.
- Cesare, "Refracted gravity: cosmology/cluster tests," roughly 2022–2023.
- RG papers treat ε₀ as a free parameter. A link to Ω_m (ε₀ ≈ 0.3) may appear in the cosmology papers, but I'm not certain. If the program ties C₀ to Ω_m, that identification is the possibly new part.

**Related and precedent models:**
- Bekenstein & Milgrom, "Does the missing mass problem signal the breakdown of Newtonian gravity?", ApJ 286, 7 (1984). This is AQUAL, ∇·[μ(|∇Φ|/a₀)∇Φ] = 4πGρ. The program's equation is the same structure with the argument of μ changed from gradient to density. That change is why it conserves momentum and derives from a Lagrangian, L = −(C(ρ)/8πG)(∇Φ)² − ρΦ, though the variation of C(ρ) with ρ needs care.
- Blanchet, "Dipolar dark matter" (2007, CQG 24, 3529), and Blanchet & Le Tiec (2008). These use gravitational polarization, which behaves like a dielectric.
- Position-dependent G_eff or permittivity models, such as chameleon/Vainshtein-type screening, are conceptually similar.

**Physics caveats:**
- g = g_N/C holds only for spherical, planar or cylindrical symmetry. Otherwise ∇×(C∇Φ) ≠ 0, and the result differs from the algebraic law. RG simulations show the difference matters for disks.
- If C depends on ρ and the action is varied naively, the ρ-dependence of C adds extra terms. RG's equation is therefore not strictly the Euler–Lagrange equation of a simple action. This undercuts the claim that it is "sourced, momentum-conserving," or at least it needs a specified Lagrangian.
- Calling it "the natural one" is not justified. AQUAL, QUMOND and RG are all equally natural completions.

**Verdict:** The construction is a special case of, or identical to, Refracted Gravity. Cite Matsakos & Diaferio (2016) and the Cesare et al. papers. Any claim of novelty would have to rest on the Ω_m identification alone. I did not run a search, so verify the details.