# Finding: the archive *does* have a field equation — and it is not the one the site's refutations use

**Date**: 2026-08-08
**Track**: explorer
**Origin**: `topics/candidate-discriminators-die-on-definitional-forks.md` (P0, maintainer 2026-08-08)
**Scripts**: `explorer/scripts/force_law_fork_amplitude.py`, `force_law_fork_decidability.py`, `discriminator_census.py` (+ `*_output.txt`)

---

## Summary

The topic asked whether "0 discriminating tests" is a statement about *specification* rather than
*data*, and proposed **"no Lagrangian"** as the common cause of three consecutive candidate
discriminators dying on unmade definitional choices.

**The premise is factually wrong, and correcting it turns the topic's conclusion inside out.**

1. **A field equation exists.** `manuscripts/Appendix_D_Synchronism_in_General_Relativistic_Form.md`
   §D.2 states `∇²Φ = 4πG ρ/C(ρ)`; §D.3 gives effective Einstein equations `G_μν = 8πG T_μν/C(ρ)`;
   §D.5 writes an effective worldline action. It was committed **2025-12-01** (`4400d54f`) —
   **seven months before** the site began asserting, on `/honest-assessment` and `/mond-unification`,
   that "there is **no** field equation anywhere in this framework's galaxy sector — no action, no
   Lagrangian, no covariant formulation, no dynamics."

2. **It is not the same law the site uses.** §D.2 states, in one equation block and as if they were
   one statement, both `∇²Φ = 4πGρ/C` (call it **L1**) and `g_obs = g_bar/C` (**L3**). These are
   different laws. L3 is the spherical solution of `∇·[C∇Φ] = 4πGρ` (**L2**) — a *different* field
   equation, which the site invented as a "one-line completion" on 2026-08-04 precisely because it
   believed no field equation existed.

3. **The gap is large and cannot be tuned away.** On the site's own five galaxies, with the site's
   own `C(ρ)`, L1 and L2=L3 differ by **0.57–1.42 dex in g** (median 0.81). The gap is **identical
   at γ = 2 and at γ = 0.489** — it is a *γ-invariant*, so no choice of the framework's one free
   parameter closes it.

4. **But the fork is decidable without data.** L1 dies a priori: as ρ→0, `C → γρ/ρ_crit`, so
   `ρ_eff = ρ/C → ρ_crit/γ`, a **constant**. L1's source therefore never vanishes in vacuum — it
   approaches a uniform density floor filling all space. Every isolated galaxy gets infinite mass and
   a rotation curve rising forever. **This holds for every γ > 0 and every ρ_crit > 0.**

5. **The control refutes the "underspecification ⇒ no discriminating content" law.** MOND has the
   same class of realization fork (AQUAL vs QUMOND), still unresolved in 2026 — and its fork
   amplitude on these same galaxies is **exactly zero** (≤10⁻¹⁶ dex, roundoff). That is a theorem,
   not luck: ν is the functional inverse of μ, so the two realizations coincide identically in
   spherical symmetry. MOND is underspecified in the same way and is highly discriminating anyway.

**The diagnosis is not fork *existence*. It is fork *amplitude*, and whether anyone ran the branches.**

---

## The four laws, and which survive

| | Law | Source | Status |
|---|---|---|---|
| **L1** | `∇²Φ = 4πGρ/C` | Appendix D.2 (archive) — **on no site page** | **Eliminated a priori** (vacuum source floor) |
| **L2** | `∇·[C∇Φ] = 4πGρ` | `/mond-unification`, 2026-08-04 | Survives |
| **L3** | `g = g_bar/C` | `/galaxy-rotation`; `f_DM = 1−C`; TEST-09/10 | **≡ L2** in spherical symmetry |
| **L4** | `V² = V_bar² + (V_flat·C)²` | `/galaxy-plotter` | Plotting stand-in; no field equation, no manuscript |
| **L5** | `g = g_bar·C` | pre-2026-08-04 site reading | Retracted (wrong direction vs `f_DM = 1−C`) |

The site's own statement that L2 "reproduces g = g_N/C exactly in spherical symmetry" is correct —
integrate `∇·[C∇Φ] = 4πGρ` over a ball and you get `C·g·r² = G·M(<r)`. **L2 and L3 are one law.**
So the live coupling fork was never three-way; it is **L1 vs L2=L3**, and L1 is not on the site.

### Numbers (outermost observed point, γ = 2)

| galaxy | V_obs | V under L1 | V under L2=L3 | fork, dex(g) |
|---|---|---|---|---|
| DDO 154 | 47 | 1 139 | 2 353 | 0.63 |
| NGC 2403 | 136 | 4 891 | 12 440 | 0.81 |
| NGC 3198 | 150 | 7 273 | 37 190 | **1.42** |
| UGC 128 | 55 | 2 530 | 7 310 | 0.92 |
| NGC 7331 | 250 | 12 122 | 23 380 | 0.57 |

(Both are catastrophically wrong at γ=2 — that is the already-banked ΔBIC=+184 refutation, not a new
one. The column that matters here is the last one: how far apart the framework's own two readings are.)

### The a-priori kill of L1

`C(ρ) = tanh[γ ln(1 + ρ/ρ_crit)]`. Small-x: `ln(1+x) → x`, `tanh(u) → u`, so `C → γρ/ρ_crit` and

```
ρ_eff = ρ/C  →  ρ_crit/γ      (constant, independent of ρ)
```

Verified numerically to 4 decimals at x = 10⁻⁸ for γ ∈ {0.25, 0.489, 1, 2, 5}. Consequences:
`M_eff(<r) ~ (4/3)πr³·ρ_crit/γ` diverges; `V ∝ r` forever. The implied mass inside 100 kpc is
**10¹⁷–10¹⁸ M☉** per galaxy — 2×10⁷ to 6×10⁸ times the baryonic mass, for objects whose observed
curves are flat by 5–20 kpc.

**This is distinct from the vacuum pathology already on `/mond-unification`.** That one is L2's:
`g = g_N/C → ∞` as `C → 0` at fixed M — a divergent *field*. L1's is a non-vanishing *source*.
Different objects; neither implies the other. Do not merge them.

---

## Census: 21 candidates, generated from the ledger

`discriminator_census.py` parses the `tests` array out of `src/app/tier-1-existing/page.tsx` by
brace-matching (13 rows, 11 numbered — matches the page's own stated count), extracts evidence by a
fixed keyword table, and prints the evidence next to every verdict so any single row can be disputed
without re-deriving the table. Four rows are adjudicated explicitly with stated reasons; nine
ID-less candidates are appended by hand with their source page named.

The topic's three-cell taxonomy (*died on data / died on fork / never had power*) **misclassifies
TEST-09 and TEST-11**, both of which hit a definitional fork and then **ran every branch**. A fourth
cell is required:

| verdict | n | share |
|---|---|---|
| NEVER-HAD-POWER | 7 | 33.3% |
| DIED-ON-FORK (open — nobody ran the branches) | 7 | 33.3% |
| DIED-ON-DATA | 4 | 19.0% |
| **FORK-CLOSED-BY-EXECUTION** | 3 | 14.3% |

**10 of 21 candidates encountered a fork. Of the 3 that were actually worked, 3 closed.**
TEST-09 ran 11 velocity-definition variants (all >0.3, kill stands). TEST-11 ran every BIC
convention and external-field strength (empty intersection at all). This session closed the coupling
fork by elimination. **The 7 that remain open are exactly the 7 nobody has run.**

So the honest program-level statement is not "the framework's predictions fork, therefore it has no
discriminating content." It is:

> **A fork is not fatal. An *unexecuted* fork is. This program's own record is 3 for 3 on forks it
> chose to work, and 0 for 7 on forks it chose to describe.**

That is a claim about *effort allocation*, not about the class of theory — and unlike the
"no Lagrangian" story, it survives the MOND control.

---

## What this does and does not change

**Does not change:** the refutation count. **Count stays 6 (3–4 independent roots).** Nothing was
refuted here. L1 was *eliminated*, which removes a reading — the same bookkeeping as 08-08's ceiling
closure. L1 was never on the site, so no site claim rested on it.

**Does change, and this is the load-bearing consequence:** closing the coupling fork on L2=L3
**removes the conditionality from TEST-09 and TEST-10**. `/tier-1-existing` caveat 1 currently says
both rest on "one of three live conventions." Two of those three (L4, L5) are already retracted or
self-labelled stand-ins, and the archive's L1 is now eliminated. The surviving reading *is* the one
those tests refute. The caveat should be narrowed from "convention-dependent" to "one root, and that
root is now the only reading left standing" — which is a **stronger** statement against the
framework than the hedge it replaces, and it should not be sold as a new refutation.

**Also does change:** `/honest-assessment` and `/mond-unification` assert that no field equation, no
action and no covariant formulation exist. Appendix D contains all three. A charitable reading —
that D.2/D.3 are *postulated ansätze* rather than *derived* equations, which the appendix itself
says ("the simplest Ansatz consistent with…") — is defensible and worth stating. But the wording as
it stands is false, and it caused concrete harm: **believing the object did not exist, the site
built a replacement (L2) that disagrees with the existing one (L1) by ~1 dex, and never compared
them.** This is the third confirmed instance of the "check for an existing explanation before
accepting a new one" failure — now at the level of a field equation.

---

## Proposed registration gate (topic item 3), and why the obvious version is wrong

The topic proposes: *no TEST-ID until a candidate names (a) which reading of C, (b) which epoch,
(c) which force law.* Run against the ledger, that gate blocks 4 of 11 at registration (TEST-03,
TEST-04a, TEST-08, TEST-10) and passes 7 — it does not over-block.

**But "name the choice" is the weaker gate, and it would have licensed the wrong answer twice.**
Naming a reading is free; any of L1, L3, L4 could have been named in 2026-04 and the resulting test
would have been registered against a law that is now eliminated. What TEST-09 and TEST-11 actually
did — the thing with a 3-for-3 record — is different:

> **Registration gate (proposed): a candidate gets a TEST-ID when it reports its predicted value
> under *every* live reading, and the spread between them in dex. It is registered as
> DISCRIMINATING if the verdict is stable across the spread; as BLOCKED, with the spread quoted, if
> it is not.**

This is strictly cheaper than resolving the theory, it is what the program already does when it
bothers, and it converts every one of the 7 open forks into either a robust result or an explicitly
quantified blocker. It also would have caught L1: reporting the coupling fork's spread (0.57–1.42
dex, γ-invariant) is exactly the computation that surfaced the vacuum floor.

Applied to the flagship open item: **EFE = 0 is blocked on the *argument* fork (which variable C
eats: ρ / g_bar / |∇Φ|), not on the coupling fork closed here.** This session does not unblock it.
It does remove one of the two stacked blockers, and the gate says what to report meanwhile: the
predicted EFE under all three arguments, with the spread.

---

## Action: Maintainer

1. **`/honest-assessment` (~L156, ~L1218) and `/mond-unification` (~L119)** — "there is no field
   equation anywhere in this framework's galaxy sector" is false. Replace with the accurate,
   narrower claim: *Appendix D.2/D.3 postulate a modified Poisson equation and effective Einstein
   equations; none is derived from an action, and D.2's own two forms are not equivalent.* Cite
   `manuscripts/Appendix_D_Synchronism_in_General_Relativistic_Form.md` and its 2025-12-01 commit.

2. **`/galaxy-rotation` + `/tier-1-existing` caveat 1** — add L1 as the fourth reading, with the
   0.57–1.42 dex γ-invariant spread, and its a-priori elimination. Then narrow caveat 1: TEST-09/10
   are one root resting on the **only surviving** reading. **Do not bump the count.**

3. **`/key-claims`** — the vacuum divergence entry currently carries L2's divergent *field*. Add
   that L1 has a distinct vacuum pathology (non-vanishing *source*), and that they are not the same
   statement.

4. **`/for-researchers`** — the MOND control is the citable object: *MOND's AQUAL/QUMOND realization
   fork has exactly zero amplitude in spherical symmetry; this framework's coupling fork has 0.57–1.42
   dex and is γ-invariant.* This is the sharpest available statement of what "underspecified" means
   here, and it needs no data.

5. **`/falsifiability` or `/research-philosophy`** — the census result and the registration gate.
   Lead with the number that carries it: **3 of 3 forks that were executed closed; 0 of 7 that were
   only described.**

**Back-annotation**: `Synchronism/Research/proposals/appendix_D_field_equation_is_not_the_site_force_law_20260808.md`

---

## Open threads

- **Run the gate on the argument fork.** Predicted EFE under C(ρ), C(g_bar), C(|∇Φ|), with the
  spread in dex. If the spread is small the 08-07 blocker dissolves; if it is ~1 dex, EFE = 0 is
  blocked for the same reason L1 was, and that is quotable.
- **D.3 forces a fifth force on baryons — resolved here, worth its own writeup.** The Bianchi
  identity `∇^μ G_μν = 0` applied to D.3's `G_μν = 8πG T_μν/C(ρ)` requires `∇^μ[T_μν/C] = 0`. If
  baryons are separately conserved (`∇^μT_μν = 0`) this reduces, for dust `T_μν = ρu_μu_ν`, to
  `u^μ∇_μ C = 0` — C constant along every fluid worldline. That is false in any expanding or
  collapsing flow, and *maximally* false in cosmology, where `ρ ∝ a⁻³` and hence `C` changes along
  every worldline by construction. **This is not a contradiction, but the escape is expensive:**
  the framework must give up separate baryon conservation, so `∇^μT_μν = T_μν∇^μ ln C ≠ 0` and
  baryons no longer follow geodesics — D.3 entails a **density-gradient fifth force** on ordinary
  matter. That is (a) a genuine, previously unstated structural prediction, (b) directly constrained
  by equivalence-principle and Solar-System tests, which is the same door TEST-11 already found
  closed at +17.95σ, and (c) an unregistered candidate discriminator. It should be worked before it
  is described — see the gate above.
- **`ρ_crit = A·V_flat^B` makes C a functional of a *global* property of the system.** No field
  equation of any form can be well-posed with a coefficient that depends on the asymptotic rotation
  velocity of the galaxy you happen to be inside. This may be a deeper no-go than the coupling fork,
  and it is untouched by every reading above.
