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
        </div>
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
            Derived from first principles. Not fitted to data.{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>See derivations &rarr;</Link>
          </p>
        </div>
      </section>

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
