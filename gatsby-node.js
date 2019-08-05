const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      query WEB_PAGES_QUERY {
        allContentfulWebPage {
          edges {
            node {
              id
              pageTitle
              slug
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    let slug;
    const webPageTemplate = path.resolve(`src/templates/page.js`);

    // Create website pages
    result.data.allContentfulWebPage.edges.forEach(({ node }) => {
      if (node.slug === `index`) {
        slug = `/`;
      } else {
        slug = node.slug;
      }
      createPage({
        path: `${slug}`,
        component: webPageTemplate,
        context: {
          id: node.id,
        },
      });
    });
  });
};
