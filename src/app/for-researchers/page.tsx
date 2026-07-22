import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export const metadata: Metadata = {
  title: 'For Researchers: What\'s Citable — Synchronism',
  description: 'Four citable negative results extracted from the failure documentation: local-density locality no-go, A2ACW program-level null, dim-4 LIV exclusion of absolute-time substrates, and the B1 CHSH substrate null (S ≤ 2 without signaling).',
};

export default function ForResearchers() {
  return (
    <>
      <Breadcrumbs currentPath="/for-researchers" />
      <h1>For Researchers: What&apos;s Citable</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          An arriving expert should not have to excavate the failure documentation to find what
          survives it. By the site&apos;s own scoreboard the framework has <strong>0 confirmed
          predictions, 0 independently-derived parameters, and 0 tests currently discriminating
          from MOND+EFE+&Lambda;CDM</strong>. What remains citable are <strong>replications,
          quantified instances of known results, and executed negative results</strong> — the four
          artifacts below survive the framework being wrong, precisely because they do not depend
          on it being right.
        </p>

        {/* Artifact 1: locality no-go */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #8b5cf6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>1. The local-density no-go — a quantified instance of Milgrom&apos;s non-locality obstruction</h2>
            <ValidationBadge status="audited-negative" label="Audited-Negative — Executed Closure" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Honest novelty statement:</strong> the core obstruction is <em>not</em> ours.
            Milgrom showed MOND-as-modified-inertia must be strongly non-local
            (astro-ph/0510117), and the RAR/MDAR is keyed on acceleration, not density
            (Lelli, McGaugh &amp; Schombert 2016; Lelli et al. 2017, scatter &#x2272;0.13 dex).
            What this project adds is the <strong>quantified local-density instance</strong>: any
            gravity modification keyed on the <em>local volumetric density</em> &#x03C1;(r) fails in
            three independently executed ways — the SPARC RAR ensemble rejects the density-compander
            at &#x0394;BIC=+184 (free fit collapses to MOND); the cross-system &#x03C1;&#x2194;g<sub>bar</sub>{' '}
            offset is ~1.7 dex; and clusters require a &#x03C1;<sub>crit</sub> 10<sup>4</sup>–10<sup>6</sup>&times;
            off the galaxy calibration (Coma, four ansätze, one structurally bounded at velocity ratio &le;2 vs observed 4.6).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Scope split — which half generalizes (2026-07-08):</strong> the three numbered
            results carry different generality. The <em>sign statement below</em> (&rho;<sub>crit</sub>{' '}
            must scale as V<sup>&minus;2</sup>) is BTFR-forced and profile-independent — it holds for any
            local-&rho; MOND mimic. The <em>&#x0394;BIC=+184 ensemble rejection</em> is specific to the
            log-density compander family actually tested (&mu; = tanh(&#x03B3;&nbsp;ln(1+x))); other
            local-density functional forms would need their own ensemble runs. The cluster/offset
            arguments sit in between: the ~1.7 dex &rho;&#x2194;g<sub>bar</sub> mismatch is a property of
            the data geometry, but its magnitude was computed for this framework&apos;s calibration.
            Cite the sign statement for generality; cite the &#x0394;BIC for this family.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>One-line citable form — the sign statement (2026-07-02):</strong> a knee keyed on
            local volumetric density must <em>fall</em> as V<sup>&minus;2</sup> to track an a&#x2080;
            acceleration threshold (forced by the BTFR: r<sub>t</sub> &prop; V&sup2;, M &prop; V&#x2074;,
            so &rho;<sub>t</sub> &prop; a&#x2080;&sup2;/GV&sup2;); the framework asserts
            &rho;<sub>crit</sub> &prop; V<sup>+2</sup> — inverted sign, 240&times;&ndash;300,000&times;
            magnitude error growing with V. This is profile-independent and holds for <em>any</em>{' '}
            local-&rho; MOND mimic, not just this one — the no-go projected onto the velocity axis.
            Detail on <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The usable lemma is a locality triage:</strong> the discriminating axis for the
            contemporary emergent-gravity wave is the <em>locality of the modification&apos;s state
            variable</em>. Keyed on local &#x03C1;(r) (any &ldquo;coherence/information/entropy
            volumetric-density &rarr; gravity&rdquo; scheme): killed by the above. Keyed on non-local
            variables — Verlinde&apos;s enclosed M<sub>B</sub>(&lt;r), MOG&apos;s enclosed mass,
            MOND&apos;s acceleration or surface-density &Sigma; relations — <em>explicitly escapes</em>.
            This sorts proposals before fitting.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Positioning against the relativistic completions (added 2026-07-03):</strong> the
            non-local escape route this no-go identifies is not hypothetical — it is the one the
            published relativistic MOND completions already take. AeST (Aether-Scalar-Tensor;
            Skordis &amp; Z&#x0142;o&#x015B;nik, PRL 127, 161302 (2021)) reproduces MOND phenomenology
            from non-local field structure <em>and</em> passes CMB and linear-LSS constraints — the
            existence proof that the escape class is viable, modulo ongoing stability/ghost analyses
            of that theory. Read together: the local-density shortcut is quantitatively dead (this
            result); the surviving program is the AeST-class completions (the field&apos;s current
            frontier). A referee evaluating any new &ldquo;density &rarr; gravity&rdquo; proposal can
            use the triage above to decide which side of that line it falls on before fitting anything.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Known escapes from this no-go (added 2026-07-10):</strong> AeST is not the only
            published escape, and the second one is the more instructive because it <em>keeps a local
            density criterion</em>. Superfluid dark matter (Berezhiani &amp; Khoury, PRD 92, 103510
            (2015)) has dark matter Bose-condense in galaxies above a local density/temperature
            threshold — the same core intuition as this framework — but the MOND-like force is mediated
            by the condensate&apos;s <em>phonons</em>, so the force scale enters independently of the
            switching criterion. That separation is exactly what C(&#x03C1;) lacks: it conflates the
            switch and the force into one local function, and that conflation — not the density
            threshold per se — is what the data kill. Related prior art for the wrong-variable
            diagnosis: symmetron/chameleon screening, where density-dependent transitions are a mature
            field and the &#x03C1;-vs-g<sub>bar</sub> mismatch is the standard reason screened scalars
            don&apos;t reproduce MOND. (Whether the BTFR-forced V<sup>&minus;2</sup> argument constrains
            the superfluid&apos;s condensation threshold is an open check, queued — the expectation is
            no, because the phonon coupling carries the a&#x2080; scale separately.) Escape taxonomy:
            non-local theory (AeST-class), or local-criterion-<em>gated medium</em>
            (superfluid-DM-class); local-density <em>direct</em> modulation remains excluded.
          </p>
          <Link href="/honest-assessment" style={{ fontSize: '0.85rem' }}>Full closure documentation in Honest Assessment &rarr;</Link>
        </div>

        {/* Artifact 2: A2ACW null */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #38bdf8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>2. The A2ACW program-level null (retrospective controls, N=6) — same-corpus adversarial AI pairs do not generate or detect novelty</h2>
            <ValidationBadge status="audited-negative" label="Registered Null — Pending Cross-Vendor Control" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Honest novelty statement:</strong> the protocol is assembled prior art — adversarial
            pairs from AI Safety via Debate (Irving, Christiano &amp; Amodei 2018), role structure from
            CAMEL/MetaGPT, failure modes from the multi-agent-systems literature. The citable artifact
            is the <strong>program-level null result with retrospective controls</strong> (N=6 audits,
            not preregistered held-out experiments; one corpus, one framework): <strong>3,308 sessions
            produced ~47 internally-consistent candidate claims (1.4% survival rate); of those, 6 received
            external expert audit, and 0 survived</strong>. The honest denominator is <strong>0 of 6
            audited</strong> (0 of 47 pending audit) &mdash; not &ldquo;0 across 3,308 sessions,&rdquo; which
            would overstate the number of adjudicated trials by two orders of magnitude (corrected 2026-07-09
            after two visitor personas independently flagged the site quoting this null at three different,
            mutually inconsistent denominators). Both error rates on the 6 are measured — temporal-asymmetry
            control 0/6 (later-demoted claims caught; median prior-art year ~1996), vocabulary-asymmetry 4/4 on
            the prior-art-rediscovery subclass, and <strong>specificity 0/6</strong> (every held-out genuine
            discovery false-flagged — a measured false-positive rate of 6/6 = 1.0 on the control set — see{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>).
            Discrimination lives entirely in unautomated human novelty judgment.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Put the two rates together and the detector is uninformative:</strong> combined
            sensitivity (true-positive rate) is 6/6 = 1.0 (self-simulated upper bound, see above);
            specificity is 0/6, i.e. the false-positive rate is also 6/6 = 1.0. Youden&apos;s
            J = TPR − FPR = 1.0 − 1.0 = <strong>0</strong> (AUC ≈ 0.5). A classifier that
            flags every demoted claim <em>and</em> every genuine discovery carries zero
            discriminating information — both numbers were already published on this site, on
            two different pages, and had never been combined until a 2026-07-14 visitor pass did the
            subtraction. The 6/6 catch rate is not the methodology&apos;s best result; multiplied
            against its own specificity, it is the demonstration that the detector cannot tell a
            demotion from a discovery.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Measured, not asserted: adversarial same-corpus AI pairs filter for internal consistency
            but cannot substitute for out-of-distribution evaluation. Relevant to anyone building
            AI-for-science generation pipelines on shared training corpora.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            <strong>No control arm; a confound the null doesn&apos;t resolve:</strong> the corpus audited
            is Synchronism itself, which this site independently concludes is a MOND reparametrization.
            &ldquo;Adversarial same-corpus AI pairs cannot generate out-of-distribution novelty&rdquo; and
            &ldquo;this particular seed framework contained none to find&rdquo; are observationally
            degenerate in a single-arm, single-corpus design — there is no measured human-pair survival
            rate on the same corpus to compare against. The generalization to AI-for-science pipelines
            generally is a hypothesis this design cannot license on its own.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            <strong>Artifact status downgraded (2026-07-18, external researcher review):</strong> until the
            cross-vendor corpus control runs — the one registered experiment that would break the
            single-arm degeneracy above — this is a <em>registered null with a stated path to becoming a
            citable artifact</em>, not yet the artifact. What is citable today is the measured
            retrospective-control numbers (0/6, J = 0) and the confound analysis itself; the
            program-level generalization gates on the unrun control arm.
          </p>
          <Link href="/a2acw" style={{ fontSize: '0.85rem' }}>Protocol, prior art, and audit details &rarr;</Link>
        </div>

        {/* Secondary: DESI mechanism-class */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Secondary: the DESI growth-suppression negative (mechanism-class)</h2>
            <ValidationBadge status="failed" label="Disfavored 2.4σ on σ₈ — ~1.5σ on Registered fσ₈ — Post-hoc — Underpowered to Discriminate" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            TEST-04a predicted &#x03C3;&#x2088;&nbsp;&#x2248;&nbsp;0.76 (calibrated to the then-live S8 lensing tension);
            DESI DR1 full-shape combined &#x03C3;&#x2088;&nbsp;=&nbsp;0.841&plusmn;0.034 (Table 10) &mdash; a
            <strong> 2.4&#x03C3;</strong> amplitude tension on &#x03C3;&#x2088;. <strong>Correction (2026-07-14):
            the criterion was registered on a different statistic, fσ₈(z=0.51) &gt; 0.46 for &gt;3&#x03C3;.</strong>{' '}
            On that statistic directly &mdash; LRG1 fσ₈&nbsp;=&nbsp;0.474&nbsp;&times;&nbsp;1.16&plusmn;0.062&nbsp;=
            &nbsp;0.550&plusmn;0.062 &mdash; the threshold is exceeded by only <strong>~1.5&#x03C3;</strong>, short
            of the registered &gt;3&#x03C3; bar. &#x03C3;&#x2088; is inferred assuming GR growth kernels, so using
            it to falsify a modified-growth model risks circularity. DESI&apos;s own purpose-built
            modified-gravity analysis, Ishak et al. arXiv:2411.12026 (JCAP 09 (2025) 053, previously uncited
            here), gives &#x3bc;&#x2080;&nbsp;=&nbsp;0.11 (+0.45/&minus;0.54) from DESI alone &mdash; a 12%
            fσ₈ suppression maps to a &#x3bc;&#x2080; inside that 1&#x03C3; band. Honest reading: <strong>the test
            as registered lacked the power to discriminate this framework from GR</strong> &mdash; the
            &#x03C3;&#x2088; comparison is real but is not the registered kill. A single bin
            (LRG1, z=0.51) also shows fσ₈ growth above fiducial (ratio 1.16&plusmn;0.13, ~1.2&#x03C3;), and the
            DESI DR1 full-shape RSD <em>ensemble</em> growth index &#x03B3;<sub>growth</sub>&nbsp;&#x2248;&nbsp;0.58,
            above GR&apos;s 0.545, leans mildly toward suppression &mdash; the predicted direction. Caveats:
            the prediction was <strong>post-hoc</strong> (&#x03C3;&#x2088; calibrated to the S8 lensing tension,
            which has since receded), the &#x3bc;&#x2080; projection above has not been formally run (seeded as
            an explorer topic), and the verdict is frozen at DR1. What transfers: any framework whose
            mechanism damps late-time structure growth to match a receded S8 tension sits in the same
            disfavored-on-&#x03C3;&#x2088; box, though this specific DESI test does not discriminate it from GR.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: '0.25rem' }}>
            Currency: verdict anchored to DESI DR1 (arXiv:2411.12021) as of 2026-07-02.
            DESI DR2 full-shape growth constraints are not yet published (expected ~Spring 2027).
            If DR2 full-shape reports fσ₈(z≈0.5) ≤ 0.46, the verdict unfreezes for re-adjudication;
            any DR2 value above DR1&apos;s would deepen the disfavor, not relieve it.
          </p>
          <Link href="/tier-1-existing" style={{ fontSize: '0.85rem' }}>TEST-04a full accounting &rarr;</Link>
        </div>

        {/* Artifact 3: The dim-4 LIV exclusion — transferable result */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #f59e0b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>3. Dim-4 radiative LIV exclusion of absolute-time discrete substrates — a citable no-go</h2>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <ValidationBadge status="untested" label="Time-of-Flight: Structurally Unreachable" />
              <ValidationBadge status="audited-negative" label="Preferred-Frame + Dim-4: Naturalness Gap (16–28 OOM; custodial escapes unexhibited)" />
            </div>
          </div>

          {/* Citable result framing — what transfers beyond Synchronism */}
          <div style={{
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            marginTop: '0.75rem',
            marginBottom: '0.75rem',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
          }}>
            <strong style={{ color: '#f59e0b' }}>Transferable result (independent of Synchronism being correct):</strong>{' '}
            Any discrete absolute-time substrate without an added custodial boost-symmetry generates
            dimension-4 Lorentz-violating SME coefficients c<sub>μν</sub>&nbsp;~&nbsp;α/π&nbsp;~&nbsp;10<sup>&#x2212;2</sup>
            at one loop (Collins, Perez, Sudarsky, Urrutia &amp; Vucetich, <em>PRL</em> 93, 191301, 2004 &mdash;
            author list corrected 2026-07-09; previously misattributed to Gambini &amp; Pullin, who are not
            authors on this paper).
            Existing bounds reach 10<sup>&#x2212;18</sup>–10<sup>&#x2212;30</sup> — a 16–28 OOM fine-tuning gap.
            The exclusion applies to any model whose defining commitment is an absolute preferred frame,
            regardless of the other details. A LIV/quantum-foundations referee can cite this as a
            naturalness problem — not a falsification. The distinction matters for the site&apos;s own
            epistemic discipline: &ldquo;refuted&rdquo; is reserved for data contradictions; this is a severe
            fine-tuning gap (matching the electroweak hierarchy problem in kind, if not in degree).
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Every other prediction in this framework either (a) reproduces MOND/ΛCDM/Zurek
            without discriminating content, or (b) faces a decisive constraint. The <strong>one channel that isn&apos;t
            MOND-or-Zurek</strong> is the substrate-discreteness Lorentz-violation signature
            (LIV). Its status has two faces — one that is genuinely unreachable, one that carries
            a severe naturalness gap under existing experiments:
          </p>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Face 1 — Time-of-flight (dim≥5): three locks, genuinely unreachable
          </p>
          <ol style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', paddingLeft: '1.25rem', lineHeight: 1.7, marginTop: 0 }}>
            <li>
              <strong>Symmetry forbids the refutable channel</strong> <em>(under assumed reflection-symmetric substrate)</em>.{' '}
              The substrate dispersion relation is even in k (lattice reflection symmetry), so the leading
              LIV correction is <em>quadratic</em> (n=2) — no linear (n=1) term. Current GRB time-of-flight
              bounds put n=1 LIV <em>above</em> the Planck scale (LHAASO GRB 221009A 2024:
              E<sub>QG,1</sub> &gt; 5.9 E<sub>Pl</sub>; Fermi-LAT: &gt; 7.6 E<sub>Pl</sub>).
              <em>Note: Lock 1 holds only if the substrate has reflection symmetry. A parity-breaking
              discretization restores the n=1 term — which is already refuted. The choice of
              even-k symmetry is an assumption, not a derivation.</em>
            </li>
            <li>
              <strong>The same symmetry pins the prediction below reach.</strong> n=2 sits at
              E<sub>QG,2</sub> &#x2248; E<sub>Pl</sub>, while the current bound is
              E<sub>QG,2</sub> &gt; 6&times;10<sup>&#x2212;8</sup> E<sub>Pl</sub> (LHAASO 2024)
              — a gap of ~10<sup>7</sup>. Foreseeable GRB instruments gain factors of a few per
              event; closing 10<sup>7</sup> is not a foreseeable-instrument prospect.
            </li>
            <li>
              <strong>Non-uniqueness makes it non-confirming even if reached.</strong> n=2
              discrete-substrate LIV is generic to LQG and causal-set models; a detection would
              read as &ldquo;quantum gravity,&rdquo; not as Synchronism specifically.
            </li>
          </ol>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Face 2 — Preferred frame + dim-4: <strong>CPSU 2004 naturalness gap</strong> (c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;10<sup>&#x2212;2</sup> at one loop, 16–28 OOM above bounds; custodial escapes unexhibited)
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            A discrete substrate with absolute time picks out a preferred (CMB-rest) frame. Preferred-frame
            physics shows up at <strong>dimension four</strong> — the renormalizable, <em>non-Planck-suppressed</em>
            level — via two channels:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
            <li>
              <strong>Species-dependent limiting speed (SME c<sub>μν</sub>).</strong> A dim-4
              operator ω²=m²+(1+c<sub>LIV</sub>)k² is <em>even in k</em> — the even-k symmetry
              does <em>not</em> forbid it. Existing bounds: |c<sub>LIV</sub>| ≲ 10<sup>&#x2212;18</sup>{' '}
              (cavity Michelson–Morley rotating resonators) to ~10<sup>&#x2212;22</sup>–10<sup>&#x2212;29</sup>{' '}
              (Hughes–Drever clock-comparison experiments). These are tabulated annually in the{' '}
              <em>SME Data Tables</em> (Kostelecký &amp; Russell, <em>Rev. Mod. Phys.</em> 83, 11 (2011), updated 2024).
              The framework&apos;s absolute-time / universal-clock commitment gives up boost invariance —
              the minimal custodial protector against radiative generation of this coefficient
              (Collins–Perez–Sudarsky–Gambini–Pullin, <em>PRL</em> 93, 191301 (2004)).
              <strong> Verdict: severe naturalness/fine-tuning gap (CPSU 2004).</strong>{' '}
              Computation (2026-06-26 explorer): tree-level c<sub>&#x03BC;&#x03BD;</sub>=0 by single-substrate universality (no species-dependent k² coefficient at tree level). One-loop correction is UV-dominated and Planck-cutoff-independent: c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;&#x03B1;/&#x03C0;&nbsp;~&nbsp;10<sup>&#x2212;2</sup>–10<sup>&#x2212;3</sup>. Existing bounds: ≲10<sup>&#x2212;18</sup> (cavity MM), ≲10<sup>&#x2212;29</sup>–10<sup>&#x2212;30</sup> (nucleon comagnetometer). Fine-tuning gap: <strong>16–28 orders of magnitude</strong>. Two standard perturbative custodial escapes exist in the literature but are unexhibited in this framework: (1) <strong>SUSY</strong> (Groot Nibbelink &amp; Pospelov, <em>PRL</em> 94, 081601, 2005): forbids dim-3/4 LV operators entirely; (2) <strong>Anisotropic scale-hierarchy</strong> (Pospelov &amp; Shang, <em>PRD</em> 85, 105001, 2012): demonstrated for Hořava–Lifshitz gravity (the canonical absolute-time class) — separates the LV-generating scale from the electroweak scale via Λ_HL ≪ M_pl, suppressing SM-sector LV perturbatively without restoring boost invariance. The framework adopts neither: single-substrate universality is itself the obstacle to a Λ_HL ≪ M_pl scale separation. Status: <em>open custodial-mechanism gap, not a closed refutation.</em>
            </li>
            <li>
              <strong>Velocity-anisotropic phase-transition threshold (Phase-16, 2026-06-24).</strong>{' '}
              If identity thresholds are fixed in the substrate/CMB frame, Earth's motion (v ≈ 370 km/s,
              β ≈ 1.2×10<sup>&#x2212;3</sup>) produces a fractional-frequency anisotropy: dipole ∼β ≈ 1.2×10<sup>&#x2212;3</sup>,
              quadrupole ∼β² ≈ 1.5×10<sup>&#x2212;6</sup>. Cavity-MM and clock-comparison experiments bound
              this at 10<sup>&#x2212;18</sup>–10<sup>&#x2212;22</sup>. The prediction is <strong>11–19 orders of
              magnitude above existing limits</strong>. Escape: co-moving thresholds — survivable but non-novel
              (recovers standard SR with zero new content).
            </li>
          </ul>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '0.25rem' }}>
            These are two distinct LIV operators: Face 1 (dim≥5 dispersion, time-of-flight) and Face 2 (dim-4 SME c<sub>&#x03BC;&#x03BD;</sub>, preferred-frame). Reading the badges together &mdash; &ldquo;structurally unreachable&rdquo; and &ldquo;naturalness gap&rdquo; &mdash; is not a contradiction. The protected channel cannot discriminate (non-unique, ~10<sup>7</sup> below reach); the preferred-frame channel carries a severe fine-tuning requirement. The framework&apos;s absolute-time commitment is the source of both.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Net:</strong> the time-of-flight face is symmetry-protected and unreachable (three locks stand).
            The preferred-frame / dim-4 face carries a <strong>severe naturalness gap</strong> (c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;10<sup>&#x2212;2</sup>, 16–28 OOM above existing bounds; CPSU 2004) — and it is the framework&apos;s defining commitment (absolute time) that generates it. This is the framework&apos;s only non-MOND, non-Zurek channel. Standard perturbative escapes (SUSY, anisotropic scale-hierarchy) exist in the literature but are unexhibited in the framework; without one, the naturalness gap is unresolved.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            Research lineage: PREDICTIONS.md B7 / Phase-12 / Phase-13 / Phase-16 in the{' '}
            <a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>
              Synchronism research archive
            </a>.{' '}
            Dim-4 c<sub>μν</sub> coefficient computed (2026-06-26): radiative value ~10<sup>&#x2212;2</sup>, 16–28 OOM above existing bounds (CPSU 2004 naturalness problem, not a data-driven refutation). For the framework to survive this channel, an unexhibited custodial mechanism must be specified — known candidates are SUSY (Groot Nibbelink &amp; Pospelov 2005) and anisotropic scale-hierarchy (Pospelov &amp; Shang 2012, demonstrated for Hořava–Lifshitz). This is the framework&apos;s most severe naturalness constraint. Corrected framing per 2026-06-30 explorer audit: earlier versions mislabeled this &ldquo;refuted&rdquo; and &ldquo;doubly-obstructed&rdquo; — both overstatements corrected here.
          </p>
        </div>

        {/* Artifact 4: B1 CHSH substrate null */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-violet)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>4. CHSH substrate null — a worked corollary of Bell&apos;s theorem (Bet B1, executed)</h2>
            <ValidationBadge status="failed" label="S ≤ 2 Both No-Signaling Arms — Executed 2026-06-21 / 2026-07-06" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The framework&apos;s substrate ontology was tested against Bell by direct CHSH simulation
            (kuramoto-lattice-suite, research-ledger bet B1), with freely chosen settings and
            measurement only through observer-pattern phase-lock. Results:{' '}
            <strong>local construction S = 1.98; nonlocal-grid construction S &equiv; 2.00 at every
            coupling strength with zero signaling</strong> (a uniform shared phase is gauge-equivalent
            to relabeling the measurement angles — smooth single-grid mediation stays local-realist);
            a global-clock construction reaches S = 2.67 only by also signaling. The 2026-07-06 run
            extends the cap to the framework&apos;s <em>own</em> saturation-gated Intent-density
            substrate (S = 1.85 &le; 2, no signaling): the cap is <strong>substrate-independent</strong> —
            Bell&apos;s structure theorem for any real-valued local-realist model, not an artifact of
            the phase substrate. The triptych A (real-local) = 2 &lt; B (Born-rule cos&sup2;
            projection) = 2&radic;2 &lt; C (PR-box) = 4 localizes the Tsirelson value as the fixed
            point of the projection law — reachable only by importing Hilbert-space structure wholesale.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            <strong>Honest classification (sharpened 2026-07-18, external researcher review): the number is a
            corollary, the lesson is what transfers.</strong> S &le; 2 was the <em>guaranteed</em> outcome for
            any no-signaling local-realist construction — Bell&apos;s theorem functioning as designed — so the
            simulations are pedagogy plus a registered bet honestly lost, not a new result. What transfers is
            the worked lesson: &ldquo;our substrate is nonlocal by construction, so Bell doesn&apos;t
            apply&rdquo; is a recurring move in emergent-QM proposals, and this is a minimal executed
            counterexample — declaring the substrate nonlocal does not evade Bell, it chooses the nonlocal
            horn, and the construction must then produce a non-relabelable, <em>conditional</em>
            setting-dependence or stay at S &le; 2. Cite it for that lesson, not for the number. Full
            construction detail and the open Born-rule problem on{' '}
            <Link href="/two-reframes" style={{ color: 'var(--color-accent-blue)' }}>Two Reframes</Link>.
          </p>
        </div>

        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>Referee-relevant structural gap — C has no
          measurement protocol:</strong>{' '}
          no protocol maps any laboratory or astronomical observable to the coherence value C, in any
          domain (the consciousness kill criterion named EEG phase coherence — a quantity the framework
          says C is <em>not</em>; BCS condensates sit at C &#x2248; 0). Combined with N<sub>corr</sub> being
          asserted rather than counted on all 17 scales, C is <strong>doubly unanchored</strong>: inputs
          asserted, output unmeasurable. This is why several claims are labeled{' '}
          <em>unrunnable as stated</em> rather than untested — a third category beyond
          refuted/untested. The only data contact is galaxy rotation, where C&apos;s parameters are fit
          to the prediction target.
        </div>

        <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#f59e0b' }}>What is deliberately not on this page:</strong>{' '}
          the framework&apos;s positive claims (all reparametrizations, failures, or unrunnable as
          stated — see <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>),
          and the &ldquo;47 research contributions&rdquo; (uncharacterized — no null-model or prior-art
          comparison; see the sidebar caveat on Honest Assessment).
        </div>
      </section>

      <RelatedConcepts currentPath="/for-researchers" />
    </>
  );
}
