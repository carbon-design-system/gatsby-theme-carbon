# How to publish a new theme version
> be sure to have lerna installed globally (`npm i -g lerna`)

1. Checkout `master` and `git pull upstream master`
2. Determine whether the release is a patch, minor (feature) or major
   (breaking). You do this by looking at all of the commits since the last
   release:
   [https://github.com/carbon-design-system/gatsby-theme-carbon/commits/master](https://github.com/carbon-design-system/gatsby-theme-carbon/commits/master)
3. Type `lerna publish X` where `X` is `patch`, `minor`, or `major` from step 2
4. `git push upstream master --follow-tags`
5. Navigate to the theme releases pages and draft a new release:
   [https://github.com/carbon-design-system/gatsby-theme-carbon/releases/new](https://github.com/carbon-design-system/gatsby-theme-carbon/releases/new)
   1. For tag version, choose the latest tag that was just published
   2. Leave title empty
   3. Follow the previous release as a template indicating new features and
      fixes while linking to relevent documentation as appropriate
6. If this of feature or breaking release, post release notes to Slack channel
