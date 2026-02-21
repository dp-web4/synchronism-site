'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tests = [
  {
    id: 'TEST-22',
    name: 'Minimal Cell γ Mapping',
    cost: '$200K–$500K',
    time: '24 months',
    description: 'Map the coherence parameter γ across minimal synthetic cells (JCVI-syn3.0 or similar) at single-molecule resolution. Test whether life requires specific γ ranges.',
    prediction: 'Living minimal cells maintain γ in a narrow range (0.3–0.7); dead cells have γ > 1.5',
    kill: 'γ distribution identical in living and dead minimal cells',
    challenge: 'Requires single-molecule tracking in living cells — at the edge of current microscopy.',
  },
  {
    id: 'TEST-23',
    name: 'Planck-Scale Coherence Signature',
    cost: '$10M+',
    time: '5–10 years',
    description: 'Search for coherence signatures at Planck-adjacent scales using precision interferometry or gravitational wave detector noise floor analysis.',
    prediction: 'Detector noise floor shows non-random structure at frequencies corresponding to Planck-scale coherence transitions',
    kill: 'Noise floor is perfectly thermal/quantum at all measured frequencies',
    challenge: 'May require next-generation detectors (LISA, Cosmic Explorer). Current instruments may lack sensitivity.',
  },
  {
    id: 'TEST-24',
    name: 'AI Consciousness Threshold',
    cost: 'Unknown',
    time: 'Unknown',
    description: 'If AI systems can be meaningfully assigned a coherence metric C, test whether systems with C > 0.50 show qualitative behavioral shifts (novel problem-solving, self-referential reasoning, resistance to shutdown).',
    prediction: 'AI systems crossing C ≈ 0.50 show discontinuous behavioral changes',
    kill: 'No behavioral discontinuity at any C threshold, or C cannot be meaningfully measured for AI',
    challenge: 'Fundamental: we don\'t yet know how to measure C for AI systems. This test may be decades away or impossible.',
  },
];

export default function Tier4Frontier() {
  return (
    <>
      <Breadcrumbs currentPath="/tier-4-frontier" />
      <h1>Tier 4: Frontier</h1>
      <ValidationBadge status="speculative" label="3 Tests, Decades Away" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          These tests push against the limits of current technology. Some may become feasible
          in the next decade; others may require breakthroughs we can&apos;t yet predict.
          They&apos;re included for completeness and to show where the framework leads.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {tests.map(t => (
            <div key={t.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3>{t.id}: {t.name}</h3>
                <span style={{ color: '#f59e0b', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {t.cost}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {t.description}
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Prediction:</strong> {t.prediction}
              </p>
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <strong>Kill:</strong> {t.kill}
              </p>
              <p style={{ color: '#f59e0b', fontSize: '0.8rem', fontStyle: 'italic' }}>
                Challenge: {t.challenge}
              </p>
            </div>
          ))}
        </div>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Tier 4 tests are speculative by nature. They define where the framework <em>could</em> be
          tested, not where it <em>will</em> be tested. The real work is in Tiers 1 and 2. If those
          fail, Tier 4 becomes irrelevant.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/top-5-tests" className="btn-primary">
            Top 5 Decisive Tests &rarr;
          </Link>
          <Link href="/tier-3-major" className="btn-secondary">
            &larr; Tier 3
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/tier-4-frontier" />
    </>
  );
}
