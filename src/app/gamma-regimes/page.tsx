'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function GammaRegimes() {
  return (
    <>
      <Breadcrumbs currentPath="/gamma-regimes" />
      <PathNav currentPath="/gamma-regimes" />
      <h1>&gamma; Regimes: Crossovers, Not Phase Transitions</h1>
      <ValidationBadge status="reparametrization" label="γ ≈ 1 clustering restates the Debye θ_D (research ledger: a known result in new notation)" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          C(&#x03C1;) is a smooth curve: it has no sharp transition anywhere. What &#x03B3; does is sort systems into three
          bands (strongly quantum, boundary, classical), and the clustering of fitted &#x03B3; near 1 restates the Debye
          temperature &#x03B8;<sub>D</sub> (1912) rather than adding new physics. This page describes those bands and why
          they are crossovers, not phase transitions.
        </p>
        <details style={{ marginBottom: '1rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
          <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>
          Until 2026-10-24 this page lived at <code>/phase-transitions</code> (old links redirect here) and opened
          &ldquo;The coherence function predicts three distinct regimes, with transitions between them. The most interesting
          physics happens at the boundaries &mdash; especially at &#x03B3; &#x2248; 1.&rdquo; The slug, that sentence, the H1 and
          the badge said four different things (technical-writer simulated-visitor persona, same defect fixed on the
          visualizer 2026-10-23). The badge descriptor said &ldquo;ledger Bucket 3&rdquo;, a term the site did not define.
        </details>

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
            (Simulated-visitor Pass 3 found the /gamma-boundary instance; this second one was found by sweeping.)
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
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>
          <strong>Which N<sub>corr</sub> for a superconductor?</strong> This list places superconductivity at &#x03B3; &#x2248; 1 by
          counting the Cooper pair (N<sub>corr</sub> &#x2248; 2&ndash;4). The{' '}
          <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</Link>&apos;s BCS preset counts
          the electrons overlapping inside one coherence volume (N<sub>corr</sub> = 10<sup>7</sup>, &#x03B3; &#x2248; 6&times;10<sup>&minus;4</sup>).
          Both counts are defensible, and the formula has no rule that picks one. The same system lands four orders of magnitude
          apart in &#x03B3; depending on what is counted. That is the N<sub>corr</sub>-divergence problem in one example: until
          N<sub>corr</sub> has one operational definition, &#x03B3; = 2/&#x221A;N<sub>corr</sub> can place a system wherever it is needed.
        </p>
        <p>
          1,703 chemistry sessions were logged (one &ldquo;phenomenon type&rdquo; per session, a counter rather than a census), and 89% gave &#x03B3; values within the boundary region.
          The audit found that about 86% of that 89% restates the Debye model (&#x03B8;<sub>D</sub>, 1912),
          so the figure is a reparametrization, not a confirmed prediction.{' '}
          <Link href="/gamma-boundary" style={{ color: 'var(--color-accent-blue)' }}>See the full chemistry analysis &rarr;</Link>
        </p>

        <h2>Transitions in Cosmology</h2>
        <p>
          The framework proposed the same picture at galaxy scale: a transition at
          &#x03C1; &#x2248; &#x03C1;<sub>crit</sub> from Newtonian (high-density inner region) to MOND-like
          (low-density outer region). <strong>This did not hold as a density law.</strong> Keyed on density,
          the threshold has the wrong velocity scaling (the data need &#x03C1;<sub>crit</sub> &#x221D; V<sup>&minus;2</sup>),
          and the version that fits galaxy rotation is keyed on acceleration with &#x03B3; fitted, where it
          becomes MOND. The tanh is also smooth, so the change is a crossover rather than a phase transition.
          See <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link>.
        </p>

        <h2>What Doesn&apos;t Work</h2>
        <div className="card" style={{ marginTop: '1rem' }}>
          <ValidationBadge status="failed" label="Critical Exponents: the archive’s “2× off” names no exponent; the function as written has none" />
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            Real phase transitions have universality classes with specific critical exponents.
            C(&#x03C1;) uses a tanh <em>motivated by</em> mean-field theory, but has no self-consistency
            equation — &#x03C1; goes in, C comes out with no feedback loop. It belongs to the logarithmic
            compander family (&#x03BC;-law / Hill / Naka–Rushton), not Landau theory, and{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>has no critical point and no critical exponents</Link>.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            <strong>What the Failed badge records.</strong> The research ledger lists &ldquo;critical exponents: 2&times; off from
            observation&rdquo; as a failure, citing the archive README. No exponent, no fit and no data set is recorded with it.
            What failed is the older framing that read this curve as a Landau-style phase transition and so implied it
            should have exponents. That reading is a category error: you cannot be 2&times; off on a quantity a function does
            not define. The badge stays Failed because the claim was made and does not hold; it is not a measured exponent of
            this tanh. The function captures <em>where</em> fitted &#x03B3; values cluster, not <em>how</em> a transition unfolds.
          </p>
          <details style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>
            Until 2026-10-24 the badge read &ldquo;Critical Exponents: 2&times; Off&rdquo; and the text said the exponents
            &ldquo;are off by ~2&times; &hellip; because a compander has no critical point to generate exponents from&rdquo;. A
            graduate-physics simulated-visitor persona pointed out that a function with no critical point cannot be 2&times; off
            on its exponents, and asked which exponent was extracted from which fit. The archive records none.
          </details>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/scale-invariance" className="btn-primary">
            Next: Scale Invariance &rarr;
          </Link>
          <Link href="/crossover-regime-visualizer" className="btn-secondary">
            Interactive Visualizer
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/gamma-regimes" />
    </>
  );
}
