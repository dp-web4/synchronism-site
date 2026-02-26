'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function GammaParameter() {
  return (
    <>
      <Breadcrumbs currentPath="/gamma-parameter" />
      <h1>The &#x03B3; Parameter</h1>
      <ValidationBadge status="validated" label="Derived from First Principles" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="Universal coupling strength">
          &#x03B3; = 2 / &#x221A;N<sub>corr</sub>
        </EquationDisplay>

        <p>
          &#x03B3; (gamma) is the single parameter that determines which regime a system is in.
          It depends on only one thing: <strong>N<sub>corr</sub></strong>, the number of particles
          moving as a correlated unit.
        </p>

        <h2>Where the 2 Comes From</h2>
        <p>
          Phase space has 6 dimensions (3 position + 3 momentum). Through contraction to effective
          degrees of freedom, this yields a factor of 2. This was derived in Sessions #64-65,
          not fitted to data.
        </p>
        <p>
          The factor isn&apos;t arbitrary. If you change it, the chemistry correlations degrade and the
          cosmological derivations fail.
        </p>

        <h2>Where &#x221A;N<sub>corr</sub> Comes From</h2>
        <p>
          In a system of N<sub>corr</sub> correlated particles, the effective coupling decays as
          1/&#x221A;N<sub>corr</sub>. This is the standard central limit theorem result: fluctuations
          in a correlated ensemble scale as 1/&#x221A;N.
        </p>

        <h2>The Three Regimes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8' }}>&#x03B3; &gt; 1.5 &mdash; Quantum</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Few correlated particles (N<sub>corr</sub> &lt; 2). Individual electrons, photons,
              isolated quantum systems. Superposition, interference, entanglement dominate.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Example: Single electron (N<sub>corr</sub> = 1, &#x03B3; = 2)
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>&#x03B3; &#x2248; 1 &mdash; The Boundary</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              N<sub>corr</sub> &#x2248; 4. This is where phase transitions happen, where chemistry
              gets interesting, where molecules become biology. 1,703 chemical phenomena cluster here.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Example: Small molecule cluster, catalytic site, neural synapse
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e' }}>&#x03B3; &lt; 0.5 &mdash; Classical</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Many correlated particles (N<sub>corr</sub> &gt; 16). Crystals, macroscopic objects,
              galaxies. Classical mechanics, thermodynamics, general relativity.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Example: Crystal lattice (N<sub>corr</sub> = 10<sup>24</sup>, &#x03B3; &#x2248; 10<sup>&minus;12</sup>)
            </p>
          </div>
        </div>

        <h2>Structural Interpretation: MRH Coupling Density</h2>
        <p>
          Beyond the formula, &#x03B3; has a structural meaning: it encodes how efficiently compatible
          presence within an{' '}
          <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH</Link>{' '}
          converts into coherent state transitions.
        </p>
        <p>
          Conceptually: &#x03B3; &#x221D; &#x03BB; &middot; K<sub>MRH</sub> / D<sub>MRH</sub>, where
          &#x03BB; = interaction strength, K = connectivity (interaction density between elements),
          and D = dimensionality (effective degrees of freedom).
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: '#38bdf8' }}>Quantum scale</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              Few DOF, strong coupling &rarr; high &#x03B3;
            </span>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: 'var(--color-accent-violet)' }}>Chemical systems</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              Moderate dimensionality, variable coupling &rarr; medium &#x03B3;
            </span>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: '#22c55e' }}>Biological systems</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              High dimensionality, structured coupling &rarr; moderate-to-low effective &#x03B3;
            </span>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: 'var(--color-text-muted)' }}>Cosmological scale</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              Enormous dimensionality, weak coupling (gravity) &rarr; low &#x03B3;
            </span>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          This naturally explains why emergence thresholds differ across scales. High connectivity
          or strong interaction strength raises &#x03B3;; dimensional redundancy dilutes it.
          If an MRH expands to include more weakly-coupled DOF, &#x03B3; decreases. If it contracts
          to a tightly interacting subset, &#x03B3; increases.
        </p>

        <h2>Unification Discovery</h2>
        <p>
          Early research used &#x03B3; = 2.0 for astrophysics (where stars are uncorrelated classical
          particles, N<sub>corr</sub> = 1) and varying &#x03B3; for chemistry (where quantum
          correlations exist). The unification (January 2026) showed these are the <strong>same formula</strong>:
          &#x03B3; = 2/&#x221A;N<sub>corr</sub> always.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          See: <Link href="/gamma-boundary" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; &#x2248; 1 boundary</Link> for
          the chemistry evidence, <Link href="/scale-invariance" style={{ color: 'var(--color-accent-blue)' }}>Scale Invariance</Link> for
          the 80-order-of-magnitude span.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/critical-density" className="btn-primary">
            Next: Critical Density &rarr;
          </Link>
          <Link href="/gamma-calculator" className="btn-secondary">
            Try It: &#x03B3; Calculator
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/gamma-parameter" />
    </>
  );
}
