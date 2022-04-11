module.exports = {  
  siteMetadata: {
    title: `new`,
    siteUrl: 'localhost:8000'
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
      canonicalBaseUrl: 'localhost:8000',
      components: ['amp-img'],
      excludedPaths: ['/404*', '/'],
      pathIdentifier: '/amp/',
      relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
      useAmpClientIdApi: true,
    },
  },]
};