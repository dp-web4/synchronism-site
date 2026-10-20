# Round 3 (PRIMARY)

## 1. Concessions

- **Drift scaling.** I accept the challenge. For a diffuse bump, drift ∝ D′(I)∇I → 0 as s→0. My Round-1 claim that "n-independence in the far field" carries over to T3 was wrong. It holds for the field (T1, T2) and not for the force.
- **Overdamped dynamics.** Pure conservative lattice transfer is first-order, so flux gives velocity. `a_P = d²⟨x⟩/dt²` is undefined without inertia. As written, the whitepaper mechanism gives v ∝ bias, not a ∝ bias. That is not Newtonian gravity, and it admits no closed orbits.
- **Dirichlet clamp.** It is a static-potential toy and cannot test recoil. I retract it as evidence for anything beyond T1/T2.
- **Scope.** EM and nuclear mechanisms are unsupported adjectives, and light deflection at 2× Newtonian is out of reach. Gravity only.
- **Inertia.** Inertia would have to be a new postulate, such as a flux-memory term τ∂J/∂t = −(J + D∇I). That adds a parameter, and I flag it as an addition and not a derivation.

## 2. Surviving candidate (narrowed)

Test bodies must be saturated cores themselves, since a diffuse bump does not persist. A maintained core needs net inflow to offset leakage. Its surface cells then see an asymmetric supply from the background Φ ∝ 1/r, and it is biased toward higher supply, i.e. toward the source. This is a chemotaxis-like first-order drift, v ∝ κ·∇Φ ∝ 1/r². Here the bias is linear in ∇Φ because the maintenance requirement is O(1) in s, not O(s). This is the only route by which the far-field bias avoids the D′ suppression, and it is an untested hypothesis.

Even if it works, the result is **v ∝ 1/r², not a ∝ 1/r²**. Without the τ extension this predicts inspiral and not orbits.

## 3. The single simulation test

**Inputs (pre-registered, no per-run tuning):**
- 3D periodic lattice, N³ with N = 128 and 192, to check finite-size effects.
- R(I) = R₀/(1−s)ⁿ, n ∈ {1, 2}.
- Two free, unclamped saturated blobs, with core saturation s_c ∈ {0.8, 0.95} and masses m₁, m₂ (total Intent) varied over a factor of 10.
- Each blob has a self-maintenance rule fixed from isolated-blob stability: a lifetime >10⁴ steps in vacuum.
- Separations d from 8 to 40 cells.
- Run A: first-order dynamics only. Run B: add the single τ term, with τ fixed once from one calibration run.

**Outputs:**
1. Centroid velocity of each blob, v₁(d) and v₂(d), with a fitted exponent.
2. Dependence of v₁ on m₁ at fixed m₂, and of v₂ on m₁.
3. Total linear momentum Σ m·v (Run B).
4. For Run B, bound-orbit period T vs. semimajor axis a over ≥5 initial conditions.
5. A 2D control for the exponent.

**Failure conditions (any one fails T3):**
- F1: no net attraction, or the sign flips with s_c, n, or blob composition.
- F2: fitted v(d) exponent outside −2 ± 0.15 over at least a decade in d. A 1/r³ result confirms your D′ argument.
- F3: the 2D exponent is not −1 ± 0.1.
- F4: Run B momentum drift >5% over an orbit, or an a₁/a₂ ratio that differs from m₂/m₁ by >10%.
- F5: T² ∝ a³ exponent outside 3 ± 0.1, or the fit requires τ re-tuned per system.
- F6: attraction vanishes once the maintenance rule is removed, meaning the "attraction" is an artifact of the injected rule and not of R(I).

## 4. Expectations

I expect Run A to pass F1 and F2 only if the maintenance rule is the dominant bias, and that is the weak point. F6 is the decisive check. If the attraction depends on a hand-built maintenance rule rather than on R(I) alone, then fields-as-saturation-gradients re-describes a chosen model and does not derive gravity.

## 5. Questions (max 2)

1. Is a maintenance rule that is a function of R(I) alone, with no extra coupling, acceptable for F6, or do you require that persistence emerge from the transfer rule with no source term?
2. Is Run B's single global τ an acceptable added postulate if reported as such, or does any inertia term disqualify "derivation candidate"?

## Status

**Narrowed.** Held: T1 and T2 as generic 3D Laplace results with no discriminating power. Failed: the Round-1 form of T3 (a ∝ −∇Φ with s→0 universality) and the Dirichlet-clamp evidence. Open: whether a maintained saturated core is biased toward supply with v ∝ 1/r².
**Would settle:** a Run A/B result passing F1–F6 with only R(I), the maintenance rule, and one τ.