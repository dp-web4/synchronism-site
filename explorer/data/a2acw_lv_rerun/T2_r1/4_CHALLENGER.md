# Round 4 (CHALLENGER): Final Stress

I pick the **simplest alternative model** and use it to name the **patch point**.

## 1. Alternative: Keller-Segel chemotaxis, with saturation removed

Take a Laplace-sourced scalar field Φ ∝ 1/r from any source. Give each body the rule v = κ∇Φ, with κ a constant.

- It reproduces everything the Primary currently defends: attraction, sign independence, v ∝ 1/r², a −1 exponent in 2D, and superposition.
- It needs no I_max, no R(I), and no s_c.
- A variant, the Hooke/Le Sage-style sink-flow model, has bodies absorb the medium and get advected inward. It gives the same 1/r² drift and is a known dead end, for the same reasons below.

The Primary's F1–F3 do not discriminate between the saturation model and this one. The saturation model earns a place only if its attraction appears at no extra cost to κ or the maintenance rule (F6). Round 3 already expects this to fail. The reduction in practice is: **saturation supplies the field, a bespoke κ supplies the force.** Inverse-square is then a property of 3D Laplace, not of Synchronism.

## 2. Where the surviving candidate breaks: mass scaling

The Round-3 argument says a maintained core is biased toward higher supply. Test it against dimensional scaling.

- The inflow a core needs to offset leakage scales with its **surface area**, ∝ m^(2/3) for constant s_c.
- The source strength M ∝ R_c·ΔI_c scales **linearly with radius**, ∝ m^(1/3).
- Neither is ∝ m.

Consequences:
1. v₁ ∝ κ(m₁)·M₂/d² depends on the test body's size, so the **equivalence principle fails** unless κ(m) is tuned.
2. Momentum conservation requires m₁v₁ = m₂v₂, which with M ∝ m^(1/3) fails by a factor (m₁/m₂)^(1/3) or so. F4 would fail at a 10× mass ratio.
3. Gravitational "charge" (M, set by the boundary condition) and inertial mass (m, the stored amount) are different quantities. Making them proportional is a **patch**, not a result.

## 3. Superposition and nonlinearity

T2 holds only for s ≪ 1, but the test body must have s_c near 1 to persist (Round 2, §2). Two bodies at d ~ 8–40 cells have overlapping near-saturation shells. R(I) then makes the sourced field **non-additive** where it matters, so 3-body forces are not pairwise sums. Gravity is superposable to high precision in the solar system. The Primary cited this deviation as a "signature", but at the strength implied by n = 1–2 it is probably excluded, and it is unquantified.

## 4. Patch-point inventory

Each of these is currently an injected rule, not an output of R(I):
1. **Maintenance rule** (what keeps the core at s_c).
2. **κ**, the bias coupling, which is G in disguise.
3. **τ**, the inertia term.
4. **The M-to-m identification**, for equivalence.
5. **R(I)'s functional form** and n, which are admitted free.

Five free elements against one inverse-square exponent is a negative fit count. The structural risk is that the sign of the force (attraction) is encoded in whichever rule the author writes for 1, so the simulation confirms the choice.

## 5. Questions (max 2)

1. Report κ, or G in lattice units, as a function of (s_c, n, N). If it is not stable across these, then 1/r² is the only surviving output. Which of items 1–5 will you freeze before the run, and will you publish them first?
2. In Run A, with maintenance **removed**, does the surviving drift sign equal the sign in the maintained run? If it flips or vanishes, do you concede the force is the rule and not R(I)?

## Status

**Narrowed, close to Failed for "derives gravity."**
- **Held:** gravity-sector field geometry (1/r, 1/r², and the 2D control), which is generic Laplace physics.
- **Failed:** the Round-1 force law, the s→0 universality, and the unmodified M ≡ m identification (§2).
- **Open:** whether any bias independent of a hand-made maintenance rule exists.
- **Would settle:** a pre-registered Run A/B in which a_P is m-independent, momentum is conserved at a 10× mass ratio, and F6 passes, with κ derived from R(I) and not fitted.