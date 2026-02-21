'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function EntanglementCoherence() {
  return (
    <>
      <Breadcrumbs currentPath="/entanglement-coherence" />
      <h1>Entanglement as Coherence</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Quantum entanglement &mdash; the &ldquo;spooky action at a distance&rdquo; that troubled
          Einstein &mdash; is reframed in Synchronism as <strong>shared coherence</strong>. Two
          entangled particles don&apos;t communicate faster than light. They share a &#x03B3; parameter
          because their N<sub>corr</sub> values are correlated from the moment of creation.
        </p>

        <h2>The Mechanism</h2>
        <p>
          When two particles are created in an entangled state (e.g., parametric down-conversion
          producing correlated photon pairs), they share a common phase pattern. In Synchronism&apos;s
          language:
        </p>
        <EquationDisplay size="md" label="Entangled pair: correlated N_corr">
          N<sub>corr</sub>(A, B) = N<sub>corr</sub>(A) + N<sub>corr</sub>(B) &minus; N<sub>shared</sub>
        </EquationDisplay>
        <p>
          The shared correlations (N<sub>shared</sub>) mean that particle A&apos;s &#x03B3; parameter
          is not independent of particle B&apos;s. They are part of the same coherence unit. Measuring
          one doesn&apos;t &ldquo;signal&rdquo; the other &mdash; it resolves a shared phase pattern
          that was established at creation.
        </p>

        <h2>Non-Locality Without Signaling</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>What Entanglement IS</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>Correlated &#x03B3; parameters from shared origin</li>
              <li>Phase patterns that span spatial separation</li>
              <li>Statistical correlations in measurement outcomes</li>
              <li>A coherence bond between subsystems</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>What Entanglement IS NOT</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>Faster-than-light communication</li>
              <li>A physical &ldquo;link&rdquo; through space</li>
              <li>Something that requires consciousness to resolve</li>
              <li>A violation of relativistic causality</li>
            </ul>
          </div>
        </div>

        <h2>Breaking Entanglement = MRH Crossing</h2>
        <p>
          Entanglement is famously fragile. Any interaction with the environment &ldquo;destroys&rdquo;
          it. In Synchronism, this has a precise meaning:
        </p>
        <div className="card card-highlight" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>Decoherence of entanglement = MRH crossing between the entangled subsystems.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            When environment interactions increase N<sub>corr</sub> for one particle, its &#x03B3;
            drops. The shared coherence between the pair weakens until the correlations between
            A and B fall below the noise floor. They have crossed each other&apos;s MRH. The
            entanglement is &ldquo;broken&rdquo; &mdash; not by observation, but by loss of
            shared coherence.
          </p>
        </div>

        <h2>Bell Inequalities</h2>
        <p>
          Bell&apos;s theorem proves that no local hidden variable theory can reproduce quantum
          correlations. Synchronism does not dispute this. Shared &#x03B3; is not a local hidden
          variable &mdash; it is a non-local coherence parameter established at creation and maintained
          until MRH crossing. The Bell correlations arise because both particles sample the same
          phase pattern, not because they communicate.
        </p>

        <h2>Implications for Quantum Information</h2>
        <p>
          If entanglement is shared coherence, then:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Entanglement swapping</strong> = transferring shared &#x03B3; to a new pair</li>
          <li><strong>Quantum teleportation</strong> = using shared coherence to reconstruct a phase pattern</li>
          <li><strong>Entanglement distillation</strong> = concentrating shared N<sub>corr</sub></li>
          <li><strong>Entanglement entropy</strong> = a measure of how much &#x03B3; is shared vs. individual</li>
        </ul>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '1.5rem' }}>
          These reframings do not yet produce quantitatively different predictions from standard
          quantum information theory. They are a conceptual mapping, not a new formalism.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/born-rule" className="btn-primary">
            Next: Born Rule Derivation &rarr;
          </Link>
          <Link href="/quantum-predictions" className="btn-secondary">
            Testable Predictions
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/entanglement-coherence" />
    </>
  );
}
