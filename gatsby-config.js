/* eslint-disable max-len */

module.exports = {
    siteMetadata: {
        siteTitle: "gatsby-site-template",
        siteLanguage: "en",
        siteDescription: "Simple starter template for building Gatsby sites with Markdown and Styled Components.",
        siteBanner: "https://gatsby-site-template.tomdewildt.nl/images/banner.png",
        siteUrl: "https://gatsby-site-template.tomdewildt.nl",
    },
    plugins: [
        // Sources
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${ __dirname }/static/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${ __dirname }/src/pages`,
            },
        },

        // Transformers
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    "gatsby-remark-images",
                ],
            },
        },

        // Plugins
        "gatsby-plugin-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-site-template",
                short_name: "gatsby-site-template",
                start_url: "/",
                theme_color: "#663399",
                background_color: "#ffffff",
                display: "standalone",
                icon: `${ __dirname }/static/images/icon.png`,
            },
        },
    ],
};
