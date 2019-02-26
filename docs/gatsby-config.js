module.exports = {
  siteMetadata: {
    title: 'Morpheus UI - Documentation',
    description: 'React UI Library by Mainframe.',
    author: 'Mainframe',
  },
  plugins: [
    'gatsby-plugin-flow',
    'gatsby-plugin-react-native-web',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-aphrodite',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
