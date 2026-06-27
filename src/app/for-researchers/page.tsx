import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export const metadata: Metadata = {
  title: 'For Researchers: What\'s Citable — Synchronism',
  description: 'The defensible artifacts extracted from the failure documentation: the local-density locality no-go and the A2ACW program-level null result.',
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
          from MOND+EFE+&Lambda;CDM</strong>. What remains citable are <strong>replications and
          quantified instances of known results</strong> — both artifacts below survive the framework
          being wrong, precisely because they do not depend on it being right.
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
            <strong>The usable lemma is a locality triage:</strong> the discriminating axis for the
            contemporary emergent-gravity wave is the <em>locality of the modification&apos;s state
            variable</em>. Keyed on local &#x03C1;(r) (any &ldquo;coherence/information/entropy
            volumetric-density &rarr; gravity&rdquo; scheme): killed by the above. Keyed on non-local
            variables — Verlinde&apos;s enclosed M<sub>B</sub>(&lt;r), MOG&apos;s enclosed mass,
            MOND&apos;s acceleration or surface-density &Sigma; relations — <em>explicitly escapes</em>.
            This sorts proposals before fitting.
          </p>
          <Link href="/honest-assessment" style={{ fontSize: '0.85rem' }}>Full closure documentation in Honest Assessment &rarr;</Link>
        </div>

        {/* Artifact 2: A2ACW null */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #38bdf8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>2. The A2ACW program-level null (retrospective controls, N=6) — same-corpus adversarial AI pairs do not generate or detect novelty</h2>
            <ValidationBadge status="audited-negative" label="Audited-Negative — Program-Level Null" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Honest novelty statement:</strong> the protocol is assembled prior art — adversarial
            pairs from AI Safety via Debate (Irving, Christiano &amp; Amodei 2018), role structure from
            CAMEL/MetaGPT, failure modes from the multi-agent-systems literature. The citable artifact
            is the <strong>program-level null result with retrospective controls</strong> (N=6 audits,
            not preregistered held-out experiments; one corpus, one framework): across 3,308 sessions, a 1.4%
            internal-consistency survival rate yielded <strong>0 novel survivors</strong> after external
            expert audit, with both error rates measured — temporal-asymmetry control 0/6 (later-demoted
            claims caught; median prior-art year ~1996), vocabulary-asymmetry 4/4 on the
            prior-art-rediscovery subclass, and <strong>specificity 0/6</strong> (every held-out genuine
            discovery false-flagged). Discrimination lives entirely in unautomated human novelty judgment.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Measured, not asserted: adversarial same-corpus AI pairs filter for internal consistency
            but cannot substitute for out-of-distribution evaluation. Relevant to anyone building
            AI-for-science generation pipelines on shared training corpora.
          </p>
          <Link href="/a2acw" style={{ fontSize: '0.85rem' }}>Protocol, prior art, and audit details &rarr;</Link>
        </div>

        {/* Secondary: DESI mechanism-class */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Secondary: the DESI growth-suppression negative (mechanism-class)</h2>
            <ValidationBadge status="failed" label="Disfavored ~2σ — Post-hoc — Kill Criterion Triggered" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            TEST-04a predicted late-time growth suppression (f&#x03C3;&#x2088; &#x2248; 0.418 at z=0.51);
            DESI DR1 full-shape measures enhancement (LRG1 ratio 1.16&plusmn;0.13 above fiducial,
            single bin LRG1 z=0.51, ~2.15&#x03C3;). Caveats first: the prediction was <strong>post-hoc</strong>
            (&#x03C3;&#x2088; calibrated to the S8 lensing tension, which has since receded),
            the kill fires on one bin at one redshift (not the full DESI ensemble), and the verdict
            is frozen at DR1 — re-adjudication against DESI DR2 full-shape is warranted. What
            transfers: any framework whose mechanism damps late-time structure growth sits in the same
            disfavored box — a sign-level constraint on the coherence-damped suppression class, not
            just on this framework.
          </p>
          <Link href="/tier-1-existing" style={{ fontSize: '0.85rem' }}>TEST-04a full accounting &rarr;</Link>
        </div>

        {/* Artifact 3: The one novel channel */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #f59e0b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>3. The only non-MOND, non-Zurek channel — discrete-substrate Lorentz violation</h2>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <ValidationBadge status="untested" label="Time-of-Flight: Structurally Unreachable" />
              <ValidationBadge status="audited-negative" label="Preferred-Frame + Dim-4: Refuted at Natural Value (16–28 OOM)" />
            </div>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            Every other prediction in this framework either (a) reproduces MOND/ΛCDM/Zurek
            without discriminating content, or (b) is refuted. The <strong>one channel that isn&apos;t
            MOND-or-Zurek</strong> is the substrate-discreteness Lorentz-violation signature
            (LIV). Its status has two faces — one that is genuinely unreachable, one that is
            already constrained by existing experiments:
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
            Face 2 — Preferred frame + dim-4: <strong>refuted at the natural radiative value</strong> (c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;10<sup>&#x2212;2</sup>, 16–28 OOM above bounds)
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
              The framework's absolute-time / universal-clock commitment gives up the only custodial symmetry
              (boost invariance) that could forbid radiative generation of this coefficient from the Planck
              sector (Collins–Perez–Sudarsky–Gambini–Pullin, <em>PRL</em> 93, 191301 (2004)).
              <strong> Verdict: refuted at the natural radiative value.</strong>{' '}
              Computation (2026-06-26 explorer, Collins–Perez–Sudarsky–Gambini–Pullin 2004): tree-level c<sub>&#x03BC;&#x03BD;</sub>=0 by single-substrate universality (no species-dependent k² coefficient). But the one-loop radiative correction is UV-dominated and Planck-cutoff-independent: c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;&#x03B1;/&#x03C0;&nbsp;~&nbsp;10<sup>&#x2212;2</sup>–10<sup>&#x2212;3</sup>. Existing bounds: ≲10<sup>&#x2212;18</sup> (cavity MM), ≲10<sup>&#x2212;29</sup>–10<sup>&#x2212;30</sup> (nucleon comagnetometer). Fine-tuning gap: <strong>16–28 orders of magnitude</strong>. Absolute time removes the only custodial symmetry (boost invariance). SM-containing completion forces perturbative gauge couplings, defeating the strong-dynamics escape. Doubly-obstructed: the framework's defining ontological commitment is the source of its own exclusion.
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
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Net:</strong> the time-of-flight face is symmetry-protected and unreachable (three locks stand).
            The preferred-frame / dim-4 face is <strong>refuted at the natural radiative value</strong> (c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;10<sup>&#x2212;2</sup>, 16–28 OOM above existing bounds) — and it is the framework&apos;s defining commitment (absolute time) that causes the exclusion. This is the framework&apos;s only non-MOND, non-Zurek channel, and it falls on the <em>refutation</em> side. A survival path exists only with an unspecified, doubly-obstructed custodial UV mechanism.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            Research lineage: PREDICTIONS.md B7 / Phase-12 / Phase-13 / Phase-16 in the{' '}
            <a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>
              Synchronism research archive
            </a>.{' '}
            Dim-4 c<sub>μν</sub> coefficient computed (2026-06-26): radiative value ~10<sup>&#x2212;2</sup>, refuted by 16–28 OOM. For the framework to survive this channel, an unspecified UV mechanism that is simultaneously boost-symmetry-independent and non-perturbative must be exhibited. Absent that, this is the framework&apos;s most decisive falsification.
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
