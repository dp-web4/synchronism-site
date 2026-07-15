'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

export default function WhySynchronism() {
  return (
    <>
      <Breadcrumbs currentPath="/why-synchronism" />

      <h1>Start Here: Why Synchronism?</h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
        Beginner Path — Step 1 of 6 &middot; This is the page the nav&apos;s &ldquo;Start Here&rdquo; points to.
      </p>
      <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
        Physics has a fragmentation problem. Synchronism asks whether one principle
        could connect what we currently treat as separate domains.
      </p>

      <section className="section content-width">
        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            <strong>What changes if this works?</strong> If one density function really spans quantum to galactic scales, two things become possible that aren&apos;t now: (1) a single measurable quantity (density) predicts behavior in domains currently requiring separate frameworks — fewer free parameters, more cross-domain predictions; (2) the boundary between &ldquo;quantum&rdquo; and &ldquo;classical&rdquo; becomes a calculable density threshold, not a philosophical category. Neither has been demonstrated yet. The site&apos;s self-audit has found zero confirmed predictions and the decisive galaxy test collapses to MOND. The question is live, not resolved.
          </p>
        </div>

        <h2>The Problem</h2>
        <p>
          Modern physics uses different equations for different scales.
          Quantum mechanics governs the small. General relativity governs the large.
          Chemistry sits in between with its own empirical rules.
          Consciousness has no physics at all.
        </p>
        <p>
          This isn&apos;t necessarily wrong &mdash; specialized models work brilliantly in their domains.
          But it raises a question:
        </p>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.1rem',
        }}>
          What if there&apos;s a single function that maps density to behavior across all scales?
        </blockquote>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The picture to hold onto (you&apos;ll see it again on{' '}
          <Link href="/first-encounter" style={{ color: 'var(--color-accent-blue)' }}>First Encounter</Link>,
          the next step): a crowd milling around a plaza behaves like independent individuals; a marching band
          behaves like one organism. Synchronism&apos;s bet is that <em>how densely packed</em> the
          parts are is what moves a system from crowd-like to band-like &mdash; and that one
          dimmer-switch curve describes that shift everywhere, from electrons to galaxies.
        </p>
      </section>

      <section className="section content-width">
        <h2>The Approach</h2>
        <p>
          Synchronism proposes a coherence function: <span className="equation-inline">C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))</span>.
          It takes one input (density) and returns one output (coherence: 0 = sparse/independent, 1 = dense/collective).{' '}
          <span style={{ fontSize: '0.9em', color: 'var(--color-text-muted)' }}>⚠ &ldquo;Coherence&rdquo; here is <em>not</em> quantum coherence — superconductors and BECs score <em>low</em> on this scale (large N<sub>corr</sub> → γ→0 → flat S-curve → C≈0).</span>
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic', borderLeft: '3px solid var(--color-accent-violet)', paddingLeft: '0.75rem' }}>
          In plain English: an S-curve that smoothly goes from 0 (everything acting independently
          &mdash; the crowd) to 1 (everything locked together &mdash; the marching band) as density grows.{' '}
          <strong>tanh</strong> is the hyperbolic tangent &mdash; an S-shaped saturation function; over
          all inputs it spans (&minus;1, +1), but the argument here is never negative, so C stays
          between 0 and 1. The &#x03B3; parameter is the dial that sets how abrupt the crowd&#x2192;band
          snap is &mdash; big &#x03B3;, sudden snap; small &#x03B3;, gradual fade; &#x03C1;<sub>crit</sub> is
          a reference density setting where on the curve you are. The shape &mdash; tanh &mdash; is a{' '}
          <strong>phenomenological</strong> choice (plain words: picked because it matches the data,
          not because a deeper theory demands it), not a derived result:
          any S-curve with the same saturation properties would fit the same data equally well.
          (Full step-by-step breakdown: <Link href="/equation-walkthrough" style={{ color: 'var(--color-accent-blue)' }}>Equation Walkthrough &rarr;</Link>)
        </p>
        <p>
          The parameter &#x03B3; = 2/&#x221A;N<sub>corr</sub> depends only on how many particles are
          moving as a correlated unit. When &#x03B3; is large (few correlated particles), the system is sparse/independent (low C).
          When &#x03B3; is small (many correlated particles), the system is dense/collective (high C).
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', borderLeft: '2px solid rgba(245,158,11,0.4)', paddingLeft: '0.75rem' }}>
          <strong>Circularity caveat:</strong> The 1/&#x221A;N<sub>corr</sub> scaling is a dimensional{' '}
          <strong>ansatz</strong> (an educated starting guess, shaped so the units work out)
          inspired by fluctuation theory &mdash; not a derivation from first principles. No counting protocol exists to
          derive N<sub>corr</sub> from a system&apos;s Hamiltonian (the equation describing all its
          interactions and energies) without first fitting &#x03B3; to observed data.
          In practice, N<sub>corr</sub> is back-fit from &#x03B3; &mdash; so &#x03B3; has no independent predictive
          content beyond the calibration target. The &#x03B3; Calculator states this explicitly.
          See <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator &rarr;</Link>
        </p>
        <p>
          The tanh shape is a phenomenological choice — a member of the <strong>compander</strong> family
          (short for compressor&ndash;expander: curves that squash a huge input range into a small
          output range, the way audio volume-levelling does; examples include μ-law audio companding,
          Hill/Naka–Rushton response functions, and Langevin/Curie–Weiss saturation).
          Any smooth S-curve with the same saturation properties would fit equally well; there is no
          variational principle or self-consistency equation that selects tanh specifically.
          The log-density argument is physically motivated. Then tested against data.
          Some predictions held up. Others failed.
        </p>
      </section>

      <section className="section content-width">
        <h2>What Worked</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <h3>Galaxy Rotation Curves</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Tested against 14,760 galaxies (SPARC + ALFALFA-SDSS).
              a&#x2080; = cH&#x2080;/(2&#x03C0;) reproduced within 10% &mdash; but this result is shared with MOND and other frameworks.
              The environment-dependent scatter prediction (TEST-03/05) has a corrected verdict as of 2026-07-15:
              R²=0.14 is a real, significant effect (p=5&times;10⁻⁶) but on the SPARC-scale sample, not the
              14,585-galaxy ALFALFA-SDSS one this page previously attributed it to — and it is morphology, not
              cleanly environment. The brief &ldquo;MOND-shared&rdquo; verdict (07-09) dissolved on adjudication:
              the frameworks&apos; environment levers differ by orders of magnitude, so the axis discriminates —
              and the registered density-classified run now exists (research repo, 2026-07-14): r²=0.0001 against
              the framework&apos;s registered &gt;20% claim. Refuted by execution.
            </p>
            <span className="badge badge-failed" title="Registered environment-density run executed 2026-07-14 (SPARC RAR offsets vs Cosmicflows-4): r²=0.0001 vs registered >20% — refuted; the MOND+EFE tie dissolved on adjudication 2026-07-15 (levers differ ~50–5,000×), see /tier-1-existing#TEST-05">Failed | TEST-03/05 Environment Run — Refuted by Execution</span>
          </div>
          <div className="card">
            <h3>Chemistry: &#x03B3; &#x2248; 1 Boundary</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              1,703 chemical phenomena cluster near the &#x03B3;&#x2248;1 boundary
              (sparse/independent &#x2194; dense/collective crossover).
              Sound velocity correlation: r = 0.982 &mdash; but the null model (run 2026-05-10) shows a
              plain polynomial in atomic number matches or beats these correlations, so they are
              evidence of known density-monotonic chemistry, not of this framework.
              <br /><small style={{ color: 'var(--color-text-muted)' }}>
                Note: C here measures collective ordering, not quantum phase coherence —
                quantum-coherent systems (BEC, BCS) sit at <em>low</em> C due to their tiny &#x03B3;.
              </small>
            </p>
            <span className="badge badge-reparametrization" title="Descriptive rate, not a verdict — 89% reflects generic sigmoid behavior on density-monotonic properties; a polynomial null model matches it">89% Boundary-Consistent | Template Bias Caveat</span>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>What Failed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <h3>Melting Point Predictions</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Average error: 53%. The coherence function doesn&apos;t capture enough
              crystal-specific physics for accurate melting points.
            </p>
            <span className="badge badge-failed" title="Prediction contradicted by data — kill criterion fired or claim demoted on audit">Failed</span>
          </div>
          <div className="card">
            <h3>Superconductivity T<sub>c</sub></h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Predicted 607K for YBCO, actual is 93K. The &#x03B7; (reachability factor) turned out
              to be a reparametrization of Abrikosov-Gor&apos;kov pair-breaking (known since 1960).
            </p>
            <span className="badge badge-reparametrization" title="Equivalent to existing physics in different notation — same math, not new physics">Reparametrization</span>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>The Research</h2>
        <p>
          3,308 autonomous research sessions. 42 complete research arcs.
          All conducted by AI agents with no human in the loop.
          Every prediction has a falsification criterion.
          Every failure is documented.
        </p>
        <p>
          This site is the public window into that research. Explore at whatever depth interests you.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/first-encounter" className="btn-primary">
            First Encounter &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Full Honest Assessment
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/why-synchronism" />
    </>
  );
}
