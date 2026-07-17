'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

function gammaFromNcorr(n: number): number {
  return 2 / Math.sqrt(n);
}

function regimeInfo(g: number): { label: string; color: string; desc: string } {
  if (g > 1.4) return { label: 'Weakly Correlated (γ-sharp)', color: '#8b5cf6', desc: 'Few correlated particles; large γ → steepest C(ρ) sigmoid. C(ρ) near zero. Note: per Caveat 2, this is where γ assigns the sharpest transition — opposite to condensed-matter intuition (weakly correlated systems don\'t have sharp phase transitions in the real world).' };
  if (g > 0.6) return { label: 'Boundary (γ ≈ 1)', color: '#f59e0b', desc: 'Transition zone. Phase transitions, chemistry, consciousness threshold sit near this boundary.' };
  if (g > 0.2) return { label: 'Strongly Correlated (γ-flat)', color: '#38bdf8', desc: 'Enzymes, magnets, large cooperative ensembles. C(ρ) is high. Note (Caveat 2): large N_corr → small γ → flattest sigmoid — γ assigns the flattest transition to strongly correlated systems, which is inverted relative to real condensed-matter physics where strong correlations produce sharp transitions.' };
  return { label: 'Collective Regime (γ-flattest)', color: '#10b981', desc: 'Superconductors, BEC, superfluids (N_corr ≫ 1). C(ρ) saturates near 1. Note (Caveat 2): the smallest γ values (flattest C(ρ) curves) go to the most collective systems — BCS superconductors (N_corr~10⁷, γ~6×10⁻⁴) have the flattest transition in this formula, while real BCS has a very sharp Tc. See Caveat 2 for the sign-inversion explanation.' };
}

const presets = [
  { label: 'Ideal gas', ncorr: 1, story: 'Nothing moves together in an ideal gas — every particle is its own unit (N_corr = 1) — so γ hits its maximum of 2. In this framework that means the sharpest possible switch from "individuals" to "crowd" as density rises.' },
  { label: 'Liquid water', ncorr: 4, story: 'Water molecules hydrogen-bond into small transient clusters (~4 moving together), which drops γ from 2 toward 1 — the boundary zone where the framework says chemistry lives. Compare: one preset click took you from "lone particles" to "small teams."' },
  { label: 'Enzyme site', ncorr: 30, story: 'An enzyme’s active site moves as one unit of ~30 atoms. More teamwork → smaller γ → a gentler, earlier-starting S-curve. You’re watching γ measure "how big is the team?"' },
  { label: 'Ferromagnet', ncorr: 100, story: 'In a magnet, ~100 spins per correlated patch flip together. γ keeps falling as the teams get bigger — and notice the direction: bigger teams are getting FLATTER curves, not sharper ones.' },
  { label: 'BCS superconductor (10⁷ — mid of physical 10⁶–10⁹)', ncorr: 10000000, story: 'Ten million Cooper pairs overlap in a superconductor, so γ collapses to ~0.0006 — the flattest curve on this tool. That is the audited failure in one click: a real superconductor has one of the SHARPEST transitions in nature, and this formula gives it the flattest. The formula’s sharpness direction is inverted.' },
  { label: 'BEC', ncorr: 1000000, story: 'A million atoms share one quantum state in a BEC — maximal quantum coherence — yet this "coherence" function scores it nearly flat and low. That mismatch is why the site warns that C is not quantum coherence.' },
];

export default function GammaCalculator() {
  const [ncorr, setNcorr] = useState(4);
  const [logMode, setLogMode] = useState(false);

  const gamma = gammaFromNcorr(ncorr);
  const regime = regimeInfo(gamma);

  return (
    <>
      <Breadcrumbs currentPath="/gamma-calculator" />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        <h1 style={{ margin: 0 }}>&#x03B3; Calculator</h1>
        <ValidationBadge status="audited-negative" label="Formula Audited-Negative — Sign Inverted for All Collective Systems" />
      </div>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        <strong style={{ color: 'var(--color-accent-blue)' }}>What this tool is for:</strong> pick a
        physical system (ideal gas &rarr; BEC presets) or enter N<sub>corr</sub> yourself, and see the
        &#x03B3; the formula assigns and how it reshapes the coherence S-curve. What to conclude: not a
        physical estimate, but a live demonstration of the formula&apos;s central defect &mdash; watch
        the most-correlated systems get the <em>flattest</em> curves, which is backwards.
      </p>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
        &#x03B3; = 2/&#x221A;N<sub>corr</sub> assigns the <em>sharpest</em> coherence transition to the
        least-correlated system (ideal gas) and the <em>flattest</em> to the most-correlated (BCS
        superconductor) — the opposite of real condensed-matter transitions. This is a structural
        inversion in the formula (Caveat 2 below), not a calibration issue. This tool is preserved
        for exploration; treat its outputs as &ldquo;what the inverted formula predicts&rdquo; rather
        than as physical estimates.
      </p>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        {/* Load-bearing caveats — promoted to top */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #f59e0b', background: 'rgba(245, 158, 11, 0.05)' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>
            Three caveats before using this tool:
          </p>
          <ol style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
            <li>
              <strong>&#x03B3; = 2/&#x221A;N<sub>corr</sub> is motivated, not rigorously derived.</strong> The 1/&#x221A;N scaling is a dimensional ansatz inspired by fluctuation theory — <em>not</em> a consequence of the CLT (which governs sample-mean fluctuation, not transition sharpness). The factor of 2 is not derived from first principles.
              {' '}<a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)', fontSize: '0.85rem' }}>See Parameter Derivations for what is and isn&apos;t derived &rarr;</a>
            </li>
            <li>
              <strong>The direction of the N<sub>corr</sub>→sharpness mapping is inverted relative to the stated analogy (2026-06-06).</strong> In fluctuation theory, 1/&#x221A;N is a <em>width</em> — more correlation &#x2192; smaller width &#x2192; sharper transition. But in &#x03B3; = 2/&#x221A;N<sub>corr</sub>, more correlation &#x2192; larger N<sub>corr</sub> &#x2192; smaller &#x03B3; &#x2192; <em>flatter</em> tanh. This assigns the sharpest transition (&#x03B3;=2) to the least-correlated system (ideal gas, no real phase transition) and the flattest (&#x03B3;&#x2248;6&#xD7;10<sup>&#x2212;4</sup>) to the most-correlated (BCS superconductor, which has a real sharp T<sub>c</sub>). The sign of the analogy is inverted — a structural issue independent of the prefactor. See <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</a> and research proposal <code>gamma_ncorr_sign_inversion_sharpness.md</code>.
            </li>
            <li>
              <strong>Preset N<sub>corr</sub> values are back-fits, not measurements.</strong> For BCS superconductors, the physical Cooper-pair coherence volume contains 10<sup>6</sup>–10<sup>9</sup> pairs; the preset uses N<sub>corr</sub> = 10<sup>7</sup> (mid-range of physical estimates) — fitted to produce a plausible γ (6.32×10<sup>−4</sup>), not derived from the Hamiltonian. No protocol exists for converting a system&apos;s Hamiltonian into N<sub>corr</sub> without first fitting γ to observed behavior. Every γ &ldquo;prediction&rdquo; is therefore a consistency check on a back-fitted parameter, not a first-principles result.
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
            &#x03B3; &#x2248; 1 marks the regime boundary where chemistry and collective/correlated behavior happen &mdash;
            C(&#x03C1;) itself is a smooth crossover here, not a phase transition (tanh has no non-analyticity).
            The presets below cover common systems:
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
          {presets.find(p => p.ncorr === ncorr) && (
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem', textAlign: 'left', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
              <strong style={{ color: 'var(--color-accent-violet)' }}>What just changed, and why it matters:</strong>{' '}
              {presets.find(p => p.ncorr === ncorr)!.story}
            </p>
          )}
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
            <strong>⚠ Preset caveat:</strong> N<sub>corr</sub> values in the presets are approximate estimates, not measured physical pair counts. The BCS superconductor preset uses N<sub>corr</sub> = 10<sup>7</sup> (mid-range of physical Cooper-pair coherence volumes); physical estimates span 10<sup>6</sup>–10<sup>9</sup> pairs (Al vs. Nb vs. Pb differ significantly). The{' '}
            <Link href="/phase-boundary-visualizer" style={{ color: '#f59e0b' }}>Phase Boundary Visualizer</Link>{' '}
            uses different Ncorr estimates for some systems. A scale-invariant counting recipe for operational N<sub>corr</sub> is an open research question — see <em>ncorr-operational-definition-recipe</em> in the explorer topic queue.
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
