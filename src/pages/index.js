import React from 'react';
import {Link, graphql, withPrefix} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import layoutCss from '../components/Layout/style.module.scss';
import Grow from '@material-ui/core/Grow';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import blueGrey from '@material-ui/core/colors/blueGrey';

const removeMd = require('remove-markdown');
const possibleTabs = ['all', 'qa', 'blog'];
const moment = require('moment');

class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: this.getInitialTab(),
    };
    this.getInitialTab = this.getInitialTab.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  getInitialTab() {
    const selected = localStorage.getItem('support_index_tab');
    if (possibleTabs.includes(selected)) {
      return selected;
    }
    return 'blog';
  }

  handleTabChange({tab}) {
    if (possibleTabs.includes(tab)) {
      this.setState({tab});
      localStorage.setItem('support_index_tab', tab);
    }
  }

  render() {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    let boxCount = 0;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Help & Support"
          keywords={[`knowledge`, `help`, `support`, `trafikito`, `monitoring`]}
        />

        <div style={{margin: '0 6px'}}>
          <Paper style={{maxWidth: 500, width: '100%', margin: '0px auto 24px', padding: '0 6px'}}>
            <Tabs
              value={this.state.tab}
              onChange={(e, tab) => this.handleTabChange({tab})}
              indicatorColor="primary"
              textColor="primary"
              centered
              variant="fullWidth"
            >
              <Tab value={'all'} label="All"/>
              <Tab value={'qa'} label="Q&A"/>
              <Tab value={'blog'} label="Blog posts"/>
            </Tabs>
          </Paper>
        </div>

        <div className={layoutCss.content_holder}>
          {posts.map(({node}) => {
            const frontmatter = node.frontmatter;
            const url = `/${frontmatter.uri}.html`;
            const title = frontmatter.title || url;
            const featuredImage = frontmatter.featured_image || null;
            const isBlog = frontmatter.layout === 'blog';

            let visible = this.state.tab === 'all' || (this.state.tab === 'blog' && isBlog) || this.state.tab === 'qa' && !isBlog;

            if (!visible) {
              return null;
            }

            const timeout = boxCount * 250 > 3000 ? 3000 : boxCount * 250;
            boxCount++;

            let date = null;
            if (frontmatter.date) {
              date = moment(new Date(frontmatter.date)).fromNow();
            }

            return (
              <Grow
                in={visible}
                style={{transformOrigin: '0 0 0'}}
                timeout={timeout}
                key={frontmatter.uri}
              >
                <Paper style={{width: 300, margin: '12px 6px', position: 'relative'}}>
                  {isBlog && <div className="ribbon ribbon-top-right"><span>Blog</span></div>}
                  <Typography variant={'h4'} style={{padding: 12}}>
                    <Link style={{boxShadow: `none`}} to={url}>
                      {title}
                    </Link>
                  </Typography>
                  {
                    featuredImage && (
                      <div style={{textAlign: 'center', margin: '0 12px'}}>
                        <Link style={{boxShadow: `none`}} to={url}>
                          <img
                            style={{width: 'calc(100% - 0px)'}}
                            src={withPrefix(`/featured-image/${featuredImage}`)}
                            alt={title}
                          />
                        </Link>
                      </div>
                    )
                  }
                  <Typography
                    variant={'body1'}
                    component={'div'}
                    style={{
                      padding: '0px 12px 42px',
                      flex: 1,
                    }}
                  >
                    <p dangerouslySetInnerHTML={{__html: removeMd(node.excerpt)}}/>
                  </Typography>
                  <Typography
                    component={'div'}
                    variant={'caption'}
                    style={{
                      position: 'absolute',
                      bottom: -1,
                      borderBottomRightRadius: 3,
                      borderBottomLeftRadius: 3,
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: blueGrey[50],
                      padding: '6px 12px',
                    }}
                  >
                    <div>{frontmatter.tags.join(', ')}</div>
                    {date && <div style={{whiteSpace: 'nowrap'}}>{date}</div>}
                  </Typography>
                </Paper>
              </Grow>
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
