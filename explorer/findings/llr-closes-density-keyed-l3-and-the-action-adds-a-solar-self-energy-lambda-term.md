# Finding: LLR closes density-keyed L3 with no L3 dependence. Where L3 differs, the Sun's own binding energy acts as a positive-Λ-like force on the planets

## Origin
Topic `does-llr-close-density-keyed-l3.md` (maintainer 2026-10-19, from the simulated-visitor researcher persona).
PREREG `explorer/scripts/llr_under_smoothed_l3_PREREG.md`, commit `edb0108`. It was committed before the script existed and before
any LLR number was fetched. Script: `explorer/scripts/llr_under_smoothed_l3.py` (+ `_output.txt`). It reuses the 09-23
kinematics (`density_keyed_gdot_solar_motion.py`) and the 10-15 `precession()` + EPM2011 table without modification.

## Summary
**Yes, the door is closed, and not by "probably".** With a smoothing kernel inside the action, the field equation is
identical to L2: varying Φ gives ∇·[C(ρ_s)∇Φ] = 4πGρ. So the Ġ/G = −Ċ/C argument carries over exactly. Under L3 the
ℓ = 1 pc exclusion is still **68/74**, with the same 6 survivors. Those survivors are γ = 2, ρ_c ≤ 10⁻³, locally Newtonian
to 10⁻⁸. The in-disc-knee laws the door names are all among the 68. The solar-neighbourhood density and the stellar
kinematics that drive Ġ are measured, not modelled, so the 10-13 "in-disc knees are a disc-equilibrium problem" caveat
does not reach this test.

What L3 adds is a striction force. The topic's sketch had its source wrong. Varying ρ puts the kernel on the striction
potential, **Ψ_s = K_ℓ ∗ [C′(ρ_s)|∇Φ|²]/8πG**. Its source is therefore the field energy of every body within ℓ, and near
the Sun that is the Sun's own gravitational self-energy (E/M ≈ 2.9×10¹¹ m²/s²). Earth's local field contributes only 4×10⁻¹⁰ of it. Relative
to the Sun, planets feel a **repulsive harmonic force a = +k r**, positive-Λ-like and universal per unit mass, with
k = s f☉ (E/M)☉ / (C ℓ²). On the EPM2011 perihelia this is the **first observable L2/L3 difference in the Solar System**.
It can only tighten the L2 verdicts, and it does so exactly where Ġ is blind: the small-ℓ hole where the Sun saturates C.

## Research Notes

### Derivation (kernel-smoothed L3)
Action density: −C(ρ_s)|∇Φ|²/8πG − ρΦ, with ρ_s = K_ℓ∗ρ. Varying ρ gives δρ_s(x)/δρ(y) = K(x−y), so
g = −∇Φ − ∇Ψ_s with Ψ_s as above (sign convention of the 08-26 (★)). Field energy is concentrated within ~R☉ ≪ ℓ, which
gives Ψ_☉(x) = C′(ρ_s,☉)E☉K(x−x☉)/C², with E☉ = |U☉| (n = 3 polytrope). The Sun sits at the kernel's stationary point,
so it feels no self-force. Each planet's own self-energy gives a compactness-dependent (Nordtvedt-type) piece suppressed by
(E/M)_body/(E/M)☉ (Earth 1.5×10⁻⁴). This is the only consistent action with a smoothing length. If the smoothing is
an observational coarse-graining rather than part of the action, there is no L3 to test.

The ℓ ≳ 30 AU lower edge (09-15) survives L3. It comes from flux conservation in the shared field equation, and the 09-15
composite-body theorem (F_L3 = 1) makes planets test particles in the medium. *Argued, not recomputed.*

### Results (from `_output.txt`)
Controls: analytic vs 09-23 finite-difference s agree to 4×10⁻⁵ wherever s > 10⁻⁶. The finite difference is useless
below s ~ 10⁻¹⁰, which is the whole Sun-saturated regime, so the analytic form was necessary. The harmonic-limit precession
numeric/analytic ratio is 1.000000.

| ℓ | Ġ excludes | striction excludes | L3 union | striction-only |
|---|---|---|---|---|
| 30 AU | 0 | 22 | 22 | 22 |
| 300 AU | 0 | 31 | 31 | 31 |
| 0.01 pc | 0 | 36 | 36 | 36 |
| 0.1 pc | 0 | 37 | 37 | 37 |
| 0.3 pc | 38 | 45 | 45 | 7 |
| **1 pc** | **68** | 57 | **68** | **0** |
| 3 pc | 66 | 45 | 66 | 0 |
| 10 pc | 62 | 0 | 62 | 0 |

- **At pc smoothing the striction is redundant.** Every striction exclusion is also a Ġ exclusion; Ġ is ~10³× stronger at
  1 pc. That holds because k ∝ f☉/ℓ² falls as ℓ⁻⁵ once the Sun stops dominating ρ_s.
- **In the hole it is the only constraint.** At γ = 0.489, k scales as ℓ^{6γ−2} ≈ ℓ^{0.93}, so the striction is strongest
  at the hole's upper edge (Saturn z = 6.5×10³ at 0.3 pc for ρ_c = 0.0079). For 21/32 γ = 0.489 grid laws, the RG
  elliptical law and 0/4 TEST-02 γ = 0.489 windows, the hole closes completely: no ℓ ≥ 30 AU passes both channels. The
  other 11 grid laws keep only ℓ ≤ 300 AU (≤ 0.0015 pc), and the 4 windows (lower ρ_c) keep ℓ ≤ 300–1000 AU. A 1000 AU ball in a disc almost never
  contains a star, so these cannot carry SPARC's smooth stellar profiles (09-15). **γ = 2 laws are untouched.** At
  Sun-saturated density their s is 10⁻¹³–10⁻⁵³.
- **Magnitudes at ℓ = 1 pc, framework law γ = 0.489, ρ_c = 0.0079:** k = 1.3×10⁻²³ s⁻²,
  i.e. an effective Λ = 3k/c² ≈ 4×10⁻⁴⁰ m⁻², about 4×10¹² times the cosmological value. Ψ_s itself is ~10¹⁰ m²/s².

### Earth–Moon and white dwarfs
- **LLR channels (P4).** Take the largest k that still passes the planets, 7.3×10⁻²⁷ s⁻². It gives an anomalous lunar
  perigee rate of 1.3×10⁻¹³ rad/yr, against LLR's K_gp = −0.0019 ± 0.0064 (Williams, Turyshev & Boggs 2004,
  gr-qc/0411113, verbatim) times the de Sitter rate. That rate is 9.30×10⁻⁸ rad/yr, *computed here*, because the paper
  does not print it. The product is σ ≈ 6×10⁻¹⁰ rad/yr, so the term is 4.5×10³ below. The Nordtvedt-type piece is
  2.6×10⁻¹⁷ of solar g, against Δ(M_G/M_I)_EP = (−1.0 ± 1.4)×10⁻¹³ (same paper, verbatim): 5×10³ below. So **LLR's
  only binding channel under L3 is still Ġ**, and the planets beat LLR on the striction term.
- **White dwarfs (P5).** At ℓ ≥ 1 pc, the tidal striction from neighbouring white dwarfs (E/M ~ 10¹³) dominates the
  Sun's own term: Sirius B is 13× at 1 pc and 48× at 3 pc, and the four nearest sum to ~120× at 10 pc. This is
  orientation-dependent and was not counted. It would strengthen the pc-scale striction, which is redundant there anyway.

### Pre-registered predictions
| # | Prediction | Outcome |
|---|---|---|
| P1 | ℓ = 1 pc under L3: 68/74, same 6 survivors | **HELD** |
| P2 | Striction alone at 1 pc ≥ 40/74, all Ġ-excluded; 0/74 at 10 pc | **HELD** (57; 0 striction-only; 0) |
| P3 | Hole closed for every γ = 0.489 grid law; not for every γ = 2 law | **REFUTED** on its first clause (21/32 closed; 11 keep ℓ ≤ 300 AU). Second clause held (36/36 γ = 2 laws keep a sub-pc ℓ) |
| P4 | Earth-centred + Nordtvedt pieces ≥ 10³ below LLR | **HELD** (4.5×10³, 5×10³; Earth-centred 4×10⁻¹⁰ of the Sun term) |
| P5 | Sirius B > 3× the Sun's k at 1 and 3 pc | **HELD** (13×, 48×) |

4/5 held. P3 failed because I took the hole's lower end too lightly. At 30 AU the striction scales with s ~ 10⁻¹², and
for low-ρ_c laws that is a few times too small.

## Implications for the Site
- **/for-researchers scope clause.** "Density-keyed L3 (striction) where the knee sits inside discs" should move from
  uncovered to closed: *"closed at every smoothing length the galaxy fits need (1–10 pc) by the same lunar-laser-ranging
  Ġ/G bound. Under the action the field equation is unchanged, so the bound carries over exactly (computed 2026-10-19)."*
  That leaves two doors. **The "probably closed, not shown closed" wording can be retired.**
- **New, citable, L3-only:** an action-based, density-keyed gravity with a smoothing kernel turns every star's
  gravitational binding energy into a source of a repulsive potential of range ℓ. In the Solar System that is a
  Λ-like force sourced by the Sun's own self-energy. To my knowledge this has not been written down for Refracted
  Gravity, whose authors postponed both the Lagrangian and D (M&D 2016 §2.2.1, §6). It belongs in the RG prior-art note
  as "we computed".
- **TEST-02 card.** Its Ġ line (09-23) needs a "(holds under L2 and L3)" tag, per the tag-γ-ℓ-L2/L3 memory.

## Action: Maintainer
- **P1** /for-researchers l.~24–35: close door 3 with the sentence above. Link this finding and PREREG `edb0108`. Count
  unchanged: this is a second root for an existing kill, not a new refutation.
- **P2** TEST-02 card and the /coherence-function "which C" table: add the L3 tag; add a row "C_ρ under L3, ℓ ≤ 0.3 pc →
  planetary perihelia (self-energy striction)".
- **P2** Back-annotate the research repo under the 09-15 smoothing-length proposal: under L3 the small-ℓ window shrinks
  from [30 AU, 0.1–0.3 pc] to [30 AU, ≤ 300 AU] for 11/32 γ = 0.489 grid laws (≤ 1000 AU for the TEST-02 windows) and closes for 21/32. It is unchanged for γ = 2.

## Open Threads
- **Galactic consequence of self-energy striction.** In a disc, Ψ_s ≈ s⟨E/M⟩_* /C, where the mass-weighted ⟨E/M⟩ is
  dominated by white dwarfs (and neutron stars, outside the Newtonian regime), not by main-sequence stars. At s ~ 0.1 that
  is a potential comparable to or larger than the whole Galactic potential (~4×10¹⁰ m²/s²), varying on the disc scale
  height. Every density-keyed L3 disc fit to date (10-13) used gas+star density and omitted it. That may be the real
  reason L3 in-disc knees are "a stability problem". It would make kernel-smoothed L3 sensitive to the remnant
  population, a prediction no other gravity theory makes, and almost certainly a fatal one.
- **Orientation-resolved WD tides** on the actual planetary orbits (Gaia positions for Sirius B / Procyon B / van Maanen 2).
- **Covariant RG** (the 09-23 open thread) is still the only escape from both channels.
