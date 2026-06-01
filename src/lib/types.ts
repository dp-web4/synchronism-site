/**
 * Validation badge taxonomy.
 *
 * **Two families compose here**:
 *
 * 1. **MRH-relationship tags** (`active-mrh`, `parallel-paths`, `sidelined`,
 *    `superseded`, `audited-negative`) describe a claim's relationship to the
 *    current MRH inventory. These are the preferred tags for in-flight work.
 *    Per dp's 2026-05-28 directive (*"we're not at a stage where anything can
 *    be honestly claimed as 'established'"*), verdict-shaped tags are not
 *    appropriate during active stewardship. See
 *    `forum/post-kimi-reframe-site-update-instructions-2026-05-28.md` §1.
 *
 * 2. **Descriptive tags** (`untested`, `failed`, `speculative`,
 *    `reparametrization`) describe an empirical relationship rather than a
 *    verdict on truth-status. These remain useful at the current stewardship
 *    stage.
 *
 * **Deprecated** (kept for back-compat with existing usages; do not use in new
 * code): `validated`, `supported`. These are verdict-shaped and conflict with
 * stewardship discipline. Existing usages are being migrated incrementally by
 * the daily maintainer track.
 */
export type ValidationStatus =
  // MRH-relationship tags (preferred for in-flight work)
  | 'active-mrh'
  | 'parallel-paths'
  | 'sidelined'
  | 'superseded'
  | 'audited-negative'
  // Descriptive tags (empirical relationship, not verdict)
  | 'untested'
  | 'failed'
  | 'speculative'
  | 'reparametrization'
  // Deprecated — do not use in new code; existing usages being migrated
  | 'validated'
  | 'supported';
