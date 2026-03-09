'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const scales = [
  { name: 'Planck', size: '10⁻³⁵ m', gamma: '~2', regime: 'Quantum', color: '#38bdf8' },
  { name: 'Subatomic', size: '10⁻¹⁵ m', gamma: '~2', regime: 'Quantum', color: '#38bdf8' },
  { name: 'Atomic', size: '10⁻¹⁰ m', gamma: '1.5-2', regime: 'Quantum', color: '#38bdf8' },
  { name: 'Molecular', size: '10⁻⁹ m', gamma: '0.5-1.5', regime: 'Boundary', color: '#8b5cf6' },
  { name: 'Cellular', size: '10⁻⁵ m', gamma: '~0.1', regime: 'Classical', color: '#22c55e' },
  { name: 'Human', size: '10⁰ m', gamma: '~10⁻¹²', regime: 'Classical', color: '#22c55e' },
  { name: 'Planetary', size: '10⁷ m', gamma: '~10⁻²⁰', regime: 'Classical', color: '#22c55e' },
  { name: 'Stellar', size: '10⁹ m', gamma: '2 (N_corr=1)', regime: 'Special', color: '#f59e0b' },
  { name: 'Galactic', size: '10²¹ m', gamma: '2 (N_corr=1)', regime: 'Special', color: '#f59e0b' },
  { name: 'Cosmic', size: '10²⁶ m', gamma: '2 (N_corr=1)', regime: 'Macro-quantum?', color: '#f59e0b' },
];

export default function ScaleInvariance() {
  return (
    <>
      <Breadcrumbs currentPath="/scale-invariance" />
      <h1>Scale Invariance</h1>
      <ValidationBadge status="speculative" label="Framework Claim" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism claims that &#x03B3; = 2/&#x221A;N<sub>corr</sub> applies at every scale from
          Planck length (10<sup>&minus;35</sup> m) to the observable universe (10<sup>26</sup> m) &mdash;
          80 orders of magnitude.
        </p>

        <h2>&#x03B3; Across Scales</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          margin: '1.5rem 0',
        }}>
          {scales.map(scale => (
            <div
              key={scale.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1rem',
                background: 'var(--color-dark-surface)',
                borderRadius: '8px',
                borderLeft: `3px solid ${scale.color}`,
              }}
            >
              <span style={{ width: '80px', fontWeight: 600, fontSize: '0.85rem' }}>{scale.name}</span>
              <span style={{ width: '80px', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontFamily: 'monospace' }}>{scale.size}</span>
              <span style={{ width: '120px', color: scale.color, fontFamily: 'serif', fontStyle: 'italic', fontSize: '0.9rem' }}>&#x03B3; {scale.gamma}</span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{scale.regime}</span>
            </div>
          ))}
        </div>

        <h2>The Interesting Part: Stars Have &#x03B3; = 2</h2>
        <p>
          Stars in a galaxy are uncorrelated classical particles (each star moves independently,
          N<sub>corr</sub> = 1). So &#x03B3; = 2. This is the same &#x03B3; as a single electron.
        </p>
        <p>
          This doesn&apos;t mean galaxies are quantum. It means the <em>statistical structure</em> of
          a galaxy (individual particles in a potential) resembles the statistical structure of
          quantum systems. Whether this is deep or coincidental is an open question.
        </p>

        <h2>The Navier-Stokes Structure Across Scales</h2>
        <p>
          Beyond the &#x03B3; parameter, the Synchronism substrate implies a deeper scale-invariant
          structure: the same Navier-Stokes form &mdash; density, velocity, pressure, viscosity &mdash;
          appears at every MRH scale, with scale-specific parameter interpretations.
        </p>
        <p>
          This is not an analogy. At the Planck scale, the saturation resistance R(I)&nbsp;=&nbsp;
          [1&nbsp;&minus;&nbsp;(I/I<sub>max</sub>)<sup>n</sup>] is literally viscosity (shear-thinning,
          power-law). Intent conservation gives exact incompressibility. The Intent transfer equation
          in continuum form IS the incompressible Navier-Stokes equation.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                {['Scale', 'Fluid element', 'Density ρ', 'Pressure P', 'Viscosity μ'].map(h => (
                  <th key={h} style={{ padding: '0.5rem 0.75rem', textAlign: 'left', color: 'var(--color-text-muted)', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Planck', 'Planck cell', 'I/I_max', 'Saturation pressure I_max−I', 'D·[1−(I/I_max)ⁿ]'],
                ['Quantum', 'Probability packet', '|ψ|²', 'Quantum pressure −Q (Madelung)', '≈ 0 (inviscid)'],
                ['Classical', 'Molecule', 'Mass density', 'nkT (kinetic)', 'η from collisions'],
                ['Neural', 'Activation patch', 'Firing rate', 'Synaptic drive − threshold', 'Inverse plasticity rate'],
                ['Social', 'Opinion cluster', 'Belief density', 'Social pressure gradient', 'Cultural resistance'],
                ['Cosmic', 'Matter overdensity', 'ρ_matter', 'Dark energy (coherence-derived)', 'Bulk viscosity'],
              ].map(([scale, el, rho, p, mu]) => (
                <tr key={scale} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '0.5rem 0.75rem', fontWeight: 600, color: 'var(--color-accent-violet)' }}>{scale}</td>
                  <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-text-secondary)' }}>{el}</td>
                  <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace', fontSize: '0.78rem' }}>{rho}</td>
                  <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace', fontSize: '0.78rem' }}>{p}</td>
                  <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace', fontSize: '0.78rem' }}>{mu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The Madelung transformation (standard QM mathematics, 1927) shows that the Schr&ouml;dinger
          equation is Euler&apos;s equation &mdash; Navier-Stokes with viscosity = 0 &mdash; for the
          quantum-scale Intent fluid. The quantum potential Q plays the role of pressure. The
          quantum-to-classical transition is a viscosity transition: isolated quantum systems are
          inviscid; decoherence introduces effective viscosity.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          The consciousness threshold C&nbsp;&#x2248;&nbsp;0.70 for recursive self-modeling corresponds to
          the critical Reynolds number for self-similar turbulent structure in the cognitive-scale fluid
          &mdash; a testable prediction, not a stipulation. Full derivation:
          Research/CFD_Reframing_NS_Scale_Invariance.md
        </p>

        <h2>Honest Limitation</h2>
        <div className="card" style={{ marginTop: '1rem' }}>
          <ValidationBadge status="failed" label="Cosmology Arc Verdict: Negative" />
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            The fractal coherence bridge hypothesis &mdash; that C(&#x03C1;) explains WHY scale hierarchy
            boundaries exist &mdash; was tested in 36 tests. Result: C(&#x03C1;) is a <em>classification
            tool</em> (what regime is this?), not an <em>explanation</em> (why this boundary here?).
            The tanh form is generic (Landau theory), and decoherence governs the quantum-classical
            boundary, which C(&#x03C1;) has no parameter for.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/mrh" className="btn-primary">
            Next: Markov Relevancy Horizon &rarr;
          </Link>
          <Link href="/scale-navigator" className="btn-secondary">
            Interactive Scale Navigator
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/scale-invariance" />
    </>
  );
}
