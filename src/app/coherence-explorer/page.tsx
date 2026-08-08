'use client';

import { useState, useMemo } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

function coherence(rho: number, gamma: number, rhoCrit: number): number {
  if (rho <= 0 || rhoCrit <= 0) return 0;
  return Math.tanh(gamma * Math.log(rho / rhoCrit + 1));
}

export default function CoherenceExplorer() {
  // Default is the SPARC free-γ fit (≈0.49), not the original γ=2 galaxy guess that
  // the site's own tests refuted — visitor 2026-07-30 (casual persona) found γ=2 as the
  // opening default confusing next to /core-idea's own "refuted" label for that value.
  const [gamma, setGamma] = useState(0.49);
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

  const regime = gamma > 1.4 ? 'Single-particle (γ > 1.4)' : gamma > 0.6 ? 'Boundary (γ ≈ 1)' : 'Collective (γ < 0.6)';
  const regimeColor = gamma > 1.4 ? '#8b5cf6' : gamma > 0.6 ? '#f59e0b' : '#10b981';

  return (
    <>
      <Breadcrumbs currentPath="/coherence-explorer" />
      <h1>Coherence Explorer</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-violet)' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>What is coherence?</h3>
          <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.95rem', marginBottom: '0.75rem', fontStyle: 'italic' }}>
            Coherence &#x2248; 0 is like a crowd of strangers in a plaza &mdash; everyone moving independently, no shared rhythm.
            Coherence &#x2248; 1 is like a marching band &mdash; everyone in lockstep.
            This curve shows how a system transitions between the two as density increases.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            This tool plots the coherence function &mdash; the single equation at the heart of Synchronism.
            It takes a density (&#x03C1;) and returns a coherence value between 0 (independent/quantum-like)
            and 1 (collective/classical-like).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem', padding: '0.5rem 0.75rem', background: 'rgba(139,92,246,0.07)', borderRadius: '0.375rem', borderLeft: '2px solid rgba(139,92,246,0.4)' }}>
            <strong>What this shows / what it gets wrong:</strong> the tool shows how the curve&apos;s
            shape responds to its three parameters &mdash; that part is faithful. What the formula gets
            wrong, and you should know before sliding: the &#x03B3; = 2/&#x221A;N<sub>corr</sub> sharpness
            rule runs <em>backwards</em> against real condensed-matter physics (the most correlated
            systems get the flattest curves; real BCS transitions are among nature&apos;s sharpest), and
            the &#x201C;&#x03C1;<sub>crit</sub>&#x201D; slider marks a <em>saturation knee</em>, not the
            curve&apos;s midpoint &mdash; at &#x03C1;<sub>crit</sub> and &#x03B3; = 2 the curve already reads
            C &#x2248; 0.88, and the true C = 0.5 midpoint sits near 0.32&#x00B7;&#x03C1;<sub>crit</sub>.
            Both numbers are &#x03B3;-specific: the live readout by the &#x03C1;<sub>crit</sub> slider
            recomputes them as you drag &#x03B3;. Details in the caveats below.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', padding: '0.5rem 0.75rem', background: 'rgba(239,68,68,0.06)', borderRadius: '0.375rem', borderLeft: '2px solid rgba(239,68,68,0.4)' }}>
            <strong>&#x26A0; Terminology note for physicists:</strong> &ldquo;Coherence&rdquo; here means <em>classical collective ordering</em> (C&nbsp;&#x2248;&nbsp;0 = independent/quantum-like; C&nbsp;&#x2248;&nbsp;1 = classically ordered). This is <em>anti-correlated</em> with <strong>quantum phase coherence</strong> as used in condensed-matter physics, where BEC/BCS condensates &mdash; the most quantum-coherent systems known &mdash; would sit at low C by this measure (due to their large N<sub>corr</sub>). The two axes are orthogonal: macroscopic quantum states are simultaneously quantum <em>and</em> collective. The site uses &ldquo;coherence&rdquo; in the ordering/classicality sense, not the off-diagonal-long-range-order sense.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            <strong>&#x03B3;</strong> = 2/&#x221A;N<sub>corr</sub> controls the transition sharpness.
            High &#x03B3; (&gt; 1.4, small N<sub>corr</sub>) = <em>single-particle / uncorrelated</em> regime (ideal gases, free atoms);
            &#x03B3; &#x2248; 1 = the boundary where chemistry and biology happen;
            low &#x03B3; (&lt; 0.6, large N<sub>corr</sub>) = <em>collective / correlated</em> regime (BEC, superconductors, superfluids).
            Note: these labels describe the <em>number of correlated degrees of freedom</em>, not the standard quantum/classical distinction — BEC and BCS superconductors appear in the &ldquo;collective&rdquo; basin, which is correct (they have large N<sub>corr</sub>).
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', padding: '0.5rem 0.75rem', background: 'rgba(239,68,68,0.06)', borderRadius: '0.375rem', borderLeft: '2px solid rgba(239,68,68,0.4)' }}>
            <strong>&#x26A0; Sign-inversion caveat:</strong> &#x03B3; = 2/&#x221A;N<sub>corr</sub> is <em>structurally
            inverted</em> relative to real condensed-matter physics — more correlation (larger N<sub>corr</sub>) gives a
            <em>smaller</em> &#x03B3;, i.e. a <em>flatter</em> transition, assigning the flattest curve to BCS
            superconductors (which have a sharp real T<sub>c</sub>) and the sharpest curve to an ideal gas (which has
            no real phase transition). See the{' '}
            <a href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</a>{' '}
            for the full sign-inversion accounting.
          </p>
          <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem' }}>
            <strong>What to notice:</strong> Move &#x03B3; from 2.0 downward and watch the curve flatten.
            &#x03B3; &#x2248; 1 is the <em>regime boundary</em> where chemistry and biology happen &mdash;
            not a steepness extremum. (The slope is actually largest at &#x03C1; = 0 on a linear
            &#x03C1; axis; on a log axis, the peak slope grows as &#x03B3; <em>increases</em> &mdash;
            e.g. peak dC/d(log&#x2081;&#x2080;&#x03C1;) &#x2248; 0.375 at &#x03B3;=2 vs &#x2248; 0.25 at
            &#x03B3;=0.5 &mdash; consistent with &#x03B3;=2 being the sharpest curve.)
            The slider goes down to &#x03B3; = 0.01: on the canonical ladder BEC sits near
            &#x03B3; &#x2248; 2&#xD7;10<sup>&#x2212;3</sup> (N<sub>corr</sub> = 10<sup>6</sup>) and BCS
            superconductors near &#x03B3; &#x2248; 6&#xD7;10<sup>&#x2212;4</sup>
            (N<sub>corr</sub> = 10<sup>7</sup>) &mdash; both below the slider&apos;s floor (use the{' '}
            <a href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</a>{' '}
            to reach those regimes). At very low &#x03B3; the curve is nearly flat &mdash; high coherence
            at almost all densities, which is the strongly collective regime.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            <strong>Why &#x03B3; is decoupled from N<sub>corr</sub> here:</strong> This tool sets &#x03B3;
            directly to explore how curve shape depends on the sharpness parameter, independently of any
            physical system. The relationship &#x03B3; = 2/&#x221A;N<sub>corr</sub> links &#x03B3; to
            real systems &mdash; use the{' '}
            <a href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</a>{' '}
            to enter a physical N<sub>corr</sub> and see where a real system lands.
          </p>
        </div>

        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
          <strong>What the symbols do, in plain language:</strong>
          <ul style={{ marginTop: '0.5rem', marginBottom: 0, color: 'var(--color-text-secondary)' }}>
            <li><strong>ln(x)</strong> — logarithm: it compresses huge ranges into small ones. A density 1,000× bigger becomes only ~7 units bigger. This is why the curve works across quantum to cosmic scales.</li>
            <li><strong>tanh(u)</strong> — the &ldquo;S-curve&rdquo; shape. For very negative u it returns ≈ 0; for large positive u it returns ≈ 1; near zero it rises steeply. Think of a dimmer switch that snaps rather than fading gradually.</li>
            <li><strong>&#x03B3;</strong> — controls how quickly the snap happens. Large &#x03B3; (γ = 2, free atoms) = a sharp cliff. Small &#x03B3; (γ ≈ 6×10⁻⁴, superconductors) = a long gentle ramp.</li>
            <li><strong>&#x03C1;<sub>crit</sub></strong> — the density where the middle of the S-curve sits; a reference point set by fitting, not a physical critical point.</li>
          </ul>
        </div>
        <p style={{ marginBottom: '1rem' }}>
          Adjust &#x03B3; and &#x03C1;<sub>crit</sub> to see how the coherence function
          C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1)) responds.
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
              <strong>Transition sharpness</strong> (&#x03B3;) = <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>{gamma.toFixed(2)}</span>
            </label>
            <input
              type="range" min="0.01" max="4.0" step="0.01" value={gamma}
              onChange={e => setGamma(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
            <p style={{ color: regimeColor, fontSize: '0.8rem', marginTop: '0.25rem' }}>{regime}</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.15rem' }}>
              Higher &#x03B3; = sharper, more abrupt snap to coherent. Lower &#x03B3; = gentler slope. Depends on N<sub>corr</sub> (correlated particle count): &#x03B3; = 2/&#x221A;N<sub>corr</sub>.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.15rem' }}>
              Opens at &#x03B3; &#x2248; 0.49, the value SPARC galaxy data actually prefers when fit freely.
              &#x03B3; = 2 was the framework&apos;s original galaxy guess &mdash; refuted (drag the slider up to see it).
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem', marginTop: '0.35rem', borderLeft: '2px solid rgba(139,92,246,0.6)', paddingLeft: '0.5rem' }}>
              <strong style={{ color: '#a78bfa' }}>What the default view actually shows (added 2026-08-08):
              MOND.</strong> Set &#x03B3; = 1/2 exactly and the compander collapses algebraically to
              C(x) = x/(x+2) = &#x03BC;<sub>simple</sub>(x/2) &mdash; MOND&apos;s simple interpolating function,
              the factor of 2 absorbed by the fitted &#x03C1;<sub>crit</sub>. SPARC&apos;s 0.489 is 2.2% from that
              point, so the curve you are looking at on load is MOND&apos;s &#x03BC;, not an alternative to it.
              Drag &#x03B3; away from 0.5 and you are leaving MOND; the data pull it back.
            </p>
            {gamma > 1.5 && (
              <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                N<sub>corr</sub> = {(4 / (gamma * gamma)).toFixed(1)} &mdash; mean-field approximation weakens as N<sub>corr</sub> approaches 1
              </p>
            )}
          </div>
          <div className="card">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              <strong>Reference density &mdash; saturation knee</strong> (&#x03C1;<sub>crit</sub>) = <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-blue)' }}>{rhoCrit.toFixed(2)}</span>
            </label>
            <input
              type="range" min="0.01" max="10.0" step="0.01" value={rhoCrit}
              onChange={e => setRhoCrit(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
              Lower &#x03C1;<sub>crit</sub> = transition starts at lower density (shifts curve left). Higher = transition occurs at higher density.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem', marginTop: '0.25rem', borderLeft: '2px solid rgba(139,92,246,0.6)', paddingLeft: '0.5rem' }}>
              <strong style={{ color: '#a78bfa' }}>This slider carries no shape information &mdash; and that is the
              point (added 2026-08-08).</strong> C depends on &#x03C1; and &#x03C1;<sub>crit</sub> only through the
              single ratio x = &#x03C1;/&#x03C1;<sub>crit</sub>, <em>exactly</em>, not just asymptotically. On the
              log axis this slider therefore performs a rigid horizontal translation by
              &minus;log<sub>10</sub>&#x03C1;<sub>crit</sub> and changes nothing about the curve&apos;s shape:
              the tool is a <strong>one-parameter family plus a pan control</strong>, presented as two parameters.
              That is not a UI nit &mdash; it is the &#x03B3;&#x2194;&#x03C1;<sub>crit</sub> degeneracy that makes
              SPARC&apos;s &#x03B3; = 0.489 non-identifiable against a rescaled critical density, which is the crux
              of the whole galaxy sector, made visible. Read the abscissa as
              log<sub>10</sub>(&#x03C1;/&#x03C1;<sub>crit</sub>) &mdash; dimensionless &mdash; and the degeneracy is
              the only thing the slider can express. Raised by a visitor researcher pass.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.15rem' }}>
              <strong>Note:</strong> &#x03C1;<sub>crit</sub> is a <em>saturation knee</em>, not a critical density
              in the phase-transition sense. At &#x03C1; = &#x03C1;<sub>crit</sub> and the current
              &#x03B3; = {gamma.toFixed(2)}, C = tanh({gamma.toFixed(2)}&middot;ln2) &#x2248;{' '}
              {Math.tanh(gamma * Math.LN2).toFixed(3)} — the &ldquo;+1&rdquo; regulator inside the ln breaks
              sigmoid symmetry, so &#x03C1;<sub>crit</sub> is not the curve&apos;s midpoint.
              The C = 0.50 midpoint sits at &#x03C1; &#x2248;{' '}
              <strong>{(Math.exp(Math.atanh(0.5) / gamma) - 1).toPrecision(3)}&middot;&#x03C1;<sub>crit</sub></strong>.
              {' '}<em>This offset is &#x03B3;-dependent and moves as you drag the slider</em> (corrected
              2026-07-27 — this note used to quote the &#x03B3;=2 value 0.32 as if it were a general
              property, which goes wrong the moment the slider it accompanies is touched: at the
              SPARC-preferred &#x03B3; = 0.49 the midpoint is at 2.07&middot;&#x03C1;<sub>crit</sub>,
              i.e. <em>above</em> the knee).
            </p>
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
