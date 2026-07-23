'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const regions = [
  {
    id: 'classical',
    label: 'γ < 0.6 — High-N_corr (strongly correlated)',
    color: '#10b981',
    range: [0, 0.6],
    systems: ['Superconductors', 'BEC', 'Superfluids', 'Cooper pairs', 'Quantum computers'],
    physics: 'Many correlated particles (large N_corr, small γ) — the strongly correlated regime. BEC, BCS superconductors, and superfluids sit here because they have enormous N_corr, giving them very small γ (BCS: N_corr = 10⁷, the γ Calculator preset, giving γ = 2/√10⁷ ≈ 6×10⁻⁴). Important: "collective" in the C-axis sense (C→1) is separate from "large N_corr" here — small γ gives a nearly flat tanh curve, so C stays near 0 at physically accessible densities despite large N_corr.',
    realityCheck: 'Reality check: the systems in this bin — BCS superconductors, BECs, superfluids — undergo transitions that are among the SHARPEST in nature. The formula just told you they are the flattest. You are looking directly at the inversion; that is the finding.',
  },
  {
    id: 'boundary',
    label: 'γ ≈ 1 — Boundary',
    color: '#f59e0b',
    range: [0.6, 1.4],
    systems: ['Liquid water', 'Enzymes', 'Phase transitions', 'Chemical bonds', 'Neural firing', 'Consciousness threshold'],
    physics: 'The regime where collective and independent behavior balance. Systems whose estimated γ falls here include liquid water, enzymes, and neural dynamics. Note: C(ρ) itself is a smooth compander with no critical point — "boundary" here means a regime boundary in γ, not a mathematical phase boundary. The consciousness threshold conjecture (C ≈ 0.50) maps to this regime, though D and S remain undefined — see hard-problem page.',
    realityCheck: 'Reality check: no shared transition physics is known to connect the systems grouped here — water, enzymes, and neural firing land together because of how their N_corr was estimated, not because of any measured common behavior at γ ≈ 1. The grouping is the counting convention, visualized.',
  },
  {
    id: 'quantum',
    label: 'γ > 1.4 — Single-particle',
    color: '#8b5cf6',
    range: [1.4, 4.0],
    systems: ['Ideal gases', 'Single atoms', 'Few-particle systems', 'Uncorrelated matter'],
    physics: 'Few correlated particles (small N_corr, large γ) — the single-particle / uncorrelated regime. Individual behavior dominates; rapid decoherence. γ = 2 (N_corr = 1) is the value the framework asserts for galaxies — but the SPARC RAR ensemble test rejected γ = 2 at ΔBIC = +184; the free fit gives γ ≈ 0.49, which back-implies N_corr ≈ 17 and contradicts the N_corr = 1 premise. The galaxy marker below is shown at the asserted value with that refutation flagged.',
    realityCheck: 'Reality check: an ideal gas has no phase transition at all — yet the formula assigns it the sharpest curve on the map: maximal sharpness with nothing to be sharp about. And the galaxies the framework pins here at γ = 2 were refuted on SPARC data at ΔBIC = +184.',
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
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#ef4444' }}>This tool animates a refuted relation — on purpose.</strong>{' '}
          The &#x03B3; = 2/&#x221A;N<sub>corr</sub> map you are about to drag is audited-negative: it
          predicts the <em>opposite</em> of real condensed-matter behavior. The lesson is the inversion
          itself. As you move the slider, each regime card carries a <strong>reality check</strong> line —
          your task is to catch the formula being wrong at every stop, not to learn its placements.
          (Reframed 2026-07-23: an earlier version presented the map first and the inversion as a caveat;
          reviewers kept reporting that the animation out-taught the caveat.)
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <strong style={{ color: 'var(--color-accent-blue)' }}>What this tool is for:</strong> drag
          the slider to see which physical systems the &#x03B3; formula groups together &mdash; and why
          that grouping is now known to be misleading (the placements carry the formula&apos;s
          documented sign inversion: real BCS/BEC transitions are among the sharpest in nature, yet
          the formula files them at the flat end).
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>One more thing to know before reading the map:</strong> the N<sub>corr</sub> values
          driving every placement (10&#x2077; for BCS, 17 for galaxies, &#x2026;) are <em>asserted, not
          counted</em> &mdash; no independent counting procedure exists on any of the 17 scales (the{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>derivations page</Link>{' '}
          documents this). Treat the positions as the formula&apos;s claims, not as data.
        </p>
        <p>
          The three regimes of &#x03B3; map qualitatively different correlation structures.
          Drag the slider to explore where different systems are <em>estimated</em> to fall.
          Labeled positions are approximate (&#x03B3; = 2/&#x221A;N<sub>corr</sub>;
          N<sub>corr</sub> values are estimated, not precisely measured for most systems).
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Naming note:</strong> despite the historical name, C(&#x03C1;) is a smooth compander
          (&#x03BC;-law/Hill/logistic family) with no critical point &mdash; &ldquo;boundary&rdquo; on this
          page means a regime boundary along the &#x03B3; axis, not a phase transition.
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
        <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          <strong style={{ color: '#ef4444' }}>Sharpness direction is inverted (open problem):</strong>{' '}
          this tool positions systems by transition sharpness, and &#x03B3; = 2/&#x221A;N<sub>corr</sub>{' '}
          assigns the most strongly correlated systems the <em>flattest</em> C(&#x03C1;) curves.
          In real physics the opposite holds: BCS superconductors and BECs — the highest-N<sub>corr</sub>{' '}
          systems shown here — undergo transitions that are among the <em>sharpest</em> in nature.
          So a condensed-matter reading of this map is backwards: more correlation should not mean a
          smoother transition. This is the same audited-negative sign inversion documented on the{' '}
          <a href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</a>{' '}
          (1/&#x221A;N is a width, not a rate); it is stated here because this is the page where systems
          are visually placed. Also note the axis itself: the quoted BCS value
          (&#x03B3; &#x2248; 6&#xD7;10<sup>&#x2212;4</sup>) sits three orders of magnitude off the left
          edge of the displayed 0&ndash;4 range — the marker below is a direction indicator, not a position.
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
            <line x1={32} y1={barY + barH + 5} x2={32} y2={barY + barH + 25} stroke="#10b981" strokeWidth="1" />
            <text x={36} y={barY + barH + 36} textAnchor="start" fill="#10b981" fontSize="8">&#x2190; BEC/SC (γ≈6×10⁻⁴, ~3 OOM off-scale left)</text>
            <line x1={30 + (0.85 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (0.85 / 4.0) * 540} y2={barY + barH + 25} stroke="#f59e0b" strokeWidth="1" />
            <text x={30 + (0.85 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#f59e0b" fontSize="8">water/enzymes</text>
            <line x1={30 + (0.49 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (0.49 / 4.0) * 540} y2={barY + barH + 25} stroke="#ef4444" strokeWidth="1" />
            <text x={30 + (0.49 / 4.0) * 540} y={barY + barH + 46} textAnchor="middle" fill="#ef4444" fontSize="8">γ=0.49 (galaxies, SPARC fit — N_corr≈17 back-solved from this fit, not counted)</text>
            <line x1={30 + (2.0 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (2.0 / 4.0) * 540} y2={barY + barH + 25} stroke="#38bdf8" strokeWidth="1" />
            <text x={30 + (2.0 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#38bdf8" fontSize="8">γ=2 (ideal gas; galaxies asserted — refuted ΔBIC=+184)</text>

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
          <p style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', padding: '0.5rem 0.75rem', background: 'rgba(239,68,68,0.08)', borderRadius: '4px' }}>
            {activeRegion.realityCheck}
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
            BCS superconductor placement uses N<sub>corr</sub> = 10<sup>7</sup> (&#x03B3; = 2/&#x221A;10<sup>7</sup> &#x2248; 6&#xD7;10<sup>&#x2212;4</sup>, matching the &#x03B3; Calculator preset); physical Cooper-pair volumes contain ~10<sup>6</sup>–10<sup>9</sup> pairs depending on material.
            <strong>Galaxy placement (2026-06-11):</strong> the asserted &#x03B3; = 2 (N<sub>corr</sub> = 1) was rejected on the SPARC RAR ensemble at &#x394;BIC = +184; the free fit gives &#x03B3; &#x2248; 0.49 &#x2192; N<sub>corr</sub> &#x2248; 17, contradicting the independent-stars premise. Both markers are shown so the refutation is visible, not hidden.
            The &#x03B3; values shown here are illustrative, not measured.
          </p>
        </div>

        <h2>The Three Regimes</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          Summary index only &mdash; move the slider above to read each regime&apos;s full physics in the
          highlight card (duplicated text removed 2026-07-17).
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {regions.map(r => (
            <div key={r.id} className="card" style={{ borderLeft: `3px solid ${r.color}` }}>
              <h3 style={{ color: r.color, fontSize: '0.95rem' }}>{r.label}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {r.systems.map(s => (
                  <span key={s} style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${r.color}`, borderRadius: '12px', padding: '0.15rem 0.5rem', fontSize: '0.8rem', color: r.color }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <RelatedConcepts currentPath="/phase-boundary-visualizer" />
    </>
  );
}
