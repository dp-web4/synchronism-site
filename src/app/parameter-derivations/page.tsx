'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function ParameterDerivations() {
  return (
    <>
      <Breadcrumbs currentPath="/parameter-derivations" />
      <h1>Parameter Derivations</h1>
      <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1.5rem', maxWidth: '65ch' }}>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <strong style={{ color: '#f59e0b' }}>Honest framing:</strong> Despite the page title, this is not a
          derivations page in the mathematical sense. γ = 2/√N<sub>corr</sub> is a <strong>motivated ansatz</strong> (the
          factor 2 is not rigorously derived; CLT is invoked for correlated DOF where CLT doesn&apos;t apply).
          ρ<sub>crit</sub> = A·V<sub>flat</sub>² with A ≈ 0.029 is <strong>calibrated</strong> to the Jeans criterion — V<sub>flat</sub> is the input.
          The scaling constants are dimensional analyses with 3–12% errors that may reflect implicit calibration
          rather than predictive accuracy. The functional form tanh is <strong>motivated</strong> by analogy with the sigmoid/compander family (μ-law, Hill, logistic), not uniquely derived. <strong>Update (2026-06-07):</strong> A-from-Jeans — the only surviving first-principles candidate — is now audited-negative: the derivation that produces 0.029 uses a different scaling law (ρ<sub>crit</sub> ∝ V<sup>0.5</sup>) than the framework's stated ρ<sub>crit</sub> ∝ V², and the stated formula gives A ≈ 4.6×10⁻⁵ (600× off). Zero parameters have independent first-principles derivations. A more accurate title: <em>Parameter Calibration &amp; Honest Ansätze</em>.
          Read this page before concluding the equation is derived.
        </p>
      </div>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '65ch' }}>
        The coherence function has two kinds of parameters: the <strong>functional form</strong> (tanh,
        &#x03B3; = 2/&#x221A;N<sub>corr</sub>) which is motivated by the sigmoid/compander family (μ-law, Hill, logistic), and
        the <strong>scaling constants</strong> (A, a&#x2080;, &#x03A3;&#x2080;, R&#x2080;) which are
        calibrated to observational anchors with 3&ndash;12% errors.
        Whether those errors reflect approximation limits or implicit calibration is an open question.
      </p>

      <section className="section content-width">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1.25rem', borderLeft: '3px solid var(--color-dark-border)', paddingLeft: '0.75rem' }}>
          Badge labels on this page: <strong>Motivated Ansatz</strong> and <strong>Motivated Choice</strong> are
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
              <ValidationBadge status="audited-negative" label="Audited-Negative — Chain-of-Custody Failure" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #53, #66 — decisive test run 2026-06-07</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              &#x03B2;<sub>J</sub> = &#x03BB;<sub>Jeans</sub> / R<sub>half</sub> is the dimensionless Jeans-length-to-galaxy-size ratio
              (Session 53). Empirically &#x03B2;<sub>J</sub> &#x2248; 1.1 &#x00B1; 0.2 across SPARC galaxies.
            </p>
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
                unexplained 644× &ldquo;unit conversion.&rdquo;</li>
                <li><strong>Number detached from computation:</strong> 0.0294 propagated ~600 sessions without
                anyone re-running the stated formula. Same failure mode as the 2026-05-25 DESI epistemic regression.</li>
              </ol>
              Verdict: A-from-Jeans is <strong>not</strong> an independent first-principles derivation under any reading.
              The framework has zero first-principles predictions with an independent derivation.
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
              <h3>4. a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.08&times;10<sup>&minus;10</sup> m/s&sup2;</h3>
              <ValidationBadge status="reparametrization" label="Dimensional Analysis" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #87-88</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The MOND acceleration scale a&#x2080; = cH&#x2080;/(2&#x03C0;) follows from Synchronism&apos;s coherence function.
              Milgrom&apos;s observed: 1.20&times;10<sup>&minus;10</sup> m/s&sup2; (10% error).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              This dimensional relation a&#x2080; &#x223C; cH&#x2080; has been noted since Milgrom (1983) and
              independently derived by multiple frameworks (McCulloch 2007, Verlinde 2017, Smolin 2017)
              with the same geometric factor. The quantities c and H&#x2080; are dimensionally sufficient to
              produce an acceleration &mdash; cH&#x2080; is not a Synchronism-specific derivation.
              Classified as dimensional analysis / reparametrization on the honest assessment page.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>5. &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G) &#x2248; 110 M&#x2609;/pc&sup2;</h3>
              <ValidationBadge status="reparametrization" label="Freeman&apos;s Law Re-expressed" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Session #89</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Freeman&apos;s surface density law (Freeman 1970): observed 124 M&#x2609;/pc&sup2;, 12% error.
              The combination cH&#x2080;/G has dimensions of surface density, so this is dimensional
              bookkeeping &mdash; expressing Freeman&apos;s empirical value via cosmological constants, not
              deriving it from physics. Re-badged from &ldquo;Validated&rdquo; (2026-04-28): the 12% agreement
              is not sufficient to claim derivation of what is, in origin, an observational law.
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
        </div>
      </section>

      <section className="section content-width">
        <h2>What&apos;s Notable</h2>
        <p>
          The derivation chain uses fundamental constants (c, G, H&#x2080;) plus one structural ratio
          (&#x03B2;<sub>J</sub> &#x2248; 1 from the Jeans criterion) and one observable (V<sub>flat</sub>).
          The functional form (tanh, &#x03B3;) has zero free parameters.
          The scaling constants (A, a&#x2080;, &#x03A3;&#x2080;, R&#x2080;) show 3&ndash;12%
          agreement with observations.
        </p>
        <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.9rem' }}>
          <strong>Honest caveat:</strong> The 3&ndash;12% errors could reflect either (a) legitimate
          approximation limits in the dimensional analysis, or (b) implicit calibration through
          choice of V<sub>flat</sub> as input. Distinguishing these requires independent derivation.
          a&#x2080; and &#x03A3;&#x2080; reproduce known observational relations (Milgrom 1983;
          Freeman 1970) using dimensional bookkeeping &mdash; classified as Reparametrization, not derivation.
          The effective novel parameter in this chain is A (Jeans criterion, 5% agreement), which has
          a derivation path independent of the observational coincidences.
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
