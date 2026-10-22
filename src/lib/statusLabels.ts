// Single source for the site's status vocabulary (added 2026-10-19).
// A technical-writer persona found the same badges, operational states and lifecycle verbs
// restated in different words, with different membership, on Honest Assessment, the Test
// Roadmap and Tier 1. Render short forms from here; the long definitions stay on
// /honest-assessment (#badge-table, #operational-states, #status-lifecycle-verbs).

export type BadgeFamily = 'mrh' | 'descriptive';

// Family names and what each family answers (gloss added 2026-10-22: a technical-writer persona found the name
// "MRH-relationship" opaque to anyone who only wants to know whether a claim is alive).
export const BADGE_FAMILIES: Record<BadgeFamily, { name: string; gloss: string }> = {
  mrh: {
    name: 'MRH-relationship',
    gloss: 'where the claim sits relative to current research focus (MRH = Markov Relevancy Horizon, the framework\'s word for the context something is currently relevant within)',
  },
  descriptive: { name: 'Descriptive', gloss: 'what happened when the claim met data' },
};

export interface BadgeLabel {
  name: string;
  family: BadgeFamily;
  oneLiner: string;
  color: string;
}

export const BADGES: BadgeLabel[] = [
  { name: 'Active-MRH', family: 'mrh', oneLiner: 'in active research focus; being extended or revised', color: '#8b5cf6' },
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
];

// Retired labels: no longer assigned; listed so old text still reads. Not current members of any family.
export const RETIRED_LABELS: { name: string; oneLiner: string }[] = [
  { name: 'Validated', oneLiner: 'deprecated badge; verdict-shaped, conflicts with stewardship discipline' },
  { name: 'Strongly Supported', oneLiner: 'deprecated badge; same reason as Validated' },
  { name: 'MOND-shared', oneLiner: 'retired tie marker (2026-07-15): all three carriers (TEST-05, TEST-09, TEST-10) dissolved on execution or adjudication, so a tie now carries the same execution burden as a kill' },
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

// Every label used in the "State" slot of a test card (Tier 1, Test Roadmap), one line each (added 2026-10-22).
// A technical-writer persona found six of these on cards and defined in no legend they could find. Some are
// operational states, some lifecycle verbs; the card slot draws from both. A card carries at most one badge and
// one State; a parenthesis after the State names a substitute run's state or what the state is shared with.
export interface CardState {
  name: string;
  kind: 'operational state' | 'lifecycle verb';
  oneLiner: string;
}

export const CARD_STATES: CardState[] = [
  { name: 'Kill Criterion Triggered', kind: 'operational state', oneLiner: 'the measured value crossed the pre-registered kill threshold; the claim carries Failed' },
  { name: 'Withdrawn', kind: 'operational state', oneLiner: 'retracted by the framework before adjudication (internal contradiction or an amplitude it cannot derive); carries no badge' },
  { name: 'Self-Eliminating-or-Tie', kind: 'operational state', oneLiner: 'no outcome selects the framework: the signal is below reach, or each outcome is already covered by a standard alternative' },
  { name: 'Underpowered as Registered', kind: 'lifecycle verb', oneLiner: 'the registered threshold sits inside the measurement\'s own systematics, so neither outcome can adjudicate until the registration is tightened' },
  { name: 'Never Run as Registered', kind: 'lifecycle verb', oneLiner: 'a substitute dataset or statistic was run in its place; the original registration is still unrun and runnable' },
  { name: 'Closed by Execution', kind: 'lifecycle verb', oneLiner: 'the question was answered by running the computation (often as a null), not by argument' },
  { name: 'Reclassified', kind: 'lifecycle verb', oneLiner: 'moved between categories (e.g. tier, or prediction to exploratory) because the original category\'s entry bar was never met; kept visible' },
  { name: 'Demoted — Exploratory', kind: 'lifecycle verb', oneLiner: 'a reclassified test with no derived amplitude or no threshold; kept as an exploratory hypothesis, counts neither for nor against' },
];
