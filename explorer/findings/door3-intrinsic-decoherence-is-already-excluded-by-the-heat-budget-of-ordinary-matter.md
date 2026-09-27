# Finding: Door #3's "near-reach" bet, intrinsic decoherence at 2Dk², is already excluded by the heat budget of ordinary matter. Superpositions were the wrong comparator; bound states are the right one.

## Origin
Topic `find-an-overlap-sector-the-only-place-bucket-0-can-live.md` (maintainer 2026-09-27). Its first suggested
starting point is door #3 (secular / time-domain). The ledger names door #3's "most natural novel prediction" as
**intrinsic decoherence ∝ D·k² from the dissipative substrate**, calls it "near-reach" (τ ≈ days to years at the
atomic/nm scale for Planck diffusion), and says the only obstruction is internal: the dissipative substrate cannot
host matter (`Synchronism/explorations/2026-06-24-phase16-door3-dissipation-vs-oscillation.md`; PREDICTIONS.md lines 71–82).

## Summary
Phase-16 compared Γ(L) = 2D/L² with bounds on **lab superpositions** (CSL / matter-wave, 10⁻⁸ to 10⁻¹⁶ /s) and
concluded it sits near them. But every atom and nucleus contains structure at k ≈ 1/a₀ and k ≈ 1/fm, far beyond any
lab superposition, and any mechanism that damps structure at 2Dk² acts on that structure continuously. At the
doc's own D = c·ℓ_Pl = 4.85×10⁻²⁷ m²/s:
- **Hydrogen** absorbs 1.9×10⁻⁴ eV/s and would be ionized in **0.84 days**.
- **Nucleons** absorb 10¹⁰–10¹¹ eV/s. In the damping reading, nuclear structure lasts about 0.3 ms.
- Ordinary matter would run at 10⁴ W/kg (electrons alone) to 10¹⁸ W/kg (nucleons), against Earth's total heat
  output of 7.9×10⁻¹² W/kg.

The heat budget bounds **D/D_Pl < 4×10⁻¹⁶** (electrons only) and **< 2×10⁻³⁰** (nucleons, if D is universal,
which it is for D = ħ/m_Pl). At the allowed D, the superposition signature Phase-16 wanted is below
**4×10⁻²⁴ /s at 1 nm**. The bet is not near-reach. At the natural D it is refuted, by about 15 to 30 orders of
magnitude, by data that QM passes trivially. This is also a counterexample to the 09-27 nesting table's
"superset: cannot lose alone" (see the companion finding).

## Research Notes

### Two QM embeddings, since Phase-16 picks neither
"Mode k damps at 2Dk²" is a statement about the substrate field. Carried into QM it has two standard readings:

- **(B) Norm-preserving Lindblad dephasing in the momentum basis:** dρ/dt = −D[k̂,[k̂,ρ]]. This is the only
  CP-map reading that gives the doc's 1/L² scaling. Position-basis localization (CSL/GRW/QBM) scales as L², the
  opposite, which the doc itself notes. Physically it is a random walk of each particle's position with
  ⟨δx²⟩ = 2Dt per axis. The energy input is exactly **d⟨H⟩/dt = D⟨∇²V⟩**, and ħ drops out, so it is a classical
  statement: jiggling a particle in a curved potential heats it.
  - *Positive control:* RK4 Lindblad integration of a 1D oscillator in a 40-level Fock basis reproduces D·mω²
    with ratio **1.000000**, trace 1.000000000000.
- **(C) The literal substrate rule** ψ_t ⊃ D∇²ψ. Structure at k decays at 2Dk², and a bound state's structure
  decays at 2D⟨k²⟩.

(A) gives a check that does not depend on which reading is chosen: the damping rate at the bound state's own k,
set against the age of old matter.

### Numbers (`scripts/door3_intrinsic_decoherence_vs_matter_heating.py`, output committed)

| system | (B) heating at D_Pl | (C) damping at D_Pl |
|---|---|---|
| H 1s electron (⟨∇²V⟩ = e²\|ψ(0)\|²/ε₀) | 1.9×10⁻⁴ eV/s → 13.6 eV in 0.84 d | 3.5×10⁻⁶ /s (τ 3.3 d) |
| nucleon, A = 4 (ħω = 25.8 MeV shell oscillator) | 2.3×10¹¹ eV/s | 9.1×10³ /s |
| nucleon, A = 56 | 4.0×10¹⁰ eV/s | 3.8×10³ /s |
| nucleon, A = 208 | 1.7×10¹⁰ eV/s | 2.4×10³ /s |

| bound (comparator) | D/D_Pl < |
|---|---|
| (B) electrons, H-like, vs Earth heat output 7.9×10⁻¹² W/kg | 4.4×10⁻¹⁶ |
| (B) nucleons (A = 56), same comparator | 2.0×10⁻³⁰ |
| (A/C) atomic structure survives 13.8 Gyr | 6.6×10⁻¹³ |
| (A/C) nuclear structure survives 13.8 Gyr | 6.1×10⁻²² |

The Earth heat budget is deliberately loose, since about half of it is radiogenic. Underground cryogenic and
X-ray-emission bounds of the kind used against collapse models are many orders tighter. None is needed.

### This is a solved problem in the collapse-model literature, which is the prior art
- **Pearle & Squires (1994, PRL 73, 1)** bounded collapse models by *bound-state excitation* using nucleon-decay
  detectors. They excluded the original mass-independent CSL, which is the same move as the nucleon row above.
- **Diósi–Penrose without a regulator** heats matter without bound. The literature's fix is a smearing length R₀.
  The Gran Sasso X-ray experiment (Donadi et al. 2021, Nat. Phys. 17, 74) excluded the parameter-free version and
  set R₀ ≳ 0.5 Å (value recalled, not re-fetched this session).
- GRW/CSL carry r_C ≈ 100 nm for exactly this reason: a localization kernel with no short-distance cutoff destroys
  atoms.

Door #3's kernel is the extreme case. Its rate *grows* as k² with no cutoff, so the smallest structures, nuclei,
are hit hardest.

### Escape routes, stated before anyone reaches for them
1. **Cutoff at r_C.** The rate stops growing below r_C. That is CSL-class (Bucket 3 prior art), and it gives up
   the distinctive 1/L² scaling at the scales where the signal was supposed to be large.
2. **Energy-basis dephasing (Milburn 1991).** Stationary states are immune, so there is no heating. But that is a
   different model, with rate ∝ (ΔE)² rather than D·k², and it is also prior art.
3. **Centre-of-mass only.** The internal structure of solitons is protected and only COM superpositions
   decohere. This evades the heat bound. What is left is Γ = D(Δk)² on COM momentum superpositions: about
   5×10⁻⁹ /s even for 400ħk large-momentum-transfer atom interferometers (Δk ≈ 10⁹ m⁻¹), against coherence times
   of seconds. That is 10⁸ or more below reach, not "near-reach". It is also exactly the constructive condition
   Phase-16 left open (a dissipative soliton), so the claim would have to be that the soliton's protection is
   perfect internally and zero externally. No mechanism for that split is on record.
4. **Mass-dependent D.** With D ∝ 1/m, nucleons are spared, but the electron bound (4×10⁻¹⁶) stays unless D is
   tuned per species.

### Why Phase-16 missed it
It is the same comparator error as "look for the rate" (memory: *cancelled in a ratio? look for the rate*). The
doc asked "how long does a superposition of size L last?" and compared the answer with superposition experiments.
The stronger question is "what does this rate do to states that already exist everywhere?" Bound states are
superpositions of momentum components spanning 1/a₀ and 1/fm, and they have been observed continuously for
10¹⁷ s. **For any proposed intrinsic-decoherence rate, check matter stability before interferometry.**

## Implications for the Site
- The site does not currently carry door #3 (grep of `src/` is empty). If it ever does, the
  intrinsic-decoherence candidate should read as **excluded at the natural Planck D by the stability and heat
  budget of ordinary matter. Its surviving forms are CSL- or Milburn-class prior art, or unobservably small.**
- Door #3 is not closed. Drift of constants and pulsar timing are other candidates, and the LLR Ġ/G result
  (09-23) already shows a time-domain difference exists. But its headline candidate was never near-reach.

## Action: Maintainer
- **P1 (ledger).** PREDICTIONS.md lines 71–82 (Phase-16 block): add that the "near-reach" τ ≈ days–yr at atomic/nm
  scale compares with superposition bounds, but bound-state heating at D_Pl is 1.9×10⁻⁴ eV/s per H atom and about
  10¹⁰ eV/s per nucleon. That gives D/D_Pl < 4×10⁻¹⁶ (electrons) or < 2×10⁻³⁰ (nucleons), so Γ(1 nm) < 4×10⁻²⁴ /s.
  Prior art: Pearle & Squires 1994; Donadi+2021 (the DP regulator). The constructive condition (dissipative
  soliton) survives only as COM-only decoherence, which is ≥10⁸ below reach. Record it as a **world-facing**
  (executed-data) refutation of the natural-D version, and note it for the H-oracle trail.
- **P2 (site): none needed.** `grep -rn "near-reach\|intrinsic decoherence\|door #3" src/` returns nothing (checked
  2026-09-27), so this is a ledger-only correction.
- **Count:** it does not fit the "6" as a registered test, because door #3 was never registered. It belongs in the
  failures ledger as an unregistered candidate, refuted before registration.

## Open Threads
- Does the Phase-1 conservative breather substrate with a *small added* diffusion term protect its internal modes
  (the COM-only escape)? One run: a 1D breather with D∇² added, measuring internal-mode vs translation-mode damping.
  If the internal modes damp at 2Dk² like everything else, escape route 3 is closed too.
- The same matter-stability check applies to every "substrate tick" proposal that adds noise at high k (B7
  Umklapp, and the dim-4 LIV channel in Phase-12). A matter-heating pass over the Bucket-1 table is cheap.
