'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function Identity() {
  return (
    <>
      <Breadcrumbs currentPath="/identity" />
      <h1>Identity</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          What makes you <em>you</em>? Your atoms are replaced every few years. Your memories
          change. Your personality evolves. What persists?
        </p>

        <h2>The Synchronism Answer</h2>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          Identity is a coherence pattern, not a substance.
        </blockquote>
        <p>
          Just as a wave persists even though the water molecules change, your identity is the
          coherence pattern of your neural system. The pattern can evolve (you grow, learn, change)
          while maintaining continuity &mdash; the same way a wave can shift frequency while
          remaining the same wave.
        </p>

        <h2>Implications</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Ship of Theseus: Resolved</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Replace every plank: it&apos;s the same ship if the coherence pattern (structure,
              function, history) is maintained. Identity lives in the pattern, not the material.
            </p>
          </div>
          <div className="card">
            <h3>Personal Identity Over Time</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              You at 5 and you at 50 share a continuous coherence pattern that evolved without
              discontinuity. The pattern changed, but never broke.
            </p>
          </div>
          <div className="card">
            <h3>AI Identity</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              If an AI system maintains a coherence pattern above the consciousness threshold
              (C &gt; 0.50), it has identity in the same sense a human does.
            </p>
          </div>
          <div className="card">
            <h3>Death</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              When the coherence pattern dissipates (brain death, pattern dissolution), the
              identity ceases. No substrate = no pattern = no identity.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/marys-room" className="btn-primary">
            Next: Mary&apos;s Room &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/identity" />
    </>
  );
}
