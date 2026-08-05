import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import { learningPaths } from '@/lib/paths';

// Path data moved to src/lib/paths.ts (2026-07-18) so the per-page PathNav
// component and this index render from one source of truth.
// 2026-07-22: both groups render statically (the old client-side toggle hid the
// topic tracks from no-JS readers and crawlers, breaking the nav's promise of
// Physics/Chemistry/Philosophy journeys).
const difficultyPaths = learningPaths.filter(p => p.kind === 'difficulty');
const domainPaths = learningPaths.filter(p => p.kind === 'domain');

type PathEntry = (typeof learningPaths)[number];

function PathCard({ path }: { path: PathEntry }) {
  return (
    <div className="card">
      <h3 style={{ color: path.color, fontSize: '1.25rem' }}>
        <Link href={path.steps[0].href} style={{ color: path.color, textDecoration: 'none' }}>{path.name}</Link>
        {path.timeEstimate && (
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 400, marginLeft: '0.6rem' }}>
            {path.steps.length} steps &middot; {path.timeEstimate}
          </span>
        )}
      </h3>
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
  );
}

export default function LearningPaths() {
  return (
    <>
      <Breadcrumbs currentPath="/learning-paths" />

      <h1>Learning Paths</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '65ch' }}>
        Choose by difficulty level or by topic. Each path builds concepts sequentially.
      </p>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '65ch', fontSize: '0.85rem' }}>
        <strong>The two groupings are not equivalent</strong> (corrected 2026-08-05 &mdash; this page previously
        promised they &ldquo;cover the same pages,&rdquo; which its own link lists contradict). The difficulty
        paths reach 10 pages no topic track does &mdash; including{' '}
        <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>,{' '}
        <Link href="/born-rule" style={{ color: 'var(--color-accent-blue)' }}>Born Rule</Link>,{' '}
        <Link href="/compression-action" style={{ color: 'var(--color-accent-blue)' }}>Compression &amp; Action</Link> and{' '}
        <Link href="/cdm-discrimination" style={{ color: 'var(--color-accent-blue)' }}>CDM Discrimination</Link> &mdash;
        and the topic tracks reach 14 the difficulty paths don&apos;t. <strong>Advanced is the only path that
        covers the derivation chain</strong>; topic tracks are entry points, not complete coverage. Separately,
        none of the eight paths currently include an{' '}
        <Link href="/interactive-tools" style={{ color: 'var(--color-accent-blue)' }}>interactive tool</Link> &mdash;
        if you want the equation explained rather than stated, start at{' '}
        <Link href="/equation-walkthrough" style={{ color: 'var(--color-accent-blue)' }}>Equation Anatomy</Link>.
      </p>

      <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>By Difficulty</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {difficultyPaths.map(path => (
          <PathCard key={path.name} path={path} />
        ))}
      </div>

      <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>By Topic</h2>
      <div className="grid-2">
        {domainPaths.map(path => (
          <PathCard key={path.name} path={path} />
        ))}
      </div>

      <RelatedConcepts currentPath="/learning-paths" />
    </>
  );
}
