'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function BornRule() {
  return (
    <>
      <Breadcrumbs currentPath="/born-rule" />
      <PathNav currentPath="/born-rule" />
      <h1>Born Rule as Coherence Conservation: An Equivalent Formulation</h1>
      <ValidationBadge status="reparametrization" label="Interpretive Restatement" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The Born rule &mdash; that quantum measurement probabilities are given by |&#x03B1;|&sup2;
          &mdash; is one of the foundational postulates of quantum mechanics. In standard QM, it is
          simply asserted. Synchronism offers an equivalent statement in coherence-conservation language.
          This is a reparametrization, not a derivation: the argument below does not predict any deviation
          from |&#x03B1;|&sup2; in any regime (see verdict below).
        </p>

        <EquationDisplay size="lg" label="The Born rule">
          P(outcome) = |&#x03B1;|&sup2;
        </EquationDisplay>

        <h2>The Argument as the Archive States It</h2>
        <p>
          Developed across Sessions #266-270, the argument proceeds in three steps. They are reproduced as
          written; what is wrong with them follows directly below, and the page badge is the verdict.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8' }}>Step 1: Coherence is Conserved</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Total coherence in an isolated system is constant. If a system is in superposition
              &#x03B1;|0&#x27E9; + &#x03B2;|1&#x27E9;, the total coherence is distributed across
              branches. Conservation requires that the sum over all branches equals the initial
              coherence of the system.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Step 2: Coherence Maps to Probability</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              At an MRH crossing (measurement), the coherence in each branch determines how
              &ldquo;real&rdquo; that branch is. The branch with more coherence has more physical
              weight. If coherence is the fundamental quantity, then the probability of observing
              a given outcome is proportional to the coherence in that branch.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e' }}>Step 3: Conservation + Unitarity &rarr; |&#x03B1;|&sup2;</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              If coherence is conserved (Step 1) and probabilities are proportional to coherence
              (Step 2), and the time evolution is unitary (preserving inner products), then the
              only consistent probability measure is |&#x03B1;|&sup2;. Gleason&apos;s theorem provides
              the mathematical backbone: given the structure of Hilbert space, the Born rule is the
              unique probability measure compatible with these constraints.
            </p>
          </div>
        </div>

        <h2>Where the Three Steps Fail</h2>
        <div className="card" style={{ borderLeft: '3px solid #f87171', marginBottom: '1.5rem' }}>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', paddingLeft: '1.2rem' }}>
            <li>
              <strong>Gleason does all the work; coherence conservation does none.</strong> Gleason&apos;s theorem
              (1957) takes a non-contextual, countably additive probability measure on the projections of a Hilbert
              space and returns tr(&#x03C1;P). Its hypotheses are non-contextuality and additivity. It needs no
              conservation law and no unitarity, so Step 3 cites a theorem whose premises are not Steps 1 and 2.
            </li>
            <li>
              <strong>Gleason fails in dimension 2, and the only example here is a qubit.</strong> The theorem
              requires dim &#x2265; 3. &#x03B1;|0&#x27E9; + &#x03B2;|1&#x27E9; is exactly the case it does not cover.
            </li>
            <li>
              <strong>Step 2 assumes the conclusion.</strong> &ldquo;Probability is proportional to the coherence in
              the branch&rdquo;, with branch coherence identified as |&#x03B1;|&sup2;, <em>is</em> the Born rule.
            </li>
            <li>
              <strong>The conserved quantity is normalization.</strong> &#x03A3;|&#x03B1;<sub>i</sub>|&sup2; = 1 is
              preserved by unitary evolution in standard quantum mechanics. Calling it &ldquo;coherence
              conservation&rdquo; relabels it. It is also <em>not</em> the C(&#x03C1;) of the rest of this site, which
              is an explicit function of density with no conservation law attached; no map between the two has been
              written down.
            </li>
          </ul>
        </div>

        <h2>What This Adds</h2>
        <p>
          Vocabulary, not a premise. The Born rule has real derivation programs &mdash; Gleason (1957), Zurek
          (2005, envariance), Carroll and Sebens (2014, self-locating uncertainty) &mdash; each with stated
          assumptions and a literature of objections. The Sessions #266-270 argument restates the rule in
          coherence language and borrows Gleason for the mathematics. It does not make the rule &ldquo;necessary
          rather than postulated&rdquo;, as this section used to say: the postulate has been moved into Step 2.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>The open question that would make this more than a relabel:</strong> does the single-observer
          picture (measurement as phase-lock between two patterns) supply a reason for <em>non-contextuality</em>?
          That is Gleason&apos;s actual premise, and it is the one the framework&apos;s own CRT scanning model
          runs into from the other side: a non-contextual value-assignment is what Kochen&ndash;Specker excludes
          in dim &#x2265; 3 (0 of 512 assignments satisfy the Peres&ndash;Mermin square in the archive&apos;s own
          construction). An argument for non-contextual <em>probabilities</em> without non-contextual
          <em>values</em> would be a contribution. None exists here yet.
        </p>
        <details style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          <summary style={{ cursor: 'pointer' }}>Revision notes</summary>
          2026-09-19: until today this section claimed coherence conservation &ldquo;provides the missing physical
          principle that makes the Born rule necessary rather than postulated&rdquo; and compared it to Noether&apos;s
          theorem (stated backwards: Noether runs from symmetry to conservation law). Two paragraphs later the same
          page called the argument a reparametrization, and the badge agreed with the second. A graduate-student
          reader listed the four failures above; each was checked against the theorem&apos;s statement. Also removed:
          &ldquo;quantum speedup = coherent parallelism&rdquo;.
        </details>

        <h2>Connection to Quantum Computing</h2>
        <p>
          The Born rule is what makes quantum computing work. When a quantum algorithm manipulates
          amplitudes to concentrate |&#x03B1;|&sup2; on the correct answer, it is (in Synchronism&apos;s
          framing) redistributing coherence so that the desired branch carries maximum physical weight.
          The resource is <em>interference</em> between amplitudes, not parallel evaluation of branches; the
          relabel adds no prediction about which algorithms speed up.
        </p>

        <h2>Honest Assessment</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This argument relies on &ldquo;coherence conservation&rdquo; as an axiom, which on inspection is
          state normalization (see above), and it does not predict any deviation from |&alpha;|&sup2;
          in any regime. A &ldquo;derivation&rdquo; that produces no testable difference from the
          thing it derives is, by this framework&apos;s own taxonomy, a{' '}
          <strong>reparametrization</strong>: the same physics in different language. Zurek&apos;s envariance and Carroll&ndash;Sebens self-locating uncertainty are also
          criticized for circularity, but each states assumptions weaker than the rule it derives; this argument
          does not. The Sessions #266-270 treatment is the most developed version in the archive. The argument has not been subjected to peer review.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/quantum-computing" className="btn-primary">
            Next: Quantum Computing &rarr;
          </Link>
          <Link href="/entanglement-coherence" className="btn-secondary">
            Back: Entanglement as Coherence
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/born-rule" />
    </>
  );
}
