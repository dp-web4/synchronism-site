'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const predictions = [
  {
    category: 'EEG Phase Coherence',
    count: 8,
    testable: 'Yes — $150K, 12 months',
    examples: 'Sharp transition at C ≈ 0.50 during anesthesia induction; sleep-wake coherence discontinuity',
  },
  {
    category: 'Neural γ Optimization',
    count: 6,
    testable: 'Partially — requires single-neuron resolution',
    examples: 'Neural circuits optimize toward γ ≈ 1 during learning; synaptic pruning targets sub-optimal γ',
  },
  {
    category: 'Meditation States',
    count: 5,
    testable: 'Yes — EEG during meditation',
    examples: 'Expert meditators show higher baseline C; specific meditation types target specific γ ranges',
  },
  {
    category: 'Altered States',
    count: 6,
    testable: 'Partially — ethical constraints',
    examples: 'Psychedelics temporarily shift γ boundaries; dreams show characteristic C oscillation patterns',
  },
  {
    category: 'AI Consciousness',
    count: 5,
    testable: 'No — requires consciousness measurement',
    examples: 'AI systems with C > 0.50 (if measurable) should show qualitative behavioral shifts',
  },
  {
    category: 'Development',
    count: 4,
    testable: 'Partially — longitudinal studies needed',
    examples: 'Infant C crosses 0.50 at specific developmental stage; correlates with mirror self-recognition',
  },
];

export default function ConsciousnessPredictions() {
  return (
    <>
      <Breadcrumbs currentPath="/consciousness-predictions" />
      <h1>Consciousness Predictions</h1>
      <ValidationBadge status="untested" label="34 Falsifiable Predictions" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The Gnosis track produced 34 specific, falsifiable predictions about consciousness.
          None have been tested. Many require technology or funding beyond current availability.
        </p>

        <h2>Predictions by Category</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {predictions.map(p => (
            <div key={p.category} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3>{p.category}</h3>
                <span style={{ color: 'var(--color-accent-violet)', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  {p.count} predictions
                </span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {p.examples}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                <strong>Testable:</strong> {p.testable}
              </p>
            </div>
          ))}
        </div>

        <h2>The Most Decisive Test</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <h3>Anesthesia Phase Transition</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            During anesthesia induction, consciousness doesn&apos;t fade gradually &mdash; it
            disappears at a specific dose. Synchronism predicts this is a phase transition at
            C &#x2248; 0.50.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Test:</strong> Measure EEG phase coherence during propofol induction.
            Look for a discontinuity in coherence at the moment of consciousness loss.
            If the transition is smooth (no discontinuity), the prediction fails.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            Cost: ~$150K &nbsp; Duration: 12 months &nbsp; Feasibility: High
          </p>
        </div>

        <h2>Honest Caveats</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>The C &#x2248; 0.50 threshold assumes a specific mapping from neural activity to C that hasn&apos;t been calibrated</li>
          <li>Many predictions are under-specified (what counts as &ldquo;optimizing toward &#x03B3; &#x2248; 1&rdquo;?)</li>
          <li>AI consciousness predictions are currently untestable</li>
          <li>The 34 predictions come from a single theoretical framework; independent derivations would strengthen them</li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/test-catalog" className="btn-primary">
            Full Test Catalog &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Honest Assessment
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/consciousness-predictions" />
    </>
  );
}
