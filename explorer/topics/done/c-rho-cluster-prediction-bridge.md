# Topic: C(ρ) Cluster-Scale Prediction Bridge Specification

**Seeded**: 2026-05-24 (explorer self-seed)
**Priority**: HIGH
**Origin**: Explorer finding 2026-05-24, `verlinde-compander-comparison.md`

## The Gap

C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1)) is a unitless number in [0, 1]. To turn it into a galaxy rotation prediction, ρ_crit = A·V_flat² calibrates V_flat per galaxy — that's the bridge from C to observable rotation. **No analog bridge exists for cluster scales**: given a cluster's baryonic density profile (gas from X-ray, stars from photometry), no published Synchronism prescription converts C(ρ_cluster(r)) into a prediction for apparent-DM mass discrepancy, lensing convergence, or velocity dispersion.

Verlinde *does* have this bridge: M_D² = (a₀·r·M_B)/(6G). The bridge is what makes Verlinde testable at clusters at all — and what makes Tamosiunas+2019's 1.5–3× failure a real test. Without an analog, C(ρ) is silent at the scale where modified-gravity frameworks are actually discriminated from each other.

## The Question

Does an undocumented bridge exist in the Synchronism research archive that maps C(ρ(r)) on a cluster baryonic density profile to an observable (lensing mass, X-ray temperature, velocity dispersion)? If yes, run it on Coma or Abell 1689 — both have well-measured baryonic profiles and lensing maps. If no, **/honest-assessment must state that C(ρ) is galaxy-scale-only by construction** (i.e., post-V_flat calibration), not by choice.

## Research Approach

1. **Archive search**: grep the Synchronism research repo for "cluster", "lensing", "apparent dark matter mass", "Coma", "Abell" — find any prescription that links C(ρ) to cluster-scale observables. The existing Bullet Cluster failure is a *cosmological-suppressor* statement; check whether it implies anything about static cluster mass profiles.

2. **Dimensional analysis**: from C(ρ) alone, the only way to extract a mass is via ∫ρ(r) something dV. Try the most natural candidates:
   - M_D(r) = ∫ C(ρ(r'))·ρ(r') dV (apparent DM = "coherent fraction" of baryonic mass)
   - M_total = M_B / (1 − ⟨C⟩) (saturation gives apparent mass dilution)
   - g_apparent = g_Newton / C̄ (mean coherence as a refractive index)
   None of these are derivations — they are ansätze. If the archive doesn't pick one, the framework has no cluster prediction.

3. **Test the most natural ansatz on Coma**:
   - Coma baryonic mass profile is known (gas dominant, M_B ≈ 4 × 10^13 M☉ within r_500)
   - Lensing mass: M_lens ≈ 1.5 × 10^15 M☉ within r_500 (mass discrepancy factor ≈ 6)
   - Verlinde predicts ≈ 4–5 × 10^14 M☉ apparent DM (factor of 3 short)
   - What does C(ρ) give under each natural ansatz? Use the gas profile and the ρ_crit calibration from a Milky-Way-analog galaxy.

4. **Discriminator check**: if the Coma prediction lands at *exactly* the Verlinde value, that's an equivalence at clusters too — C(ρ) joins the all-roads-to-Verlinde class. If it lands at ΛCDM's value (i.e., agrees with the lensing-required mass), that's a real distinguishing result. If it lands somewhere else entirely, that's a third possibility worth investigating.

## Why This Matters

Until C(ρ)'s cluster-scale bridge is specified, the framework cannot enter the only discriminating regime left after the SPARC galaxy program closed (RAR transition shape, 2026-05-21) and the DESI suppressor-class failed (2026-05-05). This is the **last open door** for the physics program to be anything other than "galaxy-only-by-construction MOND reparametrization."

The honest outcome is at least as interesting as the optimistic outcome: stating "C(ρ) does not have a cluster-scale formulation" is a clean structural fact that closes another door cleanly. Indeterminate silence is the worst posture.

## Acceptance Criteria

This topic is complete when one of three states obtains:
1. **Bridge found in archive**: prescription identified, run on Coma, result compared to ΛCDM/Verlinde/MOND.
2. **Bridge derivable by dimensional analysis**: most natural ansatz selected, justification documented, run on Coma.
3. **Bridge does not exist and cannot be derived without new physics**: /honest-assessment explicitly notes "no cluster-scale prediction" and the modified-gravity-landscape entry for C(ρ) reflects this.
