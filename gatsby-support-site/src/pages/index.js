import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Help & Support"
          keywords={[`knowledge`, `help`, `support`, `trafikito`, `monitoring`]}
        />

        {posts.map(({node}) => {
          const title = node.frontmatter.title || node.frontmatter.uri;
          return (
            <div key={node.frontmatter.uri}>
              <Typography variant={'title'}>
                <Link style={{boxShadow: `none`}} to={node.frontmatter.uri}>
                  {title}
                </Link>
              </Typography>
              <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___sort], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 160)
          frontmatter {
            title
            uri
            tags
          }
        }
      }
    }
  }
`;
