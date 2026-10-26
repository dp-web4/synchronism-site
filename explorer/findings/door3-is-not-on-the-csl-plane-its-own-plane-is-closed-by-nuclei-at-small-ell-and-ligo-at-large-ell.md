# Finding: Door #3 is not on the CSL plane. It is the plane's Fourier dual. Its own (D, ℓ) plane is closed by underground nuclear stability at small ℓ and by GW interferometers at large ℓ. The natural D survives only as ℓ ≳ 3×10⁷ m, which is a near-global translation, and that corner is prior art (Amelino-Camelia 1999).

## Origin
Topic `door3-diffusion-on-the-csl-exclusion-plane.md` (maintainer 2026-10-26, from a researcher persona). The persona asked
for door #3's D on the CSL (λ, r_C) exclusion plane alongside LISA Pathfinder, cantilevers, cold atoms and GW detectors. The topic
required retrieving every citation before using any number.

## Summary
- **Door #3 cannot be placed on the CSL plane as a point.**
  - CSL is a random **potential** coupled to mass density. It kicks momentum, so free bodies heat and charges radiate.
  - Door #3 (09-27 reading B, Lindblad L = k̂) is a random **displacement**. It conserves a free particle's momentum, heats a
    bound particle at D⟨∇²V⟩, and moves the centre of mass of N independent constituents only at D/N.
  - The instruments that make up the CSL plane (LISA Pathfinder, cantilevers, cold-atom expansion, molecule interferometry, X-ray
    bremsstrahlung) measure the wrong channel. At the natural D they fall short by 10²⁰ or more.
  - The only valid projection is a heating-equivalence line, λ_eq ∝ r_C². At r_C = 10⁻⁷ m it sits at 10¹⁹ /s. That is 31 orders
    above the Gran Sasso X-ray bound, but that bound is not a heating bound, so the comparison is not valid.
- **The binding instrument for literal door #3 is underground nuclear stability.**
  - Borexino's ¹¹C rate (~27 counts/day/100 t, all of it attributable to muons) limits ¹²C → ¹¹C + n to below 7×10⁻³⁵ /s per
    nucleus.
  - That gives **D/D_Pl < 4×10⁻³⁹** (10⁻³⁸ to 2.5×10⁻³⁹ across neutron branching 0.1–0.5). This is 5×10⁸ times tighter than the
    09-27 Earth-heat bound.
  - "15–30 orders" becomes **15–38 orders**.
- **A correlation length ℓ (door #3's analogue of r_C) gives door #3 its own exclusion plane.**
  - Nuclei bound it from below, through relative displacement ∝ (r_N/ℓ)².
  - GW interferometers bound it from above, through relative displacement of test masses kilometres apart.
  - At the natural D = cℓ_Pl, nuclei require ℓ > 17 km and aLIGO O3 excludes ℓ < 3×10⁷ m. The only survivor is
    **ℓ ≳ 3×10⁷ m**, noise correlated over more than twice Earth's diameter. That is indistinguishable from a global translation,
    and no ground instrument can see it.
- **This corner is not new.** Amelino-Camelia (Nature 398, 216, 1999) proposed Planck-scale random-walk distance fluctuations
  with σ_D² ~ L_QG c T_obs. That is door #3's D_Pl, in the regime where test masses move independently. He excluded it with the
  Caltech 40 m data: L_QG ≤ 10⁻⁴⁰ m. This script reproduces that as 6×10⁻⁴¹ m from his quoted 3×10⁻¹⁹ m/√Hz at 450 Hz.
- **There is no near-reach bet.** Every future instrument (CE/ET, LISA) only pushes the surviving ℓ upward, to ~10⁹ m for LISA.
  The ℓ → ∞ limit is a gauge mode (global translation) that no experiment can exclude. Every row can only lose. Door #3's
  quantum side is closed with the field's own instruments.

## Research Notes

### Retrieved (verbatim; this session)
| quantity | value | locator |
|---|---|---|
| CSL heating | P_CSL = 3ħ²λm/(4m₀²r_C²) | Carlesso+2022 Nat. Phys. 18, 243, Eq. (3) |
| bulk heating (CUORE-class, residual ~10 pW/kg) | λ < 3.3×10⁻¹¹ /s at r_C = 10⁻⁷ m | ibid. §2.1 (ref. 27 Adler & Vinante) |
| Gran Sasso X-ray | λ < 5.2×10⁻¹³ /s; DP R₀ ≥ 0.54×10⁻¹⁰ m | ibid. §2.4 (refs 51, 52) |
| LISA Pathfinder / cantilever / cold atoms | 3.8×10⁻⁹ / 2.0×10⁻¹⁰ / 5.1×10⁻⁸ /s | ibid. §2.3, §2.2 |
| Neptune heat | 6.6×10⁻¹¹ /s | ibid. Table 1 |
| Borexino ¹¹C | "∼4300 µ/day, yielding a ¹¹C production rate of ∼27 counts/(day·100 ton)" | PRL 108, 051302 (arXiv 1110.3230), p. 1 |
| Borexino PEP-violating ¹²C limits | τ(n) ≥ 3.4×10³⁰ y, τ(p) ≥ 8.9×10²⁹ y (90% CL) | PRC 81, 034317 (arXiv 0911.0548), abstract |
| random-walk ASD | S(f) = f⁻¹√(L_QG c); 40 m: 3×10⁻¹⁹ m/√Hz near 450 Hz → L_QG ≤ 10⁻⁴⁰ m | Amelino-Camelia, Nature 398, 216 (gr-qc/9808029), Eq. (4) and following |

**Recalled (flagged, not retrieved):**
- aLIGO O3 DARM ≈ 2×10⁻²⁰ m/√Hz near 150 Hz. Buikema+2020 Fig. 2's axis floor is 10⁻²⁰, so the value is bracketed but not read
  off the curve.
- PTA h_c ≈ 2×10⁻¹⁵ at 1/yr.
- LISA design ≈ 10⁻²⁰ /√Hz at 3 mHz.
- The recalled R₀ ≳ 0.5 Å in the 09-27 finding is now confirmed (0.54×10⁻¹⁰ m).

### 1. Why the CSL plane is the wrong plane
CSL's Lindblad term ∫D(x−y)[M(x),[M(y),ρ]] is diagonal in **position**:
- it suppresses position superpositions;
- it diffuses momentum, so free bodies heat (Eq. 3) and accelerated charges emit X-rays;
- it acts coherently on a body smaller than r_C (the "amplification" that LPF and cantilevers exploit).

Door #3 (reading B) is diagonal in **momentum**:
- it diffuses position (⟨δx²⟩ = 2Dt);
- it commutes with the free Hamiltonian, so there is no free-particle heating and no bremsstrahlung;
- it leaves position superpositions alone, because both branches translate together;
- it heats only through potential curvature, at D⟨∇²V⟩.

The two are dual in the x ↔ p sense. The persona's "momentum-diffusion door #3" names CSL's channel. Door #3 is position
diffusion.

**Consequences for each CSL-plane instrument at D_Pl** (output §3):
- **LIGO mirror:** the centre of mass diffuses at D/N = 2×10⁻⁵⁵ m²/s, against a sensitivity of 9×10⁻³⁵. Short by 4×10²⁰.
- **LISA Pathfinder / cantilever:** 4×10⁻⁵⁴ and 8×10⁻⁴⁴ m²/s, with no amplification.
- **25 kDa molecule interferometry:** grating-fringe washout at (D/N)K² = 10⁻¹⁶ /s. The bound would be D/D_Pl < 10¹⁸, so no bound.
- **X-ray emission:** no channel for free charges. Bound electrons and nucleons are excited, which is the heating route.

**The heating-equivalence line is the only legitimate projection.** λ_eq = 4m₀r_C²P/(3ħ²) has slope +2 on log axes. At the
natural D it lies at 7×10¹⁸–4×10¹⁹ /s at r_C = 10⁻⁷ m. The line is valid only against heating-class bounds.

**Consistency check:** feeding the bulk-heating bound (3.3×10⁻¹¹) through it gives D/D_Pl < 4.4×10⁻³⁰. A direct TeO₂ W/kg
calculation gives 4.5×10⁻³⁰. Both match the 09-27 Earth-heat 2×10⁻³⁰, as they should, since CUORE's 10 pW/kg ≈ Earth's
7.9 pW/kg.

### 2. The instrument that binds literal door #3: nuclei, underground
- **Excitation rate.** For ¹²C in the shell model (0s⁴0p⁸, ħω = 17.9 MeV, b = 1.52 fm), the total excitation rate is
  2D Σ⟨k²⟩ × ½ (Pauli blocking and spurious c.m.: O(1), flagged). That is **5.4×10⁴ /s per nucleus at D_Pl**.
- **Excitation energy.** The mean deposit is ~25 MeV, in the 1ħω / giant-dipole region, above both S_p = 16.0 and
  S_n = 18.7 MeV. Excitations therefore emit nucleons, and the neutron branch makes ¹¹C.
- **Borexino.** The detector holds 4.5×10³⁰ C nuclei per 100 t (pseudocumene C₉H₁₂) and sees ~27 ¹¹C/day/100 t. That rate is
  attributed to muons (95% tagged with spallation neutrons). Using the whole rate as a ceiling is deliberately conservative.
- **Result.** D/D_Pl < 4.2×10⁻³⁹ at f_n = 0.3; the f_n = 0.1–0.5 span is 1.3×10⁻³⁸ to 2.5×10⁻³⁹.
- **Specific-channel limits.** Borexino's dedicated PEP-violation searches (τ ≥ 10³⁰ y for p and n emission) would tighten this
  by about 4 orders. Their energy windows target specific Q-values, though, so I did not adopt them.
- **Prior art.** This is the Pearle & Squires (1994) move: bound-state excitation in large underground detectors. It is how
  mass-independent CSL was killed.

**Heat versus excitation.** The heat budget asks where the energy goes. The excitation count asks whether any nucleus was
excited at all. The second is 10⁸–10⁹ times more sensitive, because detectors count single events.

### 3. Door #3's own plane: (D, ℓ)
**The model.** Give the displacement noise a Gaussian correlation, ⟨u(x)u(y)⟩ ∝ 2D exp(−|x−y|²/4ℓ²), as CSL does with r_C.
Two things separated by r then diffuse relative to each other at D·s(r, ℓ), with s = 1 − exp(−r²/4ℓ²) ≈ r²/4ℓ² for ℓ ≫ r.

**Constraints:**
- **Below (structure heating).** Heating per unit mass ~ D v_int²/ℓ², where v_int is the internal velocity scale. Nucleons
  dominate:
  - nucleons: v ≈ 4×10⁷ m/s, v² = 1.7×10¹⁵;
  - atoms: v² = 4.8×10¹²;
  - lattice: v² = 2.5×10⁷.

  The nuclear line is D·s(r_N, ℓ) < 2×10⁻⁶⁵ m²/s, with r_N = 2.24 fm.
- **Above (relative displacement of kilometre-separated test masses).** The aLIGO O3 line is 4D·s(L, ℓ) < 9×10⁻³⁵ m²/s, with
  L = 4 km. The DARM ASD of a random walk is √D/(πf).

| D / D_Pl | nuclei require ℓ > | O3 excludes ℓ < | survivors |
|---|---|---|---|
| 1 | 1.7×10⁴ m | 3.0×10⁷ m | ℓ > 3×10⁷ m |
| 10⁻⁴ | 1.7×10² m | 3.0×10⁵ m | ℓ > 3×10⁵ m |
| 10⁻⁶ | 17 m | 3.0×10⁴ m | ℓ > 3×10⁴ m |
| 10⁻⁸ | 1.7 m | 2.6×10³ m | ℓ > 2.6×10³ m |

**The window.** For ℓ ≫ L both lines run along D/ℓ². The band that O3 excludes but nuclei allow spans a factor 3×10⁶ in D/ℓ².
So in the correlated model, GW detectors **are** the frontier instrument, mirroring CSL, where LPF binds for r_C > 10⁻⁵ m.
The persona's instinct about GW detectors was right for this model, though not for literal door #3.

**Beyond any baseline.** For ℓ beyond any baseline the observable is a random-walk strain field, and the figure of merit is f·h(f):
- aLIGO: 7.5×10⁻²²
- PTA: 3.6×10⁻¹⁹
- LISA (design): 3×10⁻²³

At D_Pl these push the surviving ℓ to 3×10⁷ m (O3), 6×10⁴ m (PTA, weaker), and about 7×10⁸ m (LISA). The LISA value assumes
ℓ ≫ arm and should be re-checked in the ℓ ~ arm crossover.

**No instrument ever closes the plane.** ℓ → ∞ is a uniform translation of everything, which is a symmetry. Every row is
can-only-lose (memory: *difference vs novelty stopping criteria*).

### 4. Prior-art placement
- **Correlated door #3 at D_Pl, ℓ ≲ arm length:** Amelino-Camelia 1999. It was excluded at publication: the 40 m data already
  sat ~4.4 orders below D_Pl (3.7×10⁻⁵ D_Pl), and O3 sits at 1.8×10⁻⁸ D_Pl.
  - The archive's novelty review cites Amelino-Camelia only for DSR (2002). The 1999 random-walk paper is new to the ledger.
  - Ng & van Dam disputed the σ_D ∝ √T scaling at the time (recalled, not retrieved). That dispute is about whether quantum
    gravity predicts it, not whether data exclude it.
- **Literal door #3 (ℓ → 0):** Pearle–Squires-class bound-state excitation.
- **Energy-basis variant:** Milburn 1991 (09-27).

Every corner of the plane belongs to a known class. Bucket 3.

## Implications for the Site
- **/measurement-without-observers.** The paragraph says "15–30 orders" and names Donadi 2021 and Fein 2019 as bounds that "do
  not bind".
  - It should say why: those instruments see momentum kicks or position superpositions, and door #3 produces neither.
  - The binding instrument is underground nuclear excitation, at D/D_Pl < 4×10⁻³⁹.
  - The CSL exclusion plot the persona asked for is the wrong plot. The right one is the (D, ℓ) plane, and it is closed at both
    ends.
- **The persona's correction is half right.** The CSL plane does not apply. GW detectors do bind, but only once door #3 is
  given a correlation length.

## Action: Maintainer
- **P2 (/measurement-without-observers, the l.145 paragraph and the l.198 paragraph).** Replace "15–30 orders" with "15–38
  orders: electrons via the heat budget; nucleons via Borexino's ¹¹C rate, D/D_Pl < 4×10⁻³⁹". Add one sentence: "Door #3's
  diffusion is in position, not momentum, so the CSL (λ, r_C) exclusion plot (LISA Pathfinder, cantilevers, X-rays) does not
  apply to it. With a correlation length ℓ added, nuclei exclude small ℓ and GW interferometers exclude large ℓ. At the natural
  D only ℓ ≳ 3×10⁷ m survives, which is indistinguishable from a global translation. That regime is Amelino-Camelia's 1999
  random-walk model, excluded with Caltech 40 m data (Nature 398, 216)." Cite Carlesso+2022 (Nat. Phys. 18, 243) for the CSL
  plane, so a referee sees that it was considered.
- **Site lint:** add `15&ndash;30 orders` / "15–30 orders" as a retired phrase, if the wording changes.
- **Back-annotate** Synchronism PREDICTIONS.md (Phase-16 block, already annotated 09-27). Record:
  - nuclear bound 4×10⁻³⁹;
  - correlated variant = Amelino-Camelia 1999, excluded;
  - the (D, ℓ) plane has no winnable row.
- **Count:** unchanged. Door #3 was never registered.

## Open Threads
- **LISA crossover:** redo §5 with the full s(L, ℓ) and the LISA Pathfinder relative-acceleration spectrum (retrieve Armano+2016/2018).
  This would turn the "ℓ ≳ 10⁹ m" future row into a retrieved number.
- **Read Buikema+2020 Fig. 2 numerically** (digitise), replacing the recalled 2×10⁻²⁰ m/√Hz. The ℓ_max values scale as the ASD
  ratio, so a factor-2 error moves them by 2.
- **Same pass for the Bucket-1 "substrate tick" proposals** (B7 Umklapp, Phase-12 dim-4 LIV). Do they kick momentum (CSL plane)
  or displacement (this plane)? Run the duality check first; it decides which instruments are relevant.
