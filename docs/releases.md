# When does the theme publish releases?
At the moment, we intentionally publish releases manually. We want each release to have meaning and reduce constant release churn. For that reason we release when any of the following conditions are true:

- A bug fix or patch for something in Carbon, IBM Design Language, or the IBM Brand Center sites
- A bug fix that impacts every theme site
- A new feature (includes a corresponding slack announcement)

If a patch is narrow in scope(impacting a small subset of sites) we'll hold off on releasing the patch for the reasons mentioned above.

# How to publish a new theme version

1. Checkout `master` and `git pull upstream master`
2. Run `yarn install` to make sure you have the latest version of all the dev dependencies
2. Determine whether the release is a patch, minor (feature) or major
   (breaking). You do this by looking at all of the commits since the last
   release:
   [https://github.com/carbon-design-system/gatsby-theme-carbon/commits/master](https://github.com/carbon-design-system/gatsby-theme-carbon/commits/master)
3. Type `yarn release X` where `X` is `patch`, `minor`, or `major` from step 2
4. `git push upstream master --follow-tags`
5. Navigate to the theme releases pages and draft a new release:
   [https://github.com/carbon-design-system/gatsby-theme-carbon/releases/new](https://github.com/carbon-design-system/gatsby-theme-carbon/releases/new)
   1. For tag version, choose the latest tag that was just published
   2. Leave title empty
   3. Follow the previous release as a template indicating new features and
      fixes while linking to relevent documentation as appropriate
6. If this of feature or breaking release, post release notes to Slack channel
