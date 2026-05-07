# Finding: Tier-1 Pre-Registration Audit — Zero Prospective Predictions

**Date**: 2026-05-07
**Origin**: `session107-preregistration-audit.md` (extended to all Tier-1 tests). Triggered by Pass 4 visitor on 2026-05-07 asking whether any kill criterion is git-timestamped before the relevant data release.

## Summary (TL;DR)

I audited every Tier-1 test on `/tier-1-existing` against (a) the git-commit timestamp of its source Synchronism research session and (b) the public release date of the dataset it claims to test against. Headline:

- **The Synchronism research repo's first commit is 2025-02-10. The first numbered research session (Session #6) is 2025-11-09.**
- **All Tier-1 datasets cited by the site went public significantly earlier**: SPARC (2016), ALFALFA-100 (2018), LITTLE THINGS (2012), SDSS DR17 (2021-12), DES Y3 / KiDS-1000 (2021), Gaia DR3 (2022-06), DESI DR1 BAO + RSD (2024).
- **There is no Tier-1 prediction whose source session predates its target dataset.** Zero of ten. The repo itself postdates every cited dataset.
- **Session 107 (TEST-04a fσ₈) is doubly post-hoc**: not only committed 2025-12-10 (after DESI DR1 RSD paper arXiv:2411.12021, Nov 2024), but its key parameter σ₈_Sync = 0.763 was calibrated in Session 102 (2025-12-09, one day earlier) to **land within DES Y3 + KiDS-1000 weak-lensing measurements** that had been public since 2021. The "prediction" reverse-engineers a fit to one side of the σ₈ tension; DESI DR1 then landed on the other side.
- **Site/archive test-number drift is also broken**: Site TEST-09 (BTFR slope) ≠ Archive TEST-09 (photosynthesis chromophore density). Site TEST-02 (wide binary) ≠ Archive TEST-02 (UDG max DM). The numbering looks like provenance but isn't.

The honest framing is *not* "0 of 24 run as formal pre-registered tests" (current /test-catalog footnote). It is **"0 prospective predictions, ~10 post-hoc consistency analyses, 1 of which (TEST-04a) failed in the wrong direction."** That is a different epistemic claim, and it should headline the site.

---

## Evidence: Per-Test Audit Table

Definitions:
- **Prospective**: prediction document's git-add timestamp predates the public release of the target data, *and* the prediction's derivation does not consult that data.
- **Post-hoc, data-independent**: prediction document postdates the data, but the prediction is derived from the framework's equations without using the data as input.
- **Post-hoc, calibrated**: prediction document postdates the data *and* the prediction's parameters are tuned against (or visibly motivated by) the data.

| Site test | Site claim | Source session(s) (archive) | First git-add date | Target data release | Status |
|-----------|------------|-----------------------------|--------------------|--------------------|--------|
| TEST-01 (rotation residuals × density, SPARC) | env. dependence in residuals | Session 17 (2025-11-14), 179 (2025-12-25), 184 (2025-12-26), 637 (2026-04-28); discoveries/np2-rar-scatter-validation.md (2026-02-05) | ≥ 2025-11-14 | SPARC: 2016 | Post-hoc by ~9 yrs. Data-independent at the level of "we assert there is a residual–density correlation"; calibrated for the RAR scatter slope (NP2 = 5×10⁻⁶). |
| TEST-02 (wide binary density-dependence, Gaia DR3) | C(ρ)-modulated wide-binary anomaly | Session 184 (2025-12-26), 386 (2026-02-06), 389 (2026-02-06), 579 (2026-02-08) | ≥ 2025-12-26 | Gaia DR3: 2022-06 | Post-hoc by 3.5 yrs. The framework prediction is "anomaly depends on local stellar density"; the existence of the anomaly is itself disputed (Chae 2023 vs Banik 2023 vs Pittordis-Sutherland 2023 — all pre-Session). Direction of the dependence is asserted, not derived. |
| TEST-03 (TFR residual scatter < 20%, R²=0.14 reported) | TFR residuals capture intrinsic scatter | Session 590 (2026-02-09 ALFALFA), 594 (2026-02-12), 79 (2025-12-03 BTFR validation), 639 (2026-04-23) | ≥ 2025-12-03 | ALFALFA-100: 2018; SDSS DR17: 2021-12 | Post-hoc by 4–7 yrs. Kill threshold (20%) was set 2026-04-30 in audit Session 639 — 2.5 years after SDSS DR17 release and after the 0.14 number was already in hand. **Triggered.** |
| TEST-04 (BAO 10⁻⁴ shift) | density-dependent BAO peak | Session 107 (2025-12-10) | 2025-12-10 | DESI DR1: 2024-04 | Post-hoc. **Withdrawn 2026-05-04** because kill threshold (10⁻⁵) is 3000× below DESI Y3 sensitivity and prediction (10⁻⁴) is 600× smaller than known standard nonlinear shifts — i.e., unfalsifiable from day one. |
| TEST-04a (DESI fσ₈ ≈ 0.418) | growth suppression below ΛCDM | Session 107 (2025-12-10) | 2025-12-10 | DESI DR1 BAO: 2024-04; DESI DR1 RSD (arXiv:2411.12021): 2024-11 | **Post-hoc, calibrated**. See "Smoking gun" below. **Disfavored at 2.4σ in the wrong direction** by DESI DR1. |
| TEST-05 (RAR scatter NP2 env. dependence, p = 5×10⁻⁶) | RAR scatter shows env. dependence | discoveries/np2-rar-scatter-validation.md (2026-02-05); Session 637 (2026-04-28) | 2026-02-05 | SPARC: 2016 | Post-hoc by ~10 yrs. The p = 5×10⁻⁶ is a measured statistic on the existing SPARC catalog, not a prediction *from* the framework; the framework provides a name (NP2) for a regression that already exists. |
| TEST-06 (σ_int = 0.086 dex with N>1000) | scatter persists at scale | Same provenance as TEST-03 | ≥ 2025-12-03 | Future BIG-SPARC | Pending. Not yet measurable; cannot be classified prospective vs post-hoc until BIG-SPARC reports. The kill threshold (0.12 dex) was set after the existing 0.086 dex was already in hand. |
| TEST-07 (500 Mpc oscillations) | scale-inversion cosmic interference | Cosmic_Interference_Search_Protocol.md (2025-11-08); Session 632 audit (2026-04-25) | 2025-11-08 | SDSS BAO: ~2005; DES, DESI: 2018+ | Post-hoc by 7+ yrs. **Site honest-assessment notes: "not yet a scientific prediction"** — no derivation of 500 Mpc from framework parameters. Number is named, not derived. |
| TEST-08 (Σ₀ Freeman law from first principles) | Σ₀ derived to <5% | Session 89 (2025-12-05), Session 78 (2025-12-03) | 2025-12-03 | Freeman 1970 (the law itself); SPARC: 2016 | Post-hoc by decades. Kill threshold (>15% error) set after derivation existed. Whether Σ₀ is *derived* or *re-expressed via cH₀/(4π²G) reparametrization* is documented on /key-claims as the latter. |
| TEST-09 (BTFR slope reflects regime mix) | n→4 deep-MOND, n≈2.75 transition, n→2 near-Newton | Session 193 (2025-12-28), Session 79 (2025-12-03), Session 631 audit (2026-04-23) | 2025-12-03 | SPARC: 2016; ALFALFA: 2018 | Post-hoc by 7–10 yrs. Earlier "n ≈ 2.2 universal" was a transcription error per 2026-04-23 explorer finding; current per-regime restatement was authored *after* Lelli 2019's n = 3.85 result was known. |
| TEST-10 (DM fraction → 100% for M_bar < 10⁸ M☉) | dwarf-DM dominance | Sessions 13–17 (2025-11-13 to 2025-11-14) | 2025-11-13 | LITTLE THINGS: 2012; SPARC dwarfs: 2016 | Post-hoc by ~13 yrs. The DM-fraction phenomenology in dwarfs was settled in the literature long before the framework existed; framework's contribution is a re-description, not a prediction. |

**Summary count**: 0 prospective. 10 post-hoc (1 calibrated against pre-existing data, 1 unfalsifiable-from-day-one and now withdrawn, 1 not-yet-measurable, 7 reproducing existing dataset structure).

---

## Smoking Gun: TEST-04a is Doubly Post-Hoc

The site currently presents TEST-04a as the framework's "first hard external falsification" — a 2.4σ disfavor against DESI DR1 fσ₈. The audit reveals two separate post-hoc layers underneath:

### Layer 1 — Document timestamp

`Research/Session107_DESI_Forecasts.md` git-add: **2025-12-10**.
DESI DR1 BAO results: **2024-04** (already public).
DESI DR1 RSD analysis (arXiv:2411.12021): **2024-11** (already public).

Session 107 explicitly states (Part 7):
> "DESI Year 1 (Released 2024) — BAO: Released, consistent with ΛCDM ✓ — RSD (fσ8): Analysis ongoing"

The "Analysis ongoing" framing is incorrect. The DR1 RSD paper had been on arXiv for 13 months by the time Session 107 was written. The session was authored after the data was public.

### Layer 2 — Calibration to existing tension

Session 107's fσ₈ predictions are derived from **σ₈_Sync = 0.763**, which is set in Session 102 (`Research/Session102_S8_Tension.md`, git-add **2025-12-09** — one day before Session 107).

Session 102 sets σ₈_Sync explicitly to land within pre-existing weak-lensing measurements:

> | Survey | S₈ | Method |
> | Planck | 0.832 ± 0.013 | CMB |
> | DES Y3 | 0.776 ± 0.017 | Lensing |
> | KiDS-1000 | 0.759 ± 0.021 | Lensing |
> | **Synchronism** | **0.763** | Prediction |
>
> **Our prediction falls WITHIN the lensing measurements!**
> The ~7% tension between CMB and lensing matches our ~6% suppression.

This is calibration, not prediction. DES Y3 (2021) and KiDS-1000 (2021) were both public for 4+ years before Session 102. The framework's "growth suppression of 5.8%" is not derived from a free-standing equation — it is the magnitude required to take Planck σ₈ down to lensing-σ₈ values. Session 102 then propagates the calibrated σ₈ = 0.763 forward into Session 107's fσ₈ "predictions."

### What DR1 actually measured

DR1 fσ₈/Planck-LRG1 (z=0.51) ≈ 1.16 ± 0.13 — i.e., DR1 fσ₈ is **above** Planck-ΛCDM, not below. The σ₈ tension reversed direction in DESI RSD.

The framework was calibrated to a tension where lensing-σ₈ < CMB-σ₈, predicted DESI fσ₈ would also be low, and was then disfavored when DESI fσ₈ landed high. This is an interesting *post-hoc consistency failure* — the framework's calibration assumption (lensing-low tension is real) didn't generalize to a different probe. But it is not a falsification in the Popperian sense, because the prediction was a propagation of an already-fitted parameter to a target whose data was already public.

The honest framing: "The framework's fσ₈ value, propagated from a σ₈ calibration set against lensing data, is on the wrong side of DESI DR1's RSD measurement." That sentence has the right epistemic shape. "First hard external falsification" does not.

---

## Bonus Finding: Site/Archive Test Number Drift

While building this audit I noticed the **TEST-NN numbering on the live site does not match the TEST-NN numbering in the archive's `EXPERIMENTAL_TEST_CATALOG.md`** (committed 2026-02-20). Examples:

| TEST-NN | Site (`/tier-1-existing`) | Archive (`EXPERIMENTAL_TEST_CATALOG.md`) |
|---------|---------------------------|--------------------------------------------|
| TEST-01 | Rotation curve residuals × env. (SPARC) | Tidal Dwarf Galaxy age × DM (TDG catalogs) |
| TEST-02 | Wide binary anomaly density-dependence (Gaia DR3) | UDG maximum DM (DF2/DF4) |
| TEST-03 | TFR residual scatter (ALFALFA+SDSS) | Compact elliptical minimum DM (M32) |
| TEST-04 | BAO 10⁻⁴ shift (DESI etc.) | BAO Coherence Modulation (DESI etc.) |
| TEST-05 | RAR scatter NP2 env. dependence | CMB Cold Spot × density |
| TEST-06 | σ_int = 0.086 dex (BIG-SPARC) | Variable α (Webb 2001) |
| TEST-07 | 500 Mpc oscillations | 500 Mpc oscillations |
| TEST-08 | Σ₀ Freeman law derivation | SPARC Environment Catalog (RAR scatter) |
| TEST-09 | **BTFR slope** | **Photosynthesis coherence × chromophore density** |
| TEST-10 | DM fraction → 100% for dwarfs | Enzyme KIE × γ correlation |
| TEST-14 | (not on site) | Wide Binary Density Dependence (= site TEST-02) |

Only TEST-04 and TEST-07 line up. Site TEST-09 (BTFR) is archive TEST-09 only by coincidence; archive TEST-09 is a biology test that has nothing to do with rotation curves. A reader who tries to pull a "site TEST-09" claim back to the archive lands on the wrong session. This is its own form of drift — fourth instance pattern in 2 weeks (after MOND-EFE 2026-04-13, γ dual-role 2026-04-22, α/BTFR 2026-04-23, 2026-05-04 BAO test withdrawal).

Recommendation: drop the test numbers entirely on the site, or re-number to match the archive. Numbers that look like provenance but aren't are worse than no numbers.

---

## What This Means for the Site

The site's headline epistemic statistic is currently:

> "0 confirmed predictions, 1 refuted external (DESI fσ₈ 2026-05-05)"

This is a falsificationist scoreboard. A reader is invited to interpret "1 refuted" as "the framework was at risk and the data refuted it" — which is the standard meaning of falsification.

The audit shows the correct statistic is:

> "0 prospective predictions tested, 10 post-hoc consistency analyses (8 reproducing structure already in the data, 1 calibrated against an existing tension and disfavored when applied to a different probe, 1 unfalsifiable and withdrawn). 0 of these is a Popperian falsification event."

This is a different framework. The 47-internal-contributions-to-1-refuted-external ratio is also different under this framing: it is 47 internal contributions to **0** external falsifications (the framework has not yet been at falsificationist risk against any data) plus 1 post-hoc consistency-failure. The site already has the language for this distinction (`/research-philosophy` post-diction sub-status, `/honest-assessment` Reparametrization-vs-Validated taxonomy) — but the front-page tally and the test-catalog headline still use falsificationist accounting.

A second-order finding: **A2ACW cannot fix this.** The structural ceiling acknowledged on `/research-philosophy` ("adversarial agents share the same training distribution… not a discovery rate") is the *internal* version of the same problem. The framework cannot generate prospective falsifiable predictions because (a) all its data is already public, (b) it shares a training distribution with its critic, and (c) its parameters are tuned against existing tensions. The audit shows the *external* version of this ceiling: every Tier-1 prediction document postdates its target data. Both ceilings are structural; neither can be fixed by labeling or by more sessions.

The path forward — if the framework wants to demonstrate predictive force — has to be one of:

1. **Pre-register a future-data prediction now** with git-commit timestamps and a kill criterion, and wait for the data. DESI DR2, Euclid Q1 2027, JWST high-z TFR, LISA SGWB anisotropy. Even one prospective prediction with a clean timestamp would change the site's epistemic posture more than 47 retrospective sessions have.
2. **Reframe the entire program as consistency-mapping** (what I argued in WAKE phase). Drop "predictions" / "kill criteria" / "falsification" language. Replace with "compatibility analysis": the framework can compute a number, the data has a number, and we map where the two agree and disagree. This is honest about what the framework is doing — and 47 compatibility analyses with 8 in-distribution agreements, 1 cross-probe disagreement, and 1 unfalsifiable-and-withdrawn is a legitimate scientific contribution. It just isn't falsification.
3. **Both** — reframe the existing work as compatibility-mapping (it is what it is) AND pre-register a small number of genuinely prospective predictions to do the falsification work going forward.

Option 1 alone is honest but doesn't fix the 47 retrospective sessions. Option 2 alone is honest but loses the "interesting because falsifiable" hook. Option 3 is the only stable resolution and is also the most credible move available — it combines an honest accounting of the past with a credible plan for the future.

---

## Action: Maintainer

### P0 — Site framing

1. **`/tier-1-existing`**: Replace "DISFAVORED at 2.4σ" headline for TEST-04a with "Post-hoc consistency failure (2.4σ) — kill criterion authored after data release". Add an explicit "PROSPECTIVE / POST-HOC" column to the tier-1 test table; per the audit, every entry in this column is currently "POST-HOC."
2. **`/research-philosophy`**: Replace "47 internal contributions, 0 confirmed external, 1 refuted external" with the breakdown above. The line "1 refuted external" is misleading because the prediction was post-hoc-calibrated and the disagreement is on a different probe than the calibration target.
3. **`/honest-assessment`**: Promote the pre-registration audit to its own section — "Why we have not yet had a falsification event" — and link to this finding (or a digest of it). Currently the pre-registration gap is buried in TEST-04a's text.
4. **`/test-catalog`**: Replace footnote "0 of 24 run as formal pre-registered tests" with "0 of 24 are prospective predictions; all 24 are post-hoc consistency analyses or pending future data." Spell out what "formal" excludes.
5. **Landing page**: The metric "1 untested with 8-way convergence" + "89% Boundary-Consistent" reads as predictive validation. After the audit, all 89% is in-distribution post-hoc consistency. Re-label the chemistry metric as "Boundary-Consistent (post-hoc)" or "Compatibility Mapping: 89%."

### P0 — Site/archive drift

6. **Test-number alignment**: The site's TEST-NN numbering does not match the archive's TEST-NN numbering. Either renumber the site to match the archive (preferred), drop the numbers entirely, or add an explicit "site test → archive session" lookup table to /test-catalog. Currently the numbers look like provenance but mislead.

### P1 — Engage the structural reframe

7. **Pre-register a small number of prospective tests** with git-commit timestamps. Candidates: DESI DR2 fσ₈ at z = 0.51 (with a ±band), Euclid Q1 2027 wide-binary anomaly, LISA SGWB anisotropy. Even one would change the site's epistemic posture more than 47 retrospective sessions.
8. **Add a `/compatibility-mapping` page** that re-frames the existing 47 sessions honestly: this is what the framework actually does — it computes numbers and maps where they agree with existing data. That is a legitimate contribution if framed as such; it is overclaiming if framed as falsification.

### P2 — Methodological

9. **Add a "Pre-Registration Audit" methodology section to `/research-philosophy`** documenting how predictions are timestamped, what counts as data-independent derivation, and what the framework will do when it wants to make a future-data prediction (commit-and-hash registry, ideally).

---

## Open Threads

- **Did anyone make these predictions informally before the repo started 2025-02-10?** This audit assumes git-commit dates are the relevant timestamps. If there are pre-repo blog posts, forum threads, or unindexed files where (e.g.) σ₈ = 0.76 was committed to before DES Y3 / KiDS-1000 dropped (2021), that would change the picture. I cannot rule this out without the operator confirming. But: Session #14 ("Parameters derived from first principles") is dated 2025-11-13 — earlier than this, the framework's equations are not stable enough to compute these numbers. The window in which an informally-pre-dated prediction could have existed is narrow and probably empty.
- **What if Session 102's σ₈_Sync = 0.763 derivation is independent of lensing data?** The session's *narrative* triumphantly highlights agreement with lensing measurements ("Our prediction falls WITHIN the lensing measurements!"). But the *math* — `σ₈_Sync = D_Sync(0)/D_ΛCDM(0) × σ₈_ΛCDM` — is in principle a closed-form calculation given the C_cosmic / C_galactic ratio. The question is: what fixes that ratio? If it has free parameters tuned to something, the calibration finding stands. If it's truly closed-form, the prediction has more force (though still post-hoc by timestamp). Session 102 does not show the closed-form derivation of the C ratio — it asserts it. This is worth a separate dive.
- **Apply this audit to Tier 2 + Tier 3 predictions**: TEST-11 (EEG anesthesia Φ_crit = 3.5), TEST-12 (qubit C* ≈ 0.79), TEST-15 (GW–DM column correlation, GW170817 already constrains α < 3×10⁻¹⁵). The same pattern almost certainly holds.
- **Apply the audit to the chemistry track**: r = 0.982 across 1,703 phenomena is a single number from a single dataset. Is the dataset the analysis set or a held-out set? When was the kill threshold for r set? Both questions are the same audit applied to a different domain.
- **GW170817 constraint** specifically: GW170817 happened 2017-08; α < 3×10⁻¹⁵ has been in the literature since 2017. Synchronism's TEST-15 framing constrains α from this measurement. So TEST-15 is, again, post-hoc consistency — the constraint exists, the framework doesn't violate it, and the framework can therefore safely "predict" α below it.

This audit can be replicated and extended in one session per tier. The pattern is robust.
