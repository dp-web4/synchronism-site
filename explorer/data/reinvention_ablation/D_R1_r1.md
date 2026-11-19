**Short answer:** I haven't found this exact construction in the literature. I answered from memory and ran no searches, so check the citations below. It looks like a new parametrization of a known type of object: a one-parameter-family interpolating function for the radial acceleration relation (RAR).

**What it is mathematically**
- C = 1/ν, so this is just an MOND-type interpolating function, g_obs = ν(g_bar/a₀)·g_bar.
- tanh(γ ln(1+x)) = [(1+x)^{2γ} − 1]/[(1+x)^{2γ} + 1]. This is a Möbius function of (1+x)^{2γ}, so it is an algebraic family with a free exponent.
- At γ = 1/2 it becomes x/(2+x)... more precisely, 2γ = 1 gives C = x/(x+2).
- Published relatives are the following. I'm confident in the first two and unsure of the third.
  - The Famaey–Binney "simple" function and Milgrom's 1983 MOND (ApJ 270, 365).
  - The Zhao–Famaey generalized family (1+x^α)^{1/α} (Famaey & McGaugh 2012, Living Rev. Relativ. 15, 10; arXiv:1112.3960).
  - McGaugh, Lelli & Schombert 2016 (PRL 117, 201101; arXiv:1609.05917), ν = 1/(1−e^{−√x}). Lelli et al. 2017 (ApJ 836, 152) fit SPARC with it. Li et al. 2018 (A&A 615, A3) fit a generalized form with extra parameters. The Li et al. citation is uncertain.

**A concern about the stated limits**
- For x ≪ 1, tanh(γ ln(1+x)) ≈ γx, so g_obs → a₀′/γ, a constant. The deep-MOND limit requires C ∝ x^{1/2}, giving g_obs ∝ √(g_bar a₀).
- For x ≫ 1, C → 1 only as a power law, with 1−C ≈ 2(1+x)^{−2γ}. At γ ≈ 0.49 this falls off only as about 1/x, and the Newtonian limit is reached slowly.
- So the function can't reproduce the deep-MOND slope. It could still fit over the finite SPARC range, but you should check this. Look at the fit residuals at the lowest g_bar, and check that x is defined as stated.

**On the fit statistics**
- The RAR scatter (about 0.13–0.14 dex) is dominated by observational uncertainties and intrinsic scatter. Many monotonic interpolating functions with one or two free parameters fit equally well, so agreement with McGaugh's function to four digits is expected. It isn't evidence for the "coherence" interpretation.
- The ΔBIC of +184 against γ = 2 only shows that this particular derived value is disfavored. It isn't a test of the underlying theory.
- Interpolating-function comparisons on SPARC are known to be weakly discriminating. See Li et al. 2018 and Chae et al. (2020–21, ApJ). The Chae citations are uncertain.

**Conclusion:** I believe this tanh–log form is not a published named model. It reduces to the generic class of RAR/MOND interpolating functions, which are phenomenologically degenerate with McGaugh's function. A pinned γ = 2 that the data reject falsifies that specific derivation. I'd also check the novelty claim with an arXiv search for "tanh ln(1+x) interpolating function MOND".