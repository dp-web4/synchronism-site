# Topic: EFE = 0 as a class test: the framework can't be tested on it, but its identifiable relative can

**Priority: MEDIUM**
**Seeded:** maintainer 2026-09-11

## Question

Every gravity law of the form ∇·[ε(ρ)∇Φ] = 4πGρ is linear in Φ, so the internal solution is independent
of any external field. That means **no MOND-type external field effect**, for the whole class, Refracted
Gravity included. Existing data claim an EFE: Chae et al. 2020 in SPARC outer curves, McGaugh & Milgrom
2013 in Andromeda dwarfs, Crater II, and NGC 1052-DF2/DF4. **Is the class member that actually fits discs
(RG at a knee inside the sampled range) testable against those data, where this framework was not?**

## Context

- PREDICTIONS (2026-08-05) ruled EFE = 0 **not-evaluable** *for this framework*. At Chae's radii the density
  law misses the curves by 3–4 dex, 38–92× the EFE signal. That gate is about the framework's baseline, not
  the class. RG's baseline on SPARC is 188–1252 in χ²/N, far closer, so the gate needs re-checking per member.
- Visitor researcher persona 2026-09-11: "the one clean discriminator from MOND, EFE = 0, is sitting
  untested on public data", and it "would survive the framework's demise, like the no-go."
- The globular-cluster run (2026-09-07) already showed MOND survives those clusters *because of* the EFE,
  so there is precedent here for EFE as the discriminating variable.

## Guards

1. **Check prior work first.** `explorer/findings/mond-efe-three-test-discriminator-verdict.md` and
   `explorer/findings/scripts/crater2_discrimination_summary.py` exist. Read them before planning.
2. **Apply the standing baseline gate** (PREDICTIONS, 2026-08-05): a structural prediction is testable only
   where the signal exceeds the model's own baseline error on the same observable at the same radii.
   Compute that ratio for each RG parameter set before any EFE comparison. If it fails, "not-evaluable"
   extends to the class, and that is the finding.
3. **"Linear in Φ" is not "no effect at all."** In the divergence form, ε varies with the system's own ρ,
   so a uniform external field is refracted by ∇ε. That produces tidal-like distortions ∝ g_ext·∇ε, not a
   suppression of the internal boost. State what the class predicts before saying it is contradicted.
4. **Chae 2020 is contested** (Freundlich et al.; Paranjape & Sheth). An EFE-null class test inherits that
   dispute; name it, and adjudicate on the statistic, not on the headline σ.

## Why It Matters

This is the one axis on which the density-keyed class makes a qualitatively different prediction from MOND
at every placement of the knee. If a member that fits discs can be put against EFE data, the result is a
class-level statement that outlives this framework in either direction. If no member passes the baseline
gate, EFE = 0 is untestable for the whole class, which is worth knowing too.

## Suggested Starting Points

- Chae et al. 2020 (ApJ 904, 51); McGaugh & Milgrom 2013 (ApJ 766, 22); Crater II (Caldwell et al. 2017);
  van Dokkum et al. 2018 (DF2)
- `/mond-unification` §EFE (the three qualifications already on the site)
- `explorer/findings/scripts/l2_field_equation_on_sparc.py`: RG residuals at Chae's radii are one step away
- Topic `refracted-gravity-sparc-refit-under-l2-plus-striction.md`: a refit member is the better test object
