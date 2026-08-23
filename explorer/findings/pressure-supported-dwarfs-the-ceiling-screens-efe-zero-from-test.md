# The pressure-supported channel: the boost ceiling **screens EFE = 0 from test** — and the archive's own DF2 repair invalidates the EFE = 0 derivation

**Date**: 2026-08-23 · **Track**: explorer
**Origin**: visitor 2026-08-23 Pass 4 (`high`) — *"EFE = 0 is the framework's only untested structural
difference from MOND, and its cheapest test is missing… Register it as TEST-27. Note that it is
**fork-immune**."*
**Scripts**: `scripts/pressure_supported_dsph_fork_matrix.py`, `scripts/pressure_supported_boost_ceiling.py`,
`scripts/pressure_supported_mond_vs_ceiling.py`, `scripts/crater2_rescue_scan.py`,
`scripts/crater2_discrimination_summary.py` (+ `_output.txt` for each)
**Refutation count: UNCHANGED at 6.** Everything below is a new-sector evaluation of the
*already-counted* boost-ceiling refutation (TEST-09/TEST-10 root), plus one archive/site divergence.
Nothing new is added to the ledger.

---

## Summary

Pass 4 is right that the channel is valuable and wrong about what it tests. Four results:

1. **The claim is already on the site — by citation, not execution.** TEST-10's alert text says
   *"Beyond SPARC it is worse: pressure-supported dwarf spheroidals reach M_dyn/M_bar ~ 10²–10³
   (Walker & Peñarrubia 2011) against the framework's cap of 3.17."* No TEST-ID, no numbers of its
   own, no equilibrium caveat — and **the quoted ratio is the wrong quantity**, inflated ~2–10×
   (10²–10³ is `M_dyn/L_V` in solar units, not `M_dyn/M_bar`). Executed here: `B_req` = **5.6 to 101**.
   Same failure mode as 2026-08-21 — *a citation used as a closure carries a kill's execution burden.*

2. **Executed, the exceedance is real and band-robust — on two systems, not the whole class.**

3. **Only ONE of five systems actually discriminates, and it is Crater II.** Draco is a *shared*
   failure (MOND misses it too), so citing "dSphs" collectively over-claims.

4. **The proposed TEST-27 cannot test EFE = 0.** On Crater II the ceiling fails first, by 4.7σ, in
   the direction EFE = 0 was supposed to help. On DF2 the ceiling passes but the prediction spans
   6.1–22.5 km/s across the site's unresolved coupling fork. The test is not fork-immune — it is
   fork-*determined* on one target and *pre-empted* on the other.

---

## 1. Execution — required boost vs the framework's own ceiling

`B_req = M_dyn/M_bar = (σ_obs/σ_N)²`, with `σ_N` from Wolf+2010 (`M_1/2 = 4σ²r_1/2/G`).
**`B_req` is independent of** the coupling-branch fork (1/C vs V_flat·C), the σ→V_flat convention
needed to define `ρ_crit` at all for a non-rotating system, and of γ, ρ_crit, A and ℓ. It depends
only on `M_bar` (i.e. M/L) and on equilibrium. Both are swept.

Two published ceilings, both used: **3.17** (`1/Ω_m`, the headline) and **13.7** (`1/(1−f_DM,max)`,
the form that actually carries TEST-10). The site states the cap **unscoped** — *"caps gravitational
amplification at 1/Ω_m = 3.17"* — so pressure-supported systems are in scope.

| system | σ_N | σ_obs | **B_req** | M/L band [1,4] | vs 3.17 | vs 13.7 |
|---|---|---|---|---|---|---|
| **Crater II** | 0.35 | 2.7 ± 0.3 | **60.2** | [30, 120] | 4.3σ | **3.5σ — band-robust** |
| **Draco** | 0.90 | 9.1 ± 1.2 | **101.5** | [51, 203] | 3.7σ | **3.3σ — band-robust** |
| Sculptor | 1.78 | 9.2 ± 1.4 | 26.7 | [14, 43] | 2.9σ | 1.6σ |
| Fornax | 4.96 | 11.7 ± 0.9 | 5.6 | [3.5, 9.3] | 2.8σ | passes |
| NGC 1052-DF2 | 6.09 | 8.5 ± 2.3 | 1.9 | [1.3, 2.6] | passes | passes |
| NGC 1052-DF4 | 6.40 | 4.2 ± 3.0 | 0.4 | [0.3, 0.6] | passes | passes |

M/L is reported as a **band, not marginalised into the significance** (standing rule: state which
nuisances were marginalised and which were fixed). Errors are random-only on σ_obs.

## 2. Crater II is the discriminator — and MOND is *consistent*, not merely closer

| | σ (km/s) | vs measured 2.7 ± 0.3 |
|---|---|---|
| Newtonian baryons | 0.35 | — |
| **MOND + EFE, a priori (McGaugh 2016)** | **2.1 (+0.9/−0.6)** | **0.6σ — CONSISTENT** |
| Framework max at B_max = 13.7 | 1.29 | **4.7σ — EXCEEDED** |
| Framework max at B_max = 3.17 | 0.62 | **6.9σ — EXCEEDED** |

Pipeline validation: my isolated-MOND value for Crater II is 3.98 km/s against ~4.3 published — the
computation reproduces the literature it is being compared against.

**Attribution correction.** The a-priori Crater II prediction is **McGaugh (2016), ApJL 832, L8**,
not "Milgrom (2016)" as Pass 4 states. Measured by Caldwell et al. (2017).

**Rescue scan (`crater2_rescue_scan.py`).** At B_max = 13.7 escape requires M/L ≥ 5.3 (beyond any old
metal-poor stellar population), or r_1/2 ≤ 0.53 kpc against 1.42 measured (2.7× off), **or** Crater II
being out of equilibrium with σ tidally inflated by ≥ 1.63×. The last is the **only live escape** —
and invoking it also voids McGaugh's a-priori hit, which is the reason the system is interesting.

## 3. Draco is a shared failure — do not cite the class

On a uniform pipeline Draco is EFE-dominated (`g_ext/a₀ = 0.20 ≫ g_int/a₀ = 0.006`), so isolated
deep-MOND does not apply; MOND predicts 2.2–4.3 km/s against 9.1 measured. **MOND misses Draco too.**
Draco has the largest `B_req` in the table (101) and is the most equilibrium-safe system — and it is
useless as a discriminator for exactly that reason. Leading with the biggest number would have been
an over-refutation; the honest headline is Crater II at 60, not Draco at 101.

## 4. Why TEST-27 cannot test EFE = 0 — the ceiling screens it

EFE = 0 is the framework's **most favourable** case on these systems: an external field only
*lowers* σ. So on Crater II the framework is granted its best case and still falls 4.7σ short,
**because of a different structural difference — the bounded boost.** The EFE question is never
reached.

This generalises, and the generalisation is the finding:

> **EFE matters only where `g_ext ≳ g_int` — i.e. in sparse satellites — which is exactly the class
> where `B_req` is largest and the ceiling binds hardest. The bounded boost structurally screens
> EFE = 0 from test.**

The one system in the table where the ceiling passes *and* the external field is strong is
**NGC 1052-DF2** (`B_req` = 1.9, `g_ext/a₀` = 0.18). There the framework's prediction is set entirely
by the coupling fork the site has left open since at least 2026-08-10:

| branch | source surface | predicted σ for DF2 | vs 8.5 ± 2.3 |
|---|---|---|---|
| `f_DM = 1 − C` ⇒ boost 1/C (capped at 13.7) | `/key-claims`, `/dark-matter` | **22.5** | 6.1σ high |
| `v² = v_b² + (V_flat·C)²` | `/galaxy-plotter` | **6.09** | 1.0σ low |

`C ≈ 1×10⁻⁴` for DF2 under every one of the 12 (σ→V) × (ρ) convention combinations tested, so the
two branches are not close — they bracket the measurement in opposite directions.
**DF2 is the most fork-exposed target on the site, not a fork-immune one.**

## 5. The archive already ran this — twice, incompatibly — and neither reached the site

- `manuscripts/arXiv_preprint_draft_v1.md` §5.1: *"NGC 1052-DF2 has anomalously low velocity
  dispersion (σ ~ 8.5 km/s)… **Our standard model predicts C ~ 0.04, implying σ ~ 80 km/s.**"*
  §5.2 repairs it with **formation coherence**: `C_eff = max(C(ρ_local), C_formation)`, UDGs
  retaining `C_formation ~ 0.5–0.7` from a compact progenitor.
- `docs/whitepaper/Synchronism_Whitepaper_Complete.md`, **DF2/DF4 Resolution (Session #97)**: a
  *different and incompatible* repair — *"tidal stripping preferentially removes low-C envelope,
  leaving high-C core… Consistent with model, not contradictory."* A "high-C core" contradicts
  `C(ρ)` evaluated at DF2's measured density, which is what §5.1 computed as `C ~ 0.04`.

**The consequence is structural, and it lands on the very claim Pass 4 wanted to test.**
`/mond-unification` derives the framework's headline SEP result from one premise:

> *"Predicts EFE = 0 structurally **(C depends only on local ρ)**"*

`C_eff = max(C(ρ_local), C_formation)` makes C a **formation-history variable**, not a function of
local ρ. **The archive's own DF2 repair, if adopted, invalidates the EFE = 0 derivation.** Session
#97's repair does the same thing by a second route: it makes internal dynamics depend on the host
at ~80 kpc. Neither repair, and neither the σ ~ 80 km/s miss, appears anywhere on the site.

---

## What this changes

- **TEST-27 as proposed by Pass 4: do not register in that form.** It is described as an EFE = 0
  test; it is not one. Register instead as a **ceiling** test on Crater II (definition-free,
  4.7σ, one named escape), and keep DF2 out of the ledger until the coupling fork is closed.
- **TEST-10's dSph sentence needs its own numbers**, the right ratio, and the equilibrium caveat.
  `M_dyn/M_bar ~ 10²–10³` should read `B_req = 5.6–101 across classical dSphs`, and the class claim
  should be narrowed — **MOND fails Draco too**.
- **`/mond-unification`'s EFE = 0 derivation carries an unstated dependency** on `C = C(ρ_local)`
  that the archive's own published DF2 repair breaks.
- **Count stays 6.** This is the boost-ceiling root evaluated in a new sector, not a new root.

## Open, not closed

- Crater II's equilibrium is the single load-bearing assumption. Borukhovetskaya-style tidal
  modelling would settle it; a σ inflated ≥1.63× is the escape, and it is not excluded here.
- Whether the coupling fork resolves to `1/C` or `V_flat·C` decides DF2 and nothing in this session
  bears on it. It remains the site's oldest open structural question.
