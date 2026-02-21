'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CosmicHorizons() {
  return (
    <>
      <Breadcrumbs currentPath="/cosmic-horizons" />
      <h1>Cosmic Horizons</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          What if the largest structures in cosmology &mdash; horizons, inflation, dark energy &mdash;
          are manifestations of the same coherence physics that operates at galactic and quantum
          scales? This is the most speculative extension of Synchronism, developed in the
          Cosmology Arc 2.0 (Sessions #332&ndash;335).
        </p>

        <h2>The Core Reinterpretation</h2>
        <p>
          Synchronism&apos;s{' '}
          <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>Markov Relevancy Horizon (MRH)</Link>{' '}
          defines the boundary beyond which information is causally irrelevant to a system.
          At quantum scales, the MRH governs decoherence. At galactic scales, it relates to the
          coherence threshold in rotation dynamics. The speculative leap: at cosmological scales,
          the MRH <strong>is</strong> the observable universe boundary.
        </p>

        <div className="grid-3" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#38bdf8' }}>Inflation</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Grid phase transition. The early universe underwent a coherence transition analogous
              to a crystallization event &mdash; an MRH reconfiguration at cosmological scale.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Dark Energy</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Residual vacuum tension. The accelerating expansion is the ongoing relaxation of
              the coherence field toward its ground state. Not a cosmological constant but a
              dynamic coherence effect.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#22c55e' }}>Observable Horizon</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              The edge of the observable universe IS our MRH. Beyond it, information is not merely
              unreachable &mdash; it is <em>irrelevant</em> to the coherence state of our local volume.
            </p>
          </div>
        </div>

        <h2>The Coherence Connection</h2>
        <EquationDisplay size="md" label="The Hubble parameter as coherence rate">
          H&#x2080; = 2&#x03C0;a&#x2080; / c
        </EquationDisplay>
        <p>
          This is the{' '}
          <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>MOND unification equation</Link>{' '}
          read backwards. If a&#x2080; emerges from H&#x2080;, then H&#x2080; can be understood as
          encoding the coherence transition rate of the universe. The expansion rate of the cosmos
          and the acceleration threshold for modified gravity are the same physical quantity viewed
          from different frames.
        </p>

        <h2>Cosmology Arc 2.0: Sessions #332&ndash;335</h2>
        <p>
          This speculative framework was developed and stress-tested across four sessions:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Session #332</strong>: Initial framing &mdash; cosmic horizon as MRH</li>
          <li><strong>Session #333</strong>: Inflation as grid phase transition, dimensional analysis checks</li>
          <li><strong>Session #334</strong>: Dark energy as residual vacuum coherence</li>
          <li><strong>Session #335</strong>: Internal consistency tests &mdash; 32/32 verified</li>
        </ul>
        <p>
          All 32 internal consistency checks passed: the framework does not contradict itself or
          the validated parts of Synchronism. But internal consistency is the <em>minimum</em>
          bar, not evidence.
        </p>

        <h2>What Would Test This</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3>BAO Modulation</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              If cosmic horizons are MRH boundaries, baryon acoustic oscillation peak positions
              should show density-dependent shifts. This is testable with DESI survey data.
            </p>
            <Link href="/cosmology-predictions" style={{ color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>
              See prediction details &rarr;
            </Link>
          </div>
          <div className="card">
            <h3>GW-DM Correlation</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Gravitational wave signals should correlate with dark matter halo predictions in
              specific ways if both emerge from the coherence field. Testable with LIGO/Virgo data.
            </p>
            <Link href="/cosmology-predictions" style={{ color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>
              See prediction details &rarr;
            </Link>
          </div>
        </div>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is genuinely speculative. The reinterpretations of inflation and dark energy have
          no independent empirical support beyond the validated galactic-scale results. The 32/32
          consistency tests demonstrate only that the framework is self-consistent, not that it
          describes reality. Standard &#x039B;CDM already explains the CMB, BAO, supernovae, and
          large-scale structure formation with high precision. Any alternative must match or exceed
          this explanatory power, and Synchronism has not attempted that confrontation at
          cosmological scales.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/wide-binaries" className="btn-primary">
            Next: Wide Binaries &rarr;
          </Link>
          <Link href="/cosmology-predictions" className="btn-secondary">
            Cosmology Predictions &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/cosmic-horizons" />
    </>
  );
}
