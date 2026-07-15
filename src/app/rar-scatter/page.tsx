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
      <ValidationBadge status="failed" label="Environment run executed 2026-07-14: r²=0.0001 vs registered >20% — refuted; MOND tie dissolved 2026-07-15" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          <strong>New Prediction #2 (NP2)</strong>: The scatter in the Radial Acceleration Relation
          depends on environment. The effect is real and statistically significant (p&nbsp;=&nbsp;5&times;10<sup>&minus;6</sup>,
          R&sup2;=0.14) — but on the SPARC-scale sample (N&asymp;130&ndash;175), not the 14,585-galaxy
          ALFALFA-SDSS sample this page originally attributed it to (see correction below;
          TEST-03/TEST-05 on{' '}
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
          Using the ALFALFA-SDSS cross-matched sample, &#x03C3;<sub>int</sub> = 0.086 dex was measured on the
          <em> optimal quality cut (N = 677)</em> — the full cross-match (N = 14,435) gives 0.118 dex; pairing
          the headline N with the optimal-cut statistic was a sample splice, corrected 2026-07-10
          (CDM-consistent — see{' '}
          <Link href="/cdm-discrimination" style={{ color: 'var(--color-accent-blue)' }}>CDM Discrimination</Link>).
          The p = 5&times;10<sup>&minus;6</sup>, R&sup2; = 0.14 environment-density statistics below are <strong>not</strong>
          from this sample: they trace to a SPARC-scale (N&asymp;171) Hubble-type/morphology regression
          (archive Session 377), mislabeled as this test&apos;s result since 2026-04. The result:
        </p>
        <div className="card" style={{ borderLeft: '3px solid #f59e0b', margin: '1rem 0', padding: '0.75rem 1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong>Correction (2026-07-09):</strong> at N = 14,585, R² = 0.14 would imply p of order
            10<sup>&minus;500</sup>, not 5×10<sup>&minus;6</sup> — mathematically impossible together. The registered
            environment-density test on the 14,585-galaxy sample has never been run. Full trace on{' '}
            <Link href="/tier-1-existing#TEST-03" style={{ color: 'var(--color-accent-blue)' }}>Tier 1: TEST-03/TEST-05 →</Link>
          </p>
        </div>

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
