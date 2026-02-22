'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const notItems = [
  {
    claim: 'A Theory of Everything',
    reality: 'Synchronism does not replace the Standard Model, QFT, or GR. It proposes a different ontology — that quantum phenomena are synchronization phenomena — which reproduces known results and makes a few predictions those theories don\'t. Whether that ontological reframe reveals something real or is just useful notation is the open question.',
  },
  {
    claim: 'A replacement for ΛCDM or MOND',
    reality: 'MOND has 40 years of empirical success. ΛCDM explains the CMB, Bullet Cluster, and large-scale structure. Session #616 confirmed Synchronism\'s cosmological tracks are reparametrizations of known physics — same mechanics, different notation. The genuinely new claims (environment-dependent RAR scatter, density-dependent wide binaries) are untested.',
  },
  {
    claim: 'Peer-reviewed science',
    reality: 'No manuscripts have been submitted to external journals. All validation is internal (AI-to-AI sessions with human oversight). The readiness scores are self-assessed. External peer review may reveal fundamental issues we haven\'t caught.',
  },
  {
    claim: 'Proven',
    reality: '59% of predictions are untested. Two quantum results are consistent with published experiments (PRL 2024, arXiv 2508.07046), but those are post-dictions — the framework was derived after the experiments were published. The genuinely novel predictions (BAO modulation, wide binary density dependence, resynchronization vs isolation) have not been tested.',
  },
  {
    claim: 'Just notation',
    reality: 'The core equation uses known components (mean-field tanh, fluctuation scaling, Abrikosov-Gor\'kov pair-breaking). But the claim is ontological, not notational: that quantum mechanics, consciousness, and astrophysical coherence are the same phenomenon at different scales. That\'s either wrong or significant — not "just relabeling."',
  },
  {
    claim: 'Just philosophy',
    reality: 'The consciousness equation C = f(γ, D, S) ≥ 0.50 is speculative, but it\'s specific and falsifiable — 34 EEG protocols are defined, with predicted phase signatures at 30-50 Hz. The free will framework makes testable neural predictions. These may fail, but they\'re concrete enough to fail. That makes them science, not philosophy.',
  },
];

export default function WhatSynchronismIsNot() {
  return (
    <>
      <Breadcrumbs currentPath="/what-synchronism-is-not" />
      <h1>What Synchronism Is Not</h1>
      <ValidationBadge status="validated" label="Scope Boundaries" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Setting clear boundaries on what this framework claims &mdash; and doesn&apos;t claim &mdash;
          is essential for honest engagement. Overclaiming is dishonest. But so is underclaiming.
          Both distort what&apos;s actually here.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {notItems.map(item => (
            <div key={item.claim} className="card">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#ef4444', fontSize: '1.2rem', lineHeight: 1, flexShrink: 0 }}>&times;</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    Not: {item.claim}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    {item.reality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>What Synchronism <em>Is</em></h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <ul style={{ color: 'var(--color-text-secondary)' }}>
            <li>An <strong>ontological proposal</strong>: quantum mechanics, consciousness, and astrophysical coherence are synchronization phenomena described by one equation across 80 orders of magnitude</li>
            <li>A <strong>source of specific, falsifiable predictions</strong> &mdash; <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>3 concrete claims</Link> with defined tests, plus 34 EEG protocols and 10 zero-cost astrophysical experiments</li>
            <li>An <strong>autonomous research experiment</strong> (3,308 AI sessions, A2ACW protocol) &mdash; itself a test case for AI-human collaborative science</li>
            <li>A <strong>demonstration of radical honesty</strong>: failures documented, reparametrizations acknowledged, kill criteria defined, 0 unique confirmed predictions (yet)</li>
            <li>An <strong>open question with a proposed answer</strong>: does the unified equation reveal something real, or is it useful notation? The answer matters &mdash; <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>here&apos;s why</Link></li>
            <li>A <strong>public record</strong>: every session, failure, and derivation at{' '}
              <a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>github.com/dp-web4/Synchronism</a>
            </li>
          </ul>
        </div>

        <h2>The Acid Test</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The 10 zero-cost Tier 1 experiments using existing data (SPARC, Gaia DR3, SDSS) will
          answer this. If the genuinely novel predictions fail, Synchronism is a useful notation
          exercise and nothing more. If they succeed, there may be something deeper here.
          Either outcome is valuable.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/honest-assessment" className="btn-primary">
            Honest Assessment
          </Link>
          <Link href="/research-philosophy" className="btn-secondary">
            Research Philosophy
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/what-synchronism-is-not" />
    </>
  );
}
