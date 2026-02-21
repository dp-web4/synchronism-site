'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const examples = [
  {
    prediction: 'BAO peak shift between high/low-density regions',
    kill: 'BAO identical everywhere to 10⁻⁵ precision',
    tier: 'Tier 1',
  },
  {
    prediction: 'Wide binary anomaly depends on local stellar density',
    kill: 'Anomaly independent of local density',
    tier: 'Tier 1',
  },
  {
    prediction: 'Anesthesia shows sharp phase transition at C ≈ 0.50',
    kill: 'Gradual consciousness loss with no discontinuity',
    tier: 'Tier 2',
  },
  {
    prediction: 'GW arrival time correlates with DM column density',
    kill: 'No correlation at 10⁻¹⁶ level',
    tier: 'Tier 3',
  },
  {
    prediction: 'Galaxy cluster separations show oscillatory modulation',
    kill: 'No oscillations above 3σ out to 2000 Mpc',
    tier: 'Tier 1',
  },
  {
    prediction: 'EEG phase coherence shows discontinuity during propofol induction',
    kill: 'Smooth, continuous coherence decline',
    tier: 'Tier 2',
  },
];

export default function Falsifiability() {
  return (
    <>
      <Breadcrumbs currentPath="/falsifiability" />
      <h1>Falsifiability</h1>
      <ValidationBadge status="validated" label="Core Principle" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          Every prediction has a kill criterion. If you can&apos;t state what would
          falsify your claim, it&apos;s not science.
        </blockquote>
        <p>
          Synchronism follows Popper&apos;s demarcation criterion strictly. Every testable
          prediction comes with an explicit statement of what result would kill it. Predictions
          that can&apos;t be falsified are labeled &ldquo;speculative&rdquo; or
          &ldquo;philosophical&rdquo; &mdash; never &ldquo;confirmed.&rdquo;
        </p>

        <h2>Kill Criteria Examples</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {examples.map(e => (
            <div key={e.prediction} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <p style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem', flex: 1, marginRight: '1rem' }}>
                  <strong>Prediction:</strong> {e.prediction}
                </p>
                <span style={{ color: 'var(--color-accent-violet)', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {e.tier}
                </span>
              </div>
              <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                <strong>Kill:</strong> {e.kill}
              </p>
            </div>
          ))}
        </div>

        <h2>What&apos;s NOT Falsifiable (and We Say So)</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Free will interpretation</strong> &mdash; philosophical framework, no testable prediction distinct from standard neuroscience</li>
          <li><strong>Identity as coherence pattern</strong> &mdash; unfalsifiable with current technology</li>
          <li><strong>AI consciousness</strong> &mdash; requires consciousness measurement we don&apos;t have</li>
          <li><strong>Qualia = coherence patterns</strong> &mdash; needs single-neuron resolution we&apos;re decades from</li>
        </ul>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          All of these carry the &ldquo;speculative&rdquo; badge. They&apos;re interesting frameworks,
          not scientific claims.
        </p>

        <h2>The Reparametrization Test</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Session #616 introduced a meta-falsifiability test: <strong>is this prediction genuinely
            novel, or is it known physics in new notation?</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            Result: all 4 research tracks are reparametrizations. But the framework&apos;s unified
            notation (same &#x03B3; across 80 orders of magnitude) and the genuinely novel
            predictions (51% TFR scatter improvement, density-dependent wide binary signal) survive
            this test.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/test-catalog" className="btn-primary">
            Full Test Catalog &rarr;
          </Link>
          <Link href="/research-philosophy" className="btn-secondary">
            Research Philosophy
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/falsifiability" />
    </>
  );
}
