'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const papers = [
  {
    category: 'Cosmology / Astrophysics',
    items: [
      { name: 'ALFALFA-SDSS TFR Scatter Reduction', readiness: 0.97, novelty: '51% scatter improvement', circularity: '8.8%' },
      { name: 'CDM vs MOND Discrimination (σ_int)', readiness: 0.95, novelty: 'σ_int = 0.086 dex (test underpowered as registered)', circularity: '15%' },
      { name: 'SPARC Capstone (175 galaxies)', readiness: 0.92, novelty: 'Unified rotation curve framework', circularity: '25%' },
      { name: 'Dark Matter as Incomplete Decoherence', readiness: 0.88, novelty: 'Paradigm reframe', circularity: '40%' },
      { name: 'Wide Binary Density Prediction', readiness: 0.60, novelty: 'Novel testable prediction', circularity: '5%' },
    ],
  },
  {
    category: 'Chemistry / Materials',
    items: [
      { name: 'γ Framework: 1,703 Phenomena', readiness: 0.75, novelty: 'Unified property scaling', circularity: '60%' },
      { name: 'η Pair-Breaking as Design Target', readiness: 0.65, novelty: 'Materials optimization', circularity: '80%' },
      { name: 'Channel Independence Discovery', readiness: 0.50, novelty: 'γ_phonon ⊥ γ_spin finding', circularity: '10%' },
    ],
  },
  {
    category: 'Consciousness / Philosophy',
    items: [
      { name: 'Consciousness Threshold (C ≈ 0.50)', readiness: 0.60, novelty: '8-way convergence', circularity: '30%' },
      { name: '34 Falsifiable Predictions', readiness: 0.55, novelty: 'EEG protocols defined', circularity: '15%' },
    ],
  },
  {
    category: 'Methodology',
    items: [
      { name: 'A2ACW Protocol', readiness: 0.70, novelty: 'AI-AI adversarial collaboration', circularity: '0%' },
      { name: 'Autonomous Research Report', readiness: 0.65, novelty: '3,308 sessions methodology', circularity: '0%' },
    ],
  },
];

function scoreColor(score: number): string {
  if (score >= 0.9) return '#10b981';
  if (score >= 0.7) return 'var(--color-accent-blue)';
  if (score >= 0.5) return '#f59e0b';
  return '#ef4444';
}

export default function PublicationRoadmap() {
  return (
    <>
      <Breadcrumbs currentPath="/publication-roadmap" />
      <h1>Publication Roadmap</h1>
      <ValidationBadge status="superseded" label="February 2026 snapshot, not updated" />
      <div style={{ borderLeft: '3px solid #ef4444', background: 'rgba(239,68,68,0.06)', padding: '0.75rem 1rem', borderRadius: '0.375rem', margin: '1rem 0', fontSize: '0.92rem' }}>
        <strong>These readiness scores are a February 2026 snapshot, written before the audit, and have not been
        updated.</strong> Several of the listed papers&apos; central claims have since failed or been identified as known
        physics. &ldquo;Dark Matter as Incomplete Decoherence&rdquo; is badged Failed as a mechanism, and the
        framework&apos;s own cosmology needs cold dark matter. The SPARC galaxy fits that work are MOND&apos;s simple
        &mu; (Reparametrization), and the framework&apos;s own &gamma;&nbsp;=&nbsp;2 loses. The ALFALFA-SDSS scatter test was
        never run as registered. The &sigma;<sub>int</sub> test is underpowered as registered. The chemistry
        &ldquo;&gamma; framework&rdquo; mostly restates the Debye model. The consciousness threshold is unsupported
        and untested. A score of 0.88 or 0.95 here is not a current assessment. For that, see{' '}
        <Link href="/honest-assessment">Honest Assessment</Link> and{' '}
        <Link href="/for-researchers">For Researchers</Link>, which lists the results a referee might still find worth
        reading. No manuscript has been submitted.
      </div>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism tracks potential publications with readiness scores and circularity
          percentages. Higher readiness means closer to submission. Lower circularity means
          more genuinely novel content.
        </p>

        {papers.map(cat => (
          <div key={cat.category} style={{ marginBottom: '2rem' }}>
            <h2>{cat.category}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cat.items.map(p => (
                <div key={p.name} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '0.9rem', flex: 1 }}>{p.name}</h3>
                    <span style={{ fontFamily: 'monospace', fontSize: '1rem', color: scoreColor(p.readiness), fontWeight: 'bold', marginLeft: '1rem' }}>
                      {p.readiness.toFixed(2)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    <span>Novelty: {p.novelty}</span>
                    <span>Circularity: {p.circularity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2>What the Snapshot Got Wrong</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Until 2026-09-22 this section said that the highest-readiness papers (ALFALFA-SDSS, CDM discrimination) had
            the lowest circularity, and it used to add that &ldquo;the empirical results stand regardless of whether
            Synchronism&apos;s theoretical framework is correct.&rdquo; That has not held up. The ALFALFA-SDSS test was never
            run as registered, and the &sigma;<sub>int</sub> result depends on the velocity definition by up to
            ~3&times;. The results that did survive as framework-independent are negative ones, like the local-density
            no-go and density-keyed unidentifiability. They are listed on{' '}
            <Link href="/for-researchers">For Researchers</Link>. <strong>Open question:</strong> which of those
            is worth writing up, and for whom?
          </p>
        </div>

        <h2>Submission Status</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          No manuscripts have been submitted externally. The roadmap represents internal
          readiness assessment. External peer review will be the real test.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/status-dashboard" className="btn-primary">
            Status Dashboard &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/publication-roadmap" />
    </>
  );
}
