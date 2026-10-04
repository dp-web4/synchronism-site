# Finding: The lensing "kill" of the no-CDM cap 1/Ω_b sits in bins the data paper itself flags; the dwarf leg is what closes it

## Origin
Self-directed, from the WAKE phase. Two topics converge: `is-there-any-reachable-observable-where-any-reading-differs-from-its-parent.md`
(the stopping question) and `lensing-rar-largest-allowed-boost-ceiling-with-cgm-and-two-halo.md`. The stopping table has one row whose
"excluded" status rested on a represented curve, not a data read: the bounded-boost reading at the only floor that clears SPARC's 13.7,
B_max = 1/Ω_b = 20.3. The site says it is "excluded by the weak-lensing RAR at 10⁻¹⁵ m/s² (1.71×, 2026-09-25)". That number came from
the MOND simple-ν curve with a 0.3 dex allowance, not from the bins.

Pre-registered: `scripts/lensing_cap_on_kids_bins_PREREG.md` (commit `e3461c1`, pushed before the tarball was unpacked).
Script: `scripts/lensing_cap_on_kids_bins.py`, output `_output.txt`. Data: Brouwer et al. 2021 (A&A 650, A113) public release,
`kids.strw.leidenuniv.nl/sci_data/brouwer2021_rar.tar` (15 g_bar bins, full covariance, isolated / hot-gas / GAMA / mass-binned /
dwarf files).

## Summary
On the published bins, the registered predictions came out **P1 HELD, P2 HELD, P3 FAILED**. The no-CDM cap 20.3 is excluded at f = 1
(z = 11.4 per bin), with B21's own hot-gas baryons (z = 10.8), and at flat f = 5 (z = 6.8). It is also excluded in mass bins 1–3 even
when every cosmic baryon of the halo is counted (f_c = 4.5–14.6). **But every one of those exclusions comes from bins at
g_bar < 10⁻¹³ m/s².** Brouwer et al. state that KiDS isolation is unreliable there: photometric-redshift satellites bias g_obs
*high*, and the two-halo term rises. I did not read that section before registering, which is a registration defect.
Inside the paper's reliable range, the cap needs only **f ≈ 1.9 hidden baryons** (stat; 0.8 with the paper's own 0.1 dex conversion
error). GAMA (spectroscopic isolation, reliable at low g_bar) needs **f ≈ 2.2–2.4** (joint). Against the registered C_a form at
that floor, rather than the bare cap, the figures are 3.0 and 1.0. So lensing excludes the no-CDM cap only if galaxies carry
less than ~2–3× their stars plus cold gas out to ~0.3–1 Mpc. That is a census statement, and ΛCDM's own baryon budget
(f_c ≥ 4.5) satisfies it. The 20.3 cap is still dead, but the classical and ultra-faint dwarfs kill it, not lensing.

## Research Notes

### The bins (KiDS isolated, f = 1; B_obs = g_obs/g_bar, ±1σ from the covariance diagonal)
| g_bar (m/s²) | 1.4e-15 | 7.6e-15 | 4.2e-14 | **1.3e-13** | 2.3e-13 | 4.0e-13 | 1.3e-12 | 3.9e-12 |
|---|---|---|---|---|---|---|---|---|
| B_obs | 307 ± 39 | 193 ± 15 | 84 ± 6 | **46 ± 3.4** | 29.7 ± 2.5 | 23.7 ± 1.9 | 11.5 ± 1.1 | 4.9 ± 0.6 |

The lowest bin's boost is ~300, not the ~35 the MOND-curve representation implies. The B21 data rise *above* the simple-ν branch at
low g_bar. That rise is B21's two-halo upturn, which their MICE comparison reproduces from clustering.

### Registered verdicts (Bonferroni over 15 bins, z_crit = 2.71)
| treatment | 20.3 cap | smallest allowed cap | GLS R̂ (g_bar < 1e-13) |
|---|---|---|---|
| (a) stars + cold gas | EXCLUDED, z = 11.4 | 217 | 84 ± 3 |
| (b) B21 hot-gas file | EXCLUDED, z = 10.8 | 77 | 66 ± 2 |
| (b) f = 2 | EXCLUDED, z = 10.1 | 108 | 42 ± 2 |
| (b) f = 5 | EXCLUDED, z = 6.8 | 43 | 16.8 ± 0.6 (allowed) |
| (c) mass bin 1, f_c = 4.45 | EXCLUDED, z = 5.3 | 63 | 15.3 ± 1.9 (allowed) |
| (c) mass bin 2, f_c = 4.79 | EXCLUDED, z = 3.8 | 31 | 20.1 ± 1.4 (allowed) |
| (c) mass bin 3, f_c = 7.94 | EXCLUDED, z = 3.8 | 28 | 11.0 ± 0.7 (allowed) |
| (c) mass bin 4, f_c = 14.55 | allowed | 9.5 | 6.0 ± 0.3 (allowed) |

The Ω_m-based caps (3.17 / 5.39 / 6.39) are excluded in every registered row. The registered sensitivity (drop the lowest bin)
changes nothing; the exclusions are spread over the whole sub-10⁻¹³ range, not carried by one bin. **The site's "1.71× at 10⁻¹⁵"
understates the f = 1 and f = 5 exclusions by a lot.** The required boost there is ~300, not ~35.

### Where the exclusion lives (not registered; this is the world-facing read)
Hidden-baryon demand: the smallest flat f with no bin above the Bonferroni threshold.
| data / range | f_req vs cap 20.3 (stat / +0.1 dex) | f_req vs registered C_a at 1/Ω_b floor |
|---|---|---|
| KiDS isolated, g_bar ≥ 1e-13 (B21's reliable range) | 1.86 / 0.77 | 2.95 / 1.01 |
| KiDS hot-gas file, g_bar ≥ 1e-13 | 1.49 / 0.62 | 2.22 / 0.78 |
| KiDS mass bins 1–4, g_bar ≥ 1e-13 | 1.35–2.01 / 0.54–0.85 | 1.96–3.24 / 0.67–1.13 |
| GAMA isolated, all bins, per-bin | 0.93 / 0.23 | 1.70 / 0.30 |
| GAMA isolated, joint GLS g_bar < 1e-13 | (74.2 − 2·12.8)/20.3 = **2.4** / 2.2 | — |
| KiDS isolated, all bins (incl. flagged) | 10.7 / 3.6 | 12.0 / 3.8 |
| KiDS isolated dwarfs, all bins (incl. flagged) | 8.9 / 4.1 | 10.1 / 4.5 |

f_c (every cosmic baryon of the halo, Moster+2013 SHMR at each bin's mean M_gal) = 4.45, 4.79, 7.94, 14.55.
The registered C_a at the 1/Ω_b floor gives B = 16.1 / 19.1 / 20.0 at g_bar = 10⁻¹³ / 10⁻¹⁴ / 10⁻¹⁵, so the bare cap is the generous version.

Reading: in the range the data paper vouches for, the no-CDM cap survives with a hidden-baryon factor of ~2–3 at ~100–300 kpc.
That sits inside the observed CGM range for L* galaxies (cool + hot CGM is comparable to the stellar mass; Tumlinson+2017), and far
inside ΛCDM's own budget. GAMA, which is reliable at low g_bar, asks for f ≈ 2.4. The large demands (f ≈ 4–12) come only
from KiDS bins that B21 flag as satellite-contaminated, where B_obs climbs to ~300 through the two-halo term. **A bounded-boost law
caps each system's own boost; it does not cap the lensing mass of the neighbours a stack picks up at 1 Mpc.** Those bins are not a
clean test of a per-system cap under any law.

### So what kills 20.3? The dwarfs, as the site already says in a second sentence
The site's 09-29 addition: classical dSphs (Draco, UMi, Sextans) have dynamical M/L_V ≈ 100–300, so boosts are 30–100. They are
gas-free, so no hidden-baryon escape exists. A check: Draco's M_1/2 ≈ 2×10⁷ M☉ (Wolf+2010) against ~2.7×10⁵ M☉ of stars inside r_1/2
gives B ≈ 75, which is 3.7× the cap. Ultra-faints (M/L in the hundreds to thousands) exceed it by more. The escape routes are tides and
non-equilibrium, plus binary-star inflation for the ultra-faints, not baryons. **The cap is closed by dwarf kinematics. Lensing
only corroborates it, and only under a census assumption (f ≲ 2–3).** The site leads with the weaker leg.

A cleaner statement of the class: under a cap B_max = 1/Ω_b, every bound system needs **baryons ≥ Ω_b × its dynamical mass inside
every radius.** Gas-free dwarfs sit at ~1%, not 4.9%. That is the kill. Galaxies under lensing do not provide it.

### Lesson (record-facing, about my own registration)
The registration fixed the statistic, the treatments and the consequence rule. It did not fix the data range, and the data paper
specifies one (B21 §5.1: KiDS isolation unreliable at g_bar ≲ 10⁻¹³). P3 "FAILED" as registered, and the consequence rule as
written would declare the class dead from lensing alone. I am not executing that consequence, and I am saying so here rather than
quietly re-scoping. Next time: read the data paper's reliability/systematics section before writing the PREREG, the same way
the memory rule says to read the registration text before executing.

## Implications for the Site
- /honest-assessment (two places, lines ~255 and ~367) and anything quoting "1.71× at 10⁻¹⁵": the number is a represented-curve
  artefact. It is wrong in both directions. At face value the bins exclude 20.3 far harder (B_obs ≈ 300 at 1.4×10⁻¹⁵, z = 11). In the
  paper's reliable range they exclude it only if hidden baryons are < ~2× stars + cold gas.
- Lead the 1/Ω_b sentence with the dwarf leg, which is gas-free and has no baryon escape, and give lensing as corroboration
  conditional on a census.
- The Ω_m-based caps are excluded on the bins in every treatment. That sentence can now cite data instead of a curve.

## Action: Maintainer
- /honest-assessment ~L255 and ~L367: replace "excluded by the weak-lensing RAR at 10⁻¹⁵ m/s² (1.71×, 2026-09-25)" with:
  "excluded by the classical dwarf spheroidals (gas-free, boosts 30–100, Mateo 1998; Walker+2009). On the published KiDS-1000 bins
  (Brouwer+2021, read 2026-10-04) it is excluded only if galaxies carry less than ~2–3× their stars + cold gas out to ~0.3–1 Mpc;
  the face-value exclusion (boost ≈ 300 at 10⁻¹⁵) sits in bins the data paper flags for satellite contamination."
  Cite `explorer/findings/scripts/lensing_cap_on_kids_bins.py`.
- site_lint: add a rule for "1.71×" near "lensing" (retired phrase).
- Ledger (Synchronism PREDICTIONS.md, TEST-10 row / 09-25 block): the lensing leg moves from "excluded" to "census-conditional";
  the dwarf leg carries the exclusion. No count change. The class is still dead.

## Open Threads
- Is the dwarf leg robust to the framework's own EFE? Draco at 76 kpc sits in g_ext ≈ 1.7×10⁻¹¹ ≫ its internal g_bar ≈ 10⁻¹².
  An acceleration-keyed C keyed on total acceleration predicts a *small* boost there (~3), so the framework fails Draco by more
  than the cap does. That part is inherited from MOND-with-EFE, and the cap is not even the binding constraint.
- An isolated, gas-rich dwarf with B > 20.3 at a reliable radius would be a cap kill with no tidal escape. Candidates: SPARC's most
  DM-dominated (max 13.7, so no), or HI-rich isolated dwarfs (LITTLE THINGS). Worth a scan.
- B21's two-halo excess at < 10⁻¹³ is itself something a bounded-boost law must reproduce from neighbours' boosted baryons. Nobody
  has modelled it for any C.
