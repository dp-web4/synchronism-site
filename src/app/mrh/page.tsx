'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function MRH() {
  return (
    <>
      <Breadcrumbs currentPath="/mrh" />
      <h1>MRH: Markov Relevancy Horizon</h1>
      <ValidationBadge status="speculative" label="Theoretical Framework" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The Markov Relevancy Horizon (MRH) is the boundary beyond which interactions between
          two systems become statistically irrelevant &mdash; their correlations decay below the noise floor.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          Think of it as a causal event horizon, but for information rather than light.
        </blockquote>

        <h2>How It Works</h2>
        <p>
          Every system maintains correlations with nearby systems. As distance (spatial or temporal)
          increases, these correlations weaken. The MRH is where they become negligible.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Inside the MRH</strong>: Systems are correlated, can influence each other, quantum effects persist</li>
          <li><strong>At the MRH</strong>: Correlations = noise. This IS the boundary.</li>
          <li><strong>Beyond the MRH</strong>: Systems are effectively independent, classical behavior dominates</li>
        </ul>

        <h2>MRH and Quantum Measurement</h2>
        <p>
          This is Synchronism&apos;s most provocative claim about quantum mechanics:
        </p>
        <div className="card card-highlight" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>Wave function &ldquo;collapse&rdquo; = crossing the MRH.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            When a quantum system interacts with a macroscopic apparatus, the correlations
            between the system and its environment rapidly exceed the MRH. What we call
            &ldquo;measurement&rdquo; is this boundary crossing. No observer needed. No consciousness
            required. Just decoherence at the relevancy horizon.
          </p>
          <ValidationBadge status="untested" label="6 Testable Protocols" />
        </div>
        <p>
          <Link href="/measurement-without-observers" style={{ color: 'var(--color-accent-blue)' }}>
            Full treatment: Measurement Without Observers &rarr;
          </Link>
        </p>

        <h2>MRH at Cosmic Scales</h2>
        <p>
          The same concept applies to cosmology. Cosmic horizons (particle horizon, event horizon)
          can be reinterpreted as MRH boundaries at cosmological scales. Beyond the MRH, correlations
          from the early universe have decayed. What we call the &ldquo;observable universe&rdquo; is
          the region within our MRH.
        </p>
        <p>
          <Link href="/cosmic-horizons" style={{ color: 'var(--color-accent-blue)' }}>
            Cosmic Horizons as MRH Phenomena &rarr;
          </Link>
        </p>

        <h2>MRH in Statistical Mechanics</h2>
        <p>
          In statistical mechanics, the correlation length &#x03BE; measures how far correlations
          extend. At a phase transition, &#x03BE; diverges. The MRH is the dynamical version of
          this: where correlations become irrelevant not just in space but in the full phase space
          of the system.
        </p>

        <h2>What&apos;s Untested</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The MRH as a replacement for &ldquo;wave function collapse&rdquo; is the central untested
          prediction. Six experimental protocols have been designed (Sessions #368-370) but none
          have been run. The theory predicts specific decoherence patterns at the MRH boundary
          that should be measurable.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/measurement-without-observers" className="btn-primary">
            Next: Measurement Without Observers &rarr;
          </Link>
          <Link href="/quantum-predictions" className="btn-secondary">
            See the 6 Protocols
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/mrh" />
    </>
  );
}
