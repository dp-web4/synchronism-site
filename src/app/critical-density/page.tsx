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
      <ValidationBadge status="audited-negative" label="A-from-Jeans | scale-dependent, not derived" />

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
        <EquationDisplay size="sm" label="Stated formula (Session #66) — see correction below">
          A = 4&#x03C0; / (&#x03B2;<sub>J</sub>&sup2; G R&#x2080;&sup2;)
        </EquationDisplay>
        <p>
          A is <em>calibrated</em> against the Jeans criterion (Session 53), not derived from it:
          &#x03B2;<sub>J</sub> = &#x03BB;<sub>Jeans</sub> / R<sub>half</sub> is the dimensionless
          Jeans-length-to-galaxy-size ratio, empirically &#x03B2;<sub>J</sub> &#x2248; 1.1 &#x00B1; 0.2 across
          SPARC galaxies. <strong>A carries density units:</strong> since &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2;
          with &#x03C1; in M<sub>&#x2609;</sub> pc<sup>&minus;3</sup>, A is in
          M<sub>&#x2609;</sub> pc<sup>&minus;3</sup> (km/s)<sup>&minus;2</sup> — not (km/s)<sup>&minus;2</sup>.
          Earlier versions of this page dropped the density dimensions, which is exactly where a large
          numerical discrepancy can hide unnoticed.
        </p>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1rem', padding: '0.75rem 1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>
            <strong>Correction (2026-08-05) — this page previously claimed &ldquo;5% agreement&rdquo; under a
            &ldquo;Validated&rdquo; badge.</strong> It asserted that the formula above yields A &#x2248; 0.029
            against an empirical 0.028. It does not. With &#x03B2;<sub>J</sub> = 1 and R<sub>0</sub> = 8 kpc the
            stated formula yields <strong>A &#x2248; 4.6&times;10<sup>&minus;5</sup></strong> — the value{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</Link>{' '}
            has marked <strong>audited-negative</strong> since 2026-06-07, and 635&times; smaller than the 0.029
            used in every galaxy computation on this site. This page was a fossil contradicting its own linked
            prerequisite; it was caught by an outside reader recomputing the integral, not by the badge system.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong>What the 644&times; actually is (new, 2026-08-05).</strong> The archive bridges the two
            numbers with an unexplained &ldquo;644&times; unit conversion.&rdquo; It is not a unit conversion.
            Because A &#x221D; 1/R<sub>0</sub>&sup2;, a factor of 635 is the <em>square of a length ratio</em>:
            &#x221A;635 = 25.2, and 8 kpc / 25.2 = <strong>317 pc</strong>. So A = 0.029 is the stated formula
            evaluated at R<sub>0</sub> &#x2248; 317 pc — a disk <em>scale height</em> — rather than at the 8 kpc
            galactocentric radius the derivation names. The{' '}
            <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>galaxy plotter</Link>{' '}
            independently pins h = 300 pc (giving A = 0.0325). The discrepancy is an unstated choice of
            <strong> coarse-graining length</strong>, not an arithmetic error.
          </p>
        </div>

        <p>
          <strong>Consequence.</strong> A is not an independent parameter — it is a proxy for the smoothing
          length &#x2113; used to define &#x03C1;, with A &#x221D; 1/&#x2113;&sup2;. Every statement on this site
          about whether a system crosses the coherence knee is therefore conditional on &#x2113;, and
          &#x2113; is specified nowhere. For NGC 3198 the same model gives
          &#x03C1;/&#x03C1;<sub>crit</sub> = 1.4&times;10<sup>&minus;3</sup> at A = 0.029 (knee never approached)
          and <strong>0.91 at A = 4.6&times;10<sup>&minus;5</sup> (knee crossed, C &#x2248; 0.86 at &#x03B3; = 2)</strong>.
          Neither value of A is &ldquo;the correct one&rdquo; until &#x2113; is fixed. This is an open question,
          not a repaired derivation — and it does <em>not</em> add a refutation to the ledger.
        </p>

        <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem' }}>
          <strong>Symbol note:</strong> this page previously wrote the Jeans ratio as &#x03B1;, which forced a
          paragraph disclaiming confusion with the fine-structure constant. It is now
          &#x03B2;<sub>J</sub> throughout, matching{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>
            parameter derivations
          </Link>; the disclaimer is no longer needed.
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
              13% error vs Milgrom&apos;s value (at site-standard H&#x2080; = 67.4)
            </p>
            <ValidationBadge status="reparametrization" label="dimensional bookkeeping — prior art" />
          </div>
          <div className="card">
            <h3>Freeman&apos;s &#x03A3;&#x2080;</h3>
            <EquationDisplay size="sm">
              &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#8776;4% error vs Freeman&apos;s value (corrected 2026-07-09; not independent of a&#x2080;&apos;s &#8776;13% gap
              — &#x03A3;&#x2080; = a&#x2080;/2&#x03C0;G is the <em>same number</em>, not a second success)
            </p>
            <ValidationBadge status="reparametrization" label="same number as a&#x2080;" />
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
