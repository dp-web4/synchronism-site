'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const tiers = [
  {
    tier: 'Tier 1: Existing Data',
    count: 10,
    cost: '$0',
    time: '1–6 months',
    color: '#10b981',
    href: '/tier-1-existing',
    desc: 'Reanalysis of public datasets (Gaia DR3, SPARC, SDSS, DESI). No new hardware needed.',
  },
  {
    tier: 'Tier 2: Pilot Experiments',
    count: 4,
    cost: '$50K–$500K',
    time: '6–24 months',
    color: 'var(--color-accent-blue)',
    href: '/tier-2-pilots',
    desc: 'Small-scale experiments: EEG studies, circadian rhythm monitoring, QC coherence tests. ⚠ Every C-dependent entry is unrunnable as stated — no protocol maps any observable to C (see the protocol-status box above).',
  },
  {
    tier: 'Tier 3: Major Experiments',
    count: 7,
    cost: '$1M–$10M',
    time: '2–5 years',
    color: 'var(--color-accent-violet)',
    href: '/tier-3-major',
    desc: 'Dedicated facilities: gravitational wave correlation, multi-messenger astronomy, controlled decoherence.',
  },
  {
    tier: 'Tier 4: Frontier',
    count: 3,
    cost: '$10M+',
    time: '5+ years',
    color: '#f59e0b',
    href: '/tier-4-frontier',
    desc: 'Pushing technology limits: minimal cell γ mapping, cosmic interference detection, consciousness in AI.',
  },
];

export default function TestCatalog() {
  return (
    <>
      <Breadcrumbs currentPath="/test-catalog" />
      <PathNav currentPath="/test-catalog" />
      <h1>Test Roadmap</h1>
      <ValidationBadge status="untested" label="24 Proposed Experiments" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--color-dark-border)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: 'var(--color-text-secondary)' }}>Validation Badge Guide — MRH-relationship:</strong>{' '}
          <span style={{ color: '#8b5cf6' }}>■ Active-MRH</span> — under active investigation &nbsp;|&nbsp;
          <span style={{ color: '#6366f1' }}>■ Parallel-Paths</span> — competing approaches &nbsp;|&nbsp;
          <span style={{ color: '#94a3b8' }}>■ Sidelined</span> — deprioritised &nbsp;|&nbsp;
          <span style={{ color: '#6b7280' }}>■ Superseded</span> — replaced by better framing &nbsp;|&nbsp;
          <span style={{ color: '#ef4444' }}>■ Audited-Negative</span> — closed as wrong.{' '}
          <strong style={{ color: 'var(--color-text-secondary)' }}>Descriptive:</strong>{' '}
          <span style={{ color: '#f59e0b' }}>■ Reparametrization</span> — known result in new notation &nbsp;|&nbsp;
          <span style={{ color: '#f59e0b' }}>■ Untested</span> — no data yet &nbsp;|&nbsp;
          <span style={{ color: '#94a3b8' }}>■ Speculative</span> — reasoning gap &nbsp;|&nbsp;
          <span style={{ color: '#ef4444' }}>■ Failed</span> — falsified by data.{' '}
          <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-text-muted)' }}>
            Canonical definitions →
          </Link>
        </div>
        <div style={{
          background: 'rgba(239, 68, 68, 0.07)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Pre-registration status:</strong>{' '}
          None of these 24 experiments have been formally pre-registered before the data was available.
          This means results cannot be treated as prospective predictions &mdash; they are retrospective
          consistency checks until a kill criterion is publicly registered <em>before</em> the relevant
          dataset is analyzed.{' '}
          <Link href="/research-philosophy#prediction-audit-trail" style={{ color: '#ef4444' }}>
            See the prediction audit trail →
          </Link>
        </div>
        <div style={{
          background: 'rgba(245, 158, 11, 0.07)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Discrimination status (restated 2026-07-27):</strong>{' '}
          Of these 24 proposed tests, <strong>0 could select Synchronism over MOND+EFE+&Lambda;CDM</strong>.
          That is the accurate claim. The blunter form this box used to carry — &ldquo;0 discriminate&rdquo; —
          was false, and contradicted Tier 1: <strong>2 executed tests did discriminate, and both selected
          MOND</strong> (TEST-09, BTFR slope, separating the models at 3.3σ; TEST-10, dwarf DM fractions).
          A test that separates two models <em>is</em> discriminating regardless of which one wins. The
          remaining Tier-1 tests are self-eliminating (no outcome selects Synchronism), failed by sign, or
          genuinely non-discriminating (the RAR transition shape, where free-γ curves coincide). The roadmap
          represents proposed tests, not tests that are ready to run or are expected to discriminate.{' '}
          <strong>A third executed result (TEST-25, added 2026-07-28) is a different kind of kill</strong> —
          not Synchronism-vs-MOND discrimination, but an internal-consistency squeeze: the SPARC-preferred
          γ interval and the Cassini Solar-System bound have a robust empty intersection under the
          scale-universal tanh-log QUMOND realization (+17.7&ndash;18.0σ discrepancy across the retained
          grid). Scoped narrowly to that realization; see Tier 1 for the full statement.{' '}
          <Link href="/tier-1-existing" style={{ color: '#f59e0b' }}>
            See Tier 1 for per-test verdicts →
          </Link>
        </div>
        <div style={{
          background: 'rgba(239, 68, 68, 0.07)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Protocol status — the &ldquo;unrunnable&rdquo; verdict, propagated
          (2026-07-18):</strong>{' '}
          No protocol maps any laboratory or astronomical observable to the coherence value C, in any domain
          (the site&apos;s own adjudication — see{' '}
          <Link href="/for-researchers" style={{ color: '#ef4444' }}>For Researchers</Link> and{' '}
          <Link href="/key-claims" style={{ color: '#ef4444' }}>Key Claims</Link>). Every Tier 2 and Tier 4
          experiment whose outcome depends on measuring C — the EEG, circadian, and QC-coherence pilots
          included — is therefore <strong>unrunnable as stated</strong>: funding one at the listed $50K&ndash;$500K
          would buy a measurement of a variable the framework has already ruled uninterpretable as C. These
          entries stay listed as what they are — proposals pending a calibration protocol that does not exist —
          not as fundable tests. An external review flagged this page as presenting them as fundable; this box
          is the correction.
        </div>
        <p>
          Synchronism has defined 24 specific, falsifiable experiments (TEST-01 through TEST-24; TEST-25 and TEST-26
          below were added after the registry closed and are listed but not in this count) organized into four tiers
          by cost and feasibility. Every experiment has an explicit kill criterion &mdash; a result
          that would falsify the prediction. This page covers <em>proposed</em> tests; for results
          on what has actually been analyzed, see below.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Tests use <strong>one flat namespace</strong>: TEST-01 &hellip; TEST-24 across the four tiers
          (Tier 1 = 01&ndash;10, Tier 2 = 11&ndash;14, Tier 3+ = 15&ndash;24), plus <strong>TEST-25</strong>,
          the Cassini/SPARC squeeze added out-of-band 2026-07-28, and <strong>TEST-26</strong>, the DESI DR3
          dark-energy class no-go (proposed 2026-08-10, prospective, kill-or-tie; catalog-registered 2026-08-12
          after a visitor pass found it existing on one page and absent here). Suffixes: <code>a</code> = amended sub-test
          registered after the parent was withdrawn (TEST-04a); <code>s</code> = substituted protocol, run on a
          different sample than the one registered (TEST-03s). Both suffixes mark a test that is{' '}
          <em>not</em> the registered one and must not be read as the parent&apos;s result.{' '}
          <em style={{ color: 'var(--color-text-muted)' }}>(Namespace and suffix grammar stated here
          2026-08-10, after a visitor Pass 3 found TEST-11 denoting two unrelated experiments and Pass 2 found
          the suffix convention undocumented. The Cassini squeeze was renumbered 11 &rarr; 25 to clear the
          collision.)</em> Tier 1 cards live on the{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 page</Link>{' '}
          (each test card has an anchor: e.g., <code style={{ fontSize: '0.8rem' }}>/tier-1-existing#TEST-04a</code>).
          Cross-references elsewhere on the site to TEST-NN resolve directly to those cards.
        </p>

        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{ fontSize: '1rem', margin: '0 0 0.75rem', color: '#10b981' }}>
            What&apos;s Already Been Analyzed
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            The &ldquo;0 Completed&rdquo; count below refers to the 24 proposed experiments above — none have been
            run as formal pre-registered tests. Separately, the framework has been checked against existing
            datasets with these results:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem', paddingLeft: '1.25rem' }}>
            <li><strong>RAR transition shape</strong> (2807 SPARC points, 2026-05-21): γ=2 compander refuted at ΔBIC=+184; free-γ=0.49=MOND — <span style={{ color: '#ef4444' }}>FAILED (γ=2); collapses to MOND at fitted γ (curve-equivalence only — the field equation is postulated in the archive, not derived, and the version stated there is eliminated a priori — corrected 2026-08-09 from &ldquo;no action, no Lagrangian, no dynamics&rdquo;). Net discriminating galaxy tests vs MOND: 0.</span></li>
            <li><strong>Galaxy rotation</strong> (14,610 galaxies run: 175 SPARC + 14,435 ALFALFA-SDSS after the quality cut; 14,760 before it &mdash; the site quotes the sample actually run): qualitative curve match — <span style={{ color: '#f59e0b' }}>MOND reparametrization</span>, not novel</li>
            <li><strong>TEST-03 TFR scatter</strong>: <span style={{ color: '#f59e0b' }}>NEVER RUN AS REGISTERED</span> — the R&sup2; = 0.14 figure previously reported here was a metric conflation (morphology statistic on N &asymp; 171, not the registered test on N = 14,585; corrected 2026-07-09). The environment claim was later executed 2026-07-14 (research repo): r&sup2; = 0.0001, ~900&times; under the framework&apos;s &gt;20% claim — <span style={{ color: '#ef4444' }}>environment prediction REFUTED by execution</span>. <strong>But not as registered</strong> (declared 2026-07-27): that run used N = 141 SPARC galaxies vs Cosmicflows-4 ambient density, not the registered N = 14,585 ALFALFA-SDSS cluster/field/void classification — different dataset, different proxy, ~100&times; smaller sample. It is designated <strong>TEST-03s</strong> and the registered TEST-03 remains unrun and runnable. Read the census as <strong>3 registered kills + 1 substituted-protocol kill</strong>, not 4 identical ones</li>
            <li><strong>DESI fσ₈ (TEST-04a)</strong>: <span style={{ color: '#f59e0b' }}>UNDERPOWERED AS REGISTERED</span> <span style={{ color: 'var(--color-text-muted)' }}>(corrected 2026-07-14: the registered fσ₈(z=0.51) &gt; 0.46 criterion was met at only ~1.5σ, short of the demanded &gt;3σ; the widely-quoted 2.4σ disfavor is on σ₈, a GR-conditioned statistic that cannot falsify modified growth; DESI&apos;s own MG analysis gives μ₀ within 1σ of zero. Not counted in the refutation census. DR2 both-outcome pre-commitment registered 2026-07-17 — the program&apos;s first prospective registration)</span></li>
            <li><strong>Chemistry boundary consistency</strong> (1,703 phenomena): 89% consistent — <span style={{ color: '#f59e0b' }}>calibration set, not blind test</span></li>
            <li><strong>Superconductivity (η factor)</strong>: reproduces Abrikosov-Gor&apos;kov formula — <span style={{ color: '#f59e0b' }}>reparametrization</span></li>
            <li><strong>Born rule</strong>: reproduces |α|² via coherence conservation — <span style={{ color: '#f59e0b' }}>reparametrization</span> (no deviation predicted)</li>
          </ul>
          <Link href="/honest-assessment" style={{ color: '#10b981', fontSize: '0.85rem' }}>
            Full ledger: wins, failures, and reparametrizations &rarr;
          </Link>
        </div>

        <div style={{
          background: 'rgba(139,92,246,0.07)',
          border: '1px solid rgba(139,92,246,0.3)',
          borderRadius: '0.375rem',
          padding: '0.7rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>TEST-26 (proposed, prospective, kill-or-tie)
          &mdash; DESI DR3 dark-energy class no-go.</strong>{' '}
          The framework&apos;s dark-energy sector cannot produce the w&nbsp;=&nbsp;&minus;1 crossing DESI DR2
          prefers, at model-class level (every covariant completion misses the quadrant &mdash; hardened
          2026-08-11). Kill fires if DR3 robustly requires that crossing; the confirming branch is a tie with
          &Lambda;CDM, so this test cannot select the framework and is listed outside the 24-test discrimination
          count. Adoption gates on the operator. Full statement:{' '}
          <Link href="/top-5-tests" style={{ color: 'var(--color-accent-violet)' }}>Top Decisive Tests</Link>{' '}
          &middot; derivation:{' '}
          <Link href="/dark-energy" style={{ color: 'var(--color-accent-violet)' }}>Dark Energy &amp; DESI</Link>.
        </div>

        <h2>Overview by Tier</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {tiers.map(t => (
            <Link key={t.tier} href={t.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3>{t.tier}</h3>
                  <span style={{ color: t.color, fontFamily: 'monospace', fontSize: '0.85rem' }}>
                    {t.count} tests
                  </span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {t.desc}
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                  Cost: {t.cost} &nbsp;&bull;&nbsp; Timeline: {t.time}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <h2>Recommendation</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Update (2026-07-08): the zero-cost Tier 1 recommendations have all been run or
            closed.</strong> (Scoped to this box&apos;s three recommendations — it does not mean no further
            $0 analysis exists; see the a&#x2080;(z) epoch fork on{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>,
            added 2026-07-29, which remains unregistered and may be unrunnable rather than closed.)
            An earlier version of this box recommended starting with three
            existing-data tests; all three have since been adjudicated. BAO coherence modulation:{' '}
            <em>Withdrawn 2026-05-04</em> (internal contradiction, never adjudicated). SPARC
            environment analysis (TEST-03): <em>Never run as registered</em> (the old &ldquo;R&sup2; = 0.14
            kill&rdquo; was a metric conflation, corrected 2026-07-09); the registered environment claim was
            executed 2026-07-14 with r&sup2; = 0.0001 — refuted. Wide binaries (TEST-02): <em>Self-Eliminating-or-Tie</em> —
            the predicted 0.05–0.4% signal sits ~80&times; below Gaia DR3 systematics, and either
            outcome of the ongoing Chae-vs-Banik dispute is covered by Newton or MOND respectively,
            so no result selects this framework. See{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
            and <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1: Existing Data</Link>.
          </p>
        </div>

        <h2>Status</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '0.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#f59e0b' }}>24</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Proposed</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#ef4444' }}>0</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Pre-registered &amp; Completed</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#10b981' }}>10</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Zero Cost</p>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
          The &ldquo;Pre-registered &amp; Completed: 0&rdquo; counts only tests whose kill criterion was registered
          <em> before</em> the relevant dataset was analyzed. This is distinct from the retrospective analyses
          in the &ldquo;What&apos;s Already Been Analyzed&rdquo; box above (galaxy rotation, chemistry, TEST-03/04a).
          Those analyses produced results, but they were not pre-registered prospective predictions.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tier-1-existing" className="btn-primary">
            Tier 1: Existing Data &rarr;
          </Link>
          <Link href="/top-5-tests" className="btn-secondary">
            Decisive Tests: Status
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/test-catalog" />
    </>
  );
}
