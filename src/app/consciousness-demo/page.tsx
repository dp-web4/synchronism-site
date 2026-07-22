'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const approaches = [
  { name: 'Phase transition analysis', threshold: 0.48, range: [0.45, 0.52], method: 'C value at which discontinuity appears in coherence equations' },
  { name: 'Integrated information', threshold: 0.50, range: [0.47, 0.53], method: 'Φ integral threshold mapped to C via calibration' },
  { name: 'Neural binding threshold', threshold: 0.52, range: [0.48, 0.55], method: 'Minimum C for stable multi-scale neural synchronization' },
  { name: 'Self-modeling criterion', threshold: 0.49, range: [0.45, 0.53], method: 'C value at which system can represent its own coherence state' },
  { name: 'Metabolic criticality', threshold: 0.51, range: [0.47, 0.54], method: 'C at which metabolic energy sustains coherent processing' },
  { name: 'Mirror self-recognition', threshold: 0.50, range: [0.46, 0.54], method: 'Developmental C at age of mirror self-recognition (~18mo)' },
  { name: 'Anesthesia onset', threshold: 0.50, range: [0.48, 0.52], method: 'C at propofol-induced loss of consciousness (predicted)' },
  { name: 'Sleep-wake boundary', threshold: 0.49, range: [0.44, 0.53], method: 'C at which coherent waking experience ceases' },
];

export default function ConsciousnessDemo() {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const svgW = 600;
  const svgH = 300;
  const pad = { top: 30, right: 30, bottom: 40, left: 200 };
  const plotW = svgW - pad.left - pad.right;
  const plotH = svgH - pad.top - pad.bottom;

  const cMin = 0.35;
  const cMax = 0.65;

  const toX = (c: number) => pad.left + ((c - cMin) / (cMax - cMin)) * plotW;
  const toY = (i: number) => pad.top + (i / (approaches.length - 1)) * plotH;

  return (
    <>
      <Breadcrumbs currentPath="/consciousness-demo" />
      <h1>Consciousness Threshold Demo</h1>
      <ValidationBadge status="speculative" label="Speculative — no calibration exists" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '0.75rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>What the one cited test actually measured (correction 2026-07-08):</strong>{' '}
          <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
          Session 63 — the only empirical test ever cited for this threshold — did not
          measure Synchronism&apos;s C. It measured SNARC <code>salience_total</code>: a weighted mean of
          five hand-coded salience heuristics, computed by <em>one shared scoring function</em> across
          8 agent instances (so the instances are not independent). That variable&apos;s operating mean
          was 0.640 &plusmn; 0.018, which rejects 0.50 <em>as the operating mean of that variable</em>{' '}
          (t = 20.19, p &#x2248; 1.8&times;10<sup>&minus;7</sup>, n = 8). No calibration maps salience
          — or any measurement — onto the C-axis, so this is a <strong>wrong-variable
          test</strong>: the C &#x2248; 0.50 threshold remains <strong>untestable as stated</strong>,
          not empirically refuted. Note also that the convergence data displayed below (mean 0.499)
          are a <em>different dataset</em> from Session 63&apos;s — the caption and the chart were
          never about the same numbers.
          <br /><br />
          <strong style={{ color: '#ef4444' }}>Removed claim:</strong> a previous version of this page
          said C &#x2248; 0.64 was &ldquo;also rejected at p &lt; 0.0001.&rdquo; A 2026-07-07 audit that
          walked every site p-value back to primary files found <strong>no source for that claim in any
          repository</strong> — it entered in a 2026-06-23 editorial pass; gnosis-research&apos;s own
          follow-ups (Sessions 64, 68) claim the opposite (0.64 &ldquo;validated&rdquo;). What Session
          63&apos;s own data <em>do</em> exclude as the operating mean: &#x03C6;<sup>&minus;1</sup> = 0.618
          (p = 0.0155) and 2/3 (p = 0.0064) — so the &ldquo;golden ratio&rdquo; reading fails on
          its own aggregate as well (see{' '}
          <a href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</a>).
          The 8-approach convergence shown below is a
          geometric artifact, not an empirical finding — see details in the calibration caveat. This
          demo is retained as an illustration of <em>why</em> a geometric coincidence looked meaningful:
          any approach that picks the midpoint of a [0,1)-bounded output range will land near 0.50 by construction.
        </div>
        <div style={{
          background: 'rgba(245,158,11,0.08)',
          border: '1px solid rgba(245,158,11,0.3)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Calibration caveat:</strong>{' '}
          C &#x2248; 0.50 is the <strong>output-range midpoint</strong> of [0, 1) &mdash; a geometric label,
          not a dynamically privileged value. For C(&#x03C1;) = tanh(&#x03B3;&thinsp;&middot;&thinsp;ln(&#x03C1;/&#x03C1;<sub>crit</sub>&thinsp;+&thinsp;1)),
          the slope dC/d&#x03C1; is maximized at &#x03C1; = 0 (where C = 0), not at C = 0.50 &mdash; there is no inflection
          point in this specific function for &#x03C1; &#x2265; 0. The convergence of 8 approaches on 0.499 &#x00B1; 0.012 is <strong>geometric,
          not empirical</strong>: every approach that picks the midpoint of a [0,1)-bounded output range will
          land near 0.50 by construction. Additionally, all 8 approaches share the same framework
          assumptions and are not independent. No calibration procedure exists to map actual EEG, fMRI,
          or IIT-&#x03A6; measurements to the C-axis.
        </div>
        <p>
          The 8 approaches below all converge on C &#x2248; 0.50 — an illustration of how the geometric
          midpoint artifact operates. The convergence was shown to be forced (geometric, not empirical) and
          the threshold itself remains untestable as stated (no measurement maps to C). Hover over each to see the methodology.
        </p>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* C = 0.50 vertical line */}
            <line
              x1={toX(0.50)} y1={pad.top - 10}
              x2={toX(0.50)} y2={pad.top + plotH + 10}
              stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 3"
            />
            <text x={toX(0.50)} y={pad.top - 15} textAnchor="middle" fill="#8b5cf6" fontSize="11" fontWeight="bold">
              C = 0.50
            </text>

            {/* Grid lines */}
            {[0.40, 0.45, 0.50, 0.55, 0.60].map(v => (
              <g key={v}>
                <line x1={toX(v)} y1={pad.top} x2={toX(v)} y2={pad.top + plotH} stroke="rgba(255,255,255,0.06)" />
                <text x={toX(v)} y={svgH - 10} textAnchor="middle" fill="#6b7280" fontSize="9">
                  {v.toFixed(2)}
                </text>
              </g>
            ))}

            {/* Approach data */}
            {approaches.map((a, i) => {
              const y = toY(i);
              const isHovered = highlighted === i;
              return (
                <g
                  key={a.name}
                  onMouseEnter={() => setHighlighted(i)}
                  onMouseLeave={() => setHighlighted(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Label */}
                  <text
                    x={pad.left - 8}
                    y={y + 4}
                    textAnchor="end"
                    fill={isHovered ? '#f9fafb' : '#9ca3af'}
                    fontSize="10"
                  >
                    {a.name}
                  </text>
                  {/* Range bar */}
                  <line
                    x1={toX(a.range[0])} y1={y}
                    x2={toX(a.range[1])} y2={y}
                    stroke={isHovered ? '#8b5cf6' : 'rgba(139,92,246,0.4)'}
                    strokeWidth={isHovered ? 3 : 2}
                  />
                  {/* Point estimate */}
                  <circle
                    cx={toX(a.threshold)}
                    cy={y}
                    r={isHovered ? 6 : 4}
                    fill="#8b5cf6"
                    stroke={isHovered ? '#fff' : 'none'}
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}

            {/* X axis */}
            <text x={pad.left + plotW / 2} y={svgH - 2} textAnchor="middle" fill="#9ca3af" fontSize="11">
              Coherence threshold C
            </text>
          </svg>
        </div>

        {/* Detail card */}
        {highlighted !== null && (
          <div className="card card-highlight" style={{ marginBottom: '1rem' }}>
            <h3>{approaches[highlighted].name}</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              {approaches[highlighted].method}
            </p>
            <p style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              C = {approaches[highlighted].threshold.toFixed(2)} &nbsp;
              (range: {approaches[highlighted].range[0].toFixed(2)}&ndash;{approaches[highlighted].range[1].toFixed(2)})
            </p>
          </div>
        )}

        {highlighted === null && (
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
            Hover over an approach to see details
          </p>
        )}

        <h2>The Convergence</h2>
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The mean threshold across all 8 approaches is C = <strong>{(approaches.reduce((s, a) => s + a.threshold, 0) / approaches.length).toFixed(3)}</strong>.
            The standard deviation is {Math.sqrt(approaches.reduce((s, a) => s + Math.pow(a.threshold - 0.50, 2), 0) / approaches.length).toFixed(3)}.
            All 8 approaches fall within &#x00B1;0.03 of 0.50.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <strong>Important:</strong> all 8 approaches were developed within Synchronism and share the
            same tanh-based assumptions. Convergence on 0.50 is expected for any approach that picks
            the output-range midpoint of a [0,1)-bounded function &mdash; it does not constitute independent empirical evidence. The convergence
            is consistent with the threshold being real AND with it being a mathematical artifact.
            External calibration (e.g., mapping propofol-stage EEG power spectra to a computed C value)
            is required to distinguish these.
          </p>
        </div>

        <h2>What Has Falsified This</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>C &#x2248; 0.50 is the output-range midpoint (established).</strong> The convergence is geometrically forced — any approach keyed to the midpoint of [0,1) will land near 0.50 by construction. (gnosis-research Session 63&apos;s p&lt;0.0001 rejection concerned a different variable — SNARC salience, not C; see the correction banner above.)</li>
        </ul>
        <h2>What Would Still Falsify C(&#x03C1;)-Based Consciousness More Broadly</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>EEG/fMRI mapping establishing a C threshold at a different value than any of the 8 approaches predict</li>
          <li>Species with demonstrably different C thresholds at the same density</li>
          <li>A calibration protocol mapping IIT-Φ or EEG phase to the C-axis (does not exist yet)</li>
        </ul>
        <div style={{ background: 'rgba(56, 189, 248, 0.07)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong style={{ color: '#38bdf8' }}>The calibration target that already exists (added 2026-07-22):</strong>{' '}
          &ldquo;no calibration procedure exists&rdquo; is true of the C-axis &mdash; but neuroscience
          does have an empirically validated consciousness-threshold measurement this page should name:
          the <strong>Perturbational Complexity Index</strong> (PCI, Casali et al. 2013), whose cutoff
          PCI* = 0.31 was validated on 150 subjects across wakefulness, sleep, anesthesia, and
          disorders of consciousness (Casarotto et al. 2016) with ~95% accuracy. That makes the gap
          here <em>engageable, not just lamentable</em>: a C&rarr;PCI mapping would need (1) an
          operational rule computing C from TMS-EEG response data, and (2) a demonstration that the
          framework&apos;s predicted C threshold maps onto PCI* = 0.31 rather than being fit to it.
          Until someone attempts that mapping &mdash; or shows why none can exist &mdash; the
          consciousness sector&apos;s honest status is <em>untested against the one calibrated
          instrument available</em>, which is a sharper statement than &ldquo;no calibration
          exists.&rdquo; (Research-repo proposal: c_observable_calibration_gap.md.)
        </div>
      </section>

      <RelatedConcepts currentPath="/consciousness-demo" />
    </>
  );
}
