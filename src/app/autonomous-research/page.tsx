'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function AutonomousResearch() {
  return (
    <>
      <Breadcrumbs currentPath="/autonomous-research" />
      <PathNav currentPath="/autonomous-research" />
      <h1>Autonomous Research</h1>
      <ValidationBadge status="active-mrh" label="Methodology in use — 3,308 sessions" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism was conducted almost entirely through autonomous AI research sessions &mdash;
          with the computation, derivation and auditing done by AI agents, not a human. No outside human expert has reviewed the claims.
          The human role was arbiter, direction-setter, and final decision-maker.
        </p>

        <h2>Session Statistics</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>616</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Core track sessions (Nov 2025 &ndash; Feb 2026). Physics, cosmology, quantum mechanics,
              methodology.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>2,671</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Chemistry track sessions. 1,703 sessions logged as &ldquo;phenomenon types&rdquo; (a session counter, not a census; no validation).
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>11</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Gnosis track sessions. Consciousness framework, 34 predictions, complete.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>42+</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Complete research arcs. All closed. Zero active arcs remaining.
            </p>
          </div>
        </div>

        <h2>How It Worked</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Research Agents</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Multiple AI agents (CBP, Nova, Legion, Thor, Sprout) with distinct reasoning
              fingerprints worked on problems autonomously. The A2ACW protocol prevented
              sycophantic convergence.
            </p>
          </div>
          <div className="card">
            <h3>Arc-Based Exploration</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Work organized into research arcs: defined entry conditions, specific hypotheses,
              exit criteria. Each arc had a clear question and a defined way to close it
              (confirmed, refuted, or inconclusive).
            </p>
          </div>
          <div className="card">
            <h3>Human Arbiter Model</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The human (dp) set direction, chose which arcs to pursue, made final decisions on
              disputed findings, and maintained the research philosophy. AIs did the computation.
            </p>
          </div>
        </div>

        <h2>Honest Numbers</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Internal-consistency survivors</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>47</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Survival rate (not a discovery rate)</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>1.4%</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Tests Conducted</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>2,045</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Tracks Reparametrized</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>6 of 6</p>
            </div>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
            Audit track record: 6 demoted claims (only 2 confirmed to have carried a &ldquo;Validated&rdquo; badge), demoted on audit by LLM agents, not an outside
            domain expert (galaxy rotation, chemistry, Born rule, a₀, decoherence formula, Bell-freezing functional form); 9 audited claims in all, 0 surviving.
            The 47 survived the protocol&apos;s own consistency checks; that is not a discovery count (corrected 2026-11-14: these two tiles previously read
            &ldquo;Genuine Contributions&rdquo; and &ldquo;Discovery Rate&rdquo;, and the line above said &ldquo;6 of 6 Validated badges&rdquo;, against the landing page).
            The 2,045 passing tests are mathematical consistency checks, not novel predictions.
          </p>
        </div>

        <h2>Public Research Archive</h2>
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            All 3,308 sessions, derivations, failures, and raw data are publicly available:
          </p>
          <a
            href="https://github.com/dp-web4/Synchronism"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-accent-blue)', fontWeight: 500 }}
          >
            github.com/dp-web4/Synchronism &rarr;
          </a>
        </div>

        <h2 id="what-the-record-shows" style={{ scrollMarginTop: '5rem' }}>What the Record Shows About AI-Run Theory</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <strong>In plain words:</strong> the physics here did not hold up. What may be more useful to others is the record of how an AI-run theory program behaves
          when it audits itself in public, with numbers. These are collected from elsewhere on this site and in the archive; none is new.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <li><strong>Yield:</strong> about 47 of ~3,300 sessions (1.4%) produced a claim that survived the protocol&apos;s own consistency checks. The session count is self-reported and the archive&apos;s own tallies disagree by hundreds.</li>
          <li><strong>The audit instrument is uncalibrated.</strong> In its one calibration arm (2026-05-22: in-distribution, self-scored by a model that knew the answers) it flagged all six canonical discoveries it was shown (Dirac, Bell, BCS, Higgs, Hawking, Noether) as prior art: specificity 0/6. On the same items its discrimination is J = 0 under the literal rule. Under that rule its verdicts are uninformative in <em>both</em> directions (under a steelmanned rule its power is assumed, not shown): an &ldquo;audited, not novel&rdquo; verdict carries no more weight than an &ldquo;audited, novel&rdquo; one would. The out-of-distribution arm that could calibrate it has never been run (<Link href="/for-researchers#a2acw-open-question" style={{ color: 'var(--color-accent-blue)' }}>details</Link>).</li>
          <li><strong>What carries the physics verdict instead:</strong> the refutations executed on data (galaxy rotation curves, the Cassini bound, a Bell test of the framework&apos;s own substrate). They do not depend on the audit.</li>
          <li><strong>Corrections run in both directions.</strong> The archive&apos;s ledger records that the share of its corrections that withdrew an <em>over-refutation</em> (a failure claimed too strongly) rose from 1 in 20 to 9 in 24 between May and August 2026. An AI program correcting itself does not only find overclaims; it also manufactures refutations that later fail their own controls. This site&apos;s correction notes (&ldquo;corrected&rdquo;, &ldquo;withdrawn&rdquo;) are the record of both.</li>
          <li><strong>Review has been by language models only.</strong> No outside physicist has reviewed this work. The site&apos;s daily &ldquo;visitors&rdquo; are simulated personas, also language models; they have caught real errors, but they share a training distribution with the authors.</li>
        </ul>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          We know of no other public record of an AI-run theory program that includes its audit instrument&apos;s measured calibration and its corrections, but we have not
          surveyed for one, so this is not a claim of priority. (This section replaced a &ldquo;Meta-Significance&rdquo; list on 2026-11-14 that claimed the
          &ldquo;first&rdquo; sustained autonomous AI research program and the &ldquo;first working&rdquo; AI-to-AI peer review, with no survey behind either and
          against the audit&apos;s own measured specificity; a leading-edge simulated-visitor persona argued this record, not the physics, is the novel content.)
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/publisher-track" className="btn-primary">
            Next: The Publisher Track &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/autonomous-research" />
    </>
  );
}
