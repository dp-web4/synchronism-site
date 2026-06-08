'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const regions = [
  {
    id: 'classical',
    label: 'γ < 0.6 — High-N_corr (strongly correlated)',
    color: '#10b981',
    range: [0, 0.6],
    systems: ['Superconductors', 'BEC', 'Superfluids', 'Cooper pairs', 'Quantum computers'],
    physics: 'Many correlated particles (large N_corr, small γ) — the strongly correlated regime. BEC, BCS superconductors, and superfluids sit here because they have enormous N_corr, giving them very small γ (≈6×10⁻⁴ for BCS). Important: "collective" in the C-axis sense (C→1) is separate from "large N_corr" here — small γ gives a nearly flat tanh curve, so C stays near 0 at physically accessible densities despite large N_corr. See γ Calculator caveats for this documented inversion.',
  },
  {
    id: 'boundary',
    label: 'γ ≈ 1 — Boundary',
    color: '#f59e0b',
    range: [0.6, 1.4],
    systems: ['Liquid water', 'Enzymes', 'Phase transitions', 'Chemical bonds', 'Neural firing', 'Consciousness threshold'],
    physics: 'The interesting regime where collective and independent behavior balance. Phase transitions, chemical bonding, and neural dynamics occur here. The consciousness threshold conjecture (C ≈ 0.50) maps to this regime, though D and S remain undefined — see hard-problem page.',
  },
  {
    id: 'quantum',
    label: 'γ > 1.4 — Single-particle',
    color: '#8b5cf6',
    range: [1.4, 4.0],
    systems: ['Ideal gases', 'Single atoms', 'Few-particle systems', 'Uncorrelated matter'],
    physics: 'Few correlated particles (small N_corr, large γ) — the single-particle / uncorrelated regime. Individual behavior dominates; rapid decoherence. At γ = 2 (N_corr = 1), the single-particle reference used for galaxy rotation fits.',
  },
];

export default function PhaseBoundaryVisualizer() {
  const [gamma, setGamma] = useState(1.0);

  const activeRegion = regions.find(r => gamma >= r.range[0] && gamma < r.range[1]) || regions[2];

  const svgW = 600;
  const svgH = 200;
  const barY = 60;
  const barH = 40;

  return (
    <>
      <Breadcrumbs currentPath="/phase-boundary-visualizer" />
      <h1>Phase Boundary Visualizer</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The three regimes of &#x03B3; map qualitatively different correlation structures.
          Drag the slider to explore where different systems are <em>estimated</em> to fall.
          Labeled positions are approximate (&#x03B3; = 2/&#x221A;N<sub>corr</sub>;
          N<sub>corr</sub> values are estimated, not precisely measured for most systems).
        </p>
        <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          <strong style={{ color: '#ef4444' }}>What γ actually classifies:</strong>{' '}
          γ = 2/√N<sub>corr</sub> encodes the <em>counting convention</em> used for N<sub>corr</sub>,
          not a physical invariant of the system. Two unrelated systems with the same estimated N<sub>corr</sub>
          (e.g., ideal gases and galaxies, both assigned N<sub>corr</sub> = 1) share a γ value for
          methodological reasons, not physical ones. This visualizer shows how systems cluster under
          the current counting convention; it does not imply they have the same microphysics.
          See the caveat box below for details.
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto' }}>
            {/* Three regions */}
            <rect x="30" y={barY} width={(0.6 / 4.0) * 540} height={barH} fill="#10b981" opacity="0.3" rx="4" />
            <rect x={30 + (0.6 / 4.0) * 540} y={barY} width={((1.4 - 0.6) / 4.0) * 540} height={barH} fill="#f59e0b" opacity="0.3" />
            <rect x={30 + (1.4 / 4.0) * 540} y={barY} width={((4.0 - 1.4) / 4.0) * 540} height={barH} fill="#8b5cf6" opacity="0.3" rx="4" />

            {/* Boundary lines */}
            <line x1={30 + (0.6 / 4.0) * 540} y1={barY - 5} x2={30 + (0.6 / 4.0) * 540} y2={barY + barH + 5} stroke="#f59e0b" strokeDasharray="3 3" />
            <line x1={30 + (1.4 / 4.0) * 540} y1={barY - 5} x2={30 + (1.4 / 4.0) * 540} y2={barY + barH + 5} stroke="#f59e0b" strokeDasharray="3 3" />

            {/* Labels */}
            <text x={30 + (0.3 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#10b981" fontSize="11">Collective</text>
            <text x={30 + (1.0 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#f59e0b" fontSize="11">Boundary</text>
            <text x={30 + (2.7 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#8b5cf6" fontSize="11">Single-particle</text>

            {/* Anchored example markers */}
            <line x1={30 + (0.15 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (0.15 / 4.0) * 540} y2={barY + barH + 25} stroke="#10b981" strokeWidth="1" />
            <text x={30 + (0.15 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#10b981" fontSize="8">BEC/SC</text>
            <line x1={30 + (0.85 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (0.85 / 4.0) * 540} y2={barY + barH + 25} stroke="#f59e0b" strokeWidth="1" />
            <text x={30 + (0.85 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#f59e0b" fontSize="8">water/enzymes</text>
            <line x1={30 + (2.0 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (2.0 / 4.0) * 540} y2={barY + barH + 25} stroke="#38bdf8" strokeWidth="1" />
            <text x={30 + (2.0 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#38bdf8" fontSize="8">γ=2 (galaxies/ideal gas)</text>

            {/* Current position marker */}
            <circle
              cx={30 + (gamma / 4.0) * 540}
              cy={barY + barH / 2}
              r="10"
              fill={activeRegion.color}
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x={30 + (gamma / 4.0) * 540}
              y={barY + barH + 55}
              textAnchor="middle"
              fill={activeRegion.color}
              fontSize="12"
              fontWeight="bold"
            >
              γ = {gamma.toFixed(2)}
            </text>

            {/* Axis ticks */}
            {[0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0].map(v => (
              <g key={v}>
                <line x1={30 + (v / 4.0) * 540} y1={barY + barH} x2={30 + (v / 4.0) * 540} y2={barY + barH + 5} stroke="#6b7280" />
                <text x={30 + (v / 4.0) * 540} y={barY + barH + 16} textAnchor="middle" fill="#6b7280" fontSize="9">{v}</text>
              </g>
            ))}
          </svg>
        </div>

        <input
          type="range" min="0" max="4.0" step="0.01" value={gamma}
          onChange={e => setGamma(parseFloat(e.target.value))}
          style={{ width: '100%', marginBottom: '1.5rem' }}
        />

        <div className="card card-highlight" style={{ marginBottom: '1.5rem', borderLeft: `3px solid ${activeRegion.color}` }}>
          <h3 style={{ color: activeRegion.color }}>{activeRegion.label}</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            {activeRegion.physics}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {activeRegion.systems.map(s => (
              <span key={s} style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${activeRegion.color}`,
                borderRadius: '12px',
                padding: '0.15rem 0.5rem',
                fontSize: '0.8rem',
                color: activeRegion.color,
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem', padding: '0.75rem 1rem', background: 'rgba(245,158,11,0.07)', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
            <strong>⚠ N<sub>corr</sub>-method caveat (important):</strong> Ideal gases and galaxies both map to &#x03B3; = 2.0 (N<sub>corr</sub> = 1), despite having completely different microphysics.
            This is not a universality result &mdash; it is an artifact of how N<sub>corr</sub> is counted: both systems happen to be assigned &ldquo;1 correlated particle&rdquo; under the current counting convention.
            When two physically unrelated systems produce the same &#x03B3;, &#x03B3; is classifying the <em>counting method</em>, not the system.
            Until a scale-invariant N<sub>corr</sub> recipe is established, every cross-scale &#x03B3; comparison is method-dependent.
            BCS superconductor placement uses N<sub>corr</sub> = 10,000; physical Cooper-pair volumes contain ~10<sup>6</sup>–10<sup>9</sup> pairs depending on material.
            The &#x03B3; values shown here are illustrative, not measured.
          </p>
        </div>

        <h2>The Three Regimes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {regions.map(r => (
            <div key={r.id} className="card" style={{ borderLeft: `3px solid ${r.color}` }}>
              <h3 style={{ color: r.color, fontSize: '0.95rem' }}>{r.label}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{r.physics}</p>
            </div>
          ))}
        </div>
      </section>

      <RelatedConcepts currentPath="/phase-boundary-visualizer" />
    </>
  );
}
