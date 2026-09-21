# Finding: Leggett–Garg doesn't reach the CRT scanning picture; the quantum Zeno effect does. It forces a full phase reset, and a full phase reset is the Lüders rule

## Origin
Topic `temporal-scanning-vs-leggett-garg.md` (maintainer 2026-09-21, from the visitor researcher persona).
PREREG `ee7f509`, committed before any script existed. 10 scored predictions (P1–P7 here, P8–P10 in the TEST-04a side
finding): 8 held (P4 only conditionally), 1 refuted (P5), and 1 (P3) held only after I corrected my own formula (§3).
Scripts, each with `_output.txt`: `scripts/crt_scanning_leggett_garg.py`, `scripts/crt_zeno_itano_fit.py`.
The first run's output is kept as `scripts/crt_scanning_leggett_garg_output_run1_wrong_zeno_formula.txt`.

## Summary
The CRT section of SPINE packs two claims into one analogy. They say opposite things about invasiveness:
**(N)** "Nothing about the screen changed — only your synchronization timing changed", and **(I)** "measurement
is synchronization … a phase-lock event". `/two-reframes` states (N) as the claim, not as a metaphor: "The claim
is not metaphorical … What we call measurement is sampling". Existing data refute reading N, and the quantum Zeno
effect (Itano et al. 1990) does it more decisively than any Leggett–Garg experiment: it is off by **40σ at n = 8
alone** (χ² ≈ 10⁴ over 7 points). Reading I survives Leggett–Garg by construction. But once written as a model
(Born duty cycle plus a reset of the phase toward the sampled mode, with strength s), Itano's data force
**s ≥ 0.975**. At s = 1 the model *is* the Lüders projection on a phase that plays the role of the wavefunction.
Its "one mode at each instant" content does no dynamical work: no statistic depends on it. So the topic's
either/or ("refuted, or evades by a stated mechanism") resolves as **both, split by reading**. N is refuted. I is
an interpretation of QM, and it gives no distinguishing prediction unless a finite scan period is introduced.

## Research Notes

### 1. The model, and one assumption nobody has derived
Qubit precessing at ω, σ_z measured at t, t+τ, t+2τ, θ = ωτ. The hidden state is a phase φ on the precession
great circle, plus a fast scan. A measurement samples the scan at a detector instant uniform over the cycle. The
system is in mode + for a fraction cos²(φ/2) of the cycle. This **Born duty cycle is assumed**: nothing in the
archive derives it, and the CRT picture needs it to reproduce Born statistics at all.
- **Model N**: sampling leaves φ unchanged.
- **Model I(s)**: after sampling mode m, φ → (1−s)φ + s·φ_m. I(1) is the full phase lock.

### 2. Leggett–Garg: K = C₁₂ + C₂₃ − C₁₃ (`crt_scanning_leggett_garg_output.txt`)
| model | K(π/3) | max over θ grid |
|---|---|---|
| QM | 1.5 | 1.5 |
| I(1) | 1.5035 ± 0.0024 | matches QM at every θ, worst deviation 2.10 MC σ |
| N, best of 13 initial phases | ≤ 1 | 0.9907 |
| N, mixed initial phase | 0.75 (near π/3) | ≤ 1 |

Model N obeys K ≤ 1 everywhere, as it must: it has a joint distribution over (Q₁, Q₂, Q₃). Model I(1) reproduces
QM's 2cosθ − cos2θ, including the algebraic minimum −3 at θ = π. **A partial reset is enough to break LG:**
max_θ K > 1.01 already at **s = 0.15**, and K(π/3) > 1 at s ≈ 0.25. So an LG violation only tells you the
measurement is somewhat invasive. It is a weak constraint on this family. (PREREG P5 guessed 0.3 < s* < 0.7:
**refuted**. The true threshold is lower.)

### 3. The quantum Zeno effect pins s (`crt_zeno_itano_fit_output.txt`)
Itano, Heinzen, Bollinger & Wineland, PRA 41, 2295 (1990), Table I. I transcribed it from the scanned NIST PDF,
page 2298: n = 1…64 measurement pulses during a π rotation, 1→2 transition probability, uncertainty "about 0.02".
Observed: 0.995, 0.500, 0.335, 0.194, 0.103, 0.013, −0.006. Their ideal column is ½[1 − cosⁿ(π/n)].
- **Model N predicts 1.000 at every n.** At n = 8 the data give 0.194, which is **40σ** away. Model N is refuted.
- **Model I(1) reproduces the ideal column**: 1.0, 0.5003, 0.3758, 0.2356, 0.1333, 0.0725, 0.0373.
- Scanning s, with the data compared to I(s) plus Itano's own optical-pumping correction (their "Predicted"
  column minus the ideal column): χ² = 2.55 at s = 1, and **s ∈ [0.975, 1.0] within Δχ² = 4**. Without the
  pumping correction only s = 1.0 survives (χ² = 24, driven by n = 32–64, where pumping matters). At s = 0.5,
  χ² ≈ 1000.

**Correction to my own registration.** PREREG P3 wrote QM's Zeno number as 1 − cos^{2N}(π/2N). That is the
probability of having left + at *any* step, not the probability that the final outcome is −, which is what
Itano measured. The first run printed that wrong column and made I(1) look discrepant at N = 2 (0.50 vs "0.75").
The model was right and my benchmark was wrong. Kept on disk. It is the 2026-09-18 memory again ("read the
registration text before executing it"), this time in a formula rather than a γ.

### 4. Ideal negative measurements: "a detector that didn't click still synchronised"
The protocol of Knee et al. 2012 and Robens et al. 2015 (PRX 5, 011003: single Cs atoms in a quantum walk, 6σ LG
violation using ideal negative measurements) couples the detector to one mode only and keeps the no-click runs.
- If a no-click run still counts as a phase-lock ("sync"): K = 1.5020 ± 0.0024 and ⟨Q₂Q₃ | no click⟩ = +0.4998,
  which is QM.
- If a no-click run leaves φ alone ("nosync", the natural reading of "no interaction"): K = 0.7533 and
  ⟨Q₂Q₃ | no click⟩ = −0.4992. That is the wrong sign, and the published violations refute it.

So reading I has to commit to something non-obvious: **synchronisation happens even when the detector couples to
the mode the system is not in.** In Robens et al. that means synchronising with the atom's *absence* at a
different lattice site. A pattern ontology can say this (the pattern extends over both sites). But it has to say
it, and it is Elitzur–Vaidman in synchronisation vocabulary. Knee et al. 2016 (Nat. Commun. 7, 13253, flux
qubit) ran control experiments on classical states and excluded "theories that deny coherent superpositions" by
~84 s.d. Model I passes those controls: resetting an eigenstate disturbs nothing. It passes *because* its ontic
state is φ, which is a coherent superposition in other words.

### 5. What every no-go forces, and that it is the same thing
- **KS** (Peres–Mermin, executed 2026-07-08, 0/512): mode-valued ontic states → excluded.
- **PBR**: if the ontic state were the mode (±) alone, non-orthogonal preparations would share ontic states, so
  it would be ψ-epistemic → excluded under preparation independence. With φ as the ontic state it is ψ-ontic →
  allowed.
- **LG + Zeno**: mode-valued ontic states with non-invasive sampling → refuted. φ with a full reset → QM.

**All three theorems push the same way. They do not refute "scanning". They force the ontic state to be the phase,
not the mode, and they force measurement to act on the phase as a Lüders projection.** What is left of "at each
instant the system is in one mode" is a fast-time decoration. No downstream statistic depends on which mode the
system was in between syncs. That decoration is where the analogy's intuitive appeal lives, and it is exactly
the part the data make idle.

### 6. Where testable content could still live
Only in a **finite scan period T_scan**. For example: Born-rule deviations for measurement windows shorter than
T_scan, or stroboscopic detectors whose phase correlates with the scan. The archive gives two candidate clocks:
Planck-frequency Level-0 ticks (unreachable) and, by implication, pattern-intrinsic (Compton-scale) frequencies.
Neither is registered. Until a T_scan is stated, reading I has no parameter that QM lacks. That is the
pre-registered ADMISSION branch (PREREG "decision made before reading data").

### Scorecard (PREREG ee7f509)
| # | prediction | result |
|---|---|---|
| P1 | N: K ≤ 1 at all θ | held (max 0.9907) |
| P2 | I(1): K(π/3) = 1.50 ± 0.02, QM-matching on the grid | held (1.5035; worst 2.10 MC σ) |
| P3 | N: no Zeno; I(1) = QM | held for the models. **My registered QM formula was wrong** (see §3) |
| P4 | negative measurement doesn't rescue non-invasiveness | held *conditional on* "sync on no-click". The alternative is refuted by data, not rescued |
| P5 | 0.3 < s* < 0.7 | **refuted** (LG threshold s ≈ 0.15; Zeno threshold s ≥ 0.975) |
| P6 | N refuted; I QM-equivalent; not a seventh refutation | held (see Implications) |
| P7 | an LG violation > 5σ with ideal negative measurements exists | held (Robens 2015, 6σ; Knee 2016, 84 s.d. with clumsiness controls) |

## Implications for the Site
1. **`/two-reframes` states the refuted reading as the claim.** The blockquote "Nothing about the screen
   changed…" and "The claim is not metaphorical … What we call measurement is sampling" together make reading N.
   Itano 1990 refutes it at 40σ (n = 8). The same page's mapping row "Near refresh rate → Measurement
   disturbance" gestures at invasiveness but ties it to sampling rate, not to a reset. Sampling rate can't produce
   Zeno: model N's final-sample distribution depends only on φ at the final time.
2. **`/key-claims` (added 2026-09-21) says "Nobody has yet set the claim against [Kochen–Specker, PBR]."** That is
   wrong for KS: the Peres–Mermin execution (2026-07-08, 0/512) is on `/two-reframes`. The same sentence frames
   Leggett–Garg as "the kill test it must pass". LG is the wrong instrument: it constrains only s ≥ 0.15, and the
   framework's own "measurement is synchronization" escapes it. Zeno is the sharper test.
3. **Counting.** I do *not* propose a seventh refutation. Reading N is carried by an analogy sentence and a site
   paragraph, not by a ledger row. The canonical SPINE heading is reading I. Counting N would book the gap between
   two sentences of one analogy as a registered prediction failing, which is the over-refutation pattern in
   `audit-refutations-as-hard-as-claims`. The right move is to delete the refuted sentence, not to count it.

## Action: Maintainer
- **P0** `/two-reframes`: the blockquote and "The claim is not metaphorical … measurement is sampling" assert
  non-invasive sampling. Replace with the measured form. Suggested: *"Read literally ('nothing about the screen
  changed'), the analogy is refuted: sampling that doesn't disturb the system predicts no quantum Zeno effect, and
  Itano et al. 1990 observed one (transition probability 0.194 ± 0.02 at 8 pulses, where non-invasive sampling
  predicts 1). The version that survives is 'measurement is synchronization': syncing resets the system's phase.
  Written out, that reset is QM's projection rule. See the finding."* Badge the paragraph `failed`
  (non-invasive reading) / `reparametrization` (phase-lock reading).
- **P1** `/key-claims:223–227`: (a) KS *has* been set against the claim (link the Peres–Mermin artifact).
  (b) Replace "Leggett–Garg … is the kill test it must pass" with: *"LG violations rule out the non-invasive
  reading; they can't rule out 'measurement is synchronization', which is invasive by definition. The quantum Zeno
  effect forces the synchronization to be a full phase reset (s ≥ 0.975 on Itano 1990), and a full reset
  reproduces standard QM exactly. The claim is an interpretation until it names a finite scan period."* Badge:
  keep "untestable as stated" only if it adds "…without a scan period". Otherwise `reparametrization`.
- **P2** Add a `site_lint` rule for "Nobody has yet set the claim against" near "Kochen".
- **P2** Glossary: "ideal negative measurement" and "quantum Zeno effect" (both now load-bearing).

## Action: Research core (back-annotation candidate for the maintainer to route)
SPINE's CRT section should choose between its two sentences. Recommended: keep "measurement is synchronization",
strike "Nothing about the screen changed", and add the admission: *the phase lock, written as a rule, is the Lüders
projection. What would distinguish it is a finite scan period, and none is stated.* Also add the commitment from
§4: a detector coupled to the unoccupied mode still synchronises.

## Open Threads
- **Three-level systems.** Budroni & Emary 2014 (from memory, unverified) show Lüders-bound violations (K > 3/2)
  for degenerate measurements. Does a phase-lock model with a 1-D phase handle qutrits, or does it need the full
  projective state? My guess is the latter, which would make the ontic state the full ψ.
- **Does any archive quantity fix T_scan?** If patterns cycle at Compton frequency, is there an existing
  stroboscopic or ultrafast measurement bound? This is the only door to a prediction.
- **Ballentine's 1991 Comment on Itano (page number from memory; Itano et al.'s Reply is PRA 43, 5168, verified by search) argued Zeno needs no collapse, only the measurement pulse's
  dynamical interaction.** That is reading I's stance exactly. So the prior-art classification of reading I is
  "Ballentine-style dynamical account of Zeno", not new ontology. Worth one line in `/key-claims` prior art.
- The partial-reset family is one parametrisation. A reset that randomises φ (dephasing) rather than pulling it
  toward the mode was not tried.
