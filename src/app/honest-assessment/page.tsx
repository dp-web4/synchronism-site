'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

// One-sentence translation for readers without the statistics vocabulary (added 2026-07-08
// after a visitor log showed casual readers skim the second half of this page entirely).
function PlainTerms({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ background: 'rgba(59,130,246,0.07)', borderLeft: '3px solid rgba(59,130,246,0.5)', borderRadius: '4px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: '0.5rem 0' }}>
      <strong>In plain terms:</strong> {children}{' '}
      <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>Glossary&nbsp;&rarr;</Link>
    </p>
  );
}

export default function HonestAssessment() {
  return (
    <>
      <Breadcrumbs currentPath="/honest-assessment" />
      <PathNav currentPath="/honest-assessment" />

      <h1>Honest Assessment</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem', maxWidth: '65ch' }}>
        This page audits the claims listed in{' '}
        <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</Link>.
        It documents what works, what failed, what we got wrong, and what remains untested.
        Updated as new results come in.
      </p>

      <details id="validation-badge-definitions" style={{ marginBottom: '2rem', maxWidth: '65ch' }}>
        <summary style={{ cursor: 'pointer', color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>
          Validation badge definitions (canonical reference)
        </summary>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem' }}>
          <strong>How to read a badge (contract, 2026-07-08):</strong> every badge has two parts. The color
          and leading word(s) are the <em>formal status</em>, drawn only from the two families below (plus
          deprecated back-compat tags). Any text after the dash is a <em>free-text finding descriptor</em>{' '}
          specific to that result — e.g. &ldquo;Wrong Category,&rdquo; &ldquo;Wrong Direction,&rdquo;
          &ldquo;Dimensional Identity,&rdquo; &ldquo;Naturalness Gap,&rdquo; &ldquo;Refuted by Execution,&rdquo;
          &ldquo;Ontological Reframe.&rdquo; Descriptors are not additional badge
          types; the epistemic verdict is always the formal status. <strong>Three negative-outcome words, one
          relationship (added 2026-07-18):</strong> a <em>Failed</em> badge is the formal status of any
          data-contradicted prediction; a <em>refutation</em> (the footer count) is the narrower subset of
          Failed results executed on external data against a registered criterion; &ldquo;Refuted by
          Execution&rdquo; is the descriptor marking that a specific run — not an argument — did the killing.
          Every refutation carries a Failed badge; not every Failed badge counts as a refutation. Not every
          defined tag has a current
          instance — tags exist to cover the claim lifecycle, not to guarantee one of each. (The
          &ldquo;Model Explainer&rdquo; tag on the Tools page is a content grouping, not a validation badge —
          it means &ldquo;shows how the equation works,&rdquo; with no verdict content.)
        </p>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem' }}>
          <strong>MRH-relationship tags</strong> (MRH = <em>Markov Relevancy Horizon</em> &mdash; the framework&apos;s
          term for the bounded context something is currently relevant within) describe how a claim sits in the
          current research inventory. Preferred for in-flight work. Rationale: at the current stewardship stage, <em>nothing is honestly
          characterizable as &ldquo;established&rdquo;</em> — the framework is being stewarded along many parallel paths,
          and verdict-shaped tags promote substantive content out of that parallel space prematurely.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>Active-MRH</strong><span>Currently in active research focus; being extended or revised</span>
          <strong>Parallel-Paths</strong><span>In the framework&apos;s parallel hypothesis space; not currently in active focus but not abandoned</span>
          <strong>Sidelined</strong><span>Was in active focus, currently not pursued; reasons documented; reactivation condition specified</span>
          <strong>Superseded</strong><span>Replaced by a later formulation; pointer to successor</span>
          <strong>Audited-Negative</strong><span>Closed audit finding on a historical track; durable record; does not move</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong>Descriptive tags</strong> describe an empirical relationship rather than a verdict on truth-status. These remain useful at the current stewardship stage:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>Untested</strong><span>Prediction exists, no data yet</span>
          <strong>Speculative</strong><span>Conceptual proposal without quantitative test</span>
          <strong>Reparametrization</strong><span>Equivalent to existing physics in different notation</span>
          <strong>Failed</strong><span>Prediction contradicted by data (with specific error)</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong>Deprecated</strong> (kept for back-compat with existing usages; do not appear in new content):
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          <strong>Validated</strong><span>Verdict-shaped; conflicts with stewardship discipline. Use Active-MRH or Reparametrization as appropriate.</span>
          <strong>Strongly Supported</strong><span>Same; existing usages being migrated incrementally by the daily maintainer track.</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong>Operational states</strong> (not badges; describe prediction lifecycle):
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>Kill Criterion Triggered</strong><span>A pre-registered falsification threshold was crossed. Carries Failed badge. Stronger than &ldquo;Failed&rdquo; alone because failure was quantified in advance.</span>
          <strong>MOND-shared</strong><span>RETIRED (class audited 2026-07-14/15). Asserted &ldquo;a positive result confirms Synchronism AND MOND equally.&rdquo; All three carriers dissolved when executed or adjudicated: TEST-09 (BTFR — kill fired, 3.3σ), TEST-10 (dwarf DM fractions — 69% of SPARC exceeds the framework&apos;s 68.5% ceiling), TEST-05 (environment levers differ by ~50–5,000×). A tie badge was the site&apos;s only unfalsifiable label — it carried no execution burden and sounded modest. New rule: a claimed tie carries the same execution burden as a claimed kill (both predictions computed, agreement shown within the data&apos;s discriminating power).</span>
          <strong>Withdrawn</strong><span>Framework disowned the test — not from data refutation, but from internal contradiction, unmotivated amplitude, or supersession. Carries no badge (never adjudicated). TEST-04 (BAO).</span>
          <strong>Self-Eliminating-or-Tie</strong><span>No measurement outcome selects Synchronism over the standard alternatives — either the signal is below systematics reach, or both outcomes (null and confirmed anomaly) are covered by Newton or MOND respectively. TEST-02 (wide binaries).</span>
          <strong>Sign Correction</strong><span>Annotation marking that the prediction direction on this page was corrected after initial publication. Not a verdict badge — a correction provenance marker. TEST-02 (2026-06-06).</span>
          <strong>Null-Class</strong><span>The result achieves the same or better fit using a structurally simpler null model (e.g., polynomial in atomic number Z). The match is evidence of monotonicity in the target variable, not framework-specific physics. Chemistry correlation explorer.</span>
          <strong>89% Boundary-Consistent</strong><span>Fraction of natural phenomena in the gamma-boundary catalog whose gamma parameter falls within the regime boundaries defined by the visualizer. Descriptive only — not a prediction or a test. Carries Template Bias Caveat.</span>
          <strong>Template Bias Caveat</strong><span>The 89% consistency figure is derived from a catalog that was populated <em>using</em> the framework's regime boundaries as a guide — boundary-consistent framing is baked into the collection method. The fraction should not be read as independent confirmation.</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
          <strong>Status lifecycle verbs</strong> (added 2026-07-23 — this vocabulary was used with precision
          across test cards but documented nowhere; four independent reviews flagged the gap). These are the
          capitalized verbs that appear in headings and status notes. They are distinct on purpose:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong>EXECUTED</strong><span>The registered computation was actually run on real data, with scripts cited — as opposed to asserted, estimated, or argued. Always date-stamped. The strongest provenance word on the site.</span>
          <strong>ADJUDICATED</strong><span>A verdict was rendered by structural argument or by analysis of already-published results, without a new run (e.g. TEST-05&apos;s lever-magnitude comparison). Weaker provenance than EXECUTED; the distinction is preserved so readers can tell which verdicts rest on runs.</span>
          <strong>CLOSED</strong><span>Applies to a research <em>question</em>, not a prediction: the question is resolved (sometimes as a null) and no further work is planned. E.g. &ldquo;EFE gap — CLOSED,&rdquo; &ldquo;form selection closed as a null.&rdquo;</span>
          <strong>WITHDRAWN</strong><span>Applies to a <em>test</em>: retracted by the framework before execution because of internal contradiction, underivable amplitude, or supersession. Never adjudicated, carries no verdict badge. E.g. TEST-04 (BAO).</span>
          <strong>RETIRED</strong><span>Applies to <em>vocabulary or framing</em>, not to data verdicts: a label or badge class removed from service after audit showed it defective. E.g. the &ldquo;MOND-shared&rdquo; tie-badge class (retired 2026-07-15 when all three carriers dissolved on execution). &ldquo;MOND-shared / RETIRED&rdquo; therefore means: this label used to sit here, and the label itself — not the test — was withdrawn from the site&apos;s vocabulary.</span>
          <strong>RECLASSIFIED</strong><span>Moved between categories (e.g. Tier 1 → Tier 2, prediction → exploratory hypothesis) after audit showed the original category&apos;s entry requirements were never met. The row is kept in place, demoted visibly, so the demotion is not silent.</span>
          <strong>Ceiling Exceeded</strong><span>A structural failure mode specific to this framework: the data demands more than the framework&apos;s built-in maximum (the bounded boost 1/&Omega;_m = 3.17), so no parameter choice can rescue the fit. Needs no threshold registration — the ceiling is algebraic.</span>
          <strong>[Brackets]</strong><span>Text in brackets inside a quoted prediction (e.g. &ldquo;[Withdrawn]&rdquo;) marks that the surrounding wording is preserved verbatim for the record but is no longer asserted.</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem' }}>
          <strong>Transitions:</strong> statuses move in one direction. Untested → Executed/Adjudicated → Failed
          (or survives); Failed never softens back. A retirement or reclassification is itself a dated, logged
          event with the audit that forced it linked from the card. Adjudication authority: the daily explorer
          track runs executions; the maintainer track propagates verdicts to pages; contested calls are gated on
          the human operator and marked as such. If a status note seems to contradict its heading, the most
          recent dated entry wins — cards accumulate their history deliberately rather than rewriting it.
        </p>

        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
          Full discipline: <Link href="/research-philosophy" style={{ color: 'var(--color-accent-blue)' }}>Research Philosophy</Link>.
          Migration plan: <a href="https://github.com/dp-web4/synchronism-site/blob/main/forum/post-kimi-reframe-site-update-instructions-2026-05-28.md" style={{ color: 'var(--color-accent-blue)' }}>forum post 2026-05-28</a>.
        </p>
      </details>

      {/* Plain-language summary for casual readers */}
      <div style={{ background: 'rgba(59, 130, 246, 0.06)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1.5rem', maxWidth: '65ch' }}>
        <p style={{ margin: '0 0 0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          <strong>Why read an audit of a theory that didn&apos;t pan out?</strong> Because the honest map of what
          failed — and <em>why</em> — is the actual product. Knowing what a density-based coherence function
          structurally cannot do is genuinely useful: it eliminates a class of modified-gravity ideas
          in one stroke, explains why galaxy fits can&apos;t extend to clusters, and documents a rare case of
          a self-audited theory reaching its own null verdict. The methodology that produced this audit
          is the contribution; the physics just provided the test case.
        </p>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          <strong>The single most important sentence on this page, promoted from the landscape section
          (2026-07-23, expert-review request): there is no field equation anywhere in this framework&apos;s
          galaxy sector</strong> — no action, no Lagrangian, no covariant formulation, no dynamics. The
          framework is a static map plus an interpretation. Everything below should be read with that in
          mind. (<a href="#landscape" style={{ color: 'var(--color-accent-blue)' }}>Full statement &darr;</a>)
        </p>
        <p style={{ margin: '0 0 0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, background: 'rgba(59,130,246,0.07)', borderLeft: '3px solid rgba(59,130,246,0.5)', borderRadius: '4px', padding: '0.75rem 1rem' }}>
          <strong>What failed, in one paragraph — no jargon (added 2026-07-24 for readers on the beginner
          path):</strong> This project proposed one equation meant to describe how things hold together at
          every scale, from atoms to galaxies. When its galaxy predictions were tested against real telescope
          measurements, it failed every decisive test. It predicted a specific relationship between a
          galaxy&apos;s mass and its rotation speed — the measured relationship landed far enough away to cross
          the line the project itself had drawn in advance as &ldquo;this would kill the theory.&rdquo; It puts
          a hard cap on how much &ldquo;missing gravity&rdquo; a galaxy can display — and about two-thirds of
          real galaxies display more than that cap allows. And an environmental effect it predicted turned out,
          when measured, not to exist at all. Where the equation <em>does</em> fit galaxies, it fits only by
          imitating MOND — a 40-year-old rival theory that tweaks gravity instead of adding dark matter — and
          never fits better than it. <strong>How fatal is this?</strong> As a theory of galaxies: fatal, by its
          own scoreboard — zero confirmed predictions, four executed refutations. <strong>Why does the site
          still exist?</strong> Because a few of the framework&apos;s core ideas have never been testable with
          existing instruments (untested is not the same as failed), and because this record — a theory testing
          itself in public and publishing every failure — is itself the point. The paragraph below says the
          same thing with the actual numbers.
        </p>
        <p style={{ margin: '0 0 0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          <strong>The same, with the numbers:</strong> The sharpest failure is now the galaxy mass&ndash;speed
          relation (the BTFR, TEST-09, run 2026-07-14): the framework&apos;s built-in ceiling on how much it can
          boost gravity forces a prediction that genuinely differs from the rival theory MOND — and the real
          data (123 SPARC galaxies) fired the pre-stated kill criterion at 3.3σ. The same ceiling caps how
          dark-matter-dominated a galaxy can appear at 68.5% — a convention-dependent figure (see the Verdict
          section below); the number that survives regardless of convention is the tail: SPARC&apos;s maximum
          observed DM fraction (0.927) requires a boost of at least 13.7, which no candidate cosmic ratio
          supplies (TEST-10, 2026-07-15). The framework&apos;s registered environment effect was also run (2026-07-14): no trace
          (r² = 0.0001 against a &gt;20% claim). The earlier cosmology test (DESI growth suppression) is
          <em>disfavored but not counted as a refutation</em> — the test as registered lacked the power to
          discriminate (corrected 2026-07-14). The galaxy transition-shape
          test — run on 2,807 SPARC data
          points (175 galaxies) in May 2026 — collapsed the framework onto MOND (ΔBIC=+184 against the γ=2 version;
          free-γ = MOND). The predictions we thought were novel turned out to already exist in physics under
          different names. Zero predictions have been independently confirmed.
          Zero parameters have an independent first-principles derivation — the last surviving candidate (A-from-Jeans) was closed as audited-negative on 2026-06-07: the Session 66 script produces A ≈ 4.6×10⁻⁵ (600× off the stated 0.029) under the framework&apos;s own ρ<sub>crit</sub> ∝ V² scaling.
          Scoreboard: <strong>0 confirmed, 0 prospective predictions tested, 6 refutations executed on external
          data, 5 reparametrizations, 0 independently-derived parameters</strong> (recounted 2026-07-30; the BTFR
          slope moved from the reparametrization list to an executed refutation on 2026-07-14, and the Cassini/SPARC
          squeeze and Bell/CHSH substrate test were added to the count on 2026-07-30 &mdash; both were already
          executed and badged Failed/Refuted elsewhere on the site).
        </p>
        <div style={{ marginTop: '0.75rem' }}>
          <strong style={{ color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>What a non-physicist should take away:</strong>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: '0.5rem 0 0', paddingLeft: '1.25rem' }}>
            <li>The one equation fits galaxy rotation — but only as well as MOND, an existing 40-year-old idea, and never better.</li>
            <li>Its one genuinely distinguishing galaxy prediction (the mass&ndash;speed relation, TEST-09) was run against real data in July 2026 and failed its own pre-stated kill criterion at 3.3σ; its cosmology prediction (slower growth of cosmic structure) is disfavored but that test turned out to lack the power to decide.</li>
            <li>None of its numbers come from first principles — every parameter is fitted to data or simply asserted.</li>
            <li>No currently proposed experiment can tell it apart from existing physics.</li>
            <li>The real product is this audit itself: every failure documented, with the numbers, by the same project that made the claims.</li>
          </ul>
        </div>
      </div>

      {/* Table of contents */}
      <nav style={{ marginBottom: '2rem', maxWidth: '65ch', fontSize: '0.85rem' }} aria-label="Page contents">
        <strong style={{ color: 'var(--color-text-secondary)' }}>On this page:</strong>{' '}
        <a href="#verdict" style={{ color: 'var(--color-accent-blue)' }}>The Verdict</a> &middot;{' '}
        <a href="#coherence-meaning" style={{ color: 'var(--color-accent-blue)' }}>What &ldquo;Coherence&rdquo; Means Here</a> &middot;{' '}
        <a href="#what-was-tested" style={{ color: 'var(--color-accent-blue)' }}>What Was Tested</a> &middot;{' '}
        <a href="#what-failed" style={{ color: 'var(--color-accent-blue)' }}>What Failed</a> &middot;{' '}
        <a href="#structural-tensions" style={{ color: 'var(--color-accent-blue)' }}>Structural Tensions</a> &middot;{' '}
        <a href="#whats-untested" style={{ color: 'var(--color-accent-blue)' }}>What&apos;s Untested</a> &middot;{' '}
        <a href="#research-outputs" style={{ color: 'var(--color-accent-blue)' }}>Research Outputs</a> &middot;{' '}
        <a href="#landscape" style={{ color: 'var(--color-accent-blue)' }}>Modified-Gravity Landscape</a> &middot;{' '}
        <a href="#cosmological-tensions" style={{ color: 'var(--color-accent-blue)' }}>Cosmological Tensions</a> &middot;{' '}
        <a href="#a2acw-self-audit" style={{ color: 'var(--color-accent-blue)' }}>A2ACW Self-Audit</a> &middot;{' '}
        <a href="#bottom-line" style={{ color: 'var(--color-accent-blue)' }}>Bottom Line</a>
      </nav>

      {/* Overall Verdict */}
      <section className="card card-highlight section">
        <h2 id="verdict" style={{ color: 'var(--color-accent-warm)' }}>The Verdict (Updated July 2026)</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          After 3,308 sessions + 13 adversarial stress tests: <strong>0 confirmed predictions, 0 prospective
          predictions tested, 6 refutations executed on external data</strong> (astronomical, ephemeris, and
          laboratory). The sharpest events, in order of decisiveness:
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>(0) The boost-ceiling pair (TEST-09/TEST-10 — executed 2026-07-14/15):</strong> The bounded
          boost C(a) caps gravitational amplification at 1/Ω<sub>m</sub>&nbsp;=&nbsp;3.17 — the framework&apos;s
          only structural difference from MOND. That ceiling forces a BTFR slope prediction (n&nbsp;=&nbsp;3.35)
          that genuinely differs from MOND&apos;s (3.81); observed n&nbsp;=&nbsp;3.75&nbsp;±&nbsp;0.10 fired the
          registered kill criterion at <strong>3.3σ</strong>, and no parameter choice rescues it. Read as a
          dark-matter-fraction cap, the same ceiling limits apparent f<sub>DM</sub> to 68.5% under the
          1&minus;Ω<sub>m</sub> convention — the headline &ldquo;69% of SPARC exceeds it&rdquo; figure is
          convention-dependent: under the alternative baryon-budget convention (Ω<sub>m</sub>/Ω<sub>b</sub>&nbsp;≈&nbsp;6.40,
          giving f<sub>DM,max</sub>&nbsp;≈&nbsp;0.844) the reported <em>median</em> (0.755) actually passes, and
          the 69% figure does not hold. What survives under <em>either</em> convention is the tail: SPARC&apos;s
          maximum observed DM fraction is 0.927, which requires a boost of at least 13.7 — no candidate cosmic
          ratio supplies that, a class exclusion regardless of which convention sets the ceiling. The
          framework&apos;s registered environment effect (&gt;20% of RAR scatter) was also run as
          registered: r²&nbsp;=&nbsp;0.0001 — refuted by execution. These, plus the RAR shape test and the
          Cassini/SPARC squeeze and Bell/CHSH substrate test below, are the six executed refutations in the
          footer count.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>(1) DESI fσ₈ (TEST-04a — corrected 2026-07-14):</strong> The framework predicted
          suppressed growth: σ₈&nbsp;≈&nbsp;0.76 (fσ₈(z=0.51)&nbsp;≈&nbsp;0.418, 12% below ΛCDM&apos;s 0.474).
          <strong>What DESI DR1 full-shape actually shows (arXiv:2411.12021):</strong> combined
          σ₈&nbsp;=&nbsp;0.841&nbsp;±&nbsp;0.034 (Table 10) → <strong>2.4σ tension — the predicted suppression is absent.</strong>{' '}
          But that amplitude is a GR-conditioned statistic; the <em>registered</em> criterion
          (fσ₈(z=0.51)&nbsp;&gt;&nbsp;0.46 at &gt;3σ) was met at only ~1.5σ — <strong>the test as registered
          lacked the power to discriminate, and is not counted as a refutation.</strong>{' '}
          Verdict: <strong>post-hoc retrodiction — disfavored on σ₈ amplitude; underpowered on the registered statistic.</strong>{' '}
          The LRG1 (z=0.51) bin at fσ₈/(fσ₈)_fid&nbsp;=&nbsp;1.16&nbsp;±&nbsp;0.13 (&ldquo;enhancement&rdquo;) is a single
          ~1.2σ fluctuation, not the ensemble signal — the DR1 ensemble growth index γ_growth&nbsp;≈&nbsp;0.58&nbsp;±&nbsp;0.11
          actually leans mildly toward suppression, the framework&apos;s own direction. Pinning the kill on
          &ldquo;wrong direction&rdquo; would be fragile against DR2 (growth results unpublished, ~Spring 2027); the amplitude statistic is the defensible one.
          Note: a 2026-05-25 &ldquo;correction&rdquo; that claimed fσ₈&nbsp;≈&nbsp;0.45 was itself an error — that value belongs to arXiv:2512.03230
          (DESI Peculiar Velocity Survey, z&asymp;0.07), misattributed to the z=0.51 full-shape slot. The &ldquo;mechanism-class
          transferable contribution&rdquo; characterization is not restored — it was an overstatement of a post-hoc test.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>(2) RAR Transition Shape (2026-05-21):</strong> The one non-degenerate galaxy-scale
          discriminating test — whether the compander&apos;s transition curve (γ=2) differs from McGaugh&apos;s MOND
          interpolating function — was run on 2807 real SPARC points. γ=2 is refuted at ΔBIC=+184
          (conservative: ≈33). Free-γ converges to γ≈0.49&nbsp;=&nbsp;MOND, with RMS identical to McGaugh.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>How to read the ΔBIC ladder (sharpened 2026-07-27, external-reviewer point).</strong>{' '}
          The two numbers do different work and should not be read as one scale. The γ=2 result is a
          pure likelihood verdict (Δk&nbsp;=&nbsp;0): ΔBIC&nbsp;=&nbsp;+184 is decisive misfit. The free-γ
          result is almost pure parameter charge: with N&nbsp;=&nbsp;2807, ln&nbsp;N&nbsp;=&nbsp;7.94, so one
          added free parameter costs +7.94 in BIC <em>before any likelihood is considered</em>. The observed
          ΔBIC&nbsp;=&nbsp;+7.1 therefore implies Δχ²&nbsp;≈&nbsp;&minus;0.84 — the free-γ compander fits the
          data <em>marginally better</em> than McGaugh&apos;s ν and loses on BIC solely as a complexity
          charge for carrying a knob MOND does not need. The honest statement is not &ldquo;collapses to
          MOND equivalence&rdquo; but the stronger one: <strong>the compander is a strictly worse-parameterized
          reparametrization of the RAR, buying Δχ²&nbsp;&lt;&nbsp;1 for one added degree of freedom.</strong>{' '}
          (Open bookkeeping item: whether a₀ was floated in both arms, i.e. whether Δk&nbsp;=&nbsp;1 or 2.
          At Δk&nbsp;=&nbsp;2 the penalty is 15.9 and the compander fits better by Δχ²&nbsp;≈&nbsp;8.8 —
          a different number, the same conclusion. The fit record should state which.)
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Discrimination, stated precisely (corrected 2026-07-27).</strong> This page previously
          read &ldquo;net discriminating galaxy tests vs MOND: 0, by execution.&rdquo; That sentence was
          written on 2026-05-21, before TEST-09 and TEST-10 executed, and it is <em>false as written</em> —
          it also contradicted{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>, which
          says of TEST-10 &ldquo;this observable discriminates, and the framework loses it.&rdquo; The claim
          splits in two, and both halves are worth stating:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>
            <strong>0 executed tests could select Synchronism over MOND+EFE+ΛCDM.</strong> This is the true
            statement, and it is the one the site meant.
          </li>
          <li>
            <strong>2 executed tests discriminated between them, and both selected MOND</strong> — TEST-09
            (BTFR slope: MOND 0.6σ passes, Synchronism 3.3σ fails) and TEST-10 (dwarf DM fractions: MOND
            median residual &minus;0.03, Synchronism +0.18). A test that separates two models at 3.3σ
            <em> is</em> a discriminating test regardless of which model wins; that is what discrimination
            means. Booking them as zero was an <strong>under-claim</strong> — the site&apos;s two strongest
            empirical results were being reported as nothing.
          </li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The RAR transition-shape test is the one that genuinely <em>cannot</em> discriminate: at free γ
          the curves coincide. Discrimination is absent there, not across the executed ledger.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>(3) Cassini/SPARC joint squeeze (TEST-11 — executed 2026-07-23, propagated to site
          2026-07-28):</strong> the framework&apos;s single scale-universal compander cannot be used as
          <em>both</em> the SPARC-fitting galaxy function <em>and</em> a QUMOND-style Solar System
          interpolation function &mdash; at the SPARC-preferred γ&nbsp;≈&nbsp;0.489, the Cassini quadrupole
          discrepancy is <strong>+17.95σ</strong>, and every point in the retained ΔBIC&nbsp;≤&nbsp;10 grid
          (γ&nbsp;=&nbsp;0.425&ndash;0.600) fails Cassini by +17.7σ to +18.0σ &mdash; a robust empty
          intersection, not a boundary artifact. This is by far the sharpest number on the site. See{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link> for
          the full scope statement (it closes the joint realization, not modified inertia or a
          multi-scale function).
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>(4) Bell/CHSH substrate test (Bet B1):</strong> the framework&apos;s single-observer
          substrate was tested directly against Bell&apos;s inequality and refuted on both no-signaling
          arms &mdash; see{' '}
          <Link href="#a2acw-self-audit" style={{ color: 'var(--color-accent-blue)' }}>below</Link> for
          detail. The only executed lab-data refutation on the site.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
          <strong>Added 2026-07-30:</strong> (3) and (4) were both executed and badged Failed/Refuted
          elsewhere on the site (Tier 1, Bell/CHSH section below) but were silently absent from the
          footer&apos;s &ldquo;4 refutations&rdquo; count and from this page&apos;s &ldquo;sharpest events&rdquo;
          list &mdash; the count&apos;s scope word (&ldquo;astronomical&rdquo;) filtered out the one
          ephemeris result and the one laboratory result without saying so, and both happen to be
          failures. Two visitor personas independently caught this the same day. The footer count is now
          <strong> 6</strong>, spanning astronomical, ephemeris, and laboratory data.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>The entity criterion Γ&nbsp;&lt;&nbsp;m</strong>, previously labeled the sole surviving novel
          prediction, was reclassified as a <strong>Reparametrization</strong> (2026-05-20): it is the standard
          narrow-width condition Γ&nbsp;≪&nbsp;m from QFT — known since Breit-Wigner (1936) and formalized
          in the Källén-Lehmann spectral representation. Synchronism&apos;s contribution is an ontological
          interpretation, not the condition. Novel-survivor count: <strong>0</strong>.
          The framework produced <strong>47 internal contributions</strong> across ~3,308 sessions &mdash;
          well-posed questions and methodology outputs, zero confirmed novel results.
          &ldquo;Unconfirmed&rdquo; &ne; &ldquo;wrong&rdquo; &mdash; but the evidence now includes six executed refutations on external data (astronomical, ephemeris, and laboratory) and zero surviving novel predictions.
        </p>
      </section>

      {/* Coherence definition — what the central variable does and doesn't mean */}
      <section className="section content-width">
        <h2 id="coherence-meaning">What &ldquo;Coherence&rdquo; Does and Doesn&apos;t Mean Here</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This page audits parameters, tests, and symmetry constraints — so it should also audit the
          framework&apos;s central variable by name. <strong>C(&#x03C1;) runs from 0 (sparse, independent
          constituents) to 1 (dense, collective behavior).</strong> That is <em>not</em> the physicist&apos;s
          &ldquo;quantum coherence&rdquo; — it is closer to a <em>classicality</em> or collectivity measure
          along the density axis. The naming is close to inverted relative to standard usage: BCS
          superconductors and Bose&ndash;Einstein condensates — the most quantum-phase-coherent systems
          known — score <em>low and flat</em> on C(&#x03C1;) at all physically accessible densities
          (their enormous N<sub>corr</sub> makes &#x03B3; tiny, flattening the curve). A condensed-matter
          reader who imports the standard meaning of &ldquo;coherence&rdquo; will read several pages backwards.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          Why not rename it? A rename was adjudicated and rejected (2026-06): retrofitting a new name
          across a historical research corpus would assert that the corpus said something it didn&apos;t.
          The honest fix is stating the collision wherever it can mislead — the{' '}
          <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>glossary</Link> carries the
          &#x26A0; warning on every coherence-adjacent entry, and it is stated here because this is the
          page that claims to audit everything.
        </p>
      </section>

      {/* What Was Tested */}
      <section className="section">
        <h2 id="what-was-tested">What Was Tested</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Analyses run with results. A kill-criterion-triggered result appears here, not under &ldquo;What Works&rdquo;
          &mdash; the heading reflects what was <em>attempted</em>, not what succeeded.
          The site-wide footer count (&ldquo;0 confirmed; 6 refutations executed on external data&rdquo;, recounted
          2026-07-30) covers executed refutations across three data types &mdash; astronomical: the RAR
          transition shape (&#x03B3;=2 pinned, &#x0394;BIC=+184), the BTFR slope (TEST-09, registered kill
          fired at 3.3&sigma;, 2026-07-14), dwarf DM fractions (TEST-10 — class exclusion via SPARC&apos;s max
          observed DM fraction, 2026-07-15; the &ldquo;69% exceeds ceiling&rdquo; headline is convention-dependent,
          see the Verdict section above), and the registered environment run (r&sup2; = 0.0001 vs the
          registered &gt;20% claim, 2026-07-14); ephemeris: the Cassini/SPARC joint squeeze (TEST-11, +17.95&sigma;,
          2026-07-23); and laboratory: the Bell/CHSH substrate test (Bet B1, refuted on both no-signaling arms).
          Through 2026-07-29 the count and its stated scope (&ldquo;external astronomical data&rdquo;) silently
          excluded the last two, both of which were already executed and badged Failed/Refuted elsewhere on the
          site &mdash; a scope word that happens to filter out only failures understates the audit rather than
          strengthening it, which is the opposite of this page&apos;s purpose. DESI TEST-04a is still
          deliberately <em>not</em> counted &mdash; the test as registered lacked the power to discriminate
          (corrected 2026-07-14). Note what the count is not: none of these tests is <em>prospective</em> &mdash;
          every adjudication used data that existed before the criterion. The program&apos;s
          prospective-registration count remains 0.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Galaxy Rotation: ALFALFA-SDSS</h3>
              <ValidationBadge status="untested" label="TEST-03 Never Run As Registered" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              &#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex &mdash; <strong>CDM-consistent</strong> (z&nbsp;=&nbsp;+0.5 in the definitive run), not below CDM.
              <strong> Sample correction (2026-07-10):</strong> the 0.086 figure belongs to the source session&apos;s{' '}
              <em>optimal quality cut, N&nbsp;=&nbsp;677</em> (SNR&nbsp;&gt;&nbsp;15, e<sub>W50</sub>&nbsp;&lt;&nbsp;10, b/a&nbsp;&lt;&nbsp;0.65, V&nbsp;&gt;&nbsp;80&nbsp;km/s),
              not to the full ALFALFA&ndash;SDSS cross-match &mdash; the full sample (N&nbsp;=&nbsp;14,435 in the definitive session) gives
              &#x03C3;<sub>int</sub>&nbsp;=&nbsp;0.118&nbsp;&plusmn;&nbsp;0.001. This card previously paired the headline N with the optimal-cut statistic
              &mdash; the same numerator/denominator splice class as the TEST-03 correction below, caught by walking the number to Session 610&apos;s own table.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Correction (2026-07-09):</strong> this card previously reported &ldquo;environment-dependent RAR scatter at
              p = 5&times;10<sup>&minus;6</sup>, R&sup2; = 0.14&rdquo; as the ALFALFA-SDSS (N = 14,585) result and said its kill criterion
              fired. That pairing is mathematically impossible at N = 14,585 (R&sup2; = 0.14 there implies p of order 10<sup>&minus;500</sup>,
              not 10<sup>&minus;6</sup>) &mdash; the (R&sup2;, p) pair is only self-consistent at SPARC scale (N &asymp; 130&ndash;175), which is
              TEST-05&apos;s sample, not this one. TEST-03&apos;s actual environment-density result on the 14,585-galaxy cross-match was
              never computed as registered. See the corrected <Link href="/tier-1-existing#TEST-03" style={{ color: 'var(--color-accent-blue)' }}>TEST-03</Link>{' '}
              and <Link href="/tier-1-existing#TEST-05" style={{ color: 'var(--color-accent-blue)' }}>TEST-05</Link> cards for the full provenance trace.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Verdict correction (2026-07-04):</strong> an intermediate session had read &#x03C3;<sub>int</sub> as
              &minus;6.2&sigma; below the CDM prediction; that reading was retracted in-archive once distance-noise
              modeling was added &mdash; the source session&apos;s own definitive run reports CDM-consistent at z&nbsp;=&nbsp;+0.5,
              and the verdict is itself modeling-choice-dependent (z ranges +0.5 to +64 across choices). The
              retracted &ldquo;below CDM&rdquo; framing had propagated to this page, {' '}
              <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link>, and{' '}
              <Link href="/cdm-discrimination" style={{ color: 'var(--color-accent-blue)' }}>CDM Discrimination</Link> &mdash;
              all three now carry the corrected verdict.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>MOND (Modified Newtonian Dynamics) Unification: a&#x2080; = cH&#x2080;/(2&#x03C0;)</h3>
              <ValidationBadge status="reparametrization" label="Dimensional Analysis" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              MOND&apos;s acceleration constant a&#x2080; related to cosmological parameters via a&#x2080; = cH&#x2080;/(2&#x03C0;). 13% error at H&#x2080; = 67.4 vs observed value.
              This numerical coincidence has been noted since Milgrom (1983), and other frameworks (McCulloch 2007, Verlinde 2017,
              Smolin 2017) derive the same relation with the same geometric factor. The quantities c, H&#x2080;, and G are the only
              dimensionally relevant cosmological constants, and cH&#x2080; naturally has units of acceleration. Best classified as
              dimensional analysis, not a unique derivation.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Chemistry: &#x03B3; &#x2248; 1 Boundary</h3>
              <ValidationBadge status="reparametrization" label="Null Model RUN (2026-05-10) — Null-Class" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              1,703 chemical phenomena. Sound velocity r = 0.982, electronegativity r = 0.979.
              Top correlations are strong — and the relevant null <strong>has been computed</strong>: it
              matches them.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Null model result (run 2026-05-10; this row previously said &ldquo;not yet
              run&rdquo; — that was stale):</strong> Sound velocity, electronegativity, and atomic
              volume are all near-monotonic functions of atomic number Z, so the relevant null is
              r(polynomial in Z), not r = 0. A 2-parameter degree-2 polynomial in Z was fit to the
              same targets, analytically and numerically: <strong>|&#x0394;r| &#x2264; 0.07 on
              essentially all density-monotonic targets, and the polynomial sometimes outperforms
              Synchronism</strong> (r &#x2248; 0.99 vs &#x2248; 0.87 on linear-in-Z and generic
              smooth-monotonic targets). Verdict: the chemistry correlations are <strong>null-class</strong> —
              they demonstrate density-monotonicity (known physics), not anything specific to C(&#x03C1;).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Additional caveats: ~11% failure rate. Era 2 chemistry (sessions 134-2660) identified as
              template-based. 1,703 phenomena include statistically dependent samples (sound velocity,
              electronegativity, and atomic volume co-vary for well-known bonding reasons).
              See <a href="/chemistry-limitations" style={{ color: 'var(--color-accent-blue)' }}>Chemistry Limitations</a>.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Freeman&apos;s Law: &#x03A3;&#x2080; from First Principles</h3>
              <ValidationBadge status="reparametrization" label="Dimensional Identity — Same Class as a₀" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Surface density &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G) &#8776; 119 M&#x2609;/pc&sup2;. &#8776;4% error vs
              Freeman&apos;s observed value (124 M&#x2609;/pc&sup2;) &mdash; corrected 2026-07-09 from a previously
              stated 110 / 12% arithmetic error (two visitor personas independently caught it the same day).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Like a&#x2080; ~ cH&#x2080;, this is the only surface-density scale buildable from the available cosmological
              constants (c, H&#x2080;, G). Any framework that imports these constants will recover the same dimensional
              relation. It is also <strong>not independent evidence</strong> from a&#x2080;: &#x03A3;&#x2080; = a&#x2080;/(2&#x03C0;G) exactly,
              so the &#8776;4% Freeman match is the same &#8776;13% a&#x2080;-vs-Milgrom gap propagated through a fixed linear
              relation, not a second derivation. Reclassified from &ldquo;Validated&rdquo; to Reparametrization
              alongside a&#x2080; on the same grounds.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
              <strong>Caveats (updated 2026-07-17):</strong> the H&#x2080; inconsistency with{' '}
              <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter
              Derivations&apos;</Link> former 123.3/0.5% figure is <strong>resolved</strong> — the split was an
              undisclosed Hubble-constant switch (119.0 at H&#x2080; = 67.4, 123.6 at H&#x2080; = 70; identified
              by a visitor physics persona). Site standard is now H&#x2080; = 67.4 km/s/Mpc (Planck 2018),
              giving the &#8776;119 shown here. Separately, Freeman&apos;s (1970) value is a surface
              <em> brightness</em>; converting to surface <em>density</em> needs M/L<sub>B</sub>&nbsp;&#8776;&nbsp;1&ndash;3,
              so the target is uncertain by a factor of &#x223C;2 — neither page&apos;s percentage is
              meaningful standing alone.
            </p>
          </div>
        </div>
      </section>

      {/* What Failed */}
      <section className="section">
        <h2 id="what-failed">What Failed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Critical Exponents — Category Error (Corrected 2026-05-25)</h3>
              <ValidationBadge status="failed" label="Wrong Category — Not a Critical Phenomenon" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              An explicit, everywhere-analytic sigmoid has no critical point — no fixed point, no diverging
              susceptibility, no diverging correlation length. C(&#x03C1;) is not a critical phenomenon:
              &#x03C1; is an external input evaluated directly, not solved self-consistently (unlike Ising&apos;s
              m&nbsp;=&nbsp;tanh(&beta;Jzm), where m appears on both sides — that&apos;s what generates criticality).
              Comparing &ldquo;predicted critical exponents&rdquo; to renormalization-group exponents presupposes
              the very criticality C(&#x03C1;) does not have. The prior framing (&ldquo;exponents 2&times; off&rdquo;)
              was a fossil from the phase-transition era of the project — retained too long alongside the
              (correct) compander reframe. Corrected verdict: the Landau-universality argument fails not because
              the exponents are wrong by a factor, but because <strong>the category does not apply.</strong>
              C(&#x03C1;) belongs to the compander family (&#x03BC;-law / Hill / Naka&ndash;Rushton class).
              No critical exponents exist to compare.
            </p>
          </div>

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
              <h3>Superconductor T<sub>c</sub></h3>
              <ValidationBadge status="failed" label="6.5× Wrong" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              T<sub>c</sub> = &#x0394;/(1.76k<sub>B</sub>&#x03B7;) predicts 607K for YBCO (yttrium barium copper oxide). Actual: 93K. Off by 6.5&times;.
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

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>TEST-03: ALFALFA-SDSS TFR Scatter — REMOVED FROM &ldquo;WHAT FAILED&rdquo; (2026-07-09)</h3>
              <ValidationBadge status="untested" label="Never Run As Registered" />
            </div>
            <PlainTerms>
              this card previously said the framework failed its own pre-registered environment test.
              It didn&apos;t — the number reported as the failing result belongs to a different test on a
              different, smaller sample. The environment test on the 14,585-galaxy sample was never
              actually run. That&apos;s a gap, not a failure, and it&apos;s a more embarrassing kind of error
              to have made on the site&apos;s own self-audit page than the failure it was reporting.
            </PlainTerms>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              R&sup2; = 0.14 with p = 5&times;10<sup>&minus;6</sup> and N = 14,585 is internally impossible: at that N,
              R&sup2; = 0.14 implies t &asymp; 48.7 (p of order 10<sup>&minus;500</sup>). The pair is self-consistent only at
              N &asymp; 130&ndash;175 (SPARC scale) &mdash; TEST-05&apos;s sample. Archive tracing confirms it: 0.14 is a
              Hubble-type/morphology term from Session 377 on N &asymp; 171, misattributed to the ALFALFA-SDSS
              cross-match. The registered TEST-03 environment-density correlation on 14,585 galaxies was never computed.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              Independently found three ways: archive Session 639 (2026-04-30) first traced the metric conflation;
              the explorer track&apos;s 2026-07-08 citation-walk closed the provenance chain (registered threshold was
              r&sup2; &lt; 0.09, which R&sup2; = 0.138 passes, and the catalog postdates the measurement by 15 days);
              two visitor personas independently re-derived the (N, p) inconsistency on 2026-07-09. See the corrected{' '}
              <Link href="/tier-1-existing#TEST-03" style={{ color: 'var(--color-accent-blue)' }}>TEST-03</Link>{' '}
              and <Link href="/tier-1-existing#TEST-05" style={{ color: 'var(--color-accent-blue)' }}>TEST-05</Link>{' '}
              cards for the full trace. TEST-05, which does own the (R&sup2;=0.14, p=5&times;10<sup>&minus;6</sup>) result on
              its registered terms, was reclassified MOND-shared on 2026-07-09 — a verdict re-adjudicated 2026-07-15:
              the tie dissolves on lever magnitude (MOND+EFE&apos;s external-acceleration lever moves outer g_obs by
              ~0.09 dex; C(&rho;)&apos;s ambient-density lever by &le;2&times;10<sup>&minus;3</sup> dex — and the C(a)
              law predicts exactly zero). The registered environment-density run now exists (research repo,
              2026-07-14: SPARC RAR offsets vs Cosmicflows-4 density, r&sup2; = 0.0001 vs the registered &gt;20% claim
              — refuted by execution; weak secondaries are opposite-signed, EFE-like). See the TEST-05 card.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>RAR Transition Shape — SPARC ΔBIC=+184, γ=2 Refuted, γ<sub>free</sub>=MOND (2026-05-21)</h3>
              <ValidationBadge status="failed" label="Kill Criterion Triggered — CLOSED" />
            </div>
            <PlainTerms>
              across 175 galaxies analyzed together, the framework&apos;s preferred curve-shape fits
              measurably worse than MOND&apos;s (ΔBIC is a fit-quality penalty; +184 is decisive, and even
              the conservative estimate ≥ +33 is). If you let the framework&apos;s shape parameter float
              freely, it simply turns into MOND&apos;s curve — so it is either worse than MOND or identical
              to it, never better.
            </PlainTerms>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The only non-degenerate galaxy-scale discriminating test between the Synchronism compander
              (μ<sub>Syn</sub>&nbsp;=&nbsp;tanh(γ&nbsp;ln(1+x)), γ=2) and MOND&apos;s RAR interpolating function
              was executed on 2807 real SPARC points. Kill criterion: ΔBIC &gt; 10 favoring McGaugh refutes γ=2.
              Actual result: <strong>ΔBIC&nbsp;=&nbsp;+184</strong> (conservative intra-galaxy correlation
              correction: ΔBIC&nbsp;≈&nbsp;33 — still decisive).
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              The residual is a coherent S-shaped ≈0.05–0.10 dex signature at the RAR transition
              (g<sub>bar</sub>&nbsp;≈&nbsp;a₀), significant at ~8σ per bin. Free-γ fit converges to γ≈0.49&nbsp;=&nbsp;MOND,
              with RMS identical to McGaugh to four digits. ΔBIC&nbsp;=&nbsp;+7 for free-γ is entirely the BIC
              parameter penalty, not a fit difference — the compander at its best-fit γ is MOND.
              <strong> Net discriminating galaxy tests vs MOND: 0, by execution.</strong>
              Script: <code style={{ fontSize: '0.78rem' }}>explorer/scripts/rar_transition_shape_real_sparc.py</code>.
              See also <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation: RAR Transition Shape</Link>.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>TEST-04a: DESI RSD fσ₈ — Post-hoc Retrodiction, Disfavored on σ₈ but Underpowered on the Registered Statistic (Corrected 2026-07-14)</h3>
              <ValidationBadge status="failed" label="Disfavored 2.4σ on σ₈ — ~1.5σ on Registered fσ₈ — Post-hoc — Test Underpowered to Discriminate" />
            </div>
            <PlainTerms>
              the framework predicted the universe&apos;s large-scale structure should be about 10%
              &ldquo;smoother&rdquo; (less clumpy) than standard cosmology expects. The DESI galaxy survey
              measured the clumpiness (that&apos;s σ₈): the prediction misses by 2.4 standard deviations —
              unlikely to be luck — and it was written down only after earlier hints pointed that way,
              which makes it weaker still.
            </PlainTerms>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              <strong>The load-bearing constraint is amplitude, not direction.</strong> Session 107 (Dec 2025)
              predicted σ₈&nbsp;≈&nbsp;0.76 (calibrated to the then-live S₈ lensing tension). DESI DR1 full-shape
              (arXiv:2411.12021) combined σ₈&nbsp;=&nbsp;0.841&nbsp;±&nbsp;0.034 (Table 10) — a <strong>2.4σ</strong> tension.
              That tension is robust regardless of which single bin is inspected.
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              <strong>The single-bin &ldquo;enhancement&rdquo; reading is a qualified, not load-bearing, finding.</strong>{' '}
              LRG1 (z_eff=0.51) fσ₈/(fσ₈)<sub>fid</sub>&nbsp;=&nbsp;1.16&nbsp;±&nbsp;0.13 — growth above the ΛCDM fiducial
              in that one bin (~1.2σ). But the DESI DR1 full-shape RSD <em>ensemble</em> growth index
              γ<sub>growth</sub>&nbsp;≈&nbsp;0.58&nbsp;±&nbsp;0.11, <strong>above</strong> GR&apos;s 0.545 — which leans mildly
              toward <em>suppression</em>, the framework&apos;s own predicted direction. Reading LRG1 alone as
              &ldquo;sign-wrong regardless of which bin&rdquo; over-reads a single ~1.2σ bin against an ensemble that
              trends the other way. (Corrected 2026-07-02: a 2026-07-01 explorer re-execution and an independent
              2026-07-02 visitor Pass&nbsp;4 researcher read both flagged the same overclaim.)
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              <strong>Correction (2026-07-14): the registered kill criterion and the delivered verdict use
              different statistics, and the substitution is not innocent.</strong> The kill criterion below
              is registered on fσ₈(z=0.51) &gt; 0.46 for a &gt;3σ ruling-out. Computed directly from this
              page&apos;s own numbers — LRG1 fσ₈&nbsp;=&nbsp;(fσ₈)<sub>fid</sub>&nbsp;×&nbsp;1.16&nbsp;±&nbsp;0.13
              &nbsp;=&nbsp;0.474&nbsp;×&nbsp;1.16&nbsp;±&nbsp;0.062&nbsp;=&nbsp;0.550&nbsp;±&nbsp;0.062 — the 0.46
              threshold is exceeded by only <strong>~1.5σ</strong>, well short of the &gt;3σ the criterion
              demands for a ruling-out (it does clear the weaker &gt;2σ &ldquo;disfavors&rdquo; clause at 0.45).
              The 2.4σ figure that formerly carried a &ldquo;Kill Criterion Triggered&rdquo; label on this
              page (last instance removed from the Verdict section 2026-07-17) is instead a
              comparison on <strong>σ₈</strong>, a different parameter inferred from a full-shape EFTofLSS fit
              whose perturbation kernels <em>assume GR growth</em> — using a GR-conditioned amplitude to
              falsify a modified-growth model risks circularity, a point this page&apos;s own EFTofLSS citation
              below already half-concedes (1–2σ theory systematic). DESI&apos;s own purpose-built
              modified-gravity analysis — Ishak et al., &ldquo;Modified Gravity Constraints from the Full-Shape
              Modeling of Clustering Measurements from DESI 2024,&rdquo; arXiv:2411.12026 (JCAP 09 (2025) 053),
              previously uncited on this site — constrains exactly the parameter a growth-suppression mechanism
              lives on: μ₀&nbsp;=&nbsp;0.11&nbsp;(+0.45/−0.54) from DESI FS+BAO+BBN+n<sub>s</sub> alone,
              tightening to μ₀&nbsp;=&nbsp;0.05&nbsp;±&nbsp;0.22 with CMB+DES-SN. A ~12% fσ₈ suppression maps to
              a substantially negative μ₀, which sits inside DESI-alone&apos;s 1σ band (the exact mapping needs
              the assumed time-dependence worked out — not yet run on this site; seeded as an explorer topic).
              <strong>Honest reading: the test as registered lacks the statistical power to discriminate this
              framework from GR</strong> — a more useful negative result than a manufactured kill, but
              materially weaker than &ldquo;Kill Criterion Triggered&rdquo; implied. The framework&apos;s
              cosmology sector is not rescued by this correction: it still has no field equation to source a
              growth suppression from in the first place, and the σ₈ discrepancy on its own predicted value
              (0.76 vs. 0.841) remains a real, if GR-conditioned, 2.4σ miss. (Found and verified: 2026-07-14
              visitor Pass 3 and Pass 4, cross-checked against this page&apos;s own cited numbers before
              editing.)
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Two aspects of the honest verdict:</strong> (1) <em>Post-hoc origin — doubly so</em> — Session 107 was committed
              2025-12-10 after DESI DR1 was published April 2024; σ₈ calibrated to the lensing S₈ tension (KiDS/DES era), then propagated to DESI.
              No prospective prediction registered. Additional layer: the S₈ tension itself is receding —
              DES Y3 6×2pt and KiDS-Legacy (2024–2025) reanalyses have pulled S₈ back toward Planck,
              so the calibration anchor was a transient observational state, not a stable target.
              This makes TEST-04a post-hoc against a moving baseline. (2) <em>Disfavored 2.4σ on amplitude</em>
              — the σ₈≈0.76 prediction sits 2.4σ below the DESI DR1 combined fit; this is the durable
              disfavor (a GR-conditioned statistic, not the registered kill — see the 2026-07-14 correction above).
              A 2026-05-25 &ldquo;correction&rdquo;
              that claimed kill not triggered was itself an error: 0.4497&nbsp;±&nbsp;0.0548 belongs to arXiv:2512.03230
              (DESI Peculiar Velocity Survey, z&asymp;0.07) misattributed to the z=0.51 full-shape slot.
              The &ldquo;mechanism-class transferable contribution&rdquo; is NOT restored — it was an overstatement.
              <strong>Context (2026-05-23):</strong> EFTofLSS analyses (Cabass, Simonović, Zaldarriaga et al. 2024-2025)
              explain DESI DR1 fσ₈ within ΛCDM at 1-2σ via one-loop counterterms.
              <strong>Calibration note (2026-06-24):</strong> the kill fires on LRG1 alone at ~2.15σ if read as a
              single-bin sign test — standard practice treats that as sub-threshold. The amplitude tension (2.4σ,
              ensemble σ₈) is what previously carried the &ldquo;Kill Criterion Triggered&rdquo; label
              (label retired 2026-07-14; see correction above), not the single-bin direction.
              <strong>Currency (2026-07-02):</strong> DESI DR2 full-shape growth (fσ₈) constraints are not yet
              published (expected ~Spring 2027); this verdict is frozen at DR1. The re-open policy below is
              unaffected — no DR2 growth datum exists yet to trigger it.
            </p>
            <div style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginTop: '0.75rem', fontSize: '0.85rem' }}>
              <strong style={{ color: 'var(--color-accent-blue)' }}>What this rules out beyond Synchronism:</strong>{' '}
              DESI DR1 full-shape (arXiv:2411.12021) finds LRG1 fσ₈/(fσ₈)<sub>fid</sub>&nbsp;=&nbsp;1.16&plusmn;0.13 — growth <em>above</em> ΛCDM, opposite the predicted suppression.
              This constrains <strong>Synchronism-form uniform, scale-independent late-time growth suppression</strong>: any framework that predicts a uniform coherence-damping of structure growth across all scales sits in the same disfavored direction.
              <em>Scope note:</em> this does <strong>not</strong> exclude massive neutrinos, warm dark matter, or f(R) gravity &mdash; those mechanisms are k-dependent and scale-localized, fundamentally distinct from a uniform coherence suppression; DESI+CMB joint analyses treat them as fully live. The constraint applies specifically to the uniform scale-independent class, not to suppression mechanisms in general.
            </div>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Quantum Arc — Zero Confirmed Predictions (Session #581 Audit)</h3>
              <ValidationBadge status="reparametrization" label="0 Confirmed, 1 Refuted — 2026-02-08" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Session #581 (2026-02-08) conducted an 8-test quantum audit. Overall verdict:
              <strong> zero confirmed predictions, 4 reparametrizations, 1 refutation, 1 post-hoc fit,
              1 not-preferred.</strong>
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Key refutation — boost ceiling B<sub>max</sub> = 3.17:</strong> The framework predicts a
              maximum gravitational boost ratio B = g<sub>obs</sub>/g<sub>bar</sub> of
              B<sub>max</sub> &#x2248; 3.17 (from SPARC — Spitzer Photometry &amp; Accurate Rotation Curves — calibration).
              The deepest SPARC bin shows &#x27E8;B&#x27E9; = 10.82, with 579 individual SPARC
              galaxies exceeding B<sub>max</sub>. This is the strongest direct refutation in the
              framework&apos;s own internal audit. It was not previously visible on this page.
              <strong> Its corollaries were executed 2026-07-14/15 and both fail:</strong> a bounded boost has no
              deep-MOND regime, forcing the wrong BTFR slope (TEST-09 — kill fired at 3.3σ), and caps the apparent
              DM fraction at 1&nbsp;&minus;&nbsp;&Omega;_m = 68.5% under one convention — the &ldquo;69% of SPARC
              exceeds it&rdquo; headline doesn&apos;t survive the alternative baryon-budget convention (see Verdict,
              above); the class exclusion via SPARC&apos;s max observed fraction (TEST-10) does.
              Everything gravitational on this page that differs from MOND is downstream of this one bound.
              <em> (Notation note 2026-06-12: the source audit called this quantity &ldquo;&#x03B3;&rdquo;,
              colliding with the transition-sharpness parameter &#x03B3; = 2/&#x221A;N<sub>corr</sub> used
              everywhere else on this page — including the separate &ldquo;&#x03B3; = 2 refuted at
              &#x0394;BIC = +184&rdquo; result. They are different quantities; we use B here to keep
              them apart.)</em>
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              The two &ldquo;literature-consistent&rdquo; quantum results (&#x0393; = &#x03B3;&sup2;(1&minus;c)
              and Bell-freezing c(d)) are both reparametrizations: the decoherence formula is the
              textbook correlated-dephasing variance (Palma&ndash;Suominen&ndash;Ekert 1996);
              the Bell-freezing functional form was imported from waveguide QED (Session #235 admission).
              Audit finding propagated to site 2026-05-16.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Bell/CHSH Substrate Test (Bet B1) — Refuted, Both No-Signaling Arms</h3>
              <ValidationBadge status="failed" label="Executed 2026-06-21 / 2026-07-06 — S ≤ 2 Without Signaling" />
            </div>
            <PlainTerms>
              Bell tests give quantum mechanics a distinctive score: real experiments reach about 2.83,
              while any classical, local mechanism can score at most 2. Simulations built from this
              framework&apos;s own machinery score 1.85–2.00 — classical territory — and only beat 2 when
              allowed to cheat with faster-than-light signaling. So the framework doesn&apos;t sidestep the
              famous quantum weirdness; it fails the same test classical physics fails.
            </PlainTerms>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The framework&apos;s single-observer substrate was tested directly against Bell: CHSH
              simulations with freely chosen settings, measured only through observer-pattern
              phase-lock. <strong>Local construction: S = 1.98. Nonlocal-grid construction:
              S &equiv; 2.00 at every coupling strength (gauge-equivalent to relabeling the
              measurement angles &mdash; a local model in disguise). Global-clock construction:
              S up to 2.67, but only by introducing signaling.</strong> No construction reaches the
              Tsirelson bound (2&radic;2 &asymp; 2.83) without signaling.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Substrate-independence (run 2026-07-06):</strong> the same cap holds on the
              framework&apos;s own saturation-gated Intent-density substrate (S = 1.85 &le; 2, no
              signaling) &mdash; the S &le; 2 bound is Bell&apos;s structure theorem for any
              real-valued local-realist model, not an artifact of the borrowed phase substrate.
              The Born-rule cos&sup2; projection law reaches 2&radic;2 exactly, but only by importing
              Hilbert-space structure wholesale. This is the framework&apos;s cleanest self-executed
              negative result; full construction detail on{' '}
              <a href="/two-reframes">Two Reframes</a>. The substrate&apos;s Bell behavior is not
              an untested protocol: it was tested, by execution, and capped at the classical bound.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>BTFR Slope (TEST-09) — FAILED, Kill Criterion Fired (Executed 2026-07-14)</h3>
              <ValidationBadge status="failed" label="Kill Criterion Triggered — 3.3σ, deviation 0.41 > 0.3" />
            </div>
            <PlainTerms>
              the heavier a galaxy, the faster its outer edge spins — and the exact mathematical relationship
              between mass and speed (the &ldquo;slope&rdquo;) is measured precisely. MOND&apos;s prediction matches it.
              This framework&apos;s gravity boost has a built-in maximum, and a maxed-out boost behaves like ordinary
              Newtonian gravity — which forces the wrong slope. Run on 123 real galaxies, the framework misses by
              more than its own pre-registered failure threshold.
            </PlainTerms>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Executed 2026-07-14 on real SPARC (same V_flat estimator applied to observation, MOND, and Synchronism):
              observed n&nbsp;=&nbsp;3.75&nbsp;&plusmn;&nbsp;0.10 (reproduces Lelli 2019&apos;s 3.85&nbsp;&plusmn;&nbsp;0.09);
              MOND n&nbsp;=&nbsp;3.81&nbsp;&plusmn;&nbsp;0.04 (passes, 0.6σ); Synchronism n&nbsp;=&nbsp;3.35&nbsp;&plusmn;&nbsp;0.07
              (<strong>fails, 3.3σ; registered kill criterion &gt; 0.3 fires at 0.41</strong>). No parameters rescue it —
              reaching 3.75 requires &Omega;_m&nbsp;&rarr;&nbsp;0.001 and &phi;&nbsp;&rarr;&nbsp;2, where the law degenerates
              algebraically into MOND.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Why the old &ldquo;MOND-shared / cannot discriminate&rdquo; badge was wrong in structure:</strong>{' '}
              the framework&apos;s boost is bounded (B&nbsp;&le;&nbsp;1/&Omega;_m&nbsp;=&nbsp;3.17 — the ceiling in the
              boost-ceiling entry above), so it has <em>no deep-MOND regime</em>: its deep limit is Newtonian-times-constant,
              slope n&nbsp;&rarr;&nbsp;2, not MOND&apos;s n&nbsp;&rarr;&nbsp;4 (which requires the divergent
              &radic;(a&#8320;/g) boost). The previously listed &ldquo;n&nbsp;&rarr;&nbsp;4 deep-MOND&rdquo; limb was asserted
              (S193, synthetic 9-galaxy ladder), never derivable from the bounded formula; archive S58 had recorded the
              discrepancy honestly and was overwritten. The BTFR is exactly an asymptotic-boost observable — this failure is
              a corollary of the boost ceiling, as is TEST-10&apos;s (dwarf DM fractions — the class exclusion via
              SPARC&apos;s max observed fraction, not the convention-dependent 69%/68.5% headline; see Verdict
              above; executed 2026-07-15). Full trace on{' '}
              <Link href="/tier-1-existing#TEST-09" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 — TEST-09</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Structural Tensions (Stress Tests) */}
      <section className="section">
        <h2 id="structural-tensions">Structural Tensions (March 2026 Stress Tests)</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Eight adversarial stress-test sessions probed the CFD reframing for genuine novel predictions.
          Results: one candidate prediction, four forced choices, and several structural failures.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card" style={{ borderLeft: '3px solid rgba(167,139,250,0.6)', background: 'rgba(167,139,250,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ color: 'var(--color-accent-violet)' }}>Structural No-go: Local Density vs Non-local Acceleration (Milgrom 2005 instance)</h3>
              <ValidationBadge status="failed" label="Wrong Variable (2026-06-01)" />
            </div>
            <PlainTerms>
              the framework computes its gravity boost from how dense matter is <em>right at each point</em>.
              But real galaxy data organize by the total pull of <em>everything enclosed within your orbit</em> —
              a fundamentally different quantity. No single density threshold can bridge the two across
              systems (it misses clusters by factors of thousands), which is why the galaxy fits can&apos;t
              extend anywhere else.
            </PlainTerms>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              C(&#x03C1;) is a function of <em>local density</em> &#x03C1;. The RAR/MOND relation it mimics
              in galaxies is a function of g<sub>bar</sub> — the <em>enclosed-mass acceleration</em>, a
              non-local, geometry-dependent quantity. A pointwise intensive variable cannot reproduce an
              acceleration-space relation across systems with different mass geometries except by
              per-system calibration.
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The failure surfaces exactly where the two variables decouple:{' '}
              <strong>clusters require &#x03C1;<sub>crit,cluster</sub> 10<sup>4</sup>–10<sup>6</sup>&times;
              smaller than the galaxy value</strong> — destroying universality. Four natural ansätze tested
              on Coma: A1/A4 overshoot by 10<sup>4</sup>; A2 collapses to Newtonian; A3 is structurally
              impossible (C &#x2208; [0,1) bounds velocity at ≤2, observed dispersion requires ~4.6).
            </p>
            <div style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginTop: '0.75rem', fontSize: '0.85rem' }}>
              <strong style={{ color: 'var(--color-accent-violet)' }}>Transferable finding
              &mdash; scope demoted 2026-07-27:</strong>{' '}
              This no-go applies to modified-gravity ansätze that key on <em>local volumetric density
              &#x03C1;(r)</em> and modulate the force <em>algebraically</em> (a C(&#x03C1;) multiplier on g),
              which is the class C(&#x03C1;) belongs to. <strong>It does not apply to all local-&#x03C1;
              schemes</strong>: the earlier wording said &ldquo;any,&rdquo; and a walk of the screening
              literature found a published counterexample — Burrage, Copeland &amp; Millington, PRD 95,
              064050 (2017) reproduce the RAR on 153 SPARC galaxies with a symmetron keyed on &#x03C1;(r)
              and universal Lagrangian parameters, because their extra force is the <em>gradient</em> of a
              function of &#x03C1; rather than a multiplier on it. Detail and the corrected citable form on{' '}
              <a href="/for-researchers">For Researchers</a>.
              It also does <strong>not</strong> apply to frameworks using non-local state variables — Verlinde (enclosed
              baryonic mass M<sub>B</sub>(&lt;r)), MOG/STVG (enclosed mass scalar), or MOND surface-density
              formulations (column-integrated &Sigma;) all escape it. The discriminating axis is the
              <em>locality</em> of the state variable, not whether the framework is &ldquo;density-based.&rdquo;{' '}
              The root obstruction is Milgrom&apos;s non-locality theorem (astro-ph/0510117): a MOND-type
              modification must be strongly non-local in space/trajectory to produce the acceleration-keyed
              RAR (Lelli et al. 2017). C(&#x03C1;) is the quantified <em>local-density instance</em> of
              that obstruction, not a new theorem.
              Note: MOND also has one acceleration scale (a<sub>0</sub>) and fails at clusters by a
              residual factor of ~2 — so scale-count alone is not the discriminator; the variable (local
              &#x03C1; vs non-local g<sub>bar</sub>) is.
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              <strong>The no-go on the velocity axis (2026-07-02):</strong> the same obstruction as a
              sign statement — for the density knee to track MOND&apos;s acceleration threshold, the BTFR
              forces &rho;<sub>crit</sub> &prop; a&#x2080;&sup2;/(GV&sup2;) &prop; <strong>V<sup>&minus;2</sup></strong>{' '}
              (profile-independent); the framework asserts &rho;<sub>crit</sub> = A&middot;V<sup>+2</sup>.
              The exponent is inverted, the magnitude is 240&times;&ndash;300,000&times; too high, and with the
              framework&apos;s own values the entire luminous disk sits at C &#x2272; 0.28 — the knee is never
              crossed inside a galaxy. No recalibration of A repairs a sign. Full derivation on{' '}
              <a href="/parameter-derivations">Parameter Derivations</a>.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Dark Matter Viscosity Sign Error</h3>
              <ValidationBadge status="failed" label="Wrong Direction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              CFD mapping: C = 1/&mu;<sub>eff</sub>. Dark matter (low C) should mean high viscosity = more sticky.
              But the Bullet Cluster shows dark matter passes through itself &mdash; LESS sticky than baryons.
              The viscosity interpretation predicts the wrong direction. The deeper structural failure (local &#x03C1; vs
              non-local g<sub>bar</sub> variable mismatch) is described in the box above.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-failed)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Lorentz Invariance: Preferred-Frame + Dim-4 Naturalness Gap (Added 2026-07-02)</h3>
              <ValidationBadge status="audited-negative" label="Naturalness Gap: 16–28 OOM; custodial escapes unexhibited" />
            </div>
            <PlainTerms>
              the framework needs a universal &ldquo;absolute clock,&rdquo; which physics-wise means a preferred
              frame of reference. Coupling that to known particle physics generically produces effects that
              experiments have already excluded at 16–28 orders of magnitude below the expected size. Other
              theories have known escape mechanisms; this framework implements none of them. Not a data
              refutation — a severe &ldquo;why don&apos;t we see it?&rdquo; problem.
            </PlainTerms>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The framework&apos;s defining commitment — a discrete substrate with absolute time — generates a
              preferred rest frame. Two computed consequences: (1) no discrete 3D lattice has continuous
              rotational symmetry SO(3); &ldquo;no preferred scan-axis&rdquo; does not imply &ldquo;full Lorentz invariance,&rdquo;
              and grid geometry is unspecified. (2) The sharper result (2026-06-26 computation): the dim-4
              SME Lorentz-violating coefficient c<sub>μν</sub> is <strong>not</strong> Planck-suppressed here —
              tree-level c<sub>μν</sub>&nbsp;=&nbsp;0 by single-substrate universality, but the one-loop radiative
              correction is UV-dominated and Planck-cutoff-independent: c<sub>μν</sub>&nbsp;~&nbsp;α/π&nbsp;~&nbsp;10<sup>−2</sup>.
              Existing cavity and nucleon-comagnetometer bounds reach 10<sup>−18</sup>–10<sup>−30</sup> — a
              <strong> 16–28 order-of-magnitude fine-tuning gap</strong> (a CPSU 2004 naturalness problem, not a
              data-driven refutation). Two standard perturbative escapes exist in the literature (SUSY —
              Groot Nibbelink &amp; Pospelov 2005; anisotropic scale-hierarchy — Pospelov &amp; Shang 2012, demonstrated
              for Hořava-class absolute-time gravity) but neither is exhibited in this framework; single-substrate
              universality is itself the obstacle to adopting the scale-hierarchy route. Status: open custodial-mechanism
              gap, not a closed refutation — this is the framework&apos;s most severe naturalness constraint and its
              only non-MOND, non-Zurek falsification channel.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              A separate, structurally protected LIV channel (time-of-flight dispersion, dim≥5) is <em>not</em>
              affected by this gap — even-k lattice symmetry forbids the linear term, and the surviving quadratic
              term sits ~10<sup>7</sup> below current LHAASO reach and is non-unique to this framework (shared with
              LQG/causal-set models). Full three-lock argument and both LIV faces:{' '}
              <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers &rarr;</Link>.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>R(I) Correction Unobservable</h3>
              <ValidationBadge status="failed" label="~10⁻⁸⁰ at Neutron Stars" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The only genuine novel prediction path (R(I) viscosity correction to quantum pressure)
              gives corrections of ~10<sup>&minus;80</sup> at the densest accessible physics. Lives at
              Planck-scale densities. Not accessible to any foreseeable experiment.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Entity Criterion: &Gamma; &lt; m — Reclassified (2026-05-20)</h3>
              <ValidationBadge status="reparametrization" label="Ontological Reframe — Not a Novel Prediction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Previously labeled the sole surviving novel prediction. The condition Γ&nbsp;&lt;&nbsp;m is
              the standard narrow-resonance / narrow-width condition from QFT — required for a Breit-Wigner pole
              to be well-defined. Synchronism&apos;s contribution is an ontological interpretation
              (&ldquo;coherence cycle completion&rdquo;), not the condition itself. QFT already classifies
              broad resonances as poor quasiparticles and narrow ones as well-defined particles.
              Novel-survivor count after external expert audit: <strong>0 of 6</strong> (0 of 47 internal-consistency
              candidates pending audit, out of 3,308 total sessions — see the{' '}
              <Link href="/a2acw" style={{ color: 'var(--color-accent-blue)' }}>A2ACW methodology</Link> for the full chain).
            </p>
          </div>
        </div>
      </section>

      {/* Untested */}
      <section className="section">
        <h2 id="whats-untested">What&apos;s Untested</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Consciousness Threshold (C &#x2248; 0.50)</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              34 predictions, <strong>contingent on a C-axis calibration protocol that does not yet exist</strong>.
              The EEG (electroencephalography) experiment sketch ($150K, 12 months) cannot run as stated:
              per <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</Link>,
              no procedure maps any measurement (EEG phase coherence, fMRI, &#x03A6;) onto the C-axis — the
              claim is currently <em>unrunnable</em>, which is the stronger verdict. Calling these
              &ldquo;falsifiable&rdquo; without the calibration step would contradict that verdict.
              Consistent with that: the one internal test ever cited against the 0.50 value
              (gnosis-research Session 63) measured SNARC salience &mdash; a different variable with no
              mapping to C &mdash; so no threshold value has actually been tested. (A prior version of
              this page said both 0.50 and 0.64 were &ldquo;rejected at p &lt; 0.0001&rdquo;; the 0.64
              rejection had no source in any repository and was removed 2026-07-08.)
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>Quantum Predictions</h3>
              <ValidationBadge status="untested" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              6 testable protocols for MRH-based (Markov Relevancy Horizon) measurement theory. Requires dedicated experiments.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>BAO (Baryon Acoustic Oscillation) Modulation — Withdrawn</h3>
              <ValidationBadge status="superseded" label="Withdrawn 2026-05-04 (TEST-04)" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Formerly listed here as &ldquo;testable with existing survey data.&rdquo; That was stale:
              TEST-04 (BAO peak-shift modulation) was <strong>withdrawn 2026-05-04</strong> by internal
              contradiction — the framework&apos;s own Session 107 forecasts BAO matching &#x039B;CDM at
              0.0% in all five DESI redshift bins (the sound horizon is set at z~1100 when C &#x2248; 1
              everywhere), so no modulation is predicted. The growth sector moved to RSD f&#x03C3;&#x2088;
              (TEST-04a, adjudicated above). See{' '}
              <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>test catalog</Link>.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid #ef4444' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3>H₀ Tension — Not Addressed</h3>
              <ValidationBadge status="speculative" label="No prediction" />
            </div>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              The Hubble tension — a ~5σ discrepancy between early-universe (CMB) and late-universe
              (distance-ladder) measurements of H₀ — is the dominant open problem in cosmology (2018–2026).
              Synchronism makes no statement on H₀. If C(ρ) couples to expansion-rate physics via
              ρ_crit ↔ Λ, there should be a prediction about how coherence modifies recombination
              (early-time fix) or late-time acceleration (late-time fix). Neither has been worked out.
              A framework claiming cosmological scope that does not address H₀ tension is leaving
              the most-cited empirical opening in cosmology off the table.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(239,68,68,0.25)' }}>
              <strong>Correction (2026-07-27): &ldquo;makes no statement on H₀&rdquo; is too strong, and
              this page was the one over-claiming its own silence.</strong> The framework carries
              a₀ = cH₀/(2π) as Claim 3&apos;s key equation. That relation is invertible: with the
              measured a₀ = 1.2 × 10⁻¹⁰ m/s² it returns
              H₀ = 2πa₀/c ≈ <strong>77.6 km/s/Mpc</strong> — above SH0ES by several σ and far above the
              CMB value. So there <em>is</em> an H₀ consequence; it is simply unflattering, and it was
              being booked as no statement at all. What remains true is the substantive point above:
              no <em>mechanism</em> for the tension has been worked out, neither an early-time nor a
              late-time fix. The correct badge is a failing soft constraint, not silence — and it is one
              more reading on which a₀ ≈ cH₀/2π looks like numerology rather than a derivation. Flagged
              by the graduate-physics visitor pass; the same inversion had been noted internally
              2026-07-26 without reaching this page, which is the propagation break rather than the
              physics.
            </p>
          </div>
        </div>
      </section>

      {/* 47 Contributions */}
      <section className="section content-width">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 id="research-outputs" style={{ marginBottom: 0 }}>Research Outputs (Not Discoveries)</h2>
          <ValidationBadge status="reparametrization" label="Top-3 Swept 2026-07-03 — 0/3 Novel" />
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Session #615 (final accounting) inventoried all outputs across ~3,308 sessions:
          47 research contributions at a 1.4% session yield.
          <strong> Novel-surviving yield after domain-expert audit: 0.</strong>{' '}
          Every output that a domain expert examined resolved as a reparametrization of known physics,
          an internal consistency finding, or a null result. The 47 outputs are genuine —
          well-posed questions, characterized failures, methodology results — but none constitutes a
          confirmed novel prediction.
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem' }}>
          <li>14 chemistry contributions (0.52% rate across 2,671 sessions)</li>
          <li>18 SPARC cosmology contributions (8.5% rate across 211 sessions)</li>
          <li>5 ALFALFA-SDSS contributions (71.4% rate across 7 focused sessions)</li>
          <li>5 CDM discrimination contributions (71.4% rate across 7 sessions)</li>
          <li>4 robust statistics contributions</li>
          <li>1 fractal bridge negative result (clean closure, 36/36 tests)</li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Top results: 6-variable MOND offset model (LOO R&sup2;=0.938),
          TFR residual as complete M/L predictor (51.4% improvement on 14,437 galaxies — an
          analysis subset of the 14,585-galaxy ALFALFA-SDSS cross-match),
          &#963;<sub>int</sub>&nbsp;=&nbsp;0.086&nbsp;&plusmn;&nbsp;0.003&nbsp;dex (BTFR intrinsic scatter).
          <strong> Status (updated 2026-07-04): these three were swept against prior art and the archive on 2026-07-03 — 0/3 survive.</strong>{' '}
          The offset model and the TFR-residual predictor are <em>the same fact</em> (the offset model is
          dominated by log-luminosity at t&nbsp;=&nbsp;&minus;36, i.e. it <em>is</em> the Tully-Fisher residual),
          and both reduce to published work: Kannappan et al. 2002 (TF residuals carry M/L information),
          Li et al. 2018 (RAR offsets are the error budget of a constant-M/L assumption), and
          Stiskalek &amp; Desmond 2023 (exhaustive regression null over galaxy features). The
          &#963;<sub>int</sub>&nbsp;=&nbsp;0.086 figure is addressed above &mdash; it inverted the source
          session&apos;s own retracted verdict. Demotion base rate across the whole program: 9 of 9 audited
          claims (the prior 6 &ldquo;Validated&rdquo; claims plus these 3) failed to survive. Given that
          record, the honest prior on any not-yet-swept contribution is <strong>near-certain demotion</strong>,
          not residual upside — and the research archive&apos;s own later sessions (#631–#691) have in fact
          already demoted the remainder in-archive (cosmology: zero novel items; C(&#x03C1;)&nbsp;&rarr;&nbsp;MOND
          + Curie-paramagnet identities verified by computer algebra; chemistry claims reduce to the Debye
          model; the &ldquo;47&rdquo; count itself is a flagged ~57% overcount against a canonical list of ~30).
          The site&apos;s citation-walk of those in-archive demotions is ongoing. Full list in the{' '}
          <Link href="/publication-roadmap" style={{ color: 'var(--color-accent-blue)' }}>publication roadmap</Link>.
        </p>

        <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.5rem', padding: '0.75rem 1rem', margin: '1rem 0', fontSize: '0.9rem' }}>
          <strong style={{ color: '#ef4444' }}>Methodology caveat:</strong>{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>
            The 1.4% rate is an <em>internal-consistency-survival rate</em>, not a discovery rate.
            A2ACW adversarial agents share the same training distribution &mdash; they catch inconsistencies
            the corpus already knows, but cannot find errors systematic across the whole corpus, and cannot
            generate novelty that isn&apos;t already in the training distribution.
            The 47 contributions are exploration outputs and well-posed research questions, not confirmed results.
            Zero confirmed predictions means zero: no contribution in this list has been validated by
            independent experiment.
            See <Link href="/research-philosophy#validation-badge-taxonomy" style={{ color: 'var(--color-accent-blue)' }}>Research Philosophy</Link> for what &ldquo;Validated&rdquo; requires.
          </span>
        </div>

        <h3>What the Program Demonstrates</h3>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem' }}>
          <li><strong>Wrong theories motivate right questions</strong> &mdash; 0 predictions confirmed, yet 47 genuine contributions</li>
          <li><strong>Self-correction accelerates with experience</strong> &mdash; error recognition delay: 373 sessions (early) &rarr; 1 session (late)</li>
          <li><strong>Discovery rate increases with focus</strong> &mdash; chemistry 0.52% &rarr; ALFALFA/CDM 71.4%</li>
          <li><strong>Honest negative results are valuable</strong> &mdash; OQ007 fractal bridge: 36/36 tests, clean definitive closure</li>
          <li><strong>In-distribution self-critique has a ceiling</strong> &mdash; A2ACW filters errors the corpus already knows; 1.4% session yield / 0 novel survivors is the result. Out-of-distribution novelty requires out-of-distribution input (new data, different training set).</li>
        </ul>
      </section>

      {/* Landscape positioning — added 2026-05-24 per P4 researcher request */}
      <section className="section content-width">
        <h2 id="landscape">Where This Sits in the Modified-Gravity Landscape</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Several frameworks occupy the same phenomenological territory as Synchronism in the low-acceleration galaxy regime. All share the observation that a₀ ≈ cH₀/(2π) emerges from cosmological constants.
          <em> Rival lineup last refreshed: 2026-07-23 — this table is date-stamped the same way refutations are, because a &ldquo;0 discriminating tests&rdquo; verdict is only as current as the rivals it is scored against.</em>
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
          {[
            { name: 'MOND (Milgrom 1983)', desc: 'Empirical μ-function. No dynamics, no governing equation. Synchronism\'s compander collapses onto MOND at free-γ (SPARC RAR, ΔBIC=+7 vs ΔBIC=+184 for γ=2).' },
            { name: 'Verlinde Emergent Gravity (2016)', desc: 'Derives MOND-like rotation curves from entropy gradients in the Hubble volume. Tested by Brouwer et al. (2017) KiDS lensing — consistent at ~1σ. Key question: does C(ρ) reduce to Verlinde in the low-acceleration limit? Not yet shown.' },
            { name: 'TeVeS (Bekenstein 2004)', desc: 'Lorentz-covariant scalar-vector-tensor extension of MOND. Has galaxy-rotation and lensing predictions. Failed: requires dark matter for the Bullet Cluster; GW170817 constrains the tensor sector. No longer the benchmark relativistic completion — see AeST below.' },
            { name: 'AeST (Skordis & Złośnik 2021)', desc: 'Aether-scalar-tensor theory — the current benchmark relativistic MOND completion. Reproduces galaxy phenomenology, passes CMB power-spectrum tests where TeVeS failed, and GW speed equals c. Keyed on |∇Φ| — i.e. NON-local in density — which is exactly the escape class the locality no-go on this page identifies: the surviving relativistic MOND theory avoids the local-density trap that kills C(ρ). Caveat: post-2021 stability concerns are under active discussion; cite as "AeST-class," not AeST-final. (Added 2026-07-23 — an expert review correctly flagged that this table was frozen at TeVeS-2006 while the verdict "0 discriminating tests vs MOND+ΛCDM" was being scored against it.)' },
            { name: 'MOG / STVG (Moffat 2006)', desc: 'Running gravitational coupling with massive vector field. Makes post-Newtonian predictions beyond rotation curves. No direct comparison with Synchronism compander exists.' },
          ].map(f => (
            <div key={f.name} className="card" style={{ padding: '0.6rem 0.9rem' }}>
              <strong style={{ color: 'var(--color-accent-blue)' }}>{f.name}</strong>
              <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.5rem' }}>{f.desc}</span>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Current status:</strong> Synchronism&apos;s compander is <em>curve</em>-equivalent to MOND in the galaxy regime (free-γ = 0.49 ≡ MOND at SPARC precision) — not <em>theory</em>-equivalent (see caveat below). Relationship to Verlinde&apos;s entropic gravity is uncharted — whether C(ρ) is a sub-case, extension, or reparametrization of Verlinde in that regime has not been worked out. See <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link> for the SPARC result.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          <strong>There is no field equation anywhere in this framework&apos;s galaxy sector.</strong> The
          rotation curve is built by adding a boost in quadrature to a velocity —
          v(r)&nbsp;=&nbsp;&radic;(v<sub>b</sub>&sup2;&nbsp;+&nbsp;[V<sub>flat</sub>&middot;C(&#x03C1;(r))]&sup2;)
          on the interactive plotter — not by sourcing gravity from a modified Poisson equation or a
          Lagrangian. MOND itself started the same way (Milgrom 1983&apos;s μ-function had &ldquo;no
          dynamics, no governing equation&rdquo; either), but MOND was completed a year later by AQUAL
          (Bekenstein &amp; Milgrom 1984) and again by QUMOND (Milgrom 2010) — both well-posed
          boundary-value problems with conserved momentum, a Lagrangian, and cluster/lensing predictions.
          Synchronism has no analogous completion: no momentum conservation, no lensing prediction, no
          way to source growth suppression in cosmology (see TEST-04a above) except by post-hoc
          calibration. Calling the framework &ldquo;MOND-equivalent&rdquo; therefore flatters it — it is
          equivalent to MOND&apos;s <em>curve</em>, not to MOND&apos;s <em>theory</em>, and unlike Milgrom&apos;s
          1983 starting point it has no field-equation program in progress to complete it. (2026-07-14,
          visitor Pass 3 + Pass 4, independently.)
        </p>
      </section>

      <section className="section content-width">
        <h2 id="cosmological-tensions">Cosmological Tensions We Don&apos;t Address</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
          A framework claiming cosmological scope should say explicitly where it is silent. The following are open problems in cosmology (2024–2026) where Synchronism makes no prediction:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <li><strong>H₀ tension (~5σ):</strong> CMB vs. distance-ladder Hubble constant disagreement. Synchronism makes no statement on H₀. (See <Link href="/honest-assessment#h0-tension" style={{ color: 'var(--color-accent-blue)' }}>What&apos;s Untested</Link> above.)</li>
          <li><strong>JWST early galaxies:</strong> JWST has found massive, evolved galaxies at z &gt; 10 that challenge standard structure formation. Several modified-gravity frameworks address this; Synchronism has no analysis.</li>
          <li><strong>S₈ tension (receding):</strong> KiDS/DES historically measured σ₈ lower than Planck CMB predicts. Synchronism&apos;s σ₈ prediction (0.76) was calibrated to this tension in Session 102. However, DES Y3 6×2pt and KiDS-Legacy (2024–2025) are pulling S₈ back toward Planck, weakening the tension. Synchronism&apos;s calibration anchor is a transient state, not a stable observational target — which makes TEST-04a post-hoc against a moving baseline.</li>
          <li><strong>Evolving dark energy (DESI DR2 w&#x2080;w&#x2090;):</strong> DESI DR2 BAO combined with CMB and supernovae shows a 2.8&ndash;4.2&sigma; preference (depending on SNe compilation) for evolving dark energy (w&#x2080;w&#x2090;CDM) over &Lambda;CDM &mdash; the dominant live anomaly in cosmology right now (2025&ndash;2026). A framework claiming density&rarr;coherence&rarr;growth machinery should register whether it has any coupling to w(z). It does not: C(&rho;) contains no dark-energy sector and no mechanism that modifies the expansion history &mdash; which is itself a mark against cosmological scope. (Added 2026-07-22 after an expert visitor flagged the silence.)</li>
          <li><strong>Primordial non-Gaussianity (fNL):</strong> DESI and future surveys constrain non-Gaussianity from large-scale structure. No coherence-based prediction exists.</li>
        </ul>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Explicit silence is more honest than tacit omission: these are open problems for Synchronism, not just unaddressed topics.
        </p>
      </section>

      <section className="section content-width">
        <h2 id="a2acw-self-audit">Self-Audit on the Self-Audit Protocol (A2ACW)</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
          The adversarial self-audit (A2ACW) produced the 47 contributions and maintained the honest
          assessment. Two retrospective tests of the protocol&apos;s own limits were run in May 2026:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ marginTop: 0 }}>Temporal-Asymmetry Test (2026-05-18)</h3>
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#ef4444' }}>0 / 6 caught</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              6 claims later demoted (Born rule, wide-binary EFE [External Field Effect — MOND], galaxy rotation, decoherence formula, chemistry r=0.98, dual-C).
              A2ACW retrospectively tested: would the adversarial protocol have caught these? Result: <strong>0 of 6</strong>.
              Median prior-art year for the demoted claims: ~1996. Two models sharing the same training corpus
              share the same blind spots.
            </p>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ marginTop: 0 }}>Vocabulary-Asymmetry Test (2026-05-19)</h3>
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#22c55e' }}>4 / 6 caught</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Pre-translating claims into modern vocabulary before adversarial review caught 4 of the 6
              demoted claims. The 6 demotions decompose into three failure-mode classes: (1) prior-art
              rediscovery — 4 claims (Born rule/Zurek 2003, wide-binary EFE/Bekenstein-Milgrom 1984,
              galaxy rotation/MOND 1983, Γ=γ²(1−c)/Palma-Suominen-Ekert 1996); (2) internal-consistency
              tension — 1 (dual-C); (3) null-baseline deficit — 1 (chemistry r=0.98).
              Vocabulary asymmetry catches <strong>4/4 on the prior-art sub-class</strong>; the 2 misses
              are different failure modes, not vocabulary failures.
            </p>
          </div>
        </div>
        <div style={{ background: 'rgba(245, 158, 11, 0.07)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          <strong style={{ color: '#f59e0b' }}>A2ACW v2 implication:</strong>{' '}
          A complete adversarial protocol needs three axes: (1) vocabulary translation (catches prior-art
          rediscovery), (2) symbol audit (catches notation collisions — e.g., γ used as three incompatible
          quantities across the framework), (3) null-baseline computation (catches absence-of-evidence claims
          presented as positive evidence — e.g., r=0.98 on density-monotonic targets). Combined: 6/6 theoretical
          catch rate (self-simulated upper bound). See{' '}
          <Link href="/a2acw" style={{ color: 'var(--color-accent-blue)' }}>A2ACW Protocol &rarr;</Link>
        </div>
      </section>

      <section className="section content-width">
        <h2 id="bottom-line">Bottom Line</h2>
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
