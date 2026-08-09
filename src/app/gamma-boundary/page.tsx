'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const topCorrelations = [
  { property: 'Sound velocity', r: '0.982', status: 'reparametrization' as const },
  { property: 'Electronegativity', r: '0.979', status: 'reparametrization' as const },
  { property: 'Atomic volume', r: '0.956', status: 'reparametrization' as const },
  { property: 'Thermal conductivity', r: '0.93', status: 'reparametrization' as const },
  { property: 'Ionization energy', r: '0.91', status: 'reparametrization' as const },
];

const failures = [
  { property: 'Hall coefficient', r: '< 0.2', status: 'failed' as const },
  { property: 'Magnetic susceptibility', r: '< 0.2', status: 'failed' as const },
  { property: 'Thermionic emission', r: '0.2-0.4', status: 'failed' as const },
  { property: 'Piezoelectricity', note: 'γ backward', status: 'failed' as const },
];

export default function GammaBoundary() {
  return (
    <>
      <Breadcrumbs currentPath="/gamma-boundary" />
      <PathNav currentPath="/gamma-boundary" />
      <h1>The &#x03B3; &#x2248; 1 Boundary</h1>
      <ValidationBadge status="reparametrization" label="1,703 Phenomena / 89% Boundary-Consistent | Template Bias Caveat" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Across 1,840 chemistry sessions, Synchronism tested the prediction that chemical phenomena
          cluster at &#x03B3; &#x2248; 1 &mdash; the quantum-classical boundary. The result: 1,703
          distinct phenomena types, with 89% boundary-consistent and 11% failures.
        </p>

        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Key failures (non-density-monotonic properties):</strong>
          <ul style={{ marginTop: '0.4rem', marginBottom: 0, paddingLeft: '1.2rem' }}>
            <li><strong>Melting point predictions: 53% average error</strong> — melting points are bond-symmetry dominated, not density-monotonic across the periodic table.</li>
            <li><strong>Superconductor T<sub>c</sub>: 6.5&times; wrong</strong> — T<sub>c</sub> depends on electron-phonon coupling strength, which does not scale with density in the way C(&#x03C1;) assumes.</li>
          </ul>
          <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            Pattern: the framework &ldquo;works&rdquo; where targets are density-monotonic by construction (sound velocity, electronegativity, atomic volume)
            and fails where they are not. A degree-2 polynomial in Z achieves comparable r on density-monotonic rows (Δr ≤ 0.07; sometimes exceeds Synchronism). The null was computed 2026-05-10.
            See <a href="/honest-assessment" style={{ color: '#ef4444' }}>Honest Assessment</a>.
          </p>
        </div>

        <h2>Top Correlations</h2>
        <div style={{
          background: 'rgba(245, 158, 11, 0.07)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Null model result (2026-05-10 explorer, propagated 2026-06-06):</strong>{' '}
          Sound velocity, electronegativity, and atomic volume are all near-monotonic in atomic number Z —
          and a 2-parameter polynomial in Z achieves comparable or higher r than Synchronism in most density-monotonic cases (Δr ≤ 0.07; polynomial sometimes wins). The null was computed analytically and numerically in <code>chemistry-null-model-analytic.md</code>: any smooth monotonic function of Z achieves r ≥ 0.9 on density-monotonic targets by construction. Synchronism is <em>not</em> meaningfully above the polynomial null on its &ldquo;success&rdquo; cases. The r-values below are consistent with the periodic table being density-monotonic in Z, not with Synchronism-specific physics.{' '}
          See <a href="/honest-assessment" style={{ color: '#f59e0b' }}>Honest Assessment</a>.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {topCorrelations.map(c => (
            <div key={c.property} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
              <span style={{ fontWeight: 500 }}>{c.property}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>r = {c.r}</span>
                <ValidationBadge status={c.status} />
              </div>
            </div>
          ))}
        </div>

        <h2>Notable Failures</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {failures.map(c => (
            <div key={c.property} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
              <span style={{ fontWeight: 500 }}>{c.property}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-warm)' }}>{c.r || c.note}</span>
                <ValidationBadge status={c.status} />
              </div>
            </div>
          ))}
        </div>

        <h2>Why &#x03B3; &#x2248; 1 Matters &mdash; <span style={{ color: '#ef4444' }}>retracted 2026-08-09</span></h2>
        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>This section asserted: &ldquo;At γ&nbsp;≈&nbsp;1, the coherence function has maximum
            curvature. Small changes in density produce maximum change in coherence.&rdquo; That is false</strong>,
            and it was the stated physical rationale for this page&apos;s entire 1,703-phenomenon result.
            Write x&nbsp;=&nbsp;ρ/ρ<sub>crit</sub>, C&nbsp;=&nbsp;tanh[γ&nbsp;ln(1+x)]. Then
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--color-accent-warm)', margin: '0.5rem 0' }}>
            dC/dx = 4&#x03B3;&middot;t<sup>2&#x03B3;&minus;1</sup>/(t<sup>2&#x03B3;</sup>+1)&sup2;, t = 1+x &nbsp;&#x21D2;&nbsp; dC/dx&#x2223;<sub>x=0</sub> = &#x03B3;
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            &mdash; strictly increasing in γ, with no maximum at γ&nbsp;≈&nbsp;1 or at any finite γ. Reading
            &ldquo;curvature&rdquo; in log-density instead does not rescue it: max<sub>x</sub>&nbsp;dC/d&nbsp;ln&nbsp;x
            rises monotonically with γ and <em>saturates</em> at ≈&nbsp;0.446 (verified numerically: 0.250 at
            γ=0.5, 0.322 at γ=1, 0.375 at γ=2, 0.408 at γ=4, 0.446 as γ→∞). And C is <strong>concave on the
            whole domain</strong> &mdash; d²C/dx²&nbsp;&lt;&nbsp;0 for every x&nbsp;≥&nbsp;0 &mdash; so there is
            no inflection point to sit at. <strong>No feature of C(ρ) singles out γ&nbsp;≈&nbsp;1.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The correct derivative fact was already stated on{' '}
            <Link href="/consciousness-demo" style={{ color: 'var(--color-accent-blue)' }}>Consciousness Demo</Link>
            {' '}(&ldquo;the slope dC/dρ is maximized at ρ&nbsp;=&nbsp;0 … there is no inflection point in this
            specific function for ρ&nbsp;≥&nbsp;0&rdquo;) &mdash; one click from the page asserting its
            negation. Fixing one page and not sweeping for the same error elsewhere is the site&apos;s most
            frequent failure mode; the identical sentence on{' '}
            <Link href="/phase-transitions" style={{ color: 'var(--color-accent-blue)' }}>Phase Transitions</Link>
            {' '}was corrected in the same pass.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>What this costs:</strong> the γ&nbsp;≈&nbsp;1 clustering below is left as a bare empirical
            regularity with <em>no derivation from the equation behind it</em>. Combined with the template-bias
            caveat and the null-model result on the{' '}
            <Link href="/chemistry-correlation-explorer" style={{ color: 'var(--color-accent-blue)' }}>Chemistry Correlation Explorer</Link>
            {' '}(a plain 2-parameter polynomial in Z matches C(ρ) to |Δr|&nbsp;≤&nbsp;0.07 &mdash; the high
            correlations track density-monotonicity, known chemistry, not C(ρ)-specific physics), the chemistry
            sector now has a fitted parameter, an unexplained clustering, and no mechanism.
            (Visitor Pass 3, 2026-08-09; verified independently before the edit.)
          </p>
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The claims that were attached to the retracted rationale &mdash; that γ&nbsp;≈&nbsp;1 is where phase
          transitions happen, catalysis is most effective, new materials emerge, and biology originates &mdash;
          are <strong>not</strong> derived from the shape of C and are not evidence for it. They are restatements
          of where the fitted γ landed.
        </p>

        <h2>Caveat: Era 2 Chemistry</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Sessions 134-2660 were identified as &ldquo;template-based&rdquo; &mdash; the AI used
          similar analysis patterns across phenomena, which may inflate the validation rate.
          The core result (&#x03B3; &#x2248; 1 clustering) holds, but the 89% figure should be
          treated with caution.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/sound-velocity" className="btn-primary">
            Next: Sound Velocity &rarr;
          </Link>
          <Link href="/chemistry-correlation-explorer" className="btn-secondary">
            Explore All Correlations
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/gamma-boundary" />
    </>
  );
}
