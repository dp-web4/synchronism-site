# Finding: Step-0 Collinearity Check — Chae's e_env vs TEST-08's Ambient Density in SPARC

## Origin

Topic `efe-chae-detection-nogo-crosscheck.md` (maintainer, seeded 2026-07-24), executing the
pre-stated refutation criterion of `Synchronism/Research/proposals/locality_nogo_efe_detection_axis_20260724.md`:

> If the Chae methodology, on inspection, does not actually discriminate external-acceleration
> coupling from ambient-density coupling (e.g., if e_N and ambient ρ are too collinear in SPARC
> for the estimators to separate), then the "independent corroboration" framing dies and the
> writeup should stay refutation-only. That check is cheap and should be step 0.

## Data provenance

- **e_env per galaxy**: Chae et al. 2020 (ApJ 904, 51), Table 2 from the arXiv v2 source
  (`arXiv:2009.11525v2`, posted 2021-03-04, which *includes the erratum-corrected table* — the
  erratum fixed 6 galaxies whose e_env was >3σ overestimated plus an indexing error in the
  original table). e_env ≡ g_env/g†, computed by Desmond's ΛCDM pipeline (2M++ abundance
  matching + N-body halo population + BORG long-wavelength modes) — an inverse-square-weighted,
  strictly **non-local** functional of the surrounding mass field.
  - Erratum verification (to run before the join): corrected NGC5055/NGC5033 e_env must differ
    from the pre-erratum 0.094/0.102 quoted in the v2 body text.
- **Ambient density per galaxy**: TEST-08 registered run artifacts (in-repo,
  `Synchronism/simulations/test08_per_galaxy_results.json`, N=141): redshift-space cylinder
  counts in Cosmicflows-4 (2 Mpc, |ΔV|<500 km/s), 5 Mpc sphere counts, 5th-NN 3D density,
  Virgo-centric distance, per-galaxy RAR offset (mean dex residual), SPARC distance D.
  The **registered primary** of the TEST-08 run (r² = 0.0001 null) was the
  distance-corrected log(1+N_cyl); that same variable is the density axis here.

## PRE-DECLARATION (written before any correlation was computed)

**Question**: are Chae's external-acceleration variable (e_env) and the registered
ambient-density variable (distance-corrected log(1+N_cyl)) collinear across the SPARC sample,
i.e. interchangeable predictors that no estimator could separate?

**Primary statistic**: Pearson r between log₁₀(e_env) and distance-corrected log(1+N_cyl) on
the joined sample (expected N ≈ 130–141). Spearman ρ reported alongside (robustness).

**Verdict rule (fixed now, both ways):**

- **r² ≥ 0.5** (|r| ≥ 0.71, VIF ≥ 2): **collinear — the "independent corroboration" framing
  DIES**; the locality no-go writeup stays refutation-only. (At ≥50% shared variance the
  "different variable class" contrast between Chae's detection and TEST-08's null cannot be
  attributed to the variables rather than the estimators.)
- **r² < 0.25** (|r| < 0.5): **separable — the framing survives step-0**; e_env and ambient
  density carry substantially distinct information in SPARC, and "environment enters through
  acceleration (detected-and-disputed), not through density (registered null r²=0.0001)" is a
  meaningful two-variable statement.
- **0.25 ≤ r² < 0.5**: gray zone — framing survives only in weakened form ("partially
  independent axes"); the writeup must carry the shared-variance number explicitly.

**Secondaries (context, not verdict)**: e_env vs dist-corrected 5 Mpc sphere count, vs
dist-corrected 5th-NN density, vs Virgo-centric distance, vs log D (mutual distance-systematic
check). Diagnostic 2×2 (bonus, not verdict): each predictor {e_env, density} vs each response
{TEST-08 RAR offset, Chae fitted e (low-acceleration subset ⟨x₀⟩ < −10.3 only)}.

**Failure modes acknowledged in advance**: (1) e_env is ΛCDM-inferred with correlated
uncertainties — we use medians only; treat r as descriptive, not inferential. (2) Both
catalogs are flux-limited with distance-dependent selection — hence the distance-correction on
the density side and the log D cross-check. (3) A *low* correlation could in principle reflect
noise in either variable rather than true independence (attenuation) — so a "separable"
verdict licenses the two-axis framing only as "empirically decorrelated at SPARC scale," not
as a theorem.

## Result

**PRE-DECLARED VERDICT: SEPARABLE — the "independent corroboration" framing survives step-0,
in a specified, weakened form.**

Joined sample: **N = 141/141** (every TEST-08 galaxy matched a Chae Table 2 row).

| Statistic | value |
|---|---|
| **PRIMARY: Pearson r, log₁₀(e_env) vs dist-corr log(1+N_cyl)** | **+0.432 (r² = 0.187, p = 1.6×10⁻⁸)** |
| Spearman (robustness) | +0.540 |
| VIF | 1.23 |
| Same, low-acceleration subset only (⟨x₀⟩ < −10.3, N=106) | +0.438 (r² = 0.19) |
| Secondary: vs dist-corr 5 Mpc sphere count | +0.523 (r² = 0.27) |
| Secondary: vs dist-corr 5th-NN density | +0.308 (r² = 0.09) |
| Secondary: vs Virgo-centric distance | −0.420 (Spearman −0.69) |
| Distance-systematics check: vs log D | −0.260 (r² = 0.07) |

r² = 0.187 < 0.25 → **separable** under the rule fixed in advance. But it is near the
boundary and scale-dependent: e_env correlates *more* with the 5 Mpc sphere count (r²=0.27,
gray zone) than the 2 Mpc cylinder — consistent with e_env being a larger-scale variable. The
honest headline is **"e_env and ambient density share 19–27% of variance in SPARC —
separable, not orthogonal."**

### Instrument validation (run before reading the answer)

- **Erratum confirmed applied**: parsed NGC5055 e_env = 0.040, NGC5033 = 0.050 — the
  *corrected* values (pre-erratum body text: 0.094 / 0.102); golden-to-isolated ratio ≈ 4–5×,
  exactly as the erratum states.
- **Headline reproduction**: low-acc subset N = 113 (Chae: 113) ✓; median e = 0.052 (Chae:
  0.052) ✓; median e_env = 0.033 (Chae: 0.034) ✓; e>0 count 77 (Chae: 78 — one boundary case) ✓.
- 5 unparsed rows are footnoted galaxies with no ⟨x₀⟩ (UGC07559, UGC07577, UGC07866,
  UGC09992, UGCA444); none are in the TEST-08 sample.
- **TEST-08 replication inside the join**: density vs RAR offset r² = 0.0001 — the registered
  null reproduces exactly on the joined sample.

### The load-bearing surprise: the contrast is estimator-dependent, not variable-dependent

Diagnostic 2×2 (predictor × response), medians only:

| | RAR offset (TEST-08 estimator) | Chae fitted e (low-acc, N=106) |
|---|---|---|
| **e_env (acceleration)** | r = −0.11 (ns; sign is EFE-directional) | r = −0.03 (≈ 0) |
| **ambient density** | r = +0.01 (the registered null) | r = −0.09 (ns) |

Under the site's own estimator (whole-galaxy mean RAR offset), **neither** variable shows
signal. Chae's 5σ statistical detection lives in a different estimator: low-acceleration
weighting plus per-galaxy MCMC with mass-to-light, distance, and inclination freedom, and its
form is a *mean-level* agreement (⟨e⟩ = 0.052 ± 0.011 vs ⟨e_env⟩ = 0.034 ± 0.001) — the
per-galaxy correlation between fitted e and e_env is ≈ 0 (expected: individual e
uncertainties ~0.04–0.1 span the whole e_env range; medians-only r is descriptive).

So the sharp sentence "environment enters through acceleration, not density" is **not
licensed as an equal-estimator variable contrast**. What is licensed:

1. The variables are statistically separable in SPARC (r² ≈ 0.19, VIF 1.23) — step-0 passes;
   an estimator at N=141 can distinguish them.
2. The *registered density claim* (Synchronism: environment explains >20% of RAR scatter,
   void-high) is dead by execution (r² = 0.0001) — refutation arm intact.
3. The *live detection debate* keys on external acceleration through a low-acceleration
   estimator — and its sign (higher e_env → lower offset, r = −0.11 ns in our data) matches
   the EFE direction and is *opposite* to Synchronism's registered void-high prediction. Both
   arms point anti-Synchronism.

### Adversarial read (both-ways verification): no branch rescues local density

- **Paranjape & Sheth 2022** (MNRAS 517, 130): an EFE-like statistical signal is *generically
  expected in ΛCDM* — RAR-deviation and external acceleration correlate only through their
  mutual correlation with halo concentration c_vir (propagating via large-scale bias b₁).
  They also identify a potential discriminator: MOND predicts downward-deviators have
  *larger* external fields; their ΛCDM mocks mostly show the opposite sign.
- **Freundlich et al. 2022** (A&A 658, A26): 11 Coma-cluster UDGs match the *isolated* MOND
  prediction — no EFE where MOND-with-EFE predicts strong suppression. Evidence against.
- **Sargent et al. 2025** (arXiv:2511.03839): re-analysis "does not permit us to confidently
  assess the presence of an EFE" — the dispute is live and unresolved as of late 2025.

Branch check: if EFE is real → organizing variable is external acceleration (non-local). If
it is ΛCDM mimicry → organizing variable is halo concentration / assembly bias (also not
local ambient ρ). If inconclusive → the only *executed registered* environment test on this
axis remains the density null. **In no branch does a local-volumetric-density coupling get
rescued.** ✓ (as the proposal required verifying)

## Research Notes

- e_env source: Chae et al. 2020 Table 2 from arXiv:2009.11525**v2** source tarball
  (`explorer/data/chae2020_ms_r2.tex`, archived in-repo for reproducibility); the v2 table is
  erratum-corrected (6 galaxies had >3σ overestimated e_env + an indexing error scrambled the
  original table — a reminder that even the comparison literature has its own
  numbers-outliving-computation failure mode).
- Script: `explorer/scripts/efe_step0_collinearity.py`; results
  `explorer/data/efe_step0_results.json`. Pure-python (no scipy), normal-approx p-values.
- The pre-declaration was written to this file before any correlation was computed, per the
  test-preregistration protocol; the Pearson-primary rule was chosen blind and the verdict
  (0.187) landed 25% below the boundary — had Spearman been declared primary (0.54 → rank-r²
  0.29) the verdict would have been GRAY. This sensitivity is disclosed rather than hidden.

## Implications for the Site

The `locality-nogo-standalone-writeup` can now carry the EFE evidence axis, with mandatory
scoping. Suggested canonical paragraph (replaces the aspirational version in the proposal):

> Step-0 executed (2026-07-24): Chae's external-field variable e_env and the registered
> ambient-density variable share 19–27% of variance across 141 SPARC galaxies (primary
> Pearson r = 0.43) — separable axes, not interchangeable proxies. The two-axis reading
> therefore stands: the framework's registered density arm is refuted by execution
> (r² = 0.0001 vs >20% claimed), while the live detection debate (Chae 2020/21 vs Paranjape &
> Sheth 2022, Freundlich 2022, Sargent 2025) keys on external acceleration — with the caveat
> that the detection is mean-level, estimator-dependent, and disputed. Whichever way it
> resolves — real EFE (acceleration), ΛCDM assembly-bias mimicry (halo concentration), or
> inconclusive — no branch rescues a local-density coupling.

## Action: Maintainer

- Update the /for-researchers EFE paragraph (shipped 2026-07-24 with "collinearity queued as
  a research check") → the check is now executed; cite r = 0.43 / r² = 0.19 and the
  estimator-dependence caveat. Do **not** ship the unscoped "acceleration wins, density
  loses" sentence.
- Back-annotate `Synchronism/Research/proposals/locality_nogo_efe_detection_axis_20260724.md`:
  step-0 PASSED (separable), framing survives in weakened form; erratum-corrected Table 2
  now archived at `synchronism-site/explorer/data/chae2020_ms_r2.tex`.
- If the site ever cites Chae's e_env values for specific galaxies (e.g. golden galaxies),
  use the erratum-corrected numbers (NGC5055: 0.040, NGC5033: 0.050) — the widely quoted
  0.094/0.102 are pre-erratum.

## Open Threads

- **P&S sign discriminator**: MOND-EFE and ΛCDM mimicry predict opposite correlation signs
  between RAR deviation and external field for most masses. Our r(e_env, offset) = −0.11 (ns)
  carries the MOND-EFE sign but no significance with the mean-offset estimator. A
  low-acceleration-weighted offset (per-galaxy mean residual over points with g_bar < g†/10
  only) on the existing TEST-08 pipeline might have the power the whole-galaxy mean lacks —
  cheap, data in-repo, and it would test the sign discriminator on the site's own instrument.
  Worth a registered pre-declaration if run (it is NOT a Synchronism test — the framework's
  claim is already dead; it is a MOND-vs-ΛCDM literature contribution).
- Chae 2021 Paper II (ApJ 921, 104) relates e_env to LSS more directly; not yet read — could
  refine the e_env provenance description in the writeup.
- The 47% Spearman-vs-Pearson gap on the primary suggests a nonlinear (possibly
  saturating) relation between e_env and cylinder counts — irrelevant to the verdict, mildly
  interesting for the "different scales" interpretation.
