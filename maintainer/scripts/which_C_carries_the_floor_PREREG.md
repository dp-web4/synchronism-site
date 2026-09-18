# PRE-REGISTRATION — Which C carries the Ω_m floor, and does the TEST-09 kill survive the ceiling sweep?

**Filed**: 2026-09-18, site maintainer track. Written and committed **before** the script is run.
**Trigger**: visitor log `visitor/logs/2026-09-18.md`, Pass 4 (leading-edge researcher) P0 item 1 and
Pass 3 (grad student) friction row 1; plus the registered-but-unrun Branch 1 of
`Research/proposals/boost_ceiling_provenance_and_class_exclusion.md` (TEST-09 half).

---

## The claim under test (visitor Pass 4, verbatim)

> `/galaxy-plotter` states, for DDO 154, **max C on the disc = 0.001** … The floor is 0.315. The
> computed C never exceeds 0.001. The floor therefore binds at **every radius, on every disc**, by a
> factor of ~300. … What the galaxy sector actually applies is not a coherence equation. It is the
> constant 3.17.
>
> **TEST-09 could not have gone any other way.** A constant boost … shifts the *intercept* … and
> leaves the *slope* exactly unchanged.
> **TEST-10 likewise.** A constant ceiling gives f_DM = 1 − 1/3.17 = 0.685 for *every* galaxy, with
> zero scatter.

The visitor flagged this as unverified: *"Verify against the plotter source before publishing — I
could only infer this from displayed numbers."* and *"This is a ten-line check against the plotter's
own code and it changes the ledger."* This pre-registration is that check, run on real SPARC rather
than on the plotter's five-galaxy toy.

## What is already known and is NOT re-litigated here

- `/parameter-derivations` item 8 already carries the Ω_m/Ω_b = 6.39 convention note and the
  2026-07-29 executed TEST-10 exceedance curve (106/153 at 3.17 → 28/153 at 6.39).
- The **TEST-09 half** of that registered sweep — the predicted BTFR slope under each candidate
  ceiling — is explicitly recorded as unrun. Part B below executes it.

## The two candidate C's

| | form | keyed on | range |
|---|---|---|---|
| **C_a** | `C = C_min + (1 − C_min)·x/(1+x)`, `x = (g_bar/a₀)^(1/φ)` | baryonic **acceleration** | [C_min, 1] by construction |
| **C_ρ** | `C = tanh(γ·ln(1 + ρ/ρ_crit))`, `ρ_crit = 0.029·V_flat²` | local **density** | (0, 1), unfloored |

`explorer/scripts/test09_btfr_bounded_boost_real_sparc.py` and
`test10_dwarf_dm_fraction_ceiling.py` both use **C_a**. `/galaxy-plotter` displays **C_ρ** and is
the source of the "max C = 0.001" figure. The visitor's argument transfers C_ρ's output range onto
the tests that use C_a. Part A asks whether that transfer is legitimate.

## Part A — does the floor bind everywhere, in the C the tests actually use?

Computed over every SPARC radius passing TEST-09's own sample cuts (Q ≤ 2, Inc > 30°, V_flat
measured, ≥3 points), with TEST-09's own constants (Ω_m = 0.315, φ = golden ratio,
a₀ = 1.05×10⁻¹⁰ m/s², Υ_disk = 0.5, Υ_bul = 0.7).

**Pre-fixed verdict rule A.** The visitor's premise — "the applied law is the constant 3.17" — is
**CONFIRMED** iff ≥ 95 % of those radii have `C_a < 1.01·Ω_m`. It is **REFUTED** iff < 50 % do and
the interquartile range of C_a spans more than 0.05. Anything between is **INDETERMINATE** and gets
reported as such, with no site change.

**Part A2 (the plotter's own number, off its toy).** Recompute C_ρ at real SPARC surface densities
(Σ from Vdisk/Vbul at the same Υ, plus gas; ρ = Σ/2h, h = 0.3 kpc as the plotter assumes) for
γ ∈ {2, 0.489}. Report per-disc max C_ρ. Pre-fixed: the plotter's "max C ≈ 0.001" **generalises**
iff the median per-disc max C_ρ at γ = 2 is below 0.01 **and** fewer than 5 % of discs reach
C_ρ > Ω_m anywhere.

Part A and Part A2 can come out differently. That would be the finding: the floor binds in the
density-keyed law and not in the acceleration-keyed one, which is a site-presentation defect
(two different C's rendered as one) rather than a ledger defect.

## Part B — TEST-09's BTFR slope under each candidate ceiling (the unrun registered half)

Generalise the floor: `C = C_min + (1 − C_min)·x/(1+x)`, so `B_max = 1/C_min`. Candidates, taken
from the registered proposal without addition:

| ceiling reading | B_max | C_min |
|---|---|---|
| 1/Ω_m (the site's choice) | 3.175 | 0.3150 |
| (Ω_m − Ω_b)/Ω_b | 5.39 | 0.1855 |
| Ω_m/Ω_b (baryon budget, most permissive) | 6.39 | 0.1565 |
| free scan | 2 … 100 | — |

Slope fitted with TEST-09's own estimator and bootstrap, unchanged.

**Identity control (required before any new number is read).** At C_min = 0.315 the pipeline must
reproduce TEST-09's published prediction **n = 3.35 ± 0.07** and the observed catalogue slope it
compares against. If it does not reproduce to within the bootstrap error, the run is void and
nothing from it goes on the site. *(This control exists because a previous "swap only X" comparison
silently changed two things at once — see `maintainer/logs/2026-09-16.md`.)*

**Pre-fixed verdict rule B.** The TEST-09 kill **stands** iff the predicted slope deviates from the
observed catalogue slope by more than the registered 0.3 threshold under **every** candidate
ceiling. If it fails to fire under any candidate, the TEST-09 row becomes convention-dependent in
the same way TEST-10's "69 %" already is, and the site must say so.

**Pre-fixed verdict rule B2 (the visitor's "slope is forced" claim).** A constant boost cannot
change a BTFR slope. So if the visitor is right that the boost is constant across the sample, the
predicted slope must be **independent of C_min**. Therefore: the claim is **CONFIRMED** iff the
predicted slope varies by less than the bootstrap error across the free scan B_max ∈ [2, 100], and
**REFUTED** iff it varies by more than 0.3 (the registered kill threshold) over that range.

## Part C — is the predicted f_DM a delta function at 0.685? (visitor's TEST-10 claim)

Report the distribution of `f_DM,pred = 1 − C_a(g_bar)` at the outermost measured radius per galaxy:
min, quartiles, max, standard deviation.

**Pre-fixed verdict rule C.** "f_DM = 0.685 for every galaxy, with zero scatter" is **CONFIRMED**
iff the standard deviation is < 0.01, **REFUTED** iff it exceeds 0.05.

## What gets published either way

Every verdict, including INDETERMINATE and including any that contradicts the visitor. A refuted
visitor claim is logged on the site with the same prominence a confirmed one would get — the
2026-09-17 finding that the over-refutation share of corrections rose from 1/20 to 9/24 (May→Aug)
is the reason this sentence is in the pre-registration.
