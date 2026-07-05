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
    alert: 'Kill criterion TRIGGERED — literal reading: R² = 0.14 (environmental term explains 14% of total RAR scatter) is below the <20% threshold stated in the kill criterion. Under a literal reading, this test is FAILED. It remains listed here rather than on /honest-assessment only because the denominator may be mis-stated (kill criterion may have been intended against MOND-residual scatter, not total scatter) — a distinction that changes the verdict. Until the denominator is audited against the archive source, treat TEST-03 as presumptively failed. See research proposal test03_kill_criterion_self_trigger.md.',
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
    name: 'DESI RSD fσ₈ — Post-hoc Retrodiction, Disfavored on Amplitude (Reframed 2026-07-02)',
    data: 'DESI DR1 (arXiv:2411.12021, Table 9 & 10)',
    cost: '$0',
    time: 'ADJUDICATED (2026-05-05)',
    prediction: 'fσ₈(z=0.51) ≈ 0.418 — a ~12% suppression below ΛCDM (0.474). Mechanism: G_local/G_global = C_cosmic/C_galactic suppresses structure growth at late times. Session 107 forecasts 1.7σ–3.2σ discrimination per DESI LRG bin.',
    kill: 'fσ₈(z=0.51) > 0.46 (rules out Synchronism at >3σ); fσ₈(z=0.51) > 0.45 disfavors at >2σ',
    preregistration: 'Post-hoc retrodiction — σ₈ calibrated to lensing S₈ tension in Session 102; propagated to DESI fσ₈ in Session 107 (committed 2025-12-10); DESI DR1 published April 2024. Status (reframed 2026-07-02): disfavored 2.4σ on σ₈ amplitude — kill criterion triggered.',
    alert: 'CURRENT VERDICT (reframed 2026-07-02): post-hoc retrodiction — disfavored 2.4σ on σ₈ AMPLITUDE. DESI DR1 full-shape (arXiv:2411.12021) combined σ₈ = 0.841 ± 0.034 (Table 10) vs Synchronism\'s predicted σ₈ ≈ 0.76: the predicted suppression is absent. Kill criterion (fσ₈ > 0.46) triggered; data ΛCDM-consistent. The load-bearing statistic is the ensemble amplitude, NOT direction: the LRG1 (z=0.51) fσ₈/(fσ₈)_fid = 1.16 ± 0.13 "enhancement" is a single ~1.2σ bin the DESI collaboration does not treat as robust, and the DR1 ensemble growth index γ_growth ≈ 0.58 ± 0.11 (above GR\'s 0.545) leans mildly toward suppression — the framework\'s own predicted direction. A "wrong direction" framing would be fragile against DR2; the amplitude framing is the defensible one. (Independently converged: 2026-06-24 explorer, 2026-07-01 explorer re-execution, 2026-07-02 + 2026-07-03 visitor Pass 4 researcher reads.) DR2 full-shape growth constraints remain unpublished (~Spring 2027). HISTORY — CORRECTED 2026-05-26 (previous 2026-05-25 "correction" was itself an error): LIKE-FOR-LIKE single-bin fσ₈ comparison: predicted fσ₈ ≈ 0.418; LRG1 observed fσ₈ ≈ 1.16 × 0.474 ≈ 0.55 — gap ~2σ (single-bin, qualified — see current verdict). SEPARATE σ₈ comparison: 2.4σ (ensemble, robust). These are two different observables — do not compare the 0.418 fσ₈ prediction to the 0.841 σ₈ observation directly. The 0.4497 ± 0.0548 figure cited in the 2026-05-25 edit belongs to arXiv:2512.03230 (DESI Peculiar Velocity Survey, z≈0.07) — a different survey misattributed to the z=0.51 full-shape slot. Note: the "mechanism-class sign reversal / transferable contribution" characterization is NOT restored — that was an overstatement; this is a post-hoc test. CONTEXT (2026-05-23): EFTofLSS analyses (Cabass, Simonović, Zaldarriaga et al. 2024-2025) explain DESI DR1 fσ₈ within ΛCDM at 1-2σ. CURRENCY (2026-06-11): this verdict is frozen at DR1 — DR2 growth has not been re-run against the kill criterion. RE-OPEN POLICY (2026-06-12): the verdict would unfreeze only if DR2 full-shape reported fσ₈(z≈0.5) ≤ 0.46 (back under the kill threshold). A DR2 value at or above DR1\'s would not change the verdict, only deepen it; no DR2 outcome can convert a post-hoc retrodiction into a prospective success. FRAMING: predicting σ₈ ≈ 0.76 in late 2025 was a bet that the S8 lensing tension (KiDS/DES) was physical; KiDS-Legacy and DESI full-shape have since moved against that camp. The failure is a documented bet on a tension that dissolved — which is what makes the mechanism-class reading (any coherence-damped growth-suppression framework sits in the same disfavored box) a statement about a real corner of the literature, not just this framework.',
  },
  {
    id: 'TEST-05',
    name: 'RAR Environment Partition',
    data: 'SPARC + density catalogs',
    cost: '$0',
    time: '2 months',
    prediction: 'RAR scatter shows NP2 environment dependence (p = 5×10⁻⁶)',
    kill: 'RAR scatter independent of Hubble type / environment',
    alert: 'Same verdict as TEST-03: p=5×10⁻⁶ and R²=0.14 (TEST-03 result) are from the same underlying regression. The p-value indicates the effect is real; the R² indicates it is below the kill criterion. A significant-but-small effect (R²=0.14) that fails the pre-registered kill threshold (<20%) is a failure by effect size, not a discovery. TEST-05 should not be read as "open" or "Untested" — the environment-RAR dependence exists but is sub-threshold. Verdict: same as TEST-03 — presumptively failed by kill criterion.',
  },
  {
    id: 'TEST-06',
    name: 'CDM σ_int with BIG-SPARC',
    data: 'Future resolved rotation curves',
    cost: '$0 (data)',
    time: '1–2 years (data availability)',
    prediction: 'σ_int remains at 0.086 dex with larger sample',
    kill: 'σ_int > 0.12 dex with N > 1000',
    alert: 'Pipeline-dependence caveat (2026-07-04): Lelli et al. 2019 (MNRAS 484, 3267) report BTFR orthogonal intrinsic scatter on the same galaxy population ranging 0.026–0.070 dex depending solely on which velocity definition is used (V_flat vs. W_P20 vs. V_max vs. V_2.2). A single-pipeline σ_int value is not a fixed target — the kill threshold should be read against that ~3× pipeline-dependent range, not as a precise number. See CDM Discrimination for the corrected CDM verdict (z = +0.5, CDM-consistent) this test is downstream of.',
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
    alert: 'SHOULD BE DEMOTED TO TIER-2 (2026-05-17): This does not qualify as a Tier 1 falsification test. The /cosmic-interference page itself states "Without a derivation, this is not a prediction in the scientific sense — it is an exploratory hypothesis." No amplitude has been derived from γ or ρ_crit. No mechanism is specified (sound-horizon shift? phase rotation? coherence interference?). No engagement with DESI 2024-2025 BAO results. No kill criterion is physically meaningful without an amplitude. Including it in Tier 1 inflates the discriminating-test count. Retained here for continuity — recommended: promote to Tier 2 (exploratory hypothesis) pending derivation.',
  },
  {
    id: 'TEST-08',
    name: 'Freeman Law Derivation Test',
    data: 'SPARC surface brightness data',
    cost: '$0',
    time: '1 month',
    prediction: 'Σ₀ emerges from first principles with <5% error',
    kill: 'Derived Σ₀ differs from observed by >15%',
    alert: 'RECLASSIFIED (see /honest-assessment): Σ₀ = cH₀/(4π²G) is the unique surface-density scale buildable from the cosmological constants c, H₀, G — the same dimensional identity class as a₀ = cH₀/(2π). Any framework that imports these constants recovers the same relation. The 12% agreement with Freeman\'s observed value (124 M☉/pc²) is consistent with dimensional analysis, not a framework-specific prediction. Classified: Reparametrization — Dimensional Identity.',
  },
  {
    id: 'TEST-09',
    name: 'BTFR Regime-Dependent Slope',
    data: 'Multi-band TFR datasets split by regime',
    cost: '$0',
    time: '3 months',
    prediction: 'BTFR slope reflects regime mix: deep-MOND sample → n ≈ 4; transition-dominated sample → n ≈ 2.75 (Session 193 full-sample fit); near-Newtonian → n → 2. Lelli 2019 n = 3.85 ± 0.09 confirms the MOND-shared slope for a SPARC-like deep-MOND-dominated sample. Note: 3.85 ± 0.09 is ~1.7σ from asymptotic MOND\'s n=4, so it confirms the direction but not the exact MOND prediction either — regime-dependence adds no discriminating content.',
    kill: 'A single sample produces a BTFR slope inconsistent with its regime-mix prediction by > 0.3',
    alert: 'Restated 2026-04-24: the earlier prediction "n ≈ 2.2 universal across bands" had no archive source — it was a site→archive transcription error (Session 193 actually predicts n = 2.75 for transition-heavy samples, or regime-dependent: n → 4 deep-MOND, n → 2 near-Newton). Lelli 2019\'s n = 3.85 is consistent with the archive\'s per-regime prediction for a SPARC-like deep-MOND-dominated sample, not a refutation. MOND-shared flag: the regime-dependent BTFR slope (n → 4 in deep-MOND, n → 2 near-Newtonian) is a textbook MOND signature (Milgrom 1983, McGaugh 2012). A positive result is consistent with Synchronism AND standard MOND — it cannot discriminate between them.',
  },
  {
    id: 'TEST-10',
    name: 'Dwarf Galaxy DM Dominance',
    data: 'LITTLE THINGS + SPARC dwarfs',
    cost: '$0',
    time: '2 months',
    prediction: 'DM fraction → 100% for M_bar < 10⁸ M☉',
    kill: 'Baryon-dominated dwarfs below 10⁸ M☉ exist',
    alert: 'MOND-shared flag: dwarfs below 10⁸ M☉ are deep-MOND systems where standard MOND already predicts the rotation is dominated by the Milgrom term — equivalent to near-100% apparent DM fraction in Newtonian terms. A positive result confirms Synchronism and MOND equally; only a null (baryon-dominated dwarfs below 10⁸ M☉) discriminates. The kill criterion is sharp; the confirm criterion is not.',
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
            <strong>MOND-shared</strong><span>Operational state: positive result confirms Synchronism AND MOND; only a null discriminates</span>
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
            <strong>TEST-04a: kill criterion triggered — closed (post-hoc retrodiction; corrected 2026-05-26).</strong> TEST-04 was withdrawn.
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
            Tests 09 and 10 are MOND-shared predictions. The 2026-05-13 analysis found <strong>0 currently discriminating tests from MOND+EFE+ΛCDM</strong>: TEST-01/05 are MOND-EFE-shared in direction with amplitudes ~120× below SPARC reach; TEST-02 has a structurally distinct direction but predicted amplitude ~80× below Gaia DR3 reach. The EFE closure (2026-06-03) confirms the effective discriminating test count is <strong>0</strong> — no parameter value makes these tests discriminate.
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
