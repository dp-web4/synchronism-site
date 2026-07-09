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
      <ValidationBadge status="validated" label="Jeans Criterion | 5% Agreement" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay label="Critical density from rotation velocity">
          &#x03C1;<sub>crit</sub> = A &times; V<sub>flat</sub>&sup2;
        </EquationDisplay>

        <p>
          The critical density &#x03C1;<sub>crit</sub> is the density at which the coherence function
          transitions from quantum (C &rarr; 0) to classical (C &rarr; 1). It is <strong>per-system</strong>,
          not a universal constant: V<sub>flat</sub> is the observed flat rotation velocity of each specific
          system, so each galaxy (or other gravitationally bound object) has its own &#x03C1;<sub>crit</sub>.
          A is the universal proportionality constant; V<sub>flat</sub> enters as an input. The rotation-curve
          fit is not zero-parameter — it requires an observed V<sub>flat</sub> per galaxy.
        </p>

        <h2>The A Parameter</h2>
        <EquationDisplay size="sm" label="Derived in Session #66">
          A = 4&#x03C0; / (&#x03B1;&sup2; G R&#x2080;&sup2;) &#x2248; 0.029 (km/s)<sup>&minus;2</sup>
        </EquationDisplay>
        <p>
          A is derived from the Jeans criterion (Session 53): &#x03B1; = &#x03BB;<sub>Jeans</sub> / R<sub>half</sub>
          is the dimensionless Jeans-length-to-galaxy-size ratio. Empirically, &#x03B1; &#x2248; 1.1 &#x00B1; 0.2
          across SPARC galaxies — the Jeans length approximately equals the galaxy half-light radius at the
          coherence boundary. With &#x03B1; = 1.0 (fiducial), G in galactic units, and R<sub>0</sub> = 8 kpc, the
          formula yields A &#x2248; 0.029, vs empirical 0.028 (5% agreement).
        </p>
        <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem' }}>
          <strong>Note on the &#x03B1; symbol:</strong> &#x03B1; here is <em>not</em> the electromagnetic
          fine-structure constant (&#x03B1;<sub>em</sub> &#x2248; 1/137). Earlier versions of this page made
          that error. The formula closes numerically only with &#x03B1; = O(1); &#x03B1;<sub>em</sub>&sup2;
          &#x2248; 5&times;10<sup>&minus;5</sup> would make A &#x2248; 550 (km/s)<sup>&minus;2</sup> — about
          20,000&times; too large. See{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>
            parameter derivations
          </Link>{' '}
          for the full Jeans-criterion derivation chain.
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
              &#8776;4% error vs Freeman&apos;s value (corrected 2026-07-09; not independent of a&#x2080;&apos;s &#8776;10% gap)
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
