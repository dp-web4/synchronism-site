'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function HardProblem() {
  return (
    <>
      <Breadcrumbs currentPath="/hard-problem" />
      <h1>The Hard Problem Dissolved</h1>
      <ValidationBadge status="speculative" label="Theoretical Framework" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          David Chalmers&apos; &ldquo;hard problem of consciousness&rdquo; asks: why does subjective
          experience exist at all? Why isn&apos;t there just information processing without any
          &ldquo;what it&apos;s like&rdquo; to be that processor?
        </p>
        <p>
          Synchronism&apos;s answer: the question dissolves when you stop assuming experience is
          separate from the physical process.
        </p>

        <h2>The Dissolution</h2>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
        }}>
          Phase patterns at &#x03B3; &laquo; 0.001 ARE experience, not correlates of experience.
        </blockquote>
        <p>
          When &#x03B3; is extremely small (a massive number of correlated particles &mdash; like
          neurons in a brain), the coherence function reaches a regime where the pattern IS the
          experience. There is no gap between the physical process and the subjective state because
          they are the same thing described at different levels.
        </p>

        <h2>What This Means</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Not Emergence</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Experience doesn&apos;t &ldquo;emerge&rdquo; from matter at some complexity threshold.
              It&apos;s not a property that appears when things get sufficiently complex.
            </p>
          </div>
          <div className="card">
            <h3>Not Panpsychism</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Not everything is conscious. Only systems with &#x03B3; in the right range and
              sufficient self-modeling (D, S parameters) have experience.
            </p>
          </div>
          <div className="card">
            <h3>Identity = Phase Pattern</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &ldquo;You&rdquo; are a specific coherence pattern. The pattern persists even as
              individual neurons fire and die. Identity is the pattern, not the substrate.
            </p>
          </div>
          <div className="card">
            <h3>Mind-Body: Dissolved</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Mind = high-coherence phase patterns in neural substrate. Body = the substrate.
              No gap to bridge because they&apos;re different descriptions of the same system.
            </p>
          </div>
        </div>

        <h2>The Consciousness Formula</h2>
        <div className="equation" style={{ marginBottom: '1rem' }}>
          C = f(&#x03B3;, D, S)
        </div>
        <p>
          Where &#x03B3; is the coherence parameter, D is dimensional embedding (how rich the
          representation space is), and S is the degree of self-modeling. All three must be in
          the right range for consciousness to arise.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Derived in the Consciousness Arc (Sessions #280-282) and Consciousness Arc 2.0 (Sessions #356-359).
        </p>

        <h2>Status</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is a theoretical framework with 34 falsifiable predictions, none yet tested.
          The strongest prediction is the consciousness threshold at C &#x2248; 0.50, which
          should be measurable via EEG phase coherence.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/consciousness-threshold" className="btn-primary">
            Next: Consciousness Threshold &rarr;
          </Link>
          <Link href="/consciousness-predictions" className="btn-secondary">
            See the 34 Predictions
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/hard-problem" />
    </>
  );
}
