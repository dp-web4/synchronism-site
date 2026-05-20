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
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '65ch' }}>
        The coherence function has two kinds of parameters: the <strong>functional form</strong> (tanh,
        &#x03B3; = 2/&#x221A;N<sub>corr</sub>) which is derived from mean-field theory, and
        the <strong>scaling constants</strong> (A, a&#x2080;, &#x03A3;&#x2080;, R&#x2080;) which are
        derived from dimensional analysis with fundamental constants but show 3&ndash;12% errors
        against observations. Whether those errors reflect approximation limits or hidden calibration
        is an open question.
      </p>

      <section className="section content-width">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1.25rem', borderLeft: '3px solid var(--color-dark-border)', paddingLeft: '0.75rem' }}>
          Badge labels on this page: <strong>Motivated Ansatz</strong> and <strong>Motivated Choice</strong> are
          sub-types of <em>Speculative</em> &mdash; physically motivated but not uniquely derived.{' '}
          <strong>Freeman&apos;s Law Re-expressed</strong> and <strong>Dimensional Analysis</strong> are
          sub-types of <em>Reparametrization</em> &mdash; reproducing known observational laws in different notation.{' '}
          <strong>Jeans Criterion</strong> is a sub-type of <em>Validated</em> &mdash; derived from a
          physical principle with quantitative agreement.
          See <a href="/research-philosophy#validation-badge-taxonomy" style={{ color: 'var(--color-accent-blue)' }}>badge taxonomy</a> for the six official tiers.
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
              tanh is a <strong>phenomenological choice</strong> from the Landau-universality family of
              sigmoid functions. Other sigmoids (logistic, erf) share the same qualitative properties
              and would produce indistinguishable physics near γ ≈ 1. The fractal coherence bridge
              failure (0/7 boundaries on 36 tests) is consistent with tanh being a generic sigmoid
              here, not a uniquely derived form.
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
              <ValidationBadge status="validated" label="Jeans Criterion | 5% Agreement" />
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Sessions #53, #66</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              &#x03B2;<sub>J</sub> = &#x03BB;<sub>Jeans</sub> / R<sub>half</sub> is the dimensionless Jeans-length-to-galaxy-size ratio
              (Session 53). Empirically &#x03B2;<sub>J</sub> &#x2248; 1.1 &#x00B1; 0.2 across SPARC galaxies;
              &#x03B2;<sub>J</sub> = 1.0 is the fiducial. From the Jeans criterion (&#x03C1;<sub>crit</sub> = V&#x00B2; / (G&#x03B2;<sub>J</sub>&sup2;R<sub>half</sub>&sup2;))
              with R&#x2080; = 8 kpc and the 4&#x03C0; factor from spherical surface-area integration (Session 66),
              A = 0.0294 vs empirical 0.028 — 5% agreement.
            </p>
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
              <ValidationBadge status="validated" label="3% Error" />
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
