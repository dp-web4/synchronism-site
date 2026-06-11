import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export const metadata: Metadata = {
  title: 'For Researchers: What\'s Citable — Synchronism',
  description: 'The defensible artifacts extracted from the failure documentation: the local-density locality no-go and the A2ACW controlled null result.',
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
          from MOND+EFE+&Lambda;CDM</strong>. What remains citable does not require the framework
          to be right — both artifacts below survive it being wrong.
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
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>2. The A2ACW controlled null — same-corpus adversarial AI pairs do not generate or detect novelty</h2>
            <ValidationBadge status="audited-negative" label="Audited-Negative — Program-Level Null" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Honest novelty statement:</strong> the protocol is assembled prior art — adversarial
            pairs from AI Safety via Debate (Irving, Christiano &amp; Amodei 2018), role structure from
            CAMEL/MetaGPT, failure modes from the multi-agent-systems literature. The citable artifact
            is the <strong>controlled program-level null result</strong>: across 3,308 sessions, a 1.4%
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
            <ValidationBadge status="failed" label="Failed — Kill Criterion Triggered" />
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            TEST-04a predicted late-time growth suppression (f&#x03C3;&#x2088; &#x2248; 0.418 at z=0.51);
            DESI DR1 full-shape measures enhancement (LRG1 ratio 1.16&plusmn;0.13 above fiducial).
            Caveats first: the prediction was <strong>post-hoc</strong> (&#x03C3;&#x2088; calibrated to the
            S8 lensing tension, which has since receded), and the verdict is frozen at DR1. What
            transfers: any framework whose mechanism damps late-time structure growth sits in the same
            disfavored box — a sign-level constraint on the coherence-damped suppression class, not
            just on this framework.
          </p>
          <Link href="/tier-1-existing" style={{ fontSize: '0.85rem' }}>TEST-04a full accounting &rarr;</Link>
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
