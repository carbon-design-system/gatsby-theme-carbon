# When does the theme publish releases?

At the moment, we intentionally publish releases manually. We want each release
to have meaning and reduce constant release churn. For that reason we release
when any of the following conditions are true:

- A bug fix or patch for something in Carbon, IBM Design Language, or the IBM
  Brand Center sites
- A bug fix that impacts every theme site
- A new feature (includes a corresponding slack announcement)

If a patch is narrow in scope(impacting a small subset of sites) we'll hold off
on releasing the patch for the reasons mentioned above.

# How to publish a new theme version
We publish to npm, create a GitHub release, and generate changelogs by using [release-it](https://www.npmjs.com/package/release-it). All of this is tucked behind a single GitHub action which Aux Squad can deploy manually.

1. On the [release workflow](https://github.com/carbon-design-system/gatsby-theme-carbon/actions?query=workflow%3ARelease) page click the `Run workflow` dropdown, then click the green button inside.
2. Wait 10-15s for it to start

# Updating the starter

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
   fine I trust you) :)
