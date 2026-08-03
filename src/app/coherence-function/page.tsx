'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CoherenceFunction() {
  return (
    <>
      <Breadcrumbs currentPath="/coherence-function" />
      <PathNav currentPath="/coherence-function" />
      <h1>The Coherence Function</h1>
      <ValidationBadge status="speculative" label="Phenomenological Ansatz — tanh motivated, not derived" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Before the math: <strong>coherence</strong> measures how collectively particles behave.
          Ice cubes have high coherence (rigid crystal lattice). Steam has low coherence (random
          motion). This function quantifies that spectrum for any system, at any scale.
        </p>

        <EquationDisplay size="lg" label="The Synchronism coherence function">
          C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </EquationDisplay>

        <div style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '0.375rem', padding: '0.6rem 1rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
          <strong>New to the notation?</strong>{' '}
          <Link href="/equation-walkthrough" style={{ color: 'var(--color-accent-blue)' }}>
            Walk through it step by step &rarr;
          </Link>{' '}
          — a 6-step interactive that defines every symbol (C, &#x03C1;, &#x03C1;<sub>crit</sub>, &#x03B3;, ln, tanh) in plain language.
        </div>

        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>The most clarifying algebraic fact about this
          equation (moved here 2026-07-18 — it previously lived only on the walkthrough):</strong>{' '}
          the tanh&#x2218;ln composition is <em>exactly</em> a two-parameter Hill function. With
          x = &#x03C1;/&#x03C1;<sub>crit</sub>,
          tanh(&#x03B3;&middot;ln(1+x)) = [(1+x)<sup>2&#x03B3;</sup> &minus; 1] / [(1+x)<sup>2&#x03B3;</sup> + 1]
          — an algebraic identity, verified numerically (the ln is cosmetic; nothing about the composition is
          load-bearing). Slope behavior follows directly: dC/dx = &#x03B3;(1&minus;C&sup2;)/(1+x) is maximal at
          x = 0 (where it equals &#x03B3;) and decreases monotonically — the curve is concave in x everywhere on x &ge; 0, with no critical
          point and no inflection to serve as a &ldquo;transition.&rdquo; Asymptotics: C &asymp; &#x03B3;x for
          small x; C &rarr; 1 like 1 &minus; 2(1+x)<sup>&minus;2&#x03B3;</sup> for large x. This dissolves any
          residual mystique: the equation is a saturating rational function in the μ-law/Hill/Naka&ndash;Rushton
          lineage. Full six-piece decomposition on the{' '}
          <Link href="/equation-walkthrough" style={{ color: 'var(--color-accent-violet)' }}>walkthrough</Link>.
        </div>

        <div style={{ background: 'rgba(56,189,248,0.09)', border: '1px solid rgba(56,189,248,0.35)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#38bdf8' }}>The identity the Hill form above was one substitution short of
          (added 2026-08-02):</strong>{' '}
          set &#x03B3;&nbsp;=&nbsp;1/2 in the identity above. Then 2&#x03B3;&nbsp;=&nbsp;1 and it collapses to
          C&nbsp;=&nbsp;[(1+x)&minus;1]/[(1+x)+1]&nbsp;=&nbsp;x/(x+2)&nbsp;=&nbsp;&#x03BC;<sub>simple</sub>(x/2)
          &mdash; MOND&apos;s simple interpolating function &#x03BC;<sub>simple</sub>(u) = u/(1+u), <strong>identically,
          for all x</strong>, not asymptotically. &#x03B3;&nbsp;=&nbsp;1/2 is the exact algebraic MOND point of
          this function family. The free-&#x03B3; SPARC fit in the table below independently lands at
          &#x03B3;&nbsp;=&nbsp;0.489 &mdash; 2.2% from that point. This is the executed form-selection table
          (below) reporting the <em>same</em> parameter two ways: its independently-fitted Hill exponent
          n&nbsp;=&nbsp;0.975 and this page&apos;s 2&#x03B3;&nbsp;=&nbsp;0.978 agree to 0.3% because they are the
          same quantity, and the table&apos;s best-scoring simple form is Hill with n&nbsp;=&nbsp;1 exactly &mdash;
          again, MOND. Combined with f<sub>DM</sub>&nbsp;=&nbsp;1&minus;C on{' '}
          <Link href="/tier-1-existing" style={{ color: '#38bdf8' }}>Tier 1</Link> (so C <em>is</em> the
          interpolating function μ by definition), the galaxy sector reduces to: <strong>MOND, with μ&apos;s
          argument swapped from the enclosed-mass acceleration g<sub>bar</sub> to local density ρ.</strong> That
          single substitution is the entire difference from MOND &mdash; and it is the same substitution behind
          the local-density no-go on{' '}
          <Link href="/for-researchers" style={{ color: '#38bdf8' }}>For Researchers</Link>. One caveat: for
          &#x03C1;&nbsp;&#x226a;&nbsp;&#x03C1;<sub>crit</sub> (real galaxy outskirts), C&nbsp;&asymp;&nbsp;&#x03B3;x/(1+&#x03B3;x)
          depends on &#x03B3; and &#x03C1;<sub>crit</sub> only through their ratio &mdash; the
          degeneracy-breaking term is &#x03B3;(2&#x03B3;&minus;1), which vanishes at exactly &#x03B3;=1/2. So near
          the fitted value, &#x03B3;&nbsp;&asymp;&nbsp;0.489 is not a clean measurement of &#x03B3; alone without
          also stating the &#x03C1;<sub>crit</sub> prior it was fit under.
        </div>

        <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.28)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#ef4444' }}>The first question a physicist asks, answered where the equation
          is defined (moved here 2026-07-18):</strong>{' '}
          &#x03C1; has no stated units and no measurement protocol, and <strong>no protocol maps any laboratory
          or astronomical observable to the coherence value C, in any domain</strong>. N<sub>corr</sub> (inside
          &#x03B3;) is asserted rather than counted on every scale where it is used. C is therefore doubly
          unanchored — inputs asserted, output unmeasurable — which is why several claims on this site are
          labeled <em>unrunnable as stated</em> rather than merely untested. The only data contact is galaxy
          rotation, where the parameters are fit to the prediction target. Details on{' '}
          <Link href="/for-researchers" style={{ color: '#ef4444' }}>For Researchers</Link>.
        </div>

        <p>
          This maps <strong>presence</strong> to <strong>coherence</strong>
          (a dimensionless number between 0 and 1 that measures how collectively elements behave
          &mdash; from sparse/independent (C&nbsp;&asymp;&nbsp;0) to dense/collective (C&nbsp;&asymp;&nbsp;1)).
        </p>
        <details style={{ marginBottom: '0.5rem' }}>
          <summary style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', cursor: 'pointer' }}>Expert note (physicist terminology)</summary>
          <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem', marginTop: '0.35rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
            &ldquo;Coherence&rdquo; here means density-driven <em>classicality/collectivity</em>, not quantum phase coherence.
            BCS superconductors and BECs land at C&nbsp;&asymp;&nbsp;0 at all physical densities because their large
            N<sub>corr</sub> → tiny γ → flat tanh curve &mdash; not because they lack macroscopic phase coherence.
            See the <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>glossary</Link> warning.
          </div>
        </details>

        <h2>Inputs and Outputs</h2>
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--color-accent-violet)' }}>&#x03C1;</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong>Input:</strong> presence &mdash; compatible structural elements within the system&apos;s{' '}
              <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH</Link>.
              Physical density is one form of presence.
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--color-accent-violet)' }}>C</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong>Output:</strong> coherence (0 = sparse/independent, 1 = dense/collective)
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--color-accent-violet)' }}>&#x03B3;, &#x03C1;<sub>crit</sub></div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong>Parameters:</strong> coupling strength, saturation knee (reference density — not a critical point; C(&#x03C1;<sub>crit</sub>,&#x03B3;=2)&#x2248;0.88)
            </div>
          </div>
        </div>

        <h2>Why This Specific Function?</h2>

        <h3>1. The Compression Requirement</h3>
        <p>
          The physical state of any system lives in a high-dimensional space: magnitude, direction,
          temporal structure, spatial correlations, interference patterns. But the quantum/classical
          distinction is binary. You need a function that compresses high-dimensional information
          into a bounded scalar. This is an{' '}
          <strong>information-theoretically necessary compression</strong> (Session #67).
        </p>

        <h3>2. Why tanh?</h3>
        <p>The compression function must satisfy four properties:</p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Bounded [0, 1]</strong>: Coherence can&apos;t exceed unity or go negative</li>
          <li><strong>Monotonic</strong>: Higher presence &rarr; higher coherence (no paradoxical inversions)</li>
          <li><strong>Smooth saturation</strong>: Gradual approach to limits (enables field equations)</li>
          <li><strong>Handles extremes</strong>: &#x03C1; &rarr; 0 gives C &rarr; 0, &#x03C1; &rarr; &infin; gives C &rarr; 1</li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem' }}>
          <strong style={{ color: '#ef4444' }}>The site&apos;s own flagship chemistry result contradicts this axiom
          (explorer finding, 2026-07-29):</strong> C(&#x03C1;) as written is monotone <em>increasing</em> in
          density for any &#x03B3;, &#x03C1;<sub>crit</sub> &gt; 0. But <Link href="/sound-velocity" style={{ color: '#ef4444' }}>Sound
          Velocity</Link> &mdash; the site&apos;s strongest single chemistry correlation &mdash; ranks diamond
          (&#x03C1; = 3.51 g/cm&sup3;) as <em>more</em> coherent than lead (&#x03C1; = 11.34 g/cm&sup3;): higher
          density, lower coherence. Computed directly, Spearman(C(&#x03C1;), sound velocity) = &minus;0.32 for
          every parameter choice tested &mdash; the opposite sign from what this monotonicity property requires.
          Either the chemistry sector uses a different (inverse) orientation of C that this page does not
          document, or this axiom is violated by the framework&apos;s own strongest empirical claim. Not yet
          resolved.
        </p>
        <p>
          Several compander functions satisfy the four qualitative constraints — but as of 2026-07-22 the
          family has been put to data, and the constraints turn out to be incomplete. Fitting ten forms to
          the real SPARC radial-acceleration relation (2,807 points), <strong>SPARC refutes three members
          that pass all four qualitative constraints</strong> — arctan-log (&#x0394;BIC +46.7), algebraic-log
          (+23.8), Gompertz (+58.0) — on <em>asymptotic-rate</em> grounds the qualitative list never
          mentions. Among the survivors (tanh, erf-log, Hill, exponential-&#x03BD;) the data cannot
          distinguish (mutual &#x0394;BIC &le; 8.9), and tanh finishes <em>last</em> of the four.
          (&ldquo;Logistic&rdquo; is not a distinct member: the logistic sigmoid applied to the log-argument
          is identically tanh.) See the executed selection table below.
          tanh is the chosen form, motivated historically by its appearance in the Ising mean-field
          self-consistency equation m&nbsp;=&nbsp;tanh(&beta;Jzm) — the same shape. <strong>However, Synchronism&apos;s
          C(&#x03C1;) is not the Ising equation.</strong> The Ising result is a self-consistency loop where m
          appears on both sides. C(&#x03C1;) evaluates directly with no feedback loop — &#x03C1; goes in, C
          comes out. The tanh shape is <em>motivated</em> by the Ising analogy, not derived from it;
          it is a phenomenological choice from the compander family, not the uniquely forced form — confirmed
          by execution: not uniquely forced, and not even the family&apos;s best member, though inside the
          indistinguishability band.
          <strong>Empirical caveat:</strong> Landau-universality critical exponents
          (&#x03B2;, &#x03BD;, &#x03B1;, &#x03B4;, &#x03B7;) are off by ~2&times; in practice — the Landau analogy
          is motivational, not an accurate prediction of universality class. See{' '}
          <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>. See{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>{' '}
          for the complete derivation vs. motivation distinction.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Saturation note:</strong> At &#x03B3; = 2, C(&#x03C1;) saturates within ~1 decade of &#x03C1;<sub>crit</sub>
          (C(10&#x00B7;&#x03C1;<sub>crit</sub>) &#x2248; 0.9999). The coherence transition is a sharp but smooth
          saturation (a companding curve) — analytic, with no non-analyticity or critical exponents, so
          &ldquo;phase transition&rdquo; is a loose description, not a literal one. Each system has its own
          &#x03C1;<sub>crit</sub>, so what is universal is the <em>form</em> of the crossover, not its location.
        </p>

        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1.5rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>Form selection, executed (2026-07-22).</strong>{' '}
          Ten compander forms fit to the real SPARC RAR (2,807 points, same pipeline that produced the
          &#x03B3;=2 kill, reproduced at +184.0 as a sanity check). Verdict rule pre-fixed before running
          (&ldquo;privileged&rdquo; = beat every same-parameter-count member by &#x0394;BIC &gt; 10):
          <table style={{ width: '100%', marginTop: '0.6rem', marginBottom: '0.6rem', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(139,92,246,0.3)', textAlign: 'left' }}>
                <th style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>Form</th>
                <th style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>Best shape</th>
                <th style={{ padding: '0.25rem 0.75rem 0.25rem 0' }}>RMS (dex)</th>
                <th style={{ padding: '0.25rem 0' }}>&#x0394;BIC vs McGaugh &#x03BD;</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>generalized &#x03BD;-&#x03B4;</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>&#x03B4;=0.44</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1435</td><td style={{ padding: '0.2rem 0' }}>&minus;1.8</td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>Hill n=1 (MOND &ldquo;simple&rdquo; &#x03BC;)</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>pinned</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1437</td><td style={{ padding: '0.2rem 0' }}>&minus;0.7</td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>erf-log, free &#x03B3;</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>&#x03B3;=0.39</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1435</td><td style={{ padding: '0.2rem 0' }}>+1.5</td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>Hill, free n</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>n=0.975</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1437</td><td style={{ padding: '0.2rem 0' }}>+5.9</td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}><strong>tanh-log, free &#x03B3; (this site&apos;s form)</strong></td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>&#x03B3;=0.489</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1437</td><td style={{ padding: '0.2rem 0' }}>+7.1</td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>algebraic-log</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>&#x03B3;=0.66</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1441</td><td style={{ padding: '0.2rem 0' }}><strong style={{ color: '#ef4444' }}>+23.8 (refuted)</strong></td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>arctan-log</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>&#x03B3;=2.15</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1447</td><td style={{ padding: '0.2rem 0' }}><strong style={{ color: '#ef4444' }}>+46.7 (refuted)</strong></td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>Gompertz</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>n=0.61</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1450</td><td style={{ padding: '0.2rem 0' }}><strong style={{ color: '#ef4444' }}>+58.0 (refuted)</strong></td></tr>
              <tr><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>tanh-log, &#x03B3;=2 pinned (the framework&apos;s asserted value)</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>pinned</td><td style={{ padding: '0.2rem 0.75rem 0.2rem 0' }}>0.1485</td><td style={{ padding: '0.2rem 0' }}><strong style={{ color: '#ef4444' }}>+184.0 (refuted)</strong></td></tr>
            </tbody>
          </table>
          What the data actually selects is the pair of <em>asymptotic rates</em> — deep-MOND slope
          &#x03BC; &#x221D; y, and a return to Newton at least power-law fast — not any particular sigmoid.
          The three refuted members fail at the edges (Gompertz vanishes too fast at low y; arctan-log and
          algebraic-log return to Newton only as powers of 1/ln y). Between any two members with acceptable
          asymptotics, SPARC is silent. So the honest statement is two-sided: <strong>tanh carries no
          statistical content (form-selection null)</strong>, and <strong>the family is not degenerate
          either</strong> — the data discriminates, just not in tanh&apos;s favor. Read against the identity
          above: the top-scoring simple form is Hill n=1, which <em>is</em> &#x03B3;=1/2 &mdash; the data is not
          neutral about tanh, it prefers the point where tanh <em>becomes</em> MOND&apos;s &#x03BC;<sub>simple</sub>.
          Full table and scripts:{' '}
          <code style={{ fontSize: '0.8rem' }}>explorer/findings/compander-family-selection-executed-tanh-not-privileged.md</code>.
        </div>

        <h3>3. Why log?</h3>
        <p>
          Presence spans enormous ranges &mdash; in the astrophysical case, density alone covers 80+ orders
          of magnitude (interstellar gas at ~10<sup>&minus;24</sup> g/cm&sup3;
          to neutron stars at ~10<sup>14</sup> g/cm&sup3;). The logarithm maps this
          range into something tanh can differentiate between. The &ldquo;+1&rdquo; inside
          the log prevents divergence at &#x03C1; = 0.
        </p>

        <h2>What C = 0 and C = 1 Mean</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>C &rarr; 0: Sparse/Independent</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Low density or flat tanh (large N<sub>corr</sub>). Elements act independently — sparse gases,
              dilute quantum systems, quantum computing platforms.
              Note: BCS superconductors also land here due to tiny γ (≈6×10⁻⁴),
              not because they are incoherent — they are maximally quantum-phase-coherent,
              but C measures density-collectivity, not quantum phase coherence.
              <strong> Warning</strong>: do not read C≈0 as "quantum" or "wave-like" —
              C is classicality in the density/collective sense, the <em>opposite</em> of the quantum-coherence axis.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: '#22c55e' }}>C &rarr; 1: Dense/Collective</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              High density relative to ρ<sub>crit</sub>, moderate N<sub>corr</sub>.
              Elements act together as a collective — dense matter, crystal lattices, everyday macroscopic physics.
              Newton&apos;s laws work reliably here.
              Galaxy dynamics (N<sub>corr</sub>&asymp;1, γ=2) lives in this regime.
              Note: high C does not mean "classical particle" in the quantum-decoherence sense —
              it means dense/collective in the density axis this equation measures.
            </p>
          </div>
        </div>

        <h2>Relationship to C = f(&#x03B3;, D, S)</h2>
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(245,158,11,0.07)', borderRadius: '6px', borderLeft: '3px solid #f59e0b', marginBottom: '1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
            The consciousness and measurement pages of this site use a second form of coherence:
            C = f(&#x03B3;, D, S) where D is decoherence and S is self-modeling. Both are called
            &ldquo;coherence&rdquo; (C) but they are not obviously the same observable. The
            relationship &mdash; whether there is a function &#x03C1; = g(&#x03B3;, D, S) that
            reduces the parametric form to the density-based form &mdash; has not been derived.
            If the reduction exists, the &ldquo;one equation&rdquo; framing is vindicated. If it
            does not, C(&#x03C1;) and C = f(&#x03B3;, D, S) are two different observables sharing
            a symbol. See research proposal <em>dual_C_symbol_ambiguity_and_bridge_derivation.md</em>.
          </p>
        </div>

        <h2>What Class of Function Is C(ρ)?</h2>
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.9rem' }}>
          <p style={{ margin: 0 }}>
            <strong>C(ρ) is a <em>compander</em> — a logarithmic companding function</strong>, not an order parameter.
            This is the settled self-identification used on the <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link> page
            and in the <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.
          </p>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            The <strong>compander class</strong> includes: μ-law audio compression (telephone networks), Hill function (oxygen binding to hemoglobin),
            Naka-Rushton equation (retinal response), Kubo susceptibility (stat-mech near criticality). All map a wide dynamic range onto a
            bounded output using a sigmoidal curve. C(ρ) does the same: density spanning 80+ orders of magnitude →
            coherence in [0, 1].
          </p>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            <strong>Key implication:</strong> Companders are purely evaluative (input → output). They cannot encode
            universality classes, critical exponents, or spontaneous symmetry breaking — those require a self-consistency loop.
            The Ising mean-field equation m = tanh(βJzm) is in a different structural class: it is implicit (m appears on both sides)
            and supports a phase transition. C(ρ) evaluates C from ρ directly with no feedback. These are different objects.
            The Landau analogy is motivational, not a claim of class membership.
          </p>
        </div>

        <h2>Scope Limit: Universality Classes</h2>
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.06)', borderRadius: '6px', borderLeft: '3px solid #ef4444', marginBottom: '1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
            <strong>C(&#x03C1;) cannot encode universality-class structure.</strong> Real phase transitions are
            classified by (spatial dimension <em>d</em>, order-parameter dimension <em>n</em>, symmetry group) —
            these determine whether a system belongs to the 3D-Ising universality class (&#x03B1;&nbsp;=&nbsp;0.110),
            3D-XY (&#x03B1;&nbsp;=&nbsp;&minus;0.015), or mean-field (&#x03B1;&nbsp;=&nbsp;0). C(&#x03C1;) has no
            inputs encoding <em>d</em>, <em>n</em>, or symmetry. It therefore cannot reproduce critical exponents
            or distinguish universality classes — a one-parameter scalar coherence function is structurally
            blind to this information.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
            This is a <strong>scope limit</strong>, not a parameter-tuning failure. C(&#x03C1;) describes
            sigmoidal interpolation between coherent and decoherent regimes. It does not claim to predict
            critical exponents, universality-class membership, or quantitative crossover structure.
            The failures documented in <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
            (critical exponents 2&times; off, T<sub>c</sub> 6.5&times; wrong) are consequences of applying the function
            outside this scope, not evidence that the function itself is wrong within scope.
          </p>
        </div>

        <h2>Derivation History</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Session #64-65</strong>: &#x03B3; = 2.0 <em>motivated</em> by 6D phase space degrees of freedom &mdash; see <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</a> for why &ldquo;motivated, not derived&rdquo; is the correct framing</li>
          <li><strong>Session #66</strong>: tanh form <em>motivated</em> by the Ising self-consistency equation (tanh appears in the fixed-point, not as a derivation from it)</li>
          <li><strong>Session #67</strong>: Information-theoretic compression argument</li>
          <li><strong>Session #87-91</strong>: Connected to cosmological parameters (a&#x2080;, &#x03A3;&#x2080;)</li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/gamma-parameter" className="btn-primary">
            Next: The &#x03B3; Parameter &rarr;
          </Link>
          <Link href="/coherence-explorer" className="btn-secondary">
            Try It: Coherence Explorer
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/coherence-function" />
    </>
  );
}
