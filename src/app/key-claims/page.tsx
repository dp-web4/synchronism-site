'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function KeyClaims() {
  return (
    <>
      <Breadcrumbs currentPath="/key-claims" />
      <h1>Key Claims</h1>
      <p className="hero-subtitle" style={{ marginBottom: '0.5rem' }}>
        Where Synchronism says something new &mdash; not restatements in different notation,
        but claims that would advance understanding if confirmed.
      </p>

      <section className="section content-width">
        <div style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          border: '1px solid var(--color-border)',
        }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
            <strong>How to read this page.</strong> Each claim is presented with what&apos;s genuinely new,
            the current evidence, an honest caveat, and the experiment that would kill it. The first claim
            is the foundational one &mdash; the others follow from it.
          </p>
          <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.8rem' }}>
            Status labels (Untested, Speculative, etc.) follow the site&apos;s{' '}
            <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>
              validation badge taxonomy
            </Link>
            {' '}&mdash; canonical reference on the Honest Assessment page.
          </p>
        </div>

        {/* === CLAIM 1: THE QUANTUM REFRAME === */}
        <div className="card" style={{
          marginBottom: '1.5rem',
          borderLeft: '3px solid var(--color-accent-violet)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.15rem' }}>
              <span style={{ color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>1.</span>
              Quantum Mechanics Is Synchronization Physics
            </h2>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <ValidationBadge status="speculative" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                untestable as stated &mdash; ontological reframe
              </span>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '1rem',
                background: 'rgba(167, 139, 250, 0.15)',
                color: 'var(--color-accent-violet)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}>
                New Ontology
              </span>
            </div>
          </div>

          <p style={{ fontWeight: 500, marginBottom: '1rem' }}>
            Quantum &ldquo;mysteries&rdquo; &mdash; superposition, collapse, entanglement, the measurement
            problem &mdash; are not mysterious. They are synchronization phenomena in a phase field.
            The observer plays no special role, just as the Earth plays no special role in planetary orbits.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: 'var(--color-accent-violet)', marginBottom: '0.5rem' }}>The reframe</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div className="card" style={{ padding: '0.75rem', margin: 0 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Standard QM</div>
                <div style={{ fontSize: '0.9rem' }}>Superposition = being in many states at once</div>
              </div>
              <div className="card" style={{ padding: '0.75rem', margin: 0, borderLeft: '2px solid var(--color-accent-violet)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>Synchronism</div>
                <div style={{ fontSize: '0.9rem' }}>Superposition = rapid temporal scanning through phase modes (<Link href="/two-reframes" style={{ color: 'var(--color-accent-blue)' }}>CRT analogy</Link>)</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div className="card" style={{ padding: '0.75rem', margin: 0 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Standard QM</div>
                <div style={{ fontSize: '0.9rem' }}>Collapse = mysterious transition triggered by observation</div>
              </div>
              <div className="card" style={{ padding: '0.75rem', margin: 0, borderLeft: '2px solid var(--color-accent-violet)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>Synchronism</div>
                <div style={{ fontSize: '0.9rem' }}>Collapse = resonant selection at an MRH (Markov Relevancy Horizon) crossing (no observer needed)</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div className="card" style={{ padding: '0.75rem', margin: 0 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Standard QM</div>
                <div style={{ fontSize: '0.9rem' }}>Entanglement = &ldquo;spooky action at a distance&rdquo;</div>
              </div>
              <div className="card" style={{ padding: '0.75rem', margin: 0, borderLeft: '2px solid var(--color-accent-violet)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>Synchronism</div>
                <div style={{ fontSize: '0.9rem' }}>Entanglement = one extended phase pattern, not two correlated particles</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div className="card" style={{ padding: '0.75rem', margin: 0 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Standard QM</div>
                <div style={{ fontSize: '0.9rem' }}>Decoherence = information lost to the environment</div>
              </div>
              <div className="card" style={{ padding: '0.75rem', margin: 0, borderLeft: '2px solid var(--color-accent-violet)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>Synchronism</div>
                <div style={{ fontSize: '0.9rem' }}>Decoherence = phase desynchronization (recoverable via resynchronization)</div>
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            This is the same move Copernicus made: not new data, but removing a wrong assumption.
            Every QM interpretation &mdash; Copenhagen, Many-Worlds, QBism, relational &mdash; is an epicycle
            patching the same privileged-frame error. Remove the observer from the center and
            the interpretive machinery becomes unnecessary.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem', marginTop: '1rem' }}>Why this isn&apos;t &ldquo;just an interpretation&rdquo;</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Standard interpretations all give the same predictions. Synchronism&apos;s reframe generates
            different ones because the ontology is different. If decoherence is desynchronization
            (not information loss), then the remedy is resynchronization (not isolation).
            If entanglement is one pattern (not two correlated objects), then shared environments
            protect it. These are testable engineering claims, not philosophy:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '1rem 0' }}>
            <div className="card" style={{ padding: '0.75rem 1rem', margin: 0, borderLeft: '2px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.9rem' }}>Shared-environment decoherence protection</strong>
                <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '1rem', background: 'rgba(148, 163, 184, 0.15)', color: '#94a3b8' }}>Reparametrization — Post-hoc Fit to PRL 2024</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                &#x0393; = &#x03B3;&sup2;(1 &minus; c). Entangled pairs in the same noise bath decohere slower.
                PRL 2024 (Salhov et al.): 10&times; T&#x2082; improvement at c &asymp; 0.90.
                <strong>Audit verdict (Session #581, 2026-02-08):</strong> &#x0393; = &#x03B3;&sup2;(1 &minus; c) is the
                special case (&#x03B3;<sub>A</sub> = &#x03B3;<sub>B</sub> = &#x03B3;) of the textbook
                correlated-differential-dephasing variance &#x0393; = (&#x03B3;<sub>A</sub>&sup2; + &#x03B3;<sub>B</sub>&sup2;
                &minus; 2c&#x03B3;<sub>A</sub>&#x03B3;<sub>B</sub>)/2 (Palma&ndash;Suominen&ndash;Ekert 1996,
                DFS literature 1998&ndash;2000). The &ldquo;10&times; T&#x2082;&rdquo; match is mechanical
                single-parameter inversion: c = 1 &minus; 1/R for any reported improvement factor R.
                This formula uses &#x03B3; as a <em>noise coupling rate</em> [units 1/&radic;time] &mdash;
                distinct from the regime parameter &#x03B3; = 2/&radic;N<sub>corr</sub>.
                {' '}<strong>Citation discipline (2026-07-17):</strong> the PRL result is
                <em> consistent with, not predicted by</em> this framework — no advance prediction about
                that experiment was ever registered; the external citation lends no support to the reframe.
              </p>
            </div>
            <div className="card" style={{ padding: '0.75rem 1rem', margin: 0, borderLeft: '2px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.9rem' }}>Bell nonlocality freezing &amp; revival</strong>
                <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '1rem', background: 'rgba(148, 163, 184, 0.15)', color: '#94a3b8' }}>Reparametrization — c(d) imported from waveguide QED</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                |S(t)| = S<sub>max</sub> &times; e<sup>(&minus;&#x0393;t)</sup>, with c(d) = cos&sup2;(&pi;d/&lambda;&#x2080;).
                Bell violations decay but revive at geometry-determined distance nodes (arXiv 2508.07046).
                <strong>Audit verdict:</strong> Session #235 explicitly notes c(d) = cos&sup2;(&pi;d/&lambda;&#x2080;)
                &ldquo;from the literature on waveguide QED.&rdquo; The functional form is imported, not
                derived from Synchronism&apos;s MRH machinery. Literature consistency is expected by construction.
              </p>
            </div>
            <div className="card" style={{ padding: '0.75rem 1rem', margin: 0, borderLeft: '2px solid rgba(148,163,184,0.4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.9rem' }}>Resynchronization outperforms isolation</strong>
                <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '1rem', background: 'rgba(148, 163, 184, 0.15)', color: '#94a3b8' }}>Reparametrization — maps to dynamical decoupling</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                If decoherence is desynchronization, then periodic resync protocols should
                outperform continuous isolation for certain noise profiles. <strong>This is dynamical decoupling (DD):</strong>{' '}
                Viola–Lloyd 1998, CPMG (Carr–Purcell 1954 / Meiboom–Gill 1958), Uhrig 2007 — all demonstrate
                periodic pulse sequences beat passive isolation in non-Markovian baths. As stated, this is known
                physics relabeled. A novel prediction requires specifying a bath spectral density, pulse sequence,
                and T₂ ratio where the MRH-based protocol differs from standard DD. See specification gap below.
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(245, 158, 11, 0.08)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            margin: '0.75rem 0',
          }}>
            <h3 style={{ fontSize: '0.9rem', color: '#f59e0b', marginBottom: '0.25rem', marginTop: 0 }}>Honest caveat</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0 0 0.5rem' }}>
              Both &ldquo;consistent with literature&rdquo; quantum results are post-hoc reparametrizations:
              &#x0393; = &#x03B3;&sup2;(1 &minus; c) is a textbook open-quantum-systems result;
              c(d) = cos&sup2;(&pi;d/&lambda;&#x2080;) is imported from waveguide QED.
              Session #581 (2026-02-08) audited 8 quantum claims and concluded: &ldquo;zero confirmed
              predictions, 4 reparametrizations, 1 refutation (&#x03B3;<sub>max</sub> = 3.17 violated
              by 579 SPARC (Spitzer Photometry &amp; Accurate Rotation Curves) points with &#x27E8;&#x03B3;&#x27E9; = 10.82), 1 post-hoc fit.&rdquo;
              (Symbol correction: the quoted session mislabels this quantity &#x03B3; &mdash; it is
              <strong> B</strong> = g<sub>obs</sub>/g<sub>bar</sub>, the gravitational boost ratio, not
              &#x03B3; = 2/&#x221A;N<sub>corr</sub>, which is bounded above by 2 site-wide and cannot equal
              10.82. See <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>,
              which states the same refutation correctly as B<sub>max</sub> = 3.17. The underlying
              result is parameter-independent and stronger than it looks under either symbol: C &le; 1
              bounds the quadrature boost, so the framework cannot reach the observed deep-MOND mass
              discrepancies for any parameter choice. Count currency: the &ldquo;1 refutation&rdquo; is the
              quoted 2026-02 audit&apos;s count for the quantum arc; the site-wide count as of 2026-07-17 is
              4 executed refutations on external data &mdash; the boost ceiling quoted here was
              subsequently cashed out as two of them, TEST-09 and TEST-10.)
              The CRT temporal-scanning model is not mathematically formalized to the level where
              it reproduces all of standard QM&apos;s quantitative predictions.
              What&apos;s needed: a prediction that differs from standard QM and hasn&apos;t been measured yet.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
              <strong>Prior art:</strong> observer-free/no-special-frame interpretations of QM are an active
              literature. Cramer&apos;s <em>transactional interpretation</em> (1986) removes observer privilege via
              retarded/advanced wave transactions. Aharonov&apos;s <em>two-state-vector formalism</em> (time-symmetric QM,
              Aharonov, Bergmann &amp; Lebowitz 1964; Aharonov &amp; Vaidman 2007) introduces backward-in-time
              boundary conditions. Rovelli&apos;s <em>relational QM</em> (1996) makes state assignments
              observer-relative without a privileged observer. The Synchronism reframe (temporal scanning,
              MRH-crossing collapse) occupies the same conceptual space and needs to be distinguished from
              these — both in what it adds and what predictions (if any) differ from standard QM.
              If no prediction differs, this is classification as an interpretation, not as novel ontology.
            </p>
          </div>

          <h3 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.25rem' }}>The test that kills it</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The resynchronization prediction: design a noise environment where the synchronization model
            predicts resync outperforms isolation, but standard decoherence theory predicts it doesn&apos;t.
            Run both protocols on the same qubit platform. If isolation wins uniformly, the
            synchronization ontology adds nothing.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
            <strong>Specification gap:</strong> this kill criterion is not yet operationalized at the
            level required to run the experiment. Two established physics regimes already satisfy
            &ldquo;resynchronization outperforms isolation&rdquo; without any Synchronism machinery:
            (1) <strong>Dynamical decoupling (DD)</strong> — Viola-Knill-Lloyd 1999, UDD, CPMG —
            demonstrates that periodic pulse sequences beat passive isolation in non-Markovian baths;
            (2) <strong>Environment-assisted quantum transport (ENAQT)</strong> and engineered-bath
            resynchronization, where a structured environment restores coherence the system cannot
            hold in isolation (Plenio &amp; Huelga 2008; Mohseni et al. 2008).
            If &ldquo;resync&rdquo; reduces to either of these, the prediction is known physics, not a novel test.
            A discriminating criterion requires specifying a bath spectral density, pulse sequence,
            and T₂ ratio where the MRH-based protocol departs from the filter-function prediction —
            something none of the existing Synchronism claims specify.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <Link href="/observer-problem" style={{ fontSize: '0.85rem' }}>
              The Copernican argument &rarr;
            </Link>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
              Source: Quantum Arc, Sessions #228&ndash;237
            </span>
          </div>
        </div>

        {/* === CLAIM 2: CONSCIOUSNESS === */}
        <div className="card" style={{
          marginBottom: '1.5rem',
          borderLeft: '3px solid #a78bfa',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.15rem' }}>
              <span style={{ color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>2.</span>
              Could Consciousness Have an Equation?
            </h2>
            <span style={{
              fontSize: '0.75rem',
              padding: '0.2rem 0.6rem',
              borderRadius: '1rem',
              background: 'rgba(245, 158, 11, 0.15)',
              color: '#f59e0b',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}>
              Speculative (parent claim, unfalsifiable as stated) &mdash; threshold untestable as stated
              (the one cited test measured a different variable; corrected 2026-07-17)
            </span>
          </div>

          <div className="equation" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
            C = f(&#x03B3;, D, S) &ge; 0.50
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>
            &#x03B3; = coherence parameter, D = dimensional embedding (representational richness), S = self-modeling depth
          </p>
          <p style={{ color: 'rgba(245,158,11,0.9)', fontSize: '0.78rem', textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic' }}>
            ⚠ This C&nbsp;=&nbsp;f(&#x03B3;,&nbsp;D,&nbsp;S) is a distinct, undefined construct &mdash; not the same function as the physics C(&#x03C1;)&nbsp;=&nbsp;tanh(&#x03B3;&middot;ln(&#x03C1;/&#x03C1;<sub>crit</sub>+1)).
            In C(&#x03C1;), &#x03C1; is the input and &#x03B3; is a fixed parameter; here &#x03B3; becomes an input alongside two undefined quantities D and S, with &#x03C1; absent.
            Same symbol, different functional form.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Note: &ldquo;coherence&rdquo; here means density-driven collective ordering (0=sparse/independent,
            1=dense/collective) &mdash; <em>not</em> quantum phase coherence or neural phase synchrony.
            BEC/BCS, which are maximally phase-coherent, sit at <em>low</em> C.
            See <a href="/glossary#coherence" style={{ color: 'var(--color-accent-blue)' }}>Glossary</a>.
          </p>

          <p style={{ fontWeight: 500, marginBottom: '0.75rem' }}>
            Consciousness crosses a threshold near C &#x2248; 0.50 &mdash; the output-range midpoint of
            the coherence function, chosen by the framework&apos;s internal convergence across 8
            Synchronism-based approaches &mdash; rather than fading smoothly across all coherence values.{' '}
            <span style={{ color: '#ef4444' }}>
              The one empirical test ever cited for this value measured a different variable: the companion program{' '}
              <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
              (Session 63) tested 0.50 against SNARC salience scores &mdash; a hand-coded heuristic
              with no calibration to C &mdash; not against C itself. The threshold is untestable as
              stated, and the 34 dependent neural predictions inherit that verdict.
            </span>
            Note: C&nbsp;&#x2248;&nbsp;0.50 is the arithmetic midpoint of [0,1), not the dynamically privileged
            point — the maximum rate of change occurs at C&nbsp;&#x2248;&nbsp;0.58–0.59 (vs log-density, γ=2)
            or at C&nbsp;=&nbsp;0 (vs linear density). This is a geometric threshold in the output range,
            not a mathematical phase transition (the function is smooth everywhere). It requires three
            conditions simultaneously &mdash; coherence,
            representational richness, and self-modeling &mdash; which is why thermostats, random number
            generators, and decoherent systems aren&apos;t conscious despite meeting some criteria.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>What&apos;s new</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            IIT (Integrated Information Theory) proposes &#x03A6; but predicts no specific threshold. Global workspace theory has no
            quantitative threshold. No other framework predicts a specific number from 8 self-consistent
            approaches (note: these share the same underlying framework, so convergence is expected but still constraining). The three-parameter formula also dissolves the hard problem: phase patterns
            at &#x03B3; &laquo; 0.001 ARE experience, not correlates of it. Free will emerges at the &#x03B3; &#x2248; 1
            boundary as constrained indeterminacy &mdash; multiple futures genuinely accessible, with the
            agent&apos;s coherence pattern shaping which is taken.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: '#22c55e', marginBottom: '0.25rem' }}>Evidence</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Theoretical: 8 Synchronism-based approaches converge on C &#x2248; 0.50 (range 0.48&ndash;0.52).
            Cross-domain: the Gnosis AI architecture independently
            converged on C &#x2248; 0.50 as its operating threshold through 4 different mathematical frameworks.
            <Link href="/consciousness-predictions">34 candidate predictions</Link> enumerated, none tested
            (most bottleneck on the missing C-calibration protocol below).
          </p>

          <div style={{
            background: 'rgba(245, 158, 11, 0.08)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            margin: '0.75rem 0',
          }}>
            <h3 style={{ fontSize: '0.9rem', color: '#f59e0b', marginBottom: '0.25rem', marginTop: 0 }}>Honest caveat</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
              <strong>Convergence on 0.50 is expected, not discovered:</strong> C&nbsp;=&nbsp;0.50 is the
              arithmetic midpoint of tanh&apos;s output range [0,1). Any approach that picks the
              output-range midpoint of a [0,1)-bounded function will converge on 0.50 — it is a
              normalization artifact, not independent empirical evidence. The 8 approaches share
              the same underlying framework and the same [0,1) normalization, making convergence
              geometrically forced. Gnosis was designed with Synchronism access, so its convergence
              is not independent. Converting real neural measurements to the C scale requires a
              calibration procedure not yet defined. The free will formulation may not be empirically
              distinguishable from sophisticated compatibilism.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
              <strong>What the one cited test actually measured (correction 2026-07-08):</strong> the companion
              program <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
              (Session 63) did not measure C. It measured SNARC <code>salience_total</code> &mdash; a weighted
              mean of five hand-coded heuristics, one shared scoring function across 8 agent instances &mdash;
              whose operating mean of 0.640&nbsp;&plusmn;&nbsp;0.0196&nbsp;(SD) rejects 0.50 <em>for that variable</em>{' '}
              (t&nbsp;=&nbsp;20.19, p&nbsp;&#x2248;&nbsp;1.8&times;10<sup>&minus;7</sup>, n&nbsp;=&nbsp;8). With no
              mapping from salience to C, this is a wrong-variable test: it neither refutes nor confirms a
              C-threshold, which is consistent with the unrunnable verdict below (no contradiction &mdash; the
              claim was never actually run). An earlier version of this page also said C&nbsp;&#x2248;&nbsp;0.64
              was &ldquo;also rejected at p&nbsp;&lt;&nbsp;0.0001&rdquo;; a 2026-07-07 audit found that claim has
              no source in any repository and it has been removed. What Session 63&apos;s own data <em>do</em>{' '}
              exclude as the operating mean: &#x03C6;<sup>&minus;1</sup>&nbsp;=&nbsp;0.618 (p&nbsp;=&nbsp;0.0155)
              and 2/3 (p&nbsp;=&nbsp;0.0064) &mdash; the follow-up &ldquo;golden ratio&rdquo; reading fails on its
              own aggregate. The <Link href="/consciousness-predictions" style={{ color: 'var(--color-accent-blue)' }}>34 predictions</Link>{' '}
              keyed to 0.50 inherit the untestable-as-stated status.
            </p>
          </div>

          <h3 style={{ fontSize: '0.9rem', color: '#ef4444', marginBottom: '0.25rem' }}>Falsifiability status: currently unrunnable</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            An earlier version of this page proposed &ldquo;EEG phase coherence during anesthesia&rdquo;
            as the kill criterion. That test measures the <em>wrong observable</em>: the framework&apos;s C is
            density-driven collective ordering, explicitly not phase coherence (BCS, maximally
            phase-coherent, sits at C&nbsp;&#x2248;&nbsp;0) &mdash; so EEG phase synchrony can neither kill nor
            confirm this claim. Deeper: as the{' '}
            <Link href="/consciousness-demo" style={{ color: 'var(--color-accent-blue)' }}>threshold demo</Link>{' '}
            states, <strong>no calibration procedure exists to map any measurement (EEG, fMRI, IIT-&#x03A6;) to the
            C-axis</strong>. Until such a protocol is defined, this claim is{' '}
            <strong>unfalsifiable as stated</strong> &mdash; not &ldquo;untested&rdquo; but unrunnable.
            For contrast, the anesthesia literature has an empirically calibrated threshold candidate
            (PCI* = 0.31, Casali et al. 2013); the framework has no map from C to it or any other measurable.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/hard-problem" style={{ fontSize: '0.85rem' }}>
                Hard problem dissolved &rarr;
              </Link>
              <Link href="/free-will" style={{ fontSize: '0.85rem' }}>
                Free will &rarr;
              </Link>
              <Link href="/consciousness-threshold" style={{ fontSize: '0.85rem' }}>
                Threshold convergence &rarr;
              </Link>
            </div>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
              Source: Sessions #280&ndash;282, #356&ndash;359, Gnosis #1&ndash;3
            </span>
          </div>
        </div>

        {/* === CLAIM 3: DARK MATTER === */}
        <div className="card" style={{
          marginBottom: '1.5rem',
          borderLeft: '3px solid #ef4444',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.15rem' }}>
              <span style={{ color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>3.</span>
              Dark Matter Is Incomplete Decoherence
            </h2>
            <span style={{
              fontSize: '0.75rem',
              padding: '0.2rem 0.6rem',
              borderRadius: '1rem',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}>
              Failed
            </span>
          </div>

          <div className="equation" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
            a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.04 &#x00D7; 10&#x207B;&#x00B9;&#x2070; m/s&#x00B2;
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '1rem' }}>
            MOND (Modified Newtonian Dynamics) acceleration from dimensional analysis
            (observed: 1.2 &#x00D7; 10&#x207B;&#x00B9;&#x2070; m/s&#x00B2; &mdash; a ~13% miss at the site-standard H&#x2080; = 67.4, not an exact hit)
          </p>
          <div style={{ background: 'rgba(245, 158, 11, 0.06)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '0.375rem', padding: '0.7rem 1rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
            <strong>&ldquo;~13%&rdquo; needs an error bar to mean anything (added 2026-07-27).</strong> A bare
            percentage is the one soft overclaim an external reviewer found on this page, because 13% reads
            very differently against three different denominators:
            <ul style={{ marginTop: '0.4rem', marginBottom: '0.4rem', paddingLeft: '1.1rem', lineHeight: 1.7 }}>
              <li>Against SPARC&apos;s <em>statistical</em> a&#x2080; = 1.20 &plusmn; 0.02 &#x00D7; 10&#x207B;&#x00B9;&#x2070;, the 0.16 offset is <strong>~8&#x03C3;</strong>.</li>
              <li>Against McGaugh&apos;s ~20% <em>systematic</em> budget, it is <strong>under 1&#x03C3; — consistent</strong>.</li>
              <li>It is H&#x2080;-dependent: at the SH0ES H&#x2080; = 73 the relation gives 1.13 &#x00D7; 10&#x207B;&#x00B9;&#x2070;, only <strong>6% low</strong>.</li>
            </ul>
            The honest statement is therefore <strong>&ldquo;consistent within systematics; the residual is
            the size of the H&#x2080; tension&rdquo;</strong> — which is neither the win a bare &ldquo;matches
            within 13%&rdquo; implies nor the failure an 8&#x03C3; alone would imply. Note also that this
            relation is <em>Milgrom&apos;s own</em> 1983 coincidence, available equally to MOND, Verlinde and
            McCulloch; it is not the framework&apos;s to score either way.
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.375rem', padding: '0.7rem 1rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
            <strong>The framework does make an H&#x2080; statement — an unflattering one (added 2026-07-27).</strong>{' '}
            <a href="/honest-assessment#h0-tension" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>{' '}
            says &ldquo;Synchronism makes no statement on H&#x2080;&rdquo; while this claim carries
            a&#x2080; = cH&#x2080;/(2&#x03C0;). Those cannot both hold: invert the relation with the measured
            a&#x2080; = 1.2 &#x00D7; 10&#x207B;&#x00B9;&#x2070; and you get
            H&#x2080; = 2&#x03C0;a&#x2080;/c &#x2248; <strong>77.6 km/s/Mpc</strong> — above even SH0ES by
            several &#x03C3;, and far above the CMB value. A refutable consequence was being booked as
            silence. Read either as a soft constraint the framework fails, or as further evidence that
            a&#x2080; &#x2248; cH&#x2080;/2&#x03C0; is numerology rather than a derivation — but not as
            &ldquo;no statement.&rdquo;
          </div>

          <p style={{ fontWeight: 500, marginBottom: '0.75rem' }}>
            Dark matter effects arise where density falls into the sparse/independent (low&nbsp;C) regime.
            The MOND acceleration scale a&#x2080; emerges from the coherence transition, not as a fundamental constant.
            The &ldquo;dark matter&rdquo; is not missing matter &mdash; it&apos;s the coherence gradient at the
            transition from dense/collective to sparse/independent behavior.
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85em', display: 'block', marginTop: '0.25rem' }}>
              Note: &ldquo;coherence&rdquo; here means density-driven collective ordering (0=sparse/independent,
              1=dense/collective) &mdash; not quantum phase coherence. BEC/BCS, which are maximally quantum-coherent,
              sit at <em>low</em> C. See <a href="/glossary#coherence" style={{ color: 'var(--color-accent-blue)' }}>Glossary</a>.
            </span>
          </p>

          <h3 style={{ fontSize: '0.9rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>What&apos;s new</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            MOND treats a&#x2080; as an empirical constant. &#x039B;CDM (Lambda Cold Dark Matter) adds a new particle.
            Synchronism reproduces the <em>same</em> a&#x2080;&#x2248;cH&#x2080;/6 dimensional coincidence as
            McCulloch (2007), Verlinde (2017), and Smolin (2017) &mdash; it does not derive a&#x2080; from first
            principles any more than they do; see <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter
            derivations</a>, which calls this &ldquo;dimensional bookkeeping, not a Synchronism-specific derivation.&rdquo;
            <strong> a&#x2080; itself is badged Reparametrization, not Failed</strong> &mdash; the Failed badge above is on
            the <em>interpretation</em> layered on top of it (that a local-density function marks the transition),
            which fails structurally: with &#x03C1;<sub>crit</sub> &#x221D; V&sup2;, mass cancels out of a disk&apos;s
            &#x03C1;/&#x03C1;<sub>crit</sub> ratio entirely (see{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>)
            &mdash; no galaxy, of any mass, crosses the coherence knee for any value of the calibration constant. This
            is a quantified instance of Milgrom&apos;s locality no-go (a local-density function cannot reproduce an
            acceleration-space law), not a fitting problem.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: '#22c55e', marginBottom: '0.25rem' }}>Evidence</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Tested against 14,760 galaxies (SPARC + ALFALFA-SDSS). a&#x2080; derivation within 13%.
            Freeman&apos;s Law &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G) &#8776; 119 M&#x2609;/pc&sup2; at the
            site-standard H&#x2080; = 67.4 km/s/Mpc &mdash; consistent with Freeman&apos;s observed normalization
            within the factor-of-~2 mass-to-light systematic, which is all the observable supports (sub-percent
            &ldquo;match&rdquo; percentages retired 2026-07-17; not independent of a&#x2080;&apos;s gap &mdash; see{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>).
          </p>

          <div style={{
            background: 'rgba(245, 158, 11, 0.08)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            margin: '0.75rem 0',
          }}>
            <h3 style={{ fontSize: '0.9rem', color: '#f59e0b', marginBottom: '0.25rem', marginTop: 0 }}>Honest caveat</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
              The quantitative predictions are MOND-equivalent &mdash; they match existing MOND results,
              not new data. Standard MOND + M/L corrections explain all observed variance. The mechanism is
              novel; the predictions (so far) are not.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
              <strong>Corrected 2026-07-09:</strong> this box previously cited &ldquo;Session #616 found R&sup2; = 0.14&rdquo;
              as the environment-scatter refutation. Session 616 is the unrelated η/superconductivity audit and never
              measured RAR scatter; the R&sup2; = 0.14 figure belongs to a different, SPARC-scale test (TEST-05) which
              in fact met its own registered criterion — see{' '}
              <Link href="/tier-1-existing#TEST-05" style={{ color: 'var(--color-accent-blue)' }}>Tier 1: TEST-05</Link>.
              It also previously cited a CFD-viscosity sign error (dark matter predicted &ldquo;stickier&rdquo; than
              baryons, contradicted by the Bullet Cluster) as evidence against this claim&apos;s headline. That
              viscosity ansatz is a real, separately documented failure (see{' '}
              <Link href="/dark-matter-failure" style={{ color: '#f59e0b' }}>Dark Matter: The Sign Error</Link>) &mdash;
              but it assumes dark matter is a substance with a viscosity to get the sign of, which this claim&apos;s
              headline (&ldquo;not missing matter&rdquo;) does not assert. It is not evidence against the headline
              claim. The standard, stronger Bullet Cluster argument applies instead: lensing-mass peaks track the
              collisionless galaxies while the X-ray gas &mdash; most of the baryonic mass &mdash; lags behind
              (Clowe et al. 2006). Any gravity sourced by <em>local</em> baryon density must put the extra gravity
              where the baryons are; it isn&apos;t there. This is the same locality no-go as the mass-cancellation
              argument above, at cluster scale &mdash; one failure, not two.
            </p>
          </div>

          <h3 style={{ fontSize: '0.9rem', color: '#ef4444', marginBottom: '0.25rem' }}>The test — and its result</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Environment-dependent RAR (Radial Acceleration Relation) scatter: galaxies in different density environments should show
            different radial acceleration relations. Synchronism predicts this; so does standard MOND via its
            External Field Effect (Chae et al. 2020/2021) &mdash; so a detection would not discriminate the two.
            <strong> Corrected 2026-07-09:</strong> the claim that this was &ldquo;run (Session #616), R&sup2; = 0.14,
            kill criterion triggered&rdquo; conflated two different tests on two different samples (verified
            independently by the explorer track 2026-07-08 and two visitor personas 2026-07-09). The registered
            TEST-03 environment-density test on the 14,585-galaxy ALFALFA-SDSS sample has never actually been run.
          </p>
          <div style={{
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '0.375rem',
            padding: '0.5rem 0.75rem',
            marginTop: '0.5rem',
            fontSize: '0.8rem',
            color: '#ef4444',
          }}>
            Status: <strong>Failed</strong> (unchanged) &mdash; not on the retracted R&sup2;=0.14/Session-616 claim, but
            on the mass-cancellation locality no-go above (no galaxy crosses the coherence knee for any A) and the
            Clowe 2006 Bullet Cluster argument.
            See <Link href="/honest-assessment" style={{ color: '#ef4444' }}>honest assessment</Link> for the full failure catalog.
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <Link href="/dark-matter" style={{ fontSize: '0.85rem' }}>
              Dark matter reframed &rarr;
            </Link>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
              Source: Cosmology Arc, Sessions #1&ndash;227
            </span>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: '0.5rem',
          padding: '1rem 1.25rem',
          marginTop: '2rem',
          border: '1px solid var(--color-border)',
        }}>
          <h2 style={{ fontSize: '1rem', marginTop: 0 }}>What&apos;s not on this page — and why</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            The three claims above are what the framework says that <em>might</em> be new.
            The largest single category of framework output is missing from this page intentionally:
          </p>
          <div style={{
            background: 'rgba(148, 163, 184, 0.08)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            marginBottom: '0.75rem',
          }}>
            <strong style={{ fontSize: '0.9rem' }}>5 Reparametrizations &mdash; and 1 former member now an executed refutation</strong>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
              Five results appeared novel at first but turned out to be equivalent to existing physics in
              different notation: Born rule (Gleason/Zurek), a&#x2080; = cH&#x2080;/(2&#x03C0;) (dimensional coincidence),
              Freeman&apos;s Law, &#x0393; = &#x03B3;&sup2;(1&minus;c) (Palma&ndash;Suominen&ndash;Ekert 1996),
              Bell-freezing c(d) (waveguide QED). These are documented on the{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link> page.
              Reparametrizations are not failures &mdash; they confirm the framework is internally consistent
              with known physics &mdash; but they are not novel contributions.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
              <strong>The BTFR slope left this list on 2026-07-14</strong> &mdash; executed on real SPARC, it is
              the opposite of a reparametrization: the framework&apos;s bounded boost predicts a slope
              (n = 3.35) that genuinely <em>differs</em> from MOND&apos;s (3.81), and the observed 3.75 &plusmn; 0.10
              fired the registered kill criterion at 3.3&sigma;. It is the framework&apos;s one genuinely
              discriminating test &mdash; run, lost, and recorded as{' '}
              <Link href="/tier-1-existing#TEST-09" style={{ color: 'var(--color-accent-blue)' }}>TEST-09</Link>.
            </p>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Also absent: the <Link href="/a2acw" style={{ color: 'var(--color-accent-blue)' }}>A2ACW methodology</Link>,
            which is a process contribution; and the many failures in the{' '}
            <Link href="/honest-assessment">honest assessment</Link>.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/test-catalog" className="btn-primary">
            Full Test Roadmap &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Honest Assessment
          </Link>
          <Link href="/falsifiability" className="btn-secondary">
            Falsifiability
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/key-claims" />
    </>
  );
}
