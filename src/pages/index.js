import React from 'react';
import {Link, graphql, withPrefix} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import layoutCss from '../components/Layout/style.module.scss';

const removeMd = require('remove-markdown');

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

        <div className={layoutCss.content_holder}>

          {posts.map(({node}) => {
            const frontmatter = node.frontmatter;
            const url = `/${frontmatter.uri}.html`;
            const title = frontmatter.title || url;
            const featuredImage = frontmatter.featured_image || null;
            const isBlog = frontmatter.layout === 'blog';

            return (
              <Paper style={{width: 300, padding: 12, margin: 6, position: 'relative'}} key={frontmatter.uri}>
                {isBlog && <div className="ribbon ribbon-top-right"><span>Blog</span></div>}
                <Typography variant={'h5'}>
                  <Link style={{boxShadow: `none`}} to={url}>
                    {title}
                  </Link>
                </Typography>
                {
                  featuredImage && (
                    <div style={{textAlign: 'center'}}>
                      <img
                        style={{width: 'calc(100% - 12px)'}}
                        src={withPrefix(`/featured-image/${featuredImage}`)}
                        alt={title}
                      />
                    </div>
                  )
                }
                <Typography variant={'body2'} component={'div'}>
                  <p dangerouslySetInnerHTML={{__html: removeMd(node.excerpt)}}/>
                </Typography>
              </Paper>
            );
          })}
        </div>
        <Footer/>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date,frontmatter___sort], order: DESC }) {
      edges {
        node {
          excerpt(format: PLAIN)
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
    }
  }
`;
