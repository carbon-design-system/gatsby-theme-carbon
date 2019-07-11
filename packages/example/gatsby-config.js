module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
    repository: {
      baseUrl: 'https://github.com/carbon-design-system/gatsby-theme-carbon',
      subDirectory: '/packages/example',
    },
  },
  pathPrefix: `/gtc`,
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
      },
    },
  ],
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        additionalFontWeights: ['200', '200i'],
      },
    },
  ],
};
