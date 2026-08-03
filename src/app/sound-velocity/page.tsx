'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function SoundVelocity() {
  return (
    <>
      <Breadcrumbs currentPath="/sound-velocity" />
      <PathNav currentPath="/sound-velocity" />
      <h1>Sound Velocity</h1>
      <ValidationBadge status="reparametrization" label="r = 0.982 — Circular and Sign-Suspect" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The strongest single correlation in Synchronism&apos;s chemistry work: the speed of sound
          in a material correlates with its coherence parameter at r = 0.982.
        </p>

        <h2>Why This Works</h2>
        <p>
          Sound is a collective excitation &mdash; atoms vibrating in coordination. The speed of
          sound directly reflects how strongly atoms are coupled to their neighbors. This IS what
          &#x03B3; measures: the degree of collective correlation.
        </p>
        <p>
          Materials with high sound velocity (diamond: 12,000 m/s) have strongly correlated atomic
          motion (low &#x03B3;, highly coherent). Materials with low sound velocity (lead: 1,190 m/s)
          have weakly correlated atomic motion (higher &#x03B3;, less coherent).
        </p>

        <h2>What It Tells Us</h2>
        <p>
          This correlation validates the fundamental idea: &#x03B3; = 2/&#x221A;N<sub>corr</sub>
          genuinely captures something physical about collective behavior. When N<sub>corr</sub> is
          large (many atoms moving together), sound travels fast and &#x03B3; is small.
        </p>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginTop: '1.5rem' }}>
          <h3 style={{ color: '#ef4444' }}>Two independent problems with this claim (added 2026-08-03)</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>1. Circularity (explorer finding, 2026-05-06):</strong> the site&apos;s own documented
            N&#x2093;&#x2091;&#x1D63; measurement methodology (Session #26) computes correlation length via the phonon
            coherence length &#x03BB;<sub>ph</sub>&nbsp;=&nbsp;v<sub>s</sub>&middot;&#x03C4;<sub>ph</sub> &mdash;
            which uses sound velocity v<sub>s</sub> as a direct input. Correlating a quantity built from
            v<sub>s</sub> back against v<sub>s</sub> is close to correlating v<sub>s</sub> against itself. No
            method that avoids this input overlap has been shown applied to this dataset.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>2. Wrong sign vs. the governing equation (explorer finding, 2026-07-29):</strong>{' '}
            C(&#x03C1;) is monotone <em>increasing</em> in density for every &#x03B3;,&nbsp;&#x03C1;<sub>crit</sub>&nbsp;&gt;&nbsp;0.
            But sound speed is v&nbsp;=&nbsp;&#x221A;(K/&#x03C1;) &mdash; density sits in the <em>denominator</em>
            by definition. Diamond (&#x03C1;&nbsp;=&nbsp;3.51&nbsp;g/cm&sup3;) is ranked <em>more</em> coherent
            than lead (&#x03C1;&nbsp;=&nbsp;11.34&nbsp;g/cm&sup3;) above &mdash; that ordering is
            anti-monotone in density. Computing Spearman(C(&#x03C1;), sound velocity) directly on 22
            elemental solids gives <strong>&minus;0.32 for every (&#x03B3;, &#x03C1;<sub>crit</sub>) tested</strong>,
            opposite the badged +0.982. The badged number and the framework&apos;s own equation, evaluated on
            real densities, disagree in sign.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Neither problem has been resolved; both survive independent of the other (the sign question stands
            whether or not the correlation is circular). See{' '}
            <Link href="/chemistry-correlation-explorer" style={{ color: 'var(--color-accent-blue)' }}>Chemistry
            Correlation Explorer</Link> and <Link href="/gamma-boundary" style={{ color: 'var(--color-accent-blue)' }}>Gamma
            Boundary</Link> for the same caveats applied to the wider cohort.
          </p>
        </div>

        <h2>Limitation</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The correlation is for elemental solids. Complex materials (alloys, polymers, composites)
          have additional structure that &#x03B3; alone can&apos;t capture. The r = 0.982 applies to
          the periodic table, not to arbitrary materials.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/electronegativity" className="btn-primary">
            Next: Electronegativity &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/sound-velocity" />
    </>
  );
}
