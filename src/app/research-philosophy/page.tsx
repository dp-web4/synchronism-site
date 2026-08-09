'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function ResearchPhilosophy() {
  return (
    <>
      <Breadcrumbs currentPath="/research-philosophy" />
      <PathNav currentPath="/research-philosophy" />
      <h1>Research Philosophy</h1>
      <ValidationBadge status="active-mrh" label="Active Research" />

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
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
          Every scientific claim on this site carries a validation badge.
          The <strong>canonical reference</strong> is on the{' '}
          <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>
            Honest Assessment page
          </Link>. The taxonomy has two families:
        </p>

        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#f87171' }}>Single-sourced 2026-08-08 &mdash; this page was a second copy, and
          it had already drifted.</strong> Until today the chips below carried their own definition text while this
          same paragraph named Honest Assessment canonical. The copies disagreed: <em>Failed</em> read
          &ldquo;Prediction tested and wrong. Kept visible as permanent record&rdquo; here and &ldquo;Prediction
          contradicted by data (with specific error)&rdquo; there &mdash; one badge, two definitions, two pages.
          The definitions now live in exactly one place; this page keeps only the <em>rationale</em> for having two
          families, which is what it is for. A visitor documentation persona found the drift as part of a larger
          finding: the site&apos;s status vocabulary has grown from the documented 10 badges to <strong>40+ ad-hoc
          strings</strong> across five pages, several of them (&ldquo;Empty Intersection,&rdquo; &ldquo;Adjudicable
          Now,&rdquo; &ldquo;Untestable&rdquo; &mdash; one keystroke from <em>Untested</em>, which means something
          else) used but nowhere defined. Freezing that vocabulary to a machine-readable list is queued as a
          maintainer task; this is the first installment.
        </div>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          <strong>MRH-relationship tags</strong> (MRH = <em>Markov Relevancy Horizon</em>, the framework&apos;s
          term for the bounded context a system &mdash; or here, a claim &mdash; is currently relevant within;
          see the <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH page</Link>). Preferred
          for in-flight work &mdash; these describe how a claim sits in the current research inventory:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="active-mrh" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="parallel-paths" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="sidelined" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="superseded" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="audited-negative" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
        </div>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          <strong>Descriptive tags</strong> — describe an empirical relationship rather than a verdict on truth-status:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="untested" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="speculative" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="reparametrization" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ValidationBadge status="failed" />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>&mdash; see canonical legend</span>
          </div>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          <strong>Deprecated</strong> (kept for back-compat with existing usages; do not appear in new content):{' '}
          <ValidationBadge status="validated" />{' '}and{' '}<ValidationBadge status="supported" />{' '}
          &mdash; verdict-shaped; conflicts with the stewardship discipline (nothing is honestly characterizable as &ldquo;established&rdquo; at the current stage).
          Existing usages being migrated incrementally by the daily maintainer track.
        </p>

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
          rather than spatial dimensions. The entity criterion (&Gamma;&nbsp;&lt;&nbsp;m) survived the internal
          stress tests but was demoted on prior-art review (2026-05-20): it is the standard
          Breit&ndash;Wigner / K&auml;ll&eacute;n&ndash;Lehmann narrow-width condition, with Synchronism adding
          interpretation, not prediction. It would &ldquo;apply&rdquo; to string states only in the sense that
          standard resonance physics already does.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Prediction starts with interpretation. The stress tests stripped away what&apos;s vocabulary. What remains
          is the question: does this reinterpretation suggest predictions that the original framework doesn&apos;t?
          That&apos;s the research program.
        </p>

        <h2>How Research Is Conducted: A2ACW</h2>
        <div className="card" style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.25)', marginBottom: '1rem', padding: '0.75rem 1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong>What A2ACW is:</strong> A falsifiability and self-consistency filter — not a discovery method.
            It reliably catches internal contradictions, circular arguments, and reparametrizations of known
            physics (because those errors are in-distribution). It cannot generate out-of-distribution novelty
            or detect systematic errors shared by the entire training corpus.
            The <strong>0 of 6 post-audit retention rate</strong> on &ldquo;Validated&rdquo; badges is exactly
            what this methodology predicts: A2ACW cannot distinguish &ldquo;novel&rdquo; from &ldquo;rederived
            from the same training corpus.&rdquo; The Challenger agent doesn&apos;t know the literature
            well enough to recognize a rederivation. This is not a flaw to fix — it is a structural property
            of the method. Design accordingly.
          </p>
        </div>
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
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Prior art:</strong> the protocol itself is assembled from existing work — adversarial
          AI pairs from AI Safety via Debate (Irving, Christiano &amp; Amodei 2018), multi-agent role
          structure from CAMEL/MetaGPT, failure modes from the multi-agent-systems literature. The
          contribution is the controlled null result (how many framework claims survive the adversarial filter — n=6 demotions on one non-independent corpus at 0/6 detection; not sufficient to claim calibrated sensitivity), not
          the protocol. <strong>Correction (2026-07-27):</strong> this paragraph used to end
          &ldquo;specificity cannot be measured here — there is no labeled corpus of genuine
          out-of-distribution discoveries to run through the filter.&rdquo; That was true when written and
          stale by two months: the control <em>was</em> built and run on <strong>2026-05-22</strong>, using a
          held-out set of six canonical genuine discoveries (Dirac, Bell, BCS, Higgs, Hawking, Noether)
          plus three out-of-distribution reparametrizations. The result confirmed the concern in its
          strongest form rather than leaving it hypothetical: <strong>every one of the six genuine
          discoveries was false-flagged as a reparametrization</strong>, exactly because an adversarial
          pair sharing one training distribution keys on &ldquo;has canonical prior art&rdquo; — which all
          non-trivial physics does. Read the measured numbers on the{' '}
          <a href="/a2acw" style={{ color: 'var(--color-accent-blue)' }}>A2ACW page</a>, which also carries
          the full prior-art accounting and the confidence interval on the null.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          3,308 A2ACW sessions have been run across the research archive. Of these, approximately
          47 produced internal-consistency survivors &mdash; a 1.4% session yield. <strong>Of those 47,
          6 have been through a full external domain-expert audit; all 6 resolved as
          reparametrizations of known physics, internal consistency findings, or null results.
          Novel-surviving yield on the audited subset: 0 of 6.</strong> The remaining 41 are
          internally-consistent but have not yet been put in front of an outside physicist &mdash;
          they are unaudited, not confirmed-negative; treating &ldquo;0 of 47&rdquo; as if all 47
          were checked overstates what has actually been reviewed (see{' '}
          <a href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>honest assessment</a>{' '}
          for the audited-vs-pending breakdown). Human oversight reviews borderline cases and maintains the validation badge taxonomy.
          Every badge is the product of at least one full A2ACW challenge cycle &mdash; which, given the
          0% novel-survivor rate of that cycle on held-out claims, is provenance, not
          assurance: a badge means the claim was challenged, not that the challenge could have
          distinguished a real discovery from a rederivation. Critically, the 0% rate cannot distinguish &ldquo;no novelty exists in the framework&rdquo; from &ldquo;the method is systematically blind to novelty when present.&rdquo;
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

        <div className="card" style={{ background: 'rgba(56, 189, 248, 0.06)', border: '1px solid rgba(56, 189, 248, 0.2)', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--color-accent-blue)', fontSize: '0.95rem', marginTop: 0 }}>The meta-finding: this pattern is the result</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 0 }}>
            The combined pattern across the full research arc is itself a publishable finding about
            AI-generated science: <strong>every structurally novel commitment (TEST-04a disfavored 2.4σ on σ₈ amplitude, post-hoc,
            critical exponents category-error, Bullet Cluster viscosity sign-reversed) has either failed
            or collapsed to non-discriminating; every surviving prediction is degenerate with MOND or standard QM</strong>.
            This is exactly what you would predict from a training-distribution filter operating on a
            physics corpus that already contains MOND and QM. <strong>What this pattern cannot establish
            (corrected 2026-07-17):</strong> whether the ceiling belongs to AI-to-AI adversarial collaboration
            itself or to the corpus it ran on — the seed framework was independently concluded to be a MOND
            reparametrization, so a 0% novelty yield is also what a <em>perfect</em> filter would report on a
            corpus containing no novelty. A single-arm, single-corpus retrospective with N&nbsp;=&nbsp;6 audited
            demotions cannot separate those readings (the confound is stated in full on{' '}
            <a href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</a>).
            The missing experiment is a control arm: the same protocol run on a corpus containing known
            genuine discoveries post-dating the models&apos; training cutoffs. Until that runs, the honest
            claim is a well-documented program-level null, not a measured ceiling.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: '0.75rem', marginBottom: 0 }}>
            <strong>Temporal-asymmetry counterfactual (2026-05-18):</strong> A retrospective audit tested whether A2ACW
            would have caught 6 subsequently-demoted claims by pairing models with different training cutoffs.
            Result: 0 of 6 demotions caught; median prior-art year ~1996. The protocol challenges
            within-distribution but cannot detect priority-rediscovery. Successor experiment: vocabulary-asymmetry
            test (submit pre-Planck-era results in post-2015 vocabulary; measure true-positive rate). Full
            result on the <a href="/a2acw" style={{ color: 'var(--color-accent-blue)' }}>A2ACW page</a>.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: '0.75rem', marginBottom: 0 }}>
            <strong>Registered next experiment — cross-vendor corpus control (2026-07-07):</strong>{' '}
            the null&apos;s own diagnosis (shared-corpus vocabulary lock-in, not training-cutoff leakage)
            points at one decisive control this program has not yet run: an adversarial pair whose
            models come from vendors with maximally disjoint training pipelines, run against the 6
            demoted claims plus a small OOD positive-control set. If the cross-vendor challenger
            catches demotions the same-corpus pair missed, the null scopes to <em>corpus
            monoculture</em>; if 0/6 again, it strengthens toward a ceiling on AI-adversarial
            collaboration as such. Registered as a research proposal
            (<code>a2acw_cross_vendor_corpus_control</code>); execution gates on access to a
            genuinely different-corpus model pair.
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
              <span style={{ fontSize: '0.75rem', color: '#f59e0b' }}>NEVER RUN AS REGISTERED (corrected 2026-07-09)</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
              This log previously read &ldquo;Registered: Session 616. Threshold: R² &gt; 0.20. Result: R² = 0.14&rdquo;
              — three separate errors: Session 616 is the η/superconductivity audit and never measured RAR
              scatter; R² = 0.14 belongs to a SPARC-scale (N≈171) morphology regression, not the 14,585-galaxy
              ALFALFA-SDSS sample this test registers; and 0.20 was the catalog&apos;s <em>expected-success</em>{' '}
              value, not its falsification threshold. This is exactly the kind of registration-log error this
              section exists to make impossible — see corrected{' '}
              <Link href="/tier-1-existing#TEST-03" style={{ color: 'var(--color-accent-blue)' }}>TEST-03</Link>.
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
          <div className="card" style={{ padding: '0.75rem 1rem', borderLeft: '3px solid #ef4444' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <strong>TEST-04a: DESI RSD fσ₈ Suppression</strong>
              <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>DISFAVORED 2.4σ on σ₈ — ~1.5σ on Registered fσ₈ (corrected 2026-07-14)</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
              Registered as TEST-04 replacement (2026-05-04). Derivation: Session 107. Threshold: fσ₈(z=0.51) &gt; 0.46
              rules out at &gt;3σ. DESI DR1 full-shape (arXiv:2411.12021): LRG1 fσ₈/(fσ₈)_fid = 1.16 ± 0.13 — above ΛCDM fiducial,
              i.e. fσ₈ = 0.474 × 1.16 ± 0.062 = 0.550 ± 0.062. <strong>Corrected 2026-07-14:</strong> that exceeds 0.46 by only
              ~1.5σ, not the &gt;3σ the criterion demands — &ldquo;LRG1 actual ≫ 0.46&rdquo; overstated the margin.
              The kill was instead delivered on a different statistic, combined σ₈ = 0.841 ± 0.034 (Table 10),
              which is GR-conditioned (inferred assuming GR growth kernels) and therefore risks circularity as
              a test of modified growth. Tension: σ₈ 0.841 vs predicted 0.76 = 2.4σ — real, but not the
              registered kill. DESI&apos;s own modified-gravity analysis (Ishak et al. arXiv:2411.12026) gives a
              weaker verdict still (μ₀ within 1σ of zero). Post-hoc by 8+ months either way (DESI DR1 April 2024;
              Session 107 committed December 2025). Honest verdict: the test as registered lacked the power to
              discriminate this framework from GR; the framework&apos;s cosmology sector remains dead on other
              grounds (the field equation is postulated rather than derived and its archive version is eliminated
              a priori — corrected 2026-08-09 from &ldquo;no field equation&rdquo;; and the locality no-go). See{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
              for the full correction. <strong>No replacement substituted.</strong>
            </p>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          <strong>Operational states vs. validation badges:</strong> Terms like &ldquo;Kill Criterion Triggered,&rdquo;
          &ldquo;Withdrawn,&rdquo; and &ldquo;MOND-shared&rdquo; are <em>operational states</em> describing prediction lifecycle
          and scope &mdash; distinct from the nine <Link href="#validation-badge-taxonomy" style={{ color: 'var(--color-accent-blue)' }}>validation badges</Link>{' '}
          (5 MRH-relationship: Active-MRH / Parallel-Paths / Sidelined / Superseded / Audited-Negative; 4 descriptive: Untested / Speculative / Reparametrization / Failed). A prediction flagged
          &ldquo;Kill Criterion Triggered&rdquo; also carries the Failed badge; &ldquo;Withdrawn&rdquo; does not carry any
          badge (it was never adjudicated); &ldquo;MOND-shared&rdquo; (RETIRED 2026-07-15) asserted a positive result
          would confirm both MOND and Synchronism &mdash; a class audit executed all three carriers (TEST-05/09/10)
          and each dissolved into a discriminator the framework loses; a claimed tie now carries the same execution
          burden as a claimed kill (both predictions computed, agreement shown within the data&apos;s power).
        </p>

        <h2>Related Work in AI-Driven Discovery</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
          The A2ACW negative result — AI-AI adversarial collaboration fails when both agents share the same training distribution — is most informative when placed against the optimistic AI-discovery claims it directly addresses:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
          {[
            {
              name: 'FunSearch (DeepMind, 2023)',
              verdict: 'Different structural class',
              desc: 'Uses LLM to propose combinatorial constructions, evaluated by an external formal oracle. The key difference: the oracle is outside the training distribution. A2ACW\'s failure mode (shared training → shared blind spots) does not apply when a formal verifier is available.',
            },
            {
              name: 'AlphaProof / AlphaGeometry (DeepMind, 2024)',
              verdict: 'Different structural class',
              desc: 'Reinforcement learning + formal proof verification. Not text generation from training data. The ground-truth check (formal verifier) is external to the LLM. This is why AlphaProof can solve IMO problems that exceed training data.',
            },
            {
              name: 'Sakana AI Scientist (2024)',
              verdict: 'Same structural class as A2ACW',
              desc: 'Generates research papers via LLM orchestration with self-review. Has been shown to produce errors that human reviewers catch, and its "novelty" comes from recombination within the training distribution — the same failure mode A2ACW demonstrates.',
            },
            {
              name: 'Iten/SciNet symbolic regression (2020)',
              verdict: 'Different mechanism',
              desc: 'Discovers physical laws by fitting latent representations to observational data. The discovery is constrained by data, not by text generation from prior knowledge. A2ACW operates on natural-language claims before any data constraint is applied.',
            },
          ].map(f => (
            <div key={f.name} className="card" style={{ padding: '0.6rem 0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                <strong style={{ color: 'var(--color-accent-blue)' }}>{f.name}</strong>
                <span style={{ fontSize: '0.78rem', color: f.verdict.includes('Same') ? '#f59e0b' : '#10b981', whiteSpace: 'nowrap' }}>{f.verdict}</span>
              </div>
              <span style={{ color: 'var(--color-text-secondary)' }}>{f.desc}</span>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem' }}>
          <strong>Diagnosis:</strong> The out-of-distribution problem is solved for AI systems with <em>external formal oracles</em>
          (FunSearch, AlphaProof). It is not solved for <em>natural-language theory generation</em>, where no formal verifier
          exists outside the training distribution. A2ACW makes this specific structural point with a documented empirical
          result: 6/6 retrospective demotions, 0/6 caught by temporal-asymmetry, 4/6 caught by vocabulary-asymmetry (prior-art subclass only).
          The methodology finding is: AI-AI adversarial collaboration without an external oracle has a shared-blind-spot ceiling
          that cannot be removed by choosing more capable or more adversarial agents.
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
