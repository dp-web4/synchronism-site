# The satellite discriminator: the closure was by citation, not by execution — and the regime gap was worth 3 orders of magnitude

**Date**: 2026-08-21
**Track**: Explorer
**Status**: EXECUTED. Verdict on `/mond-unification`'s satellite discriminator **UNCHANGED (closed)**; its **stated reason is invalid** and is replaced. **Refutation count UNCHANGED at 6** — nothing here is a new refutation.
**Script**: `explorer/findings/scripts/satellite_ambient_density_lever.py`
**Output**: `explorer/findings/scripts/satellite_ambient_density_lever_output.txt`
**Data**: real SPARC (Lelli+2016c), 24 dwarfs at M_bar < 10⁹ M☉ passing Q<3, i>30°, dM/dr>0 at R_out.

---

## Origin, and a source check that inverted the premise

Visitor 2026-08-21 Pass 4 (researcher persona) filed as `high`:

> `/mond-unification` carries an unregistered, runnable discriminator … no TEST-ID, no
> entry in the Tier-1 table … while the landing page headlines "0 tests could select
> Synchronism." Data exist now: SAGA DR3 and ELVES.

**That claim is false against source.** The paragraph proposing the discriminator is
immediately followed by a correction box dated **2026-08-03** which states that it *is*
registered — it is **TEST-05**, executed 2026-07-14, r² = 0.0001, kill bar fired — and that
the 08-03 pass's own "uncatalogued live discriminator" reading was the error. Pass 4 quoted
the proposal and did not reach the correction one paragraph below it.

This is the **fourth confirmation** of `verify visitor findings against source`, and the
second in two days with the identical shape (08-20: Pass 4 described `/equation-walkthrough`
Step 3 and missed Step 5).

**But the source check did not close the question — it relocated it.** TEST-05 and the
satellite test are not the same experiment:

| | TEST-05 as executed | the satellite discriminator |
|---|---|---|
| ρ_ext | cosmic web, δ ≤ 100 → ≤ 2.7×10⁻²⁸ g/cm³ | host CGM at D = 30–300 kpc |
| ρ_int | massive-spiral **outer disk**, 6.8×10⁻²⁶ | **dwarf satellite** interior |
| lever ρ_ext/ρ_int | 4×10⁻⁵ .. 4×10⁻³ | never computed, anywhere in this repo |
| sample | SPARC field galaxies, N=141 | SAGA/ELVES satellites |

Both factors move, and they move in **opposite** directions. Closing one by citing the
other is a regime conflation. `SAGA` and `ELVES` appear **nowhere** in the repository.
So the honest status was: *verdict plausible, reason unestablished, amplitude unknown.*
This session computed it.

---

## 1. The structural result: a tidal ceiling on the ambient-density lever

For a satellite at distance D, material at internal radius r survives iff its mean
enclosed density exceeds the host's mean enclosed density by the Jacobi factor:

    ρ̄_sat(<r)  ≥  3 ρ̄_host(<D)

The framework's lever is the **local** host density at the satellite's position, and for a
host baryon profile ρ ∝ r⁻ⁿ, ρ_local(D)/ρ̄(<D) = (3−n)/3. Combining:

> **L = ρ_ext(D)/ρ_int,local(r)  ≤  k (3−n)/9**,  with k = ρ̄_sat(<r)/ρ_sat,local(r) ≥ 1

**Host mass, satellite mass and separation all cancel.** Under the observed-dynamics
version the bound acquires a factor f_b,host/f_b,sat which is order unity, so the two forms
agree to a factor of a few.

Measured k for the 24 real SPARC dwarfs: median 3.46, 90th pct 7.86. At n = 2 the ceiling
is ≈ 0.09–0.87.

**What this says.** The property that makes a satellite a *measurable bound object* — a
large tidal overdensity contrast — is the property that *suppresses this framework's
environment coupling*. TEST-05 landing at 4×10⁻⁵..4×10⁻³ and the satellite version landing
at ~10⁻³ is not a coincidence of two surveys; it is one identity evaluated twice. This is
the same **shape** as the 2026-08-05 result that x = ρ/ρ_crit is a virial ratio: a bound
from an identity, needing no data.

---

## 2. The measurement, and two discarded runs

Real SPARC dwarfs × 3 host masses × 5 distances × 3 host baryon slopes × 3 retained-baryon
fractions, with the tidal filter applied.

**Two runs discarded, both caught by the Part A ceiling. The second is the instructive one.**

- **Run 1** — no tidal filter. Pairing the most diffuse measured dwarf outskirt with a host
  density at 30 kpc gave L = 8.6, far above the ceiling. That object cannot *be* a satellite
  at 30 kpc.
- **Run 2** — tidal filter applied with **baryonic** host mass, reasoning that the framework
  has no dark matter so every density in the identity is baryonic. 97.9 % of configurations
  survived and L_max returned 4.6 (0.75 dex — detectable with N = 1). **Wrong.** The tidal
  field a satellite must survive is the *observed* gravity, ~100× the bare baryonic field at
  these radii whatever explains it. Using the framework's own bare baryon mass in the
  survival criterion lets the framework **authorize satellite configurations that do not
  exist**. Conflating *the variable C eats* (baryonic ρ) with *the field that shreds
  satellites* (observed g) is the same local-vs-dynamical conflation this program has hit
  before.

Corrected filter, theory-neutral, both sides measured: ρ̄_sat,dyn(<r) ≥ 3 ρ̄_host,dyn(<D),
with host NFW at observed M₂₀₀ and satellite from its own observed rotation curve.

### Lever by separation (tidally allowed configurations)

| D / kpc | N cfg | median L | max L |
|---|---|---|---|
| 30 | 459 | 2.64×10⁻² | 1.46 |
| 50 | 639 | 1.68×10⁻² | 3.81 |
| 100 | 648 | 4.26×10⁻³ | 0.83 |
| 200 | 648 | 1.06×10⁻³ | 0.27 |
| 300 | 648 | 4.75×10⁻⁴ | 0.15 |

**Satellite-regime maximum is ~950× TEST-05's ceiling.** The regime-gap objection is real
and it is worth about three orders of magnitude.

### A second self-correction: max-lever is the wrong statistic

I first read the tidal-margin sweep as "at T_min = 3 the power is gone." **The table says
the opposite** — at the maximum lever the test stays detectable with a handful of objects
out to T_min = 30. What the sweep actually shows is that the maximum is one corner of a 5-D
scan: the single most diffuse dwarf in SPARC (DDO154, ρ_bar,local = 6.2×10⁻²⁸, 60× below the
sample median) crossed with the most massive host and the most favorable slope. Quoting it
as "the" signal is cherry-picking the tail.

---

## 3. The ensemble result — and this is the number that is new

Population model, generous to the framework at every choice (field dwarfs → **unstripped**
gas; volume-weighted D over SAGA's 36–300 kpc window; contrast |Δρ_ext/ρ_ext| = 1.0, the
full extreme-to-extreme CGM spread realized in *every* pair; per-object precision 0.0334 dex
= the best dwarf kinematics ever achieved; tidal margin cut 3):

| N | stacked significance |
|---|---|
| 100 | 0.43 σ |
| 380 (SAGA DR3) | 0.84 σ |
| 700 (SAGA + ELVES) | **1.14 σ** |
| 2000 | 1.92 σ |

> **N = 4,881 for 3σ. ~700 available. Short by 7×.**

**That is the finding.** TEST-05 reported its environment channel as *2–4 orders of magnitude*
below detectability. The satellite regime is short by **a factor of 7 in sample size** — 2.6×
in precision. On statistical accounting alone this is a near-future test, not a dead one.
It is the first environment-channel closure in this program that a foreseeable instrument
could in principle reopen.

---

## 4. Why it closes anyway — on a systematic, not on N

Part F2's "short by 7×" treats the per-object error as **random**. It is not.

The baseline offset the framework already carries — A = M_dyn/M_bar, the thing that makes
`/mond-unification` say the density law misses rotation curves by 3–4 dex — scatters
**0.229 dex** across this dwarf sample and correlates with **local baryon density at
r = −0.36**: the same axis the matched-pair design varies.

A signal s riding on a nuisance of spread S is mimicked by a spurious correlation
ρ_spur = s/S:

    s = 9.2×10⁻⁴ dex,  S = 0.229 dex  ⟹  ρ_crit = 4.0×10⁻³

> To claim 3σ one must show the nuisance–host-gas correlation is below **0.4 % of itself**.
> The *measured* correlation of that nuisance with local baryon density in this very sample
> is −0.36 — **89× ρ_crit**. Signal-to-systematics = 4.0×10⁻³.

N does not fix this. Averaging a 0.229 dex *random* nuisance down to the signal would need
N = 6.2×10⁴; averaging a *structured* one down needs it to be random, which it measurably
is not.

---

## 5. Two design defects, either of which is independently fatal as written

**(a) The proxy gap.** "Host gas content" as SAGA measures it is HI, which lives in a
~0.5 kpc scale-height layer while satellites are near-isotropic.

*Correction to a claim I nearly made*: in the disk **plane** host HI actually **dominates**
the CGM out to ~100 kpc (13× at 30 kpc), so "host gas is spatially disjoint from the
satellite" is **false as stated** and would have over-refuted. The correct statement is
geometric — only a fraction ~2h_z/D of satellites (3 % at 30 kpc, 0.3 % at 300 kpc) sit
where host HI contributes at all. Sky-averaged, host HI is a 0.4 % correction to ρ_ext at
30 kpc and 10⁻⁸ at 300 kpc. **The variable that sets ρ_ext is the hot CGM, which SAGA does
not measure.** A null on host HI would not have been a null on the framework's variable.

**(b) Carrier depletion.** The lever is carried by extended, gas-rich, HI-dominated dwarfs
— exactly the objects ram-pressure stripping removes. SAGA and ELVES both find satellite
quenched fractions rising steeply inside ~100 kpc. **The environment that supplies ρ_ext
strips the extended gas that makes ρ_int small.** Signal and carrier are anti-correlated by
the same physics. Using unstripped field dwarfs as the population, as done above, is
therefore an *upper* bound.

---

## 6. One correction pointing *toward* the framework

Pass 4 also argued the satellite test "inherits the same disqualification" as the EFE test,
because a 3–4 dex baseline error "swamps a gas-content contrast."

**Wrong in principle, right in practice, and the distinction must travel with the result.**
The predicted differential is dB/B = dρ/ρ, a *fractional* response. If the baseline error
were a constant multiplicative offset A, then d(log B_true) = d(log A) + d(log B_pred) =
d(log B_pred) — a common-mode offset **cancels exactly** in a matched-pair contrast. That is
why differential tests are run at all. The correct statement is not "differential tests
inherit absolute-baseline disqualifications" (false, and would over-refute) but "**this
particular offset is measurably not common-mode: 0.229 dex, correlated at −0.36 with the
pair variable, 249× the signal**."

Per Pass 4's own observation, corrections pointing toward the framework propagate slowest.

---

## → Action: Maintainer

1. **`/mond-unification`, the 2026-08-03 correction box** — keep the verdict, replace the
   reason. It currently closes the satellite channel by citing TEST-05. Add: TEST-05 executed
   in a different regime (cosmic-web ρ_ext against massive-spiral ρ_int); the satellite
   configuration reaches ~950× TEST-05's lever; it closes on **its own** numbers —
   ensemble 1.14σ at N=700, N=4,881 needed for 3σ, and then a 0.229 dex non-common-mode
   systematic at signal-to-systematics 4×10⁻³.
2. **Same page** — the discriminator sentence keys on "host gas content." Say that the
   operative variable is the **hot CGM**, not HI, and that HI reaches ~3 % of satellites
   at 30 kpc by solid angle. As written the test measures the wrong variable.
3. **`/tier-1-existing` TEST-05** — its alert says the ambient-density lever is
   "4×10⁻⁵ (field) to 4×10⁻³ (δ~100 group)." Add the satellite regime: median 1.1×10⁻³,
   tail to 0.73, ceiling k(3−n)/9. The lever figure is regime-specific and has been read
   as universal.
4. **Do not** register a TEST-27. The channel is closed; registering it would inflate the
   catalog with a test whose systematic floor is 89× its detection threshold.
5. **Do not** change the refutation count. Nothing here is a new refutation.

## → Explorer (next)

- **Still queued from 08-20 and still unrun:** is the DESI no-go *p*-conditional? And the
  08-19 Yukawa self-check, now two sessions old.
- **New, and cheap:** the Part A ceiling L ≤ k(3−n)/9 applies to *any* bound sub-system.
  Wide binaries (TEST-02) are the extreme case — k ≈ 1, D tiny. Whether the ceiling
  reproduces TEST-02's hung verdict from the identity alone is a one-script check.

## → Research (dp-gated)

The tidal ceiling is a genuinely transferable negative result for the **emergent-gravity /
local-density-coupling literature**, not just this framework: *any* modification keyed on
local baryon density has its environmental signature capped by the tidal overdensity
contrast of whatever bound object is used to measure it. It belongs with the locality no-go,
not as a separate artifact. No prior-art claim is made — this should be checked against the
MOND EFE literature (Milgrom 1983; Bekenstein & Milgrom 1984) before any writeup.
