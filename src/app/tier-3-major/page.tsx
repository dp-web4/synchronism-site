'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import type { ReactNode } from 'react';

const linkStyle = { color: 'var(--color-accent-blue)' };
const noteStyle = { color: 'var(--color-text-muted)' };
const CORRECTED = <em style={noteStyle}> (corrected 2026-09-14, explorer finding 2026-09-12)</em>;

type Tier3Test = {
  id: string;
  name: string;
  cost: string;
  time: string;
  facility: string;
  prediction: string;
  kill: string;
  /** Claimed distinguishing power, for cards that have no adjudication elsewhere on the site. */
  power?: string;
  /** Current verdict, inherited from the page that holds it. Replaces `power` once one exists. */
  verdict?: ReactNode;
};

const tests: Tier3Test[] = [
  {
    id: 'TEST-15',
    name: 'GW Speed–DM Column Correlation',
    cost: '$1M–$5M',
    time: '3–5 years',
    facility: 'LIGO O4/O5 + multi-messenger follow-up',
    prediction: 'Gravitational wave arrival time correlates with dark matter column density along line of sight',
    kill: 'No correlation at 10⁻¹⁶ level after 20+ multi-messenger events',
    verdict: (
      <>
        <strong>Unreachable / monitoring-only.</strong> The kill criterion (a null at 10⁻¹⁶) sits an order of
        magnitude below the best bound ever achieved (GW170817, |Δv/v| ≲ 10⁻¹⁵), so it can never fire. The
        framework predicts no positive signal, so GW170817 was passed vacuously. See{' '}
        <Link href="/falsifiability" style={linkStyle}>Falsifiability</Link> and{' '}
        <Link href="/top-5-tests" style={linkStyle}>Decisive Tests</Link>.{CORRECTED}
      </>
    ),
  },
  {
    id: 'TEST-16',
    name: 'Controlled Decoherence Cascade',
    cost: '$2M–$5M',
    time: '2–3 years',
    facility: 'Quantum optics lab with precision environment control',
    prediction: 'Decoherence shows discrete steps at MRH boundaries, not continuous decay',
    kill: 'Decoherence is perfectly smooth at all measured timescales',
    verdict: (
      <>
        <strong>Unrunnable as stated.</strong> The MRH boundary is under-determined: where it falls depends on a
        choice the framework never states, so there is no boundary to look for steps at. See{' '}
        <Link href="/mrh" style={linkStyle}>MRH</Link>.{CORRECTED}
      </>
    ),
  },
  {
    id: 'TEST-17',
    name: 'Galaxy Cluster γ Mapping',
    cost: '$1M–$3M',
    time: '2–4 years',
    facility: 'X-ray + optical survey telescopes',
    prediction: 'Cluster-scale γ shows characteristic profile: γ ≈ 2 at outskirts, γ < 1 in ICM cores',
    kill: 'No radial γ gradient in cluster profiles',
    verdict: (
      <>
        <strong>Closed upstream.</strong> Reading a γ(r) profile off cluster data needs a bridge from C(ρ) to
        apparent mass. All four bridges tried on Coma failed (2026-05-28): two overshoot by 10⁴, one collapses to
        Newtonian, and one is capped at ≤2 against an observed 4.6. See{' '}
        <Link href="/tier-1-existing#CLUSTER-SCALE" style={linkStyle}>Cluster Scale</Link>.{CORRECTED}
      </>
    ),
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
    verdict: (
      <>
        <strong>Unrunnable as stated.</strong> Predictions keyed to C ≈ 0.50 inherit the untestable-as-stated
        verdict, because no measurement maps to C. See{' '}
        <Link href="/consciousness-threshold" style={linkStyle}>Consciousness Threshold</Link>.{CORRECTED}
      </>
    ),
  },
  {
    id: 'TEST-20',
    name: 'Void Galaxy Rotation Curves',
    cost: 'not fundable as proposed',
    time: 'MOND+EFE branch measured 2021',
    facility: 'Radio telescope time (resolved HI rotation curves in voids); proposed at $1M–$3M, 2–3 years',
    prediction: 'Void galaxies show higher DM fraction than cluster galaxies at same M_bar',
    kill: 'DM fraction independent of cosmic environment',
    verdict: (
      <>
        <strong>Self-eliminating-or-tie, and already executed by others.</strong> The two frameworks do not
        predict the same thing. On the SPARC mass models, at the environmental contrast SPARC actually spans, the
        density-keyed framework predicts a void-to-overdense change in DM fraction of Δf<sub>DM</sub> ≈
        1.3×10⁻⁵ (low-g median, best case over knees and γ). MOND+EFE predicts 3.2×10⁻³, about 255× larger.
        Under the framework&apos;s acceleration keying C(a), the prediction is identically zero, since
        g<sub>bar</sub> is held fixed. A 3σ stacked detection of the framework&apos;s signal would need
        ~1.4×10⁸ resolved HI rotation curves, against ~2.1×10³ for MOND+EFE. No outcome selects the
        framework, the same class as TEST-02. The measurement has also been made: Chae et al. 2021
        (arXiv:2109.04745) located the SPARC galaxies in the cosmic web and found the EFE at &gt;4σ. That
        detection is contested: Paranjape &amp; Sheth 2022 (MNRAS 517, 130) show an EFE-like signal is generically
        expected in &Lambda;CDM; Freundlich et al. 2022 (A&amp;A 658, A26) find no EFE in Coma-cluster ultra-diffuse
        galaxies, a different sample; a 2025 re-analysis (Sargent et al., arXiv:2511.03839) calls it inconclusive. This is{' '}
        <strong>not</strong> a seventh refutation, and the count stays at 6. See{' '}
        <Link href="/tier-1-existing#TEST-05" style={linkStyle}>TEST-05</Link> for the lever-magnitude
        adjudication.{CORRECTED}
      </>
    ),
  },
  {
    id: 'TEST-21',
    name: 'BAO Fine Structure with Euclid',
    cost: '$2M–$5M (analysis grant)',
    time: '3–5 years',
    facility: 'Euclid mission data',
    prediction: 'BAO peak shows fine structure (sub-peaks) from coherence interference',
    kill: 'BAO peak is smooth Gaussian to 10⁻⁵ level in Euclid data',
    power: 'EXPLORATORY — no derived amplitude exists. Without a predicted sub-peak amplitude, any non-detection is consistent with "amplitude too small." Demote to exploratory until amplitude is derived. (Same standard applied to TEST-07 — 500 Mpc oscillation demoted for missing amplitude.)',
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

        <div style={{
          background: 'rgba(239, 68, 68, 0.07)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Protocol status (2026-09-14):</strong>{' '}
          Any experiment, in any tier, whose outcome depends on measuring C, γ, N<sub>corr</sub> or an MRH
          boundary has no operational measurement protocol yet. It is unrunnable as stated. On this page that
          covers TEST-16, TEST-17 and TEST-19. The cards below carry the current verdict where one exists
          elsewhere on the site.{' '}
          <Link href="/test-catalog" style={{ color: '#ef4444' }}>See the Test Roadmap &rarr;</Link>
        </div>

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
              {t.verdict ? (
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
                  <strong style={{ color: 'var(--color-accent-blue)' }}>Current verdict:</strong> {t.verdict}
                </p>
              ) : (
                <p style={{ color: 'var(--color-accent-blue)', fontSize: '0.8rem' }}>
                  Distinguishing power: {t.power}
                </p>
              )}
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
