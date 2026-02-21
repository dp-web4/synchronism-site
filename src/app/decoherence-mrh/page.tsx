'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function DecoherenceMRH() {
  return (
    <>
      <Breadcrumbs currentPath="/decoherence-mrh" />
      <h1>Decoherence at the MRH</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Why does the classical world emerge from quantum mechanics? Standard decoherence
          theory provides the answer: environmental interactions destroy quantum coherence.
          Synchronism agrees with this &mdash; and provides a quantitative framework for
          <em> where</em> the transition happens, using the Markov Relevancy Horizon.
        </p>

        <h2>The Standard Story</h2>
        <p>
          Decoherence theory (Zeh, Zurek, Joos) shows that a quantum system interacting with
          an environment rapidly loses its ability to exhibit interference. The off-diagonal
          elements of the density matrix decay exponentially. This is well-established physics,
          not speculative.
        </p>
        <p>
          What decoherence theory does <em>not</em> provide is a sharp boundary. It says
          &ldquo;coherence decays exponentially,&rdquo; but doesn&apos;t say <em>where</em>
          the quantum-to-classical transition occurs. The MRH fills this gap.
        </p>

        <h2>The MRH Mechanism</h2>
        <EquationDisplay size="md" label="Decoherence through N_corr growth">
          N<sub>corr</sub> &#x2191; &nbsp;&rarr;&nbsp; &#x03B3; &#x2193;
          &nbsp;&rarr;&nbsp; MRH shrinks &nbsp;&rarr;&nbsp; classical behavior emerges
        </EquationDisplay>
        <p>
          As a quantum system interacts with its environment, the number of correlated particles
          (N<sub>corr</sub>) increases. Every environmental interaction &mdash; a scattered photon,
          a phonon, a thermal fluctuation &mdash; adds particles to the correlated ensemble.
          Each addition decreases &#x03B3; = 2/&#x221A;N<sub>corr</sub> and contracts the MRH.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8' }}>N<sub>corr</sub> = 1 &nbsp;(&#x03B3; = 2)</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Fully quantum. Single isolated particle. Superposition maintained indefinitely
              (in principle). MRH extends to the system&apos;s full spatial extent. Interference
              patterns are visible.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>N<sub>corr</sub> &#x2248; 4 &nbsp;(&#x03B3; &#x2248; 1)</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The boundary. Small molecular cluster, catalytic site, quantum dot. Coherence
              is fragile but present. This is where the physics gets interesting &mdash; where
              chemistry, biology, and mesoscopic quantum effects live.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e' }}>N<sub>corr</sub> = 10<sup>23</sup> &nbsp;(&#x03B3; &#x2248; 10<sup>&minus;12</sup>)</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Fully classical. Macroscopic object. MRH is effectively zero &mdash; the system
              is past the horizon on every relevant timescale. Superposition is destroyed in
              femtoseconds. This is the everyday world.
            </p>
          </div>
        </div>

        <h2>Decoherence Timescales</h2>
        <p>
          The timescale on which decoherence occurs depends on how quickly N<sub>corr</sub>
          grows. Synchronism predicts that the decoherence time &#x03C4;<sub>D</sub> should
          scale as:
        </p>
        <EquationDisplay size="md" label="Predicted decoherence timescale scaling">
          &#x03C4;<sub>D</sub> &#x221D; 1 / (rate of N<sub>corr</sub> growth)
        </EquationDisplay>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>
            <strong>Vacuum (space)</strong>: Very slow N<sub>corr</sub> growth. Photons travel
            billions of light-years maintaining coherence. MRH is enormous.
          </li>
          <li>
            <strong>Room temperature air</strong>: Rapid N<sub>corr</sub> growth from thermal
            collisions. Coherence destroyed in ~10<sup>&minus;20</sup> seconds for macroscopic objects.
          </li>
          <li>
            <strong>Cryogenic isolation</strong>: Slow N<sub>corr</sub> growth. Superconducting
            qubits maintain coherence for microseconds to milliseconds.
          </li>
        </ul>

        <h2>What Synchronism Adds to Standard Decoherence</h2>
        <div className="card card-highlight" style={{ margin: '1.5rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>The MRH provides the boundary that decoherence theory lacks.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Standard decoherence theory says coherence decays continuously. There is no principled
            cutoff for &ldquo;when is it classical enough?&rdquo; Synchronism provides one:
            the MRH. When &#x03B3; drops below the quantum regime threshold (~1.5), the system
            has crossed the MRH. This isn&apos;t arbitrary &mdash; it&apos;s the point where correlations
            between branches become statistically negligible.
          </p>
        </div>

        <h2>Honest Assessment</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Synchronism&apos;s reframing of decoherence through the MRH is a conceptual contribution,
          not a calculational one. The decoherence timescales it predicts are the same as standard
          theory (because the underlying physics is the same). What it adds is a <em>principle</em>
          for where to draw the line &mdash; the MRH as a natural boundary rather than an
          arbitrary cutoff.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/quantum-predictions" className="btn-primary">
            Next: Quantum Predictions &rarr;
          </Link>
          <Link href="/phase-transitions" className="btn-secondary">
            Phase Transitions
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/decoherence-mrh" />
    </>
  );
}
