
exports.createPages = async ({ graphql, actions }) => {
  const path = require(`path`);
  const { createPage } = actions;

  const getArticles = new Promise((resolve, reject) => {
    graphql(`
    {
      allStrapiArticle {
        edges {
          node {
            id
            url
          }
        }
      }
    }
    `).then((result) => {
      result.data.allStrapiArticle.edges.forEach(({ node }) => {
        createPage({
          path: `${node.url}`,
          component: path.resolve(`src/templates/article.js`),
          context: {
            id: node.id,
          },
        })
        createPage({
          path: `${node.url}/amp`,
          component: path.resolve(`src/templates/article.amp.js`),
          context: {
            id: node.id,
          },
        })
      })
      resolve();
    });
  }).catch((error) => {
    console.log(error);
    reject();
  });

  const getSports = new Promise((resolve, reject) => {
    graphql(`
    {
      allStrapiSport {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then((result) => {
      result.data.allStrapiSport.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`src/templates/sport.js`),
          context: {
            id: node.id,
          },
        })
      })
      resolve();
    });
  }).catch((error) => {
    console.log(error);
    reject();
  });
  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getSports,
    
  ])
};