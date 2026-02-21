#!/bin/bash
# Synchronism Site — Maintainer Track
# Schedule: 06:00 daily (1 hour after visitor, so fresh feedback is available)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H%M)
LOG_FILE="$SCRIPT_DIR/logs/$DATE-$TIME.log"

# Ensure log directory exists
mkdir -p "$SCRIPT_DIR/logs"

echo "Starting Synchronism Maintainer Session at $(date)" | tee "$LOG_FILE"

cd "$SCRIPT_DIR"

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

## Your Task

Follow the workflow in CLAUDE.md:
1. Review visitor feedback and forum input
2. Triage by severity (HIGH → MEDIUM → LOW)
3. Implement fixes — edit source, test build, commit and push
4. Ponder what the feedback reveals about deeper gaps
5. Seed open questions for the explorer track in ../explorer/topics/
6. Write your session log to logs/$DATE.md

Be concrete. Make real changes. Push when done.
EOF

echo "Maintainer session complete. Log: $LOG_FILE"
