'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function SoundVelocity() {
  return (
    <>
      <Breadcrumbs currentPath="/sound-velocity" />
      <h1>Sound Velocity</h1>
      <ValidationBadge status="validated" label="r = 0.982" />

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
