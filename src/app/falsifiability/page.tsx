'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

/**
 * Rewritten 2026-07-27 from the current test ledger.
 *
 * The previous version of this page was a fossil: it advertised TEST-03's retracted "51% TFR
 * scatter improvement" and TEST-02's closed wide-binary signal as "genuinely novel predictions,"
 * quoted withdrawn TEST-04's BAO criterion as exemplary practice, and listed four kill criteria
 * that cannot fire on any existing or scheduled instrument — on the page whose entire job is to
 * argue the framework is falsifiable. An external reviewer pass (2026-07-27) flagged it as the
 * worst-placed stale page on the site, since it is the first page a referee opens.
 *
 * Rule adopted here: a kill criterion is listed with its REACHABILITY, not just its statement.
 */

type Reachability = 'fired' | 'reachable' | 'unreachable' | 'unrunnable' | 'withdrawn';

const reachStyle: Record<Reachability, { color: string; label: string }> = {
  fired: { color: '#ef4444', label: 'FIRED — criterion met, prediction lost' },
  reachable: { color: '#22c55e', label: 'REACHABLE — can fire on existing or scheduled data' },
  unreachable: { color: '#f59e0b', label: 'STRUCTURALLY UNREACHABLE — no instrument reaches it' },
  unrunnable: { color: '#f59e0b', label: 'UNRUNNABLE — no protocol maps a measurement onto C' },
  withdrawn: { color: 'var(--color-text-muted)', label: 'WITHDRAWN — test retired before adjudication' },
};

const examples: {
  id: string;
  prediction: string;
  kill: string;
  tier: string;
  reach: Reachability;
  note: string;
}[] = [
  {
    id: 'TEST-09',
    prediction: 'BTFR slope follows from the bounded boost B ≤ 1/Ω_m = 3.17 ⇒ n = 3.35 ± 0.07',
    kill: 'Observed slope deviates from the prediction by more than 0.3',
    tier: 'Tier 1',
    reach: 'fired',
    note:
      'Executed 2026-07-14 on real SPARC. Observed n = 3.75 ± 0.10; deviation 0.41 > 0.3, so the kill fired at 3.3σ. MOND passes the same differential at 0.6σ. Definition-robustness was then executed under a pre-fixed verdict rule (2026-07-18): all 11 adjudicated runs exceed threshold. This is what a criterion that can fire looks like — and it did.',
  },
  {
    id: 'TEST-10',
    prediction: 'Apparent dark-matter fraction is capped at f_DM = 1 − Ω_m = 68.5% for every galaxy',
    kill: 'Galaxies exist above the cap',
    tier: 'Tier 1',
    reach: 'fired',
    note:
      'Executed 2026-07-15. 106/153 = 69% of SPARC galaxies exceed the ceiling; the maximum observed f_DM = 0.927 would require a boost B ≥ 13.7. The ceiling is algebraic, so no parameter choice rescues it. Caveat now under review: the ceiling constant 1/Ω_m = 3.17 is itself underived — see the open item below.',
  },
  {
    id: 'TEST-02',
    prediction: 'Wide-binary gravitational anomaly depends on local stellar density',
    kill: 'Anomaly independent of local density',
    tier: 'Tier 1',
    reach: 'unreachable',
    note:
      'Closed as self-eliminating. The framework\'s own predicted signal is 0.05–0.4%, roughly 80× below Gaia DR3 systematic reach, so neither outcome of the ongoing Chae-vs-Banik dispute can select it: a detection is covered by MOND, a null by Newton. Gaia DR4 (~Dec 2026) improves the baseline but not by two orders of magnitude.',
  },
  {
    id: 'TEST-04',
    prediction: 'BAO peak shifts between high- and low-density regions',
    kill: 'BAO identical everywhere to 10⁻⁵ precision',
    tier: 'Tier 1',
    reach: 'withdrawn',
    note:
      'Withdrawn 2026-05-04 after three convergent derivation failures; never adjudicated. It is listed here only because earlier versions of this page displayed it as an example of good practice. It is not one: establishing a null to 10⁻⁵ everywhere is not a criterion any survey can meet.',
  },
  {
    id: 'TEST-15',
    prediction: 'Gravitational-wave arrival time correlates with dark-matter column density',
    kill: 'No correlation at the 10⁻¹⁶ level',
    tier: 'Tier 3',
    reach: 'unreachable',
    note:
      'The criterion sits an order of magnitude BELOW the best bound ever achieved: GW170817 constrains |Δv/v| ≲ 10⁻¹⁵. A criterion demanding a null at 10⁻¹⁶ can never fire, which makes it the exact failure mode this page exists to disclaim. Separately closed non-discriminating: the coupling α was read off GW170817 itself, and the natural α is dead by 15 orders of magnitude.',
  },
  {
    id: '—',
    prediction: 'Galaxy cluster separations show oscillatory modulation',
    kill: 'No oscillations above 3σ out to 2000 Mpc',
    tier: 'Tier 1',
    reach: 'unreachable',
    note:
      'Requires establishing a null over a volume and at a precision no survey delivers. Retained as an honest example of a criterion the framework wrote and cannot cash.',
  },
  {
    id: '—',
    prediction: 'Anesthesia shows a sharp transition at C ≈ 0.50; EEG coherence discontinuity at propofol induction',
    kill: 'Gradual loss of consciousness with no discontinuity',
    tier: 'Tier 2',
    reach: 'unrunnable',
    note:
      'Not merely untested — unrunnable as stated. No calibration protocol maps any EEG or behavioural measurement onto C, so no observation can be compared to the 0.50 threshold. A previously-displayed "0.64 rejected at p < 0.0001" was found to have no source in any repository and was removed 2026-07-07. The nearest external candidate for a calibration axis is the Perturbational Complexity Index (Casali et al. 2013, threshold PCI* ≈ 0.31) — which, if adopted, would also retire the claim that no other framework predicts a numerical threshold.',
  },
];

export default function Falsifiability() {
  return (
    <>
      <Breadcrumbs currentPath="/falsifiability" />
      <PathNav currentPath="/falsifiability" />
      <h1>Falsifiability</h1>
      <ValidationBadge status="audited-negative" label="Audited — Kill Criteria Reachability" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          Every prediction has a kill criterion. If you can&apos;t state what would
          falsify your claim, it&apos;s not science.
        </blockquote>
        <p>
          That is the principle. This page used to stop there. It now reports how the principle
          actually performed, because <strong>stating a kill criterion is cheap and stating a
          criterion that can <em>fire</em> is not</strong> — and the framework has written plenty
          of both.
        </p>

        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #f59e0b', background: 'rgba(245, 158, 11, 0.05)' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong>This page was rewritten 2026-07-27</strong> after an external-reviewer pass found
            it was the most out-of-date page on the site. It had been advertising two <em>retracted</em>{' '}
            results as &ldquo;genuinely novel predictions,&rdquo; displaying a <em>withdrawn</em> test&apos;s
            criterion as exemplary practice, and listing kill criteria that no instrument can satisfy —
            on the page arguing that the framework is falsifiable. That is a worse failure than any single
            wrong number, because it is the first page a referee opens. What follows is generated from the
            current ledger; where it disagrees with an older page, this page is the newer one.
          </p>
        </div>

        <h2>Kill Criteria, With Reachability</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          A criterion is only falsificationist if some achievable measurement could meet it. Each
          entry below therefore carries a reachability tag alongside its statement.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {examples.map(e => (
            <div key={e.prediction} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <p style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem', flex: 1, marginRight: '1rem' }}>
                  <strong>Prediction:</strong> {e.prediction}
                </p>
                <span style={{ color: 'var(--color-accent-violet)', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {e.id !== '—' ? `${e.id} · ` : ''}{e.tier}
                </span>
              </div>
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <strong>Kill:</strong> {e.kill}
              </p>
              <p style={{ color: reachStyle[e.reach].color, fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                {reachStyle[e.reach].label}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>
                {e.note}
              </p>
            </div>
          ))}
        </div>

        <h2>The Scoreboard This Page Owes You</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <ul style={{ color: 'var(--color-text-secondary)', margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8 }}>
            <li><strong>2 criteria fired</strong> (TEST-09, TEST-10) — both against the framework.</li>
            <li>
              <strong>2 executed tests discriminated</strong> between Synchronism and MOND+EFE+ΛCDM,
              and both selected MOND. <strong>0 executed tests could select Synchronism.</strong>{' '}
              Those are different statements and the site conflated them until 2026-07-27.
            </li>
            <li>
              <strong>4 criteria cannot fire</strong> on any existing or scheduled instrument
              (wide binaries at 80× below Gaia reach; GW timing at 10⁻¹⁶ against a 10⁻¹⁵ best bound;
              BAO nulls at 10⁻⁵; cluster oscillation nulls to 2000 Mpc), and one more is
              unrunnable because no protocol maps a measurement onto C.
            </li>
            <li>
              <strong>0 of 24 tests have been completed prospectively</strong> — i.e. with the kill
              criterion registered before the relevant data were analyzed. One prospective registration
              now exists and is pending: the TEST-04a DESI DR2 both-outcome pre-commitment, filed
              2026-07-17, adjudicable when DR2 growth results publish (~Spring 2027).
            </li>
          </ul>
        </div>

        <h2>The Pre-Registration Policy</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This page previously stated no policy, which is the wrong page to omit it from. The policy,
          as currently practised:
        </p>
        <ol style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
          <li>
            A kill criterion registered <em>after</em> the relevant measurement is post-hoc and is
            labeled as such, however natural it looks. TEST-03&apos;s threshold was registered 15 days
            after the measurement it adjudicated; TEST-04a was registered on one statistic and
            adjudicated on another. Both are marked.
          </li>
          <li>
            A criterion that is <em>structural</em> — algebraically forced by the framework&apos;s own
            constants, with no adjustable freedom — needs no registration date, because no choice made
            before or after the data could move it. TEST-10&apos;s 68.5% ceiling is the example.
            (Its underlying constant being underived is a separate problem; see below.)
          </li>
          <li>
            A claimed <em>tie</em> carries the same execution burden as a claimed kill: both predictions
            computed, agreement shown within the data&apos;s discriminating power. Adopted 2026-07-15
            after the &ldquo;MOND-shared&rdquo; badge class was audited and retired — all three tests
            carrying it dissolved on execution.
          </li>
          <li>
            Substituting the dataset and keeping the verdict is a protocol deviation and must be
            declared. See the TEST-03 entry on{' '}
            <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>.
          </li>
        </ol>

        <h2>Open Item: A Criterion Resting On An Underived Constant</h2>
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #f59e0b' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Both fired criteria descend from the same constant: the bounded boost
            B<sub>max</sub> = 1/Ω<sub>m</sub> ≈ 3.17, described on{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
            as the framework&apos;s only structural difference from MOND. <strong>That constant is
            asserted, not derived</strong> — and a boost is a ratio of dynamical to baryonic mass, whose
            cosmic value is Ω<sub>m</sub>/Ω<sub>b</sub> = 6.40, not 1/Ω<sub>m</sub> = 3.17. Under the
            larger ceiling, TEST-10&apos;s median-based statistic passes.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <strong>The kill still stands</strong>, because the maximum observed f<sub>DM</sub> = 0.927
            requires B ≥ 13.7 and exceeds every candidate ceiling — but the robust statistic is the
            maximum, not the &ldquo;69% exceed&rdquo; median figure the site currently headlines. A
            ceiling-definition sweep, structurally analogous to the velocity-definition sweep already
            executed for TEST-09, has been proposed and not yet run. Recording this here rather than
            after a reviewer finds it is what this page is for.
          </p>
        </div>

        <h2>What&apos;s NOT Falsifiable (and We Say So)</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Free will interpretation</strong> &mdash; philosophical framework, no testable prediction distinct from standard neuroscience</li>
          <li><strong>Identity as coherence pattern</strong> &mdash; unfalsifiable with current technology</li>
          <li><strong>AI consciousness</strong> &mdash; requires consciousness measurement we don&apos;t have</li>
          <li><strong>Qualia = coherence patterns</strong> &mdash; needs single-neuron resolution we&apos;re decades from</li>
        </ul>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          All of these carry the &ldquo;speculative&rdquo; badge. They&apos;re interesting frameworks,
          not scientific claims.
        </p>

        <h2>The Reparametrization Test</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            A meta-falsifiability test was introduced early on: <strong>is this prediction genuinely
            novel, or is it known physics in new notation?</strong> All four research tracks came back
            reparametrizations.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            <strong>The two &ldquo;survivors&rdquo; this page used to name did not survive
            (corrected 2026-07-27).</strong> The &ldquo;51% TFR scatter improvement&rdquo; was retracted
            as a metric conflation — a morphology statistic on N ≈ 171 reported as the registered
            environment test on N = 14,585 (corrected 2026-07-09). The
            &ldquo;density-dependent wide binary signal&rdquo; is the ~80×-below-reach signal closed as
            self-eliminating above. The third survivor claimed here — &ldquo;the same γ across 80 orders
            of magnitude&rdquo; — was retired 2026-07-10 when the Hill identity showed
            tanh(γ·ln(1+x)) is exactly a Hill function of index n = 2γ: spanning many decades is a
            property of <em>every</em> Hill function with small index, and is not evidence of anything.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            Net survivors of the reparametrization test: <strong>0</strong>. That is not a comfortable
            sentence to put on the falsifiability page, which is precisely why it belongs here rather
            than three clicks away.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/test-catalog" className="btn-primary">
            Full Test Roadmap &rarr;
          </Link>
          <Link href="/tier-1-existing" className="btn-secondary">
            Tier 1 Per-Test Verdicts
          </Link>
          <Link href="/research-philosophy" className="btn-secondary">
            Research Philosophy
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/falsifiability" />
    </>
  );
}
