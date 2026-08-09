'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function PhaseTransitions() {
  return (
    <>
      <Breadcrumbs currentPath="/phase-transitions" />
      <PathNav currentPath="/phase-transitions" />
      <h1>Phase Transitions</h1>
      <ValidationBadge status="validated" label="Core Prediction" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The coherence function predicts three distinct regimes, with transitions between them.
          The most interesting physics happens at the boundaries &mdash; especially at &#x03B3; &#x2248; 1.
        </p>

        {/* Phase diagram visualization (CSS only) */}
        <div style={{
          margin: '2rem 0',
          padding: '2rem',
          background: 'var(--color-dark-surface)',
          borderRadius: '12px',
          border: '1px solid var(--color-dark-border)',
        }}>
          <div style={{
            display: 'flex',
            height: '60px',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}>
            <div style={{ flex: 1, background: 'linear-gradient(90deg, #38bdf8, #38bdf880)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 500 }}>
              Quantum
            </div>
            <div style={{ flex: 0.5, background: 'linear-gradient(90deg, #8b5cf680, #8b5cf6, #8b5cf680)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 500 }}>
              Boundary
            </div>
            <div style={{ flex: 1, background: 'linear-gradient(90deg, #22c55e80, #22c55e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 500 }}>
              Classical
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            <span>&#x03B3; = 2 (single electron)</span>
            <span style={{ color: 'var(--color-accent-violet)' }}>&#x03B3; &#x2248; 1</span>
            <span>&#x03B3; &rarr; 0 (macroscopic)</span>
          </div>
        </div>

        <h2>The &#x03B3; &#x2248; 1 Boundary</h2>
        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Correction (2026-08-09):</strong> this section stated that at γ&nbsp;≈&nbsp;1
            (N<sub>corr</sub>&nbsp;≈&nbsp;4) &ldquo;the coherence function has maximum curvature.&rdquo;
            <strong> It does not.</strong> With x&nbsp;=&nbsp;ρ/ρ<sub>crit</sub>,
            dC/dx&#x2223;<sub>x=0</sub>&nbsp;=&nbsp;γ &mdash; strictly increasing in γ, no interior maximum
            anywhere; in log-density the peak sensitivity also rises monotonically with γ and merely saturates
            (≈0.32 at γ=1, ≈0.45 as γ→∞); and C is concave for every x&nbsp;≥&nbsp;0, so it has no inflection
            point. <strong>Nothing in the shape of C distinguishes γ&nbsp;≈&nbsp;1.</strong> The γ&nbsp;≈&nbsp;1
            clustering is an empirical fit result with no derivation behind it. Full retraction and the
            derivative on{' '}
            <Link href="/gamma-boundary" style={{ color: 'var(--color-accent-blue)' }}>the γ boundary page</Link>.
            (Visitor Pass 3 found the /gamma-boundary instance; this second one was found by sweeping.)
          </p>
        </div>
        <p>
          What the chemistry sector actually has is a clustering of fitted γ near 1, and the list below is a
          description of <em>where that clustering falls</em> &mdash; not a consequence of the equation:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Phase transitions cluster here (melting, boiling, sublimation)</li>
          <li>Catalysis operates at this boundary (enzymes, industrial catalysts)</li>
          <li>Superconductivity appears (Cooper pairs &#x2248; 2-body correlations)</li>
          <li>Biology emerges (molecular recognition requires quantum-classical interface)</li>
        </ul>
        <p>
          1,703 chemical phenomena were tested. 89% show &#x03B3; values within the predicted
          boundary region.{' '}
          <Link href="/gamma-boundary" style={{ color: 'var(--color-accent-blue)' }}>See the full chemistry analysis &rarr;</Link>
        </p>

        <h2>Transitions in Cosmology</h2>
        <p>
          The same framework applies to larger scales. Galaxy rotation curves show a transition
          at &#x03C1; &#x2248; &#x03C1;<sub>crit</sub> from Newtonian (high density inner region)
          to MOND-like (low density outer region). This is the astrophysical phase transition.
        </p>

        <h2>What Doesn&apos;t Work</h2>
        <div className="card" style={{ marginTop: '1rem' }}>
          <ValidationBadge status="failed" label="Critical Exponents: 2× Off" />
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            Real phase transitions have universality classes with specific critical exponents.
            C(&#x03C1;) uses a tanh <em>motivated by</em> mean-field theory, but has no self-consistency
            equation — &#x03C1; goes in, C comes out with no feedback loop. It belongs to the logarithmic
            compander family (&#x03BC;-law / Hill / Naka–Rushton), not Landau theory. The critical exponents
            are off by ~2× not because of a calibration miss, but because a compander has no critical point
            to generate exponents from. The function captures <em>where</em> transitions happen but not <em>how</em> they unfold.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/scale-invariance" className="btn-primary">
            Next: Scale Invariance &rarr;
          </Link>
          <Link href="/phase-boundary-visualizer" className="btn-secondary">
            Interactive Visualizer
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/phase-transitions" />
    </>
  );
}
