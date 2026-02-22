# @creo-team/structures — Claude Code Instructions

## Project Overview

Shared TypeScript structures for **Creo** projects. Enums, interfaces, and types for environments, stages, HTTP, file handling, and package.json. Used by venice, vecta, photos, and others. Ensures consistency across the Creo ecosystem.

## Before Making Changes

1. Read this file for conventions
2. Check [CONTRIBUTING.md](CONTRIBUTING.md) if it exists

## Key Conventions

- **Never nest** — early returns, flat code. If you're indenting more than once, refactor
- **No narration comments** — code speaks for itself. Only comment non-obvious intent or trade-offs
- **Simple over clever** — readable beats terse
- **Verb-driven function names** — prefer `get`, `remove`, `create`, `list`, `put`, `update` over `fetch`, `delete`, `post`
- **Types in dedicated files** — interfaces, enums, and types live in `types.ts`
- **Defensive guards** — double-check assumptions with `if` checks and logging before proceeding
- **Enum values: PascalCase for display** — `Env.Production`, `Stage.Beta`
- **Export aliases** — `Env` / `Environment` / `Stage` for flexibility
- **No runtime deps** — pure TypeScript; zero dependencies in production
- **Conventional commits** — `feat(scope):`, `fix(scope):`, `refactor(scope):`

### Documentation Standards

- **Concise docs** — markdown files should be scannable, not walls of text. Link to code rather than duplicating it. State tenets, not tutorials
- **Single source of truth** — every fact lives in one place. Don't repeat info across README, CLAUDE.md, and AGENTS.md — reference it
- **Inline links liberally** — link to files, other docs, and sections. README opens with what it is and how to use it; details come after

## Structure

| File | Purpose |
|------|---------|
| `src/aws.ts` | AWS regions enum |
| `src/misc.ts` | Env, Stage, HttpStatus, FileExtension, etc. |
| `src/package-json.ts` | PackageJson, Person, Repository types |
| `src/index.ts` | Re-exports |

## Verification

```bash
npm test
npm run build
```

## Release

Push to `main` → GitHub Release creates tag → npm Publish (OIDC) publishes to npm. No token needed.
