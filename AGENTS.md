# Agent Instructions

Instructions for AI coding agents working in this codebase. See [CLAUDE.md](CLAUDE.md) for full context.

## Project

**@creo-team/structures** — shared TypeScript enums, interfaces, and types for Creo projects. Zero runtime deps.

## Core Rules

- **Never nest** — early returns, flat code
- **No narration comments** — only comment non-obvious intent or trade-offs
- **Simple over clever** — readable beats terse
- **Verb-driven names** — `get`, `remove`, `create`, `list` over `fetch`, `delete`, `post`
- **Types in `types.ts`** — never scatter type definitions across implementation files
- **Named imports** — prefer `{ thing } from 'thing'` over `import *`
- **Named exports** — prefer named exports over `export default` (except framework-convention files)
- **Defensive guards** — verify assumptions with `if` checks and logging
- **TypeScript only** — no `.js`/`.jsx` in application code. Strict mode enabled
- **Turbopack** — use `--turbopack` flag for Next.js dev and build (where applicable)
- **Latest stable versions** — stay current with Next.js, React, and dependencies. Adopt new features early
- **Skeleton loading** — every async boundary needs a loading state. Use `loading.tsx`, `Suspense` fallbacks, and skeleton UI. No blank screens
- **Enum values PascalCase** — `Env.Production`, `Stage.Beta`
- **Export aliases** — `Env` / `Environment` / `Stage` for different naming preferences
- **Version bumps** — increment `package.json` version with every push to `main`. Feature branches: one bump before merge
- **Conventional commits** — `feat(scope):`, `fix(scope):`, `refactor(scope):`

## Verification

```bash
npm test
npm run build
```
