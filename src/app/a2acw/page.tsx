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
            <strong>What is the contribution, then?</strong> Not the protocol — the{' '}
            <em>program-level null result with retrospective controls (N=6)</em>: 6 externally-audited
            claims (of 47 internal-consistency candidates drawn from a 3,308-session corpus), with
            measured sensitivity (4/4 prior-art rediscoveries caught after
            vocabulary translation) <em>and</em> measured specificity (0/6 — every held-out genuine
            discovery false-flagged), that same-corpus adversarial AI pairs filter for internal
            consistency but cannot generate or detect novelty. The controls are the artifact; the
            protocol is assembled prior art. <em>Evidence-class caveat: the controls are
            retrospective audits on six items from one corpus and one framework — not preregistered
            held-out experiments. &ldquo;Controlled&rdquo; in the experimental-design sense would
            overstate it.</em>
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
        </div>

        <h2>Self-Audit Results</h2>
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
        }}>
          <h3 style={{ color: '#f59e0b', marginTop: 0, fontSize: '0.95rem' }}>A2ACW is a reparametrization detector, not a discovery engine</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Two AI models trained on the same physics corpus share the same blind spots. A2ACW filters
            for internal consistency — it <strong>cannot test for out-of-distribution novelty</strong>.
            The 1.4% internal-consistency-survival rate is an upper bound on internal coherence, not a discovery rate.
            Retrospective audits of 6 demoted claims confirmed this: the in-distribution self-play correctly
            challenged each claim but stayed within the shared training distribution.
          </p>
        </div>

        <h3>Retrospective Catch-Rate Tests</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="card">
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ef4444', marginBottom: '0.25rem' }}>0 / 6</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              <strong>Temporal-asymmetry (2026-05-18)</strong>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>
              6 later-demoted claims tested against original A2ACW pressure. 0 caught.
              Median prior-art year: ~1996. The protocol challenged the claims but within
              the same corpus — shared blind spots are invisible to shared adversaries.
            </p>
          </div>
          <div className="card">
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22c55e', marginBottom: '0.25rem' }}>4 / 6</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              <strong>Vocabulary-asymmetry (2026-05-19)</strong>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>
              Claims pre-translated to modern register before adversarial review.
              Catches 4/4 of the prior-art-rediscovery sub-class. The 2 misses are
              different failure modes (not vocabulary failures).
            </p>
          </div>
        </div>

        <h3>Three-Axis Failure Taxonomy (A2ACW v2)</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          The 6 demotions decompose into three distinct failure classes, each requiring a different detection axis:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'monospace', color: '#8b5cf6', minWidth: '2.5rem' }}>Axis 1</span>
              <div>
                <strong>Vocabulary translation</strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>catches 4/4 prior-art rediscoveries</span>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', marginBottom: 0 }}>
                  Pre-translate claims to modern notation before adversarial review.
                  Catches: Born rule/Zurek 2003, wide-binary EFE/Bekenstein-Milgrom 1984, galaxy rotation/MOND 1983,
                  Γ=γ²(1−c)/Palma-Suominen-Ekert 1996.
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'monospace', color: '#38bdf8', minWidth: '2.5rem' }}>Axis 2</span>
              <div>
                <strong>Symbol audit</strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>catches notation collisions</span>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', marginBottom: 0 }}>
                  Check that each symbol has one meaning. Catches: dual-C tension (C(ρ) vs C(γ,D,S) — two
                  incompatible coherence functions). The framework uses γ in three incompatible roles
                  (regime constant γ=2, operational γ=2/√N_corr, noise coupling rate Γ=γ²(1-c)).
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'monospace', color: '#10b981', minWidth: '2.5rem' }}>Axis 3</span>
              <div>
                <strong>Null-baseline computation</strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>catches absence-of-evidence claims</span>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', marginBottom: 0 }}>
                  Compute what the null model predicts before claiming evidence. Catches:
                  chemistry r=0.98 (any monotone function of Z achieves r→1 on density-monotonic targets by construction;
                  a polynomial null matches or exceeds Synchronism&apos;s r — verified 2026-05-10).
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3>Specificity Audit (2026-05-22)</h3>
        <div style={{ background: 'rgba(139, 92, 246, 0.07)', border: '1px solid rgba(139, 92, 246, 0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          <strong>Positive class, stated explicitly (added 2026-07-27):</strong> throughout this section the
          <strong> positive class is &ldquo;the claim IS a reparametrization&rdquo;</strong> — the thing the
          detector is built to flag. So <em>sensitivity</em> is the catch rate on known-demoted claims, and
          <em> specificity</em> is the rate at which genuine discoveries are correctly <em>passed</em>.
          <br /><br />
          This is spelled out because two independent expert readers have now read these numbers as
          swapped — both assumed the positive class was &ldquo;genuinely novel,&rdquo; under which the
          labels do invert (sensitivity 0/6, specificity 6/6). Both conventions are defensible and both
          describe the same detector; the defect was leaving the convention unstated on a page whose
          subject is measurement discipline. <strong>Nothing about the verdict depends on the choice:</strong>{' '}
          Youden&apos;s J = sensitivity + specificity &minus; 1 = 0 under either labeling, which is the
          formal statement that this detector carries no information — it performs exactly at chance.
          J = 0 here is a degeneracy of the design, not a measurement, and should be read as such.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="card">
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22c55e', marginBottom: '0.25rem' }}>6 / 6</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              <strong>Sensitivity (catch rate on demotions)</strong>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>
              All 6 demoted claims caught by the combined three-axis protocol.
              This number alone is uninterpretable without specificity.
            </p>
          </div>
          <div className="card">
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ef4444', marginBottom: '0.25rem' }}>0 / 6</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              <strong>Specificity (genuine discoveries correctly passed)</strong>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>
              Held-out control: 6 genuine physics discoveries (COBE fluctuations, Higgs boson, gravitational wave first detection, etc.)
              submitted to vocabulary-asymmetry audit. Result: 0/6 passed — all were flagged as potential reparametrizations.
              Discrimination relies entirely on unautomated novelty judgment, not protocol mechanics.
              <strong> Sample-size caveat:</strong> n=6 gives a wide binomial confidence interval. Stated
              precisely (tightened 2026-07-27): the 95% two-sided Clopper&ndash;Pearson interval for 0
              successes in 6 puts the true <em>specificity</em> at ≤ ~0.46 — equivalently the true
              false-positive rate at ≥ ~0.54, <em>not</em> ≤ 0.46, which is how this sentence previously read.
              (A one-sided 95% bound gives 0.393 instead of 0.46; a reader who computes either number is
              right, and the convention is now named so the two don&apos;t look like a discrepancy.)
              So even &ldquo;flags everything&rdquo; is under-powered as stated; this is not a tight bound.
              The same caveat applies to the program-level null this sector is built on — a novelty-survival
              rate as high as ~39–46% is consistent with 0/6, and that null gets the
              &ldquo;underpowered&rdquo; badge on the same terms the galaxy tests do. The test is also partly over-determined: every
              real discovery sits atop decades of prior art, so &ldquo;flagged as reparametrization&rdquo; is
              expected to some degree by construction, not purely a protocol failure. The qualitative conclusion
              (retrieval aid, not detector) is likely right; the 0/6 precision is oversold relative to n=6.
            </p>
          </div>
        </div>
        <div style={{ background: 'rgba(239, 68, 68, 0.07)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          <strong style={{ color: '#ef4444' }}>Implication:</strong>{' '}
          A 6/6 sensitivity combined with 0/6 specificity means A2ACW as currently implemented
          is a <em>retrieval aid</em>, not a detector. It surfaces prior-art candidates for human review;
          it cannot distinguish genuine discoveries from reparametrizations without that human judgment step.
          The methodology contribution claim requires this number to be reported alongside the catch rate.
        </div>

        <div style={{ background: 'rgba(139, 92, 246, 0.07)', border: '1px solid rgba(139, 92, 246, 0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          <strong style={{ color: '#8b5cf6' }}>Primary finding:</strong>{' '}
          Adversarial AI self-play over a shared corpus is a <em>reparametrization detector, not a discovery engine</em>.
          The 6-of-6 Validated→Reparametrization demotion rate (all 6 tested claims demoted on human audit) is the
          empirical confirmation. The three-axis decomposition is the protocol-design lesson:
          shared-distribution adversaries need external vocabulary, symbol, and null-model checks.
          This is a citable null result about the limits of in-distribution AI self-play for science.
          <strong> Caveat:</strong> specificity 0/6 means the protocol catches everything — and therefore discriminates nothing on its own.
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
