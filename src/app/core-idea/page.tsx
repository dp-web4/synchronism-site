'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function CoreIdea() {
  return (
    <>
      <Breadcrumbs currentPath="/core-idea" />
      <PathNav currentPath="/core-idea" />

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

        <div className="card" style={{ marginTop: '1.5rem', padding: '1rem 1.25rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            <strong>tanh, in one picture.</strong> tanh is just an S-shaped curve &mdash; flat, then steep,
            then flat again. Nothing happens at low density, a small change flips the behavior in the
            middle, and past the knee more density changes almost nothing. That&apos;s the whole
            &ldquo;dimmer switch.&rdquo;
          </p>
          <svg viewBox="0 0 560 240" role="img" aria-label="The S-shaped tanh curve: coherence C rises from 0 (sparse, independent) through a steep switch region to 1 (dense, collective) as density increases" style={{ width: '100%', height: 'auto' }}>
            {/* axes */}
            <line x1="50" y1="200" x2="530" y2="200" stroke="var(--color-dark-border, #374151)" strokeWidth="1" />
            <line x1="50" y1="20" x2="50" y2="200" stroke="var(--color-dark-border, #374151)" strokeWidth="1" />
            <text x="42" y="204" fill="#9ca3af" fontSize="11" textAnchor="end">0</text>
            <text x="42" y="34" fill="#9ca3af" fontSize="11" textAnchor="end">1</text>
            <text x="30" y="115" fill="#9ca3af" fontSize="12" textAnchor="middle" transform="rotate(-90 30 115)">coherence C</text>
            <text x="290" y="228" fill="#9ca3af" fontSize="12" textAnchor="middle">density &#x03C1; (log scale &#x2192;)</text>
            {/* rho_crit marker */}
            <line x1="336" y1="30" x2="336" y2="200" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <text x="341" y="192" fill="#9ca3af" fontSize="10">&#x03C1;<tspan baselineShift="sub" fontSize="8">crit</tspan> &mdash; C &#x2248; 0.88 here: a saturation knee, not a midpoint</text>
            {/* the curve: C = tanh(2·ln(1+rho/rho_crit)) on a log-density axis */}
            <polyline points="60,200 106,199 152,197 198,189 244,168 267,146 290,115 313,79 336,50 359,36 382,31 428,30 520,30" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinejoin="round" />
            {/* midpoint dot */}
            <circle cx="290" cy="115" r="4" fill="#8b5cf6" />
            <text x="283" y="112" fill="#c4b5fd" fontSize="10" textAnchor="end">C = 0.5 at &#x2248; 0.32&#x00B7;&#x03C1;<tspan baselineShift="sub" fontSize="8">crit</tspan></text>
            {/* region labels */}
            <text x="140" y="172" fill="#9ca3af" fontSize="11">dim: sparse, independent (C &#x2248; 0)</text>
            <text x="415" y="55" fill="#9ca3af" fontSize="11">bright: dense, collective (C &#x2248; 1)</text>
            <text x="262" y="95" fill="#c4b5fd" fontSize="11" transform="rotate(-52 262 95)">the switch</text>
          </svg>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.5rem 0 0' }}>
            Drawn with &#x03B3; = 2 (the galaxy-scale pin &mdash; refuted on SPARC data, see the caveat
            below) on a logarithmic density axis. Note the two honest markers: the curve&apos;s true
            midpoint (C = 0.5) sits near 0.32&#x00B7;&#x03C1;<sub>crit</sub>, and at &#x03C1;<sub>crit</sub> itself
            C &#x2248; 0.88 &mdash; &#x03C1;<sub>crit</sub> is a saturation knee, not a critical point.
          </p>
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
              2/&#x221A;N<sub>corr</sub>: <strong>transition sharpness</strong>
              <span style={{ color: 'var(--color-text-muted)', display: 'block', marginTop: '0.35rem', fontSize: '0.95em' }}>
                ⚠ This card used to read &ldquo;coupling strength&rdquo; (corrected 2026-07-27). That is
                the wrong <em>kind</em> of quantity: the Hill identity proved below makes &#x03B3; a
                <strong> Hill coefficient</strong> — a log-log slope, with Hill index n&nbsp;=&nbsp;2&#x03B3; —
                not a coupling. Also note the map 2/&#x221A;N<sub>corr</sub> is audited{' '}
                <a href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>sign-inverted</a>,
                and the galaxy pin &#x03B3;&nbsp;=&nbsp;2 inverts to N<sub>corr</sub>&nbsp;=&nbsp;1 — the
                ideal-gas value.
              </span>
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-accent-violet)', fontFamily: 'serif', fontStyle: 'italic' }}>&#x03C1;<sub>crit</sub></div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              A &times; V<sub>flat</sub>&sup2;: saturation knee (not a critical point)
              <span style={{ color: '#ef4444', display: 'block', marginTop: '0.35rem', fontSize: '0.95em' }}>
                ⚠ <strong>This scaling is refuted, and had been sitting here uncaveated
                (added 2026-07-27).</strong> The BTFR forces &#x03C1;<sub>crit</sub> &#x221D; V<sup>&minus;2</sup>,
                the opposite sign to the V<sup>+2</sup> written above: at the knee GM/r² = a₀ gives
                r = &#x221A;(GM/a₀), so &#x03C1; ~ M/r³ &#x221D; M<sup>&minus;1/2</sup> &#x221D; V<sup>&minus;2</sup>{' '}
                using M &#x221D; V⁴. See the{' '}
                <a href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>locality no-go</a>.
                The constant A is separately unanchored — its stated first-principles formula is off
                by ~600&times; from the value in use.
              </span>
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
          Note: C(&#x03C1;) is real-analytic everywhere on its domain &mdash; no singularity, no free-energy
          functional, and no length scale anywhere in the equation &mdash; so it has no critical point and
          therefore no critical exponents (&#x03B2;, &#x03BD;) to compare. Asking for them is a category error,
          not a near-miss with Landau theory; the analogy is motivational only.
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
          (&#x03C1; goes in, C comes out, no feedback). C(&#x03C1;) is analytic on its whole domain, with no
          singularity and no length scale in the equation &mdash; so it has <em>no critical point</em>,
          and critical exponents (&#x03B2;, &#x03BD;) are undefined by construction, not &ldquo;off by
          2&#x00D7;.&rdquo; (The apparent &ldquo;2&#x00D7;&rdquo; is &#x03B2;<sub>eff</sub> = 1 from the small-x
          expansion vs. mean-field &#x00BD; &mdash; but &#x03B2;<sub>eff</sub> = 1 is a tautology for any
          analytic function vanishing at the origin, not a measurement.) That is the diagnostic result
          that rules out C(&#x03C1;) as a Landau-theory continuum
          order parameter &mdash; a category error, not a near miss. <strong>The cost of this dismissal,
          stated where it is made (added 2026-07-23):</strong> abandoning criticality means abandoning
          universality classes entirely &mdash; so every &ldquo;phase transition&rdquo; phrasing elsewhere
          on this site is decorative vocabulary, not physics. The compander reframing absorbs this
          honestly, but the trade should be visible: no critical point &rArr; no universality &rArr; no
          Landau machinery to borrow authority from. See{' '}
          <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>honest assessment</Link>.
          <p style={{ marginTop: '0.85rem', marginBottom: 0 }}>
            <strong>The data say the same thing, independently (added 2026-08-08).</strong> Written as a Hill
            function the exponent is the Hill index n&nbsp;=&nbsp;2&#x03B3;. Fit freely to SPARC, the galaxy
            sector prefers &#x03B3;&nbsp;&#x2248;&nbsp;0.489, i.e.{' '}
            <strong>n&nbsp;&#x2248;&nbsp;0.98&nbsp;&#x2248;&nbsp;1</strong> &mdash; and n&nbsp;=&nbsp;1 is the{' '}
            <em>non-cooperative</em> limit of a Hill function, the value that means <em>no collective
            effect</em>. The framework&apos;s whole distinctive claim is that density drives a{' '}
            <em>collective</em> transition. Its own best fit sets cooperativity to zero. That is the criticality
            retraction above arriving a second time, through the data rather than through the algebra. At exactly
            &#x03B3;&nbsp;=&nbsp;1/2 the identity closes: C(x)&nbsp;=&nbsp;x/(x+2)&nbsp;=&nbsp;&#x03BC;<sub>simple</sub>(x/2),
            MOND&apos;s simple interpolating function &mdash; so &ldquo;the fit converges to MOND&rdquo; is not an
            empirical coincidence but algebra (see{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>the RAR entry</Link> and{' '}
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>).
          </p>
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
              See it tested against 14,610 galaxies (175 SPARC + 14,435 ALFALFA&ndash;SDSS after quality cuts)
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
