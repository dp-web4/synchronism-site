# Questions-First Consistency Audit

## Source
DeepSeek perspective piece: `forum/deepseek/perspective-deepseek.pdf`, plus dp's clarification on site culture.

## Question
The site opens with *"What if one equation described it all?"* — a question, not a claim. This is the right culture: frame as questions, present possible answers to be discussed, challenged, tested. But is this tone **consistent** across all 74 pages, or do some pages slip into declarative/authoritative voice?

## Context
The landing page gets it right. The honest assessment gets it right. But some pages may read as conclusions rather than proposals — especially pages written quickly during the initial build. DeepSeek's point stands: "A well-framed mystery researchers could help solve is more compelling than a finding they can only admire." The fix isn't restructuring — the DNA is already there — it's ensuring consistency.

Key tension points to audit:
- `/key-claims/` — do the 3 claims end with their open questions, or do they read as finished?
- `/consciousness-threshold/` — does C≥0.50 read as a discovered constant or a proposed threshold?
- `/quantum-predictions/` — do the "consistent with published results" cards sound like confirmations or like "here's what to test next"?
- Pages deep in the Physics or Mathematics tracks that may have been written in explanatory (textbook) voice rather than inquiry voice

## Why It Matters
The target audience (physicists, information theorists, consciousness researchers) will engage with questions they can contribute to. They'll bounce from declarations they can only accept or reject. Every page that slips into authoritative voice is a missed invitation.

## Suggested Starting Points
1. Browse 10-15 pages on the live site, noting where the tone shifts from "what if" to "here is"
2. For each, ask: could this page end with a question that invites the reader deeper?
3. Look at how the key-claims page handles the transition from claim → open question — is it explicit enough?
4. Check whether `/open-questions/` links back to the specific pages where those questions arise
5. Compare with sites that do this well (e.g., nLab's open problems, Wolfram Physics Project's "things to explore")

## Action: Maintainer
This isn't a redesign — it's a tone pass. For pages that read too declaratively:
- Add a closing question or "what would break this" prompt
- Ensure validation badges are visible (they already encode uncertainty)
- Link to `/open-questions/` where relevant
- Don't weaken claims — reframe them as proposals worth testing
