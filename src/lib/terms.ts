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
    brief: 'Maps presence to coherence: C(\u03C1) = tanh(\u03B3 ln(\u03C1/\u03C1_crit + 1)).',
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
  'BTFR': {
    term: 'BTFR',
    fullName: 'Baryonic Tully-Fisher Relation',
    brief: 'Empirical power-law between a galaxy\'s total baryonic mass and its flat rotation velocity: M_bar ∝ V_flat^n.',
    explanation: 'The BTFR is one of the tightest empirical relations in galaxy dynamics: baryonic mass (stars + gas) scales as a power law of the asymptotic flat rotation velocity. The slope n depends on the sample regime: n → 4 in deep-MOND galaxies (SPARC-dominated), n ≈ 2.75 for transition-regime full samples (Synchronism Session 193), n → 2 near-Newtonian. Lelli et al. 2019 found n = 3.85 ± 0.09 for the SPARC deep-MOND-dominated sample — consistent with the regime-dependent prediction. The BTFR is a textbook MOND signature; a positive result would be consistent with both MOND and Synchronism.',
    learnMore: '/tier-1-existing',
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
  'ALFALFA-SDSS': {
    term: 'ALFALFA-SDSS',
    fullName: 'Arecibo Legacy Fast ALFA × Sloan Digital Sky Survey',
    brief: 'A cross-matched catalog of ~15,000 galaxies combining 21-cm HI gas masses (ALFALFA) with optical properties and environment metrics (SDSS).',
    explanation: 'ALFALFA (Arecibo Legacy Fast ALFA) mapped HI 21-cm radio emission from nearby galaxies, providing gas masses and rotation widths. Cross-matching with SDSS gives stellar masses, star formation rates, and large-scale environment metrics. The combined ALFALFA-SDSS catalog was used to test Synchronism\'s environment-dependent RAR scatter prediction (TEST-03). Result: R² = 0.14, below the pre-registered kill criterion of R² > 0.20 — the test failed.',
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
    explanation: 'In Ising mean-field theory, tanh arises naturally from the self-consistency loop m = tanh(\u03b2Jz\u00b7m). In Synchronism, there is no such self-consistency \u2014 the tanh shape is a phenomenological choice motivated by Landau-universality. Any sigmoid (logistic, erf, arctan, Hill) satisfying the same boundary conditions would be an equally valid choice. See /parameter-derivations for the explicit disclaimer.',
    learnMore: '/coherence-function',
  },
  'kill criterion': {
    term: 'Kill criterion',
    fullName: 'Falsification Threshold',
    brief: 'A specific, pre-registered outcome that would falsify a prediction if observed.',
    explanation: 'Each Tier-1 test has a kill criterion: a numerical threshold that, if crossed, means the framework\'s prediction is wrong. Example: TEST-02 kill is "wide-binary anomaly is independent of local stellar density." Kill criteria are stated before the data is analyzed, not after \u2014 this is what makes them falsifying rather than rationalizing. The set of kill criteria is the framework\'s most important methodological contribution.',
    learnMore: '/test-catalog',
  },
  'mean-field theory': {
    term: 'Mean-Field Theory',
    fullName: 'Average-Interaction Approximation',
    brief: 'A physics approach where each particle feels the average effect of all others, not individual interactions.',
    explanation: 'Simplifies many-body problems by replacing complex particle-by-particle interactions with a single "mean field." In the Ising model, the self-consistency condition m = tanh(βJz·m) produces the tanh function naturally. Synchronism borrows the tanh shape by analogy — motivated by Landau-universality — but there is no self-consistency loop in C(ρ).',
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
  'badge-postdiction': {
    term: 'Post-diction',
    fullName: 'Validation Label: Post-diction',
    brief: 'Formula or derivation produced after the confirming experiment was already published.',
    explanation: 'A post-diction matches known data but was not a forward prediction — the experiment\'s result was already in the literature when the formula was derived. Epistemically weaker than "Validated" (genuine pre-registered prediction confirmed) but distinct from "Reparametrization" (notation change). Post-dictions can be valuable as consistency checks and can motivate forward predictions, but they do not independently confirm a framework.',
    learnMore: '/research-philosophy',
  },
  'badge-validated': {
    term: 'Validated',
    fullName: 'Validation Badge: Validated',
    brief: 'Quantitative match with independent observational or experimental data.',
    explanation: 'The claim has been compared to real data and agreed quantitatively. Not all "Validated" results are novel \u2014 some may be reparametrizations of known physics (in which case they carry both badges). "Validated" means the numbers check out, not that the physics is new.',
    learnMore: '/honest-assessment',
  },
  'badge-untested': {
    term: 'Untested',
    fullName: 'Validation Badge: Untested',
    brief: 'A specific prediction exists, but the relevant data or experiment has not been run.',
    explanation: '"Untested" is not a failure \u2014 it means nobody has looked yet. Many Synchronism predictions in astrophysics and quantum measurement are Untested because this lab cannot run experiments and the specific test has not been done by others.',
    learnMore: '/honest-assessment',
  },
  'badge-failed': {
    term: 'Failed',
    fullName: 'Validation Badge: Failed',
    brief: 'Prediction was tested and contradicted by data, with a specific error documented.',
    explanation: 'Failed predictions are not removed \u2014 they are documented with the exact error. Examples: YBCO T_c predicted 607K (observed 93K, 6.5\u00d7 error); Bullet Cluster dark matter viscosity sign wrong. Failures stay visible.',
    learnMore: '/honest-assessment',
  },
  'badge-speculative': {
    term: 'Speculative',
    fullName: 'Validation Badge: Speculative',
    brief: 'A conceptual proposal without a specific quantitative test defined.',
    explanation: 'Speculative claims are ideas the framework motivates but has not turned into falsifiable predictions. They may become testable with more development. Higher epistemic risk than Untested, which has a defined test.',
    learnMore: '/honest-assessment',
  },
  'badge-reparametrization': {
    term: 'Reparametrization (badge)',
    fullName: 'Validation Badge: Reparametrization',
    brief: 'The result is mathematically equivalent to existing physics expressed in different variables.',
    explanation: 'A reparametrization is not a failure \u2014 it shows the framework is consistent with known physics. But it is not a new prediction. Example: the \u03b7 reachability factor = Abrikosov-Gor\u2019kov pair-breaking (1960). The honest assessment tracks reparametrizations separately from genuinely novel predictions.',
    learnMore: '/honest-assessment',
  },
  'badge-strongly-supported': {
    term: 'Strongly Supported',
    fullName: 'Validation Badge: Strongly Supported',
    brief: 'Consistent with data at high statistical significance, but with caveats (prior art, limited R\u00b2, etc.).',
    explanation: 'Used when the data supports the claim but the support is not fully discriminating \u2014 e.g., the effect could also be explained by an existing model, or the effect size is small. Stronger than "Supported" but weaker than "Validated."',
    learnMore: '/honest-assessment',
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
  'ln': {
    term: 'ln',
    fullName: 'Natural Logarithm',
    brief: 'The logarithm base e (\u2248 2.718). Compresses very large ranges into manageable numbers.',
    explanation: 'ln(x) answers: "what power must I raise e to, to get x?" For example, ln(1) = 0, ln(e) = 1, ln(100) \u2248 4.6. In the coherence function C(\u03c1) = tanh(\u03b3 \u00b7 ln(\u03c1/\u03c1_crit + 1)), the natural log compresses the enormous density range of physical systems (interstellar gas to neutron stars spans 80+ orders of magnitude) into a range that tanh can differentiate. The "+1" inside the log ensures the argument is always \u2265 1, so ln \u2265 0 and C \u2265 0.',
    learnMore: '/coherence-function',
  },
  'baryon': {
    term: 'Baryon',
    fullName: 'Ordinary Matter Particle',
    brief: 'Protons, neutrons, and everything made of them \u2014 the ordinary matter you can touch.',
    explanation: '"Baryonic matter" means ordinary matter (atoms, stars, gas, dust) as opposed to dark matter or dark energy. About 5% of the universe\'s total energy content is baryonic. When galaxy rotation pages mention "baryonic mass" or "baryon density," they mean the mass of ordinary visible matter \u2014 the stars, gas, and dust you can actually observe.',
    learnMore: '/galaxy-rotation',
  },
  'BAO': {
    term: 'BAO',
    fullName: 'Baryon Acoustic Oscillations',
    brief: 'A characteristic spacing (~150 Mpc) imprinted in galaxy distributions by sound waves in the early universe.',
    explanation: 'Before the universe cooled enough for atoms to form, matter and light were coupled in a hot plasma. Sound waves propagated through this plasma, and when atoms formed (at "recombination"), these waves froze in place. Today, galaxies are preferentially spaced ~150 Mpc apart \u2014 a "standard ruler" used to measure the universe\'s expansion history. Synchronism\'s TEST-04 predicts a ~10\u207b\u2074 shift in this spacing between high- and low-density environments.',
    learnMore: '/bao-coherence-modulation',
  },
  'DESI': {
    term: 'DESI',
    fullName: 'Dark Energy Spectroscopic Instrument',
    brief: 'A large-scale sky survey at Kitt Peak Observatory measuring galaxy spectra to map cosmic expansion.',
    explanation: 'DESI (Dark Energy Spectroscopic Instrument) is a spectroscopic survey that measures the redshifts of ~40 million galaxies and quasars to map the universe\'s large-scale structure. DESI Data Release 1 (DR1, 2024) provided the most precise measurements to date of f\u03c3\u2088 (the combined growth-rate parameter) across multiple redshift bins. Synchronism\'s TEST-04a predicted f\u03c3\u2088(z=0.51) \u2248 0.418, below \u039bCDM; DESI DR1 observed \u2248 0.55 \u00b1 0.06, above \u039bCDM. This 2.4\u03c3 disagreement is the framework\'s first adjudication by external data.',
    learnMore: '/honest-assessment',
  },
  'sigma8': {
    term: '\u03c3\u2088',
    fullName: 'Matter Fluctuation Amplitude',
    brief: 'Measures how "lumpy" the universe is on 8 Mpc/h scales. A key cosmological parameter.',
    explanation: '\u03c3\u2088 (sigma-8) quantifies the amplitude of matter density fluctuations on scales of 8 Megaparsecs per h (where h is the dimensionless Hubble constant). A higher \u03c3\u2088 means galaxies clump more strongly; a lower \u03c3\u2088 means smoother distribution. Planck CMB data gives \u03c3\u2088 \u2248 0.83; weak-lensing surveys (KiDS, DES) give \u03c3\u2088 \u2248 0.77\u20130.80. This "S\u2088 tension" is an active area of cosmology. Synchronism Session 107 predicted \u03c3\u2088 \u2248 0.76; DESI DR1 measures \u03c3\u2088 = 0.841 \u00b1 0.034, disfavoring the prediction at 2.4\u03c3.',
    learnMore: '/honest-assessment',
  },
  'fsigma8': {
    term: 'f\u03c3\u2088',
    fullName: 'Growth-Rate \u00d7 Amplitude Parameter',
    brief: 'The product of the growth rate f(z) and the matter fluctuation amplitude \u03c3\u2088 \u2014 a key observable for structure growth.',
    explanation: 'f\u03c3\u2088(z) combines two cosmological measurements: f(z) = d(ln D)/d(ln a), the logarithmic growth rate of structure (how fast overdensities grow), and \u03c3\u2088(z), the amplitude of matter fluctuations at redshift z. Together they quantify how rapidly large-scale structure is building up. Higher f\u03c3\u2088 = faster growth = more clustering. Synchronism Session 107 predicted f\u03c3\u2088(z=0.51) \u2248 0.418, below \u039bCDM (\u22480.474). DESI DR1 measured \u22480.55 \u00b1 0.06, above \u039bCDM \u2014 a 2.4\u03c3 disagreement with Synchronism, and a sign reversal relative to the prediction.',
    learnMore: '/honest-assessment',
  },
  'BIC': {
    term: 'BIC',
    fullName: 'Bayesian Information Criterion',
    brief: 'A model-selection score that penalizes free parameters. Lower BIC = better model given data. \u0394BIC > 10 is strong evidence against the weaker model.',
    explanation: 'BIC = k\u00b7ln(n) \u2212 2\u00b7ln(L), where k is the number of free parameters, n is the number of data points, and L is the maximum likelihood. The \u0394BIC between two models quantifies the evidence in favor of the model with lower BIC. By convention: |\u0394BIC| < 2 = negligible evidence, 2\u20136 = positive evidence, 6\u201310 = strong evidence, >10 = very strong evidence. In the Synchronism context, the unanswered question is: does C(\u03c1) achieve a lower BIC than (a) a polynomial of similar order, (b) the MOND RAR interpolating function, or (c) other sigmoid companders (logistic, Hill, erf)? This comparison has not yet been run.',
    learnMore: '/honest-assessment',
  },
  'sigma-stat': {
    term: '\u03c3 (statistical)',
    fullName: 'Standard Deviation / Statistical Significance',
    brief: 'A number like "2.4\u03c3" means the result is 2.4 standard deviations from the expected value \u2014 roughly a 1-in-60 chance if the model is correct.',
    explanation: 'In statistics, \u03c3 (sigma) is the standard deviation \u2014 a measure of how spread out a distribution is. When scientists say a result is "2.4\u03c3 away" from a prediction, they mean: if the prediction were exactly correct, there is about a 1.6% chance of seeing a discrepancy this large by random chance. The conventional thresholds in physics are: 2\u03c3 = "interesting" (~2% chance), 3\u03c3 = "evidence" (~0.3% chance), 5\u03c3 = "discovery" (~0.00003% chance). A 2.4\u03c3 disagreement (like DESI DR1 vs Synchronism\'s f\u03c3\u2088 prediction) is taken seriously but is not by itself a definitive refutation.',
  },
};

export function getTerm(key: string): TermDefinition | undefined {
  return terms[key];
}

export function getAllTerms(): TermDefinition[] {
  return Object.values(terms).sort((a, b) =>
    a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase())
  );
}
