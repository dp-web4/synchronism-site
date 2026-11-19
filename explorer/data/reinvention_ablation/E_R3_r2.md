**Verdict:** The spherical-symmetry result is correct, but the claims of momentum conservation and "naturalness" are not supported, and the model has serious phenomenological problems.

**What is correct.** For spherical symmetry, Gauss's law applied to ∇·(C∇Φ)=4πGρ gives C(ρ(r))·g = g_N, so g = g_N/C evaluated at the local density. The equation is elliptic for C>0, and the bound 1/Ω_m ≈ 3.2 follows directly.

**Main problems**

1. **Momentum conservation fails.** Take force density f = −ρ∇Φ = −(1/4πG)(∇Φ)∇·(C∇Φ). Expanding gives
 f_i = −∂_j T_ij + (1/8πG)|∇Φ|² ∂_i C, with T_ij = (1/4πG)[C(Φ_iΦ_j − ½δ_ij|∇Φ|²)].
 The leftover term ∝ |∇Φ|²∇C is not a total divergence. Wherever C varies (galaxy edges, disks, halos), the net force on matter does not vanish, so Newton's third law fails. If the equation is derived from L = −C(ρ)|∇Φ|²/8πG − ρΦ, then varying the matter fields adds a force ∝ ∇(∂C/∂ρ)-type terms, and g = −∇Φ is no longer the matter's equation of motion. The construction is only consistent if the extra force is included, and that would change the spherical result. As stated, "sourced and momentum-conserving" is not established.

2. **The boost cap conflicts with data.** A maximum boost of 3.2 with g ∝ g_N/C₀ at large r gives asymptotically Keplerian, √3.2-enhanced curves, not flat ones. Flat curves require unbounded boost at low acceleration, as in MOND. Clusters need effective boosts well above 3.2 in their baryonic mass. Density-dependent rather than acceleration-dependent switching also puts the transition in the wrong place in low-density, high-acceleration systems, and vice versa (e.g. dense but low-g regions).

3. **Non-locality and the equivalence principle.** The acceleration of a test body depends on the density at its location, and that density is not a property of the body. In a diffuse outskirt, a test mass feels a different "G" from the same field. Wide binaries, the solar system's low-density surroundings, and the Milky Way's disk–halo transition need explicit checks.

4. **"Natural" is unjustified.** The form of C, the choice of ρ_crit and p, and the choice of ρ over |∇Φ| or Newtonian g_N as the switching variable are all free. AQUAL/QUMOND have actions, conserve momentum, and give flat curves. Outside spherical symmetry, the field is curl-free by construction, while g_N/C(ρ) is not, so the algebraic law and the PDE disagree in disks.

5. **No relativistic or cosmological completion.** Lensing, the CMB, and structure growth are not addressed.

**Next steps**
- Write a full action including matter coupling, derive the matter equation of motion, and show explicitly that momentum and energy are conserved.
- Solve the PDE numerically for thin disks and compare with the algebraic law and with SPARC curves.
- Confront the cap with cluster data, wide binaries, and Solar System constraints.
- Compare quantitatively with AQUAL/QUMOND and either justify the choice of ρ as the switching variable or drop the claim that this completion is "the natural one."