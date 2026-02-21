'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import { getAllTerms } from '@/lib/terms';

export default function Glossary() {
  const allTerms = getAllTerms();

  return (
    <>
      <Breadcrumbs currentPath="/glossary" />

      <h1>Glossary</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
        Key terms used throughout Synchronism. Hover over highlighted terms on any page
        to see these definitions inline.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {allTerms.map(term => (
          <div key={term.term} className="card" id={term.term}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--color-accent-violet)',
                fontFamily: "'Times New Roman', serif",
                fontStyle: 'italic',
              }}>
                {term.term}
              </span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                {term.fullName}
              </span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              {term.brief}
            </p>
            {term.explanation && (
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                {term.explanation}
              </p>
            )}
            {term.educationalNote && (
              <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.8rem', fontStyle: 'italic', marginTop: '0.5rem' }}>
                Note: {term.educationalNote}
              </p>
            )}
            {term.learnMore && (
              <Link
                href={term.learnMore}
                style={{ color: 'var(--color-accent-blue)', fontSize: '0.85rem' }}
              >
                Learn more &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>

      <RelatedConcepts currentPath="/glossary" />
    </>
  );
}
