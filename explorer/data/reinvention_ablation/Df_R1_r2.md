**Short answer:** I found no published model that uses C(x) = tanh(γ ln(1+x)) as a "coherence function". The result itself looks like a known kind of fit, though. It is an ordinary MOND-type interpolating function with a free slope, and it is not a new empirical finding.

**What the construction reduces to**
- g_obs = g_bar/C(x) is the standard MOND form g_obs = g_bar·ν(g_bar/a₀). Here ν = 1/tanh(γ ln(1+x)).
- Two limits are checked by hand. At large x, tanh → 1, so g_obs → g_bar. At small x, C ≈ γx, so g_obs ≈ a₀′/γ, which is constant. For this to match the deep-MOND limit g_obs = √(g_bar·a₀), C would need to scale as √x. It scales as x, so the low-acceleration limit is wrong. The fit works only because SPARC points in the deep regime sit at moderate x. The fitted γ = 0.49 ≈ 1/2 is then probably just the data pulling the slope toward the deep-MOND exponent. (This is my own inference and is unverified.)
- McGaugh, Lelli & Schombert (2016), PRL 117, 201101 (arXiv:1609.05917), fit the SPARC RAR with ν = 1/(1 − e^{−√x}). They report 2693 points in 153 galaxies, which differs from your 2,807 points. Your sample may be defined differently.
- Two-parameter and generalized interpolating-function families are compared on SPARC in several papers. I found these in search results only, and I did not read them:
  - Ghari et al., arXiv:1907.01564.
  - Tian & Ko, arXiv:1907.04501.
  - arXiv:2301.04368, a Bayesian study of the RAR's functional form. It finds the data don't clearly require MOND's asymptotic slopes.
  - arXiv:2510.14345, which proposes μ = x(1+x^α)^(−1/α).
  - Li et al. (2018), whose individual-galaxy a₀ fits I know only secondhand.
- Because the family already has a free exponent, a fit that matches McGaugh's function to four digits is expected. Any flexible monotone function with the right asymptotes does this. Two such functions can agree in RMS to four digits and still differ in BIC through the parameter penalty.

**Possible overlaps I couldn't confirm**
- A Zenodo "coherence field" RAR paper (v6, March 2026) turned up in search. I couldn't see its functional form, so I can't say whether it uses this C(x). Treat it as uncertain. If your program is that one, it is self-published and not peer-reviewed.
- Your γ = 2 pin is "derived" within your program. I found nothing in the literature supporting it. The ΔBIC +184 is therefore a falsification of that derivation. It is not evidence for the coherence function.

**Verdict:** I believe the specific tanh(γ ln(1+x)) form is unpublished. As a model it is a special case of generic MOND/RAR interpolating-function fitting. I'd expect it to be rejected on the wrong deep-MOND slope (C ∝ x, not √x) unless γ is tied to 1/2.

Sources:
- [McGaugh, Lelli & Schombert 2016 (arXiv:1609.05917)](https://arxiv.org/abs/1609.05917v1)
- [Ghari et al. (arXiv:1907.01564)](https://arxiv.org/pdf/1907.01564)
- [Tian & Ko (arXiv:1907.04501)](https://ar5iv.arxiv.org/html/1907.04501)
- [arXiv:2301.04368](https://arxiv.org/pdf/2301.04368)
- [arXiv:2510.14345](https://arxiv.org/pdf/2510.14345)
- [Zenodo coherence-field record](https://zenodo.org/records/18896283)