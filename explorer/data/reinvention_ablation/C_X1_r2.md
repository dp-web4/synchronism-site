**Short answer:** I don't know of a published paper with this exact construction. Its ingredients are all standard, though, and I believe it is a straightforward chain-rule application of known ideas rather than a new model.

**Known ingredients**
- **Environment-dependent constants.** Density-dependent couplings are well established. Examples are chameleon fields (Khoury & Weltman, PRL 93, 171104, 2004; arXiv:astro-ph/0309300) and the least-coupling/Damour–Polyakov mechanism (Damour & Polyakov, Nucl. Phys. B 423, 532, 1994). Mota & Barrow studied local versus cosmological variation of α, with spatial variation tied to density (PLB 581, 141, 2004; MNRAS 349, 291, 2004). Uzan's review (Living Rev. Relativ. 14, 2, 2011) covers this in general, including G.
- **LLR bound on Ġ/G.** The bound is of order 10⁻¹³ yr⁻¹. Williams, Turyshev & Boggs (PRL 93, 261101, 2004) is the standard reference. Hofmann & Müller (Class. Quantum Grav. 35, 035015, 2018) is a more recent one, though I am less sure of its exact numbers (uncertain).
- **Motion through a spatially varying field.** Converting a spatial gradient into an apparent time drift via the Sun's velocity (Ġ/G = v·∇ ln G) is the standard reasoning in bounds on spatial variation of constants. I can't point to a specific paper that does it for a smoothed-density G.

**Check of your numbers**
- v⊙ ≈ 20 km/s ≈ 2×10⁻⁵ pc/yr.
- Requiring |Ġ/G| < 10⁻¹³ yr⁻¹ gives d ln f/d ln ρ ≲ 5×10⁻⁹ if the density gradient scale is about 1 pc.
- It gives ≲ 5×10⁻⁷ if the scale is about 100 pc, and the bound weakens toward ~10⁻⁵ only for kiloparsec gradient scales.
- So your 10⁻⁸–10⁻⁵ range depends on which gradient scale you assume for ∇ln ρ̄_ℓ. That choice is not fixed by ℓ alone, and it should be stated explicitly.

**Caveats**
- "Independent of the form of f" holds only for the local logarithmic slope at the present density. It says nothing about nonlinear or threshold behaviour.
- The Sun, and the Earth and Moon themselves, dominate the density on AU scales. The construction therefore needs ℓ ≫ the solar-system scale. A screening-type mechanism would also suppress the effect.
- LLR constrains the Earth–Moon dynamics, and effects such as GM_⊕ and G variation are partly degenerate. The bound is on Ġ as seen in the orbit.

**Verdict:** the idea is likely unpublished in this exact form, but it is a simple corollary of known environment-dependent-G phenomenology plus the LLR bound. Before claiming novelty, search for "Ġ/G from galactic motion" and "spatial variation of G" bounds. I haven't verified that no such paper exists.