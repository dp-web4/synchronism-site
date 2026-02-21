'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

function gammaFromNcorr(n: number): number {
  return 2 / Math.sqrt(n);
}

function regimeInfo(g: number): { label: string; color: string; desc: string } {
  if (g > 1.4) return { label: 'Classical', color: '#10b981', desc: 'Fully decoherent. Independent particles. Deterministic macro behavior.' };
  if (g > 0.6) return { label: 'Boundary (γ ≈ 1)', color: '#f59e0b', desc: 'Quantum-classical edge. Phase transitions, chemistry, consciousness threshold.' };
  if (g > 0.2) return { label: 'Strongly Correlated', color: 'var(--color-accent-violet)', desc: 'Enzymes, magnets, coordinated quantum behavior.' };
  return { label: 'Macroscopic Coherence', color: 'var(--color-accent-blue)', desc: 'Superconductors, BEC, superfluids. Many particles as one.' };
}

const presets = [
  { label: 'Ideal gas', ncorr: 1 },
  { label: 'Liquid water', ncorr: 4 },
  { label: 'Enzyme site', ncorr: 30 },
  { label: 'Ferromagnet', ncorr: 100 },
  { label: 'BCS superconductor', ncorr: 10000 },
  { label: 'BEC', ncorr: 1000000 },
];

export default function GammaCalculator() {
  const [ncorr, setNcorr] = useState(4);
  const [logMode, setLogMode] = useState(false);

  const gamma = gammaFromNcorr(ncorr);
  const regime = regimeInfo(gamma);

  return (
    <>
      <Breadcrumbs currentPath="/gamma-calculator" />
      <h1>&#x03B3; Calculator</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Input N<sub>corr</sub> (number of correlated particles) and see the resulting
          &#x03B3; = 2/&#x221A;N<sub>corr</sub> and what physical regime it falls in.
        </p>

        <div className="card card-highlight" style={{ textAlign: 'center', padding: '2rem', marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>N<sub>corr</sub> = {ncorr.toLocaleString()}</p>
          <p style={{ fontFamily: 'monospace', fontSize: '2.5rem', color: 'var(--color-accent-violet)', margin: '0.5rem 0' }}>
            &#x03B3; = {gamma < 0.001 ? gamma.toExponential(2) : gamma.toFixed(4)}
          </p>
          <p style={{ color: regime.color, fontSize: '1rem', fontWeight: 'bold' }}>{regime.label}</p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{regime.desc}</p>
        </div>

        <div className="card" style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            N<sub>corr</sub>: <span style={{ fontFamily: 'monospace' }}>{ncorr.toLocaleString()}</span>
          </label>
          {logMode ? (
            <input
              type="range" min="0" max="7" step="0.01"
              value={Math.log10(ncorr)}
              onChange={e => setNcorr(Math.round(Math.pow(10, parseFloat(e.target.value))))}
              style={{ width: '100%' }}
            />
          ) : (
            <input
              type="range" min="1" max="1000" step="1" value={Math.min(ncorr, 1000)}
              onChange={e => setNcorr(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          )}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => setLogMode(false)}
              style={{
                background: !logMode ? 'var(--color-accent-violet)' : 'transparent',
                color: !logMode ? '#fff' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-accent-violet)',
                borderRadius: '4px',
                padding: '0.2rem 0.6rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              Linear (1–1000)
            </button>
            <button
              onClick={() => setLogMode(true)}
              style={{
                background: logMode ? 'var(--color-accent-violet)' : 'transparent',
                color: logMode ? '#fff' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-accent-violet)',
                borderRadius: '4px',
                padding: '0.2rem 0.6rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              Log (1–10⁷)
            </button>
          </div>
        </div>

        <h2>Presets</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {presets.map(p => (
            <button
              key={p.label}
              onClick={() => { setNcorr(p.ncorr); setLogMode(p.ncorr > 1000); }}
              style={{
                background: ncorr === p.ncorr ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
                color: ncorr === p.ncorr ? '#fff' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-dark-border)',
                borderRadius: '4px',
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <h2>Quick Reference</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.4rem' }}>N<sub>corr</sub></th>
                <th style={{ textAlign: 'left', padding: '0.4rem' }}>&#x03B3;</th>
                <th style={{ textAlign: 'left', padding: '0.4rem' }}>Regime</th>
                <th style={{ textAlign: 'left', padding: '0.4rem' }}>Example</th>
              </tr>
            </thead>
            <tbody>
              {presets.map(p => {
                const g = gammaFromNcorr(p.ncorr);
                const r = regimeInfo(g);
                return (
                  <tr key={p.label} style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                    <td style={{ padding: '0.4rem', fontFamily: 'monospace' }}>{p.ncorr.toLocaleString()}</td>
                    <td style={{ padding: '0.4rem', fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>
                      {g < 0.01 ? g.toExponential(2) : g.toFixed(3)}
                    </td>
                    <td style={{ padding: '0.4rem', color: r.color }}>{r.label}</td>
                    <td style={{ padding: '0.4rem', color: 'var(--color-text-muted)' }}>{p.label}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <RelatedConcepts currentPath="/gamma-calculator" />
    </>
  );
}
