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
        <p className="eyebrow">A Research Framework</p>
        <h1 className="hero-title">
          What if one equation described reality from quantum to cosmic?
        </h1>
        <p className="hero-subtitle">
          Synchronism maps density to coherence using a single function across 80 orders of magnitude.
          Some predictions work. Some fail. All are documented honestly.
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
      </section>

      {/* Plain-language framing first */}
      <section style={{ marginBottom: '1.5rem', maxWidth: '65ch' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
          <strong>Coherence</strong> is a measure of how collectively a group of particles behaves.
          When particles act independently (like stars in a galaxy), coherence is low. When they
          move in lockstep (like electrons in a superconductor), coherence is high. Synchronism
          asks: can one equation capture this transition across all of physics?
        </p>
      </section>

      {/* The Equation */}
      <section className="card card-highlight" style={{ marginBottom: '3rem' }}>
        <div className="equation" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          C(&#x03C1;) = tanh(&#x03B3; &middot; log(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </div>
        <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--color-accent-violet)' }}>C</strong> = coherence (0 = quantum, 1 = classical) &nbsp;
            <strong style={{ color: 'var(--color-accent-violet)' }}>&#x03B3;</strong> = 2/&#x221A;N<sub>corr</sub> &nbsp;
            <strong style={{ color: 'var(--color-accent-violet)' }}>&#x03C1;<sub>crit</sub></strong> = transition density
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            The tanh form and &#x03B3; = 2 are derived from mean-field theory. Three parameters (A, B, &#x03B2;) are fitted to data.{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>See derivations &rarr;</Link>
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            The density &#x03C1; is not raw population density but the density of <em>compatible</em> elements
            &mdash; those that can exchange meaningful compressed representations within a shared context boundary.
            What counts as &ldquo;compatible&rdquo; depends on the phenomenon being examined.{' '}
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
            Three claims where this framework says something genuinely new. Quantum mysteries
            reframed as synchronization physics. Consciousness given an equation. Dark matter
            explained without new particles.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--color-accent-violet)' }}>
              <strong>1</strong> new ontology with testable consequences
            </span>
            <span style={{ color: '#f59e0b' }}>
              <strong>1</strong> untested with 8-way convergence
            </span>
            <span style={{ color: '#22c55e' }}>
              <strong>1</strong> consistent with 14,760 galaxies
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
          {/* Quick Stats */}
          <section className="grid-3" style={{ marginBottom: '3rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>3,308</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Research sessions</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>1,703</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Chemical phenomena tested</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-accent-violet)' }}>14,760</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Galaxies analyzed</div>
            </div>
          </section>

          {/* What It Covers */}
          <section style={{ marginBottom: '3rem' }}>
            <h2>What Synchronism Covers</h2>
            <div className="grid-2">
              <Link href="/measurement-without-observers" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Quantum Physics</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Measurement without observers, Born rule derivation, entanglement as coherence.
                  Removes the privileged observer frame from quantum mechanics.
                </p>
                <span className="badge badge-speculative">Framework</span>
              </Link>

              <Link href="/galaxy-rotation" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Cosmology</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Dark matter reframed, galaxy rotation curves tested on 14,760 galaxies,
                  MOND&apos;s a&#x2080; derived from cosmology.
                </p>
                <span className="badge badge-supported">Strongly Supported</span>
              </Link>

              <Link href="/gamma-boundary" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Chemistry</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  1,703 phenomena at the &#x03B3; &#x2248; 1 boundary. Sound velocity correlation r = 0.982.
                  Melting point prediction: 53% error (honest failure).
                </p>
                <span className="badge badge-validated">89% Validated</span>
              </Link>

              <Link href="/hard-problem" className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-accent-blue)' }}>Consciousness</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Hard problem dissolved, consciousness threshold at C &#x2248; 0.50,
                  34 falsifiable predictions. Qualia as coherence resonance patterns.
                </p>
                <span className="badge badge-untested">34 Predictions</span>
              </Link>
            </div>
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
