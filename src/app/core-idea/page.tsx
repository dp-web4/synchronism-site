'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function CoreIdea() {
  return (
    <>
      <Breadcrumbs currentPath="/core-idea" />

      <h1>The Core Idea</h1>
      <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
        One function. Three parameters. Every scale from Planck to cosmic.
      </p>

      <section className="section content-width">
        <div className="equation" style={{ fontSize: '1.5rem' }}>
          C(&#x03C1;) = tanh(&#x03B3; &middot; log(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>&#x03C1;</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>Presence</Link>: compatible structural elements within a system&apos;s relevancy boundary
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>C</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Coherence: 0 = quantum, 1 = classical
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>&#x03B3;</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              2/&#x221A;N<sub>corr</sub>: coupling strength
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>&#x03C1;<sub>crit</sub></div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              A &times; V<sub>flat</sub>&sup2;: transition density
            </div>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>Why These Specific Choices?</h2>

        <h3>Why tanh?</h3>
        <p>
          tanh is an S-shaped curve that smoothly transitions from 0 to 1 &mdash; think of it as a
          dimmer switch between &ldquo;fully quantum&rdquo; and &ldquo;fully classical.&rdquo; The function
          must be bounded [0, 1], monotonic, and smooth. tanh arises naturally in mean-field
          models (e.g., the Ising model order parameter m = tanh(&beta;Jzm)). Other sigmoids
          (logistic, error function) share the same qualitative properties; tanh is a natural
          choice from the Landau theory family, not the only possible one.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <Link href="/two-reframes" style={{ color: 'var(--color-accent-blue)' }}>Need an analogy first?</Link>
          {' '}&middot;{' '}
          <Link href="/coherence-function" style={{ color: 'var(--color-accent-blue)' }}>Full derivation &rarr;</Link>
        </p>

        <h3>Why &#x03B3; = 2/&#x221A;N<sub>corr</sub>?</h3>
        <p>
          The 1/&#x221A;N<sub>corr</sub> dependence resembles central-limit-theorem scaling
          (fluctuations ~ 1/&#x221A;N), which is generic statistics for correlated ensembles.
          N<sub>corr</sub> (number of correlated particle units) is the physically measurable
          quantity. The factor of 2 is motivated by phase-space arguments (6D contracted to 3
          effective) but should be understood as a motivated ansatz rather than a rigorous derivation.
        </p>
        <p><Link href="/gamma-parameter" style={{ color: 'var(--color-accent-blue)' }}>Full derivation &rarr;</Link></p>

        <h3>Why log?</h3>
        <p>
          Density spans 80+ orders of magnitude (from interstellar gas at 10<sup>&minus;24</sup> g/cm&sup3;
          to neutron stars at 10<sup>14</sup> g/cm&sup3;). The logarithm compresses this range into
          something the tanh can work with.
        </p>
      </section>

      <section className="section content-width">
        <h2>What It Predicts</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>&#x03B3; &laquo; 1: Quantum Regime</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Few correlated particles, strong coherence effects. Superposition, interference,
                  entanglement. The domain of quantum mechanics.
                </p>
              </div>
              <ValidationBadge status="validated" />
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>&#x03B3; &#x2248; 1: The Boundary</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Phase transitions, chemistry, catalysis, biology. Where quantum meets classical.
                  1,703 phenomena cluster here at 89% validation rate.
                </p>
              </div>
              <ValidationBadge status="validated" label="89% Validated" />
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>&#x03B3; &raquo; 1: Classical Regime</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Many correlated particles, classical behavior. Galaxy dynamics, everyday physics.
                  The domain of Newton and general relativity.
                </p>
              </div>
              <ValidationBadge status="validated" />
            </div>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>Choose Your Path</h2>
        <div className="grid-2">
          <Link href="/coherence-function" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-blue)' }}>The Math</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Dive into the equation: derivations, proofs, parameter origins
            </p>
          </Link>
          <Link href="/galaxy-rotation" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-blue)' }}>The Evidence</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              See it tested against 14,760 galaxies
            </p>
          </Link>
          <Link href="/gamma-boundary" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-blue)' }}>The Chemistry</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Explore 1,703 phenomena at the &#x03B3; &#x2248; 1 boundary
            </p>
          </Link>
          <Link href="/honest-assessment" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-warm)' }}>The Failures</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Where the theory falls short and what that teaches us
            </p>
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/core-idea" />
    </>
  );
}
