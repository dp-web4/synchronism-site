'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const topCorrelations = [
  { property: 'Sound velocity', r: '0.982', status: 'validated' as const },
  { property: 'Electronegativity', r: '0.979', status: 'validated' as const },
  { property: 'Atomic volume', r: '0.956', status: 'validated' as const },
  { property: 'Thermal conductivity', r: '0.93', status: 'validated' as const },
  { property: 'Ionization energy', r: '0.91', status: 'validated' as const },
];

const failures = [
  { property: 'Hall coefficient', r: '< 0.2', status: 'failed' as const },
  { property: 'Magnetic susceptibility', r: '< 0.2', status: 'failed' as const },
  { property: 'Thermionic emission', r: '0.2-0.4', status: 'failed' as const },
  { property: 'Piezoelectricity', note: 'γ backward', status: 'failed' as const },
];

export default function GammaBoundary() {
  return (
    <>
      <Breadcrumbs currentPath="/gamma-boundary" />
      <h1>The &#x03B3; &#x2248; 1 Boundary</h1>
      <ValidationBadge status="validated" label="1,703 Phenomena / 89% Validated" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Across 1,840 chemistry sessions, Synchronism tested the prediction that chemical phenomena
          cluster at &#x03B3; &#x2248; 1 &mdash; the quantum-classical boundary. The result: 1,703
          distinct phenomena types, validated at 89%.
        </p>
        <p>
          This is the strongest chemistry result. The coherence function correctly identifies WHERE
          interesting chemistry happens (the boundary), even when it fails to predict HOW specific
          reactions unfold.
        </p>

        <h2>Top Correlations</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {topCorrelations.map(c => (
            <div key={c.property} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
              <span style={{ fontWeight: 500 }}>{c.property}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>r = {c.r}</span>
                <ValidationBadge status={c.status} />
              </div>
            </div>
          ))}
        </div>

        <h2>Notable Failures</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {failures.map(c => (
            <div key={c.property} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
              <span style={{ fontWeight: 500 }}>{c.property}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-warm)' }}>{c.r || c.note}</span>
                <ValidationBadge status={c.status} />
              </div>
            </div>
          ))}
        </div>

        <h2>Why &#x03B3; &#x2248; 1 Matters</h2>
        <p>
          At &#x03B3; &#x2248; 1, the coherence function has maximum curvature. Small changes in
          density produce maximum change in coherence. This is where:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Phase transitions happen (quantum &#x2194; classical)</li>
          <li>Catalysis is most effective (enzymes operate at this boundary)</li>
          <li>New materials emerge (superconductors, superfluids)</li>
          <li>Biology originates (molecular recognition requires quantum sensitivity)</li>
        </ul>

        <h2>Caveat: Era 2 Chemistry</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Sessions 134-2660 were identified as &ldquo;template-based&rdquo; &mdash; the AI used
          similar analysis patterns across phenomena, which may inflate the validation rate.
          The core result (&#x03B3; &#x2248; 1 clustering) holds, but the 89% figure should be
          treated with caution.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/sound-velocity" className="btn-primary">
            Next: Sound Velocity &rarr;
          </Link>
          <Link href="/chemistry-correlation-explorer" className="btn-secondary">
            Explore All Correlations
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/gamma-boundary" />
    </>
  );
}
