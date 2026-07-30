'use client';

import Link from 'next/link';
import { getCategory, getPageInfo } from '@/lib/navigation';

interface BreadcrumbsProps {
  currentPath: string;
}

// Category crumbs link to a hub page when one exists (visitor 2026-07-23:
// an unlinked "Getting Started" crumb read as a phantom hierarchy level).
// "Getting Started" has no section-index page — every page in the category is a sibling,
// not a child — so linking it is either circular (on whichever page it redirects to) or
// wrong (a sibling masquerading as a parent) on every other page in the category. Visitor
// 2026-07-30 (tech writer persona) caught the circular case on /why-synchronism. Left
// unlinked here rather than pointed at any one sibling.
const categoryHubs: Record<string, string> = {
  'Interactive Tools': '/interactive-tools',
};

export default function Breadcrumbs({ currentPath }: BreadcrumbsProps) {
  const category = getCategory(currentPath);
  const pageInfo = getPageInfo(currentPath);

  if (!category || !pageInfo) {
    return null;
  }

  const showCategory = category !== pageInfo.title;

  return (
    <nav
      aria-label="Breadcrumb"
      style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}
    >
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <Link href="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link>
        </li>
        {showCategory && (
          <>
            <li style={{ color: 'var(--color-text-muted)' }} aria-hidden="true">/</li>
            <li>
              {categoryHubs[category] ? (
                <Link href={categoryHubs[category]} style={{ color: 'var(--color-text-secondary)' }}>{category}</Link>
              ) : (
                <span style={{ color: 'var(--color-text-secondary)' }}>{category}</span>
              )}
            </li>
          </>
        )}
        <li style={{ color: 'var(--color-text-muted)' }} aria-hidden="true">/</li>
        <li aria-current="page">
          <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
            {pageInfo.title}
          </span>
        </li>
      </ol>
    </nav>
  );
}
