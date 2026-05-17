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
          Synchronism maps presence to coherence using a single function across 80 orders of magnitude.
          Some predictions work. Some fail. One was refuted by external data. All are documented honestly.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/first-encounter" className="btn-primary">
            Start Exploring
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            See What Failed
          </Link>
          <Link href="/what-synchronism-is-not" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center' }}>
            What this is not &rarr;
          </Link>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: '0.75rem' }}>
          <strong>New here?</strong> Start with <Link href="/first-encounter" style={{ color: 'var(--color-accent-blue)' }}>First Encounter</Link>.{' '}
          <strong>Physicist?</strong> Jump to <Link href="/key-claims" style={{ color: 'var(--color-accent-blue)' }}>Key Claims</Link> or <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.{' '}
          <strong>Researcher?</strong> <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1 tests</Link> are the entry point.
        </p>
      </section>

      {/* Plain-language framing first */}
      <section style={{ marginBottom: '1.5rem', maxWidth: '65ch' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
          <strong>Coherence</strong> is a measure of how collectively a group of elements behaves.
          When elements act independently (like stars in a galaxy), coherence is low. When they
          move in lockstep (like electrons in a superconductor), coherence is high. Synchronism
          asks: can one equation capture this transition across all of physics?
        </p>
      </section>

      {/* The Equation */}
      <section className="card card-highlight" style={{ marginBottom: '3rem' }}>
        <div className="equation" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </div>
        <p style={{ textAlign: 'center', color: 'var(--color-accent-warm)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem' }}>
          &ldquo;Coherence is a smooth S-curve from quantum to classical, shaped by how many
          particles act together and how dense the system is.&rdquo;
        </p>
        <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--color-accent-violet)' }}>C</strong> = coherence (0 = quantum, 1 = classical) &nbsp;
            <strong style={{ color: 'var(--color-accent-violet)' }}>&#x03B3;</strong> = 2/&#x221A;N<sub>corr</sub> &nbsp;
            <strong style={{ color: 'var(--color-accent-violet)' }}>&#x03C1;<sub>crit</sub></strong> = critical presence threshold
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            The tanh shape is <em>motivated</em> by Landau-class mean-field theory &mdash; a phenomenological choice, not a derived result. The log-density argument is physically motivated. Three parameters (A, B, &#x03B2;) are fitted to data.{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>See derivations &rarr;</Link>
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            &#x03C1; is <em>presence</em> &mdash; the compatible structural elements available within a system&apos;s
            relevancy boundary. Physical density is one form of presence, but it also encompasses
            temperature, energy levels, catalytic surfaces, and other factors that support emergence.{' '}
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
            Start here
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
            <div style={{
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: '0.375rem',
              padding: '0.7rem 1rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
            }}>
              <strong style={{ color: '#f59e0b' }}>Methodology note:</strong>{' '}
              This site was developed via 3,308 A2ACW sessions &mdash; AI agents stress-testing each other&apos;s claims. The adversarial agents share the same training distribution and{' '}
              <strong>cannot substitute for out-of-distribution evaluation by domain experts.</strong>{' '}
              The <strong>1.4% internal-consistency survival rate</strong> (not a discovery rate &mdash; see methodology) and public failure log are the protocol&apos;s honest outputs.{' '}
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
              <span>Predictions confirmed by independent data: <strong style={{ color: 'var(--color-text-secondary)' }}>0</strong></span>
              <span>Refuted by external data: <strong style={{ color: '#ef4444' }}>1</strong> (DESI fσ₈ — sign reversed)</span>
              <span>Withdrawn: <strong style={{ color: '#f59e0b' }}>1</strong> (BAO modulation)</span>
              <span>Reparametrizations audited: <strong style={{ color: 'var(--color-text-secondary)' }}>6 of 6</strong> (all demoted from &ldquo;Validated&rdquo;)</span>
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)', marginLeft: 'auto', whiteSpace: 'nowrap' }}>Full ledger &rarr;</Link>
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
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>14,760</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Galaxies analyzed</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.2rem' }}>175 SPARC + 14,585 ALFALFA-SDSS</div>
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
                  MRH crossing replaces wave function collapse. Born rule: equivalent to Zurek/Carroll-Sebens
                  (reparametrization, no novel quantum prediction yet). Ontological reframe, not a new formula.
                </p>
                <span className="badge badge-reparametrization">Reparametrization — No Novel Prediction Yet</span>
              </Link>

              <Link href="/galaxy-rotation" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Cosmology</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Galaxy rotation tested on 14,760 galaxies (MOND reparametrization + environment
                  scatter). Dark matter mechanism: structural failure (Bullet Cluster sign error,
                  March 2026).
                </p>
                <span className="badge badge-speculative">Structural Problems</span>
              </Link>

              <Link href="/gamma-boundary" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Chemistry</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  1,703 phenomena at the &#x03B3; &#x2248; 1 boundary. Sound velocity r = 0.982.
                  Melting point prediction: 53% error. The 89% consistency rate reflects
                  Landau-universal sigmoid behavior near criticality — not a Synchronism-unique prediction.
                </p>
                <span className="badge badge-speculative">89% Boundary-Consistent</span>
              </Link>

              <Link href="/hard-problem" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Consciousness</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Hard problem reframed, consciousness threshold conjecture at C &#x2248; 0.50.
                  D, S, and f in C = f(&#x03B3;, D, S) are not yet operationally defined &mdash;
                  this is a typed signature, not a tested equation.
                </p>
                <span className="badge badge-speculative">Threshold Conjecture — Functional Form Open</span>
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
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Step 1</div>
                <h3>Why Synchronism?</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>The question that started it all</p>
              </Link>
              <Link href="/first-encounter" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Step 2</div>
                <h3>First Encounter</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>10-minute guided introduction</p>
              </Link>
              <Link href="/core-idea" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Step 3</div>
                <h3>The Core Idea</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>One equation, every scale</p>
              </Link>
              <Link href="/test-catalog" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Deep dive</div>
                <h3>Test Catalog</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>24 experiments: what would break this?</p>
              </Link>
              <Link href="/research-philosophy" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Methodology</div>
                <h3>Research Philosophy</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>How we work, why we document failures</p>
              </Link>
              <Link href="/honest-assessment" className="card" style={{ textDecoration: 'none' }}>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Shortcut</div>
                <h3>Honest Assessment</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>What works, what failed, what&apos;s unknown</p>
              </Link>
            </div>
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
