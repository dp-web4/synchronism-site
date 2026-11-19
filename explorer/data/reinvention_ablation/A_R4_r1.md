--- PRIMARY ---
# Round 1: Bounded construction (PRIMARY)

**Bounded claim.** I drop "the grid is unobservable" and replace it with "the grid's effects are suppressed by a specified power and have a specified symmetry signature." The unbounded version is unfalsifiable and invites the charge of immunization.

**Construction.**
- Substrate: a cubic lattice with spacing a ≈ ℓ_P, updated in global ticks τ. The preferred frame is the grid frame.
- Dynamics: a local, nearest-neighbor, tick-synchronous transfer rule for the "intent" field φ. It is symmetric under cubic point-group operations, parity, and time reversal.
- Claim: the continuum limit at k·a ≪ 1 is Lorentz-invariant to leading order.

**Operational variables.**
- a (cell size), τ (tick), c = a/τ (the nominal limiting speed).
- A dispersion coefficient set {ξ_n}, defined by ω² = c²k² [1 + ξ₂ (ka)² + ξ₄ (ka)⁴ + …] + α a² c² Σᵢ kᵢ⁴.
- The grid-frame velocity v⊕ of the lab (inferred from the CMB dipole as a default, to be fit otherwise).

**Why the bounded form is non-trivial.**
1. Cubic symmetry forbids anisotropy at order k². The first anisotropic term is the k⁴ term above. This is a derived consequence, not a free choice, and it gives a natural n = 2 suppression (E²/E_P² in the dispersion).
2. P and T symmetry of the rule forbid odd-in-k terms (n = 1). That matters because linear terms are already excluded well beyond E_P by GRB time-of-flight and polarization-birefringence data (to my recollection). So the construction is viable only if the rule's symmetries really forbid n = 1.
3. The known weak point is Collins et al. (2004): in an interacting theory, a preferred frame generically induces dimension-4 Lorentz-violating operators through loops, unsuppressed by E/E_P. Those are bounded at roughly 10⁻¹⁵ to 10⁻²⁰ or tighter, depending on the sector. The program must therefore supply a protection mechanism, such as an emergent symmetry of the rule or a tuning-free argument. I flag this as the construction's main liability instead of waiting for the Critic to raise it.

**Falsifiable consequence (one).** The dispersion has no n = 0 or n = 1 term and has a leading cubic-anisotropic n = 2 term with α = O(1) in Planck units. This predicts:
- (a) Photon arrival-time lags from distant transients scale as E² (not E) at fixed distance.
- (b) Any directional dependence of the limiting speed is a pure cubic ℓ = 4 harmonic with no ℓ = 2 component at this order, and it is fixed to one set of axes with sidereal or annual modulation from v⊕.
- (c) There is no species-dependent limiting-speed difference at the dimension-4 level above the program's derived loop-suppressed value.

**Failure conditions.**
- Detection of an energy-linear lag or a helicity-dependent rotation.
- Detection of an ℓ = 2 anisotropy or a speed difference without the cubic ℓ = 4 pattern.
- Dimension-4 bounds that are tighter than the program's own loop estimate.
- Absence of any derivation of (c).

Present n = 2 bounds (time-of-flight and threshold analyses) are, as I recall, many orders short of E_P-scale sensitivity, so an O(1) α is currently allowed but untested. That makes the claim presently unconstrained, not confirmed, and I do not claim more.

**Questions for the Challenger.**
1. Can you show that the stated transfer rule, once interactions are included, cannot generate dimension-4 Lorentz violation at O(1), and if you think it does, what is the minimal added symmetry that rescues it?
2. Is α = O(1) at n = 2 a prediction or an assumption, and what in the construction fixes its sign (sub- or superluminal)?

**Status:** Held: the cubic-symmetry-implies-ℓ=4 and the n = 2 scaling. Narrowed: "unobservable" is now "untested at n = 2." Failed: none yet. Would settle: a loop-level calculation of induced dimension-4 operators in the actual transfer rule.

--- CHALLENGER ---
# Round 2: Challenger

**Burden note.** Your Q1 asks me to prove a negative about a rule you haven't written down. "Local, nearest-neighbor, tick-synchronous, cubic-, P- and T-symmetric" is a symmetry class, not a rule, so no loop calculation is possible yet. The ask belongs to you.

**Quantitative check 1: the Collins gap.** A generic induced dimension-4 shift is δc ~ g²/16π². For α_em that is ~10⁻³, and for strong or Yukawa couplings it is larger. My recollection is that the bounds are ~10⁻¹⁵ to 10⁻²⁰ for electron and nucleon sectors, and tighter still for photon birefringence. That is a 12 to 17 order gap, and an O(1) Planck-scale rule cannot be allowed to leak at that level. Your fallback, "emergent symmetry or tuning-free argument," is a placeholder. Cubic symmetry does not protect dimension-4 terms, because the cubic-invariant k² term is already isotropic. It protects only the *anisotropy*. The *isotropic* speed difference between species is a different problem, and cubic symmetry does nothing for it. Why should a_i/τ be equal for photon, electron and quark excitations? A single global tick and a single a give one nominal c only if every species uses the same nearest-neighbor hop. That is an assumption, and the Standard Model's chiral structure isn't obviously compatible with it.

**Quantitative check 2: your falsifier (a) is not a falsifier.** For n = 2 with O(1) α, take E = 1 TeV, so E/E_P ≈ 8×10⁻¹⁷ and (E/E_P)² ≈ 6×10⁻³³. Over 1 Gpc (~10¹⁷ s), Δt ≈ 10⁻¹⁵ s, about six orders below any timing capability. Even at 1 PeV, Δt ~ 10⁻⁹ s, and PeV photons don't survive that distance (pair production on the CMB and EBL). So time-of-flight cannot test your claim, and prediction (a) is untestable by the very channel you named.

The real n = 2 tests are threshold effects such as vacuum Cherenkov and photon decay. For an electron with a superluminal n = 2 term, the threshold is E_th ~ (m²E_P²/|α|)^¼ ≈ 80 PeV/|α|^¼. Crab PeV-scale synchrotron emission and LHAASO PeV photons sit within a couple of orders of that. My recollection is that some published analyses claim n = 2 sensitivity near E_P for one sign. Check this, because it could make "untested at n = 2" false for that sign. This is also why the sign matters.

**Hidden premises I see:**
1. **Sign.** Standard lattice dispersions, such as ω = (2/τ) arcsin(…) or the discrete Laplacian, give ξ < 0, which is subluminal. If the sign is forced by the rule, say so, because the superluminal-only bounds then drop out. If it is a free parameter, the "prediction" is just an assumption.
2. **Claim (b), "pure ℓ = 4, no ℓ = 2."** This holds only in the grid frame. The lab moves at v⊕ ~ 10⁻³c, and the boost mixes harmonics. An ℓ = 2 piece appears at O(v⊕) relative to the ℓ = 4 amplitude, so "ℓ = 2 detection falsifies" is not clean. You must specify the lab-frame signature including boost mixing, otherwise the failure condition can be dodged.
3. **Gravity.** A global-tick preferred frame sits uneasily with diffeomorphism invariance. Gravitational-sector bounds (ᾱ₁, ᾱ₂, and the GW170817 speed constraint at ~10⁻¹⁵) apply regardless of the matter-sector argument, and you haven't addressed them.
4. **v⊕ from the CMB dipole.** This presupposes that the grid frame coincides with the CMB frame. Nothing in the construction says so, and it is an extra input.

**Questions (max 2):**
1. Write one explicit tick-update rule for a single field with one interaction (e.g., φ⁴ or a Yukawa coupling). Then give either the one-loop δc, or the symmetry that sets it to zero. Without this, claim (c) fails by default.
2. Is the sign of α fixed by the rule? If so, give it. Then name the n = 2 threshold analysis (vacuum Cherenkov or photon decay) that your O(1) α survives, with the number.

**Status:**
- **Held:** the cubic ⇒ no ℓ = 2 at O(k⁴) in the grid frame, and the n = 2 scaling.
- **Narrowed:** (a) is untestable by timing, so the claim reduces to threshold tests. (b) needs a boost-corrected form.
- **Failed:** the "tuning-free protection" claim, which is an unsupported placeholder. Falsifier (a) as stated also fails.
- **Would settle:** an explicit rule with a computed one-loop δc, plus a stated sign for α checked against the Cherenkov and photon-decay thresholds.

--- PRIMARY ---
# Round 3 (PRIMARY)

**Concessions.** The Challenger is right on four points. I withdraw them rather than defend them.
- Falsifier (a) is dead as a timing test. My own check agrees: (E/E_P)² ≈ 6×10⁻³³ at 1 TeV gives Δt ~ 10⁻¹⁵ s over 1 Gpc.
- "Tuning-free protection" was a placeholder.
- The CMB-frame identification is an extra input. I drop it, and v⊕ becomes a fit parameter.
- Gravity is unaddressed. The GW170817 and ᾱ bounds apply to the tensor sector and hit the same species-universality problem as (c).

**Explicit rule (Q1, partial).** For one scalar, the leapfrog update is

φ(t+τ) = 2φ(t) − φ(t−τ) + (cτ)² Δ_NN φ − τ² V′(φ).

Its exact dispersion is (4/τ²) sin²(ωτ/2) = (4c²/a²) Σᵢ sin²(kᵢa/2). Expanding with s = cτ/a:

ω² ≈ c²k² − (c²a²/12) [Σᵢkᵢ⁴ − s²k⁴].

Two corrections to my Round 1 claims follow.
1. I wrote c = a/τ. That is wrong. The CFL stability bound in 3D is s ≤ 1/√3.
2. I claimed "pure ℓ = 4". That is also wrong. Σkᵢ⁴ = k⁴[3/5 + δ(k̂)], where δ is the pure cubic ℓ = 4 harmonic. So the n = 2 term has an isotropic ℓ = 0 piece plus ℓ = 4, and no ℓ = 2.

**Sign (Q2): derived for this rule, not assumed.** Since Σk̂ᵢ⁴ ≥ 1/3 ≥ s², the bracket is non-negative in every direction. The free-scalar rule is therefore subluminal at n = 2 in all directions. Stability forces it. At the marginal s² = 1/3 there is a null direction along (1,1,1) where the shift vanishes exactly.

**Consequences.**
- Superluminal-only tests (vacuum Cherenkov, photon decay) do not apply to this rule. Checking the 80 PeV/|α|^¼ threshold arithmetic gives ≈ 80 PeV, so those tests would reach only |α| ~ 10⁷ at best. They cannot touch O(1) α for either sign, which supports "untested," not "excluded." I recall published analyses claiming more for n = 2, but I haven't verified them. Treat that as open.
- Subluminal electrons are constrained differently (for example by synchrotron cutoffs). I do not have a verified n = 2 number for that channel.

**Collins gap (Q1, remainder).** I cannot supply a one-loop species-differential δc. For a single field, a loop-induced shift only renormalizes c and is unobservable. The observable is the difference between species, and that requires the full multi-species rule, which I have not written. Fermions on a lattice also bring doubling, which I cannot resolve here. So the program as stated generically predicts δc ~ g²/16π² against bounds of 10⁻¹⁵ to 10⁻²⁰. Absent a protecting symmetry, **it is currently in conflict with data**. The honest bounded claim is conditional: *if* a universal-hop multi-species rule exists with a protecting symmetry, then the n = 2 signature below follows.

**Boost-corrected (b).** In the lab, with β ≈ v⊕/c ~ 10⁻³, the ℓ = 2 amplitude is suppressed by about β relative to ℓ = 4. It appears at specific sidereal harmonics tied to the cubic axes. The falsification criterion is therefore an ℓ = 2 to ℓ = 4 amplitude ratio well above ~10⁻³ with axes that fail to align with a single fixed frame. A bare "ℓ = 2 detected" is not enough.

**One testable prediction (rule-conditional).** For any CFL-stable nearest-neighbor update of this class:

ξ(k̂) = −(1/12)[3/5 − s² + δ(k̂)] ≤ 0.

- The n = 2 correction is subluminal for all species sharing the rule.
- The isotropic-to-ℓ=4 ratio is fixed by s.
- The anisotropy has cubic symmetry, with its extremes along the axes and the diagonals.

A confirmed superluminal n = 2 effect, such as vacuum Cherenkov by PeV electrons, or a measured ℓ = 4 pattern with the wrong sign structure, falsifies the rule class. The threshold sensitivity is currently ~10⁷ short of O(1) α.

**Questions for the Challenger.**
1. Do you accept that CFL stability forcing the sign makes the n = 2 sector a genuine derived prediction, or is that an artifact of leapfrog? Name a stable local synchronous rule with superluminal n = 2.
2. Does any known construction give species-universal hops without a Collins-type leak, for example emergent symmetry in a lattice with a fine-tuned fixed point? If none does, do you grant that the dim-4 bound is the program's real falsifier and not n = 2?

**Status:**
- **Held:** no ℓ = 2 in the grid frame, and the n = 2 scaling. The sign is derived for the scalar rule.
- **Narrowed:** "unobservable" becomes "n = 2 untested, subluminal-only, via thresholds." (b) is now the ℓ = 0 + ℓ = 4 pattern with boost mixing.
- **Failed:** timing falsifier (a), CMB frame, tuning-free protection, and the pure-ℓ = 4 claim.
- **Would settle:** a multi-species rule with a computed species-differential one-loop δc, and a gravity-sector treatment.

--- CHALLENGER ---
# Round 4: Challenger (final stress)

**Answers to your questions**

**Q1: Is the sign a derived prediction?** Only conditionally. I checked your expansion and it is correct: ω² ≈ c²k² − (c²a²/12)[Σkᵢ⁴ − s²k⁴], with ⟨Σk̂ᵢ⁴⟩ = 3/5. But the sign comes from two features: the spatial stencil is strictly nearest-neighbor, and the time step is leapfrog. Add a single cubic-symmetric, finite-range term +ε a² Δ² to the spatial operator. This is still local, P- and T-symmetric, and stable if the operator stays bounded on the Brillouin zone. It gives ω² ⊃ +ε c² a² k⁴ and flips the isotropic part superluminal. Higher-order stencils and non-leapfrog integrators do the same. So the sign is a property of the minimal rule, not of the program. If "adjacent cells only" is a postulate, the sign stands. If it is a convenience, it is an assumption.

**Q2: Is a Collins-type leak avoidable?** I know of two mechanisms, and neither rescues the program as stated. Both are from memory and should be checked.

1. **RG focusing (Chadha–Nielsen).** Species speed differences flow toward zero in the IR, but only as (E/E_P)^γ with γ ~ g²/16π² ~ 10⁻³. For E = 1 TeV, ln(E_P/E) ≈ 37, so the suppression is exp(−37×10⁻³) ≈ 0.96. Getting 10⁻¹⁵ to 10⁻²⁰ would need γ·ln ≈ 35 to 46, which means γ ~ 1. Running alone does essentially nothing.
2. **Supersymmetry (Groot Nibbelink–Pospelov).** As I recall, an exactly supersymmetric lattice regulator protects dimension-4 terms, leaving a residual of order (g²/16π²)(M_SUSY/E_P)². That is the minimal added symmetry. It brings its own costs: the lattice SUSY construction is nontrivial, and the absence of superpartners at the LHC is in tension unless the SUSY scale is irrelevant to the argument.

So yes, I grant that the dim-4 bound is the real falsifier, and as stated the program is in conflict with it.

**New problems**

1. **Your boost-corrected (b) has the wrong order.** The dispersion is even in k̂ in the grid frame. A boost with β ~ 10⁻³ shifts harmonics by ±1 at O(β), which produces odd ℓ (ℓ = 1 from the isotropic piece, ℓ = 3 and 5 from ℓ = 4). The ℓ = 2 component first appears at O(β²) ~ 10⁻⁶. Your criterion, "ℓ=2/ℓ=4 well above ~10⁻³," therefore lets through anything between 10⁻⁶ and 10⁻³ that should already count against the rule. Please recheck. If I am right, the ℓ = 1 signature at O(β) is the sharper test.
2. **Falsifiers that currently cannot fire.** The n = 2 predictions are about 10⁷ short in threshold sensitivity and about 6 orders short in timing. The only falsifier with present reach is dim-4, which the rule fails absent protection. In practice the program is untestable where it is safe and in conflict with data where it is testable.
3. **Fermion doubling is not a detail.** Doublers are 15 extra species with different effective hops. Wilson-type fixes add an O(a) chirality-breaking term, which is dimension-5, and they have not been shown compatible with the P/T argument that eliminated n = 1. Until a fermion rule is written, "n = 1 is forbidden" is unproven for matter.
4. **Gravity remains open.** The GW170817 bound |c_g − c| ≲ 10⁻¹⁵ is a species-universality demand on the tensor sector. A global-tick frame also needs aether-type constraints (α₁, α₂ bounds, which I recall as ≲10⁻⁴ or tighter). Neither has been addressed.

**What reverses the conclusion**

- If a SUSY lattice rule, or any rule with a symmetry that enforces a single hop across species, is written down with a computed δc below 10⁻²⁰, the dim-4 objection is removed and the n = 2 sector becomes the conditional prediction you describe.
- A measured superluminal n = 2 effect would exclude the minimal rule, but it would not exclude the program.

**Questions (max 2)**

1. Is nearest-neighbor-only a postulate of the program? If yes, justify it independently of the sign it produces.
2. Name the symmetry that enforces equal hops across species in the interacting multi-species rule. If it is SUSY, state the residual δc and reconcile it with the absence of superpartners.

**Status**
- **Held:** the leapfrog dispersion and sign for the minimal scalar rule, the cubic-symmetry result (no ℓ = 2 in the grid frame), and the n = 2 scaling.
- **Narrowed:** the sign is derived only for NN plus leapfrog. The program's testable content is the dim-4 sector.
- **Failed:** the boost-mixing criterion at O(β), universality without a stated symmetry, the n = 1 exclusion for fermions, the gravity sector, and the current claim of consistency with dim-4 data.
- **Would settle:** an explicit multi-species interacting rule (including fermions) with a computed species-differential δc ≲ 10⁻²⁰, plus a lab-frame harmonic table through O(β²).

--- PRIMARY ---
# Round 5 (PRIMARY, closing)

**Concessions on the new problems**
- **Boost mixing: the Challenger is right and I was wrong.** The grid-frame dispersion is even in k̂. A boost with vector β couples through one power of β per ℓ-step. The isotropic piece (ℓ=0) therefore leaks into ℓ=1 at O(β), and the ℓ=4 piece into ℓ=3 and ℓ=5 at O(β). ℓ=2 first appears at O(β²) ~ 10⁻⁶, from ℓ=0⊗1⊗1 and ℓ=4⊗1⊗1. My "ℓ=2/ℓ=4 ≳ 10⁻³" criterion was the wrong order and is withdrawn. The sharper lab-frame signature is an O(β) dipole (ℓ=1) tied to the same v⊕ that sets the sidereal and annual modulation. Its amplitude is fixed relative to the isotropic n=2 coefficient, and its ℓ=3,5 content is fixed relative to the ℓ=4 coefficient. Both are tied to one fitted v⊕, so the rule class makes a correlated multi-harmonic prediction. The harmonic table through O(β²) is still unwritten.
- **Sign.** The Δ² counterexample is valid. The sign is a property of strictly nearest-neighbor stencil plus leapfrog, not of the program. I downgrade it from "derived prediction" to "derived within the minimal rule class."
- **Fermions.** n=1 exclusion is unproven for matter until a doubling-free fermion rule is written and its P/T argument checked.

**Answers**
1. **Is nearest-neighbor a postulate?** The program's "transfer between adjacent cells" is a narrative commitment, but I know of no independent justification for it. Locality would justify finite range, not range one. So the sign claim is conditional on an unjustified minimality, and I will not defend it as a program-level prediction.
2. **Equal-hop symmetry.** I can name no symmetry the program currently has. The only candidate I know is lattice SUSY, from memory of Groot Nibbelink–Pospelov, which I have not verified. It would leave a residual of about (g²/16π²)(M_SUSY/E_P)². Taking that scaling at face value, an SUSY-breaking scale up to ~10¹⁰ GeV gives ~10⁻²¹, so absent superpartners at the LHC need not be fatal. But adopting SUSY is a new postulate, not something the construction yields, and a workable interacting lattice SUSY rule with fermions is not in hand.

**Net assessment.** I agree with the Challenger's pincer: the n=2 sector is safe but presently untestable (about 10⁷ in thresholds, 6 orders in timing). The dim-4 sector is testable and, absent protection, in conflict with data. The honest contribution is a conditional, falsifiable rule-class statement, not a confirmed claim.

**Closing artifact**

**HELD (survives)**
- For the minimal NN leapfrog scalar rule, the exact dispersion and its expansion ω² ≈ c²k² − (c²a²/12)[Σkᵢ⁴ − s²k⁴], with CFL s ≤ 1/√3.
- In the grid frame, the n=2 term is ℓ=0 plus cubic ℓ=4 with no ℓ=2, and has no odd-in-k terms for a P/T-symmetric scalar rule.
- n=2 scaling, with (E/E_P)² ~ 10⁻³³ at TeV.
- The dim-4 (Collins-type) sector is the program's real, currently reachable falsifier.

**NARROWED (must be scoped)**
- "Unobservable" becomes "n=2 untested; thresholds ~10⁷ short for superluminal tests; timing ~6 orders short."
- Subluminal n=2 sign holds only for NN plus leapfrog. Higher stencils can flip it.
- Lab-frame signature: ℓ=1 at O(β), ℓ=3,5 at O(β), ℓ=2 at O(β²), all tied to one fitted v⊕. The grid frame is not assumed to be the CMB frame.
- Protection of dim-4 terms is conditional on an added symmetry (SUSY is the one candidate, unverified here).

**FAILED (unsupported / overreach)**
- Timing falsifier (a).
- "Tuning-free protection" and any claim of consistency with dim-4 data.
- Pure-ℓ=4 claim and the ℓ=2 ≳ 10⁻³ boost criterion.
- Species-universal hops, n=1 exclusion for fermions, and the gravity sector (GW170817, aether-type bounds): all unaddressed.
- CMB-frame identification.

**WOULD SETTLE (decisive evidence/test)**
- An explicit interacting multi-species rule, including fermions without doubling, with a computed species-differential one-loop δc ≲ 10⁻²⁰.
- A gravity-sector rule meeting |c_g − c| ≲ 10⁻¹⁵ and aether-parameter bounds.
- A lab-frame harmonic table through O(β²) checked against sidereal-modulation data.
- Observed superluminal n=2 effects (excludes the minimal rule, not the program) or a detected ℓ=1/ℓ=3/ℓ=5 pattern with the predicted correlations (supports the rule class).

HEADLINE: NARROWED

--- CHALLENGER ---
# Closing artifact (CHALLENGER)

**HELD (survives)**
- For the minimal scalar rule (nearest-neighbor stencil, leapfrog, cubic symmetry), the expansion ω² ≈ c²k² − (c²a²/12)[Σkᵢ⁴ − s²k⁴] is correct. In the grid frame the n = 2 term is an ℓ = 0 piece plus a cubic ℓ = 4 piece, with no ℓ = 2.
- Cubic symmetry plus P and T forbid n = 0 anisotropy and odd-in-k terms for the scalar. The n = 2 scaling follows.
- CFL stability (s ≤ 1/√3) forces the n = 2 shift to be subluminal in every direction for this rule. The relation c = a/τ is wrong; c = sa/τ with s < 1.
- The Defender's concessions stand: timing falsifier (a) is dead, the CMB-frame identification is dropped, "tuning-free protection" was a placeholder, and the pure-ℓ = 4 claim was wrong.

**NARROWED (must be scoped)**
- The sign result holds only if nearest-neighbor-only is a postulate. A cubic-symmetric finite-range term (+εa²Δ²), a higher-order stencil, or a different integrator flips the isotropic part superluminal. Without an independent justification for nearest-neighbor-only, the sign is a property of the minimal rule, not of the program.
- Lab-frame signature: the grid-frame dispersion is even in k̂. A boost of β ~ 10⁻³ gives odd harmonics at O(β), namely ℓ = 1 from the isotropic piece and ℓ = 3 and 5 from ℓ = 4. ℓ = 2 first appears at O(β²) ~ 10⁻⁶. The Defender's "ℓ = 2/ℓ = 4 ≫ 10⁻³" criterion is therefore too loose. The sharper test is the ℓ = 1 amplitude and its sidereal modulation, with a table through O(β²). (I have not derived the full table.)
- "Unobservable" is replaced by "n = 2 is untestable now". Timing is ~6 orders short and thresholds ~10⁷ short in |α|, and the threshold tests apply only to the superluminal sign. Subluminal-sector bounds are not verified by either party.
- The only falsifier with present reach is the dim-4 sector, and the program is in conflict with it unless protected. Both parties accept this.
- The numerical bounds cited in the debate (10⁻¹⁵ to 10⁻²⁰, GW170817 ~10⁻¹⁵, α₁/α₂, Cherenkov thresholds, Chadha–Nielsen running, Groot Nibbelink–Pospelov SUSY) were recalled from memory by both sides and need checking before use.

**FAILED (unsupported / overreach)**
- Species-universal hops: no symmetry is named. A generic loop-induced δc ~ g²/16π² ~ 10⁻³ is 12 to 17 orders above the bounds.
- RG focusing as protection fails. exp(−γ ln(E_P/E)) ≈ 0.96 for γ ~ 10⁻³.
- SUSY as protection is unwritten and in tension with the absence of superpartners.
- The n = 1 exclusion for fermions is unproven. Doubling gives 15 extra species with different hops, and Wilson-type fixes introduce dimension-5 chirality-breaking terms.
- Gravity is unaddressed: the tensor-speed bound, the aether-type constraints, and the tension between a global-tick frame and diffeomorphism invariance.
- Consistency with dim-4 data is not established and is presently contradicted by the generic estimate.

**WOULD SETTLE (decisive evidence/test)**
- An explicit interacting multi-species rule, including fermions without doubling, with a symmetry enforcing a single hop and a computed species-differential δc ≲ 10⁻²⁰.
- A gravity-sector rule meeting the GW speed bound and the aether-parameter bounds.
- A lab-frame harmonic table through O(β²) from the explicit rule, with the ℓ = 1 sidereal amplitude as the primary signature.
- A justification of nearest-neighbor-only that is independent of the sign it produces.
- Observation: a superluminal n = 2 effect (for example vacuum Cherenkov at PeV) would exclude the minimal rule but not the program. A cubic ℓ = 4 plus isotropic pattern with a fixed-axis sidereal signature would support the rule class. Neither is currently within reach.

HEADLINE: NARROWED