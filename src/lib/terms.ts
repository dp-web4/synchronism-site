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
    brief: 'Maps presence to coherence: C(\u03C1) = tanh(\u03B3 log(\u03C1/\u03C1_crit + 1)).',
    explanation: 'The central equation of Synchronism. Takes presence (\u03C1) \u2014 the density of compatible structural elements within a Markov Relevancy Horizon \u2014 and returns a coherence value between 0 and 1. Physical density (g/cm\u00B3) is one form of presence, but presence also encompasses temperature, energy levels, catalytic surfaces, and other factors that support emergence.',
    learnMore: '/coherence-function',
  },
  '\u03B3': {
    term: '\u03B3',
    fullName: 'Gamma Parameter',
    brief: 'Coupling strength: \u03B3 = 2/\u221AN_corr. Determines which regime you\'re in.',
    explanation: 'When \u03B3 << 1, behavior is quantum. When \u03B3 \u2248 1, you\'re at the quantum-classical boundary. When \u03B3 >> 1, behavior is classical. Derived from N_corr. Structurally, \u03B3 encodes MRH coupling density \u2014 how efficiently compatible presence within an MRH converts into coherent state transitions (\u03B3 \u221D \u03BB\u00B7K/D, where \u03BB = interaction strength, K = connectivity, D = dimensionality).',
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
    fullName: 'Critical Presence Threshold',
    brief: 'The presence level at which the coherence function transitions. \u03C1_crit = A \u00D7 V_flat\u00B2 (astrophysical case).',
    explanation: 'Below this presence level, coherence drops toward zero. Above it, coherence saturates toward one. In the astrophysical case, derived from fundamental constants and rotation velocity. More generally, \u03C1_crit represents the minimal presence required for sustained coherence given the system\u2019s \u03B3.',
    learnMore: '/critical-density',
  },
  'MRH': {
    term: 'MRH',
    fullName: 'Markov Relevancy Horizon',
    brief: 'The minimal set of interacting degrees of freedom whose state transitions materially influence coherence evolution.',
    explanation: 'Like an event horizon for causal influence. Beyond the MRH, correlations decay below the noise floor. An MRH must satisfy predictive sufficiency (removing any element inside it degrades prediction) and predictive closure (adding elements outside it doesn\u2019t improve prediction). In quantum mechanics, crossing the MRH IS measurement/decoherence. Presence (\u03C1) is defined relative to an MRH: change the MRH, presence changes.',
    learnMore: '/mrh',
  },
  'presence': {
    term: 'Presence (\u03C1)',
    fullName: 'Compatible Structural Elements within MRH',
    brief: 'A scalar representation of compatible degrees of freedom available within a Markov Relevancy Horizon, sufficient to support emergent coherence.',
    explanation: 'Presence is not merely quantity \u2014 it encodes compatibility, configuration, and environmental suitability. Physical density is one form of presence, but presence also encompasses temperature, energy levels, catalytic surfaces, field gradients, and lower-fractal scaffolding. Formally: \u03C1 = f(compatibility vector), the scalar projection of a multidimensional compatibility space. Must be quantifiable, domain-transparent, MRH-dependent, and falsifiable.',
    learnMore: '/coherence-function',
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
  'coherence': {
    term: 'Coherence',
    fullName: 'Collective Behavior Measure',
    brief: 'How collectively a group of elements behaves, from independent (0) to fully synchronized (1).',
    explanation: 'Low coherence: elements act independently (like stars in a galaxy). High coherence: elements move in lockstep (like electrons in a superconductor). The coherence function C(\u03C1) maps presence to this 0\u20131 scale.',
    learnMore: '/coherence-function',
  },
  'phase transition': {
    term: 'Phase Transition',
    fullName: 'Abrupt Change in System Behavior',
    brief: 'A sudden shift in how a system behaves, like water freezing or a magnet losing its magnetism.',
    explanation: 'In Synchronism, the quantum-to-classical transition is modeled as a phase transition controlled by \u03B3. At \u03B3 \u2248 1, systems sit right at the boundary \u2014 where chemistry, biology, and the most interesting physics occur.',
    learnMore: '/phase-transitions',
  },
  'reparametrization': {
    term: 'Reparametrization',
    fullName: 'Known Physics in New Notation',
    brief: 'When a result turns out to be equivalent to existing physics expressed in different variables.',
    explanation: 'Several Synchronism results (e.g., the \u03B7 reachability factor = Abrikosov-Gor\u2019kov pair-breaking) are reparametrizations. The site marks these honestly with orange badges. The novelty is in unification, not in each individual result.',
    learnMore: '/honest-assessment',
    educationalNote: 'Not a failure \u2014 reparametrizations confirm the framework is consistent with known physics, but they don\u2019t count as new predictions.',
  },
  'tanh': {
    term: 'tanh',
    fullName: 'Hyperbolic Tangent',
    brief: 'A mathematical function that smoothly maps any input to a value between \u22121 and +1 (or 0 and 1 when shifted).',
    explanation: 'Appears naturally in mean-field theory as the self-consistent solution for ordering in many-body systems (e.g., the Ising model of magnetism). Synchronism uses tanh because it arises from the physics, not as an arbitrary choice \u2014 though other S-curves (sigmoid, erf) share similar properties.',
    learnMore: '/coherence-function',
  },
  'mean-field theory': {
    term: 'Mean-Field Theory',
    fullName: 'Average-Interaction Approximation',
    brief: 'A physics approach where each particle feels the average effect of all others, not individual interactions.',
    explanation: 'Simplifies many-body problems by replacing complex particle-by-particle interactions with a single "mean field." The tanh function in Synchronism\'s coherence equation comes from the self-consistency condition in mean-field theory, the same way it appears in the Ising model of magnetism.',
    learnMore: '/parameter-derivations',
  },
  '\u039BCDM': {
    term: '\u039BCDM',
    fullName: 'Lambda Cold Dark Matter',
    brief: 'The standard model of cosmology: the universe is ~68% dark energy (\u039B), ~27% cold dark matter, ~5% ordinary matter.',
    explanation: 'The mainstream cosmological framework that explains the universe\'s expansion, galaxy formation, and cosmic microwave background. Synchronism doesn\'t replace \u039BCDM \u2014 it proposes an alternative interpretation of what "dark matter" represents (coherence effects rather than invisible particles).',
    learnMore: '/dark-matter-reframed',
  },
  'MOND': {
    term: 'MOND',
    fullName: 'Modified Newtonian Dynamics',
    brief: 'An alternative to dark matter: gravity behaves differently at very low accelerations (below a\u2080 \u2248 1.2\u00D710\u207B\u00B9\u2070 m/s\u00B2).',
    explanation: 'Proposed by Milgrom in 1983. Successfully predicts galaxy rotation curves without dark matter. Synchronism claims to derive MOND\'s acceleration constant a\u2080 from cosmological parameters, making it emergent rather than fundamental.',
    learnMore: '/mond-unification',
  },
  'V_flat': {
    term: 'V_flat',
    fullName: 'Flat Rotation Velocity',
    brief: 'The constant speed at which stars orbit in the outer parts of a galaxy.',
    explanation: 'Galaxy rotation curves show that stars far from the center orbit at roughly constant speed instead of slowing down (as Newton predicts). This "flat" velocity is the key observable that reveals the dark matter problem.',
    learnMore: '/galaxy-rotation',
  },
  'qualia': {
    term: 'Qualia',
    fullName: 'Subjective Experience',
    brief: 'The "what it\'s like" of conscious experience \u2014 the redness of red, the pain of pain.',
    explanation: 'In Synchronism, qualia are modeled as coherence resonance patterns that emerge when C crosses \u2248 0.50. This is speculative and untested. The site marks all consciousness claims with appropriate caveats.',
    learnMore: '/qualia-as-coherence',
    educationalNote: 'All consciousness predictions are untested. This is the most speculative part of the framework.',
  },
  'falsifiability': {
    term: 'Falsifiability',
    fullName: 'Can Be Proven Wrong',
    brief: 'A prediction is falsifiable if there exists an observation that would disprove it.',
    explanation: 'Every Synchronism prediction has a defined "kill criterion" \u2014 a specific outcome that would falsify it. This is what separates testable science from unfalsifiable speculation. The site documents both successful and failed predictions.',
    learnMore: '/falsifiability',
  },
  'CRT analogy': {
    term: 'CRT Analogy',
    fullName: 'Superposition as Temporal Scanning',
    brief: 'An electron beam scans so fast it appears everywhere at once. Measurement = sampling at different sync rates.',
    explanation: 'A CRT display\u2019s electron beam creates different perceptions depending on sampling rate: a stable image (slow), flickering bands (medium), or a single dot (fast). Nothing about the screen changes \u2014 only synchronization timing. Synchronism claims quantum phenomena work the same way: superposition is temporal scanning, collapse is catching the dot, and entanglement is two synchronized screens.',
    learnMore: '/two-reframes',
  },
  'raster entanglement': {
    term: 'Raster Entanglement',
    fullName: 'Entanglement as Synchronized Scanning',
    brief: 'Two patterns cycling in perfect sync show identical behavior regardless of distance. No information travels between them.',
    explanation: 'Like two CRT screens displaying identical pictures from synchronized electron beams: sample either screen at any rate, and both show the same thing simultaneously. Not because information traveled, but because their cycles were correlated from the start. Synchronism\u2019s explanation for quantum entanglement.',
    learnMore: '/two-reframes',
  },
  'decoherence': {
    term: 'Decoherence',
    fullName: 'Loss of Quantum Behavior',
    brief: 'The process by which quantum superpositions break down and systems start behaving classically.',
    explanation: 'In standard physics, decoherence occurs through interaction with the environment. In Synchronism, decoherence IS the MRH crossing \u2014 when correlations extend beyond the Markov Relevancy Horizon, quantum behavior transitions to classical.',
    learnMore: '/decoherence-mrh',
  },
};

export function getTerm(key: string): TermDefinition | undefined {
  return terms[key];
}

export function getAllTerms(): TermDefinition[] {
  return Object.values(terms);
}
