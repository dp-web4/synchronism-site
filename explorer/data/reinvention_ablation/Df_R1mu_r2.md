**Short answer:** I found no published model with this exact form, "coherence function" or tanh(γ ln(1+x)). What the construction does is a known kind of thing, though. It is a new interpolating function fitted to the radial acceleration relation (RAR).

**What it reduces to.** The relation g_bar = g_obs·C(g_obs/a₀′) is an empirical RAR fit. Write it as g_obs = g_bar·ν(g_bar/a₀′). That is the standard MOND-type interpolating-function form.
- It is a different parametrization from McGaugh, Lelli and Schombert's fit. They use g_obs = g_bar/(1 − e^{−√(g_bar/g†)}) with g† ≈ 1.2×10⁻¹⁰ m s⁻². This is in [PRL 117, 201101 (2016), arXiv:1609.05917](https://arxiv.org/abs/1609.05917v1). See also [Lelli et al., arXiv:1610.08981](https://arxiv.org/abs/1610.08981v1).
- Other published interpolating-function families exist, such as the arctan form and μ = x/(1+x). I only saw these in search snippets, so I haven't verified them or their citations.

**Limiting behaviour.**
- C(x) = tanh(γ ln(1+x)) = [(1+x)^{2γ} − 1]/[(1+x)^{2γ} + 1]. This is an algebraic function of x, so it is not new mathematics.
- At small x, C ≈ γx. That gives g_obs ≈ g_bar/(γx), which is the deep-MOND regime. The √ scaling of the RAR then needs a consistent treatment of the γ-dependence.
- At large x, C → 1, which is the Newtonian limit.
- With γ = 0.49 ≈ 1/2, the form is nearly [(1+x)−1]/[(1+x)+1] = x/(2+x), which is a simple rational function. I haven't checked that identification against the literature.

**Statistical claims.**
- The 2,807 points differ from the 2,693 points in 153 galaxies reported in the 2016 paper. This probably comes from different cuts. I couldn't verify that.
- The fit's RMS of 0.1437 dex, identical to McGaugh's to four digits, is expected. Any flexible two-parameter monotonic interpolating function fits the RAR to about the intrinsic scatter. This says nothing about the physics.
- The ΔBIC of +7.1 against the extra parameter is therefore unsurprising. The ΔBIC of +184 with γ pinned to 2 means the program's derived γ is disfavoured by the data. That is a falsification of the derivation, not a success.

**Related self-published work.** My searches turned up Zenodo preprints on a "scalar coherence field" RAR model and a "Cohesion UFT" rotation-curve law. I couldn't confirm that either uses this function, and neither appears to be peer-reviewed. Check them for overlap.

**Verdict.** The specific function appears unpublished, as far as my two searches show. The result is effectively a re-parametrized MOND/RAR interpolating function, and the data can't distinguish it from McGaugh's.

Sources:
- [McGaugh, Lelli & Schombert, arXiv:1609.05917](https://arxiv.org/abs/1609.05917v1)
- [Lelli et al., arXiv:1610.08981](https://arxiv.org/abs/1610.08981v1)
- [Zenodo coherence-field record](https://zenodo.org/records/18866038)