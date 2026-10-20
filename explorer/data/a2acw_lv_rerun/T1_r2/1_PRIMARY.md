# Round 1: PRIMARY (Defender)

## Bounding the claim

I am not defending the whitepaper's "~300 K ± 100 K is a universal law" as written. Three parts of it I drop up front:
- The "0.00001% of the cosmic range" figure is rhetorical. A linear fraction of a range with no natural measure says nothing.
- The silicon range of 253-423 K is a vendor spec, not physics. SiC electronics run above 700 K, and superconducting logic runs near 4 K.
- Carbon-life and silicon-computing "convergence" is not independent evidence. Silicon computing was built by 300 K carbon life, for 300 K environments. That is a selection effect.

## Strong claim (falsifiable)

> Any **autonomous** system (self-repairing, error-correcting, adaptive, with no external refrigeration or ordering from a different-temperature subsystem) built from **electromagnetically bonded matter** (bond/barrier energies E_b ~ 0.1-1 eV) operates at **kT/E_b ≈ 1/40 to 1/10**, i.e. roughly **150-450 K**.

**Falsifier:** a demonstrated autonomous, self-maintaining, open-ended adaptive information processor of this type sustained below ~100 K or above ~600 K, with its own boundary drawn so no 300 K subsystem supplies its order. Quantum computers at 10 mK do not count, because they sit inside a 300 K support apparatus. They fail the autonomy condition.

## Weak claim (likely true)

> All known life and all conventional human-built computation operate in ~250-400 K. This is explained by a substrate-independent scaling argument: error rate ~ exp(−E_b/kT) must be low enough for memory to persist, while reaction rates must be high enough for updates. The temperature falls out of E_b, not out of the particular substrate.

## What "transcends substrate" means

I'll separate three readings:

1. **Engineering reading ("any hardware works at 300 K"):** false and abandoned. Counterexamples are cryo-CMOS, SiC, and superconducting logic.
2. **Information reading:** Landauer's bound (kT ln2 per erasure) and the thermal error rate exp(−E_b/kT) are substrate-independent *in form*. This is true and standard, but not novel to Synchronism.
3. **Physics reading, which I defend:** the *constraint* is a dimensionless ratio, kT/E_b, and that is what transcends substrate. The *number* ~300 K does not transcend it. It is the value for E_b ~ 0.5 eV chemistry.

**Consequence:** the law predicts that a substrate with a different E_b shifts the window proportionally. Examples are low-barrier systems like Rydberg or cold-atom assemblies, or hypothetical nuclear-scale chemistry. The Synchronism-specific claim is then:

> *T is a control parameter that selects which patterns persist, via the kT/E_b ratio.*

That is testable in the whitepaper's own simulation proposal. Vary T and E_b independently in the Intent dynamics. The complexity peak should track T ∝ E_b, not sit at a fixed T.

## Honest status of Synchronism's contribution

The kT/E_b argument is already textbook statistical mechanics. Synchronism adds value only if its Intent-dynamics model **derives** the window (including the width and the E_b scaling) rather than assuming it. As written, "T ≡ ⟨V²⟩" restates kinetic temperature and predicts nothing new. The whitepaper's testable list also never specifies a complexity metric, so "complexity peak at ~300 K" is currently not falsifiable. I propose the metric be fixed in advance, for example mutual information between a persistent state and its history, or a sustained-replication rate.

## Questions for the Challenger

1. Do you accept the physics reading (ratio, not number) as the proper scope of "transcends substrate"? If not, what is your counterexample to the ratio form?
2. Is there a pre-registered complexity metric you'd accept as making "peak at intermediate T" falsifiable?

## Status

- **Held:** the kT/E_b scaling form; the weak claim.
- **Narrowed:** the strong claim to autonomous EM-bonded systems; "universal 300 K" to "universal ratio."
- **Failed:** the engineering reading, the silicon-convergence-as-independent-evidence argument, and the cosmic-fraction rhetoric.
- **Would settle:** (a) an autonomous adaptive system found outside ~100-600 K, or (b) a simulation with independent T and E_b showing the complexity peak does not scale with E_b.