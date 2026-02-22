# @creo-team/structures

Shared TypeScript structures — enums, interfaces, types — for consistency across Creo projects.

## Installation

```bash
npm install @creo-team/structures
```

## Usage

```ts
import {
  Env,
  Stage,
  HttpStatus,
  HttpMethod,
  AwsRegion,
  type PackageJson,
} from '@creo-team/structures'

// Environment / stage (aliases: Env, Environment, Stage)
const stage: Stage = Stage.Production
if (stage === Stage.Beta) {
  console.log('Running in beta')
}

// HTTP
if (status === HttpStatus.Ok) {
  // ...
}

// AWS
const region = AwsRegion.UsEast1
```

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

Releases are created on push to `main` via [action-release](https://github.com/creo-team/action-release). npm publish runs when a release is created. **Required:** Add a `GH_PAT` repo secret (PAT with `repo` scope) so the release event triggers the Publish workflow — releases created with the default `GITHUB_TOKEN` do not trigger other workflows.

## Creo Ecosystem

- [@creo-team/eslint-config](https://www.npmjs.com/package/@creo-team/eslint-config) — shared ESLint config
- [creo-team/venice](https://github.com/creo-team/venice) — AWS Organizations management
- [creo-team/vecta](https://github.com/creo-team/vecta) — fishing guide booking
- [creo-team/photos](https://github.com/creo-team/photos) — photographer media site

## License

ISC
