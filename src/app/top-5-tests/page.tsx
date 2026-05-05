'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tests = [
  {
    rank: 1,
    name: 'DESI RSD fσ₈ Suppression',
    id: 'TEST-04a',
    tier: 'Tier 1',
    cost: '$0',
    why: 'Session 107 predicts fσ₈(z=0.51) ≈ 0.418, a ~12% suppression below ΛCDM (0.474). Mechanism: G_local/G_global suppresses late-time structure growth. DESI DR1 data already published — this test can be run today. Forecast: 3.1σ per LRG bin, 6.6σ combined at DESI Final. Replaces withdrawn TEST-04 (BAO modulation — contradicted by Session 107; see /bao-coherence-modulation).',
    kill: 'fσ₈(z=0.51) > 0.46 rules out Synchronism at >3σ',
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
    why: 'GW170817 already constrains Synchronism to GR-equivalent at |α| < 3.0 × 10⁻¹⁵ (Baker et al. 2017). Synchronism is consistent with GR\'s exact-zero prediction — meaning this constraint was passed vacuously. This test discriminates only if Synchronism predicts a positive signal above zero, which it does not currently. Listed to track if a positive-signal prediction is added.',
    kill: 'No correlation at 10⁻¹⁶ level after 20+ events',
    color: 'var(--color-accent-violet)',
  },
  {
    rank: 5,
    name: 'Cosmic Interference Patterns',
    id: 'TEST-07',
    tier: 'Tier 1*',
    cost: '$0',
    why: 'Candidate only — derivation pending. The ~500 Mpc scale has not been derived from the framework\'s parameters. The /cosmic-interference page explicitly states "this is not a prediction in the scientific sense." Listed here to track progress; if the scale is derived from first principles, it would be unique to Synchronism. Until then, not yet a decisive test.',
    kill: 'No oscillations above 3σ out to 2000 Mpc',
    color: '#f59e0b',
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

        <h3 style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
          Active discriminating tests
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {tests.filter(t => t.rank <= 3).map(t => (
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

        <h3 style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Tracked — not yet active (derivation or signal pending)
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          These are on the radar but do not currently meet the bar for &ldquo;decisive test&rdquo; — either no amplitude has been derived from the framework&apos;s parameters, or the test has already been superseded by existing data.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {tests.filter(t => t.rank > 3).map(t => (
            <div key={t.id} className="card" style={{ opacity: 0.75, borderLeft: '3px solid #f59e0b' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '2rem',
                  fontFamily: 'monospace',
                  color: '#f59e0b',
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
                      <span style={{ color: '#f59e0b', fontFamily: 'monospace', fontSize: '0.8rem' }}>Candidate</span>
                      <span style={{ color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: '0.8rem' }}>{t.tier}</span>
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
            Two decisive tests are Tier 1 (TEST-04, TEST-02 — zero cost, existing data).
            Start there. If both fail, Synchronism&apos;s cosmological predictions are dead and
            no further investment is warranted. If any succeed, they fund the case for TEST-11
            (EEG, $150K).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            This is how science should work: cheapest tests first, escalate only on success.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            * TEST-15 (GW correlation, #4) was already constrained by GW170817 (Baker+ 2017);
            it moves from &ldquo;future test&rdquo; to &ldquo;monitoring&rdquo; until a positive-signal prediction is added.
            TEST-07 (Cosmic Interference, #5) has no derivation yet &mdash; it is a candidate, not a current prediction.
            <Link href="/cosmic-interference" style={{ color: 'var(--color-accent-blue)', marginLeft: '0.25rem' }}>See derivation status &rarr;</Link>
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
