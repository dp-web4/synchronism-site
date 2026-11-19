**Short answer:** I don't know of a published model with this exact form, but it is a close relative of several known constructions. I did not search, so every citation below comes from memory and is uncertain.

**What it reduces to or resembles**
- **Nonlinear Poisson equations (AQUAL):** The form ∇·[μ∇Φ]=4πGρ is Bekenstein–Milgrom (1984, ApJ 286, 7). There, μ depends on |∇Φ|/a₀. The program instead makes the coefficient depend on the local density ρ. That changes the physics, and it means the construction is not AQUAL.
- **Gravitational dielectric analogy:** A position-dependent "permittivity" C(ρ) is the same structure as Blanchet's dipolar dark matter (2007, CQG 24, 3529; Blanchet & Le Tiec 2008, PRD 78, 024031). It also resembles Ho–Minic–Ng's dark-matter-as-dielectric proposals (2010–12) and Hajdukovic's vacuum-polarization idea. In those models the permittivity comes from a dynamical polarization field, not a prescribed function of ρ.
- **Density-dependent G_eff:** Chameleon, symmetron and Vainshtein-type screening (Khoury–Weltman 2004; Hinterbichler–Khoury 2010) also make the effective gravitational coupling depend on environmental density. Here the dependence is imposed directly and has no scalar field.
- **Spherical-symmetry result:** The result g = g_N/C(ρ(r)) is just Gauss's law for the flux C∇Φ. It is a textbook consequence, not a new result. The cap 1/Ω_m is built in by the choice of C₀.

**A problem with the "momentum-conserving" claim**
- The claim holds if C depends on ∇Φ, as in AQUAL, because the Lagrangian is then translation invariant.
- If C depends on ρ(x), the action is L = −C(ρ)|∇Φ|²/8πG − ρΦ. Varying with respect to the matter fields gives an extra force term, −(∂C/∂ρ)|∇Φ|²/8πG, which is a gradient. The matter then does not move on g = −∇Φ alone.
- If you keep g = −∇Φ as the force law, the field stress tensor has divergence ∂ᵢTᵢⱼ ∝ −½|∇Φ|²∂ⱼC ≠ 0. Then ∫ρg d³x ≠ 0 in general, so momentum conservation and Newton's third law fail. The medium or background absorbs momentum.
- Either the extra force term must be included, which changes the galaxy law away from spherical symmetry, or the equation is not momentum-conserving.
- Away from spherical symmetry, C∇Φ is not curl-free, so g ≠ g_N/C. The "algebraic law" holds only approximately there.

**Calling it "the natural one"**
- It is not unique. Any C(ρ) gives the same spherical limit, and so does the AQUAL/QUMOND family with the right μ. The choice is a phenomenological postulate.
- A density-dependent coupling also faces constraints that this construction doesn't address. These include lensing, which needs a relativistic completion, and solar-system and cluster tests. A floor C₀ ≈ Ω_m also makes gravity stronger in voids, which affects cosmological structure growth.

**Verdict:** I believe it is not published as stated. It is a density-dependent-permittivity variant of the nonlinear Poisson/AQUAL and dielectric-gravity families. As written, it is not momentum-conserving unless the ∂C/∂ρ force is added.