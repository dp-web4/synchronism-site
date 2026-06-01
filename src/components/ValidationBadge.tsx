'use client';

import type { ValidationStatus } from '@/lib/types';

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
const statusConfig: Record<ValidationStatus, { className: string; defaultLabel: string }> = {
  // MRH-relationship tags (preferred)
  'active-mrh':       { className: 'badge badge-active-mrh',       defaultLabel: 'Active-MRH' },
  'parallel-paths':   { className: 'badge badge-parallel-paths',   defaultLabel: 'Parallel-Paths' },
  'sidelined':        { className: 'badge badge-sidelined',        defaultLabel: 'Sidelined' },
  'superseded':       { className: 'badge badge-superseded',       defaultLabel: 'Superseded' },
  'audited-negative': { className: 'badge badge-audited-negative', defaultLabel: 'Audited-Negative' },
  // Descriptive tags
  untested:           { className: 'badge badge-untested',         defaultLabel: 'Untested' },
  failed:             { className: 'badge badge-failed',           defaultLabel: 'Failed' },
  speculative:        { className: 'badge badge-speculative',      defaultLabel: 'Speculative' },
  reparametrization:  { className: 'badge badge-reparametrization', defaultLabel: 'Reparametrization' },
  // Deprecated — kept for back-compat; do not use in new code
  validated:          { className: 'badge badge-validated',        defaultLabel: 'Validated' },
  supported:          { className: 'badge badge-supported',        defaultLabel: 'Strongly Supported' },
};

export default function ValidationBadge({ status, label }: ValidationBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={config.className}>
      {label || config.defaultLabel}
    </span>
  );
}
