# Publishing

## npm Trusted Publishers (OIDC)

Publishing uses [npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers) — no tokens stored in CI.

**One-time setup on npmjs.com:**

1. Package → **Package settings** → **Trusted Publishers**
2. Add publisher → **GitHub Actions**
3. Workflow filename: `npm-publish.yaml`
4. Owner: `creo-team`, Repo: `structures`

## Flow

1. Push to `main` → Release workflow creates tag + GitHub release (using `GH_PAT`)
2. `release: created` event triggers Publish workflow → publishes to npm with provenance

## GH_PAT secret (required)

The Release workflow uses `GH_PAT` so the release event triggers the Publish workflow. Events created by `GITHUB_TOKEN` don't trigger other workflows — this is a GitHub limitation.

1. Create a [Personal Access Token](https://github.com/settings/tokens) (classic) with `repo` scope
2. Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
3. Name: `GH_PAT`, Value: the token

## Manual dry run

Not available — publish runs only when a release is created.
