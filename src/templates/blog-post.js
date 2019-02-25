import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import SearchResultsArticles from '../components/Search/partials/articles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const {related} = this.props.pageContext;

    const relatedArticles = [];
    if (related && related.length > 0) {
      related.forEach((article) => {
        relatedArticles.push({
          title: article.post.frontmatter.title,
          id: article.post.frontmatter.id,
          uri: article.post.frontmatter.uri,
          tags: article.post.frontmatter.tags,
          excerpt: article.post.excerpt,
        });
      });
    }

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={post.frontmatter.title} description={post.excerpt}/>
          <Card>
            <CardHeader
              title={post.frontmatter.title}
              subheader=""
            />
            <CardContent>
              <div dangerouslySetInnerHTML={{__html: post.html}} style={{minHeight: 200}}/>
              <div>
                <div style={{height: 220}} id="emojics-root"/>
              </div>
            </CardContent>
          </Card>
          <Typography variant={'h5'} style={{margin: '24px 0'}}>You may be also interested:</Typography>
          <div>
            <SearchResultsArticles
              searchQuery={''}
              articles={relatedArticles}
            />
          </div>
        </Layout>
        <Footer post={post}/>
      </>
    );
  }
}

/*

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
 */

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
