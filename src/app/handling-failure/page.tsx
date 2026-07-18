'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const failures = [
  { prediction: 'Hall Coefficient R_H vs γ', r: 'r = 0.001', session: '#102', lesson: 'Extensive ≠ intensive property' },
  { prediction: 'Magnetic Susceptibility', r: 'NONE', session: '#82', lesson: 'Spin coherence independent of phonon coherence' },
  { prediction: 'Coordination Number Z', r: 'r = 0.116', session: '#123', lesson: 'Topology ≠ coherence' },
  { prediction: 'Valence Electron Count', r: 'r = -0.161', session: '#125', lesson: 'Bonding capacity ≠ bonding quality' },
  { prediction: 'Melting Points', r: '53% error', session: 'multiple', lesson: 'Activated processes resist γ framework' },
  { prediction: 'Critical Exponents', r: '2× off', session: 'multiple', lesson: 'Mean-field fails at phase boundaries' },
];

export default function HandlingFailure() {
  return (
    <>
      <Breadcrumbs currentPath="/handling-failure" />
      <PathNav currentPath="/handling-failure" />
      <h1>How We Handle Failure</h1>
      <ValidationBadge status="validated" label="Methodology" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <blockquote style={{
          borderLeft: '3px solid #f59e0b',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          Documenting what doesn&apos;t work is as important as what does.
        </blockquote>
        <p>
          Most research frameworks bury their failures. Synchronism treats them as first-class
          results. A well-documented failure teaches more than a vaguely confirmed success.
        </p>

        <h2>Notable Failures</h2>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Prediction</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Result</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Session</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Lesson</th>
              </tr>
            </thead>
            <tbody>
              {failures.map(f => (
                <tr key={f.prediction} style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>{f.prediction}</td>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', color: '#ef4444' }}>{f.r}</td>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-muted)' }}>{f.session}</td>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>{f.lesson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>The Four Failure Regimes</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Session #616&apos;s chemistry audit revealed that failures cluster into four regimes,
          each teaching something different about where &#x03B3; applies:
        </p>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Regime 0: Neutral</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#x03B3; is simply irrelevant. Counting properties (coordination number, valence
              electrons) don&apos;t respond to coherence. You can&apos;t predict how many neighbors
              an atom has from how well-correlated they are.
            </p>
          </div>
          <div className="card">
            <h3>Regime 1: Coherence Helps</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              P &#x221D; 1/&#x03B3;. Propagation properties (conductivity, bulk modulus, T_c).
              This is where the framework succeeds. r &gt; 0.9 for many properties.
            </p>
          </div>
          <div className="card">
            <h3>Regime 2: Incoherence Helps</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              P &#x221D; &#x03B3;. Response properties (piezoelectricity, thermal expansion).
              The framework assumed &ldquo;coherence always good&rdquo; &mdash; wrong.
              Piezoelectricity d&#x2083;&#x2083; has r = 0.940 with <em>incoherence</em>.
            </p>
          </div>
          <div className="card">
            <h3>Regime 3: Barrier-Dominated</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              P &#x221D; exp(&minus;E/kT). Activated processes (thermionic emission, melting).
              &#x03B3; is negligible compared to thermal activation energy. This is why melting
              points fail at 53%.
            </p>
          </div>
        </div>

        <h2>Failure Taxonomy: What Kind of Wrong?</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
          The regimes above classify by <em>physics mechanism</em>. But failures also differ by <em>type</em> &mdash;
          and the type matters more than the count. A{' '}
          <Link href="/glossary#reparametrization-badge" style={{ color: 'var(--color-text-secondary)' }}>
            reparametrization
          </Link>{' '}
          (&ldquo;we said something already known&rdquo;)
          is fundamentally different from a directional error (&ldquo;we predicted the wrong sign&rdquo;).
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
          Terms used below:{' '}
          <Link href="/glossary#kill-criterion" style={{ color: 'var(--color-text-muted)' }}>kill criterion</Link>
          {' · '}
          <Link href="/glossary#post-diction" style={{ color: 'var(--color-text-muted)' }}>post-diction</Link>
          {' · '}
          <Link href="/glossary#reparametrization-badge" style={{ color: 'var(--color-text-muted)' }}>reparametrization</Link>
          {' · '}
          <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-text-muted)' }}>full badge taxonomy</Link>
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Category</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Count</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Implication</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-primary)' }}>Fixable?</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Process (reparametrization)</td>
                <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>~30+</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Methodology problem, not physics &mdash; &ldquo;predicted&rdquo; something already known</td>
                <td style={{ padding: '0.5rem', color: '#22c55e' }}>Yes</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Mean-field limitations</td>
                <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>~5</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Expected &mdash; single-parameter models can&apos;t capture crystal structure or critical exponents</td>
                <td style={{ padding: '0.5rem', color: '#f59e0b' }}>No (fundamental)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Directional errors</td>
                <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>2</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Fatal for specific claims &mdash; Bullet Cluster sign error, fractal bridge 0/7</td>
                <td style={{ padding: '0.5rem', color: '#ef4444' }}>No (conceptual)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Structural gaps</td>
                <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>4+</td>
                <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>Open problems &mdash; Lorentz invariance, Born rule circularity, Bell derivation</td>
                <td style={{ padding: '0.5rem', color: '#f59e0b' }}>In principle</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          The nature of the failures matters more than their count.
          The ~30 reparametrizations tell us the <em>research process</em> needs better literature checking, not that the physics is wrong.
          The ~5 mean-field limitations tell us exactly <em>where</em> C(&#961;) breaks down &mdash; and that boundary is informative.
          The 2 directional errors are the ones that actually falsify specific interpretations.
          The structural gaps are shared with most interpretations of quantum mechanics (Born rule circularity)
          or are open problems in quantum gravity (Lorentz invariance from discrete substrates).
        </p>

        <h2>The Anomalous Results</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Some results are more interesting than either success or failure:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Piezoelectricity d&#x2083;&#x2083;</strong>: r = 0.940 &mdash; but with incoherence, not coherence. Disorder helps.</li>
          <li><strong>Magnetic Anisotropy (RE)</strong>: r = &minus;0.434 &mdash; negative correlation. More coherence, less anisotropy.</li>
          <li><strong>Channel independence</strong>: &#x03B3;_phonon vs &#x03B3;_optical (r = 0.158), &#x03B3;_phonon vs &#x03B3;_spin (NONE). Different coherence channels are independent.</li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/research-philosophy" className="btn-primary">
            Research Philosophy
          </Link>
          <Link href="/chemistry-limitations" className="btn-secondary">
            Chemistry Limitations
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/handling-failure" />
    </>
  );
}
