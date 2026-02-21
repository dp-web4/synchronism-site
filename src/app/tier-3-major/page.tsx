'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tests = [
  {
    id: 'TEST-15',
    name: 'GW Speed–DM Column Correlation',
    cost: '$1M–$5M',
    time: '3–5 years',
    facility: 'LIGO O4/O5 + multi-messenger follow-up',
    prediction: 'Gravitational wave arrival time correlates with dark matter column density along line of sight',
    kill: 'No correlation at 10⁻¹⁶ level after 20+ multi-messenger events',
    power: 'VERY HIGH — GR predicts exactly zero correlation',
  },
  {
    id: 'TEST-16',
    name: 'Controlled Decoherence Cascade',
    cost: '$2M–$5M',
    time: '2–3 years',
    facility: 'Quantum optics lab with precision environment control',
    prediction: 'Decoherence shows discrete steps at MRH boundaries, not continuous decay',
    kill: 'Decoherence is perfectly smooth at all measured timescales',
    power: 'HIGH — standard decoherence theory predicts smooth decay',
  },
  {
    id: 'TEST-17',
    name: 'Galaxy Cluster γ Mapping',
    cost: '$1M–$3M',
    time: '2–4 years',
    facility: 'X-ray + optical survey telescopes',
    prediction: 'Cluster-scale γ shows characteristic profile: γ ≈ 2 at outskirts, γ < 1 in ICM cores',
    kill: 'No radial γ gradient in cluster profiles',
    power: 'MODERATE — tests scale invariance of γ at cluster scales',
  },
  {
    id: 'TEST-18',
    name: 'Superconductor η Optimization',
    cost: '$500K–$2M',
    time: '2 years',
    facility: 'Materials science lab + cryogenics',
    prediction: 'New materials with optimized η (pair-breaking efficiency) show enhanced T_c',
    kill: 'η optimization produces no T_c improvement over random search',
    power: 'MODERATE — tests whether η is useful as design parameter',
  },
  {
    id: 'TEST-19',
    name: 'Multi-Scale Neural Coherence',
    cost: '$3M–$8M',
    time: '3–5 years',
    facility: 'Neuropixels + high-density EEG + fMRI',
    prediction: 'Neural coherence shows scale-free structure with phase transition at C ≈ 0.50',
    kill: 'Neural coherence shows no scale-free structure; threshold varies >50% across subjects',
    power: 'HIGH — tests consciousness framework directly',
  },
  {
    id: 'TEST-20',
    name: 'Void Galaxy Rotation Curves',
    cost: '$1M–$3M',
    time: '2–3 years',
    facility: 'Radio telescope time (resolved HI rotation curves in voids)',
    prediction: 'Void galaxies show higher DM fraction than cluster galaxies at same M_bar',
    kill: 'DM fraction independent of cosmic environment',
    power: 'HIGH — tests environment dependence (novel prediction)',
  },
  {
    id: 'TEST-21',
    name: 'BAO Fine Structure with Euclid',
    cost: '$2M–$5M (analysis grant)',
    time: '3–5 years',
    facility: 'Euclid mission data',
    prediction: 'BAO peak shows fine structure (sub-peaks) from coherence interference',
    kill: 'BAO peak is smooth Gaussian to 10⁻⁵ level in Euclid data',
    power: 'VERY HIGH — unique to Synchronism, no other framework predicts this',
  },
];

export default function Tier3Major() {
  return (
    <>
      <Breadcrumbs currentPath="/tier-3-major" />
      <h1>Tier 3: Major Experiments</h1>
      <ValidationBadge status="untested" label="7 Tests, $1M–$10M" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          These experiments require dedicated facilities, significant funding, and multi-year
          timelines. They test the deepest predictions &mdash; the ones that would, if confirmed,
          represent genuinely new physics.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {tests.map(t => (
            <div key={t.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.95rem' }}>{t.id}: {t.name}</h3>
                <span style={{ color: 'var(--color-accent-violet)', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {t.cost}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                {t.facility} &nbsp;&bull;&nbsp; {t.time}
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Prediction:</strong> {t.prediction}
              </p>
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Kill:</strong> {t.kill}
              </p>
              <p style={{ color: 'var(--color-accent-blue)', fontSize: '0.8rem' }}>
                Distinguishing power: {t.power}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tier-4-frontier" className="btn-primary">
            Tier 4: Frontier &rarr;
          </Link>
          <Link href="/tier-2-pilots" className="btn-secondary">
            &larr; Tier 2
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/tier-3-major" />
    </>
  );
}
