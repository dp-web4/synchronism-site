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
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem', maxWidth: '65ch' }}>
        This page audits the claims listed in{' '}
        <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</Link>.
        It documents what works, what failed, what we got wrong, and what remains untested.
        Updated as new results come in.
      </p>

      <details id="validation-badge-definitions" style={{ marginBottom: '2rem', maxWidth: '65ch' }}>
        <summary style={{ cursor: 'pointer', color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>
          Validation badge definitions (canonical reference)
        </summary>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem' }}>
          <strong>MRH-relationship tags</strong> describe how a claim sits in the current research inventory.
          Preferred for in-flight work. Rationale: at the current stewardship stage, <em>nothing is honestly
          characterizable as &ldquo;established&rdquo;</em> — the framework is being stewarded along many parallel paths,
          and verdict-shaped tags promote substantive content out of that parallel space prematurely.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>Active-MRH</strong><span>Currently in active research focus; being extended or revised</span>
          <strong>Parallel-Paths</strong><span>In the framework&apos;s parallel hypothesis space; not currently in active focus but not abandoned</span>
          <strong>Sidelined</strong><span>Was in active focus, currently not pursued; reasons documented; reactivation condition specified</span>
          <strong>Superseded</strong><span>Replaced by a later formulation; pointer to successor</span>
          <strong>Audited-Negative</strong><span>Closed audit finding on a historical track; durable record; does not move</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong>Descriptive tags</strong> describe an empirical relationship rather than a verdict on truth-status. These remain useful at the current stewardship stage:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>Untested</strong><span>Prediction exists, no data yet</span>
          <strong>Speculative</strong><span>Conceptual proposal without quantitative test</span>
          <strong>Reparametrization</strong><span>Equivalent to existing physics in different notation</span>
          <strong>Failed</strong><span>Prediction contradicted by data (with specific error)</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong>Deprecated</strong> (kept for back-compat with existing usages; do not appear in new content):
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          <strong>Validated</strong><span>Verdict-shaped; conflicts with stewardship discipline. Use Active-MRH or Reparametrization as appropriate.</span>
          <strong>Strongly Supported</strong><span>Same; existing usages being migrated incrementally by the daily maintainer track.</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong>Operational states</strong> (not badges; describe prediction lifecycle):
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>Kill Criterion Triggered</strong><span>A pre-registered falsification threshold was crossed. Carries Failed badge. Stronger than &ldquo;Failed&rdquo; alone because failure was quantified in advance.</span>
          <strong>MOND-shared</strong><span>A positive result confirms Synchronism AND MOND equally; only a null can discriminate. TEST-09, TEST-10. Not a badge — a non-discrimination marker.</span>
          <strong>Withdrawn</strong><span>Framework disowned the test — not from data refutation, but from internal contradiction, unmotivated amplitude, or supersession. Carries no badge (never adjudicated). TEST-04 (BAO).</span>
          <strong>Self-Eliminating-or-Tie</strong><span>No measurement outcome selects Synchronism over the standard alternatives — either the signal is below systematics reach, or both outcomes (null and confirmed anomaly) are covered by Newton or MOND respectively. TEST-02 (wide binaries).</span>
          <strong>Sign Correction</strong><span>Annotation marking that the prediction direction on this page was corrected after initial publication. Not a verdict badge — a correction provenance marker. TEST-02 (2026-06-06).</span>
          <strong>Null-Class</strong><span>The result achieves the same or better fit using a structurally simpler null model (e.g., polynomial in atomic number Z). The match is evidence of monotonicity in the target variable, not framework-specific physics. Chemistry correlation explorer.</span>
          <strong>89% Boundary-Consistent</strong><span>Fraction of natural phenomena in the gamma-boundary catalog whose gamma parameter falls within the regime boundaries defined by the visualizer. Descriptive only — not a prediction or a test. Carries Template Bias Caveat.</span>
          <strong>Template Bias Caveat</strong><span>The 89% consistency figure is derived from a catalog that was populated <em>using</em> the framework's regime boundaries as a guide — boundary-consistent framing is baked into the collection method. The fraction should not be read as independent confirmation.</span>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
          Full discipline: <Link href="/research-philosophy" style={{ color: 'var(--color-accent-blue)' }}>Research Philosophy</Link>.
          Migration plan: <a href="https://github.com/dp-web4/synchronism-site/blob/main/forum/post-kimi-reframe-site-update-instructions-2026-05-28.md" style={{ color: 'var(--color-accent-blue)' }}>forum post 2026-05-28</a>.
        </p>
      </details>

      {/* Plain-language summary for casual readers */}
      <div style={{ background: 'rgba(59, 130, 246, 0.06)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1.5rem', maxWidth: '65ch' }}>
        <p style={{ margin: '0 0 0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          <strong>Why read an audit of a theory that didn&apos;t pan out?</strong> Because the honest map of what
          failed — and <em>why</em> — is the actual product. Knowing what a density-based coherence function
          structurally cannot do is genuinely useful: it eliminates a class of modified-gravity ideas
          in one stroke, explains why galaxy fits can&apos;t extend to clusters, and documents a rare case of
          a self-audited theory reaching its own null verdict. The methodology that produced this audit
          is the contribution; the physics just provided the test case.
        </p>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          <strong>In plain language — what failed:</strong> The framework&apos;s biggest external test came out backwards —
          we predicted the universe&apos;s large-scale structure should be growing <em>slower</em> than
          the standard model, but real data (DESI 2024) shows it growing at or <em>above</em> standard-model
          rates (note: that particular test was post-hoc, not pre-registered). The galaxy transition-shape
          test — the one non-degenerate discriminating test vs MOND — was run on 2,807 SPARC data
          points (175 galaxies) in May 2026 and collapsed the framework onto MOND (ΔBIC=+184 against the γ=2 version;
          free-γ = MOND). The predictions we thought were novel turned out to already exist in physics under
          different names. Zero predictions have been independently confirmed.
          Zero parameters have an independent first-principles derivation — the last surviving candidate (A-from-Jeans) was closed as audited-negative on 2026-06-07: the Session 66 script produces A ≈ 4.6×10⁻⁵ (600× off the stated 0.029) under the framework&apos;s own ρ<sub>crit</sub> ∝ V² scaling.
          Scoreboard: <strong>0 confirmed, 0 prospective predictions tested, 6 reparametrizations, 1 galaxy-program closure, 0 independently-derived parameters</strong>.
        </p>
      </div>

      {/* Overall Verdict */}
      <section className="card card-highlight section">
        <h2 style={{ color: 'var(--color-accent-warm)' }}>The Verdict (Updated May 2026)</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          After 3,308 sessions + 13 adversarial stress tests: <strong>0 confirmed predictions, 0 prospective
          predictions tested</strong>. One closure event + one external disfavor in May 2026:
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>(1) DESI fσ₈ (TEST-04a — corrected 2026-05-26):</strong> The framework predicted
          fσ₈(z=0.51)&nbsp;≈&nbsp;0.418 (12% suppression below ΛCDM&apos;s 0.474).
          <strong>What DESI DR1 full-shape actually shows (arXiv:2411.12021):</strong> LRG1 (z=0.51)
          fσ₈/(fσ₈)_fid&nbsp;=&nbsp;1.16&nbsp;±&nbsp;0.13 — <em>above</em> the ΛCDM fiducial; combined σ₈&nbsp;=&nbsp;0.841&nbsp;±&nbsp;0.034 (Table 10).
          Synchronism predicted σ₈&nbsp;≈&nbsp;0.76; actual 0.841 → <strong>2.4σ tension</strong>.
          <strong>Kill criterion triggered</strong> (fσ₈&nbsp;&gt;&nbsp;0.46 required; LRG1 actual fσ₈&nbsp;&asymp;&nbsp;1.16&times;fid&nbsp;&gg;&nbsp;0.46).
          Verdict: <strong>post-hoc retrodiction — disfavored ~2σ; suppression not observed; data ΛCDM-consistent.</strong>
          Note: a 2026-05-25 &ldquo;correction&rdquo; that claimed fσ₈&nbsp;≈&nbsp;0.45 was itself an error — that value belongs to arXiv:2512.03230
          (DESI Peculiar Velocity Survey, z&asymp;0.07), misattributed to the z=0.51 full-shape slot. The &ldquo;mechanism-class
          transferable contribution&rdquo; characterization is not restored — it was an overstatement of a post-hoc test.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>(2) RAR Transition Shape (2026-05-21):</strong> The one non-degenerate galaxy-scale
          discriminating test — whether the compander&apos;s transition curve (γ=2) differs from McGaugh&apos;s MOND
          interpolating function — was run on 2807 real SPARC points. γ=2 is refuted at ΔBIC=+184
          (conservative: ≈33). Free-γ converges to γ≈0.49&nbsp;=&nbsp;MOND, with RMS identical to McGaugh.
          Net discriminating galaxy tests vs MOND: <strong>0, by execution</strong>.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>The entity criterion Γ&nbsp;&lt;&nbsp;m</strong>, previously labeled the sole surviving novel
          prediction, was reclassified as a <strong>Reparametrization</strong> (2026-05-20): it is the standard
          narrow-width condition Γ&nbsp;≪&nbsp;m from QFT — known since Breit-Wigner (1936) and formalized
          in the Källén-Lehmann spectral representation. Synchronism&apos;s contribution is an ontological
          interpretation, not the condition. Novel-survivor count: <strong>0</strong>.
          The framework produced <strong>47 internal contributions</strong> across ~3,308 sessions &mdash;
          well-posed questions and methodology outputs, zero confirmed novel results.
          &ldquo;Unconfirmed&rdquo; &ne; &ldquo;wrong&rdquo; &mdash; but the evidence now includes one external refutation and zero surviving novel predictions.
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
              <h3>MOND (Modified Newtonian Dynamics) Unification: a&#x2080; = cH&#x2080;/(2&#x03C0;)</h3>
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
              <ValidationBadge status="reparametrization" label="Null Model RUN (2026-05-10) — Null-Class" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              1,703 chemical phenomena. Sound velocity r = 0.982, electronegativity r = 0.979.
              Top correlations are strong — and the relevant null <strong>has been computed</strong>: it
              matches them.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Null model result (run 2026-05-10; this row previously said &ldquo;not yet
              run&rdquo; — that was stale):</strong> Sound velocity, electronegativity, and atomic
              volume are all near-monotonic functions of atomic number Z, so the relevant null is
              r(polynomial in Z), not r = 0. A 2-parameter degree-2 polynomial in Z was fit to the
              same targets, analytically and numerically: <strong>|&#x0394;r| &#x2264; 0.07 on
              essentially all density-monotonic targets, and the polynomial sometimes outperforms
              Synchronism</strong> (r &#x2248; 0.99 vs &#x2248; 0.87 on linear-in-Z and generic
              smooth-monotonic targets). Verdict: the chemistry correlations are <strong>null-class</strong> —
              they demonstrate density-monotonicity (known physics), not anything specific to C(&#x03C1;).
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
              <h3>Critical Exponents — Category Error (Corrected 2026-05-25)</h3>
              <ValidationBadge status="failed" label="Wrong Category — Not a Critical Phenomenon" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              An explicit, everywhere-analytic sigmoid has no critical point — no fixed point, no diverging
              susceptibility, no diverging correlation length. C(&#x03C1;) is not a critical phenomenon:
              &#x03C1; is an external input evaluated directly, not solved self-consistently (unlike Ising&apos;s
              m&nbsp;=&nbsp;tanh(&beta;Jzm), where m appears on both sides — that&apos;s what generates criticality).
              Comparing &ldquo;predicted critical exponents&rdquo; to renormalization-group exponents presupposes
              the very criticality C(&#x03C1;) does not have. The prior framing (&ldquo;exponents 2&times; off&rdquo;)
              was a fossil from the phase-transition era of the project — retained too long alongside the
              (correct) compander reframe. Corrected verdict: the Landau-universality argument fails not because
              the exponents are wrong by a factor, but because <strong>the category does not apply.</strong>
              C(&#x03C1;) belongs to the compander family (&#x03BC;-law / Hill / Naka&ndash;Rushton class).
              No critical exponents exist to compare.
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
              <h3>RAR Transition Shape — SPARC ΔBIC=+184, γ=2 Refuted, γ<sub>free</sub>=MOND (2026-05-21)</h3>
              <ValidationBadge status="failed" label="Kill Criterion Triggered — CLOSED" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The only non-degenerate galaxy-scale discriminating test between the Synchronism compander
              (μ<sub>Syn</sub>&nbsp;=&nbsp;tanh(γ&nbsp;ln(1+x)), γ=2) and MOND&apos;s RAR interpolating function
              was executed on 2807 real SPARC points. Kill criterion: ΔBIC &gt; 10 favoring McGaugh refutes γ=2.
              Actual result: <strong>ΔBIC&nbsp;=&nbsp;+184</strong> (conservative intra-galaxy correlation
              correction: ΔBIC&nbsp;≈&nbsp;33 — still decisive).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              The residual is a coherent S-shaped ≈0.05–0.10 dex signature at the RAR transition
              (g<sub>bar</sub>&nbsp;≈&nbsp;a₀), significant at ~8σ per bin. Free-γ fit converges to γ≈0.49&nbsp;=&nbsp;MOND,
              with RMS identical to McGaugh to four digits. ΔBIC&nbsp;=&nbsp;+7 for free-γ is entirely the BIC
              parameter penalty, not a fit difference — the compander at its best-fit γ is MOND.
              <strong> Net discriminating galaxy tests vs MOND: 0, by execution.</strong>
              Script: <code style={{ fontSize: '0.78rem' }}>explorer/scripts/rar_transition_shape_real_sparc.py</code>.
              See also <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation: RAR Transition Shape</Link>.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>TEST-04a: DESI RSD fσ₈ — Post-hoc Retrodiction, Disfavored ~2σ (Corrected 2026-05-26)</h3>
              <ValidationBadge status="failed" label="Disfavored ~2σ — Kill Criterion Triggered" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              <strong>The fundamental failure is directional (sign-wrong), independent of bin choice:</strong> the
              prediction was a <em>suppression</em> of structure growth (fσ₈ below ΛCDM), and DESI sees growth at or
              <em> above</em> ΛCDM. A suppression model that lands above the fiducial is sign-wrong regardless of
              which bin you look at. The 2.4σ tension follows from this directional reversal, not the other way around.
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Session 107 (Dec 2025) predicted fσ₈(z=0.51)&nbsp;≈&nbsp;0.418 — a 12% suppression below ΛCDM (0.474).
              <strong> DESI DR1 full-shape (arXiv:2411.12021):</strong> LRG1 (z_eff=0.51)
              fσ₈/(fσ₈)_fid&nbsp;=&nbsp;1.16&nbsp;±&nbsp;0.13 — above the ΛCDM fiducial.
              Combined σ₈&nbsp;=&nbsp;0.841&nbsp;±&nbsp;0.034 (Table 10). Synchronism predicted σ₈&nbsp;≈&nbsp;0.76.
              Tension: <strong>2.4σ</strong>. Kill criterion (fσ₈&nbsp;&gt;&nbsp;0.46) triggered.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Two aspects of the honest verdict:</strong> (1) <em>Post-hoc origin — doubly so</em> — Session 107 was committed
              2025-12-10 after DESI DR1 was published April 2024; σ₈ calibrated to the lensing S₈ tension (KiDS/DES era), then propagated to DESI.
              No prospective prediction registered. Additional layer: the S₈ tension itself is receding —
              DES Y3 6×2pt and KiDS-Legacy (2024–2025) reanalyses have pulled S₈ back toward Planck,
              so the calibration anchor was a transient observational state, not a stable target.
              This makes TEST-04a post-hoc against a moving baseline. (2) <em>Disfavored ~2σ, wrong direction</em>
              — suppression not observed; data is ΛCDM-consistent or mildly above. A 2026-05-25 &ldquo;correction&rdquo;
              that claimed kill not triggered was itself an error: 0.4497&nbsp;±&nbsp;0.0548 belongs to arXiv:2512.03230
              (DESI Peculiar Velocity Survey, z&asymp;0.07) misattributed to the z=0.51 full-shape slot.
              The &ldquo;mechanism-class transferable contribution&rdquo; is NOT restored — it was an overstatement.
              <strong>Context (2026-05-23):</strong> EFTofLSS analyses (Cabass, Simonović, Zaldarriaga et al. 2024-2025)
              explain DESI DR1 fσ₈ within ΛCDM at 1-2σ via one-loop counterterms.
              <strong>Calibration note (2026-06-24):</strong> the kill fires on LRG1 alone — one bin,
              one redshift, ~2.15σ. Standard practice treats a kill as ≥3σ or multi-bin consistent.
              The sign-failure (suppression predicted, enhancement observed) is the load-bearing constraint;
              the specific tension level should be re-adjudicated against DESI DR2 full-shape
              (all bins, full redshift range) before the "Kill Criterion Triggered" label is treated as definitive.
            </p>
            <div style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginTop: '0.75rem', fontSize: '0.85rem' }}>
              <strong style={{ color: 'var(--color-accent-blue)' }}>What this rules out beyond Synchronism:</strong>{' '}
              DESI DR1 full-shape (arXiv:2411.12021) finds LRG1 fσ₈/(fσ₈)<sub>fid</sub>&nbsp;=&nbsp;1.16&plusmn;0.13 — growth <em>above</em> ΛCDM, opposite the predicted suppression.
              This constrains <strong>Synchronism-form uniform, scale-independent late-time growth suppression</strong>: any framework that predicts a uniform coherence-damping of structure growth across all scales sits in the same disfavored direction.
              <em>Scope note:</em> this does <strong>not</strong> exclude massive neutrinos, warm dark matter, or f(R) gravity &mdash; those mechanisms are k-dependent and scale-localized, fundamentally distinct from a uniform coherence suppression; DESI+CMB joint analyses treat them as fully live. The constraint applies specifically to the uniform scale-independent class, not to suppression mechanisms in general.
            </div>
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
              <strong>Key refutation — boost ceiling B<sub>max</sub> = 3.17:</strong> The framework predicts a
              maximum gravitational boost ratio B = g<sub>obs</sub>/g<sub>bar</sub> of
              B<sub>max</sub> &#x2248; 3.17 (from SPARC — Spitzer Photometry &amp; Accurate Rotation Curves — calibration).
              The deepest SPARC bin shows &#x27E8;B&#x27E9; = 10.82, with 579 individual SPARC
              galaxies exceeding B<sub>max</sub>. This is the strongest direct refutation in the
              framework&apos;s own internal audit. It was not previously visible on this page.
              <em> (Notation note 2026-06-12: the source audit called this quantity &ldquo;&#x03B3;&rdquo;,
              colliding with the transition-sharpness parameter &#x03B3; = 2/&#x221A;N<sub>corr</sub> used
              everywhere else on this page — including the separate &ldquo;&#x03B3; = 2 refuted at
              &#x0394;BIC = +184&rdquo; result. They are different quantities; we use B here to keep
              them apart.)</em>
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
          <div className="card" style={{ borderLeft: '3px solid rgba(167,139,250,0.6)', background: 'rgba(167,139,250,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: 'var(--color-accent-violet)' }}>Structural No-go: Local Density vs Non-local Acceleration (Milgrom 2005 instance)</h3>
              <ValidationBadge status="failed" label="Wrong Variable (2026-06-01)" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              C(&#x03C1;) is a function of <em>local density</em> &#x03C1;. The RAR/MOND relation it mimics
              in galaxies is a function of g<sub>bar</sub> — the <em>enclosed-mass acceleration</em>, a
              non-local, geometry-dependent quantity. A pointwise intensive variable cannot reproduce an
              acceleration-space relation across systems with different mass geometries except by
              per-system calibration.
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The failure surfaces exactly where the two variables decouple:{' '}
              <strong>clusters require &#x03C1;<sub>crit,cluster</sub> 10<sup>4</sup>–10<sup>6</sup>&times;
              smaller than the galaxy value</strong> — destroying universality. Four natural ansätze tested
              on Coma: A1/A4 overshoot by 10<sup>4</sup>; A2 collapses to Newtonian; A3 is structurally
              impossible (C &#x2208; [0,1) bounds velocity at ≤2, observed dispersion requires ~4.6).
            </p>
            <div style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginTop: '0.75rem', fontSize: '0.85rem' }}>
              <strong style={{ color: 'var(--color-accent-violet)' }}>Transferable finding:</strong>{' '}
              This no-go applies to any modified-gravity ansatz keyed on <em>local volumetric density &#x03C1;(r)</em>.
              It does <strong>not</strong> apply to frameworks using non-local state variables — Verlinde (enclosed
              baryonic mass M<sub>B</sub>(&lt;r)), MOG/STVG (enclosed mass scalar), or MOND surface-density
              formulations (column-integrated &Sigma;) all escape it. The discriminating axis is the
              <em>locality</em> of the state variable, not whether the framework is &ldquo;density-based.&rdquo;{' '}
              The root obstruction is Milgrom&apos;s non-locality theorem (astro-ph/0510117): a MOND-type
              modification must be strongly non-local in space/trajectory to produce the acceleration-keyed
              RAR (Lelli et al. 2017). C(&#x03C1;) is the quantified <em>local-density instance</em> of
              that obstruction, not a new theorem.
              Note: MOND also has one acceleration scale (a<sub>0</sub>) and fails at clusters by a
              residual factor of ~2 — so scale-count alone is not the discriminator; the variable (local
              &#x03C1; vs non-local g<sub>bar</sub>) is.
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Dark Matter Viscosity Sign Error</h3>
              <ValidationBadge status="failed" label="Wrong Direction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              CFD mapping: C = 1/&mu;<sub>eff</sub>. Dark matter (low C) should mean high viscosity = more sticky.
              But the Bullet Cluster shows dark matter passes through itself &mdash; LESS sticky than baryons.
              The viscosity interpretation predicts the wrong direction. The deeper structural failure (local &#x03C1; vs
              non-local g<sub>bar</sub> variable mismatch) is described in the box above.
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
              <h3>Entity Criterion: &Gamma; &lt; m — Reclassified (2026-05-20)</h3>
              <ValidationBadge status="reparametrization" label="Ontological Reframe — Not a Novel Prediction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Previously labeled the sole surviving novel prediction. The condition Γ&nbsp;&lt;&nbsp;m is
              the standard narrow-resonance / narrow-width condition from QFT — required for a Breit-Wigner pole
              to be well-defined. Synchronism&apos;s contribution is an ontological interpretation
              (&ldquo;coherence cycle completion&rdquo;), not the condition itself. QFT already classifies
              broad resonances as poor quasiparticles and narrow ones as well-defined particles.
              Novel-survivor count across 3,308 sessions: <strong>0</strong>.
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
        <h2>Research Outputs (Not Discoveries)</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Session #615 (final accounting) inventoried all outputs across ~3,308 sessions:
          47 research contributions at a 1.4% session yield.
          <strong> Novel-surviving yield after domain-expert audit: 0.</strong>{' '}
          Every output that a domain expert examined resolved as a reparametrization of known physics,
          an internal consistency finding, or a null result. The 47 outputs are genuine —
          well-posed questions, characterized failures, methodology results — but none constitutes a
          confirmed novel prediction.
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
          TFR residual as complete M/L predictor (51.4% improvement on 14,437 galaxies — an
          analysis subset of the 14,585-galaxy ALFALFA-SDSS cross-match),
          &#963;<sub>int</sub>&nbsp;=&nbsp;0.086&nbsp;&plusmn;&nbsp;0.003&nbsp;dex (definitive BTFR intrinsic scatter).
          <strong> Status: uncharacterized — not audited.</strong> Unlike the framework&apos;s headline
          claims, these numbers have not been run against null models or prior art (residual modeling
          on SPARC/ALFALFA is a worked field); treat them as exploration outputs, not vetted contributions.
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
          <li><strong>In-distribution self-critique has a ceiling</strong> &mdash; A2ACW filters errors the corpus already knows; 1.4% session yield / 0 novel survivors is the result. Out-of-distribution novelty requires out-of-distribution input (new data, different training set).</li>
        </ul>
      </section>

      {/* Landscape positioning — added 2026-05-24 per P4 researcher request */}
      <section className="section content-width">
        <h2>Where This Sits in the Modified-Gravity Landscape</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Several frameworks occupy the same phenomenological territory as Synchronism in the low-acceleration galaxy regime. All share the observation that a₀ ≈ cH₀/(2π) emerges from cosmological constants:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
          {[
            { name: 'MOND (Milgrom 1983)', desc: 'Empirical μ-function. No dynamics, no governing equation. Synchronism\'s compander collapses onto MOND at free-γ (SPARC RAR, ΔBIC=+7 vs ΔBIC=+184 for γ=2).' },
            { name: 'Verlinde Emergent Gravity (2016)', desc: 'Derives MOND-like rotation curves from entropy gradients in the Hubble volume. Tested by Brouwer et al. (2017) KiDS lensing — consistent at ~1σ. Key question: does C(ρ) reduce to Verlinde in the low-acceleration limit? Not yet shown.' },
            { name: 'TeVeS (Bekenstein 2004)', desc: 'Lorentz-covariant scalar-vector-tensor extension of MOND. Has galaxy-rotation and lensing predictions. Failed: requires dark matter for the Bullet Cluster; GW170817 constrains the tensor sector.' },
            { name: 'MOG / STVG (Moffat 2006)', desc: 'Running gravitational coupling with massive vector field. Makes post-Newtonian predictions beyond rotation curves. No direct comparison with Synchronism compander exists.' },
          ].map(f => (
            <div key={f.name} className="card" style={{ padding: '0.6rem 0.9rem' }}>
              <strong style={{ color: 'var(--color-accent-blue)' }}>{f.name}</strong>
              <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.5rem' }}>{f.desc}</span>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Current status:</strong> Synchronism&apos;s compander is MOND-equivalent in the galaxy regime (free-γ = 0.49 ≡ MOND at SPARC precision). Relationship to Verlinde&apos;s entropic gravity is uncharted — whether C(ρ) is a sub-case, extension, or reparametrization of Verlinde in that regime has not been worked out. See <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link> for the SPARC result.
        </p>
      </section>

      <section className="section content-width">
        <h2>Cosmological Tensions We Don&apos;t Address</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
          A framework claiming cosmological scope should say explicitly where it is silent. The following are open problems in cosmology (2024–2026) where Synchronism makes no prediction:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <li><strong>H₀ tension (~5σ):</strong> CMB vs. distance-ladder Hubble constant disagreement. Synchronism makes no statement on H₀. (See <Link href="/honest-assessment#h0-tension" style={{ color: 'var(--color-accent-blue)' }}>What&apos;s Untested</Link> above.)</li>
          <li><strong>JWST early galaxies:</strong> JWST has found massive, evolved galaxies at z &gt; 10 that challenge standard structure formation. Several modified-gravity frameworks address this; Synchronism has no analysis.</li>
          <li><strong>S₈ tension (receding):</strong> KiDS/DES historically measured σ₈ lower than Planck CMB predicts. Synchronism&apos;s σ₈ prediction (0.76) was calibrated to this tension in Session 102. However, DES Y3 6×2pt and KiDS-Legacy (2024–2025) are pulling S₈ back toward Planck, weakening the tension. Synchronism&apos;s calibration anchor is a transient state, not a stable observational target — which makes TEST-04a post-hoc against a moving baseline.</li>
          <li><strong>Primordial non-Gaussianity (fNL):</strong> DESI and future surveys constrain non-Gaussianity from large-scale structure. No coherence-based prediction exists.</li>
        </ul>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Explicit silence is more honest than tacit omission: these are open problems for Synchronism, not just unaddressed topics.
        </p>
      </section>

      <section className="section content-width">
        <h2>Self-Audit on the Self-Audit Protocol (A2ACW)</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
          The adversarial self-audit (A2ACW) produced the 47 contributions and maintained the honest
          assessment. Two retrospective tests of the protocol&apos;s own limits were run in May 2026:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ marginTop: 0 }}>Temporal-Asymmetry Test (2026-05-18)</h3>
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#ef4444' }}>0 / 6 caught</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              6 claims later demoted (Born rule, wide-binary EFE [External Field Effect — MOND], galaxy rotation, decoherence formula, chemistry r=0.98, dual-C).
              A2ACW retrospectively tested: would the adversarial protocol have caught these? Result: <strong>0 of 6</strong>.
              Median prior-art year for the demoted claims: ~1996. Two models sharing the same training corpus
              share the same blind spots.
            </p>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ marginTop: 0 }}>Vocabulary-Asymmetry Test (2026-05-19)</h3>
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#22c55e' }}>4 / 6 caught</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Pre-translating claims into modern vocabulary before adversarial review caught 4 of the 6
              demoted claims. The 6 demotions decompose into three failure-mode classes: (1) prior-art
              rediscovery — 4 claims (Born rule/Zurek 2003, wide-binary EFE/Bekenstein-Milgrom 1984,
              galaxy rotation/MOND 1983, Γ=γ²(1−c)/Palma-Suominen-Ekert 1996); (2) internal-consistency
              tension — 1 (dual-C); (3) null-baseline deficit — 1 (chemistry r=0.98).
              Vocabulary asymmetry catches <strong>4/4 on the prior-art sub-class</strong>; the 2 misses
              are different failure modes, not vocabulary failures.
            </p>
          </div>
        </div>
        <div style={{ background: 'rgba(245, 158, 11, 0.07)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          <strong style={{ color: '#f59e0b' }}>A2ACW v2 implication:</strong>{' '}
          A complete adversarial protocol needs three axes: (1) vocabulary translation (catches prior-art
          rediscovery), (2) symbol audit (catches notation collisions — e.g., γ used as three incompatible
          quantities across the framework), (3) null-baseline computation (catches absence-of-evidence claims
          presented as positive evidence — e.g., r=0.98 on density-monotonic targets). Combined: 6/6 theoretical
          catch rate (self-simulated upper bound). See{' '}
          <Link href="/a2acw" style={{ color: 'var(--color-accent-blue)' }}>A2ACW Protocol &rarr;</Link>
        </div>
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
