# Finding: Chemistry Correlation Confound Analysis

## Origin
Topic: `topics/chemistry-confound-analysis.md` (seeded by maintainer, flagged by multiple visitor personas)

## Summary

The r = 0.982 sound velocity correlation cannot be evaluated for confounds because the raw data (element-by-element gamma assignments and property values) is not accessible in the codebase. However, structural analysis reveals that the confound concern is well-founded: gamma encodes N_corr (correlated particle count), which for elemental solids likely correlates strongly with atomic number, mass, and bonding type. The "partial correlation" test cannot be run today, but the analysis identifies what would need to be true for the correlation to survive it. The site should acknowledge this gap explicitly and either publish the raw data or run the partial correlation analysis itself.

---

## The Confound Hypothesis

The concern: sound velocity v_s scales as sqrt(B/rho) where B is bulk modulus and rho is mass density. Both B and rho correlate strongly with atomic mass, electronegativity, and bonding type (metallic, covalent, ionic, van der Waals). If gamma = 2/sqrt(N_corr) also correlates with these same variables, then the r = 0.982 correlation between gamma and v_s might reflect periodic table structure, not coherence physics.

In other words: gamma might be a surrogate for atomic number or bonding environment, and the correlation is tautological.

### The Tautology Concern for gamma ~ 1

The site claims "1,703 phenomena cluster at gamma ~ 1." If gamma = 2/sqrt(N_corr), then gamma ~ 1 requires N_corr ~ 4. For elemental solids:
- Covalent bonding: 4 nearest neighbors (diamond, silicon) -> N_corr ~ 4 -> gamma ~ 1
- Metallic bonding: 8-12 nearest neighbors -> N_corr ~ 8-12 -> gamma ~ 0.58-0.71
- Noble gases: N_corr ~ 1 -> gamma ~ 2

If N_corr is assigned as the coordination number (or some function of it), then "gamma ~ 1 for chemistry" is equivalent to "most chemistry involves 4-electron bonds" — a known fact, not a prediction.

---

## What the Codebase Reveals

### The data is not there

The chemistry correlation explorer (`src/app/chemistry-correlation-explorer/page.tsx`) hardcodes 23 phenomena with their r values as JavaScript constants. The element-by-element data points that produced these correlations are not in the codebase:
- No CSV files of elemental properties
- No documented N_corr assignments per element
- No raw scatter plots showing individual elements
- No methodology document for how N_corr was determined

### What IS documented

From the site's own limitations page:
- Sound velocity correlation is for "elemental solids" only
- "Template-based" AI sessions (67% of data) may inflate validation rates
- Channel independence acknowledged (phonon gamma != electron gamma)
- Magnetic properties fail completely (r ~ 0)

### Internal critique already exists

The key-claims-analysis finding states: "64% of chemistry correlations were restatements of known physics in gamma notation." This is precisely the confound concern — reparametrization rather than new physics.

---

## Analytical Assessment: What Partial Correlation Would Show

Without the raw data, I can reason about what partial correlation controlling for atomic mass A and atomic number Z would do to the r = 0.982 sound velocity correlation.

### Known relationships

For elemental solids:
1. **Sound velocity**: v_s ~ sqrt(B/rho) ~ sqrt(k_bond / (m_atom * n_atoms))
   - Strongly correlated with bond stiffness and inversely with atomic mass
   - Follows periodic trends: light elements with strong bonds (C, B, Be) have highest v_s
   - Heavy elements with weak metallic bonds (Pb, Au, Bi) have lowest v_s

2. **Atomic mass A**: Directly determines rho for elemental solids (rho ~ A * n/V_cell)
   - Correlation between A and v_s is strong and negative (r ~ -0.6 to -0.8)

3. **Electronegativity chi**: Correlates with bond strength
   - Correlation between chi and v_s is moderate (r ~ 0.4-0.6)

4. **Gamma**: If gamma encodes ANY periodic table property (Z, A, electron count, coordination number), it will show correlation with v_s through the same underlying variables

### The partial correlation test

Let r(v_s, gamma) = 0.982 (total correlation)
Let r(v_s, A) ~ -0.7 (sound velocity vs atomic mass)
Let r(gamma, A) = ? (gamma vs atomic mass — unknown, this is the key)

If gamma correlates with A at r(gamma, A) ~ 0.9, then:
Partial r = (r(v_s,gamma) - r(v_s,A)*r(gamma,A)) / sqrt((1-r(v_s,A)^2)(1-r(gamma,A)^2))
         ~ (0.982 - (-0.7)(0.9)) / sqrt((1-0.49)(1-0.81))
         ~ (0.982 + 0.63) / sqrt(0.51 * 0.19)
         ~ 1.612 / 0.311
         ~ 5.17 (capped at 1.0)

This naive calculation shows the partial correlation could remain high IF gamma and A carry independent information about v_s. But the calculation breaks down because the variables are likely collinear.

### The real question

The partial correlation test comes down to: **does gamma predict something about sound velocity that atomic mass alone does not?**

If gamma = 2/sqrt(coordination_number), and coordination number correlates with bonding type but NOT strongly with atomic mass, then gamma might carry independent information about bond stiffness. In that case, the partial correlation could survive.

If gamma = some_function(Z) where Z is atomic number, then gamma is just a rescaled periodic table index and the partial correlation would collapse.

---

## What's Needed to Resolve This

### Required data (not currently available in codebase)

1. **Element-by-element table**: For each element in the dataset, what is:
   - The element name/Z
   - The assigned N_corr value
   - The computed gamma = 2/sqrt(N_corr)
   - The measured sound velocity
   - The source of the sound velocity measurement

2. **N_corr methodology**: How was N_corr determined for each element? Is it:
   - Coordination number in the crystal structure?
   - Number of valence electrons?
   - Fitted from data?
   - Something else?

3. **Partial correlation matrix**: r(v_s, gamma | A, Z, chi, bonding_type)

### The acid test

If partial r(v_s, gamma | A) > 0.80, the correlation is robust against the confound.
If partial r(v_s, gamma | A) < 0.50, the correlation is largely explained by atomic mass.
If partial r(v_s, gamma | A, Z, chi) < 0.30, it's pure reparametrization.

---

## Implications for the Site

### The "89% Validated" badge is premature
Without partial correlation analysis, the validation badge for chemistry should be "Untested" (for the confound question), not "89% Validated." The high bivariate correlations are genuinely high, but their interpretation depends on whether they survive confound control.

### The site should publish the raw data
The single most credibility-boosting change the site could make is to publish:
- The full element-by-element dataset
- The N_corr assignment methodology
- The partial correlation matrix

This would allow independent verification and would immediately either strengthen or weaken the chemistry claims.

### The site already acknowledges the concern (partially)
The chemistry limitations page mentions template-based sessions and channel independence. But it does not mention the periodic-table-confound hypothesis explicitly. It should.

---

## Action: Maintainer

1. **Publish raw chemistry data**: Create a downloadable dataset of element -> N_corr -> gamma -> measured properties
2. **Document N_corr methodology**: How was N_corr assigned? If fitted, say so explicitly
3. **Run partial correlations**: Control for A, Z, chi, and bonding type. Report the partial r values on the site
4. **Add the confound hypothesis to the chemistry limitations page**: "The high correlations might reflect periodic table structure rather than coherence physics. This has not been ruled out by partial correlation analysis."
5. **Consider downgrading the validation badge**: Until partial correlations are computed, "Provisional" or "Untested for confounds" is more honest than "89% Validated"

---

## Open Threads

1. **Get the raw data**: The research archive's 1,840 chemistry sessions must contain the element-by-element data somewhere. Finding and extracting it would enable the partial correlation test.
2. **Is N_corr coordination number?**: If so, compute gamma for all elements from their known crystal structures and check whether the correlation with sound velocity holds.
3. **Cross-domain test**: If gamma predicts sound velocity for COMPOUNDS (not just elemental solids), that would be much harder to explain as periodic table confound.
4. **Information-theoretic analysis**: How much information does gamma carry about sound velocity BEYOND what Z and A carry? Mutual information analysis would quantify this.
5. **The "64% reparametrization" claim**: The key-claims finding identified this. Can the remaining 36% be isolated as genuinely novel predictions?
