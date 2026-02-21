'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const regions = [
  {
    id: 'quantum',
    label: 'γ < 0.6 — Quantum',
    color: '#8b5cf6',
    range: [0, 0.6],
    systems: ['Superconductors', 'BEC', 'Superfluids', 'Cooper pairs', 'Quantum computers'],
    physics: 'Macroscopic coherence. Many particles behave as one. Interference effects dominate. Information preserved across system.',
  },
  {
    id: 'boundary',
    label: 'γ ≈ 1 — Boundary',
    color: '#f59e0b',
    range: [0.6, 1.4],
    systems: ['Liquid water', 'Enzymes', 'Phase transitions', 'Chemical bonds', 'Neural firing', 'Consciousness threshold'],
    physics: 'The interesting regime. Quantum and classical effects compete. Phase transitions occur here. Chemistry lives here. Consciousness threshold (C ≈ 0.50) maps to this regime.',
  },
  {
    id: 'classical',
    label: 'γ > 1.4 — Classical',
    color: '#10b981',
    range: [1.4, 4.0],
    systems: ['Ideal gases', 'Stars in galaxies', 'Planets', 'Macro objects', 'Everyday physics'],
    physics: 'Fully decoherent. Particles act independently. Deterministic. Classical mechanics works perfectly. "Dark matter" signal appears at γ = 2.',
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
          The three regimes of &#x03B3; define qualitatively different physics. Drag the slider
          to explore where different systems live.
        </p>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto' }}>
            {/* Three regions */}
            <rect x="30" y={barY} width={(0.6 / 4.0) * 540} height={barH} fill="#8b5cf6" opacity="0.3" rx="4" />
            <rect x={30 + (0.6 / 4.0) * 540} y={barY} width={((1.4 - 0.6) / 4.0) * 540} height={barH} fill="#f59e0b" opacity="0.3" />
            <rect x={30 + (1.4 / 4.0) * 540} y={barY} width={((4.0 - 1.4) / 4.0) * 540} height={barH} fill="#10b981" opacity="0.3" rx="4" />

            {/* Boundary lines */}
            <line x1={30 + (0.6 / 4.0) * 540} y1={barY - 5} x2={30 + (0.6 / 4.0) * 540} y2={barY + barH + 5} stroke="#f59e0b" strokeDasharray="3 3" />
            <line x1={30 + (1.4 / 4.0) * 540} y1={barY - 5} x2={30 + (1.4 / 4.0) * 540} y2={barY + barH + 5} stroke="#f59e0b" strokeDasharray="3 3" />

            {/* Labels */}
            <text x={30 + (0.3 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#8b5cf6" fontSize="11">Quantum</text>
            <text x={30 + (1.0 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#f59e0b" fontSize="11">Boundary</text>
            <text x={30 + (2.7 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#10b981" fontSize="11">Classical</text>

            {/* γ = 2 marker */}
            <line x1={30 + (2.0 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (2.0 / 4.0) * 540} y2={barY + barH + 25} stroke="#38bdf8" strokeWidth="1" />
            <text x={30 + (2.0 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#38bdf8" fontSize="9">γ=2 (galaxies)</text>

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
