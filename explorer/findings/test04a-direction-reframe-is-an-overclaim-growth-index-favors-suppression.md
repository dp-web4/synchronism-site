# Finding: TEST-04a's "Wrong Direction (Enhancement)" Reframe Over-weights One Bin — the Ensemble Growth Index Leans *Suppression*, and DR2 Growth Isn't Out Yet

## Origin

Seeded topic `desi-dr2-growth-test04a-direction-check.md` (maintainer, 2026-07-01): (1) has DESI DR2 full-shape growth been published? (2) does the TEST-04a "direction failure (enhancement observed, suppression predicted)" persist?

WAKE redirected the scope. The topic assumes today's framing is correct and asks whether DR2 preserves it. But that framing was **changed this morning** (2026-07-01 maintainer) to lead with *"Wrong Direction (Enhancement, Not Suppression) — the load-bearing constraint; the 2.4σ is secondary."* This session checks whether that reframe is honest against primary data — and, in a self-correcting turn, catches me nearly laundering a *second-hand* claim the same way. Re-execute, don't re-trust — including your own draft.

## Summary

Three results, in order of confidence:

1. **DESI DR2 full-shape growth is NOT published.** DR2 BAO shipped April 2025; the DR2 full-shape/RSD growth analysis is still in preparation, DR2 release targeted **Spring 2027**. TEST-04a cannot be re-anchored to DR2 yet; the re-open trigger has no DR2 datum to act on. Interim anchors are all DESI **DR1** (full-shape 2411.12021/22; PV survey 2512.0322x/0323x, 2026; bispectrum 2503.09714) — all reported **ΛCDM/GR-consistent**.

2. **The reframe over-weights one bin. The ensemble growth index leans *suppression*, the framework's predicted direction.** The direct measure of "suppressed vs enhanced growth relative to GR" is the growth index γ (f = Ω_m^γ; γ_GR ≈ 0.545; **larger γ ⇒ slower/suppressed growth**). DESI DR1: **γ = 0.580 ± 0.110** (FS+BAO+PV), **0.610 ± 0.160** (FS+BAO), up to **0.633 ± 0.025** in full multi-probe combos — **all above GR**, i.e. the *ensemble* growth history leans mildly toward **suppression**. The "enhancement" the reframe headlines is a **single bin** (LRG1 z=0.51, fσ₈/fid = 1.16 ± 0.13, ~1.2σ above fiducial), not the ensemble signal. Making that one bin "the load-bearing constraint" while calling the ensemble-level amplitude "secondary" inverts the weight.

3. **The robust, load-bearing constraint is amplitude, not direction** — combined **σ₈ = 0.841 ± 0.034 vs predicted 0.76 → 2.4σ**, an ensemble quantity robust to per-bin scatter. Today's edit demoted this to "secondary corroboration" and promoted a ~1.2σ single-bin directional fluctuation to "load-bearing." That is an epistemic-weight inversion, and it reverses the site's own 2026-06-24 explorer conclusion (kill is amplitude-based).

**Net: the framework's DESI failure is one of amplitude (σ₈ set too low, 2.4σ, ensemble), not of sign. At ensemble level the growth *direction* (γ) mildly favors the framework's suppression, not enhancement.** The "wrong direction — enhancement" headline is the mirror image of the LIV "refuted" overclaim the same maintainer corrected this morning: both break the site's calibrated-epistemics brand toward *over*-refutation.

## Research Notes

### 1. DR2 growth status (authoritative)

Web search of the DESI publication record (July 2026): DR2 BAO is public (April 2025) and used in DR1-FS + DR2-BAO combinations (arXiv:2606.23936). The **DR2 full-shape RSD growth** analysis is unreleased; DR2 expected **Spring 2027**. So:
- The site's re-open policy ("unfreezes if DR2 full-shape reports fσ₈(z≈0.5) ≤ 0.46") has no DR2 datum. Say so plainly rather than imply DR2 growth exists.
- Interim DR1 currency: DR1 PV survey (2026) reports fσ₈(z_eff=0.07) = 0.450₋₀.₀₅₅⁺⁰·⁰⁵⁵, "consistent with ΛCDM and GR." DR1 full-shape S₈ = 0.808 ± 0.017 (Planck-consistent). None describe an "enhancement."

### 2. The growth index adjudicates the *ensemble* direction (primary-sourced)

From the DESI 2024 modified-gravity / full-shape growth results (2411.12026 / 2411.12022):

| Combination | γ | vs GR (0.545) |
|---|---|---|
| DESI FS+BAO | 0.610 ± 0.160 | +0.4σ (above) |
| DESI FS+BAO+PV | 0.580 ± 0.110 | +0.3σ (above) |
| Full multi-probe (DESI+CMB+…) | 0.633 ± 0.025 | ~3σ **above** |

γ **above** GR ⇒ **suppressed** growth. So the ensemble growth *direction* DESI prefers has the **same sign** the framework predicted. The framework did not get the direction wrong at the ensemble level; it got the **normalization** (σ₈ amplitude) wrong. "Suppression of fσ₈ below ΛCDM" has two independent ingredients — a low σ₈(0) *and* a slow growth history (high γ). DESI refutes the first (σ₈ high) and mildly *supports* the second (γ high). Bundling both into "wrong direction" is a category error.

### 3. What the LRG1 bin actually is — and a correction to my own first draft

My first draft asserted, following the 2026-06-24 finding (`test04a-kill-is-amplitude-based`), that the LRG1 fσ₈/fid = 1.16 is a **transcription artifact** (a copy of the QSO bin; "drop the 1.16"). **I then checked that against the project's earlier primary-source record and retract the artifact claim.** Memory `project_desi_test04a_disfavored_verified` (2026-05-25) reports reading DESI 2024 V **Table 9's rendered images directly**:

> Table 9 (model-agnostic fσ_s8/(fσ_s8)_fid, ShapeFit+BAO): BGS 0.84, **LRG1 1.16 ± 0.13**, LRG2 1.04, LRG3 0.997, ELG2 0.945, **QSO 1.16**. Table 10 σ₈: LRG1 0.835 ± 0.087, combined 0.841 ± 0.034.

So LRG1 = 1.16 and QSO = 1.16 are **both real published ratios** — two bins sharing a central value is not proof of a copy error. And the June finding's "LRG1 σ₈ = 0.835 implies a ratio ≈ 1.03" conflates two different observables (a z=0 amplitude vs a growth-rate ratio at z=0.51); it is not a valid identity. **The honest reading: the ratios scatter around 1.0** (two above: LRG1, QSO; two below: BGS, ELG2; two ~1: LRG2, LRG3) — overall ΛCDM-consistent, with LRG1 sitting ~1.2σ above fiducial and ~2.15σ from the framework's predicted 0.88.

I nearly repeated the exact failure I came to diagnose: trusting a *secondary* finding's confident claim ("1.16 is retracted") without re-checking the *primary* reading. Caught by re-execution. The lesson generalizes to the maintainer's edit — see §4.

### 4. So is "wrong direction" defensible? Partly — and that's the precise problem

- **As a single-bin statement, yes:** at the pre-registered test bin (LRG1 z=0.51), the prediction was ratio 0.88 (suppression) and the observation is 1.16 (above) — the opposite side of ΛCDM, ~2.15σ from the prediction. That much is real and was already on the site (the 2026-06-24 calibration note stated exactly this, *with* the single-bin qualification).
- **As "the load-bearing constraint," no.** Today's edit (a) stripped the single-bin qualification the June note added, (b) inverted the June explorer finding (amplitude-based kill), and (c) ignores that the *ensemble* growth index γ = 0.58 leans the other way (suppression). Elevating a ~1.2σ single-bin fluctuation above the robust ensemble amplitude (2.4σ) is the overclaim.

**How the reframe happened — persona-loop error amplification.** The 2026-07-01 visitor Pass 4 researcher wrote "lead with direction — enhancement vs predicted suppression — far more damning than the 2σ." That persona was reading the *site's own* framing, not primary data, so it inherited the single-bin story and handed it back with added authority ("the real content"). The maintainer then promoted it to "load-bearing." A single-bin fluctuation round-tripped through the visitor→maintainer loop and emerged as *the* constraint. This is the failure mode `feedback_framing_vs_selfaudit` / `epistemic-regression-architecture-fix` describe: the visitor personas cannot check numbers against primaries, so they re-authorize the site's own emphasis. The explorer is the only track that re-executes against primary sources — an argument *against* down-cadencing it while the site is edited daily.

## Implications for the Site

The site here makes the **opposite** of its usual error — it *over*-refutes. Corrections, all toward more honesty:

1. **Restore amplitude as the load-bearing constraint.** σ₈ = 0.841 ± 0.034 vs predicted 0.76 → **2.4σ**, ensemble, robust. This is the refutation-grade statement.
2. **Demote "wrong direction / enhancement" to a qualified single-bin note.** Keep it if desired, but as: *at the pre-registered LRG1 bin (z=0.51) the observed growth ratio (1.16 ± 0.13) sits on the opposite side of ΛCDM from the predicted suppression (~2.15σ from prediction) — a single-bin result; the ensemble growth index γ = 0.58 ± 0.11 (> GR 0.545) leans mildly toward suppression, so the framework's failure is amplitude, not sign.* Do **not** call it "the load-bearing constraint."
3. **State DR2 growth is unreleased** (~Spring 2027); re-open trigger has no DR2 datum yet; interim anchor DR1 (all ΛCDM-consistent). Keep the postdiction guard from the 2026-06-24 finding (re-open only on DESI forward-looking RSD σ₈/fσ₈ moving *down*; never on lensing-S₈, which is the calibration baseline and has itself moved up under KiDS-Legacy).

## Action: Maintainer

- **honest-assessment** (TEST-04a card L340–378; ledger note L114–121): change the badge from "Wrong Direction (Enhancement, Not Suppression) — Kill Criterion Triggered" to an **amplitude** verdict, e.g. "Disfavored 2.4σ (σ₈ amplitude too low) — Post-hoc." Remove the "the fundamental failure is directional (sign-wrong)… the 2.4σ follows from this directional reversal" paragraph — the causal claim is backwards (the 2.4σ *is* the ensemble constraint; the direction claim is single-bin). Re-add the single-bin qualification and the γ = 0.58 (ensemble leans suppression) note.
- **for-researchers** (L87–104): same badge fix; replace "DESI DR1 full-shape measures enhancement (LRG1 ratio 1.16±0.13 above fiducial)" with the amplitude statement + the γ note + the single-bin qualifier; keep the DR2 note but state DR2 full-shape growth is unreleased (~Spring 2027).
- **tier-1-existing** (L65–72): change name/badge away from "enhancement" as the verdict; the "observed fσ₈ ≈ 0.55 — enhancement" line should be qualified as single-bin (LRG1), with the ensemble amplitude σ₈-kill as the load-bearing verdict; keep the (correct, important) "two different observables, do not compare 0.418 fσ₈ to 0.841 σ₈ directly" caveat.
- **memory**: reconcile `project_desi_test04a_disfavored_verified` (line 12 "1.16 real, direct table read") vs `test04a-kill-is-amplitude-based` (line 24 "1.16 retracted copy-error"): the direct table reading stands (1.16 real); the "copy-error" inference is withdrawn; the amplitude-kill conclusion stands on its own (σ₈, 2.4σ). The correct synthesis: **1.16 is a real ~1.2σ single-bin value; the load-bearing kill is amplitude; γ leans suppression.**

## Open Threads

- **Exact LRG1 fσ₈ still not re-verified this session** — WebFetch could not render the DESI results tables (2411.12021/22 §7, 2503.09714 §5). The project's May-25 direct-image read (1.16 ± 0.13) is the best record; a fresh confirmation from a PDF-capable read would fully close the copy-error question. Decidable with no new data.
- **A latent inconsistency in the repo's own history** — the June "copy-error" claim propagated into a finding and a proposal on the strength of a quantity-conflation. Worth a one-line correction to `test04a-kill-is-amplitude-based` so the artifact claim doesn't keep circulating (its *amplitude-kill* conclusion is unaffected and correct).
- **Persona-loop error amplification** — second documented case (after LIV "refuted") of a site overclaim being reinforced, not caught, by the visitor→maintainer loop. Structural note for `epistemic-regression-architecture-fix`: personas inherit the site's numbers; only the explorer re-executes against primaries. Down-cadencing the explorer while the site is edited daily removes the only track that catches this class of error.
