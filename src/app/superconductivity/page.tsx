'use client';

import Link from 'next/link';
import PathNextButtons from '@/components/PathNextButtons';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function Superconductivity() {
  return (
    <>
      <Breadcrumbs currentPath="/superconductivity" />
      <PathNav currentPath="/superconductivity" />
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
        <p>
          <strong>Why does this page say nothing about C(ρ)?</strong> Because nothing connects them: this formula contains no C, ρ or N<sub>corr</sub>. The archive calls &#x03B7; an Abrikosov&ndash;Gor&apos;kov &ldquo;pair-breaking efficiency&rdquo;. That is a label, and it has not been checked here against Abrikosov&ndash;Gor&apos;kov theory, whose T<sub>c</sub> relation is a digamma equation in a pair-breaking parameter and which lowers T<sub>c</sub>. Taken at face value, &#x03B7; &lt; 1 in the formula above raises T<sub>c</sub>.
        </p>

        <h2>What Happened</h2>
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-warm)' }}>
          <h3 style={{ color: 'var(--color-accent-warm)' }}>Session #616 Audit Result</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            The archive labels &#x03B7; as Abrikosov-Gor&apos;kov pair-breaking efficiency (1960); see the caveat below.
            The T<sub>c</sub> formula predicts 607K for YBCO; actual T<sub>c</sub> is 93K (6.5&times; wrong).
            <span style={{ display: 'block', marginTop: '0.4rem', fontSize: '0.9em' }}>
              <strong>The inputs, so you can reproduce it:</strong> T<sub>c</sub> = &#x0394;/(1.76 k<sub>B</sub> &#x03B7;) with
              &#x0394; = 35 meV (YBCO&apos;s maximum d-wave gap) and &#x03B7; = 0.38 (Session #297&apos;s value): 35 / (1.76 &times; 0.08617 &times; 0.38)
              = 607 K (Session #616, Test 5). At &#x03B7; = 1 the formula is exactly BCS weak coupling and gives 231 K, so
              &#x03B7; &lt; 1 <em>raises</em> T<sub>c</sub>. Two further reasons the formula cannot describe a cuprate: real
              Abrikosov&ndash;Gor&apos;kov pair breaking enters through the digamma equation
              ln(T<sub>c0</sub>/T<sub>c</sub>) = &#x03C8;(&frac12; + &#x03B1;/2&#x03C0;k<sub>B</sub>T<sub>c</sub>) &minus; &#x03C8;(&frac12;) and lowers
              T<sub>c</sub>, not as a factor on &#x0394;; and d-wave cuprates have 2&#x0394;/k<sub>B</sub>T<sub>c</sub> &asymp; 5&ndash;9, not BCS&apos;s 3.53,
              which is why Session #297 had to add a 0.4 d-wave factor by hand.
            </span>
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
          <PathNextButtons currentPath="/superconductivity" />
        </div>
      </section>

      <RelatedConcepts currentPath="/superconductivity" />
    </>
  );
}
