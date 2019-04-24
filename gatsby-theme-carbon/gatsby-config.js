const path = require('path');
const colors = require('@carbon/themes');

module.exports = themeOptions => {
  const {
    name = 'Gatsby Carbon Theme',
    shortName = 'Carbon',
    startUrl = '/',
    backgroundColor = colors.uiBackground,
    themeColor = colors.interactive01,
    display = 'browser',
    favicon = require.resolve('./src/images/light.png'),
  } = themeOptions;

  return {
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
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.resolve('./src/images/'),
        },
      },
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['gatsby-theme-carbon'],
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name,
          short_name: shortName,
          start_url: startUrl,
          background_color: backgroundColor,
          theme_color: themeColor,
          display,
          favicon,
        },
      },
      `gatsby-plugin-react-helmet`,
    ],
  };
};
