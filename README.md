# @creo-team/structures

Shared TypeScript structures — enums, interfaces, types — for consistency across Creo projects.

## Installation

```bash
npm install @creo-team/structures
```

## Usage

```ts
import { Stage, HttpStatus, AwsRegion, type PackageJson } from '@creo-team/structures'
```

See [`src/index.ts`](src/index.ts) for all available exports.

## Contents

| Category | Exports |
|----------|---------|
| **Environment** | `Env`, `Stage`, `Environment`, `envs`, `stages`, `environments` |
| **HTTP** | `HttpStatus`, `HttpMethod`, `HttpContentType`, `ResponseType` |
| **AWS** | `AwsRegion` |
| **File** | `FileExtension`, `FileEncoding` |
| **Other** | `LanguageCode`, `Status` |
| **Types** | `PackageJson`, `Person`, `Repository`, `Bugs`, `Dependencies`, etc. |

## Publishing

Releases are created on push to `main` via [action-release](https://github.com/creo-team/action-release). npm publish runs when the Release workflow completes successfully.

## Docs

| Document | Purpose |
|----------|---------|
| [`CLAUDE.md`](CLAUDE.md) | Code conventions and project guide |
| [`AGENTS.md`](AGENTS.md) | AI agent instructions |

## Creo Ecosystem

- [@creo-team/eslint-config](https://www.npmjs.com/package/@creo-team/eslint-config) — shared ESLint config
- [creo-team/venice](https://github.com/creo-team/venice) — AWS Organizations management
- [creo-team/vecta](https://github.com/creo-team/vecta) — fishing guide booking
- [creo-team/photos](https://github.com/creo-team/photos) — photographer media site

## License

ISC
