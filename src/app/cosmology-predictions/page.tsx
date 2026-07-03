'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function CosmologyPredictions() {
  return (
    <>
      <Breadcrumbs currentPath="/cosmology-predictions" />
      <h1>Cosmology Predictions</h1>
      <ValidationBadge status="failed" label="TEST-04a Disfavored 2.4σ — σ₈ Amplitude — Kill Triggered (Reframed 2026-07-02)" />

      {/* TEST-04a kill — most important cosmological result */}
      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '2px solid #ef4444',
          borderRadius: '0.5rem',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{ color: '#ef4444', marginTop: 0, marginBottom: '0.5rem' }}>
            TEST-04a: DESI DR1 fσ₈ — Post-hoc Retrodiction, Disfavored 2.4σ on σ₈ Amplitude (Reframed 2026-07-02)
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
            The framework&apos;s primary cosmological test compared against DESI DR1 full-shape (arXiv:2411.12021).
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', borderRadius: '0.375rem', padding: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Synchronism predicted</div>
              <div style={{ fontWeight: 700, color: '#ef4444' }}>fσ₈(z=0.51) ≈ 0.418</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>12% <em>below</em> ΛCDM; σ₈ ≈ 0.76</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', borderRadius: '0.375rem', padding: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>DESI DR1 full-shape (arXiv:2411.12021)</div>
              <div style={{ fontWeight: 700, color: '#ef4444' }}>LRG1 fσ₈/(fσ₈)_fid = 1.16 ± 0.13</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Above ΛCDM fiducial; σ₈ = 0.841 ± 0.034 — tension 2.4σ</div>
            </div>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Kill criterion (fσ₈&nbsp;&gt;&nbsp;0.46) triggered — LRG1 actual fσ₈ ≫ 0.46.
            Suppression not observed; data is ΛCDM-consistent. The LRG1 &ldquo;enhancement&rdquo; is a
            single ~1.2σ bin — the ensemble growth index (γ_growth ≈ 0.58 ± 0.11) leans mildly toward
            suppression, so the load-bearing failure is the σ₈ amplitude, not direction.
            A 2026-05-25 &ldquo;correction&rdquo; claiming kill not triggered was itself an error:
            0.4497&nbsp;±&nbsp;0.0548 belongs to arXiv:2512.03230 (DESI Peculiar Velocity Survey, z≈0.07),
            misattributed to the z=0.51 full-shape slot.
            Honest verdict: <strong>post-hoc retrodiction — disfavored 2.4σ on σ₈ amplitude; suppression mechanism not supported.</strong>
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>
            <strong>Post-hoc note:</strong> Session 107 was committed December 2025; DESI DR1 was
            published April 2024. The &ldquo;mechanism-class transferable contribution&rdquo; is NOT restored — it over-reaches for a post-hoc test.{' '}
            <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Full TEST-04a documentation →</Link>
          </p>
        </div>

        <p>
          After TEST-04a, the surviving cosmological predictions are those not yet tested by existing
          data. TEST-03 (RAR scatter) and TEST-04a (DESI RSD) have now both been adjudicated.
          The remaining predictions below await analysis.
        </p>

        <h2>Prediction 1: BAO Modulation (TEST-04 — Withdrawn)</h2>
        <div className="card" style={{ margin: '1rem 0', borderLeft: '3px solid #f59e0b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3>Density-Dependent BAO Peak Shifts</h3>
            <ValidationBadge status="failed" label="Withdrawn" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            The BAO peak position should shift slightly depending on local survey volume density.
            Overdense regions should show a compressed BAO scale; underdense regions an expanded scale.
            Predicted shift: ~10<sup>−4</sup>, roughly 600× smaller than the standard non-linear
            BAO shifts already measured by DESI (~0.5–1%).
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            <strong>Status — Withdrawn:</strong> Three independent failures: (1) the predicted amplitude
            is 600× smaller than standard non-linear BAO shifts, making it undetectable even at DESI
            precision; (2) the estimator (density-split cross-correlation) was never specified;
            (3) Session 107 explicitly contradicts TEST-04&apos;s derivation. The prediction is
            archived, not active.{' '}
            <Link href="/bao-coherence-modulation" style={{ color: '#f59e0b' }}>See derivation stub →</Link>
          </p>
        </div>

        <h2>Prediction 2: GW-DM Correlation (TEST, untested)</h2>
        <div className="card" style={{ margin: '1rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3>Gravitational Wave &ndash; Dark Matter Halo Correlation</h3>
            <ValidationBadge status="untested" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            If both gravitational dynamics and &ldquo;dark matter&rdquo; effects emerge from the
            coherence field, then GW merger rates, signal amplitudes, and waveform characteristics
            should show systematic correlations with the host galaxy&apos;s dark matter halo mass.
            Mergers in high-density environments should show subtly different dynamics than those in voids.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Kill criterion:</strong> with ~1,000 well-localized LIGO/Virgo/KAGRA events, a
            null correlation falsifies this prediction.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            <strong>GW170817 constraint:</strong> The binary neutron star merger GW170817 constrained
            |c<sub>GW</sub> − c|/c &lt; 10<sup>−15</sup>, killing TeVeS and most scalar-tensor theories.
            Synchronism does not introduce a tensor-vector-scalar structure and therefore preserves
            c<sub>GW</sub> = c by construction — it should not be killed by this constraint.
            However, an explicit statement that the coherence field has no derivative coupling to
            the metric at GW propagation scales has not been derived. This is an open gap.
          </p>
        </div>

        <h2>Prediction 3: Environment-Dependent RAR Scatter (TEST-03 — Kill Triggered)</h2>
        <div className="card" style={{ margin: '1rem 0', borderLeft: '3px solid #ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3>RAR Scatter Varies with Local Density</h3>
            <ValidationBadge status="failed" label="TEST-03 Kill Criterion Triggered" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            The intrinsic scatter in the Radial Acceleration Relation was predicted to depend on
            local galaxy environment. Tested on 14,585 ALFALFA-SDSS galaxies: p = 5 × 10<sup>−6</sup>
            environment detection, σ<sub>int</sub> = 0.086 dex.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            <strong>Kill criterion triggered:</strong> Pre-registered threshold was R² ≥ 0.20 (environment
            term must explain ≥20% of intrinsic RAR scatter). Achieved: R² = 0.14. The environment
            detection is real and statistically significant, but the effect size is below the
            pre-registered minimum to count as framework confirmation.{' '}
            <Link href="/rar-scatter" style={{ color: '#ef4444' }}>Full RAR scatter analysis →</Link>
          </p>
        </div>

        <h2>Summary Table</h2>
        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-dark-border)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Prediction</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Data Source</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)', background: 'rgba(245,158,11,0.04)' }}>
                <td style={{ padding: '0.75rem' }}>DESI RSD fσ₈ (TEST-04a)</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="failed" label="Disfavored 2.4σ — σ₈ Amplitude" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>DESI DR1</td>
                <td style={{ padding: '0.75rem', color: '#ef4444', fontSize: '0.85rem' }}>Post-hoc; kill triggered; σ₈=0.841 vs predicted 0.76 (2.4σ) — corrected 2026-05-26</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)', background: 'rgba(239,68,68,0.04)' }}>
                <td style={{ padding: '0.75rem' }}>RAR env. scatter (TEST-03)</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="failed" label="Kill Triggered" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>ALFALFA-SDSS</td>
                <td style={{ padding: '0.75rem', color: '#ef4444', fontSize: '0.85rem' }}>R²=0.14 &lt; 0.20 threshold</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.75rem' }}>BAO modulation (TEST-04)</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="failed" label="Withdrawn" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>DESI</td>
                <td style={{ padding: '0.75rem', color: '#f59e0b', fontSize: '0.85rem' }}>Amplitude 600× too small; estimator unspecified</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.75rem' }}>GW-DM correlation</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="untested" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>LIGO/Virgo/KAGRA</td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Awaiting ~1,000 localized events</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-dark-border)' }}>
                <td style={{ padding: '0.75rem' }}>Wide binary anomaly (TEST-02)</td>
                <td style={{ padding: '0.75rem' }}><ValidationBadge status="untested" label="Gaia DR3" /></td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-secondary)' }}>Gaia</td>
                <td style={{ padding: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Discriminating — ξ(ρ) functional form not yet specified</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What Remains Live</h2>
        <p>
          After TEST-03 and TEST-04a, the only live cosmological discriminator is TEST-02
          (wide binary density dependence). It is genuinely novel: standard MOND predicts a density-independent
          anomaly; Synchronism predicts it is stronger in denser stellar fields.
          <strong> But it is currently underspecified</strong> — the functional form ξ(ρ) for the
          density dependence has not been derived. Without ξ(ρ), any future Gaia result showing
          a non-uniform anomaly can be claimed as confirmation post-hoc.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          The framework needs to publish a specific ξ(ρ) before further Gaia analyses resolve
          the Chae (2023) vs Banik et al. (2024) disagreement. See{' '}
          <Link href="/wide-binaries" style={{ color: 'var(--color-accent-blue)' }}>Wide Binaries</Link>{' '}
          for the current state of the observational controversy.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/honest-assessment" className="btn-primary">
            Full Honest Assessment →
          </Link>
          <Link href="/tier-1-existing" className="btn-secondary">
            Tier 1 Tests →
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/cosmology-predictions" />
    </>
  );
}
