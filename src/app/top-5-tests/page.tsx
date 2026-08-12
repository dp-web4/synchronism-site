'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const activeTests: {
  rank: number;
  name: string;
  id: string;
  tier: string;
  cost: string;
  why: string;
  kill: string;
  color: string;
  note: string | null;
}[] = [];

const pendingTests = [
  {
    rank: 3,
    name: 'Gravitational Wave Speed–Dark Matter Column Correlation',
    id: 'TEST-15',
    tier: 'Tier 3',
    cost: '$1M–$5M',
    why: 'GW170817 already constrains Synchronism to GR-equivalent at |α| < 3.0 × 10⁻¹⁵ (Baker et al. 2017). Synchronism is consistent with GR\'s exact-zero prediction — meaning this constraint was passed vacuously. This test discriminates only if Synchronism predicts a positive signal above zero, which it does not currently. Listed to track if a positive-signal prediction is added.',
    kill: 'No correlation at 10⁻¹⁶ level after 20+ events',
    color: 'var(--color-accent-violet)',
  },
  {
    rank: 4,
    name: 'Cosmic Interference Patterns',
    id: 'TEST-07',
    tier: 'Tier 1*',
    cost: '$0',
    why: 'Candidate only — derivation pending. The ~500 Mpc scale has not been derived from the framework\'s parameters. The /cosmic-interference page explicitly states "this is not a prediction in the scientific sense." Listed here to track progress; if the scale is derived from first principles, it would be unique to Synchronism. Until then, not yet a decisive test.',
    kill: 'No oscillations above 3σ out to 2000 Mpc',
    color: '#f59e0b',
  },
];

const proposedTests = [
  {
    id: 'TEST-26 (proposed)',
    name: 'DESI DR3 Dark-Energy Class No-Go (kill-or-tie)',
    status: 'DRAFTED 2026-08-10 — HARDENED TO MODEL CLASS 2026-08-11 — ADOPTION GATES ON OPERATOR',
    verdict: 'The framework\'s cosmic sector (Session 100: G_eff = G/C in the Friedmann equation, C₀ = Ω_m forced, γ the only parameter) cannot produce the w = −1 crossing DESI DR2 prefers (w₀ > −1 with wₐ < 0, all four data combinations) — and as of 2026-08-11 that statement holds for the model CLASS, not just the model as specified. The originally drafted criterion targeted the substituted model\'s literal sign lock, sign(w₀ + 1) = sign(wₐ); the covariant completions were then derived and the literal lock DIED (the Brans-Dicke completion populates mixed-sign pairs, and the Appendix-D equation as written has no dark-energy sector at all) while the no-go HARDENED: every consistent completion misses the DESI quadrant — 0/192 γ values at four Brans-Dicke ω; forced wₐ comes out +0.23…+0.60, wrong sign every time. The class statement to register: dark energy slaved to matter density reaches the DESI quadrant iff ρ_DE(x) has an interior maximum, and no completion of C = tanh(γ·ln(1+x)) produces one. Kill fires if DR3 (full published covariance, Ω_m and r_d·H₀ marginalised, one SNe compilation fixed in advance) robustly requires the crossing the class cannot produce — with a pre-committed projection-robustness check, since the CPL (w₀, wₐ) crossing preference is itself debated as a parameterization artifact (Shlivko & Steinhardt 2024; Cortês & Liddle 2024 — a debate that cuts in the framework\'s favor and is cited both ways). NOT discriminating in the confirming direction — though the tie is now conditional: the γ = 1/2 = ΛCDM identity is a property of the substitution (completion B has no ΛCDM member), so "kill-or-tie" is substitution-conditional. Timeline: DESI DR3 ~2027–2028. Full derivation and honest bounds: /dark-energy and /honest-assessment#dark-energy.',
  },
];

const closedTests = [
  {
    id: 'TEST-02',
    name: 'Wide Binary Density Dependence',
    status: 'CLOSED — SELF-ELIMINATING-OR-TIE (demoted off this page 2026-08-10)',
    verdict: 'This page advertised TEST-02 as the #1 active discriminating test — "requires zero-cost Gaia DR3 analysis" — for weeks after /tier-1-existing had closed it. It has no outcome that favours the framework. If Gaia confirms a MOND-scale ~18% anomaly (Chae 2023–2025), C(ρ) is refuted, because C(ρ) predicts a Newtonian null of 0.05–0.4%. If Gaia confirms the null (Banik et al. 2024; Pittordis & Sutherland 2023), the framework merely reproduces Newton and is not selected over it. Both branches lose or tie. Worse, the confirmation branch is not reachable: the predicted 0.05–0.4% deviation sits ~80× below the Gaia DR3 wide-binary systematics floor, so the distinguishing measurement cannot be made at all with current data. Separately, Desmond, Hees & Famaey (2024) — the same paper TEST-25 inherits — pre-empts this test. Demoted here 2026-08-10 after a visitor Pass 3 found this page still selling it; the closure was on the Tier-1 ledger since 2026-06-07 and never propagated to the page a researcher opens to find live tests.',
  },
  {
    id: 'TEST-11',
    name: 'EEG Anesthesia Phase Transition',
    status: 'NOT RANKABLE — OBSERVABLES OPERATIONALLY UNDEFINED (demoted 2026-08-10)',
    verdict: 'Ranked #2 among decisive tests at $150K while this same page conceded that D and S — the two parameters in the consciousness equation the experiment would measure — are "not yet operationally defined." A test whose observables have no definition cannot be ranked among the most discriminating; there is no calibration procedure mapping any EEG quantity onto the C axis, so no outcome could be scored against a prediction. The gap is upstream of the experiment and no amount of funding closes it. It stays in the catalog as Tier 2 (TEST-11 — the ID retained; the Cassini squeeze that had been colliding with it was renumbered TEST-25 on 2026-08-10) and returns to a ranking only if D and S acquire measurement protocols. Demoted after a visitor Pass 3 flagged the contradiction between the ranking and the page\'s own caveat.',
  },
  {
    id: 'TEST-04a',
    name: 'DESI RSD fσ₈ Suppression',
    status: 'DISFAVORED 2.4σ on σ₈ — ~1.5σ on Registered fσ₈ (corrected 2026-07-14)',
    verdict: 'Session 107 predicted fσ₈(z=0.51) ≈ 0.418 (suppression), kill criterion fσ₈ > 0.46 for >3σ. DESI DR1 full-shape (arXiv:2411.12021): LRG1 fσ₈/(fσ₈)_fid = 1.16 ± 0.13 → fσ₈ = 0.550 ± 0.062 — exceeds 0.46 by only ~1.5σ, short of the registered >3σ. Combined σ₈ = 0.841 ± 0.034 gives a 2.4σ tension, but σ₈ is a different, GR-conditioned statistic — using it to falsify a modified-growth model risks circularity. DESI\'s own modified-gravity analysis (Ishak et al. arXiv:2411.12026) gives a weaker verdict (μ₀ within 1σ of zero). Honest verdict: post-hoc either way; the test as registered lacked the power to discriminate this framework from GR. See /tier-1-existing and /honest-assessment for the full correction.',
  },
  {
    id: 'TEST-04',
    name: 'BAO Coherence Modulation',
    status: 'WITHDRAWN — Internal Contradiction',
    verdict: 'Framework\'s own Session 107 forecasts BAO matches ΛCDM at 0.0% — the sound horizon is set at z~1100 when C ≈ 1 everywhere. The 10⁻⁴ modulation number had no session-level derivation.',
  },
];

export default function Top5Tests() {
  return (
    <>
      <Breadcrumbs currentPath="/top-5-tests" />
      <PathNav currentPath="/top-5-tests" />
      <h1>Top Decisive Tests</h1>
      <ValidationBadge status="untested" label="Most Discriminating — Updated 2026-05-13" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Of the defined experiments, these were ranked by <strong>distinguishing power</strong> &mdash;
          capacity to discriminate between Synchronism and existing frameworks.
        </p>
        <div style={{
          background: 'rgba(239,68,68,0.08)',
          border: '1px solid rgba(239,68,68,0.35)',
          borderRadius: '0.375rem',
          padding: '0.8rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.87rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>This page is now empty at the top, and that is the
          result (2026-08-10).</strong>{' '}
          <strong>There are zero active discriminating tests.</strong> The two that stood here until today
          were demoted, both for reasons that had been documented elsewhere on this site and had never
          reached this page: TEST-02 is <em>self-eliminating-or-tie</em> — no Gaia outcome selects the
          framework, and the confirmation branch sits ~80× below the systematics floor — and the EEG test
          ranks an experiment whose two observables have no operational definition. Neither was refuted
          today; both were closed weeks ago on{' '}
          <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>{' '}
          while this page — the one a researcher opens to find what could still work — kept advertising
          them. That propagation lag is the defect a visitor Pass 3 caught, not the emptiness.{' '}
          <strong>One candidate has appeared since (2026-08-11):</strong> a proposed kill-or-tie
          pre-registration against DESI DR3 (TEST-26, below) &mdash; falsifiable and currently disfavoured,
          but structurally unable to <em>select</em> the framework over &Lambda;CDM, so it does not
          repopulate this list either.{' '}
          <strong>The emptiness is corroborated independently:</strong>{' '}
          <Link href="/test-catalog" style={{ color: 'var(--color-accent-blue)' }}>the 24-test catalog</Link>{' '}
          finds <strong>0 of 24 designed experiments could select Synchronism over MOND+EFE+ΛCDM</strong> —
          a structural result about the theory that required no data at all. Two closed predictions remain
          below: one disfavored 2.4σ on σ₈ while its registered fσ₈ criterion fell short of its own &gt;3σ
          bar (post-hoc either way; corrected 2026-07-14), one withdrawn on internal contradiction.
        </div>

        <div style={{
          background: 'rgba(245,158,11,0.07)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Referee note:</strong>{' '}
          For a test to decisively discriminate, it needs both (a) a derived quantitative prediction
          from the framework&apos;s parameters and (b) a prediction that differs numerically from MOND+EFE.
          Of every test ever listed on this page, <strong>none has satisfied both conditions</strong>:
          TEST-02 never had a computed ξ(ρ) functional form, so MOND+EFE degeneracy was never resolved
          (now closed as self-eliminating);
          TEST-11 (consciousness) has undefined D and S parameters (now demoted as not rankable);
          TEST-07 has no derived amplitude;
          TEST-15 is monitoring-only.
          Applied consistently, this criterion empties the page &mdash; which is the honest reading, and is
          why the ranked list above is now empty rather than reordered. These were aspirations with the
          highest discrimination potential, never confirmed discriminators.
        </div>

        <div style={{
          background: 'rgba(239,68,68,0.07)',
          border: '1px solid rgba(239,68,68,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#ef4444' }}>Scorecard (updated 2026-08-10; previously stamped 2026-05-13
          and stale by three months):</strong>{' '}
          Confirmed: <strong>0</strong> &nbsp;|&nbsp;
          <strong style={{ color: '#ef4444' }}>Active discriminating: 0</strong> &nbsp;|&nbsp;
          Disfavored 2.4σ (σ₈ amplitude): <strong>1</strong> (TEST-04a post-hoc, registered endpoint underpowered; reframed 2026-07-02) &nbsp;|&nbsp;
          Withdrawn: <strong>1</strong> (TEST-04 internal contradiction) &nbsp;|&nbsp;
          Closed self-eliminating: <strong>1</strong> (TEST-02) &nbsp;|&nbsp;
          Not rankable, observables undefined: <strong>1</strong> (TEST-11 consciousness) &nbsp;|&nbsp;
          Monitoring: <strong>1</strong> (TEST-07 no derivation) &nbsp;|&nbsp;
          Proposed prospective, kill-or-tie: <strong>1</strong> (TEST-26 DESI DR3 sign-lock — adoption gates on operator)
        </div>

        <h3 style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
          Active discriminating tests
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {activeTests.map(t => (
            <div key={t.id} className="card">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '2rem',
                  fontFamily: 'monospace',
                  color: 'var(--color-accent-violet)',
                  lineHeight: 1,
                  minWidth: '2rem',
                  textAlign: 'center',
                }}>
                  {t.rank}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem' }}>{t.name}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: t.color, fontFamily: 'monospace', fontSize: '0.8rem' }}>{t.tier}</span>
                      <span style={{ color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: '0.8rem' }}>{t.cost}</span>
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {t.why}
                  </p>
                  <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                    <strong>Kill:</strong> {t.kill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Tracked — derivation or signal pending
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          On the radar but not yet decisive: either no amplitude has been derived from the framework&apos;s parameters, or the test has already been superseded.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {pendingTests.map(t => (
            <div key={t.id} className="card" style={{ opacity: 0.75, borderLeft: '3px solid #f59e0b' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '2rem',
                  fontFamily: 'monospace',
                  color: '#f59e0b',
                  lineHeight: 1,
                  minWidth: '2rem',
                  textAlign: 'center',
                }}>
                  {t.rank}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem' }}>{t.name}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: '#f59e0b', fontFamily: 'monospace', fontSize: '0.8rem' }}>Candidate</span>
                      <span style={{ color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: '0.8rem' }}>{t.tier}</span>
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {t.why}
                  </p>
                  <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                    <strong>Kill:</strong> {t.kill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '0.95rem', color: 'var(--color-accent-violet)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Proposed — prospective registration pending adoption
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          Drafted with a fixed refutation criterion <em>before</em> the deciding data exists. Listed
          separately from the (empty) discriminating list because its confirming branch is a tie with
          &Lambda;CDM, not a win.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {proposedTests.map(t => (
            <div key={t.id} className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                <h3 style={{ fontSize: '0.95rem' }}>{t.id}: {t.name}</h3>
                <span style={{ color: 'var(--color-accent-violet)', fontFamily: 'monospace', fontSize: '0.75rem', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{t.status}</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{t.verdict}</p>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '0.95rem', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Closed predictions
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {closedTests.map(t => (
            <div key={t.id} className="card" style={{ borderLeft: '3px solid #ef4444', opacity: 0.8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                <h3 style={{ fontSize: '0.95rem' }}>{t.id}: {t.name}</h3>
                <span style={{ color: '#ef4444', fontFamily: 'monospace', fontSize: '0.75rem', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{t.status}</span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>{t.verdict}</p>
            </div>
          ))}
        </div>

        <h2>The Strategy</h2>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            With zero active discriminating tests, the strategy is no longer &ldquo;run the next test&rdquo; —
            it is to hold the two falsifiable positions the framework still occupies, both prospective and
            both kill-or-tie: the adopted DESI DR2 f&sigma;&#x2088; pre-commitment (adjudicates ~Spring 2027)
            and the proposed TEST-26 DESI DR3 sign-lock registration (above; adoption gates on the operator).
            Neither can select the framework over &Lambda;CDM; each can kill it or retire cleanly. That is what
            remains when the discriminating list is honestly empty.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
            The one identified route back to a discriminating test &mdash; derive the cosmic 00-component
            covariantly and check whether the &#x10A;-terms move the locus &mdash; <strong>was executed on
            2026-08-11 and closed</strong>: the &#x10A;-terms do break the literal sign lock, but they push the
            locus <em>away</em> from DESI (0/192 &gamma; reach the preferred quadrant, at every Brans-Dicke
            &omega; tested). What evidence <em>would</em> move this: a completion whose &rho;<sub>DE</sub>(x) has
            an <strong>interior maximum</strong> &mdash; the exact condition for the DESI crossing &mdash; which
            requires either a new functional commitment for C (nothing in the archive proposes one) or an
            independent scalar not slaved to the matter density, at which point the model is generic quintessence
            and the framework contributes nothing. See{' '}
            <Link href="/dark-energy" style={{ color: 'var(--color-accent-blue)' }}>Dark Energy &amp; DESI</Link>.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            (This card said until 2026-08-11 that &ldquo;the immediate discriminating work shifts to
            TEST-02&rdquo; — a test closed as self-eliminating higher on this same page. * TEST-15 remains
            monitoring-only; TEST-07 has no derivation — candidate only.
            <Link href="/cosmic-interference" style={{ color: 'var(--color-accent-blue)', marginLeft: '0.25rem' }}>See derivation status &rarr;</Link>)
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/publication-roadmap" className="btn-primary">
            Publication Roadmap &rarr;
          </Link>
          <Link href="/test-catalog" className="btn-secondary">
            Full Catalog
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/top-5-tests" />
    </>
  );
}
