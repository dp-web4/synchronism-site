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
    prediction: 'Wide binary anomaly depends on local stellar density',
    kill: 'Anomaly independent of local density',
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
    name: 'DESI RSD fσ₈ Suppression — DISFAVORED',
    data: 'DESI DR1 (arXiv:2411.12021, Table 9 & 10)',
    cost: '$0',
    time: 'ADJUDICATED (2026-05-05)',
    prediction: 'fσ₈(z=0.51) ≈ 0.418 — a ~12% suppression below ΛCDM (0.474). Mechanism: G_local/G_global = C_cosmic/C_galactic suppresses structure growth at late times. Session 107 forecasts 1.7σ–3.2σ discrimination per DESI LRG bin.',
    kill: 'fσ₈(z=0.51) > 0.46 (rules out Synchronism at >3σ); fσ₈(z=0.51) > 0.45 disfavors at >2σ',
    alert: 'DESI DR1 RESULT (2026-05-05): Kill criterion triggered. DESI DR1 LRG1 (z=0.51) measures fσ₈ ≈ 0.55 ± 0.06 — above ΛCDM, not below it. Combined σ₈(z=0) = 0.841 ± 0.034 vs Synchronism\'s 0.76 → 2.4σ disagreement. The pattern across all LRG bins is inverted from Session 107\'s prediction: low-z bins systematically HIGH vs Sync (LRG1 +0.86σ, LRG2 +1.5σ, QSO +2.6σ). By Session 107\'s own falsification ladder ("fσ₈(z=0.51) > 0.45 → ΛCDM favored"), ΛCDM is favored at every LRG bin. See findings/desi-dr1-vs-session107-fsigma8.md and research proposal session107_disfavored_by_desi_dr1.md. Verdict: DISFAVORED at 2.4σ — pending DESI DR2 for definitive 3σ+ confirmation. No replacement test will be substituted — this was the framework\'s one live cosmological discriminator.',
  },
  {
    id: 'TEST-05',
    name: 'RAR Environment Partition',
    data: 'SPARC + density catalogs',
    cost: '$0',
    time: '2 months',
    prediction: 'RAR scatter shows NP2 environment dependence (p = 5×10⁻⁶)',
    kill: 'RAR scatter independent of Hubble type / environment',
  },
  {
    id: 'TEST-06',
    name: 'CDM σ_int with BIG-SPARC',
    data: 'Future resolved rotation curves',
    cost: '$0 (data)',
    time: '1–2 years (data availability)',
    prediction: 'σ_int remains at 0.086 dex with larger sample',
    kill: 'σ_int > 0.12 dex with N > 1000',
  },
  {
    id: 'TEST-07',
    name: 'Cosmic Interference Patterns',
    data: 'SDSS, DES, DESI surveys',
    cost: '$0',
    time: '6 months',
    prediction: 'Galaxy cluster separations show oscillatory modulation at λ ~ 500 Mpc',
    kill: 'No oscillations above 3σ out to 2000 Mpc',
    derivationHref: '/cosmic-interference',
    alert: 'Not yet a scientific prediction: the /cosmic-interference page itself states "Without it, this is not a prediction in the scientific sense — it is an exploratory hypothesis." No amplitude has been derived from γ/ρ_crit, no mechanism is specified (sound-horizon shift? phase rotation?), and there is no engagement with DESI 2024-2025 BAO results. TEST-07 does not currently qualify as a Tier 1 falsification test. It is listed here as a speculative candidate — a prediction-in-progress, not a prediction.',
  },
  {
    id: 'TEST-08',
    name: 'Freeman Law Derivation Test',
    data: 'SPARC surface brightness data',
    cost: '$0',
    time: '1 month',
    prediction: 'Σ₀ emerges from first principles with <5% error',
    kill: 'Derived Σ₀ differs from observed by >15%',
  },
  {
    id: 'TEST-09',
    name: 'BTFR Regime-Dependent Slope',
    data: 'Multi-band TFR datasets split by regime',
    cost: '$0',
    time: '3 months',
    prediction: 'BTFR slope reflects regime mix: deep-MOND sample → n ≈ 4; transition-dominated sample → n ≈ 2.75 (Session 193 full-sample fit); near-Newtonian → n → 2. Lelli 2019 n = 3.85 ± 0.09 is consistent with SPARC being deep-MOND-dominated.',
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
];

export default function Tier1Existing() {
  return (
    <>
      <Breadcrumbs currentPath="/tier-1-existing" />
      <h1>Tier 1: Existing Data</h1>
      <ValidationBadge status="untested" label="10 Tests, $0 Cost — see overlap notes" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          These 10 tests use publicly available datasets. No new hardware, no new observations.
          Just analysis. This is where Synchronism should be tested first.
        </p>

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
            <div key={t.id} className="card">
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
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Tests 01/05, 02, and 04</strong> are the most decisive. They test genuinely novel
            predictions (not reparametrizations) and can discriminate between Synchronism, MOND,
            and &#x039B;CDM. If all three fail, the framework&apos;s cosmological predictions are dead.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Note: Tests 09 and 10 are MOND-shared predictions (positive results do not discriminate Synchronism from MOND).
            Tests 01 and 05 test the same underlying prediction on different samples and should be counted as one test for
            independence purposes. The effective independent novel test count is approximately 6.
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
