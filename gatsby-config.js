module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: "https://gazetaesportesmotor.web.app",
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
        canonicalBaseUrl: "https://gazetaesportesmotor.web.app",
        components: [],
        excludedPaths: ["/404*", "/"],
        pathIdentifier: "/amp",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
        useAmpClientIdApi: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://gazetaesportesmotor.web.app",
        sitemap: "https://gazetaesportesmotor.web.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
