# Finding: The LLR bound on density-keyed G — the ingredients are prior art, the combination was not found, and the ℓ = 10 pc end was ~50× too strong

## Origin
Topic `is-the-llr-density-keyed-g-bound-prior-art.md` (maintainer 2026-11-18), all three bullets: prior art, the
screening scope, and a re-derivation with a measured gradient instead of "an e-fold over ℓ".
PREREG `6c15fc7` (`explorer/scripts/llr_bound_measured_gradient_PREREG.md`) was committed before the script existed and
before any Gaia rows were returned. Script: `explorer/scripts/llr_bound_measured_gradient.py`; output
`..._output.txt`.

## Summary
- **Prior art.** No source read applies lunar laser ranging (LLR) to a G keyed on parsec-smoothed ambient density. Both
  ingredients are published:
  - the kinematic step (spatial gradient × observer velocity → laboratory drift) is Berengut & Flambaum 2010, eq. (4),
    for α;
  - ambient-density-keyed couplings with an algebraic minimum are Olive & Pospelov 2008, eq. (2.7). That paper holds G_N
    fixed.
  - The register should credit both ingredients. On the six sources read, the bound itself is unclaimed. That is "not
    found", not "new".
- **The printed range is right at ℓ = 1 pc and wrong at 10 pc.**
  - The measured rate comes from the Gaia DR3 census to 30 pc (9,356 sources plus 17 bright stars added by hand, each
    weighted by its heliocentric radial velocity).
  - It matches v⊙/ℓ at ℓ = 1 pc (2.3×10⁻⁵ yr⁻¹, set by α Cen and Barnard's Star).
  - Beyond that it falls roughly as ℓ^−2.6, because the stars in the kernel average down as √N: 1.7×10⁻⁶ at 3 pc and
    4–8×10⁻⁸ at 10 pc, which is 25–50× below the site's 2×10⁻⁶.
  - The 2σ bound is therefore |d ln G_eff/d ln ρ_s| ≲ **1×10⁻⁸ (ℓ = 1 pc), 1.5×10⁻⁷ (3 pc), 3–6×10⁻⁶ (10 pc)**, not
    1×10⁻⁸–1×10⁻⁷.
  - For ℓ ≳ 30 pc there is a floor of ≈ 5×10⁻⁵, set by the Galaxy's radial density gradient and the Sun's 11 km/s inward
    motion.
  - At every ℓ the bound stays at least about four orders below O(1). The kill count (68/74) does not change.
- **Screening escapes, but this framework cannot use it.**
  - Screened or stiff-field models escape because each body pins the field to its own interior density (Olive & Pospelov
    §3–4; Will 2014 §3.3.3). The coupling is then keyed on the body, not the ambient.
  - That requires ℓ ≲ the body size. The framework's own wide-binary and galaxy-fit requirements set ℓ ≫ 10⁴ AU, which
    forbids it.

## Research Notes

### 1. Prior art (verbatim, via a web-fetch agent; locators below)
| Source | Gradient × motion → drift (a) | Ambient-density coupling (b) | Screened bodies (c) | Bears on G? |
|---|---|---|---|---|
| Berengut & Flambaum, arXiv:1008.3957 | **Yes.** §III, eq. (4): α̇/α\|_lab = 1.35×10⁻¹⁸ cosψ yr⁻¹ from the Sun's 369 km/s through the "Australian dipole" | No (a cosmological Φ dipole) | No | §VI cosmology only |
| Olive & Pospelov, arXiv:0709.3825 (PRD 77, 043524) | No ("the temporal change of α dominates over the possible spatial variation", §1) | **Yes.** eq. (2.7) φ_min = φ_m ρ/(ρ+Λ₂); "the local environment determines the field dependent couplings" (§3) | **Yes.** Fields are "frozen to their respective minima … except for a small region near the surface" (§3); symmetry restored "provided that Λ₂ < ρ⊕" (§4) | **No.** G_N is a fixed prefactor (eqs. 2.12, 4.28); ΔG_N only by pointer to Clifton, Mota & Barrow 2005 |
| Shaw & Barrow, gr-qc/0512117 | No | Partial (local dilaton tracks the *cosmological* time evolution) | No ("local virialisation does not stabilise the value of the dilaton") | Dilaton generally |
| Belgacem et al., arXiv:1812.11181 | No | No (G_eff follows the cosmological background down to LLR scales) | **Yes.** Screening (Vainshtein, chameleon) "can however be immune to this bound" (§2) | Yes; uses Ġ/G = (7.1 ± 7.6)×10⁻¹⁴ yr⁻¹, cited as Hofmann & Müller 2018 |
| Will 2014 LRR, arXiv:1403.7377 | Indirect: "the rate of variation of the gravitational constant could depend on the velocity of the frame" (§3.1.2), but only via *cosmological* time variation | Via the asymptotic field value, not local density | Chameleon suppresses the field "outside bodies like the Sun and Earth" (§3.3.3) | ξ: "galaxy-induced anisotropy in the local gravitational constant" (§3.2) |
| Uzan 2011 LRR, arXiv:1009.5514 | None found in §1–3.4. **§5.4.2 and §6 were unreadable** (HTML truncated, PDF stream compressed) | — | — | — |

- **Reading of the table.**
  - The archive's argument is Berengut–Flambaum's kinematics applied to an Olive–Pospelov-type ambient keying, with G as
    the coupling and LLR as the clock.
  - Will's ξ is the nearest PPN object. It is a *potential*-keyed anisotropy of G from the Galaxy, not a density-keyed
    magnitude.
  - **Not read, and the most likely places for an earlier statement:**
    - Uzan §5.4.2 and §6;
    - Clifton, Mota & Barrow 2005 (MNRAS 358, 601, "Inhomogeneous gravity");
    - Mota & Barrow 2004 on α in virialised regions.
  - Until those are read, the register should say "not found in six sources", not "new".
- **Hofmann & Müller 2018 value.** (7.1 ± 7.6)×10⁻¹⁴ yr⁻¹, confirmed only through Belgacem et al.'s eq. (2.1) quoting it.
  The primary source was not fetched. Will 2014 Table 5 still carries the older (4 ± 9)×10⁻¹³ yr⁻¹.

### 2. Measured rate (Gaia DR3, r < 30 pc)
- **Kernel.** For a Gaussian kernel, only radial velocities enter: dρ_s/dt = Σ mᵢ W(rᵢ)(−rᵢ v_r,ᵢ/ℓ²).
- **Inputs.**
  - Masses from M_G (piecewise main-sequence relation; white dwarfs 0.6 M⊙; M_G > 16 at 0.05 M⊙).
  - Missing radial velocities (~30 %) drawn from N(0, 35 km/s), 1000 draws.
  - The mass density inside 10 pc comes out at 0.034 M⊙/pc³, about right for stars plus remnants.
- **Identity control.** The 09-23 hand list alone at ℓ = 1 pc reproduces the 09-23 "named stars" 1.62×10⁻⁵ exactly
  (2.07×10⁻⁵ × 0.1155/0.147).

| ℓ (pc) | stars in 2ℓ | measured \|d ln ρ_s/dt\| (yr⁻¹), median [16–84 %] | RV-clean variant | site's v⊙/ℓ | 2σ bound (median) |
|---|---|---|---|---|---|
| 1 | 3 | 2.32×10⁻⁵ [2.22–2.42] | same | 2.05×10⁻⁵ | **9.6×10⁻⁹** |
| 2 | 31 | 6.3×10⁻⁶ [4.7–7.8] | 6.2×10⁻⁶ | 1.0×10⁻⁵ | 3.5×10⁻⁸ |
| 3 | 93 | 1.7×10⁻⁶ [1.1–2.3] | 1.5×10⁻⁶ | 6.8×10⁻⁶ | 1.3–1.5×10⁻⁷ |
| 5 | 321 | 3.4×10⁻⁷ [1.9–5.0] | 1.1×10⁻⁷ | 4.1×10⁻⁶ | 0.7–2×10⁻⁶ |
| 10 | 2,640 | 4.3×10⁻⁸ [1.6–6.7] | 8.3×10⁻⁸ | 2.05×10⁻⁶ | **2.7–5.6×10⁻⁶** |
| 30–300 | — | smooth disc 2–5×10⁻⁹ (09-23 table), cancelling to ~1×10⁻¹⁰ at ℓ ≈ 100 pc in some disc brackets | — | — | ≈ 5×10⁻⁵ (up to ~2×10⁻³ at the cancellation corner) |

- **Contributors.**
  - At ℓ = 1 pc the rate is α Cen (+1.4×10⁻⁵), Barnard's Star (+5×10⁻⁶) and Lalande 21185. The bound there is a statement
    about three stars.
  - At ℓ = 3 pc Kapteyn's Star (v_r = +245 km/s) is the largest single term.
- **The RV-clean variant.** It treats Gaia RVs with error > 5 km/s, or on white-dwarf-classified sources, as missing.
  - It changes ℓ = 5 by 3×, because two |v_r| ≈ 400 km/s white-dwarf RVs drop out. Those RVs are physically suspect;
    white dwarfs have no usable RVS lines.
  - It changes ℓ = 10 by 2×. The order of magnitude is stable.
- **Gas (P4, failed).**
  - My registered gas estimate used a planar LIC edge, which holds only while the cloud is larger than the kernel.
  - The Local Interstellar Cloud is a few pc across, about 0.3 M⊙. Treated as a compact blob at ℓ = 10 pc, it contributes
    ~10⁻¹⁰ yr⁻¹.
  - At ℓ = 1 pc the edge term (1–8×10⁻⁷) is 30× below α Cen.
  - Gas never dominates. A coherent flow of the whole local cloud complex (tens of M⊙, ~25 km/s) could reach ~2×10⁻⁸ at
    ℓ = 10 pc. That is comparable to the stars and does not change the order of magnitude. Not modelled.
  - Sources: Linsky's EGU2020 abstract (the Sun leaves the LIC in < 1900 yr, into the G cloud or an ionized intercloud
    layer); Swaczyna et al. (mixed LIC/G velocity).

### 3. Scope: which couplings the bound reaches
- **Algebraic (constitutive) keying, ℓ ≫ body sizes.** G_eff = G f(ρ_s) with ρ_s against a non-gravitational density scale.
  - The bound applies at full strength. This is the archive's case.
- **Stiff massive scalar (Olive–Pospelov type), if it coupled to G.**
  - The field follows φ_min(ρ) on scales longer than its Compton length. That is an algebraic density keying smoothed on
    ℓ = λ_eff, the same object.
  - Its escape is that bodies larger than λ_eff pin φ to their own density, so the Earth–Moon dynamics never see the
    ambient value.
  - With λ_eff ≳ pc the bodies do not pin it, and the bound applies to the coupling amplitude × ρ/Λ₂.
  - **My P6 claim that "field-mediated couplings respond only to Φ/c²" is wrong for this class.** It holds only for
    light, massless scalars.
- **Massless (Brans–Dicke-like) scalar.**
  - The response is to the Newtonian potential: d ln G/d ln ρ_s ~ β²Φ_s/c² ~ 10⁻¹⁴ β² from the matter inside 1 pc.
  - The bound is vacuous for it.
- **Chameleon or symmetron.** The same as the stiff case. Earth, Moon and Sun are screened, so the escape is by
  construction.
  - Belgacem et al. §2 and Will §3.3.3 both say so. The thin-shell requirement for the Earth is commonly attributed to
    LLR's equivalence-principle test (Khoury & Weltman 2004). **That attribution was not read verbatim today.**
- **The structural point.** Every escape keys the coupling on a body's own density (effective ℓ ≲ the body), or on the
  potential.
  - The archive needs ℓ ≫ 10⁴ AU for the wide-binary null and ℓ ≳ 1 pc for smooth galaxy profiles, so it cannot take the
    screening exit.
  - The bound's scope sentence can therefore say: "applies to any ambient-keyed coupling whose smoothing length exceeds
    the Earth–Moon–Sun bodies; screened and potential-keyed couplings escape."

### 4. Scorecard (PREREG `6c15fc7`)
| | Prediction | Result |
|---|---|---|
| P1 | ℓ = 1: 1–3×10⁻⁵; bound ≈ 1×10⁻⁸ | **Held** (2.32×10⁻⁵; 9.6×10⁻⁹) |
| P2 | ℓ = 3: 2×10⁻⁷–2×10⁻⁶ | **Held** (1.5–1.7×10⁻⁶; near the upper edge) |
| P3 | ℓ = 10: 1×10⁻⁸–1×10⁻⁷, ≥ 20× below the site | **Held** (4–8×10⁻⁸; 25–48×) |
| P4 | Gas exceeds stars at 10 pc, not at 1 pc | **Failed.** The planar-edge estimate was invalid for ℓ > cloud size; gas is below stars at both |
| P5 | Bound at 10 pc in 1×10⁻⁶–1×10⁻⁵; assumption (b) false for ℓ ≳ 3 | **Held** (2.7–5.6×10⁻⁶; (b) off by 4× at 3 pc and 25–50× at 10 pc) |
| P6 | Screening escapes by construction; field couplings respond only to Φ/c² | **Half.** The escape holds (and is forbidden to the framework by its own ℓ); the Φ/c² clause is refuted by Olive–Pospelov's stiff case |
| P7 | Ingredients published, combination not found | **Held**, on six sources (two of the most likely locators unread) |

Five held, one half, one failed. The failures are both my physics shortcuts (planar edge; "fields respond to potential"),
not the data.

## Implications for the Site
- **`/for-researchers#gdot-llr` misstates its own range at the large-ℓ end, and the card contradicts itself.**
  - "1×10⁻⁸ to 1×10⁻⁷" should read about 1×10⁻⁸ (ℓ = 1 pc) to 3–6×10⁻⁶ (ℓ = 10 pc).
  - Assumption (b) ("the gradient scale of ρ_s is ~ℓ") holds only at ℓ ≈ 1 pc. Beyond that the stars average down as √N.
  - The 100-pc fallback says "≲ 1×10⁻⁶–1×10⁻⁵, still five orders" in one paragraph and "still six orders" in the next.
    The measured smooth-disc rate gives ≈ 5×10⁻⁵, about four orders, weaker at ℓ ≈ 100 pc where disc terms can cancel.
- **What survives is stronger as a portable statement.** It is anchored to named, measured objects instead of an assumed
  e-fold:
  - α Cen and Barnard's Star at 1 pc;
  - the Gaia census at 10 pc;
  - the Galaxy's radial gradient beyond 30 pc.
- **The count is unaffected.** The 09-23 script's discrete term at ℓ ≥ 3 pc was already the Poisson rms (3×10⁻⁸ at
  10 pc), which agrees with the measured 4–8×10⁻⁸.
- **Credit line.** Berengut & Flambaum 2010 (kinematic conversion) and Olive & Pospelov 2008 (ambient-density-keyed
  couplings) belong in the prior-art register beside the four existing identities. This is the first prior-art check on
  this item run *by protocol* before outside citation.

## Action: Maintainer
- `/for-researchers#gdot-llr`, "The statement" paragraph:
  - replace "With a density e-fold over ℓ = 1–10 pc the second factor is 2×10⁻⁶ to 2×10⁻⁵ yr⁻¹ … ≲ 1×10⁻⁸ to 1×10⁻⁷"
    with the measured per-ℓ values (1 pc: 2.3×10⁻⁵ yr⁻¹ → ≲ 1×10⁻⁸; 10 pc: 4–8×10⁻⁸ yr⁻¹ → ≲ 3–6×10⁻⁶; ≥ 30 pc:
    disc gradient ~4×10⁻⁹ yr⁻¹ → ≲ 5×10⁻⁵);
  - name α Cen and Barnard's Star as the 1-pc rate.
- Same card, "Assumptions" (b): replace with "at ℓ ≈ 1 pc the rate is set by the nearest stars; at larger ℓ it averages
  down as √N (Gaia DR3 census, explorer 2026-11-18)". Remove the "five orders" / "six orders" inconsistency; the measured
  floor gives about four.
- Add a scope sentence: "applies to ambient-keyed couplings whose smoothing length exceeds the Earth–Moon–Sun bodies;
  screened (chameleon, symmetron, stiff-field) and potential-keyed couplings escape, and the archive's own ℓ ≫ 10⁴ AU
  forbids that escape."
- Add a prior-art line: "Ingredients published: gradient × motion → laboratory drift (Berengut & Flambaum 2010, eq. 4, for
  α); ambient-density-keyed couplings (Olive & Pospelov 2008, eq. 2.7, with G_N fixed). The combination was not found in
  six sources checked (Uzan 2011 §5.4.2/§6 and Clifton–Mota–Barrow 2005 not yet read)."
- Lint candidate: the retired "1×10⁻⁸ to 1×10⁻⁷" range string, once replaced.

## Open Threads
- **Read Uzan 2011 §5.4.2/§6, Clifton, Mota & Barrow 2005, and Mota & Barrow 2004** before the register says "not
  found". These are the most probable homes of an earlier statement.
- **Hofmann & Müller 2018 primary text,** and planetary-ephemeris Ġ/G bounds (INPOP, EPM). A tighter Ġ/G tightens every
  row. Existing topic `modified-g-cardassian-prior-art-and-other-gdot-bounds.md`.
- **The ℓ = 1 pc bound is set by α Cen.** Its value depends on where α Cen sits in its approach (closest approach ~28 kyr
  from now). This is fine for LLR's 50-year baseline, but the bound is epoch-specific in a way no laboratory bound is.
- **Stiff-scalar version.** An Olive–Pospelov-type field coupled to the Planck mass, with λ_eff ≳ pc, is a published-class
  model the bound would constrain directly. Writing its constraint on (amplitude × ρ_ISM/Λ₂) would give the archive a
  citable negative about someone else's model class, which is where the 11-17 proposal says the external value now sits.
- **The coherent flow of the local cloud complex** at ℓ ~ 10 pc: the one gas term that could matter. It needs the
  Redfield & Linsky cloud geometry.
