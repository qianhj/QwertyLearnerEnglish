# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build
```

No test or lint commands are configured.

## Architecture

Vue 3 SPA for browsing ~3,500 programmer English vocabulary words. No backend.

**Data flow:** `words/*.md` → `parseMarkdown.js` → `App.vue` state → components

- `src/App.vue` — Root component; loads all markdown files via `import.meta.glob`, manages search/filter state
- `src/utils/parseMarkdown.js` — Parses markdown tables, detects ⭐ star markers, extracts category from filename prefix
- `src/components/WordCard.vue` — Renders individual word with highlighted search matches and TTS button
- `src/components/WordModal.vue` — Detail modal with MyMemory API translation and Web Speech API pronunciation

## Vocabulary Data Format

Files live in `words/` and follow this table format:

```markdown
| 英文单词 / 短语 | 中文释义 | 场景记忆 |
|---|---|---|
| ⭐ access | 访问；权限 | `access denied` 权限不足 |
| fork | 分叉；派生 | fork a repo 派生仓库 |
```

- Filename prefix determines category (e.g., `03-前端.md` → category "前端")
- ⭐ prefix marks high-frequency words shown in the starred filter
- Scene memory column supports inline code with backticks (rendered with highlighting)
