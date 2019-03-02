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
import layoutCss from '../components/Layout/style.module.scss';
import rehypeReact from 'rehype-react';
import RangeNormal from '../components/markdown/range/normal';
import RangeWarn from '../components/markdown/range/warn';
import RangeError from '../components/markdown/range/error';
import Wiki from '../components/markdown/wiki';

const removeMd = require('remove-markdown');

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'range-normal': RangeNormal,
    'range-warn': RangeWarn,
    'range-error': RangeError,
    'wiki': Wiki,
  },
}).Compiler;

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
              <div style={{minHeight: 200}}>
                {
                  renderAst(post.htmlAst)
                }
              </div>
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
      htmlAst
      frontmatter {
        id
        title
        uri
        tags
      }
    }
  }
`;
