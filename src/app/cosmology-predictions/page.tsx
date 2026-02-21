'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function CosmologyPredictions() {
  return (
    <>
      <Breadcrumbs currentPath="/cosmology-predictions" />
      <h1>Cosmology Predictions</h1>
      <ValidationBadge status="untested" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism generates several testable predictions at cosmological scales. Some have already
          been tested (environment-dependent RAR scatter); others await analysis of existing or
          forthcoming survey data. Here are the key predictions, with their current status and what
          would falsify them.
        </p>

        <h2>Prediction 1: BAO Modulation</h2>
        <div className="card" style={{ margin: '1rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3>Density-Dependent BAO Peak Shifts</h3>
            <ValidationBadge status="untested" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Baryon Acoustic Oscillations (BAO) are the imprint of sound waves in the early universe,
            visible as a characteristic ~150 Mpc peak in the galaxy correlation function. Standard
            cosmology predicts this peak position is universal.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Synchronism predicts:</strong> the BAO peak position should shift slightly
            depending on the local density of the survey volume. Overdense regions should show a
            compressed BAO scale; underdense regions should show an expanded scale. The shift is
            small (~0.1&ndash;0.5%) but potentially detectable with DESI survey precision.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Kill criterion:</strong> if DESI achieves sub-0.1% BAO measurements across
            multiple density environments and finds no modulation, this prediction is falsified.
          </p>
        </div>

        <h2>Prediction 2: GW-DM Correlation</h2>
        <div className="card" style={{ margin: '1rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3>Gravitational Wave &ndash; Dark Matter Halo Correlation</h3>
            <ValidationBadge status="untested" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            If both gravitational dynamics and &ldquo;dark matter&rdquo; effects emerge from the
            coherence field, then gravitational wave signals from compact binary mergers should
            correlate with the dark matter halo properties of their host environments.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Synchronism predicts:</strong> GW merger rates, signal amplitudes, and waveform
            characteristics should show systematic correlations with the estimated dark matter halo
            mass of the host galaxy or galaxy cluster. Mergers in high-density environments should
            show subtly different dynamics than those in voids.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Kill criterion:</strong> with sufficient LIGO/Virgo/KAGRA events (~1000+
            well-localized mergers), a null correlation would falsify this prediction.
          </p>
        </div>

        <h2>Prediction 3: Environment-Dependent RAR Scatter</h2>
        <div className="card" style={{ margin: '1rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3>RAR Scatter Varies with Local Density</h3>
            <ValidationBadge status="supported" label="p = 5&times;10&#x207B;&#x2076;" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This prediction has been <strong>tested and supported</strong>. The intrinsic scatter in
            the Radial Acceleration Relation depends on the environment density of the galaxy, with
            p = 5 &times; 10<sup>&minus;6</sup> significance.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            See{' '}
            <Link href="/rar-scatter" style={{ color: 'var(--color-accent-blue)' }}>RAR Scatter</Link>{' '}
            for full details. Caveat: R&sup2; = 0.14 (86% of scatter unexplained).
          </p>
        </div>

        <h2>Summary Table</h2>
        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Prediction</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Data Source</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Timeframe</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.75rem' }}>BAO modulation</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="untested" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>DESI</td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>2025&ndash;2027</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.75rem' }}>GW-DM correlation</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="untested" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>LIGO/Virgo/KAGRA</td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>2026&ndash;2030</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.75rem' }}>RAR environment scatter</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="supported" label="p = 5&times;10&#x207B;&#x2076;" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>ALFALFA-SDSS</td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>Completed</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.75rem' }}>Wide binary anomaly</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="untested" label="Gaia DR3" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>Gaia</td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>~6 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The Pattern</h2>
        <p>
          All cosmology predictions share a common structure: the coherence function introduces
          <strong> environment dependence</strong> where standard models predict universality. If the
          coherence framework is correct, nothing in gravity is truly universal &mdash; every
          gravitational phenomenon carries an imprint of the local density field. This is
          philosophically radical but empirically testable.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/test-catalog" className="btn-primary">
            Full Test Catalog &rarr;
          </Link>
          <Link href="/top-5-tests" className="btn-secondary">
            Top 5 Decisive Tests &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/cosmology-predictions" />
    </>
  );
}
