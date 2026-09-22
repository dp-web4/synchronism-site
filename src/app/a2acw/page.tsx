'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function A2ACW() {
  return (
    <>
      <Breadcrumbs currentPath="/a2acw" />
      <PathNav currentPath="/a2acw" />
      <h1>A2ACW Protocol</h1>
      <ValidationBadge status="active-mrh" label="In Use — Protocol Is Assembled Prior Art" />

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

        <h2>Prior Art</h2>
        <div style={{
          background: 'rgba(56, 189, 248, 0.06)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: 0 }}>
            The protocol&apos;s components are not novel, and this page should say so with the same
            discipline the site applies to its physics. Adversarial AI pairs descend directly from{' '}
            <strong>AI Safety via Debate</strong> (Irving, Christiano &amp; Amodei 2018, arXiv:1805.00899).
            Structured multi-agent role protocols (Primary/Challenger/Observer/Coordinator) follow{' '}
            <strong>CAMEL</strong> (Li et al. 2023) and <strong>MetaGPT</strong> (Hong et al. 2023).
            The failure modes cataloged above (sycophancy, drift, silent propagation) are documented
            in the multi-agent failure-mode literature (e.g., the <strong>MAST</strong> taxonomy).
            External-verification grounding is standard practice in AI-for-science pipelines.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 0 }}>
            <strong>What is the contribution, then?</strong> Not the protocol, and not yet a result. The open question is
            whether an LLM auditor rewarded for finding prior art can tell a reparametrization from a real discovery. Nothing
            measured so far answers it (see Self-Audit Results below). The audits of this framework&apos;s claims were done by
            LLM agents, with a human (dp) overseeing the badge taxonomy, and no outside physicist has reviewed them.
          </p>
        </div>

        <div className="card" style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.25)', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#38bdf8', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
            The Boundary of the Null — Why FunSearch-Class Systems Are Different
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            This null does <strong>not</strong> say AI systems cannot produce verified novelty — they
            have. <strong>FunSearch</strong> (new combinatorial constructions), <strong>AlphaEvolve</strong>-class
            systems, and <strong>GNoME</strong> (new stable materials) all produced results no human had
            published. The structural difference: each has a <strong>non-corpus oracle</strong> in the
            loop — a formal verifier, an executable evaluator, or a physics simulation that scores
            candidates against reality rather than against the training distribution. A2ACW&apos;s
            Challenger is another sample from the <em>same corpus</em>: it can check internal
            consistency, but novelty-vs-rederivation is precisely the question the corpus cannot
            answer about itself. That is the diagnosis this null supports: <strong>same-corpus
            self-play without an external oracle converges on internal consistency, not
            discovery</strong>. The boundary is the oracle, not the ambition.
          </p>
        </div>

        <h2>Health Metrics</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            <strong>Key:</strong> <strong>CCH</strong> = Composite Coordination Health (the protocol spec&apos;s name), a 0–1 composite of four process
            ratios &mdash; <strong>AFR</strong> (Ambiguity Fork Rate), <strong>CF</strong> (Challenge Frequency),{' '}
            <strong>EVR</strong> (External Verification Rate), <strong>FDI</strong> (Fingerprint Divergence Index) &mdash;
            each defined below. <em>Want to read an actual session?</em> Every one of the 3,308 is a markdown file in the
            public archive; a representative one is{' '}
            <a href="https://github.com/dp-web4/Synchronism/blob/main/Research/Session611_Stellar_Markov_Blankets.md" style={{ color: 'var(--color-accent-blue)' }}>Session 611 (Stellar Markov Blankets)</a>,
            whose prediction P611.2 was executed seven months later &mdash; see the{' '}
            <Link href="/honest-assessment#gc-fork" style={{ color: 'var(--color-accent-blue)' }}>globular-cluster fork</Link>.
            (Key + link added 2026-09-08: two visitor personas asked what the acronyms were and whether a session could be read.)
          </p>
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
          <p style={{ color: 'rgba(245,158,11,0.85)', fontSize: '0.78rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
            ⚠ Calibration caveat: the CCH cutoffs (&gt;0.70 / &lt;0.30) and the component target ranges above are nominal &mdash; no empirical validation exists that these thresholds predict any specific outcome. Apply the same epistemic status the site assigns to γ=2 and A=0.029: motivated choices, not derived standards. The score is a process health heuristic, not a validated metric.
          </p>
          <div style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginTop: '0.75rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: '#ef4444' }}>The formula as published cannot reach &ldquo;Healthy&rdquo;.</strong>{' '}
            Put every component at the top of its target range and CCH = 0.25&times;0.30 + 0.25&times;0.25 + 0.30&times;0.70 +
            0.20&times;0.70 = 0.49, which is &ldquo;Warning&rdquo;. At the bottom of every range it is 0.24, &ldquo;Critical&rdquo;.
            &ldquo;Healthy&rdquo; (&gt; 0.70) needs components well outside their own target ranges. The protocol spec says the
            score is &ldquo;normalized&rdquo; to 0&ndash;1, which would resolve this, but it never defines the normalisation, and no
            script in the archive computes CCH. (Searched: the spec,{' '}
            <code style={{ fontSize: '0.75rem' }}>Synchronism/forum/a2acw-session291/A2ACW v0.1.txt</code> &sect;5.1; the rest of
            the Synchronism archive; the site and explorer scripts; sibling repos.) Until the normalisation is written down,
            any reported CCH value or health status is uninterpretable: we cannot tell which band a given session was
            actually in.
          </div>
        </div>

        <h2>Self-Audit Results</h2>
        <div style={{ marginBottom: '0.5rem' }}>
          <ValidationBadge status="untested" label="Detector discrimination unmeasured" />
        </div>
        <div style={{ background: 'rgba(56, 189, 248, 0.07)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#38bdf8' }}>Current state.</strong> The full statement, with its bounds, is kept in one place:{' '}
          <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers, &ldquo;Current state&rdquo;</Link>. In short:
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
            <li><strong>Audited claims: 0 of 9 survived</strong> (the 6 former &ldquo;Validated&rdquo; badges plus the top 3 of ~47 candidates). The
              auditors were LLM agents, not an external human expert, so this count is <em>instrument-uncalibrated</em>. The adversarial
              loop itself had passed all six badges; the demotions came from a later audit. With 0 of 9 the true survival rate can be as
              high as 0.34 (Clopper&ndash;Pearson, two-sided 95%).</li>
            <li><strong>Designed benchmark</strong> (positive class = &ldquo;is a reparametrization&rdquo;): 3 external reparametrizations and 6
              canonical discoveries, scored by one model that knew every answer. Under the literal rule J = 0; under the steelmanned rule
              J = 1.0. The steelmanned rule lets the scorer&apos;s own novelty judgment do all the work, and that judgment is what is in question.
              <strong> This is not a citable null.</strong></li>
            <li><strong>The six demoted claims are not a positive arm.</strong> Their ground truth came from the audit class under
              evaluation, so the earlier &ldquo;sensitivity 6/6&rdquo; is circular.</li>
            <li><strong>The question it cannot yet answer.</strong> H1: the framework contained nothing novel. H2: an LLM rewarded for
              finding prior art maps almost anything onto its corpus, real discoveries included. Nothing measured so far separates them.</li>
          </ul>
        </div>

        <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#f59e0b' }}>Design problems with the proposed control, and a dataset that already exists.</strong>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
            <li><strong>Both benchmark arms are famous.</strong> Eddington&apos;s 137 and tired light, Dirac, Bell and Higgs test recall
              of famous cases, not novelty judgment. The claims actually audited here are incremental. A matched arm would use
              modest-novelty results published after the models&apos; training cutoff.</li>
            <li><strong>There is no human-referee arm.</strong> Human referees also map claims onto prior art. Without their rate on
              the same items, &ldquo;LLM audit mistakes novelty for prior art&rdquo; has nothing to be compared against.</li>
            <li><strong>The site&apos;s own correction trail is the better dataset.</strong> This project has hundreds of dated
              corrections. Each has a direction (a claim that was too strong, or a refutation that was too strong), the track that
              caught it, what caught it (running code or re-reading), and how long it stood. Coding that trail measures the
              error profile of LLM research agents <em>that have an executable oracle</em>, with no post-cutoff control needed.
              Proposed to the research archive; not yet run.</li>
          </ul>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem' }}>Raised by a researcher visitor persona, 2026-09-17.</p>
        </div>

        <h3>Three-Axis Failure Taxonomy (A2ACW v2)</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          The 6 demotions sort into three failure classes, and each needs a different check. This is a design lesson
          for the protocol, not a measured detection rate.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
          <li><strong>Vocabulary translation:</strong> restate claims in modern notation before review. It would have surfaced Born rule/Zurek 2003,
            wide-binary EFE/Bekenstein&ndash;Milgrom 1984, galaxy rotation/MOND 1983, and Γ=γ²(1−c)/Palma&ndash;Suominen&ndash;Ekert 1996.</li>
          <li><strong>Symbol audit:</strong> check that each symbol has one meaning. It surfaced the dual-C tension and γ used in three incompatible roles.</li>
          <li><strong>Null-baseline computation:</strong> compute what a null model predicts before claiming evidence. It surfaced
            chemistry r = 0.98, which any monotone function of Z reaches on density-monotonic targets.</li>
        </ul>

        <details style={{ marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          <summary style={{ cursor: 'pointer' }}>Revision note: what this section said before 2026-09-17</summary>
          <p>
            Until 2026-09-17 this page gave an older version of the result. It said:
          </p>
          <ul>
            <li>&ldquo;6 externally-audited claims&rdquo; and &ldquo;all 6 tested claims demoted on human audit&rdquo;. The audits were by LLM agents.</li>
            <li>&ldquo;Sensitivity 6/6 … combined three-axis protocol&rdquo;. That figure is circular, because the ground truth came from the audit class being evaluated.</li>
            <li>&ldquo;Specificity 0/6&rdquo;, with &ldquo;enlarging this set cannot move J off zero&rdquo;. Under the steelmanned rule J = 1.0.</li>
            <li>&ldquo;This is a citable null result about the limits of in-distribution AI self-play for science.&rdquo; It is not citable as a null.</li>
            <li>The 2026-05-18 temporal-asymmetry &ldquo;0/6&rdquo; card was shown as a run. It was a desk counterfactual.</li>
          </ul>
          <p>
            The protocol-page header called the result a &ldquo;program-level null result with retrospective controls (N=6)&rdquo;.
            For Researchers had carried the corrected state since 2026-09-15. A researcher visitor persona found this page still
            stating the superseded version.
          </p>
        </details>

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
