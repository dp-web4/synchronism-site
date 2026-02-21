'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function MeasurementWithoutObservers() {
  return (
    <>
      <Breadcrumbs currentPath="/measurement-without-observers" />
      <h1>Measurement Without Observers</h1>
      <ValidationBadge status="untested" label="6 Testable Protocols" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism&apos;s central claim about quantum mechanics: wave function &ldquo;collapse&rdquo;
          is not a mysterious event triggered by conscious observation. It is decoherence at the
          Markov Relevancy Horizon. When a quantum system interacts with a macroscopic apparatus,
          the correlations between system and environment exceed the MRH &mdash; and that boundary
          crossing IS the measurement.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          No observer needed. No consciousness required. The MRH boundary doesn&apos;t care
          who is watching.
        </blockquote>

        <h2>The Mechanism</h2>
        <p>
          Consider a quantum system (a photon, an electron) interacting with a measurement apparatus.
          Before interaction, the system maintains coherent superposition &mdash; its &#x03B3; is high,
          its N<sub>corr</sub> is low, and correlations with the environment are within the MRH.
        </p>
        <EquationDisplay size="md" label="Measurement = MRH boundary crossing">
          N<sub>corr</sub> &#x2191; &nbsp;&rarr;&nbsp; &#x03B3; = 2/&#x221A;N<sub>corr</sub> &#x2193;
          &nbsp;&rarr;&nbsp; MRH shrinks &nbsp;&rarr;&nbsp; correlations exceed MRH
        </EquationDisplay>
        <p>
          When the quantum system couples to the ~10<sup>23</sup> particles in the apparatus,
          N<sub>corr</sub> explodes. &#x03B3; plummets. The MRH contracts to effectively zero.
          Correlations that were &ldquo;inside&rdquo; the horizon are now &ldquo;outside&rdquo; it.
          The system has crossed the MRH boundary. That crossing is what we call measurement.
        </p>

        <h2>The Geocentrism Analogy</h2>
        <div className="card card-highlight" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>The observer was never special.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            Just as Copernicus showed that Earth orbits the Sun (not the reverse), Synchronism
            argues that placing the observer at the center of quantum mechanics was a geocentric
            error. Patterns exist and decohere on their own terms. &ldquo;Observation&rdquo; is
            just one of many interactions that can push a system past the MRH.
          </p>
        </div>
        <p>
          <Link href="/observer-problem" style={{ color: 'var(--color-accent-blue)' }}>
            Full treatment: The Observer Problem &rarr;
          </Link>
        </p>

        <h2>What Makes This Different</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>Standard QM</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>Collapse postulated, not derived</li>
              <li>Observer role ambiguous</li>
              <li>Decoherence explains <em>loss</em> of interference but not definite outcomes</li>
              <li>Measurement problem remains open</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Synchronism</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>MRH crossing <em>is</em> collapse &mdash; derived from &#x03B3;</li>
              <li>Observer is irrelevant; any macroscopic coupling suffices</li>
              <li>Definite outcomes follow from irreversible MRH crossing</li>
              <li>Measurement problem dissolves, not solved</li>
            </ul>
          </div>
        </div>

        <h2>Key Insight: Irreversibility</h2>
        <p>
          MRH crossing is thermodynamically irreversible for macroscopic apparatuses. Once
          N<sub>corr</sub> reaches ~10<sup>23</sup>, the probability of spontaneously returning
          to the pre-measurement state is effectively zero. This is why measurements produce
          definite outcomes: the MRH boundary crossing is a one-way gate when the environment
          is large enough.
        </p>

        <h2>What&apos;s Untested</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Six experimental protocols have been designed (Sessions #368-370) to test whether
          decoherence patterns at the MRH boundary match Synchronism&apos;s predictions. None have
          been run. The theory predicts specific scaling relationships between N<sub>corr</sub>,
          decoherence timescales, and the sharpness of the quantum-classical transition.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/observer-problem" className="btn-primary">
            Next: The Observer Problem &rarr;
          </Link>
          <Link href="/quantum-predictions" className="btn-secondary">
            See the 6 Protocols
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/measurement-without-observers" />
    </>
  );
}
