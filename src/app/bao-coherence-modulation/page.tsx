'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function BaoCoherenceModulation() {
  return (
    <>
      <Breadcrumbs currentPath="/bao-coherence-modulation" />
      <h1>BAO Coherence Modulation (TEST-04)</h1>
      <ValidationBadge status="speculative" label="Derivation Pending" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Status:</strong> TEST-04 is listed as Tier-1 and is potentially discriminating
            against ΛCDM. However, the derivation of the predicted 10<sup>−4</sup> shift and the
            specific estimator required to test it do not yet exist on this site. This page is a
            derivation stub. The physics argument is given below; the quantitative derivation is open.
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
