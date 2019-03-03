import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import SearchResultsArticles from '../components/Search/partials/articles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import layoutCss from './style.module.scss';
import rehypeReact from 'rehype-react';
import RangeNormal from '../components/markdown/range/normal';
import RangeWarn from '../components/markdown/range/warn';
import RangeError from '../components/markdown/range/error';
import Wiki from '../components/markdown/wiki';
import Icon from '../components/markdown/icon';
import Info from '../components/markdown/info';
import Quote from '../components/markdown/quote';
import Gif from '../components/markdown/gif';
import Code from '../components/markdown/code';

const removeMd = require('remove-markdown');
const moment = require('moment');

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'range-normal': RangeNormal,
    'range-warn': RangeWarn,
    'range-error': RangeError,
    'wiki': Wiki,
    'icon': Icon,
    'info': Info,
    'quote': Quote,
    'gif': Gif,
    'code': Code,
  },
}).Compiler;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const frontmatter = this.props.data.markdownRemark.frontmatter;
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

    let date = null;

    if (frontmatter.date) {
      date = moment(new Date(frontmatter.date)).format('YYYY-MM-DD');
    }

    const tags = [];
    if (frontmatter.layout === 'blog') {
      tags.push(<Chip key={'blog'} label={'blog'} style={{margin: 3}}/>);
    }

    frontmatter.tags.forEach((tag) => {
      tags.push(<Chip key={tag} label={tag} style={{margin: 3}}/>);
    });

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={removeMd(post.excerpt)}/>
        <div className={layoutCss.content_holder}>
          <Paper style={{padding: 24, margin: '3px 6px'}}>
            <Typography component={'div'} variant={'h2'}>{post.frontmatter.title}</Typography>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>{tags}</div>
              {date && (
                <Typography variant={'caption'}>
                  {date}
                </Typography>
              )}
            </div>
            <Typography component={'div'} style={{padding: '12px'}} variant={'body1'}>
              <div>
                <div style={{minHeight: 200}}>{renderAst(post.htmlAst)}</div>
                <div style={{height: 220}} id="emojics-root"/>
              </div>
            </Typography>
          </Paper>
          <div style={{margin: '0 12px 48px'}}>
            <Typography component={'div'} variant={'h6'} style={{margin: '24px 0'}}>
              You may be also interested:
            </Typography>
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
        featured_image
        layout
        title
        uri
        tags
        date
      }
    }
  }
`;
