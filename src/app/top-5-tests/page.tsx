'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const activeTests = [
  {
    rank: 1,
    name: 'Wide Binary Density Dependence',
    id: 'TEST-02',
    tier: 'Tier 1',
    cost: '$0',
    why: 'Synchronism predicts the wide-binary gravitational anomaly is stronger in denser environments — density-dependent rather than constant. Uses existing Gaia DR3 data. EFE caveat: MOND\'s External Field Effect (Bekenstein-Milgrom 1984; AQUAL/QUMOND) also predicts environment-dependent dynamics. For TEST-02 to be a true discriminator, the predicted functional form ξ(ρ_ext) from Synchronism must quantitatively differ from the EFE prediction. This comparison has not yet been computed. Until it is, label this test as "possibly MOND+EFE degenerate."',
    kill: 'Anomaly independent of local stellar density — or identical in functional form to standard MOND+EFE',
    color: '#10b981',
    note: null,
  },
  {
    rank: 2,
    name: 'EEG Anesthesia Phase Transition',
    id: 'TEST-11',
    tier: 'Tier 2',
    cost: '$150K',
    why: 'Tests the most striking consciousness prediction: consciousness loss is a phase transition, not a gradual decline. If the threshold is universal, the entire consciousness framework gains empirical grounding. The D and S parameters in the consciousness equation are not yet operationally defined — this test would force that gap to close.',
    kill: 'Consciousness loss is gradual with no threshold clustering',
    color: 'var(--color-accent-blue)',
    note: null,
  },
];

const pendingTests = [
  {
    rank: 3,
    name: 'Gravitational Wave Speed–Dark Matter Column Correlation',
    id: 'TEST-15',
    tier: 'Tier 3',
    cost: '$1M–$5M',
    why: 'GW170817 already constrains Synchronism to GR-equivalent at |α| < 3.0 × 10⁻¹⁵ (Baker et al. 2017). Synchronism is consistent with GR\'s exact-zero prediction — meaning this constraint was passed vacuously. This test discriminates only if Synchronism predicts a positive signal above zero, which it does not currently. Listed to track if a positive-signal prediction is added.',
    kill: 'No correlation at 10⁻¹⁶ level after 20+ events',
    color: 'var(--color-accent-violet)',
  },
  {
    rank: 4,
    name: 'Cosmic Interference Patterns',
    id: 'TEST-07',
    tier: 'Tier 1*',
    cost: '$0',
    why: 'Candidate only — derivation pending. The ~500 Mpc scale has not been derived from the framework\'s parameters. The /cosmic-interference page explicitly states "this is not a prediction in the scientific sense." Listed here to track progress; if the scale is derived from first principles, it would be unique to Synchronism. Until then, not yet a decisive test.',
    kill: 'No oscillations above 3σ out to 2000 Mpc',
    color: '#f59e0b',
  },
];

const closedTests = [
  {
    id: 'TEST-04a',
    name: 'DESI RSD fσ₈ Suppression',
    status: 'DISFAVORED 2.4σ on σ₈ — ~1.5σ on Registered fσ₈ (corrected 2026-07-14)',
    verdict: 'Session 107 predicted fσ₈(z=0.51) ≈ 0.418 (suppression), kill criterion fσ₈ > 0.46 for >3σ. DESI DR1 full-shape (arXiv:2411.12021): LRG1 fσ₈/(fσ₈)_fid = 1.16 ± 0.13 → fσ₈ = 0.550 ± 0.062 — exceeds 0.46 by only ~1.5σ, short of the registered >3σ. Combined σ₈ = 0.841 ± 0.034 gives a 2.4σ tension, but σ₈ is a different, GR-conditioned statistic — using it to falsify a modified-growth model risks circularity. DESI\'s own modified-gravity analysis (Ishak et al. arXiv:2411.12026) gives a weaker verdict (μ₀ within 1σ of zero). Honest verdict: post-hoc either way; the test as registered lacked the power to discriminate this framework from GR. See /tier-1-existing and /honest-assessment for the full correction.',
  },
  {
    id: 'TEST-04',
    name: 'BAO Coherence Modulation',
    status: 'WITHDRAWN — Internal Contradiction',
    verdict: 'Framework\'s own Session 107 forecasts BAO matches ΛCDM at 0.0% — the sound horizon is set at z~1100 when C ≈ 1 everywhere. The 10⁻⁴ modulation number had no session-level derivation.',
  },
];

export default function Top5Tests() {
  return (
    <>
      <Breadcrumbs currentPath="/top-5-tests" />
      <PathNav currentPath="/top-5-tests" />
      <h1>Top Decisive Tests</h1>
      <ValidationBadge status="untested" label="Most Discriminating — Updated 2026-05-13" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Of the defined experiments, these have the highest <strong>distinguishing
          power</strong> &mdash; tests that can discriminate between Synchronism and existing frameworks.
          Two predictions have now closed: one is disfavored 2.4σ on σ₈ amplitude but the registered fσ₈ kill criterion fell short of its own &gt;3σ bar (post-hoc; corrected 2026-07-14), one withdrawn by internal contradiction.
        </p>

        <div style={{
          background: 'rgba(245,158,11,0.07)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Referee note:</strong>{' '}
          For a test to decisively discriminate, it needs both (a) a derived quantitative prediction
          from the framework&apos;s parameters and (b) a prediction that differs numerically from MOND+EFE.
          Of the tests listed below, <strong>none currently satisfies both conditions</strong>:
          TEST-02 has no computed ξ(ρ) functional form, so MOND+EFE degeneracy is unresolved;
          TEST-11 (consciousness) has undefined D and S parameters;
          TEST-07 has no derived amplitude;
          TEST-15 is monitoring-only.
          These are aspirations with the highest discrimination potential &mdash; not confirmed discriminators.
        </div>

        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Scorecard (2026-05-13):</strong>{' '}
          Confirmed: <strong>0</strong> &nbsp;|&nbsp;
          Disfavored 2.4σ (σ₈ amplitude): <strong>1</strong> (TEST-04a post-hoc, kill triggered; reframed 2026-07-02) &nbsp;|&nbsp;
          Withdrawn: <strong>1</strong> (TEST-04 internal contradiction) &nbsp;|&nbsp;
          Active: <strong>1 discriminating</strong> (TEST-02, EFE-degeneracy caveat pending) &nbsp;|&nbsp;
          Monitoring: <strong>1</strong> (TEST-07 no derivation) &nbsp;|&nbsp;
          New domains: <strong>1 untested</strong> (TEST-11 consciousness)
        </div>

        <h3 style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
          Active discriminating tests
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {activeTests.map(t => (
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
          Tracked — derivation or signal pending
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          On the radar but not yet decisive: either no amplitude has been derived from the framework&apos;s parameters, or the test has already been superseded.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {pendingTests.map(t => (
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

        <h3 style={{ fontSize: '0.95rem', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Closed predictions
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {closedTests.map(t => (
            <div key={t.id} className="card" style={{ borderLeft: '3px solid #ef4444', opacity: 0.8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                <h3 style={{ fontSize: '0.95rem' }}>{t.id}: {t.name}</h3>
                <span style={{ color: '#ef4444', fontFamily: 'monospace', fontSize: '0.75rem', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{t.status}</span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>{t.verdict}</p>
            </div>
          ))}
        </div>

        <h2>The Strategy</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            With TEST-04 withdrawn and TEST-04a disfavored 2.4σ on σ₈ amplitude / kill triggered (reframed 2026-07-02), the immediate discriminating work shifts to
            TEST-02 (wide binaries, Gaia DR3 — zero cost). But TEST-02 needs a critical prerequisite:
            compute the MOND+EFE prediction for the same observable and show where Synchronism diverges
            numerically. Without that, a positive TEST-02 result cannot distinguish the frameworks.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            Cheapest tests first. TEST-02 is zero-cost analysis. TEST-11 (EEG, $150K) is next only on a
            positive TEST-02 result.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            * TEST-15 (GW correlation) was already constrained by GW170817 — monitoring only until a positive-signal prediction is added.
            TEST-07 (500 Mpc Cosmic Interference) has no derivation — candidate only.
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
