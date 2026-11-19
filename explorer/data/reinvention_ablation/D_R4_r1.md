**Verdict:** The construction is not new, and the claim that the grid is unobservable doesn't hold up. I answered from memory and did no searching, so check the citations before you rely on them.

**Substrate: known models**
- A discrete cubic grid with global ticks and local update rules is a cellular automaton. Zuse's *Rechnender Raum* (1969) and Fredkin's digital philosophy proposed it as physics. Wolfram's *A New Kind of Science* (2002) develops it at length.
- 't Hooft's cellular automaton interpretation of quantum mechanics (book, Springer 2016, arXiv:1405.1548) is the closest modern version.
- If the "intent patterns" are quantum amplitudes, the model is a quantum walk or quantum cellular automaton. Relevant papers:
  - Bialynicki-Birula, PRD 49, 6920 (1994).
  - Meyer, J. Stat. Phys. 85, 551 (1996).
  - Bisio, D'Ariano and Tosini, Ann. Phys. 354, 244 (2015) (uncertain on the volume).
  - Arrighi, Nesme and Forets, J. Phys. A 47, 465302 (2014) (uncertain).
  - D'Ariano and Perinotti, PRA 90, 062106 (2014).
- If the patterns are classical, the model is a lattice gas automaton. Frisch, Hasslacher and Pomeau (PRL 56, 1505, 1986) is the standard example, though it was built for fluids, not fundamental physics.
- Given the description, I can't identify a specific published model that matches it exactly.

**Lorentz-invariance claim: known to fail**
- Collins, Perez, Sudarsky, Urrutia and Vucetich, PRL 93, 191301 (2004), "Lorentz invariance and quantum gravity: an additional fine-tuning problem?", is the key result. In a theory with a preferred frame and a cutoff at the Planck scale, radiative corrections generically feed O(1) Lorentz-violating terms into the low-energy theory. Those terms are not suppressed by E/E_Planck. This directly contradicts the "suppressed by powers of E/E_Planck" assumption, unless the program adds a symmetry or fine-tuning that forbids them.
- Absolute time and a cubic lattice also break rotations. The dimension-4 operators this generates are tightly constrained.
- Even the naively suppressed terms are observable:
  - Myers and Pospelov, PRL 90, 211601 (2003), treat the dimension-5 operators. These give linear E/E_P effects.
  - Fermi GRB 090510 timing (Abdo et al., Nature 462, 331 (2009)) pushes linear-suppression bounds above the Planck scale.
  - Vasileiou et al., PRD 87, 122001 (2013) (uncertain on the details) set similar limits.
  - Crab synchrotron and ultra-high-energy cosmic-ray analyses (e.g. Maccione, Liberati et al.) constrain the quadratic, dimension-6 terms.
- A lattice dispersion relation has the form ω² = k² + O(a²k⁴). Whether that is already excluded depends on the coefficients and on the particle species.
- The Data Tables for Lorentz and CPT Violation (Kostelecký and Russell, Rev. Mod. Phys. 83, 11, 2011, with annual arXiv updates) collect the bounds.

**Bottom line:** The substrate reduces to known cellular-automaton and quantum-walk models. The statement that the grid is unobservable at accessible energies is not a safe result. It conflicts with the Collins et al. fine-tuning argument and with existing astrophysical bounds. The program would need a mechanism that protects Lorentz invariance, and it should state predictions for the dimension-5 and dimension-6 coefficients.