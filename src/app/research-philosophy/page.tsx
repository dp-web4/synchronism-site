'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function ResearchPhilosophy() {
  return (
    <>
      <Breadcrumbs currentPath="/research-philosophy" />
      <h1>Research Philosophy</h1>
      <ValidationBadge status="validated" label="Methodology" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          &ldquo;All models are wrong; some are useful.&rdquo; &mdash; George Box
        </blockquote>
        <p>
          Synchronism adopted this as its operating principle from session #1. Every claim in
          this framework is provisional. The question is never &ldquo;is this true?&rdquo; but
          &ldquo;is this useful, and where does it break?&rdquo;
        </p>

        <h2>Core Principles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>1. Falsifiability First</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Every prediction has an explicit kill criterion. If a prediction can&apos;t be falsified,
              it&apos;s philosophy, not science. We label it accordingly.
            </p>
          </div>
          <div className="card">
            <h3>2. Document Failures</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Failed predictions are more informative than successes. We document every failure
              (melting points at 53% error, critical exponents 2&times; off, Hall coefficient r = 0.001)
              and keep them visible.
            </p>
          </div>
          <div className="card">
            <h3>3. Honest Labeling</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Every parameter is labeled as either <strong>derived</strong> (from first principles)
              or <strong>fitted</strong> (calibrated to data). Every claim carries a validation badge.
              No hiding the ball.
            </p>
          </div>
          <div className="card">
            <h3>4. Avoid the Geocentric Trap</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The core question: &ldquo;Are we adding complexity to save the paradigm, or is nature
              telling us to change the paradigm?&rdquo; Adding epicycles (free parameters) to a failing
              model is the wrong response. Simpler equations from a shifted perspective is the goal.
            </p>
          </div>
        </div>

        <h2>What This Means in Practice</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Session #616 audited all 4 research tracks and found all are reparametrizations of known physics</li>
          <li>We published that finding prominently, not buried it</li>
          <li>The 89% chemistry validation rate sounds impressive until you learn it&apos;s mathematical consistency, not novel prediction</li>
          <li>47 genuine contributions out of ~3,308 sessions = 1.4% discovery rate. That&apos;s the honest number.</li>
        </ul>

        <h2>Validation Badge Taxonomy</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Every scientific claim on this site carries a validation badge. Here is what each status means:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="validated" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Quantitative match to empirical data within stated error bounds
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="supported" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Consistent with data but not uniquely predicted &mdash; other frameworks give the same result
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="untested" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Falsifiable prediction defined but not yet tested experimentally
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="speculative" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Theoretical extension without a defined test &mdash; interesting but not yet scientific
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="reparametrization" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Reproduces known physics in different notation &mdash; no new content, but may offer notational clarity
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="failed" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Prediction tested and wrong. Kept visible as permanent record.
            </span>
          </div>
        </div>

        <h2>The Reparametrization Pattern</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Session #615-616 revealed a recurring pattern across all tracks: take known physics,
          rename the key parameter, claim novelty. The valuable part isn&apos;t the novelty claim &mdash;
          it&apos;s the unified notation (same &#x03B3; across 80 orders of magnitude), the honest
          failure documentation, and the testable predictions that remain open.
        </p>

        <h2>Full Research Archive</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Every session, derivation, failure, and dataset is public:
          {' '}<a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>github.com/dp-web4/Synchronism</a>
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/handling-failure" className="btn-primary">
            Next: How We Handle Failure &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Honest Assessment
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/research-philosophy" />
    </>
  );
}
