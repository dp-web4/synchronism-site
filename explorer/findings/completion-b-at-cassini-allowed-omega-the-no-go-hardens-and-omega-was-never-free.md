# Completion B at Cassini-allowed ω: the no-go **hardens** by 2× — and ω was never a free parameter

**Explorer session 2026-08-19** · origin: visitor 2026-08-19 Pass 4, `/honest-assessment` friction item
**Script**: `explorer/findings/scripts/completion_b_cassini_omega_execution.py` · **Output**: `…_output.txt`
**Refutation count: UNCHANGED at 6.** Nothing newly refuted — an *existing* no-go is re-priced
**upward** and one of its three claimed dimensions is shown not to exist.

---

## The report, and what it got right

> **visitor 2026-08-19, Pass 4** — *"Brans–Dicke ω scanned over {0, 1, 5, 50}; Cassini requires
> ω ≳ 4×10⁴ for an unscreened scalar (Bertotti, Iess & Tortora 2003). No solar-system bound on ω is
> mentioned, while the same spacecraft is cited for TEST-25."*

**Verified against source first**, per the standing persona-verification rule — the visitor browsed
via fetched page summaries, so the grid range had to be grepped, not trusted:

- `explorer/findings/scripts/fit_gamma_family_to_desi_dr2.py:531` → `for omega in [0.0, 1.0, 5.0, 50.0]`
- `explorer/findings/scripts/covariant_00_component_sign_lock_audit.py:355` → identical grid
- no `Cassini` / `PPN` / `Bertotti` anywhere in the DE sections of `/dark-energy` or `/honest-assessment`

**The report is accurate.** And the arithmetic is analytic: `γ_PPN = (1+ω)/(2+ω)` ⇒
`γ_PPN − 1 = −1/(2+ω)`; Cassini gives `(2.1 ± 2.3)×10⁻⁵`, 2σ interval `[−2.5, +6.7]×10⁻⁵`; the
binding side is `1/(2+ω) ≤ 2.5×10⁻⁵` ⇒ **ω ≥ 4.0×10⁴**.

| ω | γ_PPN − 1 | vs 2σ allowance | |
|---|---|---|---|
| 0 | −5.0×10⁻¹ | 20000× | EXCLUDED |
| 5 | −1.4×10⁻¹ | 5714× | EXCLUDED |
| **50** (grid max) | **−1.9×10⁻²** | **769×** | **EXCLUDED** |
| 10⁴ | −1.0×10⁻⁴ | 4.0× | EXCLUDED |
| 4×10⁴ | −2.5×10⁻⁵ | 1.0× | allowed |

**The published scan sits a factor ~800 inside the excluded region.**

## Why I executed it instead of filing it

"The grid is too small" is a complaint. The question that decides anything is *does the 0/192 no-go
survive up there* — and the two answers point opposite ways (redundant-but-cleaner vs. headline-wrong).
Both were worth knowing. Neither is what happened.

## 1 — ω was never a free parameter: the allowed region is a **single point**

The pinning condition that fixes the model is `ε(x₀) = ε_crit(ω)` with
`ε_crit(ω) = (−3 + √(9+6ω))/(3ω) → 0`. So as ω grows the pinning point runs away and the closure
`C_eff(x₀) = C₀ = 0.315` is maintained by sliding x₀, not by ω doing physical work:

| ω | ε_crit | x₀ (γ=0.489) | C(x₀) | C_eff(x₀) |
|---|---|---|---|---|
| 0 | 3.3×10⁻¹ | 8.22 | 0.7954 | 0.3150 |
| 50 | 9.7×10⁻² | 25.7 | 0.9227 | 0.3150 |
| **4×10⁴** | 4.1×10⁻³ | 672 | 0.9966 | 0.3150 |
| 10⁶ | 8.2×10⁻⁴ | 3467 | 0.9993 | 0.3150 |
| 10⁸ | 8.2×10⁻⁵ | 36474 | 0.99993 | 0.3150 |

The background trajectories at ω = 4×10⁴ and ω = 10⁶ agree to **< 2 %** everywhere
(`C_eff(z=0.3)` = 0.848999 vs 0.852269). The entire Cassini-allowed region is one model.

> **"0 of 192 γ values reach the DESI quadrant, *at every Brans-Dicke ω tested*" advertises a
> dimension the construction does not have.** ω is absorbed by the closure. The scan is
> 192 γ values × 1 physical model, presented as 192 × 4.

Also worth stating because it is counter-intuitive: this completion **does not** limit to GR as
ω → ∞. Standard BD does; this one cannot, because `C_eff(x₀) = 0.315` is imposed. The scalar's
kinetic energy density takes over from the compander (`C(x₀) → 1` while `C_eff` stays at 0.315), so
at Cassini-allowed ω the dark-energy sector is carried *entirely* by the Brans–Dicke kinetic term
and not by the coherence function at all.

## 2 — At the allowed point the no-go **hardens by 2× in w₀**

Effective `w_DE(z)` on the completed background, γ = 0.489:

| ω | w(z≈0) | w(0.3) | w(0.5) | w(1) | w(2) | w(5) |
|---|---|---|---|---|---|---|
| 0 | −1.58 | −1.24 | −1.11 | −1.02 | −0.99 | −0.98 |
| 5 | −1.89 | −1.32 | −1.15 | −1.04 | −0.99 | −0.98 |
| 50 (grid max) | −2.46 | −1.55 | −1.29 | −1.10 | −1.01 | −0.98 |
| **4×10⁴ (allowed)** | **−3.18** | −2.12 | −1.93 | −1.75 | −1.39 | −1.08 |
| 10⁶ | −3.21 | −2.16 | −2.00 | −1.91 | −1.73 | −1.33 |

DESI DR2 prefers **w₀ > −1 with wₐ < 0**. Every row has **w₀ < −1** (deeply phantom) and **w rising
with z** (wₐ > 0 in CPL) — the wrong quadrant, at every ω, as published. But going to the
physically-allowed ω moves w₀ from **−1.58 → −3.18**: the published grid was scanning the
**most favourable end of an excluded range**.

The implied `ρ_DE(z)/ρ_DE(0)` makes it concrete — at the allowed point, dark energy is essentially
*absent* before z ≈ 2 and grows 130× to today:

| ω | z=0 | z=0.5 | z=1 | z=2 | z=10 |
|---|---|---|---|---|---|
| 0 | 1.000 | 0.573 | 0.522 | 0.508 | 0.541 |
| 50 | 1.000 | 0.251 | 0.196 | 0.174 | 0.177 |
| **4×10⁴** | 1.000 | **0.111** | **0.050** | **0.020** | **0.008** |

## 3 — The fork resolves, and horn (b) does not rescue anything

**Horn (a) — unscreened massless BD.** Cassini applies, ω ≥ 4×10⁴, and §2 says the no-go survives
and hardens. The DESI framing is then **redundant**: the completion was excluded by 2003
solar-system data before DESI was consulted. This is the second structurally-redundant no-go in this
sector (cf. the forced-w₀ σ, 08-12).

**Horn (b) — "pinned to its algebraic trajectory" means a prescribed background function.** A
potential that pins a field to the ambient density gives it an effective mass, hence Yukawa
suppression in the solar system, hence PPN evasion. That is real chameleon/symmetron logic and the
visitor was right to raise it. But it does not rescue the analysis — **it invalidates it**:

> The background integrated in the fit is `B(x) = 1 − 3ε − 1.5ωε²`, which is the **massless** BD
> scalar's energy density. A potential `V(C)` contributes to `B` and is absent from it. The same
> masslessness that makes Cassini apply is the assumption that produced the equation being solved.
> **The scan cannot be simultaneously PPN-safe and self-consistent.**

That is stronger than the visitor's version ("not a covariant completion a referee would accept"),
and it is a statement about the repo's own code rather than about taste.

---

## What this instance is, methodologically

This site's recorded failure mode is **over-refutation** — five instances, most recently the
"3.4–6.3σ" that died on execution. This is the **opposite**: the site *under*-refuted. It ran a scan
over the most favourable end of a region the solar system excludes, and reported the weaker result.

The general lesson is narrower and more useful than "check PPN": **when a completion adds a coupling
constant, check whether the model's own closure condition absorbs it before advertising a scan over
it.** Here the closure `C_eff(x₀) = Ω_m` ate ω entirely — which was visible analytically, in
`x0_completionB()`, without any data.

## → Action: Maintainer

1. **`/honest-assessment` ~L1358 and `/dark-energy` ~L129** — replace *"at every Brans-Dicke ω
   tested"*. ω is absorbed by the closure; the physically-allowed region is a single point. Suggested:
   *"Cassini (Bertotti, Iess & Tortora 2003) requires ω ≳ 4×10⁴ for an unscreened scalar — 800× above
   the scanned grid. Executed there (2026-08-19), the completion is unchanged in verdict and worse in
   degree: w₀ = −3.18 against −1.58 at ω = 0. The completion was excluded by 2003 solar-system data
   before DESI was consulted."*
2. **Add the Cassini citation to the DE sector.** The same spacecraft is already cited for TEST-25;
   its absence here is the defect the visitor actually found.
3. **Do not drop the 0/192 result** — it stands, and is conservative. Re-badge the *framing*, not the
   verdict.
4. **State horn (b) explicitly** as a live escape that is not implemented: a screened/massive scalar
   would evade PPN, and the fit's `B(x,ω)` does not describe it. That is an honest open edge, and
   naming it costs the framework nothing it has not already conceded.

## → Research (dp-gated)

Composes with `covariant_completion_kills_sign_lock_hardens_desi_nogo` (08-11) and
`gamma_family_direct_fit_desi_dr2` (08-12). The class statement registered for TEST-26 — *"dark
energy slaved to matter density reaches the DESI quadrant iff ρ_DE(x) has an interior maximum"* — is
unaffected; §2 supplies the ω → ∞ corner it had not been evaluated in.

## → Explorer (next)

**Horn (b) is a real, unrun model.** Add a potential `V(C)` to `B(x)` and ask whether a
density-pinned *massive* scalar — which is what "pinned to its algebraic trajectory" actually
describes — can reach the DESI quadrant. It is the one member of the covariant class that has never
been integrated, it evades the solar-system bound by construction, and per 08-11 the quadrant is
reachable iff `ρ_DE(x)` has an interior maximum — which a potential is exactly the ingredient that
could supply. This is the DE sector's only remaining unexecuted branch.
