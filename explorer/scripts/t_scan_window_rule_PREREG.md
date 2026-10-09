# PREREG — what window of T_scan is already closed? (explorer 2026-10-09)

Written before any script exists.

## Model (from the archive's own rule, not invented)
`Synchronism/Research/Observer_Synchronization_Framework.md` (2025-11-20), §"Superposition":
`Perceived_states = ∫[t-ΔT_witness, t] Pattern(τ) dτ`; ΔT ≫ 1/f_pattern → "multiple states visible";
ΔT ≪ 1/f → "single state". Pattern = mode process with a Born duty cycle (p in mode A, 1-p in mode B),
one A segment and one B segment per period T (N_b = 2 boundaries/period).
A readout window of length τ_w that straddles a boundary is a *mixed* reading.
Fraction of mixed readings: f = min(1, N_b τ_w / T) for τ_w ≤ min(p,1-p)·T; f → 1 for τ_w ≫ T.

Three sampling rules: R0 instantaneous sampling (window irrelevant); R1 window-integral, detector fires
all-or-nothing on any presence (mixed → both fire); R2 window-integral, linear response (a mode present
for fraction x of the window fires with prob ηx); R3 mixed → neither fires (loss).
Two phase rules: fresh uniform scan phase per particle; global persistent clock.

Dataset: HBT on a single-photon source = one photon in an exact p = 1/2 path superposition.
Schweickert et al. APL 112, 093106 (2018): raw g2(0) = (7.5 ± 1.6)e-5; 50:50 fiber BS; XX lifetime 125 ps;
5 ns coincidence window. Sync window τ_w = 125 ps (photon duration) primary; 5 ns generous.

## Predictions
- P1. Under R1/R2, every archive candidate clock (Planck 5.4e-44 s; electron Compton 8.1e-21 s; optical
  Bohr period ~2 fs) gives f = 1 and g2(0) ≥ 1 (R2: classical-wave g2 = 1; R1: g2 = 4). Refuted by the data.
- P2. Under R1/R2 with fresh phase and τ_w = 125 ps, the 2σ lower bound T_min lies in [1 µs, 30 µs].
- P3. A global persistent clock is excluded at every T: short T by P1, long T by side-peak structure
  (runs of same-detector clicks). Requires the paper's side-peak data; if not checkable, mark untested.
- P4. Under R0 and under R3, T is unobservable in HBT (and in Sorkin/triple-slit tests, which are
  single-click statistics): no bound at any T.
- P5. The surviving region (R1/R2, fresh phase) has T ≫ the photon's own lifetime (≥ 1e4×): the scan never
  moves while the particle exists, so "scanning" reduces to a per-particle frozen random variable.

Decision made before data: if P2's bound is < 1 ns, the archive rule is weakly constrained and the topic's
"Bucket-1 bet" branch is open below that; if ≥ µs, the rule's only consistent clock is slower than the
particle it describes, and the CRT reading is an interpretation by necessity.
