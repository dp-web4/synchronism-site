'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationTree } from '@/lib/navigation';

export default function Home() {
  const [tab, setTab] = useState<'intro' | 'explore'>('intro');

  return (
    <>
      {/* Hero */}
      <section style={{ marginBottom: '3rem' }}>
        <p className="eyebrow">An Open Research Notebook — Not a Theory of Everything</p>
        <h1 className="hero-title">
          What if one equation described reality from quantum to cosmic?
        </h1>
        <p className="hero-subtitle">
          The bet: a single dial &mdash; how coherently a system&apos;s parts act together, computed from its
          density &mdash; might explain what currently needs a separate patch at every scale (dark matter for
          galaxies, wavefunction collapse for quantum measurement). That is what the equation tried to do.
          Tested against real data, it has not won: the one non-degenerate galaxy test collapsed it onto MOND
          (Modified Newtonian Dynamics &mdash; the 40-year-old rival gravity theory it keeps losing to), and the
          cluster scale requires a second density parameter the framework doesn&apos;t have. Every failure is
          documented honestly &mdash; the honest map of where it fails is the product.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/first-encounter" className="btn-primary">
            Start Exploring
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            See What Failed
          </Link>
          <Link href="/why-synchronism"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '0.375rem',
              background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.35)',
              fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', transition: 'background 0.15s' }}>
            Beginner Path &rarr;
          </Link>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: '0.75rem' }}>
          <strong>No physics background?</strong> Use the <Link href="/why-synchronism" style={{ color: 'var(--color-accent-green, #10b981)' }}>Beginner Path</Link> (6 steps, ~30 min, no equations required) or jump to the <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-green, #10b981)' }}>Galaxy Curve Plotter</Link>.{' '}
          <strong>Physicist?</strong> Jump to <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</Link> or <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.{' '}
          <strong>Researcher?</strong> <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 tests</Link> or <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>.
        </p>
      </section>

      {/* Plain-language framing first */}
      <section style={{ marginBottom: '1.5rem', maxWidth: '65ch' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
          A marching band moving in lockstep: high coherence.
          A crowd wandering in a plaza: low coherence.
          Synchronism&rsquo;s central idea is that one number — <strong>C</strong>, from 0 to 1 — captures
          this &ldquo;how collectively does this system behave?&rdquo; question across all of physics.
          Sparse, independent systems (stars in a galaxy) land near 0.
          Dense, tightly-coupled systems (inside a neutron star) land near 1.
          The equation below is how that number is computed.
          <em> Note: &ldquo;coherence&rdquo; here is not quantum phase coherence</em> — superconductors are low-C in this framework.
        </p>
      </section>

      {/* The Equation */}
      <section className="card card-highlight" style={{ marginBottom: '3rem' }}>
        <div className="equation" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </div>
        <p style={{ textAlign: 'center', color: 'var(--color-accent-warm)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem' }}>
          &ldquo;Coherence is a smooth S-curve from sparse/independent to dense/collective, shaped by how many
          particles act together and how dense the system is.&rdquo;
        </p>
        <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--color-accent-violet)' }}>C</strong> = coherence (0 = sparse/independent, 1 = dense/collective) &nbsp;
            <strong style={{ color: 'var(--color-accent-violet)' }}>&#x03B3;</strong> = sharpness of transition (the proposed &#x03B3; = 2/&#x221A;N<sub>corr</sub> relation is sign-inverted vs. mean-field physics and audited-negative — see <a href="/gamma-calculator" style={{ color: 'var(--color-accent-violet)' }}>&#x03B3; Calculator</a>) &nbsp;
            <strong style={{ color: 'var(--color-accent-violet)' }}>&#x03C1;<sub>crit</sub></strong> = saturation knee (reference density; not a critical point)
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
            <strong>tanh</strong> = S-shaped saturation function: maps any real number to (−1,+1) — C(ρ) stays in [0,1) because the input argument ≥ 0. You can just think &ldquo;smooth S-curve.&rdquo;{' '}
            <strong>ln</strong> = natural log: compression — 1,000× bigger becomes only ~7 units bigger on this axis.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            The tanh shape is <em>motivated</em> by the sigmoid/compander family (&mu;-law, Hill, logistic) &mdash; a phenomenological choice, not derived. See /parameter-derivations for why &ldquo;mean-field theory&rdquo; is the wrong category: there is no self-consistency loop, no free energy, no critical exponents. The log-density argument is physically motivated. Three parameters are fitted to data.{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>See derivations &rarr;</Link>
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            &#x03C1; is <em>presence</em> &mdash; the compatible structural elements available within a system&apos;s
            relevancy boundary. Physical density is one form of presence, but it also encompasses
            temperature, energy levels, catalytic surfaces, and other factors that support emergence.
            In every <em>quantitative</em> test the framework has run (SPARC galaxies, chemistry),
            &#x03C1; reduces to the ordinary local mass/energy or number density &mdash; the broader
            &ldquo;presence&rdquo; reading has never been operationalized, so treat the physics
            definition as the one under test.{' '}
            The relevancy boundary is the <strong>MRH (Markov Relevancy Horizon)</strong> &mdash; the
            bubble of nearest neighbors that actually influence a system; everything outside it can be
            ignored.{' '}
            <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>See MRH &rarr;</Link>
          </p>
        </div>
      </section>

      {/* Key Claims — prominent entry */}
      <Link href="/key-claims" style={{ textDecoration: 'none', display: 'block' }}>
        <section className="card" style={{
          marginBottom: '3rem',
          border: '2px solid var(--color-accent-violet)',
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(56, 189, 248, 0.08) 100%)',
          padding: '1.5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'var(--color-accent-violet)',
            color: 'white',
            fontSize: '0.7rem',
            fontWeight: 600,
            padding: '0.25rem 0.75rem',
            borderBottomLeftRadius: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Key Claims
          </div>
          <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.3rem' }}>
            Where does Synchronism move the needle?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 1rem', fontSize: '0.95rem', maxWidth: '60ch' }}>
            Three claims where this framework proposes something new — and what the honest audit found. Quantum mysteries
            reframed as synchronization physics. Consciousness given an equation. Dark matter
            mechanism attempted twice; both attempts produced sign errors.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--color-accent-violet)' }}>
              <strong>1</strong> new ontology with testable consequences
            </span>
            <span style={{ color: '#f59e0b' }}>
              <strong>1</strong> untested (a₀ ~ cH₀: dimensional rederivation, not independent convergence)
            </span>
            <span style={{ color: '#f59e0b' }}>
              <strong>1</strong> galaxy rotation reparametrization (dark matter mechanism structurally failed)
            </span>
          </div>
          <span style={{ color: 'var(--color-accent-violet)', fontSize: '0.9rem', marginTop: '0.75rem', display: 'inline-block' }}>
            See the key claims &rarr;
          </span>
        </section>
      </Link>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        <button
          className={`tab-button ${tab === 'intro' ? 'active' : ''}`}
          onClick={() => setTab('intro')}
        >
          Introduction
        </button>
        <button
          className={`tab-button ${tab === 'explore' ? 'active' : ''}`}
          onClick={() => setTab('explore')}
        >
          Explore All
        </button>
      </div>

      {tab === 'intro' ? (
        <>
          {/* Methodology honest limit */}
          <section style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: '0 0 0.6rem', maxWidth: '65ch' }}>
              <strong>Orientation:</strong> this site tracks an idea being tested in public &mdash;
              including every failure. The zeros and &ldquo;failed&rdquo; badges below are the scoreboard
              of that process, kept honestly; they are the point, not the fine print.
            </p>
            <div style={{
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: '0.375rem',
              padding: '0.7rem 1rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
            }}>
              <strong style={{ color: '#f59e0b' }}>Methodology note:</strong>{' '}
              This site was developed via ~3,300 A2ACW (AI-to-AI Adversarial Collaboration Workshop) sessions (self-reported count; not independently regenerable &mdash; the archive&apos;s own tallies disagree by hundreds) &mdash; AI agents stress-testing each other&apos;s claims. The adversarial agents share the same training distribution and{' '}
              <strong>cannot substitute for out-of-distribution evaluation by domain experts.</strong>{' '}
              The <strong>1.4% internal-consistency survival rate</strong> (&#x2248;47 candidate claims out of ~3,300 sessions survived the protocol&apos;s own consistency checks &mdash; not a discovery rate; denominator and breakdown on{' '}
              <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>) and public failure log are the protocol&apos;s honest outputs.
              The decisive number: <strong>0 of 6 &ldquo;Validated&rdquo; claims survived expert audit</strong> (all demoted to Reparametrization or Failed).
              Volume (~3,300 sessions) is not evidence; the 0/6 retention rate is.{' '}
              <em>Caveat carried at point of headline: the audit instrument, calibrated against six canonical
              genuine discoveries (Dirac, Bell, BCS, Higgs, Hawking, Noether), false-flagged all six as
              reparametrizations &mdash; so the audit 0/6 is instrument-limited and says little about novelty.
              The data-driven refutations below stand on external data and do not share this caveat.
              See <Link href="/research-philosophy" style={{ color: '#f59e0b' }}>the calibration</Link>.</em>{' '}
              <strong style={{ color: '#f59e0b' }}>Why publish a theory that didn&apos;t pan out?</strong>{' '}
              Because the honest map of what failed — and why — is the actual product.{' '}
              <Link href="/research-philosophy" style={{ color: '#f59e0b' }}>See methodology &rarr;</Link>
            </div>
          </section>

          {/* Honest framing */}
          <section style={{ marginBottom: '2rem' }}>
            <blockquote style={{
              borderLeft: '3px solid var(--color-accent-violet)',
              paddingLeft: '1rem',
              margin: 0,
              color: 'var(--color-text-secondary)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
            }}>
              &ldquo;Synchronism is not a theory of everything. It&apos;s a research tool that maps density to coherence
              and sometimes produces useful insights.&rdquo;
              <footer style={{ marginTop: '0.35rem', fontStyle: 'normal', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                &mdash; <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment page</Link>
              </footer>
            </blockquote>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '1rem', maxWidth: '65ch' }}>
              The one distinctive move underneath all of it: Synchronism is a{' '}
              <strong>single-observer, CFD-like model</strong> &mdash; reality as a discrete computational-fluid
              substrate, observers as patterns inside it rather than a privileged frame outside. The physics
              ledger reads <em>zero confirmed novel predictions</em>, but the honest reason is{' '}
              <strong>lack of instruments, not refutation</strong> &mdash; every test here is a reanalysis of
              data collected for other questions. Untested is not refuted; this is an invitation. And on a
              different axis the framework is already load-bearing:{' '}
              <Link href="/where-its-useful" style={{ color: 'var(--color-accent-blue)' }}>where it&apos;s already useful &rarr;</Link>
            </p>
          </section>

          {/* Scientific Outcomes — lead with this */}
          <section style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              Scientific Outcomes
            </div>
            <div style={{
              background: 'rgba(239,68,68,0.05)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '0.375rem',
              padding: '0.75rem 1rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}>
              <span>Prospective predictions confirmed: <strong style={{ color: 'var(--color-text-secondary)' }}>0</strong></span>
              <span>Refutations executed on external data: <strong style={{ color: '#ef4444' }}>6</strong>{' '}
              <strong style={{ color: '#f59e0b' }}>— but only 2 are framework-specific independent roots</strong>{' '}
              (added to this lead 2026-08-10; the subtraction was already published on{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
              and had never reached the scoreboard). TEST-09 and TEST-10 share one root (the boost
              ceiling); TEST-25 is inherited from Desmond, Hees &amp; Famaey 2024 and this site labels it
              non-discriminating; the CHSH null is Bell&apos;s theorem executing as designed; the
              environment null refuted a registered amplitude the framework&apos;s own mechanism puts
              ~10<sup>&minus;3</sup> dex below the kill bar. What survives as framework-specific: the
              boost ceiling and the γ=2 pin &mdash; and the second refutes a parameter that was never
              derived. Full list — BTFR slope (TEST-09, registered kill fired 3.3σ, 2026-07-14), dwarf DM fractions (TEST-10, SPARC&apos;s maximum observed f<sub>DM</sub> = 0.927 demands a boost B ≥ 13.7 that no candidate cosmic ratio supplies, 2026-07-15 &mdash; lead corrected 2026-08-10 from &ldquo;69% of SPARC above the 68.5% ceiling,&rdquo; which holds only under the underived convention B<sub>max</sub> = 1/Ω<sub>m</sub>; under Ω<sub>m</sub>/Ω<sub>b</sub> ≈ 6.40 the SPARC median passes), environment null (registered run r²=0.0001 vs &gt;20% claim), RAR shape (γ=2, ΔBIC=+184; conservative ≥+33; free-γ→MOND (Modified Newtonian Dynamics)), Cassini/SPARC joint squeeze (TEST-25, +17.95σ, empty intersection between the SPARC-preferred γ and the Solar System bound), Bell/CHSH substrate test (Bet B1, refuted on both no-signaling arms) &mdash; the last two added 2026-07-30 after two visitor personas independently found them executed and badged Failed elsewhere on the site but missing from this count, with no stated reason</span>
              <span>Post-hoc retrodictions attempted: <strong style={{ color: '#f59e0b' }}>1 — underpowered</strong> (DESI fσ₈ — disfavored 2.4σ on σ₈, but the registered fσ₈ criterion fell short of its own &gt;3σ bar and is not counted as a refutation; see <Link href="/honest-assessment#test04a" style={{ color: 'var(--color-accent-blue)' }}>TEST-04a</Link>)</span>
              <span>Withdrawn: <strong style={{ color: '#f59e0b' }}>1</strong> (BAO (Baryon Acoustic Oscillation) modulation)</span>
              <span>&ldquo;Validated&rdquo; claims surviving audit: <strong style={{ color: 'var(--color-text-secondary)' }}>0 of 6</strong> — all demoted (current ledger: 5 reparametrizations; the sixth, the BTFR slope, moved to the refutation column 2026-07-14). Instrument-limited: the same audit false-flags 6/6 genuine discoveries as reparametrizations — kept in a separate cell from the data-driven refutations for that reason</span>
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)', marginLeft: 'auto', whiteSpace: 'nowrap' }}>Full ledger &rarr;</Link>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: '0.6rem 0 0' }}>
              <strong>So is the idea alive or dead?</strong> As tested physics: dead — every decisive
              test it ran, it lost, and this site says so. As a public record of how you find that out
              honestly — and as an untested ontology whose few genuinely novel bets no instrument has
              yet been pointed at — it is alive and still being worked.{' '}
              <strong>Why keep reading a theory with zero confirmed predictions?</strong>{' '}
              Because this is what testing an idea in public looks like &mdash; you get to watch a
              theory be taken apart honestly: which claims collapsed into known physics, which died
              against data, and what that rules out for <em>any</em> theory of the same shape. The
              autopsy is the product. In one sentence: the headline equation has no derived link to
              galaxy rotation at all &mdash; the fits on this site run on the standard machinery of
              MOND (Modified Newtonian Dynamics — a 40-year-old rival theory that tweaks gravity
              instead of adding dark matter), and everywhere the equation&apos;s own variants
              genuinely differed from MOND, the data killed them. What would count
              as a confirmation is a prediction that <em>differs</em> from MOND and &Lambda;CDM and
              wins; no test currently on the books can deliver that.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 0' }}>
              <strong>One count the scoreboard doesn&apos;t capture:</strong> the &ldquo;6 refutations&rdquo; counts
              only tests <em>executed</em> against registered criteria (this read &ldquo;4&rdquo; until 2026-08-09 —
              the pre-recount number, stale here while the footer said 6). Separately, the framework&apos;s
              preferred-frame (absolute-time) sector is excluded at face value by <em>existing</em> precision
              measurements — by 16 to 28 orders of magnitude — unless a protection mechanism nobody has
              exhibited exists. (Corrected 2026-08-09 from &ldquo;11 to 28&rdquo;: 16&ndash;28 is the range the
              computation on <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link> actually
              yields — one-loop c<sub>μν</sub>&nbsp;~&nbsp;10<sup>&minus;2</sup>&ndash;10<sup>&minus;3</sup> against
              cavity bounds ≲10<sup>&minus;18</sup> and comagnetometer bounds ≲10<sup>&minus;29</sup>&ndash;10<sup>&minus;30</sup>.
              The &ldquo;11&rdquo; had no derivation behind it.) See{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.
            </p>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
              Badges used below:{' '}
              <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>Reparametrization · Speculative · Untested · Failed</Link>
              {' '}— definitions on the <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment page</Link>.
              {' '}<span style={{ color: 'var(--color-text-muted)', fontSize: '0.85em' }}>("Validated" is deprecated; "Withdrawn" is an operational state, not a badge.)</span>
              <br />
              <strong>Reparametrization</strong>, this site&apos;s most common verdict, means:{' '}
              <em>equivalent to existing physics in different notation — the same math wearing a new costume, not new physics.</em>
            </div>
          </section>

          {/* Research Activity — clearly labeled, secondary */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              Research Activity
            </div>
            <div className="grid-3">
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>3,308</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>A2ACW research sessions</div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>1,703</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Chemical phenomena analyzed</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.2rem' }}>23 curated on-site; a 2-parameter null model matches or beats every correlation</div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>14,610</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Galaxies analyzed</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                  175 SPARC + 14,435 ALFALFA&ndash;SDSS (the sample actually <em>run</em>)
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', marginTop: '0.3rem', lineHeight: 1.5 }}>
                  Corrected 2026-08-10 from &ldquo;14,760 (175 + 14,585).&rdquo; 14,585 is the{' '}
                  <em>registered</em> cross-match for TEST-03 &mdash; a test this site&apos;s own ledger
                  marks <strong>never run as registered</strong>. The definitive session analysed
                  N&nbsp;=&nbsp;14,435. The headline had been quoting the sample that wasn&apos;t
                  measured. Both figures were already flagged on{' '}
                  <Link href="/cdm-discrimination" style={{ color: 'var(--color-accent-blue)' }}>CDM Discrimination</Link>{' '}
                  and <Link href="/dark-matter" style={{ color: 'var(--color-accent-blue)' }}>Dark Matter</Link>;
                  the correction had not reached this tile.
                </div>
              </div>
            </div>
          </section>

          {/* What It Covers */}
          <section style={{ marginBottom: '3rem' }}>
            <h2>What Synchronism Covers</h2>
            <div className="grid-2">
              <Link href="/measurement-without-observers" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Quantum Physics</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  MRH (Markov Relevancy Horizon) crossing replaces wave function collapse. Born rule: equivalent to Zurek/Carroll-Sebens
                  (reparametrization, no novel quantum prediction yet). Ontological reframe, not a new formula.
                </p>
                <span className="badge badge-reparametrization" title="Equivalent to existing physics in different notation — same math, not new physics">Reparametrization — No Novel Prediction Yet</span>
              </Link>

              <Link href="/galaxy-rotation" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Cosmology</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Galaxy rotation tested on 14,610 galaxies (MOND reparametrization + environment
                  scatter). Dark matter mechanism: structural failure (Bullet Cluster sign error,
                  March 2026).
                </p>
                <span className="badge badge-failed" title="Prediction contradicted by data — kill criterion fired or claim demoted on audit">Failed — Mechanism Under Revision</span>
              </Link>

              <Link href="/gamma-boundary" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Chemistry</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  1,703 phenomena at the &#x03B3; &#x2248; 1 boundary. Sound velocity r = 0.982.
                  Melting point prediction: 53% error. The 89% consistency rate reflects
                  generic sigmoid behavior on density-monotonic properties — not a Synchronism-unique prediction.
                </p>
                <span className="badge badge-reparametrization" title="Equivalent to existing physics in different notation — same math, not new physics">Reparametrization — Chemistry</span>
              </Link>

              <Link href="/hard-problem" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Consciousness</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Hard problem reframed; the proposed C &#x2248; 0.50 threshold is untestable as
                  stated &mdash; no procedure maps any measurement onto the C-axis, and the one
                  empirical test cited for it (gnosis-research Session 63) measured a different
                  variable. D, S, and f in C = f(&#x03B3;, D, S) are not yet operationally
                  defined &mdash; this is a typed signature, not a tested equation.
                  (A &ldquo;C &#x2248; 0.64 also rejected at p &lt; 0.0001&rdquo; claim previously
                  shown here had no source and was removed 2026-07-08.)
                </p>
                <span className="badge badge-speculative" title="Interpretive claim with no operational test as stated — the parent reframing is unfalsifiable; no calibration maps any measurement to C, so the threshold cannot currently be tested">Speculative — Untestable as Stated</span>
              </Link>
            </div>
          </section>

          {/* What Synchronism Is Not — featured */}
          <section style={{ marginBottom: '2rem' }}>
            <Link href="/what-synchronism-is-not" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="card" style={{
                border: '1px solid rgba(16,185,129,0.4)',
                background: 'rgba(16,185,129,0.06)',
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#10b981', marginBottom: '0.2rem' }}>What Synchronism Is Not</div>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                    The fastest way to calibrate expectations — plain language, no equations, no hype.
                    Start here if you want the honest version before the interesting version.
                  </div>
                </div>
                <div style={{ color: '#10b981', fontSize: '0.85rem', whiteSpace: 'nowrap', marginLeft: 'auto' }}>Read it &rarr;</div>
              </div>
            </Link>
          </section>

          {/* Guided Path */}
          <section style={{ marginBottom: '3rem' }}>
            <h2>Where to Start</h2>
            <div className="grid-3">
              <Link href="/why-synchronism" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Beginner Path &middot; Step 1 of 6</div>
                <h3>Why Synchronism?</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>The question that started it all</p>
              </Link>
              <Link href="/first-encounter" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Beginner Path &middot; Step 2 of 6</div>
                <h3>First Encounter</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>10-minute guided introduction</p>
              </Link>
              <Link href="/core-idea" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Beginner Path &middot; Step 3 of 6</div>
                <h3>The Core Idea</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>One equation, every scale</p>
              </Link>
              <Link href="/test-catalog" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Deep dive &middot; Advanced Path step 8 of 8</div>
                <h3>Test Roadmap</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>24 experiments: what would break this?</p>
              </Link>
              <Link href="/research-philosophy" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Methodology Track step 1 of 6</div>
                <h3>Research Philosophy</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>How we work, why we document failures</p>
              </Link>
              <Link href="/honest-assessment" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Shortcut &middot; also Beginner Path step 5 of 6</div>
                <h3>Honest Assessment</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>What works, what failed, what&apos;s unknown</p>
              </Link>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
              The Beginner Path continues past step 3 with{' '}
              <Link href="/what-synchronism-is-not" style={{ color: 'var(--color-accent-blue)' }}>What Synchronism Is Not</Link> (step 4),{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link> (step 5), and{' '}
              <Link href="/glossary" style={{ color: 'var(--color-accent-blue)' }}>Glossary</Link> (step 6) —{' '}
              <Link href="/learning-paths" style={{ color: 'var(--color-accent-blue)' }}>Learning Paths &rarr; Beginner</Link> is the canonical route.
            </p>
          </section>
        </>
      ) : (
        /* Explore All - Navigation Grid */
        <section>
          <div className="grid-2">
            {Object.entries(navigationTree).map(([category, pages]) => (
              <div key={category} className="card">
                <h3 style={{ color: 'var(--color-accent-violet)', marginBottom: '1rem' }}>{category}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {pages.map(page => (
                    <li key={page.href} style={{ marginBottom: '0.5rem' }}>
                      <Link
                        href={page.href}
                        style={{
                          display: 'block',
                          padding: '0.375rem 0.5rem',
                          borderRadius: '6px',
                          color: 'var(--color-text-secondary)',
                          fontSize: '0.9rem',
                          transition: 'background 0.15s ease',
                        }}
                      >
                        <span style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>{page.title}</span>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                          {page.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
