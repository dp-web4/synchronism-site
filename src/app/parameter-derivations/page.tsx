'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function ParameterDerivations() {
  return (
    <>
      <Breadcrumbs currentPath="/parameter-derivations" />
      <PathNav currentPath="/parameter-derivations" />
      <h1>Parameter Derivations</h1>
      <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1.5rem', maxWidth: '65ch' }}>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <strong style={{ color: '#f59e0b' }}>Honest framing:</strong> Despite the page title, this is not a
          derivations page in the mathematical sense. γ = 2/√N<sub>corr</sub> is a <strong>motivated ansatz</strong> (the
          factor 2 is not rigorously derived; CLT is invoked for correlated DOF where CLT doesn&apos;t apply).
          ρ<sub>crit</sub> = A·V<sub>flat</sub>² with A ≈ 0.029 is <strong>calibrated</strong> to the Jeans criterion — V<sub>flat</sub> is the input.
          The scaling constants are dimensional analyses with 3–10% errors that may reflect implicit calibration
          rather than predictive accuracy. The functional form tanh is <strong>motivated</strong> by analogy with the sigmoid/compander family (μ-law, Hill, logistic), not uniquely derived. <strong>Update (2026-06-07):</strong> A-from-Jeans — the only surviving first-principles candidate — is now audited-negative: the derivation that produces 0.029 uses a different scaling law (ρ<sub>crit</sub> ∝ V<sup>0.5</sup>) than the framework's stated ρ<sub>crit</sub> ∝ V², and the stated formula gives A ≈ 4.6×10⁻⁵ (600× off). Zero parameters have independent first-principles derivations. A more accurate title: <em>Parameter Calibration &amp; Honest Ansätze</em>.
          Read this page before concluding the equation is derived.
        </p>
      </div>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '65ch' }}>
        The coherence function has two kinds of parameters: the <strong>functional form</strong> (tanh,
        &#x03B3; = 2/&#x221A;N<sub>corr</sub>) which is motivated by the sigmoid/compander family (μ-law, Hill, logistic), and
        the <strong>scaling constants</strong> (A, a&#x2080;, &#x03A3;&#x2080;, R&#x2080;) which are
        calibrated to observational anchors with 3&ndash;10% errors.
        Whether those errors reflect approximation limits or implicit calibration is an open question.
      </p>

      <section className="section content-width">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1.25rem', borderLeft: '3px solid var(--color-dark-border)', paddingLeft: '0.75rem' }}>
          Badge labels on this page: <strong>Motivated Ansatz</strong>, <strong>Motivated Choice</strong>, and{' '}
          <strong>Asserted, Not Derived</strong> are
          sub-types of <em>Speculative</em> &mdash; physically motivated but not uniquely derived.{' '}
          <strong>Freeman&apos;s Law Re-expressed</strong> and <strong>Dimensional Analysis</strong> are
          sub-types of <em>Reparametrization</em> &mdash; reproducing known observational laws in different notation.{' '}
          <strong>3% Error</strong> below uses the deprecated <em>Validated</em> label
          (pre-2026-05 convention — do not interpret as passing any current audit criterion;
          the underlying R₀ derivation is a dimensional analysis, not an independent first-principles result).
          See <a href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>badge taxonomy</a> for the current two-family system.
        </p>

        <h2>The Complete Chain</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>1. &#x03B3; = 2/&#x221A;N<sub>corr</sub></h3>
              <ValidationBadge status="speculative" label="Motivated Ansatz" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #64-65</p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem' }}>
              <strong style={{ color: '#f87171' }}>Sensitivity ordering, measured 2026-09-03 (explorer, L2 field equation on 153 SPARC galaxies):</strong>{' '}
              this page audits hardest the parameters the model is <em>least</em> sensitive to. Moving &#x03B3; by 40&times; and A
              by 10<sup>9</sup>&times; at a working floor changes &#x03C7;&sup2;/N by only 1.07&ndash;2.7&times;; moving the <em>floor</em>
              (item 8) at fixed (&#x03B3;, A) changes it by up to 6.35&times;10<sup>4</sup>. The Fisher correlation of (ln &#x03B3;, ln A) is
              +1.000000 (&#x03BA; = 3.6&times;10<sup>8</sup>): the two are one parameter in the galaxy sector, and neither is
              identifiable there. The CLT point below stands, but the practical verdict on &#x03B3; is not &ldquo;wrong sign&rdquo;
              so much as <em>unmeasurable where it was fitted</em>. Finding: <code>explorer/findings/the-parameter-ledger-is-unfalsifiable-and-the-knee-is-misplaced-by-25000x.md</code>.
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The 1/&#x221A;N<sub>corr</sub> scaling borrows from central-limit-theorem (CLT) statistics.
              The factor of 2 is motivated by phase-space dimensionality arguments (6D to 3 effective)
              but is not rigorously derived &mdash; integrating out momenta introduces temperature- and
              mass-dependent factors, not a clean factor of 2. Best understood as a physically motivated ansatz.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              <strong>Internal inconsistency (2026-05-20):</strong> The CLT&apos;s 1/&#x221A;N scaling governs
              the standard error of the mean for <em>iid</em> (independent, identically distributed) variables.
              But N<sub>corr</sub> is by construction the count of <em>correlated</em> degrees of freedom —
              exactly the regime where the iid hypothesis fails and 1/&#x221A;N does not apply.
              Invoking CLT for correlated N<sub>corr</sub> is self-contradictory. The scaling is
              borrowed by analogy, not derived from the CLT. It is an ansatz with a fitted prefactor.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              <strong>Sign inversion (2026-06-06 / 2026-06-29):</strong> Beyond being underived, the
              N<sub>corr</sub>-dependence is <em>sign-inverted relative to the mean-field physics it borrows</em>.
              In any mean-field model (Ising, Curie–Weiss), increasing the number of correlated units
              makes the transition <em>sharper</em> — fluctuations stop self-averaging near criticality;
              cooperative effects build. Here, &#x03B3; = 2/&#x221A;N<sub>corr</sub> <em>decreases</em> with
              N<sub>corr</sub>, giving the most-correlated systems (BCS, BEC, N<sub>corr</sub> ≈ 10⁶)
              the <em>flattest</em> transitions. The γ-calculator (try γ = 10⁻³) shows this directly:
              the "sharpest" transition (γ = 2) belongs to the single uncorrelated particle, while
              BCS superconductors — among the most collectively ordered systems known — sit near C ≈ 0,
              the flattest possible curve. &ldquo;Underived ansatz&rdquo; understates the problem:
              the relation is anti-correlated with the physical intuition that motivates it.
              Any first-principles derivation must recover γ that <em>increases</em> with N<sub>corr</sub>
              to match mean-field expectations — making the formula a falsified placeholder, not a gap to fill.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>2. tanh form</h3>
              <ValidationBadge status="speculative" label="Motivated Choice" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #66</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              tanh is a <strong>phenomenological choice</strong> from the sigmoid/compander family
              (μ-law, Hill, logistic, erf). Other sigmoids share the same qualitative properties
              and would produce indistinguishable physics near γ ≈ 1. The fractal coherence bridge
              failure (0/7 boundaries on 36 tests) is consistent with tanh being a generic sigmoid
              here, not a uniquely derived form. <strong>Not Landau:</strong> a saturating compander
              with argument ≥ 0 has no critical point, no diverging correlation length, and no
              critical exponents — nothing to put it in a universality class. The Landau framing
              was retired at the landing page (compander family); this page now matches.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>Note on the Ising analogy:</strong> tanh arises in mean-field Ising models as
              m = tanh(βJzm) — but that tanh comes from the <em>self-consistency equation</em>
              m = tanh(βJz·m), where m feeds back into itself. C(ρ) has no such self-consistency
              loop: it is evaluated directly at the input ρ with no fixed-point iteration. The Ising
              tanh is derived; this tanh is chosen. These are structurally different justifications.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>3. A = 4&#x03C0;/(&#x03B2;<sub>J</sub>&sup2;GR&#x2080;&sup2;) &#x2248; 0.029</h3>
              <ValidationBadge status="audited-negative" label="Audited-Negative (scaling) — Normalization Unrunnable" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #53, #66 — decisive test run 2026-06-07; badge split 2026-09-05</p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem' }}>
              <strong style={{ color: '#f87171' }}>Lead with the large error, not the small one (explorer 2026-09-03).</strong>{' '}
              The 600&times; formula-vs-calibrated mismatch below is real but is the <em>smaller</em> discrepancy, and it moves
              &#x03C1;<sub>crit</sub> <em>toward</em> the data. Pure density arithmetic, no fit: the calibrated A = 0.029 puts
              &#x03C1;<sub>crit</sub> at 6.5&times;10<sup>2</sup> M<sub>&#x2609;</sub>/pc&sup3; (4.4&times;10<sup>&minus;20</sup> g cm<sup>&minus;3</sup>),
              while the SPARC median midplane density is 2.6&times;10<sup>&minus;2</sup> M<sub>&#x2609;</sub>/pc&sup3; (1.8&times;10<sup>&minus;24</sup>)
              &mdash; the knee sits <strong>2.5&times;10<sup>4</sup></strong> above every density the data sample. (Refracted Gravity, whose
              field equation this sector coincides with, puts its knee within 1.8&times; of the data.) <strong>Units, which this
              card never stated:</strong> A is in M<sub>&#x2609;</sub> pc<sup>&minus;3</sup> (km/s)<sup>&minus;2</sup>; the &ldquo;600&times;&rdquo;
              reproduces only in those units (a visitor grad-student persona recomputed 635&times;). <strong>Why the
              normalization row is unrunnable, not merely negative:</strong> the 600&times; is repairable for free with
              N<sub>corr</sub> = 6.7&times;10<sup>6</sup>, inside the 1&ndash;10<sup>7</sup> range the{' '}
              <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</Link> admits &mdash;
              the third mutually inconsistent N<sub>corr</sub> this site&apos;s own relations produce (1, 16.7, 6.7&times;10<sup>6</sup>).
              A row that any N<sub>corr</sub> can rescue has no refutation criterion. The <em>scaling</em> (&#x03C1;<sub>crit</sub> &#x221D; V&sup2;,
              excluded at ~11&#x03C3;, 2026-08-27) keeps its Audited-Negative.
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              &#x03B2;<sub>J</sub> = &#x03BB;<sub>Jeans</sub> / R<sub>half</sub> is the dimensionless Jeans-length-to-galaxy-size ratio
              (Session 53). Empirically &#x03B2;<sub>J</sub> &#x2248; 1.1 &#x00B1; 0.2 across SPARC galaxies.
            </p>
            <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.45)', borderRadius: '0.375rem', padding: '0.75rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: '#ef4444' }}>✗ LEAD AUDIT ITEM — the velocity exponent has the wrong <em>sign</em> for MOND-matching (2026-07-02, propagated 2026-07-07).</strong>{' '}
              The audit below catches A&apos;s provenance, but the more decisive failure is the exponent itself.
              For C(&rho;)&apos;s density threshold to coincide with MOND&apos;s acceleration threshold
              (g<sub>bar</sub> = a&#x2080;), the knee must sit at the baryonic density of the MOND transition
              radius. The BTFR (M<sub>bar</sub> = V&#x2074;/Ga&#x2080;) plus r<sub>t</sub> = V&sup2;/a&#x2080; force{' '}
              <strong>&rho;<sub>crit</sub> &prop; a&#x2080;&sup2;/(GV&sup2;) &prop; V<sup>&minus;2</sup></strong>{' '}
              — robust to baryon-profile choice (mean-enclosed and isothermal estimates both give exactly &minus;2),
              magnitude ~0.01&ndash;0.3 M&#x2299;/pc&sup3; (galactic-outskirt densities, where a modification
              <em> should</em> switch on). The framework asserts &rho;<sub>crit</sub> = A&middot;V<sup>+2</sup>,
              giving ~70&ndash;2,600 M&#x2299;/pc&sup3; — <strong>240&times;&ndash;300,000&times; too high, and
              scaling the opposite way</strong>: as galaxies get more massive the framework&apos;s knee density
              rises while the MOND-transition density falls. No recalibration of A can repair an inverted
              exponent. With the framework&apos;s own values (&rho;<sub>crit</sub> = 652 M&#x2299;/pc&sup3; at
              V=150), the entire luminous disk sits at C &#x2272; 0.28 and never crosses the knee. The V&sup2;
              exponent now has three mutually incompatible provenances — stated-Jeans &rarr; +0.5, code/usage
              &rarr; +2, MOND-requirement &rarr; &minus;2 — and no derived one. This is the{' '}
              <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>locality no-go</a>{' '}
              (Milgrom instance) seen on the velocity axis: <em>a knee keyed on local volumetric density must
              fall as V<sup>&minus;2</sup> to track an a&#x2080; acceleration threshold; the framework makes it
              rise as V<sup>+2</sup></em>. Finding: <code>rho-crit-velocity-exponent-mond-requires-minus2.md</code>.
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '0.375rem', padding: '0.75rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: '#ef4444' }}>✗ CLOSED — Audited-Negative (2026-06-07).</strong> The decisive test was run
              against the Session 66 <em>script</em> (not the prose summary). Three findings:
              <ol style={{ marginTop: '0.5rem', marginBottom: '0.5rem', paddingLeft: '1.25rem' }}>
                <li><strong>Wrong scaling law:</strong> The only computation that yields A ≈ 0.0294 uses
                ρ<sub>crit</sub> ∝ V<sup>0.5</sup> (Session 65: exponent B=0.5) with a fitted R₀ = 0.07 kpc/(km/s)^0.75
                — <em>not</em> R₀ = 8 kpc and not the framework&apos;s ρ<sub>crit</sub> ∝ V² used everywhere else
                (equations.ts). The derivation that hits 5% underpins a law the framework does not use.</li>
                <li><strong>Stated formula gives 600× off:</strong> A = 4π/(β<sub>J</sub>²·G·R₀²) with β<sub>J</sub>=1,
                R₀=8 kpc gives A ≈ 4.6×10⁻⁵ — not 0.029. The Session 66 markdown bridges them with an
                unexplained 644× &ldquo;unit conversion.&rdquo;
                <strong> The 644× is not a unit conversion — and it was already decomposed, on 2026-06-07.</strong>{' '}
                A depends only on the <em>product</em> β<sub>J</sub>·R₀, and <code>Session687</code> §1.2 records
                Session 66&apos;s own factorization β<sub>J</sub> = 4.5, R₀ = 0.07 kpc — product 0.315 kpc, within
                0.8% of the &ldquo;317 pc&rdquo; that setting β<sub>J</sub> = 1 produces. The R₀ = 0.07 half of that
                decomposition is stated in item 1 <em>directly above</em>. The residual questions are therefore
                (a) why β<sub>J</sub> = 4.5 when <Link href="/critical-density" style={{ color: 'var(--color-accent-blue)' }}>Critical Density</Link>&apos;s
                own calibration gives 1.1 ± 0.2 — a <strong>17σ</strong> gap — and (b) why this site&apos;s rendering
                carries a 4π that Session 53&apos;s does not (12.57 of the 635).
                <br /><br />
                <strong>Retracted same day (2026-08-05): &ldquo;A is a proxy for a coarse-graining length ℓ, and the
                knee verdict flips with ℓ.&rdquo;</strong> Both halves are withdrawn. A product cannot be inverted
                into one factor without independently measuring the other. And if ℓ were a coarse-graining length it
                would smooth ρ and ρ<sub>crit</sub> alike, in which case <strong>ℓ cancels</strong> and
                x = ρ/ρ<sub>crit</sub> = (3/16π²)β<sub>J</sub>²[V<sub>c</sub>/V<sub>flat</sub>]² ≲ 0.019β<sub>J</sub>²
                — a virial ratio, bounded in every sector at every ℓ, putting the knee ~40× out of reach with no free
                parameter. The &ldquo;flip&rdquo; that appeared to depend on ℓ is a <strong>law swap</strong>
                (universal A with ρ<sub>crit</sub> ∝ V² vs per-galaxy A ∝ R<sub>half</sub><sup>−2</sup> with
                ρ<sub>crit</sub> ∝ V<sup>0.5</sup>) — the same two-law fork item 1 above has documented since
                2026-06-07. <strong>No refutation is added to the ledger from this</strong> (count stays 6); it
                closes a question rather than opening one. See{' '}
                <Link href="/critical-density" style={{ color: 'var(--color-accent-blue)' }}>Critical Density</Link>.</li>
                <li><strong>Number detached from computation:</strong> 0.0294 propagated ~600 sessions without
                anyone re-running the stated formula. Same failure mode as the 2026-05-25 DESI epistemic regression.</li>
              </ol>
              Verdict: A-from-Jeans is <strong>not</strong> an independent first-principles derivation under any reading.
              The framework has zero first-principles predictions with an independent derivation.
              <strong>Which scaling is the framework&apos;s stated position?</strong> ρ<sub>crit</sub> ∝ V² (equations.ts:23, used site-wide).
              The 0.0294 computation used ρ<sub>crit</sub> ∝ V<sup>0.5</sup> — inconsistent with the stated framework.
              Both are documented as separate failures: the V<sup>0.5</sup> derivation contradicts the site&apos;s own equations; the stated V² formula gives A ≈ 4.6×10⁻⁵, 600× off.
              The number 0.0294 is a flagged inconsistency (number detached from its derivation), not a rounding error.
              Finding: <code>a-from-jeans-chain-of-custody-failure.md</code>; back-annotation:
              <code>a_from_jeans_chain_of_custody_closure.md</code> (Synchronism Research repo, 2026-06-07).
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>Symbol note (2026-04-24 correction):</strong> &#x03B2;<sub>J</sub> is the Jeans ratio &#x03BB;<sub>Jeans</sub>/R<sub>half</sub>
              &mdash; an O(1) structural ratio, <em>not</em> the electromagnetic fine-structure constant
              &#x03B1;<sub>em</sub> &#x2248; 1/137. The formula was previously written with &#x03B1;, which invited
              that misread. With &#x03B1;<sub>em</sub>&sup2; &#x2248; 5&#x00D7;10<sup>&minus;5</sup>, the formula
              yields A &#x2248; 550 (km/s)<sup>&minus;2</sup> — 20,000&#x00D7; too large. The formula only closes
              at 5% with &#x03B2;<sub>J</sub> = O(1). No electromagnetic coupling is implied.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>4. a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.04&times;10<sup>&minus;10</sup> m/s&sup2; (at the site-standard H&#x2080; = 67.4)</h3>
              <ValidationBadge status="reparametrization" label="Dimensional Analysis" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #87-88</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The MOND acceleration scale a&#x2080; = cH&#x2080;/(2&#x03C0;) follows from Synchronism&apos;s coherence function.
              Milgrom&apos;s observed: 1.20&times;10<sup>&minus;10</sup> m/s&sup2; &mdash; the formula sits
              13% below it. <strong>H&#x2080; bookkeeping corrected 2026-07-22</strong> (caught by a visitor
              physics persona): this card previously quoted a&#x2080; &#x2248; 1.08&times;10<sup>&minus;10</sup>
              (&ldquo;within 10%&rdquo;), which is the H&#x2080; = 70 value &mdash; algebraically incompatible
              with item 5&apos;s &#x03A3;&#x2080; = 119 at H&#x2080; = 67.4, since &#x03A3;&#x2080; = a&#x2080;/(2&#x03C0;G)
              exactly (one number, not two). At the site-standard H&#x2080; = 67.4: a&#x2080; = 1.04&times;10<sup>&minus;10</sup>
              (13% below Milgrom) with &#x03A3;&#x2080; = 119 &mdash; the consistent pair, now quoted site-wide.
              <strong> Convention caveat (2026-09-05, visitor grad-student persona):</strong> at &#x03B3; = &frac12; the compander
              collapses to x/(x+2) = &#x03BC;<sub>simple</sub>(x/2) &mdash; MOND&apos;s simple function with a&#x2080; &rarr; 2a&#x2080;. Because
              &#x03C1;<sub>crit</sub> (or a&#x2080;) is free in every fit this factor is silently absorbed, but it means the framework&apos;s
              a&#x2080; is only defined up to a convention-dependent factor of 2 (the archive records a&#x2080; = g<sup>&dagger;</sup>/2 as exactly
              this &ldquo;factor-2 anomaly,&rdquo; 2026-08-24). A 13% comparison to Milgrom is not meaningful at that level; treat it as
              &ldquo;same order, same dimensional origin,&rdquo; not as agreement or disagreement.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              This dimensional relation a&#x2080; &#x223C; cH&#x2080; has been noted since Milgrom (1983) and
              independently derived by multiple frameworks (McCulloch 2007, Verlinde 2017, Smolin 2017)
              with the same geometric factor. The quantities c and H&#x2080; are dimensionally sufficient to
              produce an acceleration &mdash; cH&#x2080; is not a Synchronism-specific derivation.
              Classified as dimensional analysis / reparametrization on the honest assessment page.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>The epoch fork is closed, and branch (A) has been tested and disfavored
              (updated 2026-08-01, after a 2026-07-30 explorer execution).</strong>{' '}
              this relation is written in H&#x2080; (today&apos;s expansion rate); the site previously said
              nothing about H(z), and two prior citations were doing the wrong job. <strong>Citation
              correction:</strong> arXiv:1703.06110 is not Milgrom proposing a&#x2080; ~ cH/2&#x03C0; &mdash; it is
              the paper that <em>tests and disfavors</em> an evolving a&#x2080; against six high-z discs.
              Milgrom&apos;s actual proposals are arXiv:0801.3133 and ApJ 698, 1630 (2009), both cited
              <em>inside</em> 1703.06110 as references. <strong>Branch (B) (&ldquo;present-epoch
              coincidence, no H(z) statement&rdquo;) is not actually available:</strong> it requires a&#x2080; to
              be fundamental, which is the MOND position this framework explicitly rejects elsewhere
              (a&#x2080; is described as an <em>emergent</em> scale on this page and on{' '}
              <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>MOND Unification</Link>).
              An emergent a&#x2080; tied to the coherence transition forces branch (A): a&#x2080;(z) = cH(z)/2&#x03C0;.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>Branch (A), tested against direct RAR data:</strong> Ciocan et al. 2026
              (MUSE-DARK III, A&amp;A 709, L16; arXiv:2604.22613) fit the RAR directly in 79
              star-forming galaxies, 0.33 &lt; z &lt; 1.44, and report a&#x2080;(z) = a&#x2080;(0) + a&#8321;z with
              a&#8321; = 1.59 (+0.11/&minus;0.10) &times;10<sup>&minus;10</sup>, stating plainly:
              <em>&ldquo;our measured a&#x2080;(z) is faster than that of H(z).&rdquo;</em> Branch (A) is a
              zero-parameter prediction, a&#x2080;(z)/a&#x2080;(0) = E(z).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>Correction (2026-08-04): the deviation is anchor-dominated, and the sign flips
              with the anchor.</strong> Branch (A) is a <em>ratio</em> prediction &mdash; converting it to a
              number at z~1 requires picking a₀(0), and four published values disagree by 69%:
            </p>
            <div style={{ overflowX: 'auto', margin: '0.5rem 0' }}>
              <table style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ textAlign: 'left', padding: '0.25rem 0.75rem 0.25rem 0' }}>a&#x2080;(0) anchor</th>
                    <th style={{ textAlign: 'left', padding: '0.25rem 0.75rem' }}>value (10&#x207B;&#xB9;&#x2070;)</th>
                    <th style={{ textAlign: 'left', padding: '0.25rem 0.75rem' }}>Branch (A) at z~1</th>
                    <th style={{ textAlign: 'left', padding: '0.25rem 0' }}>vs Ciocan 2.38</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>Ciocan&apos;s own fitted intercept</td><td style={{ padding: '0.25rem 0.75rem' }}>1.00 &plusmn; 0.02</td><td style={{ padding: '0.25rem 0.75rem' }}>1.79</td><td style={{ padding: '0.25rem 0' }}>+9.4&#x03C3; low</td></tr>
                  <tr><td style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>framework&apos;s own, cH&#x2080;/2&#x03C0;</td><td style={{ padding: '0.25rem 0.75rem' }}>1.04</td><td style={{ padding: '0.25rem 0.75rem' }}>1.86</td><td style={{ padding: '0.25rem 0' }}>+9.8&#x03C3; low</td></tr>
                  <tr><td style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>McGaugh+2016 SPARC (canonical)</td><td style={{ padding: '0.25rem 0.75rem' }}>1.20 &plusmn; 0.26</td><td style={{ padding: '0.25rem 0.75rem' }}>2.15</td><td style={{ padding: '0.25rem 0', color: '#38bdf8' }}>+0.5&#x03C3; &mdash; CONSISTENT</td></tr>
                  <tr><td style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>V&#x103;r&#x103;&#x15F;teanu+2025 MIGHTEE-HI</td><td style={{ padding: '0.25rem 0.75rem' }}>1.69 &plusmn; 0.13</td><td style={{ padding: '0.25rem 0.75rem' }}>2.91</td><td style={{ padding: '0.25rem 0', color: '#38bdf8' }}>&minus;2.3&#x03C3; &mdash; branch (A) HIGH</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              The 2026-08-01 shipped figure (2.3&ndash;5.9&sigma; low) used only the three low-side anchors;
              the fourth &mdash; the same McGaugh+2016 value the site uses as canonical a&#x2080; elsewhere
              &mdash; is one sentence away in Ciocan&apos;s own paper and reverses the verdict to consistent.
              Signal (79% predicted growth to z~1) vs. systematic (69% spread among a&#x2080;(0)
              determinations) is signal/systematic &#8776; 1.15 &mdash; this places the row in the
              &ldquo;untestable with foreseeable data&rdquo; category, not &ldquo;disfavoured.&rdquo;
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>ΛCDM predicts the same evolution, and the functional form is prior art.</strong>{' '}
              Mayer, Teklu, Dolag &amp; Remus 2023 (Magneticum simulations, ΛCDM+baryons, no MOND, no
              fundamental a&#x2080;; MNRAS 518, 257, arXiv:2206.04333) fit a&#x2080; growing by a factor
              &#8776;3 from z=0 to z=2 &mdash; branch (A) predicts E(2) = 3.03. Their eq. (13) <em>is</em>{' '}
              branch (A), written down and tested inside a ΛCDM paper in 2022, where it is reported to
              fail to describe the simulated trend precisely. No outcome of the Ciocan measurement
              selects Synchronism over ΛCDM+baryons: both predict the RAR-fitted a&#x2080; grows with
              epoch, by a similar factor, for unrelated reasons (galaxy-assembly physics vs. an
              emergent coherence scale).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>Milgrom&apos;s coincidence has a second, unstated face:</strong> 2&#x03C0;a&#x2080; &#8776;
              cH&#x2080; &#8776; c&sup2;(&#x039B;/3)<sup>1/2</sup> &mdash; the site has cited only the H&#x2080; half. The
              &#x039B; half predicts <em>zero</em> epoch evolution, since &#x039B; is constant, and fares worse
              against Ciocan than branch (A): at the Milgrom-local normalization, a constant a&#x2080; = 1.20
              against the observed 2.38 &plusmn; 0.10 is roughly <strong>12&#x03C3;</strong> away. An a&#x2080; evolving
              faster than H(z) embarrasses both halves of the 1983 coincidence, not this framework specifically.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>Verdict &mdash; non-discriminating (revised 2026-08-04), and the count stays at 6:</strong>{' '}
              this row joins every other row in the ledger, reached the same way &mdash; a priori, from
              already-published numbers, with no new data or computation. It is not a live tension with a
              date on it; it is a forced, outstanding, <em>prospective</em> commitment (a rival with a
              fundamental a&#x2080; only makes this bet optionally) whose power to discriminate was removed
              by the anchor dependence and the ΛCDM+baryons degeneracy above &mdash; not evidence against
              Synchronism specifically, and not evidence for it either. Consistency with a
              non-discriminating prediction (the McGaugh-anchor 0.5&sigma; row) is not evidence for the
              framework. This does not join the refutation tally on{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.
              One further note on the 13% figure two cards
              above: Ciocan&apos;s fitted z=0 intercept is 1.00 &plusmn; 0.04, only 1.0&#x03C3; from this framework&apos;s
              1.04 &mdash; but that intercept is the extrapolated endpoint of a linear fit over 0.33 &lt; z &lt; 1.44
              that the authors themselves call &ldquo;phenomenological&hellip;rather than physically motivated,&rdquo;
              not a local measurement, so this is a reason to stop treating the 13% gap as settled, not a claim
              of agreement.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              Source: Ciocan et al. 2026, MUSE-DARK III, A&amp;A 709, L16 (arXiv:2604.22613). See also{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
              for the general pattern this row is an instance of: stated conclusions get read, buried ones get
              re-derived wrong &mdash; two prior visitor personas (2026-07-29, 2026-07-30) independently re-derived
              the pre-Ciocan version of this fork before it was closed.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>5. &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G) &#x2248; 119 M&#x2609;/pc&sup2; (at the site-standard H&#x2080; = 67.4)</h3>
              <ValidationBadge status="reparametrization" label="Milgrom&apos;s &#x03A3;_M Re-derived (was: Freeman&apos;s Law Re-expressed)" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #89</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              <strong>Arithmetic corrected 2026-07-09</strong> (independently caught by two visitor
              personas the same day): using the a&#x2080; &#x2248; 1.08&times;10<sup>&minus;10</sup> m/s&sup2; item 4
              quoted at the time (the H&#x2080; = 70 value; corrected to 1.04 at H&#x2080; = 67.4 on 2026-07-22,
              since &#x03A3;&#x2080; = a&#x2080;/(2&#x03C0;G) algebraically), &#x03A3;&#x2080; &#x2248; 123.3 M&#x2609;/pc&sup2;
              &mdash; a <strong>0.5% match</strong> to Freeman&apos;s observed 124 M&#x2609;/pc&sup2; (Freeman 1970),
              not the previously stated &ldquo;&#x2248;110, 12% error&rdquo; (that 110 required H&#x2080; &#x2248; 62 km/s/Mpc,
              inconsistent with the a&#x2080; row directly above it). At the site-standard
              H&#x2080; = 67.4 km/s/Mpc (adopted 2026-07-17, resolution note below) the same formula gives
              &#x03A3;&#x2080; &#x2248; 119.0.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              The combination cH&#x2080;/G has dimensions of surface density, so this is dimensional
              bookkeeping &mdash; expressing Freeman&apos;s empirical value via cosmological constants, not
              deriving it from physics. <strong>&#x03A3;&#x2080; is not independent evidence from a&#x2080;:</strong> since
              &#x03A3;&#x2080; = a&#x2080;/(2&#x03C0;G) exactly, this is the a&#x2080; row propagated through a linear relation, not
              a second derivation. Milgrom&apos;s own &#x03A3;<sub>M</sub> = a&#x2080;<sub>,obs</sub>/(2&#x03C0;G) &#x2248; 137 M&#x2609;/pc&sup2;
              sits 10% above Freeman&apos;s 124, and this page&apos;s a&#x2080; (1.04 at H&#x2080; = 67.4) sits 13% below Milgrom&apos;s observed
              a&#x2080; &mdash; equivalently, &#x03A3;&#x2080; = 119 sits the same 13% below Milgrom&apos;s &#x03A3;<sub>M</sub> = 137: one gap, one number, not two rows of independent support.
              Re-badged from &ldquo;Validated&rdquo; (2026-04-28): a tight numeric match is not sufficient to claim
              derivation of what is, in origin, an observational law.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>H&#x2080; inconsistency RESOLVED (2026-07-17</strong>, root cause identified by a visitor
              physics persona 2026-07-17): the 119-vs-123.3 split across pages was exactly an undisclosed
              Hubble-constant switch &mdash; &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G) gives 119.0 M&#x2609;/pc&sup2;
              at H&#x2080; = 67.4 km/s/Mpc (Planck 2018) and 123.6 at H&#x2080; = 70 (the value implicit in the
              a&#x2080; &#8776; 1.08&times;10<sup>&minus;10</sup> m/s&sup2; this page quoted until 2026-07-22). <strong>Site standard is
              now H&#x2080; = 67.4 km/s/Mpc</strong> (matching /freemans-law and Honest Assessment), giving
              &#x03A3;&#x2080; &#8776; 119. Given the caveat below, no sub-percent &ldquo;match&rdquo; claim
              survives either H&#x2080; choice, so the choice changes bookkeeping, not verdicts. (2) Neither error bar is meaningful on its
              own terms: Freeman (1970) reports a central surface <em>brightness</em>
              (21.65&plusmn;0.30 B-mag/arcsec&sup2;), and converting to a surface <em>density</em> requires a
              mass-to-light ratio M/L<sub>B</sub> that for disk galaxies spans roughly 1&ndash;3 &mdash; the
              target itself is uncertain by a factor of &#x223C;2. Quoting agreement to 0.5% (or 4%) against a
              quantity known to a factor of two is precision theater; the honest statement is
              &ldquo;consistent with Freeman&apos;s law within the M/L systematic,&rdquo; not a specific
              percentage.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.35)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem' }}>
              <strong style={{ color: '#a78bfa' }}>Attribution corrected 2026-08-08 &mdash; the badge said the wrong
              prior art.</strong> This row was labelled &ldquo;Freeman&apos;s Law Re-expressed,&rdquo; but
              a&#x2080;/(2&#x03C0;G) is not a re-expression of Freeman &mdash; it <em>is</em>{' '}
              <strong>Milgrom&apos;s critical surface density &#x03A3;<sub>M</sub></strong>, a standard MOND quantity,
              and <em>&ldquo;Freeman&apos;s law follows from &#x03A3;<sub>M</sub>&rdquo; is Milgrom&apos;s own 1983
              result</em> (the observation that disc galaxies cluster near the MOND transition surface density).
              So this row re-derives &#x03A3;<sub>M</sub> and rediscovers Milgrom&apos;s explanation of Freeman&apos;s
              law &mdash; same demotion, correct lineage. The a&#x2080; row above already credits
              McCulloch/Verlinde/Smolin for exactly this reason; the same standard now applies one row down. Caught
              by a visitor physics persona, 2026-08-08.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>6. R&#x2080; = V&sup2;/(3a&#x2080;)</h3>
              <ValidationBadge status="reparametrization" label="Dimensional Analysis — 3% Error (⚠ deprecated Validated label)" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #91</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Characteristic radius from velocity and acceleration. 97% accuracy against observed values.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>7. &#x03C6; (golden ratio) &mdash; the exponent 1/&#x03C6; in C(&rho;)/C(a), and &#x03A9;<sub>m</sub><sup>&#x03C6;</sup> in a&#x2080;</h3>
              <ValidationBadge status="audited-negative" label="Fitted-Then-Named — Provenance Audit 2026-07-17" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #44&ndash;45, #170, #185&ndash;186, #218&ndash;219 — provenance audit executed 2026-07-17</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              This page&apos;s bottom line is &ldquo;zero parameters with first-principles derivations,&rdquo; and
              &#x03C6; is its strongest exhibit — previously missing from this page entirely. The golden ratio
              entered as an empirical fit (S44: virial exponent B = 1.62, noted &ldquo;&asymp; &#x03C6;&rdquo;), was
              adjudicated the next day by the archive&apos;s own audit (S45: &ldquo;<strong>intriguing coincidence
              but not significant</strong> — don&apos;t claim &#x03C6; is fundamental&rdquo;; 0/8 comparator scalings
              have &#x03C6; exponents), then reappeared fully formed inside C(&rho;) at S170 <em>with no derivation
              and no citation of the S45 ruling</em>.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              <strong>The claimed derivations do not survive their own text:</strong> S186&apos;s
              &ldquo;information conservation x + x&sup2; = 1&rdquo; is the golden ratio&apos;s <em>defining
              identity</em> postulated as physics (circular); S219&apos;s &ldquo;scale recursion theorem&rdquo;
              inserts &#x03BB; = 1 + 1/&#x03BB; without anything forcing it; S218 concedes its own Boltzmann route
              &ldquo;gives exponent 1, not 1/&#x03C6;.&rdquo; The three retro-justifications do not cite each other —
              derivations that get re-invented rather than accumulate are the signature of fitted-then-named.
              <strong> And at every measured slot the data preferred a different constant:</strong> the anchor fit was
              0.66 (1.0% from 2/3, 6.8% from 1/&#x03C6;); the a&#x2080; slot prefers 3/2 (S217); Gaia gives
              0.688 &plusmn; 0.10 (2/3 at center). Consequence for the ledger: TEST-09&apos;s BTFR kill gets{' '}
              <em>stronger</em> — the honest accounting is one derived ingredient (&#x03A9;<sub>m</sub>) plus one free
              exponent dressed as a constant, and the parameter scan shows no exponent value rescues the slope.
              Full chain: <code>explorer/findings/2026-07-17-phi-exponent-provenance-fitted-then-named.md</code>.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>8. B<sub>max</sub> = 1/&#x03A9;<sub>m</sub> &#x2248; 3.17 (the bounded boost ceiling)</h3>
              <ValidationBadge status="audited-negative" label="Audited-Negative — the one load-bearing parameter, refuted (was: Speculative — Asserted, Not Derived)" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem' }}>
              <strong style={{ color: '#f87171' }}>Re-badged 2026-09-05 on the explorer&apos;s 2026-09-03 sensitivity scan.</strong>{' '}
              This row carried &ldquo;Speculative &mdash; asserted, not derived&rdquo; while items 1 and 3 carried Audited-Negative,
              which inverts the measured ordering: the floor C<sub>min</sub> = &#x03A9;<sub>m</sub> (equivalently B<sub>max</sub> = 1/&#x03A9;<sub>m</sub>)
              is the <em>only</em> parameter the galaxy sector is sensitive to (&#x03C7;&sup2;/N moves up to 6.35&times;10<sup>4</sup> with
              the floor, 1.07&ndash;2.7&times; with &#x03B3; and A together), it is <em>measurable</em> (best-fit &#x03B5;<sub>0</sub> = 0.220,
              B<sub>max</sub> = 4.55, 2026-08-30), and its asserted value is excluded (TEST-09/TEST-10; RG&apos;s own fits demand
              4&ndash;22; the weak-lensing RAR of Brouwer+2021 demands &#x03BD; = 110&ndash;347 against any ceiling &le; 18). So TEST-09/10
              refute the chain&apos;s load-bearing parameter, not an optional closure. The 08-26 derivation-from-disc-geometry
              (Gauss averaging gives 1/C<sub>min</sub> as the L2/L3 maximum) explains where the ceiling <em>comes from</em>; it
              does not make the value right.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Added 2026-07-28 &mdash; flagged missing from this page by a visitor persona (grad student + researcher)</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a> calls
              the bounded acceleration boost B &#8804; 1/&#x03A9;<sub>m</sub> &#8776; 3.17 &ldquo;the framework&apos;s
              only structural difference from MOND,&rdquo; and both executed discriminating tests (TEST-09&apos;s
              BTFR slope, TEST-10&apos;s dwarf DM fractions) are corollaries of this one number. It carries the
              site&apos;s entire discriminating weight and, until today, appeared nowhere in this chain &mdash;
              a parameter-inventory gap, not a derivation.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              <strong>No archive document derives 1/&#x03A9;<sub>m</sub> from the compander or from anything else
              &mdash; it is asserted.</strong> A live, unexecuted proposal
              (<code>Research/proposals/boost_ceiling_provenance_and_class_exclusion.md</code>) flags that the
              cosmic ratio a <em>dynamical-to-baryonic</em> boost should reference is arguably
              &#x03A9;<sub>m</sub>/&#x03A9;<sub>b</sub> &#8776; 6.40 (the baryon budget), not 1/&#x03A9;<sub>m</sub>
              (a matter-to-critical-density ratio). Under that convention TEST-10&apos;s reported
              <em> median</em> f<sub>DM</sub> = 0.755 passes (ceiling 0.844) and the &ldquo;69% of SPARC exceeds
              the ceiling&rdquo; headline is convention-dependent. The kill does not depend on the convention
              choice at the tail: SPARC&apos;s maximum observed f<sub>DM</sub> = 0.927 requires B &#8805; 13.7,
              which no candidate cosmic ratio supplies &mdash; so the robust, convention-free statement is a
              class exclusion (B<sub>max</sub> &#8818; 14 is excluded by SPARC dwarfs), not the median-based
              percentage. This registered sweep has not yet been executed against the full per-galaxy dataset;
              see the proposal for the pre-fixed verdict rule.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem' }}>
              <strong style={{ color: '#38bdf8' }}>At which epoch? The fork is real, and closing it removes a
              candidate test rather than adding one (executed 2026-08-08).</strong> An expert visitor pass noted a
              genuine inconsistency: this page promotes a&#x2080; to <strong>a&#x2080;(z) = cH(z)/2&#x03C0;</strong>{' '}
              but freezes &#x03A9;<sub>m</sub> at its present value, with no stated rule &mdash; and proposed that
              an evolving ceiling gives <strong>f<sub>DM,max</sub>(z) = 1 &minus; &#x03A9;<sub>m</sub>(z)</strong>{' '}
              &#8776; 0.21 at z = 1 and &#8776; 0.05 at z = 2, a sharp epoch dependence neither MOND nor &#x039B;CDM
              predicts. Both branches were checked. <strong>Branch (i), the &#x03A9;<sub>m</sub>/&#x03A9;<sub>b</sub>{' '}
              reading:</strong> baryons and total matter are both dust, so
              &#x03A9;<sub>b</sub>(z)/&#x03A9;<sub>m</sub>(z) = &#x03A9;<sub>b,0</sub>/&#x03A9;<sub>m,0</sub> = 0.1565{' '}
              <em>identically at every z</em> &mdash; the ceiling is 6.39 at all epochs and there is nothing to
              measure. <strong>Branch (ii), the 1/&#x03A9;<sub>m</sub>(z) reading:</strong> it self-destructs.
              Writing B<sub>max</sub>(z) = E(z)&sup2;/[&#x03A9;<sub>m,0</sub>(1+z)&sup3;], the ceiling <em>falls</em>{' '}
              (3.17 &rarr; 1.27 at z = 1 &rarr; 1.08 at z = 2) while the same E(z) makes a&#x2080;(z) <em>rise</em>{' '}
              (1.79&times; at z = 1, 3.03&times; at z = 2). Since the galaxy sector <em>is</em> deep-MOND at
              &#x03B3; = 1/2, the required boost is B = &radic;(a&#x2080;(z)/g<sub>bar</sub>), so the ceiling permits
              MOND behaviour only where g<sub>bar</sub> &gt; &#x03A9;<sub>m</sub>(z)&sup2;&middot;a&#x2080;(z): that
              is g<sub>bar</sub> &gt; 0.099 a&#x2080; today but g<sub>bar</sub> &gt; 0.86 a&#x2080; at z = 2.
              <strong> By z &#8776; 1 the evolving ceiling forbids essentially the whole MOND regime that the
              framework&apos;s own evolving a&#x2080; has just widened.</strong> The two cosmological inputs evolve in
              opposite directions, so branch (ii) is not a prediction but an internal contradiction &mdash; which
              means <em>the ceiling must be frozen at &#x03A9;<sub>m,0</sub></em>, and once frozen it carries no
              epoch dependence. <strong>Either branch: no high-z discriminator exists. No data was needed, and the
              refutation count is unchanged at 6.</strong> This is the third consecutive candidate discriminator to
              die on an unmade definitional choice rather than on a measurement (after the EFE argument fork and the
              ceiling&apos;s own 1/&#x03A9;<sub>m</sub> vs &#x03A9;<sub>m</sub>/&#x03A9;<sub>b</sub> ambiguity) &mdash;
              the pattern is recorded in{' '}
              <code style={{ fontSize: '0.78rem' }}>Research/proposals/boost_ceiling_epoch_fork_closes_the_last_candidate_discriminator_20260808.md</code>.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              <strong>Which force law this ceiling is a statement about (2026-08-04):</strong> B<sub>max</sub> =
              3.17 is a statement about which of the site&apos;s live galaxy-sector formalisms is meant. Under
              g<sub>obs</sub> = g<sub>bar</sub>/C(ρ) &mdash; the reading the f<sub>DM</sub> = 1&minus;C identity
              implies &mdash; the boost B = 1/C is unbounded by construction and exceeds 3.17 by 2&ndash;5 orders
              of magnitude at <em>every</em> radius, including the disk centre, on the site&apos;s own five
              plotter galaxies. The ceiling is consistent only with the{' '}
              <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Curve
              Plotter</Link>&apos;s amplitude law v² = v<sub>b</sub>² + (V<sub>flat</sub>·C)², where the extra
              term is bounded by V<sub>flat</sub> irrespective of C. No physical density floor rescues the other
              reading: capping B at 3.17 there requires ρ &#8805; 0.177 ρ<sub>crit</sub>, a floor
              10²&ndash;10⁴× the densest point of the model disk. See the C-convention note on{' '}
              <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>What&apos;s Notable</h2>
        <p>
          The chain uses fundamental constants (c, G, H&#x2080;) plus one structural ratio
          (&#x03B2;<sub>J</sub> &#x2248; 1 from the Jeans criterion) and one observable (V<sub>flat</sub>).
          The scaling constants (a&#x2080;, &#x03A3;&#x2080;, R&#x2080;) show 3&ndash;10%
          agreement with observations &mdash; as dimensional restatements of known observational laws.
        </p>
        <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.9rem' }}>
          <strong>Honest bottom line (updated 2026-07-18; the previous version of this paragraph was a
          fossil):</strong> zero parameters in this chain have independent first-principles derivations.
          A &mdash; formerly presented here as &ldquo;the effective novel parameter&rdquo; with an independent
          derivation path &mdash; is audited-negative (item 3: the stated formula gives a value 600&times; off;
          the computation that hits 5% uses a scaling law the framework does not use). The exponent &#x03C6; is
          fitted-then-named (item 7). &#x03B3; = 2/&#x221A;N<sub>corr</sub> is a sign-inverted ansatz (item 1).
          a&#x2080; and &#x03A3;&#x2080; reproduce known observational relations (Milgrom 1983; Freeman 1970)
          via dimensional bookkeeping &mdash; Reparametrization, not derivation &mdash; and are one number, not
          two (&#x03A3;&#x2080; = a&#x2080;/(2&#x03C0;G) exactly). The 3&ndash;10% agreements could reflect
          approximation limits or implicit calibration through V<sub>flat</sub>; distinguishing these would
          require the independent derivations that do not exist. B<sub>max</sub> = 1/&#x03A9;<sub>m</sub>
          (item 8) is the parameter carrying the most discriminating weight of all of them &mdash; and, as of the
          2026-09-03 sensitivity scan, the only one the galaxy data can actually measure. Its asserted value is
          excluded; &#x03B3; and A, the two this page audits hardest, are unidentifiable in that sector (Fisher
          correlation +1.000000). <strong>One citable negative falls out of this (explorer 2026-09-03), and it
          transfers to the whole density-keyed &#x03B5;(&#x03C1;) class:</strong> <em>for a density-keyed algebraic
          modification whose knee is calibrated above galactic midplane densities, the interpolating function is
          unidentifiable &mdash; the model equals its own linearisation to better than observational precision.
          Testability requires the knee inside the sampled density range, where Refracted Gravity puts it.</em>
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/compression-action" className="btn-primary">
            Next: Compression Action &rarr;
          </Link>
          <Link href="/equation-walkthrough" className="btn-secondary">
            Interactive Walkthrough
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/parameter-derivations" />
    </>
  );
}
