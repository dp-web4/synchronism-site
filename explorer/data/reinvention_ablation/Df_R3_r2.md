**Short answer:** This is not new. It is essentially **Refracted Gravity (RG)**, with a particular choice of the permittivity function.

**Main match**
- Matsakos & Diaferio, "Physical motivation for refracted gravity" (2016), arXiv:1603.04943. The search result gave the title only loosely, so treat the exact title as uncertain. They propose ∇·[ε(ρ)∇Φ] = 4πGρ. Here ε is a "gravitational permittivity" that increases monotonically with density. It tends to 1 at high density and gives an enhanced field at low density. This is the same equation as the program's ∇·[C(ρ)∇Φ] = 4πGρ, with C = ε.
- Cesare, Diaferio, Matsakos, et al. developed RG further. I found these papers: "The dynamics of three nearby E0 galaxies in refracted gravity" (arXiv:2102.12499), "Covariant formulation of refracted gravity" (arXiv:2109.11217) and "Testing Refracted Gravity with kinematics of galaxy clusters" (arXiv:2410.19698). I did not check the authors or years of these three. A fourth hit, arXiv:2203.00572, may also be relevant, but I did not check it.
- In the RG papers I recall (not verified in the search results), ε is a smooth step in density. Its low-density floor is ε₀ and it has a threshold density ρ_c. Its form is roughly ε = ε₀ + (1−ε₀)·(…) with a tanh or arctan-type step. The program's x/(1+x) with x = (ρ/ρ_crit)^p looks like a reparametrisation of that. I did not verify the exact RG functional form or whether ε₀ is tied to Ω_m. In RG, ε₀ is, as far as I recall, a free parameter that is fitted, and its connection to 1/Ω_m would be the program's own addition. This is uncertain.

**Structural ancestry**
- Bekenstein & Milgrom (1984), ApJ 286, 7 (AQUAL). Their equation is ∇·[μ(|∇Φ|/a₀)∇Φ] = 4πGρ. It comes from a Lagrangian, so it conserves momentum, angular momentum and energy. The program's equation has the same form, but with μ replaced by a function of density rather than of field strength. The 1984 paper is the origin of this class of equation.
- Blanchet (2007), "Gravitational polarization and the phenomenology of MOND" (astro-ph/0605637, published in Class. Quantum Grav.; volume and page not verified), gives a dielectric-medium interpretation with an effective permittivity (1+χ).

**Points on the claims**
- The identity g = g_N/C holds in spherical symmetry, because Gauss's law gives C·g = g_N. Away from spherical symmetry there is a curl-field correction. This is known for AQUAL and for RG.
- A subtlety: with C = C(ρ) and ρ the baryonic density, g = g_N/C(ρ) is a local relation. Such a relation is not a general consequence of the equation. The enclosed-mass argument gives g(r) = g_N(r)/C(ρ(r)) with C evaluated at the local density. That follows from the equation in spherical symmetry.
- Calling the completion "the natural one" is not justified. It is one of several (AQUAL, QUMOND, RG).

**Caveat:** I did not open the RG papers to compare the exact C(ρ) form, so the details above are uncertain.

Sources:
- [Matsakos & Diaferio, arXiv:1603.04943](https://arxiv.org/pdf/1603.04943)
- [RG E0 galaxies, arXiv:2102.12499](https://arxiv.org/pdf/2102.12499)
- [Covariant RG, arXiv:2109.11217](https://arxiv.org/pdf/2109.11217)
- [RG clusters, arXiv:2410.19698](https://arxiv.org/pdf/2410.19698)
- [Bekenstein & Milgrom 1984](https://doi.org/10.1086/162570)
- [Blanchet, astro-ph/0605637](https://arxiv.org/pdf/astro-ph/0605637)