'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function BaoCoherenceModulation() {
  return (
    <>
      <Breadcrumbs currentPath="/bao-coherence-modulation" />
      <h1>BAO Coherence Modulation (TEST-04) — Withdrawn</h1>
      <ValidationBadge status="failed" label="Withdrawn — 2026-05-04" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{
          background: 'rgba(239, 68, 68, 0.10)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}>
          <h3 style={{ color: '#ef4444', marginBottom: '0.5rem', marginTop: 0 }}>TEST-04 Withdrawn (2026-05-04)</h3>
          <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 0.75rem' }}>
            Three converging failures make this test indefensible as stated:
          </p>
          <ol style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.5rem', margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Contradicted by Session 107:</strong> The framework&apos;s own DESI forecast (Session 107,
              Dec 2025) explicitly states BAO matches &Lambda;CDM at 0.0% in all five DESI redshift bins.
              The sound horizon is set at z&nbsp;&#x223C;&nbsp;1100 when C&nbsp;&#x2248;&nbsp;1 everywhere &mdash; no
              modification is possible. &ldquo;BAO perfectly consistent with &Lambda;CDM&rdquo; is one of the
              framework&apos;s own predicted smoking-gun signatures.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>No session-level derivation:</strong> The 10<sup>&minus;4</sup> number appears only in
              two compilation documents that drifted from the underlying sessions. No session derives it.
              The stated physical basis (&ldquo;BAO forms at recombination when &rho;/&rho;<sub>crit</sub> transitions
              rapidly&rdquo;) is contradicted by Session 225 and 204, which show C&nbsp;=&nbsp;0.9995 at recombination
              &mdash; essentially saturated, not transitioning.
            </li>
            <li>
              <strong>Buried under standard physics:</strong> Environment-dependent BAO shifts are an
              active subfield of standard cosmology. Achitouv et al. (2018) found ~6&times;10<sup>&minus;2</sup>
              shifts in SDSS &mdash; 600&times; larger than the proposed Synchronism signal. The kill criterion
              (10<sup>&minus;5</sup>) is 3000&times; below DESI Y3&apos;s best precision (~0.3%).
            </li>
          </ol>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', marginBottom: 0 }}>
            Replacement: <strong>TEST-04a (DESI RSD f&#x03C3;&#x2088; Suppression)</strong> &mdash; the test Session 107
            actually predicts: f&#x03C3;&#x2088;(z=0.51)&nbsp;&#x2248;&nbsp;0.418, a 12% deviation from &Lambda;CDM
            (0.474), testable with already-published DESI DR1 LRG data.
            See <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 catalog</Link>.
          </p>
        </div>

        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Historical record below.</strong> This page is preserved as documentation of the eighth
            site-archive drift instance (2026-05-04). The prediction appeared in compilation documents
            that were not checked against underlying session derivations. The page is kept for transparency;
            the prediction is withdrawn.
          </p>
        </div>

        <h2>The Prediction</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Synchronism predicts that BAO (Baryon Acoustic Oscillation) peak positions shift by
          approximately 10<sup>−4</sup> between high-density and low-density large-scale
          environments. Standard ΛCDM predicts no such density-dependent shift — the BAO scale
          is set at recombination and propagates identically through all environments.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Kill criterion: if the BAO peak is identical to 10<sup>−5</sup> precision across density
          environments, the prediction is falsified.
        </p>

        <div className="card" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.9rem' }}>
            <strong>Measurement caveat (Pass 4 review, 2026-04-29):</strong> DESI Y3 precision on
            isotropic BAO α is ~0.5–1%, not 10<sup>−5</sup>. A 10<sup>−4</sup> density-split
            modulation requires a dedicated cross-correlation estimator — split the sample by
            environmental density (e.g., Voronoi tessellation), compute BAO peaks per bin, look
            for a fractional shift. The kill criterion as stated (10<sup>−5</sup> precision) is
            not achievable with any current dataset. The achievable precision on a density-split
            estimator from DESI Y3 is likely ~10<sup>−3</sup>. This page needs to be updated
            when the estimator is specified.
          </p>
        </div>

        <h2>Why This Prediction Follows from the Framework</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          In Synchronism, the coherence function C(ρ) is density-dependent. High-density
          environments have higher C(ρ), meaning correlations persist to longer scales. The
          BAO feature is imprinted at a scale set by the sound horizon at recombination, but
          the <em>apparent</em> peak position in a survey depends on how coherence modulates
          the two-point correlation function in the clustering regime.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Qualitatively: in denser environments (galaxy clusters, filaments), C(ρ) is higher,
          meaning the coherence length extends further, which should slightly shift the BAO
          peak outward. In voids, C(ρ) is lower, the coherence length is shorter, and the
          apparent peak position should shift inward.
        </p>

        <h2>What Is Missing (the open derivation)</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The qualitative argument above does not produce the number 10<sup>−4</sup>. To get
          there, we need:
        </p>
        <ol style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>
            A quantitative model of how C(ρ) modifies the two-point correlation function ξ(r).
            This requires either a perturbation theory calculation or an effective description
            of how coherence modifies the matter power spectrum.
          </li>
          <li>
            A mapping from C(ρ) density-dependence to BAO peak displacement Δr/r_BAO. The
            10<sup>−4</sup> number is the prediction — but it currently has no derivation. If
            it is an order-of-magnitude estimate (e.g., from the magnitude of C(ρ) variation
            between void and filament), that reasoning should be shown explicitly.
          </li>
          <li>
            A specification of the observational estimator: which density proxy, what bin
            boundaries, what cross-correlation statistic, what the expected signal-to-noise
            is in DESI Y3.
          </li>
        </ol>

        <p style={{ color: 'var(--color-text-secondary)' }}>
          Until the number 10<sup>−4</sup> is derived (not assumed), this prediction is
          an exploratory hypothesis, not a sharp falsifier. The prediction badged above
          reflects that status honestly.
        </p>

        <h2>Why It Matters</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          TEST-04 is one of a small number of predictions that could genuinely discriminate
          Synchronism from standard ΛCDM+MOND. Environment-dependent BAO is not a prediction
          of any standard cosmological model. If the effect exists at the predicted scale,
          it would be a clear signal. If it does not, it would falsify this aspect of
          the framework.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The data required already exists (DESI public releases). This is a 4–8 week
          computational task for someone with access to a BOSS/DESI galaxy catalog and
          a density estimator. The framework should not wait to learn the answer.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tier-1-existing" className="btn-secondary">
            &larr; All Tier-1 Tests
          </Link>
          <Link href="/cosmic-interference" className="btn-secondary">
            TEST-07: Cosmic Interference
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/bao-coherence-modulation" />
    </>
  );
}
