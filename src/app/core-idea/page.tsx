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
      <p className="hero-subtitle" style={{ marginBottom: '1rem' }}>
        One function, proposed for every scale from Planck to cosmic &mdash; what it says, where it was
        tested, and where it broke.
      </p>

      {/* Plain-words summary for first-time readers (visitor 2026-09-23 bailed at the jargon below). */}
      <div className="content-width" style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', margin: '0 0 1.25rem', padding: '0.75rem 1rem', borderLeft: '2px solid var(--color-accent-violet)', background: 'rgba(139,92,246,0.06)', borderRadius: '0.25rem', lineHeight: 1.7 }}>
        <strong>In plain words.</strong> This page is about one equation, C(&#x03C1;). You give it how densely packed
        a system is, and it gives back a number from 0 (the parts act on their own) to 1 (the parts act together).
        The proposal was that this one S-shaped curve works at every scale, from atoms to galaxies. When it was
        tested on real galaxy data, the density version lost: left free, the data make the curve barely respond to
        density at all, the opposite of the idea. The version that does fit galaxies runs on acceleration instead of
        density, and at that point it is MOND, an existing theory. The page also shows that the equation is a
        standard saturation curve already used in other fields, not new physics.
      </div>

      {/* Beginner exit added 2026-09-25: a casual visitor on the Beginner path skimmed past this point without a takeaway. */}
      <div className="content-width" style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', margin: '0 0 1.25rem', padding: '0.75rem 1rem', border: '1px solid rgba(16,185,129,0.45)', background: 'rgba(16,185,129,0.07)', borderRadius: '0.5rem', lineHeight: 1.7 }}>
        <strong style={{ color: '#10b981' }}>Beginner? You can stop here.</strong> The takeaway: the equation turns
        density into a coherence number between 0 and 1. Tested on galaxies, density barely mattered, and the version
        that fits turned out to be MOND&apos;s interpolating function in other clothes. The rest of this page is the
        deeper math and is optional &mdash; next on the Beginner path:{' '}
        <Link href="/what-synchronism-is-not" style={{ color: 'var(--color-accent-blue)' }}>What Synchronism Is Not &rarr;</Link>
      </div>

      <div className="content-width" style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', margin: '0 0 1.75rem', padding: '0.6rem 0.9rem', borderLeft: '2px solid var(--color-accent-blue)', background: 'rgba(56,189,248,0.05)', borderRadius: '0.25rem', lineHeight: 1.7 }}>
        <strong>Badge key</strong> (you&apos;ll meet these below). The colored leading word is the verdict; any text after the dash just names the specific finding.
        <br />
        <span className="badge badge-failed">Failed</span> contradicted by data &middot;{' '}
        <span className="badge badge-reparametrization">Reparametrization</span> existing physics in new notation (&ldquo;Null-Class&rdquo;: a simpler model without the framework does as well) &middot;{' '}
        <span className="badge badge-audited-negative">Audited-Negative</span> an internal check found the claim wrong; kept on record &middot;{' '}
        <span className="badge badge-speculative">Speculative</span> no test exists &middot;{' '}
        <span className="badge badge-untested">Untested</span> a test exists but hasn&apos;t been run
        <br />
        Full definitions: <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>badge definitions</Link> on Honest Assessment; terms are defined in the <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>Glossary</Link>.
      </div>

      <section className="section content-width">
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>
          Think of it as a <strong>dimmer switch</strong> from sparse/independent to dense/collective.
          Feed it the local density of a system, and it outputs a number between 0 (sparse/independent)
          and 1 (dense/collective). The proposal was that the same switch, on the same scale, works for a single atom and
          a galaxy cluster &mdash; that is what was tested, and where it broke is below.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
          <strong>What does coherence do to gravity?</strong> (added 2026-09-14 &mdash; a reader finished the beginner
          path without learning this.) In galaxies, the proposal was that gravity <em>looks</em> stronger than the visible
          matter explains by a factor set by C. Two wirings were tried, and they point opposite ways. In the one the
          site&apos;s galaxy refutations used, the boost is 1/C: gravity looks strongest where coherence is <em>low</em>
          (the sparse outskirts), capped at about 3.2&times;. In the other (&ldquo;quadrature&rdquo;), the extra
          speed grows <em>with</em> C, so it switches on in dense centres &mdash; where it isn&apos;t needed &mdash; and fails
          outright. The 1/C wiring fits only after its input is switched from density to acceleration and its dial is
          fitted, at which point it is MOND; with the cap it fails the most dark-matter-dominated galaxies. Both are on the{' '}
          <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Curve Plotter</Link>.
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
            <text x="341" y="192" fill="#9ca3af" fontSize="10">&#x03C1;<tspan baselineShift="sub" fontSize="8">crit</tspan> &mdash; C &#x2248; 0.88 here at &#x03B3; = 2: a saturation knee, not a midpoint</text>
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
            Drawn with &#x03B3; = 2 (the galaxy-scale pin &mdash; refuted on SPARC data &mdash; <Link href="/glossary#SPARC" style={{ color: 'var(--color-accent-blue)' }}>SPARC</Link> is a set of 175 galaxies with carefully measured rotation speeds; see the caveat
            below) on a logarithmic density axis. Note the two honest markers: the curve&apos;s true
            midpoint (C = 0.5) sits near 0.32&#x00B7;&#x03C1;<sub>crit</sub>, and at &#x03C1;<sub>crit</sub> itself
            C &#x2248; 0.88 &mdash; &#x03C1;<sub>crit</sub> is a saturation knee, not a critical point.
            <strong> Both markers move with &#x03B3;</strong>, so neither number means anything without it:
            C(&#x03C1;<sub>crit</sub>) = tanh(&#x03B3;&middot;ln&nbsp;2), which is 0.88 at &#x03B3; = 2 but only 0.33 at the
            SPARC-fitted &#x03B3; &#x2248; 0.49 &mdash; below the halfway point rather than near saturation. The
            Coherence Explorer defaults to &#x03B3; = 0.49 and reads 0.327; this figure is drawn at the refuted pin.
            (Flagged 2026-09-18 by a visitor who found the two figures 2.7&times; apart with neither stating its &#x03B3;.)
          </p>
        </div>

        <div style={{
          background: 'rgba(239, 68, 68, 0.07)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginTop: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>The data point the other way.</strong>{' '}
          The idea is that more density makes the parts <em>switch to acting together</em>. When real galaxy data
          (SPARC) were fitted with the density version of this equation and &#x03B3; left free, the best fit pushed
          &#x03B3; down to <strong>0.046</strong> &mdash; so low that the curve barely responds to density at all. Given the
          choice, the data say the parts <em>don&apos;t</em> switch to acting together: the opposite of the idea. The same
          density version also loses head-to-head to an acceleration-keyed version of the same curve (which is essentially MOND).{' '}
          <a href="#density-fit" style={{ color: 'var(--color-accent-blue)' }}>Details below &darr;</a>
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
              2/&#x221A;N<sub>corr</sub>: <strong>transition sharpness</strong>{' '}
              <span style={{ display: 'block', fontSize: '0.95em' }}>(N<sub>corr</sub> = how many particles move together as one unit)</span>
              <span style={{ color: 'var(--color-text-muted)', display: 'block', marginTop: '0.35rem', fontSize: '0.95em' }}>
                ⚠ This card used to read &ldquo;coupling strength&rdquo; (corrected 2026-07-27). That is
                the wrong <em>kind</em> of quantity: the Hill identity proved below makes &#x03B3; a
                <strong> Hill coefficient</strong> (a biochemistry term: one number for how steep a
                switch-like response is) — a log-log slope, with Hill index n&nbsp;=&nbsp;2&#x03B3; —
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
                (added 2026-07-27).</strong> The{' '}
                <Link href="/glossary#BTFR" style={{ color: 'var(--color-accent-blue)' }}>BTFR</Link> (Baryonic Tully&ndash;Fisher Relation: a
                galaxy&apos;s visible mass grows roughly as its rotation speed to the fourth power) forces &#x03C1;<sub>crit</sub> &#x221D; V<sup>&minus;2</sup>,
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
          must be bounded [0, 1], monotonic, and smooth. tanh&apos;s form recalls the{' '}
          <Link href="/glossary#mean-field-theory" style={{ color: 'var(--color-accent-blue)' }}>Ising model</Link>{' '}
          (the textbook model of a magnet, where each spin lines up with its neighbours) self-consistency equation m = tanh(&beta;Jzm), but the resemblance is only visual: C(&#x03C1;) has no
          feedback loop (&#x03C1; goes in, C comes out), so the Ising analogy carries no motivating force.
          Other sigmoids (logistic, error function, Hill) satisfy the same four constraints.
          tanh is a phenomenological choice, not a derived result.
          Note: C(&#x03C1;) is real-analytic everywhere on its domain &mdash; no singularity, no free-energy
          functional, and no length scale anywhere in the equation &mdash; so it has no critical point and
          therefore no critical exponents (&#x03B2;, &#x03BD;) to compare. Asking for them is a category error,
          not a near-miss with Landau theory (the standard theory of how phase transitions behave near their
          critical point); the analogy is motivational only.
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
          N<sub>corr</sub> (how many particles move together as one unit) was meant to be the
          physically measurable input. The factor of 2 is motivated by phase-space arguments (6D contracted to 3
          effective) but should be understood as a motivated ansatz rather than a rigorous derivation.
        </p>
        <p>
          <strong>So what sets &#x03B3; physically?</strong> Honestly: nothing yet. No protocol exists to
          measure N<sub>corr</sub> in any system independently of fitting &#x03B3; to the same data &mdash;
          N<sub>corr</sub> is back-solved from the fitted &#x03B3;, not counted &mdash; so the relation
          predicts nothing on its own, and where it is applied it points the wrong way for collective
          systems. It is badged <strong>audited-negative</strong>; see the{' '}
          <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator</Link>.
          <em style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}> (Until 2026-09-15 this paragraph
          called N<sub>corr</sub> &ldquo;the physically measurable quantity,&rdquo; contradicting the calculator.)</em>
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
          2&#x03B3; doesn&apos;t undo. So the Hill functions and Naka&ndash;Rushton curves named below (standard
          saturation curves from biochemistry and vision science; see{' '}
          <Link href="/glossary#compander" style={{ color: 'var(--color-accent-blue)' }}>compander</Link>, a curve
          that squeezes a huge input range into a fixed output range) are not
          merely <em>similar</em> alternatives; the flagship equation <em>is</em> one of them, exactly.
          (Identity stated 2026-07-10. Provenance: derived independently by two successive internal
          review passes, 2026-07-09 and 2026-07-10 &mdash; the audit machinery caught it; the identity
          then took a day to reach this page. No external derivation is on record.)
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong>Precision (2026-09-14):</strong> &ldquo;Hill-type&rdquo; is exact in the variable (1+x). In x = &rho;/&rho;<sub>crit</sub>
          itself, C is exactly a Hill function only at &gamma;&nbsp;=&nbsp;&frac12;, where C&nbsp;=&nbsp;x/(x+2); at other &gamma;
          the Hill index n&nbsp;=&nbsp;2&gamma; is the large-x slope, and near x&nbsp;=&nbsp;0 the curve is simply linear
          (C&nbsp;&asymp;&nbsp;&gamma;x).
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
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0 0 0.25rem' }}>
                  Two dials, one vocabulary &mdash; don&apos;t mix them up: <strong>C</strong> near 1 means collective; <strong>&gamma;</strong> runs the other way
                  (small &gamma; = many correlated particles = a gentle switch).
                </p>
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
                  Null model run (2026-05-10): a plain 2-parameter polynomial in atomic number matches these
                  correlations (|&#x0394;r| &#x2264; 0.07) and sometimes beats them, so they reflect density-monotonic
                  chemistry, not anything specific to this framework (null-class). (This card said &ldquo;pending
                  null model&rdquo; until 2026-09-15 &mdash; stale; Honest Assessment has carried the result since May.)
                </p>
              </div>
              <ValidationBadge status="reparametrization" label="Reparametrization — Null-Class (null model run 2026-05-10)" />
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
          A logarithmic compander &mdash; not merely <em>in the family of</em> &#x03BC;-law encoders (the volume-squashing curve telephone networks use
          for voice), Hill functions,
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
          <p id="density-fit" style={{ marginTop: '0.85rem', marginBottom: 0 }}>
            <strong>The data say the same thing, independently.</strong> The framework&apos;s whole distinctive claim is
            that <em>density</em> drives a <em>collective</em> transition. Tested in the density variable itself, the
            data reject that: fit head-to-head on the same SPARC galaxy points with &#x03B3; free, the density-keyed law
            loses to the acceleration-keyed one at <strong>&#x0394;BIC +2843</strong> (+142 after allowing for
            neighbouring points on a rotation curve not being independent), and its best-fit &#x03B3; runs down
            to <strong>0.046</strong> &mdash; the fit switches its own density dependence off.{' '}
            <strong>In plain words: when the density version is allowed to choose, it chooses to barely respond to
            density at all &mdash; the best fit says the parts don&apos;t switch to acting together, the opposite of the
            idea.</strong> That is the criticality retraction above arriving a second time, through the data rather than
            through the algebra.
          </p>
          <p style={{ marginTop: '0.6rem', marginBottom: 0 }}>
            The better-known galaxy fit, &#x03B3;&nbsp;&#x2248;&nbsp;0.489, is a different law: there the same tanh-log
            shape is keyed on <em>acceleration</em> and used as an implicit interpolating function (&#x03BC;-form) on the
            observed acceleration &mdash; MOND&apos;s own variable, not &#x03C1;. Written as a Hill function its index is
            n&nbsp;=&nbsp;2&#x03B3;&nbsp;&#x2248;&nbsp;0.98&nbsp;&#x2248;&nbsp;1, the <em>non-cooperative</em> limit, so that
            switch is not a collective one either; but on its own it says nothing about density. At exactly
            &#x03B3;&nbsp;=&nbsp;1/2 the identity closes: C(x)&nbsp;=&nbsp;x/(x+2)&nbsp;=&nbsp;&#x03BC;<sub>simple</sub>(x/2),
            MOND&apos;s simple interpolating function &mdash; so &ldquo;the acceleration-keyed fit converges to MOND&rdquo;
            is not an empirical coincidence but algebra (see{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>the RAR entry</Link>,{' '}
            <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link> for how C
            entered that fit, and{' '}
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>).
          </p>
          <details style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note</summary>
            This passage said the SPARC fit &#x03B3;&nbsp;&#x2248;&nbsp;0.489 (Hill index &#x2248;&nbsp;1) meant
            &ldquo;its own best fit sets cooperativity to zero&rdquo; for the claim that <em>density</em> drives a collective
            transition. That fit was run in the acceleration-keyed, implicit &#x03BC;-form law, so it cannot speak for the
            density-keyed law; the density-keyed law&apos;s own head-to-head result (&#x0394;BIC +2843, best-fit
            &#x03B3; &rarr; 0.046) now carries the conclusion.
          </details>
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
              See it tested against 14,610 galaxies (175 SPARC + 14,435 ALFALFA&ndash;SDSS, a large radio-plus-optical galaxy survey, after quality cuts)
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
