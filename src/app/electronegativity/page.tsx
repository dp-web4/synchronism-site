'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function Electronegativity() {
  return (
    <>
      <Breadcrumbs currentPath="/electronegativity" />
      <h1>Electronegativity</h1>
      <ValidationBadge status="validated" label="r = 0.979" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Electronegativity &mdash; how strongly an atom attracts electrons in a bond &mdash; correlates
          with the coherence parameter at r = 0.979. This is the second-strongest correlation
          in the chemistry data.
        </p>

        <h2>Why This Works</h2>
        <p>
          Electronegativity measures the strength of electron-atom coupling. High electronegativity
          (fluorine: 3.98) means electrons are tightly bound, highly correlated with the nucleus.
          Low electronegativity (cesium: 0.79) means electrons are loosely held, weakly correlated.
        </p>
        <p>
          This is a direct expression of N<sub>corr</sub>: how many particles (electrons + nucleus)
          are moving as a correlated unit determines both the electronegativity and the &#x03B3; value.
        </p>

        <h2>Connection to Sound Velocity</h2>
        <p>
          Both sound velocity (r = 0.982) and electronegativity (r = 0.979) correlate with &#x03B3;
          for the same reason: they both measure aspects of collective coupling. Sound velocity
          measures atom-atom coupling; electronegativity measures electron-atom coupling. The
          coherence function captures the underlying correlation structure that drives both.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/chemistry-phase-transitions" className="btn-primary">
            Next: Phase Transitions in Chemistry &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/electronegativity" />
    </>
  );
}
