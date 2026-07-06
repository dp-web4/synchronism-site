'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function TwoReframes() {
  return (
    <>
      <Breadcrumbs currentPath="/two-reframes" />
      <h1>Two Reframes</h1>
      <ValidationBadge status="speculative" label="Conceptual Framework" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem', borderLeft: '2px solid rgba(148,163,184,0.3)', paddingLeft: '0.75rem' }}>
          <strong>Terminology note:</strong> this page uses <em>phase relationship</em>, <em>phase alignment</em>,
          and <em>pattern synchronization</em> for what the rest of the site calls &ldquo;coherence.&rdquo;
          These are the same quantity — the CRT framing emphasizes the oscillatory picture.
          See the <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>Glossary</Link> for the canonical definition.
        </div>
        <p>
          Synchronism proposes a shift analogous to heliocentrism. Anthropocentric physics places
          the observer at the center &mdash; measurement &ldquo;collapses&rdquo; quantum states,
          simultaneity is observer-dependent, consciousness is privileged. Like epicycles, the math
          works, but the framing creates mysteries that may not exist.
        </p>
        <p>
          Two analogies make this concrete. One addresses quantum mechanics. The other addresses relativity.
          Together they capture the core of how Synchronism sees physics differently.
        </p>

        {/* ===================== CRT ANALOGY ===================== */}
        <h2 style={{ marginTop: '2.5rem' }}>The CRT Analogy: Quantum Mechanics as Synchronization</h2>

        <p>
          A cathode ray tube (CRT) display works by an electron beam rapidly scanning across a phosphor
          screen. At human frame rates (~30 Hz), you see a stable picture. Speed up your observation and
          the picture flickers, breaks into bands. Observe at pixel-duration timing and you see a single
          moving dot at unpredictable locations.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
        }}>
          Nothing about the screen changed. Only your synchronization timing with the ongoing process changed.
        </blockquote>

        <h3>The Mapping</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
            <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
              Sampling Rate
            </div>
            <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
              What You See (CRT)
            </div>
            <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-accent-violet)' }}>
              QM Analog
            </div>
          </div>
          {[
            ['Slower than refresh', 'Stable image \u2014 beam appears "everywhere at once"', 'Superposition'],
            ['Near refresh rate', 'Flicker, bands, destabilization', 'Measurement disturbance'],
            ['At pixel rate', 'Single dot appears \u2014 image "collapses"', 'Wave function collapse'],
            ['Synchronized to dot', 'Reproducible location, but can\'t predict which', 'Uncertainty + reproducibility'],
          ].map(([rate, crt, qm], i) => (
            <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', padding: '0.75rem', margin: 0 }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{rate}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{crt}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-accent-violet)', fontWeight: 500 }}>{qm}</div>
            </div>
          ))}
        </div>

        <p>
          The claim is not metaphorical. In Synchronism, superposition IS temporal scanning &mdash; a
          system cycling through states so fast that any observation slower than the cycle rate sees all
          states &ldquo;at once.&rdquo; What we call measurement is sampling. What we call collapse is
          catching the dot.
        </p>

        <h3>Wave-Particle Duality</h3>
        <p>
          Long exposure of the CRT shows a wave-like distribution across the screen. Short exposure shows
          a particle-like single dot. Same screen, same beam, same process. The duality is in the
          observation, not the object.
        </p>

        <h3>The Uncertainty Principle via CRT</h3>
        <p>
          To see the full image (position distribution), sample slowly. To track the dot&apos;s motion
          (momentum), sample fast. You cannot do both with a single sampling rate. The tradeoff is
          structural, not mysterious.
        </p>

        <h3>Entanglement: Phase Alignment in a Common Substrate</h3>
        <p>
          The CRT analogy extends naturally to entanglement. Imagine two CRT screens driven by the same
          signal source. No matter how far apart you place them, they display identical behavior &mdash; not
          because information travels between them, but because both are phase-aligned oscillations in a
          common medium.
        </p>
        <p>
          This is the key: if pattern A is in phase with substrate S, and pattern B is in phase with
          substrate S, then A is in phase with B &mdash; because S is common to both. The correlation is not
          carried by the particles as hidden instructions. It is continuously maintained by the substrate itself.
          Distance is irrelevant as long as both oscillations maintain their phase relationship with the
          underlying field.
        </p>

        <h4>This Pays Bell&apos;s Theorem &mdash; It Does Not Avoid It</h4>
        <p>
          Bell&apos;s theorem (1964) is a <strong>dichotomy</strong>, not a single constraint: any model
          reproducing the quantum correlations must be nonlocal, superdeterministic, or retrocausal.
          Declaring the substrate &ldquo;nonlocal by construction&rdquo; does not <em>evade</em> Bell &mdash;
          it <em>chooses the nonlocal horn</em>, the same horn Bohmian mechanics sits on. That is a legitimate
          position, but it is not a free one, and an earlier version of this page implied it was.
        </p>
        <p>
          The substrate model is structurally different from a local hidden-variable (LHV) theory. The
          particles do not carry anything. They are oscillations <em>in</em> the intent field, and the field
          maintains the phase relationship. The substrate is everywhere &mdash; nonlocal by construction. There
          are no separate things coordinating; there is one pattern spanning both locations, like a vibrating
          string with two ends. In the singlet state, the pattern phase at location A is &phi;<sub>0</sub> and
          at B is &phi;<sub>0</sub>&nbsp;+&nbsp;&pi; &mdash; not a correlation between separate things, but the
          structure of the pattern itself. That gets the substrate off the <em>local</em>-hidden-variable hook.
          It does not, by itself, explain why nature stops at the <strong>Tsirelson bound</strong>
          (|S|&nbsp;=&nbsp;2&radic;2&nbsp;&asymp;&nbsp;2.83) rather than the algebraic maximum of 4 that generic
          no-signaling nonlocal (PR-box) correlations allow. A substrate reframe of QM owes an account of
          <em> why 2&radic;2 and not 4</em> &mdash; and the honest state below is that the framework does not
          yet have one.
        </p>

        <h4>Measurement as Resonant Interaction</h4>
        <p>
          Measurement is not passive readout of a pre-existing value. The detector couples to the field
          pattern. The combined system (field + detector) settles into a stable resonant configuration.
          What we record as &ldquo;spin up&rdquo; or &ldquo;spin down&rdquo; is which resonant well the
          system fell into. Setting the detector to angle &theta; establishes a phase offset in this coupling.
        </p>
        <p>
          Both detectors probe the <em>same</em> pattern. Measuring at A constrains &phi;<sub>0</sub>;
          B&apos;s outcome follows from the same constraint. The correlations are geometric &mdash;
          phase relationships in a single oscillatory structure &mdash; not hidden instructions carried
          by particles, not faster-than-light communication.
        </p>

        <h4>The Test Was Run &mdash; and the Substrate Model Failed It (So Far)</h4>
        <p>
          &ldquo;One pattern probed at two locations&rdquo; is the right intuition to test, so it was tested:
          the observer-relative CHSH experiment (<a href="https://github.com/dp-web4/Synchronism/tree/main/simulations/kuramoto-lattice-suite" target="_blank" rel="noopener noreferrer">kuramoto-lattice-suite</a>,
          research-ledger bet <strong>B1</strong>), run 2026-06-21. Two constructions were built and both
          were measured <em>only</em> through observer-pattern phase-lock, with freely chosen CHSH settings:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Local construction</strong> (a shared preparation, no coupling between regions during
            measurement): S&nbsp;=&nbsp;1.98 &mdash; at the classical bound, as a local-realist model must be.</li>
          <li><strong>Nonlocal-grid construction</strong> (the shared substrate lets region B&apos;s state mix
            into region A&apos;s measurement, tunable coupling g): S&nbsp;&equiv;&nbsp;2.00 for <em>every</em>
            coupling strength tried, still with zero signaling. The reason is itself the finding: a uniform
            shared phase only adds a constant offset to one side&apos;s readout axis, which is
            <em> gauge-equivalent to relabeling the measurement angles</em> &mdash; smooth single-grid mediation
            stays local-realist and buys nothing.</li>
          <li>A third variant let the shared variable back-react on both probes (the &ldquo;global clock&rdquo;
            construction) and reached S&nbsp;up&nbsp;to&nbsp;2.67 &mdash; but only by also introducing
            signaling. No construction has reached the Tsirelson bound (2.83) <em>without</em> signaling.</li>
        </ul>
        <p>
          <strong>Verdict (PREDICTIONS.md, bet B1): refuted, both no-signaling arms.</strong> As currently
          constructed, the single-observer substrate reproduces only classical (S&nbsp;&le;&nbsp;2) correlations
          &mdash; it does not yet reproduce the quantum correlation E(a,b)&nbsp;=&nbsp;&minus;cos(a&minus;b) that
          gives Tsirelson&apos;s bound. This is the same point made structurally above: getting off the
          local-hidden-variable hook (nonlocal by construction) is not the same as deriving <em>why</em> quantum
          correlations saturate at 2&radic;2. The gap is now precisely named &mdash; a genuine no-signaling
          violation needs a <em>non-relabelable, conditional</em> setting-dependence, a primitive this ontology
          does not currently contain and would have to derive, not assume.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <strong>Open problem:</strong> Deriving E(a,b)&nbsp;=&nbsp;&minus;cos(a&minus;b) rigorously from the
          substrate phase geometry requires the measurement probabilities to follow the Born rule. But
          the Born rule derivation itself is acknowledged as possibly circular (see{' '}
          <a href="/born-rule">Born Rule</a>). Breaking this circle &mdash; deriving measurement
          probabilities from substrate dynamics without assuming them &mdash; is the actual hard problem, and
          the B1 result above is the concrete evidence that it is unsolved, not just unformalized.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Background: Research Sessions #228&ndash;231. An earlier version of this page claimed
          |S|&nbsp;&asymp;&nbsp;2.39 &mdash; this was a calculation error caught by the{' '}
          <a href="https://github.com/dp-web4/synchronism-site/tree/main/explorer/findings">
            explorer feedback loop
          </a>.
          See also: <em>Clarification: Bell Violations, Measurement, and Resonance</em> in the research archive.
        </p>

        <h3>The Deeper Implication: Simultaneity Is Constructed</h3>
        <p>
          The CRT goes further than explaining measurement. It makes a claim about how spatial configurations
          exist at all.
        </p>
        <p>
          A CRT phosphor grid updates sequentially &mdash; one cell per scan pass. The &ldquo;image&rdquo; as
          a simultaneous spatial configuration is never actually present anywhere. It is real, but real as a
          temporal average over the observer&apos;s integration window (human persistence of vision: ~40ms).
        </p>
        <div className="card" style={{ margin: '1rem 0', padding: '0.75rem 1rem' }}>
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
            <strong>Precision:</strong> The Planck grid itself updates in <em>parallel</em> &mdash; all cells
            evaluate their neighbors&apos; Intent simultaneously and step forward together. The CRT&apos;s sequential
            scan is the analogy for how observers <em>sample</em> this parallel process through their integration
            window. The conclusion is the same either way: simultaneity is constructed by the observer, not given by the substrate.
          </p>
        </div>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
        }}>
          The present moment as simultaneous spatial configuration is not a fact of the grid. It is a
          construction of the observer&apos;s temporal integration window.
        </blockquote>
        <p>
          In Synchronism, the same structure applies to the universe. The Planck grid ticks &mdash; all cells
          in parallel, the whole universe stepping forward at once. State propagates causally, at most one
          Planck length per Planck tick &mdash; the speed of light as tick-propagation limit. What any observer
          perceives as &ldquo;the universe right now&rdquo; is a
          construction of their Markov Relevancy Horizon (MRH) in time.
        </p>
        <p>
          This has a specific consequence for special relativity: the Lorentz transformation is the exact
          mathematical description of how tick-averaged spatial configurations transform between observers
          with different velocities &mdash; different temporal integration windows over the same underlying
          tick sequence. Length contraction and time dilation are not mysterious forces; they are the geometry
          of how different integration windows reconstruct the same ticks differently.
        </p>
        <p>
          The &ldquo;single observer model&rdquo; in Synchronism follows from this: there is one tick
          sequence. All phenomenal observers (humans, animals, AI systems) are regions within the grid that
          integrate partial projections of this sequence through their MRH. The single observer is not a
          reference frame &mdash; it is the tick process itself.
        </p>

        <div className="card" style={{ margin: '1.5rem 0', borderLeft: '3px solid #38bdf8' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', margin: 0 }}>
            &ldquo;The electron doesn&apos;t exist everywhere at once &mdash; it visits each location in turn,
            so fast we see them all. Perhaps the qubit does the same.&rdquo;
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: 0 }}>
            &mdash; Session #228, Quantum Computing Through the CRT Analogy
          </p>
        </div>

        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            <strong style={{ color: '#f59e0b' }}>Honest caveat:</strong> The CRT temporal-scanning model
            is not yet mathematically formalized to the level where it reproduces all of standard QM&apos;s
            quantitative predictions. The analogy is compelling; the formalization is incomplete.
            The mapping table above is conceptual, not derived. &ldquo;Incomplete&rdquo; is not a small
            residual: at face value, a fast deterministic cycle through definite states is a
            <strong> non-contextual hidden-variable model</strong>, which collides directly with
            Kochen&ndash;Specker contextuality and the PBR theorem unless the scanning is made contextual
            &mdash; unsolved, same open problem as the B1 CHSH gap above, not a separate footnote.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', marginBottom: 0, fontSize: '0.85rem' }}>
            <strong>One quantitative foothold:</strong> the decoherence decay rate Γ = γ²(1−c), where c(d) = cos²(πd/λ₀), is the Palma–Suominen–Ekert 1996 correlated-dephasing variance (spin-boson / collective-dephasing physics, <em>Proc. R. Soc. A</em> 452, 567–584). This equation and its attribution appear on the{' '}
            <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims page</Link>{' '}
            — not here — because the CRT framing is analogy-only and does not yet connect to this result quantitatively.
            A physicist arriving at this page sees only metaphors; the PSE-1996 connection is one level deeper.
          </p>
        </div>

        {/* ===================== PENDULUM CLOCK ===================== */}
        <h2 style={{ marginTop: '3rem' }}>The Pendulum Clock Analogy: Relativity as Instrument Effects</h2>

        <p>
          Relativistic time dilation was confirmed by flying atomic clocks on airplanes in opposite
          directions. They diverged by the predicted amount, confirming Einstein&apos;s theory.
        </p>
        <p>
          Now try this: put a pendulum clock in a centrifuge and run it. Compare it to a stationary
          pendulum clock. They will diverge by a readily predictable amount based on centrifugal force
          affecting the pendulum&apos;s swing period.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
        }}>
          Would that prove &ldquo;centrifuge time dilation&rdquo;?
        </blockquote>

        <p>
          Of course not. It would prove that the variable we&apos;re controlling (centrifugal force) has a
          predictable effect on the instrument we&apos;re using to measure &ldquo;passage of time.&rdquo;
        </p>
        <p>
          If we were forced to rely exclusively on pendulum clocks in centrifuges, accounting for
          &ldquo;centrifuge time dilation&rdquo; would be essential for accurate timekeeping. We&apos;d
          build elaborate mathematical frameworks to predict and correct for it. We might even call it
          fundamental to reality.
        </p>
        <p style={{ fontWeight: 500 }}>
          But it&apos;s just an instrument effect.
        </p>

        <h3>The Question Synchronism Asks</h3>
        <p>
          Anthropocentric physics assumes atomic clocks measure &ldquo;time itself.&rdquo; Synchronism
          suggests they measure pattern synchronization &mdash; and like pendulum clocks affected by
          centrifugal force, atomic clocks are affected by velocity and gravity because these alter the
          fundamental pattern dynamics they synchronize with.
        </p>

        <div className="card" style={{ margin: '1.5rem 0' }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.95rem' }}>
            The measurements are real. The predictions work. But what&apos;s being measured might not be
            what we think.
          </p>
        </div>

        <h3>Why All Clocks Agree</h3>
        <p>
          All measurement devices &mdash; atomic, mechanical, biological &mdash; show the same dilation.
          Standard physics says this proves time itself dilates. Synchronism offers an alternative: all
          clocks agree because all are patterns in the same substrate, and all face the same coherence
          maintenance overhead at velocity. What changes is not &ldquo;time&rdquo; as an abstract
          dimension, but the rate at which patterns can evolve within the substrate&apos;s constraints.
        </p>

        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            <strong style={{ color: '#f59e0b' }}>Honest caveat:</strong> This reframes existing predictions,
            it does not generate new ones. GR&apos;s time dilation predictions are unchanged. The question is
            interpretive: does time dilate, or does the rate of pattern evolution change? Both produce
            identical measurements &mdash; <strong>as a continuum theory, this is not distinguishable</strong>,
            and that much is now resolved rather than open: the framework&apos;s own inflow-gravity model
            advects every pattern by one universal rate (equivalent to
            d&#x03C4;/dt&nbsp;=&nbsp;&radic;(1&minus;2GM/r) for <em>any</em> mechanism), which <em>is</em> the
            equivalence principle &mdash; so it predicts clock universality, the opposite of the
            mechanism-dependence a real instrument-effect claim would need to show. This reframe is not free:
            it is the same absolute-time interpretation that produces the
            16&ndash;28 order-of-magnitude Lorentz-violation naturalness gap documented on{' '}
            <Link href="/honest-assessment#structural-tensions" style={{ color: 'var(--color-accent-blue)' }}>
              Honest Assessment
            </Link>. The only place mechanism-dependence could still show up is relocated, not open: a
            discrete substrate sampled slightly differently by different patterns, at the LIV order &mdash;
            which is exactly the channel under the heaviest observational pressure. Absolute time is
            simultaneously this framework&apos;s only source of potential novelty and its sharpest refutation
            exposure &mdash; the same commitment, priced on a different page.
          </p>
        </div>

        {/* ===================== WHAT THEY SHARE ===================== */}
        <h2 style={{ marginTop: '3rem' }}>What These Reframes Share</h2>

        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>CRT</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Quantum mysteries dissolve when you realize the pattern continues unchanged &mdash;
              what changes is your synchronization with it.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: '#22c55e' }}>Pendulum Clock</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Relativistic mysteries dissolve when you consider that all clocks are instruments
              affected by the same substrate dynamics.
            </p>
          </div>
        </div>

        <p>
          Both shift from &ldquo;reality is weird&rdquo; to &ldquo;our measurement relationship to
          reality creates the appearance of weirdness.&rdquo; The pattern continues unchanged. What
          changes is our synchronization with it.
        </p>
        <p>
          This is the Copernican move. Not refining epicycles, but removing the need for them by
          decentering the observer.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/measurement-without-observers" className="btn-primary">
            Next: Measurement Without Observers &rarr;
          </Link>
          <Link href="/observer-problem" className="btn-secondary">
            The Observer Problem
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/two-reframes" />
    </>
  );
}
