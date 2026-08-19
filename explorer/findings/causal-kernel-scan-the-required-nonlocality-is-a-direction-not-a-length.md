# The non-locality the RAR requires is not a *length* — it is a *direction*

**Explorer session 2026-08-19** · self-directed
**Script**: `explorer/findings/scripts/causal_kernel_memory_length_real_sparc.py`
**Output**: `…_output.txt`
**Data**: Lelli, McGaugh & Schombert 2016 SPARC — 2604 points, 139 galaxies, Q<3, i>30°, e_V/V<0.10
**Refutation count: UNCHANGED at 6.** Nothing newly refuted. A *constructive* question is answered
with a number, an existing no-go's **stated mechanism is corrected**, and a **sorting rule** for
escape candidates falls out.

---

## The question, and why it was still open

Two people asked the same thing this week, independently:

> **visitor 2026-08-19, Pass 4 (Leading-Edge Researcher), Unanswered Question #6** —
> *"What is the weakest non-pointwise functional of ρ that reproduces the RAR at observed
> scatter? This is the site's best question and it is not in the test catalog."*

> **explorer 2026-08-15, "→ Explorer (next)"** — after the Buckingham-π enumeration closed the
> local differential branch: *"Only the non-local branch survives."*

The galaxy sector's escape routes all live in one class — the radial-kernel class

```
u(r) = ∫ K(r, r′) Σ(r′) dr′
```

and three of its sub-families are already closed on this exact data set:

| sub-family | kernel | status | σ(log B \| u) |
|---|---|---|---|
| local / pointwise | `δ(r−r′)` | CLOSED 2026-08-02 | 0.1611 dex (1.38×) |
| local differential | derivatives of `δ` | CLOSED 2026-08-15 (complete π-enumeration) | ≥ 1.53× |
| **symmetric convolution** | `f(\|r−r′\|)` | CLOSED 2026-08-02 | best 1.21×, then **degrades** |
| **causal / cumulative** | `W(r,r′)·Θ(r−r′)` | **never scanned** ← contains `g_bar` | *this session* |

**The fourth row is the one that matters, and the reason it was skipped is a misreading of the
third.** The 08-02 script closed the symmetric family and wrote, correctly:

> *"g_bar = G M(<r)/r² is not a smoothed density: it carries an explicit 1/r² that no convolution
> of Σ can generate."*

That sentence is about kernel **symmetry**. A two-sided kernel `f(|r−r′|)` cannot produce a
cumulative quantity at *any* range, so its failure says nothing about how non-local a viable theory
must be. But the conclusion drawn from it — *"making the coupling differential is not a free dial"* —
is a statement about **range**, in a family that was never scanned. (The 08-15 session already
flagged that this sentence generalises an integral-kernel result to the differential class and
queued it for retirement; this run shows the error is one level deeper than that.)

---

## The construction

One parameter. Both endpoints are exactly the two competing variables.

```
              ∫₀ʳ Σ(r′) e^(−(r−r′)/λ) r′ dr′
  Σ̄_λ(r)  =  ───────────────────────────────        u_λ(r) = πG · Σ̄_λ(r)
              ∫₀ʳ        e^(−(r−r′)/λ) r′ dr′

  λ → 0    ⇒  u = πG·Σ(r)          ← the SITE's variable (local ρ at fixed h)
  λ → ∞    ⇒  u = G·M(<r)/r² = g_bar ← MOND's variable
```

λ is a **memory length**: how far back down the disk the theory has to remember. λ\* — the memory
at which `u_λ` predicts the required boost as well as `g_bar` does — is a model-free lower bound on
the non-locality any density-keyed theory must carry.

Scoring is the 08-02 statistic on the 08-02 loader, unchanged, so every number here is directly
comparable to the local and local-differential closures: `σ(log B_req | log u)`, equal-count bins,
robust MAD, where `B_req = g_obs/g_bar` is **data** (AQUAL symmetry integrates the operator once, so
`F_req = g_bar/g_obs` exactly). No functional form, no γ, no ρ_crit, no fitting anywhere.

**Outcomes were pre-registered in the script header before running** (λ\*≪R_d ⇒ constructive;
λ\*∼1–2 R_d ⇒ intermediate; λ\*≳disk ⇒ closure with a number; λ\* unreached ⇒ deficit is not about
range at all).

---

## 1 — The family works: it contains `g_bar` to 0.003 dex

This is the validation the symmetric family failed, and it has to come first, because without it a
null result would be uninterpretable.

| | σ(log B \| u) | vs g_bar |
|---|---|---|
| SPARC's own `g_bar` (target) | **0.1163** | 1.00× |
| my λ = ∞ member | **0.1192** | 1.02× |
| local Σ (λ = 0) | 0.1611 | 1.38× |
| no-information ceiling | 0.3098 | 2.66× |

The λ=∞ endpoint sits **+0.0029 dex** above SPARC's `g_bar` — the entire cost of the thin-disk /
spherical approximation in my construction, made visible rather than hidden inside the comparison.
Galaxy-block bootstrap (150 resamples): λ=∞ **overlaps** `g_bar` (Δ = +0.0024 dex, 95% CI
[−0.0062, +0.0108]).

So when a member of this family fails, the failure is about the member, not about the construction.

## 2 — The answer to "how far must it remember": **further than the galaxies are wide**

| λ (kpc) | λ/R_d | σ(log B\|u_λ) | vs g_bar | % of the local→g_bar gap closed |
|---|---|---|---|---|
| 0 | 0.0 | 0.1611 | 1.38× | 0.0 % |
| 0.25 | 0.1 | 0.1637 | 1.41× | **−5.8 %** |
| 0.5 | 0.2 | 0.1662 | 1.43× | **−11.5 %** |
| 1.0 | 0.4 | 0.1644 | 1.41× | **−7.4 %** |
| 2 | 0.8 | 0.1553 | 1.33× | 12.9 % |
| 4 | 1.7 | 0.1462 | 1.26× | 33.2 % |
| **8** | **3.3** | 0.1354 | 1.16× | **57.3 %** ← λ₅₀ |
| 16 | 6.6 | 0.1286 | 1.11× | 72.6 % |
| 32 | 13.2 | 0.1227 | 1.05× | 85.8 % |
| **64** | **26.4** | 0.1192 | 1.02× | **93.7 %** |
| ∞ | ∞ | 0.1192 | 1.02× | 93.6 % |

Two things in this table, and the first is the one I did not expect.

**(a) The first bit of memory is actively harmful.** Between λ = 0.1 R_d and λ = 0.4 R_d the causal
variable is *worse* than the purely local one — the gap-closed fraction goes to **−11.5 %**. There is
no cheap partial non-locality: a theory that smears ρ over a fraction of a scale length predicts the
RAR *less* well than one that reads ρ pointwise. Improvement only becomes monotone past λ ≈ 0.6 R_d.
This is the opposite of the intuition that motivates every "just make the coupling slightly non-local"
escape, and it is why partial-credit reasoning about locality fails here.

**(b) λ\* is not reached inside the systems.** Half the gap needs λ₅₀ = **8 kpc = 3.3 R_d**; 94 %
needs **64 kpc ≈ 26 R_d**, at which the exponential kernel is flat across any SPARC disk. Against the
galaxy-block bootstrap, **every finite λ up to 4 R_d is SEPARATED from `g_bar` at 95 %**; only λ = ∞
overlaps:

| member | Δσ vs g_bar (dex) | 95 % CI | |
|---|---|---|---|
| λ = 0 | +0.0451 | [+0.0264, +0.0682] | SEPARATED |
| λ = R_d/2 | +0.0418 | [+0.0234, +0.0634] | SEPARATED |
| λ = R_d | +0.0350 | [+0.0154, +0.0584] | SEPARATED |
| λ = 2 R_d | +0.0233 | [+0.0082, +0.0443] | SEPARATED |
| λ = 4 R_d | +0.0157 | [+0.0003, +0.0340] | SEPARATED |
| **λ = ∞** | **+0.0024** | **[−0.0062, +0.0108]** | **OVERLAPS** |

**The required kernel has no finite range.** That is the pre-registered "closure with a number"
branch, and the number is: *there isn't one.*

## 3 — The mechanism: it was never about range. It is about **direction**

Both families, at **matched range**, on **identical points**, with the **identical statistic** — so
range is held fixed and only the kernel's symmetry differs. Read row-wise:

| λ (kpc) | symmetric `f(\|r−r′\|)` | causal `Θ(r−r′)` |
|---|---|---|
| 0 | 0.1611 (1.38×) | 0.1611 (1.38×) |
| 4 | 0.1547 (1.33×) | 0.1462 (1.26×) |
| 16 | 0.1417 (1.22×) | 0.1286 (1.11×) |
| 32 | 0.1659 (1.43×) | 0.1227 (1.05×) |
| 64 | 0.1718 (1.48×) | 0.1192 (1.02×) |
| **∞** | **0.1930 (1.66×)** | **0.1192 (1.02×)** |

At **infinite range** the symmetric family is 1.66× — *worse than reading ρ pointwise* — while the
causal family reaches `g_bar`. Same range. Opposite outcome.

> **The non-locality the RAR requires is not a length. It is a direction.**
> A density-keyed theory can have unbounded range and still fail. What it must have is the
> inward-cumulative structure.

This corrects the *stated mechanism* of an existing no-go without touching its verdict. The 08-02
closure of the symmetric family stands, and its number (1.21× best, then degrading) is reproduced
here to within the point-set difference. What changes is why: the site reads that result as "range
does not help," and the honest reading is "**symmetry** does not help — range was never tested."

## 4 — And the radial weight is *measured* to be Newton's, not assumed

Generalise the interior weight exponent at λ = ∞: `u_p(r) = πG ∫₀ʳ Σ r′^p dr′ / ∫₀ʳ r′^p dr′`.
p = 1 is Newtonian (mass-weighted, giving M(<r)/πr²).

| p | −1 | −0.5 | 0 | 0.5 | **1** | 1.5 | 2 | 3 | 5 |
|---|---|---|---|---|---|---|---|---|---|
| σ (dex) | 0.1681 | 0.1540 | 0.1376 | 0.1249 | **0.1192** | 0.1224 | 0.1273 | 0.1423 | 0.1528 |
| vs g_bar | 1.44× | 1.32× | 1.18× | 1.07× | **1.02×** | 1.05× | 1.09× | 1.22× | 1.31× |

The minimum is **exactly at p = 1**, with a real (if shallow) curvature on both sides. The 08-02
script *asserted* "the data fixes the required kernel to the Newtonian one." It is now **measured**:
the data selects Newton's mass weighting out of a one-parameter family that was free to prefer
anything. This is a rare case on this site where an assertion, when tested, came back **confirmed**
rather than demoted — and it should be recorded as such.

## 5 — Nulls, and one correction that goes the framework's way

| quantity | value |
|---|---|
| no-information ceiling σ(log B) | 0.3098 dex |
| permutation null on u_∞ (200×) | 0.3073 ± 0.0025 ⇒ **z = 76.5** |
| variance of log B explained **by local Σ alone** | **73.0 %** |
| variance of log B explained by g_bar | 85.9 % |

**Local density is not an uninformative variable, and the site should stop implying it is.** Read
raw, Σ explains 73 % of the variance of the required boost. The 08-02 result — "local density
carries ≤ 0.7 % of the variance" — is about the **residual after conditioning on g_bar**, which is a
different and much narrower statement. Both are true; quoting the second without the first reads as
"ρ is noise," which the data does not say. Filing this deliberately as a **guard against
over-refutation** (the failure mode that has now produced five instances on this site).

## 6 — Robustness: the ϒ systematic does not touch this

ϒ_disk is the systematic that dissolved the 2026-08-12 γ concordance on 2026-08-14, so any claim
here had to survive it.

| axis | swept over | λ=0 ratio vs g_bar |
|---|---|---|
| ϒ_disk | 0.30, 0.40, 0.50, 0.60, 0.80 | 1.38, 1.41, 1.38, 1.35, 1.39× |
| scale height h | const 0.3 kpc, R_d/5, Bershady+2010 | 1.38× (all) |
| gas treatment | V_gas, exponential HI, none | 1.38, 1.38, 1.33× |
| inner extrapolation | exponential, none, doubled | 1.38× (all) |

**Range across the entire grid: 1.33× – 1.41×.** Flat. As on 08-15, the marginalisation guardrail is
discriminating rather than a universal solvent — it dissolved the γ concordance and leaves this
alone, which is evidence it is measuring something real.

---

## What this answers, and what it does not

**Answers the visitor's Q#6 directly.** *The weakest non-pointwise functional of ρ that reproduces
the RAR, within the scanned family, is `g_bar` itself.* There is no weaker member: the family's only
viable point is its Newtonian endpoint, and the approach to it is not a smooth trade (§2a).

**Does NOT close the causal class.** This is the limitation, stated plainly because the alternative
is the exact failure mode this site keeps catching in itself. The full causal class
`K(r,r′)Θ(r−r′)` is infinite-dimensional; I scanned a **2-parameter subfamily** (memory length λ ×
radial weight p). That is a *scan*, not the complete Buckingham-π **enumeration** that closed the
local differential branch on 08-15. The honest statement is:

> Within the two-parameter causal family spanned by memory length and radial weight, the only member
> that reproduces the RAR at observed scatter is Newton's kernel.

Anyone extending this to "the causal class is closed" would be making a conclusion one class wider
than its own test.

**Second limitation, equally load-bearing.** My kernels are **1-D radial kernels on Σ(r)**, not full
3-D kernels on ρ(**r**). A 3-D Yukawa kernel `e^(−m r)/r` projects onto a radial kernel that is *not*
my symmetric exponential. So §3's classification is measured for radial kernels and **conjectured**
for 3-D ones.

---

## The sorting rule this hands the site

The site's escape taxonomy — and the 07-27 scope demotion that the 08-15 session found rests on a
misfiling of BCM 2017 — currently sorts candidates by **local vs non-local**. §3 says that is the
wrong axis. The discriminating question is:

> **Is the candidate's kernel symmetric, or cumulative?**

- **Symmetric / finite-range smoothing** (linear scalar with a Yukawa Green's function, any
  convolutional coarse-graining, the "smear ρ a bit" family) → in the **closed** branch, at any
  range. Conjectured, per the 3-D caveat above.
- **Cumulative / enclosed-mass-like** (anything whose closed form ends up written in `g_bar`) → in
  the live branch — but §2 says the live branch's only viable point is Newton's kernel.

This is a *usable prior-art filter*: it predicts, in advance and without running anything, that any
escape candidate whose closed-form solution is expressible in `g_bar` will work and any whose
non-locality is a smoothing scale will not. **BCM 2017 is the confirming instance the site already
has on the page** — `/for-researchers` correctly quotes its closed form
`g_sym = g_bar/(exp√(g_bar/g†) − 1)`, which is written in `g_bar`. That is the rule's prediction,
satisfied. It also sharpens 08-15's refiling: the reason BCM escapes is not merely that it is
non-local, it is that its screened non-linear PDE makes the *enclosed* mass the effective source.

And it explains, mechanistically, why the framework's C(ρ) cannot be repaired by making it non-local:
the repairs that are natural for a pointwise multiplier (smear it, add gradients, give it a range)
are all in the symmetric branch, and the branch that works is the one that reconstructs the thing
C(ρ) was introduced to replace.

---

## → Action: Maintainer

1. **`/galaxy-rotation` / `/for-researchers`** — retire *"making the coupling differential is not a
   free dial"* as already queued on 08-15, but replace it with the **correct** mechanism rather than
   deleting it: *"range does not help — symmetry does. A symmetric smoothing of ρ is 1.66× worse
   than reading ρ pointwise even at infinite range; the inward-cumulative kernel reaches the RAR at
   1.02×."* (§3.)
2. **`/honest-assessment`, locality box** — the discriminating axis is **kernel symmetry**, not
   locality. Add the sorting rule and the λ table. This *strengthens* the box: it converts "local
   couplings fail" into "here is the measured boundary of what fails, and why."
3. **`/for-researchers` escape taxonomy** — sort candidates by symmetric-vs-cumulative, with BCM
   2017 as the worked confirming instance. (Composes with the 08-15 refiling; do that one first.)
4. **Anywhere quoting "local density carries ≤0.7 % of the variance"** — add "*of the residual after
   conditioning on g_bar; read raw, local Σ explains 73 %*." §5. This is an over-refutation guard,
   not a softening.
5. **`/parameter-derivations` or wherever "the data fixes the kernel to the Newtonian one" appears** —
   it is now measured, not asserted (p-scan minimum exactly at p = 1). Upgrade the citation.

## → Research (dp-gated)

The 07-27-blocked preprint gains a **constructive** section it did not have. The withdrawn statement
was a no-go; this adds a positive, quantitative boundary — *the required non-locality is directional,
not metric; the radial weight is measured to be Newton's* — plus a falsifiable sorting rule for
escape candidates. **Presumed prior art until checked**: the "MOND needs enclosed mass, not local
density" intuition is old (Milgrom's non-locality theorem is the formal version and must be the
credit line), but I have not found the λ-scan or the p-scan measured on SPARC. Literature check
required before any novelty claim — and note that this site's own record is that novelty claims in
this area do not survive audit.

## → Explorer (next)

1. **The 3-D caveat is the one that could overturn §3's rule.** Project a genuine 3-D Yukawa kernel
   through a thin exponential disk onto a radial kernel and re-run PART G with it. If a screened
   linear scalar lands in the *live* branch, the sorting rule is wrong and the escape taxonomy
   reopens. Cheapest available test of my own strongest claim — run it before anyone cites the rule.
2. **Complete the causal enumeration** the way 08-15 completed the differential one. The 2-parameter
   scan is a scan; a Buckingham-π-style argument over `K(r,r′)Θ(r−r′)` would convert §2 from a
   measurement into a closure.
3. §2a (**short memory is worse than none**) is unexplained. It is probably the 1/r² normalisation
   fighting a kernel too narrow to accumulate mass, but I have not derived it, and an unexplained
   non-monotonicity in one's own result is exactly the sort of thing that turns out to matter.
