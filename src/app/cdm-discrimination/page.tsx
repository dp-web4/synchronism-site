'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CdmDiscrimination() {
  return (
    <>
      <Breadcrumbs currentPath="/cdm-discrimination" />
      <h1>CDM Discrimination</h1>
      <ValidationBadge status="supported" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="Measured intrinsic scatter">
          &#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex
        </EquationDisplay>

        <p>
          Cold Dark Matter (CDM) models predict a specific amount of intrinsic scatter in the
          Radial Acceleration Relation. The measured scatter from 14,760 galaxies is
          <strong> below</strong> that prediction. This constrains &mdash; but does not rule out &mdash;
          the CDM framework.
        </p>

        <h2>Why Scatter Matters</h2>
        <p>
          In CDM cosmology, each galaxy forms inside a dark matter halo with its own assembly
          history: different merger trees, different concentration parameters, different baryon
          fractions. This diversity should produce scatter in the RAR. Simulations from the EAGLE,
          IllustrisTNG, and FIRE projects predict &#x03C3;<sub>int</sub> &#x2248; 0.11&ndash;0.16 dex
          from halo-to-halo variation alone.
        </p>
        <p>
          The observed value of 0.086 &plusmn; 0.003 dex is tighter than these predictions. The RAR
          is &ldquo;too tight&rdquo; for a universe where dark matter halos have such diverse histories.
        </p>

        <h2>Three Frameworks Compared</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>CDM (&#x039B;CDM)</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Predicted scatter: &#x03C3;<sub>int</sub> &#x2248; 0.11&ndash;0.16 dex from halo
                  diversity. To match the observed 0.086, CDM must invoke finely-tuned baryonic
                  feedback that somehow erases halo-to-halo variation. Possible, but requires
                  additional physics.
                </p>
              </div>
              <ValidationBadge status="supported" label="Constrained" />
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>MOND</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Predicted scatter: &#x03C3;<sub>int</sub> &#x2248; 0 (the RAR should be exact
                  in pure MOND). The observed 0.086 dex comes from observational errors and M/L
                  variations. MOND naturally explains the tightness.
                </p>
              </div>
              <ValidationBadge status="validated" label="Natural" />
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>Synchronism</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Predicted scatter: small and <strong>environment-dependent</strong>. The coherence
                  function allows slight variations based on local density, explaining why the scatter
                  is not zero but is much tighter than CDM expects. The environment dependence was
                  confirmed at p = 5 &times; 10<sup>&minus;6</sup>.
                </p>
              </div>
              <ValidationBadge status="supported" />
            </div>
          </div>
        </div>

        <h2>Sessions #604&ndash;610</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This analysis was performed across Sessions #604&ndash;610 of the autonomous research
          program. The key methodological steps: (1) bootstrap resampling to estimate
          &#x03C3;<sub>int</sub> independent of measurement errors, (2) comparison against published
          CDM predictions from EAGLE and IllustrisTNG, (3) environment binning to test coherence
          predictions.
        </p>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This result constrains CDM but does not rule it out. CDM simulations are continuously
          improving, and baryonic feedback models are getting more sophisticated. It is entirely
          possible that future CDM simulations with better subgrid physics will reproduce the
          observed tightness. Additionally, the scatter measurement itself depends on assumptions
          about distance errors and mass-to-light ratios. The tension is suggestive, not decisive.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/freemans-law" className="btn-primary">
            Next: Freeman&apos;s Law &rarr;
          </Link>
          <Link href="/rar-scatter" className="btn-secondary">
            &larr; RAR Scatter
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/cdm-discrimination" />
    </>
  );
}
