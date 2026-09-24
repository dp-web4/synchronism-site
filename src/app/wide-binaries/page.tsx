'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function WideBinaries() {
  return (
    <>
      <Breadcrumbs currentPath="/wide-binaries" />
      <h1>Wide Binaries</h1>
      <ValidationBadge status="untested" label="Self-Eliminating — Pending External Adjudication (2026)" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Wide binary star systems &mdash; two stars orbiting each other at separations of thousands
          of AU &mdash; provide one of the cleanest tests of gravity in the low-acceleration regime.
          Synchronism&apos;s prediction for them depends on which version of its coherence function you use, and for
          the density-keyed version, on a number the framework never fixed. This page sets out the versions and what
          each one predicts.
        </p>

        <h2>Why Wide Binaries?</h2>
        <p>
          At separations greater than ~10<sup>4</sup> AU (roughly 0.05 parsecs), the gravitational
          acceleration between two stars drops below a&#x2080; &#x2248; 1.2 &times; 10<sup>&minus;10</sup>
          m/s&sup2;. In Newtonian gravity, nothing special happens. In MOND, orbital velocities should
          be higher than Newtonian predictions. The anomaly &mdash; if it exists &mdash; should be
          visible in the orbital dynamics.
        </p>
        <p>
          The beauty of wide binaries is simplicity: two gravitating masses, no dark matter halo
          ambiguity, no complex baryonic physics. It is the closest thing to a clean two-body test
          of modified gravity.
        </p>

        <h2>What MOND predicts</h2>
        <p>
          MOND&apos;s wide-binary prediction depends on location. A binary in the Solar neighbourhood also sits in the
          Milky Way&apos;s own field, about 1.8&nbsp;a&#x2080;. That external field partly suppresses the boost (the External Field
          Effect, EFE). With it, AQUAL and QUMOND predict a 1.0&ndash;1.4&times; boost in gravity at low internal
          acceleration, depending on the treatment. That is up to about +18% in velocity (&radic;1.4 &asymp; 1.18), the ~20%
          signal the Chae vs Banik dispute below is about. Without the EFE the boost would be several times larger: with the
          simple interpolating function at an internal acceleration of 0.1&nbsp;a&#x2080;, about 3.7&times; in gravity, or roughly
          +90% in velocity. (Corrected 2026-09-24: this paragraph used to call the ~18% the no-EFE figure. It is the EFE-included one.)
        </p>

        <h2>Synchronism&apos;s Prediction: Two Versions</h2>
        <div className="card" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ color: 'var(--color-accent-violet)' }}>Acceleration-keyed version (the one that fits galaxies)</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            At its SPARC fit this version is Milgrom&apos;s simple MOND function, so it predicts MOND&apos;s wide-binary boost,
            EFE included. Here the test cannot separate it from MOND. It can only fail both together.
          </p>
        </div>
        <div className="card card-highlight" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ color: 'var(--color-accent-violet)' }}>Density-keyed version (the headline equation)</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Here gravity is boosted by 1/C(&#x03C1;), where &#x03C1; is the local density. The boost does not depend on the
            binary&apos;s internal acceleration at all, so wide binaries are not special: whatever boost holds at the local
            density applies to every orbit there. Its size depends on the knee &#x03C1;<sub>crit</sub>. At the solar-neighbourhood
            density &#x03C1; &asymp; 0.09&nbsp;M&#x2609;/pc&sup3; the velocity excess over Newton is:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <li><strong>Published calibration</strong> &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2; = 1.5&times;10&sup3; M&#x2609;/pc&sup3; (Milky Way, &#x03B3; = 0.489):
              <strong> +1.8&times;10&#x2074;%</strong>. That is a factor ~3.5&times;10&#x2074; in g, excluded by the Oort limit by orders of magnitude. (Planetary
              ephemerides cannot see a boost that is uniform across the Solar System, because it is degenerate with the Sun&apos;s
              GM. They constrain only its variation, so they bite only if density is read pointwise, not smoothed over
              &ge; 30 AU.)</li>
            <li>Measured velocity-blind knee, 0.161&nbsp;M&#x2609;/pc&sup3;: <strong>+116%</strong> (&#x03B3; = 0.489) or +18.6% (&#x03B3; = 2).</li>
            <li>Refracted Gravity&apos;s elliptical-galaxy knee, 0.0083&nbsp;M&#x2609;/pc&sup3;: <strong>+9.4%</strong> (&#x03B3; = 0.489) or +0.005% (&#x03B3; = 2).</li>
            <li>A near-Newtonian 0.05&ndash;0.4% needs a knee between 3.8&times;10&#x207B;&#x2075; and 3.2&times;10&#x207B;&#x2074;&nbsp;M&#x2609;/pc&sup3; (&#x03B3; = 0.489).
              No other page uses a knee in that window, and it starts where the knee range ruled out on SPARC ends.</li>
          </ul>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The static amplitude is not the only handle: a density-keyed boost changes with time (explorer, 2026-09-23).</strong>{' '}
            Everything in one neighbourhood shares the same boost, so a ratio taken at one instant cancels it. That is why
            TEST-02 reads &ldquo;&#x03B3;<sub>g</sub> &equiv; 1&rdquo; for this version. But the Sun moves through the Galactic
            disc and past nearby stars (&alpha; Cen is closing at 22&nbsp;km/s), so the local density, and with it
            G<sub>eff</sub> = G/C(&#x03C1;), changes <em>now</em>. Lunar laser ranging measures &#x0120;/G = (7.1 &plusmn; 7.6)&times;10&#x207B;&sup1;&#x2074;
            per year (Hofmann &amp; M&uuml;ller 2018). With density smoothed over 1&ndash;10&nbsp;pc, the scale the galaxy fits need,
            the knee grid used on this site predicts 10&#x207B;&#x2078;&ndash;10&#x207B;&#x2075; per year. <strong>68 of 74 laws are
            excluded</strong> against a bound loosened 13&times;, including all eight near-Newtonian windows of the kind in the last bullet above that the TEST-02 card lists.
            The survivors are laws that are Newtonian to 10&#x207B;&#x2078; at the Sun, so they predict nothing here. Pre-registered
            (site commit <code>80b8c9c</code>) before the script existed. This is a second, SPARC-independent root for the
            density-keyed kill, not a new refutation, and it does not touch the acceleration-keyed version. Finding:{' '}
            <code>explorer/findings/density-keyed-C-is-a-moving-G-lunar-laser-ranging-excludes-it-at-pc-smoothing.md</code>.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            Arithmetic: <code>maintainer/scripts/test02_amplitude_is_knee_conditional.py</code> and its output file; details on{' '}
            <Link href="/tier-1-existing#TEST-02" style={{ color: 'var(--color-accent-blue)' }}>Tier 1, TEST-02</Link>.
          </p>
        </div>

        <h2>The Data</h2>
        <p>
          The European Space Agency&apos;s Gaia mission (Data Release 3) provides the necessary
          measurements: positions, proper motions, parallaxes, and radial velocities for over a
          billion stars. From this, wide binary candidates can be identified and their orbital
          dynamics characterized.
          {' '}<a href="https://gea.esac.esa.int/archive/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>Gaia Archive (ESA) &rarr;</a>
        </p>

        <div className="grid-3" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#38bdf8' }}>Gaia DR3</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Free, publicly available data
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>~6 months</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Estimated analysis time
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#22c55e' }}>10<sup>4</sup> AU</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Critical separation threshold
            </div>
          </div>
        </div>

        <h2>What the Density-Keyed Version Leaves Testable</h2>
        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>At the framework&apos;s published calibration, the density law is already excluded locally.</strong>{' '}
          No wide-binary sample is needed for that. At the other knees the site uses, the predicted boost is
          9&ndash;116%, and Gaia can see that; a confirmed Newtonian null would exclude those knees too. Only the
          otherwise-unused knee window above gives a signal below Gaia DR3 systematics (~3&ndash;5%). So no outcome
          selects Synchronism: a MOND-scale anomaly favours MOND and the acceleration-keyed version equally, and a
          Newtonian null favours Newton.
          <p style={{ margin: '0.6rem 0 0' }}>
            <strong>Why isn&apos;t the local exclusion booked as a refutation?</strong> This is not because it is weak. It is
            cleaner than TEST-09&apos;s 3.3&sigma;. It is a consequence of the knee calibration &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2;, and
            that calibration is already recorded as failed in the research ledger (its velocity exponent is excluded at
            ~11&sigma;). The site counts executed tests grouped by root. Whether this becomes its own booked result is
            ledger governance and gates on dp.
          </p>
          <details style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note</summary>
            This box was titled &ldquo;Feasibility Kill &mdash; Signal Below Gaia Systematics&rdquo;. It said solar-neighbourhood
            density sits above &#x03C1;<sub>crit</sub>, giving C&nbsp;&asymp;&nbsp;1, a 0.05&ndash;0.4% Newtonian null, and a signal ~80&times;
            below Gaia&apos;s reach. At the published calibration the density sits far below the knee, so C&nbsp;&asymp;&nbsp;3&times;10&#x207B;&#x2075;
            and the boost is maximal. The page also said &ldquo;Standard MOND predicts the same anomaly regardless of where the
            binary system is located&rdquo;, which ignores the External Field Effect. Tier 1 carried the knee-conditional
            correction from 2026-09-10. It reached this page on 2026-09-17, after a researcher visitor persona found both errors.
          </details>
        </div>

        <h2>Current Observational Status (last surveyed 2026-06-23; not re-surveyed since)</h2>
        <p>
          The wide-binary debate escalated in 2026. The earlier dispute (sample selection,
          contamination, statistical cuts) has been superseded by a sharper disagreement:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Chae et al. 2026 (arXiv:2601.21728)</strong>: Enlarged RV+speckle-vetted sample
            of 36 binaries → 4.9σ boost with γ_boost ≈ 1.6 — consistent with MOND. (As summarised in June; the sample cut
            and significance have not been re-checked against the paper since.)</li>
          <li><strong>Saad &amp; Ting 2026 (arXiv:2603.11015)</strong>: Reanalyzed the <em>same</em> 36 binaries
            from Chae et al. 2026 using a hierarchical semi-major-axis fit (replacing geometric deprojection)
            → <strong>γ = 1.12 ± 0.25, Newton-consistent at 0.4σ</strong>. The entire anomaly lives in one
            modeling assumption (orbital deprojection prior).</li>
          <li><strong>Prior generation (2023–2024)</strong>: Banik et al. (2024), Pittordis &amp; Sutherland
            (2023), Saurabh &amp; Desmond (2024) all Newtonian-consistent with different cuts.</li>
          <li><strong>Hernandez (2023–2024)</strong>: Anomalies in projected-velocity statistics; methodology
            disputed.</li>
        </ul>
        <div style={{
          background: 'rgba(245,158,11,0.07)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Status: pending external adjudication (adjudication executed 2026-06-12 — HUNG).</strong>{' '}
          The crux migrated from sample cuts to orbital modeling prior. The adjudication will turn on:
          (1) Chae rebuttal of Saad &amp; Ting's deprojection model; (2) mock-injection cross-validation
          of the deprojection crux (decidable with <em>no new data</em>); (3) independent ≥3σ boost
          confirmation → kill fires; (4) independent null replication → degenerate survival; (5) Gaia DR4.
          All independent third parties (Saad &amp; Ting, Saglia et al. 2025, Pasquini et al. 2026) currently
          lean Newtonian or deflationary.
        </div>

        <div style={{
          background: 'rgba(59,130,246,0.07)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: 'var(--color-accent-blue)' }}>MOND+EFE and the density law (Bekenstein &amp; Milgrom 1984):</strong>{' '}
          both predict weaker anomalies in stronger environments, but through different variables. MOND+EFE responds to
          the external <em>acceleration</em>, and the density law responds to the local <em>density</em>. Their amplitudes
          are not degenerate: MOND+EFE gives 1.0&ndash;1.4&times; in g, while the density law gives anything from its excluded
          published value down to a Newtonian null, depending on the knee. The test separates them only once the knee is fixed.
        </div>

        <h2>Why This Test Cannot Be Decisive (As Currently Formulated)</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3 style={{ color: '#ef4444' }}>If anomaly confirmed (Chae wins)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              A confirmed EFE-suppressed MOND anomaly would support MOND and the acceleration-keyed version equally. For the
              density law it would rule out the near-Newtonian knee window. The published calibration is already excluded.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-text-secondary)' }}>If null confirmed (Banik wins)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The acceleration-keyed version fails together with MOND&apos;s simple function. The density law survives only
              in the near-Newtonian knee window, where it cannot be told apart from Newton.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/cosmology-predictions" className="btn-primary">
            Next: Cosmology Predictions &rarr;
          </Link>
          <Link href="/tier-1-existing" className="btn-secondary">
            Full Tier 1 Test Roadmap &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/wide-binaries" />
    </>
  );
}
