# Finding: T_scan under the archive's own window rule. Every candidate clock predicts g²(0) ≈ 1 for single photons, and the surviving scan is ≥ 10⁴ times slower than the photon it describes

## Origin
Topic `what-constrains-t-scan-today.md` (maintainer 2026-10-09, from the researcher persona on /two-reframes).
PREREG `5139489`, committed before the script. Script: `scripts/t_scan_window_rule_hbt.py`, output in
`scripts/t_scan_window_rule_hbt_output.txt`.

## Summary
The topic said: "A model that leaves the observable unspecified is the finding." It turns out the archive does
specify one. `Research/Observer_Synchronization_Framework.md` (2025-11-20) writes the detector as a window integral,
`Perceived_states = ∫[t−ΔT, t] Pattern(τ) dτ`. Windows much longer than the cycle are said to show "multiple
states", and short windows a "single state". That rule makes T_scan observable. Its cleanest test is a
single photon on a 50:50 beam splitter, which is an exact p = ½ path superposition. Any window that straddles a mode
boundary gives a mixed reading. The scorecard:

- **Every candidate clock is refuted.** The Planck tick, the electron Compton period and both Bohr periods (optical
  and hyperfine) are all shorter than a 125 ps photon. Under any window rule they predict g²(0) ≈ 1: classical-wave
  splitting. Schweickert et al. (2018) measure 7.5 × 10⁻⁵, raw. This is Grangier–Roger–Aspect 1986 again, now
  turned against the framework's own detector rule.
- **What survives** is a scan period of **T_scan ≥ 1.6 µs** (linear response) to **≥ 9.4 µs** (all-or-nothing),
  with the 125 ps photon duration as the window. With the generous 5 ns window it rises to ≥ 62–374 µs. Either way the
  scan is 10⁴–10⁵ times slower than the photon's whole existence. The beam never moves while the photon exists. The
  "scan" therefore reduces to a frozen random variable drawn once per particle.
- **A global persistent clock fails at every T.** Below about 9 µs it fails on g²(0). Above about 12.5 ns, the
  same-detector run structure would ramp the side peaks linearly in k, and the measured side peaks are uniform.
- **The archive's escape is to sample instantaneously, which makes T_scan idle at every value.** That rule (R0)
  contradicts the archive's own integral.

So the topic's two branches are "every T_scan above the Planck time is excluded" (interpretation by necessity) and
"a window survives" (registrable bet). The answer is a third shape. A window survives only by giving up the
physical clocks the archive names, and it pays the cost of turning scanning into a static hidden variable. One cheap,
discriminating measurement remains (§6). The framework has not committed to it, so it is a *candidate* bet, not a
registered one.

## Research Notes

### 1. The model is the archive's, not mine
Observer_Synchronization_Framework.md §"Superposition" says the window rule "is not metaphorical — it's the literal
mechanism". Its Phase-3 table reads: slow sampling (ΔT ≫ 1/ω) gives superposition, ΔT ≈ 1/ω gives "destabilization",
and ΔT ≪ 1/ω gives a single localized state. I take its "Pattern(τ)" as a mode process with a Born duty cycle
(fraction p in mode A, one A segment and one B segment per period T). The duty cycle is the assumption that the
2026-09-21 CRT finding showed nobody has derived. A readout window τ_w that straddles a boundary contains both
modes. For τ_w ≤ min(p, 1−p)·T the fraction of such windows is f = 2τ_w/T. Monte Carlo confirms this to <2 % at
every w ≤ 0.1. For τ_w ≫ T, f = 1.

What a detector does with a mixed window is not stated, so I scored all four options:
| rule | mixed window → | g²(0), small w | g²(0), w ≫ 1 |
|---|---|---|---|
| R0 | instantaneous sampling at window opening (window irrelevant) | 0 | 0 |
| R1 | both detectors can fire (any presence) | ≈ 4f | 1 |
| R2 | linear response (mode present for fraction x fires with ηx) | (2/3) f | 1 |
| R3 | neither fires (loss) | 0 | no detections at all |

### 2. Data: one photon, exact p = ½
Schweickert et al., APL 112, 093106 (2018). These are GaAs quantum-dot photons under two-photon excitation, sent
through a fibre 50:50 BS onto two SNSPDs. The paper gives "g(2)(0) = (7.5 ± 1.6) × 10⁻⁵" raw, from 21 ± 5
coincidences against an average side peak of 279,171. It gives "a XX lifetime of 125 ps", a 5 ns window ("~40 times
longer than the XX lifetime"), and a 12.496 ns peak spacing at 80.028 MHz. I fetched these values verbatim. The
uniformity of the side peaks comes from a fetch *summary* ("consistent heights without bunching"). I did not get a
verbatim sentence for it, so P3 below is provisional on that.

I chose HBT over trapped-ion readout on purpose. Published readout fidelities (for example Myerson et al. 2008,
99.991 %, 145 µs) are conventionally measured on **eigenstate** preparations. The model predicts f = 0 at p ∈ {0,1}.
I did not verify Myerson's preparation protocol. In the model, f is flat in p on the open interval and vanishes at
the endpoints. So the standard benchmark statistic would cancel the effect by construction (memory: *check whether
the statistic cancels the effect*). A beam splitter fixes p = ½ in hardware.

### 3. Results (`t_scan_window_rule_hbt_output.txt`)
2σ ceiling g² ≤ 1.07 × 10⁻⁴ → f ≤ 2.67 × 10⁻⁵ (R1) or 1.60 × 10⁻⁴ (R2).
| window τ_w | R1 bound | R2 bound |
|---|---|---|
| 125 ps (photon duration) | T ≥ 9.35 µs | T ≥ 1.56 µs |
| 5 ns (coincidence window) | T ≥ 374 µs | T ≥ 62 µs |
| 1 µs photons, Farrera+2016 (g² = 0.17 ± 0.02; post-hoc) | T ≥ 38 µs | T ≥ 6.4 µs |

The candidate clocks with τ_w = 125 ps, under R1/R2:
| clock | T | w = τ_w/T | predicted g²(0) | data |
|---|---|---|---|---|
| Planck tick | 5.4e-44 s | 2e33 | 1.00 | 7.5e-5 |
| electron Compton h/mc² | 8.1e-21 s | 1.5e10 | 1.00 | 7.5e-5 |
| optical Bohr period | 2e-15 s | 6e4 | 1.00 | 7.5e-5 |
| hyperfine Bohr period | 1.1e-10 s | 1.1 | 0.99–1.00 | 7.5e-5 |

Under R3 the same clocks predict *no photon is ever detected*. So every window rule kills them, and only R0 leaves
them alive.

Global persistent clock (photons sample one clock at 12.5 ns cadence, with exponential emission jitter of 125 ps):
| T | g²(0) | side peaks at k = 1, 2, 5, 10, 20 |
|---|---|---|
| 1 ns | 0.21 | 1.14, 0.86, 1.14, 0.86, 0.86 |
| 1 µs | ~0 | 0.05, 0.10, 0.25, 0.50, 1.00 |
| 10 µs | ~0 | 0.005 … 0.10 (linear ramp) |

Uniform side peaks exclude the ramp for T ≳ 12.5 ns, and g²(0) excludes T ≲ 9 µs. The two exclusions overlap,
so a global persistent clock is ruled out at every T. A clock re-randomised for each particle is not a clock.

### 4. Scorecard (PREREG `5139489`)
| # | prediction | result |
|---|---|---|
| P1 | candidate clocks give g² ≥ 1 under R1/R2, refuted | **held.** The registration said "R1: g² = 4". That is wrong: under R1 the side peaks inflate too, so g² → 1. The refutation is unchanged |
| P2 | T_min (R1/R2, τ_w = 125 ps) in [1, 30] µs | **held** (1.56 and 9.35 µs) |
| P3 | global clock excluded at every T | **held, provisional** on the paraphrased side-peak uniformity |
| P4 | under R0 and R3, T unobservable in HBT | **half refuted.** R0 is idle as predicted. R3 is *not* idle: it predicts total loss for w ≫ 1, so it also kills the candidate clocks (through loss, not g²). I registered R3 wrong |
| P5 | the survivor has T ≫ photon lifetime (≥ 10⁴×) | **held** (1.2 × 10⁴ to 7.5 × 10⁴ × τ_w) |

The pre-written decision rule said that if the bound were ≥ µs, the rule's only consistent clock is slower than the
particle it describes. That branch fired.

### 5. What the persona's candidate constraints actually do
- **Sorkin / triple-slit κ.** κ tests the statistics of single clicks. Under R0 these are exactly Born, and under
  R1/R2 the window effect appears as multi-detector events, not as a non-quadratic P(x). So κ bounds are not the
  right instrument: they cancel the effect. Coincidence (HBT) data are.
- **Hughes–Drever / clock isotropy.** These bind only if T_scan enters energies or a preferred frame. Nothing in
  the window rule does that. The prior LIV findings already cover the grid frame.
- **Door-3 heat budget.** That finding is about intrinsic decoherence rates, a different mechanism. It needs no
  change here.
- **Attosecond / short-pulse Zeno.** These would matter only if T_scan were ~as. Under any window rule that region
  is already excluded by every photon detection (§3).

### 6. The one candidate bet left
Under R1/R2 with fresh phase per particle, the mixed-window fraction is f = 2τ_w/T. It is linear in the window,
flat in p on (0,1), and zero at the eigenstates. **Prediction: background-subtracted g²(0) of heralded or on-demand
single photons rises linearly with wavepacket duration, with slope 4/(3T) (R2) or ≈ 8/T (R1). QM predicts no rise.**
Ensemble sources already tune the duration over three orders of magnitude, up to 10 µs (Farrera+2016). Farrera et
al. do see g² rise from 0.10 to 0.17 for longer photons and attribute it to dark counts in longer gates. If the
whole rise were the R2 term, it would imply T ≈ 19 µs, which Schweickert's R2 bound (≥ 1.6 µs) does *not* exclude.
I do not claim that as a detection. The mundane explanation is stated, quantitative, and the obvious one. It is a
cheap discriminator anyway: an accidental-subtracted g²(τ_photon) series from 10 ns to 10 µs would push T past
~10⁻³ s or find a slope. Before anyone runs it, the framework would have to adopt R1 or R2, which it has not done.

## Implications for the Site
1. **/two-reframes and /quantum-predictions** should state that the archive's own detector rule
   (Observer_Synchronization_Framework, window integral) *is* a model with an observable. Under it, the Planck and
   Compton scan clocks are refuted by single-photon antibunching (g² = 7.5 × 10⁻⁵ against a predicted ≈ 1). Today the
   pages say no T_scan is named. That is true, but the clocks the archive does name are already dead under its own
   rule.
2. **A clean sentence for the honest assessment:** "A scan period survives only if it is ≥ 10⁴ times longer than the
   photon it scans. The 'scan' then never moves while the particle exists."
3. **The Phase-3 table** in Observer_Synchronization_Framework.md (slow sampling → superposition) is refuted as
   written for every ω the archive offers. That is a back-annotation candidate.

## Action: Maintainer
- /two-reframes (CRT/Zeno section): add a short "T_scan under the window rule" box with the two numbers (candidate
  clocks predict g² ≈ 1, measured 7.5e-5; survivor T ≥ 1.6–9.4 µs ≫ 125 ps photon). Badge: `audited-negative` for the
  Planck/Compton clocks under R1–R3. The R0 branch stays `untested`; it is idle, not refuted.
- Back-annotate `Synchronism/Research/Observer_Synchronization_Framework.md` Phase-3 table: the slow-sampling
  regime predicts classical splitting of single photons, refuted (Grangier 1986; Schweickert 2018).
- Optional /quantum-predictions row: the g²-vs-duration slope as a *candidate* (unregistered) bet, conditional on
  the framework adopting R1/R2.

## Open Threads
- Is there a verbatim side-peak range in Schweickert 2018 (how many k shown)? That would firm up P3.
- Trapped-ion readout at p = ½ with raw count histograms (plateau weight versus window length) would test the same
  f = 2τ_w/T at ms windows. If the plateau is ≤ 10⁻⁴ at ~1 ms, that pushes T to ≳ 10 s. Are such histograms published?
- Does fresh-phase-per-particle survive in Bell tests? For an entangled pair it must be a joint variable, so it is
  nonlocal. That is covered by the locality no-go but not tied to this model explicitly.
- Under R0, "scanning" is a non-contextual decoration that KS/PBR already force onto φ (09-21 finding). Should the
  site say outright that the CRT section has no T_scan-dependent content under any rule that keeps the named clocks?
