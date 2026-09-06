# Finding: Knee inventory — the density-keyed law was refuted by the Oort limit before it was written, and the only objects that cross its knee (globular clusters) were never registered

## Origin
Topic `knee-inventory-where-has-x-near-1-ever-been-sampled.md` (maintainer, 2026-09-06, from the
graduate-physics persona's question 2). Extended by self-direction: once the sectors were tabulated,
two of them had decades-old data nobody in the archive had compared to the law.

Script and output: `findings/scripts/knee_inventory_oort_limit_and_globular_clusters.{py,_output.txt}`.
Pre-stated expectations E1–E4 are in the script header; the adjudication is at the bottom of the output.

## Summary
Across ten sectors, the compander's knee (x = ρ/ρ_crit ~ 1) has been sampled with a free shape parameter
in exactly two — the acceleration-keyed RAR and the dark-energy substitution — and in both the data chose
the value (γ = 0.489, 0.487) at which the function *is* the incumbent (MOND's simple μ, ΛCDM's Ω_m(z)).
With Synchronism's own variable, x = ρ/ρ_crit, the knee is crossed inside every globular cluster under the
calibrated placement, and no test was ever registered there. Worse, the linear regime the framework puts
every galaxy disk in also contains the Sun: the ledger's law behind TEST-09/10 (C floored at Ω_m, B = 1/C)
predicts a local dark-matter fraction **f_DM = 0.685** at the solar midplane, where the Oort limit measures
**0.13 ± 0.04** (McKee, Parravano & Hollenbach 2015) — a **15σ** miss in the volume density, 7σ in the
surface density within 1.1 kpc, at the one place in the universe where baryonic and total density are both
measured directly. MOND predicts 78 M☉/pc² there against 68 ± 4 measured (Bienaymé et al. 2009); the
density law predicts 150 ± 11. This is framework-specific, needs no SPARC fit, and was available in 1932.

A third ρ_crit placement surfaced on the way: the wide-binary null (S691, 2026-06) was derived with
ρ_crit = 10⁻²³ kg/m³ — **9.5 million times** below the calibrated knee — and with a dark-matter halo term
inside the "local density" that C(ρ) was supposed to replace. No single knee makes the Sun Newtonian while
SPARC disks are boosted, because the Sun *is* a SPARC-typical midplane density (0.084 vs median 0.026 M☉/pc³).

## Research Notes

### 1. The inventory

| Sector | x is | data range of x | regime | shape tested as Synchronism's? |
|---|---|---|---|---|
| Galaxy disks, density-keyed (SPARC, calibrated A) | ρ_mid/ρ_crit(V) | 10⁻⁶ – 3.6×10⁻² (median 6.9×10⁻⁵) | linear | no — C = γx to 0.22× the data's precision (09-03) |
| Galaxy RAR, acceleration-keyed | g_bar/a₀ | 0.01 – 30 (median 0.18, p90 3.0) | **knee** | tested; free γ → 0.489 = MOND simple μ; free-γ vs Hill gap = ln N |
| Cosmology, DE substitution | 2ρ_m/ρ_Λ (γ = ½ identity) | 0.92 today – 25 at z = 2 | **knee** | tested; free γ → 0.487 = ΛCDM (08-12 direct fit, Δχ² = −0.3) |
| Solar neighbourhood / wide-binary environment | ρ_local/ρ_crit(220) | 6×10⁻⁵ (calibrated) / 0.038 (stated) / 570 (S691) | linear / linear / saturated | **never registered** — Oort limit available since 1932 |
| Globular clusters, core → tidal radius | ρ(r)/ρ_crit | 3×10⁻³ – 3 (calibrated, host V); 2×10² – 6×10⁵ (stated, internal σ) | **crosses the knee** / saturated | **never registered** — S611 P611.2 predicted γ = 2 internal dynamics and was never run |
| Open clusters (cores 1–100 M☉/pc³) | ρ_core/ρ_crit | 7×10⁻⁴ – 0.07 (calibrated) / 0.5 – 45 (stated) | linear / knee | never registered |
| Chemistry (22 elemental solids) | undefined — no ρ_crit for materials; Spearman is transform-invariant | — | — | not a compander test (Spearman −0.32 for every γ, ρ_crit) |
| Superconductivity / phase-boundary visualizer | γ from N_corr; x never measured | — | — | no |
| Consciousness | C ≈ 0.5 asserted; no x | — | knee by assertion | no |
| Quantum (dephasing 1/(1−c), cos²) | C is a correlation coefficient; no compander | — | — | no |

Verdict on the topic's question: **with a free shape parameter, the knee has been sampled twice, and both
times the data picked the incumbent's shape.** With the framework's own density variable, the knee is
crossed physically only inside dense stellar systems, where nobody compared the law to data. So the honest
site sentence is not "tanh carries no statistical content" but: *the tanh shape has been tested twice and
both times reduced to someone else's function; where it would be its own, the test exists and was never run.*

The cosmology row is worth a line: at γ = ½ the identity C ≡ Ω_m(z) fixes ρ_crit = ρ_Λ/2, so today's universe
sits at x = 2Ω_m/Ω_Λ = 0.92 — *at the knee*. The "coincidence problem" is the statement that the knee is
crossed now. The direct fit on that knee returned ΛCDM.

### 2. The Sun is a SPARC data point

The 09-03 finding measured SPARC's midplane densities: median 2.6×10⁻² M☉/pc³, p99 ≈ 3, max ≈ 23. The solar
midplane baryon density is 0.084 (McKee+2015: ρ_tot = 0.097 ± 0.013, ρ_DM = 0.013 ± 0.003). The Sun therefore
sits 3.2× above the SPARC median, inside the p50–p99 range. Whatever C(ρ) does to a SPARC disk at 0.08
M☉/pc³, it does to the Sun's vertical force. There is no "environment" or "external field" escape: the law is
keyed on local density by construction, and this is the local density.

Under the ledger's law (TEST-09/10; `l2_sparc_core.C_framework`): C = Ω_m + (1 − Ω_m) tanh(γ ln(1 + x)),
g_obs = g_bar/C, f_DM = 1 − C.

| placement of ρ_crit at V = 220 | x_local | C | B = 1/C | f_DM predicted | σ vs McKee (0.134 ± 0.036) | σ vs Bovy & Tremaine (0.08 ± 0.03) |
|---|---|---|---|---|---|---|
| calibrated A = 0.029 → 1404 M☉/pc³ | 6.0×10⁻⁵ | 0.315 | 3.17 | **0.685** | **15.4** | 20.1 |
| stated A = 4.6×10⁻⁵ → 2.23 M☉/pc³ | 0.038 | 0.366 | 2.73 | 0.634 | 14.0 | 18.4 |
| S691 10⁻²³ kg/m³ → 1.5×10⁻⁴ M☉/pc³ | 570 | 1.000 | 1.00 | 0.000 | −3.7 | −2.7 |

(γ = 2 rows; γ = 0.489 differs in the third decimal. Unfloored, the division branch gives B = 8×10³ to 3×10⁴.)

Surface density: since ρ(z) ≤ ρ(0) ≪ ρ_crit at all heights, C is constant along z and Σ_dyn(1.1 kpc) =
Σ_bar/C = 47.1/0.315 = **150 ± 11 M☉/pc²** against Bovy & Rix 2013's **68 ± 4** — 7.1σ. MOND's prediction at
the same place is 78 M☉/pc² (Bienaymé et al. 2009, arXiv:0904.3893), a ratio 1.66 vs the measured 1.44 ± 0.13.
So this refutation is **framework-specific**: the incumbent passes where the density law fails by 2.2×.

This is robust to the algebraic/L2 fork: in plane-parallel geometry with C constant, ∇·(C∇Φ) = 4πGρ gives
K_z = K_z,N/C exactly. It is robust to the coupling fork in one direction only: the quadrature branch
(v² = v_b² + (V_flat C)²) adds nothing locally (C = 1.2×10⁻⁴), passes the Oort limit, and is the branch the
plotter already shows delivering B ≈ 1 where DDO 154 needs 10. The two branches remain refuted from opposite
sides — now by the Oort limit and SPARC respectively, not by one galaxy.

**Refutation class.** By the site's split this is a **mechanism root**: the equation, at the site's own
parameters, evaluated at a measured density, against a measured total. Not a registration (nothing was
registered), not MOND-inherited (MOND passes), not a theorem. It shares its root with TEST-09/10 — the floor
B_max = 1/Ω_m is the parameter that sets f_DM = 0.685 — but it is a different observable (vertical force, not
rotation) in a different object (the Milky Way, not SPARC), so it is an *independent measurement of the same
root*, which is what TEST-09 and TEST-10 are not.

### 3. Is there any knee that survives the Oort limit?

Scanning ρ_crit at γ = 2 (floored), the Sun's predicted f_DM lands within 2σ of McKee's only for
**0.074 ≤ ρ_crit ≤ 0.154 M☉/pc³** (at γ = 0.489: 0.004–0.017). That window is 9,100× below the calibrated
knee and 500× above S691's. Inside it, the SPARC-median boost is 1.5–1.9 and a dwarf outer disk (10⁻³ M☉/pc³)
gets B = 3.0–3.1 — TEST-10's f_DM = 0.927 still needs 13.7. The window sat inside the 09-03 L2 scan's A range
(10⁻¹¹–10⁻¹, i.e. ρ_crit 10⁻⁷–6×10³ at SPARC velocities), whose best cell anywhere was 3.06× worse than
parameter-free MOND. So the Oort limit and SPARC together leave the density law a two-decade window in
which it still loses the rotation-curve comparison by 3×. Refracted Gravity's published knee (1.5×10⁻⁵ –
0.015 M☉/pc³, i.e. 10⁻²⁷–10⁻²⁴ g/cm³) sits just below the window — RG puts the Sun at x ≳ 5.6, near-Newtonian
locally, which is its design; that is a check the 09-03 note should carry.

### 4. Globular clusters: where the knee is actually crossed

A Plummer sphere with M = 3×10⁵ M☉, a = 3 pc (ρ₀ = 2650 M☉/pc³, r_h = 3.9 pc) is a median Milky Way globular
cluster. Under the calibrated placement with the host's V = 220 (ρ_crit = 1404), x runs from 1.9 at the centre
to 6×10⁻⁷ at 60 pc: the knee is crossed at r ≈ 2 pc, inside the half-light radius.

| r [pc] | ρ [M☉/pc³] | x | C | B | √B (line-of-sight dispersion boost) |
|---|---|---|---|---|---|
| 0 | 2653 | 1.9 | 0.98 | 1.02 | 1.01 |
| 2 | 1058 | 0.75 | 0.87 | 1.15 | 1.07 |
| 3.9 (r_h) | 224 | 0.16 | 0.51 | 1.95 | 1.40 |
| 8 | 14 | 0.010 | 0.33 | 3.04 | 1.74 |
| 15 | 0.77 | 5×10⁻⁴ | 0.315 | 3.17 | 1.78 |

The prediction is a dynamical M/L that rises by 1/Ω_m = 3.17 from the core to the outskirts of every globular
cluster, i.e. a 78 % excess in line-of-sight dispersion beyond ~2 r_h. Baumgardt & Hilker 2018 fit 112 Milky
Way clusters' dispersion and density profiles with dark-matter-free N-body models at stellar-population M/L_V;
Conroy, Loeb & Spergel 2011 bound M_DM/M_* < 1 for NGC 2419 and MGC1 from their outer density profiles; Ibata
et al. 2011 find a Newtonian Michie model "an excellent representation" of NGC 2419 and MOND 10⁴× less likely.
Nothing like a 3.17× radial M/L rise exists in that data. (Spherical symmetry makes the L2 field equation
reduce to the algebraic law exactly, so this too is fork-independent on the coupling side.)

The other three placements (stated A, or the cluster's own σ ≈ 10 km/s as V) put ρ_crit at 0.005–2.9 M☉/pc³,
which leaves the cluster saturated (C = 1, Newtonian) to beyond 15 pc. Those placements *pass* the globular
cluster data — and fail the galaxy sector by the same construction, because they make every disk above
10⁻² M☉/pc³ Newtonian too. The framework never said which V enters ρ_crit = A·V² for an embedded system; the
choice is the whole verdict, which is another face of the 08-24 three-C proposal.

S611 P611.2 ("globular cluster internal dynamics should follow γ = 2") is the archive's own registration of
this test. It was filed as a Markov-blanket question and never run against a velocity-dispersion profile.

### 5. The wide-binary null was derived at a fourth knee, with dark matter inside ρ

The TEST-02 row's "density-keyed branch predicts 0.05–0.4 %" traces (via `test02_kill_branch_adjudicable_now`,
EXPERIMENTAL_TEST_CATALOG, Session 691) to `session691_wide_binary_c_rho_prediction_and_inverted_kill.py`,
which (a) sets ρ_crit = 10⁻²³ kg/m³ as the "S678/S683 lower edge of the galaxy-anchored range" and (b) builds
ρ_local as ISM + stellar disc + **a 0.4 GeV/cm³ dark-matter halo**. With x = 570 the compander saturates and
the null follows. Two problems: the knee is 9.5×10⁶ below the one the galaxy fits use, and the density that
saturates it contains the dark matter the coherence boost exists to replace. Evaluated instead at the site's
calibrated or stated knee, the division branch predicts a **+78 % / +65 %** wide-binary velocity excess — four
times MOND's — excluded by Gaia on *both* sides of the Chae–Banik dispute (Banik+2024: gravity within 8 % of
Newton; Chae: +16–22 %). The sub-percent null is a property of the **quadrature** branch (C² ≈ 10⁻⁸), not of
"the density-keyed branch." See the companion finding on TEST-02 for the MOND+EFE bracket.

## Implications for the Site
- The knee question has a physical answer the site can state in one line: with a free shape, the knee was
  sampled twice and both times reduced to the incumbent; with the density variable it is crossed inside
  globular clusters, never tested there, and the linear regime it puts galaxies in contains the Sun, where the
  law is off by 15σ. Both visualizers (`/coherence-explorer`, `/gamma-calculator`) currently let a visitor
  reshape a curve whose only in-house knee measurements are these.
- The refutation ledger's "everything that distinguishes this framework from MOND is a single asserted
  constant" gains its cleanest instance: that constant sets f_DM = 0.685 everywhere x ≪ 1, and the Oort limit
  measures 0.13 there. This is a candidate **third mechanism root**, independent in observable and object from
  TEST-09/10, sharing their parameter. Whether it enters the count is dp-gated; what is not gated is that the
  law's prediction at the Sun should appear on `/dark-matter` and `/parameter-derivations` next to the
  placement discussion.
- The TEST-02 row's branch attribution is wrong in a way the maintainer's 2026-09-06 sentence propagates: the
  null is the quadrature branch's, or S691's fourth-knee saturated evaluation, not "the density-keyed branch."

## Action: Maintainer
1. **P0** `/honest-assessment` ledger, `/parameter-derivations` (ρ_crit row, floor row), `/dark-matter`: add
   the Oort-limit row — "floored density law at the solar midplane: f_DM = 0.685 predicted vs 0.13 ± 0.04
   measured (McKee+2015), 15σ; Σ(1.1 kpc) 150 ± 11 vs 68 ± 4 (Bovy & Rix 2013), 7σ; MOND 78 (Bienaymé+2009)."
   Classification proposal: mechanism root, shared parameter with TEST-09/10, independent observable. Gate
   the count on dp; do not gate the numbers.
2. **P0** `/tier-1-existing` TEST-02, `/wide-binaries`: replace "density-keyed branch predicts the null" with
   the derivation's actual inputs (ρ_crit = 10⁻²³ kg/m³, ρ_local including a DM halo) and state that at the
   calibrated knee the division branch predicts +78 % and the quadrature branch < 10⁻⁶ %.
3. **P1** `/coherence-explorer`, `/gamma-calculator`, `/phase-boundary-visualizer`: one caption line from §1's
   verdict, replacing "tanh carries no statistical content."
4. **P1** `/for-researchers` artifact 5 / the unidentifiability note: add the Oort window (0.07–0.15 M☉/pc³ at
   γ = 2) as the second external constraint on knee placement, and the RG contrast (RG's knee puts the Sun at
   x ≳ 5.6 by design).
5. **P2** Back-annotate S611 P611.2 as "registered 2026-06, never executed; executed here: refuted under the
   (calibrated A, host V) placement, vacuous under the other three."
6. Citable negative: *"A density-keyed gravity modification with a boost floor B_max at x ≪ 1 predicts the
   floor's boost at every density below its knee, including the solar midplane; the Oort limit therefore
   bounds any such knee to within a factor ~2 of 0.1 M☉/pc³ at γ = 2, independent of rotation-curve fits."*

## Open Threads
- Run the globular-cluster test properly: Baumgardt & Hilker 2018's public dispersion profiles for 5–10
  clusters spanning ρ₀ = 10² – 10⁵, Jeans-fit with B(r) = 1/C(ρ(r)) under each placement, report Δχ² vs the
  DM-free model. Under (calibrated, host V) the effect is 40 % in σ at r_h — a one-afternoon kill.
- Open clusters under the *stated* placement sit at x = 0.5–45, straddling the knee; Gaia DR3 open-cluster
  dynamical masses (e.g. Hyades tidal-tail work) could test the knee itself, not just its flanks.
- The Oort window 0.07–0.15 M☉/pc³ is near the density at which dwarf-galaxy midplanes sit; a version of the
  law with the knee there predicts B ≈ 3 in dwarfs and B ≈ 1.5 in the Sun's disk — worth one L2 refit pinned
  at ρ_crit = 0.1 to see if the RAR shape survives (09-03 says the best cell was still 3× worse than MOND, but
  it was not reported at this specific pin).
- Self-seeded (carried from 09-05): the census of registered kill bars vs best-available mechanism lever. This
  session adds the inverse case: an unregistered test with a lever of 15σ.
