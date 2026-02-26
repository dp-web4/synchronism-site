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

        <h3>Entanglement: Two Synchronized Screens</h3>
        <p>
          Imagine two CRT screens displaying identical pictures, perfectly synchronized in their electron
          beam scanning. No matter how you sample them &mdash; slow for pictures, fast for flickering,
          pixel-rate for dots &mdash; both screens show identical behavior simultaneously. Regardless of
          distance.
        </p>
        <p>
          No information travels between them. They were synchronized from the start. This is what
          Synchronism calls <strong>raster entanglement</strong>: &ldquo;entangled&rdquo; particles are
          patterns cycling in perfect sync. Measuring one tells you about the other not because information
          traveled, but because their cycles were correlated from creation.
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
            The mapping table above is conceptual, not derived.
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
            identical measurements. Distinguishing them experimentally is an open problem.
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
