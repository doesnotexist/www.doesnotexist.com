module.exports = {
  siteMetadata: {
    title: `Does Not Exist`,
    description: `How did I get here?`,
    author: `@doesnotexist`,
    siteUrl: `https://doesnotexist.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DoesNotExist.com`,
        short_name: `DoesNotExist`,
        start_url: `/`,
        background_color: `#2970f2`,
        theme_color: `#2970f2`,
        display: `minimal-ui`,
        icon: `src/images/mountain.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
