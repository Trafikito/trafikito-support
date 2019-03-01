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
import addWikiLinks from '../utils/wiki';
import layoutCss from '../components/Layout/style.module.scss';


const removeMd = require('remove-markdown');

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const {related} = this.props.pageContext;

    const relatedArticles = [];
    if (related && related.length > 0) {
      related.forEach((article) => {
        if (post.frontmatter.id !== article.post.frontmatter.id) {
          relatedArticles.push({
            title: article.post.frontmatter.title,
            id: article.post.frontmatter.id,
            uri: article.post.frontmatter.uri,
            tags: article.post.frontmatter.tags,
            excerpt: removeMd(article.post.excerpt),
          });
        }
      });
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={removeMd(post.excerpt)}/>
        <div className={layoutCss.content_holder}>
          <Card>
            <CardHeader
              title={post.frontmatter.title}
              subheader=""
            />
            <CardContent>
              <div dangerouslySetInnerHTML={{__html: addWikiLinks({html: post.html})}} style={{minHeight: 200}}/>
              <div>
                <div style={{height: 220}} id="emojics-root"/>
              </div>
            </CardContent>
          </Card>
          <div style={{margin: '0 12px 48px'}}>
            <Typography variant={'h6'} style={{margin: '24px 0'}}>You may be also interested:</Typography>
            <SearchResultsArticles
              variant={'compact'}
              searchQuery={''}
              articles={relatedArticles}
              showOpenSearchButton
            />
          </div>
        </div>
        <Footer post={post}/>
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
      excerpt(pruneLength: 160, format: PLAIN)
      html
      frontmatter {
        id
        title
        uri
        tags
      }
    }
  }
`;
