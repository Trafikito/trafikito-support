const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);
const fs = require('fs');

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
        path: `/${post.node.frontmatter.uri}.html`,
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

exports.onPostBuild = async ({graphql}) => {

  const query = `{
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  uri
                }
                excerpt
              }
            }
          }
        }`;

  const result = await graphql(query);

  const data = [];
  if (
    result
    && result.data
    && result.data.allMarkdownRemark
    && result.data.allMarkdownRemark.edges
    && result.data.allMarkdownRemark.edges.length > 0
  ) {
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      data.push({
        ...edge.node.frontmatter,
        excerpt: edge.node.excerpt,
      });
    });
  }

  const filePath = `${__dirname}/public/search.json`;
  console.log(`#3kj4irjg Writing JSON to ${filePath}`);
  fs.writeFileSync(filePath, JSON.stringify(data));
};

// {
//   resolve: `gatsby-plugin-json-output`,
//     options: {
//   siteUrl: `http://localhost:8000/`,
//     graphQLQuery: `
//         {
//           allMarkdownRemark(limit: 1000) {
//             edges {
//               node {
//                 frontmatter {
//                   title
//                   uri
//                 }
//               }
//             }
//           }
//         }
//       `,
//     serialize: results => results.data.allMarkdownRemark.edges.map(({node}) => {
//     return ({
//       path: node.frontmatter.uri, // MUST contain a path
//       title: node.frontmatter.title,
//       uri: node.frontmatter.uri,
//     });
//   }),
// },
// },
