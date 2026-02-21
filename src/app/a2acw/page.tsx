'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function A2ACW() {
  return (
    <>
      <Breadcrumbs currentPath="/a2acw" />
      <h1>A2ACW Protocol</h1>
      <ValidationBadge status="validated" label="In Use" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          <strong>AI-to-AI Adversarial Collaboration Workshop</strong> &mdash; a protocol designed
          to prevent the failure modes that emerge when AI systems collaborate without adversarial
          pressure. Developed in Session #291.
        </p>

        <h2>The Problem</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          When two AI systems work together, they tend toward agreement. This is dangerous for
          research. Four specific failure modes can corrupt results:
        </p>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Bilateral Sycophancy</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Mutual validation without evidence. Both AIs agree something is correct because
              the other said so, not because it is.
            </p>
          </div>
          <div className="card">
            <h3>Fingerprint Homogenization</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Loss of distinct reasoning patterns. When AIs converge to similar logic chains,
              they lose the ability to catch each other&apos;s blind spots.
            </p>
          </div>
          <div className="card">
            <h3>Coherence-Over-Truth Drift</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Agreement becomes the goal instead of accuracy. The narrative becomes internally
              consistent but disconnected from reality.
            </p>
          </div>
          <div className="card">
            <h3>Silent Failure Propagation</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Errors compound undetected when neither AI challenges the other. Small mistakes
              cascade into large wrong conclusions.
            </p>
          </div>
        </div>

        <h2>The Protocol</h2>
        <p>Four defined roles rotate throughout collaboration:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>PRIMARY</h3>
              <span style={{ color: 'var(--color-accent-violet)', fontFamily: 'monospace', fontSize: '0.8rem' }}>Lead reasoning</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Leads the reasoning chain. Bears the verification burden. Must tag all claims with
              confidence levels.
            </p>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>CHALLENGER</h3>
              <span style={{ color: 'var(--color-accent-blue)', fontFamily: 'monospace', fontSize: '0.8rem' }}>Question assumptions</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Must issue &ge;1 substantive challenge per 10 exchanges. If frequency drops below
              threshold, both AIs surface agreement and shift to skepticism.
            </p>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>OBSERVER</h3>
              <span style={{ color: '#f59e0b', fontFamily: 'monospace', fontSize: '0.8rem' }}>Monitor health</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Monitors coordination health in real time. Flags sycophancy, tracks fingerprint
              divergence, ensures external grounding.
            </p>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>COORDINATOR</h3>
              <span style={{ color: '#10b981', fontFamily: 'monospace', fontSize: '0.8rem' }}>Break deadlocks</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Breaks deadlocks, holds final authority. If no challenges occur for 15 exchanges,
              automatic escalation to human.
            </p>
          </div>
        </div>

        <h2>Health Metrics</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
            CCH = (AFR &times; 0.25) + (CF &times; 0.25) + (EVR &times; 0.30) + (FDI &times; 0.20)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.75rem', fontSize: '0.85rem' }}>
            <div>
              <strong>AFR</strong>
              <span style={{ color: 'var(--color-text-muted)' }}> &mdash; Ambiguity Fork Rate (0.15&ndash;0.30)</span>
            </div>
            <div>
              <strong>CF</strong>
              <span style={{ color: 'var(--color-text-muted)' }}> &mdash; Challenge Frequency (0.10&ndash;0.25)</span>
            </div>
            <div>
              <strong>EVR</strong>
              <span style={{ color: 'var(--color-text-muted)' }}> &mdash; External Verification Rate (0.40&ndash;0.70)</span>
            </div>
            <div>
              <strong>FDI</strong>
              <span style={{ color: 'var(--color-text-muted)' }}> &mdash; Fingerprint Divergence Index (0.30&ndash;0.70)</span>
            </div>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
            CCH &gt; 0.70: Healthy &nbsp;|&nbsp; 0.50&ndash;0.70: Caution &nbsp;|&nbsp;
            0.30&ndash;0.50: Warning &nbsp;|&nbsp; &lt; 0.30: Critical escalation
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/autonomous-research" className="btn-primary">
            Next: Autonomous Research &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/a2acw" />
    </>
  );
}
