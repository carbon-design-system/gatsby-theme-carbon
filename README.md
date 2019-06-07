<h1 align="center">
  Gatsby Theme Carbon
</h1>

Get started using with the Gatsby Carbon theme which includes all configuration you might need to build a beautiful site inspired by the [Carbon Design System](https://www.carbondesignsystem.com).

## 🧗 Getting started

1. **Create your site**

Use the gatsby CLI to bootstrap your site with the starter

```sh
npx gatsby new my-carbon-site https://github.com/carbon-design-system/gatsby-starter-carbon-theme
```

2. **Start developing**

Navigate into your directory and start it up

```sh
    cd my-carbon-site/
    gatsby develop
```

3. **Make some changes!**

Navigate to `localhost:8000` to see your site running

Each of the Items in your side bar correlates to a MDX file in your `src/pages/` directory. Navigate to a site and try editing the corresponding markdown file. You'll be able to see it update live!

## 🔍 What's in here?

Lets check out the structure of our project

    .
    ├── LICENSE
    ├── README.md
    ├── gatsby-config.js
    ├── node_modules
    ├── package.json
    ├── public
    ├── src
    │   ├── gatsby-theme-carbon
    │   └── pages
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site.

    - **gatsby-theme-carbon** this is where you'll override (known as shadowing) the default `gatsby-theme-carbon` components
    - **pages** This is where most of your content will live. You'll represent each page with an MDX file.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description. You'll notice that all of the configuration for the site is coming from `gatsby-theme-carbon`

1.  **`LICENSE`**: Gatsby is licensed under the Apache 2.0 license.

1.  **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: This file!

## 👷‍ Components

This is where we'll document the various utility components as they're added.

## 📘 Resources

1. [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/)
1. [MDX](https://mdxjs.com/)

## 👻 Configuration and Shadowing

### Title and Description

To add a title and description to each page, simply provide them to siteMetadata in your `gatsby-config.js` file.

```js
module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
    },
  ],
};
```

### Favicon and Manifest

One of the first configurations should be to override the default manifest options, you can do this in `gatsby-config.js`. Any options you don't set, will be provided by the theme. See the example project.

```js
siteMetadata: {
    title: 'Gatsby Theme Carbon',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
        icon: './src/images/custom-favicon.png', // defaults to IBM rebus eye
      },
    },
  ],
  __experimentalThemes: [
```

### Additional font weights

If needed, you can add support for additional Plex font weights. Don't forget to specify italics for the additional weights if needed.

```js
__experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
		// will get added to default [300, 400, 600]
        additionalFontWeights: ['200', '200i]
      },
    },
  ],
```

### 404 implementation

1. Make a 404.js in your src/pages
1. Import the 404 component from the theme
1. Export the component and provide your own links
1. If necessary, configure your server to route unknown routes to 404.html

```jsx
import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/components/markdown', text: 'Markdown' },
  { href: '/components/Aside', text: 'Aside' },
  { href: '/components/demo', text: 'Demo' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
```

### Image Compression

You can enable WebP by passing `withWebp: true` or providing your own optimization level. See the gatsby-remark-images [plugin options](https://www.gatsbyjs.org/packages/gatsby-remark-images/#options).

```js
module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        name: 'Gatsby Theme Carbon Starter',
        shortName: 'Carbon Starter',
        withWebp: true,
      },
    },
  ],
};
```

### Global Search

The GlobalSearch component is disabled by default. If you'd like to implement search functionality, you'll need to follow these two steps:

1. set the isSearchEnabled theme option to true

```js
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true
      },
    },
  ],
```

2. Shadow the example search implementation at `/src/util/hooks/useSearch.js`

```jsx
import { useEffect } from 'react';
const useAlgoliaSearch = () => {
  // ...
};

export default useAlgoliaSearch;
```

The example `useSearch` hook demonstrates implementing search with [Algolia](https://www.algolia.com/). Algolia is free for open source libraries. You can shadow this hook and replace it with your Algolia credentials or a library of your choosing.

## 🚀 Deployment

Coming soon!
