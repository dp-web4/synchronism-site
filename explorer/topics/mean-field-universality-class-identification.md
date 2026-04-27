# Explorer Topic: Mean-Field Universality Class Identification

**Seeded by**: Maintainer, 2026-04-27  
**Priority**: High — this is a unifying diagnosis, not just a topic  
**Research proposal filed**: `Synchronism/Research/proposals/coherence_function_meanfield_diagnosis.md`

---

## The Trigger

Pass 3 graduate student (2026-04-27 visitor session) made a sharp observation: C(ρ)'s three documented failures are not separate failures — they are one:

> *"A `tanh` order parameter without fluctuation corrections. Mean-field has known failures: β_MF = 0.5 vs β_3D-Ising ≈ 0.326, ν_MF = 0.5 vs ν_3D-Ising ≈ 0.630, and gross errors on first-order transitions (melting points). A factor-of-2 mismatch on critical exponents is the diagnostic signature of uncorrected mean-field theory."*

The site currently lists these as separate bullets in a failure list. Naming the unifying cause would be more credible.

---

## The Research Question

**What universality class is Synchronism's coherence transition in, and do Ginzburg-Landau fluctuation corrections fix the documented failures?**

Specific sub-questions:
1. What Landau free energy does `C(ρ) = tanh(γ log(ρ/ρ_crit + 1))` arise from?
2. What is the Ginzburg parameter for C(ρ) near ρ_crit?
3. Does C(ρ) fall in the Ising universality class (β≈0.326, ν≈0.630, η≈0.036)?
4. Do one-loop RG corrections reduce the ~2× critical exponent error?
5. What is the upper critical dimension of the Synchronism framework?
6. Is the melting-point error a first-order failure (separate from the critical-exponent error)?

---

## Why This Matters

Two payoffs:

**Diagnostic clarity** — the site can say: "C(ρ)'s critical-exponent and melting-point failures are the expected failures of mean-field theory without RG corrections. This is a known class of failure, not scatter."

**Research program** — if the GL expansion gives corrected exponents that match observation, the framework has a path to quantitative improvement without changing its qualitative picture. If the expansion fails (no underlying Hamiltonian), the scaffolding diagnosis is confirmed: C(ρ) is a phenomenological S-curve, not a statistical-mechanics object.

---

## Connection to Existing Work

- MIPT connection (2026-04-11 finding): MIPTs are the non-mean-field successors to C(ρ). Understanding what universality class C(ρ) belongs to clarifies whether MIPTs are the same theory (corrected) or a different theory.
- The two-C problem (Hill vs tanh): a GL analysis would clarify whether the Hill form is a better Landau order parameter (it has the right asymptotics for second-order transitions) or just a different phenomenological ansatz.
- Site update: `/chemistry-limitations` should connect the three failure types once the diagnosis is confirmed.

---

## Suggested Approach

1. Search the archive for sessions that discuss "mean-field" or "Landau theory" in the Synchronism context
2. Attempt the Landau free-energy construction: for `m = tanh(β·h)`, the parent free energy is `F = -m·h + β⁻¹ arcosh(m)`. What is h and β in terms of γ and ρ_crit?
3. Compute the Ginzburg criterion from the resulting free energy
4. Apply one-loop Wilson-Fisher RG in 3D — what exponent corrections does it predict?
5. Test corrected exponents against the chemistry data
6. Document the null result explicitly if the expansion fails
