'use client';

import Link from 'next/link';
import PathNextButtons from '@/components/PathNextButtons';
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
        replace the invisible extra mass called dark matter. Tested on real galaxies, it failed both ways it was written. In the version the
        registered tests used (floored at the cosmic matter fraction), the boost is capped at about 3&times;, while galaxy
        edges need up to 14&times;. Without the floor, the density curve&apos;s boost has no cap and lands in the wrong
        places (it loses to the acceleration-keyed version by &#x0394;BIC +2843 counting each of 2,438 data points as independent; it still loses decisively with each of the 122 galaxies counted once, details below). That is why the badge below reads Failed.
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
          offers two different framings, and they are not compatible. Story 1: dark matter is real matter
          (patterns) that couples to ours through gravity only. Story 2: there is no missing matter, and gravity&apos;s
          strength depends on coherence. This page tests story 2. Which one the framework keeps is an open decision.
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
            <h3 style={{ color: '#38bdf8' }}>Standard View (particle dark matter)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Unknown particles with mass but no electromagnetic charge. We detect them only through
              gravitational effects on visible matter. The particle identity is the central mystery.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Synchronism, two stories</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Story 1 (the research summary&apos;s):</strong> patterns interacting <strong>indifferently</strong>
              &mdash; gravity only, no EM coupling. That is the standard view in different words: it renames what dark matter
              is, not whether it is there, and it predicts what cold dark matter predicts.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Story 2 (this page&apos;s test):</strong> no unseen mass; the coherence curve boosts gravity where
              matter is sparse. That is modified gravity, MOND&apos;s class. It failed on galaxies (below).
            </p>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
          <em>(Revised 2026-10-19. The card used to call story 1 &ldquo;not missing matter, but matter in a different
          coherence regime&rdquo; and set it against the standard view; a simulated-visitor graduate persona pointed out
          that matter with gravity and no EM coupling <strong>is</strong> the standard view. The research ledger records
          the same fork from the cosmology side: the framework&apos;s dark-energy sector only works with cold dark matter
          put in by hand (2026-09-22), which suits story 1 and not story 2. Choosing between them is gated on the project
          lead.)</em>
        </p>

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
          Could Synchronism add a mechanism, something that says <em>where and why</em> the transition
          happens? That was the proposal. The answer so far is no. The galaxy fits that work use a coherence
          function keyed on acceleration, which is MOND&apos;s own interpolating function in new notation, and the
          transition scale is fitted, not predicted.
        </p>

        <EquationDisplay size="sm" label="Could the transition scale come from cosmology? A known coincidence, not a prediction">
          a&#x2080; &#x2248; cH&#x2080;/(2&#x03C0;) &#x2248; 1.04 &times; 10<sup>&minus;10</sup> m/s&sup2;
        </EquationDisplay>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          cH&#x2080; is the only acceleration cosmology offers, and a&#x2080; &#x2248; cH&#x2080;/2&#x03C0; has been
          noticed since 1983 (Milgrom). It sits 13% below the conventional 1.2&times;10<sup>&minus;10</sup> m/s&sup2;.
          The density-keyed coherence function C(&#x03C1;) contains no a&#x2080; at all, so this number is
          dimensional bookkeeping, not something the framework derives.
        </p>
        <details style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 1rem' }}>
          <summary>Revision notes (history; not the current claim)</summary>
          Until 2026-10-16 this section said &ldquo;the coherence function predicts where and why the transition
          occurs&rdquo; and labelled the equation &ldquo;The MOND acceleration scale emerges from cosmology&rdquo;, while the
          page&apos;s own Related Concepts box called a&#x2080; &#x2248; cH&#x2080;/2&#x03C0; a 1983 coincidence. Flagged by a
          simulated-visitor graduate-physics persona, 2026-10-16.
        </details>

        <h2>What This Means</h2>
        <p>
          If Synchronism were correct, dark matter particles might not exist. The gravitational anomalies
          attributed to dark matter would instead arise from the coherence structure of spacetime at
          low accelerations. Three predictions were proposed to tell this apart from particle dark matter.
          None of them currently does:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li><strong><Link href="/wide-binaries" style={{ color: 'var(--color-accent-blue)' }}>Wide binary stars</Link> &mdash;
            depends on an unfixed knee.</strong> The predicted signal depends on where the density knee &rho;<sub>crit</sub> sits.
            At the framework&apos;s published calibration, the density law predicts a boost of order 10<sup>4</sup> in the
            solar neighbourhood, which the Oort limit and Solar-System ephemerides already rule out. The small
            0.05&ndash;0.4% signal usually quoted needs a knee that nothing else in the framework uses. Whether to book this
            as an executed exclusion is a ledger decision for the project steward; the refutation count is unchanged
            (see <Link href="/tier-1-existing#TEST-02" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 TEST-02</Link>).</li>
          <li><strong><Link href="/rar-scatter" style={{ color: 'var(--color-accent-blue)' }}>RAR scatter</Link> &mdash;
            refuted.</strong> The registered claim was that environment explains more than 20% of the RAR scatter. When run
            on 141 SPARC galaxies against Cosmicflows-4 density, it gave r&sup2; = 0.0001
            (<Link href="/tier-1-existing#TEST-03" style={{ color: 'var(--color-accent-blue)' }}>TEST-03s</Link>).</li>
          <li><strong><Link href="/bao-coherence-modulation" style={{ color: 'var(--color-accent-blue)' }}>BAO modulation</Link> &mdash;
            withdrawn (TEST-04).</strong> The framework&apos;s own DESI forecast has BAO matching &Lambda;CDM. No session
            derives the proposed amplitude, and that amplitude is 600&times; smaller than the environment-dependent
            BAO shifts standard cosmology already measures.</li>
        </ul>
        <details style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
          <summary style={{ cursor: 'pointer' }}>Revision note</summary>
          This paragraph used to say &ldquo;This is testable: Synchronism makes different predictions than particle dark
          matter for wide binary stars, RAR scatter, and BAO modulation.&rdquo; That was stale: one of the three had been
          refuted, one withdrawn, and the third depends on a knee the framework never fixed.
        </details>

        <div id="screening" className="card" style={{ scrollMarginTop: '5rem', borderLeft: '3px solid var(--color-accent-blue)', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0 }}>Relation to screened modified gravity, and the vacuum-chamber question</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The density-keyed law g = g<sub>N</sub>/C(&#x03C1;) (Newtonian where matter is dense, enhanced where it is sparse) has the
            phenomenology of <strong>screened modified gravity</strong>: chameleons, symmetrons, Vainshtein
            (<Link href="/glossary#screened-modified-gravity" style={{ color: 'var(--color-accent-blue)' }}>glossary</Link>). The
            detailed comparison is on{' '}
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>: a symmetron does
            reproduce the rotation-curve relation (Burrage, Copeland &amp; Millington 2017), because its field solves a non-local
            equation; C(&#x03C1;), keyed on the local density, does not.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Q: What does C(&#x03C1;) predict for an atom in a laboratory vacuum chamber?</strong> Screening models are
            tested there (atom interferometry in ultra-high vacuum), so it is a fair question. <strong>Proposed answer:</strong> it
            depends on the length over which &#x03C1; is averaged, which the framework never declared.
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <li><strong>Read pointwise</strong>, even ultra-high vacuum is dense on this scale. Residual gas at 10<sup>&minus;8</sup> Pa is
              about 10<sup>&minus;14</sup> kg/m&sup3;, ~10<sup>5</sup> M&#x2609;/pc&sup3;, which is 10<sup>6</sup>&ndash;10<sup>7</sup> times the galaxy knees on file
              (0.004&ndash;0.16 M&#x2609;/pc&sup3;). So there is no huge boost, only a small excess: at &#x03B3; = 0.489, g in an
              atom gravimeter&apos;s chamber exceeds g in a corner-cube gravimeter&apos;s 10<sup>&minus;4</sup> Pa chamber by
              10<sup>&minus;7</sup> to 4&times;10<sup>&minus;6</sup> depending on the knee. Such instruments are compared at about
              10<sup>&minus;9</sup> g (not re-read here), so that reading fails. At &#x03B3; = 2 the excess is below 10<sup>&minus;15</sup>, invisible.</li>
            <li><strong>But the pointwise reading is already excluded at Solar-System scale.</strong> Read pointwise, the
              Sun&apos;s mass inferred from Earth and from Saturn would differ by order unity, so the averaging length must be at
              least ~30&nbsp;AU (outermost ranged orbit). At that length no laboratory chamber is resolved, and the tabletop test
              says nothing.</li>
            <li><strong>From the other side</strong>, lunar laser ranging (G changing as the Sun moves through the disc) forces the
              length below ~0.1&ndash;0.3&nbsp;pc for every unsaturated knee, while the smooth stellar profiles in the galaxy fits need
              at least ~1&nbsp;pc. So the averaging length has no allowed value.</li>
          </ul>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 0 }}>
            So the question does force the averaging scale to be specified, as the persona who asked it expected, but the
            Solar System gets there before the tabletop does. A thin-shell (chameleon-like) escape would need C to be a field with
            its own equation, which the framework does not have. <ValidationBadge status="audited-negative" label="Audited-Negative — estimate, round inputs" />{' '}
            Script: <code>maintainer/scripts/density_keyed_law_in_a_vacuum_chamber.py</code> (predictions in the header before
            running: 3 of 4 held; the UHV excess at 10<sup>&minus;8</sup> Pa came out ~10&times; below the predicted 10<sup>&minus;5</sup>).
            Planetary and lunar-ranging bounds: research ledger blocks of 2026-09-15 and 2026-09-24. Asked 2026-10-18 by a
            simulated-visitor researcher persona.
          </p>
        </div>

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
          &#x0394;BIC=+184 with &#x03B3;=2 pinned (with the 2,807 points treated as independent; scored by galaxy, 2026-09-29, the margin is ΔBIC ≈ +11, 1.6–2.2σ: disfavoured at the threshold, not decisive) &mdash; <em>target
          corrected 2026-09-08:</em> that number refutes the <strong>acceleration-keyed</strong> realization the fit actually
          ran, not the density-keyed C(&#x03C1;) this page describes; the density-keyed law loses <em>harder</em>, head-to-head
          on SPARC at &#x0394;BIC +2843 with &#x03B3; free (a point-count figure; with each galaxy as the unit it holds: galaxy-block bootstrap 95% [2178, 3590] with both laws refit, N<sub>eff</sub> ≈ 140, C(&#x03C1;) worse in 105 of 122 galaxies; ΔBIC scaled by the measured N<sub>eff</sub>/N is about +163 (scaled by the galaxy count instead, +142). The formula: both laws fit the same number of parameters, so ΔBIC is the likelihood term alone and scales linearly with N; this comparison uses N = 2,438 points in 122 galaxies (not the 2,807 points of the +184 comparison), so 2843 &times; 140/2438 = 163 and 2843 &times; 122/2438 = 142. (Added 2026-10-24: a researcher simulated-visitor persona divided by 2,807 and read the labels as swapped.) Until 2026-10-18 this read &ldquo;discounted ~20×&rdquo; with no measurement behind it; the 20× turned out to be N/N<sub>gal</sub>, and the measured variance inflation N/N<sub>eff</sub> is 17×, so the +142 is the cruder of the two. Script: <code>maintainer/scripts/dbic2843_galaxy_level.py</code>, pre-registered, 6/6 predictions held), and its floored form is capped by the boost ceiling &mdash; the BTFR slope kill fires at 3.3&#x03C3;, and SPARC&apos;s most
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
          Flagged by two independent simulated-visitor personas.)</em> The warning stands either way: the large number
          is dominated by a test that never ran as registered, so it should not be read as the sample on
          which the mechanism was evaluated. This page
          is not waiting on clusters, the CMB, or large-scale structure to reach a verdict at galaxy scale
          &mdash; that verdict is already in, and it is Failed. What remains open is whether anything about
          the coherence framing survives outside the galaxy sector.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <PathNextButtons currentPath="/dark-matter" />
          <Link href="/mond-unification" className="btn-secondary">
            Relation to MOND &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/dark-matter" />
    </>
  );
}
