import Link from 'next/link';
import { getPathMemberships } from '@/lib/paths';

// Shared step-navigation chrome for learning-path pages.
// Renders one compact line per path containing the current page:
// "Beginner Path · Step 2 of 6 · ← Prev · Next: The Core Idea →".
// Requested 2026-07-18 after two visitor personas independently found no path
// was followable end-to-end from its own chrome.
export default function PathNav({ currentPath }: { currentPath: string }) {
  const memberships = getPathMemberships(currentPath);
  if (memberships.length === 0) return null;

  return (
    <nav aria-label="Learning path navigation" style={{ marginBottom: '1rem' }}>
      {memberships.map(({ path, stepIndex }) => {
        const prev = stepIndex > 0 ? path.steps[stepIndex - 1] : null;
        const next = stepIndex < path.steps.length - 1 ? path.steps[stepIndex + 1] : null;
        return (
          <div
            key={path.name}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
              padding: '0.35rem 0.75rem',
              borderLeft: `2px solid ${path.color}`,
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '0 0.25rem 0.25rem 0',
              marginBottom: '0.35rem',
            }}
          >
            <Link href="/learning-paths" style={{ color: path.color, fontWeight: 600, textDecoration: 'none' }}>
              {path.name}
              {path.kind === 'difficulty' ? ' Path' : ''}
            </Link>
            <span>
              Step {stepIndex + 1} of {path.steps.length}
            </span>
            {prev && (
              <Link href={prev.href} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                &larr; Prev: {prev.title}
              </Link>
            )}
            {next ? (
              <Link href={next.href} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                Next: {next.title} &rarr;
              </Link>
            ) : (
              <span>Final step</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
