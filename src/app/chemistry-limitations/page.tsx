'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const failureCategories = [
  { category: 'Outright failures (r < 0.2)', count: '~50', examples: 'Hall coefficient, magnetic susceptibility' },
  { category: 'Very weak (r = 0.2-0.4)', count: '~150', examples: 'Thermionic emission, penetration depth' },
  { category: 'Anomalous (γ backward)', count: '~30', examples: 'Piezoelectricity, bond strength' },
  { category: 'Moderate only (r = 0.4-0.6)', count: '~120', examples: 'Diffusion, Grüneisen parameter' },
];

export default function ChemistryLimitations() {
  return (
    <>
      <Breadcrumbs currentPath="/chemistry-limitations" />
      <h1>Chemistry Limitations</h1>
      <ValidationBadge status="failed" label="Documented Failures" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Of 1,703 chemical phenomena tested, ~11% failed outright and many more showed only
          weak correlations. This page documents what doesn&apos;t work and why.
        </p>

        <h2>Failure Breakdown</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {failureCategories.map(f => (
            <div key={f.category} className="card" style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 500 }}>{f.category}</span>
                <span style={{ color: 'var(--color-accent-warm)', fontFamily: 'monospace' }}>{f.count} types</span>
              </div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>e.g., {f.examples}</span>
            </div>
          ))}
        </div>

        <h2>Why These Fail</h2>

        <h3>Channel Independence</h3>
        <p>
          &#x03B3;<sub>phonon</sub>, &#x03B3;<sub>electron</sub>, and &#x03B3;<sub>optical</sub>
          don&apos;t correlate with each other. A material can have high phonon coherence (fast sound)
          but low electronic coherence (poor conductor). A single &#x03B3; can&apos;t capture
          multi-channel behavior.
        </p>

        <h3>Spin-Orbit Coupling</h3>
        <p>
          Magnetic properties (susceptibility, Hall coefficient) are dominated by spin-orbit coupling,
          which has no representation in the coherence function. The &#x03B3; parameter measures
          density-based correlations, not spin-based ones.
        </p>

        <h3>Boundary vs. Bulk</h3>
        <p>
          Surface phenomena (catalysis, adsorption, thermionic emission) depend on boundary conditions
          that differ from bulk properties. C(&#x03C1;) describes bulk coherence; boundary coherence
          follows different rules.
        </p>

        <h3>Mean-Field Limitations</h3>
        <p>
          The tanh form is a mean-field result. Near critical points, fluctuations dominate and
          mean-field theory fails. Critical exponents are 2&times; off because C(&#x03C1;) ignores
          fluctuations by construction.
        </p>

        <h2>What This Teaches</h2>
        <p>
          The coherence function is a <strong>classification tool</strong>, not a <strong>prediction
          engine</strong>. It tells you what regime a system is in (quantum/boundary/classical)
          and correlates well with bulk properties that depend on collective behavior (sound velocity,
          electronegativity). It fails for properties that depend on specific quantum details
          (spin, orbital structure, crystal symmetry).
        </p>
        <p>
          This is an honest limitation, not a failure of the research program. Understanding
          <em>where</em> your theory applies and <em>where</em> it doesn&apos;t is as valuable
          as the theory itself.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/honest-assessment" className="btn-primary">
            Full Honest Assessment &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/chemistry-limitations" />
    </>
  );
}
