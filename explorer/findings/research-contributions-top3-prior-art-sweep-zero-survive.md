# Finding: Top-3 "Research Contributions" Prior-Art Sweep — 0/3 Survive, and the Site Inverts Its Own Archive on the CDM Verdict

**Date**: 2026-07-03
**Origin**: `topics/research-contributions-prior-art-sweep.md` (HIGH, seeded 2026-07-03 by maintainer from visitor Pass 4)

## Summary

The three headline items of the 47 "research contributions" were run against the three-axis demotion taxonomy (prior-art / internal-consistency / null-class). **None survives as novel.** Claims #1 and #2 turn out to be substantially the *same fact* (the archive itself proves it: "the V+L predictor IS the TFR residual," Session #593), and both reduce to worked literature. Claim #3 is worse than a rediscovery: the site's "σ_int = 0.086, below CDM prediction — definitive" **inverts its own source session** — Session #610's actual verdict is **CDM-CONSISTENT at z = +0.5**, with the "below CDM" framing coming from Session #606, which #610 explicitly labels **PREMATURE** and reverses. The inverted verdict is live on 5+ pages including the honest-assessment ledger, and a fossil page (/cdm-discrimination) still says the killed TEST-03 environment prediction was "confirmed at p = 5×10⁻⁶."

The 6/6 demotion base rate is now 9/9. No opening; the monotone-closure pattern extends to the site's last unaudited surface.

## The Three Claims, Audited

### Claim 1 — "6-variable MOND offset model, LOO R² = 0.938" → REPARAMETRIZATION + PRIOR ART

**What it is** (Sessions #483–495): per-galaxy RAR/MOND offsets on ~128 SPARC galaxies regressed on {logV, logL, c_V, f_gas, logV×c_V, logL×f_gas}.

**Internal evidence against novelty (from the archive itself):**
- The 6-var coefficient table (Session #484) is dominated by **logL at t = −36** (next: logV +15.4, f_gas −14.6; c_V and logV×c_V drop to |t| < 1.3). A per-galaxy offset that is overwhelmingly a function of L at fixed V **is the (inverse) Tully-Fisher residual** — which Session #593 later states verbatim: "The V+L predictor IS the TFR residual." Headline claims #1 and #2 are one fact.
- Session #484's own type split: the celebrated 6th variable's improvement is confined to gas-rich late types (ΔLOO +0.052); early and mid types **lose** LOO (−0.035, −0.023).
- Session #454: environment/EFE proxies add nothing (all |r| < 0.13) — the offsets are carried by internal baryonic structure, i.e., the mass budget.

**Prior art:**
- **Li, Lelli, McGaugh & Schombert 2018** (A&A 615, A3): per-galaxy RAR offsets are absorbed by marginalizing M/L, distance, and inclination within their uncertainties (rms residual 0.057 dex). The offsets the 6-var model predicts are known to be the error budget of assuming a constant M/L — and M/L varies with L and gas fraction by standard stellar-population physics (Bell & de Jong 2001 lineage).
- **Desmond 2016** (MNRAS): statistical MDAR-residual regressions against galaxy properties — the exercise class itself.
- **Stiskalek & Desmond 2023** (MNRAS 525, 6130): exhaustive ML regression over galaxy features concludes g_bar alone is the optimal predictor of late-type dynamics and residual correlations are "facets of the RAR." The field has already run the kitchen-sink version of this regression and published the null.

**Null-model axis (not yet run, specified):** apply a standard M/L–color (or M/L–L) correction plus a distance-error term and compute what LOO R² it achieves on the same offsets. Prediction based on Li+2018: comparable to 0.938. This is the one remaining concrete check.

### Claim 2 — "TFR residual as complete M/L predictor, 51.4% on 14,437 galaxies" → PRIOR ART (mechanism), MODEL-DEPENDENT (completeness rider)

**What it is** (Sessions #593–594): i-band TFR residual predicts BTFR scatter; g−i color adds 0% beyond V+L; corrected scatter (0.195) < noise (0.289) ⇒ "captures ALL intrinsic scatter."

**Prior art:**
- **Kannappan, Fabricant & Franx 2002** (AJ; astro-ph/0202111 "Physical Sources of Scatter in the Tully-Fisher Relation"): TF residuals correlate strongly with B−R color and EW(Hα) — TFR residuals carry M/L information. This is the mechanism, published 24 years earlier.
- **Photometric gas fractions** (Kannappan 2004; Zhang et al. 2009; Eckert et al. 2015 RESOLVE calibration): predicting HI content from optical photometry is a named technique with a literature. Session #593's cleanest sub-result ("luminosity at fixed V predicts gas mass," 24.8% HI-only) is this technique rediscovered through the TFR.
- "Color adds 0% beyond V+L" is the low-dimensionality of the disk-galaxy family (color–luminosity degeneracy), not a new completeness theorem.

**The one non-prior-art rider** — "captures effectively 100% of intrinsic scatter" — rests on the σ_noise = 0.289 decomposition, i.e., on the **same noise budget whose revision flipped the CDM verdict between Sessions #606 and #610** (distance noise, #609). The completeness claim inherits that model-dependence; "complete" should be read as "complete relative to one noise model."

### Claim 3 — "σ_int = 0.086 ± 0.003 dex, definitive BTFR intrinsic scatter, below CDM prediction" → SITE INVERTS ITS OWN ARCHIVE

**Internal-consistency axis (decisive, no literature needed):**
- **Session #610** (the "definitive" session): "**CDM: CONSISTENT at z = +0.5.** σ_int = 0.086 ≈ 0.085 (CDM prediction from halo concentration scatter)" — and it explicitly labels Session #606's "σ_int = 0.072, below CDM at −6.2σ" as "**PREMATURE**," reversed by #609's finding that distance noise dominates.
- **Session #615 final accounting, item A26**: "CDM verdict model-dependent — z(CDM) ranges +0.5 to +64 across modeling choices" — sits in the same table as the headline that the site quotes.
- The site nonetheless says "below CDM prediction" on /honest-assessment (line 216), /galaxy-rotation, and navigation.ts, and /cdm-discrimination argues it at page length ("EAGLE/IllustrisTNG/FIRE predict 0.11–0.16; observed 0.086 is tighter"). Meanwhile /mond-comparator correctly says "Matches (z = +0.5)". **The site currently asserts both verdicts on different pages, and the flagship honesty page carries the one its own archive retracted.**

**Prior-art axis (kills "definitive" independently):**
- **Lelli et al. 2019** (MNRAS 484, 3267; Table 1 read directly this session): BTFR orthogonal intrinsic scatter on the same galaxies ranges **0.026 (V_flat) → 0.035 (W_P20, W_M50) → 0.040 (V_max) → 0.070 (V_2.2) dex** depending solely on velocity definition. Intrinsic BTFR scatter is a pipeline-dependent quantity; the paper exists to demonstrate that.
- **Bradford et al. 2016** — title: "**A Slippery Slope: Systematic Uncertainties in the Line Width Baryonic Tully-Fisher Relation**" (0.25 dex observed scatter, 930 isolated galaxies). The Synchronism value comes from ALFALFA line widths — the exact regime this paper shows is systematics-dominated.
- **Desmond 2017; Papastergis et al. 2016**: the observed-vs-ΛCDM BTFR scatter comparison is an actively worked, disputed literature. A single-pipeline value on one cut (N = 677 "optimal," Mendel masses) cannot be "definitive" in a field whose published range spans 3× for the same galaxies.

## The /cdm-discrimination Fossil (most severe single-page issue found)

/cdm-discrimination appears untouched by every audit sweep since the 2026-05-28 badge policy:
1. Header badge `supported`, MOND card badge `validated` — both deprecated families.
2. "The environment dependence was confirmed at p = 5×10⁻⁶" — this is TEST-03, whose pre-registered kill criterion **fired** (R² = 0.14 < 0.20); /honest-assessment reports it as Kill Criterion Triggered. A live page calls a killed prediction "confirmed."
3. "Below CDM prediction" thesis at page length — inverted vs Session #610 (above).
4. "14,760 galaxies" — the 0.086 comes from Session #610's N = 677 optimal cut; 14,760 matches no number in the accounting (site uses 14,585 / 14,437 elsewhere).

## Implications

1. **The demotion base rate is now 9/9.** Pass 4's prediction ("the prior on these surviving is low") confirmed for all three headliners. The remaining 44 contributions inherit an even stronger demotion prior; the two arcs with 71.4% "discovery rates" (ALFALFA-SDSS, CDM discrimination) produced headliners that were rediscoveries or self-inversions, so the rate measures arc enthusiasm, not novelty.
2. **No opening.** The last unaudited surface closes the same way everything else closed — the monotone-closure fixed point (2026-06-28) stands. For the preprint-strategy decision: the 47 contribute nothing standalone; their honest use is as *additional instances* inside the A2ACW null (in-distribution agents rediscover the literature and can't tell).
3. **Fourth instance of the drift pattern**: compilation documents (site pages, final accounting headlines) diverging from session derivations — and this instance inverts a verdict on the honesty ledger itself. The site's "below CDM" is S606's premature claim surviving its own retraction by S610.

## Action: Maintainer (P0 first)

1. **P0 — /honest-assessment:216, /galaxy-rotation:55, navigation.ts:279**: "below CDM prediction" → "consistent with CDM at z = +0.5 in the definitive run (Session #610); verdict model-dependent, z(CDM) = +0.5 to +64 across modeling choices (A26). An earlier −6.2σ 'below CDM' claim (S606) was retracted in-archive as premature." Rewrite the lead, don't append (2026-07-03 lesson).
2. **P0 — /cdm-discrimination**: retire or rewrite. Kill "confirmed at p = 5×10⁻⁶" (TEST-03 fired), fix the CDM verdict, migrate `supported`/`validated` badges, fix 14,760 → provenance of the N = 677 cut. If rewriting: the honest page is "why the CDM verdict flipped when distance noise was modeled" — a better story than the fossil.
3. **P1 — /prediction-tracker:12**: `validated` badge on "CDM σ_int = 0.086" — deprecated badge on an inverted claim; migrate to descriptive `reparametrization`/`untested` with the S610 verdict.
4. **P1 — /honest-assessment Research Outputs**: update "Uncharacterized — No Prior-Art Sweep" badge: top-3 now swept (2026-07-03), 0/3 novel; name the demotions inline (TFR-residual identity + Kannappan 2002 / Li+2018 / Lelli+2019 + in-archive S610 reversal). Remaining 44 stay uncharacterized.
5. **P2 — /tier-1-existing:90**: "σ_int remains at 0.086 dex with larger sample" — add velocity-definition/pipeline dependence caveat (Lelli+2019 range 0.026–0.070 on the same galaxies).
6. **P2 — /mond-comparator**: already correct ("Matches z = +0.5") — keep; it is the reference framing for the sweep.

## Open Threads

- **Null-model run for Claim 1** (specified above): M/L–color + distance-error baseline vs LOO R² = 0.938. Decidable with SPARC public data; would convert "plausibly the error budget" into a number.
- Remaining top-10 items not yet swept: "Corrected RAR 0.042 dex (potentially tightest in the literature)" (#4) and "Student-t essential for BTFR, ΔBIC = 1062" (#5) are the two with residual novelty risk; both have obvious prior-art angles (Li+2018's 0.057 dex; known heavy-tailed BTFR outlier literature).
- The A2ACW connection: 9/9 demotions now include two *in-archive retractions the compilation layer ignored* (TEST-04a direction, CDM verdict). The failure mode isn't just "agents can't detect novelty" — compilation summaries systematically survive the retraction of their sources. Candidate addition to the A2ACW preprint's failure taxonomy.

## Sources

- [Lelli et al. 2019, MNRAS 484, 3267](https://academic.oup.com/mnras/article/484/3/3267/5292509) (Table 1 read from PDF this session)
- [Li et al. 2018, A&A 615, A3](https://arxiv.org/abs/1803.00022)
- [Stiskalek & Desmond 2023, MNRAS 525, 6130](https://arxiv.org/abs/2305.19978)
- [Kannappan, Fabricant & Franx 2002](https://arxiv.org/abs/astro-ph/0202111)
- [Zhang et al. 2009 / photometric gas fractions lineage](https://arxiv.org/pdf/1202.2857)
- [Bradford et al. 2016, ApJ 832, 11](https://iopscience.iop.org/article/10.3847/0004-637X/832/1/11)
- [Papastergis et al. 2016, A&A](https://arxiv.org/abs/1602.09087)
- [Desmond 2017](https://arxiv.org/abs/1706.01017)
- Archive: Sessions #483, #484, #454, #593, #594, #606, #609, #610, #615 (local reads)
