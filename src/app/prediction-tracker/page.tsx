'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

type Status = 'all' | 'validated' | 'supported' | 'untested' | 'failed';

const predictions = [
  { domain: 'Cosmology', name: 'SPARC rotation curves (175 galaxies)', status: 'validated' as const },
  { domain: 'Cosmology', name: 'ALFALFA-SDSS TFR scatter (14,585 galaxies)', status: 'validated' as const },
  { domain: 'Cosmology', name: 'CDM σ_int = 0.086 dex', status: 'validated' as const },
  { domain: 'Cosmology', name: 'a₀ = cH₀/(2π) derivation', status: 'supported' as const },
  { domain: 'Cosmology', name: 'Freeman\'s Law from ρ_crit', status: 'supported' as const },
  { domain: 'Cosmology', name: 'Dwarf galaxy DM dominance', status: 'supported' as const },
  { domain: 'Cosmology', name: 'BTFR exponent n ≈ 2.2', status: 'supported' as const },
  { domain: 'Cosmology', name: 'Environment-dependent RAR scatter', status: 'supported' as const },
  { domain: 'Cosmology', name: 'BAO coherence modulation (~10⁻⁴)', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Wide binary density dependence', status: 'untested' as const },
  { domain: 'Cosmology', name: 'GW speed–DM column correlation', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Cosmic interference patterns (λ ~ 500 Mpc)', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Void galaxies show higher DM fraction', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Fractal coherence bridge', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Sound velocity vs γ (r = 0.982)', status: 'validated' as const },
  { domain: 'Chemistry', name: 'Electronegativity vs γ (r = 0.979)', status: 'validated' as const },
  { domain: 'Chemistry', name: 'Bulk modulus vs γ (r > 0.95)', status: 'validated' as const },
  { domain: 'Chemistry', name: 'Thermal conductivity vs γ', status: 'validated' as const },
  { domain: 'Chemistry', name: 'η ≡ Abrikosov-Gor\'kov pair-breaking', status: 'validated' as const },
  { domain: 'Chemistry', name: 'Regime classification (89% accuracy)', status: 'supported' as const },
  { domain: 'Chemistry', name: 'Channel independence (γ_phonon ⊥ γ_spin)', status: 'supported' as const },
  { domain: 'Chemistry', name: 'Melting point prediction', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Critical exponents', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Hall coefficient vs γ', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Magnetic susceptibility vs γ', status: 'failed' as const },
  { domain: 'Consciousness', name: 'C ≈ 0.50 threshold (8-way convergence)', status: 'untested' as const },
  { domain: 'Consciousness', name: 'EEG anesthesia phase transition', status: 'untested' as const },
  { domain: 'Consciousness', name: 'Meditation coherence modulation', status: 'untested' as const },
  { domain: 'Consciousness', name: 'Circadian γ variation', status: 'untested' as const },
  { domain: 'Consciousness', name: 'Sleep-wake coherence discontinuity', status: 'untested' as const },
  { domain: 'Quantum', name: 'MRH crossing replaces collapse', status: 'untested' as const },
  { domain: 'Quantum', name: 'Born rule from coherence conservation', status: 'untested' as const },
  { domain: 'Quantum', name: 'QC coherence time scaling with γ_env', status: 'untested' as const },
];

const statusColors: Record<string, string> = {
  validated: '#10b981',
  supported: '#38bdf8',
  untested: '#f59e0b',
  failed: '#ef4444',
};

export default function PredictionTracker() {
  const [filter, setFilter] = useState<Status>('all');

  const filtered = filter === 'all' ? predictions : predictions.filter(p => p.status === filter);

  const counts = {
    validated: predictions.filter(p => p.status === 'validated').length,
    supported: predictions.filter(p => p.status === 'supported').length,
    untested: predictions.filter(p => p.status === 'untested').length,
    failed: predictions.filter(p => p.status === 'failed').length,
  };

  return (
    <>
      <Breadcrumbs currentPath="/prediction-tracker" />
      <h1>Prediction Tracker</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Status board for all tracked predictions. Filter by status to see what&apos;s been
          confirmed, what&apos;s still open, and what failed.
        </p>

        {/* Summary cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {(['validated', 'supported', 'untested', 'failed'] as const).map(s => (
            <button
              key={s}
              onClick={() => setFilter(filter === s ? 'all' : s)}
              className="card"
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                border: filter === s ? `2px solid ${statusColors[s]}` : undefined,
                background: filter === s ? 'rgba(255,255,255,0.03)' : undefined,
              }}
            >
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: statusColors[s] }}>{counts[s]}</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'capitalize' }}>{s}</p>
            </button>
          ))}
        </div>

        {/* Prediction list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {filtered.map((p, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.5rem 0.75rem',
              background: 'var(--color-dark-surface)',
              borderRadius: '6px',
              borderLeft: `3px solid ${statusColors[p.status]}`,
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: statusColors[p.status],
                flexShrink: 0,
              }} />
              <span style={{ flex: 1, fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                {p.name}
              </span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                {p.domain}
              </span>
            </div>
          ))}
        </div>

        {filter !== 'all' && (
          <button
            onClick={() => setFilter('all')}
            style={{
              marginTop: '1rem',
              background: 'transparent',
              color: 'var(--color-accent-violet)',
              border: '1px solid var(--color-accent-violet)',
              borderRadius: '4px',
              padding: '0.3rem 0.75rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
          >
            Show all ({predictions.length})
          </button>
        )}
      </section>

      <RelatedConcepts currentPath="/prediction-tracker" />
    </>
  );
}
