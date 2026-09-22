# Finding: If the cosmology's CDM sits in galaxies, the boost double counts by +0.28 dex (×1.9) in the deep regime. The a-priori ΛCDM halo already supplies 1.17× the missing acceleration, and the maintainer's (a)/(b) fork has a third branch with prior art.

## Origin
Topic `dark-matter-double-count-if-the-cosmology-needs-cdm.md` (maintainer, 2026-09-22), which follows today's result that
the DE sector cannot supply the dark matter (baryons-only best dark/baryon at recombination 1.54, needs 5.36).
PREREG `28e691f` (before the script). Script `explorer/scripts/dm_double_count_sparc.py` (+ `_output.txt`).
**4 of 5 registered predictions held; P5 refuted (my reasoning was wrong, diagnosis below).**

## Summary
On SPARC (2807 rows, 166 galaxies, the registered SPARC×Cassini selection), adding an a-priori abundance-matched NFW halo
(Moster+2013 SHMR, Dutton & Macciò 2014 concentrations, no per-galaxy tuning) to the tanh-log boost (γ = 0.489, profiled
a₀) over-predicts the observed acceleration by **+0.22 dex overall and +0.28 dex (×1.9) in the deep regime**. The rms
doubles, from 0.144 to 0.288 dex. When the halo amplitude is freed per galaxy with the boost on, **the median fitted
amplitude is 0.000**, and 67 % of galaxies prefer f < 0.1. The same fit without the boost finds a halo (median f = 0.81,
3 % at f < 0.1), so the instrument can see a halo when there is room for one. The boost and a ΛCDM halo are close
substitutes: in the deep regime the a-priori halo supplies a median **1.17×** the observed missing acceleration g_obs − g_bar (IQR 0.87–1.70), which is what the boost exists to supply.
The maintainer's fork (a) keep CDM vs (b) keep the boost leaves out a third branch that already exists in the
literature. There, one component is w ≈ 0 dust at recombination and supplies the MOND-like force in galaxies (superfluid
dark matter, dipolar dark matter, AeST). The framework's own slogan, "dark matter as *incomplete decoherence*", reads
almost word for word as the superfluid-DM picture (condensed in galaxies, normal phase in clusters).

## Research Notes

### What was run (frozen in the PREREG)
| Model (f = 1, no fitting) | median r (dex) | rms | deep-regime median | deep-regime rms |
|---|---:|---:|---:|---:|
| M0 boost only | +0.0006 | 0.1437 | −0.0025 | 0.1535 |
| M1 halo only (plain ΛCDM, a-priori) | +0.0414 | 0.1778 | +0.0510 | 0.2015 |
| **M2 boost on baryons + Newtonian halo** | **+0.2219** | **0.2882** | **+0.2794** | 0.3369 |
| M3 boost on baryons + halo | +0.3030 | 0.3756 | +0.4074 | 0.4567 |
| Newtonian baryons only | −0.4359 | 0.5177 | −0.6019 | 0.6448 |

r = log₁₀ g_model − log₁₀ g_obs. Deep regime: g_bar < a₀,McG/3 (1627 points). Halo masses: log M200 = 10.05…14.02,
median 11.16; median c200 = 8.6. Sensitivity: shifting M★ by ±0.2 dex before the SHMR inversion moves the M2
deep-regime overshoot to +0.245 / +0.316. The double count survives a factor-1.6 change in halo mass assignment.

Fitted per-galaxy halo amplitude f ∈ [0, 10]:
| | median f | IQR | frac f < 0.1 | frac f ≥ 0.5 |
|---|---:|---|---:|---:|
| M1 halo only (positive control) | 0.809 | 0.535–1.102 | 0.030 | 0.777 |
| M2 boost + halo | **0.000** | 0.000–0.235 | **0.669** | 0.120 |

### Verdicts
- P1 identity control: M0 rms 0.1437 reproduces `sparc_profile.json` `best_grid_row` (0.14368). **Held.**
- P2 plain ΛCDM median in [−0.05, +0.15]: +0.041. **Held.**
- P3 M2 overshoot: median +0.222, deep +0.279, rms ratio 2.01. **Held.**
- P4 M2 median f < 0.2 with ≥ 50 % at f < 0.1, and the M1 control median f in [0.3, 3]: 0.000 / 66.9 % / 0.809. **Held.**
- P5 "boosting everything overshoots less than boosting only the baryons": **REFUTED.** M3 = +0.303 > M2 = +0.222.
  My registered reasoning was that ν falls as the source acceleration rises. That is true, but the *product* ν(g)·g rises,
  and M3 applies ν > 1 to the halo term as well. In the deep regime √(a(g_b+g_h)) > √(a g_b) + g_h whenever g_h is small
  compared with a. (Example: g_b = g_h = 0.1a gives 0.447a vs 0.416a.) The keyed-on-total reading, which is the one the
  framework's "C of total density" language implies, is the worse double count, not the milder one.

### What this says about the fork
- **Branch (a), keep CDM:** the boost must be ≈ 1 wherever galaxies are measured. The C_a floor and γ become
  irrelevant to rotation curves. What survives against plain ΛCDM is the RAR's *scatter*: 0.144 dex for the boost vs
  0.178 dex for a-priori halos. That is the generic MOND-vs-ΛCDM argument, it is not framework-specific, and it
  shrinks once baryonic feedback and scatter in halo assignment are modelled (Di Cintio & Lelli 2016; Navarro+2017 get
  RAR-like relations from ΛCDM). The *median* is not a discriminant at all: the a-priori halo lands within +0.04 dex.
- **Branch (b), keep the boost:** the DE sector has no working calibration (maintainer, today), and any CDM that the CMB
  third peak needs must be kept out of galaxy radii. The fit quantifies "kept out": inside SPARC radii the component's
  Newtonian pull must be ≲ 0.24 of an abundance-matched NFW (the upper quartile of fitted f) for three quarters of
  galaxies, and ≈ 0 for two thirds.
- **Branch (c), dust in cosmology, not an NFW halo in galaxies.** The topic asked this. The literature has three
  versions, and one of them is already refuted:
  1. **Hot component, MOND + 11 eV sterile ν** (Angus 2009; Angus & Diaferio 2011). This matches the CMB third peak,
     and free streaming keeps the neutrinos out of galaxies. **Refuted in QUMOND simulations:** it needs m > 30 eV
     for low-mass clusters and "always a considerable over production" of M200 > 10^15.1 M☉ clusters
     (Katz+2013, arXiv:1309.6094). The "clusters only above galaxy scale" split was tried and failed on the cluster
     mass function.
  2. **Superfluid DM** (Berezhiani & Khoury 2015, PRD 92, 103510). One particle species. It is CDM on cosmological
     scales and condenses in galaxies (T_c ~ mK), where phonons mediate a MOND-like force. In clusters it is partly or
     fully in the normal phase, which is where MOND fails. It has been fitted to SPARC (Mistele, McGaugh & Hossenfelder,
     A&A 664, 40, 2022): M/L values are acceptable but depend unnaturally on galaxy size. The same group reports tension
     with weak lensing. **This is the branch the framework's own words describe:** "incomplete decoherence" is a
     condensate fraction below 1, and the phase transition is the framework's native vocabulary.
  3. **Dipolar DM / gravitational polarization** (Blanchet & Le Tiec 2008, 2009). A polarizable medium that is
     ΛCDM at cosmological scales and MOND at galactic scales, formulated as an action in GR. It sits next to the
     program's "linear permittivity gravity" thread.
  AeST (Skordis & Złośnik 2021) is the fourth, non-particle version: a field whose cosmological component is dust-like
  and passes the CMB TT and P(k). The site already lists AeST and superfluid DM as *escapes from the locality no-go*
  (/for-researchers:270–292). It has not yet listed them as *the answer to the dark-matter fork*, which is the more
  important role.

### Implication for "no DM particles"
Of branch (c)'s surviving versions, superfluid DM *has* particles, and dipolar DM has a medium with its own stress-energy.
AeST has no particles but has new fields with a dust-like cosmological mode. None of them is "baryons plus a
modification and nothing else". Today's DE result and this one together make that the default: **every known consistent
way to keep both the galaxy boost and the CMB puts new gravitating stuff into the universe.** S241 Part 6 item 4 and
S277 P277.1 ("no DM particles") are the sentences that do not survive in any branch that has a literature. SPINE's
"patterns that interact indifferently" survives in (a) and in (c2)/(c3).

## Implications for the Site
- Landing-page claim 3, "dark matter as incomplete decoherence", has a precise, citable realization (superfluid DM).
  It is a *different theory with particles*. The honest version of the claim is "the framework's picture is closest to
  superfluid dark matter, which keeps the particles; we have not derived anything superfluid DM does not already have."
- The /dark-energy "ρ_m includes CDM" note should add one line: if that CDM sits in galaxies as ΛCDM halos, the galaxy
  boost over-predicts by ×1.9 in the deep regime (this finding).

## Action: Maintainer
- **P1 landing/claim 3 and /dark-matter-related surfaces:** add "closest prior art: superfluid dark matter
  (Berezhiani & Khoury 2015), which has particles; a halo plus the boost double counts by +0.28 dex on SPARC
  (explorer 2026-09-22)". Do not write "coherence explains dark matter" without that line.
- **P1 proposal to dp (append to today's frame ask):** the fork is three-way, not two-way: (a) CDM halos, boost = 1 in
  galaxies; (b) boost, no working cosmology; (c) one component with two phases (superfluid-DM class). (c) is the only
  branch in which the slogan is literally true, and it withdraws "no DM particles".
- **P2 /for-researchers:280:** superfluid DM and AeST are listed as no-go escapes. Add a sentence saying they are also
  the existing answers to the cosmology-needs-CDM problem.
- **No count change.** This is an internal-consistency computation, not a registered-prediction test. Bucket 0 = 0.

## Open Threads
- **Does superfluid DM's core satisfy f ≲ 0.24?** The B&K condensate core has mass. Whether its Newtonian contribution
  inside SPARC radii sits below a quarter of an abundance-matched NFW is checkable from Mistele+2022's fits. It is untested
  here. If it doesn't, even branch (c2) double counts, just more gently.
- **Branch (a) with feedback-cored halos:** coring lowers the inner halo, which moves M1 toward M0 in scatter. How much of
  the 0.144 vs 0.178 gap survives a realistic halo model (e.g. DC14 profiles)?
- **Does any framework-native quantity pick T_c or the condensate fraction?** If "incomplete decoherence" is taken
  seriously, the framework should predict *which* systems are condensed (a velocity-dispersion threshold). That is a
  number superfluid DM already has (σ vs T_c). A framework version would be the first prediction this sector could make
  that is not inherited.
