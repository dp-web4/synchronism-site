'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function MeasurementWithoutObservers() {
  return (
    <>
      <Breadcrumbs currentPath="/measurement-without-observers" />
      <PathNav currentPath="/measurement-without-observers" />
      <h1>Measurement Without Observers</h1>
      <ValidationBadge status="speculative" label="Speculative — a reading of decoherence with no rate parameter, downstream of an audited-negative relation (γ = 2/√N_corr); no differing prediction; 6 experiment classes (not protocols)" />
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
        <strong>In plain words:</strong> this page is a way of <em>describing</em> decoherence, not a new test. Standard
        quantum mechanics already says no conscious observer is needed: contact with a large environment is enough.{' '}
        <strong>Status in one line (added 2026-10-10):</strong> an interpretation with no rate equation. There is no decoherence
        rate, no Lindblad form, and no apparatus calibrated to N<sub>corr</sub>; the one quantitative item on the site&apos;s quantum
        side is a Planck-scale diffusion heating bound that kills the one rate considered. The title promises a measurement
        theory; the page delivers a reading of one.
      </p>
      <p style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.75rem' }}>
        <strong style={{ color: '#f59e0b' }}>Badge caveat (2026-07-24, from expert review):</strong> this page&apos;s
        badge previously read &ldquo;6 Testable Protocols&rdquo; unqualified — but the framework-wide finding on{' '}
        <Link href="/for-researchers" style={{ color: 'var(--color-accent-blue)' }}>For Researchers</Link> is that no
        calibration procedure maps any real apparatus to &#x03B3; or N<sub>corr</sub>. A protocol that cannot specify
        its parameters for an actual device may be <em>unrunnable as stated</em> — the same gap that re-badged the
        consciousness-threshold claims. A protocol-by-protocol audit against the calibration gap is queued; until it
        completes, read &ldquo;testable&rdquo; as &ldquo;testable in form, calibration unanchored.&rdquo;
      </p>
      <p style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.28)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.6rem' }}>
        <strong style={{ color: '#ef4444' }}>Dependency status (2026-08-07): this page&apos;s badge is weaker than
        its own mechanism warrants.</strong> Every protocol below runs on
        &#x03B3;&nbsp;=&nbsp;2/&#x221A;N<sub>corr</sub>, and that relation is badged{' '}
        <strong>audited-negative</strong> elsewhere on this site, for two independent reasons: the
        N<sub>corr</sub>&nbsp;&rarr;&nbsp;&#x03B3; ladder has <em>zero anchored rungs</em> (it absorbs values, it
        has never predicted one), and the relation <em>inverts the sign</em> of the correlation-to-sharpness
        mapping &mdash; the galaxy-sector pin requires N<sub>corr</sub>&nbsp;=&nbsp;1 while the SPARC fit requires
        N<sub>corr</sub>&nbsp;&#x2248;&nbsp;17. A page whose mechanism is audited-negative is not
        &ldquo;untested&rdquo; (this page once carried that badge; it read Speculative until 2026-10-19, and
        read Reparametrization from 2026-10-19 to 2026-10-22, and is Speculative again because &ldquo;Reparametrization&rdquo; means
        equivalent to existing physics in different notation, and a mechanism with no rate cannot be equivalent to decoherence theory,
        which has rates (graduate-physics simulated-visitor persona); it adds no differing prediction either way);
        it is <strong>downstream of a negative audit</strong>. Read the protocols
        below as illustrating what the framework would predict <em>if</em> the ladder were anchored. See{' '}
        <Link href="/parameter-derivations" style={{ color: '#ef4444' }}>Parameter Derivations</Link>.
      </p>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          For the intuitive foundation, see{' '}
          <Link href="/two-reframes" style={{ color: 'var(--color-accent-blue)' }}>Two Reframes</Link>{' '}
          &mdash; the CRT and pendulum clock analogies that motivate this page.
        </p>

        <p>
          Synchronism&apos;s central claim about quantum mechanics: wave function &ldquo;collapse&rdquo;
          is not a mysterious event triggered by conscious observation. It is decoherence at the
          Markov Relevancy Horizon. When a quantum system interacts with a macroscopic apparatus,
          the correlations between system and environment exceed the MRH &mdash; and that boundary
          crossing IS the measurement.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          No observer needed. No consciousness required. The MRH boundary doesn&apos;t care
          who is watching.
        </blockquote>

        <h2>The Mechanism</h2>
        <p>
          Consider a quantum system (a photon, an electron) interacting with a measurement apparatus.
          Before interaction, the system maintains coherent superposition &mdash; its &#x03B3; is high,
          its N<sub>corr</sub> is low, and correlations with the environment are within the MRH.
        </p>
        <EquationDisplay size="md" label="Measurement = MRH boundary crossing">
          N<sub>corr</sub> &#x2191; &nbsp;&rarr;&nbsp; &#x03B3; = 2/&#x221A;N<sub>corr</sub> &#x2193;
          &nbsp;&rarr;&nbsp; MRH shrinks &nbsp;&rarr;&nbsp; correlations exceed MRH
        </EquationDisplay>
        <p>
          When the quantum system couples to the ~10<sup>23</sup> particles in the apparatus,
          N<sub>corr</sub> explodes. &#x03B3; plummets. The MRH contracts to effectively zero.
          Correlations that were &ldquo;inside&rdquo; the horizon are now &ldquo;outside&rdquo; it.
          The system has crossed the MRH boundary. That crossing is what we call measurement.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Does the direction survive the sign correction? (added 2026-10-18, simulated-visitor researcher persona)</strong>{' '}
          No, not on its own. The chain has two steps, and neither is derived: N<sub>corr</sub>&nbsp;&rarr;&nbsp;&#x03B3; (audited as
          sign-inverted: real correlated systems get <em>sharper</em> transitions as N<sub>corr</sub> grows) and
          &#x03B3;&nbsp;&rarr;&nbsp;MRH size (asserted here, written nowhere as an equation). Correct the first step and keep the
          second, and the story runs backwards: a bigger apparatus gives a larger &#x03B3;, a larger MRH, and no crossing.
          Flip the second step too and the story survives, but only because two unanchored steps were both reversed. Either
          way the direction of the measurement story comes from the inverted relation, not from anything independent of it.
        </p>

        <h2>The Geocentrism Analogy</h2>
        <div className="card card-highlight" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>The observer was never special.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            Just as Copernicus showed that Earth orbits the Sun (not the reverse), Synchronism
            argues that placing the observer at the center of quantum mechanics was a geocentric
            error. Patterns exist and decohere on their own terms. &ldquo;Observation&rdquo; is
            just one of many interactions that can push a system past the MRH.
          </p>
        </div>
        <p>
          <Link href="/observer-problem" style={{ color: 'var(--color-accent-blue)' }}>
            Full treatment: The Observer Problem &rarr;
          </Link>
        </p>

        <h2>What Makes This Different</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>Standard QM</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>Collapse postulated, not derived</li>
              <li>Observer role ambiguous</li>
              <li>Decoherence explains <em>loss</em> of interference but not definite outcomes</li>
              <li>Measurement problem remains open</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Synchronism</h3>
            <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <li>MRH crossing <em>is</em> collapse &mdash; restated in MRH vocabulary, not derived (the &#x03B3; relation it would rest on is audited-negative)</li>
              <li>Observer is irrelevant; any macroscopic coupling suffices</li>
              <li>Definite outcomes are <em>asserted</em> to follow from irreversible MRH crossing &mdash; irreversibility alone is decoherence, which (left) does not give definite outcomes</li>
              <li>Measurement problem reframed, not solved</li>
            </ul>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.5rem 0 0' }}>
              The page has to choose, and says so here: if the MRH boundary is <em>interpretive</em>, this column is a
              vocabulary for decoherence with no differing prediction (the badge above). If it is a <em>physical</em>{' '}
              boundary whose sharpness depends on N<sub>corr</sub>, it is a collapse-class hypothesis and must face existing
              bounds on spontaneous-collapse models &mdash; underground X-ray limits on CSL/Di&oacute;si&ndash;Penrose
              (Donadi et al. 2021) and large-molecule interferometry (Fein et al. 2019, ~25&nbsp;kDa). For a Planck-scale diffusion rate neither is the binding bound: the matter-stability
              limit further down this page (heating of bound hydrogen) already puts the allowed rate 15&ndash;38 orders below the natural
              value (electrons via the heat budget, 15&ndash;30; nucleons via Borexino&apos;s &sup1;&sup1;C rate, D/D<sub>Pl</sub> &lt; 4&times;10<sup>&minus;39</sup>, explorer 2026-10-26), and it supersedes both. Door #3&apos;s diffusion is in position, not momentum, so the CSL (&lambda;, r<sub>C</sub>) exclusion plot (LISA Pathfinder, cantilevers, X-rays; Carlesso et al. 2022, Nat. Phys. 18, 243) does not apply to it. With a correlation length &#x2113; added, nuclei exclude small &#x2113; and gravitational-wave interferometers exclude large &#x2113;; at the natural D only &#x2113; &#x2273; 3&times;10<sup>7</sup> m survives, indistinguishable from a global translation. That regime is Amelino-Camelia&apos;s 1999 random-walk model (Nature 398, 216), excluded with Caltech 40 m data. The X-ray and
              interferometry comparisons would matter only for a rate that survives it, and no such rate has been specified. (Until
              2026-10-04 this sentence read &ldquo;Neither confrontation has been done&rdquo;, beside that bound.) (Row wording corrected 2026-09-15 after a researcher visitor flagged &ldquo;derived from &#x03B3;&rdquo;.)
            </p>
          </div>
        </div>

        <h2>Key Insight: Irreversibility</h2>
        <p>
          MRH crossing is thermodynamically irreversible for macroscopic apparatuses. Once
          N<sub>corr</sub> reaches ~10<sup>23</sup>, the probability of spontaneously returning
          to the pre-measurement state is effectively zero. That explains why interference cannot
          be recovered after a measurement: the MRH boundary crossing is a one-way gate when the environment is large
          enough. It does <em>not</em> by itself select which outcome occurs; irreversibility is decoherence, and
          (table above) decoherence does not give definite outcomes.
        </p>
        <details style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
          <summary style={{ cursor: 'pointer' }}>Revision note (2026-10-19)</summary>
          This paragraph said irreversibility &ldquo;is why measurements produce definite outcomes&rdquo;, contradicting
          the comparison table two sections up.
        </details>

        <div style={{ marginTop: '1.5rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.07)', borderRadius: '6px', borderLeft: '3px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', marginTop: 0, fontSize: '0.95rem' }}>Open Gap: The Born Rule</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0 0 0.5rem' }}>
            Any measurement theory must address the Born rule: the probability of a measurement outcome is |⟨ψ|m⟩|². Standard decoherence (Zurek/Joos/Zeh) addresses this via einselection and pointer-state dynamics. The statement &ldquo;MRH crossing IS the measurement&rdquo; is a description of <em>when</em> collapse occurs, not <em>what probabilities</em> the outcomes carry.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: '0 0 0.5rem' }}>
            The framework has a derivation attempt on the <a href="/born-rule" style={{ color: 'var(--color-accent-blue)' }}>Born Rule page</a> — but the honest assessment there is that it is a <strong>reparametrization</strong>: the argument relies on &ldquo;coherence conservation&rdquo; as an axiom, derives no testable deviation from |α|², and has not been subjected to peer review. It is <em>not</em> on the same footing as Zurek&apos;s envariance or Carroll&ndash;Sebens self-locating uncertainty. Those are also criticized for circularity, but each derives the rule from stated assumptions weaker than the rule itself; here the rule is effectively assumed (this sentence said &ldquo;the same logical status&rdquo; until 2026-10-26; researcher simulated-visitor persona, matching the /born-rule page&apos;s own wording).
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', margin: 0 }}>
            This page is best read as an interpretive overlay on decoherence, not a complete measurement theory. The open question &mdash; which programs like quantum Darwinism (Zurek), Deutsch-Wallace (decision-theoretic), and Carroll-Sebens are actively pursuing &mdash; is whether Born&apos;s rule can be derived from more fundamental principles rather than postulated.
          </p>
        </div>

        <h2>What&apos;s Untested</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          <strong>Bell / CHSH (S = 2&radic;2).</strong> A reading of measurement has to say how quantum correlations reach
          Tsirelson&apos;s bound. This one does not. The framework&apos;s own local single-observer construction was run and caps at
          S &le; 2, which Bell&apos;s theorem guarantees for any local model, and the nonlocal-grid variant sits at S = 2 as well.
          Reaching 2&radic;2 would need an entanglement-like primitive the ontology does not contain. Details:{' '}
          <Link href="/for-researchers#chsh" style={{ color: 'var(--color-accent-blue)' }}>For Researchers, CHSH</Link>.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Six experiment classes were sketched (Sessions #368-370) to test whether
          decoherence patterns at the MRH boundary match Synchronism&apos;s predictions. None has
          been run, and none can be as written: a protocol needs a predicted <em>rate</em>, and the MRH-crossing
          mechanism has no rate parameter, so they are experiment classes, not protocols (relabelled 2026-09-29, researcher
          simulated-visitor persona). The theory asserts scaling relationships between N<sub>corr</sub>,
          decoherence timescales, and how sharply C saturates, with no rung of the N<sub>corr</sub> ladder anchored to
          an apparatus. The one rate the framework&apos;s own substrate suggests, intrinsic decoherence from Planck-scale diffusion, was checked
          against the heat budget of ordinary matter (explorer, 2026-09-27): at that diffusion constant a hydrogen atom would be heated at
          2&times;10⁻⁴ eV/s, so the bound-state limit is 15&ndash;38 orders of magnitude below the natural value (15&ndash;30 from electrons via that heat budget; 15&ndash;38 once nucleons are included through Borexino&apos;s &sup1;&sup1;C rate, D/D<sub>Pl</sub> &lt; 4&times;10<sup>&minus;39</sup>, explorer 2026-10-26; prior art: Pearle &amp; Squires 1994;
          Donadi et al. 2021), which is where CSL and Di&oacute;si&ndash;Penrose bounds bite. This is the same logic used to bound collapse models: GRW/CSL predict spontaneous heating of matter, and the absence of that heating limits their rates (see Bassi et al. 2013, Rev. Mod. Phys. 85, 471). Any rate assigned here inherits those bounds.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/observer-problem" className="btn-primary">
            Next: The Observer Problem &rarr;
          </Link>
          <Link href="/quantum-predictions" className="btn-secondary">
            See the 6 Protocols
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/measurement-without-observers" />
    </>
  );
}
