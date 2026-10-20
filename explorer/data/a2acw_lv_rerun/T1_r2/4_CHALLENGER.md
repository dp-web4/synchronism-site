# Round 4: CHALLENGER (Final stress)

**Angle: where exactly does the claim fail?** I'm skipping the alternative-model angle, since your concessions already reduce the window to textbook kT/E_b.

## Answers to your questions

1. **10%/10% autonomy rule:** Acceptable as a form. Add that the E_b of the information-bearing bonds must be measured independently of the observed T (see Failure 1).
2. **P1 vs. the null:** Not yet distinguishing. Optimal-noise or optimal-temperature points below T_c are well known in Hopfield-type memories, simulated annealing, and stochastic-resonance systems. Mitchell, Hraber and Crutchfield (1993) also showed that "edge of chaos at T_c" is not a robust generic result. So the null you beat (T*/T_c ≈ 1) is a straw null. I'd verify the literature before calling P1 novel.

## Failure 1: the strong claim contradicts the ratio form

- Round 1 says a substrate with lower E_b shifts the window proportionally. The strong claim says an autonomous system below ~100 K falsifies it.
- Suppose a Titan organism is found. The ratio form predicts it uses low-barrier chemistry, so the defender can retreat to "E_b was lower, so it was out of scope." The strong claim is then unfalsifiable by construction, and the falsifier I accepted in Round 3 has no teeth.
- **Required fix:** E_b is fixed by the claim's own scope (covalent/H-bond, 0.1-1 eV, measured spectroscopically before the T is known). A cold organism whose information carriers fall in that range falsifies the claim. A carrier outside that range is out of scope. Without this pre-commitment, the strong claim and the ratio form cannot both be held.
- **Practical status:** The only live tests (Titan, >600 K surfaces) are unobservable on any current timescale. A falsifier that cannot be run does not make the claim empirical.

## Failure 2: P1's number is absorbed by free parameters

- "Fixed repair budget" is a free knob. T*/T_c will vary continuously with budget, so a band of 0.6-0.9 can absorb nearly any outcome.
- **Finite-size shifts:** In a sim of side L, the apparent T_c shifts by ~L^(-1/ν). A measured peak at "0.97 T_c" in a small lattice is not discriminating. P1 needs finite-size scaling, with the T*/T_c result stable as L grows.
- **Metric choice:** MI between persistent state and history under repair constraints mechanically biases toward the ordered side, because memory lifetime diverges below T_c. P1 may be a property of the metric, not of Intent dynamics.
- **Required fix:** Publish T*/T_c as an explicit function of the budget, and run it on a generic Ising/Hopfield null with the same metric. If the null also gives ≈0.7, Synchronism adds nothing.

## Failure 3: the Intent model has not committed

- You conceded that if the model cannot predict c = kT*/E_b before the run, the claim reduces to textbook. As far as I can see in the whitepaper, no c, no plateau width, and no saturation-parameter mapping are given.
- T ≡ ⟨V²⟩ still has no Boltzmann constant or mass, so even the unit of "T*" in the sim is not defined.
- Until the Intent model produces c from its own parameters, Section 4.7 is a restatement of known scaling with Synchronism vocabulary.

## What reverses the conclusion

- A pre-run Intent-model prediction of c and the plateau width, which a generic Ising null with the same metric then fails to reproduce.
- Or a measured organism or system with carrier E_b in 0.1-1 eV, autonomous, sustained outside 100-600 K.

## Questions

1. What are the Intent-dynamics parameters, and what is the explicit mapping to T and E_b, such that c is computed rather than fitted? Give a number.
2. Will you commit now that E_b is fixed by independent spectroscopy as a precondition of any scope claim, so that "lower E_b" cannot be invoked after the fact?

## Status

- **Held:** the weak claim; the (E_mem, E_act) two-scale window as textbook scaling; the autonomy rule as a form.
- **Narrowed:** the strong claim to systems with independently measured E_b in 0.1-1 eV. P1 survives only as a function of repair budget with finite-size scaling.
- **Failed:** the strong claim as currently stated (it is unfalsifiable via the E_b escape, and its tests are unobservable); P1's "non-generic" status (the null is straw and the budget is free); "foundational" T; ⟨V²⟩ as written.
- **Would settle:** (a) a committed numerical c and plateau width from Intent parameters before the run, beating a same-metric Ising/Hopfield null under finite-size scaling; (b) a pre-registered E_b measurement rule; (c) an autonomous system in scope outside 100-600 K.