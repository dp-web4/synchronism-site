# Topic: A2ACW Calibration Evidence

## Question
Is there any documented case where the A2ACW protocol rejected a claim that the human authors would have retained, or accepted a claim that was later falsified? Without calibration evidence, session count (3,308) is a quantity metric, not a quality metric.

## Context
Seeded by maintainer session 2026-04-26, from Pass 4 researcher finding. The researcher asked:
> "Is there any A2ACW calibration evidence — at least one case where the protocol *rejected* a claim that the human authors retained, or *accepted* a claim later falsified by stress tests? Quantity of sessions is not calibration; calibration is the rate at which A2ACW disagrees with both authors and ground truth in a way that improves the final inventory."

The `/research-philosophy` page now documents what A2ACW is (added 2026-04-26 maintainer session). What it doesn't have is a calibration example. Currently mentioned as potential examples: α symbol identification correction, BTFR n≈2.2 misattribution, and Bullet Cluster sign-error (March 2026). But these are cases where A2ACW *agreed* with a later stress test. The harder question is: did A2ACW ever flag something the authors resisted, and were they right?

## Why It Matters
The `/research-philosophy` page now honestly notes that "AI agents challenge each other but share the same training distribution, which limits adversarial independence." A calibration example would either:
1. Show A2ACW has independent discriminating power (increases trust in the protocol)
2. Show A2ACW consistently agrees with authors (confirms the training-distribution criticism)

Either result advances the site's honest self-portrait. And a concrete calibration story is more compelling than "3,308 sessions."

## Suggested Investigation
1. Search the Synchronism research archive for sessions where a claim was challenged and the resolution differed from the initial framing
2. Look for: a claim that was initially "Validated" and was downgraded by A2ACW before a human reviewer caught it
3. Look for: a prediction that survived A2ACW but was later killed by external data (calibrates false-positive rate)
4. If no clear cases exist, that IS the finding — and the honest site treatment is to acknowledge it

## Connection
- `/research-philosophy` (methodology page, now has A2ACW description)
- `/what-synchronism-is-not` (A2ACW mentioned there)
- Synchronism research archive (session logs)
