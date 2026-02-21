'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function ObserverProblem() {
  return (
    <>
      <Breadcrumbs currentPath="/observer-problem" />
      <h1>The Observer Problem</h1>
      <ValidationBadge status="speculative" label="Theoretical Framework" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          For nearly a century, quantum mechanics has struggled with the role of the observer.
          Does consciousness cause collapse? Does observation create reality? Synchronism argues
          that these questions arise from the same error that plagued pre-Copernican astronomy:
          placing ourselves at the center.
        </p>

        <h2>The Geocentrism Analogy</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          margin: '1.5rem 0',
        }}>
          <div className="card" style={{ borderLeft: '3px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b' }}>Ptolemaic Astronomy</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Earth is at the center. The Sun, planets, and stars orbit around us. Epicycles
              are needed to explain retrograde motion. The math works, but the framework
              is needlessly complicated because it privileges the wrong reference frame.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Standard Quantum Mechanics</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The observer is at the center. Wave functions collapse when &ldquo;measured.&rdquo;
              Interpretations multiply &mdash; Copenhagen, Many-Worlds, QBism, relational &mdash;
              each an epicycle patching the same privileged-frame error. The math works, but
              the framework is needlessly complicated because it privileges the wrong entity.
            </p>
          </div>
          <div className="card card-highlight" style={{ borderLeft: '3px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e' }}>Synchronism&apos;s Reframe</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The observer is not special. Patterns exist independently of observation.
              &ldquo;Measurement&rdquo; is any interaction that pushes a system past the MRH.
              Remove the anthropocentric frame and the interpretive epicycles become unnecessary.
            </p>
          </div>
        </div>

        <h2>What &ldquo;Observation&rdquo; Actually Is</h2>
        <p>
          In Synchronism, observation is <strong>synchronization timing</strong> &mdash; the moment
          when two systems&apos; phase patterns become correlated enough to share information. This
          happens when:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>A photon hits a detector (electromagnetic coupling &rarr; N<sub>corr</sub> increase)</li>
          <li>An electron scatters off a nucleus (strong coupling &rarr; correlation transfer)</li>
          <li>A Geiger counter clicks in an empty room (no consciousness involved)</li>
          <li>Two atoms interact in interstellar space (no apparatus, no intent, just physics)</li>
        </ul>
        <p>
          All of these are MRH crossings. None require an observer. The Geiger counter in an
          empty room produces the same click pattern whether or not anyone is listening.
        </p>

        <h2>Why This Matters</h2>
        <div className="card" style={{ margin: '1rem 0' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            The observer problem isn&apos;t just a philosophical curiosity. It has blocked progress in
            quantum gravity, quantum cosmology, and the interpretation of early-universe physics.
            If measurement requires an observer, who observed the Big Bang? If the wave function
            of the universe needs an external observer, the framework is incoherent.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            Synchronism dissolves this by removing the observer entirely. The universe&apos;s
            wave function decoheres at MRH boundaries without any external reference point. Early-universe
            quantum fluctuations crossed their MRH through gravitational self-interaction, seeding
            large-scale structure without any observer.
          </p>
        </div>

        <h2>The Copernican Shift</h2>
        <p>
          Copernicus didn&apos;t add new data. He removed a wrong assumption. The same data, reframed
          without Earth at the center, became simpler. Synchronism makes the same move: the same
          quantum mechanics, reframed without the observer at the center, becomes simpler.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          This argument is developed in detail in the LinkedIn article
          on quantum geocentrism (linkedin-quantum-geocentrism.md).
        </p>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is a reframing, not a new calculation. Synchronism does not produce different
          experimental predictions from standard decoherence theory at this level. What it offers
          is a <em>conceptual simplification</em>: a framework where the measurement problem
          never arises because the observer was never a necessary ingredient.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/entanglement-coherence" className="btn-primary">
            Next: Entanglement as Coherence &rarr;
          </Link>
          <Link href="/measurement-without-observers" className="btn-secondary">
            Back: Measurement Without Observers
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/observer-problem" />
    </>
  );
}
