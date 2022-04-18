module.exports = {  
  siteMetadata: {
    title: `new`,
    siteUrl: 'http://localhost:9000'
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp","gatsby-plugin-advanced-sitemap", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: 'https://f1gazetabe.herokuapp.com',
      queryLimit: 1000, // Defaults to 100
      collectionTypes: ['sport', 'article'],
      singleTypes: [],
    },
  },{
    resolve: `gatsby-plugin-amp`,
    options: {     
      canonicalBaseUrl: 'http://localhost:9000',
      components: ['amp-img'],
      excludedPaths: ['/404*', '/'],
      pathIdentifier: '/amp',
      relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
      useAmpClientIdApi: true,
    },
  },{
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'http://localhost:9000',
      sitemap: 'http://localhost:9000/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },]
};