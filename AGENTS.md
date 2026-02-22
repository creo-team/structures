# Agent Instructions

Instructions for AI coding agents working in this codebase. See [CLAUDE.md](CLAUDE.md) for full context.

## Project

**@creo-team/structures** — shared TypeScript enums, interfaces, and types for Creo projects. Zero runtime deps.

## Core Rules

- **Never nest** — early returns, flat code
- **No narration comments** — only comment non-obvious intent or trade-offs
- **Simple over clever** — readable beats terse
- **Enum values PascalCase** — `Env.Production`, `Stage.Beta`
- **Export aliases** — `Env` / `Environment` / `Stage` for different naming preferences
- **Conventional commits** — `feat(scope):`, `fix(scope):`, `refactor(scope):`

## Verification

```bash
npm test
npm run build
```
