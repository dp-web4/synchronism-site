# Finding: Mean-Field Theory Derivation of the Coherence Function -- Full Audit

## Origin
Self-directed exploration prompted by the question: Does the Synchronism research archive contain an actual mean-field derivation of C(rho), or is the "derivation" claim a post-hoc rationalization of a curve-fit?

## Summary
The archive contains an extensive but structurally incomplete mean-field derivation. The self-consistency equation C = tanh(beta z J C) from Weiss/Curie-Weiss theory is explicitly invoked (Sessions #46, #66), but the critical physical step -- demonstrating *why* the effective coupling beta z J equals gamma * log(rho/rho_crit + 1) -- is handled by identification rather than derivation. The tanh functional form is well-motivated from multiple convergent arguments; the specific argument inside the tanh is less rigorously grounded.

## Research Notes

### 1. Where the Mean-Field Derivation Lives

The core derivation is spread across three documents:

- `/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session46_Theoretical_Foundations.md` -- Five "convergent derivation paths" to tanh, including mean-field
- `/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session66_All_Parameters_Derived.md` -- Track C: the most explicit mean-field derivation
- `/mnt/c/exe/projects/ai-agents/Synchronism/simulations/session66_tanh_derivation.py` -- Computational document of the derivation
- `/mnt/c/exe/projects/ai-agents/Synchronism/simulations/session46_tanh_axiom_derivation.py` -- Five derivation paths implemented

The canonical summary is in:
- `/mnt/c/exe/projects/ai-agents/Synchronism/docs/theory/PARAMETER_DEFINITIONS_AND_DERIVATIONS.md`

### 2. The Self-Consistency Equation

**Is there an actual self-consistency equation analogous to m = tanh(beta J z m)?**

YES. Session #66 Track C states explicitly:

```
Step 1: Mean-Field Theory
In a system of N coupled "coherence units":
    C = tanh(beta z J C)  [self-consistent equation]
where:
    beta = inverse temperature
    z = coordination number
    J = coupling strength

Step 2: Coupling Identification
The effective coupling depends on density through phase space modes:
    beta z J = gamma * log(rho/rho_crit + 1)
```

The self-consistency equation is present. However, what happens between Step 1 and the final formula is an **identification**, not a derivation. The text says "The effective coupling depends on density through phase space modes" and then writes down the log-density expression. It does not derive this relationship from a Hamiltonian or partition function.

### 3. The Gap: Why Does beta*z*J = gamma * log(rho/rho_crit + 1)?

This is the weakest link in the derivation chain. Multiple justifications are offered, none fully rigorous:

**Justification A (Session #66)**: "Phase space modes scale with density." The number of modes N_modes ~ rho, so log(N_modes) ~ log(rho). This maps the coupling to a logarithm of density.

**Justification B (Session #46, Path 2 -- Saturation Dynamics)**: A bistable potential V(C,rho) = -a/2 C^2 + b/4 C^4 - rho*C is proposed. In mean-field approximation, C = tanh(beta * h_eff) where h_eff = h + J*C. Then the external field h is mapped to log(rho/rho_crit + 1) because "density spans many orders of magnitude" and "physics is scale-invariant."

**Justification C (Session #46, Path 3 -- Information Theory)**: Maximum entropy with binary choice (classical vs quantum) gives Boltzmann weights exp(E_c) and exp(E_q). Defining E_c - E_q = 2*gamma*log(rho/rho_crit + 1) yields tanh.

**Justification D (Session #74, summarized in THEORETICAL_STATUS_DEC2025.md)**: Information content of N particles I(N) = I_0 * log(N+1), with N proportional to rho. Coherence = normalized information, bounded by tanh.

**Assessment**: Each justification is plausible but involves a definitional step. The log-density form is POSTULATED (with good motivation from information theory and dynamic range arguments) rather than DERIVED from a specific Hamiltonian. This is the honest statement in the back-annotation from 2026-02-21: "The scaling constants use V_flat as input and show fitting-like residuals."

### 4. Why tanh Specifically? (Multiple Arguments)

The case for tanh as the functional form is stronger than the case for the specific argument:

**Argument 1 -- Uniqueness theorem (Session #46, MRH derivation)**:
Requirements: (i) bounded in [-1,1], (ii) monotonic, (iii) saturates at +/-1, (iv) antisymmetric, (v) smooth (C-infinity).
Claim: tanh is the "unique simplest" function satisfying all five.

This is NOT actually a theorem -- erf(x), (2/pi)*arctan(x), and x/sqrt(1+x^2) also satisfy all five requirements. Session #47 acknowledges this and tests alternatives. The distinction comes from:
- tanh has exponential saturation (thermodynamically natural, from Boltzmann statistics)
- tanh arises from the ratio of exponentials e^x/(e^x + e^-x), which IS the Boltzmann partition function for two states
- tanh IS the mean-field order parameter equation solution

**Argument 2 -- Mean-field theory (Session #66)**:
The Ising/Curie-Weiss mean-field self-consistency equation C = tanh(beta z J C) gives tanh directly. This is the strongest physical argument. If you accept that coherence units interact via a mean-field coupling, tanh follows.

**Argument 3 -- Information theory (Session #46, Path 3)**:
Binary choice between classical and quantum states with Boltzmann weights gives the logistic sigmoid sigma(x) = 1/(1+e^-x). The relationship tanh(x) = 2*sigma(2x) - 1 connects to tanh.

**Argument 4 -- Witnessing dynamics (Session #46, Path 5)**:
A rate equation dW/dt = k_up*(1-W)*rho - k_down*W at steady state gives W = rho/(rho + rho_crit), which is a sigmoid. Log-transforming and rescaling gives tanh.

**Net assessment**: The tanh form is well-motivated from statistical mechanics. It is the natural function for a mean-field order parameter. The archive provides genuine convergent arguments for why tanh and not, say, erf or arctan.

### 5. The Physical Argument: Density -> Coherence

**What is the physical picture connecting density to coherence?**

Multiple pictures coexist in the archive:

**Picture A (Sessions #14, early)**: "Observer density." Each particle is an observer. More particles = more observation events = higher coherence. Coherence grows sublinearly because observations become redundant (information-theoretic diminishing returns). This gave gamma ~ 0.3 in early sessions.

**Picture B (Sessions #46-67, main track)**: "Decoherence competition." In a field of coherence units, there is competition between re-coherence (density-driven coupling) and decoherence (thermal fluctuations). At critical density, the coupling exceeds the critical threshold for ordered phase. The system undergoes a mean-field phase transition from incoherent (C ~ 0, "dark matter dominated") to coherent (C ~ 1, "classical"). This is analogous to the paramagnetic-to-ferromagnetic transition in Weiss theory.

**Picture C (Session #186, later)**: "Pattern interaction." Patterns interact resonantly (matter), dissonantly (antimatter), or indifferently (dark matter). The probability of resonant interaction at density rho follows Boltzmann statistics, giving a power-law sigmoid.

**Picture D (Session #218)**: "Gravitational degree-of-freedom partitioning." C(a) represents the fraction of gravitational modes that are locally coherent versus cosmically entangled. At high acceleration/density, all modes are local (C -> 1); at low acceleration, modes are entangled with the cosmic scale (C -> Omega_m).

**Assessment**: The physical picture evolved significantly. The early "observer density" picture was closer to an analogy. The mature "mean-field phase transition" picture (Picture B) is the most physically grounded but still relies on the analogy between coherence units and Ising spins without specifying the microscopic Hamiltonian.

### 6. gamma = 2: Phase Space Derivation

The parameter gamma = 2 has two derivation paths:

**Path 1 (Session #64)**: Phase space dimensionality.
```
gamma = d_position + d_momentum - d_constraints = 3 + 3 - 4 = 2
```
The 4 constraints are 3 momentum conservation + 1 energy conservation. This gives "2 effective degrees of freedom for coherence dynamics."

**Path 2 (GAMMA_UNIFICATION.md, 2026-01-30)**: Fluctuation scaling.
```
gamma = 2/sqrt(N_corr)
```
For galactic systems, N_corr = 1 (uncorrelated classical particles), giving gamma = 2. For quantum systems with correlations, gamma < 2.

**Path 3 (Session #64, alternative)**: Renormalization group. Mean-field critical exponent nu = 1/2 gives eta = 2.

**Assessment of gamma = 2**: The phase space argument (Path 1) is a dimensional counting argument that gives the right number but does not constitute a derivation from dynamics. The fluctuation scaling (Path 2) is more physical and connects to the chemistry track. However, Session #395 found that the quantitative predictions from gamma = 2/sqrt(N_corr) are "~5-10x too large" when tested against SPARC data, calling the specific numerical relationship into question.

### 7. Evolution and Self-Correction

The archive shows significant self-correction:

- **Session #14** used gamma = 0.3 and a power-law C ~ rho^gamma (no tanh, no log)
- **Session #46** introduced tanh and derived gamma = 2 from decoherence theory
- **Session #66** consolidated the mean-field derivation
- **Session #186** proposed an alternative form with golden ratio exponent 1/phi
- **Session #218** revisited with C(a) using acceleration instead of density
- **Session #395** tested gamma = 2/sqrt(N_corr) against data and found it "NOT CONFIRMED"
- **2026-02-21 back-annotation** revised the status to distinguish "derived functional form" from "scaling constants with fitting-like residuals"

This evolution shows intellectual honesty -- the framework was repeatedly revised as derivations were tested against data.

### 8. What is Derived vs What is Asserted

| Component | Status | Evidence |
|-----------|--------|----------|
| tanh as functional form | WELL-MOTIVATED | Convergent arguments from mean-field theory, information theory, witnessing dynamics. Not uniquely selected (erf, arctan also work) but physically preferred. |
| log(rho/rho_crit) as argument | MOTIVATED BUT NOT DERIVED | Information-theoretic argument (dynamic range, entropy) is plausible. Not derived from a Hamiltonian. |
| "+1" inside log | REGULARIZATION | Prevents divergence at rho=0. Not physical -- purely technical. |
| gamma = 2 | DIMENSIONAL ARGUMENT | Phase space counting gives 2. Consistent with thermal decoherence scaling. But Session #395 found quantitative predictions fail at ~5-10x amplitude. |
| gamma = 2/sqrt(N_corr) | FAILED QUANTITATIVELY | Session #395: "NOT CONFIRMED by the data." Amplitude ~700% too large. |
| rho_crit = A * V^B | SEMI-DERIVED | B = 0.5 from virial + size scaling (Session #67). A from dimensional analysis with 5% accuracy but possible implicit calibration through V_flat. |
| Self-consistency equation | PRESENT BUT INCOMPLETE | C = tanh(beta z J C) is stated. But the self-consistent solution C != 0 requires beta z J > 1, and whether this is guaranteed at rho = rho_crit depends on the identification step. |

### 9. The Actual Self-Consistency Structure

In standard Weiss theory: m = tanh(beta J z m) is solved self-consistently. For T > T_c, only m=0 is stable. For T < T_c, a nonzero m appears. The transition is at beta_c J z = 1.

In Synchronism: C = tanh(gamma * log(rho/rho_crit + 1)) is NOT self-consistent in the same way. It is an EXPLICIT function of rho, not an implicit equation for C. The self-consistency is claimed at an earlier step: "C = tanh(beta z J C)" with "beta z J = gamma * log(rho/rho_crit + 1)." But substituting, this gives:

```
C = tanh(gamma * log(rho/rho_crit + 1) * C)
```

This IS self-consistent (C appears on both sides). However, this is NOT the formula actually used. The formula used is:

```
C = tanh(gamma * log(rho/rho_crit + 1))
```

WITHOUT the factor of C on the right side. This means the formula used is the fixed-point solution of the self-consistency equation ONLY if:
- The self-consistent solution satisfies C * log(rho/rho_crit + 1) = log(rho/rho_crit + 1), i.e., C = 1
- OR the interpretation is that the "C" in the mean-field equation has been absorbed into the effective coupling

This is a subtle but important gap. The archive does not explicitly resolve it.

### 10. Comparison to Actual Weiss Theory

| Aspect | Weiss Mean-Field | Synchronism Coherence |
|--------|-----------------|----------------------|
| Order parameter | m (magnetization) | C (coherence) |
| Self-consistency | m = tanh(beta J z m) | C = tanh(beta z J C) [claimed] |
| What is used | The self-consistent solution m(T) | C(rho) = tanh(gamma * log(rho/rho_crit + 1)) [explicit] |
| External field | h (applied magnetic field) | log(rho/rho_crit + 1) [density acts as field] |
| Phase transition | T_c = J z / k_B | rho_crit defined externally |
| Microscopic basis | Exchange interaction J between spins | Not specified for coherence units |

The key difference: In Weiss theory, the self-consistency equation with h=0 has the order parameter appear on BOTH sides, and the phase transition emerges from the equation itself. In Synchronism, the density acts as an external field (analogous to h != 0 in Weiss), which means C is an explicit function of rho, not a self-consistent solution. This is physically reasonable (density is an external parameter, not determined by coherence) but it means the "self-consistency" claim is overstated. The correct analogy is: the density-dependent formula is the RESPONSE FUNCTION C(h_eff) where h_eff = gamma * log(rho/rho_crit + 1), analogous to m(h) in a ferromagnet with an applied field.

## Implications for the Site

The live site's "Why Tanh?" content should accurately reflect the derivation status:

1. **Strong claim**: tanh is the natural function from mean-field statistical mechanics for an order parameter with two-state competition. Multiple convergent arguments support this.

2. **Moderate claim**: The logarithmic argument log(rho/rho_crit + 1) is motivated by information theory and dynamic range but is not derived from a microscopic Hamiltonian.

3. **Weak claim**: The formula is "derived from first principles with no free parameters." The 2026-02-21 back-annotation already corrected this to "derived via dimensional analysis, calibrated against observations."

4. **Important nuance**: The formula used is NOT actually self-consistent in the Weiss sense. It is an explicit response function C(rho), which is a different (and arguably more appropriate) structure. The site could frame this more precisely.

## Action: Maintainer

- The "Why Tanh?" page should clearly distinguish what IS derived (tanh form from mean-field/information theory) from what is IDENTIFIED (the log-density argument)
- The self-consistency framing should be made precise: density acts as an external field, giving C as a response function, not a self-consistent order parameter
- The gamma = 2 phase space argument should note Session #395's finding that quantitative predictions fail at amplitude level
- The honest assessment should reflect the 2026-02-21 back-annotation

## Open Threads

1. **The missing Hamiltonian**: Can a specific microscopic Hamiltonian for "coherence units" be written down, from which the log-density coupling would follow? This would close the derivation gap.

2. **Self-consistency vs response function**: Is there a version of the theory where C truly satisfies a self-consistent equation C = f(C, rho), and does this change any predictions?

3. **The gamma amplitude problem**: Session #395 found gamma = 2/sqrt(N_corr) gives amplitudes ~5-10x too large. Is this a normalization issue or a structural problem?

4. **Competing functional forms**: Session #186 proposed a power-law sigmoid with golden ratio exponent instead of tanh with log. Session #218 used acceleration instead of density. These alternative forms give similar quality fits. What discriminating test could distinguish them?

5. **The +1 regularization**: The "+1" inside the log is a regularization, not physics. Is there a physical derivation that gives the correct low-density limit without this ad hoc term?
