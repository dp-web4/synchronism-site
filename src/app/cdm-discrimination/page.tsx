'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CdmDiscrimination() {
  return (
    <>
      <Breadcrumbs currentPath="/cdm-discrimination" />
      <h1>CDM Discrimination</h1>
      <ValidationBadge status="superseded" label="Superseded — Original 'Below CDM' Claim Retracted In-Archive" />

      <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.5rem', padding: '0.9rem 1.1rem', margin: '1.5rem 0', fontSize: '0.9rem' }}>
        <strong style={{ color: '#ef4444' }}>Correction (2026-07-04):</strong>{' '}
        <span style={{ color: 'var(--color-text-secondary)' }}>
          This page previously badged &#x03C3;<sub>int</sub> = 0.086 dex &ldquo;Strongly Supported &mdash; below
          CDM prediction&rdquo; and called the environment-dependence test &ldquo;confirmed at p&nbsp;=&nbsp;5&times;10<sup>&minus;6</sup>.&rdquo;
          Both claims were wrong: the &ldquo;below CDM&rdquo; reading was an intermediate session&apos;s premature
          conclusion, retracted in-archive by the source program&apos;s own later, definitive run; and the
          environment-dependence test&apos;s pre-registered kill criterion (R&sup2; &gt; 0.20) <strong>fired</strong>
          {' '}(R&sup2;&nbsp;=&nbsp;0.14) &mdash; it is a failed test, not a confirmed one. See{' '}
          <Link href="/honest-assessment" style={{ color: '#ef4444' }}>Honest Assessment</Link> for the
          current ledger. This page is rewritten below to tell the more interesting story: why the CDM
          verdict flipped once distance-noise modeling was added.
        </span>
      </div>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="Measured intrinsic scatter">
          &#x03C3;<sub>int</sub> = 0.086 &plusmn; 0.003 dex
        </EquationDisplay>

        <p>
          Cold Dark Matter (CDM) models predict a range of intrinsic scatter in the Radial
          Acceleration Relation (RAR) from halo-to-halo assembly diversity. The measured value,
          0.086 &plusmn; 0.003 dex, sits <strong>inside</strong> that predicted range once the
          measurement&apos;s own noise budget is modeled correctly &mdash; it does not beat CDM.
          <strong> Benchmark disclosure (2026-07-10):</strong> the &ldquo;CDM prediction&rdquo; used here is the
          source session&apos;s own internal figure (&#x2248;0.085 dex from halo-concentration scatter, Session 610)
          &mdash; no external published CDM scatter estimate (semi-analytic or hydrodynamic-simulation) has been
          cited or checked against, so the CDM-consistency verdict is internally coherent but not yet anchored
          to the literature&apos;s range. An external-benchmark check is queued.
          The number comes from an optimal N&nbsp;=&nbsp;677 subsample (Mendel stellar masses) drawn
          from the larger 14,585-galaxy ALFALFA-SDSS cross-match used elsewhere on this site &mdash;
          not from &ldquo;14,760 galaxies,&rdquo; a figure that matched no accounting in the underlying
          analysis and has been removed.
        </p>

        <h2>Why This Verdict Flipped: A Case Study in Noise Modeling</h2>
        <p>
          The interesting part of this result isn&apos;t the final number &mdash; it&apos;s that the
          verdict on the <em>same measurement</em> reversed across the analysis, and the reversal is
          fully documented in-archive:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li>
            An intermediate session measured &#x03C3;<sub>int</sub> = 0.072 dex and read it as
            <strong> &minus;6.2&sigma; below</strong> the CDM prediction &mdash; a striking, headline
            number.
          </li>
          <li>
            The next session in the chain found that <strong>distance-measurement noise dominates
            the scatter budget</strong> and had not been properly subtracted &mdash; the &minus;6.2&sigma;
            reading depended on treating noisy distance errors as if they were intrinsic physical scatter.
          </li>
          <li>
            The program&apos;s own definitive re-analysis, correcting for distance noise, revised the
            estimate to &#x03C3;<sub>int</sub>&nbsp;=&nbsp;0.086 dex and explicitly labeled the
            &minus;6.2&sigma; reading <strong>premature</strong>. Its own verdict: <strong>CDM-consistent
            at z&nbsp;=&nbsp;+0.5</strong> &mdash; well within one standard deviation of the CDM
            prediction, not a tension.
          </li>
          <li>
            The program&apos;s final accounting goes further: the CDM-consistency statistic itself is
            <strong> modeling-choice-dependent</strong>, ranging from z&nbsp;=&nbsp;+0.5 to z&nbsp;=&nbsp;+64
            depending on which noise and error assumptions are used. A number that swings that widely
            with modeling choices cannot support a &ldquo;definitive&rdquo; discrimination claim in
            either direction.
          </li>
        </ul>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This page (and, until 2026-07-04, <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest
          Assessment</Link> and <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy
          Rotation</Link>) kept quoting the retracted &minus;6.2&sigma; framing years after the source
          program itself reversed it &mdash; a compilation surface citing a root claim the archive had
          already retracted. <Link href="/mond-comparator" style={{ color: 'var(--color-accent-blue)' }}>MOND
          Comparator</Link> had the correct framing (&ldquo;Matches, z&nbsp;=&nbsp;+0.5&rdquo;) the whole time;
          it just wasn&apos;t cross-checked against the other pages.
        </p>

        <h2>Even On the Most Favorable Reading, This Doesn&apos;t Discriminate Synchronism from MOND</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Two further problems would remain even if the tight-RAR argument were accepted at face value:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li>
            <strong>&ldquo;RAR too tight for CDM&rdquo; is a contested claim in the literature</strong>,
            not a settled one &mdash; several CDM hydrodynamical simulations (Keller &amp; Wadsley 2017;
            Dutton et al.; later EAGLE-based work) reproduce a tight RAR, and intrinsic-scatter estimates
            are sensitive to error modeling and radial-range choices.
          </li>
          <li>
            <strong>Even granting the argument, it favors modified-gravity-class theories (MOND-like)
            over particle CDM &mdash; it says nothing about Synchronism specifically versus MOND</strong>,
            which is the comparison that actually matters for this framework. MOND naturally predicts a
            near-zero intrinsic RAR scatter, so a tight RAR is squarely MOND&apos;s prediction, not a
            Synchronism-specific one.
          </li>
          <li>
            The environment-dependence test (the other half of this page&apos;s original claim) is
            <strong> not a Synchronism-vs-MOND discriminator either</strong> &mdash; MOND&apos;s External
            Field Effect (EFE) also predicts environment-dependent RAR scatter. TEST-05, which measured
            it (p&nbsp;=&nbsp;5&times;10<sup>&minus;6</sup>, R&sup2;&nbsp;=&nbsp;0.14 on SPARC scale), met its
            own registered criterion — corrected 2026-07-09 from &ldquo;failed&rdquo; to MOND-shared, then
            re-adjudicated 2026-07-15: the tie dissolves on lever magnitude (MOND+EFE couples to external
            acceleration, ~0.09 dex modulation; C(&rho;) to ambient density, &le;2&times;10<sup>&minus;3</sup> dex
            — environment dependence is a discriminating axis, and the registered density-classified run
            executed 2026-07-14 in the research repo gives r&sup2; = 0.0001: refuted by execution); see{' '}
            <Link href="/tier-1-existing#TEST-05" style={{ color: 'var(--color-accent-blue)' }}>Tier 1: TEST-05</Link>{' '}
            for the adjudication and the TEST-03 provenance error it had been conflated with.
          </li>
        </ul>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Net verdict: &#x03C3;<sub>int</sub> = 0.086 dex is consistent with CDM, not a constraint on it;
          the environment-dependence test failed its pre-registered kill criterion; and no reading of
          either result separates Synchronism from MOND, which remains the framework&apos;s actual
          competitor on galaxy dynamics. This page exists now primarily as a documented case study in
          how a noise-modeling correction can flip a headline verdict, and in how compilation pages can
          keep citing a claim long after its own source has retracted it.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/freemans-law" className="btn-primary">
            Next: Freeman&apos;s Law &rarr;
          </Link>
          <Link href="/rar-scatter" className="btn-secondary">
            &larr; RAR Scatter
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/cdm-discrimination" />
    </>
  );
}
