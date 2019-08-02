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
              pageHeader {
                id
              }
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

    // Create blog post pages.
    result.data.allContentfulWebPage.edges.forEach(({ node }) => {
      if (node.slug === `index`) {
        slug = `/`;
      } else {
        slug = node.slug;
      }
      createPage({
        // Path for this page — required
        path: `${slug}`,
        component: webPageTemplate,
        context: {
          id: node.id,
          headerId: node.pageHeader.id,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      });
    });
  });
};
