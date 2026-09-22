'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function ChemistryPhaseTransitions() {
  return (
    <>
      <Breadcrumbs currentPath="/chemistry-phase-transitions" />
      <h1>Phase Transitions in Chemistry</h1>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <ValidationBadge status="reparametrization" label="Transition Location (mostly Debye θ_D restated)" />
        <ValidationBadge status="failed" label="Critical Exponents" />
      </div>

      <section className="section content-width">
        <p>
          Does coherence tell you <em>where</em> a material changes phase? The archive&apos;s answer was yes, at the
          &#x03B3;&nbsp;&#x2248;&nbsp;1 boundary. The audit found that about 86% of that &ldquo;89% validation&rdquo; restates the
          Debye temperature &theta;<sub>D</sub> (1912) in new notation. That makes it a reparametrization, not a
          prediction. The framework also fails to predict <em>how</em> transitions unfold (critical exponents about
          2&times; off), and melting points are 53% off on average. The per-material &#x03B3; values below come from
          &#x03B3;&nbsp;=&nbsp;2/&#x221A;N<sub>corr</sub>, a formula that is{' '}
          <Link href="/gamma-calculator">audited-negative</Link> (its sign is inverted for collective systems). Read
          them as the archive&apos;s original picture, not current results.
        </p>

        <h2>What the Archive Claimed (February 2026)</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Melting/Boiling</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Phase transitions happen at the &#x03B3; &#x2248; 1 boundary where coherence changes
              rapidly. The function correctly identifies which materials have higher/lower transition
              temperatures relative to each other.
            </p>
          </div>
          <div className="card">
            <h3>Superconductivity</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Cooper pairs represent 2-body correlations (N<sub>corr</sub> = 2, &#x03B3; = &#x221A;2).
              The transition to superconductivity is a coherence phase transition.
            </p>
          </div>
          <div className="card">
            <h3>Superfluidity</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Bose-Einstein condensation = macroscopic quantum coherence. The entire fluid has
              N<sub>corr</sub> = N (all particles correlated), driving &#x03B3; &rarr; 0.
            </p>
          </div>
          <div className="card">
            <h3>Magnetic Transitions</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Curie/N&eacute;el temperatures mark coherence transitions in spin systems.
              Correctly located but spin-orbit coupling dominates, which C(&#x03C1;) ignores.
            </p>
          </div>
        </div>

        <h2>What It Gets Wrong</h2>
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--color-accent-warm)' }}>Critical Exponents: 2&times; Off</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Real phase transitions belong to universality classes with specific critical exponents
            (&#x03B2;, &#x03B3;, &#x03B4;, etc.). The tanh form gives mean-field exponents, which
            differ from observed values by ~2&times;. This is a known limitation of any mean-field
            theory &mdash; fluctuations near the critical point matter, and C(&#x03C1;) doesn&apos;t
            account for them. Strictly, C(&#x03C1;) has no critical point at all (it is not a self-consistent
            mean-field equation; see <Link href="/coherence-function">Coherence Function</Link>), so it produces no
            exponents of its own. The 2&times; figure compares observed exponents with mean-field ones.
          </p>
          <ValidationBadge status="failed" label="Mean-Field Limitation" />
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--color-accent-warm)' }}>Melting Points: 53% Average Error</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Crystal structure, defects, impurities, and multi-body effects dominate actual melting
            behavior. A single coherence parameter cannot capture this complexity.
          </p>
          <ValidationBadge status="failed" label="53% Error" />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/superconductivity" className="btn-primary">
            Next: Superconductivity &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/chemistry-phase-transitions" />
    </>
  );
}
