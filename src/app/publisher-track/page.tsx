'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const manuscripts = [
  { name: 'ALFALFA-SDSS TFR Scatter', score: 0.97, status: 'Draft complete', venue: 'arXiv astro-ph' },
  { name: 'CDM Discrimination (σ_int)', score: 0.95, status: 'Draft complete', venue: 'arXiv astro-ph' },
  { name: 'SPARC Capstone', score: 0.92, status: 'Draft complete', venue: 'arXiv astro-ph' },
  { name: 'Dark Matter as Incomplete Decoherence', score: 0.88, status: 'v1 complete', venue: 'AASTeX 6.3' },
  { name: 'Chemistry γ Framework', score: 0.75, status: 'Outline', venue: 'TBD' },
  { name: 'Consciousness Threshold (C ≈ 0.50)', score: 0.60, status: 'Outline', venue: 'TBD' },
];

export default function PublisherTrack() {
  return (
    <>
      <Breadcrumbs currentPath="/publisher-track" />
      <h1>The Publisher Track</h1>
      <ValidationBadge status="superseded" label="Manuscript scores: February 2026 snapshot" />
      <div style={{ borderLeft: '3px solid #ef4444', background: 'rgba(239,68,68,0.06)', padding: '0.75rem 1rem', borderRadius: '0.375rem', margin: '1rem 0', fontSize: '0.92rem' }}>
        <strong>The manuscript scores on this page are a February 2026 snapshot, written before the audit, and have not been
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
          Synchronism tracks publication readiness for every potential manuscript using automated
          scoring. This ensures honest assessment of what&apos;s ready for external review and what
          still needs work.
        </p>

        <h2>Readiness Scoring</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Each manuscript is scored from 0.0 to 1.0 based on:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          <li><strong>Derivation completeness</strong> &mdash; are all parameters derived or honestly labeled as fitted?</li>
          <li><strong>Empirical validation</strong> &mdash; has the prediction been tested against data?</li>
          <li><strong>Failure documentation</strong> &mdash; are limitations and failures explicitly stated?</li>
          <li><strong>Kill criteria</strong> &mdash; are falsification conditions defined?</li>
          <li><strong>Circularity check</strong> &mdash; what percentage of the work is reparametrization vs. novelty?</li>
        </ul>

        <h2>Top Manuscripts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {manuscripts.map(m => (
            <div key={m.name} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '0.95rem' }}>{m.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                    {m.status} &nbsp;&bull;&nbsp; {m.venue}
                  </p>
                </div>
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: '1.1rem',
                  color: m.score >= 0.9 ? '#10b981' : m.score >= 0.7 ? 'var(--color-accent-blue)' : '#f59e0b',
                  fontWeight: 'bold',
                }}>
                  {m.score.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2>The Circularity Check</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Every manuscript must report its <strong>circularity percentage</strong> &mdash; how
            much of the result is known physics rewritten in Synchronism notation vs. genuinely
            novel prediction.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            Example: The ALFALFA-SDSS paper has only 8.8% circularity (very low). The 51% TFR
            scatter improvement is a genuine, testable claim. The dark matter paper has higher
            circularity because C(&#x03C1;) is partly a relabeling of existing parameters.
          </p>
        </div>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          No manuscripts have been submitted externally yet. Readiness scores are self-assessed.
          External peer review may reveal issues not caught by internal assessment.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/falsifiability" className="btn-primary">
            Next: Falsifiability &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/publisher-track" />
    </>
  );
}
