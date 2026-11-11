# Finding: The partition rule was asked for in 1983 and written in 2011. Open clusters are the row it has to exclude, and today they exclude it only where binaries were removed

## Origin
Topic `system-partition-rule-can-any-written-rule-spare-the-planets-and-boost-a-binary.md` (maintainer 2026-11-11, from a
simulated-visitor researcher persona). PREREG `PREREG-system-partition-rule-open-clusters-20261111.md`, commit `a1b3be0`,
before the script and before any retrieval. Not blind: hand estimates came first and are in the PREREG.

- Script: `scripts/system_partition_rules.py`
- Inputs: `scripts/system_partition_rules_open_clusters.json` (every number with its source)
- Output: `scripts/system_partition_rules_output.txt`, `scripts/system_partition_rules.json`

## Summary
The topic's five test systems are all ones the internal (no external field effect) reading had already survived. The
class it omitted is the one the literature used to settle this question: open clusters near the Sun, which sit at
internal accelerations of 0.002–0.07 a₀ inside an external field of 1.7 a₀. Milgrom introduced the external field
effect in 1983 because of them (quoted below). No membership rule on the topic's list separates open clusters from
dwarf spheroidals; the only variable that does is the external field in units of a₀, and it puts wide binaries with
the open clusters. One written rule does what the corner needs: Milgrom's 2011 frequency-by-frequency toy model of
modified inertia. He discards it in the next sentence as observationally excluded.

The test itself did not come out the way I registered it. My kill criterion is **not met**: Gaia-era proper-motion
dispersions of the Hyades, Pleiades, Praesepe and α Persei are 0.85–1.06 of the no-EFE prediction. Where binaries were
removed or corrected (Pleiades, M67, NGC 188) the dispersions are 0.34–0.63 of that prediction and 0.9–1.4 of Newton.
The binary term measured in those three clusters is 0.49–0.56 km/s, the same size as the no-EFE prediction itself.

## Research Notes

### 1. Prior art, read today (verbatim; locators as given)
Read by a retrieval agent from the ADS page scans and ar5iv HTML; I re-read the Milgrom 2011 passages myself from the
saved text.

- **The composite-body problem.** Milgrom 1983, ApJ 270, 365, p. 367: "If we use equation (1) to obtain the acceleration
  of the constituents when this is much larger than a_0 we will not get the correct answer for the c.m. acceleration of
  the whole body when this is much smaller than a_0. It is mainly for this reason that equation (1) cannot be considered
  a satisfying theory."
- **Open clusters are why there is an external field effect.** Same paper, §III, p. 368: "The data on open clusters in the
  solar neighborhood (region H in Fig. 1) appear to be in conflict with this result. […] Jones (1970a, b) finds a
  dynamically deduced mass for the Pleiades and Praesepe which is only about a factor 1.5 larger than the mass accounted
  for by stars in these clusters. The internal accelerations in these clusters are, however, a few times (5–10) smaller
  than a_0, and if the SEP is obeyed by the modified dynamics, we would expect a larger mass discrepancy than is
  observed." And: "We are then compelled to conclude that the internal dynamics of the open clusters embedded in the
  field of the Galaxy is different from that of a similar but isolated cluster."
- **Momentum.** Felten 1984 (ApJ 286, 3), abstract: "The momentum of an isolated system is not conserved, and the usual
  theorem for center-of-mass motion of any system does not hold."
- **The field-equation fix has the effect built in.** Bekenstein & Milgrom 1984 (ApJ 286, 7), abstract: "The
  center-of-mass acceleration of an arbitrary bound system in a constant external gravitational field is independent of
  any property of the system. […] However, the internal dynamics of a system in a constant external field is different
  from that of the same system in the absence of the external field, in violation of the strong principle of
  equivalence."
- **Is an EFE avoidable?** Milgrom, arXiv:1212.2568 §IV.6: "the fact that an external field |g_0| ≫ a_0 renders the
  internal dynamics Newtonian, follows from only the basic tenets of MOND, provided that only the instantaneous external
  field enters the internal dynamics (not necessarily true in MI, time-nonlocal theories)."
- **The rule that does what the corner needs.** Milgrom, arXiv:1111.1611 (2011), abstract: "it is even possible to
  construct MI theories with practically no EFE." §3.1, for a model in which each Fourier component of a trajectory is
  modified according to its own acceleration amplitude: "such a theory will predict no EFE, unless the external and
  internal motions are of similar frequencies. It will, on the other hand, predict the observationally correct
  center-of-mass motions (CoMMs) of bodies with disparate values of the internal and external accelerations […]: because
  of the disparate frequencies, each motion is modified according to its own characteristic acceleration. I think that
  an EFE in MOND is observationally required, so let us make 𝒜(ω) depend not only on ω, but on all components with
  frequency up to ω."
- **The algebraic law is exact for circular orbits in that family.** Same paper, §3: "In any MI theory the relation
  between the central gravity force, the orbital radius, and the orbital speed on circular orbits […] perforce has the
  form V²/R · μ(V²/(R a_0)) = −∂φ/∂R."
- Not in Milgrom's later reviews: Scholarpedia, arXiv:0801.3133 and 1404.7661 do not mention open clusters as the
  motivation. Sanders & McGaugh 2002 do ("Milgrom noted that open star clusters in the Galaxy do not show evidence for
  mass discrepancies").

So the "partition rule" is not a membership test. In the one place it has been written, it is a spectral decomposition
of each body's motion: the Sun and Saturn share the Galactic-frequency component, so there is no relative push (the
maintainer's 10⁵σ Saturn result applies to the total-acceleration reading, not to this one; argued, not computed), and
a wide binary's orbital component is modified by its own acceleration. That is the corner's internal reading, defined.
It is prior art, it has no action, and its author set it aside.

### 2. The table: what a rule could key on, beside what the data require
`system_partition_rules_output.txt` §1. Controls pass: Crater II 3.90 km/s (11-10: 3.90); binary boosts 1.48 / 2.69
(ledger 1.48 / 2.69); Newtonian Plummer Jeans against the analytic value +0.00 %; deep limit against (4/81)GMa_M
−0.01 %.

| class | g_N,int/a_M | g_ext/a_M | g_int(boosted)/g_ext | r_½/r_J | density contrast | ω_int/ω_ext (observed) |
|---|---|---|---|---|---|---|
| open clusters (7) | 0.00247–0.0509 | 1.74 | 0.029–0.139 | 0.241–0.739 | 1.18–33.9 | 3.5–11.3 |
| dwarf spheroidals (11) | 6.56e-05–0.0487 | 0.0464–0.421 | 0.0358–5.08 | 0.107–3.25 | 0.0292–814 | 1.7–61.8 |
| wide binaries, 5–20 kAU | 0.27–4.31 | 1.74 | 0.354–2.68 | 0.0134–0.0534 | 6.24e+03–3.99e+05 | 115–916 |

Single-variable separability (§3 of the output): of twelve variables, **only g_ext/a_M** puts the open clusters on one
side and the dwarfs on the other, and the binaries share the open clusters' value. Tidal filling, binding, density
contrast, number of bodies, relaxation time on either branch, dynamical age and frequency ratio all overlap. On the
eight classical dwarfs alone (dropping Crater II, Antlia 2, Segue 1) four more variables open a gap, the narrowest
being g_int(boosted)/g_ext at 0.08 dex.

The open clusters all sit at one external field because they are all near the Sun, so "separable by g_ext" is partly by
construction. The content is in the negatives: nothing else separates.

Rule by rule:
- **R1′ pairwise sum.** The Galaxy's field at the Sun comes out 1.5e+05 × observed if the Galaxy is 6×10¹⁰ stars, 474 ×
  if it is 10⁵ M☉ clouds, 0.612 × if it is one body. A pairwise law depends on how matter is counted.
- **R2 Hill / tidal.** Every open cluster and every binary is inside its Newtonian Jacobi radius (0.24–0.74; 0.013–0.053).
  Four dwarfs are not, on counted baryons (Sextans 1.42, Crater II 2.48, Antlia 2 3.25, Segue 1 1.36). The rule admits
  the open clusters and refuses four dwarfs that need the largest boosts. I predicted it would fail on the clusters; it
  fails on the dwarfs.
- **R4 density contrast.** A threshold that admits the binaries (≥ 6.24e+03) excludes every dwarf (≤ 814).
- **R5 relaxation.** Bistable for the Hyades, Praesepe, Coma Ber, NGC 188 and Segue 1: collisional if evaluated with
  Newtonian speeds, collisionless if evaluated with boosted ones. A rule whose input depends on its output selects
  nothing. It has no value for two bodies.
- **R6 field ratio (mine).** Refuted as registered: the Newtonian ratio for open clusters (0.00142–0.0293) lies inside
  the dwarfs' range (0.000536–1.05), and so does the boosted one.
- **Dynamical age** (not registered; checked because a time-scale rule was the obvious rescue). M67 and NGC 188 have
  lived 469 and 415 crossing times, more than any dwarf in the table (1.3–116).
- **Frequency separation** (not on my list or the topic's; found by retrieval). Passes on paper if "similar frequencies"
  covers a ratio of 11.3 (M67) and does not cover 115 (a 20 kAU binary). It is a second variable beside g_ext/a_M, not
  a replacement: dwarfs are boosted with or without an EFE because their external field is 0.05–0.4 a_M.

A local-in-time field theory cannot do this. If the internal dynamics are to be unchanged by a uniform external field,
the field equation may depend on second derivatives of the potential only, which means density or tide, and that is the
density-keyed branch the 08-03 finding identified as "linear in Φ, hence EFE = 0". An argument that takes the
acceleration itself is not shift-invariant. This is an argument, consistent with the Bekenstein–Milgrom abstract; I
have not proved it for every local theory. Milgrom's exception is exactly non-locality in time.

### 3. Open clusters under the internal reading
Prediction: isotropic Jeans, Plummer sphere with the published half-mass radius, mass-weighted inside the aperture of
the measurement, γ = 0.90 (γ = 0.87–0.95 changes the third decimal), at the lowest published counted mass. Newton at
the highest published counted mass. z carries the same 20 % systematic as 11-10; "random" is measurement error only.

| cluster | measurement | σ_obs (km/s) | Newton (M_hi) | internal (M_lo) | obs/Newton | obs/internal | z, observation minus internal (random) |
|---|---|---|---|---|---|---|---|
| Hyades | Oh & Evans 2020, DR2 | 0.400 ± 0.025 | 0.257 | 0.623 | 1.56 | 0.64 | −1.8 (−8.9) |
| Hyades | Olivares+ 2024, DR3 rms | 0.528 ± 0.035 | 0.257 | 0.623 | 2.05 | 0.85 | −0.7 (−2.7) |
| Pleiades | Torres+ 2021, PM, cleaned | 0.480 ± 0.020 | 0.377 | 0.838 | 1.27 | 0.57 | −2.1 (−17.9) |
| Pleiades | Hobart+ 2026, PM | 0.739 ± 0.011 | 0.377 | 0.838 | 1.96 | 0.88 | −0.6 (−9.0) |
| Praesepe | Olivares+ 2024, Hao list | 0.628 ± 0.030 | 0.371 | 0.786 | 1.69 | 0.80 | −1.0 (−5.3) |
| Praesepe | Hobart+ 2026, PM | 0.809 ± 0.017 | 0.371 | 0.786 | 2.18 | 1.03 | +0.1 (+1.3) |
| Coma Ber | Pang+ 2021, PM rms | 0.275 ± 0.035 | 0.128 | 0.461 | 2.15 | 0.60 | −1.9 (−5.3) |
| α Per | Hobart+ 2026, PM | 0.799 ± 0.017 | 0.255 | 0.752 | 3.13 | 1.06 | +0.3 (+2.8) |
| M67 | Geller+ 2015, RV, corrected | 0.590 ± 0.065 | 0.482 | 0.820 | 1.22 | 0.72 | −1.3 (−3.5) |
| M67 | Geller+ 2015, RV, uncorrected | 0.800 ± 0.040 | 0.482 | 0.820 | 1.66 | 0.98 | −0.1 (−0.5) |
| NGC 188 | Geller+ 2008, RV, corrected | 0.410 ± 0.040 | 0.555 | 1.046 | 0.74 | 0.39 | −3.0 (−15.9) |
| NGC 188 | Geller+ 2008, RV, uncorrected | 0.640 ± 0.040 | 0.555 | 1.046 | 1.15 | 0.61 | −1.9 (−10.1) |

**Registered kill** (largest published σ, lowest mass, 20 % systematic, at least two of Hyades / Pleiades / Praesepe at
z ≥ 3): **not met.** z (prediction minus observation) = −0.3, +0.6, −0.1; observed/predicted 1.06, 0.88, 1.03. Extending to all seven clusters, none
fires.

Two things about the criterion itself:
- Its 20 % term caps z at (1 − obs/pred)/0.2 whatever the measurement error. For it to reach 3 the observation must be
  below 0.4 of the prediction. Only NGC 188's corrected value (0.39) is. I borrowed the 20 % from the dwarf-spheroidal
  estimator on 11-10 without asking what it did here.
- "Largest published σ" was meant to be conservative. It selects the measurements with binaries left in.

**What the data show, split the way the criterion did not:**

| cluster | uncleaned | cleaned | binary term | cleaned/Newton (mid M) | cleaned/internal (mid M) | uncleaned/internal |
|---|---|---|---|---|---|---|
| Pleiades | 0.739 | 0.480 | 0.56 | 1.40 | 0.54 | 0.83 |
| M67 | 0.800 | 0.590 | 0.54 | 1.44 | 0.63 | 0.85 |
| NGC 188 | 0.640 | 0.410 | 0.49 | 0.88 | 0.34 | 0.53 |

- Cleaned or corrected dispersions are 0.9–1.4 of Newton at the mid counted mass. Geller+ 2008: the NGC 188 virial mass
  "agrees well with the total mass one gets by counting". Torres+ 2021: a Pleiades virial mass of 840 ± 200 M☉,
  "consistent with estimates by others". Newton with an EFE-sized renormalisation (boost in g of 1.3–1.5, the ledger's
  rows) is 1.14–1.22 of Newton in σ. Milgrom's 1983 factor 1.5 in mass is 1.22 in σ.
- Uncleaned Gaia proper-motion dispersions are 0.85–1.06 of the internal reading at the lowest mass. Hobart+'s three clusters of
  518–650 M☉ give 0.799 / 0.739 / 0.809 km/s; the internal reading gives 0.788 / 0.844 / 0.825; Newton plus a 0.52 km/s
  binary term gives 0.554 / 0.601 / 0.592. On those three numbers the internal reading is the closer description. I
  did not expect that and it should not be explained away: a binary term of about 0.7 km/s, or stars beyond the tidal
  radius in a 15° field, would also do it, and I have not read which applies.
- The binary term, measured three times, is 0.49–0.56 km/s. The radial-acceleration-relation value for a 30–250 M☉ cluster
  is 0.41–0.72 km/s (output §5). The contaminant and the signal are the same size, with nearly the same weak mass dependence.
- The Hyades have no binary-removed dispersion in what was retrieved. Oh & Evans 2020 find their Jeans model "a factor
  of ≈2 smaller" than the measured dispersion and conclude "the Hyades cluster cannot possibly be in virial
  equilibrium". The same 387 stars gave std[V] = 0.38 ± 0.02 on DR2 and 0.66 ± 0.05 on DR3 (Olivares+ 2024, Table 4).
- The cleaned measurements are few and uneven. The Pleiades value is the strongest (radial velocities and proper
  motions agree at 0.48). NGC 188's correction is borrowed from M67 simulations with an assumed error. M67's counted
  masses are called lower limits by the authors.

So: the 1983 argument still holds on the measurements where binaries were handled, at 3.5–18σ in measurement error and
1.3–3.0 with my 20 % term. It does not hold on face-value Gaia proper motions. The premise "open clusters show no
discrepancy" is a statement about binary-cleaned data, and the site should not write it bare.

### 4. A 2026 preprint claims the opposite, and a dispersion floor reproduces its pattern
Huisjes & Hernandez, arXiv:2603.03522 v1 (3 Mar 2026, no journal reference): 3,618 Hunt & Reffert clusters within
3 kpc; "Approximately 90% of open clusters (those with N⋆≤250) lie close to the RAR, albeit with substantial scatter";
fitted g† = 1.4×10⁻¹⁰ "± 0.5 dex"; "the most massive ones well described by Newtonian virial equilibrium expectations".
From the body, read in full by a retrieval agent:
- "The velocity dispersion given by the HR134 catalogue is calculated by taking the standard deviation of the proper
  motions." "The catalogue does not weight the proper motions by their uncertainties". No error deconvolution is
  described.
- The catalogue's authors "warn that the velocity dispersions are easily contaminated and that this can contribute
  ≳500 m s⁻¹."
- No residual is plotted against heliocentric distance or proper-motion error. No individual cluster is named.

Control (post hoc, `_output.txt` §5): in their own plane, σ_obs² = σ_Newton² + floor². A floor of 0.5 km/s puts a
30–250 M☉ cluster within −0.22 to +0.19 dex of the RAR and a 1000–3000 M☉ cluster 0.23–0.39 dex below it, toward
Newton. That is their reported pattern, from a constant. A Gaia error of 0.05 mas/yr is 0.24 / 0.47 / 0.71 km/s at
1 / 2 / 3 kpc. This is my model, not their data; the authors have not been contacted; it says the analysis cannot
distinguish a floor from a law, not that the floor is the cause. The nearest clusters are the control their sample
lacks, and §3 is what those say.

### 5. Scoring
| | prediction | result |
|---|---|---|
| P1 | open clusters are in the deep regime | **held**: g_N(r_½)/a_M = 0.0016–0.071 for all seven |
| P2 | internal reading over-predicts Hyades and Pleiades by ≥ 1.8× | **refuted as registered**: 1.56 and 1.75 at the lowest mass against the best measurements (1.92, 1.95 at the highest mass); 0.94–1.13 against the largest |
| P3 | R2, R3 admit binaries, clusters and dwarfs alike | **partly**: clusters and binaries yes; four dwarfs fall outside their baryonic Jacobi radius |
| P4 | pairwise sum over-predicts by ~√N | **held**: 1.5e+05 |
| P5 | density contrast cannot admit binaries and dwarfs together | **held** |
| P6 | relaxation rule is bistable; Segue 1 collisional on Newtonian inputs | **held** |
| P7 | field-ratio rule R6 is the only one that passes | **refuted**: it does not separate; the rule that passes on paper is one I did not list |
| P8 | Milgrom's own words give open clusters as the motivation | **held** |
| kill | ≥ 2 of 3 clusters at z ≥ 3 | **not met** |

My recall before reading was wrong in the direction of my hypothesis: Hyades "≈ 0.3 km/s" against Gaia-era 0.40–0.66.

## Implications for the Site
- The corner is not "undefined". It has a definition in print (Milgrom 2011, frequency-by-frequency modified inertia),
  which makes it MOND as modified inertia with a γ, not this framework's content. The MRH is not what would supply the
  rule; a spectral decomposition is.
- Under that definition the corner's DR4 row is the internal-reading boost (1.41 at 10 kAU and 2.28 at 20 kAU for
  2 M☉; the ledger's 1.48 / 2.69 at fixed g_N), valid for separations whose orbital frequency is far above the Galactic
  one. Under Milgrom's replacement (his eq. 9) the binary feels the Galactic field and the row is the EFE row.
- The same Gaia release tests the same rule twice. Wide binaries need hidden companions removed; open clusters need
  binaries removed. Clusters have counted masses and no Υ.
- No dwarf, no globular cluster and no binary on the site's list could have excluded the internal reading. The class
  that can was not on the list.

## Action: Maintainer
- `EFE_FREE_CORNER_STATUS` (`src/lib/ledger.ts`): replace the from-memory sentence "This is the old problem with
  algebraic MOND; the field-equation versions that fix it have the external field effect" with the sourced version:
  Milgrom 1983 p. 367 (composite bodies) and p. 368 (open clusters), Felten 1984, Bekenstein & Milgrom 1984, and
  Milgrom 2011 (arXiv:1111.1611 §3.1) as the one written rule, with his "I think that an EFE in MOND is observationally
  required".
- Same string, the internal-reading clause: add one sentence. Suggested: "On nearby open clusters the internal reading
  predicts dispersions of 0.46–1.05 km/s; binary-cleaned measurements (Pleiades, M67, NGC 188) are 0.34–0.63 of it
  and 0.9–1.4 of Newton at the mid counted mass, uncleaned Gaia proper motions are 0.85–1.06 of it, and a kill fixed in advance was not met
  (explorer 2026-11-11, PREREG a1b3be0)."
- `maintainer/scripts/wb_dr4_reading_key_PREREG.md`, 11-11 addendum: name the frequency condition for the internal row
  (ω_int/ω_ext = 115–916 for 5–20 kAU; open clusters 3.5–11.3), and add open-cluster dispersions with binaries removed
  as a second DR4 observable for the same row.
- Do not cite arXiv:2603.03522 as support for a boost in open clusters, and do not write "open clusters are Newtonian"
  without "where binaries were removed". If the floor control is mentioned it needs `THIRD_PARTY_CLAIM_LABEL`.
- /for-researchers "which equation of motion" table: the algebraic row's equation of motion can be named (modified
  inertia, circular-orbit identity, Milgrom 2011 §3) instead of left as a reading.

## Open Threads
- A binary-removed, error-deconvolved dispersion inside r_h for the Hyades and Praesepe. None was retrieved. It is the
  measurement that decides §3, and DR4's epoch astrometry is what provides it.
- The frequency window. Binaries at 30–100 kAU have ω_int/ω_ext ≈ 10–60, between the clusters and the DR4 sample. A
  boost that rises to 20 kAU and falls back beyond is what the 2011 toy would predict if clusters are Newtonian.
- The Pleiades are about half a Galactic orbit old. In a theory non-local in time, the Galactic-frequency component of
  their stars' motion is not yet resolved. Whether that matters depends on a kernel nobody has written.
- Pal 14 and NGC 2419 (external field 0.12–0.17 a_M, t_rh/age 1.1 and 3.0): the Baumgardt masses on disk are dynamical,
  so the table gives them no required boost. With photometric masses they are MOND's own outer-cluster problem and
  would test g_ext/a_M as the separating variable from the low-field side.
- Why Hobart+'s three dispersions sit on the internal reading: read the paper's radial range and binary treatment.
- The Oort cloud under the internal reading (log potential beyond ~7 kAU, no EFE): aphelia of "new" comets shrink.
  Milgrom 1983 discusses comets; not retrieved.
