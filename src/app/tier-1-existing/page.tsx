'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

type Test = {
  id: string;
  name: string;
  data: string;
  cost: string;
  time: string;
  prediction: string;
  kill: string;
  preregistration?: string;
  alert?: string;
  derivationHref?: string;
};

const tests: Test[] = [
  {
    id: 'TEST-01',
    name: 'SPARC Environment Dependence',
    data: 'SPARC (175 galaxies)',
    cost: '$0',
    time: '6 weeks',
    prediction: 'Rotation curve residuals correlate with local galaxy density',
    kill: 'No correlation between residuals and environment at 2σ',
    alert: 'Scope note: TEST-01 (SPARC residuals vs. density) and TEST-05 (RAR scatter vs. environment) test the same underlying prediction — environment-dependent RAR — on different samples. SPARC is higher-quality resolved curves (175 galaxies); ALFALFA-SDSS is larger statistical power (14,585 galaxies). These should be read as two phases of one test, not as two independent tests.',
  },
  {
    id: 'TEST-02',
    name: 'Wide Binary Density Dependence',
    data: 'Gaia DR3',
    cost: '$0',
    time: '6 months',
    prediction: 'Wide binary anomaly depends on local stellar density: systems in LOWER-density environments should show STRONGER coherence-driven deviation from Newtonian dynamics. Mechanism: g_eff = g_N/C(ρ); lower ρ → smaller C → larger boost above Newtonian. [Sign corrected 2026-06-06; previous "higher-density → stronger deviation" was backwards.]',
    kill: 'REWRITTEN 2026-06-12 (previous criterion predated the C(a)→C(ρ) fork and was inverted — it would have killed the framework for its own prediction coming true): a Gaia-confirmed MOND-scale wide-binary anomaly (~18% velocity deviation; Chae-type ~1.4× boost at low internal acceleration) in the clean sample REFUTES C(ρ), which predicts a Newtonian null (0.05–0.4%). A confirmed Newtonian null is consistent with C(ρ) but equally consistent with GR — survival without points, non-discriminating.',
    alert: 'KILL BRANCH ADJUDICABLE NOW (2026-06-12): the refutation branch does not wait on future Gaia data — it waits on the published Gaia DR3 adjudication already in the literature: Chae (2023–2025) claims a MOND-like ~1.4× boost at low internal accelerations; Banik et al. (2024) claims Newtonian behavior excludes that boost at high significance, from the same data with different cuts. If the Chae side prevails, C(ρ) is refuted with existing data; if Banik holds, C(ρ) survives degenerately with Newton. Adjudication queued to the explorer track (proposal: test02_kill_branch_adjudicable_now.md). | SELF-ELIMINATING-OR-TIE (2026-06-07): This test has no outcome that favors Synchronism. If Gaia confirms the null (Banik 2024 / Pittordis & Sutherland 2023): that confirms Newton — Synchronism merely reproduces Newton here. If Gaia confirms ~18% anomaly (Chae 2023): that confirms MOND and refutes Synchronism-C(ρ) — Newton and Synchronism are refuted together. No measurement selects Synchronism over the standard alternatives. Additionally, 0.05–0.4% (C(ρ) prediction) is below current Gaia DR3 wide-binary systematics — practically untestable, not just difficult. | SIGN CORRECTION (2026-06-06): The prediction direction was reversed on this page from 2026-05-05 to 2026-06-06. The correct direction is lower density → stronger deviation (g_eff = g_N/C(ρ) gives low ρ → low C → larger boost). Both MOND+EFE and C(ρ) agree on this direction — direction is not a discriminator. The amplitude IS structurally distinct: C(ρ)-density form predicts ~0.05–0.4% velocity deviation (Newtonian null level) vs MOND ~18%; Gaia DR3 reach is ~80× insufficient. Substrate contingency: the anomaly\'s existence is actively disputed (Chae 2023 detects it; Banik 2024, Pittordis & Sutherland 2023, Saurabh 2024 do not). This is the third C(a)→C(ρ) fork: C(a) predicts the anomaly but is MOND-degenerate (refuted by SPARC RAR at ΔBIC=+184); C(ρ) is structurally distinct but predicts the Newtonian null. | DATA MILESTONE (2026-07-03): Gaia DR4 (~late 2026) will reset the wide-binary systematics floor and re-open the Chae/Banik adjudication on better data — the next scheduled event that could move this test. Clarifier: "adjudicable now" and "practically untestable" refer to different branches — the REFUTATION branch (Chae-type boost confirmed → C(ρ) dead) is adjudicable from published DR3 literature today; the CONFIRMATION branch (measuring the predicted 0.05–0.4% null as distinct from zero) is below systematics reach regardless. Adjudicable, but non-selecting.',
  },
  {
    id: 'TEST-03',
    name: 'ALFALFA-SDSS TFR Scatter',
    data: 'ALFALFA + SDSS (14,585 galaxies)',
    cost: '$0',
    time: '3 months',
    prediction: 'TFR residual captures all intrinsic scatter (51% improvement)',
    kill: 'TFR residual explains <20% of scatter',
    alert: 'NEVER RUN AS REGISTERED — metric conflation (corrected 2026-07-09, closing the "presumptively failed" note below after independent citation-walks by the explorer track 2026-07-08 and two visitor personas 2026-07-09 converged on the same five errors). The R² = 0.14 figure previously shown here as TEST-03\'s result is not a valid measurement of the N = 14,585 ALFALFA-SDSS sample: at N = 14,585, R² = 0.14 implies t ≈ 48.7 (p of order 10⁻⁵⁰⁰), not the p = 5×10⁻⁶ quoted alongside it. The (R², p) pair is self-consistent only at N ≈ 130–175 — SPARC scale, i.e. the sample used by TEST-05, not TEST-03. Tracing the number further (archive S377/S381/S591): 0.14 is a Hubble-type/morphology term on N ≈ 171, not a measurement of environmental density on the 14,585-galaxy ALFALFA-SDSS cross-match; the registered environment-density correlation (classify by cluster/field/void, apply the <20% bar) was never executed. The 51% TFR-residual/BTFR prediction above (Session 593, N = 14,437) is a separate, already-passing result that this same card had been conflating with the failing 14% figure since 2026-04. Honest status update (2026-07-15): the registered environment-density test HAS NOW BEEN RUN (research repo, 2026-07-14, on SPARC RAR offsets vs Cosmicflows-4 densities): r² = 0.0001 — no environment dependence at the registered amplitude; the framework\'s environment prediction is refuted by execution, not by the old conflated statistic. See TEST-05 for the full adjudication.',
  },
  {
    id: 'TEST-04',
    name: 'BAO Coherence Modulation — WITHDRAWN',
    data: 'DESI, SDSS DR17, Euclid',
    cost: '$0',
    time: 'N/A',
    prediction: '[Withdrawn] BAO peak shifts ~10⁻⁴ between high/low-density regions',
    kill: '[Withdrawn] BAO identical everywhere to 10⁻⁵ precision',
    derivationHref: '/bao-coherence-modulation',
    alert: 'WITHDRAWN (2026-05-04) — Three converging failures: (1) The framework\'s own Session 107 (Dec 2025) explicitly forecasts BAO matches ΛCDM at 0.0% in all five DESI redshift bins — the sound horizon is set at z~1100 when C ≈ 1 everywhere, so no modification is possible. (2) The 10⁻⁴ number has no session-level derivation; it appeared only in compilation documents that drifted from the underlying sessions. (3) Standard nonlinear physics already produces ~6×10⁻² environment-dependent BAO shifts (600× larger); the kill criterion of 10⁻⁵ is 3000× below DESI Y3 precision. See /bao-coherence-modulation for full documentation. Replacement: TEST-04a (DESI RSD fσ8 suppression) — the test Session 107 actually predicts.',
  },
  {
    id: 'TEST-04a',
    name: 'DESI RSD fσ₈ — Disfavored on σ₈, Underpowered on the Registered fσ₈ Statistic (Corrected 2026-07-14)',
    data: 'DESI DR1 (arXiv:2411.12021, Table 9 & 10)',
    cost: '$0',
    time: 'ADJUDICATED (2026-05-05)',
    prediction: 'fσ₈(z=0.51) ≈ 0.418 — a ~12% suppression below ΛCDM (0.474). Mechanism: G_local/G_global = C_cosmic/C_galactic suppresses structure growth at late times. Session 107 forecasts 1.7σ–3.2σ discrimination per DESI LRG bin.',
    kill: 'fσ₈(z=0.51) > 0.46 (rules out Synchronism at >3σ); fσ₈(z=0.51) > 0.45 disfavors at >2σ',
    preregistration: 'Post-hoc retrodiction — σ₈ calibrated to lensing S₈ tension in Session 102; propagated to DESI fσ₈ in Session 107 (committed 2025-12-10); DESI DR1 published April 2024. Status (corrected 2026-07-14): disfavored 2.4σ on σ₈ (a different, GR-conditioned statistic); on the REGISTERED fσ₈ statistic the disfavor is only ~1.5σ against the >3σ the kill criterion demands — the criterion was not met as registered.',
    alert: 'CORRECTED 2026-07-14: the kill criterion below is registered on fσ₈(z=0.51) > 0.46 for a >3σ ruling-out. Computed directly: LRG1 fσ₈ = (fσ₈)_fid × 1.16 ± 0.13 = 0.474 × 1.16 ± 0.062 = 0.550 ± 0.062 — exceeds 0.46 by only ~1.5σ, well short of the >3σ the criterion demands (it does clear the weaker >2σ "disfavors" clause at 0.45). The "Kill Criterion Triggered" claim in the 2026-07-02 reframe below was delivered on σ₈ = 0.841 ± 0.034, a DIFFERENT statistic inferred from a full-shape fit that assumes GR growth kernels — using a GR-conditioned amplitude to falsify a modified-growth model risks circularity (the EFTofLSS citation below already half-concedes a 1-2σ theory systematic on this exact number). DESI\'s own purpose-built modified-gravity analysis — Ishak et al., arXiv:2411.12026 (JCAP 09 (2025) 053) — gives μ0 = 0.11 (+0.45/-0.54) from DESI alone, tightening to 0.05 ± 0.22 with CMB+SN; a ~12% fσ₈ suppression maps to a μ0 inside DESI-alone\'s 1σ band (exact mapping not yet run — seeded as explorer topic). Honest reading: the test as registered lacked the power to discriminate this framework from GR. This does not rescue the framework\'s cosmology sector (no field equation sources a growth suppression; the σ₈≈0.76 vs 0.841 gap remains a real 2.4σ miss on that GR-conditioned parameter) — it corrects which statistic carries the kill and how confidently. PRIOR REFRAME (2026-07-02, superseded by the statistic correction above but the amplitude-vs-direction point still stands): post-hoc retrodiction — disfavored 2.4σ on σ₈ AMPLITUDE. DESI DR1 full-shape (arXiv:2411.12021) combined σ₈ = 0.841 ± 0.034 (Table 10) vs Synchronism\'s predicted σ₈ ≈ 0.76: the predicted suppression is absent; data ΛCDM-consistent. The load-bearing statistic is the ensemble amplitude, NOT direction: the LRG1 (z=0.51) fσ₈/(fσ₈)_fid = 1.16 ± 0.13 "enhancement" is a single ~1.2σ bin the DESI collaboration does not treat as robust, and the DR1 ensemble growth index γ_growth ≈ 0.58 ± 0.11 (above GR\'s 0.545) leans mildly toward suppression — the framework\'s own predicted direction. A "wrong direction" framing would be fragile against DR2; the amplitude framing is the defensible one. (Independently converged: 2026-06-24 explorer, 2026-07-01 explorer re-execution, 2026-07-02 + 2026-07-03 visitor Pass 4 researcher reads.) DR2 full-shape growth constraints remain unpublished (~Spring 2027). PROSPECTIVE REGISTRATION ADOPTED (dp, 2026-07-17 — the program\'s first genuinely prospective test; the pre-registration audit had found 0/10): all three DR2 outcomes are pre-committed IN WRITING before publication, adjudicated within 7 days, on the REGISTERED statistic (DR2 full-shape fσ₈ at z≈0.51, not σ₈): (A) fσ₈ ≤ 0.46 → registered criterion met by suppression direction, but the prediction remains post-hoc — confirmed-count stays 0; (B) fσ₈ > 0.46 at ≥3σ → the kill fires as registered, at registered power — the clean prospective refutation DR1 could not deliver; (C) between → "underpowered to discriminate" survives its own test and the row retires. No branch can be chosen after the data. (Research repo: PREDICTIONS.md, Bucket 1 registration block. This supersedes the narrower 2026-06-12 re-open policy below.) HISTORY — CORRECTED 2026-05-26 (previous 2026-05-25 "correction" was itself an error): LIKE-FOR-LIKE single-bin fσ₈ comparison: predicted fσ₈ ≈ 0.418; LRG1 observed fσ₈ ≈ 1.16 × 0.474 ≈ 0.55 — gap ~2σ (single-bin, qualified — see current verdict). SEPARATE σ₈ comparison: 2.4σ (ensemble, robust). These are two different observables — do not compare the 0.418 fσ₈ prediction to the 0.841 σ₈ observation directly. The 0.4497 ± 0.0548 figure cited in the 2026-05-25 edit belongs to arXiv:2512.03230 (DESI Peculiar Velocity Survey, z≈0.07) — a different survey misattributed to the z=0.51 full-shape slot. Note: the "mechanism-class sign reversal / transferable contribution" characterization is NOT restored — that was an overstatement; this is a post-hoc test. CONTEXT (2026-05-23): EFTofLSS analyses (Cabass, Simonović, Zaldarriaga et al. 2024-2025) explain DESI DR1 fσ₈ within ΛCDM at 1-2σ. CURRENCY (2026-06-11): this verdict is frozen at DR1 — DR2 growth has not been re-run against the kill criterion. RE-OPEN POLICY (2026-06-12): the verdict would unfreeze only if DR2 full-shape reported fσ₈(z≈0.5) ≤ 0.46 (back under the kill threshold). A DR2 value at or above DR1\'s would not change the verdict, only deepen it; no DR2 outcome can convert a post-hoc retrodiction into a prospective success. FRAMING: predicting σ₈ ≈ 0.76 in late 2025 was a bet that the S8 lensing tension (KiDS/DES) was physical; KiDS-Legacy and DESI full-shape have since moved against that camp. The failure is a documented bet on a tension that dissolved — which is what makes the mechanism-class reading (any coherence-damped growth-suppression framework sits in the same disfavored box) a statement about a real corner of the literature, not just this framework.',
  },
  {
    id: 'TEST-05',
    name: 'RAR Environment Partition',
    data: 'SPARC + density catalogs',
    cost: '$0',
    time: '2 months',
    prediction: 'RAR scatter shows NP2 environment dependence (p = 5×10⁻⁶)',
    kill: 'RAR scatter independent of Hubble type / environment',
    alert: 'RE-ADJUDICATED (2026-07-15): the "MOND-shared" tie assigned on 2026-07-09 dissolves on lever magnitude — the two frameworks\' environment mechanisms couple to DIFFERENT variables, and their predicted effect sizes differ by orders of magnitude. MOND+EFE couples to external ACCELERATION (non-local): at SPARC outer radii (median g_bar/a₀ = 0.055) a typical external field (e_N ≈ 0.033, Chae 2020 median) modulates g_obs by ~0.09 dex — comparable to the full observed RAR scatter (~0.11 dex), which is why it is statistically detectable (Chae et al. 2020/2021, ~4σ, though disputed — Freundlich et al. 2022 and Paranjape & Sheth 2022 offer non-EFE readings in which ΛCDM-expected correlations mimic the signal). C(ρ) couples to ambient DENSITY added to local ρ (strictly local): even with the outer-disk density taken maximally low, the ambient contribution is a 4×10⁻⁵ (field) to 4×10⁻³ (δ~100 group) fractional perturbation, giving ~2×10⁻⁵ to 2×10⁻³ dex — roughly 50× smaller than MOND\'s lever at like-for-like environments and 2–4 orders of magnitude below the scatter. Undetectable. And the framework\'s OTHER galaxy law — C(a) on internal acceleration, the one TEST-09/10 actually use — predicts exactly ZERO environment dependence. Either law, a DETECTED environment dependence is specific evidence for the non-local coupling and unreachable by the framework\'s own mechanism: this is the locality no-go on the environment axis. AND THE REGISTERED RUN NOW EXISTS (research repo, 2026-07-14): per-galaxy SPARC RAR offsets vs distance-corrected Cosmicflows-4 ambient density (N = 141; instrument validated on 28 UMa cluster members) give r² = 0.0001 (p = 0.89) — ~900× under the framework\'s registered ">20% of scatter" claim; the kill bar (r² < 0.09) fires. The weak non-significant secondaries are OPPOSITE-signed (EFE-like, not Synchronism-like; Chae\'s detection uses a different estimator and is not contradicted). The execution and the structural adjudication agree: the framework registered an environment effect its own local mechanism cannot produce (predicted lever ~10⁻³ dex), and the data show none at its registered amplitude. S381\'s caveat resolved: the old R² = 0.14 signal was Hubble-type/morphology on N ≈ 171, not environment. HISTORY (2026-07-09): TEST-05\'s registered criterion is a null-independence test ("RAR scatter independent of Hubble type / environment"), and the p = 5×10⁻⁶ / R² = 0.14 result (N ≈ 130–175, SPARC scale — see the corrected TEST-03 note above) rejects that null on its own terms; the 07-09 pass reclassified it MOND-shared on the grounds that MOND+EFE predicts the same qualitative dependence — an argument that compared directions while neither side\'s amplitude had been computed. Script: explorer/scripts/test05_environment_lever_magnitudes.py.',
  },
  {
    id: 'TEST-06',
    name: 'CDM σ_int with BIG-SPARC',
    data: 'Future resolved rotation curves',
    cost: '$0 (data)',
    time: '1–2 years (data availability)',
    prediction: 'σ_int remains at 0.086 dex with larger sample',
    kill: 'σ_int > 0.12 dex with N > 1000',
    alert: 'UNDERPOWERED AS REGISTERED (marked 2026-07-17, before the data arrives, not after): the registered kill threshold (σ_int > 0.12 dex) sits inside the disclosed ~3× pipeline-dependence range below — either outcome would be attributable to velocity-definition choice, so the test cannot adjudicate anything until the registration fixes one velocity definition in advance. Pipeline-dependence caveat (2026-07-04): Lelli et al. 2019 (MNRAS 484, 3267) report BTFR orthogonal intrinsic scatter on the same galaxy population ranging 0.026–0.070 dex depending solely on which velocity definition is used (V_flat vs. W_P20 vs. V_max vs. V_2.2). A single-pipeline σ_int value is not a fixed target — the kill threshold should be read against that ~3× pipeline-dependent range, not as a precise number. See CDM Discrimination for the corrected CDM verdict (z = +0.5, CDM-consistent) this test is downstream of.',
  },
  {
    id: 'TEST-07',
    name: 'Cosmic Interference Patterns — Exploratory Hypothesis (Not a Tier 1 Test)',
    data: 'SDSS, DES, DESI surveys',
    cost: '$0',
    time: 'N/A — no prediction yet',
    prediction: '[Exploratory] Galaxy cluster separations may show oscillatory modulation at λ ~ 500 Mpc',
    kill: 'N/A — no amplitude derivation exists; no mechanism is specified; not falsifiable as stated',
    derivationHref: '/cosmic-interference',
    alert: 'DEMOTED TO TIER-2 (executed 2026-07-07; flagged 2026-05-17): This does not qualify as a Tier 1 falsification test and no longer counts toward the Tier 1 inventory. The /cosmic-interference page itself states "Without a derivation, this is not a prediction in the scientific sense — it is an exploratory hypothesis." No amplitude has been derived from γ or ρ_crit. No mechanism is specified (sound-horizon shift? phase rotation? coherence interference?). No engagement with DESI 2024-2025 BAO results. No kill criterion is physically meaningful without an amplitude. The row is retained here, demoted in place, so the demotion is visible rather than silent — it is an exploratory hypothesis pending derivation, not a test.',
  },
  {
    id: 'TEST-08',
    name: 'Freeman Law Derivation Test',
    data: 'SPARC surface brightness data',
    cost: '$0',
    time: '1 month',
    prediction: 'Σ₀ emerges from first principles with <5% error',
    kill: 'Derived Σ₀ differs from observed by >15%',
    alert: 'RECLASSIFIED (see /honest-assessment): Σ₀ = cH₀/(4π²G) is the unique surface-density scale buildable from the cosmological constants c, H₀, G — the same dimensional identity class as a₀ = cH₀/(2π). Any framework that imports these constants recovers the same relation. The ≈4% agreement with Freeman\'s observed value (124 M☉/pc²) — corrected 2026-07-09 from a prior arithmetic error stating 110/12% — is consistent with dimensional analysis, not a framework-specific prediction, and is not independent of a₀\'s own ~10% gap (Σ₀ = a₀/(2πG) exactly). Classified: Reparametrization — Dimensional Identity.',
  },
  {
    id: 'TEST-09',
    name: 'BTFR Slope — FAILED, Kill Criterion Fired (Executed 2026-07-14)',
    data: 'SPARC (Lelli 2016 mass models, 123 galaxies after quality cuts)',
    cost: '$0',
    time: 'EXECUTED (2026-07-14)',
    prediction: 'Computed from the framework\'s own formula (C(a) = Ω_m + (1−Ω_m)x/(1+x), boost capped at 1/Ω_m = 3.17): BTFR slope n = 3.35 ± 0.07. The previously listed "deep-MOND sample → n ≈ 4" limb is retracted — a bounded boost has NO deep-MOND regime. As g_bar → 0 the boost saturates at 3.17, a constant rescaling of G, which is Newtonian: the framework\'s deep limit is n → 2 (verified numerically: 2.01), the OPPOSITE end of the ladder from MOND\'s n = 4. MOND\'s n = 4 comes precisely from the √(a₀/g_bar) divergence a bounded boost cannot follow.',
    kill: 'A single sample produces a BTFR slope inconsistent with its regime-mix prediction by > 0.3 — FIRED: deviation 0.41 (registered variable, same V_flat estimator applied to observation, MOND, and Synchronism alike). Threshold provenance: the >0.3 criterion in its operative wording was fixed 2026-04-24 (site commit 89825cf, restating the 2026-04-23 back-annotation) — eleven weeks before execution and before the bounded-boost analysis existed. Disclosed: that restatement changed the criterion\'s variable (band-universality → regime-mix deviation) while carrying the 0.3 magnitude over.',
    alert: 'FAILED — KILL CRITERION FIRED (executed 2026-07-14 on real SPARC; MOND-shared flag RETRACTED). Observed n = 3.75 ± 0.10 (reproduces Lelli 2019\'s 3.85 ± 0.09); MOND n = 3.81 ± 0.04 (passes, 0.6σ); Synchronism n = 3.35 ± 0.07 (fails, 3.3σ; deviation 0.41 > 0.3). No parameters rescue it: at the framework\'s own Ω_m = 0.315 the best over all (φ, a₀) is 3.45 — the kill fires for every exponent; reaching 3.75 requires Ω_m → 0.001 and φ → 2, at which point the law degenerates algebraically to MOND. The honest parameter accounting (φ provenance audit, 2026-07-17): ONE derived ingredient (Ω_m, from cosmology) plus ONE fitted exponent dressed as a constant — φ is fitted-then-named (archive S45 adjudicated the first φ-sighting "intriguing coincidence, not significant"; the later "derivations" restate φ\'s defining identity x+x²=1 rather than derive it; see /parameter-derivations). A free exponent that still cannot reach the data is a deeper failure than a derived one — the no-rescue scan already covers every exponent value. OPEN ROBUSTNESS ITEM (flagged by two independent expert reviews 2026-07-18): the observed BTFR slope is velocity-definition dependent (Lelli 2019: V_flat vs W_P20 vs V_max spans roughly 3.0–4.1 — the same systematic this page cites on TEST-06), and the kill margin (0.41 vs 0.3) sits inside that range. The execution\'s defense is that the SAME V_flat estimator was applied to observation, MOND, and Synchronism — the adjudicated quantity is a differential under one consistent definition — but whether the differential stays above 0.3 under W_P20 and V_max has NOT been executed. RESOLVED — DEFINITION-ROBUST BY EXECUTION (2026-07-18, same-day run of the registered protocol under its pre-fixed verdict rule): all 11 adjudicated runs exceed 0.3 (minimum 0.32) — V_flat 0.44 ± 0.12; W_P20 across 8 generator/sample variants 0.32–0.61; V_max 0.56–0.72 with paired-bootstrap P(dev ≤ 0.3) ≤ 0.001. The observed arm reproduces Lelli 2019\'s per-definition slopes (V_max 3.47 vs 3.52; V_2.2 3.08 vs 3.06). Two disclosed caveats: (1) the point estimate is definition-robust but the SIGNIFICANCE is uneven — it is carried by V_max (P ≤ 0.001); V_flat alone is only ~1.2σ above threshold (P(≤0.3) = 0.11) and the W_P20 margin is thin (0.34 ± 0.10, P = 0.36); (2) exploratory inner-disc/single-point measures outside the registered outer-velocity scope (V_2.2, V_last: 0.25–0.28) sit under threshold — the kill is a statement about outer/flat rotation velocities, where the bounded boost binds. When citing this kill\'s strength, prefer the V_max form (0.72 ± 0.09) or pair it with TEST-10\'s definition-free ceiling violation (69% of galaxies exceed 3.17). MOND passes the same differential under every definition (max 0.20). Robustness script: explorer/scripts/test09_velocity_definition_robustness.py. The old "MOND-shared / cannot discriminate" badge was wrong in structure, not just in outcome: the BTFR is an asymptotic-boost observable, and boundedness — the framework\'s only feature distinguishing it from MOND — forces disagreement exactly there (this is a corollary of the boost-ceiling refutation on /honest-assessment). Provenance: archive S58 recorded the discrepancy honestly ("predicted n=2.75, observed n≈4"); S193 overwrote it with a synthetic 9-galaxy rescue asserting a deep-MOND limb the bounded formula cannot produce. S58 was right. Scripts: explorer/scripts/test09_btfr_bounded_boost_real_sparc.py, test09_parameter_scan_no_rescue.py.',
  },
  {
    id: 'TEST-10',
    name: 'Dwarf Galaxy DM Dominance — FAILED, Ceiling Exceeded (Executed 2026-07-15)',
    data: 'SPARC outer rotation-curve points (Q ≤ 2, i > 30°, N = 153)',
    cost: '$0',
    time: 'EXECUTED (2026-07-15)',
    prediction: 'CORRECTED: the registered "DM fraction → 100% for M_bar < 10⁸ M☉" was never the framework\'s prediction — it is MOND\'s (unbounded ν). The framework\'s own bounded boost (B ≤ 1/Ω_m = 3.17) caps the apparent DM fraction at f_DM = 1 − C ≤ 1 − Ω_m = 68.5%, for every galaxy, at every radius, for every parameter choice.',
    kill: 'As registered: "baryon-dominated dwarfs below 10⁸ M☉ exist." The kill fires in REVERSE: the framework dies at the DM-dominated tail its own ceiling forbids. Threshold provenance: the 68.5% ceiling needs no registration date because it is STRUCTURAL, not tuned — f_DM = 1 − C ≤ 1 − Ω_m = 0.685 (equivalently 1 − 1/3.17), fixed by the framework\'s own Ω_m = 0.315 with zero adjustable freedom. No choice made before or after the data could move it.',
    alert: 'FAILED (executed 2026-07-15 on SPARC outer points; MOND-shared flag RETRACTED). Observed outer apparent DM fractions: median 0.755, max 0.927 — 106/153 = 69% of ALL SPARC galaxies exceed the framework\'s structural 68.5% ceiling (dwarfs below 10⁹ M☉: 67% exceed; the ten most DM-dominated galaxies are all impossible for the bounded boost while MOND matches them to a few percent — median residual f_obs − f_pred is +0.18 for Synchronism vs −0.03 for MOND). Beyond SPARC it is worse: pressure-supported dwarf spheroidals reach M_dyn/M_bar ~ 10²–10³ (Walker & Peñarrubia 2011 and subsequent dispersion-based mass modeling) against the framework\'s cap of 3.17. "A positive result confirms Synchronism and MOND equally" was wrong: MOND\'s boost is unbounded and accommodates near-100% fractions; the framework\'s cannot — this observable discriminates, and the framework loses it. Same structural root as TEST-09: both are corollaries of the boost ceiling. Script: explorer/scripts/test10_dwarf_dm_fraction_ceiling.py.',
  },
  {
    id: 'CLUSTER-SCALE',
    name: 'Cluster Scale — Bridge Tested on Coma, Closed 2026-05-28 (Not a Tier 1 Test)',
    data: 'Coma cluster (X-ray gas + galaxy velocity dispersion mass estimates)',
    cost: '$0',
    time: 'Closed',
    prediction: '[Closed] Four natural C(ρ)-to-apparent-mass ansätze were tried against Coma: A1 M_app/M_B = ⟨1/C⟩_vol; A2 M_app/M_B = 1/(1−⟨C⟩); A3 M_app/M_B = 1 + ∫Cρ dV/M_B; A4 M_app/M_B = 1/⟨C⟩_mass.',
    kill: 'All four failed: A1 and A4 overshoot the observed mass ratio by 10⁴; A2 collapses to Newtonian (no boost at all); A3 is structurally bounded at ≤2 regardless of parameters, vs. the observed ratio of 4.6 — impossible by construction, not by fit.',
    alert: 'CLOSED BY EXECUTION (2026-05-28, refined 2026-06-01 and 2026-06-09): the earlier framing here ("if [a bridge] exists in the archive, it is the last open door") is superseded — the bridge was built four ways and tested on Coma; all four fail. Root cause (2026-06-01): NOT one-scale insufficiency — MOND has exactly one scale (a₀) and only misses clusters by a factor ~2 (Sanders 2003). C(ρ) also has one scale (ρ_crit) and misses by 10⁴. The dominant cause is the WRONG VARIABLE: g_bar = G·M(&lt;r)/r² is non-local in ρ, so a function of local density cannot reproduce an acceleration-space law (the RAR) across systems of very different density profiles at matched acceleration. Novelty audit (2026-06-09): this is a quantified INSTANCE of Milgrom\'s non-locality theorem (astro-ph/0510117) — the discriminating axis is locality, not "density-based" per se, so non-local density constructions (Verlinde 2016\'s enclosed M_B(&lt;r), MOND-Σ) are not caught by this no-go. See /for-researchers and /honest-assessment for the full derivation; explorer/findings/cluster-bridge-impossibility-coma.md, cluster-bridge-wrong-variable-not-one-scale.md, and density-compander-nogo-is-milgrom-nonlocality-instance.md for the computation.',
  },
];

export default function Tier1Existing() {
  return (
    <>
      <Breadcrumbs currentPath="/tier-1-existing" />
      <h1>Tier 1: Existing Data</h1>
      <ValidationBadge status="untested" label="10 Tests, $0 Cost — see overlap notes" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          <strong>Tier 1</strong> = zero-cost reanalysis of existing public datasets — no new hardware, no new
          observations, no telescope time required. The testing hierarchy (Tiers 1–4) is defined on the{' '}
          <Link href="/test-roadmap" style={{ color: 'var(--color-accent-blue)' }}>Test Roadmap</Link>.
        </p>
        <p>
          These 10 numbered tests use publicly available datasets — plus TEST-04a, a sub-test of TEST-04
          added after TEST-04 was withdrawn. Effective independent tests after failures and withdrawals: approximately 4.
          Just analysis. This is where Synchronism should be tested first.
        </p>

        {/* Badge legend — requested by all four personas 2026-05-23 */}
        <details style={{ marginBottom: '1.5rem' }}>
          <summary style={{ cursor: 'pointer', color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>
            Status badge definitions
          </summary>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
            <strong>Active-MRH</strong><span>In active research focus; being extended or revised</span>
            <strong>Reparametrization</strong><span>Equivalent to existing physics (MOND, textbook QM) in different notation</span>
            <strong>Untested</strong><span>Prediction exists, no data yet</span>
            <strong>Speculative</strong><span>Conceptual proposal without quantitative test</span>
            <strong>Failed</strong><span>Prediction contradicted by data (specific error documented)</span>
            <strong>MOND-shared</strong><span>RETIRED (class audited 2026-07-14/15): all three tests carrying this marker (TEST-05, TEST-09, TEST-10) dissolved on execution or adjudication — each sat on an observable controlled by one of the framework&apos;s two structural differences from MOND (bounded boost; local coupling variable), so none could actually tie. A tie badge now carries the same execution burden as a kill.</span>
            <strong>Kill Criterion Triggered</strong><span>Operational state: measured value crossed the pre-registered kill criterion threshold</span>
            <strong>Withdrawn</strong><span>Operational state: test retracted before execution due to derivation failure</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
            Full canonical definitions: <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment — Badge Definitions</Link>
          </p>
        </details>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Public Data Sources</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem' }}>
            <a href="http://astroweb.cwru.edu/SPARC/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>SPARC</a>
            <a href="https://gea.esac.esa.int/archive/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>Gaia DR3</a>
            <a href="https://www.sdss.org/dr17/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>SDSS DR17</a>
            <a href="http://egg.astro.cornell.edu/alfalfa/data/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>ALFALFA</a>
            <a href="https://www.desi.lbl.gov/the-desi-survey/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>DESI</a>
            <a href="https://www.des.ncsa.illinois.edu/releases" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>DES</a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {tests.map(t => (
            <div key={t.id} id={t.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.95rem' }}>{t.id}: {t.name}</h3>
                <span style={{ color: '#10b981', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {t.cost} / {t.time}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Data:</strong> {t.data}
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Prediction:</strong> {t.prediction}
              </p>
              <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                <strong>Kill:</strong> {t.kill}
              </p>
              {t.preregistration && (
                <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.4rem', padding: '0.4rem 0.6rem', background: 'rgba(239,68,68,0.08)', borderRadius: '4px', borderLeft: '3px solid #ef4444' }}>
                  <strong>Pre-registration status:</strong> {t.preregistration}
                </p>
              )}
              {t.alert && (
                <p style={{ color: '#f59e0b', fontSize: '0.8rem', marginTop: '0.5rem', padding: '0.5rem', background: 'rgba(245,158,11,0.1)', borderRadius: '4px', borderLeft: '3px solid #f59e0b' }}>
                  <strong>⚠ Status note:</strong> {t.alert}
                </p>
              )}
              {t.derivationHref && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <Link href={t.derivationHref} style={{ color: 'var(--color-accent-blue)' }}>
                    Derivation status &rarr;
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>

        <h2>Recommended Start</h2>
        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.05)' }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 0.5rem' }}>
            <strong style={{ color: '#ef4444' }}>RAR Transition Shape — CLOSED (2026-05-21):</strong>{' '}
            The only non-degenerate galaxy discriminating test between the Synchronism γ=2 compander and
            McGaugh&apos;s MOND interpolating function was executed on 2807 real SPARC points.
            γ=2 refuted at ΔBIC=+184 (conservative: ≈33). Free-γ fit: γ≈0.49&nbsp;=&nbsp;MOND,
            RMS identical to McGaugh. There is no γ for which the compander is both distinct from MOND and
            consistent with SPARC. <strong>Net discriminating galaxy tests vs MOND: 0, by execution.</strong>
            See <Link href="/galaxy-rotation" style={{ color: '#ef4444' }}>Galaxy Rotation: RAR Transition Shape</Link>{' '}
            and <Link href="/honest-assessment" style={{ color: '#ef4444' }}>Honest Assessment</Link>.
          </p>
        </div>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>TEST-04a: disfavored on σ₈ (2.4σ), but the registered fσ₈ kill criterion was not met at the demanded &gt;3σ (corrected 2026-07-14) — post-hoc either way.</strong> TEST-04 was withdrawn.
            Tests 01 and 05 test the same underlying prediction on different samples (count as one test).
            TEST-02 (wide binaries, Gaia DR3) remains pending — but with the compander now MOND-degenerate at all
            fitted γ values, wide-binary discrimination requires quantifying the MOND+EFE divergence first.
          </p>
          <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>EFE gap — CLOSED (2026-06-03):</strong> TEST-01, TEST-02, and TEST-05 are all environment-dependent
            predictions. MOND&apos;s External Field Effect (Bekenstein &amp; Milgrom 1984; AQUAL/QUMOND) also predicts
            environment-dependent dynamics. The compander is now known to be MOND-equivalent at its best-fit γ.
            The MOND+EFE divergence was computed on 2026-06-03 (explorer finding):
            bounded-C(a) caps the boost at ~3.17×, while ~42% of SPARC RAR points require &gt;3.17×
            (maximum observed ~34×). RAR-fit quality and EFE distinctness trade off monotonically — no
            boost ceiling fits RAR AND stays EFE-distinct from MOND. This closes the last possible EFE discriminator.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>CORRECTED 2026-07-15 — the &ldquo;MOND-shared&rdquo; class is retired.</strong> Tests 09 and 10 were
            badged MOND-shared until executed (2026-07-14/15): both are discriminators the framework loses, and both
            lose to the same boost ceiling (B ≤ 3.17) quoted in the EFE-closure note above — TEST-09&apos;s kill fired at
            slope deviation 0.41 &gt; 0.3, and 69% of SPARC galaxies exceed TEST-10&apos;s 68.5% DM-fraction ceiling.
            TEST-05&apos;s tie dissolved on adjudication (environment levers differ by ~50×–5,000×; see its row).
            The 2026-05-13 &ldquo;0 currently discriminating tests&rdquo; analysis is thereby inverted for these three:
            they discriminate <em>by structure</em> — the framework&apos;s bounded boost and local coupling variable, its only
            two differences from MOND, each force disagreement on exactly these observables. What is true post-execution:
            <strong> 0 tests remain where the framework ties MOND; the executed ones it loses.</strong> TEST-02&apos;s
            predicted amplitude remains ~80× below Gaia DR3 single-bin statistical reach (referent: Hernandez 2023-scale
            γ_g analyses, not raw astrometric systematics).
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tier-2-pilots" className="btn-primary">
            Tier 2: Pilot Experiments &rarr;
          </Link>
          <Link href="/test-catalog" className="btn-secondary">
            Back to Catalog
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/tier-1-existing" />
    </>
  );
}
