// Single source for the site's status vocabulary (added 2026-10-19).
// A technical-writer persona found the same badges, operational states and lifecycle verbs
// restated in different words, with different membership, on Honest Assessment, the Test
// Roadmap and Tier 1. Render short forms from here; the long definitions stay on
// /honest-assessment (#badge-table, #operational-states, #status-lifecycle-verbs).

export type BadgeFamily = 'mrh' | 'descriptive';

export interface BadgeLabel {
  name: string;
  family: BadgeFamily;
  oneLiner: string;
  color: string;
}

export const BADGES: BadgeLabel[] = [
  { name: 'Active-MRH', family: 'mrh', oneLiner: 'in active research focus', color: '#8b5cf6' },
  { name: 'Parallel-Paths', family: 'mrh', oneLiner: 'kept in the hypothesis space, not in focus, not abandoned', color: '#6366f1' },
  { name: 'Sidelined', family: 'mrh', oneLiner: 'was in focus, now parked; reactivation condition stated', color: '#94a3b8' },
  { name: 'Superseded', family: 'mrh', oneLiner: 'replaced by a later formulation', color: '#6b7280' },
  { name: 'Audited-Negative', family: 'mrh', oneLiner: 'closed audit finding; durable; does not move', color: '#ef4444' },
  { name: 'Untested', family: 'descriptive', oneLiner: 'prediction exists, no data yet', color: '#f59e0b' },
  { name: 'Speculative', family: 'descriptive', oneLiner: 'conceptual proposal, no quantitative test', color: '#94a3b8' },
  { name: 'Reparametrization', family: 'descriptive', oneLiner: 'equivalent to existing physics in different notation', color: '#f59e0b' },
  { name: 'Failed', family: 'descriptive', oneLiner: 'contradicted by data, with the specific error', color: '#ef4444' },
];

// Operational states: what a test can do or what happened to it. Not badges.
// Membership matches the #operational-states grid on /honest-assessment.
export const OPERATIONAL_STATES: string[] = [
  'Kill Criterion Triggered',
  'Withdrawn',
  'Self-Eliminating-or-Tie',
  'Unrunnable as stated',
  'Sign Correction',
  'Null-Class',
  'Artifact Lesson (tools only)',
  'MOND-shared (retired)',
];

// Lifecycle verbs: provenance and history of a row. Not badges, not operational states.
// Membership matches the #status-lifecycle-verbs grid on /honest-assessment.
export const LIFECYCLE_VERBS: string[] = [
  'Executed',
  'Adjudicated',
  'Closed',
  'Withdrawn',
  'Retired',
  'Reclassified',
  'Never run as registered',
  'Underpowered as registered',
  'Ceiling Exceeded',
  'Empty Intersection',
  'Demoted — Exploratory',
  'Closed by Execution',
];
