'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CriticalDensity() {
  return (
    <>
      <Breadcrumbs currentPath="/critical-density" />
      <h1>&#x03C1;<sub>crit</sub>: the Reference Density (Saturation Knee)</h1>
      <ValidationBadge status="audited-negative" label="A-from-Jeans | scale-dependent, not derived" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay label="Galactic reference density from rotation velocity">
          &#x03C1;<sub>crit</sub> = A &times; V<sub>flat</sub>&sup2;
        </EquationDisplay>

        <p>
          &#x03C1;<sub>crit</sub> is the density scale at which C(&#x03C1;) = tanh(&#x03B3; ln(1 + &#x03C1;/&#x03C1;<sub>crit</sub>))
          bends from its low-density ramp (C &#x2248; &#x03B3;&#x03C1;/&#x03C1;<sub>crit</sub>) into saturation (C &rarr; 1).
          It is a <strong>saturation knee</strong>, a reference scale, <strong>not a critical point</strong>: the function is
          smooth and nothing transitions there. At &#x03B3; = 2, C(&#x03C1;<sub>crit</sub>) = tanh(2 ln 2) = 0.88, and the midpoint
          C = &frac12; sits at &#x03C1; &#x2248; 0.32&#x03C1;<sub>crit</sub>. The &ldquo;crit&rdquo; subscript is kept only because every
          script and ledger row since Session 53 uses it (see the{' '}
          <Link href="/glossary#%CF%81_crit" style={{ color: 'var(--color-accent-blue)' }}>glossary entry</Link>).
        </p>
        <p>
          C runs from <strong>uncorrelated (C &rarr; 0)</strong> to <strong>collective (C &rarr; 1)</strong>. It is
          <strong> not</strong> a quantum-degeneracy parameter. Earlier versions of this page said C runs &ldquo;from quantum
          (C &rarr; 0) to classical (C &rarr; 1)&rdquo; as density rises. That is backwards physics: quantum degeneracy sets in at
          <em> high</em> phase-space density (n&#x03BB;<sub>dB</sub>&sup3; &#x2273; 1), and a dilute gas is the classical limit.
          The same labelling is why the most collective quantum states (superconductors, condensates) come out at the
          &ldquo;wrong&rdquo; end of the &#x03B3; formula; see{' '}
          <Link href="/gamma-regimes" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; regimes</Link>.
        </p>
        <p>
          In the galaxy sector &#x03C1;<sub>crit</sub> is <strong>per-system</strong>, not a universal constant:
          V<sub>flat</sub> is the observed flat rotation velocity of each specific system, so each galaxy (or other
          gravitationally bound object) has its own &#x03C1;<sub>crit</sub>. A is the proportionality constant; V<sub>flat</sub>
          enters as an input. The rotation-curve fit is not zero-parameter — it requires an observed V<sub>flat</sub> per galaxy.
          Other sectors use different knees altogether; see{' '}
          <a href="#one-symbol-several-knees" style={{ color: 'var(--color-accent-blue)' }}>one symbol, several knees</a> below.
        </p>

        <h2>The A Parameter</h2>
        <EquationDisplay size="sm" label="Stated formula (Session #66) — see correction below">
          A = 4&#x03C0; / (&#x03B2;<sub>J</sub>&sup2; G R&#x2080;&sup2;)
        </EquationDisplay>
        <p>
          A is <em>calibrated</em> against the Jeans criterion (Session 53), not derived from it:
          &#x03B2;<sub>J</sub> = &#x03BB;<sub>Jeans</sub> / R<sub>half</sub> is the dimensionless
          Jeans-length-to-galaxy-size ratio, empirically &#x03B2;<sub>J</sub> &#x2248; 1.1 &#x00B1; 0.2 across
          SPARC galaxies. <strong>A carries density units:</strong> since &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2;
          with &#x03C1; in M<sub>&#x2609;</sub> pc<sup>&minus;3</sup>, A is in
          M<sub>&#x2609;</sub> pc<sup>&minus;3</sup> (km/s)<sup>&minus;2</sup> — not (km/s)<sup>&minus;2</sup>.
          Earlier versions of this page dropped the density dimensions, which is exactly where a large
          numerical discrepancy can hide unnoticed.
        </p>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1rem', padding: '0.75rem 1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>
            <strong>Correction (2026-08-05) — this page previously claimed &ldquo;5% agreement&rdquo; under a
            &ldquo;Validated&rdquo; badge.</strong> It asserted that the formula above yields A &#x2248; 0.029
            against an empirical 0.028. It does not. With &#x03B2;<sub>J</sub> = 1 and R<sub>0</sub> = 8 kpc the
            stated formula yields <strong>A &#x2248; 4.6&times;10<sup>&minus;5</sup></strong> — the value{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</Link>{' '}
            has marked <strong>audited-negative</strong> since 2026-06-07, and 635&times; smaller than the 0.029
            used in every galaxy computation on this site. This page was a fossil contradicting its own linked
            prerequisite; it was caught by an outside reader recomputing the integral, not by the badge system.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong>What the 644&times; actually is (2026-08-05, revised same day).</strong> The archive bridges
            the two numbers with an unexplained &ldquo;644&times; unit conversion.&rdquo; It is not a unit
            conversion, and it is <em>not</em> a new quantity: the 644&times; was already decomposed on
            2026-06-07. A depends only on the <strong>product</strong> &#x03B2;<sub>J</sub>&middot;R<sub>0</sub>,
            and <code>Session687_A_From_Jeans_Arithmetic_Audit.md</code> &sect;1.2 records Session 66&apos;s own
            factorization: &#x03B2;<sub>J</sub> = 4.5, R<sub>0</sub> = 0.07 kpc &mdash; product 0.315 kpc, within
            <strong> 0.8%</strong> of the &ldquo;317 pc&rdquo; that setting &#x03B2;<sub>J</sub> = 1 produces.
            Forcing &#x03B2;<sub>J</sub> = 1 simply relabels that product as a length; matching it to the{' '}
            <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>galaxy plotter</Link>&apos;s
            pinned h = 300 pc is a 5% coincidence.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
            <strong>Retracted (2026-08-05, same day): &ldquo;A is a proxy for a coarse-graining length
            &#x2113;.&rdquo;</strong> That reading was published here for a few hours and is withdrawn. A quantity
            that appears in a formula only as a <em>product</em> cannot be inverted into one of its factors
            without an independent measurement of the other &mdash; and the inversion contradicted this page&apos;s
            own calibration. <strong>The two residual questions are not about an unspecified length:</strong>
            (1) why &#x03B2;<sub>J</sub> = 4.5 when the calibration above gives 1.1 &plusmn; 0.2 (a
            <strong> 17&#x03C3;</strong> gap), and (2) why this site&apos;s rendering of the formula carries a
            4&#x03C0; that Session 53&apos;s does not &mdash; 12.57 of the 635.
          </p>
        </div>

        <p>
          <strong>Consequence &mdash; the knee is unreachable, and no length choice rescues it.</strong> If
          &#x2113; were a coarse-graining length it would have to smooth &#x03C1; and &#x03C1;<sub>crit</sub>
          alike &mdash; that is what a coarse-graining length <em>is</em>. Doing both, <strong>&#x2113;
          cancels</strong>:
        </p>
        <div style={{ textAlign: 'center', margin: '0.75rem 0', fontSize: '1rem', color: 'var(--color-text-primary)' }}>
          x(&#x2113;) = &#x03C1;/&#x03C1;<sub>crit</sub> = (3/16&#x03C0;&sup2;)&middot;&#x03B2;<sub>J</sub>&sup2;&middot;[V<sub>c</sub>(&#x2113;)/V<sub>flat</sub>]&sup2;
          = 0.0190&middot;&#x03B2;<sub>J</sub>&sup2;&middot;[V<sub>c</sub>/V<sub>flat</sub>]&sup2;
        </div>
        <p>
          <strong>x is a virial ratio.</strong> For any bound system V<sub>c</sub> &#x2272; V<sub>flat</sub>, so
          x &#x2272; 0.019&#x03B2;<sub>J</sub>&sup2; &#x2248; <strong>0.02 in every sector at every
          &#x2113;</strong> &mdash; the knee is out of reach by roughly 40&times; for free, with no fitted
          parameter. Verified numerically on all five plotter disks (max over &#x2113;:
          1.7&times;10<sup>&minus;3</sup> to 1.1&times;10<sup>&minus;2</sup>, computed 2026-08-05 on the plotter&apos;s earlier rows; on 2026-10-26 the plotter switched to real SPARC rows, including a corrected UGC 128, and this range has not been recomputed; the 0.019&#x03B2;<sub>J</sub>&sup2; bound does not depend on it) and to four digits at Cassini and
          wide-binary scales. It is kernel-robust: a Gaussian kernel gives coefficient 0.00505, moving the ceiling
          <em> down</em> a further 3.8&times;. This is the only galaxy-sector statement on this site that requires
          <strong> no estimator choice, no velocity definition, and no contested external measurement.</strong>
          The single escape found is &#x03B2;<sub>J</sub> = 4.5, which lifts the self-consistent x to 0.385
          (C = 0.57) &mdash; at 17&#x03C3; from this page&apos;s own calibration. <strong>No refutation is added
          to the ledger from this</strong> (it remains at 6): it closes a question rather than opening one.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
          At the site&apos;s working A = 0.029, NGC 3198 gives
          &#x03C1;/&#x03C1;<sub>crit</sub> = 9.45&times;10<sup>&minus;4</sup> &mdash; recomputed from the{' '}
          <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>plotter</Link>&apos;s own{' '}
          <code>midplaneDensity()</code> (&#x03C1;(0) = 0.6164 M<sub>&#x2609;</sub> pc<sup>&minus;3</sup>), so it
          can be re-run. Values of 0.934, 1.43&times;10<sup>&minus;3</sup> and 0.91 briefly shown here on
          2026-08-05 were high by a factor of 1.515 and are corrected.
        </p>

        <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem' }}>
          <strong>Symbol note:</strong> this page previously wrote the Jeans ratio as &#x03B1;, which forced a
          paragraph disclaiming confusion with the fine-structure constant. It is now
          &#x03B2;<sub>J</sub> throughout, matching{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>
            parameter derivations
          </Link>; the disclaimer is no longer needed.
        </p>

        <h2>Physical Meaning (as proposed)</h2>
        <p>
          Every gravitationally bound system has a characteristic rotation velocity V<sub>flat</sub> &mdash;
          the velocity at which its rotation curve flattens. This velocity encodes the total mass
          and size of the system. The original motivation (Session 53) was a Jeans-type argument: put the knee
          where a system&apos;s self-gravity becomes strong enough to bind it as one unit. That argument
          calibrates A; it does not derive it (see the correction above).
        </p>
        <p>
          Below &#x03C1;<sub>crit</sub>, C is small and the proposed boost is large (1/C in the division reading).
          Above it, C saturates toward 1 and gravity is Newtonian. Nothing about quantum versus classical
          behaviour enters: this is a statement about how strongly matter is proposed to act as one collective
          unit, not about degeneracy.
        </p>

        <h2 id="one-symbol-several-knees">One symbol, several knees</h2>
        <p>
          The symbol &#x03C1;<sub>crit</sub> names at least six different objects across the site and archive. They span
          more than ten orders of magnitude. All values are in M<sub>&#x2609;</sub>/pc&sup3;, at V = 200 km/s where V enters
          (explorer finding 2026-10-24, arithmetic on knees the site already prints; not a pre-registered test):
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--color-dark-border)' }}>
                <th style={{ padding: '0.3rem' }}>Knee</th>
                <th style={{ padding: '0.3rem' }}>Value</th>
                <th style={{ padding: '0.3rem' }}>Scales as</th>
                <th style={{ padding: '0.3rem' }}>Status</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--color-text-secondary)' }}>
              <tr><td style={{ padding: '0.3rem' }}>A&middot;V&sup2;, A = 0.029 (site-wide working value)</td><td>1,160</td><td>V<sup>+2</sup></td><td>asserted; 0.029 was derived for a V<sup>0.5</sup> law</td></tr>
              <tr><td style={{ padding: '0.3rem' }}>A&middot;V&sup2;, A = 4.6&times;10<sup>&minus;5</sup> (stated formula)</td><td>1.8</td><td>V<sup>+2</sup></td><td>formula-consistent; never adopted</td></tr>
              <tr><td style={{ padding: '0.3rem' }}>A&middot;V<sup>0.5</sup> (Session 53)</td><td>per galaxy</td><td>V<sup>0.5</sup></td><td>archive only</td></tr>
              <tr><td style={{ padding: '0.3rem' }}>Jeans-construction knee, measured on SPARC</td><td>0.161 (median)</td><td>V<sup>&minus;0.16 &plusmn; 0.19</sup></td><td>measured (velocity-blind)</td></tr>
              <tr><td style={{ padding: '0.3rem' }}>Knee that tracks MOND&apos;s a&#x2080;, a&#x2080;&sup2;/(4&#x03C0;GV&sup2;)</td><td>6.3&times;10<sup>&minus;3</sup></td><td>V<sup>&minus;2</sup></td><td>what matching MOND requires; not asserted</td></tr>
              <tr><td style={{ padding: '0.3rem' }}>Cosmological knee (dark-energy sector)</td><td><strong>4.3&times;10<sup>&minus;8</sup></strong> = &#x03C1;<sub>&#x039B;</sub>/2</td><td>none</td><td>calibrated so that C&#x2080; = &#x03A9;<sub>m</sub>; &#x039B; renamed</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>No single knee serves both galaxies and cosmology.</strong> The galactic knees sit 6.6 to 10.4 orders of
          magnitude above the cosmological one. Put the cosmological knee into a galaxy and C = 1 at every disc density, so
          gravity is Newtonian and there is no boost. Put a galactic knee into the Friedmann equation and the late-time dark
          energy comes out 3.7&times;10<sup>6</sup> to 2.7&times;10<sup>10</sup> times &#x03C1;<sub>&#x039B;</sub>. Both fail by
          more than six orders of magnitude.
        </p>
        <p>
          The one cross-sector link on file is MOND&apos;s a&#x2080; &#x2248; cH&#x2080;/2&#x03C0;. Written as a density it becomes
          &#x03C1;<sub>knee</sub>(V) = (c/2&#x03C0;V)&sup2;&middot;(2/3)&#x03C1;<sub>c0</sub>, which scales as V<sup>&minus;2</sup>. That is
          an <em>acceleration</em> identification (Milgrom&apos;s), not a density knee. The framework asserts V<sup>+2</sup> and the
          measured knee is velocity-blind, so neither carries it. So &ldquo;one equation&rdquo; means one functional form with a
          knee calibrated separately in each sector.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>
          <strong>Open question (untested, not refuted):</strong> is there a rule that <em>predicts</em> each sector&apos;s knee
          without fitting? For example, put the knee wherever the sector&apos;s characteristic acceleration equals a&#x2080;. Such a
          rule would have to land both 4&times;10<sup>&minus;8</sup> (cosmos) and the SPARC knee. Nobody has proposed one. If one
          exists, the unifying object is a&#x2080;, not &#x03C1;<sub>crit</sub>.
        </p>

        <h2>Connection to MOND</h2>
        <p>
          From &#x03C1;<sub>crit</sub> = A &times; V<sub>flat</sub>&sup2; and the coherence function,
          two cosmological results emerge:
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>MOND&apos;s a&#x2080;</h3>
            <EquationDisplay size="sm">
              a&#x2080; = cH&#x2080;/(2&#x03C0;)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              13% error vs Milgrom&apos;s value (at site-standard H&#x2080; = 67.4)
            </p>
            <ValidationBadge status="reparametrization" label="dimensional bookkeeping — prior art" />
          </div>
          <div className="card">
            <h3>Freeman&apos;s &#x03A3;&#x2080;</h3>
            <EquationDisplay size="sm">
              &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#8776;4% error vs Freeman&apos;s value (corrected 2026-07-09; not independent of a&#x2080;&apos;s &#8776;13% gap
              — &#x03A3;&#x2080; = a&#x2080;/2&#x03C0;G is the <em>same number</em>, not a second success)
            </p>
            <ValidationBadge status="reparametrization" label="same number as a&#x2080;" />
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/parameter-derivations" className="btn-primary">
            Next: All Parameter Derivations &rarr;
          </Link>
          <Link href="/mond-unification" className="btn-secondary">
            Relation to MOND &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/critical-density" />
    </>
  );
}
