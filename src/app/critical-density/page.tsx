'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CriticalDensity() {
  return (
    <>
      <Breadcrumbs currentPath="/critical-density" />
      <h1>Critical Density</h1>
      <ValidationBadge status="validated" label="5% Error vs Empirical" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay label="Critical density from rotation velocity">
          &#x03C1;<sub>crit</sub> = A &times; V<sub>flat</sub>&sup2;
        </EquationDisplay>

        <p>
          The critical density &#x03C1;<sub>crit</sub> is the density at which the coherence function
          transitions from quantum (C &rarr; 0) to classical (C &rarr; 1). It&apos;s not a free parameter &mdash;
          it&apos;s derived from the flat rotation velocity V<sub>flat</sub> of the system.
        </p>

        <h2>The A Parameter</h2>
        <EquationDisplay size="sm" label="Derived in Session #66">
          A = 4&#x03C0; / (&#x03B1;&sup2; G R&#x2080;&sup2;) &#x2248; 0.029 (km/s)<sup>&minus;2</sup>
        </EquationDisplay>
        <p>
          A comes from fundamental constants: &#x03B1; (fine structure constant), G (gravitational constant),
          and R&#x2080; (a characteristic scale). The derivation yields 0.029, compared to empirical
          fits of 0.028 &mdash; a 5% error from first principles.
        </p>

        <h2>Physical Meaning</h2>
        <p>
          Every gravitationally bound system has a characteristic rotation velocity V<sub>flat</sub> &mdash;
          the velocity at which its rotation curve flattens. This velocity encodes the total mass
          and size of the system. The critical density is where internal gravitational binding energy
          equals the coherence threshold.
        </p>
        <p>
          Below &#x03C1;<sub>crit</sub>: the system is under-dense, loosely bound, quantum effects persist.
          Above &#x03C1;<sub>crit</sub>: the system is gravitationally coherent, classical behavior dominates.
        </p>

        <h2>Connection to MOND</h2>
        <p>
          From &#x03C1;<sub>crit</sub> = A &times; V<sub>flat</sub>&sup2; and the coherence function,
          two cosmological results emerge:
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>MOND&apos;s a&#x2080;</h3>
            <EquationDisplay size="sm">
              a&#x2080; = cH&#x2080;/(2&#x03C0;)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              10% error vs Milgrom&apos;s value
            </p>
            <ValidationBadge status="validated" />
          </div>
          <div className="card">
            <h3>Freeman&apos;s &#x03A3;&#x2080;</h3>
            <EquationDisplay size="sm">
              &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              12% error vs Freeman&apos;s value
            </p>
            <ValidationBadge status="validated" label="12% Error" />
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/parameter-derivations" className="btn-primary">
            Next: All Parameter Derivations &rarr;
          </Link>
          <Link href="/mond-unification" className="btn-secondary">
            MOND Unification &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/critical-density" />
    </>
  );
}
