'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { getTerm } from '@/lib/terms';

interface TermTooltipProps {
  term: string;
  children?: React.ReactNode;
  showFullName?: boolean;
}

export default function TermTooltip({ term, children, showFullName = false }: TermTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('above');
  const triggerRef = useRef<HTMLSpanElement>(null);

  const definition = getTerm(term);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      setPosition(spaceAbove < 200 && spaceBelow > spaceAbove ? 'below' : 'above');
    }
  }, [isOpen]);

  if (!definition) {
    return <span>{children || term}</span>;
  }

  const displayText = children || (
    <>
      {definition.term}
      {showFullName && (
        <span style={{ color: 'var(--color-text-muted)' }}> ({definition.fullName})</span>
      )}
    </>
  );

  return (
    <span
      ref={triggerRef}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        style={{
          borderBottom: '1px dotted rgba(139, 92, 246, 0.5)',
          cursor: 'help',
          color: 'var(--color-accent-violet)',
          transition: 'color 0.15s ease',
        }}
        tabIndex={0}
        role="button"
        aria-describedby={`tooltip-${definition.term}`}
      >
        {displayText}
      </span>

      {isOpen && (
        <div
          id={`tooltip-${definition.term}`}
          role="tooltip"
          style={{
            position: 'absolute',
            zIndex: 50,
            width: '20rem',
            maxWidth: '90vw',
            padding: '1rem',
            background: '#1a1a2e',
            border: '1px solid var(--color-dark-border)',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
            ...(position === 'above'
              ? { bottom: '100%', marginBottom: '0.5rem', left: '50%', transform: 'translateX(-50%)' }
              : { top: '100%', marginTop: '0.5rem', left: '50%', transform: 'translateX(-50%)' }
            ),
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--color-accent-violet)' }}>{definition.term}</span>
            <span style={{ color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>({definition.fullName})</span>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '0.5rem' }}>
            {definition.brief}
          </p>
          {definition.explanation && (
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', lineHeight: 1.5, marginBottom: '0.5rem' }}>
              {definition.explanation}
            </p>
          )}
          {definition.educationalNote && (
            <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              Note: {definition.educationalNote}
            </p>
          )}
          {definition.learnMore && (
            <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--color-dark-border)' }}>
              <Link
                href={definition.learnMore}
                style={{ fontSize: '0.75rem', color: 'var(--color-accent-blue)' }}
              >
                Learn more &rarr;
              </Link>
            </div>
          )}
        </div>
      )}
    </span>
  );
}
