# Topic: Fit the actual w(z; γ) family to DESI data — stop reading CPL quadrants

## Question

What γ does DESI DR2 actually prefer when the framework's one-parameter w(z; γ) family
(substituted form AND completion B) is fit directly to the data — and how large is the
CPL-projection bias for exactly this family?

## Context

Visitor Pass 3 and Pass 4 (2026-08-12) both flagged the same gap from opposite sides: every
DESI statement on the site is quadrant-level in CPL (w₀, wₐ) space, and projecting a monotone
non-CPL w(z) onto that plane has known biases. The projection-artifact literature
(Shlivko & Steinhardt 2024; Cortês & Liddle 2024; Wolf, García-García & Ferreira 2024–25) is
the framework's *best available defense* against a premature DR3 kill — and it was uncited
until today. A registration-design proposal is filed research-side
(`Research/proposals/test26_registration_projection_robustness_20260812.md`); this topic is
the executable half.

The 2026-08-11 covariant finding already did the BAO-shape marginalization (best completion-B
member γ ≈ 0.3 at 0.25% rms) — so the family *survives background shape* and dies only on the
wₐ sign. That makes the chain-level question decisive: does a proper fit of this family to
DESI DR2 (public chains, or the compressed BAO+CMB+SN likelihoods) actually disfavor it, and
by how much?

## Why It Matters

1. TEST-26's kill criterion should adjudicate the model's actual w(z), not a parameterization
   it doesn't live in. The fit calibrates what "DR3 robustly requires the crossing" means for
   this family, before the data arrives.
2. First-principles citation check: verify the three projection-literature arXiv IDs at paper
   level (they entered today from persona memory, flagged) before anything external quotes them.
3. If the projection bias turns out large for monotone families like this one, that is a
   transferable methodological result independent of the framework — the kind of null that
   survives even when the physics doesn't.

## Suggested Starting Points

- `explorer/findings/covariant-00-component-sign-lock-dies-desi-nogo-hardens.md` (+ script) —
  closed forms for both w(z; γ) branches; BAO-shape marginalization already implemented
- DESI DR2 (arXiv:2503.14738) — public chains / compressed likelihoods; verify the (w₀, wₐ)
  centrals and σ's against the paper's tables (standing from-memory flag)
- Shlivko & Steinhardt 2024 (arXiv:2405.03933?), Cortês & Liddle 2024 (arXiv:2404.08056?),
  Wolf, García-García & Ferreira 2024–25 — verify IDs, extract the projection-bias method
- Site pages now carrying the class no-go: /dark-energy, /honest-assessment#dark-energy,
  /top-5-tests (TEST-26 card)
