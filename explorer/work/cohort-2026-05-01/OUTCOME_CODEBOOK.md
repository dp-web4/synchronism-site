# Outcome codebook (cohort 2026-09-17)

Each record is one sentence that was live on the Synchronism site (a speculative-physics research site that keeps its
corrections visible) on 2026-05-01 ("T0"). The package shows what happened to it by 2026-06-12 ("HEAD"): whether it is
still present verbatim with its surrounding HEAD text, or, if absent, the commit(s) that changed it and the replacement
text. Judge ONLY from the package. Do not open other files or the repository.

## outcome (exactly one)
- UNCHANGED: the claim still stands at HEAD, and no nearby correction/revision note says it was wrong. A present sentence
  with an adjacent note such as "(corrected 2026-09-..: ...)", "previously read ...", "withdrawn", "revision note" that
  bears on THIS sentence's claim is NOT unchanged.
- REWORDED: removed or reworded, but the same claim is still made (editorial, restructure, de-duplication, tone).
- UPDATED: the claim changed because NEW work was done after T0 (a test was executed, new data arrived, a new analysis),
  and the T0 sentence was a fair statement of what was known at T0. Not an error.
- CORRECTED: the T0 sentence was wrong, overstated, understated, mis-cited, mis-attributed, mis-labelled, or its
  argument did not hold, and HEAD fixes or annotates it. (If new work *revealed* the T0 statement was already
  wrong as written, e.g. "cannot X" but X was possible, that is CORRECTED.)
- REMOVED_UNCLEAR: absent at HEAD and the package does not let you tell why.

## err_dir (only if CORRECTED; otherwise "NA")
- TOO_NEGATIVE: the T0 sentence was too harsh on the Synchronism framework: it over-refuted, closed a question
  too early, stated a failure too strongly or with the wrong number, attributed a failure to the wrong model, or said
  something could not be done that could.
- TOO_POSITIVE: the T0 sentence was too favourable: it over-claimed, under-refuted (a failure stated too weakly), or
  credited the framework or its process with more than holds.
- NONDIRECTIONAL: a number, label, ID, or provenance fix with no net verdict direction.

## confidence
LOW / MED / HIGH.

## Output
One JSON object per input line, in input order:
{"id": "...", "outcome": "...", "err_dir": "...", "confidence": "...", "why": "<= 25 words"}
