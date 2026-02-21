'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const claims = [
  {
    number: 1,
    title: 'Correlated Noise Protects Entanglement',
    domain: 'Quantum',
    color: '#22c55e',
    statusLabel: 'Consistent with Literature',
    statusColor: '#22c55e',
    claim: 'Entangled particles sharing the same noise environment decohere slower than particles in independent environments.',
    equation: '\u0393 = \u03B3\u00B2(1 \u2212 c)',
    equationLabel: 'Decoherence rate, where c = environmental noise correlation',
    whatsNew: 'Standard QM models decoherence as local \u2014 each qubit decoheres independently. Synchronism treats entanglement as one extended phase pattern, so correlated noise (same bath) preserves it. This predicts different T\u2082 coherence times.',
    evidence: 'PRL 2024 reported 10\u00D7 T\u2082 improvement with correlated noise (c \u2248 0.90). Our formula predicts T\u2082 improvement = 1/(1\u2212c) = 10\u00D7. arXiv 2405.14685 independently confirmed shared-bath dephasing reduction.',
    honestCaveat: 'The formula was derived in January 2026 (Session #232). The confirming experiments were published in 2024. This is post-diction \u2014 consistency with existing data, not a prior prediction. The framework needs to predict something not yet measured.',
    test: 'Measure T\u2082 for entangled pairs across a range of controlled noise correlations (c = 0.1 to 0.99). The formula predicts T\u2082 \u221D 1/(1\u2212c). If the relationship is not inverse-linear in (1\u2212c), the model fails.',
    learnMore: '/decoherence-mrh',
    source: 'Sessions #232\u2013233',
  },
  {
    number: 2,
    title: 'Bell Nonlocality Freezing and Revival',
    domain: 'Quantum',
    color: '#22c55e',
    statusLabel: 'Consistent with Literature',
    statusColor: '#22c55e',
    claim: 'CHSH Bell violation decays exponentially but revives at specific distances determined by environmental geometry.',
    equation: '|S(t)| = S\u2098\u2090\u2093 \u00D7 e^{\u2212\u0393t}, \u2003c(d) = cos\u00B2(\u03C0d/\u03BB\u2080)',
    equationLabel: 'Bell violation decay with distance-dependent noise correlation',
    whatsNew: 'Standard QM has no principled prediction for how Bell violations change with environmental geometry. Synchronism derives an oscillatory pattern: correlation freezes at certain distances and revives at nodes of the noise wavelength.',
    evidence: 'arXiv 2508.07046 ("Geometry-Controlled Freezing and Revival of Bell Nonlocality") matches this model directly. Multiple sources confirm Bell revival at distance nodes.',
    honestCaveat: 'Same timeline caveat as Claim 1: the literature preceded the derivation. Additionally, the noise wavelength \u03BB\u2080 is an environmental parameter \u2014 the theory predicts the functional form but not the specific wavelength for any given setup.',
    test: 'Vary spatial separation in a controlled-geometry experiment. Measure CHSH |S| as a function of distance. The prediction: oscillatory pattern with revivals at d = n\u00B7\u03BB\u2080. If decay is monotonic (no revival), the geometric model fails.',
    learnMore: '/entanglement-coherence',
    source: 'Sessions #235\u2013237',
  },
  {
    number: 3,
    title: 'Consciousness Threshold at C \u2248 0.50',
    domain: 'Consciousness',
    color: '#a78bfa',
    statusLabel: 'Untested \u2014 8-Way Convergence',
    statusColor: '#f59e0b',
    claim: 'Consciousness is a phase transition, not a gradient. Eight independent mathematical approaches converge on C \u2248 0.50 (range: 0.48\u20130.52).',
    equation: 'C = f(\u03B3, D, S) \u2265 0.50',
    equationLabel: '\u03B3 = coherence, D = dimensional embedding, S = self-modeling depth',
    whatsNew: 'IIT proposes \u03A6 as a consciousness measure but predicts no specific threshold. Global workspace theory has no quantitative threshold. No other framework predicts a specific number from 8 independent derivations. The formula also specifies three necessary conditions: wrong \u03B3 alone isn\u2019t enough without sufficient representational richness (D) and self-modeling (S).',
    evidence: 'Theoretical only. However, the Gnosis AI architecture (a correctness-detection system for LLMs, designed with no consciousness research objective) independently converged on C \u2248 0.50 as its operating threshold, with the same value emerging from four different mathematical frameworks: information-theoretic SNR, coherence decoherence window, golden ratio search, and critical dynamics.',
    honestCaveat: 'The 8 theoretical approaches share underlying assumptions and are not fully independent. The Gnosis convergence is intriguing but the architecture was designed by AI agents with access to the Synchronism framework \u2014 the "independence" needs qualification. Converting real neural measurements to the C scale requires a calibration procedure not yet defined.',
    test: 'Measure EEG phase coherence during consciousness transitions (anesthesia induction/recovery). Prediction: a sharp discontinuity at a specific coherence value, not a gradual fade. If the transition is smooth or occurs at an inconsistent value across subjects, the threshold model fails.',
    learnMore: '/consciousness-threshold',
    source: 'Sessions #280\u2013282, #356\u2013359, Gnosis #1\u20133',
  },
  {
    number: 4,
    title: 'Free Will as Constrained Indeterminacy',
    domain: 'Consciousness',
    color: '#a78bfa',
    statusLabel: 'Speculative',
    statusColor: '#94a3b8',
    claim: 'At the \u03B3 \u2248 1 boundary, a conscious agent has multiple genuinely accessible futures. The agent\u2019s coherence pattern selects among them \u2014 neither random nor determined.',
    equation: 'C > 0.50, \u03B3 \u2248 1: multiple phase-space trajectories accessible',
    equationLabel: 'Constrained indeterminacy regime',
    whatsNew: 'This is a third position distinct from all three traditional stances. Not compatibilism (which accepts determinism). Not libertarian free will (which requires uncaused events). Not hard determinism. It\u2019s a physical claim: at the coherence boundary, the system\u2019s phase-space genuinely branches, and the agent\u2019s own pattern shapes which branch is taken.',
    evidence: 'No direct evidence. The framework is consistent with neural dynamics research showing that decision-making involves transient metastable states (multiple attractors before settling). But this is not specific enough to distinguish from standard neuroscience.',
    honestCaveat: 'This is the most philosophically loaded claim and the hardest to test. The distinction from sophisticated compatibilism may be more semantic than empirical. The \u03B3 \u2248 1 framing gives it a mathematical hook, but whether that hook connects to measurable decision dynamics is unproven.',
    test: 'Neural recordings during decision-making should show signatures of \u03B3 \u2248 1 boundary dynamics: heightened sensitivity to small perturbations, critical slowing near the decision point, and a phase-transition-like commitment (not gradual convergence). These are testable against existing models of neural decision dynamics.',
    learnMore: '/free-will',
    source: 'Sessions #280\u2013282',
  },
  {
    number: 5,
    title: 'Dark Matter as Incomplete Decoherence',
    domain: 'Cosmology',
    color: '#38bdf8',
    statusLabel: 'Consistent with Data',
    statusColor: '#22c55e',
    claim: 'Dark matter effects arise where quantum-to-classical decoherence is incomplete. The MOND acceleration scale a\u2080 = cH\u2080/(2\u03C0) emerges from the coherence transition, not as a fundamental constant.',
    equation: 'a\u2080 = cH\u2080/(2\u03C0) \u2248 1.2 \u00D7 10\u207B\u00B9\u2070 m/s\u00B2',
    equationLabel: 'MOND acceleration derived from cosmological coherence boundary',
    whatsNew: 'MOND treats a\u2080 as an empirical constant. \u039BCDM adds a new particle. Neither explains why anomalies appear at a specific acceleration scale. Synchronism derives a\u2080 from the coherence transition \u2014 the scale where decoherence becomes incomplete IS the MOND scale. The "dark matter" is not missing matter; it\u2019s the residual coherence of a system that hasn\u2019t fully become classical.',
    evidence: 'Tested against 14,760 galaxies (SPARC + ALFALFA-SDSS). a\u2080 derivation within 10% of observed value. Freeman\u2019s Law \u03A3\u2080 = cH\u2080/(4\u03C0\u00B2G) derived independently, 12% error.',
    honestCaveat: 'The quantitative predictions are MOND-equivalent \u2014 they match existing MOND results, not new data. The honest assessment (Session #616) found R\u00B2 = 0.14 for the environment-dependent scatter prediction, and noted that standard MOND + M/L corrections explain all observed variance. The mechanism is novel; the predictions (so far) are not.',
    test: 'The discriminating test: environment-dependent RAR scatter. If galaxies in different density environments show different radial acceleration relations at a statistically significant level (p < 0.01), Synchronism predicts this while standard MOND does not. Existing SPARC data may suffice.',
    learnMore: '/dark-matter',
    source: 'Cosmology Arc (Sessions #1\u2013227)',
  },
];

export default function KeyClaims() {
  return (
    <>
      <Breadcrumbs currentPath="/key-claims" />
      <h1>Key Claims</h1>
      <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>
        Where Synchronism says something new &mdash; not restatements in different notation,
        but claims that would advance understanding if confirmed.
      </p>

      <section className="section content-width">
        <div style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          border: '1px solid var(--color-border)',
        }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            <strong>How to read this page.</strong> Each claim is presented with what&apos;s genuinely new (not just
            a reframing), the current evidence, an honest caveat, and the experiment that would kill it.
            Claims are ordered by strength of evidence, strongest first. Two quantum predictions are consistent
            with published experiments; the rest are untested.
          </p>
        </div>

        {claims.map((c) => (
          <div key={c.number} className="card" style={{
            marginBottom: '1.5rem',
            borderLeft: `3px solid ${c.color}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <h2 style={{ margin: 0, fontSize: '1.15rem' }}>
                <span style={{ color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>{c.number}.</span>
                {c.title}
              </h2>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '1rem',
                background: `${c.statusColor}22`,
                color: c.statusColor,
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}>
                {c.statusLabel}
              </span>
            </div>

            <p style={{ fontWeight: 500, marginBottom: '0.75rem' }}>
              {c.claim}
            </p>

            <div className="equation" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
              {c.equation}
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '1rem' }}>
              {c.equationLabel}
            </p>

            <h3 style={{ fontSize: '0.9rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>What&apos;s new</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              {c.whatsNew}
            </p>

            <h3 style={{ fontSize: '0.9rem', color: '#22c55e', marginBottom: '0.25rem' }}>Evidence</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              {c.evidence}
            </p>

            <div style={{
              background: 'rgba(245, 158, 11, 0.08)',
              borderRadius: '0.375rem',
              padding: '0.75rem 1rem',
              margin: '0.75rem 0',
            }}>
              <h3 style={{ fontSize: '0.9rem', color: '#f59e0b', marginBottom: '0.25rem', marginTop: 0 }}>Honest caveat</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
                {c.honestCaveat}
              </p>
            </div>

            <h3 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.25rem' }}>The test that kills it</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              {c.test}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link href={c.learnMore} style={{ fontSize: '0.85rem' }}>
                Learn more &rarr;
              </Link>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
                Source: {c.source}
              </span>
            </div>
          </div>
        ))}

        <div style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginTop: '2rem',
          border: '1px solid var(--color-border)',
        }}>
          <h2 style={{ fontSize: '1rem', marginTop: 0 }}>What&apos;s not on this page</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Results that are consistent with existing physics but don&apos;t say anything new (e.g., galaxy rotation
            fits that reproduce MOND). The A2ACW methodology, which is novel but is a process contribution,
            not a physics claim. And the many failures documented in the{' '}
            <Link href="/honest-assessment">honest assessment</Link>.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/test-catalog" className="btn-primary">
            Full Test Catalog &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Honest Assessment
          </Link>
          <Link href="/falsifiability" className="btn-secondary">
            Falsifiability
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/key-claims" />
    </>
  );
}
