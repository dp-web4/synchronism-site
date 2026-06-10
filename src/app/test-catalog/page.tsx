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
      <h1>Test Roadmap</h1>
      <ValidationBadge status="untested" label="24 Proposed Experiments" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--color-dark-border)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: 'var(--color-text-secondary)' }}>Validation Badge Guide — MRH-relationship:</strong>{' '}
          <span style={{ color: '#8b5cf6' }}>■ Active-MRH</span> — under active investigation &nbsp;|&nbsp;
          <span style={{ color: '#6366f1' }}>■ Parallel-Paths</span> — competing approaches &nbsp;|&nbsp;
          <span style={{ color: '#94a3b8' }}>■ Sidelined</span> — deprioritised &nbsp;|&nbsp;
          <span style={{ color: '#6b7280' }}>■ Superseded</span> — replaced by better framing &nbsp;|&nbsp;
          <span style={{ color: '#ef4444' }}>■ Audited-Negative</span> — closed as wrong.{' '}
          <strong style={{ color: 'var(--color-text-secondary)' }}>Descriptive:</strong>{' '}
          <span style={{ color: '#f59e0b' }}>■ Reparametrization</span> — known result in new notation &nbsp;|&nbsp;
          <span style={{ color: '#f59e0b' }}>■ Untested</span> — no data yet &nbsp;|&nbsp;
          <span style={{ color: '#94a3b8' }}>■ Speculative</span> — reasoning gap &nbsp;|&nbsp;
          <span style={{ color: '#ef4444' }}>■ Failed</span> — falsified by data.{' '}
          <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-text-muted)' }}>
            Canonical definitions →
          </Link>
        </div>
        <div style={{
          background: 'rgba(239, 68, 68, 0.07)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Pre-registration status:</strong>{' '}
          None of these 24 experiments have been formally pre-registered before the data was available.
          This means results cannot be treated as prospective predictions &mdash; they are retrospective
          consistency checks until a kill criterion is publicly registered <em>before</em> the relevant
          dataset is analyzed.{' '}
          <Link href="/research-philosophy#prediction-audit-trail" style={{ color: '#ef4444' }}>
            See the prediction audit trail →
          </Link>
        </div>
        <p>
          Synchronism has defined 24 specific, falsifiable experiments organized into four tiers
          by cost and feasibility. Every experiment has an explicit kill criterion &mdash; a result
          that would falsify the prediction. This page covers <em>proposed</em> tests; for results
          on what has actually been analyzed, see below.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Tests are numbered TEST-01 through TEST-10 on the{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 page</Link>{' '}
          (each test card has an anchor: e.g., <code style={{ fontSize: '0.8rem' }}>/tier-1-existing#TEST-04a</code>).
          Cross-references elsewhere on the site to TEST-NN resolve directly to those cards.
        </p>

        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{ fontSize: '1rem', margin: '0 0 0.75rem', color: '#10b981' }}>
            What&apos;s Already Been Analyzed
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            The &ldquo;0 Completed&rdquo; count below refers to the 24 proposed experiments above — none have been
            run as formal pre-registered tests. Separately, the framework has been checked against existing
            datasets with these results:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem', paddingLeft: '1.25rem' }}>
            <li><strong>RAR transition shape</strong> (2807 SPARC points, 2026-05-21): γ=2 compander refuted at ΔBIC=+184; free-γ=0.49=MOND — <span style={{ color: '#ef4444' }}>FAILED (γ=2); collapses to MOND at fitted γ. Net discriminating galaxy tests vs MOND: 0.</span></li>
            <li><strong>Galaxy rotation</strong> (14,760 galaxies, SPARC + ALFALFA-SDSS): qualitative curve match — <span style={{ color: '#f59e0b' }}>MOND reparametrization</span>, not novel</li>
            <li><strong>TEST-03 TFR scatter</strong> (same SPARC data): R&sup2; = 0.14 &lt; 20% kill threshold — <span style={{ color: '#ef4444' }}>FAILED</span></li>
            <li><strong>DESI fσ₈ (TEST-04a)</strong>: post-hoc retrodiction, kill criterion triggered — <span style={{ color: '#ef4444' }}>DISFAVORED ~2σ</span> <span style={{ color: 'var(--color-text-muted)' }}>(corrected 2026-05-26; LRG1 fσ₈/(fσ₈)_fid=1.16±0.13; σ₈=0.841 vs predicted 0.76; prior &ldquo;non-discriminating&rdquo; correction was itself an error)</span></li>
            <li><strong>Chemistry boundary consistency</strong> (1,703 phenomena): 89% consistent — <span style={{ color: '#f59e0b' }}>calibration set, not blind test</span></li>
            <li><strong>Superconductivity (η factor)</strong>: reproduces Abrikosov-Gor&apos;kov formula — <span style={{ color: '#f59e0b' }}>reparametrization</span></li>
            <li><strong>Born rule</strong>: reproduces |α|² via coherence conservation — <span style={{ color: '#f59e0b' }}>reparametrization</span> (no deviation predicted)</li>
          </ul>
          <Link href="/honest-assessment" style={{ color: '#10b981', fontSize: '0.85rem' }}>
            Full ledger: wins, failures, and reparametrizations &rarr;
          </Link>
        </div>

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '0.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#f59e0b' }}>24</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Proposed</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#ef4444' }}>0</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Pre-registered &amp; Completed</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#10b981' }}>10</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Zero Cost</p>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
          The &ldquo;Pre-registered &amp; Completed: 0&rdquo; counts only tests whose kill criterion was registered
          <em> before</em> the relevant dataset was analyzed. This is distinct from the retrospective analyses
          in the &ldquo;What&apos;s Already Been Analyzed&rdquo; box above (galaxy rotation, chemistry, TEST-03/04a).
          Those analyses produced results, but they were not pre-registered prospective predictions.
        </p>

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
