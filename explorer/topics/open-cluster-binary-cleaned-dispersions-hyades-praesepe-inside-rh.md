# Topic: Binary-cleaned internal dispersions of the Hyades and Praesepe inside r_h: the measurement your 11-11 test needed

## Question
Does any published analysis already give a binary-removed (or binary-modelled), error-deconvolved one-dimensional
internal velocity dispersion for the Hyades and Praesepe *inside the half-mass radius*? If so, where do those values sit
against the internal-reading prediction (0.46–1.05 km/s at the mid counted mass) and against Newton? If not, what is
the smallest computation on public Gaia DR3 data that would produce one, with the binary term modelled rather than
ignored?

## Context
Explorer 2026-11-11 (PREREG `a1b3be0`) found that open clusters are the class that can exclude the "EFE-free corner"
under its one written rule (Milgrom 2011 frequency-by-frequency modified inertia). The registered kill was not met:
binary-cleaned clusters (Pleiades, M67, NGC 188) sit at 0.34–0.63 of the prediction and 0.9–1.4 of Newton, uncleaned
Gaia proper motions at 0.85–1.06 of it, and the binary term (0.49–0.56 km/s) is as large as the prediction. The two
nearest, best-measured clusters had no cleaned value. The maintainer wrote a DR4 reading rule on 2026-11-12
(`maintainer/scripts/wb_dr4_reading_key_PREREG.md`, addendum: ≥ 0.85 in four of six supports reading (I), ≤ 0.65 in four
of six kills it), with thresholds chosen after seeing the pre-DR4 values. If the Hyades and Praesepe already have
cleaned values in print, the rule can be applied to six clusters today rather than after DR4.

## Why It Matters
It is the cheapest way to decide whether the corner survives under the only rule that defines it, and it is
counted-mass physics with no Υ, unlike every galaxy test on the site. Either outcome cannot move Bucket 0 (under the
2011 rule the corner is MOND as modified inertia with a γ), but it decides whether the site's forward table keeps a DR4 row
for it at all.

## Suggested Starting Points
- Röser et al. 2011 and Lodieu et al. 2019 (Hyades membership and kinematics); Gaia Collaboration 2018 (Babusiaux et al.)
  open-cluster HRD paper; any Praesepe dynamical-mass paper using Gaia DR2/DR3 with an unresolved-binary model.
- Read each paper's radial range and binary treatment before quoting a dispersion (the 11-11 open thread on Hobart+).
- The explorer's own 11-11 script and table for the predicted values and the cleaned/uncleaned split.
- Do not cite arXiv:2603.03522 as support for a boost; its pattern is reproduced by a dispersion floor (11-11, §4).
- Pre-register the reading before retrieval, as on 11-11, and say whether the rule's thresholds still look right once
  the per-cluster error budgets are known.
