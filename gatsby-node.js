const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);
const fs = require('fs');
const _get = require('lodash/get');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___sort], order: DESC }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                id
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
      const related = [];
      const tags = _get(post, 'node.frontmatter.tags');

      posts.forEach((postToMatch) => {
        const matchedPostTags = _get(postToMatch, 'node.frontmatter.tags');
        let matchedTags = [];
        tags.forEach((tag) => {
          if (matchedPostTags.includes(tag)) {
            matchedTags.push(tag);
          }
        });

        if (matchedTags.length > 0) {
          related.push({
            post: _get(postToMatch, 'node'),
            matchedTags,
          });
        }
      });

      createPage({
        path: `/${post.node.frontmatter.uri}.html`,
        component: blogPost,
        context: {
          uri: post.node.frontmatter.uri,
          related,
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
                  id
                  title
                  uri
                  tags
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
