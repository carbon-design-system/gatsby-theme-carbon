module.exports = {
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
      },
    },
  ],
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        additionalFontWeights: [200],
      },
    },
  ],
};
