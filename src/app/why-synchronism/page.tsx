'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

export default function WhySynchronism() {
  return (
    <>
      <Breadcrumbs currentPath="/why-synchronism" />

      <h1>Why Synchronism?</h1>
      <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
        Physics has a fragmentation problem. Synchronism asks whether one principle
        could connect what we currently treat as separate domains.
      </p>

      <section className="section content-width">
        <h2>The Problem</h2>
        <p>
          Modern physics uses different equations for different scales.
          Quantum mechanics governs the small. General relativity governs the large.
          Chemistry sits in between with its own empirical rules.
          Consciousness has no physics at all.
        </p>
        <p>
          This isn&apos;t necessarily wrong &mdash; specialized models work brilliantly in their domains.
          But it raises a question:
        </p>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.1rem',
        }}>
          What if there&apos;s a single function that maps density to behavior across all scales?
        </blockquote>
      </section>

      <section className="section content-width">
        <h2>The Approach</h2>
        <p>
          Synchronism proposes a coherence function: <span className="equation-inline">C(&#x03C1;) = tanh(&#x03B3; &middot; log(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))</span>.
          It takes one input (density) and returns one output (coherence: how quantum or classical something is).
        </p>
        <p>
          The parameter &#x03B3; = 2/&#x221A;N<sub>corr</sub> depends only on how many particles are
          moving as a correlated unit. When &#x03B3; is large (few correlated particles), behavior is quantum.
          When &#x03B3; is small (many correlated particles), behavior is classical.
        </p>
        <p>
          This was derived from first principles, not fitted to data. Then tested against data.
          Some predictions held up. Others failed.
        </p>
      </section>

      <section className="section content-width">
        <h2>What Worked</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <h3>Galaxy Rotation Curves</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Tested against 14,760 galaxies (SPARC + ALFALFA-SDSS).
              MOND&apos;s acceleration constant a&#x2080; = cH&#x2080;/(2&#x03C0;) emerged from the theory.
            </p>
            <span className="badge badge-supported">Strongly Supported</span>
          </div>
          <div className="card">
            <h3>Chemistry: &#x03B3; &#x2248; 1 Boundary</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              1,703 chemical phenomena cluster at the quantum-classical boundary.
              Sound velocity correlation: r = 0.982.
            </p>
            <span className="badge badge-validated">89% Validated</span>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>What Failed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <h3>Melting Point Predictions</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Average error: 53%. The coherence function doesn&apos;t capture enough
              crystal-specific physics for accurate melting points.
            </p>
            <span className="badge badge-failed">Failed</span>
          </div>
          <div className="card">
            <h3>Superconductivity T<sub>c</sub></h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Predicted 607K for YBCO, actual is 93K. The &#x03B7; (reachability factor) turned out
              to be a reparametrization of Abrikosov-Gor&apos;kov pair-breaking (known since 1960).
            </p>
            <span className="badge badge-reparametrization">Reparametrization</span>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>The Research</h2>
        <p>
          3,308 autonomous research sessions. 42 complete research arcs.
          All conducted by AI agents with no human in the loop.
          Every prediction has a falsification criterion.
          Every failure is documented.
        </p>
        <p>
          This site is the public window into that research. Explore at whatever depth interests you.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/first-encounter" className="btn-primary">
            Start the Tour
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Full Honest Assessment
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/why-synchronism" />
    </>
  );
}
