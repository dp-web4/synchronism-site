#!/bin/bash
# NotebookLM Research Helper — Synchronism Explorer Track
#
# Creates or reuses a Synchronism research notebook in NotebookLM,
# adds sources, and runs queries. Results are returned as stdout.
#
# Usage:
#   ./notebooklm_research.sh ask "What does Synchronism predict for wide binary stars?"
#   ./notebooklm_research.sh add-url "https://arxiv.org/abs/2301.12345"
#   ./notebooklm_research.sh add-file "/path/to/paper.pdf"
#   ./notebooklm_research.sh web-research "MOND wide binary observational tests 2024"
#   ./notebooklm_research.sh generate-mindmap
#   ./notebooklm_research.sh status

set -e

NOTEBOOKLM_HOME="${NOTEBOOKLM_HOME:-$HOME/.notebooklm}"
CONTEXT_FILE="$NOTEBOOKLM_HOME/synchronism_notebook.json"
NOTEBOOK_NAME="Synchronism Research"

# Ensure notebooklm is in PATH
export PATH="$HOME/.local/bin:$PATH"

# Check auth
if ! notebooklm auth check &>/dev/null; then
    echo "ERROR: notebooklm not authenticated. Run: notebooklm login" >&2
    exit 1
fi

# Get or create the Synchronism notebook
get_or_create_notebook() {
    if [ -f "$CONTEXT_FILE" ]; then
        NOTEBOOK_ID=$(python3 -c "import json; print(json.load(open('$CONTEXT_FILE'))['notebook_id'])" 2>/dev/null)
        if [ -n "$NOTEBOOK_ID" ]; then
            echo "$NOTEBOOK_ID"
            return
        fi
    fi

    # Create new notebook
    echo "Creating '$NOTEBOOK_NAME' notebook..." >&2
    NOTEBOOK_ID=$(notebooklm create "$NOTEBOOK_NAME" --json 2>/dev/null | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])" 2>/dev/null)
    if [ -z "$NOTEBOOK_ID" ]; then
        # Fallback: list and find by name
        NOTEBOOK_ID=$(notebooklm list --json 2>/dev/null | python3 -c "
import json,sys
notebooks = json.load(sys.stdin)
for nb in notebooks:
    if nb.get('title') == '$NOTEBOOK_NAME':
        print(nb['id'])
        break
" 2>/dev/null)
    fi

    if [ -n "$NOTEBOOK_ID" ]; then
        mkdir -p "$NOTEBOOKLM_HOME"
        echo "{\"notebook_id\": \"$NOTEBOOK_ID\"}" > "$CONTEXT_FILE"
        echo "$NOTEBOOK_ID" >&2
        echo "$NOTEBOOK_ID"
    else
        echo "ERROR: Could not create or find notebook" >&2
        exit 1
    fi
}

COMMAND="${1:-status}"
shift || true

case "$COMMAND" in
    status)
        notebooklm auth check
        if [ -f "$CONTEXT_FILE" ]; then
            NOTEBOOK_ID=$(python3 -c "import json; print(json.load(open('$CONTEXT_FILE'))['notebook_id'])" 2>/dev/null)
            echo "Synchronism notebook ID: $NOTEBOOK_ID"
            notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" source list "$NOTEBOOK_ID" 2>/dev/null || echo "Could not list sources"
        else
            echo "No notebook configured yet. Run 'ask' or 'add-url' to create one."
        fi
        ;;

    ask)
        QUESTION="$*"
        NOTEBOOK_ID=$(get_or_create_notebook)
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" ask "$NOTEBOOK_ID" "$QUESTION"
        ;;

    add-url)
        URL="$1"
        NOTEBOOK_ID=$(get_or_create_notebook)
        echo "Adding source: $URL" >&2
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" source add "$NOTEBOOK_ID" "$URL" --wait
        ;;

    add-file)
        FILE="$1"
        NOTEBOOK_ID=$(get_or_create_notebook)
        echo "Adding file: $FILE" >&2
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" source add "$NOTEBOOK_ID" "$FILE" --wait
        ;;

    web-research)
        QUERY="$*"
        NOTEBOOK_ID=$(get_or_create_notebook)
        echo "Running web research: $QUERY" >&2
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" research web "$NOTEBOOK_ID" "$QUERY" --import --wait
        ;;

    generate-mindmap)
        NOTEBOOK_ID=$(get_or_create_notebook)
        echo "Generating mind map..." >&2
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" generate mind-map "$NOTEBOOK_ID" --wait
        OUTPUT_FILE="${1:-../explorer/findings/synchronism-mindmap-$(date +%Y-%m-%d).json}"
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" download mind-map "$NOTEBOOK_ID" "$OUTPUT_FILE"
        echo "Mind map saved to: $OUTPUT_FILE"
        ;;

    generate-audio)
        NOTEBOOK_ID=$(get_or_create_notebook)
        INSTRUCTIONS="${*:-explain the core Synchronism framework and its key predictions}"
        echo "Generating audio overview..." >&2
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" generate audio "$NOTEBOOK_ID" "$INSTRUCTIONS" --wait
        OUTPUT_FILE="../explorer/findings/synchronism-audio-$(date +%Y-%m-%d).mp3"
        notebooklm --storage "$NOTEBOOKLM_HOME/storage_state.json" download audio "$NOTEBOOK_ID" "$OUTPUT_FILE"
        echo "Audio saved to: $OUTPUT_FILE"
        ;;

    reset-notebook)
        rm -f "$CONTEXT_FILE"
        echo "Notebook context cleared. Next command will create a new notebook."
        ;;

    *)
        echo "Unknown command: $COMMAND"
        echo "Usage: $0 {status|ask|add-url|add-file|web-research|generate-mindmap|generate-audio|reset-notebook}"
        exit 1
        ;;
esac
