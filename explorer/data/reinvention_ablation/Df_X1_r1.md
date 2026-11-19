**Short answer:** I found no published paper with this exact construction, a G that depends on density smoothed over a length ℓ and is bounded through the Sun's motion in the solar neighbourhood. The ingredients are standard, though, and the closest work is chameleon-type environment dependence. My searches were limited (two standard-mode queries), so treat this as "not found" and not as proof that it is unpublished.

**Closest published work**
- **Chameleon and screened gravity.** In chameleon models the scalar mass and range depend on the ambient density, so the effective G is environment-dependent. [Chameleon Field Theories, arXiv:1306.4326](https://arxiv.org/pdf/1306.4326) and [Tests of Chameleon Gravity, arXiv:1709.09071](https://arxiv.org/pdf/1709.09071) review this. Those models use a local field equation, not a density smoothed over a fixed length ℓ.
- **Galactic time dependence of G.** [arXiv:2003.01038](https://www.arxiv.org/abs/2003.01038) revisits chameleon screening with a time-dependent galactic environment and derives the resulting time evolution of G_N. This is the nearest conceptual overlap, because it ties Ġ to the Sun's changing galactic surroundings. The search summary says the authors find the effect testable but highly suppressed in the weak-field, non-relativistic regime. I haven't read the paper, so I can't confirm what it assumes or whether it uses LLR numbers.
- **LLR bound.** [Hofmann, Müller and Biskupek, A&A 522, L5 (2010)](https://ui.adsabs.harvard.edu/abs/2010A&A...522L...5H/abstract) report Ġ/G = (−0.7 ± 3.8)×10⁻¹³ yr⁻¹. That matches your 10⁻¹³ yr⁻¹ figure.
- **Related reinterpretations of Ġ/G limits.** [Dumin, gr-qc/0610035](https://arxiv.org/pdf/gr-qc/0610035) argues that Ġ/G limits cannot be reinterpreted as bounds on local cosmological dynamics. Williams, Turyshev and Boggs take the opposite view. I'm less sure of the Williams–Turyshev–Boggs citation, so mark it uncertain.

**Assessment**
The relation Ġ/G = v⊙·∇ln ρ̄_ℓ · d ln f/d ln ρ is just the chain rule applied to a G that depends on a smoothed density. The LLR bound on d ln f/d ln ρ follows from it directly. This is a generic "Ġ from motion through a gradient" argument, and the Sun's motion through an inhomogeneous medium is the same mechanism as the galactic-environment treatment in 2003.01038. As a form-independent bound on d ln f/d ln ρ with explicit ℓ = 1–10 pc smoothing, I couldn't find it published. I'd call it a likely-novel but elementary application.

**Caveats**
- Check the numbers. Take v⊙ ≈ 20 km/s ≈ 20 pc/Myr and ∇ln ρ ~ 1/ℓ. Then v/ℓ ~ 10⁻⁵ to 10⁻⁶ yr⁻¹ for ℓ = 1–10 pc. Dividing 10⁻¹³ by that gives bounds of ~10⁻⁸ to 10⁻⁷, so the upper end of your 10⁻⁸–10⁻⁵ range depends on assuming a much shallower gradient.
- Local density fluctuations on the Sun's path are not smooth, so the gradient estimate is uncertain.
- Before claiming novelty, read 2003.01038 in full and search for other density-dependent-G papers.

Sources:
- [Hofmann, Müller, Biskupek 2010](https://ui.adsabs.harvard.edu/abs/2010A&A...522L...5H/abstract)
- [Dumin, gr-qc/0610035](https://arxiv.org/pdf/gr-qc/0610035)
- [arXiv:2003.01038](https://www.arxiv.org/abs/2003.01038)
- [Chameleon Field Theories, arXiv:1306.4326](https://arxiv.org/pdf/1306.4326)
- [Tests of Chameleon Gravity, arXiv:1709.09071](https://arxiv.org/pdf/1709.09071)