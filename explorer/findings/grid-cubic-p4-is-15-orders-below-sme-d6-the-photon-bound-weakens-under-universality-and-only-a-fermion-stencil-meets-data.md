# Finding: The grid's cubic p⁴ term is ~15 orders below every SME d = 6 photon bound. A universal η weakens the Auger photon bound, not just its self-consistency. The only composition-free data that can score a committed stencil is a ≳ 200 PeV neutrino, and it bites only a fermion stencil that is superluminal off-axis

## Origin
Topic `does-the-grids-cubic-anisotropic-p4-term-survive-sme-d6-and-uhecr-direction-data.md` (maintainer 2026-11-26).
PREREG `findings/PREREG-grid-cubic-p4-vs-sme-d6-and-direction-thresholds-20261126.md`, committed `e3f03f0` before any
script and before the literature lookup returned.

## Summary
- **SME d = 6 (maintainer stake (a): refuted).** The corner-only stencil at λ = 1 is not excluded by any d = 6 photon
  bound. In SME units the grid has |c⁽⁶⁾_(I)00| = 2–8×10⁻⁴⁰ GeV⁻² and |c⁽⁶⁾_ℓ=4| ≤ 3.5×10⁻⁴⁰ GeV⁻². The strongest
  quadratic photon bound is time-of-flight, LHAASO GRB 221009A, E_QG,2 > 6×10⁻⁸ E_Pl (95 %). In this convention it
  allows |η| up to ~3×10¹⁴, about 10¹⁵ above the grid's |η| ≤ 0.11. Time-of-flight anisotropic bounds share the same E²L
  scaling, so none can close the gap.
- **The photon stencil is nonbirefringent.** A staggered lattice Maxwell field reproduces the corner stencil's η(n̂)
  exactly at O(k⁴) when its differences are averaged across the two transverse directions. That field is stable at
  λ = 1, and its two polarisations are degenerate at every k (splitting ≤ 3×10⁻¹⁵). So the birefringent d = 6
  coefficients, the photon sector's strongest bounds, are zero. The plain Yee scheme gives the 7-point pattern instead
  and is unstable at λ = 1.
- **New result (not registered): the 11-22 photon-bound translation is wrong for a universal η.**
  - When e± share the photon's coefficient, the pair-production threshold is set by asymmetric splits. The two split
    pictures scale differently: in the asymmetric one the threshold photon energy goes as √|η|·E/M_Pl, against
    |η|E³/M_Pl² in the symmetric one.
  - At high s the Breit–Wheeler cross section lives in those asymmetric splits (the leading-lepton log), so the
    asymmetric threshold is physical.
  - The Auger photon bound (η_γ ≳ −0.015, photon-only LIV) frees photons above ~3×10¹⁸ eV. A universal η frees them
    only above ~6×10¹⁹–1.6×10²⁰ eV.
  - Translated, the bound is |η_univ| ≲ 0.04 to 40, depending on which photon energy drives Auger's limit, not 0.015.
    11-22's "κ = 0.75η, ×1.4–4.2" assumed the symmetric split.
- **Arrival directions add nothing composition-free.** In the partonic reading, GZK photopion stays on in only 0.8 % of
  the sky for (a), 3.5 % for the product stencil (M), and 0 % for (b). In the elementary reading it is on in ≤ 0.01 %.
  So the cubic pattern would be a ~97–100 % monopole effect. That is the spectrum argument already made (pure protons
  excluded, mixed composition not), with a weaker lever.
- **The one composition-free test is a neutrino.**
  - For a continuous-time Wilson neutrino (η_ν = 1/4 − Σn_i⁴/3, superluminal off-axis), KM3-230213A excludes 52.9 % of
    grid orientations at 90 % CL (Yang et al. 2025, Λ₂ > 5.0×10¹⁹ GeV ⇒ η_ν < 0.060).
  - For a single event, the fraction of orientations excluded equals the fraction of sky excluded, so its arrival
    direction is irrelevant.
  - About five 220 PeV events, or three at 300 PeV, would leave ≈ 1.5–2.5 % of orientations.
  - A staggered-fermion neutrino is subluminal everywhere (η ∈ [−1/3, −1/9]) and untouchable by this test.

Scorecard: P1 held (gap ~10¹⁵, predicted ≥ 10¹³). P2 held, and exactly. P4 held (0.84 % / 3.5 % / 0). P5 held (52.9 %
in 30–60 %). P6 held as an estimate (not looked up). P3 is **not demonstrated**: its mechanism holds in the
elementary reading, but the partonic reading leaves an EBL channel open (§4). The stronger reason the photon bound fails
to reach the grid is the asymmetric threshold, which was not registered.

## Research Notes

### 1. Stencils (`scripts/grid_cubic_p4_sme_and_thresholds.py`, output `_output.txt`)
Closed forms were confirmed from exact leapfrog dispersions (mpmath, k = 10⁻⁶). The small 2×10⁻⁴ residuals at
off-axis directions come from O(k²a²) leakage at finite k in the iso-stencil check and are not a mismatch.

| Stencil | η(n̂) | axis | body diagonal | λ |
|---|---|---|---|---|
| (a) corner-only | −Σ_{i<j}n_i²n_j²/3 | 0 | −1/9 | 1 (marginal) |
| (M) product [¼,½,¼]³ | −Σ_{i<j}n_i²n_j²/12 | 0 | −1/36 | 1 (marginal) |
| (b) isotropic-error, w₃ = 0.01 | −1/48 | −1/48 | −1/48 | √3/2 |

- Along the grid axes, (a) and (M) at λ = 1 are luminal to every order (ω − k ≤ 10⁻⁴⁸ at k = 0.001…2.5). So the
  committed-stencil grid has six exact light-cone directions, not just a vanishing p⁴ term there.
- "Marginal" means the symbol maximum sits exactly at the leapfrog edge. On that measure-zero set of modes (e.g.
  k = (π,0,0)), leapfrog has a double root and grows linearly, not exponentially.

### 2. Lattice Maxwell
A staggered scheme with d_i = 2 sin(k_i/2) Π_{j≠i} cos(k_j/2) has curl-curl symbol |d|²I − ddᵀ. That gives a
longitudinal zero and a doubly degenerate transverse eigenvalue |d|², identically at every k.
- Max |d|² = 4, so λ_max = 1. The transverse η matches the corner stencil to 6 digits in four directions.
- L_corner − |d|² = O(k⁶) (coefficient 9×10⁻⁴ in a generic direction).
- The plain Yee scheme gives η = −1/18 on the axes and 0 on the diagonals at λ = 1/√3, its stability edge. That is the
  7-point pattern, unstable at λ = 1.
- **Condition:** degeneracy needs the same difference operator in both curls. A scheme with different stencils for the
  E-curl and the B-curl can split the polarisations. That would be a birefringent d = 6 term, which polarimetry bounds
  far more strongly. Not computed.

### 3. SME conversion and the time-of-flight gap
Using ω ≈ p(1 + ηp²/2M²) and Σ_jm Y_jm c_jm = −η/(2M²), the grid-frame values are:

| | c₀₀ (GeV⁻²) | √Σ_m\|c_4m\|² |
|---|---|---|
| (a) | +7.9×10⁻⁴⁰ | 3.5×10⁻⁴⁰ |
| (M) | +2.0×10⁻⁴⁰ | 8.7×10⁻⁴¹ |
| (b) | +2.5×10⁻⁴⁰ | ≈ 0 (numerical 10⁻⁴⁵) |

- ℓ = 2 and ℓ = 6 vanish to quadrature noise, as expected for a quartic cubic-invariant.
- **Sign and direction convention.** The fetch agent confirmed that Kostelecký & Mewes evaluate harmonics at p̂
  (Eq. 47). The σ⁰ sign was not retrieved. Only magnitudes are used here, so neither affects the verdict.
- **Bounds.**
  - LHAASO GRB 221009A (arXiv:2402.06009, abstract): E_QG,2 > 6×10⁻⁸ E_Pl (95 %), with E² ≃ p²[1 − s(E/E_QG)²]. So
    |η| = (M_Pl/E_QG,2)² < 2.8×10¹⁴.
  - Vasileiou et al. 2013 (arXiv:1305.3463, abstract): E_QG,2 > 1.3×10¹¹ GeV, subluminal, 95 %, so |η| < 8.8×10¹⁵.
- **Not read.** The Kostelecký–Russell Data Tables HTML exceeded the fetch size limit. The verdict does not depend on
  the table: no time-of-flight bound can exceed the best single-source E²L reach by 15 orders.
- **For the site.** "~10⁷ below reach" on /for-researchers is the gap in energy scale. In η it is ~10¹⁴–10¹⁵. Both are
  right, but the cell should say which.

### 4. The Auger photon bound under a universal coefficient (post hoc: `grid_cubic_p4_sme_and_thresholds.py` §6, `scripts/grid_pair_attenuation_universal_eta.py`)
Kinematics for γ(E) + γ_CMB(ε) → e⁺e⁻ with a universal η < 0:

  4εE ≥ m²/u + 3|η|E⁴u/M²,  u = x(1−x),

minimised at u* = m M/(√(3|η|)E²), which gives 4εE ≥ 2√(3|η|) m E²/M. In the photon-only reading (the convention of
Galaverni & Sigl and of Auger-type bounds) the condition is 4εE ≥ 4m² + |η|E⁴/M².

Escape energy, defined as the pair threshold above 3 kT_CMB:

| η | photon-only | universal, symmetric split | universal, kinematic (asymmetric) |
|---|---|---|---|
| −0.0149 | 3.1×10¹⁸ eV | 3.4×10¹⁸ | 1.6×10²⁰ |
| −1/48 | 2.7×10¹⁸ | 3.0×10¹⁸ | 1.35×10²⁰ |
| −1/9 | 1.6×10¹⁸ | 1.7×10¹⁸ | 5.8×10¹⁹ |

**Which split is physical?** Attenuation lengths settle it. I used a leading-log Breit–Wheeler dσ/du restricted to the
kinematically allowed u, on the CMB only. The LI control is within 10–25 % of exact Breit–Wheeler at 10¹⁵–10¹⁹ eV.

| E (eV) | LI | photon-only η = −0.0149 | universal η = −0.0149 | universal η = −1/9 |
|---|---|---|---|---|
| 3×10¹⁸ | 0.77 Mpc | 21 | 1.2 | 2.0 |
| 10¹⁹ | 2.2 | ∞ | 7.5 | 16.5 |
| 3×10¹⁹ | 6.0 | ∞ | 55 | 243 |
| 10²⁰ | 18 | ∞ | 1.3×10³ | 5.4×10⁴ |

The universal reading keeps the log-dominant asymmetric phase space, so photons stay attenuated about one decade higher
in energy than in the photon-only reading. Inverting the asymmetric threshold, the universal |η| that frees photons at
3 kT is 42 at 3×10¹⁸ eV, 3.8 at 10¹⁹, ~0.4 at 3×10¹⁹ and ~0.04 at 10²⁰ (it scales as E⁻²).
- If Auger's limit is driven by photons ≲ 10¹⁹ eV, which is where the photon-only escape energy for −0.015 sits, the
  grid is 35–2000× inside the translated bound.
- Only if it is driven at ≳ 10²⁰ eV does the bound reach the grid's 0.02–0.11.

**Production at the energies that escape.**
- Photons ≳ 6×10¹⁹ eV need protons ≳ 2–6×10²⁰ eV.
- Elementary reading: photopion then needs a 70–190 eV target photon, so it is closed on every background.
- Partonic reading: it needs 0.4–1 eV, so it is open on near-IR/optical EBL. That background is ~10⁻³ of the CMB number
  density, and it requires sources reaching ≳ 3×10²⁰ eV.
- At E_p = 10¹⁹ eV, photopion on the far-IR EBL is essentially unshifted (0.007 eV in every reading). It makes ~10¹⁸ eV
  photons, which stay attenuated under universal η.
- So P3's mechanism closes in the elementary reading and leaves a small, source-conditional channel in the partonic one.
  A verdict needs propagation; it is not demonstrated.

**Caveat.** I used Lorentz-invariant matrix elements with modified kinematics, which is standard in this literature,
and I omitted the radio background. Including radio would shorten the LI lengths at ≥ 10¹⁹ eV. The universal-LIV
threshold at 10¹⁹ eV is ~4×10⁻⁵ eV (~10 GHz), above most of the radio background, so the ratios understate the LIV
effect.

**Correction to my 11-22 finding.** Its §5 row says "×1.4–4.2 if e± share η: κ = 0.75η". The 0.75 is the
symmetric-split coefficient, and a universal η is governed by the asymmetric threshold. In the universal reading, the
composition-agnostic photon bound no longer reaches the grid unless Auger's limit is driven by photons at ≳ 10²⁰ eV.
The /for-researchers cell's "composition-agnostic Auger 2022 bounds sit right there (photon η ≳ −0.015 …)" therefore
holds only for photon-only LIV.

### 5. Sky fractions and the arrival-direction question
- Photopion stays on where the proton's effective coefficient is below 10⁻⁵:

  | Reading | (a) | (M) | (b) |
  |---|---|---|---|
  | Elementary | 0.0000 | 0.0001 | 0 |
  | Partonic (×0.0055) | 0.0084 | 0.0346 | 0 |

  The cones are ~4° (a) and ~8° (M) around the six axes.
- Fraction of sky with η < −0.0149: (a) 0.93, (M) 0.65, (b) 1.00.
- Under pure protons and uniform sources, GZK would be missing from 97–100 % of the sky. The spectrum sees that before
  any multipole does. The ℓ = 4 arrival pattern is real in principle, but data that already reject pure protons on the
  spectrum gain nothing from it.
- The C_ℓ power spectrum is rotation-invariant, so with full-sky coverage the unknown orientation would not matter.
  Auger/TA multipole limits were not fetched because the conclusion does not need them.

### 6. Neutrinos (`scripts/grid_wilson_nu_orientation_forecast.py`)
- **Bound.** Yang et al. 2025 (arXiv:2502.18256 v2, PRD 111, 123037): Λ₂ > 5.0×10¹⁹ GeV at 90 % CL, including energy
  uncertainty, with E² = m² + p²(1 + s(E/Λ)²) and ν → νe⁺e⁻. So η_ν < (M_Pl/Λ₂)² = 0.0595.
- **Energy scaling.** The bound scales as E⁻⁴ (from the threshold E_th = 2m_e Λ/E). Events below ~180 PeV cannot touch
  Wilson's maximum of +5/36.
- **Surviving orientation fraction after N isotropic events:**

  | Energy | η_max | N = 1 | N = 3 | N = 5 | N = 10 |
  |---|---|---|---|---|---|
  | 220 PeV | 0.060 | 0.47 | 0.10 | 0.015 | 0.000 |
  | 300 PeV | 0.017 | 0.28 | 0.024 | 0.000 | |

- **Conditions.**
  - Continuous-time Wilson only. A time-discretised fermion adds an isotropic piece (+λ²/12 for a scalar leapfrog),
    which could shift the sign map.
  - Staggered fermions are subluminal everywhere.
  - Only one ≳ 200 PeV event exists, and it is in tension with IceCube's non-detection.
- KM3-230213A's direction was not retrieved, because the agent's arXiv ID was the companion paper. A single event does
  not need it.

### 7. Laboratory (P6, estimate only)
The p⁴ shift for a nucleon at Fermi momentum is |η|p⁴/(2mM²) ≈ 10⁻³³ eV. For an optical cavity, (ℏω/E_Pl)² ~ 10⁻⁵⁶.
Both are ≥ 12 orders below clock and cavity sensitivities.

## Implications for the Site
- The proposal "commit a stencil, and the p⁴ row becomes a framework-owned bet that can lose" is half right.
  - Committing a scalar or photon stencil gives a number that no composition-agnostic data can score today. That holds
    for time-of-flight (10¹⁵ short), birefringence (zero), the laboratory (≥ 10¹²), and the UHECR photon bound (which
    weakens under universality).
  - Committing a fermion stencil is different. If it is superluminal off-axis, like Wilson, one existing neutrino
    already excludes half the orientations, and a handful of future events would close it.
  - So the commitment that buys a refutable bet is the fermion action, not the scalar or photon stencil.
- Six exact light-cone directions (λ = 1 stencils) are a sharper statement than "η = 0 on the axes": luminal to all
  orders.

## Action: Maintainer
- `/for-researchers` row "Dim ≥ 5 dispersion" (line ~150):
  - "photon η ≳ −0.015" → "photon η ≳ −0.015 for photon-only LIV; with a universal coefficient the pair threshold moves
    to asymmetric splits and the translated bound is |η| ≲ 0.04–40 depending on the photon energy that drives Auger's
    limit (explorer 2026-11-26)".
  - "~10⁷ below reach" → "~10⁷ in energy scale (~10¹⁴–10¹⁵ in η)".
- `#grid-anisotropy`:
  - Replace "Whether it survives the anisotropic d = 6 bounds has not been checked" with: "Checked (explorer
    2026-11-26): ~15 orders below the strongest d = 6 photon bound (time-of-flight, LHAASO GRB 221009A). A staggered
    Maxwell field with transverse-averaged differences has the same pattern, is stable at one cell per tick, and is
    nonbirefringent, so the birefringent d = 6 bounds do not apply. Along the six grid axes these λ = 1 stencils are
    luminal to all orders."
  - Discriminator cell: "Owed first: commit a stencil per species" → "the fermion stencil is the one with
    data: a continuous-time Wilson neutrino is superluminal off-axis, and KM3-230213A excludes 53 % of grid orientations;
    ~5 events ≥ 200 PeV would close it. Staggered fermions are subluminal and untested."
- Back-annotate the 11-26 proposal (`commit_a_stencil_…_20261126.md`) and PREDICTIONS B7 with the fermion-first point,
  and with the 11-22 κ correction.

## Open Threads
- A full UHE photon propagation with a universal η (CRPropa with modified kinematics) to fix the energy that drives the
  Auger bound and turn 0.04–40 into one number.
- LIV matrix elements near the asymmetric threshold. Does any paper compute pair-production rates for η_e = η_γ at
  n = 2? Jacobson, Liberati & Mattingly 2003 treat asymmetric thresholds for unequal coefficients.
- A leapfrog-time Wilson (or a symmetric-time fermion) neutrino's η(n̂), and the orientation fraction under it.
- Lattice Maxwell with different E-curl and B-curl stencils: which ones split polarisations? Birefringent d = 6 would be
  the one photon observable with real reach.
- Read the Data Tables (PDF, not HTML) for any d = 6 threshold-derived entries.
