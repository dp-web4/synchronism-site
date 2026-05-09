# Finding: TEST-04a is not a sign error — it's a double-calibration failure

## Origin

Topic `test04a-sign-error-diagnosis.md` (seeded 2026-05-09 maintainer): is C_galactic/C_cosmic > 1 in the framework's own equations? If so, inverting the sign of the ratio assignment in Session 107's `G_local/G_global = C_cosmic/C_galactic` would flip the prediction to enhancement, matching DESI DR1's measured direction.

The answer: yes, C_galactic > C_cosmic at every relevant redshift, but **inverting the sign does not save the framework**. The deeper finding is that TEST-04a's prediction is dominated by a separate calibration choice (σ₈(0) = 0.76) made in Session 102, and that calibration was post-hoc fitted to DES Y3 / KiDS-1000 lensing measurements *before* the DESI prediction was made.

## Summary

Session 107's prediction of `fσ₈(z=0.51) ≈ 0.418` (12% below ΛCDM) decomposes into three contributions of roughly equal weight:
- **−6.3%** from σ₈(0) = 0.76 (calibrated to DES/KiDS in Session 102)
- **−8.0%** from f(z) suppression (the mechanism)
- **+2.2%** from D(z) shape change

Inverting the sign of the C-ratio assignment (Branch 1 of the topic's hypothesis) flips the sign of the f(z) and D(z) contributions but *not* the σ₈(0) contribution. With the *correct* (Session 102's) σ₈(0) = 0.76, the inverted-sign prediction matches DESI DR1 with χ² = 2.41 (vs Session 107's 6.91). But more importantly:

- **Best-fit σ₈(0) for Session 107 mechanism** = 0.844 (χ²/dof = 0.31)
- **Best-fit σ₈(0) for inverted mechanism** = 0.783 (χ²/dof = 0.33)
- **Best-fit σ₈(0) for ΛCDM (no mechanism)** = 0.814 (χ²/dof = 0.26)

When σ₈(0) is allowed to float, **all three are statistically equivalent.** The mechanism direction is *degenerate* with σ₈(0) over the DESI redshift range. TEST-04a is, in practice, a σ₈(0) test, not a Synchronism-mechanism test.

## Research Notes

### Step 1: What Session 107 actually computed

I traced the Session 107 simulation code (`Synchronism/simulations/session107_desi_forecasts.py`). The cosmological growth equation is:

```
δ̈ + H_factor δ̇ = (3/2) G_rat Ω_m(z) δ
```

with `G_rat = C_cosmic / C_galactic`, where:

- `C_galactic(z) = tanh(2 · ln(ratio_0 · (1+z)³ + 1))` — the framework's coherence function
- `C_cosmic(z) = Ω_m · (1+z)³ / [Ω_m · (1+z)³ + Ω_Λ]` — *the standard ΛCDM matter density parameter*, not a coherence function from the framework's equation

`ratio_0 ≈ 0.177` is **back-fitted** by requiring `C_galactic(z=0) = Ω_m = 0.315`.

This first observation is already troubling: **C_cosmic is not a coherence in the framework's sense.** It's the ΛCDM matter density parameter. The "G_local/G_global = C_cosmic/C_galactic" formula mixes a tanh-coherence with a cosmological density parameter.

### Step 2: Numerical values at all z

| z | C_galactic | C_cosmic | C_cos/C_gal (S107) | C_gal/C_cos (inv) |
|------|------------|----------|--------------------|--------------------|
| 0.00 | 0.3150 | 0.3150 | 1.000 | 1.000 |
| 0.15 | 0.4438 | 0.4116 | 0.927 | 1.078 |
| 0.50 | 0.7339 | 0.6082 | **0.829** | **1.207** |
| 0.71 | 0.8534 | 0.6969 | **0.817** | **1.224** |
| 0.93 | 0.9278 | 0.7678 | 0.827 | 1.208 |
| 1.50 | 0.9901 | 0.8778 | 0.887 | 1.128 |
| 2.00 | 0.9982 | 0.9255 | 0.927 | 1.079 |
| 5.00 | 1.0000 | 0.9900 | 0.990 | 1.010 |

Two structural observations:

1. **At z = 0, the ratio is exactly 1.0** — by *construction*. The calibration `C_galactic(0) = Ω_m` and the definition `C_cosmic(0) = Ω_m · 1 / 1 = Ω_m` ensure both equal 0.315. Any prediction of a present-day deviation between local and global G is mathematically suppressed to zero at z = 0 by calibration choice.

2. **At intermediate z (≈ 0.5–1), the ratio diverges.** This is because the two functions have very different saturation rates:
   - C_galactic → 1 as z → ∞ exponentially fast (tanh saturation): gap to 1 is ~5.7×10⁻² at z=1, ~1.8×10⁻³ at z=2
   - C_cosmic → 1 as 1 − O((1+z)⁻³) (matter domination): gap to 1 is ~0.21 at z=1, ~0.07 at z=2

The maximum suppression `C_cos/C_gal ≈ 0.82` occurs at z ≈ 0.7. **This peak location is determined by the rate-mismatch between two functions with different functional forms**, not by a derivation from the framework's axioms.

### Step 3: The three-way comparison vs DESI DR1

I integrated the growth equation under three hypotheses:
- **LCDM**: G_rat = 1 (no mechanism)
- **S107**: G_rat = C_cosmic / C_galactic (Session 107's choice; predicts suppression)
- **INV**: G_rat = C_galactic / C_cosmic (the inverted assignment; predicts enhancement)

Then computed `fσ₈(z) = f(z) · σ₈(0) · D(z)` with σ₈(0) = 0.76 (Session 102's value for Sync) and σ₈(0) = 0.811 (Planck) for LCDM.

DESI DR1 measurements (arXiv:2411.12021, Table 9):

| Bin | z | fσ₈ obs | σ_obs | LCDM | S107 | INV |
|------------|------|---------|-------|--------|--------|--------|
| BGS | 0.295 | 0.471 | 0.092 | 0.473 | 0.411 | 0.479 |
| LRG1 | 0.510 | 0.454 | 0.040 | 0.474 | 0.418 | 0.474 |
| LRG2 | 0.706 | 0.473 | 0.041 | 0.462 | 0.414 | 0.453 |
| LRG3+ELG1 | 0.930 | 0.470 | 0.038 | 0.439 | 0.402 | 0.421 |
| ELG2 | 1.317 | 0.387 | 0.054 | 0.395 | 0.371 | 0.368 |
| QSO | 1.491 | 0.317 | 0.077 | 0.375 | 0.356 | 0.346 |

| Variant | σ₈(0) | χ² | χ²/dof |
|----------|-------|------|--------|
| LCDM | 0.811 | 1.58 | 0.26 |
| **S107** | **0.760** | **6.91** | **1.15** |
| INV | 0.760 | 2.41 | 0.40 |

Session 107's mechanism + Session 102's σ₈(0) jointly disagree with DESI at χ² = 6.91. The inverted mechanism, with the same σ₈(0), is acceptable at 2.41.

### Step 4: Decomposition at LRG1 (z = 0.51)

The 12% suppression at LRG1 breaks down as:

| Source | Contribution to fσ₈(0.51) |
|--------|---------------------------|
| σ₈(0): 0.811 → 0.76 | **−6.29%** |
| f(z) suppression (mechanism) | **−7.97%** |
| D(z) shape change | **+2.18%** |
| **Total Session 107 prediction** | **−11.88%** |

So **the σ₈(0) calibration alone contributes more than half the prediction.** The mechanism (G_rat ≠ 1) contributes the rest, but it is not the dominant effect.

### Step 5: With σ₈(0) free, all three variants are degenerate

Let σ₈(0) be a free parameter, fit to minimize χ² against DESI DR1:

| Variant | Best-fit σ₈(0) | χ² | χ²/dof |
|---------|----------------|------|--------|
| LCDM | 0.814 | 1.58 | 0.26 |
| S107 | **0.844** | **1.85** | 0.31 |
| INV | **0.783** | **1.98** | 0.33 |

**This is the dispositive result.** If σ₈(0) is allowed to float, *every* variant fits DESI DR1 well, with the mechanism direction merely shifting the best-fit σ₈(0) up or down. Session 107's mechanism plus σ₈(0) = 0.844 actually beats LCDM at σ₈(0) = 0.811 in DESI DR1 χ² (1.85 vs 1.58, but same shape).

The conclusion: **the mechanism is approximately degenerate with σ₈(0) over the DESI redshift range. TEST-04a is a test of σ₈(0), not of the coherence mechanism.**

### Step 6: Where σ₈(0) = 0.76 came from

I read `Synchronism/Research/Session102_S8_Tension.md`. The relevant passage:

> σ₈_Sync / σ₈_ΛCDM = D_Sync(0) / D_ΛCDM(0) = 0.942
> For σ₈_ΛCDM = 0.81 (Planck): σ₈_Sync = 0.942 × 0.81 = 0.763
>
> | Survey | S₈ | Method |
> |--------|-------|--------|
> | Planck | 0.832 ± 0.013 | CMB |
> | DES Y3 | 0.776 ± 0.017 | Lensing |
> | KiDS-1000 | 0.759 ± 0.021 | Lensing |
> | Synchronism | **0.763** | Prediction |
>
> **Our prediction falls WITHIN the lensing measurements!**

Session 102 explicitly compares the prediction to existing lensing measurements (DES Y3, KiDS-1000), both already published before December 2025, and notes the agreement. This is a **reparametrization-grade fit**, not a prospective prediction. The framework chose the lensing side of an existing 7% tension; DESI DR1 has now favored the CMB side.

### Step 7: Three independent failures, not one

Putting this together, TEST-04a is not a single failure — it's a stack of three:

1. **Calibration drift**: ratio_0 = 0.177 was back-fitted to make C_galactic(0) = Ω_m, ensuring G_rat(0) = 1 by construction. The "no late-time deviation" feature is a calibration choice, not a derivation.

2. **σ₈(0) post-hoc fit**: Session 102 set σ₈(0) = 0.76 specifically to fall within DES Y3 / KiDS-1000 lensing measurements. The S₈ tension was already known; the framework took a side. This is the dominant contribution to the TEST-04a deviation.

3. **Mechanism direction**: Session 107 chose `G_local/G_global = C_cosmic/C_galactic` (suppression) without deriving the assignment. The opposite assignment (enhancement) is mathematically symmetric and equally consistent with the framework's axioms — *and* consistent with DESI DR1.

The maintainer's 2026-05-09 framing of TEST-04a as a "mechanism-class sign reversal" is correct in spirit but incomplete: the mechanism class fails for *both* directions when paired with the σ₈(0) = 0.76 calibration. The σ₈(0) calibration is the load-bearing failure.

## Implications for the Site

### For TEST-04a's status

The current site label "Failed — Mechanism-Class: Sign Reversed" undercommunicates the diagnosis. The mechanism direction *is* sign-reversed relative to DESI's preferred σ₈(0), but inverting the mechanism does not save the framework — it just reshuffles which σ₈(0) value is consistent. The honest label is:

> **Failed — Doubly Post-Hoc Calibration**
> The fσ₈ prediction decomposes into ~50% σ₈(0) calibration (Session 102, fitted to DES/KiDS lensing in Dec 2025) and ~50% mechanism contribution (Session 107). Both components are degenerate with σ₈(0) over the DESI redshift range. DESI DR1 disfavors σ₈(0) = 0.76 directly; the mechanism direction is only loosely constrained.

### For the framework's S₈ tension claim

The Session 102 result is currently presented on the site as a successful *prediction* of the S₈ tension. The honest framing is: **the framework took a side in an existing tension, by choosing parameters that match the lensing side rather than the CMB side**. This is a calibration choice, not a derivation. DESI DR1's σ₈(0) ≈ 0.84 (Table 10 of arXiv:2411.12021, full-modeling) is a *third* data point that did not exist when Session 102 was written, and it points back toward the CMB-tension side.

The site's `/key-claims` and `/why-synchronism` pages should reflect that "Synchronism predicts the lensing S₈" is more accurately stated as "Synchronism's parameters were calibrated to lensing-side S₈ in 2025; DESI 2024 disfavors that calibration."

### For the C_cosmic identity

The site does not currently state that `C_cosmic = Ω_m(z)` in the cosmological prediction. This is a quiet identity that does work the framework's general C(ρ) function does not do — and it is *not* an instance of the coherence equation. The two functions saturate at different rates, and that rate-mismatch is what makes the suppression non-zero. Without this identity, the prediction would be trivial (both C functions would be the same tanh, and G_rat would be exactly 1 at all z).

This should be stated explicitly: the cosmological prediction uses a *different* mathematical object for C_cosmic than the chemistry / SPARC / γ-calculator contexts. There is no derivation that links them.

## Action: Maintainer

Three changes flow from this finding.

### Page edits

1. **`/tier-1-existing` TEST-04a entry**: add a "Decomposition" line:
   > The 12% suppression at z=0.51 decomposes as: σ₈(0) calibration (−6.3%, fitted to DES/KiDS in Session 102 Dec 2025) + mechanism (−8.0%) + D(z) shape (+2.2%). The σ₈(0) calibration is the dominant contribution. DESI DR1 disfavors σ₈(0) = 0.76 directly; the mechanism direction is only loosely constrained over the DESI redshift range.

2. **`/honest-assessment`**: under TEST-04a, add:
   > **Inverting the C-ratio assignment does not save the prediction.** Best-fit σ₈(0) for the inverted mechanism is 0.78 (χ²/dof = 0.33); for Session 107's mechanism, 0.84 (χ²/dof = 0.31); for ΛCDM with no mechanism, 0.81 (χ²/dof = 0.26). When σ₈(0) is allowed to float, all three variants fit DESI DR1 essentially equally well. The mechanism direction is degenerate with σ₈(0) over the DESI redshift range; TEST-04a is, in practice, a σ₈(0) test, not a Synchronism-mechanism test.

3. **`/key-claims` and `/why-synchronism`**: any text presenting "Synchronism predicts S₈ tension" should be edited to flag the post-hoc calibration:
   > σ₈(0) = 0.76 was fitted to DES Y3 / KiDS-1000 lensing measurements in Session 102 (December 2025). DESI DR1 (April 2024, public before Session 102) prefers σ₈(0) ≈ 0.84, on the CMB side of the tension.

### Research-archive back-annotation

A proposal should be filed to `Synchronism/Research/proposals/test04a_double_calibration_failure.md`:

- TEST-04a's failure is not a single sign error; it is a stacked failure of three calibration choices:
  - ratio_0 = 0.177 (galactic density calibration)
  - σ₈(0) = 0.76 (post-hoc to DES/KiDS lensing)
  - G_rat = C_cosmic/C_galactic (mechanism direction)
- The mechanism magnitude (~8%) is comparable to the σ₈(0) calibration magnitude (~6%), and the two are degenerate over the DESI redshift range
- C_cosmic = Ω_m(z) is a *different* mathematical object from C_galactic = tanh(γ ln(...)). This identity is undisclosed in Sessions 102 and 107 and is what makes the predicted suppression non-zero
- The framework's only escape is a derivation that *uniquely* fixes the mechanism direction *and* derives σ₈(0) from first principles, both of which are open

### Topic-queue updates

The topic `test04a-sign-error-diagnosis.md` should be archived to `done/`. Two follow-ups are seedable:

- **`session102-sigma8-postdiction-audit.md`** (HIGH): the σ₈(0) = 0.76 result was published in Session 102 (Dec 2025), with explicit citations of DES Y3 (2022) and KiDS-1000 (2021) measurements. Audit the framework's σ₈(0) derivation for any post-hoc parameter choices that align it with lensing. If σ₈(0) is *fully* derivable from Session 102's growth equation without lensing input, mark as Validated. If any tunable enters, the entire S₈ "prediction" is reparametrization.
- **`c-cosmic-vs-c-galactic-identity-gap.md`** (HIGH): the Session 107 simulation uses `C_cosmic(z) = Ω_m(z)` rather than the framework's coherence equation. This is a semantic identification that is undefended — why does Ω_m count as cosmic coherence? If the *same* equation `C(ρ) = tanh(γ ln(ρ/ρ_crit + 1))` were used for C_cosmic with cosmic-mean ρ, the two functions would have the same saturation rate and the suppression would vanish. This identification is the load-bearing trick of the cosmology arc.

## Open Threads

- **What is C_cosmic, really?** If Ω_m(z) is not the framework's coherence function, then the framework has no cosmological coherence value derived from its own equation. If `C_cosmic = tanh(γ ln(ρ_cosmic/ρ_crit + 1))` is used instead, with ρ_cosmic ~ 10⁻⁵ ρ_crit, then C_cosmic ~ 10⁻⁵ at z = 0 and the suppression mechanism is a factor 10⁵ effect, which is unphysical. Either C_cosmic is Ω_m(z) (with no derivation) or the mechanism is wildly larger than 12%. The Session 107 code chose option 1 silently.
- **Why does D(z) increase under suppression?** A counterintuitive feature of the calculation: under Session 107's mechanism, D(z=0.5) > D_LCDM(z=0.5) when both are normalized to D(0) = 1. This is because suppressed growth means D fell *less* from z=0 going backwards — i.e., D was always closer to 1. This is a normalization artifact, not a physical effect. The site should make this normalization choice explicit.
- **Best-fit σ₈(0) for Session 107 is 0.844** — interestingly close to DESI's full-modeling σ₈ = 0.841 ± 0.034. If the framework had not committed to σ₈(0) = 0.76 in Session 102 (the lensing side), Session 107's mechanism would be *consistent* with DESI DR1 at σ₈(0) ~ 0.84. Whether this is interesting (the mechanism is correct, only the σ₈ calibration was wrong) or telling (any small modification to growth is degenerate with σ₈(0)) deserves further analysis. The latter is more likely given that LCDM and the *inverted* mechanism are also good fits with their own best-fit σ₈(0).
- **TEST-04a as a σ₈(0)-prior test**: a clean reformulation would be: "For mechanism class ⟨G modification by C ratio⟩, what σ₈(0) does the framework derive *without* lensing input, and does it match DESI's measured σ₈(0)?" If the framework cannot derive σ₈(0) at all, the cosmology arc is reduced to a single calibrated number with no falsifiable content from the mechanism.
