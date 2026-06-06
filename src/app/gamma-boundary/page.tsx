'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const topCorrelations = [
  { property: 'Sound velocity', r: '0.982', status: 'reparametrization' as const },
  { property: 'Electronegativity', r: '0.979', status: 'reparametrization' as const },
  { property: 'Atomic volume', r: '0.956', status: 'reparametrization' as const },
  { property: 'Thermal conductivity', r: '0.93', status: 'reparametrization' as const },
  { property: 'Ionization energy', r: '0.91', status: 'reparametrization' as const },
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
      <ValidationBadge status="reparametrization" label="1,703 Phenomena / 89% Boundary-Consistent | Template Bias Caveat" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Across 1,840 chemistry sessions, Synchronism tested the prediction that chemical phenomena
          cluster at &#x03B3; &#x2248; 1 &mdash; the quantum-classical boundary. The result: 1,703
          distinct phenomena types, with 89% boundary-consistent and 11% failures.
        </p>

        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Key failures (non-density-monotonic properties):</strong>
          <ul style={{ marginTop: '0.4rem', marginBottom: 0, paddingLeft: '1.2rem' }}>
            <li><strong>Melting point predictions: 53% average error</strong> — melting points are bond-symmetry dominated, not density-monotonic across the periodic table.</li>
            <li><strong>Superconductor T<sub>c</sub>: 6.5&times; wrong</strong> — T<sub>c</sub> depends on electron-phonon coupling strength, which does not scale with density in the way C(&#x03C1;) assumes.</li>
          </ul>
          <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            Pattern: the framework &ldquo;works&rdquo; where targets are density-monotonic by construction (sound velocity, electronegativity, atomic volume)
            and fails where they are not. A degree-2 polynomial in Z achieves comparable r on density-monotonic rows (Δr ≤ 0.07; sometimes exceeds Synchronism). The null was computed 2026-05-10.
            See <a href="/honest-assessment" style={{ color: '#ef4444' }}>Honest Assessment</a>.
          </p>
        </div>

        <h2>Top Correlations</h2>
        <div style={{
          background: 'rgba(245, 158, 11, 0.07)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Null model result (2026-05-10 explorer, propagated 2026-06-06):</strong>{' '}
          Sound velocity, electronegativity, and atomic volume are all near-monotonic in atomic number Z —
          and a 2-parameter polynomial in Z achieves comparable or higher r than Synchronism in most density-monotonic cases (Δr ≤ 0.07; polynomial sometimes wins). The null was computed analytically and numerically in <code>chemistry-null-model-analytic.md</code>: any smooth monotonic function of Z achieves r ≥ 0.9 on density-monotonic targets by construction. Synchronism is <em>not</em> meaningfully above the polynomial null on its &ldquo;success&rdquo; cases. The r-values below are consistent with the periodic table being density-monotonic in Z, not with Synchronism-specific physics.{' '}
          See <a href="/honest-assessment" style={{ color: '#f59e0b' }}>Honest Assessment</a>.
        </div>
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
