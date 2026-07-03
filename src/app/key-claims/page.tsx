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
              <ValidationBadge status="untested" label="Untested — ontological reframe" />
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
              Speculative &mdash; geometric artifact
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
              That specific value has since been refuted in internal (unpublished, publicly archived) analysis: the companion program{' '}
              <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
              (which began from this 0.50 seed) tested it against multi-model coherence data and rejected
              it at p&nbsp;&lt;&nbsp;0.0001, finding C&nbsp;&#x2248;&nbsp;0.64 &mdash; which was also rejected at p&nbsp;&lt;&nbsp;0.0001.
              No threshold survives. The 34 dependent neural predictions are mis-anchored.
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
              <strong>Direct empirical refutation of the 0.50 value:</strong> the companion autonomous
              program <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
              (Session 63) &mdash; which <em>started from this very C&nbsp;&#x2248;&nbsp;0.50 seed</em> &mdash; tested
              it against multi-model coherence data and <strong>rejected it at p&nbsp;&lt;&nbsp;0.0001</strong>,
              with the data clustering near <strong>C&nbsp;&#x2248;&nbsp;0.64</strong> &mdash; which was also rejected at p&nbsp;&lt;&nbsp;0.0001.
              No threshold survives.
              Because the refuting program was inclined to confirm the seed and didn&apos;t, the refutation is
              more credible, not less. The <Link href="/consciousness-predictions" style={{ color: 'var(--color-accent-blue)' }}>34 predictions</Link>{' '}
              keyed to 0.50 are mis-anchored; re-keying to&nbsp;C&nbsp;&#x2248;&nbsp;0.64 is not possible either (also rejected). Both threshold values are refuted.
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
            a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.08 &#x00D7; 10&#x207B;&#x00B9;&#x2070; m/s&#x00B2;
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '1rem' }}>
            MOND (Modified Newtonian Dynamics) acceleration from dimensional analysis
            (observed: 1.2 &#x00D7; 10&#x207B;&#x00B9;&#x2070; m/s&#x00B2; &mdash; a ~10% miss, not an exact hit)
          </p>

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
            MOND treats a&#x2080; as an empirical constant. &#x039B;CDM (Lambda Cold Dark Matter) adds a new particle. Neither explains
            why anomalies appear at a specific acceleration scale. Synchronism re-derives a&#x2080; from the
            coherence transition via dimensional analysis &mdash; the same relation McCulloch (2007), Verlinde (2017),
            and Smolin (2017) each arrive at independently. The novel contribution is the <em>interpretation</em>:
            that this scale marks the density-coherence transition — where systems cross from dense/collective to sparse/independent behavior — not just a coincidence of constants.
            See <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</a> for honest accounting.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: '#22c55e', marginBottom: '0.25rem' }}>Evidence</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Tested against 14,760 galaxies (SPARC + ALFALFA-SDSS). a&#x2080; derivation within 10%.
            Freeman&apos;s Law &#x03A3;&#x2080; = cH&#x2080;/(4&#x03C0;&sup2;G) derived independently, 12% error.
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
              not new data. Session #616 found R&sup2; = 0.14 for environment-dependent scatter. Standard
              MOND + M/L corrections explain all observed variance. The mechanism is novel; the predictions
              (so far) are not. Stress testing (March 2026) found a sign error: the CFD viscosity mapping
              predicts dark matter should be MORE sticky than baryons, but the Bullet Cluster shows it is
              LESS sticky. This is a structural failure, not a parameter problem.
            </p>
          </div>

          <h3 style={{ fontSize: '0.9rem', color: '#ef4444', marginBottom: '0.25rem' }}>The test — and its result</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Environment-dependent RAR (Radial Acceleration Relation) scatter: galaxies in different density environments should show
            different radial acceleration relations (p &lt; 0.01). Synchronism predicts this; standard MOND
            does not. <strong>This test was run (Session #616, ALFALFA-SDSS). Result: R&sup2; = 0.14, against a
            pre-registered kill criterion of R&sup2; &lt; 0.20. The kill criterion was triggered.</strong>{' '}
            The prediction &ldquo;differs from MOND&rdquo; is technically correct &mdash; but the
            difference is in the wrong direction: Synchronism predicted an effect MOND lacks,
            and the effect is not present in the data. This is a refutation of the novel prediction,
            not a MOND-equivalent reparametrization.
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
            Status: <strong>Failed</strong> — R&sup2; = 0.14 &lt; 0.20 kill criterion (ALFALFA-SDSS, Session #616)
            &middot; Follow-up: mechanism under revision.
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
            <strong style={{ fontSize: '0.9rem' }}>6 Reparametrizations</strong>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
              Six results appeared novel at first but turned out to be equivalent to existing physics in
              different notation: Born rule (Gleason/Zurek), a&#x2080; = cH&#x2080;/(2&#x03C0;) (dimensional coincidence),
              Freeman&apos;s Law, BTFR slope, &#x0393; = &#x03B3;&sup2;(1&minus;c) (Palma&ndash;Suominen&ndash;Ekert 1996),
              Bell-freezing c(d) (waveguide QED). These are documented on the{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link> page.
              Reparametrizations are not failures &mdash; they confirm the framework is internally consistent
              with known physics &mdash; but they are not novel contributions.
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
            Full Test Catalog &rarr;
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
