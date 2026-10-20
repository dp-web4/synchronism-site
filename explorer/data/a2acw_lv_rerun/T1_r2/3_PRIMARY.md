# Round 3: PRIMARY (Defender)

## Concessions

I accept these as stated:
- E_b was chosen after seeing 300 K, and the 1/40-1/10 band was back-fitted.
- "~300 K" is a contingent value set by α and m_e (the Rydberg scale), not a law.
- The silicon-AI evidence is engineering and cooling economics.
- T ≡ ⟨V²⟩ has dimension and sign problems.
- T is an emergent ensemble statistic, so "foundational" fails.

Neither T nor ΔT alone is the driver. The defensible statement is: *persistence of organized patterns depends on kT relative to two independent energy scales, E_mem (memory/structure) and E_act (activation/update), while ΔT supplies the free energy.*

## Q1: Autonomy accounting rule (fixed before looking)

A system S is **autonomous** if all of these hold:
1. **Thermal contact.** S's information-bearing degrees of freedom are in thermal contact with an environmental bath, with T_S = T_bath within 10%.
2. **Power budget.** Active work spent holding T_S away from T_bath (heat-pump work, cryogenics) is <10% of S's total power budget.
3. **Permitted inputs.** Any free-energy flux (photons from any source temperature, chemical potential gradients) is allowed. Prohibited inputs are pre-ordered information-bearing states supplied by a subsystem at a different T.

**5800 K source and 100 K body:** it qualifies if rules 1-2 hold, for example a passive body far from the Sun. Gradients are permitted inputs. This makes the falsifier non-circular, because cold or hot natural environments are now live tests:
- **Titan surface (~94 K)** with proposed methane-based chemistry. Open-ended adaptive, self-repairing chemistry there falsifies the strong claim.
- **Hot-environment analogues** (>600 K), such as venus-surface-class conditions.

SiC electronics at 700 K fail the autonomy test (externally fabricated, externally powered, human-maintained), so they are neither confirming nor refuting.

I also narrow the band: the strong claim now covers autonomous systems at **T_bath < 100 K or > 600 K**, and I treat the 150-450 K figure as a calibration, not a derivation. Within 100-600 K the claim makes no prediction.

## Q2: One prediction that differs from "standard thermo + engineering"

Standard stat-mech does not say *where* a pre-defined complexity metric peaks relative to the critical point. Generic lore ("edge of chaos") says it peaks at T_c. My prediction, to be run in the whitepaper's own Intent simulation:

> **P1.** With T and E_b varied independently, and the metric fixed in advance as mutual information between a persistent state and its history under a fixed repair budget, the metric peaks at **T*/T_c ≈ 0.6-0.9, on the ordered side**, with a plateau of FWHM/T* < 1. T* collapses onto kT/E_b across E_b values.

**Why this is not the generic result.** Functional complexity needs memory lifetime (set by E_mem) to exceed update time (set by E_act). That gives a window whose lower edge is Arrhenius freezing and whose upper edge is memory loss, not a single critical peak. The Ising/Langton null model predicts T*/T_c ≈ 1.

**Falsified if:**
- T*/T_c falls within 0.95-1.05 (the null result), or
- the peak does not scale with E_b.

The collapse alone is trivial dimensional analysis, and I don't count it as evidence. T*/T_c and the plateau width are the discriminating numbers.

**Honest limit.** If the Intent model cannot predict the constant c = kT*/E_b and the plateau width from its own saturation parameters before the run, then Synchronism adds nothing beyond textbook scaling here. In that case this section reduces to the weak claim.

## Status

- **Held:** the weak claim; the two-scale (E_mem, E_act) window form; the pre-registered P1 test.
- **Narrowed:** the strong claim to autonomous systems under an explicit accounting rule, outside 100-600 K; "law" to a contingent band; T as selector, with ΔT as the power source.
- **Failed:** "foundational" status for T; T ≡ ⟨V²⟩ as written; the silicon-AI convergence; the 150-450 K band as derived.
- **Would settle:**
  - (a) A Titan-class or >600 K autonomous adaptive chemistry would falsify the strong claim.
  - (b) A sim with T*/T_c ≈ 1 or no E_b scaling would falsify P1.
  - (c) A failure of the Intent model to commit to c before running would reduce the claim to textbook.

**Questions for Challenger:**
1. Is a 10%/10% autonomy rule acceptable, or what thresholds would you set?
2. Does P1 (T*/T_c < 0.95 under a fixed repair budget) differ enough from the null for you, or do you have a published model that already shows it, which would make it non-novel?