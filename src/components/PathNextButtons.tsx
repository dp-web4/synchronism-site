import Link from 'next/link';
import { getPathMemberships, type LearningPath, type PathStep } from '@/lib/paths';

// Bottom-of-page Next buttons, one per learning path the page belongs to.
// Added 2026-10-04: /coherence-function carried two step counters (Intermediate 1/8, Physics 1/7)
// but one hand-written Next button, so a Physics-track reader silently left their track.
// Pages on a single path get one button, as before; a hand-written button cannot drift from lib/paths.ts.
export default function PathNextButtons({ currentPath }: { currentPath: string }) {
  const seen = new Set<string>();
  const nexts: { path: LearningPath; next: PathStep }[] = [];
  for (const { path, stepIndex } of getPathMemberships(currentPath)) {
    const next = path.steps[stepIndex + 1];
    if (next && !seen.has(next.href)) {
      seen.add(next.href);
      nexts.push({ path, next });
    }
  }
  const multi = nexts.length > 1;
  return (
    <>
      {nexts.map(({ path, next }) => (
        <Link key={path.name} href={next.href} className="btn-primary">
          {multi ? `Next on ${path.name}${path.kind === 'difficulty' ? ' Path' : ''}: ` : 'Next: '}
          {next.title} &rarr;
        </Link>
      ))}
    </>
  );
}
