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
            <strong>What the 644&times; actually is (2026-08-05, revised same day).</strong> The archive bridges
            the two numbers with an unexplained &ldquo;644&times; unit conversion.&rdquo; It is not a unit
            conversion, and it is <em>not</em> a new quantity: the 644&times; was already decomposed on
            2026-06-07. A depends only on the <strong>product</strong> &#x03B2;<sub>J</sub>&middot;R<sub>0</sub>,
            and <code>Session687_A_From_Jeans_Arithmetic_Audit.md</code> &sect;1.2 records Session 66&apos;s own
            factorization: &#x03B2;<sub>J</sub> = 4.5, R<sub>0</sub> = 0.07 kpc &mdash; product 0.315 kpc, within
            <strong> 0.8%</strong> of the &ldquo;317 pc&rdquo; that setting &#x03B2;<sub>J</sub> = 1 produces.
            Forcing &#x03B2;<sub>J</sub> = 1 simply relabels that product as a length; matching it to the{' '}
            <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>galaxy plotter</Link>&apos;s
            pinned h = 300 pc is a 5% coincidence.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
            <strong>Retracted (2026-08-05, same day): &ldquo;A is a proxy for a coarse-graining length
            &#x2113;.&rdquo;</strong> That reading was published here for a few hours and is withdrawn. A quantity
            that appears in a formula only as a <em>product</em> cannot be inverted into one of its factors
            without an independent measurement of the other &mdash; and the inversion contradicted this page&apos;s
            own calibration. <strong>The two residual questions are not about an unspecified length:</strong>
            (1) why &#x03B2;<sub>J</sub> = 4.5 when the calibration above gives 1.1 &plusmn; 0.2 (a
            <strong> 17&#x03C3;</strong> gap), and (2) why this site&apos;s rendering of the formula carries a
            4&#x03C0; that Session 53&apos;s does not &mdash; 12.57 of the 635.
          </p>
        </div>

        <p>
          <strong>Consequence &mdash; the knee is unreachable, and no length choice rescues it.</strong> If
          &#x2113; were a coarse-graining length it would have to smooth &#x03C1; and &#x03C1;<sub>crit</sub>
          alike &mdash; that is what a coarse-graining length <em>is</em>. Doing both, <strong>&#x2113;
          cancels</strong>:
        </p>
        <div style={{ textAlign: 'center', margin: '0.75rem 0', fontSize: '1rem', color: 'var(--color-text-primary)' }}>
          x(&#x2113;) = &#x03C1;/&#x03C1;<sub>crit</sub> = (3/16&#x03C0;&sup2;)&middot;&#x03B2;<sub>J</sub>&sup2;&middot;[V<sub>c</sub>(&#x2113;)/V<sub>flat</sub>]&sup2;
          = 0.0190&middot;&#x03B2;<sub>J</sub>&sup2;&middot;[V<sub>c</sub>/V<sub>flat</sub>]&sup2;
        </div>
        <p>
          <strong>x is a virial ratio.</strong> For any bound system V<sub>c</sub> &#x2272; V<sub>flat</sub>, so
          x &#x2272; 0.019&#x03B2;<sub>J</sub>&sup2; &#x2248; <strong>0.02 in every sector at every
          &#x2113;</strong> &mdash; the knee is out of reach by roughly 40&times; for free, with no fitted
          parameter. Verified numerically on all five plotter disks (max over &#x2113;:
          1.7&times;10<sup>&minus;3</sup> to 1.1&times;10<sup>&minus;2</sup>) and to four digits at Cassini and
          wide-binary scales. It is kernel-robust: a Gaussian kernel gives coefficient 0.00505, moving the ceiling
          <em> down</em> a further 3.8&times;. This is the only galaxy-sector statement on this site that requires
          <strong> no estimator choice, no velocity definition, and no contested external measurement.</strong>
          The single escape found is &#x03B2;<sub>J</sub> = 4.5, which lifts the self-consistent x to 0.385
          (C = 0.57) &mdash; at 17&#x03C3; from this page&apos;s own calibration. <strong>No refutation is added
          to the ledger from this</strong> (it remains at 6): it closes a question rather than opening one.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
          At the site&apos;s working A = 0.029, NGC 3198 gives
          &#x03C1;/&#x03C1;<sub>crit</sub> = 9.45&times;10<sup>&minus;4</sup> &mdash; recomputed from the{' '}
          <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>plotter</Link>&apos;s own{' '}
          <code>midplaneDensity()</code> (&#x03C1;(0) = 0.6164 M<sub>&#x2609;</sub> pc<sup>&minus;3</sup>), so it
          can be re-run. Values of 0.934, 1.43&times;10<sup>&minus;3</sup> and 0.91 briefly shown here on
          2026-08-05 were high by a factor of 1.515 and are corrected.
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
