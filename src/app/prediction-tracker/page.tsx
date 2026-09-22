'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

// 2026-09-22: 'validated' / 'supported' retired from this board (deprecated badges, dp 2026-05-28); rows re-badged per PREDICTIONS.md.
type Status = 'all' | 'untested' | 'failed' | 'reparametrization' | 'speculative' | 'audited-negative';

const predictions = [
  { domain: 'Cosmology', name: 'SPARC rotation curves (175 galaxies) — fit only with γ free and keyed on acceleration, where C(ρ) becomes MOND\'s interpolating function (ledger Bucket 3)', status: 'reparametrization' as const },
  { domain: 'Cosmology', name: 'RAR transition shape with γ pinned at 2 (the framework\'s registered value) — lost to MOND on SPARC, ΔBIC = +184 (ledger Bucket 2)', status: 'failed' as const },
  { domain: 'Cosmology', name: 'ALFALFA-SDSS TFR scatter (14,585 galaxies) — registered test (TEST-03) never run; the substitute SPARC environment run (TEST-03s) failed', status: 'untested' as const },
  { domain: 'Cosmology', name: 'CDM σ_int = 0.086 dex (CDM-consistent, z=+0.5 — not a beat-CDM result)', status: 'reparametrization' as const },
  { domain: 'Cosmology', name: 'a₀ = cH₀/(2π) — restates Milgrom\'s 1983 a₀ ≈ cH₀/6 coincidence; the named calculation gives cH₀/2 (ledger Bucket 3)', status: 'reparametrization' as const },
  { domain: 'Cosmology', name: 'Freeman\'s Law from ρ_crit — Σ₀ = a₀/(2πG) is Milgrom\'s MOND surface density re-derived', status: 'reparametrization' as const },
  { domain: 'Cosmology', name: 'Dwarf galaxy DM dominance (TEST-10 — executed 2026-07-15: 69% of SPARC exceeds the framework\'s 68.5% DM-fraction ceiling)', status: 'failed' as const },
  { domain: 'Cosmology', name: 'BTFR slope (TEST-09 — executed 2026-07-14: kill criterion fired, 3.3σ; bounded boost has no deep-MOND regime)', status: 'failed' as const },
  { domain: 'Cosmology', name: 'Environment-dependent RAR scatter (registered run executed 2026-07-14: r²=0.0001 vs registered >20% — refuted; MOND+EFE tie dissolved 2026-07-15)', status: 'failed' as const },
  { domain: 'Cosmology', name: 'BAO coherence modulation (~10⁻⁴)', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Wide binary density dependence', status: 'untested' as const },
  { domain: 'Cosmology', name: 'GW speed–DM column correlation', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Cosmic interference patterns (λ ~ 500 Mpc)', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Void galaxies show higher DM fraction', status: 'untested' as const },
  { domain: 'Cosmology', name: 'Fractal coherence bridge', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Sound velocity vs γ (r = 0.982) — a 2-parameter polynomial in atomic number Z matches the chemistry correlations as a set within |Δr| ≤ 0.07 (per-row null not computed)', status: 'reparametrization' as const },
  { domain: 'Chemistry', name: 'Electronegativity vs γ (r = 0.979) — same set-level Z-polynomial null applies', status: 'reparametrization' as const },
  { domain: 'Chemistry', name: 'Bulk modulus vs γ (r > 0.95) — same Z-polynomial null; tied to sound velocity by elasticity, so not an independent test', status: 'reparametrization' as const },
  { domain: 'Chemistry', name: 'Thermal conductivity vs γ — same Z-polynomial null applies', status: 'reparametrization' as const },
  { domain: 'Chemistry', name: 'η ≡ Abrikosov-Gor\'kov pair-breaking (1960) — a useful reframe, not a new prediction (ledger Bucket 3)', status: 'reparametrization' as const },
  { domain: 'Chemistry', name: 'Regime classification (89%) — about 86% of it restates the Debye model θ_D (ledger Bucket 3)', status: 'reparametrization' as const },
  { domain: 'Chemistry', name: 'Channel independence (γ_phonon ⊥ γ_spin) — a post-hoc observation, demoted in the research-outputs audit; it is also why one γ per material cannot capture multi-channel behaviour', status: 'audited-negative' as const },
  { domain: 'Chemistry', name: 'Melting point prediction', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Critical exponents', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Hall coefficient vs γ', status: 'failed' as const },
  { domain: 'Chemistry', name: 'Magnetic susceptibility vs γ', status: 'failed' as const },
  { domain: 'Consciousness', name: 'C ≈ 0.50 threshold — untestable as stated (no measurement maps to C; the one cited test, gnosis-research S63, measured SNARC salience — a different variable); neural predictions inherit the verdict', status: 'speculative' as const },
  { domain: 'Consciousness', name: 'EEG anesthesia phase transition', status: 'untested' as const },
  { domain: 'Consciousness', name: 'Meditation coherence modulation', status: 'untested' as const },
  { domain: 'Consciousness', name: 'Circadian γ variation', status: 'untested' as const },
  { domain: 'Consciousness', name: 'Sleep-wake coherence discontinuity', status: 'untested' as const },
  { domain: 'Quantum', name: 'MRH crossing replaces collapse', status: 'untested' as const },
  { domain: 'Quantum', name: 'Born rule from coherence conservation', status: 'untested' as const },
  { domain: 'Quantum', name: 'QC coherence time scaling with γ_env', status: 'untested' as const },
];

const statusColors: Record<string, string> = {
  untested: '#f59e0b',
  failed: '#ef4444',
  reparametrization: '#a78bfa',
  speculative: '#9ca3af',
  'audited-negative': '#fb7185',
};

export default function PredictionTracker() {
  const [filter, setFilter] = useState<Status>('all');

  const filtered = filter === 'all' ? predictions : predictions.filter(p => p.status === filter);

  const counts = {
    untested: predictions.filter(p => p.status === 'untested').length,
    failed: predictions.filter(p => p.status === 'failed').length,
    reparametrization: predictions.filter(p => p.status === 'reparametrization').length,
    speculative: predictions.filter(p => p.status === 'speculative').length,
    'audited-negative': predictions.filter(p => p.status === 'audited-negative').length,
  };

  return (
    <>
      <Breadcrumbs currentPath="/prediction-tracker" />
      <h1>Prediction Tracker</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Status board for all tracked predictions. Filter by status to see what&apos;s still open,
          what failed, and what turned out to restate known physics. Nothing on this board is
          confirmed: the canonical ledger counts <strong>0 confirmed novel predictions</strong>. The
          &ldquo;Validated&rdquo; and &ldquo;Supported&rdquo; categories this board used to show were retired on
          2026-09-22 (deprecated labels); those rows are re-badged below.
        </p>

        {/* Summary cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {(['untested', 'failed', 'reparametrization', 'speculative', 'audited-negative'] as const).map(s => (
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
