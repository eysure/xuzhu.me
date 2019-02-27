module.exports = {
    siteMetadata: {
        title: `Xinyang Zhu`,
        description: `The project showcase website of Xinyang Zhu.`,
        author: `@eysure`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Xinyang Zhu`,
                short_name: `xyzhu`,
                start_url: `/`,
                background_color: `#26262A`,
                theme_color: `#26262A`,
                display: `minimal-ui`,
                icon: `src/images/xyzhu.svg` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-catch-links`,
        `gatsby-transformer-remark`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ]
};
