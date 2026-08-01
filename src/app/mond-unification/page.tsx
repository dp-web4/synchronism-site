'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function MondUnification() {
  return (
    <>
      <Breadcrumbs currentPath="/mond-unification" />
      <PathNav currentPath="/mond-unification" />
      <h1>MOND Unification</h1>
      <ValidationBadge status="reparametrization" label="Dimensional Analysis — 13% Error" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="The MOND acceleration scale from cosmology">
          a&#x2080; = cH&#x2080; / (2&#x03C0;) &#x2248; 1.04 &times; 10<sup>&minus;10</sup> m/s&sup2;
        </EquationDisplay>

        <p>
          The MOND acceleration scale a&#x2080; is related to cosmological parameters.
          However, this relationship is not unique to Synchronism: Milgrom noted the a&#x2080; ~ cH&#x2080;
          coincidence in his original 1983 paper. McCulloch (2007) derived a&#x2080; = cH&#x2080;/(2&#x03C0;)
          from quantized inertia. Verlinde (2017) obtained a similar relation from emergent gravity.
          The 2&#x03C0; factor is the standard geometric factor arising from any argument involving a
          spherical causal horizon. This is best understood as dimensional analysis with a geometric prior,
          not a unique derivation from first principles.
        </p>

        <h2>The Significance</h2>
        <p>
          In Modified Newtonian Dynamics (MOND), a&#x2080; is the acceleration below which gravity
          deviates from Newton&apos;s law. Milgrom observed it empirically:
        </p>
        <EquationDisplay size="sm" label="Milgrom&apos;s observed value (1983)">
          a&#x2080;<sup>obs</sup> &#x2248; 1.20 &times; 10<sup>&minus;10</sup> m/s&sup2;
        </EquationDisplay>
        <p>
          For 40 years, the coincidence that a&#x2080; &#x2248; cH&#x2080; has been noted by many
          researchers. Multiple frameworks produce the same relation with the same geometric factor.
          In Synchronism, the coherence function provides a physical narrative for why this
          relationship holds, but the result itself is shared with other approaches.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Update 2026-08-01:</strong> treating a&#x2080; as emergent rather than fundamental is not
          cost-free &mdash; it is a forced commitment to a&#x2080;(z) = cH(z)/2&#x03C0;, which is now measurable and
          currently disfavored by 2&#x03C3;&ndash;6&#x03C3; against real high-z RAR data (Ciocan et al. 2026). See the
          epoch-fork row on{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>{' '}
          for the full account &mdash; disfavored, not refuted, and it does not move the site&apos;s refutation
          count.
        </p>

        <h2>The Derivation Chain</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
          <div className="card">
            <h3>Step 1: Critical Density of the Universe</h3>
            <EquationDisplay size="sm">
              &#x03C1;<sub>crit</sub> = 3H&#x2080;&sup2; / (8&#x03C0;G)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Standard cosmology. The density at which the universe is flat. This is measured, not assumed.
            </p>
          </div>

          <div className="card">
            <h3>Step 2: Coherence Transition</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              At the coherence transition (C &#x2248; 0.5), the gravitational acceleration from
              &#x03C1;<sub>crit</sub> over a Hubble-scale volume defines the threshold where dynamics
              change. The 2&#x03C0; factor arises from the spherical geometry of the causal horizon.
            </p>
          </div>

          <div className="card">
            <h3>Step 3: The Result</h3>
            <EquationDisplay size="sm">
              a&#x2080; = cH&#x2080; / (2&#x03C0;)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Plugging in H&#x2080; = 67.4 km/s/Mpc and c = 3 &times; 10<sup>8</sup> m/s
              gives 1.04 &times; 10<sup>&minus;10</sup> m/s&sup2;.
              Milgrom&apos;s observed value: 1.20 &times; 10<sup>&minus;10</sup>.
              Error: ~13%. (Corrected 2026-07-22: the 1.08 / &ldquo;~10%&rdquo; previously
              shown here belongs to H&#x2080; = 70, not the 67.4 stated in this very step.)
            </p>
          </div>
        </div>

        <h2>Comparison</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3>MOND (Milgrom 1983)</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>a&#x2080; is a <strong>fundamental constant</strong></li>
              <li>Value determined empirically from galaxy fits</li>
              <li>No explanation for why a&#x2080; &#x2248; cH&#x2080;</li>
              <li>Extremely successful at fitting rotation curves</li>
            </ul>
          </div>
          <div className="card">
            <h3>Synchronism</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>a&#x2080; is an <strong>emergent scale</strong></li>
              <li>Value from dimensional analysis of H&#x2080; and c (shared with other frameworks)</li>
              <li>Uses the standard McGaugh et al. (2016) RAR interpolating function</li>
              <li>Predicts a weaker EFE (~0.3&ndash;0.4&times; MOND) as a distinguishing feature</li>
            </ul>
          </div>
        </div>

        <h2>The External Field Effect</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The nonlinear Poisson equation that implements the coherence function produces an
          External Field Effect (EFE) &mdash; a subsystem&apos;s internal dynamics are influenced
          by the external gravitational field it sits in. This contradicts earlier claims in the
          research archive (Sessions #212, #215) that Synchronism has &ldquo;no EFE.&rdquo;
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Perturbative analysis shows the Synchronism EFE is approximately <strong>0.3&ndash;0.4&times;
          the strength of MOND&apos;s EFE</strong>, with a maximum anisotropy of ~17% at g<sub>ext</sub> ~
          0.4 a&#x2080;. This is a concrete, testable prediction that distinguishes
          Synchronism from both MOND (stronger EFE) and CDM (no EFE).
        </p>
        <div className="card" style={{ marginTop: '1rem', borderLeft: '3px solid #38bdf8' }}>
          <h3 style={{ color: '#38bdf8' }}>Tidal Dwarf Galaxy Test</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            For a 10<sup>7</sup> M&#x2609; TDG at g<sub>ext</sub> = 1.0 a&#x2080;,
            Synchronism predicts &#x03C3; ~ 10.5&ndash;14.5 km/s while MOND predicts &#x03C3; ~
            10.9&ndash;40.9 km/s. Observable with the NGC 5291 system (Bournaud et al. 2007, Lelli et al. 2015).
          </p>
          <ValidationBadge status="untested" label="Can only tie or refute — see caveat" />
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>Correction (2026-08-01):</strong> this is not an independent novel prediction. Three
            problems, on the site&apos;s own numbers elsewhere: (1) <strong>the intervals are nested</strong> &mdash;
            [10.5, 14.5] sits almost entirely inside MOND&apos;s [10.9, 40.9]. Only &#x03C3; &gt; 14.5 discriminates,
            and that outcome falsifies Synchronism while leaving MOND untouched &mdash; this is the site&apos;s own
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}> nested-submodel argument</Link>{' '}
            showing up as a concrete interval. (2) <strong>The lever generating it is already dead:</strong> the
            weaker EFE is a consequence of the bounded boost B &#8804; 1/&#x03A9;<sub>m</sub> &#8776; 3.17, and that
            boost ceiling is exactly what TEST-09 and TEST-10 fire on in{' '}
            <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>. (3) The
            0.3&ndash;0.4&times; factor is read off the same RAR fit that converges to MOND&apos;s simple-&#x03BC;
            function (see <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy
            Rotation</Link>), so it is not independent of that fit. This card is kept for the record; it should
            not be read as a standing discriminating prediction, consistent with{' '}
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>{' '}
            and <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link> both
            stating zero discriminating tests remain.
          </p>
        </div>

        <h2>Sessions and History</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Derived in Sessions #87&ndash;88 of the autonomous research program. The derivation was
          independently stress-tested in Session #91, where the same result was obtained from
          a different starting point (via{' '}
          <Link href="/freemans-law" style={{ color: 'var(--color-accent-blue)' }}>Freeman&apos;s Law</Link>).
          Both derivations agree, providing internal consistency.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/freemans-law" className="btn-primary">
            Next: Freeman&apos;s Law &rarr;
          </Link>
          <Link href="/mond-comparator" className="btn-secondary">
            Try It: MOND Comparator
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/mond-unification" />
    </>
  );
}
