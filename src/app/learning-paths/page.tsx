'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import { learningPaths } from '@/lib/paths';

// Path data moved to src/lib/paths.ts (2026-07-18) so the per-page PathNav
// component and this index render from one source of truth.
const difficultyPaths = learningPaths.filter(p => p.kind === 'difficulty');
const domainPaths = learningPaths.filter(p => p.kind === 'domain');

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
            <h2 style={{ color: path.color, fontSize: '1.25rem' }}>
              <Link href={path.steps[0].href} style={{ color: path.color, textDecoration: 'none' }}>{path.name}</Link>
            </h2>
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
