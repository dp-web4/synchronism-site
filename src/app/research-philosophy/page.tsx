'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function ResearchPhilosophy() {
  return (
    <>
      <Breadcrumbs currentPath="/research-philosophy" />
      <h1>Research Philosophy</h1>
      <ValidationBadge status="validated" label="Methodology" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          &ldquo;All models are wrong; some are useful.&rdquo; &mdash; George Box
        </blockquote>
        <p>
          Synchronism adopted this as its operating principle from session #1. Every claim in
          this framework is provisional. The question is never &ldquo;is this true?&rdquo; but
          &ldquo;is this useful, and where does it break?&rdquo;
        </p>

        <h2>Core Principles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>1. Falsifiability First</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Every prediction has an explicit kill criterion. If a prediction can&apos;t be falsified,
              it&apos;s philosophy, not science. We label it accordingly.
            </p>
          </div>
          <div className="card">
            <h3>2. Document Failures</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Failed predictions are more informative than successes. We document every failure
              (melting points at 53% error, critical exponents 2&times; off, Hall coefficient r = 0.001)
              and keep them visible.
            </p>
          </div>
          <div className="card">
            <h3>3. Honest Labeling</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Every parameter is labeled as either <strong>derived</strong> (from first principles)
              or <strong>fitted</strong> (calibrated to data). Every claim carries a validation badge.
              No hiding the ball.
            </p>
          </div>
          <div className="card">
            <h3>4. Avoid the Geocentric Trap</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The core question: &ldquo;Are we adding complexity to save the paradigm, or is nature
              telling us to change the paradigm?&rdquo; Adding epicycles (free parameters) to a failing
              model is the wrong response. Simpler equations from a shifted perspective is the goal.
            </p>
          </div>
        </div>

        <h2>What This Means in Practice</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Session #616 audited all 4 research tracks and found all are reparametrizations of known physics</li>
          <li>We published that finding prominently, not buried it</li>
          <li>The 89% chemistry validation rate sounds impressive until you learn it&apos;s mathematical consistency, not novel prediction</li>
          <li>47 genuine contributions out of ~3,308 sessions = 1.4% internal-consistency-survival rate (see below for why this is not a discovery rate).</li>
        </ul>

        <h2 id="validation-badge-taxonomy">Validation Badge Taxonomy</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Every scientific claim on this site carries a validation badge. Here is what each status means:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="validated" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Quantitative match to empirical data within stated error bounds
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="supported" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Consistent with data but caveats apply &mdash; may have known prior art or selection bias risk
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="untested" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Falsifiable prediction defined but not yet tested experimentally
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="speculative" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Theoretical extension without a defined test &mdash; interesting but not yet scientific
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="reparametrization" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Reproduces known physics in different notation &mdash; no new content, but may offer notational clarity
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="failed" />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Prediction tested and wrong. Kept visible as permanent record.
            </span>
          </div>
        </div>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          <strong>Post-diction</strong> is a sub-status used on some pages (amber inline label, not a separate badge tier): the formula was derived <em>after</em> the experimental result was published — it is consistent with the data but was not a prediction ahead of time. Post-diction sits between Reparametrization (algebraically equivalent to known physics) and Untested (a genuine forward prediction). It counts as evidence of framework coherence, not evidence of predictive power.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          <strong>Speculative sub-types</strong> used on /parameter-derivations describe how a parameter was set: &ldquo;Motivated Ansatz&rdquo; (physically motivated but not derived), &ldquo;Dimensional Analysis&rdquo; (set by dimensional coincidence, e.g. a₀ ≈ cH₀/2π), &ldquo;Freeman&apos;s Law Re-expressed&rdquo; (matches an existing empirical law in different notation), &ldquo;Jeans Criterion&rdquo; (derived from gravitational stability arguments), &ldquo;5% Agreement / 3% Error&rdquo; (quantifying how well a Speculative parameter matches data). All are sub-types of Speculative &mdash; they carry no novel predictive content.
        </p>

        <h2>The Reparametrization Pattern</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Session #615-616 revealed a recurring pattern across all tracks: take known physics,
          rename the key parameter, claim novelty. The valuable part isn&apos;t the novelty claim &mdash;
          it&apos;s the unified notation (same &#x03B3; across 80 orders of magnitude), the honest
          failure documentation, and the testable predictions that remain open.
        </p>

        <h2>Reinterpretation as Research Method</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The reparametrization pattern is real &mdash; but reinterpretation is not the same as redundancy.
          Every paradigm shift begins with reinterpretation, not with novel prediction. Copernicus didn&apos;t
          dismiss Ptolemy&apos;s epicycles &mdash; the planets <em>do</em> trace retrograde loops against the sky.
          The epicycles accurately described what was observed. The question was: what arrangement would make
          these loops emerge <em>naturally</em>? The answer (heliocentric orbits with different periods)
          reproduced the same observations but predicted new things (stellar parallax, Venus phases).
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Similarly, string theory accurately describes certain observations (particle spectrum, force unification,
          symmetry patterns). The Synchronism question isn&apos;t &ldquo;are strings wrong?&rdquo; &mdash; it&apos;s
          &ldquo;what underlying mechanism would make reality <em>appear</em> string-like?&rdquo; If entities are
          recurring patterns on a discrete substrate, then strings could be resonance channels in the grid,
          vibration modes could be oscillation patterns, and extra dimensions could be internal degrees of freedom
          rather than spatial dimensions. The entity criterion (&Gamma;&nbsp;&lt;&nbsp;m) &mdash; the one prediction
          that survived all 13 stress tests &mdash; would apply to string states too.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Prediction starts with interpretation. The stress tests stripped away what&apos;s vocabulary. What remains
          is the question: does this reinterpretation suggest predictions that the original framework doesn&apos;t?
          That&apos;s the research program.
        </p>

        <h2>How Research Is Conducted: A2ACW</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>A2ACW</strong> (AI-to-AI Adversarial Collaboration Workshop) is the adversarial
          protocol used to stress-test claims in this framework. Rather than a single AI agent
          generating and validating its own output, two agents take opposing roles:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '1rem 0 1.5rem' }}>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong>Role 1: Defender.</strong>{' '}
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Presents a claim, provides supporting derivations and evidence, explains why it matters.
            </span>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <strong>Role 2: Challenger.</strong>{' '}
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Demands operational definitions, asks for kill criteria, compares to known physics,
              identifies circular reasoning and dimensional coincidences, checks for prior art.
            </span>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Each session produces one of three outcomes: (a) the claim survives with refined
          falsifiable predictions, (b) the claim is reclassified as a reparametrization of
          existing physics, or (c) the claim is documented as a failure with the mechanism
          of failure on record.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          3,308 A2ACW sessions have been run across the research archive. Of these, approximately
          47 produced outcomes in category (a) &mdash; a 1.4% novel-claim survival rate. The rest
          are on record as reparametrizations or failures. Human oversight reviews borderline cases
          and maintains the validation badge taxonomy. Every badge is the product of at least one
          full A2ACW challenge cycle.
        </p>

        <div className="card" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#ef4444', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
            The In-Distribution Limitation
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            A2ACW adversarial agents <strong>share the same training distribution</strong>. Two AI models
            trained on the same physics corpus will share the same blind spots — they jointly miss what
            the literature missed, and jointly converge on what the literature over-represents. The
            protocol cannot detect errors that are systematic across the entire training corpus.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem', marginBottom: 0 }}>
            This is why the 1.4% figure is an internal-consistency-survival rate, not a discovery rate: it is an upper bound on what
            in-distribution adversarial AI-AI collaboration can find. The reparametrizations the
            framework identified (Abrikosov-Gor&apos;kov, Milgrom-Verlinde, Freeman, Landau
            sigmoids) are exactly what you would predict from in-distribution debate — the corpus
            already contained these patterns. <strong>This does not invalidate the method, but it
            means A2ACW cannot substitute for out-of-distribution evaluation by domain experts
            who are not in the training loop.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem', marginBottom: 0 }}>
            <strong>The symmetric lower-bound problem:</strong> A2ACW also systematically
            <em> over-credits</em> reformulations of known physics as &ldquo;Validated.&rdquo;
            Adversarial AIs in shared distribution badge the same patterns the training corpus rewards.
            The track record: <strong>6 of 6 &ldquo;Validated&rdquo; badges audited to date have been demoted
            to Reparametrization on closer review</strong> (galaxy rotation, chemistry r=0.982, Born rule,
            a₀ = cH₀/2π, decoherence protection &#x0393; = &#x03B3;&sup2;(1&minus;c), Bell-freezing c(d)).
            The effective novelty rate after expert audit is currently 0 of 6
            retained. The 1.4% figure is therefore both an upper bound (on in-distribution detection)
            and — by track record — an overestimate of actual novelty.
          </p>
        </div>

        <div className="card" style={{ background: 'var(--color-bg-secondary)', marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
            <strong>Calibration note:</strong> A2ACW quantity (3,308 sessions) is not calibration.
            The relevant metric is whether the protocol has ever rejected claims that the human
            authors would have kept, or identified failures that later turned out to be correct.
            The most documented example: A2ACW correctly identified the α symbol misidentification
            in galactic coupling A = 4π/(α²GR₀²) (transcription error, not physics failure) and
            the BTFR n≈2.2 misattribution — both confirmed by archive cross-check. The Bullet
            Cluster sign-error was identified in a dedicated stress-test session (March 2026).
          </p>
        </div>

        <h2>What a Session Is</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          A &ldquo;session&rdquo; is one A2ACW exchange — a claim submitted, challenged, and resolved.
          Session numbers in citations (e.g., &ldquo;Session #616&rdquo;) reference the ordered log
          of challenges in the Synchronism research archive. The chemistry page&apos;s reference to
          &ldquo;sessions 134&ndash;2660&rdquo; means those claims were active in sessions during that
          range, some under repeated AI analysis &mdash; which introduces the risk of confirmation
          bias that the page flags. AI agents challenge each other but share the same training
          distribution, which limits adversarial independence.
        </p>

        <h2 id="kill-criterion-audit-trail">Prediction Audit Trail</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Every Tier-1 prediction that has been registered, modified, withdrawn, or adjudicated &mdash; with dates and reasons.
          Without this log, &ldquo;kill criteria are pre-registered&rdquo; is a claim, not a demonstrated practice.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <strong>TEST-03: ALFALFA-SDSS TFR Scatter</strong>
              <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>KILL CRITERION TRIGGERED</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
              Registered: Session 616. Threshold: R² &gt; 0.20. Result: R² = 0.14.
              Status: presumptively failed (denominator ambiguity under audit). No modification.
            </p>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <strong>TEST-04: BAO Coherence Modulation</strong>
              <span style={{ fontSize: '0.75rem', color: '#f59e0b' }}>WITHDRAWN 2026-05-04</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
              Registered with kill criterion 10⁻⁵ BAO precision. Problem: (1) Session 107 explicitly
              forecast 0.0% BAO modification; (2) no session-level derivation for 10⁻⁴ number;
              (3) kill threshold was 3000× below DESI Y3 precision — vacuous at registration.
              Withdrawal is NOT a clean exit: the original kill criterion was unfalsifiable from day one.
            </p>
          </div>
          <div className="card" style={{ padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <strong>TEST-04a: DESI RSD fσ₈ Suppression</strong>
              <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>DISFAVORED 2.4σ (2026-05-05)</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
              Registered as TEST-04 replacement (2026-05-04). Derivation: Session 107. Threshold: fσ₈(z=0.51) &gt; 0.46
              rules out at 3σ; &gt; 0.45 disfavors at 2σ. DESI DR1 result (2026-05-05): fσ₈ ≈ 0.55 ± 0.06 at LRG1,
              σ₈ = 0.841 ± 0.034 combined. By own kill criterion: ΛCDM favored at every LRG bin.
              Pending DESI DR2 for 3σ+ confirmation. <strong>No replacement will be substituted.</strong>
            </p>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          <strong>Operational states vs. validation badges:</strong> Terms like &ldquo;Kill Criterion Triggered,&rdquo;
          &ldquo;Withdrawn,&rdquo; and &ldquo;MOND-shared&rdquo; are <em>operational states</em> describing prediction lifecycle
          and scope &mdash; distinct from the six <Link href="#validation-badge-taxonomy" style={{ color: 'var(--color-accent-blue)' }}>validation badges</Link>{' '}
          (Validated / Supported / Untested / Speculative / Reparametrization / Failed). A prediction flagged
          &ldquo;Kill Criterion Triggered&rdquo; also carries the Failed badge; &ldquo;Withdrawn&rdquo; does not carry any
          badge (it was never adjudicated); &ldquo;MOND-shared&rdquo; means a positive result would confirm both
          MOND and Synchronism and cannot discriminate &mdash; it does not affect the badge until tested.
        </p>

        <h2>Full Research Archive</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Every session, derivation, failure, and dataset is public:
          {' '}<a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>github.com/dp-web4/Synchronism</a>
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/handling-failure" className="btn-primary">
            Next: How We Handle Failure &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Honest Assessment
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/research-philosophy" />
    </>
  );
}
