# Finding: The compander's direct tail against planetary precessions sets a floor of γ ≳ 0.87. That empties the point-level SPARC intersection without Q₂, but at galaxy level the EFE-free corner stays open, and it is cheaper than the Q₂ corner

## Origin
Topics `direct-tail-at-saturn-the-efe-free-solar-system-bound.md` (maintainer 2026-10-15) and
`planetary-ephemerides-vs-compander-tail-and-floored-rho-knee-crossings.md` (part 1; seeded 2026-09-22 and queued for 23 days).
PREREG `cbfa9c5` (`scripts/direct_tail_planetary_precession_PREREG.md`), written before any ephemeris number was fetched.
Script: `scripts/direct_tail_planetary_precession.py`. Output: `scripts/direct_tail_planetary_precession_output.txt`.

**First, the inheritance.** At γ = ½ the μ-convention compander is Milgrom's simple μ with a₀_simple = 2a₀, exactly. Any
exclusion at γ ≈ ½ is therefore MOND's simple-μ branch failing, and nothing here is specific to the framework. The new
content is the floor: the γ at which the power-law return 1 − μ ≈ 2x^(−2γ) becomes steep enough to pass the planets.

## Summary
With a₀(γ) taken from the frozen SPARC profile TEST-25 uses, the EFE-free direct tail predicts a retrograde Saturn
supplementary precession of −9,576 mas/cy at γ = 0.489. EPM2011 measures −0.32 ± 0.47, a 2×10⁴σ miss. The smallest γ that
passes every planet at 3σ is **0.87** on EPM2011 (Saturn binds; Mars alone gives 0.83). On the more conservative INPOP15a
full-refit interval it is **0.78**. The SPARC point-level profile pays ΔBIC +59 (+42 on INPOP15a) to get there, so the
point-level intersection is empty without the quadrupole. At galaxy level, under the published nuisance treatment, the
SPARC 95% interval is [0.42, 0.95]. γ ≈ 0.87–0.95 therefore costs about 1.1–1.3σ, against about 1.8–2σ for the
Q₂-passing γ ≳ 1.5. **The direct tail does not close the EFE = 0 escape. It narrows it to γ ∈ [0.87, ~0.95–1.5] at galaxy
level. For readings with no external field, the binding Solar-System number is 0.87, not 1.5.**

## Research Notes

### Bounds (verbatim, fetched after the PREREG)
- **EPM2011** (Pitjeva & Pitjev 2013, MNRAS 432, 3431, Table 4, given there in mas/yr; ×100 here):
  - Mercury −2.0 ± 3.0, Venus 2.6 ± 1.6, Earth 0.19 ± 0.19 mas/cy.
  - Mars −0.020 ± 0.037, Jupiter 58.7 ± 28.3, Saturn −0.32 ± 0.47 mas/cy.
  - Table 5 lists the same σ in ″/yr, which confirms the unit. The paper does not say whether these are formal or
    realistic errors. Iorio's comment (arXiv:1907.01100) quotes Saturn's σ as 0.47 mas/cy, consistent with this.
- **INPOP15a** (Fienga et al. 2016, arXiv:1601.00947, Table), with each supplementary advance fitted in a full ephemeris
  refit:
  - Criterion 1, Δ(O−C) < 35%: Mercury 0.0 ± 3.1, Saturn 1.2 ± 5.0 mas/cy. This is the conservative sensitivity.
  - Criterion 2: Saturn 0.05 ± 0.20.
  - The same table recaps INPOP10a Saturn as 0.15 ± 0.65, and P13 as −0.32 ± 0.47, matching EPM2011 above.

### Instrument
- **Tail.** g = g_N(1 + ε), with ε = 2/((1+x)^(2γ) − 1) and x = g/a₀, solved by fixed point. δg = g_N·ε is computed
  without subtraction (a first run computed g − g_N and rounded tails below 10⁻¹⁶ g to zero; no verdict moved).
- **Precession.** Secular dϖ/dt from the Gauss equation with R only, averaged numerically over the mean anomaly with real
  a and e.
- **Controls.**
  - Constant-A analytic √(1−e²)A/(na): matched to 10⁻¹⁵ at Mercury and Saturn.
  - GR via the effective radial term −3GMh²/(c²r⁴): 42.9807″/cy numerically against 42.9807″/cy analytically.
  - Identity: simple μ with constant δg = a₀ = 1.2×10⁻¹⁰ gives −8.07″/cy at Saturn analytically. Scaled to
    2a₀ = 1.10×10⁻¹⁰ that is −7.40″/cy; the compander at γ = ½ gives −7.42″/cy.

### Table (EPM2011; pred in mas/cy, z = (pred − obs)/σ)

| γ | a₀ (×10⁻¹¹) | SPARC ΔBIC_profile | Mars z | Saturn pred | Saturn z |
|---|---|---|---|---|---|
| 0.489 | 5.33 | 0 | −1.1×10⁵ | −9,576 | −2.0×10⁴ |
| 0.600 | 7.06 | +9.9 | −3,780 | −733 | −1,560 |
| 0.700 | 8.63 | +27.1 | −180 | −72.7 | −154 |
| 0.800 | 10.2 | +46.0 | −8.1 | −7.28 | −14.8 |
| 0.900 | 11.8 | +64.4 | +0.12 | −0.735 | −0.88 |
| 1.000 | 13.4 | +81.5 | +0.52 | −0.075 | +0.52 |
| 1.500 | 21.5 | +145.6 | +0.54 | −1×10⁻⁶ | +0.68 |

The tail scales as δg ∝ r^(4γ−2). For γ > ½ it grows outward, so Saturn's lever beats Mars's tighter σ, by 0.04 in γ.
Because δg/g changes by orders of magnitude from planet to planet, a single GM☉ cannot absorb it.

### Pre-registered predictions

| ID | Outcome |
|---|---|
| P1 controls | **Held.** Constant-A to 10⁻¹⁵; GR 42.9807″/cy. |
| P2 ≥ 50 mas/yr, retrograde, at 0.489 | **Held.** −95.8 mas/yr. |
| P3 floor in [0.60, 0.80] | **Refuted** on the primary bound (0.87). Held on the INPOP15a sensitivity (0.78). My hand estimate (0.65) used σ in mas/yr when the table is in mas/cy, a factor of 100. The persona's 0.75–0.85 brackets the conservative number and sits just under the primary. |
| P4 whole point-level interval excluded | **Held.** At 0.600, Saturn z = −1,560. |
| P5 Saturn binds | **Held, narrowly.** Mars alone gives 0.83. |
| P6 γ 1.5–1.7 passes with ≥ 10× margin | **Held.** The margin is about 10⁵–10⁸. |
| P7 ΔBIC_profile ≥ +30 at the floor | **Held.** +59. |

Two other observations:
- **2σ.** No γ passes all six planets at 2σ, because EPM2011's Jupiter value sits +2.07σ from zero on its own. The tail
  is retrograde, so it only makes that worse. Without Jupiter, the 2σ floor is 0.88.
- **Fixed a₀.** Holding a₀ at 5.33×10⁻¹¹ instead of profiling it lowers every floor by about 0.05 (EPM2011 3σ: 0.82).
  The profiled a₀ rises with γ, which lengthens the tail.

### Galaxy-level reading (not re-run here; cited)
- **Source.** `findings/gamma2-pin-under-the-published-method-…md`, Li+2018 nuisances with σ_int = 0.034:
  - γ̂ = 0.58–0.62, galaxy-level 95% [0.42, 0.95].
  - Arm C bootstrap z: 0.8 → 1.0, 1.0 → 1.3, 1.5 → 1.8, 2.0 → 2.0.
- **What follows.** At galaxy level the EFE-free corner [0.87, ~0.95] costs about 1.1–1.3σ. If 2σ is the cut, it runs to
  about 1.5.
- **Caveat.** That pipeline frees Υ, D and i per galaxy, so its a₀(γ) is not the profile used for the precessions. The
  fixed-a₀ sensitivity (−0.05) suggests the floor is not fragile to that, but the joint run was not done.

### What this does and does not reach
- **Reaches** every reading in which the Sun's field enters an acceleration-keyed C with the SPARC-fitted (γ, a₀):
  algebraic C_g, AQUAL or QUMOND (spherical, EFE subdominant at x ≫ 1), and any "EFE = 0 structurally" reading.
- **Does not reach** the density-keyed C_ρ (interplanetary ρ ≪ ρ_crit gives the 3.17× floored rescale; see the 09-15
  interplanetary-medium result), or modified inertia.
- **Method caveat.** These are supplementary precessions fitted without the tail in the dynamical model, the standard
  Iorio-style test. INPOP15a's are full-refit estimates of a generic advance. A dedicated fit with an r^(4γ−2) law
  would also use the mismatch between ranging and mean motion, and could move the floor either way. It was not done.

## Implications for the Site
1. **/galaxy-rotation, "A separate, larger effect: the direct tail".** The sentence "the size of the exclusion for the
   compander specifically is not yet computed" is now false. Replacement: *Computed (explorer 2026-10-15): on EPM2011
   supplementary perihelion precessions the direct tail excludes γ < 0.87 at 3σ (Saturn binds; INPOP15a's conservative
   full-refit interval gives 0.78), and the SPARC-preferred γ = 0.489 misses Saturn by 2×10⁴σ. That empties the
   point-level SPARC intersection without the quadrupole. At galaxy level it does not: the published-nuisance interval
   reaches 0.95, so a reading with no external-field effect survives at γ ≈ 0.87–0.95 for about 1.2σ of SPARC cost, less
   than the ~2σ the Q₂-passing γ ≳ 1.5 needs.* Keep "inherited from simple μ at γ = ½".
2. **/mond-unification "the framework predicts EFE = 0 structurally".** That reading's Solar-System bound is now 0.87,
   not Q₂. Its next test is the galaxy-side EFE detection (Chae et al. 2020, ApJ 904, 51: "statistically detected at more than 4σ from a blind test of 153 SPARC rotating galaxies"; 8–11σ in individual "golden" galaxies), not Cassini. Untested
   in-house, not refuted. Say so.
3. **TEST-25 card scope line.** Add one row to the reading × test matrix:

   | Reading | Q₂ (Cassini) | direct tail (EPM2011) |
   |---|---|---|
   | acceleration-keyed with EFE | needs γ ≳ 1.5 | needs γ ≳ 0.87 |
   | EFE = 0 | n/a | needs γ ≳ 0.87 |

## Action: Maintainer
- /galaxy-rotation direct-tail box: replace the "not yet computed" sentence with item 1 above. Move the old sentence into
  the revision-note `<details>`.
- /tier-1-existing#TEST-25: add the matrix row; cite the EPM2011 and INPOP15a values with their units (mas/cy; the paper
  prints mas/yr).
- /mond-unification: next to the EFE = 0 sentence, add "Solar-System floor γ ≳ 0.87 (direct tail); galaxy-side EFE
  detection (Chae+2020) not yet confronted".
- site_lint: a REQUIRES rule so that any "direct tail" sentence carries 0.87 or "computed". Retire "not yet computed for
  the compander".

## Open Threads
- **EFE = 0 against Chae+2020 / Chae+2021.** This is the actual adjudicator of the corner the direct tail leaves open.
  Their EFE detection uses the same SPARC data, so a galaxy-level re-score is the natural next run.
- **Joint fit.** Refit the galaxy-level nuisance pipeline with a₀(γ) and feed it to the precession code; one run.
- **Part 2 of the 09-22 topic** (floored ρ-law knee crossings: atmosphere to LEO, LLR) is untouched. It stays open.
- **The units trap.** My P3 miss came from reading the precession table as mas/yr. EPM2011 prints mas/yr and INPOP prints
  mas/cy, so the same Saturn number differs by 100× between papers. This belongs in the table-transcribed-numbers
  register.
