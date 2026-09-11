'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function DarkMatter() {
  return (
    <>
      <Breadcrumbs currentPath="/dark-matter" />
      <PathNav currentPath="/dark-matter" />
      <h1>Dark Matter Reframed</h1>
      <p style={{ maxWidth: '65ch', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
        <strong>The idea in plain words:</strong> the same density-to-togetherness curve used everywhere on this site
        (a crowd acts independently; a marching band acts as one) was applied to galaxies. Where matter is sparse,
        the curve says gravity&apos;s effective pull should get a <em>boost</em> &mdash; and that boost was meant to
        replace the invisible extra mass called dark matter. Tested on real galaxies, the boost turned out to be capped
        at about 3&times;, while galaxy edges need up to 14&times;. That is why the badge below reads Failed.
      </p>
      <ValidationBadge status="failed" label="Failed — Mechanism Under Revision" />
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.4rem' }}>
        (Reordered 2026-09-06: the badge stood above the first sentence, so a casual reader met the verdict before the
        idea. The jargon further down &mdash; MOND, BAO, CMB, SPARC &mdash; is defined in the{' '}
        <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>Glossary</Link>.)
      </p>

      <div className="card" style={{ marginTop: '1rem', fontSize: '0.82rem' }}>
        <p style={{ margin: '0 0 0.4rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Acronym key for this page (added 2026-09-08; same pattern as <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>)</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.2rem 0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong>SPARC</strong><span>Spitzer Photometry and Accurate Rotation Curves &mdash; the 175-galaxy rotation-curve database the mechanism was tested on.</span>
          <strong>ALFALFA&ndash;SDSS</strong><span>Two sky surveys (a radio hydrogen survey and an optical survey) cross-matched into a 14,435-galaxy sample; used for the Tully&ndash;Fisher statistics, not for resolved curves.</span>
          <strong>BTFR</strong><span>Baryonic Tully&ndash;Fisher Relation &mdash; a galaxy&apos;s visible mass scales as a power of its flat rotation speed; the slope of that power law is a test.</span>
          <strong>RAR</strong><span>Radial Acceleration Relation &mdash; observed gravity vs the gravity visible matter predicts, point by point in galaxies.</span>
          <strong>&#x0394;BIC</strong><span>Difference in Bayesian Information Criterion &mdash; a fit-quality score that penalizes extra parameters; positive means the compared model fits worse. Above ~10 is decisive.</span>
          <strong>&#x03C3;</strong><span>Standard deviations &mdash; &ldquo;3.3&#x03C3;&rdquo; means the measurement sits 3.3 error bars from the prediction.</span>
          <strong>NFW</strong><span>Navarro&ndash;Frenk&ndash;White &mdash; the standard dark-matter halo density profile from simulations.</span>
          <strong>EFE</strong><span>External Field Effect &mdash; in MOND, a system&apos;s internal gravity depends on the external field it sits in.</span>
          <strong>MOND</strong><span>Modified Newtonian Dynamics &mdash; Milgrom&apos;s 1983 alternative to dark matter.</span>
        </div>
      </div>

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
          a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.04 &times; 10<sup>&minus;10</sup> m/s&sup2;
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
          observations that Synchronism has not addressed. Additionally, stress testing (March 2026)
          found a structural problem with the CFD viscosity interpretation:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li><strong>Viscosity sign error:</strong> The CFD reframing maps coherence C to inverse viscosity
            (C = 1/&mu;<sub>eff</sub>, where &mu;<sub>eff</sub> is an <em>effective dynamic viscosity</em> of the
            Intent fluid &mdash; not MOND&apos;s interpolating function &mu;, which shares the letter and nothing else;
            two different &mu;&apos;s appear on this site and this is the fluid one). In plain terms: the theory says
            galaxies should get <em>more</em> sticky where dark matter is, and they get <em>less</em>. Dark matter should then be HIGH viscosity (less coherent). But the
            Bullet Cluster shows dark matter passes through itself without drag &mdash; it is LESS sticky
            than baryons, not more. High viscosity predicts more interaction, which is the wrong direction.</li>
          <li><strong>Galaxy clusters:</strong> The Bullet Cluster shows a lensing-baryon offset that
            requires either dark matter or a gravity modification reproducing the same offset. MOND fails
            here; Synchronism has no answer yet. <em>(Scale of the failure, added 2026-09-08 at a researcher
            persona&apos;s request: these are MOND&apos;s failures too &mdash; MOND leaves a residual factor ~2 in cluster
            masses and needs extra mass for the Bullet Cluster, Clowe et al. 2006 / Angus et al. 2007. The
            density-keyed version fails by 10⁴–10⁶× on the cluster knee, so the finding is not &ldquo;Synchronism
            fails where MOND works&rdquo; but &ldquo;density keying fails four to six orders of magnitude harder than
            acceleration keying.&rdquo;)</em></li>
          <li><strong>CMB acoustic peaks:</strong> The relative heights of the CMB power spectrum peaks
            are precisely fit by CDM. Any dark-matter-free framework must reproduce these ratios.</li>
          <li><strong>Large-scale structure:</strong> The matter power spectrum and BAO measurements
            tightly constrain the dark matter fraction. Synchronism has not been confronted with this data.</li>
          <li><strong>Gravitational lensing:</strong> Strong and weak lensing surveys map dark matter
            distributions independently of dynamics. These maps must be explained.</li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Update 2026-08-01 — the galaxy-scale mechanism itself is refuted, not just incomplete:</strong>{' '}
          the coherence function has no algebraic chain to the observed acceleration relation (see{' '}
          <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link>{' '}
          for the locality argument), and on real SPARC data the compander is rejected at
          &#x0394;BIC=+184 with &#x03B3;=2 pinned (conservative &ge;+33 after intra-galaxy correlation) &mdash; <em>target
          corrected 2026-09-08:</em> that number refutes the <strong>acceleration-keyed</strong> realization the fit actually
          ran, not the density-keyed C(&#x03C1;) this page describes; the density-keyed law loses <em>harder</em>, head-to-head
          on SPARC at &#x0394;BIC +2843 with &#x03B3; free, and its floored form is capped by the boost ceiling &mdash; the BTFR slope kill fires at 3.3&#x03C3;, and SPARC&apos;s most
          dark-matter-dominated disc needs a boost of 13.7 against a ceiling of 3.17 (the often-quoted &ldquo;69% of
          galaxies exceed the ceiling&rdquo; holds only under the underived 1/&Omega;<sub>m</sub> normalization; under
          &Omega;<sub>m</sub>/&Omega;<sub>b</sub> &asymp; 6.4 the median passes and the tail exceedance becomes
          mass-to-light-conditional; the floored form itself is written out on{' '}
          <Link href="/coherence-function#how-c-enters-dynamics" style={{ color: 'var(--color-accent-blue)' }}>Coherence Function</Link>) &mdash; see{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>. The one registered
          test of the density law on objects that actually cross its knee (Galactic globular clusters, executed
          2026-09-07) came back a <strong>fork</strong>: a universal &#x03B3; is excluded, the registered per-cluster
          &#x03B3;&nbsp;=&nbsp;2 is marginal &mdash; see{' '}
          <Link href="/honest-assessment#gc-fork" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>. The
          headline galaxy count pools two different measurements: 175 resolved SPARC rotation
          curves (where the mechanism was actually tested and failed) and the ALFALFA&ndash;SDSS
          Tully&ndash;Fisher objects from a registered test (TEST-03) that never ran as registered. The site
          publishes <strong>14,610</strong> (175 + 14,435 after the quality cut); the pre-cut pooling is
          14,760 (175 + 14,585). <em>(This caveat quoted the pre-cut 14,760 as though it were the published
          figure until 2026-09-07; the pooling warning was right, its arithmetic was one revision behind.
          Flagged by two independent visitor personas.)</em> The warning stands either way: the large number
          is dominated by a test that never ran as registered, so it should not be read as the sample on
          which the mechanism was evaluated. This page
          is not waiting on clusters, the CMB, or large-scale structure to reach a verdict at galaxy scale
          &mdash; that verdict is already in, and it is Failed. What remains open is whether anything about
          the coherence framing survives outside the galaxy sector.
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
