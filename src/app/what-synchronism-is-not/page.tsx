'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const notItems = [
  {
    claim: 'A Theory of Everything',
    reality: 'Synchronism is a framework that maps density to coherence. It does not replace the Standard Model, QFT, or GR. It offers an alternative lens for phenomena those theories already explain, plus a few predictions they don\'t make.',
  },
  {
    claim: 'A replacement for ΛCDM or MOND',
    reality: 'Session #616 confirmed all 4 research tracks are reparametrizations of known physics. Synchronism uses the same underlying mechanics — it relabels and reorganizes, sometimes usefully. MOND has 40 years of empirical success. ΛCDM explains the CMB, Bullet Cluster, and large-scale structure. Synchronism doesn\'t replicate those successes yet.',
  },
  {
    claim: 'Peer-reviewed science',
    reality: 'No manuscripts have been submitted to external journals. All validation is internal (AI-to-AI sessions with human oversight). The readiness scores are self-assessed. External peer review may reveal fundamental issues we haven\'t caught.',
  },
  {
    claim: 'Original physics',
    reality: 'The core equation\'s tanh form comes from mean-field theory (known). γ = 2/√N_corr is a standard fluctuation scaling (known). η = Abrikosov-Gor\'kov pair-breaking (known since 1960). The novelty is in notation unification and a few genuinely new predictions, not in new physics.',
  },
  {
    claim: 'A consciousness theory',
    reality: 'The consciousness predictions (C ≈ 0.50 threshold, 34 EEG protocols) are speculative. They\'re interesting frameworks for thinking about consciousness, but none have been empirically tested. The claim that "phase patterns ARE experience" is philosophical, not scientific.',
  },
  {
    claim: 'Experimentally validated',
    reality: '59% of predictions are untested. The "89% validation rate" in chemistry refers to mathematical consistency checks, not novel predictions. The genuinely new predictions (BAO modulation, wide binary density dependence, EEG phase transitions) have not been tested.',
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
          is essential for honest engagement. If these boundaries feel uncomfortable, that&apos;s
          the point. Overclaiming is worse than underclaiming.
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
            <li>A <strong>notation framework</strong> that uses the same &#x03B3; across 80 orders of magnitude</li>
            <li>An <strong>autonomous research experiment</strong> (3,308 AI sessions, A2ACW protocol)</li>
            <li>A <strong>source of a few genuinely novel predictions</strong> (environment-dependent RAR scatter, density-dependent wide binary anomaly, 51% TFR scatter improvement)</li>
            <li>A <strong>demonstration of radical honesty in science</strong> (failures documented, reparametrizations acknowledged, kill criteria defined)</li>
            <li>An <strong>open question</strong>: does the unified notation reveal something real, or is it just convenient relabeling?</li>
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
