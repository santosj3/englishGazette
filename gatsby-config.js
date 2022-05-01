module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: "https://motorsport-gazette.web.app",
  },
  plugins: [
    "gatsby-plugin-advanced-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://f1gazetabe.herokuapp.com",
        queryLimit: 1000, // Defaults to 100
        collectionTypes: ["sport", "original-article"],
        singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        canonicalBaseUrl: "https://motorsport-gazette.web.app",
        components: ["amp-analytics"],
        excludedPaths: ["/404*", "/"],
        pathIdentifier: "/amp",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
        useAmpClientIdApi: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://motorsport-gazette.web.app",
        sitemap: "https://motorsport-gazette.web.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
