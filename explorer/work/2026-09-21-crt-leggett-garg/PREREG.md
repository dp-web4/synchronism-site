# PREREG — CRT temporal scanning vs Leggett–Garg (+ a side check: TEST-04a five-bin Δχ² on DR1)

Filed 2026-09-21 by the explorer, **before any simulation script exists and before any experimental number is
fetched.** Topics: `temporal-scanning-vs-leggett-garg.md`; side: `test04a-five-bin-growth-statistic-on-dr1-before-dr2.md`.

## Exposure declaration
- I have read `Synchronism/Research/proposals/crt_scanning_ks_pbr_theorem_level_exclusion.md` (Peres–Mermin executed
  2026-07-08, 0/512). So the site's 2026-09-21 sentence "Nobody has yet set the claim against [KS, PBR]" is already
  known to me to be a propagation gap for KS. Nothing in the archive mentions Leggett–Garg.
- From memory, unverified: Itano et al. 1990 (quantum Zeno, Be⁺ ions, up to 64 pulses); Palacios-Laloy et al. 2010
  (weak-measurement LG, transmon); Knee et al. 2012 (NMR, ideal negative measurement), 2016 (flux qubit, clumsiness
  controls); Robens et al. 2015 (atom quantum walk, ideal negative measurement); Montina 2012 (minimal invasiveness).
- I already suspect the answer (worked out before writing this): LG does not reach the scanning picture as SPINE
  states it, because SPINE says "measurement is synchronization", i.e. invasive. I am registering the split and the
  numbers so that suspicion can be wrong in a specific place.

## Decision made before reading data (topic asks for this)
The CRT section of SPINE contains two sentences that pull apart:
  (N) "Nothing about the screen changed — only your synchronization timing changed."  → non-invasive sampling.
  (I) "measurement is synchronization … a phase-lock event."                           → invasive.
**An invasiveness escape counts as an ADMISSION, not an evasion, iff the invasive rule, once written down, reproduces
QM's sequential statistics with no free parameter left for a new prediction.** It counts as an evasion with content
only if the rule leaves a measurable parameter (e.g. finite scan period) that QM does not have.

## Models (to be simulated by Monte Carlo, qubit precessing at ω, measurements of σ_z at t, t+τ, t+2τ; θ = ωτ)
- Hidden state: phase φ (Bloch angle on the precession great circle) + fast scan. Between measurements φ advances by
  θ. At a measurement the system is sampled at a detector instant uniform over the scan cycle; it is in mode + a
  fraction cos²(φ/2) of the cycle (the Born duty cycle — assumed, it is not derived anywhere in the archive).
- **Model N**: sampling does not change φ.
- **Model I(s)**: after sampling mode m, φ → (1−s)φ + s·φ_m (φ_m = 0 or π), s ∈ [0,1]; I(1) = full phase-lock.
- Negative-measurement variant of I(1): detector coupled to − only; a no-click run is still a sampling event.

## Scored predictions
P1. Model N: K = C₁₂ + C₂₃ − C₁₃ ≤ 1 for every θ (max over a θ grid within MC error of ≤ 1).
P2. Model I(1): K(π/3) = 1.50 ± 0.02 and K(θ) matches QM 2cosθ − cos2θ at every θ on the grid within 3 MC σ.
P3. Model N predicts NO quantum Zeno effect: transition probability after a π rotation with N interleaved
    measurements stays 1 for all N. Model I(1) gives 1 − cos^{2N}(π/2N) (N = 64 → ≈ 0.038), i.e. QM.
P4. The ideal-negative-measurement variant of I(1) gives the same K as I(1) (negative measurement does not make the
    scanning model non-invasive, because the system spends part of the window in the detector's mode).
P5. Minimal reset strength s* for K(π/3) > 1 in I(s): I guess 0.3 < s* < 0.7. (A pure guess; may fail.)
P6. Verdict for the site: reading N is REFUTED by existing data (Zeno more decisively than LG); reading I survives LG
    and is QM-equivalent for single-basis sequential measurements, so its "one mode at each instant" content is
    dynamically inert. Registered expectation: this is not a seventh refutation (N is an analogy sentence, not a
    ledger claim).
P7. At least one LG experiment reports a violation beyond 5σ with ideal negative measurements (checked after P1–P6
    are computed).

## Side check — TEST-04a five-bin Δχ² on DESI DR1 (archive's transcription of DESI 2024 V Table 9, ratios to fid)
Δχ²(S107 − ΛCDM) = Σ[(r−s)² − (r−1)²]/σ², bins independent, σ = the side facing the model (asymmetric errors).
P8. Five-bin (LRG1, LRG2, LRG3, ELG2; S107's ELG_low has no DR1 FS counterpart, so four bins exist) Δχ² > +4
    (ΛCDM preferred); my mental arithmetic says ≈ +5.
P9. Expected Δχ² under ΛCDM truth at DR1 σ is < 9 (the four-/six-bin form had < 3σ expected separation at DR1).
P10. σ scale factor (σ_DR2/σ_DR1) needed for Δχ² > 9 with 80 % power under ΛCDM truth is < 0.6 — i.e. tighter than
    the naive DR2 volume scaling (~0.65–0.75), so DR2 is registered as likely-underpowered even in multi-bin form.
