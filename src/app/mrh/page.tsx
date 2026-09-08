'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function MRH() {
  return (
    <>
      <Breadcrumbs currentPath="/mrh" />
      <PathNav currentPath="/mrh" />
      <h1>MRH: Markov Relevancy Horizon</h1>
      <ValidationBadge status="speculative" label="Theoretical Framework" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The Markov Relevancy Horizon (MRH) is a term proposed by Dennis Palatov, inspired
          by <strong>Markov blankets</strong> &mdash; a concept from probabilistic graphical models
          where a node&apos;s Markov blanket is the minimal set of other nodes that makes it
          conditionally independent of everything else. The blanket is the boundary: everything
          inside it is relevant to the node, everything outside is statistically screened off.
        </p>
        <p>
          MRH extends this idea from a static graph property to a dynamical, scale-dependent
          boundary. Where a Markov blanket asks &ldquo;what nodes shield this node?&rdquo;, the MRH
          asks &ldquo;at what horizon do correlations between systems decay below the noise
          floor?&rdquo; &mdash; making the boundary itself a function of scale, density, and context.
        </p>

        <p style={{
          fontSize: '1.05rem',
          background: 'rgba(139,92,246,0.07)',
          border: '1px solid rgba(139,92,246,0.3)',
          borderRadius: '0.375rem',
          padding: '0.9rem 1.1rem',
          margin: '1.5rem 0 0.75rem',
        }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>In one line:</strong>{' '}
          the MRH is <strong>the bubble of neighbors that matter</strong>. A single atom does not
          &ldquo;feel&rdquo; the Andromeda galaxy &mdash; it responds to what is immediately around it, and
          the MRH is the name for how far &ldquo;immediately around it&rdquo; reaches. Everything past that
          edge is supposed to be irrelevant to how the system evolves.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '0 0 0.5rem' }}>
          The formal version says the same thing with the load-bearing words made explicit
          (<em>degrees of freedom</em> = the independent numbers you would need to write down to specify
          the system&apos;s state):
        </p>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '0.5rem 0 1.5rem',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          The minimal set of interacting degrees of freedom whose state transitions materially
          influence the coherence evolution of a defined system.
        </blockquote>

        <h2>Operational Criteria</h2>
        <p>
          An MRH is not just a vague boundary &mdash; it must satisfy two testable conditions:
        </p>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Predictive Sufficiency</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Removing any element inside the MRH degrades coherence prediction.
              Everything inside is load-bearing.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Predictive Closure</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Adding elements outside the MRH does not materially improve prediction.
              Everything outside is irrelevant. If it does improve prediction, the MRH was incorrectly specified.
            </p>
          </div>
        </div>

        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.35)',
          borderRadius: '0.375rem',
          padding: '1rem 1.15rem',
          margin: '1.5rem 0',
          fontSize: '0.9rem',
          color: 'var(--color-text-secondary)',
        }}>
          <h3 style={{ margin: '0 0 0.6rem', color: '#ef4444', fontSize: '1.05rem' }}>
            Does the framework respect its own horizon? Not in the galaxy sector.
          </h3>
          <p style={{ margin: '0 0 0.6rem' }}>
            <strong>Added 2026-09-07</strong>, raised by a visitor researcher persona. This is a{' '}
            <strong>data-free</strong> self-consistency failure: it needs no SPARC fit, no BTFR slope
            and no &Delta;BIC, and it would stand even if every empirical test on the{' '}
            <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>{' '}
            ledger had passed.
          </p>
          <p style={{ margin: '0 0 0.6rem' }}>
            The galaxy sector advertises C as a function of <em>local</em> density &mdash; that is the whole
            reason it is claimed to be MRH-respecting, and the reason the{' '}
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>local-density no-go</Link>{' '}
            bites. But look at what the mechanism actually evaluates. Two of its three inputs are imported
            from outside any local neighborhood:
          </p>
          <ul style={{ paddingLeft: '1.2rem', margin: '0 0 0.6rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>
              <strong>&#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2;.</strong> V<sub>flat</sub> is the
              asymptotic rotation speed &mdash; defined in the r &rarr; &infin; limit, and by the BTFR fixed by
              the galaxy&apos;s <em>total</em> baryonic mass. So C at radius r is not C(&#x03C1;(r)); it is
              C(&#x03C1;(r), M<sub>total</sub>). A threshold on a local field has been keyed to a global label,
              which is exactly what <em>Predictive Closure</em> above forbids.
            </li>
            <li>
              <strong>B<sub>max</sub> = 1/&#x03A9;<sub>m</sub> = 3.17.</strong> The per-galaxy boost ceiling
              is set by a <em>cosmological</em> parameter. A galaxy&apos;s relevancy horizon does not contain
              &#x03A9;<sub>m</sub>. (Flagged independently by a visitor graduate-physics persona the same day.)
              Note this objection is stronger than the empirical one it accompanies, because it does not
              depend on the value: TEST-10 needs B &#x2265; 13.7 and no cosmic ratio supplies it, but even a
              ratio that <em>did</em> supply it would still be an import.
            </li>
          </ul>
          <p style={{ margin: '0 0 0.6rem' }}>
            <strong>The mechanical consequence.</strong> In the small-x regime SPARC actually samples
            (median x &#x2248; 7&times;10<sup>&minus;5</sup>), C &#x2248; &#x03B3;&thinsp;x = &#x03B3;&#x03C1;/(A&thinsp;V<sub>flat</sub>&sup2;)
            &mdash; &#x03B3; and A enter only as the ratio &#x03B3;/A. That is <em>one</em> free number per galaxy,
            not two, which is what the Fisher correlation &#x03C1;(ln&#x03B3;, lnA) = +1.000000 on{' '}
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>{' '}
            is reporting. The unidentifiability artifact and this locality violation are the same defect seen
            from two directions: the model is fit per-galaxy against a global label, so the local parameters
            never get separately measured.
          </p>
          <p style={{ margin: 0 }}>
            <strong>The shape of the whole problem.</strong> The galaxy sector needs one non-local variable it
            does not have (g<sub>bar</sub>, the enclosed-mass acceleration the RAR is organized by &mdash; that
            is the local-density no-go), and it silently uses two non-local variables it should not have
            (V<sub>flat</sub>, &#x03A9;<sub>m</sub>). It is <em>non-local by construction in the sector where it
            claims locality</em>, and non-local in the wrong variables. This is registered here rather than
            hidden because it is cheap, structural, and cuts against the framework.
          </p>
          <p style={{ margin: '0.6rem 0 0', fontSize: '0.88rem' }}>
            <strong>A fourth, quantitative instance &mdash; and a correction to yesterday&apos;s framing (explorer
            2026-09-07, added 2026-09-08).</strong> For a globular cluster, ρ<sub>crit</sub> = A·V² has no obvious V:
            read with the host galaxy&apos;s 220 km/s the knee sits at ~1 pc (the whole cluster saturated at the
            floor); read with the cluster&apos;s own dispersion it sits at ~2.5 half-mass radii; the measured
            velocity-blind knee puts it at 6–8. That is a factor 10⁴ in ρ<sub>crit</sub> and the whole verdict, decided
            by which non-local label you import. Yesterday this page&apos;s topic file called the cluster prediction
            &ldquo;unformulable.&rdquo; It is not &mdash; it is formulable under every placement, and{' '}
            <strong>under-determined</strong>, which is worse in a specific way: the internal-locality violation does
            not make the prediction undefined, it makes it depend on a choice the framework never states. The
            executed result is on the{' '}
            <Link href="/honest-assessment#gc-fork" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.
          </p>
        </div>

        <h2>MRH and Presence</h2>
        <p>
          Presence (&#x03C1;) &mdash; the compatible structural elements that drive coherence &mdash; is
          defined <em>relative to</em> an MRH. Change the MRH boundary, and presence changes.
          This means coherence is always context-dependent: what counts as &ldquo;present&rdquo;
          depends on which system you&apos;re examining and at what scale.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          See: <Link href="/coherence-function" style={{ color: 'var(--color-accent-blue)' }}>Coherence Function</Link> for
          how presence feeds into C(&#x03C1;).
        </p>

        <h2>How It Works</h2>
        <p>
          Every system maintains correlations with nearby systems. As distance (spatial or temporal)
          increases, these correlations weaken. The MRH is where they become negligible.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Inside the MRH</strong>: Systems are correlated, can influence each other, quantum effects persist</li>
          <li><strong>At the MRH</strong>: Correlations = noise. This IS the boundary.</li>
          <li><strong>Beyond the MRH</strong>: Systems are effectively independent, classical behavior dominates</li>
        </ul>

        <h2>MRH and Quantum Measurement</h2>
        <p>
          This is Synchronism&apos;s most provocative claim about quantum mechanics:
        </p>
        <div className="card card-highlight" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>Wave function &ldquo;collapse&rdquo; = crossing the MRH.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            When a quantum system interacts with a macroscopic apparatus, the correlations
            between the system and its environment rapidly exceed the MRH. What we call
            &ldquo;measurement&rdquo; is this boundary crossing. No observer needed. No consciousness
            required. Just decoherence at the relevancy horizon.
          </p>
          <ValidationBadge status="untested" label="6 Testable Protocols" />
        </div>
        <p>
          <Link href="/measurement-without-observers" style={{ color: 'var(--color-accent-blue)' }}>
            Full treatment: Measurement Without Observers &rarr;
          </Link>
        </p>

        <h2>MRH at Cosmic Scales</h2>
        <p>
          The same concept applies to cosmology. Cosmic horizons (particle horizon, event horizon)
          can be reinterpreted as MRH boundaries at cosmological scales. Beyond the MRH, correlations
          from the early universe have decayed. What we call the &ldquo;observable universe&rdquo; is
          the region within our MRH.
        </p>
        <p>
          <Link href="/cosmic-horizons" style={{ color: 'var(--color-accent-blue)' }}>
            Cosmic Horizons as MRH Phenomena &rarr;
          </Link>
        </p>

        <h2>MRH in Statistical Mechanics</h2>
        <p>
          In statistical mechanics, the correlation length &#x03BE; measures how far correlations
          extend. At a phase transition, &#x03BE; diverges. The MRH is the dynamical version of
          this: where correlations become irrelevant not just in space but in the full phase space
          of the system.
        </p>

        <h2>Open Gap: Formal Mathematical Definition</h2>
        <div style={{
          border: '2px solid rgba(239, 68, 68, 0.4)',
          background: 'rgba(239, 68, 68, 0.05)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
            The name <strong>Markov</strong> Relevancy Horizon promises a specific mathematical structure:
            a conditional independence statement. In standard graphical models, a Markov boundary for
            node <em>X</em> satisfies:
          </p>
          <div style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)', fontSize: '0.95rem', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.08)', borderRadius: '4px', marginBottom: '0.75rem' }}>
            P(X<sub>future</sub> | X<sub>MRH</sub>, X<sub>external</sub>) = P(X<sub>future</sub> | X<sub>MRH</sub>)
          </div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            The current MRH framework specifies <em>operational criteria</em> (predictive sufficiency,
            predictive closure) but not a probability distribution, integration measure, graphical model,
            or explicit mapping from coherence dynamics to the conditional-independence condition.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0' }}>
            <strong>Two paths forward:</strong> (1) Provide the integration measure that defines
            &ldquo;inside MRH&rdquo; vs. &ldquo;outside MRH&rdquo; and write the explicit
            conditional-independence statement with a probability distribution. (2) Or rename to
            <em>Relevance Horizon</em> &mdash; acknowledging the intuition is Markov-motivated but
            the formalism is not yet Markov. The &ldquo;Markov&rdquo; label sets an expectation
            that is not currently met.
          </p>
        </div>

        <h2>What&apos;s Untested</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The MRH as a replacement for &ldquo;wave function collapse&rdquo; is the central untested
          prediction. Six experimental protocols have been designed (Sessions #368-370) but none
          have been run. The theory predicts specific decoherence patterns at the MRH boundary
          that should be measurable.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/measurement-without-observers" className="btn-primary">
            Next: Measurement Without Observers &rarr;
          </Link>
          <Link href="/quantum-predictions" className="btn-secondary">
            See the 6 Protocols
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/mrh" />
    </>
  );
}
