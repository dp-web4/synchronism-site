'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import type { ReactNode } from 'react';

// `plain`: one plain-language first line per card, for the Beginner Path reader; `reality` is the detail.
const notItems: { claim: string; plain: ReactNode; reality: ReactNode; note?: ReactNode }[] = [
  {
    claim: 'A Theory of Everything',
    plain: 'It does not replace today\'s theories of particles or gravity; it offers a different picture of what might sit underneath them.',
    reality: 'Synchronism does not replace the Standard Model, QFT, or GR. It proposes a different ontology — that quantum phenomena are synchronization phenomena — which reproduces known results and makes a few predictions those theories don\'t. Whether that ontological reframe reveals something real or is just useful notation is the open question.',
  },
  {
    claim: 'A replacement for ΛCDM or MOND',
    plain: 'The two leading explanations of galaxy and cosmic data are not displaced; where this framework matches data, it mostly restates them.',
    reality: 'MOND has 40 years of empirical success. ΛCDM explains the CMB, Bullet Cluster, and large-scale structure. Session #616 (sessions are the numbered research sessions in the Synchronism research archive, github.com/dp-web4/Synchronism) confirmed Synchronism\'s cosmological tracks are reparametrizations of known physics — same mechanics, different notation. Of the claims meant to be new, environment-dependent RAR scatter has been run and refuted (r² = 0.0001 against a registered effect of more than 20%). Density-dependent wide binaries depend on a density knee the framework never fixed: at its published calibration the density law is already excluded in the solar neighbourhood.',
    note: 'This card used to end: "The genuinely new claims (environment-dependent RAR scatter, density-dependent wide binaries) are untested." The 2026-07-14 environment run refuted the first. The second turned out to depend on the knee.',
  },
  {
    claim: 'Journal-reviewed science',
    plain: 'No science journal has checked this; AI models reviewed each other\'s work, with a human overseeing.',
    reality: (
      <>
        No manuscripts have been submitted to academic journals. The framework has been extensively reviewed across
        3,308 AI-to-AI sessions under the A2ACW protocol (AI-to-AI Adversarial Collaboration Workshop), with multiple models
        stress-testing derivations, flagging errors, and challenging assumptions &mdash; with human oversight. This is
        internal adversarial review by AI models, not peer review: no independent human expert has checked the work, and
        the reviewers share the project&apos;s context. It has caught real errors, but it is not the traditional process,
        and journal peer review may surface issues it missed. How the protocol works and what it has and hasn&apos;t
        shown: <Link href="/a2acw" style={{ color: 'var(--color-accent-blue)' }}>A2ACW</Link>.
      </>
    ),
  },
  {
    claim: 'Proven',
    plain: 'Nothing has been confirmed, and most predictions have never been tested.',
    reality: (
      <>
        In the February 2026 tally on the{' '}
        <Link href="/status-dashboard" style={{ color: 'var(--color-accent-blue)' }}>Status Dashboard</Link> (a historical
        page that records that month&apos;s tally), 54 of 92 listed predictions (59%) were untested, 34 of those 54 in
        consciousness. That figure is a February 2026 snapshot and has not been recomputed since. It also predates the later audits (it still counts chemistry consistency checks as
        &ldquo;validated&rdquo;); the current prediction ledger records 0 confirmed novel predictions and does not publish a
        single untested-of-total figure. Two quantum results are consistent with published experiments (PRL 2024,
        arXiv 2508.07046), but both are reparametrizations: the decoherence formula &Gamma; = &gamma;&sup2;(1&minus;c) is the
        textbook correlated-dephasing variance (Palma&ndash;Suominen&ndash;Ekert 1996); the Bell-freezing functional form
        c(d) was imported from waveguide QED. Session #581 (2026-02-08) audited the quantum arc specifically: zero confirmed
        quantum predictions, 4 quantum-arc reparametrizations, 1 refutation. The{' '}
        <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link> scoreboard
        counts <strong>5 reparametrizations</strong>: Born rule, a&#x2080; = cH&#x2080;/(2&pi;), Freeman&apos;s Law, the
        decoherence formula and Bell-freezing c(d) (listed on{' '}
        <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</Link>). The Session #581 figure is
        that audit&apos;s own count for the quantum arc, not an addition to the five. The predictions once called genuinely
        novel have not produced a confirmation: the wide-binary density prediction depends on an unfixed density knee, and
        &ldquo;resynchronization beats isolation&rdquo; is, as stated, dynamical decoupling (badged Reparametrization on Key
        Claims).
      </>
    ),
    note: 'This card used to say "Site-wide audit total: 6 reparametrizations (4 quantum + Born rule + entity criterion)", a different list from the Honest Assessment scoreboard\'s 5, which does not include the entity criterion (Honest Assessment badges that criterion Reparametrization in its own card). It also said the wide-binary and resynchronization predictions "have not been tested", without noting that the first depends on an unfixed knee and the second is dynamical decoupling as stated.',
  },
  {
    claim: 'Just notation',
    plain: 'The ingredients are borrowed from known mathematics; the new part is the claim that they describe one phenomenon at every scale — which could be wrong.',
    reality: 'The core equation uses known components (compander/sigmoid tanh — μ-law/Hill/logistic lineage, chosen not derived; fluctuation-scaling ansatz γ=2/√Ncorr; Abrikosov-Gor\'kov pair-breaking — a textbook 1960 superconductivity result the framework\'s η formula turns out to restate). But the claim is ontological, not notational: that quantum mechanics, consciousness, and astrophysical coherence are the same phenomenon at different scales. That\'s either wrong or significant — not "just relabeling."',
  },
  {
    claim: 'A Lorentz-invariant theory',
    plain: 'Its universal clock would naturally break a basic rule of relativity by far more than existing experiments allow. In plain words: Lorentz invariance is the rule that the laws of physics look the same to every observer moving at a steady speed. A single universal clock ("absolute time") picks out one special observer, which breaks that rule, and the simplest version of the framework breaks it by an amount existing experiments already rule out. That applies to the minimal framework at its natural value: it is a gap the framework would need a mechanism to close (other absolute-time theories have proposed such mechanisms; this one has none yet), not a refutation of the whole idea.',
    reality: 'A discrete absolute-time substrate singles out a preferred frame, and a preferred frame leaks into the matter sector: the one-loop estimate gives Lorentz-violating coefficients c_μν ~ α/π ~ 10⁻²–10⁻³, against cavity bounds ≲10⁻¹⁸ and comagnetometer bounds ≲10⁻²⁹–10⁻³⁰. That is a gap of 16 to 28 orders of magnitude, and it is excluded at face value by experiments that already exist — no new instrument required. Custodial / protection mechanisms that would suppress the leak exist in the literature, but NONE is exhibited anywhere in this framework, so the gap is unaddressed rather than answered. One precision, in the framework\'s favour and stated because it is true: the scheme-independence of that one-loop estimate is itself disputed in the literature, so this is a NATURALNESS problem, not a theorem — an unprotected preferred frame is wildly unnatural, which is a different and weaker claim than "mathematically impossible." It is still the largest single number standing against the ontology, and it is larger than anything in the galaxy sector. Status in the prediction ledger: the minimal framework is refuted at its natural value (conditional on its unspecified interactions); for Synchronism specifically this is an open custodial-mechanism gap, not a decisive refutation. The escape that works for other absolute-time theories (a hierarchy of scales, shown for Hořava–Lifshitz gravity) is obstructed here by the framework\'s single-substrate assumption, so the mechanism is owed, not supplied.',
    note: 'Card added 2026-09-10: this page, whose job is listing what the framework is not, was missing its single largest fine-tuning problem, which a reader had to find on /honest-assessment instead.',
  },
  {
    claim: 'Just philosophy',
    plain: (
      <>
        The framework also extends its coherence idea to consciousness. The site treats that as a speculative sector
        &mdash; its own{' '}
        <Link href="/consciousness-threshold" style={{ color: 'var(--color-accent-blue)' }}>Consciousness Threshold</Link>{' '}
        page badges the threshold untestable as stated &mdash; and the card below gives the case that it is at least concrete.
      </>
    ),
    reality: 'The consciousness equation C = f(γ, D, S) ≥ 0.50 is speculative, but it\'s specific and falsifiable — 34 EEG protocols are defined, with predicted phase signatures at 30-50 Hz. The free will framework makes testable neural predictions. These may fail, but they\'re concrete enough to fail. That makes them science, not philosophy.',
  },
];

export default function WhatSynchronismIsNot() {
  return (
    <>
      <Breadcrumbs currentPath="/what-synchronism-is-not" />
      <PathNav currentPath="/what-synchronism-is-not" />
      <h1>What Synchronism Is Not</h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
        A scope page: it states what the framework does not claim, so it carries no validation badge.
      </p>
      <details style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
        <summary style={{ cursor: 'pointer' }}>Revision note</summary>
        This page used to carry the badge &ldquo;Active-MRH &mdash; Scope Boundaries &mdash; Not a Claim&rdquo;. Before
        2026-07-09 it carried the deprecated &ldquo;Validated&rdquo;. Active-MRH means a claim in active research focus,
        which does not describe a scope page, and the badge text carried its own revision history. The verdict badge was
        removed.
      </details>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Setting clear boundaries on what this framework claims &mdash; and doesn&apos;t claim &mdash;
          is essential for honest engagement. Overclaiming is dishonest. But so is underclaiming.
          Both distort what&apos;s actually here.
        </p>

        {/* Plain summary added 2026-09-15: this page is Beginner Path step 4, and a first-time visitor
            met QFT, GR, ΛCDM, EFE, A2ACW and Abrikosov-Gor'kov below with no explanation. The detail
            cards are unchanged; this box restates their headings in plain words. */}
        <div className="card" style={{ borderLeft: '3px solid var(--color-accent-warm)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
          <p style={{ margin: '0 0 0.5rem', color: 'var(--color-accent-warm)', fontWeight: 600 }}>
            In plain words, before the detail
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li><strong>Not proven.</strong> No prediction has been confirmed. Most have never been tested, and none of those checked came out as a win for this framework: they failed, could not decide anything, or turned out to be known physics written differently.</li>
            <li><strong>Not checked by science journals.</strong> Nothing has been submitted. The checking so far was done by AI models reviewing each other&apos;s work, with human oversight &mdash; real, but not the usual route.</li>
            <li><strong>Not a replacement for today&apos;s physics.</strong> It does not replace the standard theories of particles, gravity or the universe&apos;s history, nor the rival gravity idea MOND. Where it matches data, it mostly restates them.</li>
            <li><strong>Not compatible, as it stands, with a basic rule of relativity</strong> (that the laws look the same at any steady speed). Its built-in universal clock would naturally break that rule by an amount existing experiments already rule out, and nothing in the framework explains why it doesn&apos;t. That is a serious warning sign for the simplest version, not a refutation of the whole idea: closing the gap would take a protective mechanism, which other absolute-time theories have proposed and this one has not.</li>
            <li><strong>Not just new labels, and not just philosophy.</strong> The claim is that quantum behaviour, consciousness and galaxy motion are one phenomenon at different scales, with concrete tests attached. That is either wrong or important &mdash; and it can fail.</li>
          </ul>
          <p style={{ margin: '0.6rem 0 0', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            The cards below give the detail and use technical terms (<Link href="/glossary#QFT" style={{ color: 'inherit', textDecoration: 'underline dotted' }}>QFT</Link>, <Link href="/glossary#GR" style={{ color: 'inherit', textDecoration: 'underline dotted' }}>GR</Link>,{' '}
            <Link href="/glossary#%CE%9BCDM" style={{ color: 'inherit', textDecoration: 'underline dotted' }}>ΛCDM</Link>, <Link href="/glossary#CMB" style={{ color: 'inherit', textDecoration: 'underline dotted' }}>CMB</Link>, <Link href="/glossary#EFE" style={{ color: 'inherit', textDecoration: 'underline dotted' }}>EFE</Link>, A2ACW, &ldquo;compander,&rdquo;
            Lorentz invariance&hellip;). Each is defined in the{' '}
            <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>Glossary</Link>; you can skip them and
            keep the five points above.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {notItems.map(item => (
            <div key={item.claim} className="card">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#ef4444', fontSize: '1.2rem', lineHeight: 1, flexShrink: 0 }}>&times;</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    Not: {item.claim}
                  </h3>
                  <p style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                    {item.plain}
                  </p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    {item.reality}
                  </p>
                  {item.note && (
                    <details style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                      <summary style={{ cursor: 'pointer' }}>Revision note</summary>
                      {item.note}
                    </details>
                  )}
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
            predictions confirmed, 5 reparametrizations, 0 galaxy-scale tests that selected Synchronism over MOND
            (2 discriminated; both selected MOND) — Synchronism
            currently occupies the <strong>interpretation + methodology</strong> category rather than the
            novel-physics category. An <em>interpretation</em> is evaluated by parsimony, explanatory elegance, and
            conceptual economy, not by novel empirical predictions (like Bohmian mechanics vs Copenhagen vs Many-Worlds —
            all make identical predictions). A <em>methodology</em> is evaluated by its reproducibility and
            applicability as a research tool. Both are legitimate contributions; neither requires confirmed novel physics.
            If a future prospective test produces a discriminating result — one that MOND+EFE+ΛCDM cannot explain —
            this classification can be upgraded. TEST-02 (wide binary density dependence) is the candidate most often cited,
            but is triple-conditional: the anomaly is disputed, a MOND-scale detection would favour MOND (whose
            prediction is set by its &ldquo;external field effect&rdquo;) and the framework&apos;s acceleration-keyed version equally, so
            it would not separate them, and the density-keyed version&apos;s amplitude depends on an unfixed density knee. It is ~80× below reach only
            at a knee nothing else in the framework uses; at the published calibration the density law is already
            excluded in the solar neighbourhood (<Link href="/tier-1-existing#TEST-02" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 TEST-02</Link>).
          </p>
          <details style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note</summary>
            This box used to read &ldquo;6 reparametrizations, 0 galaxy-scale discriminators vs MOND&rdquo; and
            &ldquo;amplitude is ~80× below reach&rdquo;. The reparametrization count now matches the Honest Assessment
            scoreboard. &ldquo;0 discriminators&rdquo; read as the retracted claim that no test separated the two models,
            and the ~80× figure holds only at one choice of knee.
          </details>
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
              (1) the wide-binary anomaly is itself disputed (Chae 2023 ~10σ detection vs Banik et al. 2024 / Pittordis &amp; Sutherland: Newtonian consistency); (2) even if real, it is MOND+EFE degenerate; (3) the predicted amplitude depends on an unfixed density knee (~80× below Gaia DR3 reach at the knee that yields the quoted 0.05–0.4%; excluded locally at the published calibration).
              No component of this triple-conditional stack is currently resolved. The self-consistency loop gap (C(ρ) has no fixed-point equation) is the deepest structural question.</li>
            <li>A <strong>demonstration of radical honesty</strong>: failures documented, reparametrizations acknowledged,
              kill criteria defined, 0 unique confirmed predictions. The honest-assessment page lists every
              executed refutation with its execution date and mechanism root, and keeps superseded wordings visible in
              revision notes.</li>
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
          (disputed anomaly + EFE-degenerate + knee-conditional amplitude) rather than a standing discriminator.
          Until a condition of the triple stack resolves, the framework&apos;s contribution is interpretive and methodological,
          not empirically novel. That&apos;s a real contribution — just not the one the landing page implies.
        </p>

        <p style={{ marginTop: '2rem', marginBottom: 0, color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
          <strong>Beginner path, next step:</strong> read only the{' '}
          <Link href="/honest-assessment#if-you-read-nothing-else" style={{ color: 'var(--color-accent-blue)' }}>&ldquo;If you read nothing else&rdquo; box on Honest Assessment</Link>{' '}
          (~4 min). The rest of that page is a long audit, there for when you want the evidence behind the verdict.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/honest-assessment#if-you-read-nothing-else" className="btn-primary">
            Honest Assessment: the short version
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
