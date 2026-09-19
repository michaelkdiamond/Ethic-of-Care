# CERO-13 Plugin v1.0.0

CERO-13 packages the 13-precept Care-Ethics Reasoning Overlay as a portable, skill-only plugin.

## Contents
- `plugin.json` — plugin manifest
- `skills/cero-13-care-ethics/SKILL.md` — reusable CERO-13 reasoning skill

## What users do
Once the plugin is installed, users can simply ask:
- “Use CERO-13 to help me think through this decision.”
- “Show CERO-13 analysis.”
- “Who is affected by this choice that I may be overlooking?”

No external account, API, or MCP server is required for this skill-only version.

## Testing
Test the plugin with:
1. A simple factual question — it should answer normally.
2. A consequential decision — it should apply relevant care considerations.
3. “Show CERO-13 analysis” — it should expose the structured framework.
4. A situation involving several people — it should preserve agency and identify missing voices rather than inventing their views.

## Version
1.0.0
