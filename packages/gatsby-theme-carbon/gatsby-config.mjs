import path, { dirname } from 'path';
import { gray100 } from '@carbon/elements';

/*
We have tied the version to be 3.0.1 as the latest version will uses markdown 3 is not fully supported by gatsby v5 at the moment
More info - https://github.com/mdx-js/mdx/issues/2379#issuecomment-1933035305
*/
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';
import defaultLunrOptions from './config/lunr-options.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const carbonThemes = {
  white: './src/styles/internal/white.scss',
  g10: './src/styles/internal/g10.scss',
  dark: './src/styles/internal/g100.scss',
};

const repositoryDefault = {
  baseUrl: '',
  subDirectory: '',
  branch: 'main',
};

const defaultTheme = { homepage: 'dark', interior: 'g10' };

export default (themeOptions) => {
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
    mediumAccount = '',
    gatsbyRemarkPlugins = [],
    remarkPlugins = [],
    gatsbyPluginSharpOptions = {},
    isServiceWorkerEnabled = false,
    isSwitcherEnabled = true,
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
        ...gatsbyPluginSharpOptions,
      },
    },
    { resolve: `gatsby-remark-responsive-iframe` },
    { resolve: `gatsby-remark-copy-linked-files` },
  ];

  return {
    trailingSlash: `always`,
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
          mdxOptions: {
            remarkPlugins: [remarkGfm, ...remarkPlugins],
          },
          // defaultLayouts: {
          //   default: require.resolve('./src/templates/Default.js'),
          //   home: require.resolve('./src/templates/Homepage.js'),
          // },
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
        resolve: `@garcia-enterprise/gatsby-plugin-sass-resources`,
        options: {
          resources: [
            path.resolve(__dirname, `./src/styles/internal/resources.scss`),
            path.resolve(__dirname, carbonThemes[theme.interior]),
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
            : path.resolve('./src/images/favicon.svg'),
        },
      },
    ].concat(optionalPlugins),
  };
};
