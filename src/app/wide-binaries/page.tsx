'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScriptsNote from '@/components/ScriptsNote';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import { THIRD_PARTY_CLAIM_LABEL } from '@/lib/ledger';
import EquationDisplay from '@/components/EquationDisplay';

export default function WideBinaries() {
  return (
    <>
      <Breadcrumbs currentPath="/wide-binaries" />
      <h1>Wide Binaries</h1>
      <ValidationBadge status="untested" label="Self-Eliminating-or-Tie — density branch identically null in the ratio but not in absolute dynamics (excluded at the archive knee by the vertical Oort/K_z gradient, and by SPARC and LLR), acceleration branch already failed at the SPARC γ via TEST-25; DR3 dispute unresolved" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Wide binary star systems &mdash; two stars orbiting each other at separations of thousands
          of AU &mdash; provide one of the cleanest tests of gravity in the low-acceleration regime.
          Synchronism&apos;s prediction for them depends on which version of its coherence function you use, and for
          the density-keyed version, on a number the framework never fixed. This page sets out the versions and what
          each one predicts.
        </p>

        <h2>Why Wide Binaries?</h2>
        <p>
          At separations greater than ~10<sup>4</sup> AU (roughly 0.05 parsecs), the gravitational
          acceleration between two stars drops below a&#x2080; &#x2248; 1.2 &times; 10<sup>&minus;10</sup>{' '}
          m/s&sup2;. In Newtonian gravity, nothing special happens. In MOND, orbital velocities should
          be higher than Newtonian predictions. The anomaly &mdash; if it exists &mdash; should be
          visible in the orbital dynamics.
        </p>
        <p>
          The beauty of wide binaries is simplicity: two gravitating masses, no dark matter halo
          ambiguity, no complex baryonic physics. It is the closest thing to a clean two-body test
          of modified gravity.
        </p>

        <h2>What MOND predicts</h2>
        <p>
          MOND&apos;s wide-binary prediction depends on location. A binary in the Solar neighbourhood also sits in the
          Milky Way&apos;s own field, about 1.8&nbsp;a&#x2080;. That external field partly suppresses the boost (the External Field
          Effect, EFE). With it, AQUAL and QUMOND predict a 1.0&ndash;1.4&times; boost in gravity at low internal
          acceleration, depending on the treatment. That is up to about +18% in velocity (&radic;1.4 &asymp; 1.18), the ~20%
          signal the Chae vs Banik dispute below is about. Without the EFE the boost would be several times larger: with the
          simple interpolating function at an internal acceleration of 0.1&nbsp;a&#x2080;, about 3.7&times; in gravity, or roughly
          +90% in velocity. (Corrected 2026-09-24: this paragraph used to call the ~18% the no-EFE figure. It is the EFE-included one.)
        </p>

        <h2>Synchronism&apos;s Prediction: Two Versions</h2>
        <div className="card" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ color: 'var(--color-accent-violet)' }}>Acceleration-keyed version (the one that fits galaxies)</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            At its SPARC fit this version is Milgrom&apos;s simple MOND function, so it predicts MOND&apos;s wide-binary boost,
            EFE included. Here the test cannot separate it from MOND. It can only fail both together. And at that fit it has
            already failed: the Cassini Solar-System bound (<Link href="/tier-1-existing#TEST-25" style={{ color: 'var(--color-accent-blue)' }}>TEST-25</Link>)
            tests the same &#x03BD;, the same QUMOND field equation and the same Milky Way external field that make the
            wide-binary boost. Across the compander family the dial &#x03B3; sets both: a &asymp;1.4&ndash;1.5&times; boost maps to
            &#x03B3; &asymp; 0.4&ndash;0.64 and &#x03B3; = 2 predicts 1.05&ndash;1.13&times; (quasi-linear QUMOND, orientation-averaged, 2026-11-06). No
            &#x03B3; passes Cassini once a<sub>0</sub> is taken from SPARC at each &#x03B3; and M/L is held at stellar-population values: it fails at 14.5&ndash;19.3&sigma; from &#x03B3; = 0.3 to 3, and passing would take a disc M/L more than twice that value (<Link href="/tier-1-existing#TEST-25" style={{ color: 'var(--color-accent-blue)' }}>TEST-25</Link>).
          </p>
        </div>
        <div className="card card-highlight" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ color: 'var(--color-accent-violet)' }}>Density-keyed version (the headline equation)</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Here gravity is boosted by 1/C(&#x03C1;), where &#x03C1; is the local density. The boost does not depend on the
            binary&apos;s internal acceleration at all, so wide binaries are not special: whatever boost holds at the local
            density applies to every orbit there. Its size depends on the knee &#x03C1;<sub>crit</sub>. At the solar-neighbourhood
            density &#x03C1; &asymp; 0.09&nbsp;M&#x2609;/pc&sup3; the velocity excess over Newton is as below. These are <em>absolute</em> boosts at the Sun, and no
            local measurement sees an absolute boost: a wide-binary ratio absorbs it into masses calibrated on close binaries (see the red box below), and laboratory G is
            measured at the same smoothed density, so G<sub>lab</sub> already equals G/C(&#x03C1;<sub>s</sub>). What existing data see is how the boost changes with height (Oort/K<sub>z</sub> data),
            how it changes in time (lunar laser ranging), and <strong>the boost itself, read across cosmic time</strong> (Big Bang nucleosynthesis, next paragraph):
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <li><strong>The archive&apos;s own calibration</strong> &#x03C1;<sub>crit</sub> = 0.028&middot;V<sup>0.5</sup> &asymp; 0.42&nbsp;M&#x2609;/pc&sup3;
              (Sessions 52, 62, 64, 65; Milky Way): <strong>+64%</strong> (&#x03B3; = 2) to <strong>+223%</strong> (&#x03B3; = 0.489), a factor 2.7 to 10.5 in g with the unfloored C; with the &Omega;<sub>m</sub> floor (C<sub>f</sub> = &Omega;<sub>m</sub> + (1&minus;&Omega;<sub>m</sub>)C, the form the plotter draws) it is +33% to +62%, a factor 1.8 to 2.6 in g.
              Unfloored, it is excluded through its change with height: the boost grows 18&ndash;44&times; from the midplane to 1.1&nbsp;kpc, so the predicted
              &Sigma;(|z| &lt; 1.1&nbsp;kpc) is &asymp; 900&ndash;1,800&nbsp;M&#x2609;/pc&sup2; against Bovy &amp; Rix&apos;s 68 &plusmn; 4 (&asymp; 10&sigma;). With the &Omega;<sub>m</sub> floor
              it passes at &#x03B3; = 2 and falls 2&ndash;3&sigma; short at &#x03B3; = 0.489 (estimate, maintainer 2026-11-20,{' '}
              <code>maintainer/scripts/oort_vertical_gradient_density_keyed.py</code>; 3 of 4 predictions written before the run held). Until 2026-11-20 this line said the Oort limit
              excludes the amplitude itself, &ldquo;leaving room for a few tens of percent at most&rdquo;; a researcher simulated-visitor persona pointed out that laboratory G carries the same
              amplitude, so it cancels. (Corrected 2026-11-13. This line used to
              quote &ldquo;0.029&middot;V&sup2; = 1.5&times;10&sup3;, +1.8&times;10&#x2074;%, a factor ~3.5&times;10&#x2074; in g&rdquo; as the published calibration.
              That form puts the V<sup>0.5</sup> coefficient on a V&sup2; law, a units slip the explorer traced on 2026-08-27, and no archive fit uses it. Explorer
              2026-11-12, <code>exclusion_table_by_equation.py</code>.) (Planetary
              ephemerides cannot see a boost that is uniform across the Solar System, because it is degenerate with the Sun&apos;s
              GM. They constrain only its variation, so they bite only if density is read pointwise, not smoothed over
              &ge; 30 AU.)</li>
            <li>Measured velocity-blind knee, 0.161&nbsp;M&#x2609;/pc&sup3;: <strong>+116%</strong> (&#x03B3; = 0.489) or +18.6% (&#x03B3; = 2).</li>
            <li>Refracted Gravity&apos;s elliptical-galaxy knee, 0.0083&nbsp;M&#x2609;/pc&sup3;: <strong>+9.4%</strong> (&#x03B3; = 0.489) or +0.005% (&#x03B3; = 2).</li>
            <li>A near-Newtonian 0.05&ndash;0.4% needs a knee between 3.8&times;10&#x207B;&#x2075; and 3.2&times;10&#x207B;&#x2074;&nbsp;M&#x2609;/pc&sup3; (&#x03B3; = 0.489).
              No other page uses a knee in that window, and it starts where the knee range ruled out on SPARC ends.</li>
          </ul>
          <p id="bbn-absolute-boost" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Big Bang nucleosynthesis sees the absolute boost (maintainer 2026-11-22).</strong>{' '}
            The &ldquo;no local measurement&rdquo; argument compares two things measured at one density. Nucleosynthesis compares two densities. In the first
            minutes the density was about 10<sup>18</sup>&nbsp;M&#x2609;/pc&sup3;, far above every knee on this site, so C = 1 there and
            G<sub>BBN</sub> = G<sub>bare</sub>, while G<sub>lab</sub> = G<sub>bare</sub>/C(&#x03C1;<sub>local</sub>). The density-keyed law therefore predicts
            G<sub>BBN</sub>/G<sub>lab</sub> = C(&#x03C1;<sub>local</sub>), which is the absolute boost turned upside down. The light-element abundances measure that
            ratio: G<sub>BBN</sub>/G<sub>0</sub> = 0.99 (+0.06/&minus;0.05) at 2&sigma; (Alvey, Sabti, Escudero &amp; Fairbairn, EPJC 80, 148, 2020,
            arXiv:1910.10730). Against it: the archive knee (0.42) predicts 0.095&ndash;0.57 (0.37&ndash;0.57 for the two &#x03B3; = 2 forms) and is excluded at 17&ndash;36&sigma;; the measured velocity-blind knee
            (0.161) predicts 0.21&ndash;0.80, excluded at 7.5&ndash;31&sigma;; Refracted Gravity&apos;s knee (0.0083) at &#x03B3; = 0.489 predicts 0.84&ndash;0.89, excluded
            at 4&ndash;6&sigma;; at &#x03B3; = 2 that knee is Newtonian and passes. Ranges cover &#x03B3; = 2 and 0.489, floored and unfloored C. This is a third root for the
            amplitude, independent of SPARC, and unlike lunar ranging it needs no assumption about how density varies along the Sun&apos;s path. It excludes
            the floored archive-knee law that the Oort test lets through. <em>Condition:</em> it applies only when density is smoothed over a scale that puts the
            laboratory and the solar neighbourhood at one density, which is the reading these amplitudes use. Read pointwise, lab G sits at Earth&apos;s density
            (C = 1) and this argument says nothing. (<code>maintainer/scripts/bbn_g_ratio_density_keyed.py</code>, predictions committed before the run; 4 of 4
            held. The bound&apos;s 2&sigma; lower half-width is treated as Gaussian. A researcher simulated-visitor persona raised the argument from recall on
            2026-11-22; the numbers here were recomputed and the bound retrieved.)
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The static amplitude is not the only handle: a density-keyed boost changes with time (explorer, 2026-09-23).</strong>{' '}
            Everything in one neighbourhood shares the same boost, so a ratio taken at one instant cancels it. That is why
            TEST-02 reads &ldquo;&#x03B3;<sub>g</sub> &equiv; 1&rdquo; for this version. But the Sun moves through the Galactic
            disc and past nearby stars (&alpha; Cen is closing at 22&nbsp;km/s), so the local density, and with it
            G<sub>eff</sub> = G/C(&#x03C1;), changes <em>now</em>. Lunar laser ranging measures &#x0120;/G = (7.1 &plusmn; 7.6)&times;10&#x207B;&sup1;&#x2074;
            per year (Hofmann &amp; M&uuml;ller 2018). With density smoothed over 1&ndash;10&nbsp;pc, the scale the galaxy fits need,
            the knee grid used on this site predicts 10&#x207B;&#x2078;&ndash;10&#x207B;&#x2075; per year. <strong>68 of 74 laws are
            excluded</strong> at 1 pc (62 at 10 pc) against a bound loosened 13&times;, including all eight near-Newtonian windows of the kind in the last bullet above that the TEST-02 card lists.
            The survivors are laws that are Newtonian to 10&#x207B;&#x2078; at the Sun, so they predict nothing here. The count holds
            under L2 and L3 alike: with the smoothing kernel inside the action the field equation is unchanged (explorer
            2026-10-19, pre-registered <code>edb0108</code>). Pre-registered
            (site commit <code>80b8c9c</code>) before the script existed. This is a second, SPARC-independent root for the
            density-keyed kill, not a new refutation, and it does not touch the acceleration-keyed version. Finding:{' '}
            <code>explorer/findings/density-keyed-C-is-a-moving-G-lunar-laser-ranging-excludes-it-at-pc-smoothing.md</code>.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            Arithmetic: <code>maintainer/scripts/test02_amplitude_is_knee_conditional.py</code> and its output file; details on{' '}
            <Link href="/tier-1-existing#TEST-02" style={{ color: 'var(--color-accent-blue)' }}>Tier 1, TEST-02</Link>.
          </p>
        </div>

        <h2>The Data</h2>
        <p>
          The European Space Agency&apos;s Gaia mission (Data Release 3) provides the necessary
          measurements: positions, proper motions, parallaxes, and radial velocities for over a
          billion stars. From this, wide binary candidates can be identified and their orbital
          dynamics characterized.
          {' '}<a href="https://gea.esac.esa.int/archive/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>Gaia Archive (ESA) &rarr;</a>
        </p>

        <div className="grid-3" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#38bdf8' }}>Gaia DR3</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Free, publicly available data
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>~6 months</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Estimated analysis time
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#22c55e' }}>10<sup>4</sup> AU</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Critical separation threshold
            </div>
          </div>
        </div>

        <h2>What the Density-Keyed Version Leaves Testable</h2>
        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>At the archive&apos;s own calibration (0.028&middot;V<sup>0.5</sup>), the density law is already excluded locally.</strong>{' '}
          No wide-binary sample is needed for that. At the other knees the site uses, the boost at the Sun is
          9&ndash;116%, but <strong>a wide-binary test does not see it</strong>: the boost is the same for wide and close pairs in one
          neighbourhood, and stellar masses come from relations calibrated on close-binary orbits there, so the boost is absorbed into the
          masses and the wide-to-Newton ratio is 1 (TEST-02&apos;s &#x03B3;<sub>g</sub> &equiv; 1). No local measurement sees the absolute boost, because
          laboratory G carries it too. Its change with height is what the vertical Oort (K<sub>z</sub>) data see, its change in time is what lunar laser ranging sees, and the boost
          itself is what Big Bang nucleosynthesis sees, because G then was measured at a density where C = 1 (the box above; height leg added 2026-11-20, nucleosynthesis leg 2026-11-22:
          every knee except Refracted Gravity&apos;s at &#x03B3; = 2 is excluded at 4&sigma; or more, if density is smoothed). (Corrected 2026-11-14.
          This paragraph previously said &ldquo;Gaia can see that; a confirmed Newtonian null would exclude those knees too&rdquo;, which contradicted TEST-02; a researcher
          simulated-visitor persona put the two side by side.) So no wide-binary outcome selects Synchronism: a MOND-scale anomaly favours MOND and gives this framework no support over
          MOND (its acceleration-keyed version is a MOND interpolating function, and the &#x03B3; an anomaly needs is Cassini-excluded), and a Newtonian null favours Newton.
          (Until 2026-11-18 this sentence said an anomaly favours MOND &ldquo;and the acceleration-keyed version equally&rdquo;; the card below already said &ldquo;no support&rdquo;.)
          <p style={{ margin: '0.6rem 0 0' }}>
            <strong>Why isn&apos;t the local exclusion booked as a refutation?</strong> This is not because it is weak. It is
            cleaner than TEST-09&apos;s 3.3&sigma;. It follows from the knee calibration, and the archive&apos;s calibration (0.028&middot;V<sup>0.5</sup>) is
            already excluded on other grounds: its velocity exponent +0.5 is 3.5&sigma; from the measured &minus;0.16 &plusmn; 0.19, and on SPARC
            the law at that calibration loses to the acceleration-keyed version by &Delta;BIC +8,404, worse in 115 of 122 galaxies (explorer
            2026-11-12, pre-registered). The &ldquo;~11&sigma;&rdquo; often quoted here is for a V&sup2; exponent, which is the site&apos;s reading, not the archive&apos;s. The site counts executed tests grouped by root. Whether this becomes its own booked result is
            ledger governance and gates on the project lead.
          </p>
          <details style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note</summary>
            This box was titled &ldquo;Feasibility Kill &mdash; Signal Below Gaia Systematics&rdquo;. It said solar-neighbourhood
            density sits above &#x03C1;<sub>crit</sub>, giving C&nbsp;&asymp;&nbsp;1, a 0.05&ndash;0.4% Newtonian null, and a signal ~80&times;
            below Gaia&apos;s reach. At the units-hybrid calibration (0.029&middot;V&sup2;, then called &ldquo;published&rdquo;) the density sits far below the knee, so C&nbsp;&asymp;&nbsp;3&times;10&#x207B;&#x2075;
            and the boost is maximal (3.17&times; in g with the floor). At the archive&apos;s 0.028&middot;V<sup>0.5</sup> it is the factor 1.8&ndash;2.6 (floored) quoted above. The page also said &ldquo;Standard MOND predicts the same anomaly regardless of where the
            binary system is located&rdquo;, which ignores the External Field Effect. Tier 1 carried the knee-conditional
            correction from 2026-09-10. It reached this page on 2026-09-17, after a researcher simulated-visitor persona found both errors.
          </details>
        </div>

        <h2 id="dr4">Gaia DR4: 2 December 2026</h2>
        <p>
          ESA has set DR4 (66 months of data) for 2 December 2026. A reading key for this framework (a table, written before the data, that turns each possible measured boost into the value of &#x03B3; it would imply) was committed before the data (<code>maintainer/scripts/wb_dr4_reading_key_PREREG.md</code>, 2026-11-06). Whatever DR4 shows, it <strong>cannot raise the novelty count</strong>: every outcome lands on a compander member (the compander is this framework&apos;s acceleration-keyed curve, C = tanh(&#x03B3; ln(1 + g/a<sub>0</sub>&prime;)), which is a MOND interpolating function at every &#x03B3;) that Cassini already excludes unless discs carry over twice their stellar-population M/L. What DR4 decides is MOND&apos;s question: today Chae et al. against Saad &amp; Ting on the same 36 systems, and the earlier large-sample analyses (Banik et al. 2024 and Pittordis &amp; Sutherland, which use the velocity-ratio statistic &#x1E7D;). The key is a dated mapping, not a registered test; adopting it gates on the project lead.
        </p>
        <p id="dr4-decision-status" style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', fontSize: '0.88rem', scrollMarginTop: '5rem' }}>
          <strong style={{ color: '#f59e0b' }}>Decision status, checked 2026-11-26 (6 days before release; first stamped 2026-11-13):</strong> the project lead has neither adopted
          nor rejected the reading key or the analysis plan. The plan should not be adopted as written: run on DR3, it returns
          &ldquo;no result&rdquo; on both samples (explorer 2026-11-09; revisions are in its addendum). The key&apos;s git commit (2026-11-06) and its
          addenda (11-11, 11-12, 11-13) fix it before the data whatever is decided. <strong>Default if nothing is recorded by 2 December:</strong> this
          site will read DR4 analyses against the key as committed and label that reading &ldquo;dated before the data, not adopted&rdquo;.
          That makes it a reading aid dated before the data, not a registration: a registration is decided before the data arrive, and this one has not been. It cannot change the count. A decision, with its date, will replace this paragraph.
          Open clusters: four of the six in the key&apos;s second observable already sit below its kill line on pre-DR4 binary-cleaned values. That line (obs/pred &le; 0.65 per cluster) was chosen after the pre-DR4 values were seen. The kill registered before retrieval used &sigma; with binaries included, and it was not met (PREREG a1b3be0). The values are: Hyades 0.30
          of the internal-reading prediction (Torres et al. 2026 §12); Pleiades, M67 and NGC 188 at 0.34&ndash;0.63.
          <em>Published open-cluster MOND test on the same objects:</em> Kroupa et al. 2022 (MNRAS, doi:10.1093/mnras/stac2563, arXiv:2210.13472)
          read the <em>asymmetry</em> of open-cluster tidal tails (Hyades, Praesepe, Coma Berenices, COIN-Gaia 13, NGC 752) as favouring Milgromian
          dynamics over Newton, whose tails are near-symmetric. That is a different observable from these internal dispersions, and it is computed
          with MOND&apos;s external field effect, which the internal reading drops by construction. So a sub-prediction Hyades dispersion here
          argues against the EFE-free reading, not against MOND-with-EFE, and the two results do not conflict on their face; whether the
          tails and dispersions agree within one MOND model has not been checked here (raised by a researcher simulated-visitor persona, 2026-11-27).
        </p>
        <div style={{ overflowX: 'auto', margin: '0.5rem 0 1rem' }}>
          <table style={{ borderCollapse: 'collapse', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
            <thead><tr style={{ textAlign: 'left' }}><th style={{ padding: '0.25rem 1rem 0.25rem 0' }}>Boost in g reported from DR4</th><th style={{ padding: '0.25rem 0' }}>Compander &#x03B3; it would resemble</th></tr></thead>
            <tbody>
              <tr><td style={{ padding: '0.25rem 1rem 0.25rem 0' }}>1.50</td><td>0.39&ndash;0.51</td></tr>
              <tr><td style={{ padding: '0.25rem 1rem 0.25rem 0' }}>1.40</td><td>0.47&ndash;0.64</td></tr>
              <tr><td style={{ padding: '0.25rem 1rem 0.25rem 0' }}>1.30</td><td>0.59&ndash;0.85</td></tr>
              <tr><td style={{ padding: '0.25rem 1rem 0.25rem 0' }}>1.20</td><td>0.80&ndash;1.28</td></tr>
              <tr><td style={{ padding: '0.25rem 1rem 0.25rem 0' }}>1.10</td><td>1.33&ndash;2.72</td></tr>
              <tr><td style={{ padding: '0.25rem 1rem 0.25rem 0' }}>1.00 (Newtonian null)</td><td>none (&#x03B3; = 3 still predicts 1.03&ndash;1.09)</td></tr>
            </tbody>
          </table>
        </div>
        <div id="efe-free-corner" className="card" style={{ margin: '1rem 0 1.5rem', scrollMarginTop: '5rem' }}>
          <h3 style={{ color: 'var(--color-accent-violet)', marginTop: 0 }}>The one row the table above leaves out: the &ldquo;EFE-free corner&rdquo;</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The table assumes the binary feels the Milky Way&apos;s pull on the Sun (the external field effect, EFE), which makes the boost
            level off. One reading of the acceleration-keyed curve has no external field: C is evaluated on the pair&apos;s own internal
            acceleration only, at &#x03B3; &asymp; 0.87&ndash;0.95 (the range Solar-System perihelia and SPARC jointly leave; globular clusters disfavour it at about 3&sigma;, conditional on the mass model). Its boost does not level
            off. It keeps rising as the pair&apos;s acceleration falls: about 1.49 at g<sub>N</sub> = 1.0&times;10<sup>&minus;10</sup>&nbsp;m/s&sup2;, 1.67 at 0.7, 1.88 at 0.5, 2.7 at 0.2.
            That rising trend is the only galaxy-level prediction on this site that differs from MOND-with-EFE at wide-binary accelerations.
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>
            <li><strong>What it is.</strong> Not a defined model of this framework. It needs a rule for which bodies count as &ldquo;the system&rdquo;, and the only written
              rule is Milgrom&apos;s 2011 frequency-by-frequency modified-inertia toy (arXiv:1111.1611 &sect;3.1), which he set aside as observationally excluded. Under it the
              corner is MOND as modified inertia without an external field: prior art, so no outcome raises the novelty count. Read on each star&apos;s <em>total</em>{' '}
              acceleration instead, the planets exclude it (Saturn&apos;s perihelion would turn by about &minus;85,000&nbsp;mas per century against &minus;0.32 &plusmn; 0.47).</li>
            <li><strong>Other legs.</strong> Globular clusters disfavour it at about 3&sigma;, conditional on the mass model; binary-cleaned open-cluster dispersions
              sit at 0.30&ndash;0.63 of its prediction (status on <Link href="/tier-1-existing#TEST-25" style={{ color: 'var(--color-accent-blue)' }}>Tier 1, TEST-25</Link>).</li>
            <li><strong>Against published binned DR3 numbers (maintainer 2026-11-25, predictions committed before running; 3 of 4 held).</strong> Chae 2023
              (ApJ 952, 128) prints the boost at two characteristic accelerations: 1.43 &plusmn; 0.06 at 10<sup>&minus;10.15</sup> and 1.117 &plusmn; 0.025 at 10<sup>&minus;8.91</sup>&nbsp;m/s&sup2;.
              The corner predicts 1.59&ndash;1.71 at the first (2.6&ndash;4.7&sigma; too high) and 1.01&ndash;1.02 at the second (about 4&sigma; too low); the ratio of the two is
              1.57&ndash;1.67 against Chae&apos;s 1.28 &plusmn; 0.06 (4.7&ndash;6.4&sigma;). So its <em>shape</em> is wrong at both ends in the analysis that reports a boost, and the
              analyses that report Newton sit further below it. These are point comparisons at each bin&apos;s characteristic value; averaging over a bin would raise the
              low-acceleration prediction further. One caveat: Chae&apos;s high-acceleration point is measured against a multiplicity calibration at 10<sup>&minus;8</sup>&nbsp;m/s&sup2;.
              (<code>maintainer/scripts/efe_free_corner_vs_chae2023_points.py</code> and its output.)</li>
            <li><strong>DR4 reading, dated before the data</strong> (key addenda 2026-11-11 and 2026-11-25): take R = boost at 0.2&times;10<sup>&minus;10</sup> divided by boost at
              1.0&times;10<sup>&minus;10</sup>&nbsp;m/s&sup2;. The corner predicts R = 1.79&ndash;1.84; MOND with the external field effect and Newton both predict R &asymp; 1.
              R &ge; 1.5 has the corner&apos;s shape; R &le; 1.2 rules it out; in between is no result. A per-separation record out to 100&nbsp;kAU is also asked for.</li>
          </ul>
        </div>
        <p>
          Cassini already speaks to this question for modified-Poisson MOND. Desmond, Hees &amp; Famaey 2024 (MNRAS 530, 1781) state that the Solar-System quadrupole &ldquo;implies, to high precision, no deviation from Newtonian gravity in nearby wide binaries&rdquo;; Park et al. 2026 put an upper bound of 2% (95%) on the MOND boost at the Sun&apos;s position (no arXiv locator checked on this site yet; treat as pending, the rule that withdrew &ldquo;Saurabh &amp; Desmond 2024&rdquo;). So a Chae-type boost in DR4 would be in tension with Cassini for that class of theory, whatever it does for rotation curves.
        </p>

        <h2>Current Observational Status (abstracts re-read 2026-11-08)</h2>
        <p>
          Papers below are read from their abstracts, at the arXiv version noted. Where a line says so, a public code or an in-house
          calculation was also read. Is there a boost in these 36 binaries? Both groups frame the disagreement as the treatment of the orbit&apos;s semi-major axis: Saad &amp; Ting reproduce Chae&apos;s value when they swap their forward model for a geometric deprojection, and Chae, Park &amp; Yoon&apos;s reply argues explicit against implicit a. Chae et al. state that undetected companions are &ldquo;well under control&rdquo; (RUWE, colour&ndash;magnitude diagram, multi-epoch radial velocities, speckle follow-up; v4 abstract, read 2026-11-24). The box below adds an in-house estimate that hidden companions <em>could</em> matter as much; it is one AI session&apos;s mock, not either group&apos;s framing, and neither group has seen it. (Until 2026-11-24 this paragraph said the question &ldquo;now depends on how many of them have hidden companions or were disturbed, not on how the orbit is deprojected&rdquo;, which ruled on a live dispute against both groups&apos; own framing; a researcher simulated-visitor persona pointed it out, and the abstracts were re-read.)
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          <strong>Notation (added 2026-11-16):</strong> in this section, as in the wide-binary papers, &#x03B3; is the gravity boost
          g<sub>obs</sub>/g<sub>N</sub> (1 = Newton). It is a different quantity from the framework&apos;s shape parameter &#x03B3; (about 0.5 on
          galaxies) used elsewhere on this site. Where the DR4 reading key turns a measured boost into the framework&apos;s parameter, the
          boost is called &ldquo;boost&rdquo; and the parameter &#x03B3;.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Chae et al. 2026 (arXiv:2601.21728, v4)</strong>: 36 nearby binaries with accurate 3D velocities give a boost
            &#x03B3; = 1.60 (+0.24/&minus;0.14), which the abstract says &ldquo;rules out Newton&rdquo;. The same abstract says the strong anomaly is dominated
            by two pairs; without them &Gamma; = 0.042 (+0.027/&minus;0.024), i.e. &#x03B3; &asymp; 1.2. (&Gamma; is Chae&apos;s log<sub>10</sub>&radic;&#x03B3;, so &#x03B3; = 10<sup>2&Gamma;</sup>: 0.042 &rarr; 1.21, 0.102 &rarr; 1.60.)</li>
          <li><strong>Saad &amp; Ting 2026 (arXiv:2603.11015, v2; Open Journal of Astrophysics)</strong>: the <em>same</em> 36 binaries with the
            semi-major axis forward-modelled give <strong>&#x03B3; = 1.00 (+0.24/&minus;0.19), consistent with Newton</strong>. Using a geometric deprojection instead
            gives 1.56 (+0.21/&minus;0.18), matching Chae. Their abstract attributes the difference to the semi-major axis model. <span style={{ display: 'block', margin: '0.4rem 0', padding: '0.4rem 0.7rem', border: '1px dashed rgba(245,158,11,0.5)', borderRadius: '0.3rem' }}>This page reports Saad &amp; Ting&apos;s numbers as published and makes no claim about their analysis or code. Questions about another group&apos;s analysis go to the authors first (removed 2026-11-16: until then this box described an in-house reproduction of their public code that the authors have not seen; a researcher reader judged that any such claim on a public page, ahead of contacting them, takes a side in a live dispute).</span></li>
          <li><strong>Chae, Park &amp; Yoon 2026 (arXiv:2610.40388, v2)</strong>: replies that a recent claim of Newtonian gravity from the Chae sample comes from an error in the code or from enlarged errors. The abstract does not name Saad &amp; Ting. Whether it refers to them, and whether anything in their code is a defect, is for the authors to say.</li>
          <li><strong>Boufourou 2026 (arXiv:2608.24556 v1). Withdrawn by its author on 8 September 2026:</strong> its 81,088-pair input was Chae&apos;s Newtonian <em>mock</em> catalogue (Zenodo 10652994), not observed Gaia data. The author&apos;s correction notice (<a href="https://github.com/HBoufourou/paperI-wide-binaries/blob/main/CORRECTION.md" style={{ color: 'var(--color-accent-blue)' }}>CORRECTION.md</a>) reads: &ldquo;The affected observational measurements and the gravity-exclusion claims based on them are withdrawn.&rdquo; Its &#x03B3; = 1.045 and &ldquo;rejects 1.4 at ~16&sigma;&rdquo; are not DR3 measurements, and its DR4 protocol rests on the same input. The arXiv page carries no notice (checked 2026-11-10). Checked in-house: the paper&apos;s 41,760-pair fiducial count reproduces exactly on the mock file (explorer 2026-11-09). Until 2026-11-10 this page listed it as a DR3 result and among the analyses that lean Newtonian; a researcher reader asked for an erratum check the day after the explorer had done one.</li>
          <li><strong>Prior generation (2023–2024)</strong>: Chae (2023, ApJ 952, 128; arXiv:2305.04613): observed-to-Newtonian acceleration ratio 1.43 &plusmn; 0.06 at g<sub>N</sub> = 10<sup>&minus;10.15</sup> m/s&sup2;. Chae (2024, arXiv:2309.10404, accepted to ApJ; volume not checked here): 1.49 (+0.21/&minus;0.19) below 10<sup>&minus;10</sup> m/s&sup2; from a sample selected to be free of hidden companions. These two started the dispute (abstracts read 2026-11-24; until then this list named only the Newtonian-leaning analyses). Banik et al. (2024), Pittordis &amp; Sutherland
            (2023): Newtonian-consistent with different cuts and the velocity-ratio statistic. (A third entry, &ldquo;Saurabh &amp; Desmond (2024)&rdquo;, listed here without an arXiv ID, could not be sourced on 2026-11-21 and is withdrawn pending a locator: likely a recall error.)</li>
          <li><strong>Hernandez (2023–2024)</strong>: Anomalies in projected-velocity statistics; methodology
            disputed.</li>
        </ul>
        <div style={{
          background: 'rgba(245,158,11,0.07)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Status: still hung (2026-11-24). Both groups locate the disagreement in the semi-major-axis model; what follows is an in-house addition, not a ruling.</strong>{' '}
          <strong>An in-house, uncontacted, one-session estimate suggests the per-star close-companion rate could matter as much as the semi-major-axis model.</strong> Chae et al. report companions under control by their diagnostics; this estimate asks how large a residual rate those cuts could miss. With a physical model of hidden companions (photocentre orbits passed through the RUWE, colour&ndash;magnitude, IPD and RV-stability cuts; explorer 2026-11-09, PREREG <code>c31d20e</code>), a per-star companion rate of 0.3 leaves only about 7% of the 36 contaminated, yet moves the mixture estimate of &#x03B3; from 1.87 to about 1.2 [1.0, 1.6]. Explaining the number of systems near escape speed with Newton needs a per-star rate of about 0.45&ndash;0.5: the field value for solar-type stars (Moe &amp; Di Stefano 2017, 0.50 &plusmn; 0.04), but 3&ndash;5&times; what the 2D parent sample&apos;s calibration bin implies under Chae&apos;s eccentricity prior. So S1 (the 36 Chae 2026 systems with 3D velocities) needs either a boost or an unusually contaminated sample. <strong>DR4 cannot measure that rate in these 36.</strong> Its companion flags carry about a tenth of what a perfect companion census would, and even that census is worth a likelihood ratio of about 7, not a verdict. DR4 can measure the rate in the parent sample if the single-star false-flag rate is pinned from DR4 itself. Two new RV epochs on #59, #6 and #54 would carry half of what any census of the 36 can. System #3 needs a companion under every reading, Chae&apos;s &#x03B3; = 1.6 included (explorer 2026-11-17, PREREG <code>1a4d020</code>; conditional on the companion model; one AI session). (Until 2026-11-18 this sentence said the rate &ldquo;is measurable (RV monitoring; DR4 epoch astrometry)&rdquo;.) Conditional on the model; one AI session. (Until 2026-11-10 this box said &ldquo;&#x03B3; is about 1.5&ndash;1.8 if f &le; 0.1&rdquo;, from a placeholder companion-kick distribution; with physical kicks, f &asymp; 0.07 already gives about 1.2.) Follow-up radial velocities on the three highest-velocity
          systems would do more than further modelling. <strong>One number was not reproduced:</strong> Chae et al.&apos;s consolidated &Gamma; = 0.102 (this calculation gives 0.139 from the same per-system values; {THIRD_PARTY_CLAIM_LABEL} either implementation could be wrong, and their consolidation script is not public).
          The adjudication will turn on: (1) a real contaminant model for these 36; (2) independent ≥3σ boost
          confirmation → kill fires; (3) independent null replication → degenerate survival; (4) Gaia DR4. Mock-injection cross-validation of the deprojection step, once listed here, is done.
          Saglia et al. 2025 and Pasquini et al. 2026 (locators pending, as for Park et al. above) lean Newtonian or deflationary (Boufourou 2026, listed here until 2026-11-10, is withdrawn; see above). Saad &amp; Ting&apos;s 1.00 is listed above as they report it.
        </div>

        <div style={{
          background: 'rgba(59,130,246,0.07)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '1rem 0 1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: 'var(--color-accent-blue)' }}>MOND+EFE and the density law (Bekenstein &amp; Milgrom 1984):</strong>{' '}
          both predict weaker anomalies in stronger environments, but through different variables. MOND+EFE responds to
          the external <em>acceleration</em>, and the density law responds to the local <em>density</em>. Their amplitudes
          are not degenerate: MOND+EFE gives 1.0&ndash;1.4&times; in g, while the density law gives anything from its excluded
          published value down to a Newtonian null, depending on the knee. The test separates them only once the knee is fixed.
        </div>

        <h2>Why This Test Cannot Be Decisive (As Currently Formulated)</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3 style={{ color: '#ef4444' }}>If an anomaly is confirmed (Chae et al.&apos;s reading)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              A confirmed EFE-suppressed MOND anomaly of &asymp;1.4&times; would rescue nothing: it needs the acceleration-keyed
              version at &#x03B3; &#x2272; 1, where Cassini already fails it, so it adds no second failure but no support either.
              No outcome lands on a Cassini-passing &#x03B3;: with a<sub>0</sub> taken from SPARC at each &#x03B3;, none exists up to 3
              (2026-11-06; the earlier &ldquo;precise 1.1&ndash;1.2&times; at &#x03B3; &asymp; 1.5&ndash;2&rdquo; held a<sub>0</sub> fixed). For the density law it would rule out the near-Newtonian knee window. The
              published calibration is already excluded. (Until 2026-10-06 this card said a confirmed anomaly would
              &ldquo;support MOND and the acceleration-keyed version equally&rdquo;.)
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-text-secondary)' }}>If a null is confirmed (Saad &amp; Ting&apos;s reading of the same 36; Banik et al. 2024 on a large sample)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The acceleration-keyed version fails together with MOND&apos;s simple function. The density law survives only
              in the near-Newtonian knee window, where it cannot be told apart from Newton.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/cosmology-predictions" className="btn-primary">
            Next: Cosmology Predictions &rarr;
          </Link>
          <Link href="/tier-1-existing" className="btn-secondary">
            Full Tier 1 Test Roadmap &rarr;
          </Link>
        </div>
      </section>

      <ScriptsNote />
      <RelatedConcepts currentPath="/wide-binaries" />
    </>
  );
}
