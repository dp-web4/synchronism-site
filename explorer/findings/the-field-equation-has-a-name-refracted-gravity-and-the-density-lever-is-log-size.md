# The field equation has a name — Refracted Gravity, 2016 — and the density lever is exactly log(size)

**Date**: 2026-08-25 · **Track**: explorer · **Status**: EXECUTED (real SPARC + literature)
**Origin**: self-directed, prompted by Pass 4 of `visitor/logs/2026-08-25.md`
**Scripts**: `scripts/refracted_gravity_identity.py`, `rho_g_lever_is_size.py`,
`vertical_lever_total_field.py`, `hybrid_beta_admixture_fit.py`, `run_sweep_only.py`,
`density_efe_amplitude.py` (+ `_output.txt` for each)
**Extends**: `the-argument-of-C-three-functions-each-killed-by-its-own-distinguishing-feature.md` (08-24)
**Corrects**: `efe-zero-survives-momentum-objection-...` (08-03) prior-art screen — now cleared negative

---

## One line

The site's field equation `∇·[C(ρ)∇Φ] = 4πGρ` with `C` a tanh-of-log-density step function is
**Refracted Gravity** (Matsakos & Diaferio 2016) — not a family resemblance, the same equation with
the same permittivity family, published ten years earlier. And of the four "live discriminators"
today's Pass 4 says would fix the ledger's `0 of 24`, **exactly one has computable power** — the
vertical one — because the other three are secretly the same test of the same quantity: `log r`.

---

## What prompted this

Pass 4 handed the program its most hopeful item in months:

> *"'0 of 24 tests could select Synchronism' is not a fact about the theory. It is a fact about which
> 24 tests were written, and it is fixable this month."*

with four proposed existing-data discriminators — vertical `K_z`; globular clusters vs diffuse
dwarfs at matched `g_int`; GMC internal dynamics; an external **density** effect — plus a prior-art
warning (AQUAL + chameleon/symmetron).

Its two headline claims are about **different theories and it does not notice**. Every one of the
four discriminators varies ρ at fixed acceleration, so all four test `C_ρ`. But 08-24 established
that `C_ρ` loses the head-to-head fit by ΔBIC +2843 and cannot produce a flat rotation curve, while
the branch that *does* rotate a galaxy, `C_g`, is a function of the total field alone — under which
**all four return identically zero**. So the four amplitudes are not free: they are fixed by how
much density-keying survives the SPARC likelihood. That is a number. I went to get it, and found
the prior art on the way.

---

## Result 1 — the equation is Refracted Gravity, and three parameters agree

**Matsakos & Diaferio (2016), arXiv:1603.04943**, their Eq. 2.3 and 4.1:

```
∇·(ε ∇Φ) = 4πGρ           ε(ρ) = ε₀ + (1−ε₀)·½{ tanh[ log( (ρ/ρ_c)^q ) ] + 1 }
```

`ε₀` = "vacuum permittivity", a **floor** on the coupling; `ρ_c` critical density; `q` steepness.
Newtonian for ρ ≫ ρ_c, field enhanced for ρ ≪ ρ_c. Compare the site:

```
∇·(C ∇Φ) = 4πGρ           C_ρ = tanh(γ ln(1+ρ/ρ_crit))
                          C_Ω = Ω_m + (1−Ω_m)·x/(1+x),  x = (g_bar/a₀)^(1/φ)
```

**`C_Ω`'s functional form is RG's permittivity exactly.** `½(tanh u + 1)` and `y/(1+y)` are the same
logistic written twice; matching `u = (p/2)ln z` gives `p = 2q/ln10`, and then

> max |ε_RG − C_Ω| over 8 decades = **2.2×10⁻¹⁶** — machine zero, at every q tested.

`C_ρ` is RG at `ε₀ = 0`, differing only in how the ρ→0 limit is regulated (RG shifts and halves;
the site adds 1 inside the log). Fitted to each other over 7 decades in ρ: **rms residual 0.014**,
max 0.032 — far inside the scatter either is fitted to.

| | site | RG published | verdict |
|---|---|---|---|
| field equation | `∇·(C∇Φ)=4πGρ` | `∇·(ε∇Φ)=4πGρ` | **identical** |
| ρ_crit (mapped through the regulator) | 3.0e-25 kg/m³ → RG ρ_c ≈ 2.7e-27 g/cm³ | 1e-24 … 1e-27 g/cm³ (galaxies) | **inside** |
| steepness (mapped) | γ = 0.489–0.498 ⇒ q ≈ 1.5 | q = 0.75 galaxies, 2 clusters | between |
| floor | Ω_m = 0.315 (**derived**) | ε₀ = 0.20–0.25 (**fitted**) | ~30%, and this is the one real difference |
| max boost | `1/Ω_m = 3.17` — *"the framework's only feature distinguishing it from MOND"* | `1/ε₀ = 4–5`, a published property since 2016 | **not a distinguishing feature** |
| covariant completion | *"none exists"* / an undisclosed Brans–Dicke in the DE sector | scalar–tensor, `φ = 2ε` in the weak field (Sanna et al. 2023, A&A) | **exists, and is scalar–tensor** |
| EFE / SEP | EFE = 0, asserted as a theorem | *"possible … violation of the Strong Equivalence Principle"*, flagged **OPEN** (their §2.2.1) | direct conflict |

Two of three parameters agree once mapped correctly. (They must be mapped: reading γ against q
side-by-side compares a natural-log slope to a base-10 one and gets a factor 2 wrong — RG's galaxy
`q = 0.75` corresponds to `γ ≈ 0.245`, not 0.75.)

**The single defensible novelty left in the comparison is that the site's floor is derived from
cosmology where RG's is fitted.** That is a claim about parameter economy, not about the equation.
It is also, per 08-24's `B_max` note, an underived derivation.

### Why the previous prior-art search missed it — and it is a vocabulary failure

The 2026-08-03 finding screened this exact question and reported clean:

> *"I searched for a density-keyed rather than acceleration-keyed interpolating function and found no
> direct precedent … Prior-art gate: SCREENED, NOT CLEARED."*

It was right to hedge — and the search term that would have found RG **is in the paragraph above the
search**, in that same finding:

> *"Under the dielectric reading C **is** the gravitational permittivity."*

It searched under MOND's word (*interpolating function*) while writing in RG's word
(*permittivity*). This is the **fourth** prior-art screen in this program to return clean and later
be contradicted, and it is a clean instance of `project_a2acw_vocabulary_lockin` turned on the
program itself. **The gate is now cleared negative for the galaxy sector.**

### Pass 4's version of this item is right in spirit and wrong in both specifics

- It names **chameleon/symmetron/dilaton**. Those are scalar fields with thin-shell screening and a
  fifth force — a different construction. RG is the density-dependent *coefficient on the Poisson
  operator*, which is what the site actually has.
- It says these are *"cited nowhere on the site."* **False.** `/for-researchers` carries
  chameleon ×2, symmetron ×5, Khoury ×4, Bekenstein ×1. `Refracted gravity`, `Diaferio`, `Matsakos`
  and `permittivity` appear **zero times** across `src/`, the archive, and every track — the real
  gap was one page over from where the persona looked. *(6th confirmation of
  `feedback_verify_visitor_findings_against_source`.)*

---

## Result 2 — the ρ-vs-g lever is exactly log(size); mass carries zero information

For any self-gravitating system, `g = GM/r²` and `ρ = 3M/4πr³`, so

> **ρ / g = 3 / (4πG r) — M cancels identically.**

Verified over 33 Local Group objects: max fractional deviation **4.4×10⁻¹⁶**. Therefore **at fixed
`g`, `log ρ = −log r` + const**, and the entire discriminating lever between a density-keyed and an
acceleration-keyed coupling is the dynamic range of the *size*. Nothing else.

That is the flaw in three of Pass 4's four proposals. It quotes the **unmatched** density contrast:

| | dex |
|---|---|
| density contrast in the sample, as the objects are (**what Pass 4 quotes**) | **8.79** |
| size range in the sample | 3.19 |
| ⇒ density contrast **at matched g** | **3.19** |
| best matched pair that actually exists (Pal 14 / Dragonfly 44, \|Δlog g\|=0.09) | **2.22** |

The missing 5.59 dex is stellar mass, which spans 5.95 dex across the sample and **cancels out of
`ρ/g` exactly**. "GCs vs diffuse dwarfs, ρ differing by many orders of magnitude, a *pure*
discriminator by construction" is a 2.22 dex lever, not an 8.8 dex one.

The same identity kills the external density effect outright. My first pass at it asserted the
amplitude was ~10⁻⁸ and **the arithmetic contradicted me immediately** — for the ultra-diffuse
dwarfs `ρ_ext/ρ_int` is percent-level, not 10⁻⁸. Done properly, with a Miller & Bregman (2015)
β-model corona instead of a flat `n`:

| object | `g_ext/g_int` (MOND EFE) | `ρ_ext/ρ_int` (density EFE) | `\|dv/v\|` |
|---|---|---|---|
| Antlia II | 58.5 | 0.085 | 4.3% |
| Sagittarius | 106.0 | 0.051 | 2.6% |
| Crater II | 55.3 | 0.028 | 1.4% |
| median of 26 | 9.5 | 5.6e-4 | 0.03% |

`0/26` objects exceed 10%. And the ratio-of-ratios is `∝ r_h · D^0.5` — fitted on the table,
**+1.000 log r_h +0.500 log D, residual rms 0.0000 dex**, because it is the same identity again. So
the density EFE is not an independent channel from the MOND EFE: across the sample the two are
correlated at **r = +0.84**, and the only thing that separates them is, once more, size.

---

## Result 3 — SPARC allows |β| < 0.065, and that is the amplitude of all four tests

One-parameter interpolation, fitted on the same points and likelihood as 08-24:

```
x = (g_obs/a₀)·(ρ/ρ_ref)^β        C = tanh(γ ln(1+x))        g_obs·C(x) = g_bar
β = 0 → C_g exactly (MOND-simple at γ=½; all four tests null)
β > 0 → density enters; β IS the amplitude of all four
```

N = 2622 points, 149 galaxies. `corr(log ρ, log g_bar) = +0.834` — the degeneracy Pass 4 correctly named.

| | value |
|---|---|
| β free | **−0.0030** (γ = 0.4983, a₀ = 5.73e-11, σ_int = 0.1227 dex) |
| Δ(−2lnL) for β = 0 | **0.061 ⇒ 0.25σ** — the data does not require any density keying |
| naive profile 95% | [−0.024, +0.021] |
| **galaxy-block bootstrap 95%** (150 resamples) | **[−0.050, +0.063]**, σ(β) = 0.026 |
| N_eff inflation | **3.5×** (cf. the +184 → +11.5 guardrail) |
| estimator sweep, 3 h-modes × 2 ϒ_disk | β̂ ∈ [−0.012, +0.008]; worst cap **\|β\| < 0.065** |

γ returns to **0.498** at ϒ=0.5 — the exact MOND point, for the fourth independent time.

> **Note on the family.** β = 1 is not `C_ρ`; this family keeps the g-dependence at full strength and
> *adds* density, so pure density-keying sits outside it. That is deliberate: Pass 4's four tests ask
> whether there is **any** density signal at fixed g, which is exactly what β measures. The
> normalized version (density *replacing* acceleration) is 2026-08-19's α-scan.

---

## Result 4 — one of the four has power; the reason is that it is not a size test

`|Δ ln C| = β·ln10·(Δlog ρ at matched |g|)`, `|dv/v| = ½|Δ ln C|`:

| discriminator | lever | floor | β needed | **headroom** | verdict |
|---|---|---|---|---|---|
| **vertical `K_z`, \|z\|<2 kpc at fixed R (Gaia DR3)** | **2.30 dex** | 3% | 0.0113 | **5.7×** | **REAL POWER** |
| GC vs UDG at matched `g_int` (Pal 14 / DF 44) | 2.22 dex | 10% | 0.0391 | 1.7× | marginal |
| GMC interior vs disk mean at matched \|g\| | 1.50 dex | 10% | 0.0579 | 1.1× | marginal |
| external density EFE (Antlia II, best in LG) | 0.04 dex | 10% | 2.34 | **0.03×** | **no power** |

*headroom = (SPARC's allowed |β|) ÷ (β needed to see it). >1 means the test probes territory SPARC
has not already excluded.*

**Why the vertical channel escapes the size identity.** A disk column at fixed R is not virialised
in z: it is supported against a field set mostly at *another* scale, the radial one. `C` keys on the
**total** field, and at fixed R the radial part does not change with z at all —

| z / kpc | Δlog ρ | Δlog \|g\| | lever |
|---|---|---|---|
| 1.1 | −1.01 | +0.0075 | **1.02** |
| 2.0 | −2.29 | +0.0082 | **2.30** |

|g| moves **1.9%** while ρ falls 2.3 dex. In `ρ/g` terms the column "looks like" an object **201×
larger** at z = 2 kpc without anything getting larger. That is the loophole, it is free, and it is
the only one of the four that does not have to buy its lever by finding a physically bigger object.

*(My first pass got this wrong in the other direction — it differenced against `g_z` alone and
returned 1.76 dex. The correct comparison is the total field, and it is both smaller in the
Bovy–Rix window and larger in the Gaia DR3 one.)*

**Caveat, stated because it moves the number the wrong way for me:** this is a Newtonian sech²
column used to compute a *lever*, not a self-consistent solution of the modified vertical Jeans
equation. The back-reaction (boost changes `K_z` changes the scale height that sets ρ(z)) is second
order and will *reduce* the split. The quoted amplitudes are upper bounds — which is the direction
that matters for a ceiling, and the wrong direction for the one positive result here.

### And this test is the prior art's own method

Pass 4 calls the vertical channel a *"Tier-1, existing-data, zero-cost test"* the catalog *"contains
none of."* The catalog indeed contains none — I checked: 28 TEST-IDs, none vertical, and TEST-02 is
the *horizontal* Gaia test (wide binaries) where the ρ-lever is ~0 and the prediction sits 80× below
systematics. But **Cesare, Diaferio, Matsakos & Domínguez Romero (2020), A&A 637, A70** used
*"the rotation curves and the radial profiles of the stellar velocity dispersion **perpendicular** to
the galactic disks of 30 galaxies from the DiskMass Survey … to determine the gravitational
permittivity."*

So the vertical channel is how the competing implementation of the same equation fixed its free
function, six years ago, on 30 galaxies. **That makes the test cheaper and sharper than Pass 4
realised, not worthless**: there is a published, fitted, three-parameter competitor with the
identical field equation to run head-to-head against, instead of a blank-sheet forecast.

---

## Result 5 — the vertical discrepancy has already been measured, against MOND, at >13σ

**Wang, Tsai, Zhang, Wu, Li, Xue, Zhao & Fan (2026-05-11, arXiv:2605.10857)** — *"Milky Way Dynamics
Favor Dark Matter over Modified Gravity Models"* — do the joint reconstruction TEST-27 proposes:
Milky Way radial rotation curve **plus** Gaia vertical phase-space spirals plus a broken-exponential
disk. Their result is **structural, not statistical**: *"no model can simultaneously reproduce both
observations."* MOND disfavoured **>13σ**, STVG >4σ.

This lands on `C_g` directly, because `C_g` at γ = ½ **is** MOND-simple. But read the direction
carefully, because it is the opposite of what it looks like:

> Wang+2026 report that **no acceleration-keyed model** can fit the radial and vertical fields at
> once. `β` is precisely the freedom that decouples them. Their structural inconsistency is the
> signature `β ≠ 0` would produce.

That converts TEST-27 from a forecast into an **adjudication of an already-published measurement**,
and it is two-sided and pre-registrable *today*:

| | `K_z` excess over the acceleration-keyed prediction at z = 2 kpc |
|---|---|
| β = 0.0113 (Gaia 3% detection floor) | **3.3%** |
| β = 0.065 (**SPARC 95% cap**) | **21.7%** |

**The pre-registration writes itself.** Read the amplitude of Wang+2026's radial–vertical
inconsistency at z ≈ 2 kpc and compare:

- **needs > 21.7%** → the framework is killed by SPARC and Gaia *jointly*, by a margin neither
  dataset produces alone. This would be the program's first **two-dataset** refutation.
- **lands in [3.3%, 21.7%]** → density-keying absorbs a discrepancy that kills every
  acceleration-keyed model, inside the range SPARC independently allows. That is a **selection**,
  and this ledger has never recorded one.
- **< 3.3%** → below the Gaia floor; non-discriminating, and the >13σ must be something else.

I have **not** read their amplitude — only the abstract. Flagging this rather than quoting it,
because a 13σ on this program's track record earns the `N_eff` treatment before anyone leans on it
(the site's own +184 became +11.5, and its 3.4–6.3σ became a forced-`w₀` artifact). But the window
is narrow, computed, and falsifiable in both directions, which is the rarest property in this ledger.

---

## What this does to Pass 4's headline

> *"'0 of 24' is a fact about which 24 tests were written, and it is fixable this month."*

**Partly true, and it does not do what Pass 4 thinks.**

- **True**: the catalog's galaxy arm is entirely in-plane rotation curves, and there is a real,
  unregistered regime with 5.7× headroom. That is a genuine coverage gap and this program had not
  found it.
- **But 3 of the 4 proposals collapse** — two into the same `log r` lever that is 4.6 dex smaller
  than advertised, one to 3% of the amplitude needed.
- **And the surviving test does not select the framework.** It discriminates *MOND* from *MOND plus a
  ≲6% density admixture*. The framework's actual claim — full density keying — is already outside
  the bound the same fit produces. A positive `β` would be evidence for density-keying over pure
  acceleration-keying, which is real and two-sided and rare in this ledger; but the theory it would
  favour is Refracted Gravity, which has been in the literature since 2016 and has a fitted
  permittivity, a covariant completion, and 30 galaxies of vertical data already.

**The count of refutations does not move.** Nothing here refutes anything: it prices four proposals
and finds one worth running. Per the standing rule that a claimed tie carries a kill's execution
burden, the three closures are *executed*, not argued: the size identity is exact to 4.4e-16, the
corona amplitudes are computed from published profiles, and the β bound is a bootstrap on real SPARC.

---

## Action: Maintainer

| # | Pri | Page | Item |
|---|---|---|---|
| 1 | **P0** | `/for-researchers`, `/what-synchronism-is-not` | Cite **Matsakos & Diaferio 2016** beside the field equation and state plainly that `∇·[C(ρ)∇Φ]=4πGρ` with a tanh-log-density coupling **is Refracted Gravity**. This is a larger exposure than the chameleon/symmetron paragraph already there, and it is the *right* one. |
| 2 | **P0** | `/tier-1-existing` TEST-09, `/parameter-derivations` | `B ≤ 1/Ω_m` is described as *"the framework's only feature distinguishing it from MOND."* It is `1/ε₀`, published 2016. Retire the distinguishing-feature claim; keep the bound. |
| 3 | **P0** | `/for-researchers`, `/honest-assessment` | *"No covariant completion exists"* is false: **Sanna, Pipino, Diaferio et al. (2023), A&A** give a scalar–tensor completion with `φ = 2ε` in the weak field. This is also the honest answer to Pass 4's *"undisclosed Brans–Dicke"* item — the DE sector's scalar–tensor completion is in the right class and now has a published referent. |
| 4 | **P1** | `/mond-unification`, `/key-claims` | M&D 2016 §2.2.1 flags *possible SEP violation* as **open** for this exact equation. The site asserts EFE = 0 as a theorem. Either the site has resolved an open problem in RG (worth saying loudly, and worth checking) or the derivation is scoped narrower than the page implies. Per 08-24 it is the latter: the EFE = 0 derivation holds only for `C_ρ`, which cannot rotate a galaxy. |
| 5 | **P0** | `/test-catalog` | Register the vertical test as **TEST-27**, **pre-registered before the amplitude is read** (Result 5): predicted `K_z` excess at z = 2 kpc is **3.3%–21.7%**; above 21.7% refutes, inside selects, below 3.3% is non-discriminating. Power is computed, not asserted — lever 2.30 dex at \|Δlog g\| = 0.008, headroom 5.7×. Note it is Cesare+2020's method, that a fitted RG competitor exists, and that Wang+2026 have already taken the measurement. This would be the catalog's **first genuinely prospective entry** (cf. `project_preregistration_gap`: 0/10 prospective). |
| 6 | **P1** | `/test-catalog`, `/for-researchers` | Record the three closures with their numbers: GC-vs-dwarf 1.7×, GMC 1.1×, external density EFE 0.03×. Do **not** register them as tests. State the reason once — `ρ/g = 3/(4πGr)`, mass cancels, the lever is `log r` — because it closes the whole class, not three instances. |
| 7 | **P2** | `/for-researchers` | Pass 4's *"chameleon/symmetron cited nowhere"* is wrong; they are on that page. Worth an anchor so the next reader finds them. |

---

## Open threads

1. **Run TEST-27.** Everything needed is public: Gaia DR3 vertical Jeans / `K_z(z)` at 8 < R < 22 kpc,
   Bovy & Rix (2013) `Σ(|z|<1.1 kpc)`, and Cesare+2020's fitted `(ε₀, ρ_c, q)` as the competitor.
   The self-consistent modified vertical Jeans solve is the real work and it is a day, not a month.
2. **Does the site's *derived* floor beat RG's *fitted* one?** That is the only surviving novelty in
   the parameter comparison and it is directly testable on Cesare+2020's 30 galaxies: fix
   `ε₀ = Ω_m = 0.315` and refit `(ρ_c, q)`. If the fit degrades, the derivation is wrong; if it
   holds, the framework has removed a parameter from a published theory, which is a real if modest
   contribution and the first one this program would have.
3. **Read Wang+2026's radial–vertical inconsistency amplitude** and run the three-way adjudication in
   Result 5. This is the highest-value single action available to this program and it is a literature
   read, not a computation.
4. **The vocabulary-lockin failure is recurrent and cheap to fix.** Four prior-art screens have now
   returned clean and been contradicted. In this instance the winning search term appeared in the
   same finding, one paragraph above the search. A screen should enumerate the *synonyms of the
   construction* (permittivity / dielectric / refractive / susceptibility / coupling function /
   interpolating function) rather than searching the program's own house vocabulary.
