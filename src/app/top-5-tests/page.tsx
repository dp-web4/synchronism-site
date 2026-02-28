'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tests = [
  {
    rank: 1,
    name: 'BAO (Baryon Acoustic Oscillation) Coherence Modulation',
    id: 'TEST-04',
    tier: 'Tier 1',
    cost: '$0',
    why: 'Standard cosmology predicts zero density dependence of BAO peak position. Synchronism predicts ~10⁻⁴ shift. This is a clean discriminator with no ambiguity.',
    kill: 'BAO identical everywhere to 10⁻⁵ precision',
    color: '#10b981',
  },
  {
    rank: 2,
    name: 'Wide Binary Density Dependence',
    id: 'TEST-02',
    tier: 'Tier 1',
    cost: '$0',
    why: 'MOND (Modified Newtonian Dynamics) predicts density-independent anomaly. Synchronism predicts density-dependent. Uses existing Gaia DR3 data. The cleanest test of environment dependence.',
    kill: 'Anomaly independent of local stellar density',
    color: '#10b981',
  },
  {
    rank: 3,
    name: 'EEG (Electroencephalography) Anesthesia Phase Transition',
    id: 'TEST-11',
    tier: 'Tier 2',
    cost: '$150K',
    why: 'Tests the most striking consciousness prediction: consciousness loss is a phase transition, not gradual decline. If the threshold is universal, the entire consciousness framework has empirical support.',
    kill: 'Consciousness loss is gradual with no threshold clustering',
    color: 'var(--color-accent-blue)',
  },
  {
    rank: 4,
    name: 'Gravitational Wave Speed–Dark Matter Column Correlation',
    id: 'TEST-15',
    tier: 'Tier 3',
    cost: '$1M–$5M',
    why: 'General relativity predicts exactly zero correlation between gravitational wave (GW) propagation and dark matter distribution. Any nonzero signal would be revolutionary. From GW170817: α < 3.0 × 10⁻¹⁵.',
    kill: 'No correlation at 10⁻¹⁶ level after 20+ events',
    color: 'var(--color-accent-violet)',
  },
  {
    rank: 5,
    name: 'Cosmic Interference Patterns',
    id: 'TEST-07',
    tier: 'Tier 1',
    cost: '$0',
    why: 'Unique to Synchronism. No other framework predicts oscillatory modulation in galaxy cluster separations at λ ~ 500 Mpc. If found, it would be strong evidence for the coherence interpretation.',
    kill: 'No oscillations above 3σ out to 2000 Mpc',
    color: '#10b981',
  },
];

export default function Top5Tests() {
  return (
    <>
      <Breadcrumbs currentPath="/top-5-tests" />
      <h1>Top 5 Decisive Tests</h1>
      <ValidationBadge status="untested" label="Most Discriminating" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Of the 24 defined experiments, these five have the highest <strong>distinguishing
          power</strong> &mdash; they can discriminate between Synchronism, &#x039B;CDM (Lambda Cold Dark Matter), MOND,
          and standard frameworks. Ranked by decisiveness.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {tests.map(t => (
            <div key={t.id} className="card">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '2rem',
                  fontFamily: 'monospace',
                  color: 'var(--color-accent-violet)',
                  lineHeight: 1,
                  minWidth: '2rem',
                  textAlign: 'center',
                }}>
                  {t.rank}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem' }}>{t.name}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: t.color, fontFamily: 'monospace', fontSize: '0.8rem' }}>{t.tier}</span>
                      <span style={{ color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: '0.8rem' }}>{t.cost}</span>
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {t.why}
                  </p>
                  <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                    <strong>Kill:</strong> {t.kill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>The Strategy</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Three of the top five are Tier 1 (zero cost). Start there. If all three fail,
            Synchronism&apos;s cosmological predictions are dead and no further investment is
            warranted. If any succeed, they fund the case for TEST-11 (EEG, $150K) and
            eventually TEST-15 (GW correlation, $1M+).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            This is how science should work: cheapest tests first, escalate only on success.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/publication-roadmap" className="btn-primary">
            Publication Roadmap &rarr;
          </Link>
          <Link href="/test-catalog" className="btn-secondary">
            Full Catalog
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/top-5-tests" />
    </>
  );
}
