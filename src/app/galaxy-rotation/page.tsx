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
      <ValidationBadge status="supported" label="14,760 Galaxies" />

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
            </p>
            <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <li>Tight RAR confirmed (&#x03C3;<sub>int</sub> &#x2248; 0.057 dex)</li>
              <li>Coherence function fits within observational scatter</li>
              <li>Environment-dependent effects visible but sample too small for strong statistics</li>
            </ul>
          </div>
          <div className="card card-highlight">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>ALFALFA-SDSS Dataset</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <strong>14,585 galaxies</strong> from the ALFALFA HI survey cross-matched with SDSS
              photometry. Unresolved rotation curves but massive statistical power.
            </p>
            <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <li>Environment-dependent RAR scatter detected at p = 5 &times; 10<sup>&minus;6</sup></li>
              <li>&#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex (below CDM prediction)</li>
              <li>Cluster vs. field galaxies show different scatter &mdash; as predicted</li>
            </ul>
          </div>
        </div>

        <h2>The Coherence Prediction</h2>
        <EquationDisplay size="md" label="Coherence-modified acceleration">
          g<sub>obs</sub> = g<sub>bar</sub> / (1 &minus; e<sup>&minus;&#x221A;(g<sub>bar</sub>/a&#x2080;)</sup>)
        </EquationDisplay>
        <p>
          This is the standard RAR interpolation function (McGaugh et al. 2016). In Synchronism,
          the acceleration scale a&#x2080; is not a free parameter &mdash; it{' '}
          <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>emerges from cosmology</Link>{' '}
          as cH&#x2080;/(2&#x03C0;). The coherence function provides the physical mechanism: at
          accelerations below a&#x2080;, the system crosses a coherence threshold and gravitational
          dynamics change.
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

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The environment-dependent scatter is real and statistically significant, but it explains only
          14% of the total RAR scatter (R&sup2; = 0.14). The remaining 86% is unexplained by the
          coherence model. Furthermore, standard MOND plus mass-to-light ratio corrections already
          explains essentially all of the RAR variance. Synchronism adds a small, detectable effect
          on top of what MOND already provides &mdash; it does not replace MOND&apos;s success.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/rar-scatter" className="btn-primary">
            Next: RAR Scatter &rarr;
          </Link>
          <Link href="/cdm-discrimination" className="btn-secondary">
            CDM Discrimination &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/galaxy-rotation" />
    </>
  );
}
