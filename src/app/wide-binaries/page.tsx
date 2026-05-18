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
      <ValidationBadge status="untested" label="Gaia DR3" />

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

        <h2>Current Observational Status</h2>
        <p>
          Several groups have analyzed Gaia wide binaries with conflicting results. Chae (2023, 2024)
          reported a clear anomaly consistent with MOND. Banik et al. (2024) and Pittordis &amp; Sutherland
          (2023) found no significant anomaly under improved sample selection and contamination treatment.
          Saurabh &amp; Desmond (2024) found no anomaly in high-quality Gaia DR3 cuts.
          The Hernandez Stellar Cinematics group (Hernandez 2023) reports anomalies in projected-velocity
          statistics. The disagreement centers on sample selection, contamination from unresolved
          triples, projected-vs-3D-separation methodology, and statistical cuts.
        </p>

        <div style={{
          background: 'rgba(245,158,11,0.07)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>MOND+EFE caveat (Bekenstein &amp; Milgrom 1984):</strong>{' '}
          MOND&apos;s External Field Effect (EFE) also predicts environment-dependent orbital dynamics:
          a strong external gravitational field suppresses the MOND anomaly. Standard MOND+EFE therefore
          predicts a weaker anomaly in dense environments — the same directional prediction as Synchronism.
          For TEST-02 to genuinely discriminate between frameworks, the predicted functional form ξ(ρ_env)
          from Synchronism must differ <em>quantitatively</em> from the MOND+EFE prediction. This comparison
          has not yet been computed. Until it is, TEST-02 is <strong>possibly MOND+EFE degenerate</strong>.
        </div>

        <p>
          Synchronism&apos;s environment-dependent prediction offers a potential resolution to the
          Chae-vs-Banik dispute: both groups may be correct for their respective samples if the anomaly
          depends on local density. This can be tested by binning existing catalogs by Galactic latitude,
          local stellar density, and distance from the Galactic plane — but only if the functional form
          ξ(ρ) is derived from the framework&apos;s parameters before the test, not fitted afterward.
        </p>

        <h2>Why This Test Is Decisive</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3 style={{ color: '#22c55e' }}>If confirmed (and MOND+EFE excluded)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              A density-dependent wide binary anomaly with functional form that differs from
              MOND+EFE would be a genuine discriminating prediction confirmed by data.
              Pre-condition: the ξ(ρ_env) functional form must be derived before the analysis.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: '#ef4444' }}>If refuted</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              If the anomaly shows no environment dependence (or doesn&apos;t exist at all),
              it falsifies the coherence-based mechanism for modified gravity. The galactic-scale
              results would need a different explanation.
            </p>
          </div>
        </div>

        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is one of the cheapest decisive experiments in fundamental physics: the data already
          exists, the analysis requires computational resources but no new observations, and the
          prediction is specific enough to be clearly confirmed or refuted.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/cosmology-predictions" className="btn-primary">
            Next: Cosmology Predictions &rarr;
          </Link>
          <Link href="/test-catalog" className="btn-secondary">
            Full Test Catalog &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/wide-binaries" />
    </>
  );
}
