export interface NavItem {
  title: string;
  href: string;
  desc: string;
  prerequisites?: string[];
  related?: string[];
  keywords?: string[];
}

export interface NavigationTree {
  [category: string]: NavItem[];
}

export const navigationTree: NavigationTree = {
  'Getting Started': [
    {
      title: 'Why Synchronism?',
      href: '/why-synchronism',
      desc: 'The question before the answer',
      keywords: ['why', 'introduction', 'start', 'motivation', 'overview'],
      related: ['/first-encounter', '/core-idea', '/honest-assessment'],
    },
    {
      title: 'First Encounter',
      href: '/first-encounter',
      desc: '10-minute guided introduction',
      keywords: ['tutorial', 'beginner', 'start', 'guided', 'introduction'],
      related: ['/why-synchronism', '/core-idea', '/learning-paths'],
    },
    {
      title: 'The Core Idea',
      href: '/core-idea',
      desc: 'One equation, every scale',
      keywords: ['overview', 'summary', 'equation', 'core', 'idea'],
      related: ['/coherence-function', '/gamma-parameter', '/scale-invariance'],
    },
    {
      title: 'Learning Paths',
      href: '/learning-paths',
      desc: 'Choose your journey: Physics, Chemistry, Philosophy, or All',
      keywords: ['guide', 'pathway', 'curriculum', 'track'],
      related: ['/first-encounter', '/glossary'],
    },
    {
      title: 'Glossary',
      href: '/glossary',
      desc: 'Terms and definitions',
      keywords: ['terms', 'definitions', 'vocabulary', 'glossary'],
      related: ['/core-idea', '/learning-paths'],
    },
    {
      title: 'What Synchronism Is Not',
      href: '/what-synchronism-is-not',
      desc: 'Scope boundaries: not a TOE, not peer-reviewed, not original physics',
      keywords: ['scope', 'boundaries', 'not', 'limitations', 'overclaim', 'honest'],
      related: ['/honest-assessment', '/research-philosophy', '/why-synchronism'],
    },
    {
      title: 'Honest Assessment',
      href: '/honest-assessment',
      desc: 'What works, what failed, what we don\'t know',
      keywords: ['honest', 'failures', 'limitations', 'status', 'assessment', 'transparency'],
      related: ['/why-synchronism', '/chemistry-limitations', '/research-philosophy', '/what-synchronism-is-not'],
    },
  ],

  'Core Theory': [
    {
      title: 'The Coherence Function',
      href: '/coherence-function',
      desc: 'C(\u03C1) = tanh(\u03B3 log(\u03C1/\u03C1_crit + 1))',
      keywords: ['coherence', 'function', 'equation', 'tanh', 'density', 'C(rho)'],
      related: ['/gamma-parameter', '/critical-density', '/phase-transitions'],
    },
    {
      title: 'The \u03B3 Parameter',
      href: '/gamma-parameter',
      desc: '\u03B3 = 2/\u221AN_corr: why 2, why \u221AN',
      keywords: ['gamma', 'parameter', 'correlation', 'N_corr', 'derivation'],
      prerequisites: ['/coherence-function'],
      related: ['/critical-density', '/scale-invariance', '/phase-transitions'],
    },
    {
      title: 'Critical Density',
      href: '/critical-density',
      desc: '\u03C1_crit = A V_flat\u00B2: the transition point',
      keywords: ['density', 'critical', 'rho_crit', 'transition', 'threshold'],
      prerequisites: ['/coherence-function'],
      related: ['/gamma-parameter', '/parameter-derivations'],
    },
    {
      title: 'Parameter Derivations',
      href: '/parameter-derivations',
      desc: 'First-principles origin of every parameter',
      keywords: ['derivation', 'first principles', 'parameters', 'A', 'a0'],
      prerequisites: ['/coherence-function', '/gamma-parameter', '/critical-density'],
      related: ['/mond-unification', '/equation-walkthrough'],
    },
    {
      title: 'Compression Action',
      href: '/compression-action',
      desc: 'Alternative \u03BE formulation: topology + geometry + dynamics',
      keywords: ['compression', 'action', 'xi', 'alternative', 'formulation'],
      prerequisites: ['/coherence-function'],
      related: ['/parameter-derivations', '/scale-invariance'],
    },
    {
      title: 'Phase Transitions',
      href: '/phase-transitions',
      desc: '\u03B3 < 1, \u03B3 \u2248 1, \u03B3 > 1 regimes',
      keywords: ['phase', 'transition', 'regime', 'quantum', 'classical', 'boundary'],
      prerequisites: ['/gamma-parameter'],
      related: ['/gamma-boundary', '/chemistry-phase-transitions', '/phase-boundary-visualizer'],
    },
    {
      title: 'Scale Invariance',
      href: '/scale-invariance',
      desc: 'From Planck to cosmic: 80 orders of magnitude',
      keywords: ['scale', 'invariance', 'Planck', 'cosmic', 'orders of magnitude', 'universal'],
      prerequisites: ['/gamma-parameter'],
      related: ['/scale-navigator', '/one-equation'],
    },
    {
      title: 'MRH: Markov Relevancy Horizon',
      href: '/mrh',
      desc: 'The boundary of causal influence',
      keywords: ['MRH', 'Markov', 'relevancy', 'horizon', 'causal', 'boundary', 'decoherence'],
      prerequisites: ['/coherence-function'],
      related: ['/measurement-without-observers', '/cosmic-horizons', '/decoherence-mrh'],
    },
  ],

  'Quantum Physics': [
    {
      title: 'Measurement Without Observers',
      href: '/measurement-without-observers',
      desc: 'MRH crossing replaces wave function collapse',
      keywords: ['measurement', 'observer', 'collapse', 'MRH', 'quantum', 'decoherence'],
      prerequisites: ['/mrh', '/coherence-function'],
      related: ['/observer-problem', '/decoherence-mrh', '/wave-function'],
    },
    {
      title: 'The Observer Problem',
      href: '/observer-problem',
      desc: 'Geocentrism analogy: removing the privileged frame',
      keywords: ['observer', 'geocentrism', 'heliocentrism', 'privileged', 'frame'],
      prerequisites: ['/measurement-without-observers'],
      related: ['/wave-function', '/born-rule'],
    },
    {
      title: 'Entanglement as Coherence',
      href: '/entanglement-coherence',
      desc: 'Non-local correlations from shared \u03B3',
      keywords: ['entanglement', 'coherence', 'non-local', 'correlation', 'EPR', 'Bell'],
      prerequisites: ['/gamma-parameter', '/measurement-without-observers'],
      related: ['/born-rule', '/quantum-predictions'],
    },
    {
      title: 'Born Rule Derivation',
      href: '/born-rule',
      desc: 'Quantum probabilities from coherence conservation',
      keywords: ['Born', 'rule', 'probability', 'derivation', 'conservation'],
      prerequisites: ['/coherence-function', '/measurement-without-observers'],
      related: ['/quantum-computing', '/entanglement-coherence'],
    },
    {
      title: 'Quantum Computing',
      href: '/quantum-computing',
      desc: 'Gates as coherence operations, speedup as coherent parallelism',
      keywords: ['quantum', 'computing', 'gates', 'speedup', 'coherent', 'parallelism'],
      prerequisites: ['/born-rule'],
      related: ['/quantum-predictions', '/entanglement-coherence'],
    },
    {
      title: 'Wave Function Interpretation',
      href: '/wave-function',
      desc: 'What \u03C8 means in Synchronism',
      keywords: ['wave', 'function', 'psi', 'interpretation', 'meaning'],
      prerequisites: ['/measurement-without-observers'],
      related: ['/observer-problem', '/born-rule'],
    },
    {
      title: 'Decoherence at the MRH',
      href: '/decoherence-mrh',
      desc: 'Why classical emerges from quantum',
      keywords: ['decoherence', 'classical', 'quantum', 'emergence', 'MRH', 'boundary'],
      prerequisites: ['/mrh', '/measurement-without-observers'],
      related: ['/phase-transitions', '/cosmic-horizons'],
    },
    {
      title: 'Quantum Predictions',
      href: '/quantum-predictions',
      desc: '6 testable protocols',
      keywords: ['predictions', 'testable', 'protocols', 'experiments', 'quantum'],
      prerequisites: ['/measurement-without-observers'],
      related: ['/test-catalog', '/tier-2-pilots'],
    },
  ],

  'Cosmology': [
    {
      title: 'Dark Matter Reframed',
      href: '/dark-matter',
      desc: 'Patterns interacting indifferently: gravity only, no EM',
      keywords: ['dark matter', 'gravity', 'indifferent', 'interaction', 'reframe'],
      prerequisites: ['/coherence-function'],
      related: ['/galaxy-rotation', '/mond-unification', '/wide-binaries'],
    },
    {
      title: 'Galaxy Rotation Curves',
      href: '/galaxy-rotation',
      desc: 'SPARC (175) + ALFALFA-SDSS (14,585 galaxies)',
      keywords: ['galaxy', 'rotation', 'curve', 'SPARC', 'ALFALFA', 'SDSS', 'RAR'],
      prerequisites: ['/dark-matter', '/critical-density'],
      related: ['/rar-scatter', '/cdm-discrimination', '/galaxy-plotter'],
    },
    {
      title: 'MOND Unification',
      href: '/mond-unification',
      desc: 'a\u2080 = cH\u2080/(2\u03C0) is emergent, not fundamental',
      keywords: ['MOND', 'unification', 'a0', 'acceleration', 'emergent', 'Milgrom'],
      prerequisites: ['/parameter-derivations', '/dark-matter'],
      related: ['/galaxy-rotation', '/freemans-law', '/mond-comparator'],
    },
    {
      title: 'RAR Scatter',
      href: '/rar-scatter',
      desc: 'NP2 environment-dependent scatter (p = 5\u00D710\u207B\u2076)',
      keywords: ['RAR', 'scatter', 'NP2', 'environment', 'radial', 'acceleration'],
      prerequisites: ['/galaxy-rotation'],
      related: ['/cdm-discrimination', '/cosmology-predictions'],
    },
    {
      title: 'CDM Discrimination',
      href: '/cdm-discrimination',
      desc: '\u03C3_int = 0.086 dex: below CDM prediction',
      keywords: ['CDM', 'discrimination', 'sigma', 'intrinsic', 'scatter'],
      prerequisites: ['/galaxy-rotation', '/rar-scatter'],
      related: ['/cosmology-predictions', '/dark-matter'],
    },
    {
      title: 'Freeman\'s Law',
      href: '/freemans-law',
      desc: '\u03A3\u2080 from first principles',
      keywords: ['Freeman', 'law', 'surface', 'density', 'sigma', 'derivation'],
      prerequisites: ['/parameter-derivations'],
      related: ['/mond-unification', '/galaxy-rotation'],
    },
    {
      title: 'Cosmic Horizons',
      href: '/cosmic-horizons',
      desc: 'Inflation, dark energy as MRH phenomena',
      keywords: ['cosmic', 'horizon', 'inflation', 'dark energy', 'MRH', 'cosmology'],
      prerequisites: ['/mrh'],
      related: ['/decoherence-mrh', '/cosmology-predictions'],
    },
    {
      title: 'Wide Binaries',
      href: '/wide-binaries',
      desc: 'Gaia DR3 density-dependent anomaly',
      keywords: ['wide', 'binary', 'Gaia', 'DR3', 'density', 'anomaly'],
      prerequisites: ['/dark-matter', '/gamma-parameter'],
      related: ['/galaxy-rotation', '/test-catalog'],
    },
    {
      title: 'Cosmology Predictions',
      href: '/cosmology-predictions',
      desc: 'BAO modulation, GW-DM correlation',
      keywords: ['predictions', 'BAO', 'gravitational', 'wave', 'testable'],
      prerequisites: ['/galaxy-rotation'],
      related: ['/test-catalog', '/top-5-tests'],
    },
  ],

  'Chemistry': [
    {
      title: 'The \u03B3 \u2248 1 Boundary',
      href: '/gamma-boundary',
      desc: '1,703 phenomena at the quantum-classical edge',
      keywords: ['gamma', 'boundary', 'quantum', 'classical', 'phenomena', 'chemistry'],
      prerequisites: ['/gamma-parameter', '/phase-transitions'],
      related: ['/sound-velocity', '/electronegativity', '/chemistry-correlation-explorer'],
    },
    {
      title: 'Sound Velocity',
      href: '/sound-velocity',
      desc: 'r = 0.982 correlation with coherence',
      keywords: ['sound', 'velocity', 'correlation', 'phonon', 'acoustic'],
      prerequisites: ['/gamma-boundary'],
      related: ['/electronegativity', '/chemistry-phase-transitions'],
    },
    {
      title: 'Electronegativity',
      href: '/electronegativity',
      desc: 'r = 0.979 correlation with coherence',
      keywords: ['electronegativity', 'correlation', 'atomic', 'bonding'],
      prerequisites: ['/gamma-boundary'],
      related: ['/sound-velocity', '/materials-predictions'],
    },
    {
      title: 'Phase Transitions in Chemistry',
      href: '/chemistry-phase-transitions',
      desc: 'Melting, boiling, superconductivity, superfluidity',
      keywords: ['phase', 'transition', 'melting', 'boiling', 'superconductivity', 'superfluidity'],
      prerequisites: ['/gamma-boundary'],
      related: ['/superconductivity', '/chemistry-limitations'],
    },
    {
      title: 'Superconductivity',
      href: '/superconductivity',
      desc: '\u03B7 reachability factor = Abrikosov-Gor\'kov pair-breaking',
      keywords: ['superconductivity', 'eta', 'reachability', 'pair-breaking', 'Abrikosov'],
      prerequisites: ['/gamma-boundary', '/chemistry-phase-transitions'],
      related: ['/materials-predictions', '/chemistry-limitations'],
    },
    {
      title: 'Materials Predictions',
      href: '/materials-predictions',
      desc: 'What \u03B3 says about new materials',
      keywords: ['materials', 'predictions', 'design', 'novel', 'optimization'],
      prerequisites: ['/gamma-boundary'],
      related: ['/superconductivity', '/chemistry-limitations'],
    },
    {
      title: 'Chemistry Limitations',
      href: '/chemistry-limitations',
      desc: 'Melting points (53% error), critical exponents (2\u00D7 off)',
      keywords: ['limitations', 'failure', 'error', 'melting', 'critical', 'exponent'],
      prerequisites: ['/gamma-boundary'],
      related: ['/honest-assessment', '/research-philosophy'],
    },
  ],

  'Consciousness & Philosophy': [
    {
      title: 'The Hard Problem Dissolved',
      href: '/hard-problem',
      desc: 'Phase patterns ARE experience, not correlates of it',
      keywords: ['hard problem', 'consciousness', 'experience', 'qualia', 'Chalmers'],
      prerequisites: ['/coherence-function', '/phase-transitions'],
      related: ['/consciousness-threshold', '/qualia-coherence', '/marys-room'],
    },
    {
      title: 'Consciousness Threshold',
      href: '/consciousness-threshold',
      desc: 'C \u2248 0.50: 8-way convergence from independent approaches',
      keywords: ['consciousness', 'threshold', '0.50', 'convergence', 'Gnosis'],
      prerequisites: ['/hard-problem'],
      related: ['/qualia-coherence', '/consciousness-predictions', '/consciousness-demo'],
    },
    {
      title: 'Qualia as Coherence',
      href: '/qualia-coherence',
      desc: 'Why inverted qualia are impossible',
      keywords: ['qualia', 'coherence', 'inverted', 'impossible', 'experience'],
      prerequisites: ['/hard-problem'],
      related: ['/consciousness-threshold', '/marys-room'],
    },
    {
      title: 'Free Will',
      href: '/free-will',
      desc: 'Synchronism\'s answer to determinism vs. agency',
      keywords: ['free will', 'determinism', 'agency', 'choice', 'freedom'],
      prerequisites: ['/hard-problem'],
      related: ['/identity', '/consciousness-predictions'],
    },
    {
      title: 'Identity',
      href: '/identity',
      desc: 'What persists through change',
      keywords: ['identity', 'persistence', 'change', 'self', 'continuity'],
      prerequisites: ['/hard-problem'],
      related: ['/free-will', '/consciousness-threshold'],
    },
    {
      title: 'Mary\'s Room',
      href: '/marys-room',
      desc: 'Resolved via phase pattern acquisition',
      keywords: ['Mary', 'room', 'knowledge', 'argument', 'Jackson', 'resolved'],
      prerequisites: ['/qualia-coherence'],
      related: ['/hard-problem', '/consciousness-predictions'],
    },
    {
      title: 'Consciousness Predictions',
      href: '/consciousness-predictions',
      desc: '34 falsifiable predictions with EEG protocols',
      keywords: ['predictions', 'consciousness', 'EEG', 'falsifiable', 'neural'],
      prerequisites: ['/consciousness-threshold'],
      related: ['/test-catalog', '/tier-2-pilots'],
    },
  ],

  'Methodology': [
    {
      title: 'Research Philosophy',
      href: '/research-philosophy',
      desc: '"All models are wrong; some are useful"',
      keywords: ['philosophy', 'methodology', 'approach', 'models', 'wrong', 'useful'],
      related: ['/handling-failure', '/falsifiability', '/honest-assessment'],
    },
    {
      title: 'A2ACW Protocol',
      href: '/a2acw',
      desc: 'AI-to-AI Adversarial Collaboration',
      keywords: ['A2ACW', 'adversarial', 'collaboration', 'stress-test', 'protocol'],
      related: ['/autonomous-research', '/falsifiability'],
    },
    {
      title: 'Autonomous Research',
      href: '/autonomous-research',
      desc: '3,308 sessions with no human in the loop',
      keywords: ['autonomous', 'research', 'sessions', 'AI', 'automated', 'agent'],
      related: ['/a2acw', '/publisher-track'],
    },
    {
      title: 'The Publisher Track',
      href: '/publisher-track',
      desc: 'Automated publication readiness scoring',
      keywords: ['publisher', 'publication', 'readiness', 'score', 'automated'],
      related: ['/autonomous-research', '/publication-roadmap'],
    },
    {
      title: 'How We Handle Failure',
      href: '/handling-failure',
      desc: 'Documenting what doesn\'t work is as important as what does',
      keywords: ['failure', 'documentation', 'honest', 'limitation', 'learning'],
      related: ['/honest-assessment', '/chemistry-limitations', '/research-philosophy'],
    },
    {
      title: 'Falsifiability',
      href: '/falsifiability',
      desc: 'Every prediction has a kill criterion',
      keywords: ['falsifiable', 'kill', 'criterion', 'Popper', 'testable', 'science'],
      related: ['/test-catalog', '/research-philosophy'],
    },
  ],

  'Predictions & Experiments': [
    {
      title: 'Test Catalog',
      href: '/test-catalog',
      desc: '24 specific experiments by tier',
      keywords: ['test', 'catalog', 'experiment', 'tier', 'overview'],
      related: ['/tier-1-existing', '/tier-2-pilots', '/top-5-tests'],
    },
    {
      title: 'Tier 1: Existing Data',
      href: '/tier-1-existing',
      desc: '10 tests using available datasets',
      keywords: ['tier 1', 'existing', 'data', 'Gaia', 'SPARC', 'reanalysis'],
      prerequisites: ['/test-catalog'],
      related: ['/tier-2-pilots', '/galaxy-rotation'],
    },
    {
      title: 'Tier 2: Pilot Experiments',
      href: '/tier-2-pilots',
      desc: '4 tests, $50K\u2013$200K each',
      keywords: ['tier 2', 'pilot', 'experiment', 'EEG', 'circadian'],
      prerequisites: ['/test-catalog'],
      related: ['/tier-1-existing', '/tier-3-major'],
    },
    {
      title: 'Tier 3: Major Experiments',
      href: '/tier-3-major',
      desc: '7 tests requiring dedicated facilities',
      keywords: ['tier 3', 'major', 'experiment', 'facility', 'dedicated'],
      prerequisites: ['/test-catalog'],
      related: ['/tier-2-pilots', '/tier-4-frontier'],
    },
    {
      title: 'Tier 4: Frontier',
      href: '/tier-4-frontier',
      desc: '3 tests at the edge of current technology',
      keywords: ['tier 4', 'frontier', 'technology', 'edge', 'advanced'],
      prerequisites: ['/test-catalog'],
      related: ['/tier-3-major', '/top-5-tests'],
    },
    {
      title: 'Top 5 Decisive Tests',
      href: '/top-5-tests',
      desc: 'BAO, wide binary, anesthesia, GW-DM, cosmic interference',
      keywords: ['top', 'decisive', 'BAO', 'anesthesia', 'critical', 'key'],
      prerequisites: ['/test-catalog'],
      related: ['/tier-1-existing', '/tier-2-pilots'],
    },
    {
      title: 'Publication Roadmap',
      href: '/publication-roadmap',
      desc: '35 tracked manuscripts with readiness scores',
      keywords: ['publication', 'roadmap', 'manuscript', 'readiness', 'arXiv'],
      related: ['/publisher-track', '/status-dashboard'],
    },
    {
      title: 'Status Dashboard',
      href: '/status-dashboard',
      desc: 'Live tracking of prediction outcomes',
      keywords: ['status', 'dashboard', 'tracking', 'outcome', 'prediction'],
      related: ['/publication-roadmap', '/honest-assessment'],
    },
  ],

  'Interactive Tools': [
    {
      title: 'Coherence Explorer',
      href: '/coherence-explorer',
      desc: 'Compute C(\u03C1) with adjustable \u03B3 and \u03C1_crit',
      keywords: ['coherence', 'explorer', 'interactive', 'calculator', 'tool'],
      related: ['/coherence-function', '/gamma-parameter'],
    },
    {
      title: 'Scale Navigator',
      href: '/scale-navigator',
      desc: 'Slide from Planck to cosmic \u2014 see \u03B3 at every scale',
      keywords: ['scale', 'navigator', 'Planck', 'cosmic', 'slider', 'interactive'],
      related: ['/scale-invariance', '/gamma-parameter'],
    },
    {
      title: 'Galaxy Curve Plotter',
      href: '/galaxy-plotter',
      desc: 'Plot SPARC rotation curves with Synchronism overlays',
      keywords: ['galaxy', 'plotter', 'rotation', 'curve', 'SPARC', 'interactive'],
      related: ['/galaxy-rotation', '/mond-unification'],
    },
    {
      title: '\u03B3 Calculator',
      href: '/gamma-calculator',
      desc: 'Input N_corr, get \u03B3, see what regime you\'re in',
      keywords: ['gamma', 'calculator', 'N_corr', 'regime', 'compute'],
      related: ['/gamma-parameter', '/phase-transitions'],
    },
    {
      title: 'Phase Boundary Visualizer',
      href: '/phase-boundary-visualizer',
      desc: 'Interactive \u03B3 < 1 / \u03B3 \u2248 1 / \u03B3 > 1 diagram',
      keywords: ['phase', 'boundary', 'visualizer', 'diagram', 'interactive'],
      related: ['/phase-transitions', '/gamma-boundary'],
    },
    {
      title: 'MOND-Synchronism Comparator',
      href: '/mond-comparator',
      desc: 'Side-by-side a\u2080 derivation vs empirical MOND',
      keywords: ['MOND', 'comparator', 'derivation', 'comparison', 'a0'],
      related: ['/mond-unification', '/galaxy-rotation'],
    },
    {
      title: 'Prediction Tracker',
      href: '/prediction-tracker',
      desc: 'Status board: validated, untested, failed',
      keywords: ['prediction', 'tracker', 'status', 'board', 'tracking'],
      related: ['/test-catalog', '/status-dashboard'],
    },
    {
      title: 'Equation Walkthrough',
      href: '/equation-walkthrough',
      desc: 'Step through parameter derivations interactively',
      keywords: ['equation', 'walkthrough', 'derivation', 'step', 'interactive'],
      related: ['/parameter-derivations', '/coherence-function'],
    },
    {
      title: 'Chemistry Correlation Explorer',
      href: '/chemistry-correlation-explorer',
      desc: 'Browse the 1,703 phenomena, sort by correlation',
      keywords: ['chemistry', 'correlation', 'explorer', 'phenomena', 'browse'],
      related: ['/gamma-boundary', '/sound-velocity'],
    },
    {
      title: 'Consciousness Threshold Demo',
      href: '/consciousness-demo',
      desc: 'Visualize the C \u2248 0.50 convergence from 8 approaches',
      keywords: ['consciousness', 'threshold', 'demo', 'convergence', 'visualization'],
      related: ['/consciousness-threshold', '/hard-problem'],
    },
  ],
};

// Helper: get all pages as flat array
function getAllPages(): NavItem[] {
  return Object.values(navigationTree).flat();
}

// Get page info by href
export function getPageInfo(href: string): NavItem | undefined {
  return getAllPages().find(p => p.href === href);
}

// Get category name for a page
export function getCategory(href: string): string | undefined {
  for (const [category, pages] of Object.entries(navigationTree)) {
    if (pages.some(p => p.href === href)) {
      return category;
    }
  }
  return undefined;
}

// Get related pages with full NavItem objects
export function getRelatedPages(href: string): NavItem[] {
  const page = getPageInfo(href);
  if (!page?.related) return [];
  return page.related
    .map(r => getPageInfo(r))
    .filter((p): p is NavItem => p !== undefined);
}

// Get prerequisite pages with full NavItem objects
export function getPrerequisites(href: string): NavItem[] {
  const page = getPageInfo(href);
  if (!page?.prerequisites) return [];
  return page.prerequisites
    .map(r => getPageInfo(r))
    .filter((p): p is NavItem => p !== undefined);
}

// Search pages by query (relevance-scored)
export function searchPages(query: string): NavItem[] {
  const q = query.toLowerCase();
  const all = getAllPages();

  const scored = all.map(page => {
    let score = 0;
    const title = page.title.toLowerCase();
    const desc = page.desc.toLowerCase();
    const keywords = (page.keywords || []).map(k => k.toLowerCase());

    if (title.includes(q)) score += 100;
    if (title.startsWith(q)) score += 50;
    if (keywords.some(k => k.includes(q))) score += 30;
    if (desc.includes(q)) score += 10;

    return { page, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.page);
}
