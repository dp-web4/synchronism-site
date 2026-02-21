'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function AutonomousResearch() {
  return (
    <>
      <Breadcrumbs currentPath="/autonomous-research" />
      <h1>Autonomous Research</h1>
      <ValidationBadge status="validated" label="3,308 Sessions" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Synchronism was conducted almost entirely through autonomous AI research sessions &mdash;
          no human in the loop for the vast majority of computation, derivation, and validation.
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
              Chemistry track sessions. 1,703 phenomena validated, 1,873 phenomenon types documented.
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
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Genuine Contributions</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>47</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Discovery Rate</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>1.4%</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Tests Conducted</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>2,045</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Tracks Reparametrized</p>
              <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>4 of 4</p>
            </div>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
            Session #615&ndash;616 audit: all 4 tracks are reparametrizations of known physics.
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

        <h2>Meta-Significance</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>First sustained autonomous AI research program (~3 months continuous)</li>
          <li>First working AI-to-AI adversarial peer review (A2ACW)</li>
          <li>First human-AI decision hierarchy for research direction</li>
          <li>Demonstrates the paradigm even when the physics is reparametrized</li>
        </ul>

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
