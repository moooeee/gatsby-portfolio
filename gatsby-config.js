module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `My Portfolio`,
    author: `Mohamed Al-Omari`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohamed Omari`,
        short_name: `M.O.`,
        start_url: `/`,
        background_color: `#0e30f9`,
        theme_color: `#0e30f9`,
        display: `minimal-ui`,
        icon: `src/components/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2000,
              tracedSVG: true,
              loading: "lazy",
              wrapperStyle:
                "grid-column: 1 / -1; width: 100%; max-height: 60vh",
            },
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2000,
              tracedSVG: true,
              loading: "lazy",
              wrapperStyle:
                "grid-column: 1 / -1; width: 100%; max-height: 60vh;",
            },
          },
        ],
      },
    },
    "gatsby-remark-reading-time",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
      },
    },
  ],
}
