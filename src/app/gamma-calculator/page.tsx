'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

function gammaFromNcorr(n: number): number {
  return 2 / Math.sqrt(n);
}

function regimeInfo(g: number): { label: string; color: string; desc: string } {
  if (g > 1.4) return { label: 'Weakly Correlated', color: '#8b5cf6', desc: 'Few correlated particles. C(ρ) is near zero — low coherence in the Synchronism sense. Note: N_corr is the correlated/uncorrelated axis, not the quantum/classical axis; a single particle (N_corr = 1) can be quantum.' };
  if (g > 0.6) return { label: 'Boundary (γ ≈ 1)', color: '#f59e0b', desc: 'Transition zone. Phase transitions, chemistry, consciousness threshold sit near this boundary.' };
  if (g > 0.2) return { label: 'Strongly Correlated', color: '#38bdf8', desc: 'Enzymes, magnets, large cooperative ensembles. C(ρ) is high.' };
  return { label: 'Collective Regime', color: '#10b981', desc: 'Superconductors, BEC, superfluids (N_corr ≫ 1). C(ρ) saturates near 1. These systems are quantum by standard tests (Josephson effect, interference) — the high N_corr here reflects collective correlation, not classical behavior.' };
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
        {/* Load-bearing caveats — promoted to top */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #f59e0b', background: 'rgba(245, 158, 11, 0.05)' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>
            Two caveats before using this tool:
          </p>
          <ol style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
            <li>
              <strong>&#x03B3; = 2/&#x221A;N<sub>corr</sub> is motivated, not rigorously derived.</strong> The 1/&#x221A;N scaling is a dimensional ansatz inspired by fluctuation theory — <em>not</em> a consequence of the CLT (which governs sample-mean fluctuation, not transition sharpness). The factor of 2 is not derived from first principles.
              {' '}<a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)', fontSize: '0.85rem' }}>See Parameter Derivations for what is and isn&apos;t derived &rarr;</a>
            </li>
            <li>
              <strong>Preset N<sub>corr</sub> values are back-fits, not measurements.</strong> For BCS superconductors, the physical Cooper-pair coherence volume contains 10<sup>6</sup>–10<sup>9</sup> pairs, yet the preset uses N<sub>corr</sub> = 10<sup>4</sup> — fitted to produce a plausible γ, not derived from the Hamiltonian. No protocol exists for converting a system&apos;s Hamiltonian into N<sub>corr</sub> without first fitting γ to observed behavior. Every γ &ldquo;prediction&rdquo; is therefore a consistency check on a back-fitted parameter, not a first-principles result.
            </li>
          </ol>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-blue)' }}>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            <strong>What this tool does:</strong> N<sub>corr</sub> is the count of particles that move as a correlated unit &mdash; dimensionless, no units.
            For a single atom, N<sub>corr</sub> = 1. For a crystal oscillating in phase, N<sub>corr</sub> can reach millions.
            This tool maps that count to &#x03B3; = 2/&#x221A;N<sub>corr</sub> and shows which physical regime results.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: 0 }}>
            &#x03B3; &#x2248; 1 marks the boundary where chemistry and phase transitions happen. The presets below cover common systems:
            {' '}<strong>BCS</strong> = Bardeen-Cooper-Schrieffer superconductors (electrons paired by phonons, conventional: Al, Nb, Pb);
            {' '}<strong>BEC</strong> = Bose-Einstein Condensate (ultra-cold atoms collapsed into a single quantum state).
            Both are quantum systems that appear in the &ldquo;collective&rdquo; regime because they have large N<sub>corr</sub>.
          </p>
        </div>
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

        <div style={{ marginBottom: '1.5rem', padding: '0.75rem 1rem', background: 'rgba(245,158,11,0.07)', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
            <strong>⚠ Preset caveat:</strong> N<sub>corr</sub> values in the presets are approximate estimates, not measured physical pair counts. The BCS superconductor preset uses N<sub>corr</sub> = 10,000; physical Cooper-pair coherence volumes in real materials contain ~10<sup>6</sup>–10<sup>9</sup> pairs (Al vs. Nb vs. Pb differ significantly). The Phase Boundary Visualizer uses different Ncorr estimates for some systems. A scale-invariant counting recipe for operational N<sub>corr</sub> is an open research question — see <em>ncorr-operational-definition-recipe</em> in the explorer topic queue.
          </p>
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
