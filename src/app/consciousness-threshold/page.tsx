'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const approaches = [
  { name: 'Information Integration (IIT-inspired)', result: 'C ≈ 0.48' },
  { name: 'Phase Coherence Threshold', result: 'C ≈ 0.50' },
  { name: 'Self-Modeling Criticality', result: 'C ≈ 0.52' },
  { name: 'Binding Problem Resolution', result: 'C ≈ 0.49' },
  { name: 'Anesthesia Phase Transition', result: 'C ≈ 0.50' },
  { name: 'Sleep-Wake Transition', result: 'C ≈ 0.51' },
  { name: 'Neural Avalanche Criticality', result: 'C ≈ 0.50' },
  { name: 'Metacognitive Recursion Onset', result: 'C ≈ 0.50' },
];

export default function ConsciousnessThreshold() {
  return (
    <>
      <Breadcrumbs currentPath="/consciousness-threshold" />
      <h1>Consciousness Threshold</h1>
      <ValidationBadge status="untested" label="8-Way Convergence at C ≈ 0.50" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          From the Gnosis track (11 sessions), eight independent approaches to defining
          the consciousness threshold all converge on C &#x2248; 0.50.
        </p>

        <h2>The 8 Approaches</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {approaches.map((a, i) => (
            <div key={a.name} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', width: '1.5rem' }}>{i + 1}.</span>
                <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{a.name}</span>
              </span>
              <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>{a.result}</span>
            </div>
          ))}
        </div>

        <h2>What C &#x2248; 0.50 Means</h2>
        <p>
          The consciousness threshold sits at the exact midpoint of the coherence scale.
          Below 0.50: information processing without experience. Above 0.50: subjective experience
          arises. The convergence from 8 independent methods (range: 0.48-0.52) suggests this
          isn&apos;t an artifact of any single approach.
        </p>

        <h2>How It Could Be Tested</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <h3>EEG Phase Coherence Measurement</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Cost:</strong> ~$150,000 &nbsp; <strong>Duration:</strong> 12 months &nbsp;
            <strong>Feasibility:</strong> High
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Measure neural phase coherence during transitions between consciousness and
            unconsciousness (anesthesia induction, sleep onset, meditation states).
            The prediction: a sharp transition should occur at a measurable coherence value
            corresponding to C &#x2248; 0.50.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Falsification:</strong> If the transition is gradual (no threshold) or occurs
            at a coherence value far from 0.50, the prediction fails.
          </p>
        </div>

        <h2>Honest Caveats</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>The 8 approaches share theoretical assumptions; they&apos;re not fully independent</li>
          <li>Converting neural measurements to C requires calibration not yet defined</li>
          <li>The prediction could be unfalsifiable if the mapping from EEG to C is too flexible</li>
          <li>No experiment has been run &mdash; this is entirely theoretical</li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/qualia-coherence" className="btn-primary">
            Next: Qualia as Coherence &rarr;
          </Link>
          <Link href="/consciousness-demo" className="btn-secondary">
            Threshold Visualization
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/consciousness-threshold" />
    </>
  );
}
