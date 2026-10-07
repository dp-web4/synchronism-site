'use client';

import Link from 'next/link';
import { getCategory, getPageInfo } from '@/lib/navigation';

interface BreadcrumbsProps {
  currentPath: string;
}

// Category crumbs link to a hub page when one exists (visitor 2026-07-23:
// an unlinked "Start Here" crumb read as a phantom hierarchy level).
// "Start Here" has no section-index page — every page in the category is a sibling,
// not a child — so linking it is either circular (on whichever page it redirects to) or
// wrong (a sibling masquerading as a parent) on every other page in the category. Visitor
// 2026-07-30 (tech writer persona) caught the circular case on /why-synchronism. Left
// unlinked here rather than pointed at any one sibling.
// Visitor 2026-10-06 (tech writer): "Methodology" was plain text although /methodology already
// redirects to /research-philosophy, so that page is the de-facto hub. Research Philosophy is
// itself in the Methodology category, so on that page the crumb stays a label (no self-link).
// Visitor 2026-10-07 (tech writer): "Predictions & Experiments" was unlinked on Test Roadmap / Tier 1.
// The Test Roadmap is the first page of that category and lists every test, so it is the de-facto hub
// (on the Roadmap itself the crumb stays a label). "Core Theory" has no hub page and stays unlinked.
const categoryHubs: Record<string, string> = {
  'Interactive Tools': '/interactive-tools',
  'Methodology': '/research-philosophy',
  'Predictions & Experiments': '/test-catalog',
};

// Visitor 2026-09-27: the main nav's "Start Here" links to /why-synchronism, so a
// "Home / Start Here / X" crumb read as "X is a child of Why Synchronism". Pointing it at
// /learning-paths would repeat the sibling-as-parent problem above (/learning-paths is itself
// in this category). The crumb is dropped instead: these pages sit directly under Home.
const hiddenCategoryCrumbs = new Set(['Start Here']);

export default function Breadcrumbs({ currentPath }: BreadcrumbsProps) {
  const category = getCategory(currentPath);
  const pageInfo = getPageInfo(currentPath);

  if (!category || !pageInfo) {
    return null;
  }

  const showCategory = category !== pageInfo.title && !hiddenCategoryCrumbs.has(category);

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
              {categoryHubs[category] && categoryHubs[category] !== currentPath ? (
                <Link href={categoryHubs[category]} style={{ color: 'var(--color-text-secondary)' }}>{category}</Link>
              ) : (
                // No index page exists for this section (e.g. /core-theory is a 404), so the crumb is
                // plain text. Visitor 2026-09-23: in text-secondary it was brighter than the linked
                // "Home" and read as a broken link. Muted + italic + default cursor marks it as a label.
                <span
                  title={`Site section: "${category}" (no index page; see Learning Paths)`}
                  style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', cursor: 'default' }}
                >
                  {category}
                </span>
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
