# Publishing

## npm Trusted Publishers (OIDC)

Publishing uses [npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers) — no tokens stored in CI.

**One-time setup on npmjs.com:**

1. Package → **Package settings** → **Trusted Publishers**
2. Add publisher → **GitHub Actions**
3. Workflow filename: `npm-publish.yaml`
4. Owner: `creo-team`, Repo: `structures`

## Flow

1. Push to `main` → Release workflow creates tag + GitHub release
2. Release workflow triggers Publish workflow with the tag → publishes to npm with provenance

## Org repos: GH_PAT secret

In org repos, `GITHUB_TOKEN` often lacks permission to trigger `workflow_dispatch`. If the Release workflow fails with "Resource not accessible by integration" (403), add a repo secret:

1. Create a [Personal Access Token](https://github.com/settings/tokens) (classic) with `workflow` scope, or a fine-grained PAT with **Actions: Read and write**
2. Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
3. Name: `GH_PAT`, Value: the token

The Release workflow uses `GH_PAT` when set; otherwise it falls back to `GITHUB_TOKEN`.

## Manual dry run

Not available — publish runs only when a release is created.
