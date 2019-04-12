const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-unwrap-images` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1164,
              sizeByPixelDensity: true,
              tracedSVG: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
        ],
        defaultLayouts: {
          default: require.resolve('./src/templates/Page.js'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [path.resolve(__dirname, 'node_modules')],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.resolve('./src/pages/'),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-carbon'],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
