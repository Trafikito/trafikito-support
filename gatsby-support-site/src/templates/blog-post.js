import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const {previous, next} = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt}/>
        <Card>
          <CardHeader
            title={post.frontmatter.title}
            subheader=""
          />
          <CardContent>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
          </CardContent>

          <CardActions>
            {previous && (
              <Link to={`/${previous.frontmatter.uri}.html`} rel="prev">
                <Button size="small" color="primary">
                  {previous.frontmatter.title}
                </Button>
              </Link>
            )}

            {next && (
              <Link to={`/${next.frontmatter.uri}.html`} rel="next">
                <Button size="small" color="primary">
                  {next.frontmatter.title}
                </Button>
              </Link>
            )}
          </CardActions>
        </Card>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($uri: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { uri: { eq: $uri } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        uri
        tags
      }
    }
  }
`;
