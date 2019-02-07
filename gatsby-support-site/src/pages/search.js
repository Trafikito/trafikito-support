import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <>
        {JSON.stringify(data)}
      </>
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
    allMarkdownRemark {
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
