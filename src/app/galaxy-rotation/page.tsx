'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function GalaxyRotation() {
  return (
    <>
      <Breadcrumbs currentPath="/galaxy-rotation" />
      <h1>Galaxy Rotation Curves</h1>
      <ValidationBadge status="failed" label="TEST-03 Kill Criterion Triggered" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Galaxy rotation curves are the most important empirical test for any theory of gravity at
          galactic scales. Stars and gas in the outer regions of disk galaxies orbit faster than
          Newtonian gravity predicts from visible mass alone. The Radial Acceleration Relation (RAR)
          captures this: observed acceleration correlates tightly with the acceleration predicted from
          baryonic mass, but systematically exceeds it below a critical scale.
        </p>

        <p>
          Synchronism&apos;s coherence function predicts how and where rotation curves should flatten.
          We tested this against two major datasets.
        </p>

        <h2>Dataset Results</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card card-highlight">
            <h3 style={{ color: '#38bdf8' }}>SPARC Dataset</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <strong>175 galaxies</strong> with high-quality photometry and resolved rotation curves
              (Lelli, McGaugh &amp; Schombert 2016). The gold standard for RAR studies.
              {' '}<a href="http://astroweb.cwru.edu/SPARC/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)', fontSize: '0.8rem' }}>[Public data]</a>
            </p>
            <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <li>Tight RAR confirmed (&#x03C3;<sub>int</sub> &#x2248; 0.057 dex) — <em>McGaugh et al. 2016 measured value, restated</em></li>
              <li>Coherence function fits within observational scatter</li>
              <li>Environment-dependent effects visible but sample too small for strong statistics</li>
            </ul>
          </div>
          <div className="card card-highlight">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>ALFALFA-SDSS Dataset</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <strong>14,585 galaxies</strong> from the ALFALFA HI survey cross-matched with SDSS
              photometry. Unresolved rotation curves but massive statistical power.
              {' '}<a href="http://egg.astro.cornell.edu/alfalfa/data/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)', fontSize: '0.8rem' }}>[ALFALFA data]</a>
              {' '}<a href="https://www.sdss.org/dr17/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)', fontSize: '0.8rem' }}>[SDSS DR17]</a>
            </p>
            <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <li>Environment-dependent RAR scatter detected at p = 5 &times; 10<sup>&minus;6</sup></li>
              <li>&#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex (below CDM prediction)</li>
              <li>Cluster vs. field galaxies show different scatter &mdash; as predicted</li>
            </ul>
          </div>
        </div>

        <h2>The Interpolating Function</h2>
        <div className="card" style={{ borderLeft: '3px solid #f59e0b', marginBottom: '1rem', padding: '0.75rem 1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong>Attribution:</strong> The equation below is the standard RAR interpolating function
            from McGaugh, Lelli &amp; Schombert (2016) &mdash; already in the literature for a decade
            and widely used to fit SPARC. <strong>Synchronism&apos;s specific contribution is not the
            function itself, but the environmental scatter ansatz on top of it</strong> (the claim
            that σ<sub>int</sub> depends on local density). All fit-quality claims refer to that
            ansatz and to the McGaugh-2016 baseline together.
          </p>
        </div>
        <EquationDisplay size="md" label="RAR interpolating function (McGaugh et al. 2016)">
          g<sub>obs</sub> = g<sub>bar</sub> / (1 &minus; e<sup>&minus;&#x221A;(g<sub>bar</sub>/a&#x2080;)</sup>)
        </EquationDisplay>
        <p>
          In Synchronism, the acceleration scale a&#x2080; is not a free parameter &mdash; it{' '}
          <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>emerges from cosmology</Link>{' '}
          as cH&#x2080;/(2&#x03C0;). The coherence function provides the physical mechanism: at
          accelerations below a&#x2080;, the system crosses a coherence threshold and gravitational
          dynamics change.
          {' '}<span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            Note: the identification a&#x2080; &#x2248; cH&#x2080;/(2&#x03C0;) was first noted by Milgrom (1983)
            and has been discussed by Famaey &amp; McGaugh (2012), McCulloch, Verlinde, and Smolin.
            This is a 40-year-old MOND observation.
            Synchronism&apos;s contribution is the coherence-function mechanism &mdash; not the identification itself.
            See{' '}<Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}for prior-art acknowledgment.
          </span>
        </p>

        <h2>Key Results Summary</h2>
        <div className="grid-3" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>0.086</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              &#x03C3;<sub>int</sub> (dex) &mdash; intrinsic scatter
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>5 &times; 10<sup>&minus;6</sup></div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              p-value for environment effect
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>14,760</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              total galaxies tested
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1.5rem', marginTop: '2rem' }}>
          <h2 style={{ color: '#ef4444', marginTop: 0 }}>Structural Failure: Dark Matter Mechanism (March 2026)</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Synchronism&apos;s CFD viscosity interpretation mapped low coherence (dark matter) to high
            viscosity &mdash; predicting dark matter should be <em>stickier</em> than baryons. The Bullet
            Cluster (1E 0657-558) shows the opposite: dark matter halos pass through each other with
            negligible self-interaction (σ/m &lt; 0.47 cm²/g, Harvey et al. 2015). The prediction has the
            wrong sign. This is a structural failure, not a parameter problem &mdash; no adjustment to
            A, γ, or ρ<sub>crit</sub> can fix a sign error in the mechanism.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
            The galaxy rotation fit results on this page are independent of the CFD interpretation and stand
            as-is (reparametrization of MOND with an environmental scatter term). But the claim that
            &ldquo;dark matter effects arise from incomplete decoherence&rdquo; is under structural revision.{' '}
            <Link href="/dark-matter-failure" style={{ color: '#ef4444' }}>Full failure analysis &rarr;</Link>
          </p>
        </div>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The environment-dependent scatter is real and statistically significant (p = 5&times;10<sup>&minus;6</sup>
          with N = 14,585), but it explains only 14% of the total RAR scatter (R&sup2; = 0.14). The
          remaining 86% is unexplained by the coherence model. Furthermore, standard MOND plus
          mass-to-light ratio corrections already explains essentially all of the RAR variance.
          Synchronism adds a small, detectable effect on top of what MOND already provides &mdash;
          it does not replace MOND&apos;s success.
        </p>
        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1rem', padding: '0.75rem 1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>
            <strong>TEST-03 connection:</strong> The R² = 0.14 result above is what{' '}
            <Link href="/tier-1-existing" style={{ color: '#ef4444' }}>TEST-03</Link>{' '}
            measures. The pre-registered kill criterion for TEST-03 is R² &lt; 0.20 — meaning the
            environmental coherence term must explain at least 20% of intrinsic RAR scatter to
            survive. At R² = 0.14, <strong>TEST-03 has already tripped its own kill criterion</strong>.
            The σ<sub>int</sub> = 0.086 dex and R² = 0.14 figures on this page are the same
            finding viewed from two angles; both point to the same conclusion.
          </p>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Missing measurement:</strong> The incremental value of adding the environmental term
          has not been quantified via ΔBIC (Bayesian Information Criterion) against baseline MOND on
          the same dataset. With N = 14,585, even a tiny effect is statistically significant; ΔBIC
          would determine whether the fit improvement exceeds the penalty for adding the extra parameter.
          Until that analysis is run, &ldquo;small but detectable effect&rdquo; is a qualitative
          description, not a measurement.
        </p>

        <h2>Wide Binaries: The Cleaner Discriminator</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          While the RAR environmental scatter (TEST-03) has already tripped its kill criterion,
          the <Link href="/wide-binaries" style={{ color: 'var(--color-accent-blue)' }}>wide binary test (TEST-02)</Link>{' '}
          remains the cleanest live discriminator between Synchronism and MOND. Wide stellar binaries
          (separations &gt; 0.1 pc) probe the sub-a&#x2080; acceleration regime in a fundamentally
          different mass and density environment from galaxy rotation curves — no dark matter halos,
          no baryonic feedback, just two stars in a nearly Keplerian orbit.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          The key papers are Pittordis &amp; Sutherland (2023) and Hernandez et al. (2024), using
          Gaia DR3. They disagree on the strength of the MOND signal. Synchronism&apos;s prediction
          (density-dependent wide binary anomaly — stronger anomaly in denser stellar fields) is
          distinguishable from MOND (which predicts the anomaly independent of local density).
          Gaia DR3 is public; stratifying the sample by local stellar density is a tractable
          one-week analysis. See{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>TEST-02</Link>{' '}
          for the kill criterion.
        </p>

        <h2>GW170817 and the Speed of Gravity</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The binary neutron star merger GW170817 constrained |c<sub>GW</sub> &minus; c|/c &lt; 10<sup>&minus;15</sup>,
          killing TeVeS, Bekenstein-Sanders, and large swaths of Horndeski parameter space (Sakstein &amp; Jain 2017,
          Ezquiaga &amp; Zumalacárregui 2017). Synchronism is marketed in part as a modified-gravity alternative,
          so this constraint is relevant.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Synchronism&apos;s posture:</strong> The coherence function C(&#x03C1;) is not a tensor-vector-scalar
          theory and does not introduce new propagating tensor degrees of freedom.
          It does not modify the graviton kinetic term or introduce derivative couplings of a scalar
          to the metric that would change gravitational wave speed. Therefore the framework&apos;s
          prediction is c<sub>GW</sub> = c by construction, and GW170817 does not apply.
        </p>
        <div style={{ background: 'rgba(245, 158, 11, 0.07)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '0.375rem', padding: '0.7rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          <strong style={{ color: '#f59e0b' }}>Open gap:</strong>{' '}
          This statement has not been formally derived from the framework&apos;s equations.
          The coherence field couples to density (ρ), not directly to the metric, but the precise
          relationship between C(ρ) and the effective gravitational action at GW propagation scales
          has never been written down. Until it is, &ldquo;GW170817 doesn&apos;t apply&rdquo;
          is a reasonable expectation but not a proven constraint.
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/rar-scatter" className="btn-primary">
            Next: RAR Scatter &rarr;
          </Link>
          <Link href="/cdm-discrimination" className="btn-secondary">
            CDM Discrimination &rarr;
          </Link>
          <Link href="/galaxy-plotter" className="btn-secondary">
            Galaxy Curve Plotter &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/galaxy-rotation" />
    </>
  );
}
