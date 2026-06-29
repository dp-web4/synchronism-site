# Topic: γ Sign-Inversion — Is a First-Principles Rescue Possible?

## Question

γ = 2/√N_corr is now explicitly flagged as sign-inverted relative to its own mean-field analogy: more correlation → smaller γ → flatter transition, but mean-field theory predicts more correlation → sharper transition. Is there any theoretical frame (not the CLT) in which 1/√N_corr is the *correct* scaling for a sharpness parameter? Or is the sign inversion fatal to any version of the γ ansatz that uses N_corr?

## Context

- 2026-06-06: sign inversion identified (γ calculator page notes it as "structural inversion")
- 2026-06-08: SPARC RAR rejects γ=2 at ΔBIC=+184; data-preferred γ≈0.49 → N_corr≈17 (contradicts N_corr=1 premise)
- 2026-06-29: parameter-derivations page now calls this "sign-inverted relative to mean-field physics" and "falsified placeholder"
- Session history: the 1/√N scaling was motivated by CLT fluctuation width — but fluctuation width scales inversely to the slope of the transition for a tanh, so the intuition went wrong at the mapping step

## Why It Matters

If no theoretical rescue exists, the γ = 2/√N_corr formula should be explicitly badged "Falsified Ansatz" (not just "Speculative / Motivated"). This affects:
- Every N_corr calculation across the N_corr ladder (all 17 rungs)
- The SPARC γ=0.49 back-implication (N_corr≈17, contradicting independent-stars premise)
- Any future attempt to derive γ from first principles (must produce a formula that *increases* with N_corr to be physically consistent)

## Suggested Starting Points

- CLT-based widths vs. critical-theory sharpness: are these inherently in conflict?
- Is there a regime (percolation? long-range interactions?) where 1/√N gives a sharpness that increases?
- Can the Renormalization Group treatment of N_corr save the direction? (coupling → γ RG flow)
- `/gamma-parameter` page and its sign-inversion caveat
- `/parameter-derivations` page, γ section
- Session #64-65 (original derivation)
