**Short answer:** The field equation is already published. It is Refracted Gravity (RG), and the program's version is a special case of it. I found no published version that uses this particular C(ρ) with a floor at Ω_m.

**Match: Refracted Gravity**
- Matsakos & Diaferio (2016), "Physical motivation for MOND-like phenomenology via a gravitational permittivity", arXiv:1603.04943. I found this paper and the equation, but I did not check the volume or page numbers.
- Its field equation is ∇·[ε(ρ)∇Φ] = 4πGρ. The permittivity ε(ρ) increases monotonically with density, and ε→1 gives Newtonian gravity at high density. The program's C(ρ) is the same object as ε(ρ), or possibly its inverse, depending on the convention. The sign convention needs checking against the RG papers.
- In spherical symmetry, Gauss's law gives g = g_N/ε. This is the program's "algebraic galaxy law".
- Follow-up RG work I found:
  - Cesare et al. 2020 on disk-galaxy rotation curves (details uncertain).
  - arXiv:2102.12499 on three E0 galaxies.
  - arXiv:2109.11217, a covariant formulation (authors uncertain; Sanna & Diaferio is my guess).
  - arXiv:2410.19698 on galaxy clusters.
- RG's ε(ρ) is a smooth step in density, built to be near 1 at high density and to grow at low density. I recall the original RG form being ε(ρ) = ε₀ + (1−ε₀)·(…) with a tanh/log-density step. That is close to the program's form. I did not verify this, so treat it as uncertain.

**Related background (not identical)**
- Bekenstein & Milgrom (1984), ApJ 286, 7, is AQUAL. It has the same ∇·[μ∇Φ] structure and the same Lagrangian, momentum-conserving derivation. There μ depends on |∇Φ|/a₀ rather than on ρ.
- Blanchet & Le Tiec (2009) and the later polarization models (Stahl et al. 2022, per a 2025 review) treat dark matter as a gravitational polarization medium. This is a related "dielectric" idea. My searches did not retrieve the original papers, so these citations are uncertain.

**Assessment**
- Calling this completion "the natural one" is a stretch. RG proposed it in 2016. AQUAL is the other standard completion, and the choice between them is not forced.
- Because ε depends only on ρ, the Lagrangian is L = −ε(ρ)(∇Φ)²/8πG − ρΦ. Variation with respect to Φ gives the equation above. The equation conserves momentum for a fixed ρ(x) profile, but ρ is not dynamical in this variation. RG papers address this, and the covariant paper treats it more carefully. I did not verify how.
- The floor C₀ = Ω_m, which bounds the boost at 1/Ω_m ≈ 3.2, looks like the program's own choice. RG's ε has its own low-density floor, which is a fit parameter. I did not find a published version that ties the floor to Ω_m.
- A bounded boost of about 3 is a known limitation. Flat rotation curves need the boost to grow without bound at large radius, and RG's ε₀ is a free parameter that the literature fits to the data. Cluster kinematics tests are in arXiv:2410.19698.
- Check against the RG literature: ε(ρ) with a finite floor means g → g_N/ε₀ at large radius. That gives Keplerian-like falloff at 1/r², not a flat curve. RG obtains flat curves through the field geometry of disks, not through the spherical case. In exactly spherical symmetry the program's result therefore cannot produce asymptotically flat rotation curves.

**Sources:**
- [Matsakos & Diaferio 2016](https://arxiv.org/pdf/1603.04943)
- [RG, three E0 galaxies](https://arxiv.org/pdf/2102.12499)
- [Covariant RG](https://arxiv.org/pdf/2109.11217)
- [RG, galaxy clusters](https://arxiv.org/pdf/2410.19698)
- [Bekenstein & Milgrom 1984](https://doi.org/10.1086/162570)
- [MOND review, 2025](https://arxiv.org/pdf/2501.17006)