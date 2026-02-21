'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

export default function MondComparator() {
  return (
    <>
      <Breadcrumbs currentPath="/mond-comparator" />
      <h1>MOND-Synchronism Comparator</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          MOND (Modified Newtonian Dynamics) and Synchronism both explain galaxy rotation
          without dark matter particles. Here&apos;s how they compare, point by point.
        </p>

        <h2>The Acceleration Scale a&#x2080;</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderTop: '3px solid #f59e0b' }}>
            <h3>MOND (Milgrom 1983)</h3>
            <p style={{ fontFamily: 'monospace', color: '#f59e0b', margin: '0.5rem 0' }}>
              a&#x2080; &#x2248; 1.2 &times; 10&#x207B;&#xB9;&#x2070; m/s&sup2;
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Status:</strong> Empirical constant. Fitted to data. The coincidence
              a&#x2080; &#x2248; cH&#x2080;/(2&#x03C0;) is noted but unexplained.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              MOND modifies Newton&apos;s second law below a&#x2080;. No explanation for why
              this specific value.
            </p>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--color-accent-violet)' }}>
            <h3>Synchronism</h3>
            <p style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)', margin: '0.5rem 0' }}>
              a&#x2080; = cH&#x2080;/(2&#x03C0;) &larr; derived
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Status:</strong> Derived from first principles. The acceleration scale
              emerges from the cosmic MRH and the coherence function.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              The &ldquo;coincidence&rdquo; is explained: a&#x2080; is the acceleration at which
              the coherence horizon reaches cosmic scales.
            </p>
          </div>
        </div>

        <h2>Head-to-Head Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: '#f59e0b' }}>MOND</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-accent-violet)' }}>Synchronism</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['a₀ origin', 'Empirical fit', 'Derived: cH₀/(2π)'],
                ['Galaxy rotation curves', 'Excellent fit', 'Comparable fit (γ = 2)'],
                ['RAR scatter', 'Predicts tight RAR', 'Predicts environment-dependent scatter'],
                ['Wide binaries', 'Density-independent', 'Density-dependent (novel)'],
                ['Galaxy clusters', 'Fails (needs DM)', 'Untested at this scale'],
                ['Environment dependence', 'No', 'Yes (NP2, p = 5×10⁻⁶)'],
                ['Extends to quantum', 'No', 'Yes (same γ, different N_corr)'],
                ['Extends to chemistry', 'No', 'Yes (1,703 phenomena)'],
                ['Free parameters', '1 (a₀)', '3 (A, B, β — derived + fitted)'],
                ['Relativistic extension', 'TeVeS (problematic)', 'Built into coherence framework'],
                ['CDM σ_int = 0.086 dex', 'Rejected at 32σ', 'Matches (z = +0.5)'],
                ['Freeman\'s Law', 'Follows from a₀', 'Derived from ρ_crit'],
              ].map(([feature, mond, sync]) => (
                <tr key={feature} style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>{feature}</td>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>{mond}</td>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>{sync}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>The Decisive Discriminator</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Wide binary density dependence</strong> (TEST-02) is the cleanest discriminator.
            MOND predicts the anomaly is universal &mdash; same at all densities. Synchronism
            predicts it depends on local stellar density. Gaia DR3 data exists to test this.
            Zero cost, 6 months.
          </p>
        </div>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          MOND has 40 years of empirical success and a large physics community behind it.
          Synchronism has been tested only internally over ~3 months. The comparison above
          is between a mature theory and an early-stage framework. Synchronism must earn its
          place through external validation, not internal comparisons.
        </p>
      </section>

      <RelatedConcepts currentPath="/mond-comparator" />
    </>
  );
}
