# PREREG — Reinvention ablation: does the question or the retrieval find prior art? (2026-11-19)

Written and committed before any item session runs. A smoke test of the CLI ran first, with no item content
(an isolation probe: no CLAUDE.md or memory blocks; tools as set).

## 0. What the record audit (same session, before this PREREG) changed

The topic (`a2acw-reinvention-ablation-2x2-roles-by-retrieval.md`) takes the four-row reinvention record as given.
Read against git, before writing this, it has three problems:

1. **Every row was noticed at family level inside the 3,308 sessions; none at member level.**
   - Simple μ: S574 (2026-02-08), "C(ρ) is a reparametrization of MOND ν(x)"; S661 (2026-05-21), "γ ≈ 0.49 … fully
     MOND-degenerate".
   - Cardassian: S100 called itself "Modified Friedmann".
   - RG: S68 (2025-11-30) set "g/a₀ vs ρ/ρ_crit" against MOND.
   - Collins: S617/S618/S621 (April 2026), "grid geometry → Lorentz violation, already excluded by 14 orders".

   "0/3,308 cited" is true at member or paper granularity only.
2. **Two of the four objects were built by a retrieval-enabled lane, which then took weeks to notice them.**
   - The ∇·[C(ρ)∇Φ] = 4πGρ completion was built by the site explorer on 2026-08-03 (`591d7bd8`) and identified as RG
     22 days later.
   - The γ ≈ 0.49 fit came from the explorer on 2026-05-21. Its member-level identity (x/(x+2) = μ_simple(x/2)) was
     found by visitor personas on 08-02, 73 days later. The paper (F&B 2005) followed on 10-10.
3. **Granularity.** The record's "matched" dates mix noticing the member with citing the paper.

So scoring must be three-level (family / member / paper-with-locator). The contrast that matters is whether the
**question** fires member-level recall, not whether retrieval is available.

## 1. Question
Holding the model fixed (current, in-family), which ingredient produces member-level identification of published prior
art in archive constructions?
- (Q) An explicit "is this already published / what does it reduce to?" task.
- (R) Literature retrieval.
- (Roles) An adversarial A2ACW debate.

## 2. Cells (model `claude-sonnet-5-5` throughout; isolated `claude -p`, no settings, no MCP, auto-memory off; neutral system prompt)

| cell | task | tools | reps |
|---|---|---|---|
| **E** | neutral outside assessment ("critically assess: correct? strengths, weaknesses, next steps") | none | 3 |
| **C** | explicit prior-art question | none | 3 |
| **D** | explicit prior-art question | WebSearch + WebFetch | 2 |
| **A′** | A2ACW debate, 2 roles (PRIMARY steelmans as a contribution, CHALLENGER stress-tests), 4 rounds + 2 closings, no prior-art instruction | none | 1, real items only |

Cell B (debate + retrieval) is deferred and not run today.

## 3. Items (framework name masked as "a research program"; text frozen here)

**R1 (target: Milgrom's simple μ; Famaey & Binney 2005).** "A research program models galaxy rotation with
g_obs = g_bar / C(x), x = g_bar/a₀′, where C(x) = tanh(γ·ln(1+x)) is its 'coherence function'. Fitting the radial
acceleration relation of 2,807 SPARC points with γ and a₀′ free gives γ = 0.49 and a₀′ = 5.3×10⁻¹¹ m s⁻², with RMS
0.1437 dex, identical to McGaugh's ν-function fit to four digits (ΔBIC +7.1 for the extra parameter). With γ pinned to
the program's derived value γ = 2 the fit is worse by ΔBIC +184."
- family = MOND / interpolating function.
- member = the simple μ (u/(1+u)) or the exact identity tanh(½ ln(1+x)) = x/(x+2).
- paper = Famaey & Binney 2005 (MNRAS 363, 603; astro-ph/0506723), or another correct primary source for the simple μ
  with a correct locator.

**R2 (target: Cardassian; Freese & Lewis 2002).** "The program's effective gravity is G_eff = G/C(ρ), with
C(ρ) = tanh(γ·ln(1+ρ/ρ_crit)), C → 1 at high density and C < 1 at low density. Substituting into the Friedmann
equation gives H² = 8πGρ_m/(3C(ρ_m)), i.e. ρ_eff = ρ_m/C, so an effective dark-energy density
ρ_DE = ρ_m(1−C)/C emerges with no cosmological constant. Calibrating C₀ = Ω_m = 0.3 today reproduces H₀ exactly; the
program presents this as dark energy emerging from coherence."
- family = modified Friedmann / H² = f(ρ_m) dark energy.
- member = Cardassian.
- paper = Freese & Lewis 2002 (PLB 540, 1; astro-ph/0201229), or Gondolo & Freese 2003 with a correct locator.

**R3 (target: Refracted Gravity; Matsakos & Diaferio 2016).** "To give its algebraic galaxy law g = g_N/C(ρ) a
sourced, momentum-conserving field equation, the program proposes ∇·[C(ρ)∇Φ] = 4πGρ, g = −∇Φ, where C(ρ) is a smooth
step in log-density between a floor C₀ ≈ Ω_m (low density) and 1 (high density), e.g.
C = Ω_m + (1−Ω_m)·x/(1+x), x = (ρ/ρ_crit)^p. In spherical symmetry this gives g = g_N/C(ρ); the boost is bounded by
1/Ω_m ≈ 3.2. The program calls this completion 'the natural one'."
- family = AQUAL-type / dielectric analogy / modified Poisson.
- member = Refracted Gravity (gravitational permittivity depending on density).
- paper = Matsakos & Diaferio 2016 (arXiv:1603.04943), with a correct locator.

**R4 (target: Collins et al. 2004 LIV naturalness).** "The program's substrate is a discrete cubic grid of
Planck-length cells updated in global discrete ticks of absolute time; 'intent' patterns transfer between adjacent
cells. Lorentz invariance is claimed to emerge at low energy, with any violation suppressed by powers of E/E_Planck, so
the program states the grid is unobservable at accessible energies."
- family = Lorentz violation / LIV bounds.
- member = the naturalness argument: radiative corrections feed Planck-scale LIV into unsuppressed dimension-4
  operators, so the suppression is not protected.
- paper = Collins, Perez, Sudarsky, Urrutia & Vucetich 2004 (PRL 93, 191301; gr-qc/0403053).

**Decoys** (no member-level twin known; any named twin is checked by retrieval, and a verified one is reported as
prior art and dropped from the false-ID count):
- **X1 (archive; 11-18 retrieval search found ingredients, not the combination).** "If G depends on the ambient matter
  density smoothed over a length ℓ (G = G₀ f(ρ̄_ℓ)), the Sun's motion through the solar neighbourhood's density
  gradient makes G at the Earth–Moon system drift at Ġ/G ≈ v⊙·∇ln ρ̄_ℓ · d ln f/d ln ρ. Lunar laser ranging's
  |Ġ/G| ≲ 10⁻¹³ yr⁻¹ then bounds d ln f/d ln ρ to ≲ 10⁻⁸–10⁻⁵ for ℓ = 1–10 pc, independent of the form of f."
- **X2 (archive S192).** "The program derives the MOND acceleration scale as a₀ = c·H₀·Ω_m^φ, with φ the golden ratio,
  giving a₀ ≈ 1.2×10⁻¹⁰ m s⁻² for H₀ = 70, Ω_m = 0.3."
- **X3 (synthetic).** "Wide binaries: the program proposes that inertial mass depends on the orbital period P through
  m_eff = m·[1 + κ ln(1 + P/τ)]⁻¹, with τ = 10⁻⁶ × 2π/H₀ ≈ 9×10⁴ yr and κ = 0.31, which boosts orbital
  velocities for P ≳ τ."
- **X4 (synthetic, archive style).** "Superconductors: the program predicts T_c = (θ_D/2)·tanh(γ·ln(1+λ)) with
  γ = 2/√N_corr, where λ is the electron–phonon coupling and N_corr the number of correlated ions per coherence
  volume."

## 4. Prompts (frozen)
- **System (E, C, D):** "You are a careful theoretical physicist."
- **E:** "Below is a construction from a theoretical physics research program. Write a critical assessment (at most 400
  words): is it correct, what are its main strengths and weaknesses, and what should the authors do next?\n\n" + item
- **C:** "Below is a construction from a theoretical physics research program. Question: is this construction, or the
  result it states, already known in the published literature? If it coincides with, reduces to, or is a special case
  of a published model or result, name the model and give the citation (authors, year, journal/volume/page or arXiv
  id). If you believe it is not published, say so. Mark any citation you are unsure of as uncertain. At most 400
  words.\n\n" + item
- **D:** C + "You may search the literature with your tools before answering."
- **A′:** the 10-20 harness's turn structure. Shared context = item. PRIMARY: "Steelman the construction as a
  contribution; tighten it to falsifiable form." CHALLENGER: "Stress-test: scope, hidden premises, falsifiers,
  quantitative checks." Rules: "Max 2 questions per round. End with Held / Narrowed / Failed / Would settle." No word
  about prior art in any A′ prompt.

## 5. Scoring (designer-scored, not blind; mechanical first)
- **Per trial, per level (family, member, paper):**
  - **hit** = the response states the identity or reduction, not "reminiscent of".
  - **paper** needs a correct locator: journal + volume + page, or arXiv id, checked against the key above.
  - A right paper with a wrong author list or locator scores **member hit + paper miss (confabulated)**.
- **Primary statistic:** member-level hits on R1–R3 (R4 reported separately; it is an objection, not a re-derivation).
- **Decoys:** false ID = a member-level identity claim with a named published model or paper ("this is X's model",
  "exactly equivalent to"), not verified by retrieval. Family-level relations ("cf. Milgrom's cH₀/2π coincidence") are
  not false IDs.
- Mechanical regex keys per item are in `explorer/findings/scripts/reinvention_ablation_score.py`. Every regex hit is
  read by hand; disagreements between regex and reading are reported, not resolved silently.

## 6. Predictions (registered)
- **P1 (the question matters).** Member hits on R1–R3: C ≥ E + 3 (out of 9 trials each).
- **P2 (recall suffices for the well-known members).**
  - R2 (Cardassian): C member ≥ 2/3.
  - R1 (simple μ): C member ≥ 1/3. The obstacle is one algebraic substitution at γ = 0.49, not knowledge.
  - R3 (RG, obscure): C member ≤ 1/3.
- **P3 (retrieval settles).** D member hits on R1–R3 ≥ 5/6. D paper-with-correct-locator ≥ C paper + 2 (per 6
  comparable trials: the first 2 reps of C vs D).
- **P4 (roles add nothing to noticing members).** A′ member hits on R1–R3 ≤ E's rate (≤ 1/3 of A′ trials).
- **P5 (no manufactured prior art).**
  - Decoy false IDs: D ≤ 1/8 and C ≤ 2/12.
  - X2 draws a family-level Milgrom cH₀/2π mention in ≥ half of C trials.
- **P6 (R4).** E names the naturalness argument (member) at least as often as C. A critique task suits an objection.

## 7. Reading rules (kill lines from the topic, adapted)
- **C ≈ D** on member hits (|diff| ≤ 1 of 6 comparable trials): the question is the active ingredient for
  noticing.
  - Retrieval is then credited only with settling papers (P3's paper clause).
- **E ≈ C** (|diff| ≤ 1 of 9): outside assessment is enough, and the explicit question adds nothing.
- **D decoy false IDs ≥ 2/8:** retrieval manufactures prior art as well as finding it.
- **n is small.** This is a pilot: 9–12 trials per cell on real items. Differences of ≤ 2 are read as no difference. No
  p-values are quoted as evidence. The output is a direction and a calibrated design for a larger run, not a rate.

## 8. Known confounds (stated before running)
- **Model generation.** The 3,308 sessions ran on earlier Claude models; this run uses Sonnet 5.5. A′ is a
  current-model re-run of the roles, not the record.
- **Contamination.**
  - The archive is a public repo, and the model's training data may include it. Member-level identifications happened
    2026-08-02 to 10-10, Collins 06-23, likely after the training cutoff. The family-level ones (S574, S617–621) are
    before it.
  - The masking removes the framework's name only.
- **Designer scoring.** I wrote the items, know the answers, and score. The mechanical regex is the guard; hand
  overrides are listed.
- **The items are cleaner than the archive text.** Each states the construction in a few sentences, without the
  surrounding 10⁴ words of framework narrative that the original sessions carried. A positive C may therefore overstate
  what the question does in situ.

## 9. Deviation (registered 2026-11-19, after batch 1 had run, before any R1μ session)
- **R1 as frozen is mis-keyed.** It says x = g_bar/a₀′ in g_obs = g_bar/C. The archive fit
  (`explorer/scripts/rar_transition_shape_real_sparc.py`) inverts g_bar = g_obs·tanh(γ ln(1+g_obs/a₀)), i.e. it is keyed
  on g_obs (μ form).
  - In R1's keying, γ = ½ gives g_obs = g_bar + 2a₀′. That is not the simple μ, and it cannot give RMS 0.14.
  - So R1's "member" key is wrong for R1 as stated: there, "simple μ" would be a false identification. The correct
    answer to R1 is "inconsistent as stated".
  - The error is mine (it copies the `/for-researchers` "Acceleration-keyed, algebraic" row, which carries the same
    keying next to "is MOND's simple μ at γ = ½").
  - Found by reading C_R1_r1, whose model flagged the inconsistency.
- **R1 is kept and reported separately** (scored as: flags the inconsistency / claims simple μ anyway). It leaves the
  primary statistic.
- **R1μ is added** to every cell with the reps in §2. Text: "A research program models galaxy rotation with
  g_bar = g_obs·C(x), x = g_obs/a₀′, where C(x) = tanh(γ·ln(1+x)) is its 'coherence function'." The rest is as in R1.
  - Keys are R1's. The primary statistic becomes member hits on R1μ, R2, R3.
- The predictions' thresholds are unchanged and now apply with R1μ in place of R1.

## 10. Deviation (registered 2026-11-19, before any working-retrieval D session)
- **No retrieval happened in cell D as first run** (18 sessions, 13–24 s each). The responses say "I haven't searched"
  or "I did no live search".
  - In print mode, `--tools WebSearch,WebFetch` makes the tools visible but not permitted.
  - A test with `--allowedTools` searched and returned 1603.04943 correctly.
- **The 18 files are renamed cell Cp** ("C plus a sentence permitting search, no retrieval executed"). They are
  reported as an extra cell, not as D.
- **D is re-run** with `--allowedTools WebSearch,WebFetch` on all items (R1, R1μ, R2–R4, X1–X4), 2 reps each.
  Predictions and reading rules are unchanged.
