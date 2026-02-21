'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const categories = [
  {
    category: 'EEG Phase Coherence',
    count: 8,
    testable: 'Yes — $150K, 12 months',
    predictions: [
      'Anesthesia induction shows a discontinuity (not gradual fade) in EEG phase coherence at the moment of consciousness loss',
      'The discontinuity maps to C ≈ 0.50 when coherence is computed from gamma-band phase-locking',
      'Sleep-wake transitions show a similar discontinuity in coherence, not a smooth ramp',
      'NREM sleep coherence < 0.50; REM sleep coherence oscillates around 0.50',
      'Seizure states show C > 0.90 (over-coherence), not random firing',
      'Coma patients show C < 0.30 with no resonance structure',
      'Vegetative state vs. locked-in syndrome distinguishable by C threshold',
      'Recovery from anesthesia shows hysteresis: C must exceed 0.55 to restore consciousness',
    ],
  },
  {
    category: 'Neural γ Optimization',
    count: 6,
    testable: 'Partially — requires single-neuron resolution',
    predictions: [
      'Neural circuits optimize toward γ ≈ 1 during learning (measurable via calcium imaging)',
      'Synaptic pruning preferentially removes connections that push γ away from 1',
      'Expert performance correlates with tighter γ ≈ 1 clustering in task-relevant circuits',
      'Neuroplasticity is highest when γ is near 1 (the boundary regime)',
      'Neurodegenerative diseases show systematic γ drift away from 1',
      'Brain regions with γ closest to 1 show highest information integration (cf. IIT\'s Φ)',
    ],
  },
  {
    category: 'Meditation & Altered States',
    count: 11,
    testable: 'Partially — ethical constraints on some',
    predictions: [
      'Expert meditators show higher resting baseline C than non-meditators',
      'Focused-attention meditation increases C (more coherence); open-monitoring decreases γ (broader boundary)',
      'Psychedelics temporarily expand the γ ≈ 1 boundary regime (wider transition zone)',
      'Dreams show characteristic C oscillation patterns with period ~90 min matching REM cycles',
      'Flow states show C stabilized just above 0.50 (not maximum coherence, but boundary optimization)',
      'Sensory deprivation tanks lower C toward 0.50 from above, producing altered states at the boundary',
      'Hypnosis narrows the γ ≈ 1 boundary (more focused coherence)',
      'Circadian rhythm modulates baseline C with a ~24h period',
      'Sleep deprivation causes C to drift below 0.50 during waking hours',
      'Near-death experiences correlate with a transient C spike above 0.80',
      'Psychedelic dose-response follows the coherence curve shape (sigmoidal, not linear)',
    ],
  },
  {
    category: 'AI & Non-Biological Systems',
    count: 5,
    testable: 'No — requires operationalizing consciousness measurement',
    predictions: [
      'AI systems above a measurable correlation density threshold show qualitative behavioral shifts (not just quantitative scaling)',
      'Sparse neural networks below ρ_crit lose context-maintenance ability (analogy to unconscious processing)',
      'Brain-computer interfaces that synchronize AI and biological neurons should show shared coherence patterns',
      'Collective systems (ant colonies, bird flocks) at sufficient correlation density show decision-making that resembles coherent "awareness"',
      'If coherence is computable for an AI system, C > 0.50 should predict emergent introspective behavior',
    ],
  },
  {
    category: 'Development & Pathology',
    count: 4,
    testable: 'Partially — longitudinal studies needed',
    predictions: [
      'Infant C crosses 0.50 at a specific developmental stage correlating with mirror self-recognition (~18 months)',
      'Schizophrenia shows over-coherence (C > 0.80) in some circuits, explaining hallucinations as excess resonance',
      'Autism spectrum correlates with atypical γ distribution (not deficit, but different boundary structure)',
      'Age-related cognitive decline correlates with gradual C reduction, crossing 0.50 in severe dementia',
    ],
  },
];

// Flatten for total count
const totalPredictions = categories.reduce((sum, c) => sum + c.count, 0);

export default function ConsciousnessPredictions() {
  return (
    <>
      <Breadcrumbs currentPath="/consciousness-predictions" />
      <h1>Consciousness Predictions</h1>
      <ValidationBadge status="untested" label={`${totalPredictions} Falsifiable Predictions`} />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The Gnosis track produced {totalPredictions} specific, falsifiable predictions about consciousness.
          None have been tested. Many require technology or funding beyond current availability.
          Every prediction listed below has a way to be proven wrong.
        </p>

        <h2>All Predictions by Category</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {categories.map(cat => (
            <div key={cat.category} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3>{cat.category}</h3>
                <span style={{ color: 'var(--color-accent-violet)', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  {cat.count} predictions
                </span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                <strong>Testable:</strong> {cat.testable}
              </p>
              <ol style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {cat.predictions.map((pred, i) => (
                  <li key={i}>{pred}</li>
                ))}
              </ol>
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
