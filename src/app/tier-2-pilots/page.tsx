'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tests = [
  {
    id: 'TEST-11',
    name: 'EEG Anesthesia Phase Transition',
    cost: '$150K',
    time: '12 months',
    protocol: '20 subjects, gradual propofol infusion, 256-channel EEG + fMRI',
    prediction: 'Sharp phase transition in coherence at universal threshold Φ_crit = 3.5 ± 0.2',
    kill: 'Φ at loss of consciousness ranges from 1.0 to 6.0 with no clustering',
    notes: 'The single most decisive consciousness test. If the threshold is universal, Synchronism\'s consciousness framework has legs. If Φ_LOC varies widely, it doesn\'t.',
  },
  {
    id: 'TEST-12',
    name: 'Circadian γ Monitoring',
    cost: '$50K',
    time: '1 month',
    protocol: '10 subjects, continuous EEG over 24-hour cycle, track coherence metrics',
    prediction: 'γ_neural shows systematic variation correlated with circadian phase',
    kill: 'No systematic γ variation over circadian cycle above noise floor',
    notes: 'Low-cost, fast. If circadian rhythms don\'t modulate neural coherence, the mapping from abstract C to measurable EEG is wrong.',
  },
  {
    id: 'TEST-13',
    name: 'QC Coherence Time Scaling',
    cost: '$5K',
    time: '6 months',
    protocol: 'Partner with quantum computing lab, measure T2 vs. γ_env across platforms',
    prediction: 'Quantum computer coherence time T2 scales predictably with environmental γ',
    kill: 'T2 uncorrelated with environmental coupling metric',
    notes: 'Cheap. Uses existing QC hardware. Tests whether Synchronism\'s γ adds predictive value over standard decoherence models.',
  },
  {
    id: 'TEST-14',
    name: 'EEG Phase Locking in Meditation',
    cost: '$150K',
    time: '12 months',
    protocol: '10 expert meditators + 10 controls, 256-channel EEG, multiple meditation types',
    prediction: 'Expert meditators show higher baseline C and distinct γ ranges for different meditation types',
    kill: 'No difference in phase coherence between experts and novices',
    notes: 'Tests the prediction that meditation systematically modulates coherence. Pairs with TEST-11.',
  },
];

export default function Tier2Pilots() {
  return (
    <>
      <Breadcrumbs currentPath="/tier-2-pilots" />
      <h1>Tier 2: Pilot Experiments</h1>
      <ValidationBadge status="untested" label="4 Tests, $50K–$200K" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          These experiments require modest funding and institutional collaboration, but are
          feasible with current technology. They test the most novel predictions &mdash; the ones
          that can&apos;t be explained as reparametrizations.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {tests.map(t => (
            <div key={t.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3>{t.id}: {t.name}</h3>
                <span style={{ color: 'var(--color-accent-blue)', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {t.cost} / {t.time}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Protocol:</strong> {t.protocol}
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Prediction:</strong> {t.prediction}
              </p>
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <strong>Kill:</strong> {t.kill}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontStyle: 'italic' }}>
                {t.notes}
              </p>
            </div>
          ))}
        </div>

        <h2>Prerequisites</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Tier 2 experiments should only proceed if Tier 1 results are encouraging. If the
          zero-cost data reanalyses (BAO, wide binary, SPARC environment) all fail, the
          case for investing in pilot experiments weakens substantially.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tier-3-major" className="btn-primary">
            Tier 3: Major Experiments &rarr;
          </Link>
          <Link href="/tier-1-existing" className="btn-secondary">
            &larr; Tier 1
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/tier-2-pilots" />
    </>
  );
}
