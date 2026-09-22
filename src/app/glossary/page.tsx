'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import { getAllTerms } from '@/lib/terms';

function glossarySlug(t: string): string {
  return t.replace(/Δ/g, 'delta ').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Jump-bar group for a term: its first Latin letter, or "Greek" for symbol-led terms
// (γ, η, ξ, ρ_crit, ΔBIC, ΛCDM, σ…), which sort after Z.
function letterGroup(t: string): string {
  const c = t.charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : 'Greek';
}
const JUMP_GROUPS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), 'Greek'];

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
  const presentGroups = new Set(allTerms.map(t => letterGroup(t.term)));

  return (
    <>
      <Breadcrumbs currentPath="/glossary" />
      <PathNav currentPath="/glossary" />

      <h1>Glossary</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
        Key terms used throughout Synchronism, listed alphabetically (Greek-symbol terms sort
        after the Latin alphabet; the nine formal validation badges are marked &ldquo;(badge)&rdquo;). Hover over
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

      {!needle && (
        <nav aria-label="Jump to letter" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem 0.6rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          {JUMP_GROUPS.map(g => presentGroups.has(g) ? (
            <a key={g} href={`#letter-${g}`} style={{ color: 'var(--color-accent-blue)' }}>
              {g === 'Greek' ? 'Greek (γ, ρ, σ…)' : g}
            </a>
          ) : (
            <span key={g} style={{ color: 'var(--color-text-muted)', opacity: 0.5 }} aria-hidden="true">{g}</span>
          ))}
        </nav>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {terms.length === 0 && (
          <p style={{ color: 'var(--color-text-muted)' }}>
            No term matches “{filter.trim()}”. The glossary covers this framework&apos;s own vocabulary;
            survey names and statistics are in it too (try <em>SPARC</em>, <em>BTFR</em>, <em>sigma</em>).
          </p>
        )}
        {terms.map((term, i) => (
          <div key={term.term} className="card" id={term.term}>
            {/* letter anchor for the A–Z jump bar, on the first card of each group */}
            {!needle && (i === 0 || letterGroup(terms[i - 1].term) !== letterGroup(term.term)) && (
              <span id={`letter-${letterGroup(term.term)}`} aria-hidden="true" />
            )}
            {/* lowercase-slug alias so /glossary#kill-criterion works as well as the raw-term id */}
            {glossarySlug(term.term) && glossarySlug(term.term) !== term.term && <span id={glossarySlug(term.term)} aria-hidden="true" />}
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
