'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function GalaxyRotation() {
  return (
    <>
      <Breadcrumbs currentPath="/galaxy-rotation" />
      <PathNav currentPath="/galaxy-rotation" />
      <h1>Galaxy Rotation Curves</h1>
      <ValidationBadge status="untested" label="TEST-03 Never Run As Registered — see correction below" />

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

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          One structural reason to expect this fit to reparametrize rather than derive MOND: C(&#x03C1;) is a
          function of <em>local</em> density, while the RAR is organized by g<sub>bar</sub>, a <em>non-local</em>
          enclosed-mass acceleration. A pointwise map cannot in general reproduce an acceleration-space
          relation across systems with different mass geometries except by per-system calibration &mdash; see
          the{' '}
          <Link href="/honest-assessment#structural-tensions" style={{ color: 'var(--color-accent-blue)' }}>
            local-vs-non-local structural no-go
          </Link>. The{' '}
          <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Curve Plotter</Link>&apos;s
          hand-tuned radius stand-in is that no-go showing through in a single demo.
        </p>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <strong>The literature already contains both this obstruction and its known escapes
          (noted 2026-07-10):</strong> density-dependent transitions are a mature field
          (symmetron/chameleon screening), and the &#x03C1;-vs-g<sub>bar</sub> variable mismatch is
          the standard reason screened scalars don&apos;t reproduce MOND. The constructive escape is
          superfluid dark matter (Berezhiani &amp; Khoury 2015): a <em>local</em> density criterion
          switches on a condensate, but the MOND-like force is carried by the condensate&apos;s
          phonons — the force scale enters independently of the switch. C(&#x03C1;) conflates switch
          and force into one local function; that conflation is what the data kill. See the escape
          taxonomy on{' '}
          <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>.
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
              <li>Environment-dependent RAR scatter detected at p = 5 &times; 10<sup>&minus;6</sup>, R&sup2; = 0.14 &mdash; <strong>but this statistic is SPARC-scale (N &asymp; 130&ndash;175), not a valid measurement of this 14,585-galaxy sample</strong> (see correction below). The registered TEST-03 environment-density test on this sample was never run.</li>
              <li>&#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex &mdash; <strong>CDM-consistent</strong> (z&nbsp;=&nbsp;+0.5 in the source session&apos;s definitive run), not below CDM. An earlier &minus;6.2&sigma; &ldquo;below CDM&rdquo; reading from an intermediate session was retracted in-archive as premature once distance-noise modeling was added; the verdict is also modeling-choice-dependent (z ranges +0.5 to +64). See{' '}
                <Link href="/cdm-discrimination" style={{ color: 'var(--color-accent-blue)' }}>CDM Discrimination</Link> for the full history.</li>
              <li>Cluster vs. field galaxies show different scatter &mdash; the effect is real but sub-threshold, not a confirmed prediction</li>
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
          In Synchronism, the acceleration scale a&#x2080; &#x2248; cH&#x2080;/(2&#x03C0;) is a
          <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}> 40-year-old dimensional coincidence</Link>{' '}
          (Milgrom 1983), discussed by Famaey &amp; McGaugh (2012), McCulloch, Verlinde, and Smolin
          under different theoretical umbrellas. The 2&#x03C0; prefactor is chosen to match the
          observed value; cH&#x2080;/(2&#x03C0;) &#x2248; 1.04&#x00D7;10&#x207B;&#xB9;&#x2070; m/s&#x00B2; at the
          site-standard H&#x2080; = 67.4
          undershoots the observed 1.2&#x00D7;10&#x207B;&#xB9;&#x2070; by &#x223C;13%.
          Synchronism&apos;s contribution is the coherence-function mechanism that provides a
          <em>reason</em> for this scale &mdash; not the identification itself.
          See{' '}<Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
          and{' '}<Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>{' '}
          for prior-art acknowledgment and the canonical reparametrization framing.
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
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ef4444' }}>5 &times; 10<sup>&minus;6</sup></div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              p-value for environment effect
            </div>
            <div style={{ fontSize: '0.75rem', color: '#f59e0b', marginTop: '0.25rem' }}>
              R² = 0.14 belongs to SPARC (N≈171), not this sample — see correction
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
            negligible self-interaction (σ/m &lt; 0.47 cm²/g, Harvey et al. 2015). That specific ansatz
            has the wrong sign — see the{' '}
            <Link href="/dark-matter-failure" style={{ color: '#ef4444' }}>full failure analysis</Link>.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Scope note (added 2026-07-09):</strong> this is a documented failure of the specific CFD
            viscosity <em>ansatz</em>, not of Claim 3&apos;s headline form (&ldquo;dark matter is incomplete
            decoherence&rdquo;), which asserts a modified gravitational response, not a substance with a
            viscosity to get the sign of. The Bullet Cluster still refutes any local-density-sourced-gravity
            reading of Claim 3, via a different and stronger argument: the lensing-mass peaks track the
            collisionless galaxies while the X-ray gas — most of the baryonic mass — is stripped and lags
            behind (Clowe et al. 2006, ApJ 648, L109). Any theory where gravity responds to <em>local</em>
            baryon density must put the extra gravity where the baryons are; it isn&apos;t there. This is the
            same local-vs-non-local no-go documented above, applied at cluster scale — not a second,
            independent failure. (MOND needs additional collisionless mass at cluster scale for the same
            reason: Angus, Famaey &amp; Zhao 2006.)
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
            The galaxy rotation fit results on this page are independent of the CFD interpretation and stand
            as-is (reparametrization of MOND with an environmental scatter term).
          </p>
        </div>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The environment-dependent scatter is real and statistically significant (p = 5&times;10<sup>&minus;6</sup>),
          but the R&sup2; = 0.14 / p = 5&times;10<sup>&minus;6</sup> pair is only mutually consistent at SPARC scale
          (N &asymp; 130&ndash;175) — see correction below. Furthermore, standard MOND plus mass-to-light ratio
          corrections already explains essentially all of the RAR variance. Synchronism adds at most a
          small, detectable effect on top of what MOND already provides &mdash; it does not replace
          MOND&apos;s success, and MOND&apos;s own External Field Effect predicts the same qualitative
          environment dependence (Chae et al. 2020/2021), so the effect does not discriminate the two.
        </p>
        <div className="card" style={{ borderLeft: '3px solid #f59e0b', marginBottom: '1rem', padding: '0.75rem 1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>
            <strong>Correction (2026-07-09) — TEST-03/TEST-05 provenance:</strong> This page previously said
            R² = 0.14 was TEST-03&apos;s result on this 14,585-galaxy sample and that it tripped TEST-03&apos;s
            kill criterion. It doesn&apos;t: at N = 14,585, R² = 0.14 implies p of order 10<sup>&minus;500</sup>, not
            5&times;10<sup>&minus;6</sup> — the pair is self-consistent only at SPARC scale, TEST-05&apos;s sample.
            TEST-03&apos;s actual environment-density result on this sample was never computed as registered.
            TEST-05, which does own this statistic on its registered terms, met its own criterion (rejecting
            independence) — briefly reclassified MOND-shared (2026-07-09), a tie dissolved on adjudication
            2026-07-15: the two frameworks&apos; environment levers differ by ~50&times;&ndash;5,000&times; (local
            density vs external acceleration), so the axis discriminates; honest status is &ldquo;never run as
            registered.&rdquo; Full trace on{' '}
            <Link href="/tier-1-existing#TEST-03" style={{ color: 'var(--color-accent-blue)' }}>Tier 1: TEST-03</Link>{' '}
            and <Link href="/tier-1-existing#TEST-05" style={{ color: 'var(--color-accent-blue)' }}>TEST-05</Link>.
          </p>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>ΔBIC note:</strong> The incremental value of the environmental scatter term above
          baseline MOND has not been quantified via ΔBIC on the ALFALFA-SDSS dataset. A separate
          ΔBIC analysis was run for the RAR transition-shape question (see below) — which is the
          more fundamental discriminating question.
        </p>

        <div style={{ borderLeft: '3px solid #ef4444', background: 'rgba(239,68,68,0.06)', borderRadius: '0.375rem', padding: '0.875rem 1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#ef4444', marginTop: 0, fontSize: '1.1rem' }}>RAR Transition Shape: The Decisive Test — CLOSED (2026-05-21)</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The environment-dependent scatter tests (TEST-01, TEST-05) probe the <em>size</em> of
            deviations from MOND&apos;s RAR. A more fundamental question is whether the compander&apos;s
            functional form (μ<sub>Syn</sub> = tanh(γ ln(1+x)), γ=2) differs from McGaugh&apos;s
            interpolating function ν(x) = 1/(1&minus;e<sup>&minus;√x</sup>) in the <em>shape</em> of
            the transition — the only test that could discriminate the two frameworks without assuming
            any environmental coupling.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            This test was run on 2807 real SPARC points (Lelli-McGaugh-Schombert 2016, 10% velocity-error cut)
            with a₀ free and standard M/L priors. Result:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
            <table style={{ borderCollapse: 'collapse', fontSize: '0.85rem', color: 'var(--color-text-secondary)', width: '100%' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                  <th style={{ textAlign: 'left', padding: '0.3rem 0.75rem 0.3rem 0' }}>Model</th>
                  <th style={{ textAlign: 'right', padding: '0.3rem 0.75rem' }}>RMS (dex)</th>
                  <th style={{ textAlign: 'right', padding: '0.3rem 0' }}>ΔBIC vs McGaugh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>McGaugh ν (standard MOND)</td>
                  <td style={{ textAlign: 'right', padding: '0.25rem 0.75rem' }}>0.1437</td>
                  <td style={{ textAlign: 'right', padding: '0.25rem 0', color: '#10b981' }}>— (reference)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>Compander μ, <strong>γ=2 pinned</strong></td>
                  <td style={{ textAlign: 'right', padding: '0.25rem 0.75rem' }}>0.1485</td>
                  <td style={{ textAlign: 'right', padding: '0.25rem 0', color: '#ef4444', fontWeight: 700 }}>+184</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>Compander μ, γ free (best fit: γ=0.49)</td>
                  <td style={{ textAlign: 'right', padding: '0.25rem 0.75rem' }}>0.1437</td>
                  <td style={{ textAlign: 'right', padding: '0.25rem 0', color: '#f59e0b' }}>+7.1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            <strong>Kill criterion triggered.</strong> ΔBIC = +184 ≫ 10 refutes the γ=2 compander
            as the galaxy mechanism. Conservative correction for intra-galaxy point correlation
            (effective N≈500–1000): ΔBIC ≈ 33 — still decisive. The residual is a coherent
            S-shaped ≈0.05–0.10 dex signature at the transition, significant at ~8σ per bin.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontStyle: 'italic' }}>
            <strong>Note on γ=2:</strong> γ=2 follows from N<sub>corr</sub>=1 (individual stars taken as uncorrelated),
            but N<sub>corr</sub> is asserted, not independently counted. The SPARC-preferred γ≈0.49 back-implies
            N<sub>corr</sub>≈17, contradicting the independent-stars premise. γ=2 is the most <em>charitable</em>
            pin for galaxies given the framework&apos;s own logic — not a prediction derived from independent evidence.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            <strong>The fork that closes the question:</strong> free-γ converges to γ≈0.49 with
            RMS identical to McGaugh to four digits. ΔBIC=+7 is entirely the BIC penalty for the
            extra parameter — the fit improvement is zero. There is no γ for which the compander is
            both (a) distinct from MOND and (b) consistent with SPARC. Pin γ=2 → refuted. Fit γ → MOND.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>
            Net discriminating galaxy tests vs MOND: <strong style={{ color: '#ef4444' }}>0, by execution</strong>.
            Script + full analysis: <code style={{ fontSize: '0.78rem' }}>explorer/scripts/rar_transition_shape_real_sparc.py</code>,
            finding: <code style={{ fontSize: '0.78rem' }}>explorer/findings/rar-transition-shape-real-sparc-result.md</code>.
          </p>
        </div>

        <h2>Wide Binaries</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The RAR environmental scatter (TEST-03) tripped its kill criterion, and the RAR
          transition-shape test (above) has now closed the main galaxy-scale question.
          The <Link href="/wide-binaries" style={{ color: 'var(--color-accent-blue)' }}>wide binary test (TEST-02)</Link>{' '}
          was previously identified as a discriminator, but with the compander collapsing to MOND
          at its best-fit γ, the wide-binary question is now whether MOND+EFE and the compander
          (at fitted γ≈0.49) diverge in a density-stratified wide-binary sample. Wide stellar binaries
          (separations &gt; 0.1 pc) probe the sub-a&#x2080; acceleration regime in a fundamentally
          different mass and density environment from galaxy rotation curves — no dark matter halos,
          no baryonic feedback, just two stars in a nearly Keplerian orbit.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          The key papers are Pittordis &amp; Sutherland (2023) and Hernandez et al. (2024), using
          Gaia DR3. They disagree on the strength of the MOND signal. Synchronism predicts
          a density-dependent wide binary anomaly (stronger anomaly in denser stellar fields).
          Gaia DR3 is public; stratifying the sample by local stellar density is a tractable
          one-week analysis. See{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>TEST-02</Link>{' '}
          for the kill criterion.
        </p>
        <div style={{ background: 'rgba(239, 68, 68, 0.07)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.375rem', padding: '0.7rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <strong style={{ color: '#ef4444' }}>MOND+EFE / wide-binary avenue: CLOSED (2026-06-03)</strong>{' '}
          MOND <em>with the External Field Effect</em> (EFE, Bekenstein-Milgrom 1984) also predicts
          environment-dependent wide-binary dynamics. The quantitative divergence was computed
          on 2026-06-03: a bounded C(a) is the only form whose EFE prediction differs from MOND
          (TDG velocity dispersion σ ≈ 14.5 vs 41 km/s in Tidal Dwarf Galaxies), but that same
          boundedness caps the acceleration boost at ≈3.17 while ~42% of SPARC RAR data points
          require boosts above that (up to ~34×), giving RMS 0.224 vs McGaugh&apos;s 0.146.
          The boost ceiling and RAR fit trade off monotonically with opposite sign — no ceiling
          simultaneously fits the RAR and stays distinct from MOND+EFE.
          This is the same fork as the RAR transition-shape test: the one non-degenerate
          form is refuted by the data. Wide-binary density stratification cannot discriminate
          Synchronism from MOND+EFE. See{' '}
          <Link href="/wide-binaries" style={{ color: '#ef4444' }}>TEST-02</Link>{' '}
          and <Link href="/honest-assessment" style={{ color: '#ef4444' }}>Honest Assessment</Link>{' '}
          for the full picture.
        </div>

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

        <div style={{ background: 'rgba(239, 68, 68, 0.07)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.375rem', padding: '0.7rem 1rem', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#ef4444' }}>Cosmological extension — disfavored 2.4σ on σ₈ amplitude (reframed 2026-07-02):</strong>{' '}
          Session 107&apos;s prediction of suppressed growth (fσ₈&nbsp;≈&nbsp;0.418) was compared against DESI DR1.
          Full-shape result (arXiv:2411.12021): combined σ₈&nbsp;=&nbsp;0.841&nbsp;±&nbsp;0.034 vs predicted 0.76 → 2.4σ tension. Kill criterion (fσ₈&nbsp;&gt;&nbsp;0.46) triggered.
          The LRG1 fσ₈/(fσ₈)_fid&nbsp;=&nbsp;1.16&nbsp;±&nbsp;0.13 &ldquo;enhancement&rdquo; is a single ~1.2σ bin, not load-bearing.
          Verdict: post-hoc retrodiction, disfavored 2.4σ on amplitude. (Prior 2026-05-25 &ldquo;correction&rdquo; was itself an error — misattributed z≈0.07 PV value.){' '}
          <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment: TEST-04a &rarr;</Link>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
