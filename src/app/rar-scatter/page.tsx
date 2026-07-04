'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function RarScatter() {
  return (
    <>
      <Breadcrumbs currentPath="/rar-scatter" />
      <h1>RAR Scatter</h1>
      <ValidationBadge status="failed" label="Kill Criterion Triggered (R&sup2;=0.14 &lt; 0.20)" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          <strong>New Prediction #2 (NP2)</strong>: The scatter in the Radial Acceleration Relation
          depends on environment. The effect is real and statistically significant (p&nbsp;=&nbsp;5&times;10<sup>&minus;6</sup>),
          but it explains only 14% of the scatter &mdash; below the pre-registered 20% kill threshold
          (see TEST-03/TEST-05 on{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1: Existing Data</Link>).
          <strong> Correction (2026-07-04):</strong> this is <em>not</em> a prediction standard models
          avoid &mdash; MOND&apos;s External Field Effect (EFE) also predicts environment-dependent RAR
          scatter, so a detection here does not by itself discriminate Synchronism from MOND.
        </p>

        <h2>What Is RAR Scatter?</h2>
        <p>
          The Radial Acceleration Relation plots observed gravitational acceleration (g<sub>obs</sub>)
          against the acceleration predicted from baryonic mass alone (g<sub>bar</sub>). Across
          thousands of galaxies, this relation is remarkably tight &mdash; but not perfectly tight.
          The scatter around the mean relation is measured as &#x03C3;<sub>int</sub> (intrinsic
          scatter in dex).
        </p>
        <p>
          Standard models &mdash; both CDM and basic MOND &mdash; predict that this scatter should be
          <strong> constant</strong> regardless of a galaxy&apos;s environment. A galaxy in a dense
          cluster should scatter the same amount as an isolated field galaxy.
        </p>

        <h2>Synchronism&apos;s Prediction</h2>
        <p>
          The coherence function depends on local density. Galaxies in dense environments (clusters,
          groups) experience a different coherence gradient than isolated galaxies. This means the
          RAR scatter should <strong>vary with local density</strong>. Specifically:
        </p>

        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>Cluster Galaxies</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Higher ambient density &rarr; steeper coherence gradient &rarr; tighter RAR
              (less scatter). The external density field &ldquo;stiffens&rdquo; the coherence profile.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Field Galaxies</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Lower ambient density &rarr; shallower coherence gradient &rarr; more scatter.
              Isolated galaxies have more freedom in how their coherence profiles develop.
            </p>
          </div>
        </div>

        <h2>The Test</h2>
        <p>
          Using the ALFALFA-SDSS cross-matched sample (14,585 galaxies), we divided galaxies by
          local density proxy (Nth-nearest-neighbor density estimator) and measured &#x03C3;<sub>int</sub>
          in each bin. The result:
        </p>

        <div className="grid-3" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#22c55e' }}>p = 5 &times; 10<sup>&minus;6</sup></div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Statistical significance of environment effect
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>R&sup2; = 0.14</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Fraction of scatter explained
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f59e0b' }}>86%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Scatter remains unexplained
            </div>
          </div>
        </div>

        <h2>What This Means</h2>
        <p>
          The environment effect is <em>real</em> &mdash; statistically significant at better than
          4.5&#x03C3; &mdash; but small, and it fails the test&apos;s own pre-registered kill criterion
          (R&sup2; &gt; 0.20 required; R&sup2; = 0.14 measured). <strong>Basic MOND (no EFE) does not
          predict environment dependence, but MOND with the External Field Effect does</strong> &mdash;
          EFE is a standard part of MOND phenomenology, not an ad-hoc addition, so this result does not
          separate Synchronism from the MOND family. CDM simulations with baryonic feedback can also
          potentially produce environment-dependent scatter.
        </p>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          86% of the RAR scatter remains unexplained by Synchronism&apos;s coherence model (R&sup2; = 0.14),
          below the 20% the pre-registered kill criterion required &mdash; by that standard this test has
          <strong> failed</strong>, not merely under-delivered. Most of the scatter likely comes from
          observational systematics (distance errors, inclination corrections, mass-to-light ratio
          assumptions) rather than any physical model. MOND plus standard M/L corrections already
          accounts for essentially all of the variance. See{' '}
          <Link href="/cdm-discrimination" style={{ color: 'var(--color-accent-blue)' }}>CDM Discrimination</Link>{' '}
          for how this same measurement bears on the CDM comparison.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/cdm-discrimination" className="btn-primary">
            Next: CDM Discrimination &rarr;
          </Link>
          <Link href="/galaxy-rotation" className="btn-secondary">
            &larr; Galaxy Rotation Curves
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/rar-scatter" />
    </>
  );
}
