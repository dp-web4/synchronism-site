'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tests = [
  {
    id: 'TEST-01',
    name: 'SPARC Environment Dependence',
    data: 'SPARC (175 galaxies)',
    cost: '$0',
    time: '6 weeks',
    prediction: 'Rotation curve residuals correlate with local galaxy density',
    kill: 'No correlation between residuals and environment at 2σ',
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
  },
  {
    id: 'TEST-04',
    name: 'BAO Coherence Modulation',
    data: 'DESI, SDSS DR17, Euclid',
    cost: '$0',
    time: '6 months',
    prediction: 'BAO peak shifts ~10⁻⁴ between high/low-density regions',
    kill: 'BAO identical everywhere to 10⁻⁵ precision',
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
    name: 'BTFR Exponent Universality',
    data: 'Multi-band TFR datasets',
    cost: '$0',
    time: '3 months',
    prediction: 'BTFR exponent n ≈ 2.2 universal across bands',
    kill: 'Exponent varies by >0.3 across bands',
  },
  {
    id: 'TEST-10',
    name: 'Dwarf Galaxy DM Dominance',
    data: 'LITTLE THINGS + SPARC dwarfs',
    cost: '$0',
    time: '2 months',
    prediction: 'DM fraction → 100% for M_bar < 10⁸ M☉',
    kill: 'Baryon-dominated dwarfs below 10⁸ M☉ exist',
  },
];

export default function Tier1Existing() {
  return (
    <>
      <Breadcrumbs currentPath="/tier-1-existing" />
      <h1>Tier 1: Existing Data</h1>
      <ValidationBadge status="untested" label="10 Tests, $0 Cost" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          These 10 tests use publicly available datasets. No new hardware, no new observations.
          Just analysis. This is where Synchronism should be tested first.
        </p>

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
            </div>
          ))}
        </div>

        <h2>Recommended Start</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Tests 01, 02, and 04</strong> are the most decisive. They test genuinely novel
            predictions (not reparametrizations) and can discriminate between Synchronism, MOND,
            and &#x039B;CDM. If all three fail, the framework&apos;s cosmological predictions are dead.
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
