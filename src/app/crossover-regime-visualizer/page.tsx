'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import { GAMMA_BANDS, gammaBand } from '@/lib/gammaBands';

const regions = [
  {
    id: 'classical',
    label: `${GAMMA_BANDS.collective.range} — ${GAMMA_BANDS.collective.name} · ${GAMMA_BANDS.collective.ncorr}`,
    color: '#10b981',
    range: [0, 0.6],
    systems: ['Superconductors', 'BEC', 'Superfluids', 'Cooper pairs', 'Quantum computers'],
    physics: 'Many correlated particles (large N_corr, small γ) — the strongly correlated regime. BEC, BCS superconductors, and superfluids sit here because they have enormous N_corr, giving them very small γ (BCS: N_corr = 10⁷, the γ Calculator preset, giving γ = 2/√10⁷ ≈ 6×10⁻⁴). Important: "collective" in the C-axis sense (C→1) is separate from "large N_corr" here — small γ gives a nearly flat tanh curve, so C stays near 0 at physically accessible densities despite large N_corr.',
    realityCheck: 'Reality check: these transitions happen in temperature, and C(ρ) has no temperature axis, so it cannot represent them at all. Even granting the comparison, the sign is backwards: conventional (BCS) superconductors in this bin have one of the SHARPEST transitions in nature (critical fluctuations are confined to a tiny window around T_c), and the formula just told you they are the flattest. Superfluid helium-4 is the counter-case: its lambda transition has a broad critical region, with fluctuations measured over many decades of temperature. Dilute atomic BECs sit with BCS on the narrow side (critical window Gi ∼ a·n^⅓, small for weak interactions). Transition width tracks interaction strength and how many particles share one coherence volume, not how "collective" a system is, so N_corr is the wrong variable either way.',
  },
  {
    id: 'boundary',
    label: `${GAMMA_BANDS.crossover.range} — ${GAMMA_BANDS.crossover.name} · ${GAMMA_BANDS.crossover.ncorr}`,
    color: '#f59e0b',
    range: [0.6, 1.4],
    systems: ['Liquid water', 'Enzymes', 'Chemical bonds', 'Neural firing'],
    physics: 'The regime where collective and independent behavior balance. Systems whose estimated γ falls here include liquid water, enzymes, and neural dynamics. Note: C(ρ) itself is a smooth compander with no critical point — "boundary" here means a regime boundary in γ, not a mathematical phase boundary. The consciousness-threshold conjecture (C ≈ 0.50) was historically placed in this band; C is a different axis from γ, and D and S remain undefined, so that placement has no calculation behind it — see hard-problem page.',
    realityCheck: 'Reality check: no shared transition physics is known to connect the systems grouped here — water, enzymes, and neural firing land together because of how their N_corr was asserted (not counted), not because of any measured common behavior at γ ≈ 1. The grouping is the counting convention, visualized.',
  },
  {
    id: 'quantum',
    label: `${GAMMA_BANDS.single.range} — ${GAMMA_BANDS.single.name} · ${GAMMA_BANDS.single.ncorr} (γ = 2 or ≈ 1.41)`,
    color: '#8b5cf6',
    range: [1.4, 4.0],
    systems: ['Ideal gases', 'Single atoms', 'Few-particle systems', 'Uncorrelated matter'],
    physics: 'Few correlated particles (small N_corr, large γ) — the single-particle / uncorrelated regime. Individual behavior dominates; rapid decoherence. γ = 2 (N_corr = 1) is the value the framework asserts for galaxies — but the SPARC RAR ensemble test disfavours γ = 2 (ΔBIC = +184, Υ frozen; +46 with Υ free per law); the free fit gives γ ≈ 0.49, which back-implies N_corr ≈ 17 and contradicts the N_corr = 1 premise. The galaxy marker below is shown at the asserted value with that refutation flagged.',
    realityCheck: 'Reality check: an ideal gas has no phase transition at all — yet the formula assigns it the sharpest curve on the map: maximal sharpness with nothing to be sharp about. And the galaxies the framework pins here at γ = 2 are disfavoured on SPARC data (ΔBIC = +184, Υ frozen; +46 with Υ free per law).',
  },
];

export default function PhaseBoundaryVisualizer() {
  const [gamma, setGamma] = useState(1.0);

  const activeRegion = regions.find(r => r.id === ({ collective: 'classical', crossover: 'boundary', single: 'quantum' } as const)[gammaBand(gamma).id]) || regions[2];

  const svgW = 600;
  const svgH = 200;
  const barY = 60;
  const barH = 40;

  return (
    <>
      <Breadcrumbs currentPath="/crossover-regime-visualizer" />
      {/* Visible title renamed 2026-09-15; route renamed 2026-10-23 from /phase-boundary-visualizer (old URL redirects) */}
      <h1>Crossover Regime Visualizer</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
        <ValidationBadge status="audited-negative" label="γ = 2/√N_corr — ranks the most collective systems flattest (sign inverted)" />
      </div>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: '0.35rem' }}>
        Tool type: <strong>Model Explainer &middot; Artifact Lesson</strong> (the Interactive Tools index Kind and State
        tags &mdash; Artifact Lesson is an operational state, not a level: a tool kept to show a failure, not a verdict) &middot; Claim status: <strong>Audited-Negative</strong>, the
        badge above.
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
        Formerly &ldquo;Phase Boundary Visualizer&rdquo;; the URL carried that name until 2026-10-23, when a technical-writer
        simulated-visitor persona pointed out that it still asserted the retracted claim in every link. C(&#x03C1;) is analytic everywhere &mdash;
        a smooth <em>crossover</em>, not a thermodynamic phase transition &mdash; so the regimes below are ranges of
        &#x03B3;, not phases (full naming note below).
      </p>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
        <strong>What is plotted:</strong> not a curve. The bar is a &#x03B3; axis from 0 to 4, split into three bands by the archive&apos;s rule
        &#x03B3; = 2/&radic;N<sub>corr</sub> (N<sub>corr</sub> is the number of correlated parts). &#x03B3; is the setting in
        C(&#x03C1;) = tanh(&#x03B3;&middot;ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1)), the framework&apos;s proposed measure of how
        collectively a system behaves (0 to 1) as a function of its density &#x03C1; (see{' '}
        <Link href="/equation-walkthrough" style={{ color: 'var(--color-accent-blue)' }}>Equation Anatomy</Link>). To see the C(&#x03C1;) curve itself, use the{' '}
        <Link href="/coherence-explorer" style={{ color: 'var(--color-accent-blue)' }}>Coherence Explorer</Link>.{' '}
        <strong>How to use it:</strong> one slider, labelled &#x03B3; (it sets how wide the S-curve&apos;s rise is, down to a floor; it was first proposed as a sharpness, and no value makes the curve sharp), runs from 0 to 4 in steps
        of 0.01 and starts at 1.0. Drag it and the marker moves across three &#x03B3; ranges (below 0.6, 0.6&ndash;1.4, above
        1.4); the card under the bar describes the range you are in and says where the formula gets real physics backwards.
      </p>

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
          documented sign inversion: real BCS superconductor transitions are among the sharpest in nature, yet
          the formula files them at the flat end. Superfluid helium-4, by contrast, has a famously broad critical region, so &ldquo;collective&rdquo; is not what orders transition width either; the number of particles per coherence volume is).
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>One more thing to know before reading the map:</strong> the N<sub>corr</sub> values
          driving every placement (10&#x2077; for BCS; for galaxies, 17 is the value implied by the fitted &#x03B3; &asymp; 0.49 and 1 is the framework&apos;s registered value, &#x03B3; = 2, refuted; &#x2026;) are <em>asserted, not
          counted</em> &mdash; no independent counting procedure exists on any of the 17 scales (the{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>derivations page</Link>{' '}
          documents this). Treat the positions as the formula&apos;s claims, not as data.
        </p>
        <p>
          The three regimes of &#x03B3; map qualitatively different correlation structures.
          Drag the slider to explore where different systems are <em>asserted</em> to fall.
          Labeled positions are approximate (&#x03B3; = 2/&#x221A;N<sub>corr</sub>;
          N<sub>corr</sub> values are asserted, not counted).
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Naming note:</strong> despite the historical name, C(&#x03C1;) is a smooth compander
          (&#x03BC;-law/Hill/logistic family) with no critical point &mdash; &ldquo;boundary&rdquo; on this
          page means a regime boundary along the &#x03B3; axis, not a phase transition.
        </p>
        <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          <strong style={{ color: '#ef4444' }}>What γ actually classifies:</strong>{' '}
          γ = 2/√N<sub>corr</sub> encodes the <em>counting convention</em> used for N<sub>corr</sub>,
          not a physical invariant of the system. Two unrelated systems with the same estimated N<sub>corr</sub>{' '}
          (e.g., ideal gases and galaxies, both assigned N<sub>corr</sub> = 1) share a γ value for
          methodological reasons, not physical ones. This visualizer shows how systems cluster under
          the current counting convention; it does not imply they have the same microphysics.
          See the caveat box below for details.
        </div>
        <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          <strong style={{ color: '#ef4444' }}>C(&#x03C1;) has no temperature axis, so it cannot represent these transitions at all (audited and closed for this formula; what would replace it is open):</strong>{' '}
          superconductors, superfluids and condensates change phase as <em>temperature</em> crosses T<sub>c</sub>.
          C(&#x03C1;) is a function of density only, and the only system-specific input is an N<sub>corr</sub> assigned
          by hand. Placing these systems by the width of a density curve compares two different variables, so this map
          is not a condensed-matter reading of them in either direction. The{' '}
          <a href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</a>{' '}
          and{' '}
          <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</a>{' '}
          (&ldquo;that sharpness is in temperature while C&apos;s axis is density&rdquo;) say the same.
          <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            <strong>Secondary note, the sign.</strong> Even granting the cross-variable comparison, the direction is
            backwards: &#x03B3; = 2/&#x221A;N<sub>corr</sub> gives the most strongly correlated systems the{' '}
            <em>flattest</em> curves, while BCS superconductors, the highest-N<sub>corr</sub> systems shown here,
            have transitions among the <em>sharpest</em> in nature (1/&#x221A;N is a width, not a rate). Bose
            condensates split: a dilute atomic BEC has a narrow critical window (Gi &#x223C; a&middot;n<sup>1/3</sup>,
            small for weak interactions), while strongly interacting &#x2074;He has a broad lambda region. The
            condensed-matter anchor is the <strong>Ginzburg criterion</strong>, which bounds the width of the
            critical-fluctuation region &mdash; the temperature window in which fluctuations visibly round a
            transition. In three dimensions the Ginzburg number is
            Gi &#x221D; (k<sub>B</sub>/(&#x0394;C&nbsp;&#x03BE;<sub>0</sub><sup>3</sup>))<sup>2</sup> (&#x0394;C = specific-heat jump per
            volume). Only at fixed &#x0394;C does that reduce to &#x03BE;<sub>0</sub><sup>&#x2212;6</sup> &#x221D;
            N<sub>&#x03BE;</sub><sup>&#x2212;2</sup> (N<sub>&#x03BE;</sub> = particles per coherence volume). For BCS
            superconductors &#x0394;C itself scales with T<sub>c</sub>/E<sub>F</sub>, and the textbook result is
            Gi ~ (T<sub>c</sub>/E<sub>F</sub>)<sup>4</sup> ~ (k<sub>F</sub>&#x03BE;<sub>0</sub>)<sup>&#x2212;4</sup> &#x221D;
            N<sub>&#x03BE;</sub><sup>&#x2212;4/3</sup>: the real width falls steeply with N<sub>&#x03BE;</sub>, while
            &#x03B3; = 2/&#x221A;N makes high-N curves flatter. The exponent does not match either (1/2 against 4/3
            for BCS). As Parameter Derivations puts it: the direction survives; &ldquo;exact&rdquo; did not.
          </p>
          <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            Also note the axis itself: the quoted BCS value
            (&#x03B3; &#x2248; 6&#xD7;10<sup>&#x2212;4</sup>) is on-scale, at the left edge of the linear 0&ndash;4 range, but
            indistinguishable from 0 there (it is ~3 orders of magnitude smaller than the axis&apos;s first band edge, 0.6).
          </p>
          <details style={{ marginTop: '0.35rem', fontSize: '0.8rem' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note (2026-11-28)</summary>
            This box used to be headed &ldquo;Sharpness direction is inverted&rdquo; and called the sign &ldquo;the
            decisive point&rdquo;, holding for any exponent. A researcher simulated-visitor persona pointed out that the
            site&apos;s own landing and Parameter Derivations name the variable mismatch (temperature vs density) as the
            decisive defect, and that the box said &ldquo;BCS superconductors and BECs&rdquo; are among the sharpest
            while the regime card files BEC/&#x2074;He as the counter-case. The box now leads with the variable mismatch,
            demotes the sign to a secondary note, and splits dilute BECs (narrow) from &#x2074;He (broad).
          </details>
          <details style={{ marginTop: '0.35rem', fontSize: '0.8rem' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note (2026-09-21)</summary>
            The axis note previously said the BCS value was &ldquo;three orders of magnitude off the left edge&rdquo;; a
            linear axis starting at 0 cannot place a positive value beyond its left edge.
          </details>
          <details style={{ marginTop: '0.35rem', fontSize: '0.8rem' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note (2026-10-06)</summary>
            The Ginzburg benchmark used to say the critical-region width &ldquo;scales roughly as
            N<sub>&#x03BE;</sub><sup>&#x2212;2</sup> &#x221D; &#x03BE;<sub>0</sub><sup>&#x2212;6</sup>&rdquo; and that the formula had
            &ldquo;the wrong sign <em>and</em> the wrong exponent&rdquo;. That scaling holds only at fixed &#x0394;C; for BCS,
            the system the page names, Gi ~ (T<sub>c</sub>/E<sub>F</sub>)<sup>4</sup> &#x221D; N<sub>&#x03BE;</sub><sup>&#x2212;4/3</sup>.
            The exponent comparison now uses the BCS value; the sign argument is unchanged. Caught by the graduate-physics
            simulated-visitor persona, 2026-10-06.
          </details>
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

            {/* N_corr at each band edge (N = 4/γ²) */}
            <text x={30 + (0.6 / 4.0) * 540} y={barY - 26} textAnchor="middle" fill="#9ca3af" fontSize="9">N&#x2248;11.1</text>
            <text x={30 + (1.4 / 4.0) * 540} y={barY - 26} textAnchor="middle" fill="#9ca3af" fontSize="9">N&#x2248;2.04</text>

            {/* Labels */}
            <text x={30 + (0.3 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#10b981" fontSize="11">{GAMMA_BANDS.collective.name}</text>
            <text x={30 + (1.0 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#f59e0b" fontSize="11">{GAMMA_BANDS.crossover.name}</text>
            <text x={30 + (2.7 / 4.0) * 540} y={barY - 10} textAnchor="middle" fill="#8b5cf6" fontSize="11">{GAMMA_BANDS.single.name}</text>

            {/* Anchored example markers */}
            <line x1={32} y1={barY + barH + 5} x2={32} y2={barY + barH + 25} stroke="#10b981" strokeWidth="1" />
            <text x={36} y={barY + barH + 36} textAnchor="start" fill="#10b981" fontSize="8">BEC/SC (γ≈6×10⁻⁴, at the left edge, indistinguishable from 0)</text>
            <line x1={30 + (0.85 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (0.85 / 4.0) * 540} y2={barY + barH + 25} stroke="#f59e0b" strokeWidth="1" />
            <text x={30 + (0.85 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#f59e0b" fontSize="8">water/enzymes</text>
            <line x1={30 + (0.49 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (0.49 / 4.0) * 540} y2={barY + barH + 25} stroke="#ef4444" strokeWidth="1" />
            <text x={30 + (0.49 / 4.0) * 540} y={barY + barH + 46} textAnchor="middle" fill="#ef4444" fontSize="8">γ=0.49 (SPARC fit of the acceleration-keyed law, a different variable; density-keyed fit: γ→0.046)</text>
            <line x1={30 + (2.0 / 4.0) * 540} y1={barY + barH + 5} x2={30 + (2.0 / 4.0) * 540} y2={barY + barH + 25} stroke="#38bdf8" strokeWidth="1" />
            <text x={30 + (2.0 / 4.0) * 540} y={barY + barH + 36} textAnchor="middle" fill="#38bdf8" fontSize="8">γ=2 (ideal gas; registered galaxy value — refuted)</text>

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
          style={{ width: '100%', marginBottom: '0.4rem' }}
        />
        <p style={{ color: '#f87171', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
          <strong>What to notice as you drag:</strong> BCS superconductors and BECs land at the far <em>flat</em> (left)
          end &mdash; yet a BCS superconductor&apos;s real transition is among the sharpest in nature &mdash; while an ideal gas, which has no
          phase transition at all, lands at the early-rise end (&#x03B3; = 2). That inversion is the lesson. (Until 2026-11-22 this said BECs and superfluids are among the sharpest too;
          a researcher simulated-visitor persona pointed out that helium-4&apos;s critical region is broad. The inversion holds for BCS.)
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1.5rem' }}>
          <strong>Band edges in N<sub>corr</sub>:</strong> inverting &#x03B3; = 2/&#x221A;N<sub>corr</sub> gives
          N<sub>corr</sub> = 4/&#x03B3;&sup2;, so &#x03B3; = 1.4 &#x21D4; N<sub>corr</sub> &#x2248; 2.04 and
          &#x03B3; = 0.6 &#x21D4; N<sub>corr</sub> &#x2248; 11.1. With whole-number counts, the single-particle band
          holds only N<sub>corr</sub> = 1 and 2, the &#x03B3; &#x2248; 1 band holds 3&ndash;11, and everything with
          12 or more correlated units lands in the bottom band. That includes the &#x03B3; Calculator&apos;s enzyme
          preset (N<sub>corr</sub> = 30, &#x03B3; &#x2248; 0.37) and BCS (10<sup>7</sup>). This page&apos;s enzyme
          placement near &#x03B3; &#x2248; 0.85 implies N<sub>corr</sub> &#x2248; 5.5, a different estimate.
        </p>

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
            <strong>Galaxy placement (2026-06-11):</strong> the asserted &#x03B3; = 2 (N<sub>corr</sub> = 1) is disfavoured on the SPARC RAR ensemble (&#x394;BIC = +184, Υ frozen; +46 with Υ free per law); the free fit gives &#x03B3; &#x2248; 0.49 &#x2192; N<sub>corr</sub> &#x2248; 17, contradicting the independent-stars premise. Both markers are shown so the refutation is visible, not hidden.
            <strong> Which law (added 2026-09-24):</strong> the +184 and the 0.49 both come from the formula keyed on
            <em> acceleration</em> (MOND&apos;s variable), while this axis is the density-keyed law&apos;s &#x03B3; = 2/&radic;N<sub>corr</sub>.
            Fitted in density, the galaxy law goes to &#x03B3; &rarr; 0.046 (N<sub>corr</sub> &asymp; 1.9&times;10&sup3;) and is refuted at
            &Delta;BIC +2843. So the 0.49 marker is placed on an axis it was not measured on.
            The &#x03B3; values shown here are illustrative, not measured.
          </p>
        </div>

        <h2>The Three Regimes</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          Summary index only &mdash; move the slider above to read each regime&apos;s full physics in the
          highlight card (duplicated text removed 2026-07-17).
        </p>
        <details style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          <summary style={{ cursor: 'pointer' }}>Revision note</summary>
          The &#x03B3; &#x2248; 1 band used to list &ldquo;Phase transitions&rdquo; and &ldquo;Consciousness threshold&rdquo;
          among its systems. C(&#x03C1;) has no phase transition, and the consciousness threshold is a value of C, not a
          system with an N<sub>corr</sub>, so both were removed from the list. The band labels now also show their
          N<sub>corr</sub> ranges.
        </details>
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

      <RelatedConcepts currentPath="/crossover-regime-visualizer" />
    </>
  );
}
