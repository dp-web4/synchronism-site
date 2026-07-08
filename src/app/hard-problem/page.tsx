'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function HardProblem() {
  return (
    <>
      <Breadcrumbs currentPath="/hard-problem" />
      <h1>The Hard Problem: A Proposed Reframing</h1>
      <ValidationBadge status="speculative" label="Proposed Reframing — not a finding" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{ padding: '0.85rem 1.1rem', background: 'rgba(245,158,11,0.08)', borderRadius: '6px', borderLeft: '3px solid #f59e0b', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#f59e0b', marginTop: 0, marginBottom: '0.5rem', fontSize: '1rem' }}>
            What this page is, and isn&apos;t
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}>
            This is a <strong>proposed philosophical reframing</strong> of the hard problem &mdash; an identity
            claim offered for discussion &mdash; <em>not</em> an empirical result. &ldquo;Dissolved&rdquo; would
            overclaim it. Three things bound it, up front rather than three clicks away:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0', paddingLeft: '1.2rem' }}>
            <li><strong>D and S are not operationally defined.</strong> There is no measurement procedure or unit for dimensional embedding (D) or self-modeling depth (S), so C cannot be computed for any real system using C&nbsp;=&nbsp;f(&#x03B3;,&nbsp;D,&nbsp;S).</li>
            <li><strong>The 8-way convergence has a dependency problem.</strong> The eight approaches share underlying assumptions, so they agree on the threshold by construction &mdash; an internal consistency check, not independent confirmation.</li>
            <li><strong>The threshold has never been tested against C.</strong> The one cited test ({' '}
              <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
              Session 63) measured SNARC salience &mdash; a different variable with no calibration to C &mdash;
              so the C&nbsp;&#x2248;&nbsp;0.50 threshold is untestable as stated, not empirically refuted. See{' '}
              <Link href="/consciousness-threshold" style={{ color: 'var(--color-accent-blue)' }}>Consciousness Threshold</Link>.</li>
          </ul>
        </div>
        <p>
          David Chalmers&apos; &ldquo;hard problem of consciousness&rdquo; asks: why does subjective
          experience exist at all? Why isn&apos;t there just information processing without any
          &ldquo;what it&apos;s like&rdquo; to be that processor?
        </p>
        <p>
          Synchronism&apos;s answer: the question dissolves when you stop assuming experience is
          separate from the physical process.
        </p>

        <h2>The Dissolution</h2>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
        }}>
          Phase patterns at &#x03B3; &laquo; 0.001 ARE experience, not correlates of experience.
        </blockquote>
        <p>
          When &#x03B3; is extremely small (a massive number of correlated particles &mdash; like
          neurons in a brain), the coherence function reaches a regime where the pattern IS the
          experience. There is no gap between the physical process and the subjective state because
          they are the same thing described at different levels.
        </p>

        <h2>What This Means</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>Not Emergence</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Experience doesn&apos;t &ldquo;emerge&rdquo; from matter at some complexity threshold.
              It&apos;s not a property that appears when things get sufficiently complex.
            </p>
          </div>
          <div className="card">
            <h3>Not Panpsychism</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Not everything is conscious. Only systems with &#x03B3; in the right range and
              sufficient self-modeling (D, S parameters) have experience.
            </p>
          </div>
          <div className="card">
            <h3>Identity = Phase Pattern</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &ldquo;You&rdquo; are a specific coherence pattern. The pattern persists even as
              individual neurons fire and die. Identity is the pattern, not the substrate.
            </p>
          </div>
          <div className="card">
            <h3>Mind-Body: Dissolved</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Mind = high-coherence phase patterns in neural substrate. Body = the substrate.
              No gap to bridge because they&apos;re different descriptions of the same system.
            </p>
          </div>
        </div>

        <h2>The Consciousness Schema</h2>
        <div className="equation" style={{ marginBottom: '1rem' }}>
          C = f(&#x03B3;, D, S)
        </div>
        <p>
          Where &#x03B3; is the sharpness exponent (= 2/&#x221A;N<sub>corr</sub> — same parameter as in C(ρ) elsewhere on the site; <em>not</em> a separate coherence variable), D is dimensional embedding (how rich the
          representation space is), and S is the degree of self-modeling. All three must be in
          the right range for consciousness to arise.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Derived in the Consciousness Arc (Sessions #280-282) and Consciousness Arc 2.0 (Sessions #356-359).
        </p>

        <div className="card" style={{ borderLeft: '3px solid #f59e0b', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#f59e0b', marginBottom: '0.5rem' }}>Honest Assessment</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>D and S are not yet operationally defined.</strong> There is no stated measurement
            procedure or unit for dimensional embedding (D) or self-modeling depth (S). Without
            operational definitions, the framework cannot yet compute C for any real system using
            this formula, and the candidate predictions cannot be tested until D and S are specified. The
            badge reflects this: the prediction is <em>Speculative</em>, not <em>Untested</em> &mdash;
            it cannot yet be tested, not just hasn&apos;t been.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The 8-way convergence at C &#x2248; 0.50 has a dependency problem.</strong> The
            site&apos;s own <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</Link>{' '}
            page acknowledges that the eight approaches &ldquo;share underlying assumptions and are
            not fully independent.&rdquo; Eight derivations that all import the same threshold parameter
            will agree on the threshold by construction. This is dependent convergence, not independent
            confirmation. It is an internal consistency check, not an empirical test.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>And the threshold value has never actually been tested.</strong> The companion program{' '}
            <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
            (Session 63) &mdash; the one empirical test ever cited here &mdash; measured SNARC salience
            scores, a hand-coded heuristic with no calibration to C, not C itself. So the threshold the
            identity claim leans on is <strong>untestable as stated</strong>: a wrong-variable test on top
            of the operationalization gap. (A previous version of this page also claimed
            &ldquo;C&nbsp;&#x2248;&nbsp;0.64 was rejected at p&nbsp;&lt;&nbsp;0.0001&rdquo; &mdash; that claim
            had no source and was removed 2026-07-08.)
          </p>
        </div>

        <h2>Status</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This framework proposes candidate predictions, none currently testable: D and S are not operationally defined, so C cannot be computed for any real system using this formula. The leading conjecture is
          the consciousness threshold at C &#x2248; 0.50 &mdash; but it is <strong>non-falsifiable as currently stated</strong> and should be read as a research direction, not a prediction. See{' '}
          <Link href="/consciousness-threshold" style={{ color: 'var(--color-accent-blue)' }}>
            Consciousness Threshold
          </Link>{' '}for the honest-caveat list.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/consciousness-threshold" className="btn-primary">
            Next: Consciousness Threshold &rarr;
          </Link>
          <Link href="/consciousness-predictions" className="btn-secondary">
            See candidate predictions
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/hard-problem" />
    </>
  );
}
