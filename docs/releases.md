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

We publish to npm, create a GitHub release, and generate changelogs by using
[release-it](https://www.npmjs.com/package/release-it). To practice, use
`yarn release:dry` in step 2. This will take you through the whole process, but
not actually do anything.

1. Grab the latest changes. On the `main` branch, run
   `git pull upstream main --tags`
2. Run `yarn release` and check the generated changelog
3. If there's a new feature, ensure we're bumping up the second number in the
   new version (`1.X`)
4. Complete the prompts
5. 🚀 You did it! 🥳

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
   fine we trust you) :)
