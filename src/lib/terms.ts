export interface TermDefinition {
  term: string;
  fullName: string;
  brief: string;
  explanation?: string;
  learnMore?: string;
  canonicalSpec?: string;
  educationalNote?: string;
}

export const terms: Record<string, TermDefinition> = {
  'C(rho)': {
    term: 'C(\u03C1)',
    fullName: 'Coherence Function',
    brief: 'Maps density to coherence: C(\u03C1) = tanh(\u03B3 log(\u03C1/\u03C1_crit + 1)).',
    explanation: 'The central equation of Synchronism. Takes a physical density and returns a coherence value between 0 and 1, where 0 is fully incoherent (random) and 1 is fully coherent (ordered).',
    learnMore: '/coherence-function',
  },
  '\u03B3': {
    term: '\u03B3',
    fullName: 'Gamma Parameter',
    brief: 'Coupling strength: \u03B3 = 2/\u221AN_corr. Determines which regime you\'re in.',
    explanation: 'When \u03B3 << 1, behavior is quantum. When \u03B3 \u2248 1, you\'re at the quantum-classical boundary. When \u03B3 >> 1, behavior is classical. Derived from the number of correlated particles N_corr.',
    learnMore: '/gamma-parameter',
  },
  'N_corr': {
    term: 'N_corr',
    fullName: 'Correlation Number',
    brief: 'Number of particles moving as a correlated unit.',
    explanation: 'The fundamental input to \u03B3 = 2/\u221AN_corr. A single electron has N_corr = 1 (\u03B3 = 2, quantum). A crystal lattice might have N_corr = 10\u00B2\u2074 (\u03B3 \u2248 10\u207B\u00B9\u00B2, classical).',
    learnMore: '/gamma-parameter',
  },
  '\u03C1_crit': {
    term: '\u03C1_crit',
    fullName: 'Critical Density',
    brief: 'The density at which the coherence function transitions. \u03C1_crit = A \u00D7 V_flat\u00B2.',
    explanation: 'Below this density, coherence drops toward zero. Above it, coherence saturates toward one. Derived from fundamental constants and the rotation velocity of the system.',
    learnMore: '/critical-density',
  },
  'MRH': {
    term: 'MRH',
    fullName: 'Markov Relevancy Horizon',
    brief: 'The boundary beyond which interactions become statistically irrelevant.',
    explanation: 'Like an event horizon for causal influence. Beyond the MRH, correlations decay below the noise floor. In quantum mechanics, crossing the MRH IS what we call measurement/decoherence.',
    learnMore: '/mrh',
  },
  'a\u2080': {
    term: 'a\u2080',
    fullName: 'MOND Acceleration Scale',
    brief: 'Milgrom\'s acceleration constant: a\u2080 = cH\u2080/(2\u03C0) \u2248 1.08\u00D710\u207B\u00B9\u2070 m/s\u00B2.',
    explanation: 'In MOND, this is a fundamental constant. In Synchronism, it EMERGES from cosmology \u2014 it\'s the Hubble acceleration divided by 2\u03C0. This is one of Synchronism\'s strongest results.',
    learnMore: '/mond-unification',
  },
  'RAR': {
    term: 'RAR',
    fullName: 'Radial Acceleration Relation',
    brief: 'Tight correlation between observed and baryonic acceleration in galaxies.',
    explanation: 'Discovered in SPARC data: what you see (baryonic matter) predicts what you get (total gravitational acceleration) with very small scatter. Synchronism predicts the scatter should be environment-dependent.',
    learnMore: '/galaxy-rotation',
  },
  'A2ACW': {
    term: 'A2ACW',
    fullName: 'AI-to-AI Adversarial Collaboration Workshop',
    brief: 'Protocol where AI agents stress-test each other\'s claims.',
    explanation: 'One agent defends a claim, another demands operational definitions and falsification criteria. Produces falsifiable test cards and forces precision.',
    learnMore: '/a2acw',
  },
  '\u03BE': {
    term: '\u03BE',
    fullName: 'Compression Action',
    brief: 'Alternative formulation: \u03BE = topology + geometry + dynamics.',
    explanation: 'The compression action variable unifies matter (topology), gravity (geometry), and quantum mechanics (dynamics) into a single parameter that feeds into the coherence function.',
    learnMore: '/compression-action',
  },
  'SPARC': {
    term: 'SPARC',
    fullName: 'Spitzer Photometry & Accurate Rotation Curves',
    brief: 'Database of 175 galaxies with precise rotation curves and mass models.',
    explanation: 'The gold-standard dataset for testing galaxy rotation theories. Synchronism was tested against all 175 galaxies.',
    learnMore: '/galaxy-rotation',
  },
  'NP2': {
    term: 'NP2',
    fullName: 'New Prediction #2',
    brief: 'Synchronism\'s prediction that RAR scatter depends on environment.',
    explanation: 'Standard models predict RAR scatter is constant. Synchronism predicts it varies with local density. Statistical test: p = 5\u00D710\u207B\u2076, strongly supported.',
    learnMore: '/rar-scatter',
  },
  '\u03B7': {
    term: '\u03B7',
    fullName: 'Reachability Factor',
    brief: 'Superconductivity parameter equivalent to Abrikosov-Gor\'kov pair-breaking efficiency.',
    explanation: 'Synchronism independently derived this factor, which turned out to match a known 1960 result. An honest reparametrization, not a new discovery.',
    learnMore: '/superconductivity',
    educationalNote: 'Marked as reparametrization \u2014 this is known physics in new notation.',
  },
};

export function getTerm(key: string): TermDefinition | undefined {
  return terms[key];
}

export function getAllTerms(): TermDefinition[] {
  return Object.values(terms);
}
