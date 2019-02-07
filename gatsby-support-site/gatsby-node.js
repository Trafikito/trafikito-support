const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___sort], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              frontmatter {
                title
                uri
                tags
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `/${post.node.frontmatter.uri}`,
        component: blogPost,
        context: {
          uri: post.node.frontmatter.uri,
          previous,
          next,
        },
      });
    });
  });
};

