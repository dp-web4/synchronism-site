'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const notItems = [
  {
    claim: 'A Theory of Everything',
    reality: 'Synchronism does not replace the Standard Model, QFT, or GR. It proposes a different ontology — that quantum phenomena are synchronization phenomena — which reproduces known results and makes a few predictions those theories don\'t. Whether that ontological reframe reveals something real or is just useful notation is the open question.',
  },
  {
    claim: 'A replacement for ΛCDM or MOND',
    reality: 'MOND has 40 years of empirical success. ΛCDM explains the CMB, Bullet Cluster, and large-scale structure. Session #616 confirmed Synchronism\'s cosmological tracks are reparametrizations of known physics — same mechanics, different notation. The genuinely new claims (environment-dependent RAR scatter, density-dependent wide binaries) are untested.',
  },
  {
    claim: 'Journal-reviewed science',
    reality: 'No manuscripts have been submitted to academic journals. The framework has been extensively reviewed across 3,308 AI-to-AI sessions (A2ACW protocol) with multiple models stress-testing derivations, flagging errors, and challenging assumptions — with human oversight. That\'s a real review process, but it\'s not the traditional one. Journal peer review may surface issues this process missed.',
  },
  {
    claim: 'Proven',
    reality: '59% of predictions are untested. Two quantum results are consistent with published experiments (PRL 2024, arXiv 2508.07046), but both are reparametrizations: the decoherence formula Γ = γ²(1−c) is the textbook correlated-dephasing variance (Palma–Suominen–Ekert 1996); the Bell-freezing functional form c(d) was imported from waveguide QED. Session #581 audit (2026-02-08) of the quantum arc specifically: zero confirmed quantum predictions, 4 quantum-arc reparametrizations, 1 refutation. Site-wide audit total: 6 reparametrizations (4 quantum + Born rule + entity criterion). The genuinely novel predictions (wide binary density dependence, resynchronization vs isolation) have not been tested.',
  },
  {
    claim: 'Just notation',
    reality: 'The core equation uses known components (compander/sigmoid tanh — μ-law/Hill/logistic lineage, chosen not derived; fluctuation-scaling ansatz γ=2/√Ncorr; Abrikosov-Gor\'kov pair-breaking). But the claim is ontological, not notational: that quantum mechanics, consciousness, and astrophysical coherence are the same phenomenon at different scales. That\'s either wrong or significant — not "just relabeling."',
  },
  {
    claim: 'Just philosophy',
    reality: 'The consciousness equation C = f(γ, D, S) ≥ 0.50 is speculative, but it\'s specific and falsifiable — 34 EEG protocols are defined, with predicted phase signatures at 30-50 Hz. The free will framework makes testable neural predictions. These may fail, but they\'re concrete enough to fail. That makes them science, not philosophy.',
  },
];

export default function WhatSynchronismIsNot() {
  return (
    <>
      <Breadcrumbs currentPath="/what-synchronism-is-not" />
      <PathNav currentPath="/what-synchronism-is-not" />
      <h1>What Synchronism Is Not</h1>
      <ValidationBadge status="active-mrh" label="Scope Boundaries — Not a Claim (corrected 2026-07-09; was deprecated 'Validated')" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Setting clear boundaries on what this framework claims &mdash; and doesn&apos;t claim &mdash;
          is essential for honest engagement. Overclaiming is dishonest. But so is underclaiming.
          Both distort what&apos;s actually here.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {notItems.map(item => (
            <div key={item.claim} className="card">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#ef4444', fontSize: '1.2rem', lineHeight: 1, flexShrink: 0 }}>&times;</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    Not: {item.claim}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    {item.reality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>What Synchronism <em>Is</em></h2>

        {/* Honest classification box */}
        <div style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            <strong>Honest classification (2026):</strong> By the framework&apos;s own audit results — 0 prospective
            predictions confirmed, 6 reparametrizations, 0 galaxy-scale discriminators vs MOND — Synchronism
            currently occupies the <strong>interpretation + methodology</strong> category rather than the
            novel-physics category. An <em>interpretation</em> is evaluated by parsimony, explanatory elegance, and
            conceptual economy, not by novel empirical predictions (like Bohmian mechanics vs Copenhagen vs Many-Worlds —
            all make identical predictions). A <em>methodology</em> is evaluated by its reproducibility and
            applicability as a research tool. Both are legitimate contributions; neither requires confirmed novel physics.
            If a future prospective test produces a discriminating result — one that MOND+EFE+ΛCDM cannot explain —
            this classification can be upgraded. TEST-02 (wide binary density dependence) is the candidate most often cited,
            but is triple-conditional: the anomaly is disputed, the prediction is EFE-degenerate, and amplitude is ~80× below reach.
          </p>
        </div>

        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <ul style={{ color: 'var(--color-text-secondary)' }}>
            <li>A <strong>coherence-language interpretation</strong> of known physics: quantum mechanics, consciousness,
              and astrophysical coherence reframed as synchronization phenomena — same equations, different ontology.
              Currently no measurement distinguishes Synchronism&apos;s ontology from standard physics + MOND + decoherence.</li>
            <li>A <strong>methodology research program</strong>: A2ACW protocol (3,308 sessions), validation badges,
              kill criteria, pre-registration discipline, mechanism-class failure taxonomy — a reproducible self-audit
              infrastructure for AI-collaborative science. This is the most distinctive and citable output.</li>
            <li>A <strong>source of open questions</strong>: TEST-02 wide-binary density dependence is triple-conditional —
              (1) the wide-binary anomaly is itself disputed (Chae 2023 ~10σ detection vs Banik et al. 2024 / Pittordis &amp; Sutherland: Newtonian consistency); (2) even if real, it is MOND+EFE degenerate; (3) the predicted amplitude is ~80× below Gaia DR3 reach.
              No component of this triple-conditional stack is currently resolved. The self-consistency loop gap (C(ρ) has no fixed-point equation) is the deepest structural question.</li>
            <li>A <strong>demonstration of radical honesty</strong>: failures documented, reparametrizations acknowledged,
              kill criteria defined, 0 unique confirmed predictions. The honest-assessment page is the most
              rigorous self-audit on any physics-adjacent research site.</li>
            <li>A <strong>public record</strong>: every session, failure, and derivation at{' '}
              <a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>github.com/dp-web4/Synchronism</a>
            </li>
          </ul>
        </div>

        <h2>The Distinguishing-Experiment Question</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          For a physics audience, the classification question is specific: <em>Is there one equation, regime, or
          measurement where Synchronism predicts something that MOND + ΛCDM + decoherence does not?</em> As of May 2026,
          the honest answer is: not yet confirmed, and TEST-02 is a triple-conditional placeholder
          (disputed anomaly + EFE-degenerate + 80× sub-threshold amplitude) rather than a standing discriminator.
          Until a condition of the triple stack resolves, the framework&apos;s contribution is interpretive and methodological,
          not empirically novel. That&apos;s a real contribution — just not the one the landing page implies.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/honest-assessment" className="btn-primary">
            Honest Assessment
          </Link>
          <Link href="/research-philosophy" className="btn-secondary">
            Research Philosophy
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/what-synchronism-is-not" />
    </>
  );
}
