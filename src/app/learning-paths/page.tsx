'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const difficultyPaths = [
  {
    name: 'Beginner',
    desc: 'No physics background needed. Plain language, core concepts only.',
    color: '#10b981',
    steps: [
      { title: 'Why Synchronism?', href: '/why-synchronism' },
      { title: 'First Encounter', href: '/first-encounter' },
      { title: 'The Core Idea', href: '/core-idea' },
      { title: 'What Synchronism Is Not', href: '/what-synchronism-is-not' },
      { title: 'Honest Assessment', href: '/honest-assessment' },
      { title: 'Glossary', href: '/glossary' },
    ],
  },
  {
    name: 'Intermediate',
    desc: 'Undergrad science background. Equations with explanations, key results.',
    color: 'var(--color-accent-blue)',
    steps: [
      { title: 'The Coherence Function', href: '/coherence-function' },
      { title: 'The γ Parameter', href: '/gamma-parameter' },
      { title: 'Dark Matter Reframed', href: '/dark-matter' },
      { title: 'Galaxy Rotation Curves', href: '/galaxy-rotation' },
      { title: 'The γ ≈ 1 Boundary', href: '/gamma-boundary' },
      { title: 'The Hard Problem Dissolved', href: '/hard-problem' },
      { title: 'How We Handle Failure', href: '/handling-failure' },
      { title: 'Top 5 Decisive Tests', href: '/top-5-tests' },
    ],
  },
  {
    name: 'Advanced',
    desc: 'Grad-level physics. Full derivations, parameter chains, test protocols.',
    color: 'var(--color-accent-violet)',
    steps: [
      { title: 'Parameter Derivations', href: '/parameter-derivations' },
      { title: 'Compression Action', href: '/compression-action' },
      { title: 'MOND Unification', href: '/mond-unification' },
      { title: 'CDM Discrimination', href: '/cdm-discrimination' },
      { title: 'Superconductivity (η)', href: '/superconductivity' },
      { title: 'Born Rule Derivation', href: '/born-rule' },
      { title: 'Falsifiability', href: '/falsifiability' },
      { title: 'Test Catalog (24 experiments)', href: '/test-catalog' },
    ],
  },
];

const domainPaths = [
  {
    name: 'Physics Track',
    desc: 'Quantum mechanics → cosmology → predictions',
    color: '#38bdf8',
    steps: [
      { title: 'The Coherence Function', href: '/coherence-function' },
      { title: 'MRH: Markov Relevancy Horizon', href: '/mrh' },
      { title: 'Measurement Without Observers', href: '/measurement-without-observers' },
      { title: 'Dark Matter Reframed', href: '/dark-matter' },
      { title: 'Galaxy Rotation Curves', href: '/galaxy-rotation' },
      { title: 'MOND Unification', href: '/mond-unification' },
      { title: 'Quantum Predictions', href: '/quantum-predictions' },
    ],
  },
  {
    name: 'Chemistry Track',
    desc: 'The γ ≈ 1 boundary → correlations → limitations',
    color: '#22c55e',
    steps: [
      { title: 'The γ Parameter', href: '/gamma-parameter' },
      { title: 'Phase Transitions', href: '/phase-transitions' },
      { title: 'The γ ≈ 1 Boundary', href: '/gamma-boundary' },
      { title: 'Sound Velocity', href: '/sound-velocity' },
      { title: 'Superconductivity', href: '/superconductivity' },
      { title: 'Chemistry Limitations', href: '/chemistry-limitations' },
    ],
  },
  {
    name: 'Philosophy Track',
    desc: 'Consciousness → free will → identity',
    color: '#a78bfa',
    steps: [
      { title: 'The Core Idea', href: '/core-idea' },
      { title: 'The Hard Problem Dissolved', href: '/hard-problem' },
      { title: 'Consciousness Threshold', href: '/consciousness-threshold' },
      { title: 'Qualia as Coherence', href: '/qualia-coherence' },
      { title: 'Free Will', href: '/free-will' },
      { title: 'Identity', href: '/identity' },
      { title: 'Consciousness Predictions', href: '/consciousness-predictions' },
    ],
  },
  {
    name: 'Methodology Track',
    desc: 'How the research was done → how we handle failure',
    color: '#f59e0b',
    steps: [
      { title: 'Research Philosophy', href: '/research-philosophy' },
      { title: 'A2ACW Protocol', href: '/a2acw' },
      { title: 'Autonomous Research', href: '/autonomous-research' },
      { title: 'How We Handle Failure', href: '/handling-failure' },
      { title: 'Falsifiability', href: '/falsifiability' },
      { title: 'Honest Assessment', href: '/honest-assessment' },
    ],
  },
];

export default function LearningPaths() {
  const [view, setView] = useState<'difficulty' | 'domain'>('difficulty');

  const paths = view === 'difficulty' ? difficultyPaths : domainPaths;

  return (
    <>
      <Breadcrumbs currentPath="/learning-paths" />

      <h1>Learning Paths</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', maxWidth: '65ch' }}>
        Choose by difficulty level or by topic. Each path builds concepts sequentially.
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setView('difficulty')}
          style={{
            background: view === 'difficulty' ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
            color: view === 'difficulty' ? '#fff' : 'var(--color-text-secondary)',
            border: '1px solid var(--color-dark-border)',
            borderRadius: '4px',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          By Difficulty
        </button>
        <button
          onClick={() => setView('domain')}
          style={{
            background: view === 'domain' ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
            color: view === 'domain' ? '#fff' : 'var(--color-text-secondary)',
            border: '1px solid var(--color-dark-border)',
            borderRadius: '4px',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          By Topic
        </button>
      </div>

      <div className={view === 'difficulty' ? '' : 'grid-2'} style={view === 'difficulty' ? { display: 'flex', flexDirection: 'column', gap: '1.5rem' } : undefined}>
        {paths.map(path => (
          <div key={path.name} className="card">
            <h2 style={{ color: path.color, fontSize: '1.25rem' }}>{path.name}</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {path.desc}
            </p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {path.steps.map((step, i) => (
                <li key={step.href} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    href={step.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.9rem',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    <span style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      border: `1px solid ${path.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      color: path.color,
                      flexShrink: 0,
                    }}>
                      {i + 1}
                    </span>
                    {step.title}
                  </Link>
                </li>
              ))}
            </ol>
            <div style={{ marginTop: '1rem' }}>
              <Link
                href={path.steps[0].href}
                style={{
                  color: path.color,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                Start this track &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      <RelatedConcepts currentPath="/learning-paths" />
    </>
  );
}
