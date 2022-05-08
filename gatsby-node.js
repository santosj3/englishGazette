
exports.createPages = async ({ graphql, actions }) => {
  const path = require(`path`);
  const { createPage } = actions;

  const getAllPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allStrapiOriginalArticle(limit: 2000) {
          edges {
            node {
              id
              urlTitle
              sport {
                id
                name
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      const ARTICLES_PAGE = 20;
      var articlesPerSport = [];
      var sports = [];
      result.data.allStrapiOriginalArticle.edges.forEach(({ node }) => {
        sports.find((sport) => sport?.id == node.sport?.id)
          ? null
          : sports.push(node.sport);
      });
      sports.forEach((sport) => {
        articlesPerSport.push({
          articles: result.data.allStrapiOriginalArticle.edges.filter(
            ({ node }) => node.sport?.id === sport?.id
          ),
          sport,
        });
      });
      articlesPerSport.forEach((item) => {
        const numPages = Math.ceil(item.articles.length / ARTICLES_PAGE);
        let node = item.sport;
        if (node && node.slug && node.id) {
          Array.from({ length: numPages }).forEach((j, i) => {
            createPage({
              path: i === 0 ? `/${node.slug}` : `/${node.slug}/${i + 1}`,
              component: path.resolve(`src/templates/sport.js`),
              context: {
                id: `Sport_${node?.id}`,
                articleSportId: node?.id,
                limit: ARTICLES_PAGE,
                skip: i * ARTICLES_PAGE,
                numPages,
                currentPage: i + 1,
              },
            });
          });
        }
      });
      result.data.allStrapiOriginalArticle.edges.forEach(({ node }) => {
        if (node && node.urlTitle && node.id && node.sport && node.sport.id) {
          createPage({
            path: `${node.urlTitle}`,
            component: path.resolve(`src/templates/article.js`),
            context: {
              id: node?.id,
              sportId: node.sport?.id,
            },
          });
          createPage({
            path: `${node.urlTitle}/amp`,
            component: path.resolve(`src/templates/article.amp.js`),
            context: {
              id: node.id,
              sportId: node.sport?.id,
            },
          });
        }
      });
      resolve();
    });
  }).catch((error) => {
    console.log(error);
    reject();
  });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getAllPages


  ])
};