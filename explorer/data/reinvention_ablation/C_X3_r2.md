**Short answer:** I don't know of any published model with this exact form, m_eff = m[1 + κ ln(1 + P/τ)]⁻¹ with τ = 10⁻⁶·2π/H₀ and κ = 0.31. I believe it is not published as stated. It does sit in a well-known family of ideas, so I'd cite those as precedent and context.

**Closest published relatives**
- **Modified inertia MOND.** Milgrom, "Dynamics with a nonstandard inertia-acceleration relation," Ann. Phys. 229, 384 (1994). Milgrom, "The modified dynamics as a vacuum effect," Phys. Lett. A 253, 273 (1999), ties a₀ ~ cH₀/2π to the cosmological vacuum. Those models make inertia depend on acceleration, and in some versions on non-local-in-time response. The period-dependent version here is a different, ad hoc parametrization. For circular orbits P ~ 2π√(r/a), so a cutoff in P is roughly a cutoff in a, but the functional form and the 10⁻⁶ scale are not Milgrom's.
- **Quantised inertia.** McCulloch, MNRAS 376, L5 (2007), with m_eff = m(1 − 2c²/|a|Θ), where Θ is the Hubble-horizon scale. It is Hubble-scale-linked and reduces inertia at low acceleration. It has been applied to wide binaries in later McCulloch papers (uncertain on exact citations). It is not logarithmic in P.
- **Wide-binary tests of MOND-like boosts.**
  - Hernandez, Jiménez & Allen, Eur. Phys. J. C 72, 1884 (2012).
  - Chae, ApJ 952, 128 (2023), claims a ~1.4× boost at low acceleration.
  - Hernandez, MNRAS 525, 1401 (2023), is similar (uncertain on page).
  - Banik et al., MNRAS 527, 4573 (2024), finds no anomaly and Newtonian behavior.

  These constrain any construction like this one.

**Physics concerns**
1. The boost factor 1 + κ ln(1 + P/τ) is about 1.2 at P = τ and about 1.7 at P = 10⁶ yr. Banik et al. exclude boosts of that size at those periods.
2. m_eff depends on the orbit's period, not on local fields. That violates the weak equivalence principle and Galilean invariance, and it is not derivable from a Lagrangian without non-local-in-time terms. Momentum conservation for hierarchical systems and for eccentric orbits (where P is ill-defined instantaneously) is unclear.
3. Because m_eff acts on inertia only, it differs from a gravity modification. Two-body reduced-mass and center-of-mass motion need explicit treatment.
4. τ = 10⁻⁶·2π/H₀ is an unexplained fine-tuned fraction of the Hubble time, and κ = 0.31 is a free fit parameter.
5. The log form is not obviously matched to the observed flat MOND-like asymptote. A log boost grows without bound as P → ∞, unlike the √(a₀/a) scaling of deep-MOND.

**Verdict:** I believe it's a novel parametrization, but not a novel idea in kind. It is a phenomenological modified-inertia model in the Milgrom/McCulloch lineage. Any claim of novelty should be checked by searching arXiv for "period-dependent inertia" and "modified inertia wide binaries." My citation details for McCulloch's wide-binary work and the Hernandez 2023 pages are uncertain.