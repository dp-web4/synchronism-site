'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function CoreIdea() {
  return (
    <>
      <Breadcrumbs currentPath="/core-idea" />

      <h1>The Core Idea</h1>
      <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
        One function. Three parameters. Every scale from Planck to cosmic.
      </p>

      <section className="section content-width">
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>
          Think of it as a <strong>dimmer switch</strong> from sparse/independent to dense/collective.
          Feed it the local density of a system, and it outputs a number between 0 (sparse/independent)
          and 1 (dense/collective). The same switch, the same scale, works for a single atom and a galaxy cluster.
        </p>

        <div className="equation" style={{ fontSize: '1.5rem' }}>
          C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>&#x03C1;</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>Presence</Link>: local density — how many relevant elements are packed in a given region (e.g. stars per cubic light-year, atoms per unit volume)
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>C</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Coherence: 0 = sparse/independent, 1 = dense/collective.{' '}
              <span style={{ color: 'var(--color-text-muted)' }}>⚠ Not quantum coherence — superconductors score <em>low</em> here.</span>
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>&#x03B3;</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              2/&#x221A;N<sub>corr</sub>: coupling strength
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>&#x03C1;<sub>crit</sub></div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              A &times; V<sub>flat</sub>&sup2;: saturation knee (not a critical point)
            </div>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>Why These Specific Choices?</h2>

        <h3>Why tanh?</h3>
        <p>
          tanh is an S-shaped curve that smoothly transitions from 0 to 1 &mdash; think of it as a
          dimmer switch from sparse/independent to dense/collective. The function
          must be bounded [0, 1], monotonic, and smooth. tanh&apos;s form recalls the Ising model
          self-consistency equation m = tanh(&beta;Jzm), but the resemblance is only visual: C(&#x03C1;) has no
          feedback loop (&#x03C1; goes in, C comes out), so the Ising analogy carries no motivating force.
          Other sigmoids (logistic, error function, Hill) satisfy the same four constraints.
          tanh is a phenomenological choice, not a derived result.
          Note: Landau-universality critical exponents (&#x03B2;, &#x03BD;, etc.) are off by ~2&times; in practice
          &mdash; the analogy is motivational, not literal.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <Link href="/two-reframes" style={{ color: 'var(--color-accent-blue)' }}>Need an analogy first?</Link>
          {' '}&middot;{' '}
          <Link href="/coherence-function" style={{ color: 'var(--color-accent-blue)' }}>Why tanh? (motivation, not derivation) &rarr;</Link>
        </p>

        <h3>Why &#x03B3; = 2/&#x221A;N<sub>corr</sub>?</h3>
        <p>
          The 1/&#x221A;N<sub>corr</sub> dependence resembles central-limit-theorem scaling
          (fluctuations ~ 1/&#x221A;N), which is generic statistics for correlated ensembles.
          N<sub>corr</sub> (number of correlated particle units) is the physically measurable
          quantity. The factor of 2 is motivated by phase-space arguments (6D contracted to 3
          effective) but should be understood as a motivated ansatz rather than a rigorous derivation.
        </p>
        <p><Link href="/gamma-parameter" style={{ color: 'var(--color-accent-blue)' }}>Why 2/&#x221A;N<sub>corr</sub>? (motivation, not derivation) &rarr;</Link></p>

        <h3>Why log? (Honest answer: it&apos;s cosmetic)</h3>
        <p>
          The traditional motivation was compression: density spans 80+ orders of magnitude (from
          interstellar gas at 10<sup>&minus;24</sup> g/cm&sup3; to neutron stars at 10<sup>14</sup> g/cm&sup3;),
          and the logarithm squeezes that range into something the tanh can work with. But an exact
          identity retires that story. With x&nbsp;=&nbsp;&#x03C1;/&#x03C1;<sub>crit</sub>:
        </p>
        <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--color-accent-violet)' }}>
          tanh(&#x03B3;&middot;ln(1+x)) &equiv; [(1+x)<sup>2&#x03B3;</sup> &minus; 1] / [(1+x)<sup>2&#x03B3;</sup> + 1] &mdash; exactly.
        </p>
        <p>
          The equation is an ordinary rational (Hill-type) saturation function of (1+x)<sup>2&#x03B3;</sup>;
          the tanh&#x2218;ln decomposition is notation, not mechanism. Any saturating rational function
          &ldquo;spans 80 orders of magnitude&rdquo; for free &mdash; the ln does no work that the exponent
          2&#x03B3; doesn&apos;t undo. So the Hill functions and Naka&ndash;Rushton curves named below are not
          merely <em>similar</em> alternatives; the flagship equation <em>is</em> one of them, exactly.
          (Identity stated 2026-07-10. Provenance: derived independently by two successive internal
          review passes, 2026-07-09 and 2026-07-10 &mdash; the audit machinery caught it; the identity
          then took a day to reach this page. No external derivation is on record.)
        </p>
      </section>

      <section className="section content-width">
        <h2>What It Predicts</h2>

        <div style={{
          background: 'rgba(245, 158, 11, 0.07)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.6rem 1rem',
          marginBottom: '1rem',
          fontSize: '0.82rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Audit note:</strong>{' '}
          6 of 6 badges previously labeled &ldquo;Validated&rdquo; on this site have been
          demoted to Reparametrization on closer review. These regime cards have not yet
          been independently audited &mdash; treat all current badges as{' '}
          <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>
            Reparametrization-pending-audit
          </Link>
          {' '}until shown otherwise. See <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>honest assessment</Link>.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>&#x03B3; &laquo; 1: Collective Regime</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  <strong>Many</strong> correlated particles (large N<sub>corr</sub> → small &#x03B3; = 2/&#x221A;N<sub>corr</sub>).
                  BECs, superconductors. Despite being quantum systems in the real-world sense,
                  these score C &#x2248; 0 here — the S-curve is so flat that typical densities leave C near zero.
                  <em> This is why &ldquo;coherence&rdquo; in Synchronism is not quantum coherence.</em>
                </p>
              </div>
              <ValidationBadge status="reparametrization" label="Reparametrization — regime definition" />
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>&#x03B3; &#x2248; 1: The Boundary</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Phase transitions, chemistry, catalysis, biology. Where the S-curve has intermediate steepness.
                  1,703 phenomena cluster here at 89% boundary-consistency rate.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                  Pending null model: density-monotonic targets produce r &gt; 0.95 from trivial polynomial fits.
                  Chemistry correlations may reflect monotonic data structure, not framework specificity.
                </p>
              </div>
              <ValidationBadge status="reparametrization" label="Reparametrization — null model pending" />
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>&#x03B3; &raquo; 1: Independent Regime</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  <strong>Few</strong> correlated particles (N<sub>corr</sub> ≈ 1 → large &#x03B3;).
                  Ideal gas, independent stars in a galaxy. Steepest S-curve — C rises quickly with density.
                  Galaxy dynamics is here (stars treated as independent, N<sub>corr</sub>=1, &#x03B3;=2).
                </p>
              </div>
              <ValidationBadge status="reparametrization" label="Reparametrization — regime definition" />
            </div>
          </div>
        </div>

        <div style={{
          background: 'rgba(167, 139, 250, 0.07)',
          border: '1px solid rgba(167, 139, 250, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginTop: '1rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>What C(&#x03C1;) actually is:</strong>{' '}
          A logarithmic compander &mdash; not merely <em>in the family of</em> &#x03BC;-law encoders, Hill functions,
          and Naka&ndash;Rushton curves, but algebraically <em>identical</em> to a Hill-type rational
          saturation function: tanh(&#x03B3;&middot;ln(1+x)) &equiv; [(1+x)<sup>2&#x03B3;</sup>&minus;1]/[(1+x)<sup>2&#x03B3;</sup>+1]
          exactly (see &ldquo;Why log?&rdquo; above).
          The &ldquo;Ising motivation&rdquo; is conceptual: C(&#x03C1;) is not a self-consistency equation
          (&#x03C1; goes in, C comes out, no feedback). Critical exponents (&#x03B2;, &#x03BD;) are off by 2&#x00D7;
          &mdash; the diagnostic result that rules out C(&#x03C1;) as a Landau-theory continuum
          order parameter. See{' '}
          <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>honest assessment</Link>.
        </div>
      </section>

      <section className="section content-width">
        <h2>Choose Your Path</h2>
        <div className="grid-2">
          <Link href="/coherence-function" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-blue)' }}>The Math</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Dive into the equation: derivations, proofs, parameter origins
            </p>
          </Link>
          <Link href="/galaxy-rotation" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-blue)' }}>The Evidence</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              See it tested against 14,760 galaxies
            </p>
          </Link>
          <Link href="/gamma-boundary" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-blue)' }}>The Chemistry</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Explore 1,703 phenomena at the &#x03B3; &#x2248; 1 boundary
            </p>
          </Link>
          <Link href="/honest-assessment" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-warm)' }}>The Failures</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Where the theory falls short and what that teaches us
            </p>
          </Link>
          <Link href="/fundamentals" className="card" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>The Foundations</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Four axioms everything else flows from &mdash; including what Intent actually is
            </p>
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/core-idea" />
    </>
  );
}
