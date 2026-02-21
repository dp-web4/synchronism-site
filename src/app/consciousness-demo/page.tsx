'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

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

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Eight independent approaches converge on C &#x2248; 0.50 as the consciousness
          threshold. Hover over each approach to see its methodology and uncertainty range.
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
            This convergence is the strongest evidence for the consciousness threshold prediction.
            However: all 8 approaches were developed within the same framework (Synchronism),
            so they&apos;re not fully independent. External derivation would be much stronger.
          </p>
        </div>

        <h2>What Would Falsify This</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>EEG anesthesia study showing consciousness loss at widely varying C values (1.0 to 6.0)</li>
          <li>Species with consciousness at demonstrably different C thresholds</li>
          <li>C &#x2248; 0.50 being an artifact of the tanh function&apos;s inflection point (mathematical, not physical)</li>
        </ul>
      </section>

      <RelatedConcepts currentPath="/consciousness-demo" />
    </>
  );
}
