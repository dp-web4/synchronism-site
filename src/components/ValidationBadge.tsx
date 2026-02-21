'use client';

import type { ValidationStatus } from '@/lib/types';

interface ValidationBadgeProps {
  status: ValidationStatus;
  label?: string;
}

const statusConfig: Record<ValidationStatus, { className: string; defaultLabel: string }> = {
  validated: { className: 'badge badge-validated', defaultLabel: 'Validated' },
  supported: { className: 'badge badge-supported', defaultLabel: 'Strongly Supported' },
  untested: { className: 'badge badge-untested', defaultLabel: 'Untested' },
  failed: { className: 'badge badge-failed', defaultLabel: 'Failed' },
  speculative: { className: 'badge badge-speculative', defaultLabel: 'Speculative' },
  reparametrization: { className: 'badge badge-reparametrization', defaultLabel: 'Reparametrization' },
};

export default function ValidationBadge({ status, label }: ValidationBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={config.className}>
      {label || config.defaultLabel}
    </span>
  );
}
