'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function QuantumComputing() {
  return (
    <>
      <Breadcrumbs currentPath="/quantum-computing" />
      <h1>Quantum Computing</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Quantum computing, viewed through Synchronism, is coherence engineering. Gates are
          coherence operations, speedup is coherent parallelism, and the entire enterprise
          of error correction is about maintaining the &#x03B3; regime against environmental
          MRH crossings.
        </p>

        <h2>Gates as Coherence Operations</h2>
        <p>
          A quantum gate transforms the state of qubits. In Synchronism&apos;s framing, each gate
          is an operation that redistributes coherence across the system&apos;s phase pattern:
        </p>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8', fontSize: '1rem' }}>Hadamard Gate</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Splits coherence equally between |0&#x27E9; and |1&#x27E9;. Creates maximal
              superposition. In Synchronism: distributes the phase pattern across both
              branches with equal weight.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: '#38bdf8', fontSize: '1rem' }}>CNOT Gate</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Creates entanglement between two qubits. In Synchronism: establishes shared
              &#x03B3; between two subsystems, linking their N<sub>corr</sub> values.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: '#38bdf8', fontSize: '1rem' }}>Phase Gate</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Rotates the phase of one branch relative to another. In Synchronism: adjusts
              the phase pattern without changing coherence magnitudes. Pure phase engineering.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: '#38bdf8', fontSize: '1rem' }}>Measurement</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Extracts a classical bit. In Synchronism: forces an MRH crossing that
              collapses the phase pattern. Coherence concentrates into one branch.
            </p>
          </div>
        </div>

        <h2>Speedup = Coherent Parallelism</h2>
        <EquationDisplay size="md" label="Quantum advantage from coherence">
          Speedup &#x221D; branches maintained before MRH crossing
        </EquationDisplay>
        <p>
          A classical computer explores one path at a time. A quantum computer maintains
          coherent superposition across exponentially many paths simultaneously. The
          &ldquo;quantum advantage&rdquo; is exactly the number of coherent branches that
          can be maintained and interfered before the system crosses the MRH.
        </p>
        <p>
          Shor&apos;s algorithm works because it maintains coherence across all factor candidates
          simultaneously, then uses interference (phase pattern manipulation) to amplify the
          correct answer. Grover&apos;s algorithm amplifies the coherence in the marked state
          through repeated phase rotations.
        </p>

        <h2>Error Correction = Maintaining &#x03B3;</h2>
        <div className="card card-highlight" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>Decoherence = unwanted MRH crossing.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            Every qubit constantly interacts with its environment. Each interaction threatens to
            increase N<sub>corr</sub>, decrease &#x03B3;, and push the system past the MRH. Quantum
            error correction fights this by encoding logical qubits into larger physical systems
            that can detect and correct small MRH encroachments before they become irreversible.
          </p>
        </div>
        <p>
          In this framing, the threshold theorem of fault-tolerant quantum computing becomes
          a statement about &#x03B3; maintenance: if the per-gate error rate (per-gate MRH encroachment)
          is below a threshold, then arbitrarily long coherent computation is possible by
          continuously correcting the &#x03B3; drift.
        </p>

        <h2>T<sub>2</sub> Coherence Times</h2>
        <p>
          The T<sub>2</sub> decoherence time of a qubit measures how long it maintains phase
          coherence. In Synchronism, this is the timescale on which environmental coupling
          pushes &#x03B3; below the quantum regime threshold. Synchronism predicts that T<sub>2</sub>
          should scale with N<sub>corr</sub> of the environment:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Trapped ions</strong>: Isolated from environment (low N<sub>corr</sub> coupling), long T<sub>2</sub></li>
          <li><strong>Superconducting qubits</strong>: Coupled to phonon bath (moderate N<sub>corr</sub>), shorter T<sub>2</sub></li>
          <li><strong>Photonic qubits</strong>: Minimal environmental coupling, long T<sub>2</sub> but hard to entangle</li>
        </ul>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          Protocol 6 in the{' '}
          <Link href="/quantum-predictions" style={{ color: 'var(--color-accent-blue)' }}>
            Quantum Predictions
          </Link>{' '}
          proposes testing whether T<sub>2</sub> correlates with N<sub>corr</sub>-based predictions.
          Estimated cost: $5K, timeline: 6 months.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/wave-function" className="btn-primary">
            Next: Wave Function Interpretation &rarr;
          </Link>
          <Link href="/born-rule" className="btn-secondary">
            Back: Born Rule Derivation
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/quantum-computing" />
    </>
  );
}
