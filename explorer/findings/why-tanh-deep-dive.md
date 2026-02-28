# Finding: Why Tanh? -- A Deep Dive Across Physics, Information Theory, and Maximum Entropy

## Origin
Topics: `mean-field-self-consistency.md`, `why-tanh.md` (combined exploration). Builds on the existing `mean-field-derivation-audit.md` finding, extending from "is the derivation valid?" to "what is the full landscape of contexts where tanh arises, and what does that tell us?"

## Summary
Tanh arises in physics whenever a system has exactly two competing states and the statistics are governed by Boltzmann weights. It is not one derivation but a constellation of convergent derivations from statistical mechanics, information theory, and maximum entropy principles. The key insight: tanh is the canonical link function for binary exponential-family distributions -- the unique function that converts an unbounded real parameter into a bounded probability under the maximum entropy principle. This is deeper than "mean-field theory gives tanh"; it is "any two-state system governed by Boltzmann statistics gives tanh."

---

## 1. Weiss Mean-Field Theory: The Full Derivation

### 1.1 The Ising Hamiltonian

Start with N spins s_i in {-1, +1} on a lattice with coordination number z:

```
H = -J sum_{<i,j>} s_i s_j - h sum_i s_i
```

where J > 0 is the exchange coupling (favoring alignment), h is an external field, and the sum is over nearest-neighbor pairs.

### 1.2 The Mean-Field Approximation

Write each spin as its average plus a fluctuation: s_i = <s> + delta_s_i, where <s> = eta (the order parameter / magnetization per spin). The interaction term becomes:

```
s_i s_j = (eta + delta_s_i)(eta + delta_s_j)
        = eta^2 + eta*delta_s_j + eta*delta_s_i + delta_s_i*delta_s_j
```

The mean-field approximation DISCARDS the delta_s_i * delta_s_j term (fluctuation-fluctuation correlations). This is the central assumption -- it becomes exact in infinite dimensions or infinite range.

### 1.3 The Effective Single-Spin Problem

After the approximation, the energy decomposes into independent single-spin contributions:

```
H_MF = const + sum_i [-h_eff * s_i]
```

where the effective field is:

```
h_eff = h + Jz * eta
```

Each spin now sees a single effective field h_eff, rather than interacting with all its neighbors. The problem reduces to a single two-level system.

### 1.4 Why Tanh: The Two-Level Partition Function

For a single spin s in {-1, +1} in field h_eff at temperature T:

```
Z = exp(+beta * h_eff) + exp(-beta * h_eff) = 2 cosh(beta * h_eff)
```

where beta = 1/(k_B T). The thermal average of the spin is:

```
<s> = [exp(+beta*h_eff) - exp(-beta*h_eff)] / [exp(+beta*h_eff) + exp(-beta*h_eff)]
    = tanh(beta * h_eff)
```

This is the KEY step. Tanh arises because:
1. There are exactly TWO states (+1 and -1)
2. They are weighted by Boltzmann factors exp(+/-beta*h_eff)
3. We compute the expectation value (difference/sum of Boltzmann weights)

ANY two-state system with Boltzmann statistics produces tanh. This is not specific to magnetism.

### 1.5 The Self-Consistency Equation

Since <s> = eta by definition, and <s> = tanh(beta * h_eff) from the partition function:

```
eta = tanh(beta * (h + Jz * eta))
```

For h = 0 (no external field):

```
eta = tanh(beta * Jz * eta)
```

This is a transcendental equation where eta appears on both sides. The trivial solution eta = 0 always exists. Nontrivial solutions exist when the slope of tanh at the origin exceeds 1:

```
d/d(eta) [tanh(beta Jz eta)]|_{eta=0} = beta Jz > 1
```

This defines the critical temperature:

```
T_c = Jz / k_B
```

### 1.6 Behavior Near the Critical Point

Taylor expand tanh(x) = x - x^3/3 + ... for small eta near T_c:

```
eta = (beta Jz) eta - (beta Jz)^3 eta^3/3 + ...
```

Solving:

```
eta^2 = 3(beta Jz - 1) / (beta Jz)^3
```

Near T_c, beta Jz ~ T_c/T ~ 1 + epsilon, so:

```
eta ~ sqrt(3 * (T_c - T)/T_c) ~ (T_c - T)^{1/2}
```

This gives the mean-field critical exponent beta = 1/2.

### 1.7 Connection to Landau Theory

The Landau free energy is obtained by expanding the free energy in powers of the order parameter:

```
F(eta) = F_0 + a(T - T_c) eta^2 + b eta^4 + ...
```

The mean-field self-consistency equation eta = tanh(beta Jz eta) is EXACTLY the equation of state dF/d(eta) = 0 for this Landau functional. The tanh equation and the Landau expansion are two representations of the same physics -- tanh is the exact mean-field equation, Landau is its Taylor expansion near the critical point.

### 1.8 Key Assumptions

The assumptions that produce tanh in Weiss theory are:
1. **Two-state variables** (spins in {-1, +1})
2. **Pairwise interactions** (the J sum over pairs)
3. **Mean-field approximation** (neglect fluctuation correlations)
4. **Thermal equilibrium** (Boltzmann statistics with well-defined temperature)

---

## 2. Where Tanh Arises Naturally in Physics

### 2.1 Paramagnetism: The Brillouin Function

For a quantum spin J in a magnetic field B, the magnetization is:

```
M = n g mu_B J B_J(x),  where x = g mu_B J B / (k_B T)
```

The Brillouin function B_J(x) is:

```
B_J(x) = [(2J+1)/(2J)] coth[(2J+1)x/(2J)] - [1/(2J)] coth[x/(2J)]
```

For J = 1/2 (two-state spin), this reduces EXACTLY to:

```
B_{1/2}(x) = tanh(x)
```

For large J (classical limit), it reduces to the Langevin function L(x) = coth(x) - 1/x.

The crucial point: tanh is the J = 1/2 (minimal, two-state) special case. Higher-spin systems give more complex functions. Tanh = two states.

### 2.2 BCS Superconductivity: The Gap Equation

The BCS gap equation at finite temperature T:

```
1 = g n(0) integral_0^{omega_D} d(xi) tanh(beta sqrt(Delta^2 + xi^2) / 2) / sqrt(Delta^2 + xi^2)
```

Tanh appears here because the Fermi-Dirac distribution can be rewritten in terms of tanh:

```
1 - 2f(E) = 1 - 2/(exp(beta E) + 1) = tanh(beta E / 2)
```

The factor 1 - 2f(E) represents the difference between the probability of a state being empty vs. occupied -- again, a TWO-STATE competition (occupied/unoccupied), giving tanh via the same Boltzmann-weight mechanism.

### 2.3 Neural Networks: Historical Derivation

The connection between neural networks and statistical mechanics is not just an analogy -- it is a direct derivation via Boltzmann machines.

In a Restricted Boltzmann Machine (RBM), hidden units h_j are binary: h_j in {0, 1}. The conditional probability of h_j = 1 given visible units v is:

```
P(h_j = 1 | v) = sigma(sum_i w_{ij} v_i + b_j)
```

where sigma is the logistic sigmoid sigma(x) = 1/(1+exp(-x)).

Since tanh(x) = 2 sigma(2x) - 1, units encoded as {-1, +1} instead of {0, 1} use tanh:

```
<h_j> = tanh(sum_i w_{ij} v_i + b_j)
```

This is EXACTLY the same derivation as Weiss mean-field theory: binary units with Boltzmann statistics. The "temperature" parameter from physics becomes the inverse of a scaling factor in the neural network.

### 2.4 Information Theory: Binary MMSE Estimation

For a binary input X in {-1, +1} (uniform prior) transmitted through an AWGN channel Y = sqrt(snr) X + W (W ~ N(0,1)), the MMSE estimator (posterior mean) is:

```
E[X | Y = y] = tanh(snr * y)
```

Derivation via Bayes' theorem:

```
P(X = +1 | Y) = exp(+sqrt(snr)*y) / [exp(+sqrt(snr)*y) + exp(-sqrt(snr)*y)]
P(X = -1 | Y) = exp(-sqrt(snr)*y) / [exp(+sqrt(snr)*y) + exp(-sqrt(snr)*y)]

E[X|Y] = (+1)*P(X=+1|Y) + (-1)*P(X=-1|Y)
        = tanh(sqrt(snr) * y)
```

Once more: two states (+1, -1), Gaussian likelihood ratios that produce exponential weights, and the expectation = tanh. The channel SNR plays the role of inverse temperature; the observation y plays the role of the local field.

### 2.5 Bose-Einstein Condensation

The condensate fraction for an ideal Bose gas in a box:

```
N_0/N = 1 - (T/T_c)^{3/2}
```

where T_c proportional to n^{2/3} (density to the 2/3 power).

This is NOT tanh. The BEC order parameter is a power law in temperature, not a sigmoid in density. This is because:
- BEC is not a two-state competition but a macroscopic occupation of one state
- The statistics are Bose-Einstein, not Boltzmann
- There is no self-consistency equation of the form eta = f(eta) in the ideal gas

However, in interacting BEC with self-consistent Popov approximation, the condensate fraction does satisfy a self-consistent equation involving the anomalous density. But the functional form involves integrals over Bose distribution functions, not tanh.

### 2.6 Percolation on the Bethe Lattice

On a Bethe lattice (tree graph) with coordination number z, the probability that a site belongs to the infinite cluster satisfies:

```
P_inf = 1 - (1 - p * Q)^z
```

where Q (the probability that a branch leads to the infinite cluster) satisfies:

```
Q = 1 - (1 - p * Q)^{z-1}
```

The critical threshold is p_c = 1/(z-1). Near p_c:

```
P_inf ~ (p - p_c)^1   [critical exponent beta = 1]
```

This is NOT tanh either. The self-consistency equation has the form Q = 1 - (1-pQ)^{z-1}, which is polynomial, not involving exponentials. The mean-field critical exponent is beta = 1 (not 1/2 as for Ising). Percolation is in a different universality class than the order-disorder transitions that give tanh.

---

## 3. What Makes Tanh Special Among Sigmoids?

### 3.1 Tanh vs. Logistic Sigmoid

The logistic sigmoid sigma(x) = 1/(1+exp(-x)) and tanh(x) are related by:

```
tanh(x) = 2 sigma(2x) - 1
sigma(x) = (1 + tanh(x/2)) / 2
```

They are the SAME function, rescaled:
- sigma maps R -> (0, 1) -- probabilities
- tanh maps R -> (-1, 1) -- symmetric order parameters

The choice between them is a choice of encoding:
- Binary variable in {0, 1}: use sigma (Bernoulli natural parameter)
- Binary variable in {-1, +1}: use tanh (Ising spin convention)

For Synchronism, where C in [0, 1], the logistic sigmoid is the more natural choice IF coherence is thought of as a probability. The tanh form C = tanh(x) for x >= 0 maps [0, infinity) -> [0, 1) and is equivalent to the logistic form after reparametrization.

### 3.2 Tanh vs. Error Function (erf)

```
erf(x) = (2/sqrt(pi)) integral_0^x exp(-t^2) dt
```

Key comparison:
- tanh arises from DISCRETE two-state systems (Ising spins, binary channels)
- erf arises from CONTINUOUS Gaussian distributions (cumulative distribution, diffusion)

Both are odd, monotonic, and bounded by [-1, 1]. They are numerically close: erf(x) ~ tanh(2x/sqrt(pi)) to good approximation. But their origins differ:

| Property | tanh | erf |
|----------|------|-----|
| Origin | Ratio of exponentials | Integral of Gaussian |
| Appears when | Discrete two-state Boltzmann statistics | Continuous Gaussian probability |
| Phase transition model | Ising (discrete spins) | Gaussian model |
| Inverse function | arctanh (logit) | erfinv |
| Exponential decay to limits | Yes: 1 - 2 exp(-2x) | Yes: 1 - exp(-x^2)/(x sqrt(pi)) |

For Synchronism's purpose (density -> coherence mapping), the question of tanh vs. erf depends on whether the underlying system is better modeled as:
- A discrete two-state choice (quantum vs. classical) -> tanh
- A continuous distribution of states with Gaussian fluctuations -> erf

### 3.3 Is There a Uniqueness Theorem for Tanh?

**No.** There is no theorem stating "the only bounded monotonic function satisfying conditions X is tanh." Multiple functions satisfy the standard requirements (bounded, monotonic, smooth, saturating):
- tanh(x)
- erf(x)
- (2/pi) arctan(x)
- x / sqrt(1 + x^2)
- The logistic sigmoid (rescaled)
- Hill functions x^n / (x^n + K^n)

What IS true is a weaker but still powerful statement:

**Characterization (exponential family)**: Among all functions that arise as the mean parameter of a two-state exponential family distribution (the canonical link function), the logistic sigmoid (and hence tanh by rescaling) is UNIQUE. This follows from the structure of exponential families: the Bernoulli distribution P(X=1) = p has natural parameter eta = log(p/(1-p)), and the inverse map p = sigma(eta) = 1/(1+exp(-eta)) is the logistic function. No other function plays this role.

**Characterization (mean-field theory)**: Among all functions that arise as the self-consistent equation for a mean-field order parameter in a system with two energy levels and Boltzmann statistics, tanh is UNIQUE. This follows from the partition function calculation in Section 1.4 above.

**Characterization (Menon et al., 1995)**: "Simple sigmoids" are defined as odd, asymptotically bounded, completely monotone functions. "Hyperbolic sigmoids" form a proper subset and are a natural generalization of tanh. The inverses of hyperbolic sigmoids can be characterized via Euler's incomplete beta functions.

So tanh is not the unique sigmoid, but it IS the unique sigmoid arising from two-state Boltzmann/exponential-family statistics.

---

## 4. Self-Consistency Equations in Density-Coherence Contexts

### 4.1 The Structure of Self-Consistency

In mean-field theory, a self-consistency equation has the form:

```
m = F(m, external parameters)
```

where m (the order parameter) appears on BOTH sides. The key physics: the order parameter creates the field that sustains itself.

Systems with self-consistent density-coherence relationships:

### 4.2 BCS Superconductivity (Revisited)

The gap Delta(T) satisfies:

```
Delta = V integral d(xi) Delta / (2 sqrt(xi^2 + Delta^2)) * tanh(sqrt(xi^2 + Delta^2) / (2 k_B T))
```

This IS self-consistent: Delta appears on both sides. The tanh carries the temperature dependence. The order parameter (the gap) determines the quasiparticle spectrum, which determines the thermal occupation (via tanh), which determines the gap.

Density enters through the density of states n(0) at the Fermi level. Higher density of states -> higher T_c -> larger gap at a given T. So there IS a density -> order parameter relationship, mediated by self-consistency.

### 4.3 Superfluid Helium

The superfluid fraction rho_s/rho satisfies a self-consistent equation involving the normal fluid excitation spectrum, which itself depends on the superfluid density (because the excitation spectrum changes when the condensate is present). At T = 0:

```
rho_s = rho (total density -> full superfluidity at T = 0)
```

Near T_lambda:

```
rho_s/rho ~ (1 - T/T_lambda)^{2/3}  [3D XY universality class]
```

This is NOT tanh, and the critical exponent (2/3 rather than 1/2) reflects the importance of fluctuations beyond mean-field.

### 4.4 Percolation (Revisited)

The percolation probability P_inf(p) on the Bethe lattice:

```
Near p_c: P_inf ~ (p - p_c)^1
At general p: P_inf = 1 - (1 - pQ)^z  [Q from self-consistency]
```

This maps "density" (occupation probability p) to "coherence" (connectivity/percolation probability P_inf). It is a self-consistent sigmoid-like function. But the functional form is polynomial, not tanh.

### 4.5 The Synchronism Structure

As the previous audit (mean-field-derivation-audit.md) identified, Synchronism's equation:

```
C(rho) = tanh(gamma * log(rho/rho_crit + 1))
```

is an EXPLICIT function, not a self-consistent equation. Density rho is the external parameter; C is the response. In the Weiss analogy, this corresponds to the RESPONSE IN AN EXTERNAL FIELD:

```
m(h) = tanh(beta * h)    [single spin in a field, no self-consistency]
```

NOT to the self-consistent equation:

```
m = tanh(beta Jz m)      [coupled spins, self-consistency]
```

The distinction matters. In the self-consistent equation, the phase transition EMERGES from the equation itself. In the explicit equation, the "transition" at rho_crit must be put in by hand.

However, this is not necessarily a weakness. Many physical systems have external control parameters (temperature, density, pressure) and an order parameter that responds to them. The question is whether there is a FEEDBACK mechanism where coherence affects density. If coherence influences gravitational dynamics, which affects mass distribution, which affects density -- then there IS a self-consistent loop at the astrophysical scale, even if the equation is written as an explicit function.

---

## 5. Maximum Entropy and Tanh

### 5.1 The MaxEnt Framework

The principle of maximum entropy (Jaynes, 1957): given constraints, the least-informative distribution maximizing Shannon entropy should be chosen.

For a discrete variable X with outcomes {x_1, ..., x_n}:

```
Maximize: H = -sum_i p_i log(p_i)
Subject to: sum_i p_i = 1 and sum_i f_k(x_i) p_i = F_k (moment constraints)
```

Using Lagrange multipliers:

```
L = -sum_i p_i log(p_i) + lambda_0 (sum_i p_i - 1) + sum_k lambda_k (sum_i f_k(x_i) p_i - F_k)
```

Setting dL/dp_i = 0:

```
p_i = exp(lambda_0 - 1) exp(sum_k lambda_k f_k(x_i))
```

This IS the exponential family form. MaxEnt distributions ARE exponential family distributions. This is a theorem, not a conjecture.

### 5.2 The Binary Case: How Sigmoid/Tanh Arise

For a binary variable X in {0, 1} with one constraint E[X] = p_bar:

```
Maximize: H = -p_0 log(p_0) - p_1 log(p_1)
Subject to: p_0 + p_1 = 1, p_1 = p_bar
```

The MaxEnt solution is the Bernoulli distribution: P(X=1) = p_bar, P(X=0) = 1-p_bar.

Now suppose we parametrize the constraint in terms of a feature theta:

```
E[X] = p_bar(theta) = ?
```

The exponential family natural parameter is eta = log(p_bar/(1-p_bar)), and the inverse map is:

```
p_bar = sigma(eta) = 1/(1 + exp(-eta)) = exp(eta)/(1 + exp(eta))
```

This IS the logistic sigmoid. It is the UNIQUE function that maps the natural parameter of a Bernoulli distribution to its mean parameter.

For the {-1, +1} encoding (where E[X] can range from -1 to +1):

```
E[X] = tanh(eta/2)
```

So tanh arises as the canonical mean function for a binary MaxEnt distribution with {-1, +1} encoding.

### 5.3 The Specific Question: What If C in [0,1] with Monotonicity and Saturation?

Consider maximizing entropy of a "classification" variable C in {0, 1} (fully quantum or fully classical) with a constraint that the expected value depends on density:

```
E[C | rho] = ?
```

From MaxEnt with a linear sufficient statistic:

```
P(C = 1 | rho) = sigma(lambda * g(rho)) = 1/(1 + exp(-lambda * g(rho)))
```

where g(rho) is the sufficient statistic and lambda is the Lagrange multiplier.

The expected coherence is:

```
E[C | rho] = sigma(lambda * g(rho))
```

or equivalently (shifting to [-1, 1] encoding):

```
E[C | rho] = tanh(lambda * g(rho) / 2)
```

**What determines g(rho)?** The MaxEnt principle alone does not determine the sufficient statistic. It tells you the FUNCTIONAL FORM is sigmoid/tanh, but the ARGUMENT depends on what you constrain.

If the constraint is E[g(rho) * C] = constant, and g(rho) = gamma * log(rho/rho_crit + 1), then:

```
E[C | rho] = tanh(gamma * log(rho/rho_crit + 1))
```

which is exactly Synchronism's formula. But the log-density form of g(rho) must come from somewhere -- either from physics (the information content scales logarithmically with particle number) or from a separate argument.

### 5.4 Summary of the MaxEnt Route

1. **What MaxEnt gives you for free**: The sigmoid/tanh functional form is the UNIQUE MaxEnt solution for a binary outcome variable. This is a theorem.

2. **What MaxEnt does NOT give you**: The specific argument of the tanh. The function g(rho) = gamma * log(rho/rho_crit + 1) must be derived or postulated separately.

3. **The connection to mean-field theory**: MaxEnt with binary states + energy constraint is EQUIVALENT to the Boltzmann distribution for a two-level system. The mean-field derivation (Section 1) and the MaxEnt derivation (this section) are the SAME derivation in different notation.

---

## 6. Synthesis: What This Means for Synchronism

### 6.1 The Strong Case for Tanh

Tanh is NOT an arbitrary choice. It is the unique function arising from:
- Two-state Boltzmann statistics (Weiss mean-field theory)
- Exponential family / natural parameter structure (Bernoulli distribution)
- Maximum entropy with binary outcome constraints (Jaynes)
- Optimal estimation for binary signals in Gaussian noise (information theory)

All four derivations are mathematically equivalent. They all say the same thing: **if you have a binary distinction (quantum vs. classical, up vs. down, signal vs. noise) governed by thermal/statistical equilibrium, the response function is tanh (or equivalently, the logistic sigmoid).**

### 6.2 The Specific Derivation for Synchronism

The argument for C(rho) = tanh(gamma * log(rho/rho_crit + 1)):

**Step 1** (strong): At any given density, a system is in superposition of "quantum" and "classical" behavior. This is a binary distinction. From MaxEnt / Boltzmann statistics / mean-field theory, the coherence (expected classical fraction) is:

```
C = tanh(h_eff / 2)    or    C = sigma(h_eff)
```

where h_eff is the effective field driving the system toward classicality.

**Step 2** (moderate): The effective field depends on density through information content. With N particles, the information available for decoherence scales as log(N+1). Since N ~ rho * V:

```
h_eff = gamma * log(rho/rho_crit + 1)
```

The log is motivated by information theory (entropy scales logarithmically with the number of microstates) and by the practical requirement of handling 80+ orders of magnitude in density.

**Step 3** (moderate): gamma = 2 from phase space dimensionality or fluctuation scaling.

### 6.3 What the Site Should Say

**Current claim** (from /coherence-function): "From mean-field theory, tanh is the unique sigmoid that arises naturally from these constraints."

**More precise claim**: "Tanh is the unique response function for a binary order parameter governed by Boltzmann statistics. This is a theorem from statistical mechanics (the Brillouin function for spin-1/2) and equivalently from the maximum entropy principle (the canonical link function for the Bernoulli distribution). The specific argument gamma * log(rho/rho_crit + 1) is motivated by information-theoretic scaling but is not uniquely derived from the same principles."

### 6.4 The Gap That Remains

The previous audit identified the key gap: the identification beta*z*J = gamma * log(rho/rho_crit + 1). This research confirms that gap. MaxEnt gives you the tanh wrapper but not its argument. Mean-field theory gives you the self-consistency equation but requires specifying the coupling. The log-density form is well-motivated but is ultimately a modeling choice, not a derived consequence.

This is not a fatal flaw. In BCS theory, the coupling constant g is not derived from first principles either -- it comes from the electron-phonon interaction, which is a separate calculation. The functional form (tanh in the gap equation) and the coupling are logically independent. The same structure applies here: tanh is derived, the argument is modeled.

---

## 7. Comparison Table: Where Tanh Does and Does Not Arise

| System | Order Parameter | Self-Consistent? | Functional Form | Why? |
|--------|----------------|-------------------|-----------------|------|
| Ising mean-field | Magnetization m | Yes: m = tanh(betaJzm) | tanh | Two spin states, Boltzmann |
| Paramagnet (J=1/2) | Magnetization M | No (response to field) | tanh | Brillouin B_{1/2} = tanh |
| Paramagnet (J>1/2) | Magnetization M | No | Brillouin B_J(x) | More than 2 states |
| BCS superconductor | Gap Delta(T) | Yes: gap equation | tanh appears in integrand | 1-2f(E) = tanh(betaE/2) |
| Neural network (binary) | Hidden unit <h_j> | No (feedforward) | tanh or sigma | Two-state Boltzmann |
| Binary MMSE estimation | E[X\|Y] | No (posterior mean) | tanh(snr*y) | Two states, Gaussian likelihood |
| BEC (ideal) | Condensate fraction | No (explicit) | N_0/N = 1-(T/T_c)^{3/2} | Bose statistics, NOT two-state |
| Percolation (Bethe) | P_infinity | Yes: Q = 1-(1-pQ)^{z-1} | Polynomial, NOT tanh | Geometric connectivity |
| Superfluidity | rho_s/rho | Yes (Popov) | Non-tanh | Beyond mean-field |
| Landau theory | Order parameter eta | Yes: dF/d(eta) = 0 | tanh (exact MF), power law (near T_c) | Equivalent to Ising MF |
| MaxEnt binary | P(X=1) | No (unique solution) | sigma (logistic) | Exponential family |

---

## Implications for the Site

1. **The "Why Tanh?" section should present the derivation at two levels**:
   - Level 1 (accessible): "Any time you have a binary choice governed by statistics, the response is tanh. This is a mathematical theorem, not a modeling decision."
   - Level 2 (technical): The partition function derivation from Section 1.4, showing Z = 2cosh and <s> = tanh.

2. **The site should clearly separate**:
   - tanh as functional form (derived from physics, shared across Weiss, BCS, MaxEnt, information theory)
   - The argument of tanh (modeled, not uniquely derived)

3. **The self-consistency framing needs precision**: C(rho) is a response function (like m(h) in a field), not a self-consistent order parameter (like m in zero field). Both are legitimate physics, but they are different claims.

4. **The coupling experiment page already does the right thing**: It tests tanh against Hill and finds Hill fits slightly better (delta AIC = 4). This honesty should be highlighted, not buried. The theoretical argument for tanh is about its origin in physics, not about fit quality.

## Action: Maintainer

- Consider adding a "Why Tanh: The Full Argument" page or section that presents:
  - The partition function derivation (accessible, step by step)
  - The MaxEnt derivation (for information-theory audiences)
  - The honest statement: "tanh is derived; the argument log(rho/rho_crit+1) is modeled"
- Update the existing claims "tanh is the unique sigmoid" to "tanh is the unique sigmoid from two-state Boltzmann statistics" (since erf, arctan, Hill also satisfy the generic requirements)
- The coupling experiment's finding that Hill beats tanh by delta AIC = 4 deserves prominence: it shows the framework is honest about its limitations

## Open Threads

1. **Fisher information geometry**: The Fisher information metric on the space of Bernoulli distributions is ds^2 = dp^2 / (p(1-p)). The natural coordinate is the logit eta = log(p/(1-p)), in which the metric is flat. Is there an information-geometric argument for the log-density form of h_eff? If the "space of coherence states" has a natural Riemannian structure, the log-density might emerge from geodesic considerations.

2. **Beyond binary**: If the quantum/classical distinction is not strictly binary but continuous (a continuum of decoherence levels), does tanh still arise? In the continuous limit, the Brillouin function approaches the Langevin function L(x) = coth(x) - 1/x, which is NOT tanh. This would argue for tanh only if the binary approximation is physical.

3. **Self-consistency at cosmological scales**: If C affects gravitational dynamics (through modified gravity / dark matter connection), and gravity affects mass distribution, and mass distribution determines density, then there IS a self-consistent loop: C -> gravity -> rho -> C. Has anyone written down this loop explicitly?

4. **The +1 regularization from MaxEnt**: In the MaxEnt derivation, the sufficient statistic could naturally include a "+1" if the constraint is on log(rho/rho_crit + 1) rather than log(rho/rho_crit). Is there an information-theoretic reason for this specific regularization?

5. **Temperature analogy**: In the Weiss derivation, beta = 1/(k_B T) controls the sharpness of the transition. In Synchronism, gamma plays this role. Is there a physical "temperature" that gamma corresponds to? The fluctuation scaling gamma = 2/sqrt(N_corr) suggests it is related to the correlation length, which in Ising systems is set by temperature. This connection could be made more explicit.

---

## Sources

- [Physics LibreTexts: Ising model - Weiss molecular-field theory](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_(Likharev)/04:_Phase_Transitions/4.04:_Ising_model_-_Weiss_molecular-field_theory)
- [Brillouin and Langevin functions - Wikipedia](https://en.wikipedia.org/wiki/Brillouin_and_Langevin_functions)
- [Maximum entropy distributions - Joshua Goings](http://joshuagoings.com/2021/06/21/maximum-entropy-distributions/)
- [Deriving distributions using MaxEnt - sgfin.github.io](https://sgfin.github.io/2017/03/16/Deriving-probability-distributions-using-the-Principle-of-Maximum-Entropy/)
- [Menon et al. (1995): Characterization of a Class of Sigmoid Functions](https://www.sciencedirect.com/science/article/pii/0893608095001077)
- [BCS gap equation self-consistency - ETH Zurich](https://people.phys.ethz.ch/~ivanov/cmt/1213/ssth-lectureC.pdf)
- [BEC condensation - Physics LibreTexts](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_(Likharev)/03:_Ideal_and_Not-So-Ideal_Gases/3.04:_The_Bose-Einstein_condensation)
- [Binary-input AWGN channel - Durisi notes](https://gdurisi.github.io/fbl-notes/bi-awgn.html)
- [On the relationship between sigmoid, softmax and tanh](https://blog.itdxer.com/2025/03/20/on-relation-between-sigmoid-softmax-and-tanh.html)
- [Guo, Shamai, Verdu: Mutual Information and MMSE in Gaussian Channels](http://web.mit.edu/6.454/www/www_fall_2004/latticedecoding/GuoShamaiVerduSubmitted.pdf)
- [Percolation theory - Bethe lattice](https://www.thp.uni-koeln.de/trebst/Lectures/Scripts/CompManyBody-2021/Percolation.pdf)
- [Landau theory - Physics LibreTexts](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.05:_Landau_Theory_of_Phase_Transitions)
- [Condensate and superfluid fraction - Nature Scientific Reports (2024)](https://www.nature.com/articles/s41598-024-65897-2)
