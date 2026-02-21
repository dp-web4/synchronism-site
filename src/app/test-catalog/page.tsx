'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tiers = [
  {
    tier: 'Tier 1: Existing Data',
    count: 10,
    cost: '$0',
    time: '1–6 months',
    color: '#10b981',
    href: '/tier-1-existing',
    desc: 'Reanalysis of public datasets (Gaia DR3, SPARC, SDSS, DESI). No new hardware needed.',
  },
  {
    tier: 'Tier 2: Pilot Experiments',
    count: 4,
    cost: '$50K–$500K',
    time: '6–24 months',
    color: 'var(--color-accent-blue)',
    href: '/tier-2-pilots',
    desc: 'Small-scale experiments: EEG studies, circadian rhythm monitoring, QC coherence tests.',
  },
  {
    tier: 'Tier 3: Major Experiments',
    count: 7,
    cost: '$1M–$10M',
    time: '2–5 years',
    color: 'var(--color-accent-violet)',
    href: '/tier-3-major',
    desc: 'Dedicated facilities: gravitational wave correlation, multi-messenger astronomy, controlled decoherence.',
  },
  {
    tier: 'Tier 4: Frontier',
    count: 3,
    cost: '$10M+',
    time: '5+ years',
    color: '#f59e0b',
    href: '/tier-4-frontier',
    desc: 'Pushing technology limits: minimal cell γ mapping, cosmic interference detection, consciousness in AI.',
  },
];

export default function TestCatalog() {
  return (
    <>
      <Breadcrumbs currentPath="/test-catalog" />
      <h1>Test Catalog</h1>
      <ValidationBadge status="untested" label="24 Experiments Defined" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism has defined 24 specific, falsifiable experiments organized into four tiers
          by cost and feasibility. Every experiment has an explicit kill criterion &mdash; a result
          that would falsify the prediction.
        </p>

        <h2>Overview by Tier</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {tiers.map(t => (
            <Link key={t.tier} href={t.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3>{t.tier}</h3>
                  <span style={{ color: t.color, fontFamily: 'monospace', fontSize: '0.85rem' }}>
                    {t.count} tests
                  </span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {t.desc}
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                  Cost: {t.cost} &nbsp;&bull;&nbsp; Timeline: {t.time}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <h2>Recommendation</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Start with zero-cost Tier 1 tests.</strong> The BAO coherence modulation,
            wide binary density dependence, and SPARC environment analysis can all be done with
            existing public data. If these fail, no further investment is needed. If they succeed,
            they build the case for Tier 2 pilot experiments.
          </p>
        </div>

        <h2>Status</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#f59e0b' }}>24</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Defined</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#ef4444' }}>0</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Completed</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#10b981' }}>10</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Zero Cost</p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tier-1-existing" className="btn-primary">
            Tier 1: Existing Data &rarr;
          </Link>
          <Link href="/top-5-tests" className="btn-secondary">
            Top 5 Decisive Tests
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/test-catalog" />
    </>
  );
}
