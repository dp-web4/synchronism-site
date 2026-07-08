import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const applications = [
  {
    concept: 'MRH (Markov Relevancy Horizon)',
    where: 'Web4',
    link: 'https://github.com/dp-web4/web4',
    linkLabel: 'github.com/dp-web4/web4',
    what: 'Fractal context-scoping: relevance and trust bounded by context, implemented as RDF graphs. Same concept, production vocabulary — not an analogy.',
  },
  {
    concept: 'Coherence / phase-change machinery',
    where: 'SAGE',
    link: 'https://github.com/dp-web4/SAGE',
    linkLabel: 'github.com/dp-web4/SAGE',
    what: 'Metabolic states and the IRP (iterative refinement) loop run on the coherence and phase-transition concepts — coherence-gated behavior in a working AI framework.',
  },
  {
    concept: 'Fractal societies + quantized entities',
    where: 'hestia + the hub',
    link: 'https://github.com/dp-web4/web4/tree/main/hub',
    linkLabel: 'web4/tree/main/hub',
    what: 'A deployed, runnable society: roles, a signed charter, a witnessed ledger. Entities exist to the degree they are witnessed — Synchronism witnessing turned into governance you can run.',
  },
  {
    concept: 'Quantized entities across scales + feedback loops',
    where: 'The live fleet',
    link: 'https://4-lab.io/fleet',
    linkLabel: '4-lab.io/fleet',
    what: 'A live coherence / feedback-loop system — machines as quantized entities across scales, witnessing each other and self-correcting. The model’s concepts running as the lab’s nervous system.',
  },
  {
    concept: 'Coupling, coherence, phase-detection',
    where: 'gnosis-research',
    link: 'https://github.com/dp-web4/gnosis-research',
    linkLabel: 'github.com/dp-web4/gnosis-research',
    what: 'A 4.5-month autonomous arc whose strongest, most reproducible results land in exactly this register — systems behavior — not hard-science prediction. (Its Session 63 also showed the C ≈ 0.50 consciousness threshold had never really been tested: the test variable was SNARC salience, not C.)',
  },
];

export default function WhereItsUseful() {
  return (
    <>
      <Breadcrumbs currentPath="/where-its-useful" />
      <h1>Where It&apos;s Already Useful</h1>
      <ValidationBadge status="active-mrh" label="Applied design ontology — load-bearing in running code" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
          &ldquo;All models are wrong, some are useful.&rdquo; If the physics ledger reads zero confirmed
          predictions &mdash; what, concretely, is the <em>useful</em>?
        </p>

        <div style={{ padding: '0.85rem 1.1rem', background: 'rgba(56,189,248,0.07)', borderRadius: '6px', borderLeft: '3px solid var(--color-accent-blue)', marginBottom: '1.75rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', margin: 0 }}>
            <strong>The honest split.</strong> As a <em>physics theory</em>, Synchronism is unproven &mdash;
            zero confirmed novel predictions (see{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>).
            As an <em>applied design ontology</em> for coherence, emergence, systems behavior, and governance,
            it is already <strong>load-bearing</strong> &mdash; written into live, public, AGPL code you can clone
            and run today. Both claims are true. This page is the second one.
          </p>
        </div>

        <h2>What it&apos;s already good for</h2>
        <p>
          The proof here isn&apos;t a paper; it&apos;s running code. Each row below is a Synchronism concept
          doing real work in a deployed system &mdash; production vocabulary, not metaphor.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
          {applications.map((a) => (
            <div key={a.concept} className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <strong style={{ fontSize: '0.95rem' }}>{a.concept}</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-violet)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  &rarr; {a.where}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.4rem' }}>
                {a.what}
              </p>
              <a href={a.link} style={{ color: 'var(--color-accent-blue)', fontSize: '0.82rem', fontFamily: 'monospace' }}>
                {a.linkLabel}
              </a>
            </div>
          ))}
        </div>

        <h2>The canonical equation literally carries MRH</h2>
        <div className="equation" style={{ fontSize: '1.05rem', margin: '0.75rem 0' }}>
          Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          Web4 is built on Synchronism principles: trust-as-coherence (T3/V3), self-sovereign fractal
          societies, quantized entities across scales, and ATP/ADP energy metabolism. MRH &mdash; a
          Synchronism foundational concept &mdash; sits in the equation by name, not by analogy.
        </p>

        <div style={{ padding: '0.85rem 1.1rem', background: 'rgba(167,139,250,0.07)', borderRadius: '6px', borderLeft: '3px solid var(--color-accent-violet)', margin: '1.5rem 0' }}>
          <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1rem', color: 'var(--color-accent-violet)' }}>
            A dictionary that builds things is doing its job
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            The cold read &mdash; &ldquo;a dictionary, not a discovery&rdquo; &mdash; mistakes the genre.
            Synchronism is a <strong>generative vocabulary that has already built working systems</strong>:
            fractal societies, quantized entities, coherence mechanisms, and feedback loops, written in code
            that runs. A dictionary that builds things is doing its job. That is the &ldquo;useful&rdquo; in
            &ldquo;all models are wrong, some are useful&rdquo; &mdash; the axis the physics ledger&apos;s
            &ldquo;zero confirmed&rdquo; should not be allowed to erase.
          </p>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          This is delivered, demonstrable value on the <strong>applied</strong> axis (design ontology),
          explicitly distinct from the <strong>physics</strong> axis (which reads zero-confirmed). For the
          physics side, see the honest ledger; for the foundations these applications draw on, see the
          fundamentals.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/fundamentals" className="btn-primary">
            The foundations these draw on &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            The physics ledger (zero confirmed)
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/where-its-useful" />
    </>
  );
}
