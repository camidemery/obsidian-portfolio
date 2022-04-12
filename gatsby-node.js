exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const notesTemplate = require.resolve('./src/templates/noteTemplate.js');

  const result = await graphql(`
    {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `notes/${node.slug}`,
      component: notesTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
