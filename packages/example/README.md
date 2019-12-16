# Gatsby Theme Carbon Starter

## What is this?

> Gatsby has implemented a new feature called [themes](https://www.gatsbyjs.org/docs/themes/). Themes encapsulate all of the configuration and implementation details of Gatsby websites. This is a starter-kit (boilerplate) that has a dependancy on the `gatsby-theme-carbon` package. It includes some sample content in the `src/pages` directory.

## What’s included?

- Carbon Elements and Carbon React
- [Emotion](https://emotion.sh) for React component styling
- [gatsby-mdx](https://gatsby-mdx.netlify.com/) with brand new markdown components

## How do I use it?

`gatsby-theme-carbon` at it’s core relies on [mdx](https://mdxjs.com/) for page creation. Check out the `src/pages` directory for some examples for using mdx.

A key feature of Gatsby themes is component shadowing. By simply placing a component into the `src/gatsby-theme-carbon/components` location, you can override components used by the theme. You can read more about component shadowing [here](https://www.gatsbyjs.org/docs/themes/api-reference#component-shadowing).

You’re also free to make your own components and use them in your MDX pages.

## What’s Next?

- Migrating reusable MDX components
- Parameters to configure Carbon theme
