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
          <strong>Strongly Supported</strong><span>Consistent with data but caveats apply (e.g., known prior art, selection bias risk)</span>
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
        <h2 style={{ color: 'var(--color-accent-warm)' }}>The Verdict (Updated May 2026)</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          After 3,308 sessions + 13 adversarial stress tests: <strong>0 confirmed predictions, 1 refuted by external data</strong>.
          DESI DR1 (2026-05-05) measures fσ₈(z=0.51) ≈ 0.55 ± 0.06 — above ΛCDM, opposite to Synchronism&apos;s
          predicted suppression (0.418). By Session 107&apos;s own kill criterion, the framework&apos;s one live
          cosmological discriminator (TEST-04a) has failed — not just by magnitude (2.4σ), but in the
          <em> direction</em> of the prediction: any G<sub>local</sub>/G<sub>global</sub> suppression mechanism
          predicts fσ₈ <em>below</em> ΛCDM; DESI DR1 measures it <em>above</em>. This is a
          mechanism-class failure — the sign of the leading-order effect is reversed. This is the first external dataset to
          adjudicate a Synchronism-specific prediction.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          One <strong>candidate prediction</strong> (entity criterion &Gamma;&nbsp;&lt;&nbsp;m) survived all 13 stress
          tests &mdash; derivable from oscillation basis, not from QFT, consistent with existing data.
          The framework produced <strong>47 internal contributions</strong> across ~3,308 sessions &mdash;
          well-posed questions and methodology outputs, zero confirmed novel results.
          &ldquo;Unconfirmed&rdquo; &ne; &ldquo;wrong&rdquo; &mdash; but the evidence now includes one external refutation.
        </p>
      </section>

      {/* What Was Tested */}
      <section className="section">
        <h2>What Was Tested</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Analyses run with results. A kill-criterion-triggered result appears here, not under &ldquo;What Works&rdquo;
          &mdash; the heading reflects what was <em>attempted</em>, not what succeeded.
          The landing ledger (&ldquo;0 confirmed, 1 refuted&rdquo;) applies the stricter standard:
          prospective pre-registered tests that passed or failed their own kill criterion.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Galaxy Rotation: ALFALFA-SDSS</h3>
              <ValidationBadge status="failed" label="Kill Criterion Triggered" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              14,585 galaxies. Environment-dependent RAR (Radial Acceleration Relation) scatter (Novel Prediction 2) at p = 5&times;10<sup>&minus;6</sup>.
              &#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex, below CDM (Cold Dark Matter) prediction.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              The environmental effect is detectably nonzero (p = 5&times;10<sup>&minus;6</sup>), but explains only
              14% of total RAR scatter. The pre-registered kill criterion required R&sup2; &gt; 0.20. At R&sup2; = 0.14,
              the kill criterion fired. See TEST-03 in the &ldquo;What Failed&rdquo; section below.
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
              <ValidationBadge status="reparametrization" label="Pending Null Model — Not Yet Validated" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              1,703 chemical phenomena. Sound velocity r = 0.982, electronegativity r = 0.979.
              Top correlations are strong — but the relevant null has not been computed.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Null model problem (2026-05-10):</strong> Sound velocity, electronegativity,
              and atomic volume are all near-monotonic functions of atomic number Z. Any smooth
              monotonic function fit through the same data would achieve r → 1 by construction —
              not because it captures the physics, but because density and chemical properties
              are known to covary monotonically. The relevant null comparison is r(polynomial in Z),
              not r = 0. Until this comparison is run, r = 0.98 is evidence of density-monotonicity
              (known physics), not specifically of Synchronism&apos;s C(ρ) framework.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Additional caveats: ~11% failure rate. Era 2 chemistry (sessions 134-2660) identified as
              template-based. 1,703 phenomena include statistically dependent samples (sound velocity,
              electronegativity, and atomic volume co-vary for well-known bonding reasons).
              See <a href="/chemistry-limitations" style={{ color: 'var(--color-accent-blue)' }}>Chemistry Limitations</a>.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Freeman&apos;s Law: &#x03A3;&#x2080; from First Principles</h3>
              <ValidationBadge status="reparametrization" label="Dimensional Identity — Same Class as a₀" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Surface density &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G). 12% error vs Freeman&apos;s observed value (124 M&#x2609;/pc&sup2;).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Like a&#x2080; ~ cH&#x2080;, this is the only surface-density scale buildable from the available cosmological
              constants (c, H&#x2080;, G). Any framework that imports these constants will recover the same dimensional
              relation. Reclassified from &ldquo;Validated&rdquo; to Reparametrization alongside a&#x2080; on the same grounds.
            </p>
          </div>
        </div>
      </section>

      {/* What Failed */}
      <section className="section">
        <h2>What Failed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Critical Exponents — Deepest Theoretical Failure</h3>
              <ValidationBadge status="failed" label="2× Off — Undermines Landau Framing" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Predicted exponents (&#x03B2;, &#x03BD;, &#x03B1;, &#x03B3;<sub>susc</sub>, &#x03B4;, &#x03B7;) differ from observed by a factor of ~2.
              These are RG-primary quantities — no multiplicative reparametrization can move them.
              The site motivates C(&#x03C1;)&apos;s tanh form via &ldquo;Landau-universality family.&rdquo;
              A framework whose tanh form is Landau-motivated but misses Landau critical exponents by 2&times;
              has lost the universality argument. This failure removes &ldquo;Landau-universality family&rdquo;
              as a justification across the site — the tanh form is phenomenological, full stop.
            </p>
          </div>

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

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>TEST-03: ALFALFA-SDSS TFR Scatter (Kill Criterion Triggered)</h3>
              <ValidationBadge status="failed" label="Kill Criterion Met — Denominator Under Audit" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The TEST-03 kill criterion states: &ldquo;TFR residual explains &lt;20% of scatter.&rdquo; The measured value
              is R&sup2; = 0.14 (environmental term explains 14% of total RAR scatter). Under a literal reading, the kill
              criterion is triggered: 14% &lt; 20%.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              One open question: whether the kill criterion was intended against <em>total</em> RAR scatter or
              against the residual-after-MOND scatter — a difference that could change the verdict. Until the
              archive source is audited, TEST-03 is classified as presumptively failed. The {' '}
              <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 catalog</Link>{' '}
              carries a matching notice.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>TEST-04a: DESI RSD fσ₈ — Mechanism-Class Failure (Sign Reversed)</h3>
              <ValidationBadge status="failed" label="Failed — Wrong Direction, Not Just Magnitude" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Session 107 (Dec 2025) predicted fσ₈(z=0.51) ≈ 0.418 — a 12% <em>suppression</em> below ΛCDM (0.474),
              driven by G<sub>local</sub>/G<sub>global</sub> coherence ratio suppressing structure growth.
              DESI DR1 (arXiv:2411.12021, Table 9) measures fσ₈ ≈ 0.55 ± 0.06 at LRG1 (z=0.51) —
              <strong>above ΛCDM, not below it.</strong> Combined σ₈(z=0) = 0.841 ± 0.034 vs Synchronism&apos;s 0.76 → 2.4σ
              disagreement. By Session 107&apos;s own kill criterion (&ldquo;fσ₈(z=0.5) &gt; 0.45 → ΛCDM
              favored&rdquo;), ΛCDM is favored at every LRG bin.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>This is a mechanism-class failure, not a magnitude miss.</strong> A suppression mechanism
              that predicts growth below ΛCDM and observes growth above ΛCDM fails in the <em>sign</em> of its
              leading-order effect. No retuning of σ₈(z=0) or the C<sub>cosmic</sub>/C<sub>galactic</sub> ratio
              can repair a sign error — the mechanism class itself is contradicted. The redshift pattern is inverted
              (low-z bins systematically HIGH vs Synchronism: LRG1 +0.86σ, LRG2 +1.5σ, QSO +2.6σ).
              Adjudicated 2026-05-05; mechanism-class framing added 2026-05-09 after four-persona review.
              This was the framework&apos;s only live cosmological discriminator — no replacement substituted.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Quantum Arc — Zero Confirmed Predictions (Session #581 Audit)</h3>
              <ValidationBadge status="reparametrization" label="0 Confirmed, 1 Refuted — 2026-02-08" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Session #581 (2026-02-08) conducted an 8-test quantum audit. Overall verdict:
              <strong> zero confirmed predictions, 4 reparametrizations, 1 refutation, 1 post-hoc fit,
              1 not-preferred.</strong>
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Key refutation — &#x03B3;<sub>max</sub> = 3.17:</strong> The framework predicts a
              maximum coherence parameter &#x03B3;<sub>max</sub> &#x2248; 3.17 (from SPARC calibration).
              The deepest SPARC bin shows &#x27E8;&#x03B3;&#x27E9; = 10.82, with 579 individual SPARC
              galaxies exceeding &#x03B3;<sub>max</sub>. This is the strongest direct refutation in the
              framework&apos;s own internal audit. It was not previously visible on this page.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              The two &ldquo;literature-consistent&rdquo; quantum results (&#x0393; = &#x03B3;&sup2;(1&minus;c)
              and Bell-freezing c(d)) are both reparametrizations: the decoherence formula is the
              textbook correlated-dephasing variance (Palma&ndash;Suominen&ndash;Ekert 1996);
              the Bell-freezing functional form was imported from waveguide QED (Session #235 admission).
              Audit finding propagated to site 2026-05-16.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>BTFR Slope (TEST-09) — MOND-shared, Not Discriminating</h3>
              <ValidationBadge status="reparametrization" label="MOND-shared — Milgrom 1983 / McGaugh 2012" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The site previously stated a universal BTFR exponent n&nbsp;&#x2248;&nbsp;2.2 — a transcription error (no archive source). The archive (Session 193) correctly predicts
              <em> regime-dependent</em> slopes: n&nbsp;&#x2192;&nbsp;4 deep-MOND, n&nbsp;&#x2192;&nbsp;2 near-Newtonian,
              n&nbsp;&#x2248;&nbsp;2.75 full-sample. Lelli 2019&apos;s n&nbsp;=&nbsp;3.85 is consistent with a SPARC deep-MOND sample.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Critical issue:</strong> The regime-dependent slope (n&nbsp;&#x2192;&nbsp;4 deep-MOND, n&nbsp;&#x2192;&nbsp;2 Newtonian)
              is a textbook MOND signature (Milgrom 1983, McGaugh 2012) that follows directly from the MOND interpolating function.
              A positive result confirms both Synchronism and MOND — it cannot discriminate. Reclassified from
              &ldquo;Restated as Regime-Dependent&rdquo; to Reparametrization.
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

          <div className="card" style={{ borderLeft: '3px solid #ef4444' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>H₀ Tension — Not Addressed</h3>
              <ValidationBadge status="speculative" label="No prediction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The Hubble tension — a ~5σ discrepancy between early-universe (CMB) and late-universe
              (distance-ladder) measurements of H₀ — is the dominant open problem in cosmology (2018–2026).
              Synchronism makes no statement on H₀. If C(ρ) couples to expansion-rate physics via
              ρ_crit ↔ Λ, there should be a prediction about how coherence modifies recombination
              (early-time fix) or late-time acceleration (late-time fix). Neither has been worked out.
              A framework claiming cosmological scope that does not address H₀ tension is leaving
              the most-cited empirical opening in cosmology off the table.
            </p>
          </div>
        </div>
      </section>

      {/* 47 Contributions */}
      <section className="section content-width">
        <h2>The 47 Genuine Contributions</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Session #615 (final accounting) inventoried all genuine contributions across ~3,308 sessions.
          Discovery rate: 1.4% &mdash; 47 contributions out of ~3,308 sessions. That&apos;s normal for science.
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

        <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.5rem', padding: '0.75rem 1rem', margin: '1rem 0', fontSize: '0.9rem' }}>
          <strong style={{ color: '#ef4444' }}>Methodology caveat:</strong>{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>
            The 1.4% rate is an <em>internal-consistency-survival rate</em>, not a discovery rate.
            A2ACW adversarial agents share the same training distribution &mdash; they catch inconsistencies
            the corpus already knows, but cannot find errors systematic across the whole corpus, and cannot
            generate novelty that isn&apos;t already in the training distribution.
            The 47 contributions are exploration outputs and well-posed research questions, not confirmed results.
            Zero confirmed predictions means zero: no contribution in this list has been validated by
            independent experiment.
            See <Link href="/research-philosophy#validation-badge-taxonomy" style={{ color: 'var(--color-accent-blue)' }}>Research Philosophy</Link> for what &ldquo;Validated&rdquo; requires.
          </span>
        </div>

        <h3>What the Program Demonstrates</h3>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem' }}>
          <li><strong>Wrong theories motivate right questions</strong> &mdash; 0 predictions confirmed, yet 47 genuine contributions</li>
          <li><strong>Self-correction accelerates with experience</strong> &mdash; error recognition delay: 373 sessions (early) &rarr; 1 session (late)</li>
          <li><strong>Discovery rate increases with focus</strong> &mdash; chemistry 0.52% &rarr; ALFALFA/CDM 71.4%</li>
          <li><strong>Honest negative results are valuable</strong> &mdash; OQ007 fractal bridge: 36/36 tests, clean definitive closure</li>
          <li><strong>A 1.4% internal-consistency-survival rate is normal for in-distribution AI debate</strong> &mdash; out-of-distribution evaluation by domain experts is a separate step</li>
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
