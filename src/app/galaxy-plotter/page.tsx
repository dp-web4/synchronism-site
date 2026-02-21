'use client';

import { useState, useMemo } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const galaxies = [
  {
    name: 'DDO 154',
    type: 'Dwarf irregular',
    vflat: 47,
    points: [
      [0.3, 10], [0.6, 18], [1.0, 25], [1.5, 32], [2.0, 37], [2.8, 41], [3.5, 44], [4.2, 46], [5.0, 47],
    ] as [number, number][],
  },
  {
    name: 'NGC 2403',
    type: 'SAB(s)cd',
    vflat: 136,
    points: [
      [0.5, 40], [1.0, 70], [2.0, 100], [3.0, 118], [4.0, 127], [5.5, 132], [7.0, 134], [9.0, 135], [11.0, 136],
    ] as [number, number][],
  },
  {
    name: 'NGC 3198',
    type: 'SB(rs)c',
    vflat: 150,
    points: [
      [1.0, 60], [2.0, 105], [4.0, 140], [6.0, 148], [8.0, 150], [10.0, 150], [13.0, 149], [16.0, 150], [20.0, 150],
    ] as [number, number][],
  },
  {
    name: 'UGC 128',
    type: 'LSB dwarf',
    vflat: 55,
    points: [
      [1.0, 15], [2.0, 25], [4.0, 35], [6.0, 42], [8.0, 48], [10.0, 51], [13.0, 53], [16.0, 54], [18.0, 55],
    ] as [number, number][],
  },
  {
    name: 'NGC 7331',
    type: 'SA(s)b',
    vflat: 250,
    points: [
      [1.0, 100], [2.0, 180], [4.0, 230], [6.0, 245], [8.0, 250], [10.0, 250], [13.0, 249], [16.0, 250], [20.0, 250],
    ] as [number, number][],
  },
];

function newtonianVel(r: number, vflat: number): number {
  const rScale = 3.0;
  return vflat * Math.sqrt(1 - Math.exp(-r / rScale)) * 0.6;
}

function synchronismVel(r: number, vflat: number): number {
  const rScale = 2.5;
  const baryon = vflat * Math.sqrt(1 - Math.exp(-r / rScale)) * 0.6;
  const coherence = vflat * Math.tanh(0.4 * r / rScale);
  return Math.sqrt(baryon * baryon + coherence * coherence);
}

export default function GalaxyPlotter() {
  const [selected, setSelected] = useState(0);
  const galaxy = galaxies[selected];

  const svgW = 600;
  const svgH = 350;
  const pad = { top: 20, right: 30, bottom: 50, left: 60 };
  const plotW = svgW - pad.left - pad.right;
  const plotH = svgH - pad.top - pad.bottom;

  const xMax = Math.max(...galaxy.points.map(p => p[0])) * 1.1;
  const yMax = Math.max(...galaxy.points.map(p => p[1])) * 1.3;

  const toX = (r: number) => pad.left + (r / xMax) * plotW;
  const toY = (v: number) => pad.top + (1 - v / yMax) * plotH;

  const modelPoints = useMemo(() => {
    const pts: { r: number; vNew: number; vSyn: number }[] = [];
    for (let i = 0; i <= 50; i++) {
      const r = (i / 50) * xMax;
      pts.push({
        r,
        vNew: newtonianVel(r, galaxy.vflat),
        vSyn: synchronismVel(r, galaxy.vflat),
      });
    }
    return pts;
  }, [galaxy, xMax]);

  return (
    <>
      <Breadcrumbs currentPath="/galaxy-plotter" />
      <h1>Galaxy Curve Plotter</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Select a SPARC galaxy and compare observed rotation curves with Newtonian (baryons only)
          and Synchronism predictions. The gap between Newtonian and observed is what
          &#x039B;CDM calls &ldquo;dark matter.&rdquo;
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {galaxies.map((g, i) => (
            <button
              key={g.name}
              onClick={() => setSelected(i)}
              style={{
                background: i === selected ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
                color: i === selected ? '#fff' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-dark-border)',
                borderRadius: '4px',
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>{galaxy.name}</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              {galaxy.type} &nbsp;&bull;&nbsp; V<sub>flat</sub> = {galaxy.vflat} km/s
            </span>
          </div>

          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* Grid */}
            {[0, 0.25, 0.5, 0.75, 1.0].map(frac => {
              const y = pad.top + (1 - frac) * plotH;
              const v = (frac * yMax).toFixed(0);
              return (
                <g key={frac}>
                  <line x1={pad.left} y1={y} x2={pad.left + plotW} y2={y} stroke="rgba(255,255,255,0.06)" />
                  <text x={pad.left - 8} y={y + 4} textAnchor="end" fill="#6b7280" fontSize="9">{v}</text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + plotH} stroke="#6b7280" />
            <line x1={pad.left} y1={pad.top + plotH} x2={pad.left + plotW} y2={pad.top + plotH} stroke="#6b7280" />
            <text x={pad.left + plotW / 2} y={svgH - 8} textAnchor="middle" fill="#9ca3af" fontSize="11">Radius (kpc)</text>
            <text x={14} y={pad.top + plotH / 2} textAnchor="middle" fill="#9ca3af" fontSize="11" transform={`rotate(-90,14,${pad.top + plotH / 2})`}>V (km/s)</text>

            {/* Newtonian curve (dashed gray) */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vNew).toFixed(1)}`).join(' ')}
              fill="none" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="5 3"
            />

            {/* Synchronism curve (violet) */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vSyn).toFixed(1)}`).join(' ')}
              fill="none" stroke="#8b5cf6" strokeWidth="2"
            />

            {/* Observed data points (blue dots) */}
            {galaxy.points.map(([r, v], i) => (
              <circle key={i} cx={toX(r)} cy={toY(v)} r="4" fill="#38bdf8" />
            ))}

            {/* Legend */}
            <circle cx={pad.left + 20} cy={pad.top + 15} r="4" fill="#38bdf8" />
            <text x={pad.left + 30} y={pad.top + 19} fill="#38bdf8" fontSize="10">Observed</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 30} x2={pad.left + 20 + 8} y2={pad.top + 30} stroke="#8b5cf6" strokeWidth="2" />
            <text x={pad.left + 30} y={pad.top + 34} fill="#8b5cf6" fontSize="10">Synchronism</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 45} x2={pad.left + 20 + 8} y2={pad.top + 45} stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x={pad.left + 30} y={pad.top + 49} fill="#6b7280" fontSize="10">Newtonian (baryons only)</text>
          </svg>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3>What You&apos;re Seeing</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The <span style={{ color: '#6b7280' }}>dashed line</span> is what rotation curves
            should look like with only visible matter (stars + gas). The
            <span style={{ color: '#38bdf8' }}> blue dots</span> are what we actually observe.
            The gap is the &ldquo;dark matter problem.&rdquo;
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Synchronism&apos;s <span style={{ color: '#8b5cf6' }}>violet curve</span> fills the
            gap using C(&#x03C1;) with &#x03B3; = 2 (uncorrelated stars) &mdash; no dark matter
            particles needed. The coherence function adds an effective mass component from the
            density field itself.
          </p>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Note: Curves shown are simplified models for illustration. Actual SPARC fits use
          full surface brightness profiles and mass-to-light ratios. See the research data for
          precise fits.
        </p>
      </section>

      <RelatedConcepts currentPath="/galaxy-plotter" />
    </>
  );
}
