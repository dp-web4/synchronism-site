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
      <ValidationBadge status="untested" label="2 Post-dictions, 6 Untested" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism&apos;s quantum claims are meaningless without testable predictions.
          The quantum arc (Sessions #228-237) derived specific equations that have since been
          checked against published experimental literature. Six additional protocols (Sessions #368-370)
          await testing.
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

        <h2>Post-dictions: Consistent with Published Results</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          Two results from the quantum arc match published experimental literature. <strong>Important
          caveat:</strong> these formulas were derived in January 2026 (Sessions #232-235). The confirming
          experiments were published in 2024-2025. This is <strong>post-diction</strong> &mdash; consistency
          with existing data, not a prior prediction. The formulas contain adjustable parameters
          (&#x03B3;, c) that were not fixed before seeing the data. Additionally, standard open quantum
          systems theory (Breuer &amp; Petruccione 2002) already accounts for correlated noise environments
          &mdash; these results are consistent with existing physics, not unique to Synchronism.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #f59e0b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: '#f59e0b', margin: 0 }}>Shared-Environment Decoherence Protection</h3>
              <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', borderRadius: '1rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>Post-diction</span>
            </div>
            <div className="equation" style={{ margin: '0.75rem 0 0.25rem', fontSize: '0.95rem' }}>
              &#x0393; = &#x03B3;&sup2;(1 &minus; c)
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '0.75rem' }}>
              Decoherence rate, where c = environmental noise correlation
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Entangled pairs in the same noise environment decohere slower than pairs in independent
              environments. <strong>PRL 2024</strong> reported 10&times; T&#x2082; improvement with c &asymp; 0.90.
              The formula predicts T&#x2082; improvement = 1/(1&minus;c) = 10&times;. Quantitative match.
              <strong> arXiv 2405.14685</strong> independently confirmed shared-bath dephasing reduction.
            </p>
            <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem' }}>
              <strong>Prior art:</strong> Correlated-noise protection of entanglement is well-established in
              open quantum systems theory (Viola, Knill &amp; Lloyd 1999; Breuer &amp; Petruccione 2002).
              The 1/(1&minus;c) scaling is a natural consequence of correlated dephasing models.
              The match confirms Synchronism is consistent with standard physics here, but does not demonstrate
              novel predictive power.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Kill criterion:</strong> If T&#x2082; does not scale as 1/(1&minus;c) across controlled
              noise correlations, the model fails. Source: Session #232.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid #f59e0b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: '#f59e0b', margin: 0 }}>Bell Nonlocality Freezing &amp; Revival</h3>
              <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', borderRadius: '1rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>Post-diction</span>
            </div>
            <div className="equation" style={{ margin: '0.75rem 0 0.25rem', fontSize: '0.95rem' }}>
              |S(t)| = S&#x2098;&#x2090;&#x2093; &times; e^(&minus;&#x0393;t), &emsp; c(d) = cos&sup2;(&pi;d/&lambda;&#x2080;)
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '0.75rem' }}>
              Bell violation decay with distance-dependent noise correlation
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              CHSH Bell violation decays exponentially but revives at specific distances
              determined by environmental geometry. <strong>arXiv 2508.07046</strong> (&ldquo;Geometry-Controlled
              Freezing and Revival of Bell Nonlocality&rdquo;) matches this pattern directly. The oscillatory
              revival at distance nodes is confirmed by multiple sources.
            </p>
            <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem' }}>
              <strong>Prior art:</strong> Non-monotonic Bell violation behavior in structured environments
              is predicted by standard quantum optics. The cos&sup2;(&pi;d/&lambda;&#x2080;) form is a
              standard standing-wave correlation function. Whether &lambda;&#x2080; is predicted from first
              principles or fitted post-hoc is the key question for evaluating novelty.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Kill criterion:</strong> If Bell violation decay is monotonic (no revival at distance
              nodes), the geometric correlation model fails. Source: Sessions #235-237.
            </p>
          </div>
        </div>

        <h2>The 6 Untested Protocols</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          Designed in Sessions #368-370. Each has a specific falsification criterion. None have been run.
        </p>

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
