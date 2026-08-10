'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function GammaParameter() {
  return (
    <>
      <Breadcrumbs currentPath="/gamma-parameter" />
      <PathNav currentPath="/gamma-parameter" />
      <h1>The &#x03B3; Parameter</h1>
      <ValidationBadge status="speculative" label="Motivated Ansatz — Not Derived" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="Transition sharpness (Hill coefficient)">
          &#x03B3; = 2 / &#x221A;N<sub>corr</sub>
        </EquationDisplay>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
          Corrected 2026-07-27: this label previously read &ldquo;coupling strength&rdquo; &mdash; the wrong
          <em> kind</em> of quantity. The Hill identity on{' '}
          <Link href="/coherence-function" style={{ color: 'var(--color-accent-blue)' }}>Coherence Function</Link>{' '}
          makes γ a log-log slope (Hill index n = 2γ), not a coupling.
        </p>

        <p>
          &#x03B3; (gamma) is the single parameter that determines which regime a system is in.
          It depends on only one thing: <strong>N<sub>corr</sub></strong>, the number of particles
          moving as a correlated unit.
        </p>

        <h2>Where the 2 Comes From</h2>
        <p>
          Phase space has 6 dimensions (3 position + 3 momentum). Through contraction to effective
          degrees of freedom, this yields a factor of 2. This argument appears in Sessions #64&ndash;65;
          the{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter-derivations audit</Link>{' '}
          classifies the whole formula as a <strong>motivated ansatz</strong>, not a derivation.
        </p>

        <h2>Where &#x221A;N<sub>corr</sub> Comes From &mdash; and Why the Argument Fails</h2>
        <div className="card" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', marginBottom: '1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong style={{ color: '#ef4444' }}>This page used to state the standard justification uncritically.
            The site&apos;s own audit rejects it, on two grounds:</strong>
          </p>
          <ol style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0.5rem 0 0', paddingLeft: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>The CLT invocation is self-contradictory.</strong> &ldquo;Fluctuations scale as
              1/&#x221A;N&rdquo; is the result for <em>independent</em> (iid) degrees of freedom.
              N<sub>corr</sub> counts <em>correlated</em> degrees of freedom &mdash; exactly the regime
              where iid scaling breaks down. The &#x03B3; Calculator&apos;s caveat 1 already disavows
              this: &#x03B3; = 2/&#x221A;N<sub>corr</sub> is &ldquo;a dimensional ansatz inspired by
              fluctuation theory &mdash; not a consequence of the CLT.&rdquo;
            </li>
            <li style={{ margin: 0 }}>
              <strong>The sign is inverted.</strong> 1/&#x221A;N is a fluctuation <em>width</em>
              (more particles &rarr; narrower), but &#x03B3; sits in a transition-<em>sharpness</em> slot
              (larger &rarr; sharper). The formula therefore gives the most collective systems the{' '}
              <em>flattest</em> coherence curves &mdash; which is how a BCS superconductor, a system with
              a real macroscopic transition, ends up at C &#x2248; 0. The{' '}
              <Link href="/coherence-function" style={{ color: 'var(--color-accent-blue)' }}>coherence function page</Link>{' '}
              discloses that consequence; it originates here.
            </li>
          </ol>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          What survives: dimensional bookkeeping. N<sub>corr</sub> = 1 gives &#x03B3; = 2,
          N<sub>corr</sub> = 10<sup>24</sup> gives &#x03B3; = 2&times;10<sup>&minus;12</sup> &mdash; the
          arithmetic is right; the claim that physics <em>requires</em> this mapping is not established.
          There is also no protocol for independently measuring N<sub>corr</sub> in any system &mdash; every
          published value is asserted or back-fit from &#x03B3; (see the{' '}
          <Link href="/scale-navigator" style={{ color: 'var(--color-accent-blue)' }}>scale navigator&apos;s</Link>{' '}
          epistemic banner).
        </p>

        <h2>The Three Regimes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8' }}>&#x03B3; &gt; 1.5 &mdash; Low N<sub>corr</sub> (&#x03B3;-sharp)</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Few correlated particles (N<sub>corr</sub> &lt; 2). Individual electrons, photons,
              isolated quantum systems. Superposition, interference, entanglement dominate.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Example: Single electron (N<sub>corr</sub> = 1, &#x03B3; = 2)
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>&#x03B3; &#x2248; 1 &mdash; The Boundary</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              N<sub>corr</sub> &#x2248; 4. This is where phase transitions happen, where chemistry
              gets interesting, where molecules become biology. 1,703 chemical phenomena cluster here.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Example: Small molecule cluster, catalytic site, neural synapse
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e' }}>&#x03B3; &lt; 0.5 &mdash; High N<sub>corr</sub> (&#x03B3;-flat)</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Many correlated particles (N<sub>corr</sub> &gt; 16). Crystals, macroscopic objects,
              galaxies. Classical mechanics, thermodynamics, general relativity.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Example: Crystal lattice (N<sub>corr</sub> = 10<sup>24</sup>, &#x03B3; &#x2248; 10<sup>&minus;12</sup>)
            </p>
          </div>
        </div>

        <h2>Structural Interpretation: MRH Coupling Density</h2>
        <p>
          Beyond the formula, &#x03B3; has a structural meaning: it encodes how efficiently compatible
          presence within an{' '}
          <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH</Link>{' '}
          converts into coherent state transitions.
        </p>
        <p>
          Conceptually: &#x03B3; &#x221D; &#x03BB; &middot; K<sub>MRH</sub> / D<sub>MRH</sub>, where
          &#x03BB; = interaction strength, K = connectivity (interaction density between elements),
          and D = dimensionality (effective degrees of freedom).
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: '#38bdf8' }}>Quantum scale</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              Few DOF, strong coupling &rarr; high &#x03B3;
            </span>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: 'var(--color-accent-violet)' }}>Chemical systems</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              Moderate dimensionality, variable coupling &rarr; medium &#x03B3;
            </span>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: '#22c55e' }}>Biological systems</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              High dimensionality, structured coupling &rarr; moderate-to-low effective &#x03B3;
            </span>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong style={{ color: 'var(--color-text-muted)' }}>Cosmological scale</strong>
            <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.75rem' }}>
              Enormous dimensionality, weak coupling (gravity) &rarr; low &#x03B3;
            </span>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          This naturally explains why emergence thresholds differ across scales. High connectivity
          or strong interaction strength raises &#x03B3;; dimensional redundancy dilutes it.
          If an MRH expands to include more weakly-coupled DOF, &#x03B3; decreases. If it contracts
          to a tightly interacting subset, &#x03B3; increases.
        </p>

        <h2>Unification Claim &mdash; and Its Status at the Only Tested Rung</h2>
        <p>
          Early research used &#x03B3; = 2.0 for astrophysics (where stars are uncorrelated classical
          particles, N<sub>corr</sub> = 1) and varying &#x03B3; for chemistry (where quantum
          correlations exist). The unification (January 2026) proposed these are the <strong>same formula</strong>:
          &#x03B3; = 2/&#x221A;N<sub>corr</sub> always.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The galaxy rung &mdash; the only one tested quantitatively &mdash; refutes the premise from both
          directions: pinning &#x03B3; = 2 (from N<sub>corr</sub> = 1) is rejected on the SPARC RAR at
          &#x0394;BIC = +184 (conservative &ge;+33 after intra-galaxy correlation), and the data-preferred &#x03B3; &#x2248; 0.49 back-implies
          N<sub>corr</sub> &#x2248; 17, contradicting the independent-stars premise that licensed
          N<sub>corr</sub> = 1 in the first place. On the chemistry rung, N<sub>corr</sub> is read backward
          from &#x03B3;. Across all 17 scales, the formula has never <em>predicted</em> an
          N<sub>corr</sub> &mdash; it absorbs one.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          See: <Link href="/gamma-boundary" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; &#x2248; 1 boundary</Link> for
          the chemistry evidence, <Link href="/scale-invariance" style={{ color: 'var(--color-accent-blue)' }}>Scale Invariance</Link> for
          the 80-order-of-magnitude span.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/critical-density" className="btn-primary">
            Next: Critical Density &rarr;
          </Link>
          <Link href="/gamma-calculator" className="btn-secondary">
            Try It: &#x03B3; Calculator
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/gamma-parameter" />
    </>
  );
}
