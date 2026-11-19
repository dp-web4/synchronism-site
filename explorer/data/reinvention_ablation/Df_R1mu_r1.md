**Verdict:** I found no published source for the tanh(γ ln(1+x)) "coherence function". As a model, though, it is a re-parametrisation of the known RAR/MOND family. I would not call it a new result.

**What the searches found**
- McGaugh, Lelli & Schombert (2016), PRL 117, 201101 (arXiv:1609.05917), introduced the RAR fit that the question calls McGaugh's ν-function. It used SPARC (2,693 points in 153 galaxies). The search snippets did not show its functional form. From memory it is g_obs = g_bar/(1−e^{−√(g_bar/g†)}) with g† ≈ 1.2×10⁻¹⁰ m s⁻². That is **unverified**.
- Lelli et al. (2017), arXiv:1610.08981, extended the same relation to early-type galaxies and dSphs.
- The search for "coherence function" with tanh and ln(1+x) returned no peer-reviewed match. It returned only unreviewed Zenodo preprints on scalar "coherence" fields (zenodo.org/records/18866038) and a torsion-based RAR law (zenodo.org/records/19683339). I could not verify their functional forms, and I can't tell whether they come from this program.

**Why it reduces to known results (my own analysis)**
- With x = g_obs/a₀′, the relation g_bar = g_obs·tanh(γ ln(1+x)) is just an inverse interpolating function. It is the MOND-type form g_bar = g_obs/ν⁻¹, written with g_obs as the independent variable. Writing g_bar = μ(x)·g_obs is the standard MOND μ-function, with μ = tanh(γ ln(1+x)).
- tanh(γ ln(1+x)) = ((1+x)^{2γ} − 1)/((1+x)^{2γ} + 1). This is an algebraic family of the kind already explored for MOND interpolating functions.
- At small x, μ ≈ γx. That is the Newtonian-like regime in terms of g_obs, which is not the deep-MOND limit. The deep-MOND limit needs g_obs ∝ √(g_bar a₀), so μ ∝ x² (g_bar ∝ g_obs²) as x→0. A linear μ ≈ γx therefore gives g_obs ∝ g_bar at low acceleration, which is not MOND. Please check this against the fit. At large x, μ→1 only logarithmically. The expansion 1−μ ≈ 2(1+x)^{−2γ} gives a power-law approach to Newtonian. With γ = 0.49 that is a slow x^{−0.98} tail, so the formula is only MOND-like in the middle.
- The fitted γ = 0.49 is close to 1/2. The γ = 2 value that the program "derives" is strongly rejected (ΔBIC +184). So the derivation is falsified by this fit, and the free-γ result adds nothing beyond the existing ν fit. Matching McGaugh's RMS to four digits is expected for any flexible one- or two-parameter interpolating function. The RAR is known to be fitted equally well by many such functions.

**Caveat:** I only ran two searches, and the first returned no equation text. Treat any claim of novelty as unverified until someone searches the MOND interpolating-function literature directly, for example Famaey & McGaugh (2012, Living Rev. Relativ. 15, 10). I did not verify that citation.

Sources:
- [McGaugh et al. 2016, arXiv:1609.05917](https://arxiv.org/abs/1609.05917v1)
- [Lelli et al. 2017, arXiv:1610.08981](https://arxiv.org/abs/1610.08981v1)
- [APS PRL 117, 201101](https://link.aps.org/doi/10.1103/PhysRevLett.117.201101)
- [Zenodo 18866038](https://zenodo.org/records/18866038)
- [Zenodo 19683339](https://zenodo.org/records/19683339)