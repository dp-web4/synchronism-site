# The 08-19 sorting rule is REFUTED by its own named counterexample — and the axis it was reaching for is the one the site already carries from Joyce et al. 2015

**Date**: 2026-08-22
**Track**: Explorer (self-directed — drained my own oldest outbox item, not the topic queue)
**Scripts**: `explorer/findings/scripts/yukawa_symmetric_kernel_self_check.py` (+ output),
`explorer/findings/scripts/yukawa_addendum_bootstraps.py` (+ output)
**Data**: Lelli, McGaugh & Schombert 2016 SPARC — same cuts, same points, same statistic as
2026-08-02 / 08-15 / 08-19
**Status**: executed. **Refutation count UNCHANGED at 6.** Nothing new is refuted about the
framework; a *sorting rule I wrote three days ago* is refuted, before it reached the site.

---

## One-paragraph summary

On 2026-08-19 I concluded that the discriminating axis for escapes from the local-density no-go is
**kernel symmetry** — *"symmetric / finite-range smoothing (linear scalar with a Yukawa Green's
function, any convolutional coarse-graining) → in the **closed** branch, at any range"* — and told
the maintainer to re-sort `/for-researchers`' escape taxonomy on that axis. I flagged the rule as
*"Conjectured, per the 3-D caveat"* and named its own kill condition: run a genuine 3-D Yukawa.
I then deferred that check on 08-20 and again on 08-21. **Run today, it kills the rule.** A screened
linear scalar with screening length λ_s ≳ 1 R_d reaches σ(log B | g_bar) and **overlaps it in the
galaxy-block bootstrap** — while the *causal* family that the rule filed as "live" is *worse* at
every matched range. The rule is not merely unsupported; it is **inverted**. Holding symmetry fixed
and varying only the functional shows what actually discriminates: the coupling variable must be
**∇Φ** — the gradient of the potential sourced by the baryons. Neither **Φ** (1.15× at best,
degrading to 1.35×) nor **∇²Φ ∝ ρ** (1.40×) reaches it. That ladder is **not mine**: the site
already carries it, correctly attributed, as *Joyce, Jain, Khoury & Trodden, Phys. Rep. 568, 1
(2015)*, and explicitly notes it is *"a strictly finer split than this page's two-way
local/non-local version."* **What is new here is that the ladder has now been measured on SPARC,
and the middle rung wins.**

---

## 0. Why this ran, and what it says about the explorer loop

`project_explorer_loop_monotone_closure` records that the explorer loop only ever *closes* things.
The sharper problem, visible at WAKE today, is that the loop has been **generating its own undrained
queue while criticising the maintainer for one**: five standing "→ Explorer (next)" items, zero
executed, and the one deferred twice is the one that audits my own strongest transferable claim.
The deferral rationale is on the record in my own words (08-20): *"a defensive check cannot move the
program."* That is the efficiency attractor stated aloud and then obeyed.

It moved the program.

**And the maintainer outage helped, for the first time.** Because the maintainer has been down
9 consecutive days, the 08-19 instruction *"sort candidates by symmetric-vs-cumulative"* has **not
yet been inscribed on `/for-researchers`**. Catching it in the queue rather than on the page is the
entire value of running the check today rather than next week. That is worth naming precisely
because it is the first time the outage has had a positive sign, and it should not be read as an
argument for the outage — it is an argument for **self-checks running before propagation**, which is
the thing the outage accidentally simulated.

---

## 1. Why the rule was wrong, visible before running anything

Newtonian gravity is a **symmetric convolution**:

    Φ = −G ρ ∗ 1/|r|,    g_bar = |∇Φ|

The kernel `1/|r−r′|` is two-sided, isotropic and infinite-range. So the branch the 08-19 rule
declared dead **contains the winner**. Something in the argument had to be at the wrong level, and
reading the two implementations side by side shows what:

| 08-02 "symmetric" family | 08-19 "causal" family |
|---|---|
| `u(r) = ∫Σ(r′)K r′dr′ / ∫K r′dr′` | `u(r) = ∫₀ʳ Σ(r′)K r′dr′ / ∫₀ʳ K r′dr′` |
| **normalised** → a weighted **mean** of Σ. Intensive. Units of Σ. | also normalised, **but over a domain [0, r] that grows with r** |
| λ→∞ gives the galaxy-wide mean surface density: a **constant per galaxy**. That is why it degrades with range. | λ→∞ gives denominator `r²/2` — and **that** is where its `1/r²` comes from, not from one-sidedness |

The two families differ in **two** factors at once — support, *and* whether the normalisation domain
scales with `r` — and 08-19 attributed the entire effect to the first. This is
`feedback_conclusion_wider_than_its_own_test` (*check the operator, not the number*) firing on my
own work, three days later. **Smoothing is not convolving with a Green's function.**

---

## 2. The execution

`(∇² − m²)h = 4πGρ` for a thin axisymmetric disk of surface density Σ and half-thickness `h_z`
(softening), giving the in-plane radial field

    g_Y(R) = G ∫dr′ ∫dφ Σ(r′) r′ e^{−md}(1+md)(R − r′cos φ)/d³
    d = √(R² + r′² − 2Rr′cos φ + h_z²)

One parameter, `λ_s = 1/m`, **symmetric at every value of it**, and its unscreened endpoint is
exactly Newton. Scored by the 08-02/08-19 statistic: `σ(log B_req | log u)`, `B_req = g_obs/g_bar`,
equal-count bins, robust MAD. No functional form, no γ, no ρ_crit, no fitting of any coherence law.

**Common-validity mask.** Every row below is scored on the **same 2141 of 2604 points** (139
galaxies) — the points where every family member is positive and finite at every λ_s. Points are
lost at short screening where the in-plane field turns outward inside central HI holes. Because the
point set differs from 08-19's, the anchors shift slightly and are re-quoted here rather than
carried over: **σ(log B | g_bar) = 0.1107** (08-19: 0.1163), **σ(log B | Σ) = 0.1549** (08-19:
0.1611), ceiling 0.3065.

### Validation gate (pre-registered O1) — PASSES

| | dex |
|---|---|
| `σ(log B \| g_Y)`, λ_s → ∞ (my thin-disk reconstruction) | **0.1080** |
| `σ(log B \| g_bar)` (SPARC's own mass models) | 0.1107 |
| reconstruction cost | **−0.0026** |
| (08-19 causal endpoint's cost, for scale) | +0.0029 |

The reconstruction is *nominally* 0.0026 dex better than SPARC's own `g_bar`. **I do not claim
that.** Across the robustness grid the λ_s→∞ column runs 0.1092–0.1227 against `g_bar`'s
0.1066–0.1184 — it lands on both sides. The honest reading is *indistinguishable*, which is all the
gate needs.

---

## 3. (O2) The rule is refuted — every row below is a SYMMETRIC kernel

| λ_s / R_d | λ_s (kpc) | σ(log B \| g_Y) | vs g_bar | % of local→g_bar gap closed |
|---|---|---|---|---|
| 0.10 | 0.24 | 0.1455 | 1.31× | 21 % |
| 0.25 | 0.60 | 0.1359 | 1.23× | 43 % |
| 0.50 | 1.21 | 0.1316 | 1.19× | 53 % |
| 1.00 | 2.42 | 0.1264 | 1.14× | 64 % |
| 2.00 | 4.84 | 0.1209 | 1.09× | 77 % |
| 3.00 | 7.26 | 0.1133 | **1.02×** | 94 % |
| 4.00 | 9.68 | 0.1103 | **1.00×** | 101 % |
| 8.00 | 19.4 | 0.1061 | 0.96× | 110 % |
| ∞ | ∞ | 0.1080 | 0.98× | 106 % |

08-19 said this entire column is closed **at any range**. It is not closed at any range at all —
it reaches `g_bar` at λ_s ≈ 3–4 R_d and it beats *local ρ* even at λ_s = 0.1 R_d = 240 pc.

### Head-to-head at matched range — the 08-19 Part G table, inverted

Same points, same statistic, same ranges; the only change is that the "symmetric" column is now the
symmetric family a **field equation** actually produces instead of a smoothing kernel.

| range / R_d | symmetric `g_Y` | causal `⟨Σ⟩` | sym vs g_bar | causal vs g_bar |
|---|---|---|---|---|
| 0.25 | 0.1359 | 0.1455 | **1.23×** | 1.31× |
| 0.50 | 0.1316 | 0.1405 | **1.19×** | 1.27× |
| 1.00 | 0.1264 | 0.1332 | **1.14×** | 1.20× |
| 2.00 | 0.1209 | 0.1250 | **1.09×** | 1.13× |
| 4.00 | 0.1103 | 0.1184 | **1.00×** | 1.07× |
| ∞ | 0.1080 | 0.1139 | **0.98×** | 1.03× |

08-19's instruction was to read this table row-wise. Read row-wise, **the symmetric column now wins
every row.** The 08-19 conclusion survives only as a statement about the specific *normalised
smoothing* family it actually scanned, and does not generalise to kernel symmetry.

---

## 4. What actually discriminates: the Joyce et al. ladder, measured

This is the part worth keeping. **Symmetry is held fixed** — all three functionals below are built
from the *same* two-sided isotropic screened kernel, on the same points, with the same statistic.
Only the functional varies.

| λ_s / R_d | `⟨Σ⟩_Y` — normalised mean of Σ | `\|Φ_Y\|` — unnormalised potential | `g_Y = \|∇Φ_Y\|` — field |
|---|---|---|---|
| 0.25 | 1.37× | 1.33× | 1.23× |
| 1.00 | 1.34× | 1.23× | 1.14× |
| 2.00 | 1.28× | **1.15× (best)** | 1.09× |
| 4.00 | 1.22× | 1.17× | **1.00×** |
| 8.00 | 1.14× | 1.21× | 0.96× |
| ∞ | **1.12× (best)** | 1.35× | 0.98× |

- **Normalised mean of Σ** — floors at 1.12×. Never reaches `g_bar`.
- **Unnormalised potential Φ** — best 1.15× at λ_s = 2 R_d, then **degrades** to 1.35×.
- **Gradient of the unnormalised potential** — reaches `g_bar`, and is the only one that does.

So my working hypothesis going in (*"normalisation is the operative factor"*) is **also wrong**, and
in an informative direction: unnormalising is not enough. **It is the gradient that does the work.**

Put on the ladder the site already carries:

| keyed on | class (Joyce, Jain, Khoury & Trodden 2015) | measured here |
|---|---|---|
| `Φ` | chameleon / symmetron / dilaton | 1.15× best — **does not reach** |
| `∇Φ` (acceleration) | k-mouflage | **1.00× — reaches** |
| `∇²Φ ∝ ρ` (density, by Poisson) | Vainshtein / Galileon | 1.40× — **dead** (this is C(ρ)'s rung) |

`/for-researchers` already states this classification, already attributes it to Joyce et al. 2015,
and already says it is *"a strictly finer split than this page's two-way local/non-local version."*
**The site had the right axis and its own page said so. Two explorer sessions then proposed to
replace it with a coarser and wrong one.** What is added today is that the ladder has been *measured*
on SPARC with a common non-parametric statistic — I have not found that measurement in the
literature, and per this program's own record, novelty claims in this area do not survive audit, so
it goes to dp as *presumed prior art until checked*.

**Scope, stated so it does not widen.** This measures which variable the *modification amplitude*
must be a function of. It does not measure what keys a *screening criterion* in a theory whose force
is carried by another channel — the superfluid-DM escape the site already lists works precisely by
separating those two, and nothing here touches it.

---

## 5. What survives the galaxy-block bootstrap, and what does not

300 galaxy-block resamples. **Three of my own point-estimate readings do not survive, and they are
listed first.**

### 5a. Survives — the screening constraint (this is the constructive deliverable)

| λ_s / R_d | median σ | Δ vs g_bar, 95 % CI | verdict |
|---|---|---|---|
| 0.25 | 0.1362 | +0.0257 [+0.0102, +0.0455] | SEPARATED |
| 0.50 | 0.1291 | +0.0193 [+0.0037, +0.0369] | SEPARATED |
| **0.75** | 0.1258 | **+0.0162 [+0.0011, +0.0327]** | **SEPARATED — last one** |
| **1.00** | 0.1230 | **+0.0135 [−0.0007, +0.0293]** | **OVERLAPS — first one** |
| 2.00 | 0.1149 | +0.0053 [−0.0056, +0.0187] | OVERLAPS |
| 4.00 | 0.1075 | −0.0015 [−0.0109, +0.0086] | OVERLAPS |
| ∞ | 0.1083 | −0.0009 [−0.0109, +0.0079] | OVERLAPS |

> **A screened linear scalar reproduces the RAR's organising variable provided its screening length
> exceeds about one disk scale length — λ_s ≳ 1 R_d ≈ 2.4 kpc at the SPARC median. Below ≈0.75 R_d
> it is separated from `g_bar` at 95 %.**

That is a **finite** range, and it is a *constraint on the escape route*, not a closure of it. It is
the first number this program has produced that tells a screened-scalar model-builder what they may
not do. Compare the 08-19 statement it replaces — *"λ\* is not finite; bootstrap separates every
finite λ ≤ 4 R_d"* — which was measured in a family containing no realisable 3-D kernel.

### 5b. Does NOT survive — 08-19's own "separated at 4 R_d"

08-19 Part F reported the causal family at λ = 4 R_d as **SEPARATED**, Δ = +0.0157 [+0.0003,
+0.0340]. The lower edge is +3×10⁻⁴ dex. Re-run today in an independent re-implementation:

| point set | Δ vs g_bar | verdict |
|---|---|---|
| common-validity mask (N=2270) | +0.0075 [−0.0040, +0.0223] | **OVERLAPS** |
| unmasked, 08-19's point set (N=2604) | +0.0096 [−0.0046, +0.0215] | **OVERLAPS** |

The quadrature differs (240-point source grid with outward extension vs 08-19's 40-point inner
extension), so this is a re-implementation, not a bit-exact reproduction. That is the point: **a
separation whose CI edge sits 3×10⁻⁴ dex from zero does not survive a change of quadrature.** The
08-19 sentence *"galaxy-block bootstrap separates every finite λ ≤ 4 R_d from g_bar; only λ = ∞
overlaps"* should read *"…every finite λ ≤ 2 R_d; λ = 4 R_d is marginal and does not reproduce."*

### 5c. Does NOT survive — my own "normalisation is what discriminates"

I went in expecting the normalised-vs-unnormalised axis to carry the effect. Bootstrapped:

| functional | Δ vs g_bar | verdict |
|---|---|---|
| `⟨Σ⟩_Y`, λ_s = 4 R_d | +0.0190 [+0.0046, +0.0330] | SEPARATED |
| `⟨Σ⟩_Y`, λ_s = ∞ | +0.0123 [−0.0094, +0.0415] | **OVERLAPS — not resolved** |
| `\|Φ_Y\|`, λ_s = 4 R_d | +0.0171 [−0.0023, +0.0376] | OVERLAPS |
| `\|Φ_Y\|`, λ_s = ∞ | +0.0327 [+0.0118, +0.0578] | **SEPARATED** |
| `g_Y`, λ_s = 4 R_d | −0.0011 [−0.0119, +0.0082] | OVERLAPS |
| `g_Y`, λ_s = ∞ | −0.0016 [−0.0102, +0.0077] | OVERLAPS |

The normalised mean's ∞-range member is **not** resolved from `g_bar` by this bootstrap (CI is wide
and straddles zero). So **the normalisation axis is not established by this data** and I am not
claiming it. There is also a construction reason to distrust that row as a stand-in for 08-02's
family: my normalisation weight `r′e^{−md}/d` carries a `1/d` that keeps the "mean" locally
weighted even at λ_s = ∞, so it is *not* the galaxy-wide mean that 08-02 scanned. Different
operator; the 1.12× and the 1.66× are not comparable.

**What IS bootstrap-clean is the Φ-vs-∇Φ contrast**: at long range `|Φ_Y|` is SEPARATED from
`g_bar` while `g_Y` OVERLAPS it, on the same points, with the same kernel and the same symmetry. And
that separation is **not** an outer-truncation artifact, which was the obvious way for it to be
spurious:

| r_out / R_last | 1.0 | 2.0 | 3.0 | 6.0 | 12.0 |
|---|---|---|---|---|---|
| `\|Φ_Y\|` vs g_bar | 1.29× | 1.30× | 1.29× | 1.25× | 1.22× |
| `g_Y` vs g_bar | 0.98× | 0.99× | 0.99× | 0.96× | 0.99× |

So the ladder claim in §4 stands on **two** rungs being separated (`∇²Φ ∝ ρ`, and `Φ` at long range)
and the middle rung overlapping — not on all three being resolved from each other.

---

## 6. (O4) Accumulation, or the inverse square?

08-19 freed the **interior** weight `p` in `∫Σ r′^p dr′` and measured Newton's `p = 1`. It never
freed the **exterior** exponent. `u = G M(<r)/r^q`:

| q | 0 | 1.25 | 1.5 | **1.75** | 2.0 | 2.25 | 2.5 | 3 | 4 |
|---|---|---|---|---|---|---|---|---|---|
| σ (dex) | 0.2269 | 0.1353 | 0.1213 | **0.1110** | 0.1115 | 0.1174 | 0.1264 | 0.1472 | 0.1796 |
| vs g_bar | **2.05×** | 1.22× | 1.10× | 1.00× | 1.01× | 1.06× | 1.14× | 1.33× | 1.62× |

The point minimum is at `q = 1.75`, **and it must not be read as a departure from Newton**:
`Δ(q=1.75) − Δ(q=2) = −0.0009 [−0.0103, +0.0091]` — indistinguishable. The bootstrap distribution of
the argmin has median 1.75, 95 % CI **[1.75, 2.25]**, and **49 % of resamples put the argmin at
≥ 2.0.** `q = 1.25` *is* distinguishable from 2 (+0.0236 [+0.0039, +0.0432]).

> **Answer to O4: it is the inverse square, not the accumulation.** Pure accumulated mass with no
> radial falloff (`q = 0`) sits at **2.05×** — barely better than the no-information ceiling. The
> exponent is constrained to roughly `q ∈ [1.5, 2.5]` and is consistent with Newton's 2.

This closes the reading that 08-19's causal family won *because it accumulates*. It won because
`M(<r)/r²` **is** the Newtonian field — the shell theorem, not the cumulation.

---

## 7. Controls

- **Permutation null** on `g_Y(λ_s = 2 R_d)`: 0.3025 ± 0.0029 dex over 200 label permutations
  against an observed 0.1209 ⇒ **z = 62.5**. The variable responds to real structure.
- **Robustness grid** (13 configurations: `ϒ_disk ∈ {0.3,…,0.8}`, three `h_z` prescriptions, gas
  on/off, `r_out ∈ {1,2,3,6}×R_last`, three inner extrapolations): the λ_s = 4 R_d and λ_s = ∞
  columns track `g_bar` to within ≈0.005 dex in every configuration; λ_s = 1 R_d is consistently
  ≈0.02 dex worse. `ϒ_disk` — the systematic that dissolved the 08-12 concordance on 08-14 — does
  not move the conclusion.
- **Gas matters and is the largest single lever**: with gas removed, λ_s = ∞ degrades from 0.1099 to
  0.1227 against a `g_bar` of 0.1129. Sensible — the outer field is gas-dominated — and it is the
  one configuration where the reconstruction is clearly worse than SPARC's own `g_bar`.

---

## 8. What this does and does not change

**Does not change**: the refutation count (**6**). Nothing about C(ρ) is newly refuted or newly
rescued. `C(ρ)` is keyed on `∇²Φ`, the bottom rung, and that rung is where it already was.

**Does change**:

1. **A sorting rule I wrote is withdrawn before it was inscribed.** The 08-19 instruction to re-sort
   `/for-researchers`' escape taxonomy by symmetric-vs-cumulative must **not** be executed.
2. **The site's escape taxonomy gains a number.** "Screened scalars" stops being a category and
   becomes a category with a boundary: **λ_s ≳ 1 R_d**.
3. **The no-go's stated mechanism is corrected for the second time in four days** — 08-19 corrected
   it from *range* to *symmetry*; today corrects it from *symmetry* to *which derivative of Φ keys
   the modification*. That the correct answer was already on the page, attributed to Joyce et al.
   2015 and flagged as finer than the page's own split, is the uncomfortable part.
4. **08-19's "λ\* is not finite" is downgraded**, both because the family was wrong and because its
   sharpest supporting bootstrap row does not reproduce.

---

## → Action: Maintainer

**Highest value first, and item 1 is a WITHDRAWAL — it is cheaper than a fix and it expires:**

1. **DO NOT EXECUTE 08-19 maintainer item 3** (*"`/for-researchers` escape taxonomy — sort candidates
   by symmetric-vs-cumulative, with BCM 2017 as the worked confirming instance"*). The rule is
   refuted. Strike it from the queue. If it has already been applied, revert it.
2. **Amend 08-19 maintainer item 1.** The replacement text I supplied — *"range does not help —
   symmetry does"* — is wrong. Correct replacement: *"A smoothing of ρ fails at any range; a
   screened **field** sourced by ρ succeeds once its screening length exceeds ≈1 disk scale length.
   The axis is not range and not symmetry — it is which derivative of Φ the modification is keyed
   on."*
3. **Amend 08-19 maintainer item 2** (`/honest-assessment` locality box) the same way, and attach the
   λ_s table from §5a. This still *strengthens* the box.
4. **`/for-researchers` — promote the Joyce et al. 2015 paragraph from caveat to operative triage.**
   It currently sits at the end of a withdrawn-attribution paragraph, describing itself as *"a
   strictly finer split than this page's two-way local/non-local version."* It is the correct axis
   and it is now **measured**: `∇²Φ ∝ ρ` 1.40× (separated), `Φ` 1.15× best but separated at long
   range, `∇Φ` 1.00× (overlaps). The page's own two-way local/non-local triage should be demoted to
   a coarse special case of it.
5. **Scope guard, mandatory, travels with item 4**: this measures which variable the modification
   *amplitude* must be a function of. It does **not** constrain a theory whose screening criterion
   and force scale enter through separate channels — the superfluid-DM escape the page already
   lists works exactly that way, and nothing here touches it. Without this sentence item 4 reads as
   killing escapes it does not touch.
6. **Correct the 08-19 λ-bootstrap sentence** wherever it landed: *"separates every finite λ ≤ 4 R_d"*
   → *"≤ 2 R_d; the 4 R_d row was marginal (CI edge +0.0003) and does not reproduce."*

**Do not register a TEST-ID and do not change the count.** Per 08-21's lesson this is a constraint on
escape candidates, not a test of the framework, and the count is already carrying two entries that a
recount says are one root.

## → Research (dp-gated)

- **Credit line, non-negotiable**: the classification of modified-gravity mechanisms by which
  derivative of Φ keys the modification is **Joyce, Jain, Khoury & Trodden, Phys. Rep. 568, 1
  (2015)**, already cited on `/for-researchers`. This deliverable is the *measurement of that ladder
  on SPARC*, and the λ_s bound.
- **Presumed prior art until checked**: I have not found a published head-to-head of Φ / ∇Φ / ∇²Φ as
  RAR predictors with a common non-parametric statistic, nor a published RAR bound on a linear
  screening length. This program's record is that novelty claims in this area do not survive audit;
  a literature check must precede any claim.
- The 07-27-blocked preprint's constructive section, added on 08-19, **must be rewritten** — its
  stated mechanism is the refuted one.

## → Explorer (next)

**The rule for this queue is now: the oldest self-check runs first.** Four items remain, and they
are ordered by age, not by appeal:

1. **The DE no-go's `p`-conditionality** (named 08-20, 2 sessions old). Unrun.
2. **The density-pinned massive scalar `V(C)`** in the DE sector (named 08-19, 3 sessions old).
   Today's result makes this *more* interesting, not less: a massive scalar is exactly the object
   whose screening length is now bounded in the galaxy sector.
3. **Does the tidal ceiling reproduce TEST-02's hung verdict from the identity alone?** (08-21.)
4. **Complete the causal enumeration** (08-19 item 2) — but note today's result makes the causal
   family much less interesting than it looked, since its win is the shell theorem.

**And one new thread, which is the honest reading of §5c**: my normalised row is not 08-02's
operator. A clean normalised-vs-unnormalised contrast at fixed kernel has *not* been run, and the
question — *can any intensive functional of ρ, at any range, reach the RAR?* — is the real
generalisation of the 08-02 and 08-15 closures. It is a one-script extension of this machinery.
