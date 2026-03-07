'use client';

import { useState, useMemo } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

function coherence(rho: number, gamma: number, rhoCrit: number): number {
  if (rho <= 0 || rhoCrit <= 0) return 0;
  return Math.tanh(gamma * Math.log(rho / rhoCrit + 1));
}

export default function CoherenceExplorer() {
  const [gamma, setGamma] = useState(2.0);
  const [rhoCrit, setRhoCrit] = useState(1.0);
  const [logScale, setLogScale] = useState(true);

  const points = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    const steps = 200;
    for (let i = 0; i <= steps; i++) {
      const frac = i / steps;
      const rho = logScale
        ? Math.pow(10, -2 + frac * 6)
        : frac * rhoCrit * 20;
      const c = coherence(rho, gamma, rhoCrit);
      pts.push({ x: rho, y: c });
    }
    return pts;
  }, [gamma, rhoCrit, logScale]);

  const svgW = 600;
  const svgH = 300;
  const pad = { top: 20, right: 30, bottom: 40, left: 50 };
  const plotW = svgW - pad.left - pad.right;
  const plotH = svgH - pad.top - pad.bottom;

  const xMin = logScale ? -2 : 0;
  const xMax = logScale ? 4 : rhoCrit * 20;

  const pathD = useMemo(() => {
    return points.map((p, i) => {
      const xVal = logScale ? Math.log10(p.x) : p.x;
      const px = pad.left + ((xVal - xMin) / (xMax - xMin)) * plotW;
      const py = pad.top + (1 - p.y) * plotH;
      return `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`;
    }).join(' ');
  }, [points, logScale, xMin, xMax, plotW, plotH, pad.left, pad.top]);

  const regime = gamma > 1.4 ? 'Quantum (γ > 1.4)' : gamma > 0.6 ? 'Boundary (γ ≈ 1)' : 'Classical (γ < 0.6)';
  const regimeColor = gamma > 1.4 ? '#8b5cf6' : gamma > 0.6 ? '#f59e0b' : '#10b981';

  return (
    <>
      <Breadcrumbs currentPath="/coherence-explorer" />
      <h1>Coherence Explorer</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-violet)' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>What you&apos;re seeing</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            This tool plots the coherence function &mdash; the single equation at the heart of Synchronism.
            It takes a density (&#x03C1;) and returns a coherence value between 0 (quantum/random)
            and 1 (classical/ordered).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            <strong>&#x03B3;</strong> = 2/&#x221A;N<sub>corr</sub> controls the transition sharpness. High &#x03B3; (&gt; 1.4, few correlated particles) = quantum regime,
            &#x03B3; &#x2248; 1 = the boundary where chemistry and biology happen,
            low &#x03B3; (&lt; 0.6, many correlated particles) = classical regime.
          </p>
          <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem' }}>
            <strong>What to notice:</strong> Move &#x03B3; from 0.5 to 2.0 and watch the curve flatten.
            At &#x03B3; &#x2248; 1, the transition from quantum to classical is steepest &mdash;
            this is where the most interesting physics happens.
          </p>
        </div>

        <p style={{ marginBottom: '1rem' }}>
          Adjust &#x03B3; and &#x03C1;<sub>crit</sub> to see how the coherence function
          C(&#x03C1;) = tanh(&#x03B3; &middot; log(&#x03C1;/&#x03C1;<sub>crit</sub> + 1)) responds.
        </p>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1.0].map(v => {
              const y = pad.top + (1 - v) * plotH;
              return (
                <g key={v}>
                  <line x1={pad.left} y1={y} x2={pad.left + plotW} y2={y} stroke="rgba(255,255,255,0.1)" />
                  <text x={pad.left - 8} y={y + 4} textAnchor="end" fill="#6b7280" fontSize="10">{v.toFixed(2)}</text>
                </g>
              );
            })}
            {/* C = 0.50 threshold */}
            <line
              x1={pad.left} y1={pad.top + 0.5 * plotH}
              x2={pad.left + plotW} y2={pad.top + 0.5 * plotH}
              stroke="#f59e0b" strokeDasharray="4 4" strokeWidth="1"
            />
            <text x={pad.left + plotW + 4} y={pad.top + 0.5 * plotH + 4} fill="#f59e0b" fontSize="9">C=0.50</text>
            {/* Axes */}
            <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + plotH} stroke="#6b7280" />
            <line x1={pad.left} y1={pad.top + plotH} x2={pad.left + plotW} y2={pad.top + plotH} stroke="#6b7280" />
            {/* X axis label */}
            <text x={pad.left + plotW / 2} y={svgH - 4} textAnchor="middle" fill="#9ca3af" fontSize="11">
              {logScale ? 'log₁₀(ρ)' : 'ρ'}
            </text>
            {/* Y axis label */}
            <text x={12} y={pad.top + plotH / 2} textAnchor="middle" fill="#9ca3af" fontSize="11" transform={`rotate(-90,12,${pad.top + plotH / 2})`}>
              C(ρ)
            </text>
            {/* Curve */}
            <path d={pathD} fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
          </svg>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              &#x03B3; = <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>{gamma.toFixed(2)}</span>
            </label>
            <input
              type="range" min="0.01" max="4.0" step="0.01" value={gamma}
              onChange={e => setGamma(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
            <p style={{ color: regimeColor, fontSize: '0.8rem', marginTop: '0.25rem' }}>{regime}</p>
            {gamma > 1.5 && (
              <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                N<sub>corr</sub> = {(4 / (gamma * gamma)).toFixed(1)} &mdash; mean-field approximation weakens as N<sub>corr</sub> approaches 1
              </p>
            )}
          </div>
          <div className="card">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              &#x03C1;<sub>crit</sub> = <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-blue)' }}>{rhoCrit.toFixed(2)}</span>
            </label>
            <input
              type="range" min="0.01" max="10.0" step="0.01" value={rhoCrit}
              onChange={e => setRhoCrit(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
          <button
            onClick={() => setLogScale(!logScale)}
            style={{
              background: logScale ? 'var(--color-accent-violet)' : 'transparent',
              color: logScale ? '#fff' : 'var(--color-text-secondary)',
              border: '1px solid var(--color-accent-violet)',
              borderRadius: '4px',
              padding: '0.25rem 0.75rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
          >
            Log scale
          </button>
          <button
            onClick={() => setLogScale(!logScale)}
            style={{
              background: !logScale ? 'var(--color-accent-violet)' : 'transparent',
              color: !logScale ? '#fff' : 'var(--color-text-secondary)',
              border: '1px solid var(--color-accent-violet)',
              borderRadius: '4px',
              padding: '0.25rem 0.75rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
          >
            Linear scale
          </button>
        </div>

        <h2>Key Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>C(&#x03C1;<sub>crit</sub>)</p>
            <p style={{ fontFamily: 'monospace', fontSize: '1.2rem' }}>
              {coherence(rhoCrit, gamma, rhoCrit).toFixed(4)}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>C(10&#x03C1;<sub>crit</sub>)</p>
            <p style={{ fontFamily: 'monospace', fontSize: '1.2rem' }}>
              {coherence(rhoCrit * 10, gamma, rhoCrit).toFixed(4)}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>C(100&#x03C1;<sub>crit</sub>)</p>
            <p style={{ fontFamily: 'monospace', fontSize: '1.2rem' }}>
              {coherence(rhoCrit * 100, gamma, rhoCrit).toFixed(4)}
            </p>
          </div>
        </div>
      </section>

      <RelatedConcepts currentPath="/coherence-explorer" />
    </>
  );
}
