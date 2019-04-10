# Gatsby Theme Carbon

## What is this?

> Gatsby has implemented a new feature called [themes](https://www.gatsbyjs.org/docs/themes/). Themes encapsulate all of the configuration and implementation details of Gatsby websites. This project is a boilerplate with the the theme included.

## How are Gatsby themes different than Gatsby starters?

> Starters are essentially gatsby boilerplates. Over time, projects diverge from the original boilerplate and do not benefit from future updates. Gatsby themesm are proper npm dependencies that can be updated to install new components, features, and optimizations.

## What's included?

- Carbon Elements and Carbon React
- [Emotion](https://emotion.sh) for React component styling
- [gatsby-mdx](https://gatsby-mdx.netlify.com/) with brand new markdown components

## How do I use it?

`gatsby-theme-carbon` at it's core relies on mdx for page creation. Check out the pages directory for examples for using mdx.

A key feature of gatsby themes is "component shadowing." By simply placing a component into the `src/components` location it you can override components provided by the theme. You can read more about component shadowing [here](https://www.gatsbyjs.org/docs/themes/api-reference#component-shadowing).

You're also free to make your own components and use them in your MDX pages.

## What's Next?

- Convert website components to Emotion for runtime theming and reduced compile time.
- Migrate reusable MDX components from `@carbon/addons-website`
- Parameters to configure Carbon theme
- Customizable core components
- Intelligent image loading
