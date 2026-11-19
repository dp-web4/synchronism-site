**Short answer:** I don't know of a published paper with this exact construction, and I didn't search the literature, so this comes from memory. The pieces are standard, and the result looks like a straightforward application of known ideas rather than a new model.

**Related published work (citations from memory, so treat them as uncertain):**

- **Environment-dependent couplings.** Chameleon and symmetron models make the effective gravitational coupling depend on local density. These are Khoury & Weltman, PRL 93, 171104 (2004), and Hinterbichler & Khoury, PRL 104, 231301 (2010). Earlier scalar-tensor background: Damour & Nordtvedt (1993), and Damour & Polyakov (1994), Nucl. Phys. B 423, 532. In these models the dependence is on the local density, and screening suppresses it in dense regions. They don't use a density smoothed over a length ℓ of 1–10 pc.
- **Motion through a varying scalar background.** In scalar-tensor and varying-constant theories, Ġ/G follows from the time variation of the field along the Sun's trajectory. Uzan's review, Living Rev. Relativity 14, 2 (2011), covers this, as does the Damour–Nordtvedt-type analysis of the cosmological drift.
- **Lunar laser ranging (LLR) bounds.** Williams, Turyshev & Boggs, PRL 93, 261101 (2004), give Ġ/G = (4±9)×10⁻¹³ yr⁻¹. Hofmann & Müller, CQG 35, 035015 (2018), give a tighter bound of about 10⁻¹³ yr⁻¹ or a little below.
- **Galactic or ambient-density effects on local G.** Some papers consider G or the scalar field varying with the Sun's galactic position or dark-matter environment. Hees, Minazzoli and collaborators (around 2014) did related work on density-dependent violations of the equivalence principle. I can't recall a specific citation that bounds d ln f/d ln ρ this way.

**Check of your numbers:**

- The Sun's velocity relative to the local standard of rest is about 20 km/s, or about 2×10⁻⁵ pc/yr.
- If ln ρ̄ changes by O(1) over ℓ, then Ġ/G ≈ (2×10⁻⁵ yr⁻¹/ℓ[pc]) · d ln f/d ln ρ.
- Setting this below 10⁻¹³ yr⁻¹ gives d ln f/d ln ρ ≲ 5×10⁻⁹ for ℓ = 1 pc and ≲ 5×10⁻⁸ for ℓ = 10 pc.
- Your quoted range extends to 10⁻⁵. That needs a much smaller gradient, v·∇ln ρ̄ ~ 10⁻⁸ yr⁻¹, which I can't reproduce from these inputs.

**Caveats:**

- The claim that the bound is "independent of the form of f" only holds at linear order. It requires f to be smooth and the fractional density change to be small.
- The bound depends on the actual local gradient of ρ̄_ℓ. The Local Bubble, the local dark-matter and stellar density (about 0.1 M⊙/pc³), and the smoothing scale ℓ all make this uncertain.
- Screening in chameleon-like models would suppress the effect in the Earth–Moon system. The bound is therefore model-dependent unless f is an explicit function of the smoothed ambient density.

**Verdict:** I believe this is an unpublished, simple application of the LLR Ġ/G limit to a density-dependent G. Before claiming novelty, check ADS/INSPIRE for "Ġ/G galactic motion density gradient", "environment-dependent G LLR", and "symmetron/chameleon time variation of G".