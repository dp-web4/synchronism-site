**Short answer:** I haven't searched, so this is from memory. I don't know of a published paper with this exact C(ρ) model. The structure is a known one, though, and "the natural one" overstates it.

**What it reduces to**
- The equation ∇·[C∇Φ] = 4πGρ is a Poisson equation with a variable "gravitational permittivity". Bekenstein and Milgrom's AQUAL has this form, with μ(|∇Φ|/a₀) in place of C (Bekenstein & Milgrom 1984, ApJ 286, 7). Here C depends on local density, not on field strength.
- Density-dependent couplings in a Poisson-type equation also appear in several other families:
  - Scalar-tensor and chameleon/screening models. Examples are k-mouflage and Vainshtein-type screening, and Khoury & Weltman 2004 (PRD 69, 044026) for chameleons.
  - Dipolar dark matter, where gravitational polarization gives a medium-like permittivity (Blanchet & Le Tiec 2008, PRD 78, 024031; uncertain on details).
  - Superfluid dark matter (Berezhiani & Khoury 2015).
- I'm not aware of a specific "step in log-density with floor Ω_m" model. I'm moderately confident it is unpublished, but I haven't checked.

**Problems with the construction**
1. **Momentum conservation.** If the action is L = −C(ρ)(∇Φ)²/8πG − ρΦ, then ρ is a dynamical matter field. Varying it adds a term −(C′(ρ)/8πG)(∇Φ)² to the force on matter. Then g = −∇Φ is not the true force law, and the "momentum-conserving" claim fails. If ρ is instead treated as an external, non-varied function, momentum conservation fails outright.
2. **Spherical symmetry only.** The relation g = g_N/C holds only in spherical, planar or cylindrical symmetry. In general, g = (g_N + ∇×A)/C, where the curl term is nonzero. Also, C g isn't curl-free, so g = −∇Φ and g = g_N/C cannot both hold exactly. This is the same point as the QUMOND/AQUAL difference.
3. **Wrong variable.** The observed radial acceleration relation is organised by acceleration, not density. Density-based switching conflicts with it. Examples are low-density, high-acceleration regions and dense, low-acceleration regions. A bounded boost of 1/Ω_m ≈ 3.2 also can't give the deep-MOND g ∝ √g_N behaviour, and it falls short of the mass discrepancies in dwarfs and low-surface-brightness galaxies, which can be larger than 3.
4. **Relativistic completion.** None is given. Lensing and the cosmic microwave background need one.

**Bottom line:** it is a density-dependent variant of the AQUAL/"permittivity" family, and I believe it is not published as stated. Treat the citations above as uncertain, particularly Blanchet & Le Tiec.