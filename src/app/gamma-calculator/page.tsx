'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import { GAMMA_PRESETS, gammaFromNcorr, GALAXY_PIN_GAMMA, GALAXY_SPARC_GAMMA } from '@/lib/gammaPresets';

function regimeInfo(g: number): { label: string; color: string; desc: string } {
  if (g > 1.4) return { label: 'Weakly Correlated (γ-sharp)', color: '#8b5cf6', desc: 'Few correlated particles; large γ → steepest C(ρ) sigmoid. C(ρ) near zero. Note: per Caveat 2, this is where γ assigns the sharpest transition — opposite to condensed-matter intuition (weakly correlated systems don\'t have sharp phase transitions in the real world).' };
  if (g > 0.6) return { label: 'Boundary (γ ≈ 1)', color: '#f59e0b', desc: 'Transition zone. Phase transitions, chemistry, consciousness threshold sit near this boundary.' };
  if (g > 0.2) return { label: 'Strongly Correlated (γ-flat)', color: '#38bdf8', desc: 'Enzymes, magnets, large cooperative ensembles. C(ρ) is high. Note (Caveat 2): large N_corr → small γ → flattest sigmoid — γ assigns the flattest transition to strongly correlated systems, which is inverted relative to real condensed-matter physics where strong correlations produce sharp transitions.' };
  return { label: 'Collective Regime (γ-flattest)', color: '#10b981', desc: 'Superconductors, BEC, superfluids (N_corr ≫ 1). C(ρ) saturates near 1. Note (Caveat 2): the smallest γ values (flattest C(ρ) curves) go to the most collective systems — BCS superconductors (N_corr~10⁷, γ~6×10⁻⁴) have the flattest transition in this formula, while real BCS has a very sharp Tc. See Caveat 2 for the sign-inversion explanation.' };
}

const presets = GAMMA_PRESETS;

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
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
        <strong>In one sentence: &#x03B3; is the steepness of the coherence S-curve</strong> — how abruptly
        a system switches from &ldquo;independent individuals&rdquo; to &ldquo;acting as one&rdquo; as density
        rises. Big &#x03B3; = hair-trigger switch; small &#x03B3; = slow fade. The live curve below redraws
        as you change N<sub>corr</sub>.
      </p>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        <strong style={{ color: 'var(--color-accent-blue)' }}>What this tool is for:</strong> pick a
        physical system (ideal gas &rarr; BEC presets) or enter N<sub>corr</sub> yourself, and see the
        &#x03B3; the formula assigns and how it reshapes the coherence S-curve. What to conclude: not a
        physical estimate, but a live demonstration of the formula&apos;s central defect &mdash; watch
        the most-correlated systems get the <em>flattest</em> curves, which is backwards.{' '}
        <strong>Why is a formula we know is wrong still interactive?</strong> So you can see the flaw
        yourself: click the &ldquo;Ideal gas&rdquo; preset, then &ldquo;BCS superconductor,&rdquo; and
        notice the far more collective system gets the far <em>flatter</em> curve. Real superconductors
        have among the sharpest transitions in nature — you just watched the formula get that backwards.
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
            Four caveats before using this tool:
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
            <li>
              <strong>Run the framework&apos;s own galaxy parameters through this tool and it refutes them (added 2026-07-27).</strong>{' '}
              Until today this page never applied its map to the one sector where the framework
              actually uses γ. Inverting the framework&apos;s own relation, N<sub>corr</sub> = (2/&#x03B3;)²:
              the galaxy pin &#x03B3; = {GALAXY_PIN_GAMMA} quoted on <a href="/core-idea" style={{ color: 'var(--color-accent-blue)' }}>Core Idea</a> gives
              N<sub>corr</sub> = <strong>1</strong> — the <em>ideal gas</em> preset, exactly; and the SPARC best fit
              &#x03B3; &#x2248; {GALAXY_SPARC_GAMMA} quoted on <a href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</a> gives
              N<sub>corr</sub> &#x2248; <strong>17</strong>, between liquid water (4) and an enzyme active site (30).
              So the framework&apos;s original galaxy-scale parameter says a galaxy is a system of one
              correlated unit, and its data-preferred value says a galaxy is about as collectively
              organized as a small protein pocket — while a BCS superconductor in the same table gets 10⁷.
              Both galaxy numbers were published on this site for months, one arithmetic step apart, on
              pages that never cited each other. <strong>Either &#x03B3; = 2/&#x221A;N<sub>corr</sub> is void at
              galaxy scale — in which case it is not a framework-wide relation and should stop being
              presented as one — or the framework asserts the above.</strong> The SPARC row is now in the
              preset table below so the arithmetic is one click away. (Note this also breaks the
              2026-06-06 finding that flipping the sign to &#x03B3; &#x221D; &#x221A;N<sub>corr</sub> &ldquo;changes
              nothing calibrated&rdquo;: that held only because &#x03B3; = 2 sits at the fixed point
              N<sub>corr</sub> = 1. At N<sub>corr</sub> &#x2248; 17 the flip moves &#x03B3; by a factor ~8.)
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
          <p style={{ color: regime.color, fontSize: '1rem', fontWeight: 'bold' }}>
            {regime.label}{' '}
            <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--color-text-muted)' }}>
              — a label per the inverted formula (Caveat 2), not a physical classification
            </span>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{regime.desc}</p>
          {presets.find(p => p.ncorr === ncorr) && (
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem', textAlign: 'left', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
              <strong style={{ color: 'var(--color-accent-violet)' }}>What just changed, and why it matters:</strong>{' '}
              {presets.find(p => p.ncorr === ncorr)!.story}
            </p>
          )}
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <strong>The curve this &#x03B3; produces</strong> — C(&#x03C1;) = tanh(&#x03B3;&middot;ln(1+&#x03C1;/&#x03C1;<sub>crit</sub>))
            at your current &#x03B3; (violet), with the &#x03B3;=2 galaxy pin ghosted for comparison (gray).
          </p>
          <svg viewBox="0 0 560 240" role="img" aria-label={`The coherence S-curve at gamma = ${gamma < 0.001 ? gamma.toExponential(2) : gamma.toFixed(3)}: larger gamma means a steeper switch, smaller gamma a flatter curve`} style={{ width: '100%', height: 'auto' }}>
            <line x1="50" y1="200" x2="530" y2="200" stroke="var(--color-dark-border, #374151)" strokeWidth="1" />
            <line x1="50" y1="20" x2="50" y2="200" stroke="var(--color-dark-border, #374151)" strokeWidth="1" />
            <text x="42" y="204" fill="#9ca3af" fontSize="11" textAnchor="end">0</text>
            <text x="42" y="34" fill="#9ca3af" fontSize="11" textAnchor="end">1</text>
            <text x="30" y="115" fill="#9ca3af" fontSize="12" textAnchor="middle" transform="rotate(-90 30 115)">coherence C</text>
            <text x="290" y="228" fill="#9ca3af" fontSize="12" textAnchor="middle">density &#x03C1;/&#x03C1;<tspan baselineShift="sub" fontSize="9">crit</tspan> (log scale: 0.01 &rarr; 100)</text>
            <line x1="290" y1="20" x2="290" y2="200" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <text x="295" y="192" fill="#9ca3af" fontSize="10">&#x03C1;<tspan baselineShift="sub" fontSize="8">crit</tspan></text>
            {/* ghost reference: gamma = 2 */}
            <polyline
              points={Array.from({ length: 81 }, (_, i) => {
                const lx = -2 + (4 * i) / 80;
                const c = Math.tanh(2 * Math.log(1 + Math.pow(10, lx)));
                return `${50 + ((lx + 2) / 4) * 480},${200 - c * 180}`;
              }).join(' ')}
              fill="none" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" strokeLinejoin="round"
            />
            {/* live curve at current gamma */}
            <polyline
              points={Array.from({ length: 81 }, (_, i) => {
                const lx = -2 + (4 * i) / 80;
                const c = Math.tanh(gamma * Math.log(1 + Math.pow(10, lx)));
                return `${50 + ((lx + 2) / 4) * 480},${200 - c * 180}`;
              }).join(' ')}
              fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinejoin="round"
            />
            <circle cx="290" cy={200 - Math.tanh(gamma * Math.log(2)) * 180} r="4" fill="#8b5cf6" />
            <text x="298" y={Math.max(32, 196 - Math.tanh(gamma * Math.log(2)) * 180)} fill="#c4b5fd" fontSize="10">
              C(&#x03C1;<tspan baselineShift="sub" fontSize="8">crit</tspan>) = {Math.tanh(gamma * Math.log(2)).toFixed(gamma < 0.01 ? 4 : 2)}
            </text>
          </svg>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.5rem 0 0' }}>
            Try it: click &ldquo;Ideal gas&rdquo; (&#x03B3;=2, the steep violet S) then
            &ldquo;BCS superconductor&rdquo; (&#x03B3;&asymp;6&times;10<sup>&minus;4</sup>) and watch the curve
            collapse to nearly flat — the inversion in Caveat 2, drawn live: the <em>most</em> collective
            system gets the <em>flattest</em> curve.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem', padding: '0.75rem 1rem', background: 'rgba(139,92,246,0.07)', borderRadius: '6px', borderLeft: '3px solid var(--color-accent-violet)' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
            <strong>Where &#x03B3; lands when data chooses (2026-07-22 mechanism):</strong> fit free on SPARC
            galaxy data, &#x03B3; converges to 0.49 — and that number now has an identified meaning. &#x03B3; sets
            the curve&apos;s <em>Newtonian-return exponent</em> q = 2&#x03B3; (C approaches 1 like
            (1+&#x03C1;/&#x03C1;<sub>crit</sub>)<sup>&minus;2&#x03B3;</sup>), and the fit pins q &asymp; 0.98 —
            cross-validated by an independent free-Hill fit (n = 0.975). q = 1 is the value hard-coded in
            MOND&apos;s &ldquo;simple&rdquo; &#x03BC;-function, so &#x03B3; = 0.49 is not a constant awaiting
            derivation: it is the tanh family&apos;s encoding of MOND. The framework&apos;s asserted &#x03B3; = 2
            means q = 4 — returning to Newton far too abruptly, which is the &#x0394;BIC = +184 refutation
            restated as a mechanism. See{' '}
            <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-violet)' }}>Galaxy Rotation</Link>.
          </p>
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
