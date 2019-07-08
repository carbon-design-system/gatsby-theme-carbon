const path = require('path');
const colors = require('@carbon/themes');
const remarkSlug = require('remark-slug');

module.exports = themeOptions => {
  const {
    additionalFontWeights = [],
    isSearchEnabled = false,
    withWebp = false,
    iconPath,
  } = themeOptions;

  return {
    siteMetadata: {
      isSearchEnabled,
      title: 'Gatsby Theme Carbon',
      description:
        'Add a description by supplying it to siteMetadata in your gatsby-config.js file.',
      keywords: 'gatsby,theme,carbon,design',
    },
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-yaml`,
      `gatsby-plugin-catch-links`,
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `IBM Plex Sans`,
              variants: [
                300,
                '300i',
                400,
                '400i',
                600,
                '600i',
                ...additionalFontWeights,
              ],
            },
            {
              family: `IBM Plex Mono`,
            },
          ],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        name: `Nav`,
        options: {
          path: path.resolve(`./src/data/nav-items.yaml`),
        },
      },
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
                maxWidth: 1170,
                linkImagesToOriginal: false,
                quality: 75,
                withWebp,
              },
            },
            { resolve: `gatsby-remark-responsive-iframe` },
            { resolve: `gatsby-remark-copy-linked-files` },
          ],
          remarkPlugins: [remarkSlug],
          defaultLayouts: {
            default: require.resolve('./src/templates/Default.js'),
            home: require.resolve('./src/templates/Homepage.js'),
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
        resolve: `gatsby-plugin-sass-resources`,
        options: {
          resources: [require.resolve('./src/styles/internal/resources.scss')],
        },
      },
      `gatsby-plugin-emotion`,
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
          name: 'Carbon Design Gatsby Theme',
          short_name: 'Gatsby Theme Carbon',
          start_url: '/',
          background_color: colors.uiBackground,
          theme_color: colors.interactive01,
          display: 'browser',
          icon: iconPath
            ? path.resolve(iconPath)
            : require.resolve('./src/images/favicon.png'),
        },
      },
      `gatsby-plugin-react-helmet`,
    ],
  };
};
