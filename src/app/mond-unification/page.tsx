'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function MondUnification() {
  return (
    <>
      <Breadcrumbs currentPath="/mond-unification" />
      <PathNav currentPath="/mond-unification" />
      <h1>MOND Unification</h1>
      <ValidationBadge status="reparametrization" label="Dimensional Analysis — 6–13% Below Milgrom's a₀, H₀-Dependent" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="The MOND acceleration scale from cosmology">
          a&#x2080; = cH&#x2080; / (2&#x03C0;) &#x2248; 1.04 &times; 10<sup>&minus;10</sup> m/s&sup2;
        </EquationDisplay>

        <p>
          The MOND acceleration scale a&#x2080; is related to cosmological parameters.
          However, this relationship is not unique to Synchronism: Milgrom noted the a&#x2080; ~ cH&#x2080;
          coincidence in his original 1983 paper. McCulloch (2007) derived a&#x2080; = cH&#x2080;/(2&#x03C0;)
          from quantized inertia. Verlinde (2017) obtained a similar relation from emergent gravity.
          The 2&#x03C0; factor is the standard geometric factor arising from any argument involving a
          spherical causal horizon. This is best understood as dimensional analysis with a geometric prior,
          not a unique derivation from first principles.
        </p>

        <h2>The Significance</h2>
        <p>
          In Modified Newtonian Dynamics (MOND), a&#x2080; is the acceleration below which gravity
          deviates from Newton&apos;s law. Milgrom observed it empirically:
        </p>
        <EquationDisplay size="sm" label="Milgrom&apos;s observed value (1983)">
          a&#x2080;<sup>obs</sup> &#x2248; 1.20 &times; 10<sup>&minus;10</sup> m/s&sup2;
        </EquationDisplay>
        <p>
          For 40 years, the coincidence that a&#x2080; &#x2248; cH&#x2080; has been noted by many
          researchers. Multiple frameworks produce the same relation with the same geometric factor.
          In Synchronism, the coherence function provides a physical narrative for why this
          relationship holds, but the result itself is shared with other approaches.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Update 2026-08-01, revised 2026-08-04 (this page not updated until 2026-09-05):</strong> treating
          a&#x2080; as emergent rather than fundamental is not cost-free &mdash; it is a forced commitment to
          a&#x2080;(z) = cH(z)/2&#x03C0;, the one prediction here that structurally differs from MOND&apos;s constant
          a&#x2080;. It has been tested: Ciocan et al. 2026 (MUSE-DARK III, A&amp;A 709, L16;{' '}
          <a href="https://arxiv.org/abs/2604.22613" style={{ color: 'var(--color-accent-blue)' }}>arXiv:2604.22613</a>)
          fit the RAR directly in 79 galaxies at 0.33 &lt; z &lt; 1.44 and find a&#x2080; growing <em>faster</em> than
          H(z). This sentence read &ldquo;disfavored by 2&#x03C3;&ndash;6&#x03C3;&rdquo; for a month after{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>{' '}
          had already revised the verdict: the deviation is <strong>anchor-dominated</strong> (four published a&#x2080;(0)
          values disagree by 69%; against the McGaugh+2016 anchor the site uses elsewhere, branch (A) is consistent at
          0.5&#x03C3;), and &#x039B;CDM+baryons simulations predict the same growth (Mayer et al. 2023). Verdict:{' '}
          <strong>non-discriminating</strong>, not disfavored, and not counted. The coincidence has a second face the
          site long omitted &mdash; a&#x2080; &#x221D; c&#x221A;&#x039B;, which predicts <em>zero</em> evolution and fares worse
          against Ciocan than the H(z) branch; a&#x2080; running faster than H(z) embarrasses both readings of the 1983
          coincidence, not this framework specifically. Full four-anchor table on Parameter Derivations, row 4.
        </p>

        <h2>The Dimensional-Analysis Chain (not a derivation)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
          <div className="card">
            <h3>Step 1: Critical Density of the Universe</h3>
            <EquationDisplay size="sm">
              &#x03C1;<sub>crit</sub> = 3H&#x2080;&sup2; / (8&#x03C0;G)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Standard cosmology. The density at which the universe is flat. This is measured, not assumed.
            </p>
          </div>

          <div className="card">
            <h3>Step 2: The Literal Computation Gives cH&#x2080;/2, Not cH&#x2080;/2&#x03C0;</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              This step used to say the threshold is &ldquo;the gravitational acceleration from
              &#x03C1;<sub>crit</sub> over a Hubble-scale volume&rdquo; and that &ldquo;the 2&#x03C0; factor arises from the
              spherical geometry of the causal horizon.&rdquo; Do that calculation: a sphere of radius R = c/H&#x2080; filled
              at &#x03C1;<sub>crit</sub> has M = (4&#x03C0;/3)&#x03C1;<sub>crit</sub>R&sup3;, so
            </p>
            <EquationDisplay size="sm">
              g = GM/R&sup2; = (4&#x03C0;/3) G &#x03C1;<sub>crit</sub> R = (4&#x03C0;/3) &middot; (3H&#x2080;&sup2;/8&#x03C0;) &middot; (c/H&#x2080;) = cH&#x2080;/2
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              That is 3.27 &times; 10<sup>&minus;10</sup> m/s&sup2; &mdash; a factor &#x03C0; above the value in Step 3 and
              2.7&times; Milgrom&apos;s. Spherical geometry supplies 4&#x03C0;/3 against 8&#x03C0;/3, which cancels to &frac12;;
              no 2&#x03C0; appears anywhere in it. <strong>Step 2 does not produce Step 3.</strong> The 2&#x03C0; is a choice
              that lands near 1.2 &times; 10<sup>&minus;10</sup>; no argument on this site or in the archive derives it. What is
              left is the dimensional statement a&#x2080; ~ cH&#x2080; &times; (a number of order 0.1&ndash;1), which is
              Milgrom&apos;s 1983 coincidence (he wrote cH&#x2080;/6) and is badged accordingly on{' '}
              <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>.
              The open question this leaves: is there <em>any</em> construction in the framework that fixes the prefactor
              before looking at Milgrom&apos;s number? None is known.
            </p>
            <details style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              <summary style={{ cursor: 'pointer' }}>Revision notes</summary>
              2026-09-19: a graduate-student reader carried out the computation the old Step 2 described and got
              cH&#x2080;/2. Checked by hand and confirmed. The three cards had been formatted as a derivation since the page
              was written, while the page badge and Parameter Derivations already said &ldquo;dimensional analysis&rdquo;.
            </details>
          </div>

          <div className="card">
            <h3>Step 3: The Result</h3>
            <EquationDisplay size="sm">
              a&#x2080; = cH&#x2080; / (2&#x03C0;)
            </EquationDisplay>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Plugging in H&#x2080; = 67.4 km/s/Mpc and c = 3 &times; 10<sup>8</sup> m/s
              gives 1.04 &times; 10<sup>&minus;10</sup> m/s&sup2;.
              Milgrom&apos;s observed value: 1.20 &times; 10<sup>&minus;10</sup>.
              Error: ~13%. (Corrected 2026-07-22: the 1.08 / &ldquo;~10%&rdquo; previously
              shown here belongs to H&#x2080; = 70, not the 67.4 stated in this very step.)
            </p>
          </div>
        </div>

        <h2>Comparison</h2>
        <div className="grid-2" style={{ margin: '1.5rem 0' }}>
          <div className="card">
            <h3>MOND (Milgrom 1983)</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>a&#x2080; is a <strong>fundamental constant</strong></li>
              <li>Value determined empirically from galaxy fits</li>
              <li>No explanation for why a&#x2080; &#x2248; cH&#x2080;</li>
              <li>Extremely successful at fitting rotation curves</li>
            </ul>
          </div>
          <div className="card">
            <h3>Synchronism</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>a&#x2080; is an <strong>emergent scale</strong></li>
              <li>Value from dimensional analysis of H&#x2080; and c (shared with other frameworks)</li>
              <li>Two interpolating functions have been used, in different fits: early RAR comparisons used the standard McGaugh et al. (2016) &#x03BD;; the framework&apos;s own tanh-log compander, when its &#x03B3; is left free, lands on &#x03B3; &#x2248; &frac12;, which is <em>Milgrom&apos;s simple &#x03BC;</em> exactly (C = x/(x+2)). These are different functions (&#x0394;BIC between them is quoted on <Link href="/coherence-function" style={{ color: 'var(--color-accent-blue)' }}>Coherence Function</Link>); <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link> says which fit used which</li>
              <li>Predicts EFE = 0 structurally <em>for the strict C(ρ<sub>local</sub>) reading</em> &mdash; the load-bearing premise is that C is independent of &Phi;, not locality per se (archive 2026-08-24: a fully non-local, &Phi;-independent C still gives EFE = 0 to 10<sup>&minus;13</sup>; a &nabla;&Phi;-keyed C gives 0.046). At the fitted &#x03B3; = &frac12; the compander that actually reproduces rotation curves is keyed on acceleration and its EFE is MOND&apos;s identically &mdash; so the EFE = 0 prediction has no live carrier that fits galaxies. See correction below and the reconciled caveat on <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link></li>
            </ul>
          </div>
        </div>

        <h2>The External Field Effect &mdash; Correction</h2>
        <div className="card" style={{ borderLeft: '3px solid #f87171', marginBottom: '1rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Correction (2026-08-02), itself corrected 2026-08-09:</strong> the paragraphs below previously
            attributed the External Field Effect to &ldquo;the nonlinear Poisson equation that implements the
            coherence function,&rdquo; and the 0.3&ndash;0.4&times; figure was never actually derived from one.
            That much stands. <strong>But the 2026-08-02 correction justified itself with a claim that was
            false</strong> &mdash; it said the object &ldquo;does not exist in this framework&rdquo; and cited{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>
            {' '}as stating &ldquo;correctly and repeatedly&rdquo; that there is no field equation anywhere in the
            galaxy sector. The archive has had one since 2025-12-01: Appendix D §D.2 states
            ∇²Φ&nbsp;=&nbsp;4πGρ/C, §D.3 effective Einstein equations, §D.5 a worldline action. The reason the
            0.3&ndash;0.4&times; figure is not derivable is <em>not</em> that no field equation exists; it is that
            the one the archive states (L1) is eliminated a priori by a vacuum source floor, and the one the
            site&apos;s tests actually use (∇·[C∇Φ]&nbsp;=&nbsp;4πGρ &mdash; <strong>which is Refracted Gravity&apos;s
            field equation</strong>, Matsakos &amp; Diaferio 2016, published a decade before this sector rediscovered it,
            with a permittivity identical to the floored C in closed form &mdash; reducing to
            g&nbsp;=&nbsp;g<sub>bar</sub>/C only in spherical symmetry) gives EFE&nbsp;=&nbsp;0, not 0.3&ndash;0.4&times;. The conclusion
            below is unchanged; its stated reason is.
          </p>
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Applying the framework&apos;s actual structure instead: C is a function of <strong>local matter
          density ρ</strong> alone. A uniform external gravitational field does not change ρ. So an algebraic
          g<sub>obs</sub>&nbsp;=&nbsp;g<sub>bar</sub>/C(ρ) modification (the direction the site&apos;s own
          f<sub>DM</sub>&nbsp;=&nbsp;1&minus;C identity implies &mdash; corrected 2026-08-04, this previously
          read &ldquo;C(ρ)&middot;g,&rdquo; the opposite direction) <strong>satisfies the Strong Equivalence
          Principle by construction and predicts EFE&nbsp;=&nbsp;0 exactly</strong>. That holds for the algebraic reading only.
          The field-equation completion refracts an external field, as the next box shows. It is a sharper structural
          claim than &ldquo;0.3&ndash;0.4&times; MOND.&rdquo; Three qualifications an expert reader supplies
          immediately, stated here so they don&apos;t have to (rewritten 2026-08-12; this sentence previously
          ended &ldquo;already in tension with Chae et al. 2020&rdquo;, a claim the research ledger withdrew on
          2026-08-05): <strong>(1)</strong> EFE&nbsp;=&nbsp;0 <em>is</em> the Strong Equivalence Principle, which
          is also &Lambda;CDM&apos;s prediction for internal galaxy dynamics &mdash; so this channel is{' '}
          <strong>refutation-only</strong>: a confirmed EFE detection wounds this framework and &Lambda;CDM alike
          while selecting MOND, and no EFE outcome can ever select this framework over &Lambda;CDM.{' '}
          <strong>(2)</strong> The reported ~4&sigma; detection (Chae, Lelli, Desmond, McGaugh, Li &amp;
          Schombert 2020, ApJ 904, 51) is contested in the literature &mdash; a &Lambda;CDM-mimicry argument
          (Paranjape &amp; Sheth 2022) and a no-EFE result in Coma ultra-diffuse galaxies (Freundlich et al. 2022) &mdash; a debate cited here in both directions, noting it
          currently cuts in this framework&apos;s <em>favor</em>. <strong>(3)</strong> Per the ledger&apos;s
          2026-08-05 execution, EFE&nbsp;=&nbsp;0 is <strong>not-evaluable</strong> against Chae&apos;s data
          anyway: at Chae&apos;s own measurement radii the framework&apos;s density law misses the rotation curves
          by 3&ndash;4 dex &mdash; 38&ndash;92&times; the entire EFE signal &mdash; so a 10&ndash;17% velocity
          effect cannot refute (or support) a model whose baseline is off by 10&sup3;&ndash;10&#x2074; on the
          same points.
        </p>
        <div id="field-equation" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem', marginBottom: '1rem' }}>
          <strong style={{ color: '#38bdf8' }}>The field-equation completion: momentum, striction and the external field.</strong>{' '}
          An algebraic g = g<sub>bar</sub>/C(ρ) is not sourced by a field equation. The one-line completion
          &nabla;&middot;[C(ρ)&nabla;Φ] = 4πGρ (Refracted Gravity&apos;s equation) reproduces g = g<sub>N</sub>/C exactly in
          spherical symmetry. Three properties matter.
          <br />&bull; <strong>On its own it does not conserve momentum.</strong> Integrating the force density &minus;ρ&nabla;Φ over an
          isolated system leaves a net self-force F = &minus;(1/8πG)&int;|&nabla;Φ|²&nabla;C d³x. That vanishes for reflection-symmetric
          C profiles (hence spherical symmetry), not in general: a lopsided system would push itself. The variational
          form, with action term &minus;&int;C(ρ)|&nabla;Φ|²/8πG, adds a <em>striction</em> force density
          &minus;ρ&nabla;(C&prime;(ρ)|&nabla;Φ|²/8πG), and that cancels the self-force exactly. Momentum conservation <em>is</em> the
          striction term. The site&apos;s Refracted Gravity disc runs (<Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>)
          and the globular-cluster window solve the field equation without it.
          <br />&bull; <strong>Striction is not small wherever the knee is inside the object.</strong> At this framework&apos;s A&middot;V² knee
          it is &le;2&times;10&#8315;&#8309; of gravity, because that knee never enters a disc. With the knee inside a disc it reaches 164&times;
          the vertical restoring force. At globular-cluster knee shells it is 1.7&ndash;13&times; gravity and points outward
          (explorer, 2026-09-16).
          <br />&bull; <strong>The external field is refracted, not ignored.</strong> Linearity in Φ gives superposition, but an external
          field is solved with the system&apos;s own C(x), so wherever &nabla;C &ne; 0 it bends, like a field in a dielectric.
          Without striction (&ldquo;L2&rdquo;) that is a linear external-field effect of order g<sub>ext</sub>&middot;&Delta;C/C: about
          0.3&ndash;0.37 g<sub>ext</sub> beyond the knee in a halo globular cluster. With striction (&ldquo;L3&rdquo;) the internal residuals
          are 1&ndash;30 g<sub>ext</sub> and there is a quadratic term, a nonlinear EFE. EFE&nbsp;=&nbsp;0 holds exactly only for the
          algebraic reading, or when C is uniform across the system. This linear refraction EFE is the one genuinely distinct
          external-field prediction of this family, and it has not been confronted with data.
          <br />&bull; <strong>Floored vs unfloored C.</strong> &ldquo;The knee never enters a disc, so none of this touches the framework&apos;s
          parameters&rdquo; holds for the floored form, where C &asymp; Ω<sub>m</sub> below the knee. For the unfloored form
          C = γρ/ρ<sub>c</sub> below the knee, &nabla;ln C = &nabla;ln ρ exactly, whatever the knee and γ. The equation then
          becomes &nabla;²Φ + &nabla;ln ρ&middot;&nabla;Φ = 4πGρ<sub>c</sub>/γ, and refraction is order R/h in any thin disc.
          <br />The vacuum problem remains in both forms: empty space has C&nbsp;&rarr;&nbsp;0 (or the floor), and that controls the
          exterior field of an isolated mass. Full derivations: <code>explorer/findings/efe-zero-survives-momentum-objection-but-the-substitution-was-never-evaluated.md</code>,{' '}
          <code>explorer/findings/l2-is-not-l3-for-a-disc-and-the-action-adds-a-force-the-tests-omit.md</code>,{' '}
          <code>explorer/findings/under-the-action-gc-knee-shells-are-striction-dominated-and-the-gc-window-is-an-l2-object.md</code>.
          <details style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision note</summary>
            From 2026-08-04 this box was titled &ldquo;EFE = 0 survives the obvious momentum-conservation objection&rdquo;. It said the
            completion &ldquo;conserves momentum&rdquo; and that, being linear in Φ, &ldquo;EFE = 0 is preserved exactly.&rdquo; The first is true
            only in spherical symmetry or with striction included. The second confuses superposition with the absence of
            refraction. The research archive recorded the momentum point on 2026-08-26 and the refraction point on 2026-09-16;
            a researcher visitor persona found the box still asserting both on 2026-09-17.
          </details>
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          There <em>is</em> a real environmental effect in this framework &mdash; it is just not the EFE. Ambient
          medium density adds to local ρ, raising C and suppressing the boost: an <strong>ambient-density
          effect</strong>, keyed on ρ<sub>ambient</sub> rather than MOND&apos;s g<sub>ext</sub>&nbsp;∝&nbsp;M/r².
          Two satellites at the same external acceleration but different host gas content would behave
          identically under MOND and differently here &mdash; that variable difference, not a scalar EFE ratio,
          is the genuine discriminator.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem' }}>
          <strong style={{ color: '#38bdf8' }}>Correction (2026-08-03):</strong> the paragraph above previously
          called this &ldquo;an open, unclaimed test&rdquo; that had not been checked against SPARC or Chae et al.
          (2020). That was stale &mdash; it already has an ID and a verdict. <Link href="/tier-1-existing" style={{ color: '#38bdf8' }}>TEST-05</Link>{' '}
          computes exactly this lever comparison (MOND+EFE&apos;s external-acceleration coupling vs. this
          framework&apos;s ambient-density coupling), cites Chae et al. 2020/2021&apos;s ~4σ EFE detection, and
          the registered run (SPARC RAR offsets vs. Cosmicflows-4 ambient density, N&nbsp;=&nbsp;141) gives
          r²&nbsp;=&nbsp;0.0001 &mdash; the kill bar fires. Two independent expert visitor passes (2026-08-03)
          flagged this page and <Link href="/for-researchers" style={{ color: '#38bdf8' }}>For Researchers</Link>{' '}
          as stating incompatible things (&ldquo;0 tests that could select it&rdquo; vs. an uncatalogued live
          discriminator); the resolution is that it was never uncatalogued, the cross-reference from this page
          just never pointed to it.
        </p>
        <div className="card" style={{ marginTop: '1rem', borderLeft: '3px solid #38bdf8' }}>
          <h3 style={{ color: '#38bdf8' }}>Tidal Dwarf Galaxy Test</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            For a 10<sup>7</sup> M&#x2609; TDG at g<sub>ext</sub> = 1.0 a&#x2080;,
            Synchronism predicts &#x03C3; ~ 10.5&ndash;14.5 km/s while MOND predicts &#x03C3; ~
            10.9&ndash;40.9 km/s. Observable with the NGC 5291 system (Bournaud et al. 2007, Lelli et al. 2015).
          </p>
          <ValidationBadge status="untested" label="Nested inside MOND's interval — see caveat" />
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>Correction (2026-08-01):</strong> this is not an independent novel prediction. Three
            problems, on the site&apos;s own numbers elsewhere: (1) <strong>the intervals are nested</strong> &mdash;
            [10.5, 14.5] sits almost entirely inside MOND&apos;s [10.9, 40.9]. Only &#x03C3; &gt; 14.5 discriminates,
            and that outcome falsifies Synchronism while leaving MOND untouched &mdash; this is the site&apos;s own
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}> nested-submodel argument</Link>{' '}
            showing up as a concrete interval. (2) <strong>The lever generating it is already dead:</strong> the
            weaker EFE is a consequence of the bounded boost B &#8804; 1/&#x03A9;<sub>m</sub> &#8776; 3.17, and that
            boost ceiling is exactly what TEST-09 and TEST-10 fire on in{' '}
            <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>. (3) The
            0.3&ndash;0.4&times; factor is read off the same RAR fit that converges to MOND&apos;s simple-&#x03BC;
            function (see <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy
            Rotation</Link>), so it is not independent of that fit. This card is kept for the record; it should
            not be read as a standing discriminating prediction, consistent with{' '}
            <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link>{' '}
            and <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link> both
            stating zero discriminating tests remain.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>Further correction (2026-08-02):</strong> the mechanism this card&apos;s numbers were built
            on (the &ldquo;nonlinear Poisson equation&rdquo;) has been retracted above &mdash; the structural
            prediction is EFE&nbsp;=&nbsp;0, not a weakened MOND EFE, so the quoted 10.5&ndash;14.5 km/s interval
            does not follow from anything currently on the site. Independently, an isolated-deep-MOND check for a
            10<sup>7</sup>&nbsp;M&#x2609; system gives &#x03C3;&nbsp;=&nbsp;(4GMa&#x2080;/81)<sup>1/4</sup>&nbsp;&approx;&nbsp;9.4&nbsp;km/s,
            radius-independent &mdash; below both quoted intervals, which the EFE (in MOND) can only lower further, not
            raise. No radius is stated for either interval and MOND&apos;s 40.9&nbsp;km/s upper bound does not
            reconstruct from the stated mass. The nested-interval, non-discriminating conclusion above still
            stands independent of this arithmetic; the specific numbers in this card do not and should not be
            cited.
          </p>
        </div>

        <h2>Sessions and History</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Derived in Sessions #87&ndash;88 of the autonomous research program. The derivation was
          independently stress-tested in Session #91, where the same result was obtained from
          a different starting point (via{' '}
          <Link href="/freemans-law" style={{ color: 'var(--color-accent-blue)' }}>Freeman&apos;s Law</Link>).
          Both derivations agree, providing internal consistency.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/freemans-law" className="btn-primary">
            Next: Freeman&apos;s Law &rarr;
          </Link>
          <Link href="/mond-comparator" className="btn-secondary">
            Try It: MOND Comparator
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/mond-unification" />
    </>
  );
}
