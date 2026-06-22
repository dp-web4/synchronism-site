import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Fundamentals() {
  return (
    <>
      <Breadcrumbs currentPath="/fundamentals" />

      <h1>Fundamentals</h1>
      <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
        The four foundations. Everything else flows from these.
      </p>

      <section className="section content-width">

        <div className="card" style={{ borderLeft: '4px solid var(--color-accent-violet)', marginBottom: '1.5rem' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', margin: 0 }}>
            This page extracts from the whitepaper. It does not interpret or extend.
            If autonomous research contradicts these definitions, the research drifted &mdash; not the fundamentals.
          </p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--color-accent-blue)', marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
            The four foundations below cash out one move: Synchronism is a{' '}
            <strong>single-observer, CFD-like model</strong> &mdash; observers are recurring patterns
            <em> inside</em> the substrate, not a privileged frame outside it. As physics, the prediction
            ledger reads zero confirmed novel results &mdash; but the honest reason is{' '}
            <strong>lack of instruments, not refutation</strong> (every test is borrowed data aimed elsewhere).
            <em> Untested is not refuted; this is an invitation.</em>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            On a separate axis, the same foundations are already load-bearing in running code &mdash;{' '}
            <Link href="/where-its-useful" style={{ color: 'var(--color-accent-blue)' }}>where Synchronism is already useful &rarr;</Link>
          </p>
        </div>

        <h2>Foundation 1: Discrete CFD Substrate</h2>

        <p>
          The universe is a discrete-time computational fluid dynamics simulation where Intent flows.
          Not metaphor. Not analogy. This IS the model.
        </p>

        <ul>
          <li><strong>Discrete time</strong>: Planck time (5.39 &times; 10<sup>&minus;44</sup> s) is the tick rate</li>
          <li><strong>Discrete space</strong>: Planck length (1.62 &times; 10<sup>&minus;35</sup> m) is the grid resolution</li>
          <li><strong>What flows</strong>: Intent (reified &ldquo;greater force&rdquo;), not particles or fields</li>
          <li><strong>Update rule</strong>: all cells simultaneously evaluate neighbor tensions and step forward together &mdash; massively parallel, not sequential</li>
          <li><strong>No &ldquo;background&rdquo;</strong>: Intent field IS spacetime, not &ldquo;in&rdquo; spacetime</li>
        </ul>

        <div className="card" style={{ marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Parallel update consequence</strong>: No preferred spatial direction is introduced by the update rule.
            The CRT analogy describes how observers <em>sample</em> a fast-cycling process &mdash; not how the substrate updates.
            Entanglement is a global tension pattern resolved simultaneously everywhere, not a signal transmitted between locations.
          </p>
        </div>

        <h2 style={{ marginTop: '2.5rem' }}>Foundation 2: Intent Is Reification, Not Ontology</h2>

        <p>
          Intent is a <strong>computational abstraction</strong> that makes an underlying &ldquo;greater force&rdquo;
          computable within the model.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
          <div className="card">
            <h3 style={{ color: '#ef4444', fontSize: '1rem', marginBottom: '0.5rem' }}>Intent is NOT</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>A fundamental force</li>
              <li>Ontologically real</li>
              <li>A claim about what reality &ldquo;is&rdquo;</li>
              <li>Anthropocentric or philosophical &ldquo;intent&rdquo;</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: '#22c55e', fontSize: '1rem', marginBottom: '0.5rem' }}>Intent IS</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>A variable we can quantify</li>
              <li>A framework enabling predictions</li>
              <li>A useful fiction for computation</li>
              <li>Like &pi; in mathematics &mdash; an abstraction</li>
            </ul>
          </div>
        </div>

        <p style={{ marginTop: '1rem' }}>
          The &ldquo;greater force&rdquo; that governs pattern transitions may be too complex to model directly,
          unknowable from our perspective, or incomputable without abstraction. Intent reifies this into something
          tractable. Demanding SI units for Intent is like demanding SI units for &pi; &mdash; a category error.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>Foundation 3: Saturation as Foundational Mechanism</h2>

        <p>
          Without saturation, Intent dissipates down gradients. No patterns form. No entities exist.
          The universe is uniform noise.
        </p>

        <div className="equation" style={{ fontSize: '1.3rem', margin: '1rem 0' }}>
          R(I) = [1 &minus; (I/I<sub>max</sub>)<sup>n</sup>]
        </div>

        <ul>
          <li>R(I) &asymp; 1 when I &laquo; I<sub>max</sub> (minimal resistance, free transfer)</li>
          <li>R(I) &rarr; 0 as I &rarr; I<sub>max</sub> (extreme resistance, transfer blocked)</li>
        </ul>

        <p>
          Saturation is not a computational convenience. It is THE mechanism that makes pattern existence possible.
          Every entity &mdash; from quantum particles to galaxies &mdash; depends on saturation resistance for stability.
        </p>

        <p>
          The resistance function IS viscosity (shear-thinning, power-law). This gives{' '}
          <Link href="/two-reframes" style={{ color: 'var(--color-accent-blue)' }}>Navier-Stokes directly</Link>{' '}
          &mdash; not by analogy, but by construction.
        </p>

        <h2 style={{ marginTop: '2.5rem' }}>Foundation 4: Paradigm Shift Over Epicycles</h2>

        <p>
          When facing mysteries: &ldquo;Am I adding epicycles to save the paradigm, or is nature telling me
          to change the paradigm?&rdquo;
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
          <div className="card">
            <h3 style={{ color: '#ef4444', fontSize: '1rem', marginBottom: '0.5rem' }}>Bad paradigm</h3>
            <p style={{ margin: 0 }}>More parameters, more complexity, less explanatory power</p>
          </div>
          <div className="card">
            <h3 style={{ color: '#22c55e', fontSize: '1rem', marginBottom: '0.5rem' }}>Good paradigm</h3>
            <p style={{ margin: 0 }}>Simpler equations, fewer assumptions, broader applicability</p>
          </div>
        </div>

        <p style={{ marginTop: '1rem' }}>
          Synchronism is orthogonal to anthropocentric science, not a refinement of it. Like
          heliocentrism didn&apos;t refine epicycles but made them irrelevant.
        </p>

        <hr style={{ margin: '2.5rem 0', borderColor: 'var(--color-border)' }} />

        <h2>Core Definitions</h2>

        <h3>Entity</h3>
        <p>
          A single tick&apos;s output is not an entity. For anything to <em>exist</em>, its Intent distribution
          must <strong>recur</strong> across a sequence of ticks. Entity = recurring pattern of Intent distribution
          over tick sequences. Oscillation period &tau; gives characteristic frequency f = 1/&tau;.
          For quantum particles: f = E/h (de Broglie frequency). Energy is how fast the pattern oscillates.
          Mass is the base oscillation frequency at rest.
        </p>

        <h3>Interaction</h3>
        <p>When tension fields of two self-sustaining oscillations share the same region of the grid:</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#22c55e' }}>Resonance</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Constructive over many ticks. Patterns draw together, phases lock.
              Matter interacting with matter.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#ef4444' }}>Dissonance</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Destructive over many ticks. Patterns repel.
              Antimatter annihilation, destructive interference.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--color-text-secondary)' }}>Indifference</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              No consistent phase relationship. Patterns coexist without coupling.
              Dark matter, neutrinos through matter.
            </p>
          </div>
        </div>

        <h3 style={{ marginTop: '1.5rem' }}>Dark Matter</h3>
        <p>
          Patterns interacting <strong>indifferently</strong> with patterns we perceive as matter at our{' '}
          <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH</Link>.
          Not mysterious, not exotic &mdash; patterns at different resonance scales. Like light through glass:
          acknowledges presence (gravitational effect) but doesn&apos;t engage structurally.
        </p>

        <h3>Witnessing</h3>
        <p>
          What anthropocentric models call &ldquo;observation,&rdquo; Synchronism calls witnessing &mdash;
          pattern synchronization. A witness is itself an intent pattern interacting with other patterns.
          Not separate from reality, but part of the same pattern dynamics.
        </p>

        <h3>Gravity</h3>
        <p>
          Stable patterns maintain saturated cores. These create saturation gradients &mdash; declining
          Intent concentration spreading spherically outward. Other patterns in these gradients experience
          transfer bias. This IS gravitational attraction: asymmetric Intent transfer probability, not a force pulling.
        </p>

        <hr style={{ margin: '2.5rem 0', borderColor: 'var(--color-border)' }} />

        <h2>The Navier-Stokes Connection</h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Intent Dynamics</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>N-S Term</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>I/I<sub>max</sub></td>
                <td style={{ padding: '0.5rem' }}>Density</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>Intent flux J/I</td>
                <td style={{ padding: '0.5rem' }}>Velocity</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>I<sub>max</sub> &minus; I</td>
                <td style={{ padding: '0.5rem' }}>Pressure</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>D&middot;R(I) = D&middot;[1&minus;(I/I<sub>max</sub>)<sup>n</sup>]</td>
                <td style={{ padding: '0.5rem' }}>Viscosity</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem' }}>External gradient sources</td>
                <td style={{ padding: '0.5rem' }}>Body force</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Intent conservation</td>
                <td style={{ padding: '0.5rem' }}>Incompressibility (&nabla;&middot;v = 0)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '1rem' }}>
          Same structure at every{' '}
          <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH</Link> scale.
          The substrate is not just described by fluid dynamics &mdash; it is fluid dynamics, all the way up.
        </p>

        <hr style={{ margin: '2.5rem 0', borderColor: 'var(--color-border)' }} />

        <h2>What Synchronism Does Not Claim</h2>
        <ul>
          <li>Replace physics &mdash; GR and QM work beautifully in their domains</li>
          <li>Explain &ldquo;why&rdquo; teleologically &mdash; no purpose, just dynamics</li>
          <li>Have solved consciousness, gravity, or force unification &mdash; mechanisms proposed, validation required</li>
          <li>Describe ultimate reality &mdash; &ldquo;All models are wrong. Synchronism itself is wrong.&rdquo; The question is which model is less wrong</li>
        </ul>

        <div className="quote" style={{ marginTop: '2rem' }}>
          &ldquo;All models of reality are wrong. Science, religion, philosophy &mdash; each is a belief system
          built on unprovable axioms. Synchronism itself is wrong. The question is not &lsquo;which is true?&rsquo;
          but &lsquo;which is less wrong?&rsquo;&rdquo;
        </div>

      </section>
    </>
  );
}
