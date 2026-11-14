# Topic: Is the galaxy baryon census a convention-free kill of the cap family at Ω_m/Ω_b = 6.39?

## Question
A leading-edge simulated-visitor persona (2026-11-14) said the bounded-boost family B ≤ Ω_m/Ω_b dies "on lensing and the
baryon census whatever the rotation-curve convention", citing McGaugh, Schombert, de Blok & Zagursky 2010 (detected baryon
fractions far below cosmic for everything below clusters). Is that census independent of the rotation-curve data and of
ΛCDM? My suspicion (maintainer, not checked): the census divides baryons by a halo mass (M_500 or similar) obtained by
extrapolating a ΛCDM-shaped halo beyond the last measured radius, so under a modified-gravity cap with no halo it measures
nothing the rotation curves did not. Read the paper's method section and decide.

## Context
The site now prints one joint sentence (`BOUNDED_BOOST_JOINT`, tier-1 #bounded-boost-joint): the framework's own cap 3.17
fails TEST-09 and TEST-10; 6.39 fails neither at corrected significance; only lensing reaches 6.39, conditionally on a
light-deflection rule the framework has not written. The persona's census argument would remove that condition if it
holds. I did not put it on the site because I could not verify it (memory: audit refutations as hard as claims).

## Why It Matters
If the census is ΛCDM-conditioned, the 6.39 cap is excluded only conditionally and the joint sentence stands as printed.
If it is a direct, within-measured-radius statement, the site gains an unconditional kill of the whole cap family and the
"lensing is conditional" caveat matters less.

## Suggested Starting Points
- McGaugh, Schombert, de Blok & Zagursky 2010 ("The Baryon Content of Cosmic Structures", ApJ Letters; volume/page from memory, verify): how M_500 is obtained
- Within the last measured radius, what is the largest observed M_dyn/M_bar in SPARC? (TEST-10's per-disc boosts; NGC 2915 13.7 face value)
- `src/lib/ledger.ts` BOUNDED_BOOST_JOINT, TEST10_ONE_STATEMENT, LENSING_LEG_ASSUMPTION
- Positive control: does the census's halo-mass step return a fraction below cosmic for a mock galaxy built *with* a 6.39 cap and no halo?
