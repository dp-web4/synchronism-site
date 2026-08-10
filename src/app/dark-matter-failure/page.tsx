'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function DarkMatterFailure() {
  return (
    <>
      <Breadcrumbs currentPath="/dark-matter-failure" />
      <h1>Dark Matter: The Sign Error</h1>
      <ValidationBadge status="failed" label="Wrong Direction — March 2026" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism&apos;s CFD (Continuum Fluid Dynamics) mapping predicted dark matter should be
          &ldquo;sticky&rdquo; &mdash; highly viscous, resistant to interpenetration. Observations
          from the Bullet Cluster (1E 0657-558) show the opposite: dark matter passes through itself
          with barely any interaction at all. The framework predicted the wrong direction.
          This page documents the failure and its implications.
        </p>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#ef4444' }}>The Failure</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Prediction:</strong> Under the CFD mapping C = 1/μ<sub>eff</sub>, dark matter
            (low coherence C) should have high effective viscosity μ<sub>eff</sub> — meaning it
            should be &ldquo;sticky&rdquo; and interact strongly with itself.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Observation:</strong> The Bullet Cluster merger (Markevitch et al. 2004; Randall
            et al. 2008) shows dark matter halos passing through each other with negligible
            self-interaction. Self-interaction cross-section limits: σ/m &lt; 1 cm²/g (Bullet Cluster),
            σ/m &lt; 0.47 cm²/g (72-cluster ensemble, Harvey et al. 2015).
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Verdict:</strong> The prediction is not marginally off — it has the wrong sign.
            Dark matter is <em>less</em> interactive than baryons, not more. The CFD viscosity
            mapping is structurally incompatible with the strongest observational constraint on
            dark matter self-interaction physics.
          </p>
        </div>

        <h2>Why This Is a Structural Failure</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is not a calibration issue that can be fixed by adjusting a parameter. The sign of the
          prediction (high-C systems should be low-viscosity, low-C systems should be high-viscosity)
          follows directly from the C = 1/μ<sub>eff</sub> mapping. To fix the sign, you would need
          to either (a) invert the mapping (C = μ<sub>eff</sub>, meaning high coherence = high viscosity,
          which contradicts the interpretation of dark matter as low-coherence), or (b) abandon the
          CFD fluid-dynamics analogy entirely.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Session #615–616 (March 2026) identified this as a structural failure and documented it
          as a forced choice: the CFD mapping is not a recoverable ansatz for dark matter physics
          under current coherence-function conventions.
        </p>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#ef4444' }}>A second, independent bookkeeping contradiction (explorer finding, 2026-07-29)</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            This page identifies dark matter&apos;s missing gravity with <strong>low coherence</strong> C. But{' '}
            <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Plotter</Link>&apos;s
            own code computes the extra (dark-matter-like) velocity term as v(r)&nbsp;=&nbsp;&radic;(v<sub>b</sub>&sup2;&nbsp;+&nbsp;[V<sub>flat</sub>&middot;C(&#x03C1;)]&sup2;)
            &mdash; the missing-gravity boost is <strong>proportional to C</strong>, so it is largest where C is{' '}
            <em>high</em>, not low. If dark matter is low-C and the boost term needs high C to activate, the
            framework predicts the boost is absent exactly where the phenomenon it&apos;s supposed to explain
            occurs. This is a bookkeeping contradiction, checkable with no telescope data, independent of the
            viscosity-sign failure above.
          </p>
        </div>

        <h2>What Survives</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Correction, 2026-08-01: nothing in this section survives anymore.</strong> This page
          originally claimed TEST-05 (environment-dependent RAR scatter) and the McGaugh-2016 RAR fit
          were independent of the viscosity mapping and stood on their own. Both have since been
          executed and failed on their own terms: TEST-05 was retired with the rest of the &ldquo;MOND-shared&rdquo;
          badge class (all three tests in that class dissolved on execution — see{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>), and the
          density-keyed RAR fit itself is rejected on real SPARC data at &#x0394;BIC=+184 (conservative &ge;+33 after intra-galaxy correlation) (see{' '}
          <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link>).
          The viscosity sign error documented above was never the framework&apos;s only galaxy-scale problem
          &mdash; it was the first one found.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Open question:</strong> Can the coherence framework make a dark matter self-interaction
          prediction that is consistent with the Bullet Cluster? What physical interpretation of
          low-coherence matter would give σ/m &lt; 0.5 cm²/g rather than high viscosity?
          This is an unresolved research question, not a closed one.
        </p>

        <h2>The Broader Pattern</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This failure belongs to the &ldquo;Form&rdquo; category in Synchronism&apos;s three-type
          failure taxonomy (Reach / Form / Frame): the equation was the wrong shape, not just the
          wrong parameter. Documenting it here is part of the framework&apos;s operating principle:
          structural failures must be visible, not buried.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/honest-assessment" className="btn-primary">
            Full Honest Assessment &rarr;
          </Link>
          <Link href="/dark-matter" className="btn-secondary">
            Dark Matter Reframed
          </Link>
          <Link href="/handling-failure" className="btn-secondary">
            How We Handle Failure
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/dark-matter-failure" />
    </>
  );
}
