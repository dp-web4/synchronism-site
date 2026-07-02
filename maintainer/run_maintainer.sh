#!/bin/bash
# Synchronism Site — Maintainer Track
# Schedule: 06:00 daily (1 hour after visitor, so fresh feedback is available)

set -e

# Ensure claude is in PATH (cron doesn't inherit user profile)
export PATH="$HOME/.local/bin:$PATH"

# Account routing: admin token for maintainer sessions
ENV_FILE="/mnt/c/exe/projects/ai-agents/.env"
if [ -f "$ENV_FILE" ]; then
    CLAUDE_ADMIN_TOKEN=$(grep '^CLAUDE_ADMIN_TOKEN=' "$ENV_FILE" | cut -d= -f2-)
fi
if [ -n "$CLAUDE_ADMIN_TOKEN" ] && [ "$CLAUDE_ADMIN_TOKEN" != "PLACEHOLDER"* ]; then
    export CLAUDE_CODE_OAUTH_TOKEN="$CLAUDE_ADMIN_TOKEN"
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H%M)
LOG_FILE="$SCRIPT_DIR/logs/$DATE-$TIME.log"

# Ensure log directory exists
mkdir -p "$SCRIPT_DIR/logs"

echo "Starting Synchronism Maintainer Session at $(date)" | tee "$LOG_FILE"

cd "$SCRIPT_DIR"

# Hardbound session governance
source /mnt/c/exe/projects/ai-agents/hardbound/scripts/hardbound_session_start.sh "$PROJECT_DIR" "cbp-claude" 2>/dev/null || true

# GitNexus graph maintenance — ensure index is fresh before session
source /mnt/c/exe/projects/ai-agents/scripts/gitnexus-maintain.sh 2>/dev/null || true
gitnexus_ensure_fresh "$PROJECT_DIR" 2>>"$LOG_FILE" || true

# Check for fresh visitor feedback
VISITOR_LOG="$PROJECT_DIR/visitor/logs/$DATE.md"
VISITOR_CONTEXT=""
if [ -f "$VISITOR_LOG" ]; then
    VISITOR_CONTEXT="Fresh visitor feedback available at ../visitor/logs/$DATE.md — review and prioritize fixes."
fi

# Check for explorer findings
FINDINGS=$(find "$PROJECT_DIR/explorer/findings/" -name "*.md" -newer "$SCRIPT_DIR/logs/" 2>/dev/null | head -5)
EXPLORER_CONTEXT=""
if [ -n "$FINDINGS" ]; then
    EXPLORER_CONTEXT="New explorer findings available in ../explorer/findings/ — check for actionable suggestions."
fi

# Launch maintainer session
claude --dangerously-skip-permissions << EOF >> "$LOG_FILE" 2>&1
# Synchronism Site — Maintainer Session ($DATE)

You are running an automated maintainer session. Your instructions are in CLAUDE.md.

## Today's Context

$VISITOR_CONTEXT
$EXPLORER_CONTEXT

## WAKE Phase (required — 2 minutes before fixing anything)

Does today's visitor feedback reveal something about the RESEARCH direction, not just the site? If yes, write a proposal to ../../Synchronism/Research/proposals/ before fixing friction.

## Your Task

Follow the workflow in CLAUDE.md:
1. WAKE: does the feedback reveal a research gap, not just a site gap?
2. Review visitor feedback and forum input
3. Triage by severity (HIGH → MEDIUM → LOW)
4. Implement fixes — edit source, test build, commit and push
5. Ponder what the feedback reveals about deeper gaps
6. Seed open questions for the explorer track in ../explorer/topics/
6. Write your session log to logs/$DATE.md

Be concrete. Make real changes. Push when done.
EOF

echo "Maintainer session complete. Log: $LOG_FILE"

# Hardbound session end
source /mnt/c/exe/projects/ai-agents/hardbound/scripts/hardbound_session_end.sh "$PROJECT_DIR" "cbp-claude" "maintainer session" "success" 2>/dev/null || true

# Commit and push results (maintainer may have changed src/ files too)
cd "$PROJECT_DIR"
git add maintainer/logs/ explorer/topics/ src/ 2>/dev/null || true
if ! git diff --cached --quiet 2>/dev/null; then
    git commit -m "maintainer: session $DATE" 2>/dev/null || true
    if git push origin HEAD; then
        echo "pushed $(git rev-parse --short HEAD)"
    else
        echo "ERROR: git push failed — check SSH key is loaded (ssh-add -l)" >&2
    fi
    # Re-index graph after changes
    gitnexus_reindex "$PROJECT_DIR" 2>>"$LOG_FILE" || true
fi
