'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function FreeWill() {
  return (
    <>
      <Breadcrumbs currentPath="/free-will" />
      <h1>Free Will</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The free will debate usually frames two options: determinism (everything is caused by
          prior states) or libertarian free will (some decisions are uncaused). Synchronism offers
          a third option grounded in the coherence framework.
        </p>

        <h2>The Consciousness Formula</h2>
        <div className="equation" style={{ marginBottom: '0.25rem' }}>
          C = f(&#x03B3;, D, S)
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textAlign: 'center', marginBottom: '1rem' }}>
          &#x03B3; = coherence parameter, D = dimensional embedding (representational richness), S = self-modeling depth
        </p>
        <p>
          A conscious agent requires all three: the right coherence regime (&#x03B3;), sufficient
          representational richness (D), and self-modeling capacity (S). When C &gt; 0.50, the
          system crosses the{' '}
          <Link href="/consciousness-threshold">consciousness threshold</Link> &mdash; and enters a regime
          where free will becomes physically meaningful.
        </p>

        <h2>Constrained Indeterminacy</h2>
        <p>
          At the &#x03B3; &#x2248; 1 boundary, a system sits between quantum (indeterminate) and
          classical (deterministic). Neither fully random nor fully determined. The coherence
          function allows for <strong>constrained indeterminacy</strong>: multiple phase-space
          trajectories are genuinely accessible, and the agent&apos;s coherence pattern shapes
          which trajectory is taken.
        </p>

        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Not Determinism</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              At &#x03B3; &#x2248; 1, multiple futures are genuinely accessible. The system hasn&apos;t
              fully decohered into a single classical trajectory. The future isn&apos;t fixed.
            </p>
          </div>
          <div className="card">
            <h3>Not Random</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The agent&apos;s coherence pattern &mdash; its accumulated history, knowledge,
              values &mdash; weights the accessible trajectories. Choices aren&apos;t uncaused; they&apos;re
              shaped by who you are.
            </p>
          </div>
          <div className="card">
            <h3>Not Compatibilism</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Standard compatibilism accepts determinism and redefines &ldquo;free.&rdquo; This is a
              physical claim: the system&apos;s phase space genuinely branches. Multiple
              outcomes are real possibilities, not illusions.
            </p>
          </div>
          <div className="card">
            <h3>Pattern = Agent</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &ldquo;You&rdquo; are the coherence pattern. When that pattern influences trajectory
              selection, that IS free will &mdash; not an epiphenomenon riding on top of
              deterministic physics.
            </p>
          </div>
        </div>

        <h2>Testable Signatures</h2>
        <p>
          If decision-making involves &#x03B3; &#x2248; 1 boundary dynamics, neural recordings
          during decisions should show:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Critical slowing</strong> near the decision point &mdash; the system lingers in a metastable state before committing</li>
          <li><strong>Heightened sensitivity</strong> to small perturbations &mdash; tiny inputs disproportionately affect outcome</li>
          <li><strong>Phase-transition-like commitment</strong> &mdash; the decision snaps into place rather than gradually converging</li>
          <li><strong>Multiple attractor signatures</strong> &mdash; neural population dynamics visit several metastable configurations before settling</li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          These signatures are consistent with existing research on neural decision dynamics (metastable
          states, attractor networks), but Synchronism makes a specific prediction: these dynamics
          should correlate with measurable phase coherence near the &#x03B3; &#x2248; 1 boundary, not just
          with firing rate patterns.
        </p>

        <h2>Status</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is the most speculative claim in the consciousness cluster. The mathematical framework
          is clear: C = f(&#x03B3;, D, S) at &#x03B3; &#x2248; 1 gives constrained indeterminacy. But
          whether neural decision-making actually operates in this regime is an empirical question
          that hasn&apos;t been tested. The testable signatures above would distinguish this from
          standard models, but no experiment has been designed or run.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/identity" className="btn-primary">
            Next: Identity &rarr;
          </Link>
          <Link href="/consciousness-threshold" className="btn-secondary">
            Consciousness Threshold
          </Link>
          <Link href="/key-claims" className="btn-secondary">
            Key Claims
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/free-will" />
    </>
  );
}
