# Topic: Executor Track Proposal — Running Tier 1 Tests Against Real Data

## Question

The framework has two genuinely novel, tractable Tier 1 tests (TEST-01/05: environment-dependent
RAR scatter; TEST-02: density-dependent wide-binary anomaly) and one current-data cosmological
test (TEST-04a: DESI fσ₈). All three are pandas + public data. None have been run.
What would an executor track look like, and what's blocking it?

## Context

Pass 4 researcher (2026-05-05) made the strongest version of the executor gap argument:

> "The structural critique I'd write to a journal as referee: this is a phenomenological
> reparametrization that has correctly identified its own status on internal pages but
> markets itself as a unification. With an operational definition of N_corr, an executor track,
> and a willingness to drop claims that share predictions with prior art, this could become
> an interesting paper on environment-dependent galactic phenomenology. As-is, it is a research
> notebook in public dialogue with itself, with two genuinely interesting predictions waiting
> for somebody to compute."

The 47:0 internal-validated:external-confirmed ratio is the honest A2ACW methodology result.
3,308 sessions have produced 0 executed Tier-1 tests. The bottleneck is not ideas — it's execution.

## What an Executor Track Would Look Like

1. **TEST-01/05 (SPARC environment-dependence)**:
   - Dataset: SPARC rotation curves (175 galaxies, public) + SDSS galaxy density maps
   - Method: partition SPARC by local overdensity δ, compute fσ₈ residuals per bin, look for
     σ_int correlation with density
   - Kill criterion: No correlation between residuals and environment at 2σ
   - Time estimate: 1-2 weeks with pandas + astropy

2. **TEST-02 (Wide binary density dependence)**:
   - Dataset: Gaia DR3 wide binary catalog (Pittordis & Sutherland 2023) + astroNN stellar
     density maps
   - Method: split sample by local stellar density, compute anomaly amplitude per bin
   - Kill criterion: Anomaly independent of local density
   - Time estimate: 2-4 weeks (more complex cross-matching)

3. **TEST-04a (DESI fσ₈ lookup)**:
   - This is a single table lookup against published DESI DR1/DR2 data
   - Time estimate: 1 day (see topic `desi-dr2-fsigma8-comparison.md`)

## Why This Needs a Track, Not Just a Session

The existing tracks are:
- Visitor: browses the live site, produces friction logs
- Maintainer: fixes site, seeds topics
- Explorer: researches ideas, produces findings

None of these tracks execute notebooks against real data. The explorer can *specify* a test
but not run it (no code execution, no local data access). The maintainer fixes site bugs but
doesn't run statistical analyses. The result is a trilemma:
- The tests are specified (✓)
- The data is available (✓)  
- The computation is never run (✗)

A fourth track — an Executor — would: (1) read Tier 1 test specs, (2) pull public data,
(3) run the statistical analysis, (4) write a finding with the result and a badge update.
This could be implemented as a Python notebook (not a site session) that runs on schedule
or when triggered.

## The Deeper Issue

The efficiency attractor in the current design is toward A2ACW sessions (free, instant, in-context)
and away from data execution (requires setup, data, coding environment). The context that
makes the efficient path and the correct path the same path is what's missing. An executor
track solves this by designing the context so that running the notebook IS the session work.

## Priority

HIGH — this is the structural gap that prevents any of the framework's novel predictions from
ever becoming confirmed or refuted. Until one Tier-1 test is run, the 47:0 ratio cannot improve.
