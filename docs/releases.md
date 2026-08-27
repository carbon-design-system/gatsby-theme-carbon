# Releases

## When does the theme publish releases?

Releases are published **automatically on a weekly schedule** (Mondays at 1:00 AM UTC) when there are new commits since the last release. The automated workflow:

1. Checks for untagged commits on `main`
2. Verifies the Validate workflow passed
3. Bumps versions, generates changelog, and publishes to npm

Releases can also be **manually triggered** by authorized maintainers via the [GitHub Actions UI](https://github.com/carbon-design-system/gatsby-theme-carbon/actions/workflows/release.yml).

## Automated CI Releases

The release workflow uses [release-it](https://www.npmjs.com/package/release-it) with the `@release-it-plugins/workspaces` plugin for monorepo support.

### npm Trusted Publishers (OIDC)

We use **npm trusted publishers** for secure, tokenless authentication:

- No `NPM_TOKEN` secret required
- Authentication happens via GitHub's OIDC tokens at publish time
- Provenance attestations are automatically included

The trusted publisher is configured on [npmjs.com](https://www.npmjs.com/package/gatsby-theme-carbon/access) to trust the `release.yml` workflow.

### Key Configuration

In `package.json`, the release-it config includes:

```json
"@release-it-plugins/workspaces": {
  "skipChecks": true,
  "publish": true,
  "workspaces": ["packages/gatsby-theme-carbon"],
  "publishCommand": "npm publish -w packages/gatsby-theme-carbon --provenance --access public"
}
```

- `skipChecks: true` - Skips npm auth check (OIDC only works at publish time)
- `workspaces` - Only publishes `gatsby-theme-carbon` (not the private root/example)
- `publishCommand` - Custom command with `--provenance` for OIDC

## Manual Releases (Local)

For local releases or dry runs:

1. On `main` branch, run `git pull origin main --tags`
2. Run `yarn release` (or `yarn release:dry` to practice)
3. For prereleases: `yarn release:pre`
4. Complete the prompts
5. 🚀 Done!

## Updating the starter

If there's been a feature release/substantial change to the example project, you
should update the gatsby starter kit

1. Clone the
   [starter kit](https://github.com/carbon-design-system/gatsby-starter-carbon-theme)
   into your projects directory (wherever you have this project). The clone
   should use the default directory name and be siblings with the this project.
1. Be sure your terminal is in the root of the theme project, `checkout main`
   and `pull upstream main`
1. In your terminal, type `sh cp-example.sh`
1. Head over to the `gatsby-starter-carbon-theme` directory
1. Add and commit the changes to main then run `git push upstream main` (it's
   fine we trust you) :)
