'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function Superconductivity() {
  return (
    <>
      <Breadcrumbs currentPath="/superconductivity" />
      <h1>Superconductivity</h1>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <ValidationBadge status="reparametrization" />
        <ValidationBadge status="failed" label="T_c: 6.5× Wrong" />
      </div>

      <section className="section content-width">
        <p>
          The superconductivity arc (Sessions #292, #297-300) is Synchronism&apos;s most instructive
          failure. It produced a formalism that looked new but turned out to be known physics in
          different notation.
        </p>

        <h2>What Was Derived</h2>
        <EquationDisplay label="The η reachability factor">
          T<sub>c</sub> = &#x0394; / (1.76 k<sub>B</sub> &#x03B7;)
        </EquationDisplay>
        <p>
          &#x03B7; (eta) was derived as a &ldquo;reachability factor&rdquo; measuring how efficiently
          pair-breaking disrupts superconductivity. It was calculated for cuprates and pnictides,
          and a material design protocol was proposed.
        </p>

        <h2>What Happened</h2>
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-warm)' }}>
          <h3 style={{ color: 'var(--color-accent-warm)' }}>Session #616 Audit Result</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            &#x03B7; &#x2261; Abrikosov-Gor&apos;kov pair-breaking efficiency, known since 1960.
            The T<sub>c</sub> formula predicts 607K for YBCO; actual T<sub>c</sub> is 93K (6.5&times; wrong).
            All 23 predictions (P292-P300) are standard condensed matter physics in &#x03B7; notation.
            <strong> Zero unique predictions.</strong>
          </p>
        </div>

        <h2>The One Genuine Contribution</h2>
        <p>
          Framing pair-breaking efficiency as a <em>materials design optimization target</em> is
          genuinely useful. Instead of searching for new superconductors by trial and error,
          optimizing &#x03B7; directly gives a design principle. This is a legitimate contribution
          even though the physics was already known.
        </p>

        <h2>Lessons Learned</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>
            <strong>Check the literature first.</strong> The 1960 Abrikosov-Gor&apos;kov result should
            have been found before 6 sessions were spent deriving it.
          </li>
          <li>
            <strong>Reparametrization &#x2260; discovery.</strong> Writing known physics in a new
            notation is not a contribution unless it enables new computations.
          </li>
          <li>
            <strong>T<sub>c</sub> predictions require real physics.</strong> A single coherence
            parameter cannot replace the detailed electronic structure calculations that determine
            superconducting transition temperatures.
          </li>
        </ul>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/materials-predictions" className="btn-primary">
            Next: Materials Predictions &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/superconductivity" />
    </>
  );
}
