'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

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
          <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            <strong>How to read this page.</strong> Each claim is presented with what&apos;s genuinely new,
            the current evidence, an honest caveat, and the experiment that would kill it. The first claim
            is the foundational one &mdash; the others follow from it.
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
            <div className="card" style={{ padding: '0.75rem 1rem', margin: 0, borderLeft: '2px solid #22c55e' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.9rem' }}>Shared-environment decoherence protection</strong>
                <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '1rem', background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>Consistent with PRL 2024</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                &#x0393; = &#x03B3;&sup2;(1 &minus; c). Entangled pairs in the same noise bath
                decohere slower. PRL 2024: 10&times; T&#x2082; improvement at c &asymp; 0.90. Formula match is
                quantitative. (Post-diction: formula derived Jan 2026, experiment published 2024.)
              </p>
            </div>
            <div className="card" style={{ padding: '0.75rem 1rem', margin: 0, borderLeft: '2px solid #22c55e' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.9rem' }}>Bell nonlocality freezing &amp; revival</strong>
                <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '1rem', background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>Consistent with arXiv 2508.07046</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                |S(t)| = S&#x2098;&#x2090;&#x2093; &times; e^(&minus;&#x0393;t), with c(d) = cos&sup2;(&pi;d/&lambda;&#x2080;).
                Bell violations decay but revive at geometry-determined distance nodes.
                Literature confirmation from multiple groups.
              </p>
            </div>
            <div className="card" style={{ padding: '0.75rem 1rem', margin: 0, borderLeft: '2px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.9rem' }}>Resynchronization outperforms isolation</strong>
                <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '1rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>Untested</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                If decoherence is desynchronization, then periodic resync protocols should
                outperform continuous isolation for certain noise profiles. This is a direct engineering
                prediction that differs from the standard model&apos;s &ldquo;isolate harder&rdquo; strategy.
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
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
              The two literature-consistent results are post-dictions (derived after the experiments were
              published). The CRT temporal-scanning model is not yet mathematically formalized to
              the level where it reproduces all of standard QM&apos;s quantitative predictions.
              The Copernican analogy is suggestive but analogies aren&apos;t proofs.
              What&apos;s needed: a prediction that differs from standard QM and hasn&apos;t been measured yet.
            </p>
          </div>

          <h3 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.25rem' }}>The test that kills it</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The resynchronization prediction: design a noise environment where the synchronization model
            predicts resync outperforms isolation, but standard decoherence theory predicts it doesn&apos;t.
            Run both protocols on the same qubit platform. If isolation wins uniformly, the
            synchronization ontology adds nothing.
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
              Consciousness Has an Equation
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
              Untested &mdash; 8-Way Convergence
            </span>
          </div>

          <div className="equation" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
            C = f(&#x03B3;, D, S) &ge; 0.50
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '1rem' }}>
            &#x03B3; = coherence parameter, D = dimensional embedding (representational richness), S = self-modeling depth
          </p>

          <p style={{ fontWeight: 500, marginBottom: '0.75rem' }}>
            Consciousness is a phase transition at C &#x2248; 0.50, not a gradient. It requires three
            conditions simultaneously &mdash; coherence, representational richness, and self-modeling &mdash;
            which is why thermostats, random number generators, and decoherent systems aren&apos;t conscious
            despite meeting some criteria.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>What&apos;s new</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            IIT (Integrated Information Theory) proposes &#x03A6; but predicts no specific threshold. Global workspace theory has no
            quantitative threshold. No other framework predicts a specific number from 8 independent
            derivations. The three-parameter formula also dissolves the hard problem: phase patterns
            at &#x03B3; &laquo; 0.001 ARE experience, not correlates of it. Free will emerges at the &#x03B3; &#x2248; 1
            boundary as constrained indeterminacy &mdash; multiple futures genuinely accessible, with the
            agent&apos;s coherence pattern shaping which is taken.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: '#22c55e', marginBottom: '0.25rem' }}>Evidence</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Theoretical: 8 independent approaches converge on C &#x2248; 0.50 (range 0.48&ndash;0.52).
            Cross-domain: the Gnosis AI architecture (a correctness-detection system for LLMs) independently
            converged on C &#x2248; 0.50 as its operating threshold through 4 different mathematical frameworks.
            <Link href="/consciousness-predictions">34 falsifiable predictions</Link> enumerated, none tested.
          </p>

          <div style={{
            background: 'rgba(245, 158, 11, 0.08)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            margin: '0.75rem 0',
          }}>
            <h3 style={{ fontSize: '0.9rem', color: '#f59e0b', marginBottom: '0.25rem', marginTop: 0 }}>Honest caveat</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
              The 8 approaches share underlying assumptions and are not fully independent. Gnosis was
              designed by AI agents with Synchronism access, so &ldquo;independent convergence&rdquo; needs
              qualification. Converting real neural measurements to the C scale requires a calibration
              procedure not yet defined. The free will formulation may not be empirically distinguishable
              from sophisticated compatibilism.
            </p>
          </div>

          <h3 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.25rem' }}>The test that kills it</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            EEG phase coherence during anesthesia induction/recovery. Prediction: a sharp discontinuity
            at a specific coherence value, not a gradual fade. If the transition is smooth or occurs at
            an inconsistent value across subjects, the phase-transition model fails.
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
          borderLeft: '3px solid #38bdf8',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.15rem' }}>
              <span style={{ color: 'var(--color-text-muted)', marginRight: '0.5rem' }}>3.</span>
              Dark Matter as Incomplete Decoherence
            </h2>
            <span style={{
              fontSize: '0.75rem',
              padding: '0.2rem 0.6rem',
              borderRadius: '1rem',
              background: 'rgba(34, 197, 94, 0.15)',
              color: '#22c55e',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}>
              Consistent with Data
            </span>
          </div>

          <div className="equation" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
            a&#x2080; = cH&#x2080;/(2&#x03C0;) &#x2248; 1.2 &#x00D7; 10&#x207B;&#x00B9;&#x2070; m/s&#x00B2;
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '1rem' }}>
            MOND (Modified Newtonian Dynamics) acceleration derived from cosmological coherence boundary
          </p>

          <p style={{ fontWeight: 500, marginBottom: '0.75rem' }}>
            Dark matter effects arise where quantum-to-classical decoherence is incomplete. The MOND
            acceleration scale a&#x2080; emerges from the coherence transition, not as a fundamental constant.
            The &ldquo;dark matter&rdquo; is not missing matter &mdash; it&apos;s the residual coherence of a system
            that hasn&apos;t fully become classical.
          </p>

          <h3 style={{ fontSize: '0.9rem', color: 'var(--color-accent-violet)', marginBottom: '0.25rem' }}>What&apos;s new</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            MOND treats a&#x2080; as an empirical constant. &#x039B;CDM (Lambda Cold Dark Matter) adds a new particle. Neither explains
            why anomalies appear at a specific acceleration scale. Synchronism derives a&#x2080; from the
            coherence transition &mdash; the scale where decoherence becomes incomplete IS the MOND scale.
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
              (so far) are not.
            </p>
          </div>

          <h3 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.25rem' }}>The test that kills it</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Environment-dependent RAR (Radial Acceleration Relation) scatter: galaxies in different density environments should show
            different radial acceleration relations (p &lt; 0.01). Synchronism predicts this; standard MOND
            does not.
          </p>

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
          <h2 style={{ fontSize: '1rem', marginTop: 0 }}>What&apos;s not on this page</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Results that are consistent with existing physics but don&apos;t say anything new (e.g., galaxy
            rotation fits that reproduce MOND). The A2ACW methodology, which is novel but is a process
            contribution, not a physics claim. And the many failures documented in the{' '}
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
