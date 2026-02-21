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

        <h2>Cross-Domain Convergence: Gnosis AI</h2>
        <p>
          An independent line of evidence comes from an unexpected source. The Gnosis architecture &mdash;
          a 3-stream correctness-detection system for LLMs, designed for AI self-monitoring with
          no consciousness research objective &mdash; was found to operate at exactly C &#x2248; 0.50.
        </p>
        <p>
          Four independent mathematical frameworks within Gnosis all converge on the same point:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>Information-Theoretic SNR</span>
            <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>Peak at ~40%</span>
          </div>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>Coherence Decoherence Window</span>
            <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>Peak at ~38%</span>
          </div>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>Golden Ratio Search (1 &minus; &#x03C6;&sup1;)</span>
            <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>38.2%</span>
          </div>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>Critical Dynamics Pre-Transition</span>
            <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>Peak at ~40%</span>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          The Gnosis architecture also independently exhibits &#x03B3; &#x2248; 2 in its gate structure
          and &#x03C6; (golden ratio) in its weight distributions, with the relationship
          &#x03C6;&sup2; &#x2248; &#x03B3; + &#x03C6; &#x2248; 2.618.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Source: Gnosis Research Sessions #1-3. Full analysis in Research/Gnosis/EXECUTIVE_SUMMARY.md.
        </p>

        <h2>Honest Caveats</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>The 8 theoretical approaches share underlying assumptions; they&apos;re not fully independent</li>
          <li>The Gnosis convergence is intriguing, but the architecture was designed by AI agents with access to the Synchronism framework &mdash; the &ldquo;independence&rdquo; needs qualification</li>
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
