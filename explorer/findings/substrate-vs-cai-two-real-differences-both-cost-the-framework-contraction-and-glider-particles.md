# Finding: The substrate differs from 't Hooft's CAI in two places, and both differences cost the framework. It contracts where CAI permutes, and its particles are the "gliders" 't Hooft calls hopeless.

## Origin
Topic `how-does-the-substrate-differ-from-thooft-cellular-automaton-interpretation.md` (maintainer 2026-11-25, from visitor
Pass 4). Pre-registered test: `PREREG-substrate-vs-cai-permutation-test-20261125.md` (commit `ffac773`, before running).
Script: `explorer/tools/substrate_cai_permutation_test.py`. Output: `explorer/tools/substrate_cai_permutation_test_output.json`.
Unregistered follow-ups:
- the resolution sweep (`explorer/tools/substrate_cai_msweep_exploratory.py` → `substrate_cai_msweep_exploratory_output.json`);
- the energy diagnosis and the Rb-87 tail bound (`explorer/tools/substrate_cai_energy_diag.py` →
  `substrate_cai_energy_diag_output.txt`).

## Summary
The maintainer's stake was that **no difference from CAI changes a prediction**. As stated, it is **refuted**: there are
two structural differences, and each changes what the framework predicts or must prove.

1. **Dynamics class.** CAI needs the evolution to be a *permutation* of ontological states. Two of the framework's three
   dynamics on file are contractions instead:
   - the **stated rule** (FUNDAMENTALS §1/§3). Σ I² is a Lyapunov function, so its only recurrent states are fixed
     points, plus a Nyquist checkerboard at the stability edge. CAI's construction then yields H_eff with frequencies
     {0, π/δt} only, which means no quantum dynamics.
   - the **measurement primitive** (SPINE "phase-lock"; kuramoto-lattice-suite 02/05). It is many-to-one by
     construction (≈ 7 bits erased per lock in 50 steps, and still falling).

   Only the **working substrate** (Stage-1 Arm D, the focusing Klein-Gordon lattice the arc converged on) is in CAI's
   class. Made bit-reversible with integer leapfrog, it reverses bit-exactly (18/18). It keeps its breathers at the float
   rate only at ≳ 2¹²–2¹⁴ levels per unit amplitude, and matches float exactly at 2²⁰. There is a reproducible **dead
   band at 2⁸–2¹¹** where breathers die.
2. **Particle ontology.** SPINE's entities are ontic "recurring patterns of the field"; Phase 1.6 says "electron =
   localized envelope". CAI's particles are **templates**: superpositions over ontological states, explicitly
   ψ-epistemic. 't Hooft considers the alternative, "every individual particle would have to behave like a 'glider
   solution' of a cellular automaton", and calls it "hopeless" (§5.7.6, on exponential decay). On CAI's side, single-particle
   interference is automatic, because any permutation is unitary in the ontological basis. On the pattern side it must be
   **produced by lump dynamics**. A lump that interferes through its own tail is excluded: for Rb-87 at the 54 cm
   Kovachy separation, its binding would have to be ≲ 10⁻³⁴ of mc². What remains requires a guiding background field,
   i.e. the walking-droplet class, whose own double-slit result is contested.

The branch on which the maintainer's stake **holds** is the one the archive has not chosen: the working substrate, plus
particles as templates, plus measurement as emergent decoherence. That branch is CAI with a specific Hamiltonian lattice
rule, and it inherits CAI's three open problems unsolved: Hamiltonian positivity, Lorentz invariance, and the Standard
Model.

## Research Notes

### What CAI is (verified passages, arXiv:1405.1548v3 HTML, Dec 2015; fetch-agent quotes, section numbers only)
- Permutation: "the evolution operator for a sufficiently fine mesh of time variables, does nothing more than permute
  the states" (§5.4); information loss is handled by equivalence classes: "Each info-equivalence class corresponds to an
  element of the ontological basis of a quantum theory" (§7.1).
- ψ-epistemic: "we do not wish to attach any ontological meaning to the wave function, *if we are using it as a
  template*" (§3.3); "Atoms, molecules and fields are templates" (Fig. 6 caption, §4.3.1).
- Superdeterminism, owned: "Apparent conspiracy is a feature, not a bug" (§5.7.3); "ontology conservation law" (§3.6).
- Open problems, stated as open: "The positivity of the Hamiltonian is one of the prime stumbling blocks" (§10); "the
  generic cellular automaton will not even remotely be Lorentz invariant" (§5.2); "accommodating for non-compact
  symmetries such as Lorentz invariance is extremely difficult" (§9.1); Standard Model symmetry not reproduced (§10.4).
- Particles as gliders (§5.7.6 "Exponential decay"), as fragments: "every individual particle would have to behave like a
  'glider solution' of a cellular automaton … This would be hopeless to accommodate for … millions, or billions of
  different glider modes would have to exist". His fix: "the particles are surrounded by a vacuum that is in a
  different ontological state every time". (Paraphrase: decay randomness comes from the vacuum's microstate, not from
  the particle.)
- Not verified: the Springer FTP vol. 185 details (abstract page has no journal-ref); gr-qc/9903084 not fetched.

**The joint requirement has no CAI answer to borrow.** The 11-21 joint requirement is a preferred frame that the
low-energy dynamics cannot see. 't Hooft has no Lorentz mechanism. So the "nearest answer to the framework's open
question" the topic hoped for does not exist; the requirement is open in CAI too.

### E1: the stated rule is outside CAI's class (with one boundary exception)
- **Analytic.** For any conservative first-order rule with downhill bond flux and R_e ≥ 0,
  dΣI²/dt = −2 Σ_e D R_e (ΔI_e)² ≤ 0. This holds for any n, any dimension, and wherever R is evaluated. A strict
  Lyapunov function forbids every periodic orbit except fixed points. **Stage 1's empirical "0/24 oscillate" for Arm A
  is therefore a theorem for all initial conditions**, inside the time-step stability bound.
- **Float check (P1a, held).** Over 240 in-bound runs (1D at D·dt = 0.01 and 0.30; 2D at 0.01; n ∈ {1,2,4,8}): 0 runs
  with a ΣI² increase, 0 with ≥ 4 core reversals. Outside the bound every run violates, and many "oscillate" (this was
  the control). Labelling error of mine: I tagged 2D D·dt = 0.30 as in-bound, but the 2D bound is 1/z = 0.25. Those
  runs behave like the outside control (12–20/20 increases). They are not a P1a failure.
- **Integer functional graph (P1b, partly failed).** Exhaustive on rings with L = 5, 6, 7 (59k–118k states). The map is
  non-injective in 12/12 configurations, and conservation was checked exactly. Every recurrent state is a fixed point,
  **except** on the even ring at κ = 1/z = 0.5: 6 of 117,649 states form **period-2 checkerboards**
  ([2 0 2 0 2 0] ↔ [0 2 0 2 0 2], at equal ΣI²). This is the overshoot I named as the risk, and it sits exactly at the
  stability edge. The prediction "> 50 % Garden-of-Eden" failed in 2/12 configurations (L = 7, κ = 0.25: 0.40).
- **CAI reading.** On the attractor set, the emergent frequencies are 0 (fixed points) or π/δt (the lattice doubler at
  the Planck frequency). There is no low-energy quantum dynamics. Of all the dynamics the framework has on file, the
  stated rule is the one CAI's machinery says cannot be quantum.

### E2: the measurement primitive is a contraction (P2 qualitative held, quantitative failed)
`φ ← φ + 0.2·sin(θ − φ)` maps 4,096 phase bins onto 34 after 50 steps (6.9 bits erased; I predicted ≤ 2 bins / 12
bits). The miss comes from the slow escape near the repelling point θ + π, which I did not budget. The primitive is
many-to-one, so in a permutation automaton it cannot be fundamental. It can only be **emergent**: a projected phase that
locks while information radiates into the rest of the lattice. That is decoherence, which is where standard QM and CAI
already put measurement. So SPINE's "phase-lock, not collapse" is either a fundamental contraction (outside CAI, outside
reversible physics) or decoherence (inside both, and no different from either).

### E3: the working substrate enters CAI's class, at a resolution cost
- **P3a held.** The integer leapfrog x_{t+1} = 2x_t − x_{t−1} + rint(dt²·M·F(x_t/M)) reverses bit-exactly (18/18, at
  M = 2³, 2¹⁰, 2²⁰, over 8000 steps each way). This is the Levesque–Verlet construction. I did not verify the 1993
  citation itself; the code establishes the property.
- **P3b, high-M half failed at M = 2¹⁰.** Breather pass fractions under the archive's own Stage-1 classifier, on the
  same initial conditions as float:

  | M | 2⁶ | 2⁷ | 2⁸ | 2⁹ | 2¹⁰ | 2¹¹ | 2¹² | 2¹³ | 2¹⁴ | 2¹⁶ | 2²⁰ | float |
  |---|---|---|---|---|---|---|---|---|---|---|---|---|
  | seed 1 (n=12) | 0.58 | 1.00 | 0.00 | 0.00 | 0.00 | 0.08 | 0.50 | 0.67 | — | 0.75 | — | 0.92 |
  | seed 2 (n=12) | 0.42 | 0.92 | 0.00 | 0.00 | 0.00 | 0.00 | 0.50 | 0.67 | — | 0.67 | — | 0.75 |
  | registered (n=24) | — | 1.00 | — | — | 0.00 | — | — | — | 0.75 | — | 0.833 | 0.833 |

- **Diagnosis** (unregistered; true Hamiltonian, no kick, 8000 steps):

  | M | 2⁷ | 2⁹ | 2¹⁰ | 2¹² | 2¹⁶ |
  |---|---|---|---|---|---|
  | sites with zero force increment | 100 % | 95 % | 88 % | 61 % | 8 % |
  | mean relative ΔH | +0.000 | +0.570 | +0.049 | −0.121 | +0.003 |

  Two failure mechanisms:
  - At M ≤ 2⁷ the forces round to zero and the sites move ballistically. This makes the passes at 2⁶–2⁷ **artefacts**:
    the archive's classifier is fooled by a frozen or drifting lattice. That is its **second false-positive mode**, after
    the diffusion one the Stage-1 doc already records.
  - At 2⁸–2¹² the rounding makes the energy random-walk, and the breathers are destroyed.

  The low-M half of P3b "held" at 2³ for the degenerate reason, not the one I predicted.
- **Reading.** As an exact finite permutation automaton, the working substrate keeps its particles only at ≳ 12–16
  bits per cell amplitude, and a pair of such values per cell for leapfrog. That is a mild constraint, but a real one:
  coarse integer versions of this rule are not "the same physics, discretized".
- **P3c held (side catch for the archive).** The Stage-1 caveat "Arm D energy drift ~0.23" is an artefact of
  `energy()` omitting the nonlinear on-site potential V_nl(u) = −γ(u_s²/2)[u² − u_s² ln(1 + u²/u_s²)]. Before the kick,
  the archive function deviates by 0.148; the true Hamiltonian by 6.2×10⁻⁴. The breather is a conserved-energy bound
  state; no finer-dt confirmation is needed.

### The particle-ontology difference, quantified where it can be
If a particle is an ontic, self-confined lump, a Klein-Gordon breather's tail decays with length
λ = λ̄_C / √(1 − (ω_b/ω₀)²). Interference across separation d with visibility V needs tail overlap, which requires
λ ≳ d / ln(2/V). Take Rb-87 (λ̄_C = 2.44×10⁻¹⁸ m) and d = 0.54 m (Kovachy et al. 2015, Nature 528, 530; interpretation
contested by Stamper-Kurn, Marti & Müller, answered in arXiv:1607.03485). Then:

| V | λ ≥ | 1 − (ω_b/ω₀)² ≤ | binding fraction ≲ |
|---|---|---|---|
| 0.5 | 0.39 m | 3.9×10⁻³⁵ | 2×10⁻³⁵ of mc² |
| 0.01 | 0.10 m | 5.7×10⁻³⁴ | 3×10⁻³⁴ of mc² |

That is a linear wavepacket, not a lump. So **interference through the lump's own tail is excluded**. The pattern reading
survives only with a guiding background field: the vacuum microstate, which is 't Hooft's own fix for decay statistics.
That puts it in the de Broglie double-solution / walking-droplet class. Its laboratory analogue's double-slit result is
contested: Andersen et al. 2015 (PRE 92, 013006) cast strong doubt on it; Pucci et al. 2018 (JFM 835, 1136) find
regime-dependent, wall-dominated behaviour, with Couder–Fort-like peaks only in some regimes. These are abstract-level
reads, not full texts.

Bell is not a new difference. Both CAI and the surviving nearest-neighbour branch need superdeterminism (11-20/11-22).
The new burden is **single-particle** interference, a regime where nobody invokes superdeterminism.

### How CAI was noticed (for the A2ACW noticed/settled split)
Visitor Pass 4 named CAI with no search logged; it reports grepping the site for "Hooft". So it was **noticed by
recall** (persona) and **settled by retrieval** (maintainer read the abstract; this session read the sections). This is
the fifth prior-art identity, and the first about the ontology. Like the other four, no archive session found it.

### Prediction scorecard (PREREG `ffac773`)
| | Result |
|---|---|
| P1a | held (240/240 in-bound) |
| P1b | partly failed: period-2 checkerboard at κ = 1/z; Garden-of-Eden < 50 % in 2/12 configs; all else held |
| P2 | qualitative held; quantitative failed (34 bins, not ≤ 2) |
| P3a | held |
| P3b | high-M half failed at 2¹⁰ (dead band 2⁸–2¹¹); held at ≥ 2¹⁴ and 2²⁰; low-M half held for a degenerate reason |
| P3c | held |

## Implications for the Site
- `/for-researchers#distinct-content` CAI row:
  - **Stake.** The pending candidate wording is "the move is CAI's". Better: "on the only branch that has quantum
    dynamics at all, the move is CAI's with a Klein-Gordon lattice rule; the two places the framework departs from
    CAI (contracting dynamics; particles as ontic patterns) are, respectively, a theorem against it and an unpaid
    burden (single-particle interference must come from lump dynamics)".
  - **Open question.** Can a breather in the working substrate produce de Broglie-spaced fringes at a double slit wider
    than its tail?
- Landing Bell row: superdeterminism's CAI citation is apt. Add that CAI states Lorentz invariance as unsolved, so the
  joint requirement has no borrowed answer.
- `/two-reframes` and anything quoting "measurement is phase-locking": state the fork (fundamental contraction vs
  emergent decoherence). Only the second is compatible with a reversible substrate.

## Action: Maintainer
1. `/for-researchers#distinct-content` CAI row: replace the provisional "same ontology?" with the two-difference result
   above. Badge: `active-mrh` for the glider-interference stake; the stated-rule theorem is `audited-negative`
   (it upgrades Stage 1's sample result to a proof).
2. Back-annotate the archive:
   - `explorations/2026-06-22-phase1-stage1-localized-oscillation-result.md`: (a) the "energy drift ~0.23" caveat is an
     omitted-term artefact (true 6×10⁻⁴); (b) Arm A's 0 % is a theorem in-bound (Lyapunov ΣI²), with a period-2
     checkerboard exactly at κ·z = 1; (c) a second classifier false positive: frozen/ballistic lattices pass.
   - SPINE "The one move": a sentence naming CAI and the two differences. Project-lead call; the proposal should offer
     both readings.
3. Keep the Foundation 3 fork (focusing vs monotonic) visible as **also** the CAI fork: the monotonic branch has no
   quantum dynamics in CAI's sense (theorem), and the focusing branch is CAI-class.

## Open Threads
- **The registrable experiment.** Run a 2D complex focusing Klein-Gordon lattice (the Phase 1.6 rule) with a breather
  incident on a double slit of separation ≥ 3 tail lengths, with and without a thermal vacuum background. Stake (mine):
  no fringes at the de Broglie spacing in either case. If fringes appear with background only, that is the first
  dynamical result the pattern ontology has that CAI lacks.
- Does the dead band 2⁸–2¹¹ move with dt or with the focusing strength? Is it a resonance between rounding error and
  the breather frequency, or generic heating?
- 't Hooft gr-qc/9903084 (dissipative deterministic QM): could the stated rule's fixed-point sectors be his
  equivalence classes with non-trivial dynamics restored by a slower outer clock? I think not, since the Lyapunov
  function kills recurrence, but this is unread.
- Does Hamiltonian positivity have a specific form for a Klein-Gordon breather lattice? The Koopman–von Neumann
  generator of any classical Hamiltonian flow has a spectrum symmetric about 0, so the problem is in its worst form
  here.
