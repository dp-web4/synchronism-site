'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function DarkMatter() {
  return (
    <>
      <Breadcrumbs currentPath="/dark-matter" />
      <h1>Dark Matter Reframed</h1>
      <ValidationBadge status="speculative" label="Alternative Framework" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          &ldquo;Dark matter&rdquo; is one of the most loaded terms in physics. It conjures images of
          invisible particles drifting through galaxies, unseen but gravitationally felt. Synchronism
          offers a different framing: what if there is no missing matter &mdash; only matter that
          doesn&apos;t participate in electromagnetic interactions?
        </p>

        <h2>The Reframing</h2>
        <p>
          In standard cosmology, roughly 27% of the universe&apos;s energy content is &ldquo;dark matter&rdquo;
          &mdash; something that interacts gravitationally but not electromagnetically. Decades of
          direct detection experiments (LUX, XENON, PandaX) have found nothing. Collider searches at
          the LHC have found nothing. Indirect detection remains ambiguous.
        </p>
        <p>
          Synchronism reframes the question: instead of asking &ldquo;what is the invisible stuff?&rdquo;
          it asks &ldquo;why do some patterns interact only through gravity?&rdquo;
        </p>

        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>Standard View</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Unknown particles with mass but no electromagnetic charge. We detect them only through
              gravitational effects on visible matter. The particle identity is the central mystery.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Synchronism View</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Patterns interacting <strong>indifferently</strong> &mdash; gravity only, no EM coupling.
              The coherence function determines which interaction channels are active at a given density.
              Not missing matter, but matter in a different coherence regime.
            </p>
          </div>
        </div>

        <h2>The Galaxy Rotation Anomaly</h2>
        <p>
          The strongest evidence for dark matter comes from galaxy rotation curves: stars at the edges
          of galaxies orbit faster than Newtonian gravity predicts from visible mass alone. The standard
          fix is to add a halo of invisible matter. But there&apos;s another possibility.
        </p>
        <p>
          At the low accelerations found in galactic outskirts (below ~10<sup>&minus;10</sup> m/s&sup2;),
          gravity itself may work differently. This is not a new idea &mdash; Milgrom proposed it in 1983
          as <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>MOND</Link>.
          What Synchronism adds is a mechanism: the coherence function predicts where and why the
          transition occurs.
        </p>

        <EquationDisplay size="sm" label="The MOND acceleration scale emerges from cosmology">
          a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.08 &times; 10<sup>&minus;10</sup> m/s&sup2;
        </EquationDisplay>

        <h2>What This Means</h2>
        <p>
          If Synchronism is correct, dark matter particles may not exist. The gravitational anomalies
          attributed to dark matter would instead arise from the coherence structure of spacetime at
          low accelerations. This is testable: Synchronism makes different predictions than particle
          dark matter for <Link href="/wide-binaries" style={{ color: 'var(--color-accent-blue)' }}>wide binary stars</Link>,{' '}
          <Link href="/rar-scatter" style={{ color: 'var(--color-accent-blue)' }}>RAR scatter</Link>, and{' '}
          <Link href="/cosmology-predictions" style={{ color: 'var(--color-accent-blue)' }}>BAO modulation</Link>.
        </p>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is speculative. Particle dark matter (CDM) explains a vast range of cosmological
          observations that Synchronism has not addressed:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li><strong>Galaxy clusters:</strong> The Bullet Cluster shows a lensing-baryon offset that
            requires either dark matter or a gravity modification reproducing the same offset. MOND fails
            here; Synchronism has no answer yet.</li>
          <li><strong>CMB acoustic peaks:</strong> The relative heights of the CMB power spectrum peaks
            are precisely fit by CDM. Any dark-matter-free framework must reproduce these ratios.</li>
          <li><strong>Large-scale structure:</strong> The matter power spectrum and BAO measurements
            tightly constrain the dark matter fraction. Synchronism has not been confronted with this data.</li>
          <li><strong>Gravitational lensing:</strong> Strong and weak lensing surveys map dark matter
            distributions independently of dynamics. These maps must be explained.</li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Synchronism has been tested against galaxy rotation curves (14,760 galaxies) but has not yet
          been confronted with the full cosmological dataset. Until it addresses galaxy clusters, the CMB,
          and large-scale structure, it remains incomplete as a dark matter alternative.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/galaxy-rotation" className="btn-primary">
            Next: Galaxy Rotation Curves &rarr;
          </Link>
          <Link href="/mond-unification" className="btn-secondary">
            MOND Unification &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/dark-matter" />
    </>
  );
}
