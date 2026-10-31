'use client';

import Link from 'next/link';
import PathNextButtons from '@/components/PathNextButtons';
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
      <ValidationBadge status="reparametrization" label="Reparametrizes the Debye θ_D (≈86% of the 89% are θ_D restatements) | Z-polynomial null matches | No N_corr procedure" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Across its first 1,840 chemistry sessions (of 2,671 in all), the archive tested the prediction that chemical phenomena
          cluster at &#x03B3; &#x2248; 1 (the archive&apos;s label was &ldquo;the quantum-classical boundary&rdquo;; no such boundary follows from C(&#x03C1;), and the Coherence Explorer retired the label). It recorded 1,703 &ldquo;phenomenon types&rdquo;,
          89% boundary-consistent and 11% failures. Read the 1,703 with care: from session #138 on, each session was logged
          as exactly one new type (type = session &minus; 137, no exceptions), so it is a session counter, not a census of
          independent phenomena (reconciled 2026-10-09).
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
            and fails where they are not. (Corrected 2026-10-31: the 2026-05-10 polynomial-in-Z null that this sentence cited was run on
            synthetic monotonic curves, not on these rows; see the null-model box below.)
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
          <strong style={{ color: '#f59e0b' }}>Why these r values are not evidence (restated 2026-10-31, graduate-physics simulated-visitor persona):</strong>{' '}
          each r is a post-hoc fit of the property against a γ proxy that contains the target (for phonon properties
          γ<sub>phonon</sub> = 2T/θ<sub>D</sub>, and sound velocity ∝ θ<sub>D</sub>), with the expression chosen after the data. That, and
          the Debye-model reparametrization below, is why the verdict is Reparametrization.{' '}
          <strong>What the polynomial-in-Z null does and does not show.</strong> The 2026-05-10 null
          (<code>chemistry-null-model-analytic.md</code>) was run on <em>synthetic</em> monotonic curves (√Z, log Z, Z<sup>1/3</sup> for
          Z = 1–50), not on these rows, so its |Δr| ≤ 0.07 is a statement about those curves. It shows that two monotonic functions
          of one variable correlate highly; it does not show that these properties are monotonic in Z. Across the periodic table they
          are not: atomic volume against Z is the Lothar Meyer curve, the textbook picture of periodicity, and electronegativity
          falls from F (3.98) to Na (0.93) in two steps of Z. Which elements and compounds make up the rows is not published, so the
          null has not been run on the real data. <em>Open:</em> publish the row list and run it.{' '}
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
            rises monotonically with γ and <em>saturates</em> at ≈&nbsp;0.448 (verified numerically: 0.250 at
            γ=0.5, 0.322 at γ=1, 0.375 at γ=2, 0.408 at γ=4, 0.446 at γ=100; the γ→∞ limit is max&nbsp;u&nbsp;sech²u&nbsp;=&nbsp;0.448, at
            2u&nbsp;tanh&nbsp;u&nbsp;=&nbsp;1; this read &ldquo;0.446 as γ→∞&rdquo; until 2026-10-23).{' '}
            <strong>Why it saturates, and what γ actually does:</strong> for large γ the change happens at small x, where
            ln(1+x)&nbsp;≈&nbsp;x, so C&nbsp;≈&nbsp;tanh(γx) depends only on γ·ρ/ρ<sub>crit</sub>. Raising γ there <em>moves the knee</em> to
            ≈&nbsp;0.77&nbsp;ρ<sub>crit</sub>/γ; it does not sharpen it, and on that side γ is degenerate with ρ<sub>crit</sub>. What γ
            sets is the initial slope (C&nbsp;≈&nbsp;γx) and half the exponent of approach to saturation
            (1&nbsp;−&nbsp;C&nbsp;≈&nbsp;2(1+x)<sup>−2γ</sup>). So &ldquo;sharpness&rdquo; has a meaning only on a linear axis at fixed ρ<sub>crit</sub>. This is
            the density-side twin of the a₀′/γ point the galaxy fits already show (the scale the data identify is a combination, not
            γ alone). <em style={{ color: 'var(--color-text-muted)' }}>(Added 2026-10-23 from a simulated-visitor graduate persona&apos;s
            derivation, re-checked numerically here: the peak of dC/d&nbsp;ln&nbsp;x sits at γx&nbsp;=&nbsp;0.78 at γ&nbsp;=&nbsp;10 and 0.772 at γ&nbsp;=&nbsp;1000.)</em> And C is <strong>concave on the
            whole domain</strong> &mdash; d²C/dx²&nbsp;&lt;&nbsp;0 for every x&nbsp;≥&nbsp;0 &mdash; so there is
            no inflection point to sit at. <strong>No feature of C(ρ) singles out γ&nbsp;≈&nbsp;1.</strong>{' '}
            One quantity does peak near it: the geometric curvature of the graph at the origin,
            κ(0)&nbsp;=&nbsp;|C″(0)|/(1+C′(0)²)<sup>3/2</sup>&nbsp;=&nbsp;γ/(1+γ²)<sup>3/2</sup> (C′(0)&nbsp;=&nbsp;γ, C″(0)&nbsp;=&nbsp;−γ),
            which is largest at γ&nbsp;=&nbsp;1/√2&nbsp;≈&nbsp;0.71 (verified numerically, κ<sub>max</sub>&nbsp;≈&nbsp;0.385). That
            may be where &ldquo;maximum curvature near γ&nbsp;≈&nbsp;1&rdquo; came from. It depends on the units chosen for
            x (rescale x and the peak moves), so it carries no physical meaning.{' '}
            <em style={{ color: 'var(--color-text-muted)' }}>(Named 2026-10-18 at a simulated-visitor graduate persona&apos;s suggestion.)</em>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The correct derivative fact was already stated on{' '}
            <Link href="/consciousness-demo" style={{ color: 'var(--color-accent-blue)' }}>Consciousness Demo</Link>
            {' '}(&ldquo;the slope dC/dρ is maximized at ρ&nbsp;=&nbsp;0 … there is no inflection point in this
            specific function for ρ&nbsp;≥&nbsp;0&rdquo;) &mdash; one click from the page asserting its
            negation. Fixing one page and not sweeping for the same error elsewhere is the site&apos;s most
            frequent failure mode; the identical sentence on{' '}
            <Link href="/gamma-regimes" style={{ color: 'var(--color-accent-blue)' }}>γ Regimes (crossovers, not phase transitions)</Link>
            {' '}was corrected in the same pass.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>What this costs:</strong> the γ&nbsp;≈&nbsp;1 clustering below is left as a bare empirical
            regularity with <em>no derivation from the equation behind it</em>. Combined with the template-bias
            caveat and the null-model result on the{' '}
            <Link href="/chemistry-correlation-explorer" style={{ color: 'var(--color-accent-blue)' }}>Chemistry Correlation Explorer</Link>
            {' '}(the high correlations are post-hoc fits in a γ proxy that contains the target, so they carry no
            C(ρ)-specific information; the polynomial-in-Z null was run on synthetic curves, not these rows, corrected 2026-10-31), the chemistry
            sector now has a fitted parameter, an unexplained clustering, and no mechanism.
            (Simulated-visitor Pass 3, 2026-08-09; verified independently before the edit.)
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
          This page used to say &ldquo;the core result (&#x03B3; &#x2248; 1 clustering) holds&rdquo;. It does not stand as a
          result (withdrawn 2026-09-27 after a visitor graduate-student persona flagged it). The research ledger books
          &#x03B3;&nbsp;&#x2248;&nbsp;1 as a reparametrization of the Debye model (1912): about 86% of the &ldquo;89%
          boundary-consistent&rdquo; are restatements of &#x03B8;<sub>D</sub>. The rationale for &#x03B3;&nbsp;&#x2248;&nbsp;1 was
          retracted. No documented procedure assigns N<sub>corr</sub> to a phenomenon before the fit. The correlations
          are post-hoc fits in a γ proxy containing θ<sub>D</sub>. So the clustering cannot be
          evaluated as evidence either way. The open question is whether an N<sub>corr</sub> rule can be written down
          <em>before</em> looking at the data. If it can, the clustering becomes testable.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <PathNextButtons currentPath="/gamma-boundary" />
          <Link href="/chemistry-correlation-explorer" className="btn-secondary">
            Explore All Correlations
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/gamma-boundary" />
    </>
  );
}
