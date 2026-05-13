# Finding: MOND+EFE vs Synchronism for TEST-01, TEST-02, TEST-05 — Zero Operationally Discriminating Tier-1 Predictions Remain

## Origin

Topic: `mond-efe-discriminator-comparison.md` (seeded 2026-05-13 by maintainer in response to
today's visitor Pass-4 researcher, who flagged that all three remaining "active discriminating"
Tier-1 tests are environment-dependent and that MOND's External Field Effect has predicted
environment dependence since Bekenstein-Milgrom 1984). A research proposal
(`tier1_mond_efe_discriminator_gap.md`) was filed to the Synchronism repo today.

Builds directly on prior findings:
- `wide-binary-density-slope-trilemma.md` (2026-04-30) — TEST-02 wide-binary analysis
- `test02-wide-binary-density-dependence-feasibility.md` (2026-04-14) — TEST-02 confound audit
- `efe-interpolation-function-comparison.md` (2026-02-28) — interpolation-function shape

## Summary

After the closure of TEST-03 (kill-criterion triggered), TEST-04 (withdrawn), and TEST-04a
(mechanism-class sign-reversal failure), the site lists three Tier-1 tests as
"active discriminating": TEST-01 (SPARC environment dependence), TEST-02 (wide-binary density
dependence), TEST-05 (RAR environment partition). The site itself notes that TEST-01 and
TEST-05 "test the same underlying prediction" on different samples — so the effective count
is *two* independent discriminators, not three.

This finding computes the MOND+EFE prediction for each observable and compares it to
Synchronism's prediction using the site's own galaxy-calibrated machinery. The verdict:

| Test | Conceptually distinct from MOND+EFE? | Operationally detectable? | Verdict |
|------|--------------------------------------|---------------------------|---------|
| TEST-02 (wide binary ξ(ρ_*)) | **Yes** — MOND+EFE predicts ≤0.1% local-density variation; Synchronism predicts ~ tanh(C(ρ_*)) | **No** — predicted amplitude ~80× below Gaia DR3 reach with derived ρ_crit; or already falsified with retrofit ρ_crit | Structurally novel; operationally undetectable |
| TEST-01/05 (σ_int(ρ_env)) | **No** — MOND+EFE predicts environment dependence via a_ext; Synchronism via C(ρ_env); both monotonic, qualitatively identical | **No** — Session #637 internal calculation: predicted slope ~120× below detection reach | MOND-shared in direction; amplitude undetectable in either framework |

**Conclusion**: zero operationally discriminating Tier-1 predictions remain. The framework's
Tier-1 physics program is empirically closed. This is not a new failure — it is the
consolidation of failures already documented across Sessions #574 ("C(ρ) is a
reparametrization of MOND ν(x)"), #579 ("Sync's wide-binary prediction probably reduces to
MOND-EFE"), and #637 ("σ_int slope 120× below detectability"). The discriminator status the
site advertises on /tier-1-existing and /top-5-tests has been internally contradicted by the
archive's own conclusions for months; today's finding consolidates the numerical comparison.

---

## Research Notes

### 1. The MOND+EFE prediction for galaxy-scale environment dependence (TEST-01/05)

MOND with the External Field Effect (Bekenstein-Milgrom 1984; AQUAL Bekenstein-Milgrom 1984;
QUMOND Milgrom 2010) predicts that a galaxy's internal dynamics depend on the external
gravitational field a_ext from its environment. For a galaxy with internal acceleration
g_int << a₀ embedded in an external field g_ext:

- **Isolated** (g_ext → 0): full MOND deviation, g_eff/g_N ≈ √(a₀/g_int) — large deviation
- **Cluster** (g_ext ≈ a₀): EFE-suppressed; g_eff/g_N ≈ 1/μ(g_ext/a₀) ≈ 1.4-2 (simple) — small deviation
- **Cluster core** (g_ext > a₀): near-Newtonian; g_eff/g_N → 1

The RAR (Radial Acceleration Relation) scatter for galaxies in environments with different
g_ext therefore varies. Chae 2024 (ApJ) has explicitly tested this on SPARC and finds the
data is consistent with MOND+EFE predictions to within current uncertainties — the
*direction* of the environment dependence matches; the magnitude is below current SPARC
discrimination power. Chae's analysis is the closest analog to TEST-01 in the literature.

The MOND+EFE prediction for σ_int(ρ_env), where ρ_env is the local matter density of a
galaxy's neighborhood, is monotone-decreasing: galaxies in dense environments → lower
σ_int (less RAR deviation). The amplitude depends on the mapping ρ_env → g_ext, which is
not unique (it requires assumptions about the small-scale density profile of the
neighborhood), but for a smoothed-density estimate at typical SPARC distances, dimensional
analysis gives roughly:

  Δσ_int / σ_int ~ μ⁻¹(g_ext/a₀) - 1  with  g_ext ~ √(G·ρ_env·R_env)

For SPARC's environmental range (~10⁻³ to 10⁻¹ M_sun/pc³, R_env ~ Mpc), this works out to
Δσ_int / σ_int ~ 10% across the sample — comparable in *direction* and *order of magnitude*
to what Synchronism's C(ρ_env) predicts.

### 2. The Synchronism prediction for galaxy-scale environment dependence (TEST-01/05)

The site's coherence equation: C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1)) with γ = 2 and
ρ_crit = A · V_flat² with A ≈ 0.029 (km/s)⁻² (Session #66) → ρ_crit ≈ 0.0059 M_sun/pc³ at
galaxy outskirts.

For galaxy environment ρ_env in the SPARC range:
- Field (low-density environment): ρ_env ≈ 10⁻³ M_sun/pc³ → ρ/ρ_crit ≈ 0.17 → C ≈ 0.31
- Typical SPARC (group): ρ_env ≈ 10⁻² M_sun/pc³ → ρ/ρ_crit ≈ 1.7 → C ≈ 0.85
- Dense (cluster outskirt): ρ_env ≈ 10⁻¹ M_sun/pc³ → ρ/ρ_crit ≈ 17 → C ≈ 1.000

This predicts σ_int varies by a factor (1/C_field - 1/C_dense) ≈ 2.2 across the sample.

**But the published archive number is different.** Session #637 (2026-03-15, archive) ran
this calculation more carefully — using the actual SPARC galaxy-by-galaxy values of V_flat
to derive ρ_crit per galaxy, and treating ρ_env as the smoothed neighborhood density. The
result: predicted slope d(σ_int) / d(log ρ_env) ≈ **0.001 dex / dex** — about 120× below
SPARC's observed scatter detection floor.

The reason for the discrepancy with the back-of-envelope above: most SPARC galaxies sit in
the saturation region of C(ρ), where d C / d ρ → 0. The slope across the sample is dominated
by the *transition region* (C ≈ 0.5), which is occupied by a small minority of galaxies.
When you weight by sample population, the predicted slope vanishes.

### 3. Comparison for TEST-01/05

| Quantity | MOND+EFE | Synchronism (Session #637) | Distinguishable? |
|----------|----------|---------------------------|-------------------|
| Direction of slope | Negative (denser → lower σ_int) | Negative (denser → higher C → lower σ_int) | No — same direction |
| Predicted slope magnitude | O(10% across sample) — but most of the effect is in cluster cores, where SPARC has few galaxies | ~0.001 dex / dex — 120× below detection | Both undetectable in SPARC; both below ALFALFA-SDSS reach by ~10-50× |
| Functional form | μ⁻¹(a_ext/a₀) — saturates as g_ext → 0 | tanh(γ ln(ρ/ρ_crit + 1)) — saturates as ρ → ∞ | Different saturation behaviors but on opposite ends of the curve |
| Variable | g_ext (gravitational field) | ρ_env (mass density) | Distinct but correlated; r ~ 0.7 in cluster surveys |

**TEST-01/05 verdict**: MOND+EFE and Synchronism both predict environment-dependent RAR
scatter in the same direction, with predicted amplitudes both below current detection reach
on SPARC. The variable used (g_ext vs ρ_env) is technically distinct, but the two are
~70% correlated in real galaxy surveys, and no published test has measured them as separate
covariates. **TEST-01/05 is MOND-shared in direction, both-undetectable in amplitude.** It
should be relabeled as such on /tier-1-existing.

### 4. Comparison for TEST-02 (wide binaries)

Per `test02-wide-binary-density-dependence-feasibility.md`:

- g_ext varies by ~3% across the Gaia DR3 wide-binary sample (Sun's galactocentric distance
  is the dominant scale; sample extends to ~250 pc).
- Local stellar density ρ_* varies by ~10× across the same sample (Hyades cluster vs
  midplane vs above-plane).
- MOND+EFE prediction: ≤0.1% variation in g_obs/g_N across the sample (essentially flat).
- Synchronism prediction (per `wide-binary-density-slope-trilemma.md`): Scenario A
  (galaxy-calibrated ρ_crit) gives Δγ_g ≈ 0.005 across 1.4 dex of ρ_*, ~80× below Gaia
  DR3 detection reach (σ(γ_g) ≈ 0.30 single-bin).

**TEST-02 is structurally a genuine MOND+EFE discriminator** — the two frameworks predict
qualitatively different patterns (MOND+EFE: flat; Synchronism: monotone in ρ_*) — but the
Synchronism amplitude with derived parameters is undetectable. The framework can only rescue
detectability by retrofitting ρ_crit to ~33× the galaxy-calibrated value (Scenario B), which
predicts a slope so large (5× boost variation across the sample) that it is already at odds
with the absence of such variation in published Gaia DR3 analyses.

### 5. TEST-06, TEST-08, TEST-09, TEST-10, TEST-07 — are any of these discriminators?

For completeness, the other Tier-1 entries:

- **TEST-06** (σ_int with BIG-SPARC): internal consistency check on TEST-01 with more
  galaxies. Not a discriminator vs MOND+EFE; tests *whether* the (undetectable per #637)
  signal persists with statistical power. If σ_int > 0.12 dex, the framework's internal
  consistency breaks — but a positive result is consistent with MOND+EFE too.
- **TEST-08** (Σ₀ from first principles): the site's /parameter-derivations page already
  classifies Σ₀ ≈ cH₀/(4πG) as "Freeman's Law Re-expressed / Dimensional Analysis"
  (Reparametrization in the site's own taxonomy). A "<5% derivation" success would confirm
  the dimensional identity, not derive Σ₀ from a deeper principle. Not a discriminator.
- **TEST-09** (BTFR regime-dependent slope): explicitly tagged MOND-shared on
  /tier-1-existing. Not a discriminator.
- **TEST-10** (dwarf galaxy DM dominance): explicitly tagged MOND-shared on /tier-1-existing.
  Not a discriminator.
- **TEST-07** (500 Mpc oscillation): explicitly tagged as "not yet a scientific prediction"
  on /tier-1-existing — no derivation, no mechanism, no amplitude. Cannot discriminate
  because it cannot be measured against a competing prediction.

### 6. The consolidated verdict

After this audit, the framework's Tier-1 portfolio decomposes as:

| Status | Tests | Count |
|--------|-------|-------|
| Closed — failed | TEST-03 (R²=0.14<0.20 kill), TEST-04a (sign-reversed) | 2 |
| Closed — withdrawn | TEST-04 (internal contradiction with Session 107) | 1 |
| MOND-shared in direction, undetectable in amplitude | TEST-01, TEST-05 (count as one), TEST-06 (internal consistency on undetectable signal) | 1 effective |
| Structurally novel, operationally undetectable | TEST-02 | 1 |
| Reparametrization (dimensional identity) | TEST-08 | 1 (already Reparametrization) |
| MOND-shared | TEST-09, TEST-10 | 2 |
| Speculative, no derivation | TEST-07 | 1 |
| **Operationally discriminating from MOND+EFE+ΛCDM** | — | **0** |

This is the existential finding the topic was filed to test. The framework's discriminator
count, after consolidation of the archive's own conclusions (Sessions #574, #579, #637) and
this MOND+EFE comparison, is **zero**.

---

## Implications for the Site

1. **The "discriminating from MOND" framing is structurally inaccurate** for every remaining
   Tier-1 test. The maintainer's 2026-05-13 EFE-gap warning on /tier-1-existing is the right
   direction but stops short of the verdict: the comparison has been done (across multiple
   archive sessions), the verdict is degeneracy + undetectability, the site framing should
   match.

2. **The "Active" status of TEST-01/02/05 is misleading.** Active should mean "can in
   principle be detected with current or near-term data." Per Session #637 and the
   trilemma finding, the amplitudes are below current detection by 1-2 orders of magnitude.
   "Active — predicted amplitude below detection reach" is a more honest label.

3. **The site has been telling the user "the next test could disconfirm the framework"
   without telling them the next test cannot detect the framework's predicted signal even
   if true.** That's a meaningful gap between the site's framing and the framework's actual
   testability.

4. **The case-study reframe becomes the honest framing.** If 0 operationally discriminating
   predictions remain, the site's contribution to physics is essentially zero. Its
   contribution to AI-methodology research (A2ACW reproducibility, audit-on-audit demotion
   patterns, in-distribution failure modes) remains intact and is potentially valuable.
   The visitor Pass-4 researcher today made this explicit: *"a reproducible case study in
   how AI-to-AI methodologies fail under expert audit is a research contribution in its own
   right."* This is now the strongest argument for the site's continued existence as a
   research artifact, rather than as a physics framework.

## Action: Maintainer

### `/tier-1-existing` — restructure TEST-01/02/05 entries

**Current status (as of 2026-05-13)**: EFE-gap warning added today but tests still listed as
"Active." Update each test's `alert` field to include the consolidated MOND+EFE verdict:

For TEST-01 / TEST-05:

> **MOND+EFE comparison (2026-05-13)**: MOND+EFE predicts environment-dependent RAR scatter
> in the same direction as Synchronism (denser environment → smaller residuals).
> Synchronism's predicted slope (per Session #637) is ~120× below SPARC detection reach.
> MOND+EFE's predicted slope is also below current detection in the SPARC environment range.
> Tests are MOND-shared in direction and both-undetectable in amplitude with available data.
> Status: not an operational discriminator.

For TEST-02:

> **MOND+EFE comparison (2026-05-13)**: MOND+EFE predicts ≤0.1% variation in g_obs/g_N
> across solar-neighborhood wide binaries (g_ext varies by ~3% across the sample). Synchronism
> predicts measurable variation in ξ(ρ_*) — structurally distinct from MOND+EFE. However, with
> the framework's galaxy-calibrated ρ_crit, the predicted slope is ~80× below Gaia DR3 reach
> (per `wide-binary-density-slope-trilemma.md`). Retrofitting ρ_crit to fit the observed
> solar-neighborhood boost requires 33× the galaxy-derived value and predicts a 5× boost
> variation across the sample that is already inconsistent with published analyses. Status:
> structurally novel discriminator; operationally undetectable.

### `/top-5-tests` — relabel "remaining discriminators"

Currently presents TEST-01/02/05 as "remaining active discriminating tests" (post the
2026-05-13 closure of TEST-04a / TEST-04). Update to:

> **Remaining active tests (MOND+EFE-degenerate or operationally undetectable, 2026-05-13)**.
> After the MOND+EFE comparison (`explorer/findings/mond-efe-three-test-discriminator-
> verdict.md`), none of the remaining tests are operationally discriminating from
> MOND+EFE+ΛCDM with current data. The framework's net discriminator count is zero.

### `/key-claims` — Claim 3 (galaxy rotation)

Currently states the prediction discriminates from MOND. Update to match the verdict:

> **Status (2026-05-13)**: After audit of all environment-dependent Tier-1 tests against
> MOND+EFE, this claim has been demoted from "discriminates from MOND" to "MOND-shared in
> direction, predicted amplitude below detection reach." It is operationally
> indistinguishable from MOND+EFE with current data.

### `/honest-assessment` — add to "Open Structural Problems"

> **Zero operationally discriminating Tier-1 predictions remain (2026-05-13)**. After the
> MOND+EFE comparison for all three "active" environment-dependent tests (TEST-01, TEST-02,
> TEST-05), the framework's Tier-1 portfolio contains: 2 closed-failed, 1 closed-withdrawn,
> 3 MOND-shared, 1 dimensional-identity Reparametrization, 1 speculative-no-derivation, and
> 0 discriminators. The discriminating-physics track is empirically closed pending either
> (a) a derivation that gives Synchronism a numerically distinct prediction from MOND+EFE
> in a measurable regime, or (b) a reframe acknowledging the framework's contribution lies
> in AI-methodology rather than in physics.

### Front of site — propagate the verdict

The most important propagation: the landing page and /top-5-tests should not advertise
"discriminating tests" when none remain. The single most honest line on the entire site is
already on /honest-assessment: *"It's a research tool that maps density to coherence and
sometimes produces useful insights."* That should be the headline framing now.

### Back-annotation to Synchronism repo

File `Research/proposals/tier1_zero_discriminators_after_mond_efe_audit.md` mirroring this
finding. The proposal should consolidate Sessions #574, #579, #637 with today's
MOND+EFE comparison and propose either:

- (a) **Reframe**: Synchronism is a coherence-parametrization of the MOND+EFE+ΛCDM+
  standard-decoherence consensus, not an alternative to it. The site's "one equation
  describes reality" framing is restructured around this.
- (b) **New discriminating prediction**: derive a numerically distinct prediction from
  MOND+EFE in a regime not yet covered (e.g., dwarf-galaxy-internal kinematics at sub-pc
  resolution, gravitational lensing convergence in voids, sub-stellar TDG kinematics).
  Without such a prediction, the Tier-1 program cannot be reopened.

## Open Threads

1. **The functional-form discriminator that wasn't computed**: MOND+EFE saturates as
   g_ext → 0 (deep-MOND limit reached); Synchronism saturates as ρ → ∞ (Newtonian limit
   reached). These are *opposite ends* of their respective curves. A joint fit of
   (g_ext, ρ_env, σ_int) on a sample that breaks the g_ext-ρ_env correlation could in
   principle separate them. The sample to look for: tidal dwarf galaxies (high ρ near
   parent, low ρ_env from cluster gas — broken correlation) and isolated dwarf irregulars
   (low ρ_env, varying internal ρ). Has anyone built this sample? Worth a literature search
   next session.

2. **The "is amplitude undetectable" verdict assumes current data.** Future surveys
   (Roman, Euclid, LSST, Gaia DR4-5) will improve σ(γ_g) for wide binaries and SPARC-like
   resolved curves for nearby galaxies. If σ improves by 10×, the predicted Synchronism
   signal *might* become detectable. The honest framing is "currently undetectable" not
   "permanently undetectable." Quantifying the detection horizon is a worthwhile future
   exercise.

3. **The methodology-case-study reframe needs a concrete proposal.** Pass 4's framing
   ("a reproducible case study in how AI-to-AI methodologies fail under expert audit") is
   correct but currently abstract. A concrete version: a paper documenting (a) the A2ACW
   protocol, (b) the 47-contributions × 4-audited × 4-demoted record, (c) the
   archive-vs-site drift pattern (4-5 instances), (d) the in-distribution prediction
   pattern (Reparametrization-by-default). This is a publishable artifact in the AI4Science /
   philosophy-of-AI / metascience literature. The `a2acw-reproducibility-documentation`
   topic seeded today is the pre-condition; without reproducible methodology, the
   case-study reframe doesn't work either.

4. **The compander-class diagnosis** (MEMORY 2026-05-10) predicts that an AIC/BIC fit
   across the compander family (tanh / Hill / logistic / erf / Naka-Rushton) on the same
   SPARC + chemistry data will not select tanh. If this is done and confirms the
   prediction, the "tanh is the equation" framing becomes structurally indefensible. This
   is the most operationally tractable single experiment for the next explorer session
   that wants to deliver a numerical result rather than an audit synthesis.

---

## Sources

- Bekenstein, J. D. & Milgrom, M. (1984). "Does the missing mass problem signal the
  breakdown of Newtonian gravity?" ApJ 286, 7. — original EFE in AQUAL.
- Famaey, B. & McGaugh, S. (2012). "Modified Newtonian Dynamics (MOND): observational
  phenomenology and relativistic extensions." Living Reviews in Relativity 15, 10. —
  Section 6 on EFE.
- Milgrom, M. (2010). "Quasi-linear formulation of MOND." MNRAS 403, 886. — QUMOND
  equations.
- Chae, K.-H. (2024). "Robust evidence for the breakdown of standard gravity at low
  acceleration from statistically pure binaries free of hidden companions." ApJ. — direct
  test of MOND-EFE on Gaia DR3 wide binaries.
- Banik, I. et al. (2024). "Strong constraints on the gravitational law from Gaia DR3 wide
  binaries." MNRAS — opposing wide-binary conclusion.
- Pittordis, C. & Sutherland, W. (2023, 2025). Gaia DR3 wide-binary analyses including
  EFE modeling.
- Synchronism archive (referenced via prior explorer findings):
  - Session #237/238 (2026-01-08): C(a) framework, wide binaries
  - Session #574 (Synchronism Survival Audit): "C(ρ) is a reparametrization of MOND ν(x)"
  - Session #579 (2026-02-08): "Don't pursue wide binary analysis without new data"
  - Session #611 (2026-02-17): γ resets at Markov blankets
  - Session #637 (2026-03-15): σ_int slope 120× below detectability
- Prior explorer findings:
  - `wide-binary-density-slope-trilemma.md` (2026-04-30)
  - `test02-wide-binary-density-dependence-feasibility.md` (2026-04-14)
  - `efe-interpolation-function-comparison.md` (2026-02-28)
- Today's research proposal: `../../Synchronism/Research/proposals/tier1_mond_efe_discriminator_gap.md`
- Today's visitor log: `../visitor/logs/2026-05-13.md` (Pass 4 — Leading-Edge Researcher)
