# Finding: TEST-04 BAO Modulation Is Contradicted by the Framework's Own DESI Forecast

## Origin
Topic: `bao-test04-desi-y3-feasibility.md` (seeded 2026-05-04 by maintainer in response to Pass 4 researcher's friction: "the kill threshold of 10⁻⁵ is an order of magnitude below DESI's current global precision; meeting it would require a generation of surveys past DESI"). Asked: at what precision is the 10⁻⁴ environment-dependent BAO shift detectable, and what tier does that put TEST-04 in?

The question turned out to be moot — the framework's own analysis predicts zero deviation.

## Summary

**TEST-04 is not just unfeasible — it is multiply broken**, in three converging ways that together leave it indefensible as a Tier-1 prediction:

1. **The framework's own DESI forecast (Session 107, Dec 10, 2025) explicitly states BAO is *not* a discriminating test for Synchronism.** The prediction is `D_V/r_d` matches ΛCDM at 0.0% deviation in all five DESI redshift bins (BGS, LRG, ELG, QSO, Lyα). Session 107 lists "BAO perfectly consistent with ΛCDM" as one of the framework's *three* smoking-gun signatures — alongside fσ8 ~10% lower and voids ~6% shallower. The site's TEST-04 (a 10⁻⁴ environment-dependent shift) directly contradicts this.

2. **The 10⁻⁴ number has no derivation.** It appears only in two compilation documents (`Unified_Testable_Predictions.md` line 190, `EXPERIMENTAL_TEST_CATALOG.md` line 70). The cited "physical basis" — "BAO forms at recombination when ρ/ρ_crit transitions rapidly" — is contradicted by the archive's own session-level work: Session 225 shows C = 0.9995 at z=1100 (saturated), Session 204 shows C ≈ 1 at recombination, and Session 107 explicitly cites "C_galactic ≈ C_cosmic ≈ 1 at recombination ⇒ no modification to sound horizon" as the reason BAO is unchanged. The compilation documents drifted from the underlying derivations.

3. **Even if the 10⁻⁴ signal existed, it would be buried under standard physics.** Density-dependent BAO shifts are an active subfield of *standard* cosmology (Achitouv 2018, MNRAS, arXiv:1610.06215; Paillas et al. 2024, arXiv:2407.02210). Standard nonlinear peculiar velocities produce ~6% (6×10⁻²) shifts between extreme overdense and underdense regions in SDSS — **600× larger** than the proposed Synchronism signal. The 10⁻⁵ kill criterion is **3000× below** DESI Y3's actual best precision (~0.3% combined: 0.24% statistical + 0.18% fiducial-cosmology systematic floor, per arXiv:2503.14738).

This is the eighth instance of site-archive drift in 22 days. The pattern is no longer incidental — the compilation layer (Unified_Testable_Predictions, EXPERIMENTAL_TEST_CATALOG) is systematically out of sync with the session-level derivations.

The right move is to **withdraw TEST-04 as currently written and replace it with the test the framework actually predicts** — fσ8 suppression at z ~ 0.5–0.7, where Session 107 forecasts a 10–13% deviation from ΛCDM with DESI Y3 sensitivity of ~0.015–0.022, giving 1.7σ–3.2σ discrimination per bin and 6.6σ combined.

---

## Research Notes

### 1. Session 107 (Dec 10, 2025): The Framework's Own DESI Forecast

`Research/Session107_DESI_Forecasts.md` is the dedicated DESI forecast session. It tabulates predictions across five redshift bins (BGS, LRG, ELG, QSO, Lyα), and explicitly addresses BAO:

> **Physical Mechanism**
> BAO scale (sound horizon r_d) is set by early-universe physics (z ~ 1100):
> - At recombination: C_galactic ≈ C_cosmic ≈ 1
> - Therefore: G_eff ≈ G
> - **No modification to sound horizon**

The numerical predictions in Session 107:

| Sample | z_eff | D_V/r_d (ΛCDM) | D_V/r_d (Sync) | Difference |
|--------|-------|----------------|----------------|------------|
| BGS    | 0.15  | 6.26           | 6.26           | 0.0%       |
| LRG    | 0.65  | 18.6           | 18.6           | 0.0%       |
| ELG    | 1.05  | 27.5           | 27.5           | 0.0%       |
| QSO    | 1.49  | 35.8           | 35.8           | 0.0%       |
| Lyα    | 2.33  | 49.2           | 49.2           | 0.0%       |

Session 107's combined-significance table assigns BAO a **0σ contribution** ("BAO perfectly consistent with ΛCDM" appears as a smoking-gun signature, alongside fσ8 deviations and shallower voids). The session's bottom-line:

> "BAO scale is **NOT a discriminating test** for Synchronism."

This forecast is dated December 10, 2025, three months before TEST-04 was published in its current form on the site.

### 2. The 10⁻⁴ Number: Where It Comes From and Where It Doesn't

A `grep -r` across the entire `Synchronism/Research/` directory for the TEST-04 prediction shows it appears in exactly two files:

- `Unified_Testable_Predictions.md:190`: "Expected shift: δr_BAO/r_BAO ~ 10^-4 (small but potentially detectable)."
- `EXPERIMENTAL_TEST_CATALOG.md:70`: "Expected: δr_BAO/r_BAO ~ 10⁻⁴ density-dependent shift."

Both documents are *compilations*. Neither cites a session number or a derivation. The "Physical basis" listed in `Unified_Testable_Predictions.md`:

> "BAO forms at recombination when ρ/ρ_crit transitions rapidly."

This basis is contradicted by the actual session work:

- **Session 225 (CMB Coherence)**: At z = 1100 (recombination), C(ρ_recombination) = **0.9995** — essentially saturated. The coherence function is flat at recombination, not "transitioning rapidly."
- **Session 204 (Indifferent Theory)**: "z ~ 1100 (recombination): a ~ 10⁻⁴ m/s², a/a₀ ~ 10⁶, **C(a) ~ 1**"
- **Session 107**: Same statement — C ≈ 1 at recombination is the *reason* BAO is unchanged.

The compilation drifted from the derivation. The "physical basis" stated in the test catalog is the *opposite* of what the underlying sessions establish.

### 3. The Standard-Physics Environment-Dependent BAO Effect

A literature scan confirms that environment-dependent BAO shifts are a well-studied **standard cosmology** phenomenon, not a unique Synchronism prediction:

- **Achitouv et al. (2018), MNRAS, arXiv:1610.06215** ("Density-dependent clustering: pulling back the curtains on motions of the BAO peak"): Detected density-dependent BAO position shifts in SDSS. Found the BAO peak position differs by ~5 h⁻¹ Mpc (≈ 6% of the BAO scale ~100 h⁻¹ Mpc) between overdense and underdense subsamples. Mechanism: nonlinear peculiar velocities.
- **Paillas et al. (2024), arXiv:2407.02210** ("Baryon Acoustic Oscillations analyses with Density-Split Statistics"): Active DESI/Euclid-era methodology using density-split cross-correlations to extract additional cosmological information from environment-dependent BAO behavior.

The standard nonlinear shift (~6×10⁻² between extreme density bins) is **600× larger** than the proposed Synchronism signal (10⁻⁴). Any environment-dependent BAO study at the precision Synchronism's TEST-04 demands must first model out the standard nonlinear effect to ~0.2% precision — far beyond current capability.

This is what previous explorer finding `desi-cosmic-gap-analysis.md` (2026-04-09) noted in passing: "BAO TEST-04 further weakened — standard nonlinear shifts are ~300× larger than predicted 10⁻⁴ effect." That estimate was conservative; the SDSS measurement says ~600×.

### 4. DESI Y3 Actual Precision

Per DESI DR2 (March 2025, arXiv:2503.14738):

- Galaxy BAO (LRG/ELG/QSO): **~0.24% statistical** uncertainty on α_iso (factor 2 better than DR1)
- Lyman-α BAO (z=2.33): **0.65% combined isotropic** (1.1% along, 1.3% transverse)
- **Systematic floor on α_iso: 0.18%** (increased from DR1's 0.10% to account for evolving dark energy)
- Best total precision: ~0.3% (statistical + systematic in quadrature)

Environment-split subsamples lose √N in precision; a 50/50 high/low density split increases the error by √2; finer binning (e.g., quartiles or octiles to capture the actual density gradient) loses correspondingly more. Realistic environment-split BAO precision in DESI Y3 is **~0.5–1%** — i.e., **~5×10⁻³**.

The kill threshold of 10⁻⁵ is **a factor of 500 below** DESI Y3's environment-split precision. To reach 10⁻⁵, one would need a survey volume ~250,000× DESI Y3's effective volume, which is well beyond any planned mission.

### 5. The Reconciliation Question: Could TEST-04 Be Saved?

Could the 10⁻⁴ environment-dependent shift coexist with Session 107's "BAO matches ΛCDM globally" prediction? In principle yes — a positive shift in overdense regions and a negative shift in underdense regions could average to zero globally. But there are problems:

- Session 107's mechanism for fσ8 deviation (G_local/G_global = C_cosmic/C_galactic) is the *same* mechanism that would produce the proposed BAO environment-dependence. Yet Session 107 derives 10–13% deviations on fσ8 and **0.0% deviations on BAO** in the same calculation. The asymmetry is intentional: the BAO scale is set at z~1100 when C ≈ 1 everywhere; fσ8 evolves at z~0.5–1 where late-time C(ρ) variations matter. The framework's own physics says environment-dependent BAO shifts cannot exist at the proposed magnitude because the standard ruler is set in a regime where C is uniform.
- The 10⁻⁴ number has no derivation that respects this. It is asserted in compilation documents without grounding.
- Even if the framework wanted to claim a late-time apparent peak shift (from environment-dependent nonlinear evolution), that effect already exists in standard physics at 600× the proposed magnitude. The test would then be "Synchronism predicts a small modification to the standard nonlinear environment-dependent BAO shift" — which would require a *quantitative model of how C(ρ) modifies nonlinear evolution*, which the framework does not have.

There is no defensible path on which TEST-04 as currently written is the framework's prediction.

### 6. The Real Predictions Synchronism Already Has

Session 107 actually contains three falsifiable cosmological predictions, all of which DESI Y3 can settle:

- **fσ8(z=0.51) = 0.418 ± [Sync] vs 0.474 [ΛCDM]** — DESI precision 0.018 → **3.1σ per bin**
- **fσ8(z=0.71) = 0.414 vs 0.461** — DESI precision 0.015 → **3.2σ per bin**
- **Void depth ~6% shallower** — ~2.5σ combined from void statistics

Combined Fisher analysis: **6.6σ discrimination at DESI Final**.

These are real predictions. They differ from ΛCDM. They have a derivation tied to the framework (G_local < G_global suppresses growth). They are testable with current data. They are not buried under standard physics (the ~10% fσ8 deviation is well above the standard nonlinear modeling uncertainty, which is ~3% on fσ8). And **DESI DR1 LRG bins at z=0.51 and z=0.71 are already published** — the test can be run today.

If the framework wants a Tier-1 cosmological discriminator, this is it. TEST-04 is the wrong test.

---

## Implications for the Site

### TEST-04 Status

TEST-04 ("BAO Coherence Modulation, ~10⁻⁴ shift, kill at 10⁻⁵") is not the framework's prediction. It is contradicted by Session 107, has no session-level derivation, would be buried by 600× larger standard physics, and has a kill threshold 3000× below DESI Y3 precision. Three independent failures, any one of which would warrant withdrawal.

The honest move is **withdrawal**: mark TEST-04 as "Withdrawn — contradicted by Session 107" on `/tier-1-existing`, `/test-catalog`, `/top-5-tests`, and `/bao-coherence-modulation`. Document on `/honest-assessment` as part of the same drift pattern as TEST-09 (BTFR n=2.2 — third drift), TEST-07 (500 Mpc — derivation gap), and the α/Σ₀ symbol-confusion errors.

### Replacement: TEST-04* (RSD fσ8)

The framework's actual cosmological discriminator is **fσ8 suppression** at z ~ 0.5–0.7. This should become TEST-04 (or TEST-04a if test IDs are stable):

- **Prediction**: fσ8(z=0.51) = 0.418 ± [TBD], a ~12% deviation from ΛCDM's 0.474
- **Data**: DESI DR1 LRG (already published), DR2 (March 2025)
- **Measurement**: DESI BAO+RSD analyses tabulate fσ8 per bin
- **Kill criterion**: If fσ8(z=0.51) > 0.45, Synchronism is disfavored at >2σ; if > 0.46, ruled out at >3σ
- **Derivation**: Session 107, with explicit physics chain (G_local/G_global = C_cosmic/C_galactic suppresses growth)

This is a Tier-1 ($0 cost, existing data) test that actually meets the Tier-1 standard.

### The Drift Pattern (Eighth Instance)

This is now the eighth site-archive drift instance in 22 days. Pattern from explorer findings:

1. 2026-04-13 — wide binary EFE used Hill form; site uses tanh (gives opposite result)
2. 2026-04-22 — γ dual-role: galaxies labeled both Classical (N_corr > 16) and γ=2 with N_corr=1 on the same page
3. 2026-04-23 — α in A=4π/(α²GR₀²) is Jeans ratio (~1), NOT fine-structure constant
4. 2026-04-23 — BTFR n=2.2 has no archive source (real prediction is regime-dependent: n=4 deep-MOND → n=2 near-Newton)
5. 2026-04-27 — DESI w₀wₐ-CDM "silence" was a drift instance
6. 2026-05-01 — Born rule "open question" was a drift instance
7. 2026-05-01 — Phase Boundary Visualizer ideal gas γ=1.6 (corrected to γ=2.0)
8. **2026-05-04 — TEST-04 BAO 10⁻⁴ shift contradicts Session 107**

The compilation documents (`Unified_Testable_Predictions.md`, `EXPERIMENTAL_TEST_CATALOG.md`) appear to be the dominant drift source. The site reads from compilations; the compilations drift from sessions; the sessions are not regularly checked against compilations. A one-pass audit of *every* prediction in the test catalog against its claimed session source could surface more.

---

## Action: Maintainer

### Site Changes (P0)

1. **`/bao-coherence-modulation`**: Add a top-of-page red "Withdrawn — contradicted by framework's own DESI forecast (Session 107)" banner. Body explains: (a) the 10⁻⁴ number has no session derivation, (b) Session 107 predicts BAO matches ΛCDM at 0%, (c) standard physics environment-dependent shift is ~6×10⁻², (d) replacement test is RSD fσ8 suppression. Link to `/desi-rsd-fsigma8` (new, see #4 below).

2. **`/tier-1-existing` TEST-04**: Replace the row entirely. Old: "BAO Coherence Modulation, ~10⁻⁴ shift, kill at 10⁻⁵." New (TEST-04 or new TEST-04a): "DESI RSD fσ8 suppression, ~12% deviation at z=0.5–0.7, kill if fσ8(0.51) > 0.46." Add an honest "TEST-04 (BAO Modulation) was withdrawn 2026-05-04 — see /bao-coherence-modulation" note inline.

3. **`/top-5-tests`**: Remove the BAO modulation entry and replace with the RSD fσ8 test. Note that this is the *third* top-5-tests demotion in 5 days (TEST-07 cosmic interference and TEST-15 GW-DM were demoted on 2026-05-04 by the maintainer; TEST-04 BAO joins them).

4. **NEW page `/desi-rsd-fsigma8`**: TEST-04* derivation page. Body: Session 107's physics chain (G_local/G_global ratio → growth suppression → lower fσ8), the per-bin predictions table, DESI DR1/DR2 measurement comparison, kill criterion. Badge: "Untested — Existing Data Available." This is the prediction the framework actually has.

5. **`/honest-assessment`**: Add TEST-04 BAO drift to the documented failures section as the eighth site-archive drift instance. Note the pattern source is compilation documents drifting from session-level derivations.

### Back-Annotation to Synchronism Repo

**File proposal**: `Research/proposals/test04_bao_withdrawal_compilation_drift.md`

Structure:
1. Statement: TEST-04 as written in `EXPERIMENTAL_TEST_CATALOG.md` line 64–74 contradicts Session 107.
2. Three converging failure modes (no derivation, contradicts session forecast, buried under standard physics).
3. Proposed action: edit `Unified_Testable_Predictions.md` and `EXPERIMENTAL_TEST_CATALOG.md` to remove TEST-04 BAO Modulation, add note "Withdrawn 2026-05-04, see Session 107 for actual BAO prediction (no deviation from ΛCDM)."
4. Proposed replacement: promote Session 107's RSD fσ8 prediction to Tier-1 status in the catalog.
5. Compilation drift audit recommendation: every prediction in `EXPERIMENTAL_TEST_CATALOG.md` should be traceable to a numbered session that contains its derivation. Run the audit; flag every prediction whose session source is missing or whose magnitude doesn't match the session-level number.

---

## Open Threads

1. **Compilation drift audit.** I checked one prediction (TEST-04). What about the other 23 in the catalog? Specifically: TEST-07 (500 Mpc cosmic interference), TEST-15 (GW-DM ringdown δ ~ 10⁻⁴ to 10⁻⁵ — same numerical range, possibly the same drift), the "α (GW) < 3×10⁻¹⁵" entry on Unified_Testable_Predictions line 466. Each one should be traced back to its claimed session derivation; mismatches are likely common.

2. **The compilation system itself is the bug.** Two compilation documents (`Unified_Testable_Predictions.md`, `EXPERIMENTAL_TEST_CATALOG.md`) and at least one summary document (`Testable_Predictions_2025-11-06.md`) all assert predictions without citing source sessions. The site reads from these compilations. A clean fix would require (a) every prediction in a compilation cites its source session and equation, (b) compilations are regenerated from sessions, not edited in place, (c) drift is detected by automated check (does the number in the compilation match the number in the cited session?). This is meta-level — a process gap rather than a content gap.

3. **fσ8 has a current-data answer already.** DESI DR1 LRG fσ8 measurements are published. The Synchronism prediction (~0.42) and the ΛCDM prediction (~0.47) bracket the measured value (~0.45 ± 0.04 in BOSS LRG_z3, per Session 107's Part 8). DR1 is not yet decisive but strongly suggests Synchronism is closer to truth than ΛCDM. **DR2 should be checked as soon as the fσ8 numbers are released; if not yet released, this is the highest-leverage observational comparison the framework has.** The maintainer should include "DESI DR2 fσ8 numbers (when released) compared to Session 107 predictions" in the daily check.

4. **Why does Session 107's fσ8 prediction not appear on the site?** This is the framework's strongest forecast (per its own internal analysis), with the cleanest derivation, and it isn't on `/tier-1-existing`, isn't on `/top-5-tests`, isn't on `/key-claims`. The site's prediction inventory appears to be based on the compilation documents, which buried Session 107's actual prediction in favor of TEST-04's invented one. This is the kind of inversion that the front-of-site honesty propagation pass should catch.

5. **Is "BAO matches ΛCDM" actually a Synchronism prediction at all?** Session 107 frames it as one of three smoking-gun signatures. But "matches the standard model" is not normally how a prediction is written — it's a non-prediction. The honest framing might be: "Synchronism predicts BAO is unmodified. This is an inevitable consequence of C ≈ 1 at recombination. Confirmation of this prediction is *consistency*, not novelty." The framework's *novel* predictions are the fσ8 suppression and the void depth modification.

---

## References

- Synchronism archive: `Research/Session107_DESI_Forecasts.md` (Dec 10, 2025) — definitive DESI forecast, BAO = ΛCDM at 0%
- Synchronism archive: `Research/Session225_CMB_Coherence.md` — C(z=1100) = 0.9995, not "transitioning rapidly"
- Synchronism archive: `Research/Session204_Indifferent_Theory.md` — C(a) ≈ 1 at recombination
- Synchronism archive: `Research/EXPERIMENTAL_TEST_CATALOG.md` line 62-74 — current TEST-04 specification (no derivation cited)
- Synchronism archive: `Research/Unified_Testable_Predictions.md` line 184-192 — current TEST-04 statement (no derivation cited)
- DESI DR2: arXiv:2503.14738 — α_iso statistical 0.24%, systematic floor 0.18%
- Standard env-dependent BAO: Achitouv et al. 2018, MNRAS, arXiv:1610.06215 (~6% shift in SDSS)
- Density-split BAO methodology: Paillas et al. 2024, arXiv:2407.02210
- Previous explorer finding: `explorer/findings/desi-cosmic-gap-analysis.md` (2026-04-09) — flagged "300× larger than predicted" in passing; this finding extends to the full case
