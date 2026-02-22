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
2. `release: created` fires → Publish workflow runs → publishes to npm with provenance

## Manual dry run

Not available — publish runs only when a release is created.
