# Finding: A Taxonomy of Synchronism's Failures — What's Fixable, What's Fundamental

## Origin
Topic: `nature-of-failures.md` — "Are these failures the kind that get fixed with better parameters, or do they reveal fundamental limits?"

## Summary

Synchronism's documented failures fall into four distinct categories with very different implications: (1) process failures (reparametrizations — fixable by better literature checking, not better physics), (2) mean-field limitations (inherent to any single-parameter order parameter, well-understood in condensed matter, fundamental), (3) directional errors (qualitative predictions in the wrong direction — fatal for specific claims), and (4) structural gaps (logical/mathematical incompleteness in the foundations). The site currently treats all failures with the same "Failed" badge, losing crucial information about what each failure means for the framework's viability. The nature of the failures matters more than their count.

## The Four Categories

### Category 1: Process Failures (Reparametrization)

**Examples:**
- 23 superconductor predictions = Abrikosov-Gor'kov (1960) in η notation
- 64% of chemistry correlations = known physics restated
- a₀ = cH₀/(2π) = known dimensional coincidence (Milgrom 1983, McCulloch 2007, Verlinde 2017)

**What this means:** The theory didn't predict something wrong — it "predicted" something already known. These are failures of the *research process* (insufficient literature review in A2ACW sessions), not failures of the physics. They tell us nothing about C(ρ)'s validity.

**Fixable?** Yes, trivially — by checking literature before claiming novelty. The site already does this retroactively via "Reparametrization" badges. The fix is to do it *before* publishing claims.

**Site implication:** These should be clearly separated from genuine predictive failures. The superconductivity page already does this exemplarily. The chemistry page does not.

### Category 2: Mean-Field Limitations (Fundamental)

**Examples:**
- 53% melting point errors — crystal structure dominates, C(ρ) has no structural information
- 2× critical exponent errors — universality class physics requires renormalization group
- 85% sound velocity errors in some regimes — phonon dispersion requires microscopic detail

**What this means:** These failures are *expected* and *well-understood* in condensed matter physics. C(ρ) is a mean-field order parameter. Mean-field theory is known to fail in three crucial ways:

1. **Critical exponents**: The Ginzburg criterion proves that mean-field critical exponents (β=0.5, ν=0.5, γ=1) are wrong below the upper critical dimension (d=4). In 3D, the true Ising exponents are β≈0.326, ν≈0.630, γ≈1.237. No single-parameter mean-field theory can produce correct 3D critical exponents — this is a theorem, not a calibration issue.

2. **Crystal structure effects**: Melting depends on the discrete symmetry of the crystal lattice (FCC, BCC, HCP, diamond cubic). A continuous function of density cannot capture discrete crystallographic information. The Lindemann criterion (melting when vibrational amplitude reaches ~10% of nearest-neighbor distance) works better precisely because it includes lattice geometry.

3. **Microscopic detail**: Sound velocity requires the phonon dispersion relation, which depends on atomic mass, bond stiffness, and crystal structure. The Debye model (sound velocity from elastic constants) already captures this. C(ρ) adds nothing because density alone doesn't determine elastic constants.

**Fixable?** Not within the C(ρ) framework. These limitations are intrinsic to any approach that uses a single macroscopic parameter to predict phenomena governed by microscopic structure. You could add parameters (crystal structure type, bond character, etc.), but this transforms C(ρ) from "one equation" into a multi-parameter model, losing the framework's central appeal.

**Site implication:** The site should explicitly state that these failures are *expected* mean-field limitations, not mysterious shortcomings. This is actually a stronger position than "we failed" — it's "we understand exactly why we failed, and the failure boundary tells us where the mean-field description breaks down." This is informative, not damaging.

### Category 3: Directional Errors (Fatal for Specific Claims)

**Examples:**
- Bullet Cluster sign error: CFD substrate predicts dark matter should be viscous ("sticky"), but 1E 0657-56 shows dark matter is collisionless (passes through itself while baryons interact)
- Fractal Coherence Bridge: 0/7 boundaries predicted — not just wrong quantitatively, wrong categorically

**What this means:** These aren't quantitative misses that parameter tuning could fix. The Bullet Cluster error is the theory predicting the wrong *sign* of an effect — dark matter should be MORE interactive if it's a low-coherence fluid, but observations show it's LESS interactive than baryons. No parameter adjustment can fix a sign error.

The Fractal Coherence Bridge (0/7) isn't just poor accuracy — it's zero predictive power, meaning the model has no information content for this phenomenon.

**Fixable?** Not by parameter adjustment. The Bullet Cluster error would require rethinking the entire "dark matter = viscous decoherent fluid" interpretation. The sign error isn't in the calculation — it's in the conceptual mapping between C(ρ) and dark matter phenomenology.

**Site implication:** These deserve elevated status — not just "Failed" badges but "Structural Falsification" or "Conceptual Error" designation. The Bullet Cluster sign error currently sits in a list alongside quantitative misses. It should be prominently identified as a *qualitative* failure that falsifies a specific interpretation, not just a number that's off.

### Category 4: Structural Gaps (Foundational Incompleteness)

**Examples:**
- Lorentz invariance: Nielsen-Ninomiya theorem means discrete lattice updates cannot produce continuous Lorentz symmetry
- Born rule circularity: Derivation assumes what it claims to prove (acknowledged)
- |S| ≈ 2.39 calculation error: E(a,b) = −cos(a−b) gives 2√2, not 2.39 (see companion finding)
- R(I) correction at 10⁻⁸⁰: "Intent" field's physical effect is negligible to the point of unfalsifiability

**What this means:** These are not failed predictions — they're logical/mathematical gaps in the framework's foundations. They don't say "the theory predicted X and reality showed Y." They say "the theory hasn't yet established that its foundations are self-consistent."

**Fixable?** In principle, yes — foundational gaps can sometimes be closed (e.g., if emergent Lorentz invariance from lattice models is demonstrated). But Lorentz invariance from a discrete substrate is an open problem in quantum gravity that decades of lattice gauge theory haven't solved. The Born rule circularity is a problem shared with most interpretations of QM, so it's not uniquely damaging.

**Site implication:** These should be listed separately from predictive failures. They're open problems, not failures. The site partially does this (the honest assessment acknowledges them) but doesn't distinguish them from predictive failures in the badge system.

## The Pattern That Emerges

When you sort failures by category, a clearer picture of C(ρ) appears:

| Category | Count | Implication |
|----------|-------|-------------|
| Process failures (reparametrization) | ~30+ | Methodology problem, not physics |
| Mean-field limitations | ~5 | Expected; tells us where C(ρ) breaks down |
| Directional errors | 2 | Fatal for specific claims (DM, fractal) |
| Structural gaps | 4+ | Open problems, not predictions |

**The theory is not uniformly failing.** It's failing in specific, diagnosable ways:
- Where it re-derives known physics, the methodology failed
- Where it misses quantitatively, mean-field theory's known limits are responsible
- Where it gets the direction wrong, specific interpretive claims are falsified
- Where foundations are incomplete, work remains to be done

This is actually a more nuanced and more credible story than either "everything failed" or "53% error is just parameter tuning."

## What This Means for the "Physics or Philosophy?" Question

The failure taxonomy directly informs the epistemological status question:

- **If C(ρ) is a physical law** (Framing 1): The directional errors and mean-field limitations are damaging. A fundamental law should work everywhere.
- **If C(ρ) is a universal scaling relation** (Framing 2): The mean-field limitations are expected (Zipf's law also fails in detail). The directional errors damage specific interpretations but not the scaling pattern.
- **If C(ρ) is an organizational framework** (Framing 3): None of these failures are particularly problematic — the framework is valued for organizing, not predicting.

The failure pattern most naturally supports Framing 2: C(ρ) captures a genuine scaling pattern (the tanh sigmoid across density) that works where mean-field descriptions work and fails where they fail. This is how effective theories behave — they have a domain of validity.

## Action: Maintainer

1. **Add failure taxonomy to honest assessment**: Distinguish process failures, mean-field limitations, directional errors, and structural gaps. This is much more informative than a flat list.
2. **Elevate Bullet Cluster**: Move from "one failure among many" to "structural falsification of the DM-as-viscous-fluid interpretation."
3. **Contextualize mean-field failures**: Add a brief explanation: "These errors are expected for any mean-field theory in 3D and tell us the boundary of C(ρ)'s applicability."
4. **Separate reparametrizations from predictions**: The "0 unique confirmed predictions" count already does this, but the failure pages still mix reparametrizations with genuine predictive failures.

## Open Threads

1. **Is there a systematic pattern in the quantitative errors?** Do the 53% melting errors scale with crystal symmetry? Do the sound velocity errors correlate with coordination number? Systematic patterns would reveal what information C(ρ) is missing.
2. **What's the domain of validity?** If C(ρ) works where mean-field works (high coordination, weak fluctuations, far from critical points), that's a well-defined and useful domain. Mapping this boundary would turn failures into information.
3. **Can the directional errors be rescued by interpretation change?** If "dark matter as incomplete decoherence" is abandoned (due to Bullet Cluster), does the coherence framework still have anything to say about dark matter? Maybe — through the MOND unification route, which doesn't require a viscous DM interpretation.
4. **Comparison to MOND's failure history**: MOND also failed (clusters, Bullet Cluster) and survived by being reinterpreted. How did MOND handle its failures, and is there a lesson for Synchronism?
