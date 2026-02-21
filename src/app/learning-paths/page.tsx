'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const paths = [
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
  return (
    <>
      <Breadcrumbs currentPath="/learning-paths" />

      <h1>Learning Paths</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '65ch' }}>
        Choose a track that matches your interest. Each path builds concepts sequentially,
        so earlier steps provide context for later ones.
      </p>

      <div className="grid-2">
        {paths.map(path => (
          <div key={path.name} className="card">
            <h2 style={{ color: path.color, fontSize: '1.25rem' }}>{path.name}</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {path.desc}
            </p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'step' }}>
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
