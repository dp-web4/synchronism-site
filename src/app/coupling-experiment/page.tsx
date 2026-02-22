'use client';

import { useState, useMemo } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import { couplingCoherence, hillSigmoid } from '@/lib/equations';

// Experimental data: mean C(p) from 900 simulation runs (45 levels × 20 reps)
const DATA = [
  { p: 0.000, C: 0.339, conv: 0.209, corr: 0.550 },
  { p: 0.005, C: 0.413, conv: 0.301, corr: 0.568 },
  { p: 0.010, C: 0.459, conv: 0.351, corr: 0.601 },
  { p: 0.015, C: 0.509, conv: 0.414, corr: 0.627 },
  { p: 0.020, C: 0.528, conv: 0.432, corr: 0.646 },
  { p: 0.025, C: 0.573, conv: 0.490, corr: 0.672 },
  { p: 0.030, C: 0.580, conv: 0.490, corr: 0.688 },
  { p: 0.035, C: 0.618, conv: 0.545, corr: 0.702 },
  { p: 0.040, C: 0.619, conv: 0.538, corr: 0.712 },
  { p: 0.045, C: 0.642, conv: 0.578, corr: 0.713 },
  { p: 0.050, C: 0.661, conv: 0.595, corr: 0.735 },
  { p: 0.055, C: 0.671, conv: 0.620, corr: 0.727 },
  { p: 0.060, C: 0.677, conv: 0.615, corr: 0.746 },
  { p: 0.065, C: 0.689, conv: 0.644, corr: 0.738 },
  { p: 0.070, C: 0.697, conv: 0.642, corr: 0.758 },
  { p: 0.075, C: 0.713, conv: 0.680, corr: 0.750 },
  { p: 0.080, C: 0.722, conv: 0.680, corr: 0.767 },
  { p: 0.085, C: 0.727, conv: 0.698, corr: 0.759 },
  { p: 0.090, C: 0.733, conv: 0.694, corr: 0.773 },
  { p: 0.095, C: 0.746, conv: 0.729, corr: 0.765 },
  { p: 0.100, C: 0.754, conv: 0.726, corr: 0.784 },
  { p: 0.120, C: 0.773, conv: 0.753, corr: 0.795 },
  { p: 0.140, C: 0.800, conv: 0.792, corr: 0.808 },
  { p: 0.160, C: 0.818, conv: 0.825, corr: 0.812 },
  { p: 0.180, C: 0.823, conv: 0.834, corr: 0.813 },
  { p: 0.200, C: 0.837, conv: 0.853, corr: 0.822 },
  { p: 0.220, C: 0.850, conv: 0.874, corr: 0.828 },
  { p: 0.240, C: 0.855, conv: 0.882, corr: 0.830 },
  { p: 0.260, C: 0.860, conv: 0.892, corr: 0.830 },
  { p: 0.280, C: 0.868, conv: 0.900, corr: 0.838 },
  { p: 0.300, C: 0.872, conv: 0.904, corr: 0.843 },
  { p: 0.350, C: 0.881, conv: 0.919, corr: 0.845 },
  { p: 0.400, C: 0.893, conv: 0.932, corr: 0.856 },
  { p: 0.450, C: 0.895, conv: 0.943, corr: 0.850 },
  { p: 0.500, C: 0.899, conv: 0.951, corr: 0.851 },
  { p: 0.550, C: 0.902, conv: 0.957, corr: 0.851 },
  { p: 0.600, C: 0.907, conv: 0.960, corr: 0.858 },
  { p: 0.650, C: 0.907, conv: 0.960, corr: 0.857 },
  { p: 0.700, C: 0.918, conv: 0.972, corr: 0.868 },
  { p: 0.750, C: 0.917, conv: 0.978, corr: 0.860 },
  { p: 0.800, C: 0.921, conv: 0.987, corr: 0.860 },
  { p: 0.850, C: 0.929, conv: 0.987, corr: 0.874 },
  { p: 0.900, C: 0.929, conv: 0.988, corr: 0.873 },
  { p: 0.950, C: 0.933, conv: 0.995, corr: 0.875 },
  { p: 1.000, C: 0.937, conv: 0.997, corr: 0.881 },
];

// Fit parameters from scipy curve_fit
const FITS = {
  tanh:     { gamma: 0.261, pCrit: 0.00213, r2: 0.868, aic: -128.6 },
  hill:     { k: 0.608, pHalf: 0.0151, r2: 0.880, aic: -132.6 },
  logistic: { k: 6.87, pHalf: -0.0117, r2: 0.823, aic: -115.2 },
};

function Chart({ showModel, metric }: { showModel: string; metric: 'C' | 'conv' | 'corr' | 'all' }) {
  const W = 600, H = 350, PAD = { top: 20, right: 20, bottom: 45, left: 55 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;

  const xScale = (p: number) => PAD.left + p * plotW;
  const yScale = (v: number) => PAD.top + plotH - v * plotH;

  const dataPoints = (key: 'C' | 'conv' | 'corr') =>
    DATA.map(d => `${xScale(d.p).toFixed(1)},${yScale(d[key]).toFixed(1)}`).join(' ');

  // Generate model curves
  const modelCurve = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 200; i++) {
      const p = i / 200;
      let y = 0;
      if (showModel === 'tanh') {
        y = couplingCoherence(p, FITS.tanh.gamma, FITS.tanh.pCrit);
      } else if (showModel === 'hill') {
        y = hillSigmoid(p, FITS.hill.k, FITS.hill.pHalf);
      }
      // Clamp to data range (models predict 0-1 but data starts at ~0.34)
      pts.push(`${xScale(p).toFixed(1)},${yScale(Math.max(0, Math.min(1, y))).toFixed(1)}`);
    }
    return pts.join(' ');
  }, [showModel]);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 600, background: 'var(--color-surface)' }}>
      {/* Grid */}
      {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map(v => (
        <g key={v}>
          <line x1={PAD.left} y1={yScale(v)} x2={W - PAD.right} y2={yScale(v)}
                stroke="var(--color-border)" strokeWidth="0.5" />
          <text x={PAD.left - 8} y={yScale(v) + 4} textAnchor="end"
                fill="var(--color-text-secondary)" fontSize="11">{v.toFixed(1)}</text>
        </g>
      ))}
      {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map(v => (
        <g key={`x${v}`}>
          <line x1={xScale(v)} y1={PAD.top} x2={xScale(v)} y2={H - PAD.bottom}
                stroke="var(--color-border)" strokeWidth="0.5" />
          <text x={xScale(v)} y={H - PAD.bottom + 18} textAnchor="middle"
                fill="var(--color-text-secondary)" fontSize="11">{v.toFixed(1)}</text>
        </g>
      ))}

      {/* Axis labels */}
      <text x={W / 2} y={H - 5} textAnchor="middle" fill="var(--color-text)" fontSize="12">
        Compression Trust Frequency (p)
      </text>
      <text x={15} y={H / 2} textAnchor="middle" fill="var(--color-text)" fontSize="12"
            transform={`rotate(-90, 15, ${H / 2})`}>Score</text>

      {/* Data */}
      {(metric === 'all' || metric === 'C') && (
        <polyline points={dataPoints('C')} fill="none" stroke="#e74c3c" strokeWidth="2" />
      )}
      {(metric === 'all' || metric === 'conv') && (
        <polyline points={dataPoints('conv')} fill="none" stroke="#3498db" strokeWidth="1.5"
                  strokeDasharray={metric === 'all' ? '4,3' : 'none'} />
      )}
      {(metric === 'all' || metric === 'corr') && (
        <polyline points={dataPoints('corr')} fill="none" stroke="#2ecc71" strokeWidth="1.5"
                  strokeDasharray={metric === 'all' ? '4,3' : 'none'} />
      )}

      {/* Data points for C */}
      {(metric === 'C' || metric === 'all') && DATA.map((d, i) => (
        <circle key={i} cx={xScale(d.p)} cy={yScale(d.C)} r="2.5"
                fill="#e74c3c" opacity="0.7" />
      ))}

      {/* Model fit */}
      {showModel !== 'none' && (
        <polyline points={modelCurve} fill="none"
                  stroke={showModel === 'tanh' ? '#f39c12' : '#9b59b6'}
                  strokeWidth="2" strokeDasharray="6,3" />
      )}

      {/* Legend */}
      {metric === 'all' && (
        <g transform={`translate(${PAD.left + 10}, ${PAD.top + 10})`}>
          <line x1="0" y1="0" x2="20" y2="0" stroke="#e74c3c" strokeWidth="2" />
          <text x="25" y="4" fill="var(--color-text)" fontSize="10">C (coherence)</text>
          <line x1="0" y1="16" x2="20" y2="16" stroke="#3498db" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="25" y="20" fill="var(--color-text)" fontSize="10">C_conv (convergence)</text>
          <line x1="0" y1="32" x2="20" y2="32" stroke="#2ecc71" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="25" y="36" fill="var(--color-text)" fontSize="10">C_corr (correctness)</text>
        </g>
      )}
    </svg>
  );
}

export default function CouplingExperiment() {
  const [showModel, setShowModel] = useState<string>('tanh');
  const [metric, setMetric] = useState<'C' | 'conv' | 'corr' | 'all'>('all');

  return (
    <>
      <Breadcrumbs currentPath="/coupling-experiment" />
      <h1>Compression Trust Phase Transition</h1>
      <ValidationBadge status="supported" label="Executed" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          A worked example with ground-truth semantics, controllable coupling, and measured
          coherence &mdash; designed in response to{' '}
          <a href="https://github.com/dp-web4/synchronism-site/blob/main/forum/human/andrei-ai-questions-2.md">
            a challenge from Andrei&apos;s AI
          </a>{' '}
          asking: <em>&ldquo;show me one worked AI example with a measurement protocol.&rdquo;</em>
        </p>

        <h2>The Question</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Does collective coherence emerge through a <strong>phase transition in compression trust</strong> &mdash;
          the rate at which agents accept each other&apos;s compressed representations of reality?
        </p>

        <div className="card" style={{ borderLeft: '3px solid #3498db', marginBottom: '1.5rem' }}>
          <h3>Compression Trust</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Every observation is lossy &mdash; a compression of the world. When agent A shares its belief
            matrix with agent B, it is offering a <strong>compressed summary</strong> of everything it has
            observed. B must decide how much to trust that compression. The coupling parameter p is not
            &ldquo;density&rdquo; &mdash; it is the <strong>frequency of compression trust events</strong>:
            how often one agent accepts another&apos;s lossy summary as input to its own reasoning.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 0 }}>
            High trust = accept compressed summaries. Low trust = require raw data. Zero trust = no shared
            representation accepted. The self-weight (&alpha;=0.7) is the <strong>trust gradient</strong> &mdash;
            how much an agent trusts its own compression vs what it receives.
          </p>
        </div>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          <strong>Note on density:</strong> In the general coherence equation C(&#961;), the density &#961; is not
          raw population density but the density of <em>compatible</em> elements &mdash; those capable of
          productive compression trust within a shared{' '}
          <a href="/mrh">Markov Relevancy Horizon</a>.
          This experiment sets compatibility to 1.0 (all agents are identical), isolating coupling frequency
          as the sole variable. Real-world coherence depends on both frequency <em>and</em> compatibility.
        </p>

        <h2>Experimental Design</h2>

        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Micro-World (Oracle)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Random directed knowledge graph: 12 nodes, 30 typed edges, 3 relationship types.
              396 possible edge positions. The graph <strong>is</strong> the ground truth &mdash;
              agents are correct insofar as their beliefs match it.
            </p>
          </div>
          <div className="card">
            <h3>5 Bayesian Agents</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Not LLMs &mdash; removes shared-prior confounds. Each maintains belief matrix B[i][j][t]
              &isin; [0,1]. Uninformative prior (0.5). Observe 8 random edges/round with 15% noise.
              Bayesian update via log-odds.
            </p>
          </div>
          <div className="card">
            <h3>Controllable Compression Trust</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Parameter <strong>p &isin; [0, 1]</strong>: frequency of compression trust events &mdash;
              probability that any two agents share compressed beliefs each round.
              p=0 = zero trust. p=1 = full trust. 45 levels tested.
            </p>
          </div>
          <div className="card">
            <h3>900 Simulation Runs</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              45 coupling levels &times; 20 random worlds each. Fine resolution near p=0 (step 0.005)
              where the transition occurs. 80 rounds per run. Plus 12 variation experiments.
            </p>
          </div>
        </div>

        <h3>Why This Design Works</h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Individual observation budget (640 per agent) covers only ~1.6 observations per edge position &mdash;
          insufficient to learn the world alone. Collective budget with K=5 agents gives ~8 per position with full coupling.
          This creates the regime where coupling <em>matters</em>: individual agents fail, collective agents succeed.
        </p>

        <h2>Results</h2>

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '2' }}>Metric:</span>
            {(['all', 'C', 'conv', 'corr'] as const).map(m => (
              <button key={m} onClick={() => setMetric(m)}
                style={{
                  padding: '0.25rem 0.75rem', border: '1px solid var(--color-border)',
                  borderRadius: '4px', fontSize: '0.85rem', cursor: 'pointer',
                  background: metric === m ? 'var(--color-accent)' : 'transparent',
                  color: metric === m ? 'white' : 'var(--color-text)',
                }}>
                {m === 'all' ? 'All Three' : m === 'C' ? 'Coherence' : m === 'conv' ? 'Convergence' : 'Correctness'}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '2' }}>Model fit:</span>
            {(['none', 'tanh', 'hill'] as const).map(m => (
              <button key={m} onClick={() => setShowModel(m)}
                style={{
                  padding: '0.25rem 0.75rem', border: '1px solid var(--color-border)',
                  borderRadius: '4px', fontSize: '0.85rem', cursor: 'pointer',
                  background: showModel === m ? 'var(--color-accent)' : 'transparent',
                  color: showModel === m ? 'white' : 'var(--color-text)',
                }}>
                {m === 'none' ? 'None' : m === 'tanh' ? 'tanh (R²=0.868)' : 'Hill (R²=0.880)'}
              </button>
            ))}
          </div>
        </div>

        <Chart showModel={showModel} metric={metric} />

        <div style={{ marginTop: '1rem' }}>
          <h3>Key Numbers</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Metric</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Value</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>C range</td>
                <td style={{ padding: '0.5rem' }}>0.339 &rarr; 0.937</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Clear sigmoid transition</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>Transition center</td>
                <td style={{ padding: '0.5rem' }}>p &asymp; 0.03&ndash;0.06</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Very small coupling suffices</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>Best fit</td>
                <td style={{ padding: '0.5rem' }}>Hill (R&sup2;=0.880, AIC=-132.6)</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Beats tanh by &Delta;AIC=4.0</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>tanh fit</td>
                <td style={{ padding: '0.5rem' }}>R&sup2;=0.868, AIC=-128.6</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Competitive but not preferred</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>Max(C_conv - C_corr)</td>
                <td style={{ padding: '0.5rem' }}>0.128</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>No &ldquo;shared wrongness&rdquo; problem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Model Comparison</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Four sigmoid models with 2 free parameters each &mdash; fair comparison:
        </p>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #9b59b6' }}>
            <h3>Hill Function (Winner)</h3>
            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
              C = p<sup>k</sup> / (p<sup>k</sup> + p<sub>half</sub><sup>k</sup>)
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              k = 0.608, p<sub>half</sub> = 0.015<br />
              R&sup2; = 0.880, AIC = -132.6
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #f39c12' }}>
            <h3>tanh (Synchronism)</h3>
            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
              C = tanh(&#947; &middot; log(p/p<sub>crit</sub> + 1))
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              &#947; = 0.261, p<sub>crit</sub> = 0.00213<br />
              R&sup2; = 0.868, AIC = -128.6 (&Delta;AIC = +4.0)
            </p>
          </div>
          <div className="card">
            <h3>Logistic</h3>
            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
              C = 1/(1 + exp(-k&middot;(p - p<sub>half</sub>)))
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              R&sup2; = 0.823, AIC = -115.2 (&Delta;AIC = +17.4)
            </p>
          </div>
          <div className="card">
            <h3>erf</h3>
            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
              C = erf(k &middot; (p - p<sub>half</sub>))
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              R&sup2; = 0.825, AIC = -115.8 (&Delta;AIC = +16.8)
            </p>
          </div>
        </div>

        <h2>The p<sub>crit</sub> Question</h2>
        <p>
          In physics, &#961;<sub>crit</sub> is <strong>derived</strong> from fundamental constants
          (&#961;<sub>crit</sub> = A &times; V<sub>flat</sub>&sup2;). Can we derive p<sub>crit</sub>
          from world properties?
        </p>

        <div className="card" style={{ borderLeft: '3px solid #e74c3c', marginBottom: '1.5rem' }}>
          <h3>Candidate Derivation</h3>
          <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            p<sub>crit</sub> = &#951; &middot; H(world) / (K &middot; m &middot; (1 - 2&#951;))
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            <strong>Result: FAILS.</strong> Derived p<sub>crit</sub> &asymp; 0.82, fitted
            p<sub>crit</sub> &asymp; 0.002. Off by 400&times;. Across 12 variation experiments,
            derivation R&sup2; = -662 (catastrophic). The formula is wrong.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            <strong>Why it fails (compression trust framing):</strong> The formula treats the critical
            threshold as an intrinsic system property. But compression trust is <em>relational</em> &mdash;
            it depends on the quality of compressed representations being shared, which emerges from
            interaction history. You cannot derive the minimum trust frequency for collective coherence
            from system parameters alone, because the value of trust depends on what is trusted.
          </p>
        </div>

        <h2>Kill Criteria Assessment</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Criterion</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Result</th>
              <th style={{ textAlign: 'center', padding: '0.5rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '0.5rem' }}>Logistic/erf beats tanh by &Delta;AIC &gt; 2</td>
              <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>
                Hill beats tanh (&Delta;AIC=4); logistic/erf do not
              </td>
              <td style={{ padding: '0.5rem', textAlign: 'center', color: '#f39c12' }}>PARTIAL</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '0.5rem' }}>p<sub>crit</sub> derivation R&sup2; &lt; 0.5</td>
              <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>
                R&sup2; = -662 (catastrophic failure)
              </td>
              <td style={{ padding: '0.5rem', textAlign: 'center', color: '#e74c3c' }}>TRIGGERED</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '0.5rem' }}>C<sub>conv</sub> &gt;&gt; C<sub>corr</sub></td>
              <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>
                Max gap = 0.128 &mdash; convergence tracks correctness
              </td>
              <td style={{ padding: '0.5rem', textAlign: 'center', color: '#2ecc71' }}>CLEARED</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '0.5rem' }}>No sigmoid transition</td>
              <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>
                C range = 0.598, clear sigmoid observed
              </td>
              <td style={{ padding: '0.5rem', textAlign: 'center', color: '#2ecc71' }}>CLEARED</td>
            </tr>
          </tbody>
        </table>

        <h2>What This Means</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #2ecc71' }}>
            <h3>Confirmed</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>Collective knowledge emerges through a <strong>compression trust phase transition</strong></li>
              <li>Convergence tracks correctness &mdash; no &ldquo;shared wrongness&rdquo;</li>
              <li>Sparse trust suffices: p &asymp; 0.01 (1% trust event rate) gives 35% coherence gain</li>
              <li>Hill function (cooperative binding) &mdash; trust compounds cooperatively, not linearly</li>
              <li>The measurement protocol (Jaccard + F1 + geometric mean) works</li>
            </ul>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #e74c3c' }}>
            <h3>Refuted</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>tanh is not uniquely preferred &mdash; Hill function fits better</li>
              <li>Critical trust threshold cannot be derived &mdash; trust is relational, not intrinsic</li>
              <li>The &ldquo;generalized density&rdquo; framing was wrong &mdash; p is compression trust
                  frequency, not density. Reframing is more honest and more useful</li>
            </ul>
          </div>
        </div>

        <h2>Source Code &amp; Data</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Full experiment code, analysis, and raw data:{' '}
          <a href="https://github.com/dp-web4/Synchronism/tree/main/simulations">
            Synchronism/simulations/
          </a>
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <li><code>coupling_coherence_experiment.py</code> &mdash; World, Agent, Experiment classes</li>
          <li><code>coupling_coherence_analysis.py</code> &mdash; 4-model fitting, change-point, p<sub>crit</sub> derivation</li>
          <li><code>results/coupling_coherence_results.json</code> &mdash; 900 runs raw data</li>
          <li><code>results/coupling_coherence_analysis.json</code> &mdash; Fit parameters, model comparison</li>
        </ul>
      </section>

      <RelatedConcepts currentPath="/coupling-experiment" />
    </>
  );
}
