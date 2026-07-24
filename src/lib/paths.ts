// Single source of truth for learning-path definitions.
// Consumed by /learning-paths (the index) and by PathNav (per-page step navigation).
// Added 2026-07-18: two visitor personas independently found that no path could be
// followed end-to-end from its own page chrome (step indicators and Next buttons each
// existed on some pages but never both). PathNav derives both from this data.

export interface PathStep {
  title: string;
  href: string;
}

export interface LearningPath {
  name: string;
  desc: string;
  color: string;
  kind: 'difficulty' | 'domain';
  /** Rough end-to-end reading time, shown on the index (visitor request 2026-07-24:
   *  the landing page promised "~30 min" but the paths page showed no estimates). */
  timeEstimate?: string;
  steps: PathStep[];
}

export const learningPaths: LearningPath[] = [
  {
    name: 'Beginner',
    timeEstimate: '~30 min',
    desc: 'No physics background needed. Plain language, core concepts only.',
    color: '#10b981',
    kind: 'difficulty',
    steps: [
      { title: 'Why Synchronism?', href: '/why-synchronism' },
      { title: 'First Encounter', href: '/first-encounter' },
      { title: 'The Core Idea', href: '/core-idea' },
      { title: 'What Synchronism Is Not', href: '/what-synchronism-is-not' },
      { title: 'Honest Assessment', href: '/honest-assessment' },
      { title: 'Glossary', href: '/glossary' },
    ],
  },
  {
    name: 'Intermediate',
    timeEstimate: '~1 hour',
    desc: 'Undergrad science background. Equations with explanations, key results.',
    color: 'var(--color-accent-blue)',
    kind: 'difficulty',
    steps: [
      { title: 'The Coherence Function', href: '/coherence-function' },
      { title: 'The γ Parameter', href: '/gamma-parameter' },
      { title: 'Dark Matter Reframed', href: '/dark-matter' },
      { title: 'Galaxy Rotation Curves', href: '/galaxy-rotation' },
      { title: 'The γ ≈ 1 Boundary', href: '/gamma-boundary' },
      { title: 'The Hard Problem: A Proposed Reframing', href: '/hard-problem' },
      { title: 'How We Handle Failure', href: '/handling-failure' },
      { title: 'Top 5 Decisive Tests', href: '/top-5-tests' },
    ],
  },
  {
    name: 'Advanced',
    timeEstimate: '~2 hours',
    desc: 'Grad-level physics. Full derivations, parameter chains, test protocols.',
    color: 'var(--color-accent-violet)',
    kind: 'difficulty',
    steps: [
      { title: 'Parameter Derivations', href: '/parameter-derivations' },
      { title: 'Compression Action', href: '/compression-action' },
      { title: 'MOND Unification', href: '/mond-unification' },
      { title: 'CDM Discrimination', href: '/cdm-discrimination' },
      { title: 'Superconductivity (η)', href: '/superconductivity' },
      { title: 'Born Rule Derivation', href: '/born-rule' },
      { title: 'Falsifiability', href: '/falsifiability' },
      { title: 'Test Roadmap (24 experiments)', href: '/test-catalog' },
    ],
  },
  {
    name: 'Physics Track',
    timeEstimate: '~1 hour',
    desc: 'Quantum mechanics → cosmology → predictions',
    color: '#38bdf8',
    kind: 'domain',
    steps: [
      { title: 'The Coherence Function', href: '/coherence-function' },
      { title: 'MRH: Markov Relevancy Horizon', href: '/mrh' },
      { title: 'Measurement Without Observers', href: '/measurement-without-observers' },
      { title: 'Dark Matter Reframed', href: '/dark-matter' },
      { title: 'Galaxy Rotation Curves', href: '/galaxy-rotation' },
      { title: 'MOND Unification', href: '/mond-unification' },
      { title: 'Quantum Predictions', href: '/quantum-predictions' },
    ],
  },
  {
    name: 'Chemistry Track',
    timeEstimate: '~45 min',
    desc: 'The γ ≈ 1 boundary → correlations → limitations',
    color: '#22c55e',
    kind: 'domain',
    steps: [
      { title: 'The γ Parameter', href: '/gamma-parameter' },
      { title: 'Phase Transitions', href: '/phase-transitions' },
      { title: 'The γ ≈ 1 Boundary', href: '/gamma-boundary' },
      { title: 'Sound Velocity', href: '/sound-velocity' },
      { title: 'Superconductivity', href: '/superconductivity' },
      { title: 'Chemistry Limitations', href: '/chemistry-limitations' },
    ],
  },
  {
    name: 'Philosophy Track',
    timeEstimate: '~45 min',
    desc: 'Consciousness → free will → identity',
    color: '#a78bfa',
    kind: 'domain',
    steps: [
      { title: 'The Core Idea', href: '/core-idea' },
      { title: 'The Hard Problem: A Proposed Reframing', href: '/hard-problem' },
      { title: 'Consciousness Threshold', href: '/consciousness-threshold' },
      { title: 'Qualia as Coherence', href: '/qualia-coherence' },
      { title: 'Free Will', href: '/free-will' },
      { title: 'Identity', href: '/identity' },
      { title: 'Consciousness Predictions', href: '/consciousness-predictions' },
    ],
  },
  {
    name: 'Methodology Track',
    timeEstimate: '~45 min',
    desc: 'How the research was done → how we handle failure',
    color: '#f59e0b',
    kind: 'domain',
    steps: [
      { title: 'Research Philosophy', href: '/research-philosophy' },
      { title: 'A2ACW Protocol', href: '/a2acw' },
      { title: 'Autonomous Research', href: '/autonomous-research' },
      { title: 'How We Handle Failure', href: '/handling-failure' },
      { title: 'Falsifiability', href: '/falsifiability' },
      { title: 'Honest Assessment', href: '/honest-assessment' },
    ],
  },
];

export interface PathMembership {
  path: LearningPath;
  stepIndex: number; // 0-based
}

export function getPathMemberships(currentPath: string): PathMembership[] {
  const memberships: PathMembership[] = [];
  for (const path of learningPaths) {
    const idx = path.steps.findIndex(s => s.href === currentPath);
    if (idx !== -1) memberships.push({ path, stepIndex: idx });
  }
  return memberships;
}
