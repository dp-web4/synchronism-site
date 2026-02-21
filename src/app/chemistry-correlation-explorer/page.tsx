'use client';

import { useState, useMemo } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

type SortKey = 'name' | 'r' | 'category';
type SortDir = 'asc' | 'desc';

const phenomena = [
  { name: 'Sound velocity', r: 0.982, category: 'Propagation', regime: 1, session: '#47' },
  { name: 'Electronegativity', r: 0.979, category: 'Bonding', regime: 1, session: '#62' },
  { name: 'Bulk modulus', r: 0.967, category: 'Mechanical', regime: 1, session: '#55' },
  { name: 'Thermal conductivity', r: 0.961, category: 'Transport', regime: 1, session: '#70' },
  { name: 'Electrical conductivity', r: 0.955, category: 'Transport', regime: 1, session: '#68' },
  { name: 'Debye temperature', r: 0.948, category: 'Thermal', regime: 1, session: '#78' },
  { name: 'Piezoelectricity d₃₃', r: 0.940, category: 'Response', regime: 2, session: '#110' },
  { name: 'Superconducting T_c', r: 0.923, category: 'Phase transition', regime: 1, session: '#95' },
  { name: 'Young\'s modulus', r: 0.912, category: 'Mechanical', regime: 1, session: '#58' },
  { name: 'Shear modulus', r: 0.901, category: 'Mechanical', regime: 1, session: '#59' },
  { name: 'Refractive index', r: 0.887, category: 'Optical', regime: 1, session: '#85' },
  { name: 'Seebeck coefficient', r: 0.834, category: 'Thermoelectric', regime: 1, session: '#92' },
  { name: 'Specific heat C_v', r: 0.756, category: 'Thermal', regime: 2, session: '#80' },
  { name: 'Thermal expansion', r: 0.723, category: 'Response', regime: 2, session: '#83' },
  { name: 'Boiling point', r: 0.681, category: 'Phase transition', regime: 3, session: '#100' },
  { name: 'Melting point', r: 0.470, category: 'Phase transition', regime: 3, session: '#98' },
  { name: 'Magnetic anisotropy (RE)', r: -0.434, category: 'Magnetic', regime: 2, session: '#130' },
  { name: 'SC penetration depth', r: 0.280, category: 'Superconductivity', regime: 1, session: '#105' },
  { name: 'Thermionic emission', r: 0.150, category: 'Barrier', regime: 3, session: '#115' },
  { name: 'Coordination number Z', r: 0.116, category: 'Topology', regime: 0, session: '#123' },
  { name: 'Hall coefficient R_H', r: 0.001, category: 'Transport', regime: 0, session: '#102' },
  { name: 'Valence electron count', r: -0.161, category: 'Counting', regime: 0, session: '#125' },
  { name: 'Magnetic susceptibility', r: 0.000, category: 'Magnetic', regime: 0, session: '#82' },
];

const regimeLabels: Record<number, { label: string; color: string }> = {
  0: { label: 'Neutral', color: 'var(--color-text-muted)' },
  1: { label: 'Coherence helps', color: '#10b981' },
  2: { label: 'Incoherence helps', color: '#f59e0b' },
  3: { label: 'Barrier-dominated', color: '#ef4444' },
};

function rColor(r: number): string {
  const abs = Math.abs(r);
  if (abs >= 0.9) return '#10b981';
  if (abs >= 0.7) return 'var(--color-accent-blue)';
  if (abs >= 0.4) return '#f59e0b';
  return '#ef4444';
}

export default function ChemistryCorrelationExplorer() {
  const [sortKey, setSortKey] = useState<SortKey>('r');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [regimeFilter, setRegimeFilter] = useState<number | null>(null);

  const sorted = useMemo(() => {
    let items = regimeFilter !== null
      ? phenomena.filter(p => p.regime === regimeFilter)
      : [...phenomena];

    items.sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'r') cmp = Math.abs(b.r) - Math.abs(a.r);
      else if (sortKey === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortKey === 'category') cmp = a.category.localeCompare(b.category);
      return sortDir === 'desc' ? cmp : -cmp;
    });
    return items;
  }, [sortKey, sortDir, regimeFilter]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('desc'); }
  };

  return (
    <>
      <Breadcrumbs currentPath="/chemistry-correlation-explorer" />
      <h1>Chemistry Correlation Explorer</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Browse the chemistry phenomena tested against &#x03B3;. Sort by correlation strength,
          filter by regime. This is a curated sample from 1,703 phenomena.
        </p>

        {/* Regime filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <button
            onClick={() => setRegimeFilter(null)}
            style={{
              background: regimeFilter === null ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
              color: regimeFilter === null ? '#fff' : 'var(--color-text-secondary)',
              border: '1px solid var(--color-dark-border)',
              borderRadius: '4px',
              padding: '0.25rem 0.6rem',
              cursor: 'pointer',
              fontSize: '0.8rem',
            }}
          >
            All ({phenomena.length})
          </button>
          {Object.entries(regimeLabels).map(([r, info]) => {
            const count = phenomena.filter(p => p.regime === parseInt(r)).length;
            return (
              <button
                key={r}
                onClick={() => setRegimeFilter(regimeFilter === parseInt(r) ? null : parseInt(r))}
                style={{
                  background: regimeFilter === parseInt(r) ? info.color : 'var(--color-dark-surface)',
                  color: regimeFilter === parseInt(r) ? '#fff' : info.color,
                  border: `1px solid ${info.color}`,
                  borderRadius: '4px',
                  padding: '0.25rem 0.6rem',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                }}
              >
                {info.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th onClick={() => toggleSort('name')} style={{ textAlign: 'left', padding: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
                  Property {sortKey === 'name' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th onClick={() => toggleSort('r')} style={{ textAlign: 'right', padding: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
                  r {sortKey === 'r' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th onClick={() => toggleSort('category')} style={{ textAlign: 'left', padding: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
                  Category {sortKey === 'category' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Regime</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map(p => (
                <tr key={p.name} style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>{p.name}</td>
                  <td style={{ textAlign: 'right', padding: '0.5rem', fontFamily: 'monospace', color: rColor(p.r), fontWeight: 'bold' }}>
                    {p.r > 0 ? '+' : ''}{p.r.toFixed(3)}
                  </td>
                  <td style={{ padding: '0.5rem', color: 'var(--color-text-muted)' }}>{p.category}</td>
                  <td style={{ padding: '0.5rem', color: regimeLabels[p.regime].color, fontSize: '0.8rem' }}>
                    {regimeLabels[p.regime].label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Showing {sorted.length} of 23 curated phenomena. Full dataset covers 1,703 phenomenon
          types across 2,671 chemistry sessions.
        </p>
      </section>

      <RelatedConcepts currentPath="/chemistry-correlation-explorer" />
    </>
  );
}
