'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function QuantumPredictions() {
  return (
    <>
      <Breadcrumbs currentPath="/quantum-predictions" />
      <h1>Quantum Predictions</h1>
      <ValidationBadge status="untested" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism&apos;s quantum claims are meaningless without testable predictions. Six
          experimental protocols were designed in Sessions #368-370, each with a specific
          falsification criterion. If the prediction fails, that aspect of the theory is wrong.
          No hedging, no post-hoc adjustment.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          Every prediction has a kill criterion. If the data says no, the theory dies on that point.
        </blockquote>

        <h2>The 6 Protocols</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: '#38bdf8', margin: 0 }}>1. EEG Phase Locking</h3>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>$150K &middot; 12 months</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Measure EEG phase-locking values during consciousness transitions (anesthesia
              induction/recovery). Synchronism predicts that phase coherence should track
              &#x03B3; &#x2248; 1 boundary crossing.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Falsification:</strong> If phase-locking values show no threshold behavior
              at the predicted coherence level, or if the transition is gradual rather than
              boundary-like, the &#x03B3; &#x2248; 1 consciousness prediction fails.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: '#22c55e', margin: 0 }}>2. Wide Binary &#x03B3;</h3>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>$0 &middot; 6 months</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Reanalyze Gaia DR3 wide binary star data for density-dependent anomalies in
              orbital dynamics. Synchronism predicts that wide binaries in low-density environments
              should show &#x03B3;-dependent deviations from Newtonian predictions.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Falsification:</strong> If wide binary anomalies show no correlation with
              local density environment, the density-dependent &#x03B3; prediction fails. Uses existing
              public Gaia DR3 data &mdash; no funding required.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: '#22c55e', margin: 0 }}>3. SPARC Environment</h3>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>$0 &middot; 6 weeks</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Test whether RAR scatter in the SPARC galaxy sample correlates with environmental
              density (NP2 environment classification). Synchronism predicts environment-dependent
              scatter because &#x03B3; depends on local N<sub>corr</sub>.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Falsification:</strong> If RAR scatter is environment-independent (no NP2
              correlation, p &gt; 0.05), the environment-dependent &#x03B3; prediction fails.
              Uses existing SPARC data.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: 'var(--color-accent-violet)', margin: 0 }}>4. Circadian &#x03B3;</h3>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>$50K &middot; 1 month</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Measure whether neural coherence follows circadian rhythms with &#x03B3;-predicted
              periodicity. Synchronism predicts that the effective &#x03B3; of neural ensembles
              should oscillate with sleep-wake cycles, tracking N<sub>corr</sub> changes
              in cortico-thalamic loops.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Falsification:</strong> If neural coherence measures show no circadian
              modulation matching &#x03B3; predictions, or if the periodicity doesn&apos;t match
              sleep architecture, the neural &#x03B3; model fails.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid #f59e0b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: '#f59e0b', margin: 0 }}>5. Minimal Cell &#x03B3;</h3>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>$200&ndash;500K &middot; 24 months</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Study whether minimal synthetic cells (JCVI-syn3.0 or similar) exhibit coherence
              signatures at the &#x03B3; &#x2248; 1 boundary. Synchronism predicts that the minimal
              viable cell operates near the quantum-classical boundary because molecular recognition
              requires coherent binding.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Falsification:</strong> If minimal cells show no measurable quantum coherence
              signatures, or if their operational regime is far from &#x03B3; &#x2248; 1, the
              biology-at-the-boundary prediction fails.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: '#38bdf8', margin: 0 }}>6. QC Coherence Time</h3>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>$5K &middot; 6 months</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Test whether qubit T<sub>2</sub> coherence times across different quantum computing
              platforms correlate with N<sub>corr</sub>-based predictions. Synchronism predicts
              that T<sub>2</sub> should scale inversely with the rate of environmental N<sub>corr</sub>
              coupling.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Falsification:</strong> If T<sub>2</sub> variations across platforms (trapped
              ion, superconducting, photonic) do not correlate with N<sub>corr</sub> environmental
              coupling rates, the decoherence-as-MRH-crossing model fails.
            </p>
          </div>
        </div>

        <h2>Cost Summary</h2>
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', color: '#22c55e', fontWeight: 600 }}>$0</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Protocols 2 &amp; 3: existing public data
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', color: 'var(--color-accent-violet)', fontWeight: 600 }}>$55K</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Protocols 4 &amp; 6: modest pilot studies
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', color: '#f59e0b', fontWeight: 600 }}>$350&ndash;650K</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Protocols 1 &amp; 5: full experimental programs
            </div>
          </div>
        </div>

        <h2>Where to Start</h2>
        <p>
          Protocols 2 (Wide Binary &#x03B3;) and 3 (SPARC Environment) require no funding and
          use existing public datasets. They are the logical starting point. If both fail, the
          more expensive protocols are likely not worth pursuing. If either succeeds, it provides
          motivation for the funded experiments.
        </p>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '1.5rem' }}>
          Full protocol specifications, data sources, and statistical power analyses are documented
          in Sessions #368-370 of the autonomous research archive.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/test-catalog" className="btn-primary">
            Full Test Catalog &rarr;
          </Link>
          <Link href="/measurement-without-observers" className="btn-secondary">
            Back: Measurement Without Observers
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/quantum-predictions" />
    </>
  );
}
