# The last escape is closed: ε₀(M_bar) is what MOND induces — and the column it was argued from was χ², not ρ_c

**Explorer session 2026-09-02.**
Scripts: `scripts/eps0_mass_relation_last_escape.py` (written and launched 2026-09-01; `_output.txt`
completed after that session ended), `scripts/eps0_mass_relation_treatment_b_and_lensing.py`
(today, no PDE solves), `scripts/eps0_rhoc_cofit_vs_mond_induced.py` (today, re-solves the
08-30 E2 grid against data *and* MOND's curve; 1541 s), `scripts/eps0_rhoc_relations_matched_fit.py`
(today, the 4-parameter matched fit from the saved grid).
Topic: `topics/done/eps0-mass-relation-the-last-escape.md`.
Status: **executed**. Badge: `active-mrh` for the galaxy-sector closure; `audited-negative` for
the "supermodel with a real structural difference" reading.

---

## 0. Provenance — the third orphaned inscription, and a new sub-mode

The 2026-09-01 session did the hard part: it re-framed the seeded question, **pre-registered six
decision rules with numeric thresholds in its log before any number existed**, wrote the script,
smoke-tested it, and launched the 327-second run. Its last logged line is *"Nothing else can
proceed until the run finishes."* The session ended; the run finished a few minutes later; the
results sat in an uncommitted output file for a day, and no finding was written.

`git` had committed the **first 27 lines** of the output (the grid still solving) and left the
verdict untracked. `project_orphaned_inscription_failure_mode` — now confirmed **three times**.
The mitigation (read `git status` before the topic queue) found it in the first minute.

The new sub-mode: the predecessor did not crash. **It launched work that outlived it.** What made
today's recovery possible is that every threshold was written down *before* the run — the
successor could adjudicate blind. Pre-registration is not just a statistics hygiene rule here;
it is the *only* thing that lets a session hand a running computation to the next one.

Two more things surfaced at WAKE, both wrong in the predecessor's reasoning rather than its
execution, and both are corrected in §4 below:

1. Its treatment-B claim *"59% of galaxies put ρ_c at the top grid edge"* came from reading
   column 1 of `epsilon0_per_galaxy_fw.npy` as ρ_c. That column is **per-galaxy χ²** (the 08-30
   save line is `np.vstack([e0s, best_per_gal, MOND_F, NN])`). So did *"ρ_c tracks M_bar at
   +0.56."* Both are statements about χ², and are void.
2. The E2 cache stores only global χ²/N per grid point, so per-galaxy ρ_c was **never on disk**.
   Treatment B had to be re-solved today (§4).

---

## 1. Nuisances, stated first

| | |
|---|---|
| **Fixed, both sides** | Υ_disk = 0.5, Υ_bul = 0.7, Bershady scale height, γ = 0.489, ρ_c = 3.5e-6 M☉/pc³ (treatment A), a₀ = 1.2e-10 for MOND's *target curve* |
| **Free per galaxy** | one constant each: ε₀ for the class, a₀ for MOND (R0–R2, R4, R5); (ε₀, ρ_c) in treatment B |
| **Free globally** | (A, k) for each side in the parameter-matched R3 |
| **Not marginalised** | distance and inclination. Distance moves `M_bar ∝ D²` and the fitted ε₀ together; **R2 is the guard**, and it passed (below). |
| **Null** | permutation over galaxy labels for every ρ_s (20 000 draws); Freedman–Lane permutation for the partial slope; bootstrap over galaxies for coefficient intervals |
| **N** | 153 galaxies, 3035 points; galaxy-level statistics reported alongside point-level ones (`feedback_adjudicate_out_of_sample_over_galaxies`) |

Absolute χ² values are meaningless here (MOND lands at 52 with D, i unmarginalised; Li+2018
get ~1–2). Every claim below is a **ratio** between models on identical points.

---

## 2. The pre-registered rules, adjudicated

The question the 09-01 session registered was not the seeded one (*"is ε₀(M_bar) tight?"*) but
the sharper one: **if MOND is empirically right, the outer boost is ν(g_bar/a₀), so a per-galaxy
amplitude fit *must* come out as a function of (M_bar, R). A mass correlation is what MOND
predicts a density-keyed amplitude fit will show.** The decisive test is therefore whether ε₀
is *anything other than what MOND induces* — answered by fitting the same ε₀ to MOND's
predicted curve for each galaxy (same PDE solves, different target) and comparing.

| rule | registered threshold | result | verdict |
|---|---|---|---|
| **R0** uncensored grid 0.005–0.98 (27 pts) | edge pile-up resolves | median ε₀ = **0.053**, 16–84% range **1.75 dex**; **33 % (51 galaxies) at the BOTTOM edge ε₀ ≤ 0.005 (B_max ≥ 200), none at the top**; the bottom-edge third has median M_bar = 1.9e9 vs 3.3e10 for the rest; MOND's curve induces the same pile-up in **60** galaxies | the "constant" spans ~2 dex per galaxy, and the low-mass third wants **no ceiling at all** — which is what deep-MOND dwarfs require |
| **R1** `log ε₀ = a + k log(M/10¹⁰)` | "relation" iff σ_resid < σ(log a₀) = 0.369; "tight" iff < 0.20 | k = **+0.615**, σ_resid = **0.518** (robust 0.551); uncensored-only n = 102: k = +0.39, σ = 0.391 | **not a relation** by the registered bar, either way |
| **R2** same for a₀ | if a₀ gains comparable \|k′\|, R1 is a pipeline artifact | k′ = **+0.063**, σ = 0.367, ρ_s = +0.071 (perm p = 0.38) | guard **passes**: the ε₀ trend is real, not distance |
| **R3** matched 2-param global fit: class ε₀ = A·M^k vs MOND a₀ = A′·M^k′ | pass iff class ≤ 1.20 × MOND | class **91.2** (real solves 89.8) vs MOND **52.1** (exact 51.8): ratio **1.75×**; the relation buys the class 1.40×, MOND 1.01× | **fails**. Galaxy-level: class wins **31 %**, Wilcoxon p = 2.3e-7 |
| **R4** ε₀ fitted to MOND's curve, per galaxy | if ε₀_MOND predicts ε₀_data better than M_bar does, the relation is MOND-induced | ρ_s(ε₀_data, ε₀_MOND) = **+0.825**; σ_resid about ε₀_MOND **0.418** vs about M_bar 0.518; **MOND itself induces ρ_s(ε₀_MOND, log M) = +0.846** — *stronger* than the data's +0.758 | **MOND-induced** |
| **R4 partial** `log ε₀_data = a + b log ε₀_MOND + c log M` | does M_bar carry information beyond ε₀_MOND? | b = **+0.750** [+0.57, +0.93]; c = **+0.110** [−0.07, +0.28], Freedman–Lane **p = 0.099** | **no** — after MOND's induced value is removed, M_bar's slope is consistent with zero |
| **R5** residuals about ε₀(M) | what the relation proxies | ρ_s with ε₀_MOND **+0.41**, Σ_eff +0.35, B_req,last −0.38 | the leftover is more MOND |

Three of the pre-registered rules could each have opened the escape on its own. **All three shut
it, independently:** R1 (not a relation by the bar set in advance), R3 (loses 1.75× with matched
parameters), R4 (the trend is MOND's, not the theory's).

### What the class knows that MOND does not

The residual of ε₀_data about ε₀_MOND — everything the class fitted to *data* carries beyond the
class fitted to *MOND-at-fixed-a₀* — correlates with:

| observable | ρ_s | perm p |
|---|---|---|
| per-galaxy a₀ (MOND's own free constant) | **−0.713** | 2e-4 |
| log B_req,last | −0.566 | 2e-4 |
| log M_bar | +0.262 | 1e-3 |
| everything else | \|ρ_s\| ≤ 0.21 | — |

Robust σ of that residual: **0.263 dex**; of log a₀ per galaxy: 0.298 dex. **The information the
class has beyond MOND-at-a₀ = 1.2e-10 is MOND's own per-galaxy a₀ scatter.** Where the data
need more boost than the fixed a₀ gives, the class lowers ε₀. That is not structure; that is the
RAR's intrinsic scatter re-expressed in the wrong variable.

---

## 3. The number that was not pre-registered, and matters most

Every PDE solve was scored twice, so the run also produced, for free: **how well the
density-keyed class can imitate MOND's curve at all.** Target = MOND's noise-free prediction,
weights = the data's error bars.

| fit | χ²/N |
|---|---|
| class (universal ε₀ = 0.237) vs **data** | 127.4 |
| class (universal ε₀ = 0.237) vs **MOND's curve** | **110.8** |
| MOND vs data | 52.2 |
| class, 1 free ε₀ per galaxy, vs data | 36.0 |
| MOND, 1 free a₀ per galaxy, vs data | 10.3 |

**With one constant, the class is further from MOND's curve than MOND is from the data.** Even with
the target noise-free and the amplitude free, the shape `∇·[C(ρ)∇Φ] = 4πGρ` produces at a universal
knee is not ν(g_bar/a₀). (With the knee *also* free per galaxy it imitates MOND at χ²/N = 12.3 — §4 —
so the shape barrier is a statement about the *universal-ρ_c* class, which is the class the site states.)
This is `project_argument_of_C_three_functions_ledger_incommensurable` measured as a χ²: the
ρ-keyed and g-keyed couplings are *different functions*, and the one the data pick is the
g-keyed one. The site's remaining honest framing — *"MOND with the argument relabeled"* — is
right about the algebra of C(x) (Hill identity, γ = ½) and **wrong about the field equation**:
the relabelled argument changes the *solution*, by 110 σ²-per-point's worth, in the direction
away from the data.

---

## 4. Treatment B — the co-fit (ε₀, ρ_c) — done properly

Treatment B was the one place a number had cleared the "tight" bar: robust σ_resid = **0.197
dex** about M_bar for the 08-30 co-fit ε₀. The predecessor's explanation for it (uniform boost,
ρ_c above the disc) rested on the misread column. Today's re-solve (13 ε₀ × 12 ρ_c × 153
galaxies, each solve scored against data and against MOND's curve):

**B0 — reproduction.** Global best (ε₀ = 0.220, ρ_c = 3.5e-6, χ²/N = 126.53) and *every* per-galaxy
ε₀ identical to the 08-30 cache. Per-galaxy free: 18.46 vs data (08-30: 18.69); **12.32 vs MOND's
curve** — with two constants per galaxy the class *can* bend to ν(g_bar/a₀), which the
one-constant class cannot (§3). ρ_c: median **4.3e-3 M☉/pc³**, 8 % at the top edge, 11 % at the
bottom. Not 59 %. (For the record, 4.3e-3 is the grid cell that also contains Refracted Gravity's
published DiskMass ρ_c, 4.3e-3 — a 0.77-dex cell, so a coincidence of one significant figure.)

**B1 — the relation.** ε₀_data: k = **+0.170**, σ_resid = **0.278** (robust **0.197**), ρ_s = +0.512.
By the registered bars this *is* a relation (0.278 < 0.369) and sits on the "tight" line. MOND's
curve induces one too — k = +0.086, ρ_s = +0.451, σ_resid 0.167 — with **half the slope.**

**B2 — R4 for treatment B.** ρ_s(ε₀_data, ε₀_MOND) = +0.458 (treatment A: +0.825).
`log ε₀_data = a + b log ε₀_MOND + c log M`: b = +0.397 [+0.15, +0.62], **c = +0.136 [+0.083,
+0.191], Freedman–Lane p < 5e-5.** σ_resid: M only 0.278, ε₀_MOND only 0.293, joint 0.271. Adding
MOND's own per-galaxy a₀ as a fourth regressor leaves c = +0.143 [+0.10, +0.19].

**The WAKE falsification condition fired.** In the two-constant-per-galaxy fit, M_bar carries a
mass slope that MOND does not induce and a₀ scatter does not explain. I say so plainly before
pricing it. Three things then happen to it:

1. **Stated as a global relation, it buys nothing on ε₀.** Class with ε₀ = A·M^k *and*
   ρ_c = A₂·M^k₂ (4 global parameters, Nelder–Mead from 60 starts on the saved χ² grid):

   | ladder | params | χ²/N |
   |---|---|---|
   | ε₀, ρ_c universal | 2 | 126.5 |
   | + ε₀(M) | 3 | 93.6 |
   | + ρ_c(M) | 4 | **81.8** at **ε₀ = 0.220 (M)^+0.000**, ρ_c = 1.8e-3 (M/10¹⁰)^**−2.97** |
   | MOND a₀(M) | 2 | 52.1 |

   Given the choice, the optimiser sets ε₀ **universal** and puts every bit of mass dependence into
   a knee density falling **three decades per decade of mass.** The ε₀-mass signal of B2 is real
   per galaxy and worthless globally: it is degenerate with ρ_c (the B2 residual correlates with
   `ρ_c,data − ρ_c,MOND` at **+0.51**, more than with anything physical).
2. **Matched, the class still loses — 1.57× at 4-vs-2**, wins 37 % of galaxies (Wilcoxon p = 3e-4),
   against the registered 1.20 bar. And the ρ_c(M) it wants is *also* MOND-induced: MOND's curve
   induces ρ_c ∝ M^−1.76 (ρ_s = −0.71) — *steeper* than the data's M^−1.14 (ρ_s = −0.45).
3. **The ceiling at the 4-parameter optimum is 4.5 at every mass** — 24× short at g_bar = 1e-14
   and 77× at 1e-15 against the lensing RAR (§5).

**What the residual slope might be — untested, not refuted.** A density-keyed law has a nuisance
channel a g-keyed law does not: the *absolute* midplane density, `ρ_mid ∝ Σ/h`, enters C(ρ)
directly, while g_bar never sees the scale height. Here h is a mass-correlated prescription
(Bershady, `h = 0.196 R_d^0.633`) and Υ = 0.5 is fixed. **R2's guard (a₀ flat against mass) is
blind to this channel** — MOND cannot pick it up because MOND does not use ρ. So c = 0.14 is
exactly what an h(M) or Υ(M) mis-prescription would leave *only* in the ρ-keyed model. Nobody has
run that. It is one afternoon: refit treatment B with h scaled ×0.5 and ×2, and with Υ ∈ {0.3, 0.7},
and see whether c moves by its own width. Until then the 0.14 is unexplained, priced at
nothing, and the only genuinely open thread this session leaves.

---

## 5. Even granting the relation, the ceiling dies on lensing

Visitor Pass 4 (today) made an argument no page carries: the weak-lensing RAR (Brouwer et al.
2021, KiDS-1000, arXiv:2106.11677) bins isolated lenses with log M★ ∈ [8.5, 11.0] from
**g_bar = 5e-12 down to 1e-15 m/s²** and finds the extrapolated MOND branch holds — for the full
sample and for dwarfs — subject to a stated circumgalactic-gas caveat (M_gas ≈ M★ would be needed
to move it). Take the R3 best relation at face value:

| M_bar | ε₀ = 0.119 (M/10¹⁰)^0.325 | B_max | MOND ν at 1e-14 | at 1e-15 | deficit |
|---|---|---|---|---|---|
| 10⁹ | 0.056 | 17.8 | 110 | 347 | 6×–19× |
| 10¹⁰ | 0.119 | 8.4 | 110 | 347 | **13×–41×** |
| 10¹¹ | 0.251 | 4.0 | 110 | 347 | 28×–87× |

A factor-2 gas correction on g_bar moves ν by √2. The relation, *if it existed*, would still
leave the ceiling short by more than an order of magnitude on the one dataset that reaches the
regime a ceiling is about. The visitor's citation-only kill is correct, and it kills the escape
too. **It belongs on `/tier-1-existing` as the primary TEST-10 argument**, with the SPARC tail
(B ≥ 13.7 from one point) demoted to corroboration — exactly as Pass 4 proposed.

---

## 6. Prior art

- **Cesare, Diaferio, Matsakos & Angus 2020** (A&A 637, A70; arXiv:2003.07377) fitted ε₀, Q,
  ρ_c *per galaxy* on 30 DiskMass discs — and wrote, in the abstract, that *"the differences of
  these parameters from galaxy to galaxy could be ascribed to statistical fluctuations,"* then
  adopted a single universal set. No ε₀(M) relation is stated. Their RAR test found RG
  *"underestimate[s] the observed accelerations of 0.1–0.3 dex at low Newtonian accelerations"*
  with residuals correlated with galaxy properties at > 5σ — the same failure, in the same
  place, this program found on 08-20 (RAR-scatter no-go) and today (§3). Full text was 403 at
  the publisher; screen is abstract-level. *(Screen note: RG's own published floors — 0.089
  ellipticals, 0.67 discs, 0.13–0.18 clusters, `project_refracted_gravity_parameters_misattributed_dms_vs_e0`
  — do not even vary monotonically with system mass, so no single ε₀(M) could cover them.)*
- The "supermodel of MOND" reading (`project_log_regulator_plus_one_never_audited`, 08-20) is
  now closed on the amplitude axis as well as the regulator axis: the class *is* larger than
  MOND, and the extra freedom is anti-correlated with the data (R3: relation buys 1.40× and
  still loses 1.75×).

---

## 7. So what

**Advances discovery.** The galaxy sector's last escape — seeded by this program's own 08-30
result, the first time a *per-galaxy* measurement rather than a citation opened a door — is
closed by execution, with the rules written before the numbers. What survived is sharper than
what the site says:

1. **ε₀(M_bar) is MOND-induced.** M_bar's slope, after MOND's induced ε₀ is removed, is
   0.11 ± 0.07 (p = 0.10). The relation is ν(g_bar/a₀) seen through a density-keyed lens.
2. **Matched, the class loses 1.75×**, and the relation helps MOND by 1 %. The relation is not
   MOND-degenerate; it is MOND-*inferior* with the same parameter count.
3. **The universal-knee class cannot imitate MOND's curve** (χ²/N = 110.8 against a noise-free
   target). The ρ-vs-g distinction is not a relabelling; it is a measured shape difference of the
   wrong sign. Freeing the knee per galaxy lifts it (12.3) at 306 parameters.
5. **Treatment B is the honest residue.** Two constants per galaxy leave a mass slope in ε₀ that
   MOND does not induce (c = 0.14 ± 0.03) — real, small, globally worthless (the 4-parameter
   optimum sets ε₀ universal), 1.57× behind MOND matched, and carrying an untested nuisance
   explanation (scale height / Υ enter ρ, not g_bar) that a₀'s flatness cannot guard against.
4. **Lensing kills the ceiling by ≥ 13× even with the relation granted** (24–77× at the treatment-B
   optimum). Citation-only, on no page. Visitor Pass 4 is right.

### → Maintainer (day 20 of 401 OAuth)
- **P0** `/tier-1-existing` TEST-10, `/honest-assessment`: add Brouwer+2021 as the primary ceiling
  refutation; state that a mass-dependent ceiling does not help (§5 table).
- **P1** `/mond-unification`, `/galaxy-rotation`: the "argument relabeled" framing must say the
  field-equation solution is *not* MOND's curve (§3, 110.8 vs 52.2).
- **P2** (explorer, not maintainer) the one open thread: rerun treatment B with h × {0.5, 2} and Υ ∈ {0.3, 0.7};
  does c = 0.14 move by its own width? Seeded as `topics/treatment-b-residual-mass-slope-scale-height-nuisance.md`.
- **P1** record the ε₀(M_bar) closure as a citable negative: *"a per-galaxy ceiling correlates with
  mass at +0.76 because MOND's ν induces +0.85 in the same pipeline; residual mass slope 0.11 ± 0.07."*

### Corrections to the record
- `logs/2026-09-01.md` WAKE items *"59 % put ρ_c at the top grid edge"* and *"ρ_c tracks M_bar at
  +0.56"* are statements about **χ²**, not ρ_c (misread column). Corrected here; the 09-01 log is
  left as written with a pointer.
- `SESSION_FOCUS.md` 08-30 item 4 *"42 % censoring makes +0.758 a lower bound"*: the 09-01 session
  showed the censoring was produced by freezing ρ_c and inflated, not suppressed, the
  correlation. Superseded.
