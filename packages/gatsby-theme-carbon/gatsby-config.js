const path = require('path');
const { uiBackground, interactive01 } = require('@carbon/elements');
const remarkSlug = require('remark-slug');

module.exports = themeOptions => {
  const {
    isSearchEnabled = false,
    withWebp = false,
    iconPath,
    mdxExtensions = ['.mdx', '.md'],
    imageQuality = 75,
    repository = {
      baseUrl: '',
      subDirectory: '',
    },
  } = themeOptions;

  return {
    siteMetadata: {
      isSearchEnabled,
      title: 'Gatsby Theme Carbon',
      description:
        'Add a description by supplying it to siteMetadata in your gatsby-config.js file.',
      keywords: 'gatsby,theme,carbon,design',
      repository,
    },
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-yaml`,
      `gatsby-plugin-catch-links`,
      {
        resolve: 'gatsby-plugin-lunr',
        options: {
          languages: [{ name: 'en' }],
          fields: [
            { name: 'title', store: true, attributes: { boost: 20 } },
            { name: 'path', store: true },
            { name: 'description', store: true },
            { name: 'content' },
            { name: 'keywords', store: true },
          ],
          resolvers: {
            SitePage: {
              title: node =>
                node.context.frontmatter ? node.context.frontmatter.title : '',
              path: node => node.path,
              description: node =>
                node.context.frontmatter
                  ? node.context.frontmatter.description
                  : '',
              keywords: node =>
                node.context.frontmatter && node.context.frontmatter.keywords
                  ? node.context.frontmatter.keywords.split(',')
                  : '',
              content: node =>
                node.context.MdxNode
                  ? node.context.MdxNode.internal.content
                  : '',
            },
          },
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
    ],
  };
};
