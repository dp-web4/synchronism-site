**Short answer:** I don't know of a published paper with this exact C(ρ) and the Ω_m floor. The structure is standard, though, and the "natural completion" claim doesn't hold up.

**What it reduces to**
- ∇·[C∇Φ] = 4πGρ is a Poisson equation with a position-dependent "gravitational permittivity", so the spherical result g = g_N/C follows from Gauss's law. The closest published analogues are:
  - **AQUAL**: Bekenstein & Milgrom 1984, ApJ 286, 7. It has the same form with μ(|∇Φ|/a₀) in place of C, so the nonlinearity depends on the field rather than the density.
  - **Dipolar dark matter / gravitational polarization**: Blanchet 2007, CQG 24, 3529; Blanchet & Le Tiec 2008, PRD 78, 024031 (citations somewhat uncertain). Here the dark matter acts as a gravitational dielectric, giving an effective permittivity.
  - **Nonminimally coupled scalar-tensor and screening theories** (chameleon, symmetron; Khoury & Weltman 2004; Hinterbichler & Khoury 2010). These give density-dependent effective couplings, but the dependence enters through a scalar field, not an explicit C(ρ).
- A bounded, saturating 1/C boost with a floor and a step in density is, as far as I know, not published as such. It is a straightforward variant of the above, so I would not call it a new framework.

**Problems with "natural" and "momentum-conserving"**
1. If C depends on the matter density ρ and the equation is derived from L = −C(ρ)|∇Φ|²/8πG − ρΦ, then varying with respect to matter gives an extra force −∇[C′(ρ)|∇Φ|²/8πG]. The test-particle law g = −∇Φ then does not follow from the action. Taking g = −∇Φ with C(ρ) as an externally prescribed function breaks Newton's third law, so total momentum is not conserved. This is the usual problem with non-variational completions. The completion is only momentum-conserving if the extra term is included, and that changes the dynamics.
2. Away from spherical symmetry, g ≠ g_N/C. The algebraic law holds only in the symmetric case, and there is a curl-free correction analogous to the QUMOND/AQUAL difference.
3. A boost bounded by 1/Ω_m ≈ 3.2 cannot give asymptotically flat rotation curves. At large r the dynamics are Keplerian with G_eff = G/Ω_m, and the observed baryonic Tully–Fisher relation is not reproduced. Clusters also need a much larger boost than 3.2.
4. Because C depends on local ρ, the outskirts of every galaxy sit at the floor, so the effect is a rescaling of G and not a scale-dependent acceleration law. That makes it hard to match the radial acceleration relation (McGaugh, Lelli & Schombert 2016, PRL 117, 201101).

I haven't searched the literature to confirm novelty, so treat the "not published" judgement as uncertain.