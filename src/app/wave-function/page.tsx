'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function WaveFunction() {
  return (
    <>
      <Breadcrumbs currentPath="/wave-function" />
      <h1>Wave Function Interpretation</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          What does &#x03C8; (the wave function) actually describe? Copenhagen says it&apos;s our
          knowledge. Many-Worlds says it&apos;s everything that exists. Bohmians say it&apos;s a
          guiding field. Synchronism offers a different answer: &#x03C8; describes phase patterns
          in the coherence field.
        </p>

        <h2>&#x03C8; as Phase Pattern</h2>
        <EquationDisplay size="lg" label="Synchronism interpretation of the wave function">
          &#x03C8;(x, t) = phase pattern in the coherence field
        </EquationDisplay>
        <p>
          In Synchronism, the wave function is neither epistemological (about what we know) nor
          ontological in the Many-Worlds sense (a branching multiverse). It is a description of
          how coherence is distributed across a system&apos;s configuration space. The wave function
          is real, but what it describes is <em>coherence structure</em>, not matter or probability.
        </p>

        <h2>What |&#x03C8;|&sup2; Means</h2>
        <div className="card card-highlight" style={{ margin: '1.5rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>|&#x03C8;|&sup2; = coherence distribution.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            The squared modulus of the wave function gives the coherence density at each point in
            configuration space. Regions with high |&#x03C8;|&sup2; have high coherence &mdash; the
            system&apos;s phase pattern is concentrated there. The Born rule (P = |&#x03C8;|&sup2;)
            follows because measurement probabilities are proportional to coherence density.
          </p>
        </div>

        <h2>Collapse as MRH Crossing</h2>
        <p>
          The most contentious aspect of the wave function is collapse: the abrupt transition
          from superposition to a definite outcome upon measurement. Synchronism reframes this:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8' }}>Before Measurement</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              &#x03C8; describes a spread-out phase pattern. Coherence is distributed across multiple
              branches. &#x03B3; is high. The system is within its own MRH &mdash; all branches are
              mutually relevant and can interfere.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>During Measurement</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The system couples to a macroscopic apparatus. N<sub>corr</sub> increases rapidly.
              &#x03B3; drops. The MRH contracts. Different branches of the superposition become
              mutually irrelevant &mdash; they cross each other&apos;s MRH.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e' }}>After Measurement</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Each branch exists independently beyond the other&apos;s MRH. From within any branch,
              the system appears to have &ldquo;collapsed&rdquo; to a definite outcome. But no
              physical discontinuity occurred &mdash; only an MRH boundary crossing.
            </p>
          </div>
        </div>

        <h2>Comparison of Interpretations</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ fontSize: '1rem' }}>Copenhagen</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#x03C8; = knowledge. Collapse = updating our information.
              Problem: whose knowledge? What counts as measurement?
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '1rem' }}>Many-Worlds</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#x03C8; = reality. No collapse; all branches exist.
              Problem: why do we experience probabilities matching |&#x03C8;|&sup2;?
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '1rem' }}>Bohmian</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#x03C8; = pilot wave guiding real particles.
              Problem: non-local, requires preferred foliation of spacetime.
            </p>
          </div>
          <div className="card" style={{ border: '1px solid var(--color-accent-violet)' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--color-accent-violet)' }}>Synchronism</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#x03C8; = phase pattern. Collapse = MRH crossing.
              No observer needed. No multiverse required. No hidden variables.
            </p>
          </div>
        </div>

        <h2>Key Distinction: Collapse Is Not Physical</h2>
        <p>
          In Synchronism, wave function collapse is not a physical event. It does not require
          consciousness, it does not violate unitarity, and it does not create new branches of
          reality. It is a boundary crossing &mdash; the point at which correlations between
          branches become irrelevant. This is as physical as a star crossing the cosmic horizon:
          nothing happens <em>to</em> the star, it simply becomes inaccessible from our vantage point.
        </p>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '1.5rem' }}>
          This interpretation does not change the predictions of quantum mechanics. It changes
          what the formalism <em>means</em>. Whether that constitutes progress or mere relabeling
          depends on whether you think the measurement problem is a real problem.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/decoherence-mrh" className="btn-primary">
            Next: Decoherence at the MRH &rarr;
          </Link>
          <Link href="/observer-problem" className="btn-secondary">
            The Observer Problem
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/wave-function" />
    </>
  );
}
