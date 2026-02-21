'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CompressionAction() {
  return (
    <>
      <Breadcrumbs currentPath="/compression-action" />
      <h1>Compression Action</h1>
      <ValidationBadge status="speculative" label="Theoretical Extension" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="The ξ formulation">
          C(&#x03BE;) = &#x03BE;&#x2080; + (1 &minus; &#x03BE;&#x2080;) &middot; &#x03BE;<sup>1/&#x03C6;</sup> / (1 + &#x03BE;<sup>1/&#x03C6;</sup>)
        </EquationDisplay>

        <p>
          The compression action &#x03BE; is an alternative parameterization of the coherence function
          that makes the physical structure more transparent. Instead of density and coupling, it
          unifies three aspects of physics:
        </p>

        <div className="grid-3" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#38bdf8' }}>Topology</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Matter: what is here
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Geometry</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Gravity: how space curves
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#22c55e' }}>Dynamics</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Quantum mechanics: how things evolve
            </p>
          </div>
        </div>

        <p>
          The golden ratio &#x03C6; appears as the natural scaling exponent, and &#x03BE;&#x2080;
          is the minimum coherence (vacuum level).
        </p>

        <h2>Relationship to Standard Form</h2>
        <p>
          The two formulations are equivalent. The standard C(&#x03C1;) is more practical for
          computation (plug in density, get coherence). The &#x03BE; formulation is more revealing
          about the theoretical structure (three aspects of physics unified into one action).
        </p>

        <h2>Status</h2>
        <p>
          This remains theoretical. The standard C(&#x03C1;) form is what was tested against
          galaxies and chemistry. The &#x03BE; form provides a different lens on the same mathematics
          but has not produced independently testable predictions beyond what C(&#x03C1;) already provides.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/phase-transitions" className="btn-primary">
            Next: Phase Transitions &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/compression-action" />
    </>
  );
}
