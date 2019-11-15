const path = require('path');
const { uiBackground, interactive01 } = require('@carbon/elements');
const remarkSlug = require('remark-slug');
const defaultLunrOptions = require('./config/lunr-options');

module.exports = themeOptions => {
  const repositoryDefault = {
    baseUrl: '',
    subDirectory: '',
    branch: 'master',
  };

  const {
    isSearchEnabled = true,
    withWebp = false,
    iconPath,
    mdxExtensions = ['.mdx', '.md'],
    imageQuality = 75,
    lunrOptions = defaultLunrOptions,
    repository,
    mediumAccount = 'carbondesign',
  } = themeOptions;

  return {
    siteMetadata: {
      isSearchEnabled,
      title: 'Gatsby Theme Carbon',
      description:
        'Add a description by supplying it to siteMetadata in your gatsby-config.js file.',
      keywords: 'gatsby,theme,carbon,design',
      repository: { ...repositoryDefault, ...repository },
    },
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-yaml`,
      `gatsby-plugin-catch-links`,
      {
        resolve: 'gatsby-plugin-lunr',
        options: lunrOptions,
      },
      {
        resolve: `gatsby-source-filesystem`,
        name: `Nav`,
        options: {
          path: path.resolve(`./src/data/nav-items.yaml`),
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: mdxExtensions,
          gatsbyRemarkPlugins: [
            { resolve: `gatsby-remark-unwrap-images` },
            { resolve: `gatsby-remark-smartypants` },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1152,
                linkImagesToOriginal: false,
                quality: imageQuality,
                withWebp,
              },
            },
            { resolve: `gatsby-remark-responsive-iframe` },
            { resolve: `gatsby-remark-copy-linked-files` },
          ],
          plugins: ['gatsby-remark-images'],
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
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'Carbon Design Gatsby Theme',
          short_name: 'Gatsby Theme Carbon',
          start_url: '/',
          background_color: uiBackground,
          theme_color: interactive01,
          display: 'browser',
          icon: iconPath
            ? path.resolve(iconPath)
            : require.resolve('./src/images/favicon.png'),
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: 'gatsby-source-medium-feed',
        options: {
          userName: mediumAccount, // Medium user name
          name: 'MediumFeed', // GraphQL query AllMediumFeed
        },
      },
    ],
  };
};
