'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const predictions = [
  { domain: 'Cosmology', validated: 3, supported: 5, untested: 12, failed: 1 },
  { domain: 'Chemistry', validated: 17, supported: 5, untested: 2, failed: 4 },
  { domain: 'Consciousness', validated: 0, supported: 0, untested: 34, failed: 0 },
  { domain: 'Quantum', validated: 0, supported: 0, untested: 6, failed: 0 },
  { domain: 'Methodology', validated: 2, supported: 1, untested: 0, failed: 0 },
];

const milestones = [
  { date: 'Nov 2025', event: 'Session #1 — Coherence function first derived', status: 'complete' },
  { date: 'Dec 2025', event: 'SPARC capstone — 175 galaxies analyzed', status: 'complete' },
  { date: 'Jan 2026', event: 'Chemistry track — 1,703 phenomena validated', status: 'complete' },
  { date: 'Jan 2026', event: 'ALFALFA-SDSS — 14,585 galaxy external validation', status: 'complete' },
  { date: 'Feb 2026', event: 'Session #616 — Full audit, all tracks reparametrized', status: 'complete' },
  { date: 'Feb 2026', event: 'Test catalog — 24 experiments defined', status: 'complete' },
  { date: 'TBD', event: 'Tier 1 tests — BAO, wide binary, SPARC environment', status: 'pending' },
  { date: 'TBD', event: 'First external submission (ALFALFA-SDSS TFR)', status: 'pending' },
  { date: 'TBD', event: 'Tier 2 — EEG anesthesia pilot ($150K)', status: 'pending' },
];

export default function StatusDashboard() {
  return (
    <>
      <Breadcrumbs currentPath="/status-dashboard" />
      <h1>Status Dashboard</h1>
      <ValidationBadge status="validated" label="Current as of Feb 2026" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <h2>Prediction Outcomes by Domain</h2>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Domain</th>
                <th style={{ textAlign: 'center', padding: '0.5rem', color: '#10b981' }}>Validated</th>
                <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--color-accent-blue)' }}>Supported</th>
                <th style={{ textAlign: 'center', padding: '0.5rem', color: '#f59e0b' }}>Untested</th>
                <th style={{ textAlign: 'center', padding: '0.5rem', color: '#ef4444' }}>Failed</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map(p => (
                <tr key={p.domain} style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-primary)' }}>{p.domain}</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: p.validated > 0 ? '#10b981' : 'var(--color-text-muted)' }}>{p.validated}</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: p.supported > 0 ? 'var(--color-accent-blue)' : 'var(--color-text-muted)' }}>{p.supported}</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: p.untested > 0 ? '#f59e0b' : 'var(--color-text-muted)' }}>{p.untested}</td>
                  <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: p.failed > 0 ? '#ef4444' : 'var(--color-text-muted)' }}>{p.failed}</td>
                </tr>
              ))}
              <tr style={{ borderTop: '2px solid var(--color-dark-border)', fontWeight: 'bold' }}>
                <td style={{ padding: '0.5rem' }}>Total</td>
                <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: '#10b981' }}>22</td>
                <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: 'var(--color-accent-blue)' }}>11</td>
                <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: '#f59e0b' }}>54</td>
                <td style={{ textAlign: 'center', padding: '0.5rem', fontFamily: 'monospace', color: '#ef4444' }}>5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Summary</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>92</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Total Predictions</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#10b981' }}>36%</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Validated/Supported</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#f59e0b' }}>59%</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Untested</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#ef4444' }}>5%</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Failed</p>
          </div>
        </div>

        <h2>Research Timeline</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                minWidth: '5rem',
                textAlign: 'right',
              }}>
                {m.date}
              </span>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: m.status === 'complete' ? '#10b981' : '#f59e0b',
                flexShrink: 0,
                marginTop: '0.4rem',
              }} />
              <span style={{
                color: m.status === 'complete' ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
                fontSize: '0.9rem',
              }}>
                {m.event}
              </span>
            </div>
          ))}
        </div>

        <h2>The Honest Verdict</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            59% of predictions are untested. The &ldquo;validated&rdquo; chemistry predictions are
            mostly mathematical consistency checks, not novel predictions. The real test is ahead:
            Tier 1 experiments using existing data. Until those run, Synchronism is a framework
            with interesting notation, some useful results, and a lot of open questions.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/honest-assessment" className="btn-primary">
            Honest Assessment
          </Link>
          <Link href="/test-catalog" className="btn-secondary">
            Test Catalog
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/status-dashboard" />
    </>
  );
}
