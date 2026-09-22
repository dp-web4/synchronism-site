'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

export default function MondComparator() {
  return (
    <>
      <Breadcrumbs currentPath="/mond-comparator" />
      <h1>MOND-Synchronism Comparator</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{ borderLeft: '3px solid #ef4444', background: 'rgba(239,68,68,0.06)', padding: '0.75rem 1rem', borderRadius: '0.375rem', marginBottom: '1.25rem', fontSize: '0.92rem' }}>
          <strong>Short answer: where the two can be compared, they are the same thing.</strong> At its best-fit
          &gamma;&nbsp;&asymp;&nbsp;&frac12;, Synchronism&apos;s coherence function <em>is</em> MOND&apos;s simple
          interpolating function, exactly (C&nbsp;=&nbsp;x/(x+2)&nbsp;=&nbsp;&mu;<sub>simple</sub>(x/2)). Every place the
          framework differs from MOND (the density keying, the bounded boost, &gamma;&nbsp;=&nbsp;2) has been tested and
          lost, or cannot be tested with current data. The open question is whether any version of the framework
          differs from MOND and survives. None is known.{' '}
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            (Until 2026-09-22 this page showed a comparison written in February 2026, before the audit. It called
            a&#x2080;&nbsp;=&nbsp;cH&#x2080;/(2&#x03C0;) &ldquo;derived from first principles&rdquo; and the &gamma;&nbsp;=&nbsp;2
            fit &ldquo;comparable&rdquo;. Both were wrong; the rows below are corrected.)
          </span>
        </div>

        <h2>The Acceleration Scale a&#x2080;</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderTop: '3px solid #f59e0b' }}>
            <h3>MOND (Milgrom 1983)</h3>
            <p style={{ fontFamily: 'monospace', color: '#f59e0b', margin: '0.5rem 0' }}>
              a&#x2080; &#x2248; 1.2 &times; 10&#x207B;&#xB9;&#x2070; m/s&sup2;
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Status:</strong> Empirical constant, fitted to data. Milgrom noted the coincidence
              a&#x2080; &#x2248; cH&#x2080;/6 in 1983.
            </p>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--color-accent-violet)' }}>
            <h3>Synchronism</h3>
            <p style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)', margin: '0.5rem 0' }}>
              a&#x2080; = cH&#x2080;/(2&#x03C0;) &asymp; 1.04 &times; 10&#x207B;&#xB9;&#x2070; m/s&sup2;
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Status: Reparametrization.</strong> This is the same numerical coincidence Milgrom noted
              (1/2&#x03C0; = 0.159 vs 1/6 = 0.167), not a derivation. The Hubble-sphere calculation the archive
              describes gives cH&#x2080;/2, not cH&#x2080;/2&#x03C0;. It is 13% below the observed 1.2.
              See <Link href="/mond-unification">MOND Unification</Link>.
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
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-accent-violet)' }}>Synchronism (current status)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['a₀ origin', 'Empirical fit', 'Same coincidence restated (Reparametrization)'],
                ['Galaxy rotation curves (RAR)', 'Good fit', 'Free γ lands on 0.489 ≈ ½, i.e. MOND\'s simple μ (Reparametrization). The framework\'s own γ = 2 loses by ΔBIC +184 (Failed)'],
                ['Stated variable', 'Acceleration', 'Local density ρ, but every quantitative galaxy fit used acceleration. Keyed on density, the best fit switches the effect off (γ → 0.046)'],
                ['Boost at low acceleration', 'Unbounded', 'Capped at 1/Ω_m = 3.17 in one reading. Excluded by the SPARC BTFR slope for caps ≲ 5.4 (Failed; the headline kill depends on the cap convention)'],
                ['RAR environment dependence', 'Via the external field effect', 'Predicted density dependence not seen: r² = 0.0001 vs a kill bar of 0.09 (Failed)'],
                ['Solar System (Cassini)', 'Simple μ and McGaugh\'s RAR function are both excluded; only sharper transitions (δ ≥ 4) survive', 'At the SPARC-preferred γ it is simple μ, so it is excluded too, +17.7 to +18.0σ (Failed, inherited from MOND)'],
                ['Wide binaries', 'Disputed in the literature', 'Density-keyed signal ~80× below Gaia DR3 systematics; the acceleration-keyed reading inherits MOND\'s outcome (Self-Eliminating-or-Tie)'],
                ['Cosmology', 'Needs extra ingredients for the CMB', 'The dark-energy sector is ΛCDM at its best fit, and it needs cold dark matter put in by hand (checked 2026-09-22)'],
                ['Relativistic extension', 'TeVeS, AeST', 'Static gravity reproduces GR. The radiative sector predicts scalar gravitational waves, which is refuted (Failed)'],
                ['Chemistry / quantum', 'Not addressed', 'The chemistry γ ≈ 1 boundary mostly restates the Debye model; the Intent field equals |ψ|² wherever tested (Reparametrization)'],
                ['Freeman\'s Law', 'Σ₀ = a₀/(2πG)', 'The same relation, relabelled through ρ_crit (Reparametrization)'],
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

        <h2>Is There Still a Discriminator?</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This page used to call wide-binary density dependence (TEST-02) &ldquo;the decisive discriminator&rdquo;. It
            isn&apos;t. The density-keyed signal is too small for Gaia DR3, and the acceleration-keyed reading is MOND.
            The framework&apos;s two genuinely non-MOND features were the density keying and the bounded boost. The
            density keying fails on data (the environment test, and the locality argument on{' '}
            <Link href="/key-claims">Key Claims</Link>). The bounded boost fails the BTFR slope for caps up to about
            5.4. <strong>Open question:</strong> is there a version of C that differs from MOND anywhere data can reach
            and hasn&apos;t lost? If you can construct one, that is the most useful thing a reader could bring to this
            project. The scorecard is on <Link href="/honest-assessment">Honest Assessment</Link>.
          </p>
        </div>
      </section>

      <RelatedConcepts currentPath="/mond-comparator" />
    </>
  );
}
