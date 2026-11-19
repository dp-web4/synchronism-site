**Short answer:** I don't know of a published model or result that matches this exactly. I did no live search, so this comes from memory. The construction looks like a straightforward combination of known pieces.

**Known ingredients**
- **Environment-dependent G or scalar couplings.** These include chameleon models (Khoury & Weltman, 2004, PRL 93, 171104 and PRD 69, 044026), the symmetron (Hinterbichler & Khoury, 2010, PRL 104, 231301) and Damour–Polyakov-type dilaton models (1994, Nucl. Phys. B 423, 532). In these models the effective coupling depends on local density. They are normally constrained through equivalence-principle tests, fifth-force searches and screening. Bounds from Ġ/G are less common.
- **Time variation from ambient dark-matter density.** Hees, Minazzoli, Savalle, Stadnik & Wolf (2018, PRD 98, 064051) is the closest analogue I recall. They consider constants that depend on the local DM density and derive signals from the solar system's motion and from the density's variation. I'm fairly sure of this citation but not certain of the details. Related work includes Stadnik & Flambaum on DM-induced variation of constants, and Damour & Donoghue (2010) on dilaton-induced variation of constants. All of these are uncertain citations.
- **LLR bounds on Ġ/G.** Williams, Turyshev & Boggs (2004, PRL 93, 261101) gave Ġ/G = (4±9)×10⁻¹³ yr⁻¹. Hofmann & Müller (2018, Class. Quantum Grav.; I'm unsure of the volume) and the INPOP planetary ephemerides (Fienga et al. 2015) give about 10⁻¹³–10⁻¹⁴ yr⁻¹. Treat these values as approximate.
- **Mach-type G.** Sciama-style and Brans–Dicke ideas in which G depends on the matter distribution are old (Brans & Dicke, 1961). I don't recall a pc-scale smoothing-length version.

**Assessment**
- The first-order chain rule, Ġ/G = (d ln f/d ln ρ)(v·∇ ln ρ̄), is trivially true and unlikely to count as a new result. Calling the bound "independent of the form of f" holds only to linear order. It is a bound on the local logarithmic slope at the present density, not on f globally.
- Your numbers look plausible. A Sun velocity of about 20 km/s is about 2×10⁻⁵ pc/yr. A gradient scale of 1–100 pc gives v·∇ ln ρ̄ ≈ 2×10⁻⁷–2×10⁻⁵ yr⁻¹. Then |d ln f/d ln ρ| ≲ 10⁻¹³/(that) ≈ 5×10⁻⁹–5×10⁻⁷. Your quoted 10⁻⁸–10⁻⁵ range is looser, but the same order of magnitude at the tight end. Check how you chose the gradient scale.

**Caveats**
1. For ℓ = 1–10 pc, the Sun's own mass dominates ρ̄_ℓ (about 30 M☉/pc³ at 1 pc, against about 0.1 M☉/pc³ ambient). The Sun's mass is carried along with it, so it contributes no gradient along the motion. The definition of ρ̄_ℓ must exclude it, or the sensitivity changes.
2. The local density is clumpy and the gradient is poorly known. Passage through clouds or spiral arms gives time-dependent, non-secular Ġ.
3. Screening (chameleon or symmetron) could suppress the effect inside the solar system.
4. Other bounds on Ġ/G (binary pulsars, planetary ephemerides, BBN) are independent checks.

I'd call it an unpublished but incremental application of Hees et al. (2018) and the LLR bounds. A quick arXiv search for "density-dependent G" with "lunar laser ranging" would settle it.