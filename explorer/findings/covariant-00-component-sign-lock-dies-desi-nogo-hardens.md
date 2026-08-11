# Finding: the covariant 00-component kills the sign lock but hardens the DESI no-go — and the archive's own field equation has no dark-energy sector at all

**Date**: 2026-08-11 · **Track**: explorer
**Topic**: `covariant-00-component-does-the-sign-lock-survive.md` (seeded by maintainer 2026-08-11 from the 2026-08-10 finding's highest-value open lead)
**Script**: `explorer/findings/scripts/covariant_00_component_sign_lock_audit.py` · **Output**: `..._output.txt`
**Guardrail observed: the refutation count is NOT bumped.** Everything below is fork-closure and
class-hardening of an already-registered result (TEST-26 candidate), not a new counted kill.

---

## Summary

The topic asked: Session #100 *substitutes* G_eff = G/C into Friedmann without deriving the
00-component covariantly; do the Ċ terms of a proper completion break the sign lock
sign(w₀+1) = sign(wₐ)?

Answer, in three parts, each sharper than expected:

1. **Session #100's model is not a solution of any covariant theory.** Its two assumptions —
   H² = 8πGρ_m/(3C) and ρ_m ∝ a⁻³ — jointly violate the Bianchi identity of the archive's **own**
   covariant equation (Appendix D §D.3: G_μν = 8πG T_μν/C). One of them has to give. The two minimal
   repairs bracket the completion space, and **the sign lock survives in neither** — but the
   **DESI-quadrant no-go survives in both**.

2. **Completion A (Appendix D exactly as written, no new fields): the dark-energy sector vanishes
   identically.** The Bianchi identity forces ρ/C ∝ a⁻³, so H² ∝ a⁻³ — **exactly Einstein–de Sitter,
   for every γ and every ρ_crit** (verified numerically to 3.5×10⁻¹³). Under the archive's own
   covariant equation, the C-boost is *forced to dilute like matter*: the coupling can manufacture
   dark-*matter*-like phenomenology, never dark energy. Session #100's "dark energy emerges
   naturally" was its conservation assumption read back. Bonus pathology: the FRW constraint
   ρ/C = K a⁻³ hits the vacuum floor (ρ/C → ρ_crit/γ as ρ → 0) at finite scale factor — under
   Session #100's own calibration, **the field equation has no FRW solution beyond a ≈ 1.037**,
   i.e. ~4% more expansion from today.

3. **Completion B (C promoted to a Brans-Dicke-type scalar, pinned to its algebraic trajectory):
   the Ċ terms destroy the w = −1 attractor — and push the locus *away* from DESI.** Every γ now has
   a finite-a future singularity (C_eff crosses zero); the γ = 1/2 Möbius/Λ degeneracy is broken (no
   member of the completed family is ΛCDM); the literal sign lock fails (w₀ < −1 with wₐ > 0 members
   exist). But the DESI quadrant (w₀ > −1 **and** wₐ < 0) stays empty: **0 of 192 γ values reach it,
   at every Brans-Dicke ω tested (0, 1, 5, 50)**. Matching DESI's w₀ forces wₐ = +0.23…+0.60 —
   wrong sign in all four data combinations (3.4–6.3σ on DESI's own σ_wₐ, sign-and-scale only).

The upgrade, stated precisely: **the 2026-08-10 no-go was "model as specified"; it is now "model
class"** — the substituted form (sign-locked), the archive's own covariant equation (no dark energy
at all), and the minimal dynamical completion (crosses the phantom divide in the direction *opposite*
DESI's preference) all miss the same quadrant, for every parameter value.

---

## 1. The inconsistency, and why the completion space has exactly two minimal points

Appendix D §D.3 (the archive's only relativistic equation, 2026-08-08 finding):

```
G_μν = 8πG T_μν / C(ρ)
```

∇^μ G_μν ≡ 0 (Bianchi) forces ∇^μ(T_μν/C) = 0. But Session #100 keeps ∇^μT_μν = 0 (matter dilutes
as a⁻³) **and** takes the 00-component with the 1/C coupling. Both conservation laws cannot hold at
once while C varies. §D.7's own open-task list concedes this: *"Ensuring energy–momentum
conservation, potentially via additional internal fields"* — written December 2025, never executed.
The substituted model lives in the gap between two consistent theories:

- **A — keep the field equation, no new fields**: Bianchi dictates matter dilution (ρ/C ∝ a⁻³).
- **B — keep matter conservation, add the field**: the coupling's variation must be carried by a
  dynamical degree of freedom, whose gradient terms then enter the 00-component. These are the
  Ċ terms the topic asked about.

Also checked: no constant Brans-Dicke ω reproduces the substituted model (that would need
ω = −2/ε(x), x-dependent). Session #100 is not a member of the completed family at all — it is only
its far-past limit (ε → 0), which is why its w(z) was trustworthy at high z and wrong at low z.

## 2. Completion A: Einstein–de Sitter, exactly — L1 is now dead in both sectors

T̃_μν ≡ T_μν/C = (ρ/C)u_μu_ν is itself a dust tensor. Its conservation gives ρ/C ∝ a⁻³ and geodesic
flow; the 00-component 3H² = 8πG(ρ/C) then reads 3H² = 8πG·K·a⁻³:

- **The background is exactly EdS** — no dark energy, no acceleration, deceleration q₀ = +1/2 —
  regardless of γ, ρ_crit, or calibration. Numerically confirmed by solving the implicit constraint
  ρ/C(ρ) = Ka⁻³ along the expansion: max |H²a³/H₀² − 1| = 3.5×10⁻¹³.
- If one insists on the ΛCDM decomposition, the "dark energy" is (1−Ω_m)a⁻³: **w = 0 exactly**,
  (w₀, wₐ) = (0, 0). Further from DESI than the substituted model ever was.
- Shape comparison (scale r_dH₀ marginalised, 0.3 < z < 2.33): **8.6% rms vs ~1% BAO precision.**
  This is the pre-1998 SCDM background; its exclusion *is* the original dark-energy discovery. No
  new σ is claimed — the point is structural, not statistical.
- **The vacuum floor returns as a finite-time breakdown.** ρ/C ≥ ρ_crit/γ (the same floor that
  killed L1 in the galaxy sector, Appendix D correction 2026-08-09), so ρ/C = Ka⁻³ becomes
  unsolvable at a_end = (Kγ/ρ_crit-units)^{1/3}. Under Session #100's calibration (γ = 2,
  C₀ = Ω_m): **a_end = 1.0372**. Matter density is driven to exactly zero in ~4% more expansion,
  after which the equation has no FRW solution. (a_end moves with the calibration; the EdS result
  does not.)

The 2026-08-11 topic noted cosmology is "the one arena where L1 is well-defined" (ρ̄ > 0 everywhere,
so the galaxy sector's vacuum-source objection doesn't bite). Correct — it is well-defined there,
and it fails on its own terms: **the L1 lift is now closed a priori in both sectors**, by different
faces of the same vacuum floor.

## 3. Completion B: the Brans-Dicke 00-component with C on its algebraic trajectory

Jordan-frame Brans-Dicke (φ = C/G, V = 0, flat FRW), 00-component derived directly from
G_μν = (8π/φ)T_μν + (ω/φ²)[∂_μφ∂_νφ − ½g_μν(∂φ)²] + (1/φ)[∇_μ∇_νφ − g_μν□φ]:

```
H² = 8πGρ_m/(3C) − H(Ċ/C) + (ω/6)(Ċ/C)²
```

Pinning C to the framework's defining relation C(ρ̄(a)) (quasi-static ansatz; conditionality in §5)
gives Ċ/C = −3εH with ε ≡ dlnC/dlnx = γx(1−C²)/[C(1+x)], and the 00-component closes algebraically:

```
H² = 8πGρ_m / (3 C_eff),   C_eff = C·B,   B = 1 − 3ε − (3ω/2)ε²
```

The calibration C₀B₀ = Ω_m is still forced (definition of Ω_m); γ is still the only knob. Verified:
B ≡ 1 reproduces the 2026-08-10 numbers exactly; the far-past limit w → −2γ survives (ε → 0 there,
confirmed to 4 digits at z = 999).

**What the Ċ terms change (ω = 0 shown; ω-dependence checked):**

| γ | x₀ | C₀ | a_rip | w(0) | w(1) | CPL (w₀, wₐ) | quadrant |
|---|---|---|---|---|---|---|---|
| 0.2 | 44.7 | 0.64 | 1.68 | −0.92 | −0.54 | (−0.85, +0.61) | w₀>−1, wₐ>0 |
| 0.489 | 7.94 | 0.79 | 1.25 | −2.12 | −1.06 | (−1.79, +1.57) | w₀<−1, wₐ>0 |
| 0.5 | 7.65 | 0.79 | 1.24 | −2.16 | −1.08 | (−1.82, +1.60) | w₀<−1, wₐ>0 |
| 2.0 | 1.08 | 0.90 | 1.10 | −4.91 | −3.50 | (−4.01, +4.56) | w₀<−1, wₐ>0 |

- **The w = −1 attractor is gone.** ε → 1 as x → 0, so B → −2 − 3ω/2 < 0 for ω > −4/3: C_eff
  crosses zero at finite a. Every γ ends in a finite-scale-factor singularity (a_rip above, 1.08–1.68).
- **The γ = 1/2 Λ-degeneracy is broken**: w(0) = −2.16 there, not −1. No member of the completed
  family is ΛCDM. (Corollary: the "one-parameter deformation whose optimum is the standard model"
  architecture is a property of the *substitution*, not of the framework's covariant completions.)
- **The literal sign lock is dead**: wₐ > 0 now coexists with w₀ < −1 (mixed-sign pairs the
  substituted model forbade).
- **The DESI quadrant is still never reached**: dense scan, 192 γ values in [0.05, 20] — 0 hits at
  ω = 0, 1, 5, 50. Forcing w₀ to each DESI combination forces wₐ to +0.23…+0.60, wrong sign every
  time (3.4–6.3σ against DESI's σ_wₐ; sign-and-scale statement only, no covariance claimed).
- **BAO shape does *not* kill this family** (Ω_m and r_dH₀ marginalised): best member γ ≈ 0.3 at
  0.25% rms; γ ∈ [0.2, 0.5] all under 1%. The honest statement is that completion B survives the
  background shape and fails on the *sign of wₐ* — the exact observable DESI DR2 turned decisive.

## 4. Why: one identity, and a crossing-direction obstruction

For **any** model whose dark energy is algebraically slaved to the matter density — ρ_DE = ρ_m·F(x),
x = ρ̄/ρ_crit, any F — the continuity equation collapses to:

```
w_DE(z) = dlnF/dlnx |_{x=x(z)}
```

(one line: ρ_DE ∝ xF(x) and x ∝ a⁻³, so dlnρ_DE/dlna = −3(1 + dlnF/dlnx); verified against the
2026-08-10 closed form.) The whole expansion history is a single static curve read from high x to
low x. Consequences:

- DESI's preferred crossing (phantom past → quintessence today, w rising through −1) requires
  dlnF/dlnx < −1 at high x and > −1 at low x — equivalently **ρ_DE(x) must have an interior
  maximum**.
- The substituted model's ρ_DE(x) is monotone ⇒ no crossing ⇒ the sign lock.
- Completion B's ρ_DE(x) diverges at the rip (x → x_rip) and, for γ < 1/2, also grows at large x ⇒
  it has an interior **minimum** ⇒ a crossing in exactly the *anti*-DESI direction (quintessence
  past → phantom future). For γ > 1/2 it is monotone-in-x phantom throughout.
- Completion A's ρ_DE(x) ≡ 0.

So the class-level statement is now precise: **a slaved-dark-energy model reaches the DESI quadrant
iff ρ_DE(x) has an interior maximum, and no completion of C = tanh(γ ln(1+x)) — algebraic,
substituted, or Brans-Dicke-dynamical at any ω — produces one.** An escape requires either a new
functional commitment for C (one that makes ρ_DE non-monotone with the right curvature — nothing in
the archive proposes this) or an independent scalar degree of freedom not slaved to ρ_m — at which
point the model is generic quintessence and the framework contributes nothing.

## 5. Honest bounding — conditionalities, stated

- **Completion B's pinning is an ansatz.** A true Brans-Dicke scalar obeys its own equation of
  motion; pinning C to C(ρ̄) presumes an enforcing sector (potential/constraint) whose own
  stress-energy is negligible. If that sector's stress is *not* negligible, its form is unconstrained
  by anything in the archive, and no theorem is possible in either direction. What is closed here is
  the completion the topic actually asked about: the Ċ terms of natural (Brans-Dicke) size on the
  algebraic trajectory.
- **ω was scanned, not derived** (0, 1, 5, 50; the archive gives C no kinetic term, making ω = 0 the
  natural reading). Every scanned ω gives 0/192.
- **DESI DR2 numbers** carried from the 2026-08-10 script, flagged there and here as
  from-memory; the paper's abstract (fetched today) confirms the 2.8–4.2σ range and the 3.1σ
  BAO+CMB figure, but the (w₀, wₐ) centrals and σ's should be verified against the paper's tables
  before any external use. The quadrant statement needs only the *signs*, which are the paper's
  headline result.
- **Ġ/G**: on the cosmic trajectory, Ċ/C today ≈ +0.6H₀ ≈ 4×10⁻¹¹ yr⁻¹, far above the ~10⁻¹³ yr⁻¹
  lunar-laser-ranging bound — but LLR probes *local* C (solar-system densities, C ≈ 1, Ċ ≈ 0), so
  this is the local-vs-cosmic C fork again, not a clean kill. Flagged, not counted.
- **Nothing here is a new counted refutation.** Completion A's EdS exclusion is a fork-branch
  closure (the L1 lift), resting on the 1998 dark-energy discovery, not on new statistics.
  Completion B's wₐ-sign tension is the same TEST-26 statement as yesterday, hardened.

## 6. Verdict on the topic question

> *Do the Ċ terms break the sign lock, or is the no-go unconditional?*

**Both.** The sign lock as an algebraic statement dies (completion B populates a forbidden
sign pair; completion A deletes the sector). But the thing the sign lock was *for* — "the framework
cannot produce DESI's phantom crossing" — comes out stronger than the lock itself: every consistent
completion misses the DESI quadrant, each for its own structural reason (monotone ρ_DE / no ρ_DE /
minimum-type crossing). **TEST-26 hardens from "model as specified" to "model class," with the
escape condition now stated exactly: an interior maximum of ρ_DE(x), which nothing in the archive
provides.**

The topic's hoped-for third outcome — Ċ terms moving the locus *into* the DESI quadrant and creating
a live discriminating prediction — is closed. The completed family does become everywhere-distinct
from ΛCDM (no exact-Λ member), so DR3 could in principle discriminate it — but in the direction
already disfavoured: it is a wrong-sign-wₐ family, not a DESI-matching one.

## Action: Maintainer

Count stays 6. Four items:

1. **`/honest-assessment#dark-energy`** — extend the (new, 2026-08-11) dark-energy block's lead by
   one sentence: the no-go is now *class-level*: the covariant completions were derived and scanned
   (Appendix-D algebraic → exactly EdS, no dark-energy sector; Brans-Dicke dynamical → crosses the
   phantom divide in the anti-DESI direction; 0/192 γ at four ω values). Rewrite the lead, don't
   append a box.
2. **`/top-5-tests` TEST-26 card** — the Strategy line "covariant derivation is the one identified
   route back to a discriminating test" is now resolved: the route was executed and closes. Replace
   with the exact escape condition (interior maximum of ρ_DE(x)) so the card states what evidence
   *would* move it.
3. **Appendix D** — the §D.3 equation's FRW solution is exactly EdS with a finite-a breakdown
   (a_end ≈ 1.04 under Session #100's calibration); a dated erratum-level note belongs next to the
   2026-08-09 L1 correction, closing L1 in the second sector. (Back-annotation routed via
   `Research/proposals/`, this session.)
4. **PREDICTIONS.md dark-energy entry** — where the 08-11 retraction text says the sector's
   conditionality is "the substitution is not derived from a covariant action," update: the
   derivation was performed; the conditionality now lives one level up (quasi-static pinning /
   enforcing-sector stress), and the DESI conclusion is unchanged under it.

## Open Threads

1. **The interior-maximum criterion is a publishable-adjacent no-go** for the whole class
   "dark energy algebraically slaved to matter density" (w = dlnF/dlnx makes it one-line). Prior-art
   check needed before any external claim: interacting-DE and "dark degeneracy" literature
   (Wetterich; Amendola; Aviles & Cervantes-Cota) may contain the identity. If it exists, cite; if
   not, this plus DESI DR2 is a compact note. Gates on dp per the standing preprint strategy.
2. **The scalar's equation of motion was not solved.** The honest next rung: give C a potential
   V(C) reverse-engineered so the FRW solution tracks C(ρ̄) — then check whether V's own energy
   density (the "enforcing stress" neglected here) restores an attractor or worsens the rip. Small,
   well-posed.
3. **Perturbations.** Completion A is background-EdS but *not* perturbation-CDM (C varies
   spatially); if anyone ever revives it, σ₈/fσ₈ is where it differs from SCDM. Only worth opening
   if (unexpectedly) the background objection is disputed.
4. **Session #107's DESI forecasts remain unaudited** (~16 unread cosmology-arc files; standing
   secondary lead, untouched today).
