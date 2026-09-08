# Finding: The γ ladder pre-check — dwarf spheroidals cannot see the knee, open clusters are capped by the disc they sit in

## Origin
Topic `gamma-ladder-dwarf-spheroidals-open-clusters.md` (maintainer 2026-09-08), the pre-check half:
"first compute where the knee sits relative to each system's density profile … a system that never
crosses the knee cannot adjudicate the ladder and must be reported as *no power*, not *passes*."
Script: `findings/scripts/gamma_ladder_precheck_dsph_open_clusters.py` (+ `_output.txt`, `.json`).
Knees taken from today's companion finding (Oort ∩ GC per γ) and Refracted Gravity's 0.0083 M☉/pc³.

## Summary
S611 P611.2's ladder (γ = 2 for every resolved-member system, γ ≈ ½ for disks) is **untestable on
dwarf spheroidals at the framework's floor** and **nearly untestable on open clusters at any floor**,
for two different reasons that the globular-cluster run did not have to face. (1) Every classical
dSph except Leo I sits *entirely below* every knee the γ = 2 branch admits (0.073–0.155 M☉/pc³):
its baryonic density never reaches the knee, so C is the floor everywhere, σ(r) is the Newtonian
profile scaled by 1.78 at every radius, and γ never enters. What the dSphs test is the *floor*, and
they already fail it (B_req 4.5–300 vs 3.17; ledger 08-23). (2) Open clusters live in the Galactic
disc, whose own midplane density (0.084 M☉/pc³) is the density the Oort window was built on — so a
cluster's outskirts can never reach the floor. Their maximum boost is 1.0–1.27 at the admitted
knees, a ≤ 13 % dispersion excess against 0.3–0.8 km/s dispersions dominated by binaries and
unbound stars. The ladder is decidable only where it has already been run: Galactic globular
clusters in the halo. The GC fork stands alone, and it will not be broken by the systems the
registration named.

## Research Notes

### 1. The transition band, and why γ is only measurable inside it
C = f + (1−f)·tanh(γ ln(1+x)), x = ρ/ρ_c. The tanh factor rises from 0.1 to 0.9 over

| γ | x range | width in density |
|---|---|---|
| 0.489 | 0.23 – 19 | 85× |
| 1.0 | 0.11 – 3.4 | 32× |
| 2.0 | 0.05 – 1.1 | 21× |

That band is the whole γ signal. A system whose density range lies entirely above it sees C ≈ 1; one
entirely below it sees C = floor. Both are γ-blind. This is the 08-27 unidentifiability lemma applied
one object at a time.

### 2. Dwarf spheroidals: below the knee
Plummer profiles on McConnachie 2012 structural parameters, M_bar = 1.5 L_V. `r_knee/r_h` is where the
baryonic density equals the knee; "below" means the central density is already under it.

| system | M_bar | ρ_0 | ρ(r_h) | B_req | @0.0083 | @0.017 | @0.05 | @0.078 | @0.155 |
|---|---|---|---|---|---|---|---|---|---|
| Fornax | 3.0e7 | 0.020 | 0.0035 | 5.6 | 0.65 | 0.26 | below | below | below |
| Leo I | 8.3e6 | 0.125 | 0.022 | 4.5 | 1.40 | 1.10 | 0.66 | 0.45 | below |
| Sculptor | 3.5e6 | 0.036 | 0.0064 | 12.1 | 0.90 | 0.60 | below | below | below |
| Leo II | 1.1e6 | 0.049 | 0.0086 | 12.0 | 1.01 | 0.72 | below | below | below |
| Sextans | 6.6e5 | 0.0005 | 8e-5 | 115 | below | below | below | below | below |
| Carina | 5.7e5 | 0.0087 | 0.0015 | 33 | 0.16 | below | below | below | below |
| Ursa Minor | 4.4e5 | 0.018 | 0.0031 | 66 | 0.60 | 0.12 | below | below | below |
| Draco | 4.4e5 | 0.0096 | 0.0017 | 73 | 0.26 | below | below | below | below |
| Crater II | 2.4e5 | 5e-5 | 8e-6 | 57 | below | below | below | below | below |
| Antlia II | 5.6e5 | 5e-6 | 1e-6 | 296 | below | below | below | below | below |

(densities M☉/pc³; B_req = σ²_obs / (G M_bar / 7.5 r_h), the boost the dwarf needs.)

Three readings:

- **At the γ = 2 branch's own admitted knees (0.073–0.155)**, nine of ten dSphs are entirely below
  the knee. Leo I alone crosses it, at 0.45 r_h. The registered branch places the knee exactly where
  the systems it named cannot see it.
- **At the γ = 0.489 branch's admitted knees (0.004–0.017)**, Fornax, Sculptor, Leo II and Leo I all
  cross the knee inside r_h. So the ladder *is* geometrically testable there — but that is the
  branch the ladder says should *not* apply to resolved-member systems. Testing P611.2 on a dSph
  means testing whether the system prefers a knee it can see (0.489's) or one it cannot (2's).
  That is a knee test dressed as a γ test.
- **Every dSph fails the ceiling first.** B_req ≥ 4.5 for all ten, band-robust for six (ledger
  08-23). Below the knee the floored law gives g = g_N/0.315 everywhere: σ(r) is the Newtonian
  mass-follows-light profile × 1.78, *same shape*. Walker et al. 2007 (Fig. 2) show that profile
  falling to ~4–5 km/s at the King edge for Fornax while the data stay flat at 11–12 km/s out to
  1.5 kpc. A uniform 1.78× lifts it to ~8 and leaves it falling. The dSphs refute the floor on
  amplitude *and* on shape, and neither refutation involves γ.

### 3. Open clusters: the ambient cap
Modified-Hubble profiles on Gaia-era King parameters (approximate; Hyades r_c 2.6 pc, r_t 9 pc,
M 400 M☉ — Röser+2011, Lodieu+2019; half-mass radius here 4.8 pc vs the Plummer-fit 5.75 pc in
the Gaia DR3 literature), *plus the field density at the cluster's position*.

| cluster | ρ_0 | ρ(r_hm) | r_hm | r_knee @0.0083 | @0.017 | @0.05 | @0.078 | @0.155 |
|---|---|---|---|---|---|---|---|---|
| Hyades | 1.9 | 0.28 | 4.8 | above | above | above | above | 7.2 pc |
| Pleiades | 12 | 0.36 | 4.7 | above | above | above | above | 7.5 |
| Praesepe | 1.2 | 0.20 | 6.5 | above | above | above | above | 7.9 |
| M67 | 15 | 0.49 | 4.6 | above | above | above | 12.0 | 7.9 |
| NGC 188 | 22 | 0.26 | 5.9 | above | above | 16.8 | 10.8 | 7.4 |

"above" = cluster + field never drops to the knee: C ≈ 1 everywhere, no signal. The cap:

| ρ_c | B_max (γ=0.489) | (γ=1) | (γ=2) | at z ≈ 300 pc, ρ_field = 0.04: γ=0.489 / 2 |
|---|---|---|---|---|
| 0.0083 | 1.14 | 1.01 | 1.00 | 1.26 / 1.00 |
| 0.017 | 1.26 | 1.04 | 1.00 | 1.47 / 1.01 |
| 0.078 | 1.82 | 1.35 | 1.08 | 2.21 / 1.28 |
| 0.155 | 2.18 | 1.68 | 1.26 | 2.55 / 1.64 |

This is not a nuisance; it is the Oort window seen from inside a cluster. The window was *defined*
by C(0.084/ρ_c) = 0.79–0.94, so at any admitted knee a disc cluster's outskirts get a boost of
1.06–1.27 at the γ that admitted it. σ ∝ √B: a 3–13 % dispersion excess, reached only in the last
2–3 pc before the tidal radius, where Gaia DR3 dispersions (0.3–0.8 km/s, "super-virial", rotating
at 90 ± 30 m/s, tidally stripping) are set by binaries and escapers. The Hyades tidal-tail
asymmetry (Jerabkova+2021; Kroupa+2022 claim a MOND signature, disputed) is the same regime and
has the same problem. MOND with the EFE (g_ext ≈ 1.8 a₀ at the Sun) predicts ≈ Newtonian here
too; the density law with its ambient cap is within ~10 % of both. **No discrimination.**

The GC run got a 3.17 ceiling because the halo's ambient density is ~10⁻⁴; that is why the globular
clusters are the one resolved-member sample where the knee is inside the object *and* the floor is
reachable. The registration's other examples — open clusters, streams — share the disc's field
density and are capped. Gaia streams in the halo (GD-1, Pal 5) escape the cap but are not
self-gravitating equilibria; their internal kinematics are the progenitor's, not a Jeans profile.

### 4. What could still test the ladder
- **Leo I** at the γ = 2 window: crosses the knee at 0.45 r_h for ρ_c = 0.078 and is below it at 0.155, with B_req = 4.5 (band 2.8–7.4,
  so the ceiling verdict is "fid only"). Under the *RG floor* (0.089, ceiling 11) Leo I and Fornax
  are both amplitude-allowed and both cross a knee. That is the one registrable dSph ladder test:
  σ(r) for Leo I and Fornax at (f = 0.089, ρ_c ∈ 0.06–0.13), γ = 0.489 vs 2. It requires the binned
  profiles (Walker+2009 give them as figures; Battaglia+2022 / Gaia-era compilations have tables) and
  it concedes the floor before it starts.
- **Outer-halo GCs** (NGC 2419, Pal 3/4/14, Eridanus): ambient ~10⁻⁵, knee inside the object,
  g_ext ≪ a₀ so MOND and the density law stop being collinear. Named 09-07; still the sharpest.
- Nothing in the disc.

## Implications for the Site
- `/honest-assessment#gc-fork` should say that the fork **cannot be broken by the other systems S611
  named**: dSphs are below the knee (they test the floor; they already fail it), open clusters are
  capped by the disc. The fork is a GC-only statement until an outer-halo GC or a freed-floor dSph
  run exists.
- The "ladder" framing in the maintainer's proposal (Bucket-1 row B8) should be narrowed before
  registration: "γ = 2 in Galactic globular clusters; extension to other resolved-member systems is
  *no power* at the Ω_m floor." Registering the full ladder would register a prediction that most of
  its named datasets cannot adjudicate.
- The dSph shape argument (flat data vs falling mass-follows-light × 1.78) is a second, γ-free
  refutation of the floor that the ledger does not list separately from the amplitude one.

## Action: Maintainer
- `/honest-assessment#gc-fork`: one paragraph, "why not dwarfs, why not open clusters" (the two
  tables above, compressed to one line each).
- Proposal B8: narrow the registration text to GCs; mark dSph/open-cluster rungs *no power*.
- `/parameter-derivations` item 8 (floor vs knee): add the ambient-cap sentence — inside the disc the
  boost is bounded by the Oort window, ≤ 1.27, by construction.

## Open Threads
- Leo I + Fornax σ(r) under the RG floor: the only dSph ladder test; needs tabulated profiles.
- Does the ambient cap also apply to SPARC's outer discs? The L2 solver sees the galaxy's own gas
  and stars only; a real disc at R ≫ R_d has ρ_bar ≈ 10⁻³–10⁻⁴ and does reach the floor. But the
  *inner* SPARC points sit at 0.01–1 M☉/pc³ — the same regime as the open clusters. The 08-28 grid's
  preference for the lowest knee may be this: SPARC wants the boost off in the inner disc and full
  on outside, which only a knee far below the Oort window delivers.
- Open-cluster tidal radii: the density law raises r_J by B^{1/3} ≤ 1.08 at the cap. Below Gaia's
  precision on cluster masses. Dead end, recorded.
