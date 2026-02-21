'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const scales = [
  { exp: -35, label: 'Planck length', system: 'Quantum vacuum', ncorr: 1, gamma: 2.0, desc: 'Smallest meaningful length. Single quantum fluctuation.' },
  { exp: -15, label: 'Nucleus', system: 'Protons/neutrons', ncorr: 3, gamma: 1.15, desc: 'Strong force binds quarks into nucleons. ~3 correlated quarks.' },
  { exp: -10, label: 'Atom', system: 'Electron cloud', ncorr: 1, gamma: 2.0, desc: 'Single electron orbitals. Each electron largely independent.' },
  { exp: -9, label: 'Molecule', system: 'Chemical bonds', ncorr: 4, gamma: 1.0, desc: 'Water: ~4 molecules in hydrogen bond network. γ ≈ 1 boundary.' },
  { exp: -8, label: 'Protein', system: 'Folded structure', ncorr: 50, gamma: 0.28, desc: 'Enzyme active site: 20-50 atoms move as coherent unit.' },
  { exp: -7, label: 'Virus', system: 'Self-assembly', ncorr: 200, gamma: 0.14, desc: 'Capsid proteins self-assemble via coherent interactions.' },
  { exp: -6, label: 'Bacterium', system: 'Minimal cell', ncorr: 1000, gamma: 0.06, desc: 'Coordinated metabolism. ~1000 molecules in signaling cascades.' },
  { exp: -5, label: 'Cell', system: 'Eukaryote', ncorr: 10000, gamma: 0.02, desc: 'Complex organelle coordination. Highly coherent system.' },
  { exp: -2, label: 'Brain', system: 'Neural network', ncorr: '10⁹', gamma: '~10⁻⁵', desc: 'Consciousness threshold C ≈ 0.50. Massive correlated firing.' },
  { exp: 0, label: 'Human', system: 'Organism', ncorr: '10²³', gamma: '~10⁻¹²', desc: 'Classical. γ ≈ 0. Fully decoherent at macro scale.' },
  { exp: 7, label: 'Earth', system: 'Planet', ncorr: '10⁵⁰', gamma: '~10⁻²⁵', desc: 'Gravitationally bound. Classical mechanics dominant.' },
  { exp: 13, label: 'Solar system', system: 'Star + planets', ncorr: '10⁵⁷', gamma: '~10⁻²⁹', desc: 'Kepler orbits. N-body gravitational coherence.' },
  { exp: 18, label: 'Galaxy arm', system: 'Stellar streams', ncorr: 1, gamma: 2.0, desc: 'Stars independent! γ = 2. This is where "dark matter" lives.' },
  { exp: 21, label: 'Galaxy', system: 'Full disk', ncorr: 1, gamma: 2.0, desc: 'Each star uncorrelated. C(ρ) with γ=2 predicts rotation curves.' },
  { exp: 23, label: 'Galaxy cluster', system: 'ICM + galaxies', ncorr: 1, gamma: 2.0, desc: 'Intracluster medium. Gravity-only interactions at cosmic scale.' },
  { exp: 26, label: 'Observable universe', system: 'Cosmic web', ncorr: 1, gamma: 2.0, desc: 'Largest structures. MRH defines the cosmic horizon.' },
];

export default function ScaleNavigator() {
  const [sliderVal, setSliderVal] = useState(50);

  const idx = Math.min(Math.floor((sliderVal / 100) * scales.length), scales.length - 1);
  const current = scales[idx];

  const barWidth = 600;
  const markerX = (idx / (scales.length - 1)) * 100;

  return (
    <>
      <Breadcrumbs currentPath="/scale-navigator" />
      <h1>Scale Navigator</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Slide from Planck (10<sup>&minus;35</sup>m) to cosmic (10<sup>26</sup>m) and see
          how &#x03B3; changes at every scale. The same equation applies everywhere.
        </p>

        <div className="card card-highlight" style={{ marginBottom: '1.5rem', textAlign: 'center', padding: '2rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            {current.system}
          </p>
          <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.25rem 0' }}>{current.label}</h2>
          <p style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            10<sup>{current.exp}</sup> m
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>N<sub>corr</sub></p>
              <p style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>{current.ncorr}</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>&#x03B3;</p>
              <p style={{ fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--color-accent-blue)' }}>
                {current.gamma}
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            {current.desc}
          </p>
        </div>

        {/* Scale bar visualization */}
        <div className="card" style={{ marginBottom: '1rem' }}>
          <svg viewBox={`0 0 ${barWidth} 60`} style={{ width: '100%', height: 'auto' }}>
            {/* Background bar */}
            <defs>
              <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="30%" stopColor="#6366f1" />
                <stop offset="55%" stopColor="#f59e0b" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <rect x="20" y="15" width={barWidth - 40} height="8" rx="4" fill="url(#scaleGrad)" opacity="0.4" />
            {/* Marker */}
            <circle
              cx={20 + (markerX / 100) * (barWidth - 40)}
              cy="19"
              r="8"
              fill="#8b5cf6"
              stroke="#fff"
              strokeWidth="2"
            />
            {/* Labels */}
            <text x="20" y="45" fill="#6b7280" fontSize="9">10⁻³⁵m</text>
            <text x={barWidth - 20} y="45" fill="#6b7280" fontSize="9" textAnchor="end">10²⁶m</text>
            <text x={barWidth / 2} y="45" fill="#f59e0b" fontSize="9" textAnchor="middle">γ ≈ 1</text>
          </svg>
        </div>

        <input
          type="range" min="0" max="100" value={sliderVal}
          onChange={e => setSliderVal(parseInt(e.target.value))}
          style={{ width: '100%', marginBottom: '1.5rem' }}
        />

        <h2>Key Insight: &#x03B3; = 2 at Galaxy Scale</h2>
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Stars in a galaxy are <strong>uncorrelated</strong> (N<sub>corr</sub> = 1, &#x03B3; = 2).
            This is the same &#x03B3; as an ideal gas. The &ldquo;dark matter&rdquo; signal emerges
            from applying the coherence function at this classical limit &mdash; patterns interacting
            indifferently with each other, coupled only by gravity.
          </p>
        </div>

        <h2>All Scales at a Glance</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.4rem' }}>Scale</th>
                <th style={{ textAlign: 'left', padding: '0.4rem' }}>System</th>
                <th style={{ textAlign: 'right', padding: '0.4rem' }}>N<sub>corr</sub></th>
                <th style={{ textAlign: 'right', padding: '0.4rem' }}>&#x03B3;</th>
              </tr>
            </thead>
            <tbody>
              {scales.map(s => (
                <tr key={s.exp} style={{
                  borderBottom: '1px solid var(--color-dark-border)',
                  backgroundColor: s.exp === current.exp ? 'rgba(139,92,246,0.1)' : 'transparent',
                }}>
                  <td style={{ padding: '0.4rem', color: 'var(--color-text-secondary)' }}>10<sup>{s.exp}</sup>m</td>
                  <td style={{ padding: '0.4rem', color: 'var(--color-text-secondary)' }}>{s.label}</td>
                  <td style={{ textAlign: 'right', padding: '0.4rem', fontFamily: 'monospace', color: 'var(--color-text-muted)' }}>{s.ncorr}</td>
                  <td style={{ textAlign: 'right', padding: '0.4rem', fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>{s.gamma}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <RelatedConcepts currentPath="/scale-navigator" />
    </>
  );
}
