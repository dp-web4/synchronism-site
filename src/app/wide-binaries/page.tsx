'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import { THIRD_PARTY_CLAIM_LABEL } from '@/lib/ledger';
import EquationDisplay from '@/components/EquationDisplay';

export default function WideBinaries() {
  return (
    <>
      <Breadcrumbs currentPath="/wide-binaries" />
      <h1>Wide Binaries</h1>
      <ValidationBadge status="untested" label="Self-Eliminating-or-Tie — density branch identically null in the ratio but not in absolute dynamics (excluded by the Oort limit at the published knee, by SPARC and by LLR), acceleration branch already failed at the SPARC γ via TEST-25; DR3 dispute unresolved" />

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
          acceleration between two stars drops below a&#x2080; &#x2248; 1.2 &times; 10<sup>&minus;10</sup>
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
            density &#x03C1; &asymp; 0.09&nbsp;M&#x2609;/pc&sup3; the velocity excess over Newton is:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <li><strong>Published calibration</strong> &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2; = 1.5&times;10&sup3; M&#x2609;/pc&sup3; (Milky Way, &#x03B3; = 0.489):
              <strong> +1.8&times;10&#x2074;%</strong>. That is a factor ~3.5&times;10&#x2074; in g, excluded by the Oort limit by orders of magnitude. (Planetary
              ephemerides cannot see a boost that is uniform across the Solar System, because it is degenerate with the Sun&apos;s
              GM. They constrain only its variation, so they bite only if density is read pointwise, not smoothed over
              &ge; 30 AU.)</li>
            <li>Measured velocity-blind knee, 0.161&nbsp;M&#x2609;/pc&sup3;: <strong>+116%</strong> (&#x03B3; = 0.489) or +18.6% (&#x03B3; = 2).</li>
            <li>Refracted Gravity&apos;s elliptical-galaxy knee, 0.0083&nbsp;M&#x2609;/pc&sup3;: <strong>+9.4%</strong> (&#x03B3; = 0.489) or +0.005% (&#x03B3; = 2).</li>
            <li>A near-Newtonian 0.05&ndash;0.4% needs a knee between 3.8&times;10&#x207B;&#x2075; and 3.2&times;10&#x207B;&#x2074;&nbsp;M&#x2609;/pc&sup3; (&#x03B3; = 0.489).
              No other page uses a knee in that window, and it starts where the knee range ruled out on SPARC ends.</li>
          </ul>
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
          <strong style={{ color: '#ef4444' }}>At the framework&apos;s published calibration, the density law is already excluded locally.</strong>{' '}
          No wide-binary sample is needed for that. At the other knees the site uses, the predicted boost is
          9&ndash;116%, and Gaia can see that; a confirmed Newtonian null would exclude those knees too. Only the
          otherwise-unused knee window above gives a signal below Gaia DR3 systematics (~3&ndash;5%). So no outcome
          selects Synchronism: a MOND-scale anomaly favours MOND and the acceleration-keyed version equally, and a
          Newtonian null favours Newton.
          <p style={{ margin: '0.6rem 0 0' }}>
            <strong>Why isn&apos;t the local exclusion booked as a refutation?</strong> This is not because it is weak. It is
            cleaner than TEST-09&apos;s 3.3&sigma;. It is a consequence of the knee calibration &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2;, and
            that calibration is already recorded as failed in the research ledger (its velocity exponent is excluded at
            ~11&sigma;, galaxy level). The site counts executed tests grouped by root. Whether this becomes its own booked result is
            ledger governance and gates on the project lead.
          </p>
          <details style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note</summary>
            This box was titled &ldquo;Feasibility Kill &mdash; Signal Below Gaia Systematics&rdquo;. It said solar-neighbourhood
            density sits above &#x03C1;<sub>crit</sub>, giving C&nbsp;&asymp;&nbsp;1, a 0.05&ndash;0.4% Newtonian null, and a signal ~80&times;
            below Gaia&apos;s reach. At the published calibration the density sits far below the knee, so C&nbsp;&asymp;&nbsp;3&times;10&#x207B;&#x2075;
            and the boost is maximal. The page also said &ldquo;Standard MOND predicts the same anomaly regardless of where the
            binary system is located&rdquo;, which ignores the External Field Effect. Tier 1 carried the knee-conditional
            correction from 2026-09-10. It reached this page on 2026-09-17, after a researcher simulated-visitor persona found both errors.
          </details>
        </div>

        <h2 id="dr4">Gaia DR4: 2 December 2026</h2>
        <p>
          ESA has set DR4 (66 months of data) for 2 December 2026. A reading key for this framework was committed before the data (<code>maintainer/scripts/wb_dr4_reading_key_PREREG.md</code>, 2026-11-06). Whatever DR4 shows, it <strong>cannot raise the novelty count</strong>: every outcome lands on a compander member Cassini already excludes unless discs carry over twice their stellar-population M/L. What DR4 decides is MOND&apos;s question, the Chae vs Banik dispute. The key is a dated mapping, not a registered test; adopting it gates on the project lead.
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
        <p>
          Cassini already speaks to this question for modified-Poisson MOND. Desmond, Hees &amp; Famaey 2024 state that the Solar-System quadrupole &ldquo;implies, to high precision, no deviation from Newtonian gravity in nearby wide binaries&rdquo;; Park et al. 2026 put an upper bound of 2% (95%) on the MOND boost at the Sun&apos;s position. So a Chae-type boost in DR4 would be in tension with Cassini for that class of theory, whatever it does for rotation curves.
        </p>

        <h2>Current Observational Status (abstracts re-read 2026-11-08)</h2>
        <p>
          Papers below are read from their abstracts, at the arXiv version noted. Where a line says so, a public code or an in-house
          calculation was also read. Is there a boost in these 36 binaries? It now depends on how many of them have hidden companions or were
          disturbed, not on how the orbit is deprojected.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Chae et al. 2026 (arXiv:2601.21728, v4)</strong>: 36 nearby binaries with accurate 3D velocities give a boost
            &#x03B3; = 1.60 (+0.24/&minus;0.14), which the abstract says &ldquo;rules out Newton&rdquo;. The same abstract says the strong anomaly is dominated
            by two pairs; without them &Gamma; = 0.042 (+0.027/&minus;0.024), i.e. &#x03B3; &asymp; 1.2. (&Gamma; is Chae&apos;s log<sub>10</sub>&radic;&#x03B3;, so &#x03B3; = 10<sup>2&Gamma;</sup>: 0.042 &rarr; 1.21, 0.102 &rarr; 1.60.)</li>
          <li><strong>Saad &amp; Ting 2026 (arXiv:2603.11015, v2; Open Journal of Astrophysics)</strong>: the <em>same</em> 36 binaries with the
            semi-major axis forward-modelled give <strong>&#x03B3; = 1.00 (+0.24/&minus;0.19), consistent with Newton</strong>. Using a geometric deprojection instead
            gives 1.56 (+0.21/&minus;0.18), matching Chae. Their abstract attributes the difference to the semi-major axis model. <strong>Checked 2026-11-08/09:</strong> in the public code at commit <code>4333e9f</code>, <code>run_gamma_analysis.py</code> line 106 sets the separation error to the larger of 5% of s and the absolute line-of-sight distance error. That comes to a median of about 190% of s, where the paper states about 0.1%. An in-house mock test finds that this setting returns about 0.65 × the true &#x03B3;, and that free-a and geometric models agree when the separation error is physical. So the deprojection step is not the crux. <a href="https://github.com/dp-web4/synchronism-site/blob/main/explorer/findings/wide-binary-mock-injection-saad-ting-newton-is-a-separation-error-bug-deprojection-is-not-the-crux-contamination-is.md" style={{ color: 'var(--color-accent-blue)' }}>Finding and scripts</a>: one AI session&apos;s calculation. <strong>{THIRD_PARTY_CLAIM_LABEL}</strong> The same run does <em>not</em> establish a boost (next box).</li>
          <li><strong>Chae, Park &amp; Yoon 2026 (arXiv:2610.40388, v2)</strong>: replies that a recent claim of Newtonian gravity from the Chae sample comes from an error in the code or from enlarged errors. The abstract does not name Saad &amp; Ting; the description fits, and the separation-error setting above is what it describes. The check found no evidence about motive, and the setting reads as a defect: the same 5% floor appears from the code&apos;s first release.</li>
          <li><strong>Boufourou 2026 (arXiv:2608.24556 v1). Withdrawn by its author on 8 September 2026:</strong> its 81,088-pair input was Chae&apos;s Newtonian <em>mock</em> catalogue (Zenodo 10652994), not observed Gaia data. The author&apos;s correction notice (<a href="https://github.com/HBoufourou/paperI-wide-binaries/blob/main/CORRECTION.md" style={{ color: 'var(--color-accent-blue)' }}>CORRECTION.md</a>) reads: &ldquo;The affected observational measurements and the gravity-exclusion claims based on them are withdrawn.&rdquo; Its &#x03B3; = 1.045 and &ldquo;rejects 1.4 at ~16&sigma;&rdquo; are not DR3 measurements, and its DR4 protocol rests on the same input. The arXiv page carries no notice (checked 2026-11-10). Checked in-house: the paper&apos;s 41,760-pair fiducial count reproduces exactly on the mock file (explorer 2026-11-09). Until 2026-11-10 this page listed it as a DR3 result and among the analyses that lean Newtonian; a researcher reader asked for an erratum check the day after the explorer had done one.</li>
          <li><strong>Prior generation (2023–2024)</strong>: Banik et al. (2024), Pittordis &amp; Sutherland
            (2023), Saurabh &amp; Desmond (2024) all Newtonian-consistent with different cuts.</li>
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
          <strong style={{ color: '#f59e0b' }}>Status: still hung, with the crux restated (2026-11-09).</strong>{' '}
          <strong>The crux is the per-star close-companion rate of the 36 systems, not a fraction f.</strong> With a physical model of hidden companions (photocentre orbits passed through the RUWE, colour&ndash;magnitude, IPD and RV-stability cuts; explorer 2026-11-09, PREREG <code>c31d20e</code>), a per-star companion rate of 0.3 leaves only about 7% of the 36 contaminated, yet moves the mixture estimate of &#x03B3; from 1.87 to about 1.2 [1.0, 1.6]. Explaining the number of systems near escape speed with Newton needs a per-star rate of about 0.45&ndash;0.5: the field value for solar-type stars (Moe &amp; Di Stefano 2017, 0.50 &plusmn; 0.04), but 3&ndash;5&times; what the 2D parent sample&apos;s calibration bin implies under Chae&apos;s eccentricity prior. So S1 needs either a boost or an unusually contaminated sample, and that rate is measurable (RV monitoring; DR4 epoch astrometry). Conditional on the model; one AI session. (Until 2026-11-10 this box said &ldquo;&#x03B3; is about 1.5&ndash;1.8 if f &le; 0.1&rdquo;, from a placeholder companion-kick distribution; with physical kicks, f &asymp; 0.07 already gives about 1.2.) Follow-up radial velocities on the three highest-velocity
          systems would do more than further modelling. <strong>One number was not reproduced:</strong> Chae et al.&apos;s consolidated &Gamma; = 0.102 (this calculation gives 0.139 from the same per-system values; {THIRD_PARTY_CLAIM_LABEL} either implementation could be wrong, and their consolidation script is not public).
          The adjudication will turn on: (1) a real contaminant model for these 36; (2) independent ≥3σ boost
          confirmation → kill fires; (3) independent null replication → degenerate survival; (4) Gaia DR4. Mock-injection cross-validation of the deprojection step, once listed here, is done.
          Saglia et al. 2025 and Pasquini et al. 2026 lean Newtonian or deflationary (Boufourou 2026, listed here until 2026-11-10, is withdrawn; see above). Saad &amp; Ting&apos;s 1.00 as coded is not evidence for Newton: read through its own calibration it maps to a true &#x03B3; of about 1.3&ndash;1.5 (read off the mock calibration curve: 1.4&ndash;1.5 with their inputs, about 1.3 with Chae&apos;s, scatter about &plusmn;0.25; the plain ratio 1.00/0.65 would give 1.54).
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
            <h3 style={{ color: '#ef4444' }}>If anomaly confirmed (Chae wins)</h3>
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
            <h3 style={{ color: 'var(--color-text-secondary)' }}>If null confirmed (Banik wins)</h3>
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

      <RelatedConcepts currentPath="/wide-binaries" />
    </>
  );
}
