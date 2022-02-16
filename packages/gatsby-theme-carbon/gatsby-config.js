const path = require('path');
const { gray100 } = require('@carbon/elements');
const defaultLunrOptions = require('./config/lunr-options');

const carbonThemes = {
  white: require.resolve('./src/styles/internal/white.scss'),
  g10: require.resolve('./src/styles/internal/g10.scss'),
  dark: require.resolve('./src/styles/internal/g100.scss'),
};

module.exports = (themeOptions) => {
  const repositoryDefault = {
    baseUrl: '',
    subDirectory: '',
    branch: 'main',
  };

  const defaultTheme = { homepage: 'dark', interior: 'g10' };

  const {
    theme: themeOption,
    isSearchEnabled = true,
    navigationStyle = '',
    withWebp = false,
    iconPath,
    mdxExtensions = ['.mdx', '.md'],
    imageQuality = 75,
    lunrOptions = defaultLunrOptions,
    repository,
    pngCompressionSpeed = 4, // default for gatsby-plugin-sharp
    mediumAccount = '',
    gatsbyRemarkPlugins = [],
    remarkPlugins = [],
    gatsbyPluginSharpOptions = {},
    isServiceWorkerEnabled = false,
    isSwitcherEnabled = true,
    extraLayouts = {},
  } = themeOptions;

  const theme = { ...defaultTheme, ...themeOption };

  const optionalPlugins = [];

  if (mediumAccount) {
    optionalPlugins.push({
      resolve: 'gatsby-source-medium-feed',
      options: {
        userName: mediumAccount, // Medium user name
        name: 'MediumFeed',
      },
    });
  }

  if (isServiceWorkerEnabled) {
    optionalPlugins.push(`gatsby-plugin-offline`);
  }

  const defaultRemarkPlugins = [
    { resolve: `gatsby-remark-unwrap-images` },
    { resolve: `gatsby-remark-smartypants` },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1152,
        linkImagesToOriginal: false,
        quality: imageQuality,
        withWebp,
        pngCompressionSpeed,
        ...gatsbyPluginSharpOptions,
      },
    },
    { resolve: `gatsby-remark-responsive-iframe` },
    { resolve: `gatsby-remark-copy-linked-files` },
  ];

  return {
    siteMetadata: {
      isSearchEnabled,
      navigationStyle,
      homepageTheme: theme.homepage,
      interiorTheme: theme.interior,
      isServiceWorkerEnabled,
      isSwitcherEnabled,
      title: 'Gatsby Theme Carbon',
      description:
        'Add a description by supplying it to siteMetadata in your gatsby-config.js file.',
      keywords: 'gatsby,theme,carbon,design',
      lang: 'en',
      repository: { ...repositoryDefault, ...repository },
    },
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-remark-images`,
      `gatsby-transformer-yaml`,
      `gatsby-plugin-catch-links`,
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
        options: {
          disable: !process.env.ANALYZE,
        },
      },
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
            ...defaultRemarkPlugins,
            ...gatsbyRemarkPlugins,
          ],
          remarkPlugins,
          defaultLayouts: {
            default: require.resolve('./src/templates/Default.js'),
            home: require.resolve('./src/templates/Homepage.js'),
            ...extraLayouts,
          },
        },
      },
      {
        resolve: 'gatsby-plugin-sass',
        options: {
          sassOptions: {
            includePaths: [path.resolve(__dirname, 'node_modules')],
          },
        },
      },
      {
        resolve: `gatsby-plugin-sass-resources`,
        options: {
          resources: [
            carbonThemes[theme.interior],
            require.resolve('./src/styles/internal/resources.scss'),
          ],
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
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'Carbon Design Gatsby Theme',
          short_name: 'Gatsby Theme Carbon',
          start_url: '/',
          background_color: gray100,
          theme_color: gray100,
          display: 'browser',
          icon: iconPath
            ? path.resolve(iconPath)
            : require.resolve('./src/images/favicon.svg'),
        },
      },
      `gatsby-plugin-react-helmet`,
    ].concat(optionalPlugins),
  };
};
