'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function EntityCriterion() {
  return (
    <>
      <Breadcrumbs currentPath="/entity-criterion" />
      <h1>The Entity Criterion</h1>
      <ValidationBadge status="untested" label="Candidate Novel Prediction" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{
          background: 'rgba(139, 92, 246, 0.08)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          border: '1px solid rgba(139, 92, 246, 0.25)',
        }}>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Why this page exists.</strong> After 3,308 sessions and 13 adversarial
            stress tests, the entity criterion Γ&nbsp;&lt;&nbsp;m is the one surviving candidate
            prediction that (a) does not reduce to standard QFT, (b) survived all internal
            challenges, and (c) has a concrete external test against known data. It deserves
            the site&apos;s most careful treatment.
          </p>
        </div>

        <h2>The Criterion</h2>
        <div style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: '0.5rem',
          padding: '1.25rem 1.5rem',
          margin: '1rem 0 1.5rem',
          borderLeft: '3px solid var(--color-accent-violet)',
        }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>
            A physical object qualifies as a coherent entity if and only if its decay width
            is smaller than its rest mass:
          </p>
          <div style={{
            textAlign: 'center',
            fontSize: '1.4rem',
            fontFamily: "'Times New Roman', serif",
            padding: '0.75rem 0',
            color: 'var(--color-accent-violet)',
          }}>
            Γ &lt; m
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
            where Γ is the decay width (inverse of lifetime) and m is the rest mass.
            Both are in natural units (ℏ = c = 1).
          </p>
        </div>

        <h2>What It Means</h2>
        <p>
          In Synchronism&apos;s oscillation-basis picture, a coherent entity persists long enough
          for its internal phase structure to complete at least one coherence cycle. The
          condition Γ &lt; m is a statement about coherence time vs. oscillation period:
          if a particle decays faster than it can complete an internal oscillation, it has
          no persistent coherent structure — it&apos;s a resonance, not an entity.
        </p>
        <p>
          This is <em>not</em> simply &ldquo;stable particles are entities.&rdquo; The
          criterion applies to short-lived resonances too: f₀(500), ρ(770), Δ(1232) all
          have measurable Γ and m. The question is whether Γ/m &lt; 1.
        </p>

        <h2>What Is and Isn&apos;t Novel</h2>
        <p>
          <strong>The narrow-resonance condition Γ ≪ m is known to QFT.</strong> It is the condition
          required for a Breit-Wigner resonance to be well-defined as an isolated pole in the
          Källén-Lehmann spectral representation. The f₀(500)/σ is the textbook example of a state
          where this condition fails — its width is comparable to its mass, which is precisely why
          the PDG debates whether it qualifies as a particle.
        </p>
        <p>
          <strong>What Synchronism adds is an ontological interpretation, not the condition itself.</strong>
          Standard QFT treats Γ ≪ m as a practical approximation (narrow resonances are easier to
          compute), not a fundamental threshold for &ldquo;entity-hood.&rdquo; QFT assigns equal
          ontological status to all excitations above the vacuum regardless of their lifetime. The
          Synchronism claim is that the oscillation basis gives Γ &lt; m a physical meaning beyond
          mere approximation: it marks the boundary between structures that can complete a coherence
          cycle and those that cannot. Whether this framing adds predictive content beyond QFT&apos;s
          existing resonance classification is the open research question.
        </p>
        <p>
          The criterion survived 13 adversarial A2ACW stress tests (Sessions #1800–1900). The
          consistent finding: its ontological interpretation is derivable from the oscillation basis
          and is consistent with all examined PDG resonance data — but a systematic audit against
          the full PDG table has not yet been done.
        </p>

        <h2>The External Test</h2>
        <p>
          The Particle Data Group (PDG) tabulates Γ and m for ~200 named resonances. The
          criterion predicts a sharp boundary: resonances with Γ &gt; m should not form
          persistent coherent structures, while those with Γ &lt; m should.
        </p>

        <div style={{
          background: 'rgba(34, 197, 94, 0.07)',
          borderRadius: '6px',
          padding: '1rem 1.25rem',
          margin: '1rem 0',
          borderLeft: '3px solid #22c55e',
        }}>
          <h3 style={{ color: '#22c55e', marginTop: 0, fontSize: '0.95rem' }}>Consistency example: f₀(500)</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            The f₀(500) / σ meson: m ≈ 400–550 MeV, Γ ≈ 400–700 MeV.
            This is the canonical &ldquo;not an entity&rdquo; case — Γ ≈ m (borderline) to
            Γ &gt; m (depending on extraction method). Standard QFT debates whether f₀(500)
            is a genuine resonance or a dynamical cusp. The entity criterion predicts it is
            not a coherent entity, which is consistent with the ongoing debate about its
            particle status.
          </p>
        </div>

        <h2>What Still Needs to Be Done</h2>
        <div style={{
          background: 'rgba(239, 68, 68, 0.07)',
          borderRadius: '6px',
          padding: '1rem 1.25rem',
          margin: '1rem 0',
          borderLeft: '3px solid #ef4444',
        }}>
          <h3 style={{ color: '#ef4444', marginTop: 0, fontSize: '0.95rem' }}>Open Gap: Systematic PDG Audit</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            The 13 stress tests were internal A2ACW dialogue — they tested the criterion&apos;s
            logical consistency, not its empirical predictions.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0 ' }}>
            A proper external test requires:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <li>List all ~200 PDG resonances with measured Γ and m</li>
            <li>Classify each as &ldquo;entity&rdquo; (Γ &lt; m) or &ldquo;non-entity&rdquo; (Γ &gt; m)</li>
            <li>Check whether &ldquo;entity&rdquo; resonances show anomalous production cross-sections,
              narrower-than-predicted widths, or other signatures not explained by standard QFT</li>
            <li>Check whether &ldquo;non-entity&rdquo; resonances are systematically treated as
              non-fundamental in the PDG (e.g., labeled &ldquo;needs confirmation&rdquo; or
              &ldquo;omitted from summary tables&rdquo;)</li>
          </ul>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', marginBottom: 0 }}>
            Until this audit is done, &ldquo;consistent with f₀(500)&rdquo; is one data point,
            not a validated prediction.
          </p>
        </div>

        <h2>The Kill Criterion</h2>
        <p>
          The entity criterion is falsified if a resonance with Γ &gt; m is found to be
          a stable coherent structure in any experimental context — or if the Γ &lt; m
          boundary maps to no physically meaningful classification in PDG data.
          Specifically: if the fraction of PDG resonances &ldquo;confirmed as fundamental&rdquo;
          is equal between the Γ &lt; m and Γ &gt; m groups, the criterion has no predictive
          value beyond its input data.
        </p>

        <h2>Honest Assessment</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is currently the framework&apos;s strongest surviving novel claim. It is also
          its <em>only</em> surviving novel claim across 3,308 sessions. That context matters:
          one candidate across a large exploration is not strong evidence for the criterion
          itself — it may be the last survivor in a selection process that was also selecting
          against falsification. The appropriate epistemic status is{' '}
          <strong>Untested candidate: consistent with available data, systematic test pending.</strong>
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The criterion is derivable from the oscillation basis (not from the coherence
          function C(ρ)) — which means it survives even if C(ρ) is a phenomenological
          ansatz. This is a structural strength: the surviving claim is independent of the
          framework&apos;s most problematic element.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/honest-assessment" className="btn-primary">
            Honest Assessment &rarr;
          </Link>
          <Link href="/quantum-predictions" className="btn-secondary">
            Quantum Predictions
          </Link>
          <Link href="/key-claims" className="btn-secondary">
            Key Claims
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/entity-criterion" />
    </>
  );
}
