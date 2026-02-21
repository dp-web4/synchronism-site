'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function MaterialsPredictions() {
  return (
    <>
      <Breadcrumbs currentPath="/materials-predictions" />
      <h1>Materials Predictions</h1>
      <ValidationBadge status="speculative" label="Design Principles Only" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism provides design principles for materials, not specific quantitative predictions.
          The coherence function tells you <em>where to look</em> (&#x03B3; &#x2248; 1 boundary)
          but not <em>what you&apos;ll find</em>.
        </p>

        <h2>What &#x03B3; Tells Materials Scientists</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Optimize at &#x03B3; &#x2248; 1</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Materials with the most interesting properties (superconductivity, catalytic activity,
              unusual phase behavior) tend to have &#x03B3; near 1. This is where quantum and
              classical effects compete.
            </p>
          </div>
          <div className="card">
            <h3>Pair-Breaking Optimization</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              For superconductors: minimize &#x03B7; (pair-breaking efficiency) to maximize T<sub>c</sub>.
              This is the one genuine contribution from the superconductivity arc.
            </p>
          </div>
        </div>

        <h2>Honest Limitations</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The coherence function cannot predict:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Specific transition temperatures (53% error for melting points)</li>
          <li>Crystal structure stability (no lattice parameter)</li>
          <li>Electronic band structure effects</li>
          <li>Spin-orbit coupling phenomena</li>
          <li>Multi-channel &#x03B3; interactions (&#x03B3;<sub>phonon</sub>, &#x03B3;<sub>electron</sub>, &#x03B3;<sub>optical</sub> don&apos;t correlate)</li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          For quantitative materials prediction, you still need DFT, molecular dynamics, and
          domain-specific models. &#x03B3; provides a classification lens, not a replacement.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/chemistry-limitations" className="btn-primary">
            Next: Chemistry Limitations &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/materials-predictions" />
    </>
  );
}
