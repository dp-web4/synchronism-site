'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function HonestAssessment() {
  return (
    <>
      <Breadcrumbs currentPath="/honest-assessment" />

      <h1>Honest Assessment</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '65ch' }}>
        Synchronism is an experimental research framework. This page documents what works,
        what failed, what we got wrong, and what remains untested. Updated as new results come in.
      </p>

      {/* Overall Verdict */}
      <section className="card card-highlight section">
        <h2 style={{ color: 'var(--color-accent-warm)' }}>The Verdict (Session #616)</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          After 3,308 sessions: <strong>0 unique confirmed predictions</strong> that can&apos;t be explained
          by existing physics. All results are either consistent with MOND + mass-to-light corrections,
          or are reparametrizations of known physics. However, the framework produced{' '}
          <strong>30 genuine contributions</strong> as a research tool &mdash; wrong-but-productive.
        </p>
      </section>

      {/* What Works */}
      <section className="section">
        <h2>What Works</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Galaxy Rotation: ALFALFA-SDSS</h3>
              <ValidationBadge status="supported" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              14,585 galaxies. Environment-dependent RAR scatter (NP2) at p = 5&times;10<sup>&minus;6</sup>.
              &#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex, below CDM prediction.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Caveat: MOND + M/L corrections explain all variance. 86% of RAR scatter remains unexplained (R&sup2; = 0.14).
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>MOND Unification: a&#x2080; = cH&#x2080;/(2&#x03C0;)</h3>
              <ValidationBadge status="validated" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              MOND&apos;s acceleration constant derived from cosmological parameters. 10% error vs observed value.
              This is a genuine theoretical contribution.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Chemistry: &#x03B3; &#x2248; 1 Boundary</h3>
              <ValidationBadge status="validated" label="89% Validated" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              1,703 chemical phenomena. Sound velocity r = 0.982, electronegativity r = 0.979.
              Top correlations are strong.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Caveat: ~11% failure rate. Era 2 chemistry (sessions 134-2660) identified as template-based.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Freeman&apos;s Law: &#x03A3;&#x2080; from First Principles</h3>
              <ValidationBadge status="validated" label="12% Error" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Surface density &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G). 12% error vs Freeman&apos;s observed value (124 M&#x2609;/pc&sup2;).
            </p>
          </div>
        </div>
      </section>

      {/* What Failed */}
      <section className="section">
        <h2>What Failed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Melting Point Predictions</h3>
              <ValidationBadge status="failed" label="53% Error" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Average error 53%. Crystal structure dominates melting behavior, and C(&#x03C1;) has no crystal-specific parameters.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Critical Exponents</h3>
              <ValidationBadge status="failed" label="2× Off" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Predicted exponents differ from observed by a factor of ~2. Universality class physics can&apos;t be captured by a single coherence parameter.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Superconductor T<sub>c</sub></h3>
              <ValidationBadge status="failed" label="6.5× Wrong" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              T<sub>c</sub> = &#x0394;/(1.76k<sub>B</sub>&#x03B7;) predicts 607K for YBCO. Actual: 93K. Off by 6.5&times;.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>&#x03B7; Reachability Factor</h3>
              <ValidationBadge status="reparametrization" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Independently derived, then found to be identical to Abrikosov-Gor&apos;kov pair-breaking efficiency (1960).
              All 23 superconductor predictions are standard condensed matter in different notation.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Fractal Coherence Bridge</h3>
              <ValidationBadge status="failed" label="Negative Verdict" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              C(&#x03C1;) was proposed to explain cross-scale hierarchy boundaries. 36/36 tests: 0/7 boundaries predicted.
              The tanh form is generic (Landau theory). C(&#x03C1;) is description, not explanation.
            </p>
          </div>
        </div>
      </section>

      {/* Untested */}
      <section className="section">
        <h2>What&apos;s Untested</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Consciousness Threshold (C &#x2248; 0.50)</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              34 falsifiable predictions. Requires EEG experiments ($150K, 12 months).
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Quantum Predictions</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              6 testable protocols for MRH-based measurement theory. Requires dedicated experiments.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>BAO Modulation</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Synchronism predicts density-dependent modulation of BAO peak positions. Testable with existing survey data.
            </p>
          </div>
        </div>
      </section>

      {/* 30 Contributions */}
      <section className="section content-width">
        <h2>The 30 Genuine Contributions</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Even when predictions were wrong, the framework was productive. Post-SPARC audit (Session #616)
          identified 30 genuine contributions:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem' }}>
          <li>MOND&apos;s a&#x2080; derived from cosmology (strongest result)</li>
          <li>Freeman&apos;s Law from first principles</li>
          <li>Environment-dependent RAR scatter hypothesis</li>
          <li>&#x03B3; &#x2248; 1 as universal quantum-classical marker</li>
          <li>Pair-breaking efficiency as materials design optimization target</li>
          <li>A2ACW adversarial collaboration methodology</li>
          <li>Autonomous multi-agent research infrastructure</li>
          <li>And 23 more documented in the{' '}
            <Link href="/publication-roadmap" style={{ color: 'var(--color-accent-blue)' }}>publication roadmap</Link>
          </li>
        </ul>
      </section>

      <section className="section content-width">
        <h2>Bottom Line</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Synchronism is not a theory of everything. It&apos;s a research tool that maps density
          to coherence and sometimes produces useful insights. The coherence function works well
          as a classification tool (what regime is a system in?) but poorly as a predictive tool
          (what exactly will happen?). Its best results come from cosmology; its worst from
          condensed matter.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &ldquo;All models are wrong; some are useful.&rdquo; &mdash;{' '}
          <Link href="/research-philosophy" style={{ color: 'var(--color-accent-blue)' }}>Research Philosophy</Link>
        </p>
      </section>

      <RelatedConcepts currentPath="/honest-assessment" />
    </>
  );
}
