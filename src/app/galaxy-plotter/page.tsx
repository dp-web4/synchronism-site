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

function mondVel(r: number, vflat: number): number {
  // MOND (simple µ-function approximation for illustration)
  // Deep-MOND asymptotics: v → vflat; rise profile differs from Synchronism
  const rScale = 2.5;
  const baryon = vflat * Math.sqrt(1 - Math.exp(-r / rScale)) * 0.6;
  const mondContrib = vflat * Math.sqrt(Math.tanh(0.55 * r / rScale));
  return Math.sqrt(baryon * baryon + mondContrib * mondContrib);
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
    const pts: { r: number; vNew: number; vSyn: number; vMond: number }[] = [];
    for (let i = 0; i <= 50; i++) {
      const r = (i / 50) * xMax;
      pts.push({
        r,
        vNew: newtonianVel(r, galaxy.vflat),
        vSyn: synchronismVel(r, galaxy.vflat),
        vMond: mondVel(r, galaxy.vflat),
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
          <strong>The dark matter puzzle in one picture:</strong> Physics predicts that galaxies
          should rotate more slowly at their outer edges (like planets in the solar system — the
          further out, the slower). They don&apos;t. The outer stars rotate just as fast as the inner
          ones. Something invisible is adding gravity. Most physicists call it dark matter &mdash;
          a proposed invisible substance that has never been directly detected; we infer it only
          from its gravitational pull (whether it&apos;s real stuff or a placeholder for missing
          physics is exactly what&apos;s being debated). MOND
          (Modified Newtonian Dynamics) explains the same curves by changing the gravity law.
          Synchronism offers a third interpretation: the coherence function C(ρ) mimics the extra
          gravity via density-dependent coupling. All three fit the observations; none is confirmed
          over the others by rotation curve data alone &mdash; though the fits are not on equal
          footing: MOND uses one global constant (a&#x2080;) for every galaxy, while the violet
          Synchronism curve refits &#x03C1;<sub>crit</sub> per galaxy.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '-0.5rem' }}>
          Select a SPARC galaxy. The plot shows four things: what visible matter predicts (dashed),
          what we observe (dots), what Synchronism gives (violet), and what MOND gives (green).
          Notice that Synchronism and MOND nearly overlap — the framework&apos;s own{' '}
          <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>{' '}
          labels this a <em>reparametrization</em> &mdash; plain words: the same curve wearing a
          different costume; fitting a known curve isn&apos;t discovering anything new.{' '}
          <strong>Plain verdict for casual readers:</strong> these curves look great but don&apos;t prove the idea &mdash;
          all three models (Synchronism, MOND, and NFW dark-matter halo) fit galaxy rotation curves about equally well.
          What matters is whether any makes a <em>different, testable prediction</em>, and the ensemble test
          (SPARC RAR, ΔBIC=+184) shows Synchronism collapses to MOND when γ is freed. See{' '}
          <a href="/honest-assessment#test-04a" style={{ color: 'var(--color-accent-blue)' }}>what the tests actually say →</a>
        </p>
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '0.375rem',
          padding: '0.6rem 0.9rem',
          marginBottom: '0.75rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Parsimony note:</strong> MOND fits all 175 SPARC galaxies with a <em>single global</em> constant (a&#x2080;). Synchronism refits one free &#x03C1;<sub>crit</sub> <em>per galaxy</em> — an extra free parameter for each galaxy. By parsimony (BIC), the Synchronism per-galaxy fit is strictly dominated, not equivalent. Additionally, the scale A in &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; is itself{' '}
          <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Audited-Negative</a>{' '}
          (chain-of-custody failure: stated derivation gives A ≈ 4.6×10⁻⁵, 600× off the claimed 0.029 &mdash; the number outlived its computation). V<sub>flat</sub> is taken from existing SPARC/MOND fits, not independently predicted. See <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</a> for full accounting.
          <br /><br />
          <strong style={{ color: '#f59e0b' }}>γ note:</strong> the violet curve pins γ=2, which via γ=2/√N<sub>corr</sub> implies N<sub>corr</sub>=1 — stars treated as uncorrelated. No galaxy satisfies that; the data-preferred fit (γ≈0.49, ΔBIC=+7 vs +184 for γ=2) implies N<sub>corr</sub>≈17, still not a physical correlated-star count. See <a href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</a> for the full both-directions contradiction.
        </div>
        <div style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.6rem 0.9rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: '#ef4444' }}>Related test result (TEST-03):</strong> The Tully-Fisher
          scatter test (R&sup2; = 0.14 against the 20% kill threshold) was <strong>triggered as Failed</strong> on
          the same SPARC dataset. Rotation curve shape matches are qualitative; the scatter test is
          a stricter quantitative check and it failed. <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>See Honest Assessment &rarr;</a>
        </div>

        <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '0.375rem', padding: '0.75rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <strong style={{ color: '#ef4444' }}>Why this plot can mislead:</strong> The violet &ldquo;Synchronism&rdquo; curve plotted here uses the same parametrization (&#x03B3;=2) that the RAR ensemble test <strong>rejected at ΔBIC=+184</strong>. It still overlaps MOND per-galaxy because &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; is <em>refit to each galaxy&apos;s own flat velocity</em> — that degree of freedom absorbs the shape mismatch one galaxy at a time. The ensemble RAR (all 2,807 SPARC data points — 175 galaxies — plotted together in acceleration space) is where &#x03B3;=2 dies: free-&#x03B3; converges to &#x03B3;&#x2248;0.49 with RMS identical to McGaugh-MOND to four digits. Per-galaxy shape recovery is not the same test as ensemble shape rejection.{' '}
          <strong>Cross-system failure (locality no-go):</strong> a single global ρ<sub>crit</sub>(V<sub>flat</sub>) — no per-galaxy refit — exposes a ~1.7 dex offset between the local volumetric density ρ(r) and the observed g<sub>bar</sub> that MOND tracks. That cross-system gap is the reason local-density frameworks fail where MOND succeeds; the per-galaxy overlap you see here hides it by refitting ρ<sub>crit</sub> independently for each galaxy.
        </div>
        <div style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <strong>Reading this plot:</strong>{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>
            In plain terms: all three theories draw nearly the same curve here, so a good fit proves nothing —
            what this plot <em>does</em> show is the dark matter puzzle itself (the gray line sagging below the dots).
          </span>
          <ul style={{ margin: '0.4rem 0 0', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem' }}>
            <li><strong>Dashed gray</strong> — Newtonian prediction using visible matter only. Drops off at the edges; this is the puzzle.</li>
            <li><strong>Dots</strong> — observed rotation velocities. Flat at large radius; doesn&apos;t drop like Newtonian says it should.</li>
            <li><strong>Violet</strong> — Synchronism at &#x03B3;=2 (consistency check, per-galaxy &#x03C1;<sub>crit</sub> refit). Not a parameter-free prediction, and &#x03B3;=2 is rejected at ΔBIC=+184 on the ensemble RAR.</li>
            <li><strong>Green dashed</strong> — MOND. Also fitted to V<sub>flat</sub>. Synchronism and MOND nearly overlap — this is what a reparametrization looks like.</li>
          </ul>
        </div>

        <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '0.375rem', padding: '0.75rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#ef4444' }}>The actual formulas plotted (disclosure, 2026-07-03):</strong>{' '}
          for a page badged Reparametrization, the formulas are the argument — so here they are, exactly as coded:
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', margin: '0.5rem 0', padding: '0.5rem 0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '4px', overflowX: 'auto' }}>
            v_baryon(r) = 0.6 &middot; V_flat &middot; &radic;(1 &minus; e^(&minus;r/r_s))<br />
            Violet &ldquo;Synchronism&rdquo;: v(r) = &radic;(v_baryon&sup2; + [V_flat &middot; tanh(0.4&middot;r/r_s)]&sup2;), r_s = 2.5 kpc<br />
            Green &ldquo;MOND&rdquo;: v(r) = &radic;(v_baryon&sup2; + [V_flat &middot; &radic;tanh(0.55&middot;r/r_s)]&sup2;), r_s = 2.5 kpc
          </div>
          Note what the violet curve is <strong>not</strong>: it is <em>not</em> C(&#x03C1;) = tanh(&#x03B3;&middot;ln(&#x03C1;/&#x03C1;<sub>crit</sub>+1))
          evaluated on a measured density profile. The tanh takes <em>radius</em> as its argument, with hand-tuned
          constants (0.4, 2.5 kpc) chosen to look right — no density profile, no &#x03C1;<sub>crit</sub>, and no &#x03B3;
          appear in the computation. Likewise the green curve is a toy interpolation, not MOND&apos;s &#x03BC;-function
          with a&#x2080;. Both are illustrative stand-ins for the qualitative shapes.
          Why the stand-in matters (2026-07-02 audit): running the <em>real</em> C(&#x03C1;) on an exponential-disk
          density profile with the framework&apos;s asserted &#x03C1;<sub>crit</sub> values keeps the entire disk at
          C &#x2272; 0.28 — the curve never crosses its own knee, and the flat rotation the violet line shows
          would not materialize. The radius-sigmoid stand-in silently hides that failure. This is the strongest
          single piece of evidence on this page that the fit is a reparametrization rather than a mechanism.
          The stand-in is forced, not incidental: C(&#x03C1;) is a function of <em>local</em> density, while the
          rotation curve it needs to reproduce is organized by g<sub>bar</sub>, a <em>non-local</em>
          enclosed-mass acceleration — see the{' '}
          <a href="/honest-assessment#structural-tensions" style={{ color: 'var(--color-accent-blue)' }}>
            local-vs-non-local structural no-go
          </a>{' '}
          for why a pointwise density map cannot in general reproduce an acceleration-space relation without
          per-galaxy calibration.
        </div>

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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>{galaxy.name}</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              {galaxy.type}
            </span>
          </div>
          <div style={{ background: 'rgba(245,158,11,0.08)', borderRadius: '4px', padding: '0.4rem 0.6rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <strong style={{ color: '#f59e0b' }}>V<sub>flat</sub> = {galaxy.vflat} km/s (calibrated input)</strong>
            {' '}— taken from SPARC/MOND fits for this galaxy. The violet curve is fitted to this value,
            not predicted from first principles. Any MOND-like shape that uses V<sub>flat</sub> as input
            will recover the flat portion of the curve by construction. See{' '}
            <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>.
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

            {/* MOND curve (green dashed) */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vMond).toFixed(1)}`).join(' ')}
              fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6 3"
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
            <text x={pad.left + 30} y={pad.top + 34} fill="#8b5cf6" fontSize="10">&quot;Synchronism&quot; (not C(&#x03C1;) &mdash; tanh(radius), hand-tuned)</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 45} x2={pad.left + 20 + 8} y2={pad.top + 45} stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x={pad.left + 30} y={pad.top + 49} fill="#22c55e" fontSize="10">MOND (approx.)</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 60} x2={pad.left + 20 + 8} y2={pad.top + 60} stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x={pad.left + 30} y={pad.top + 64} fill="#6b7280" fontSize="10">Newtonian (baryons only)</text>
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
            The <span style={{ color: '#8b5cf6' }}>violet curve</span> fills the gap and is labeled
            &ldquo;Synchronism&rdquo; &mdash; but it is <strong>not</strong> C(&#x03C1;) evaluated on a density
            profile. It is a hand-tuned tanh(radius) stand-in chosen to look right; no &#x03C1;,
            &#x03C1;<sub>crit</sub>, or &#x03B3; enters its computation. See the full disclosure below the
            plot for why the real C(&#x03C1;) does not reproduce this curve.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            The <span style={{ color: '#22c55e' }}>green dashed curve</span> is MOND (Modified
            Newtonian Dynamics), which modifies gravity below the acceleration scale a&#x2080; &#x2248; 1.2&times;10&#x207B;&#xB9;&#x2070; m/s&sup2;.
            Notice that Synchronism and MOND nearly overlap — both use the same interpolating function
            (McGaugh et al. 2016 RAR), and the site labels this a <em>reparametrization</em>.
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
