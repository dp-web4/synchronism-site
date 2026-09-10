'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import { getAllTerms } from '@/lib/terms';

export default function Glossary() {
  const allTerms = useMemo(() => getAllTerms()
    .slice()
    .sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' })), []);

  // Filter box added 2026-09-10: two visitor personas independently reported giving up
  // before scrolling 72 alphabetical entries. Matches term, full name and definition text,
  // so "dataset" finds SPARC even though the word isn't in its name.
  const [filter, setFilter] = useState('');
  const needle = filter.trim().toLowerCase();
  const terms = needle
    ? allTerms.filter(t => [t.term, t.fullName, t.brief, t.explanation]
        .some(field => typeof field === 'string' && field.toLowerCase().includes(needle)))
    : allTerms;

  return (
    <>
      <Breadcrumbs currentPath="/glossary" />
      <PathNav currentPath="/glossary" />

      <h1>Glossary</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
        Key terms used throughout Synchronism, listed alphabetically (Greek-symbol terms sort
        after the Latin alphabet, and validation-badge terms cluster as a group). Hover over
        highlighted terms on any page to see these definitions inline.
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>
        <strong>Validation badges</strong> come in two families.{' '}
        <em>MRH-relationship</em> badges (Active-MRH, Parallel-Paths, Sidelined, Superseded, Audited-Negative)
        describe where a claim sits in the research inventory.{' '}
        <em>Descriptive</em> badges (Untested, Speculative, Reparametrization, Failed) describe the empirical status.
        Both families are defined below and at the{' '}
        <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>
          canonical reference in Honest Assessment
        </Link>.
        Deprecated badges (Validated, Strongly Supported) are kept for back-compat but no longer used in new content.
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="search"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder={`Filter ${allTerms.length} terms — name, expansion or definition text…`}
          aria-label="Filter glossary terms"
          style={{
            width: '100%',
            maxWidth: '40rem',
            padding: '0.55rem 0.8rem',
            borderRadius: '0.375rem',
            border: '1px solid var(--color-border, rgba(255,255,255,0.15))',
            background: 'rgba(255,255,255,0.04)',
            color: 'var(--color-text-secondary)',
            fontSize: '0.95rem',
          }}
        />
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.4rem 0 0' }}>
          {needle
            ? `${terms.length} of ${allTerms.length} terms match “${filter.trim()}”`
            : `${allTerms.length} terms`}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {terms.length === 0 && (
          <p style={{ color: 'var(--color-text-muted)' }}>
            No term matches “{filter.trim()}”. The glossary covers this framework&apos;s own vocabulary;
            survey names and statistics are in it too (try <em>SPARC</em>, <em>BTFR</em>, <em>sigma</em>).
          </p>
        )}
        {terms.map(term => (
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
              {/* whitespace matters: without it, screen readers and text extractors
                  concatenate term + fullName ("A2ACWAI-to-AI…") — flex layout ignores it */}
              {' '}
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
