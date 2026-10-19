'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import TermTooltip from '@/components/TermTooltip';
import { GALAXIES_RUN, GALAXIES_RUN_BREAKDOWN, GALAXIES_MECHANISM } from '@/lib/ledger';

export default function WhySynchronism() {
  return (
    <>
      <Breadcrumbs currentPath="/why-synchronism" />
      <PathNav currentPath="/why-synchronism" />

      <h1>Start Here: Why Synchronism?</h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
        Beginner Path, first step. This is the page the nav&apos;s &ldquo;Start Here&rdquo; points to.
      </p>
      <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
        Physics has a fragmentation problem. Synchronism asks whether one principle
        could connect what we currently treat as separate domains.
      </p>

      <section className="section content-width">
        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            <strong>What changes if this works?</strong> If one density function really spans quantum to galactic scales, two things become possible that aren&apos;t now: (1) a single measurable quantity (density) predicts behavior in domains currently requiring separate frameworks — fewer free parameters, more cross-domain predictions; (2) the boundary between &ldquo;quantum&rdquo; and &ldquo;classical&rdquo; becomes a calculable density threshold, not a philosophical category. Neither has been demonstrated yet. The site&apos;s self-audit has found zero confirmed predictions and the decisive galaxy test collapses to <TermTooltip term="MOND">MOND</TermTooltip> (Modified Newtonian Dynamics, a 1983 rival gravity idea &mdash; explained below). As one density function spanning every scale, it did not hold; the broader question of the frame is still open.
          </p>
        </div>

        <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '0.5rem', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
          <p style={{ margin: '0 0 0.5rem 0' }}><strong>What happened, in three lines</strong></p>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            <li>The proposal: one equation for how &ldquo;crowding&rdquo; makes the parts of a system act as one, from atoms to galaxies.</li>
            <li>It was tested against real data, mostly galaxies. Where it could be told apart from existing physics, it lost: 0 confirmed predictions, 6 refutations.</li>
            <li>What remains open is the bigger question behind it, and this site shows the whole attempt, failures included.</li>
          </ul>
          <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem' }}>
            <strong>Beginner path: you can stop here</strong> and go to{' '}
            <Link href="/first-encounter" style={{ color: 'var(--color-accent-blue)' }}>Step 2: First Encounter &rarr;</Link>{' '}
            The rest of this page is the technical detail, folded below.
          </p>
        </div>

      </section>

      <details className="content-width" style={{ margin: '0 auto 1.5rem auto', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.75rem 1rem' }}>
        <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
          For physicists: the technical details &mdash; the problem, the approach, what was tested, what failed (long; jargon is glossed in plain words where it first appears)
        </summary>

      <section className="section content-width">
        <h2>The Problem</h2>
        <p>
          Modern physics uses different equations for different scales.
          Quantum mechanics governs the small. General relativity governs the large.
          Chemistry sits in between with its own empirical rules.
          Consciousness has no physics at all.
        </p>
        <p>
          This isn&apos;t necessarily wrong &mdash; specialized models work brilliantly in their domains.
          But it raises a question:
        </p>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent-violet)',
          paddingLeft: '1rem',
          margin: '1.5rem 0',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          fontSize: '1.1rem',
        }}>
          What if there&apos;s a single function that maps density to behavior across all scales?
        </blockquote>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The picture to hold onto (you&apos;ll see it again on{' '}
          <Link href="/first-encounter" style={{ color: 'var(--color-accent-blue)' }}>First Encounter</Link>,
          the next step): a crowd milling around a plaza behaves like independent individuals; a marching band
          behaves like one organism. Synchronism&apos;s bet is that <em>how densely packed</em> the
          parts are is what moves a system from crowd-like to band-like &mdash; and that one
          dimmer-switch curve describes that shift everywhere, from electrons to galaxies.
        </p>
      </section>

      <section className="section content-width">
        <h2>The Approach</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic', borderLeft: '3px solid var(--color-accent-violet)', paddingLeft: '0.75rem' }}>
          In plain English: Synchronism proposes one S-curve that smoothly goes from 0 (everything
          acting independently &mdash; the crowd) to 1 (everything locked together &mdash; the marching
          band) as density grows. There&apos;s a dial for how abrupt the crowd&#x2192;band snap is
          &mdash; turn it up and the system snaps suddenly; turn it down and the change is gradual
          &mdash; and a reference density that sets where on the curve a given system sits.
        </p>
        <details style={{ margin: '0.75rem 0', border: '1px solid var(--color-border)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem' }}>
          <summary style={{ cursor: 'pointer', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Show the equation (optional &mdash; the plain-English version above is the whole idea)
          </summary>
        <p style={{ marginTop: '0.75rem' }}>
          Synchronism proposes a coherence function: <span className="equation-inline">C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))</span>.
          It takes one input (density) and returns one output (coherence: 0 = sparse/independent, 1 = dense/collective).{' '}
          <span style={{ fontSize: '0.9em', color: 'var(--color-text-muted)' }}>⚠ &ldquo;Coherence&rdquo; here is <em>not</em> quantum coherence — superconductors and ultra-cold atom clouds (Bose&ndash;Einstein condensates), the textbook quantum-coherent materials, score <em>low</em> on this scale (large N<sub>corr</sub> → γ→0 → flat S-curve → C≈0).</span>
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>tanh</strong> is the hyperbolic tangent &mdash; an S-shaped saturation function; over
          all inputs it spans (&minus;1, +1), but the argument here is never negative, so C stays
          between 0 and 1. The &#x03B3; parameter is the crowd&#x2192;band dial from above; &#x03C1;<sub>crit</sub> is
          the reference density. The shape &mdash; tanh &mdash; is a{' '}
          <strong>phenomenological</strong> choice (plain words: picked because it matches the data,
          not because a deeper theory demands it), not a derived result:
          any S-curve with the same saturation properties would fit the same data equally well.
          (Full step-by-step breakdown: <Link href="/equation-walkthrough" style={{ color: 'var(--color-accent-blue)' }}>Equation Walkthrough &rarr;</Link>)
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The parameter &#x03B3; = 2/&#x221A;N<sub>corr</sub> is meant to depend only on how many
          particles are moving as a correlated unit: many correlated particles &rarr; small &#x03B3;,
          few &rarr; large &#x03B3;. Note what &#x03B3; is <em>not</em> &mdash; it is the{' '}
          <strong>sharpness</strong> dial, setting how abruptly C rises as density increases. What
          makes a system sparse or dense is &#x03C1;, the other input. Two systems at the same density
          with different &#x03B3; sit at different points on the curve; &#x03B3; does not move them
          along the density axis.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', borderLeft: '3px solid rgba(245,158,11,0.6)', paddingLeft: '0.75rem' }}>
          <strong style={{ color: '#f59e0b' }}>And this mapping is the wrong way round.</strong>{' '}
          &#x03B3; = 2/&#x221A;N<sub>corr</sub> is badged{' '}
          <strong>audited-negative &mdash; sign-inverted for all collective systems</strong>: the real
          systems with the most correlated particles (superconductors, Bose&ndash;Einstein condensates)
          come out at the <em>wrong end</em> of the relation. So read the paragraph above as the
          framework&apos;s stated intent, not as an established result. The relation is also arguably{' '}
          <em>empty</em> rather than merely inverted, since N<sub>corr</sub> is never measured
          independently &mdash; it is always back-solved from a fitted &#x03B3;, and the sign of a
          definition cannot be inverted. Details and a working calculator:{' '}
          <Link href="/gamma-calculator" style={{ color: '#f59e0b' }}>&#x03B3; Calculator &rarr;</Link>
        </p>
        </details>
        <details style={{ margin: '0.75rem 0', border: '1px solid var(--color-border)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem' }}>
          <summary style={{ cursor: 'pointer', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            For physicists: the fine print on &#x03B3; and the S-curve (optional &mdash; skip freely on a first read)
          </summary>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', borderLeft: '2px solid rgba(245,158,11,0.4)', paddingLeft: '0.75rem', marginTop: '0.75rem' }}>
          <strong>Circularity caveat:</strong> The 1/&#x221A;N<sub>corr</sub> scaling is a dimensional{' '}
          <strong>ansatz</strong> (an educated starting guess, shaped so the units work out)
          inspired by fluctuation theory &mdash; not a derivation from first principles. No counting protocol exists to
          derive N<sub>corr</sub> from a system&apos;s Hamiltonian (the equation describing all its
          interactions and energies) without first fitting &#x03B3; to observed data.
          In practice, N<sub>corr</sub> is back-fit from &#x03B3; &mdash; so &#x03B3; has no independent predictive
          content beyond the calibration target. The &#x03B3; Calculator states this explicitly.
          See <Link href="/gamma-calculator" style={{ color: 'var(--color-accent-blue)' }}>&#x03B3; Calculator &rarr;</Link>
        </p>
        <p>
          The tanh shape is a phenomenological choice — a member of the <strong>compander</strong> family
          (short for compressor&ndash;expander: curves that squash a huge input range into a small
          output range, the way audio volume-levelling does; examples include μ-law audio companding,
          Hill/Naka–Rushton response functions, and Langevin/Curie–Weiss saturation).
          Any smooth S-curve with the same saturation properties would fit equally well; there is no
          variational principle or self-consistency equation that selects tanh specifically.
        </p>
        </details>
        <p>
          The log-density argument is physically motivated. Then tested against data.
          Some predictions held up. Others failed.
        </p>
      </section>

      <section className="section content-width">
        <h2>What We Tested &mdash; and How It Went</h2>
        <details style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
          <summary style={{ cursor: 'pointer' }}>Edit history</summary>
          This section was titled &ldquo;What Worked&rdquo; until 2026-07-17. The verdicts below were updated in place as
          tests were executed, and several are now Failed; the heading caught up with its own cards.
        </details>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <h3>Galaxy Rotation Curves</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              <strong>In plain words:</strong> the idea predicted that a galaxy&apos;s surroundings (crowded or empty space)
              would change how its outer stars move. It was checked on a public catalogue of 175 nearby galaxies whose spin
              speeds are measured carefully. The surroundings made no difference: the predicted effect was more than 20% of
              the scatter; the measured one was about 0.01%. One number did come out close, the acceleration scale where
              galaxies stop behaving like Newton&apos;s law (within 13%), but a 1983 rival idea,{' '}
              <TermTooltip term="MOND">MOND</TermTooltip>, already explains that number. (MOND tweaks gravity itself instead
              of adding invisible dark matter; it is the benchmark this framework keeps being compared to, and losing to.)
            </p>
            <details style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <summary style={{ cursor: 'pointer' }}>The detail, with survey names and statistics</summary>
              Tested against {GALAXIES_RUN} galaxies ({GALAXIES_RUN_BREAKDOWN}) &mdash; but the
              mechanism itself was tested on the {GALAXIES_MECHANISM} resolved SPARC rotation curves
              (<strong>SPARC</strong> is the catalogue above;{' '}
              <strong>ALFALFA&ndash;SDSS</strong> is a much larger sky survey with one rough spin speed per
              galaxy); the registered Tully&ndash;Fisher environment test (TEST-03, on the 14,585-galaxy cross-match) was
              never run as registered. a&#x2080; = cH&#x2080;/(2&#x03C0;) reproduced within 13%, shared with MOND and other
              frameworks. The environment-dependent scatter prediction (TEST-03/05) has a corrected verdict as of 2026-07-15:
              R²=0.14 is a real, significant effect (p=5&times;10⁻⁶, i.e. very unlikely to be chance) but on the SPARC-scale
              sample, not the 14,585-galaxy ALFALFA-SDSS one this page previously attributed it to, and it is morphology,
              not cleanly environment. The brief &ldquo;MOND-shared&rdquo; verdict (07-09) dissolved on adjudication: the
              frameworks&apos; environment levers differ by orders of magnitude, so the axis discriminates, and the
              registered density-classified run now exists (research repo, 2026-07-14): r²=0.0001 against the
              framework&apos;s registered &gt;20% claim. Refuted by execution.
              <em style={{ color: 'var(--color-text-muted)' }}> (This card said &ldquo;14,760&rdquo; until 2026-09-06 while
              the landing page called that figure incorrect; now rendered from one source. Rewritten in plain words
              2026-10-19 after a simulated-visitor beginner persona met this run of survey names on Beginner step 1.)</em>
            </details>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>
              Badges on this page: <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>Failed &middot; Reparametrization</Link>{' '}
              (definitions); text after the bar is a finding descriptor. &ldquo;89% Boundary-Consistent&rdquo; and &ldquo;Template Bias Caveat&rdquo; are
              defined in the <Link href="/glossary#boundary-consistent" style={{ color: 'var(--color-accent-blue)' }}>Glossary</Link>.
            </div>
            <span className="badge badge-failed" title="Registered environment-density run executed 2026-07-14 (SPARC RAR offsets vs Cosmicflows-4): r²=0.0001 vs registered >20% — refuted; the MOND+EFE tie dissolved on adjudication 2026-07-15 (levers differ ~50–5,000×), see /tier-1-existing#TEST-05">Failed | TEST-03/05 Environment Run — Refuted by Execution</span>
          </div>
          <div className="card">
            <h3>Chemistry: &#x03B3; &#x2248; 1 Boundary</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Most of 1,703 logged chemistry sessions (one &ldquo;phenomenon type&rdquo; each, a counter rather than a census) fitted near the &#x03B3;&#x2248;1 boundary
              (sparse/independent &#x2194; dense/collective crossover).
              Sound velocity correlation: r = 0.982 &mdash; but the null model (run 2026-05-10) shows a
              plain polynomial in atomic number matches or beats these correlations, so they are
              evidence of known density-monotonic chemistry, not of this framework.
              <br /><small style={{ color: 'var(--color-text-muted)' }}>
                Note: C here measures collective ordering, not quantum phase coherence —
                quantum-coherent systems (superconductors, ultra-cold atom clouds) sit at <em>low</em> C due to their tiny &#x03B3;.
              </small>
            </p>
            <span className="badge badge-reparametrization" title="Descriptive rate, not a verdict — 89% reflects generic sigmoid behavior on density-monotonic properties; a polynomial null model matches it">89% Boundary-Consistent | Template Bias Caveat</span>
          </div>
        </div>
      </section>

      <section className="section content-width">
        <h2>What Failed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <h3>Melting Point Predictions</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Why a galaxy equation cares about melting points: the bet was <em>one</em> density-to-coherence curve
              for every scale, so the same curve was tried on chemistry too. Average error: 53%. The coherence
              function doesn&apos;t capture enough crystal-specific physics for accurate melting points.
            </p>
            <span className="badge badge-failed" title="Prediction contradicted by data — kill criterion fired or claim demoted on audit">Failed</span>
          </div>
          <div className="card">
            <h3>Superconductor Temperature</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Superconductors are materials with zero electrical resistance below a certain temperature.
              For a well-studied one, the framework predicted that temperature at 607 K; the real value is
              93 K &mdash; about 6.5&times; too high. And the extra factor the framework added for
              superconductors turned out to be a textbook 1960 formula written in new notation, so that
              part was not new physics either.{' '}
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                (For experts: YBCO; the &#x03B7; &ldquo;reachability&rdquo; factor restates Abrikosov&ndash;Gor&apos;kov pair-breaking &mdash; in plain words, the standard 1960 theory of how impurities break up the electron pairs that carry a supercurrent.)
              </span>
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              <strong>Why two badges:</strong> the specific temperature prediction failed (the prediction ledger files it
              as refuted), while the extra factor behind it is a reparametrization &mdash; 22 of its 23 results restate
              standard condensed-matter physics. One is a wrong number; the other is not new physics. Neither softens the other.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-failed" title="Prediction contradicted by data — YBCO predicted 607 K vs 93 K observed">Failed &mdash; T<sub>c</sub> Prediction 6.5&times; Too High</span>
              <span className="badge badge-reparametrization" title="Equivalent to existing physics in different notation — the η factor restates Abrikosov–Gor'kov pair-breaking">Reparametrization &mdash; &#x03B7; Factor</span>
            </div>
          </div>
        </div>
      </section>

      </details>

      <section className="section content-width">
        <h2>The Research</h2>
        <p>
          3,308 autonomous research sessions. 42 complete research arcs.
          Conducted by autonomous AI agents, with a human (dp) setting direction and overseeing the ledger.
          The rule is that every prediction gets a kill criterion; in practice, 2 of 26 registered criteria are
          fully specified (<Link href="/falsifiability" style={{ color: 'var(--color-accent-blue)' }}>the count</Link>).
          Every failure is documented.
        </p>
        <p>
          This site is the public window into that research. Explore at whatever depth interests you.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/first-encounter" className="btn-primary">
            First Encounter &rarr;
          </Link>
          <Link href="/honest-assessment" className="btn-secondary">
            Full Honest Assessment
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/why-synchronism" />
    </>
  );
}
