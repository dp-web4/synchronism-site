'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function ParameterDerivations() {
  return (
    <>
      <Breadcrumbs currentPath="/parameter-derivations" />
      <h1>Parameter Derivations</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '65ch' }}>
        The coherence function has two kinds of parameters: the <strong>functional form</strong> (tanh,
        &#x03B3; = 2/&#x221A;N<sub>corr</sub>) which is derived from mean-field theory, and
        the <strong>scaling constants</strong> (A, a&#x2080;, &#x03A3;&#x2080;, R&#x2080;) which are
        derived from dimensional analysis with fundamental constants but show 3&ndash;12% errors
        against observations. Whether those errors reflect approximation limits or hidden calibration
        is an open question.
      </p>

      <section className="section content-width">
        <h2>The Complete Chain</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>1. &#x03B3; = 2/&#x221A;N<sub>corr</sub></h3>
              <ValidationBadge status="validated" label="Exact" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #64-65</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              From 6D phase space (3 position + 3 momentum): effective DOF contracts to yield factor of 2.
              N<sub>corr</sub> enters via central limit theorem for correlated ensembles.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>2. tanh form</h3>
              <ValidationBadge status="validated" label="Exact" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #66</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Mean-field theory derivation. The bounded, monotonic, smooth sigmoid that arises from
              self-consistent ordering in many-body systems IS tanh. Not a choice; a consequence.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>3. A = 4&#x03C0;/(&#x03B1;&sup2;GR&#x2080;&sup2;) &#x2248; 0.029</h3>
              <ValidationBadge status="validated" label="5% Error" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #66</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Relates fine structure constant, gravitational constant, and characteristic length scale
              to the proportionality between critical density and rotation velocity.
              Empirical: 0.028. Derived: 0.029.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>4. a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.08&times;10<sup>&minus;10</sup> m/s&sup2;</h3>
              <ValidationBadge status="validated" label="10% Error" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #87-88</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              MOND&apos;s acceleration constant emerges from the coherence function.
              In MOND, a&#x2080; is fundamental. In Synchronism, it&apos;s <strong>emergent</strong> from
              cosmological parameters c and H&#x2080;.
              Milgrom&apos;s observed: 1.20&times;10<sup>&minus;10</sup>.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>5. &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G) &#x2248; 110 M&#x2609;/pc&sup2;</h3>
              <ValidationBadge status="validated" label="12% Error" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #89</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Freeman&apos;s surface density law. Observed: 124 M&#x2609;/pc&sup2;. From first principles.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>6. R&#x2080; = V&sup2;/(3a&#x2080;)</h3>
              <ValidationBadge status="validated" label="3% Error" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #91</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Characteristic radius from velocity and acceleration. 97% accuracy against observed values.
            </p>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>What&apos;s Notable</h2>
        <p>
          The derivation chain uses fundamental constants (c, G, &#x03B1;, H&#x2080;) plus one
          observable (V<sub>flat</sub>). The functional form (tanh, &#x03B3;) has zero free parameters.
          The scaling constants (A, a&#x2080;, &#x03A3;&#x2080;, R&#x2080;) show 3&ndash;12%
          agreement with observations.
        </p>
        <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.9rem' }}>
          <strong>Honest caveat:</strong> The 3&ndash;12% errors could reflect either (a) legitimate
          approximation limits in the dimensional analysis, or (b) implicit calibration through
          choice of V<sub>flat</sub> as input. Distinguishing these requires independent derivation.
          The landing page describes the scaling constants as &ldquo;fitted&rdquo; &mdash; that may be
          the more conservative and accurate framing.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/compression-action" className="btn-primary">
            Next: Compression Action &rarr;
          </Link>
          <Link href="/equation-walkthrough" className="btn-secondary">
            Interactive Walkthrough
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/parameter-derivations" />
    </>
  );
}
