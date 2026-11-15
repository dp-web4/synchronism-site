'use client';

import type { ValidationStatus } from '@/lib/types';
import { badgeOneLiner, capitalize } from '@/lib/statusLabels';

const def = (name: string) => capitalize(badgeOneLiner(name));

interface ValidationBadgeProps {
  status: ValidationStatus;
  label?: string;
}

/**
 * Two families of badges (see `src/lib/types.ts` for full discipline).
 *
 * Prefer MRH-relationship tags for in-flight work. Descriptive tags describe
 * empirical relationships. `validated` / `supported` are deprecated.
 *
 * Rationale (from `forum/post-kimi-reframe-site-update-instructions-2026-05-28.md` §1):
 * per dp 2026-05-28, *"we're not at a stage where anything can be honestly claimed
 * as 'established'."*
 */
const statusConfig: Record<ValidationStatus, { className: string; defaultLabel: string; definition: string }> = {
  // MRH-relationship tags (preferred)
  'active-mrh':       { className: 'badge badge-active-mrh',       defaultLabel: 'Active-MRH',        definition: def('Active-MRH') },
  'parallel-paths':   { className: 'badge badge-parallel-paths',   defaultLabel: 'Parallel-Paths',    definition: def('Parallel-Paths') },
  'sidelined':        { className: 'badge badge-sidelined',        defaultLabel: 'Sidelined',         definition: def('Sidelined') },
  'superseded':       { className: 'badge badge-superseded',       defaultLabel: 'Superseded',        definition: def('Superseded') },
  'audited-negative': { className: 'badge badge-audited-negative', defaultLabel: 'Audited-Negative',  definition: def('Audited-Negative') },
  // Descriptive tags
  untested:           { className: 'badge badge-untested',         defaultLabel: 'Untested',          definition: def('Untested') },
  failed:             { className: 'badge badge-failed',           defaultLabel: 'Failed',            definition: def('Failed') },
  speculative:        { className: 'badge badge-speculative',      defaultLabel: 'Speculative',       definition: def('Speculative') },
  reparametrization:  { className: 'badge badge-reparametrization', defaultLabel: 'Reparametrization', definition: def('Reparametrization') },
  // Deprecated — kept for back-compat; do not use in new code
  validated:          { className: 'badge badge-validated',        defaultLabel: 'Validated',         definition: 'Deprecated badge — see Honest Assessment for current taxonomy' },
  supported:          { className: 'badge badge-supported',        defaultLabel: 'Strongly Supported', definition: 'Deprecated badge — see Honest Assessment for current taxonomy' },
};

export default function ValidationBadge({ status, label }: ValidationBadgeProps) {
  const config = statusConfig[status];
  // Contract (2026-07-08): every badge displays its formal status name, even when a
  // free-text finding label is supplied — labels describe the specific result, they
  // are not additional badge types. Skip the prefix if the label already contains it.
  const text = !label
    ? config.defaultLabel
    : label.toLowerCase().includes(config.defaultLabel.toLowerCase())
      ? label
      : `${config.defaultLabel} — ${label}`;
  // 2026-09-05: every badge instance now links to the canonical definitions anchor. Rendered as a
  // span with a click handler (not <a>) because badges frequently sit inside card <Link>s, where a
  // nested anchor is invalid HTML; stopPropagation keeps the card link from firing too.
  const definitionsHref = '/honest-assessment#validation-badge-definitions';
  return (
    <span
      className={config.className}
      title={`${config.defaultLabel}: ${config.definition} — click for all badge definitions`}
      role="link"
      tabIndex={0}
      aria-label={`${config.defaultLabel}: ${config.definition}. Opens badge definitions.`}
      style={{ cursor: 'help' }}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.assign(definitionsHref); }}
      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); window.location.assign(definitionsHref); } }}
    >
      {text}
      {/* 2026-11-02: visible affordance. A technical-writer persona read the chips as hover-only; they were clickable,
          but nothing on screen said so (and touch screens have no hover). */}
      <span aria-hidden="true" style={{ marginLeft: '0.35em', opacity: 0.7, fontSize: '0.85em' }}>&#x24D8;</span>
    </span>
  );
}
