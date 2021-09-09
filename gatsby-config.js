module.exports = {
  pathPrefix: '/lmcjt',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luke Taylor | Web & App developer`,
        short_name: `Luke Taylor | developer`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#8e2de2`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
