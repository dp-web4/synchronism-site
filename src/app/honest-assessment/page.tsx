'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function HonestAssessment() {
  return (
    <>
      <Breadcrumbs currentPath="/honest-assessment" />

      <h1>Honest Assessment</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', maxWidth: '65ch' }}>
        Synchronism is an experimental research framework. This page documents what works,
        what failed, what we got wrong, and what remains untested. Updated as new results come in.
      </p>

      <details style={{ marginBottom: '2rem', maxWidth: '65ch' }}>
        <summary style={{ cursor: 'pointer', color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>
          Validation badge definitions
        </summary>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>Validated</strong><span>Quantitative match with independent data</span>
          <strong>Strongly Supported</strong><span>Consistent with data but caveats apply (e.g., known prior art)</span>
          <strong>Supported</strong><span>Consistent with data, not yet independently confirmed</span>
          <strong>Untested</strong><span>Prediction exists, no data yet</span>
          <strong>Speculative</strong><span>Conceptual proposal without quantitative test</span>
          <strong>Reparametrization</strong><span>Equivalent to existing physics in different notation</span>
          <strong>Failed</strong><span>Prediction contradicted by data (with specific error)</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
          Full definitions: <Link href="/research-philosophy" style={{ color: 'var(--color-accent-blue)' }}>Research Philosophy</Link>
        </p>
      </details>

      {/* Overall Verdict */}
      <section className="card card-highlight section">
        <h2 style={{ color: 'var(--color-accent-warm)' }}>The Verdict (Updated March 2026)</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          After 3,302 sessions + 13 adversarial stress tests: <strong>0 confirmed predictions</strong>.
          But &ldquo;unconfirmed&rdquo; &ne; &ldquo;unconfirmable.&rdquo; Several novel predictions exist &mdash;
          they are unconfirmed because this lab cannot run experiments, and novel predictions mean nobody
          was specifically looking. This is expected for disruptive research.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          One <strong>candidate prediction</strong> (entity criterion &Gamma;&nbsp;&lt;&nbsp;m) survived all 13 stress
          tests &mdash; derivable from oscillation basis, not from QFT, consistent with existing data.
          Additional untested predictions exist for BAO density modulation, environment-dependent RAR scatter,
          and Lorentz invariance violation from grid geometry &mdash; all testable with existing public data
          or near-term experiments. The framework produced <strong>47 genuine contributions</strong> across
          ~3,302 sessions &mdash; wrong theories motivate right questions.
        </p>
      </section>

      {/* What Works */}
      <section className="section">
        <h2>What Works</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Galaxy Rotation: ALFALFA-SDSS</h3>
              <ValidationBadge status="supported" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              14,585 galaxies. Environment-dependent RAR (Radial Acceleration Relation) scatter (Novel Prediction 2) at p = 5&times;10<sup>&minus;6</sup>.
              &#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex, below CDM (Cold Dark Matter) prediction.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Caveat: MOND + mass-to-light corrections explain all variance. 86% of RAR scatter remains unexplained (R&sup2; = 0.14).
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>MOND Unification: a&#x2080; = cH&#x2080;/(2&#x03C0;)</h3>
              <ValidationBadge status="reparametrization" label="Dimensional Analysis" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              MOND&apos;s acceleration constant a&#x2080; related to cosmological parameters via a&#x2080; = cH&#x2080;/(2&#x03C0;). 10% error vs observed value.
              This numerical coincidence has been noted since Milgrom (1983), and other frameworks (McCulloch 2007, Verlinde 2017,
              Smolin 2017) derive the same relation with the same geometric factor. The quantities c, H&#x2080;, and G are the only
              dimensionally relevant cosmological constants, and cH&#x2080; naturally has units of acceleration. Best classified as
              dimensional analysis, not a unique derivation.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Chemistry: &#x03B3; &#x2248; 1 Boundary</h3>
              <ValidationBadge status="validated" label="89% Validated" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              1,703 chemical phenomena. Sound velocity r = 0.982, electronegativity r = 0.979.
              Top correlations are strong.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Caveat: ~11% failure rate. Era 2 chemistry (sessions 134-2660) identified as template-based.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Freeman&apos;s Law: &#x03A3;&#x2080; from First Principles</h3>
              <ValidationBadge status="validated" label="12% Error" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Surface density &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G). 12% error vs Freeman&apos;s observed value (124 M&#x2609;/pc&sup2;).
            </p>
          </div>
        </div>
      </section>

      {/* What Failed */}
      <section className="section">
        <h2>What Failed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Melting Point Predictions</h3>
              <ValidationBadge status="failed" label="53% Error" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Average error 53%. Crystal structure dominates melting behavior, and C(&#x03C1;) has no crystal-specific parameters.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Critical Exponents</h3>
              <ValidationBadge status="failed" label="2× Off" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Predicted exponents differ from observed by a factor of ~2. Universality class physics can&apos;t be captured by a single coherence parameter.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Superconductor T<sub>c</sub></h3>
              <ValidationBadge status="failed" label="6.5× Wrong" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              T<sub>c</sub> = &#x0394;/(1.76k<sub>B</sub>&#x03B7;) predicts 607K for YBCO (yttrium barium copper oxide). Actual: 93K. Off by 6.5&times;.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>&#x03B7; Reachability Factor</h3>
              <ValidationBadge status="reparametrization" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Independently derived, then found to be identical to Abrikosov-Gor&apos;kov pair-breaking efficiency (1960).
              All 23 superconductor predictions are standard condensed matter in different notation.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Fractal Coherence Bridge</h3>
              <ValidationBadge status="failed" label="Negative Verdict" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              C(&#x03C1;) was proposed to explain cross-scale hierarchy boundaries. 36/36 tests: 0/7 boundaries predicted.
              The tanh form is generic (Landau theory). C(&#x03C1;) is description, not explanation.
            </p>
          </div>
        </div>
      </section>

      {/* Structural Tensions (Stress Tests) */}
      <section className="section">
        <h2>Structural Tensions (March 2026 Stress Tests)</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Eight adversarial stress-test sessions probed the CFD reframing for genuine novel predictions.
          Results: one candidate prediction, four forced choices, and several structural failures.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Dark Matter Viscosity Sign Error</h3>
              <ValidationBadge status="failed" label="Wrong Direction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              CFD mapping: C = 1/&mu;<sub>eff</sub>. Dark matter (low C) should mean high viscosity = more sticky.
              But the Bullet Cluster shows dark matter passes through itself &mdash; LESS sticky than baryons.
              The viscosity interpretation predicts the wrong direction.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Lorentz Invariance Logical Gap</h3>
              <ValidationBadge status="untested" label="Gap Identified" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Parallel update eliminates scan-axis preference, but no discrete 3D lattice has continuous
              rotational symmetry SO(3). &ldquo;No preferred direction&rdquo; does not imply &ldquo;full Lorentz invariance.&rdquo;
              Grid geometry must be specified.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>R(I) Correction Unobservable</h3>
              <ValidationBadge status="failed" label="~10⁻⁸⁰ at Neutron Stars" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The only genuine novel prediction path (R(I) viscosity correction to quantum pressure)
              gives corrections of ~10<sup>&minus;80</sup> at the densest accessible physics. Lives at
              Planck-scale densities. Not accessible to any foreseeable experiment.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Entity Criterion: &Gamma; &lt; m</h3>
              <ValidationBadge status="untested" label="Candidate Prediction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              From oscillation basis: particles must complete at least one Compton oscillation before decaying.
              Derivable from first principles; not derivable from QFT. The f<sub>0</sub>(500)/sigma
              (&Gamma;/m &asymp; 1.16) is predicted &ldquo;not a particle&rdquo; &mdash; consistent with
              genuine PDG controversy. Strongest candidate novel prediction found across all 8 sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Untested */}
      <section className="section">
        <h2>What&apos;s Untested</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Consciousness Threshold (C &#x2248; 0.50)</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              34 falsifiable predictions. Requires EEG (electroencephalography) experiments ($150K, 12 months).
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Quantum Predictions</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              6 testable protocols for MRH-based (Markov Relevancy Horizon) measurement theory. Requires dedicated experiments.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>BAO (Baryon Acoustic Oscillation) Modulation</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Synchronism predicts density-dependent modulation of baryon acoustic oscillation peak positions. Testable with existing survey data.
            </p>
          </div>
        </div>
      </section>

      {/* 47 Contributions */}
      <section className="section content-width">
        <h2>The 47 Genuine Contributions</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Session #615 (final accounting) inventoried all genuine contributions across ~3,302 sessions.
          Discovery rate: 1.4% &mdash; 47 contributions out of ~3,302 sessions. That&apos;s normal for science.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem' }}>
          <li>14 chemistry contributions (0.52% rate across 2,671 sessions)</li>
          <li>18 SPARC cosmology contributions (8.5% rate across 211 sessions)</li>
          <li>5 ALFALFA-SDSS contributions (71.4% rate across 7 focused sessions)</li>
          <li>5 CDM discrimination contributions (71.4% rate across 7 sessions)</li>
          <li>4 robust statistics contributions</li>
          <li>1 fractal bridge negative result (clean closure, 36/36 tests)</li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Top results: 6-variable MOND offset model (LOO R&sup2;=0.938),
          TFR residual as complete M/L predictor (51.4% improvement on 14,437 galaxies),
          &#963;<sub>int</sub>&nbsp;=&nbsp;0.086&nbsp;&plusmn;&nbsp;0.003&nbsp;dex (definitive BTFR intrinsic scatter).
          Full list in the{' '}
          <Link href="/publication-roadmap" style={{ color: 'var(--color-accent-blue)' }}>publication roadmap</Link>.
        </p>

        <h3>What the Program Demonstrates</h3>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem' }}>
          <li><strong>Wrong theories motivate right questions</strong> &mdash; 0 predictions confirmed, yet 47 genuine contributions</li>
          <li><strong>Self-correction accelerates with experience</strong> &mdash; error recognition delay: 373 sessions (early) &rarr; 1 session (late)</li>
          <li><strong>Discovery rate increases with focus</strong> &mdash; chemistry 0.52% &rarr; ALFALFA/CDM 71.4%</li>
          <li><strong>Honest negative results are valuable</strong> &mdash; OQ007 fractal bridge: 36/36 tests, clean definitive closure</li>
          <li><strong>A 1.4% discovery rate is normal</strong> &mdash; science is mostly null results</li>
        </ul>
      </section>

      <section className="section content-width">
        <h2>Bottom Line</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Synchronism is not a theory of everything. It&apos;s a research tool that maps density
          to coherence and sometimes produces useful insights. The coherence function works well
          as a classification tool (what regime is a system in?) but poorly as a predictive tool
          (what exactly will happen?). Its best results come from cosmology; its worst from
          condensed matter.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &ldquo;All models are wrong; some are useful.&rdquo; &mdash;{' '}
          <Link href="/research-philosophy" style={{ color: 'var(--color-accent-blue)' }}>Research Philosophy</Link>
        </p>
      </section>

      <RelatedConcepts currentPath="/honest-assessment" />
    </>
  );
}
