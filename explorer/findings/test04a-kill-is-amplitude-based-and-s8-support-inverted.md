# Finding: TEST-04a's Kill Is Amplitude-Based (Not Single-Bin), and the S₈ "Support" Has Inverted Under 2026 Lensing Data

> **CORRECTION (2026-07-01):** This finding's claim that LRG1 fσ₈/fid = 1.16 is a "retracted transcription artifact" (a copy of the QSO bin) is **withdrawn**. The project's 2026-05-25 direct read of DESI 2024 V Table 9's rendered images (memory `project_desi_test04a_disfavored_verified`) found LRG1 = 1.16 and QSO = 1.16 are **both real published ratios**, and the "σ₈=0.835 ⇒ ratio 1.03" inference here conflated a z=0 amplitude with a z=0.51 growth-rate ratio. **The finding's central conclusion is unaffected and stands:** the load-bearing kill is amplitude-based (combined σ₈ = 0.841 vs 0.76 = 2.4σ), robust to the per-bin scatter; LRG1 = 1.16 is a real ~1.2σ single-bin fluctuation, not the ensemble signal (DESI growth index γ = 0.58 ± 0.11 > GR 0.545 leans mild suppression). See `test04a-direction-reframe-is-an-overclaim-growth-index-favors-suppression.md`.

## Origin
Triggered by the 2026-06-24 visitor Pass 4 (researcher) critique + the maintainer proposal filed the same morning (`Synchronism/Research/proposals/test04a_desi_dr2_readjudication.md`). Closes the queued topic `session102-sigma8-postdiction-audit.md` and informs `post-test04a-dark-matter-posture.md`. Self-directed re-execution per the loop's standing lesson: **verify the datum, not the narrative.**

## Summary

The maintainer's morning proposal asks "is the DESI TEST-04a kill based on a noisy single bin?" and leans on Pass 4's claim that "the global S₈/growth tension runs *toward* the framework's predicted suppression." Re-grounding both against primary sources shows **both premises are stale**:

1. **The kill is not single-bin.** It rests on the combined **σ₈ = 0.841 ± 0.034** (DESI DR1 full-shape, arXiv:2411.12021, verified from the abstract today) vs the framework's predicted **σ₈(z=0) = 0.76** → **2.4σ**, robust to the entire LRG1 dispute. The proposal reintroduces the **LRG1 fσ₈/fid = 1.16 enhancement number that was retracted a month ago** (S668/S672, 2026-05-25/26) as the basis of the kill. That number is not the basis of the kill and never needed to be.

2. **The "S₈ favors suppression" support is a postdiction, and it has now inverted.** σ₈ = 0.76 was *calibrated to* the weak-lensing side of the S₈ tension (Session 102 explicitly: "falls WITHIN the lensing measurements" — KiDS-1000 0.759, DES Y3 0.776). Citing low-S₈ lensing as support double-counts the calibration data. **Worse: the calibration target has since moved.** KiDS-Legacy (the final Kilo-Degree Survey, 2025) revised S₈ from 0.759 → **0.815₋₀.₀₂₁⁺⁰·⁰¹⁶** (σ₈ ≈ 0.802 joint), a **2.3σ upward shift, now Planck-consistent at 0.73σ**. The exact lensing measurement Synchronism matched in 2025 has retreated toward Planck. So σ₈ = 0.76 is now disfavored from **both** sides — clustering (DESI, 2.4σ) *and* lensing (KiDS-Legacy moved up) — and the S₈ tension the framework "explained" has substantially softened.

The net: the kill stands and is *stronger* than the site states, but for a different reason than the site (or the morning proposal) gives. The DR2 re-adjudication is worth doing, but only if its re-opening trigger is guarded against the postdiction trap.

## Research Notes

### 1. Re-executing the load-bearing number (verify the datum)

This number has flip-flopped three times in the research log (the "epistemic regression" saga, S645→S650→S668→S672). The standing lesson is not to trust any transcription. I fetched arXiv:2411.12021 directly:

> **σ₈ = 0.841 ± 0.034**, Ω_m = 0.296 ± 0.010, H₀ = 68.63 ± 0.79.
> "The DESI DR1 results are in agreement with the ΛCDM model based on general relativity with parameters consistent with those from Planck."

Tension with Session 107's prediction:
```
(0.841 − 0.76) / 0.034 = 2.38σ  ≈ 2.4σ
```
This uses **only the combined abstract value** — no per-tracer table, no LRG1 bin, no ShapeFit ratio. It is immune to the entire LRG1 1.16-vs-1.03 dispute that consumed five sessions.

The companion growth-index result (γ = 0.580 ± 0.110, GR's 0.55) independently rules out the predicted ~12% suppression: a coherent 12% growth suppression would pull γ well above 0.55; DESI's γ is GR-consistent. (γ sits in the body / companion analysis, not the abstract I fetched; flagged as second-hand but consistent with the abstract's "validity of GR" statement.)

### 2. The morning proposal re-imports a retracted number

`test04a_desi_dr2_readjudication.md` (2026-06-24) opens with:

> "DESI DR1 full-shape, LRG1 z_eff=0.51: fσ₈/(fσ₈)_fid = 1.16±0.13 — growth *above* ΛCDM ... Tension: ~2.15σ on LRG1 alone."

This is the **retracted** enhancement number. S668 (2026-05-25) and S672 (2026-05-26) — with header warnings now on the source files — established that:
- The 1.16 ratio is internally inconsistent (LRG1's own σ₈ = 0.835 implies a ratio ≈ 1.03; 1.16 is identical to QSO's, the signature of a copy error);
- γ = 0.58 contradicts any low-z enhancement;
- The "sign reversal / mechanism-class failure" built on it was **retracted**, taking the framework's claimed "one transferable physics contribution" with it.

So the proposal's framing — "is the kill on a noisy single bin?" — is answered: **no.** The kill is the σ₈ amplitude disfavoring (2.4σ, combined value). Pass 4's "a single-bin 2σ is not a kill" critique is correct *about the retracted story* but **moot for the surviving result**, which is not single-bin. This is the recurring re-trust-vs-re-execute failure mode: a datum corrected a month ago re-entered a fresh proposal because the author read the old framing, not the corrected number.

### 3. The postdiction trap, made concrete

Session 102 (Dec 2025) computes σ₈_Sync = 0.942 × 0.81 = 0.763, then:

> | DES Y3 | 0.776 ± 0.017 | | KiDS-1000 | 0.759 ± 0.021 | | **Synchronism** | **0.763** |
> **"Our prediction falls WITHIN the lensing measurements!"**

The framework landed σ₈ on the **weak-lensing side** of the S₈ tension and treated that as the success. S648 confirmed the prediction is **post-hoc** (committed 2025-12, ~13 months after DR1 was public). So:

- **Weak-lensing S₈ (low ≈ 0.76)** = the *calibration target*. Not independent confirmation.
- **RSD / clustering σ₈ (high ≈ 0.84)** = the *forward-looking test*. Disfavors the framework.

A growth-*suppression* mechanism is most directly tested by the growth *rate* (RSD fσ₈), and that is precisely the leg that disfavors it. "The global S₈ picture favors suppression" is true only for the lensing leg the framework already banked — and false for the RSD leg that actually tests the mechanism. Pass 4 and the proposal both import the lensing tension as if it were independent support; it is the postdiction baseline. S668 saw the shape of this ("σ₈=0.76 looks like a retrodiction of the *weak-lensing* S₈; it gets disfavored by the *clustering* σ₈ — classic S₈-tension crossfire") but did not draw the re-adjudication consequence.

### 4. The decisive 2026 update: the calibration target dissolved

This is the new content. Pass 4's argument rests on "if KiDS/DES low-S₈ hardens, it points toward suppression." The most recent data does the opposite:

- **KiDS-Legacy (2025, final KiDS; arXiv:2503.19441):** S₈ = **0.815₋₀.₀₂₁⁺⁰·⁰¹⁶**, σ₈ ≈ 0.802 (joint). Planck-consistent at **0.73σ**. A **2.3σ upward shift** from KiDS-1000's 0.759 — driven by improved redshift calibration (SKiLLS sims), not new physics.
- **2026 S₈ tension review (arXiv:2602.12238):** status is "persistent complexity," explicitly **not** a clearly hardening suppression signal.

So the exact lensing survey whose 2021 value (0.759) was Session 102's headline match has retreated to 0.815, Planck-consistent. The framework's σ₈ = 0.76 now sits **below Planck (0.81), below DESI clustering (0.841), and below KiDS-Legacy lensing (0.802)** — it is the lone low outlier, matched only by a superseded measurement.

(Tangential 2026 anomaly worth not over-reading: arXiv:2602.03110 reports a 3.0σ deviation in gravitational light *deflection* from GR using KiDS-Legacy × CMB lensing. That is an E_G / lensing-amplitude channel, not the σ₈ growth-rate amplitude, and does not rescue a growth-suppression σ₈ = 0.76. Flagged as a rabbit hole.)

### 5. What this does to the dark-matter posture (topic `post-test04a-dark-matter-posture`)

The growth sector is now squeezed from both sides:
- **Suppression (the framework's mechanism):** disfavored at 2.4σ (DESI σ₈) and by γ = 0.58.
- **Enhancement (Branch 1, the proposed flip):** not observed either — DESI γ is GR-consistent, no enhancement to chase. (The "enhancement" that Branch 1 was meant to match was itself the retracted 1.16 artifact.)

So Branch 1 is not data-supported. The honest posture is **closure**: the growth-suppression dark-matter program predicted a σ₈ that is disfavored, its proposed enhancement-flip has no observed signal to anchor to, and the calibration "win" (low-S₈ lensing) has evaporated under KiDS-Legacy. The next move would require a σ₈ that is *derived* (not calibrated to a lensing value that then moves) with a forward-looking kill criterion — which the framework does not have.

## Implications for the Site

The maintainer this morning added a "single-bin kill" calibration note to honest-assessment and proposed standardizing the language to "Disfavored ~2σ — Kill Criterion Triggered." Both should be corrected/sharpened:

1. **The kill is amplitude-based, not single-bin.** The honest-assessment calibration note (and the proposal) should say: *the kill rests on the combined σ₈ = 0.841 ± 0.034 vs predicted 0.76 (2.4σ), robust to the LRG1 per-bin dispute. The earlier "single-bin enhancement at LRG1" framing used a transcription artifact (retracted S668/S672) and is not the basis of the verdict.* Drop the 1.16 / "one high bin" language entirely.

2. **Remove / invert any "S₈ tension favored our direction" framing.** If the site (or for-researchers) leans on the low-S₈ lensing tension as partial support, it must note: (a) σ₈ = 0.76 was *calibrated to* that lensing value (post-hoc), so it is not independent support; (b) the calibration target has since moved up — KiDS-Legacy 2025 gives S₈ = 0.815, Planck-consistent at 0.73σ.

3. **Guard the DR2 re-adjudication trigger.** The re-opening criterion must rest **only** on DESI's own forward-looking RSD/clustering σ₈ or fσ₈ migrating *down* toward the predicted suppression. It must **exclude** any "weak-lensing S₈ tension hardens → vindication" reasoning — that is circular (calibration data) and now empirically inverted. The proposal currently lists both; only the RSD leg is admissible.

4. **Posture text (dark-matter):** state closure explicitly — suppression disfavored (2.4σ), enhancement not observed (γ GR-consistent), no derived σ₈ with a forward test. Better than silence or an un-anchored Branch 1.

## Action: Maintainer

- **honest-assessment**: rewrite the 2026-06-24 calibration note — kill is amplitude-based (combined σ₈, 2.4σ), not single-bin; remove the retracted LRG1 1.16 enhancement language.
- **for-researchers / honest-assessment**: add the KiDS-Legacy 2025 update (S₈ 0.759 → 0.815, Planck-consistent); state the σ₈ = 0.76 calibration→postdiction explicitly; note σ₈ = 0.76 is now below Planck, DESI clustering, *and* KiDS-Legacy.
- **DR2 re-adjudication note**: add the postdiction guard (re-open on DESI RSD σ₈/fσ₈ only; lensing-S₈ is the calibration baseline, not a test).
- **tier-1-existing / key-claims**: ensure no "S₈ tension supports the framework" residue survives; if present, replace with the inverted-2026 status.

## Open Threads

- **Sabogal et al. (2024)** RSD compilation reportedly favors fσ₈ ~5–10% below ΛCDM — a *mild* suppression in some RSD data, much smaller than Session 107's 12% and not matched by DESI's own γ = 0.58. Worth a focused read: does any current RSD compilation support even a 5% suppression at the σ₈ level, and if so does its redshift profile resemble Session 102's (max at z ~ 0.5–1)? This is the one place a sympathetic forward-looking test could live.
- **DESI DR2 full-shape RSD** is not yet finalized as of June 2026 (DR2 BAO is out; full-shape RSD ongoing). The genuine re-adjudication waits on that release; the interim anchor is the 2026 S₈ review (arXiv:2602.12238) and KiDS-Legacy.
- The γ = 0.580 ± 0.110 value should be verified against the DESI modified-gravity companion paper directly (I took it from the research log + abstract consistency, not the table) before it appears on the site as a number.
</content>
</invoke>
