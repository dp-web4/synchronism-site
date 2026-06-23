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
          Synchronism makes a specific, testable prediction about these systems that differs from
          both Newtonian gravity and standard MOND.
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

        <h2>Synchronism&apos;s Prediction</h2>
        <p>
          Standard MOND predicts the same anomaly regardless of where the binary system is located.
          Synchronism predicts something different:
        </p>

        <div className="card card-highlight" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ color: 'var(--color-accent-violet)' }}>Density-Dependent Anomaly</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            The wide binary anomaly should <strong>depend on local environment density</strong>.
            Binaries in dense stellar neighborhoods (near the Galactic plane, in open clusters)
            should show a <em>weaker</em> anomaly than binaries in low-density environments
            (high Galactic latitude, far from molecular clouds).
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This follows directly from the coherence function: higher ambient density shifts
            &#x03C1;<sub>crit</sub>, altering the acceleration threshold at which modified dynamics
            appear. In dense environments, the external coherence field &ldquo;masks&rdquo; the
            low-acceleration effects.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Predicted amplitude:</strong> In the clean within-250-pc Gaia sample, C(ρ) predicts
            only <strong>0.05–0.4% velocity deviation</strong> from Newtonian dynamics — because the
            C(ρ) prediction for wide binaries is effectively the Newtonian null (g_eff ≈ g_N at the relevant
            densities). This is ~80× below Gaia DR3 wide-binary systematics. Cf. MOND prediction: ~18%
            velocity enhancement. The amplitude difference is fundamental, not instrumental.</p>
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

        <h2>Feasibility Kill — Signal Below Gaia Systematics</h2>
        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Feasibility kill (independent of the Chae–Banik dispute):</strong>{' '}
          C(ρ) predicts a Newtonian null — only <strong>0.05–0.4% velocity deviation</strong> from Newtonian
          dynamics — because low-density wide-binary environments give C ≈ 1 (near-Newtonian).
          Gaia DR3 systematics on clean wide-binary velocity samples are ~3–5%, placing the predicted
          signal <strong>~80× below reach</strong>. Even if Chae (2023–2026) wins the observational dispute,
          C(ρ) is refuted — it predicts the Newtonian null, not the MOND-scale anomaly Chae reports.
          Even if Banik wins (no anomaly), C(ρ) survives but degenerately with Newton. <strong>No measurement
          outcome selects Synchronism over the standard alternatives.</strong>
        </div>

        <h2>Current Observational Status (updated 2026-06-23)</h2>
        <p>
          The wide-binary debate escalated in 2026. The earlier dispute (sample selection,
          contamination, statistical cuts) has been superseded by a sharper disagreement:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Chae et al. 2026 (arXiv:2601.21728)</strong>: Enlarged RV+speckle-vetted sample
            of 36 binaries → 4.9σ boost with γ_boost ≈ 1.6 — consistent with MOND.</li>
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
          <strong style={{ color: 'var(--color-accent-blue)' }}>MOND+EFE degeneracy (Bekenstein &amp; Milgrom 1984):</strong>{' '}
          MOND+EFE predicts environment-dependent orbital dynamics in the same direction as Synchronism (weaker
          anomaly in denser environments). The C(ρ) and MOND+EFE functional forms have been computed and
          compared (2026-06-05): they make <em>opposite amplitude</em> predictions — C(ρ) predicts the
          Newtonian null (~0.05–0.4%); MOND predicts ~18% enhancement. These are not degenerate in amplitude,
          but C(ρ)'s predicted amplitude is ~80× below Gaia reach. The test cannot discriminate.
        </div>

        <h2>Why This Test Cannot Be Decisive (As Currently Formulated)</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3 style={{ color: '#ef4444' }}>If anomaly confirmed (Chae wins)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              C(ρ) predicts the Newtonian null — so a confirmed MOND-scale anomaly would
              <strong> refute C(ρ)</strong> (it predicts ~0.05–0.4%, not ~18%). The &ldquo;kill branch&rdquo;
              fires with existing data if Chae&apos;s deprojection approach is vindicated.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-text-secondary)' }}>If null confirmed (Banik wins)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              C(ρ) survives — but degenerately with Newton. The predicted signal (0.05–0.4%)
              sits 80× below Gaia DR3 systematics, so there is no measurement that selects
              Synchronism over Newton.
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
