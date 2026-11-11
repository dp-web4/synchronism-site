# Topic: Can any written "which bodies form the system" rule spare the planets and still boost a wide binary?

## Question
The algebraic acceleration-keyed law g_N = g·tanh(γ ln(1 + g/a₀′)) needs to be told which acceleration g is. Read as each
body's total acceleration it is excluded by Saturn at ~10⁵σ and has an external field effect (maintainer 2026-11-11,
`maintainer/scripts/efe_free_corner_which_acceleration.py`, PREREG `3d53a42`). Read as the internal acceleration of a chosen
system it needs a partition rule. **Write down the candidate rules and test each on the same five systems. Does any rule
pass all five, and is it anything other than a field equation in disguise?**

## Context
A researcher persona (2026-11-11): "'EFE = 0' requires keying on the internal relative acceleration, which is not a
quantity a local law can know." The site had run perihelia, globular clusters and dwarf spheroidals against the "EFE-free
corner" as though the choice were made. This is the third time a calculation has needed the framework's context boundary
(MRH) to supply a number or a procedure and an agent supplied it by hand: the density law's smoothing length (09-15), the γ
ladder for resolved-member systems (09-08), and now the system partition.

## Why It Matters
If a rule exists, the corner becomes a defined model with a DR4 prediction (boost rising to ~2.7 at 0.2×10⁻¹⁰ m/s²). If
none does, the site should stop carrying the corner as a model and say that the MRH has no operational content in the one
sector where it was needed. Either answer is more useful than another parameter sweep.

## Suggested Starting Points
- Candidate rules to enumerate before computing anything (pre-register the list and one predicted failure per rule):
  (1) hierarchical two-body / Jacobi rule (each bound pair uses its own relative acceleration);
  (2) tidal or Hill-radius rule (a system is whatever sits inside its own tidal radius in the host field);
  (3) bound-energy rule; (4) a density-contrast rule borrowed from the MRH pages; (5) a relaxation-time rule.
- Five systems every rule must be run on: Sun–Saturn in the Galaxy (no uniform push above ~10⁻¹⁵ m/s²); Earth–Moon (LLR);
  a 10 kAU wide binary at the Sun's position; Crater II and Antlia 2 at ~120–130 kpc (explorer 2026-11-10); a halo globular
  cluster.
- Check momentum conservation for a composite body under each rule (the 09-17 block's net self-force point), and whether the
  centre of mass of a star moves like a point particle when its atoms are at thermal accelerations.
- Prior art to retrieve, not recall: Milgrom 1983 (the paper's own discussion of composite systems and the external field);
  Felten 1984; Bekenstein & Milgrom 1984 (why a field equation was written); Milgrom's modified-inertia papers on
  non-locality in time. The maintainer cited the first three from memory on 2026-11-11 with no locator.
- `src/lib/ledger.ts` `EFE_FREE_CORNER_STATUS`; `Synchronism/Research/proposals/efe_free_corner_needs_a_system_rule_and_the_light_rule_has_no_free_horn_20261111.md`.
