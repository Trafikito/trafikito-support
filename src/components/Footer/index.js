import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {graphql} from 'gatsby';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Link from '@material-ui/core/Link';

const _get = require('lodash/get');
const isProduction = process.env.NODE_ENV === 'production';

class Footer extends React.Component {
  static propTypes = {
    post: PropTypes.object,
  };

  render() {
    console.log(`#jfekljkw props of footer: `, this.props);
    // const post = this.props.data.markdownRemark;
    // const siteTitle = this.props.data.site.siteMetadata.title;

    // console.log(`#jflkewlk ${JSON.stringify({post, siteTitle})} `);
    let last = 'Home';
    if (this.props.post) {
      last = _get(this.props.post, 'frontmatter.title');
    }

    return (
      <div style={{backgroundColor: blueGrey[50]}}>
        <div style={{maxWidth: 700, margin: '0 auto', padding: '0 8px'}}>
          <div style={{paddingBottom: 16}}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <div style={{padding: '24px 0 0'}}>
                <Breadcrumbs separator="›" arial-label="Breadcrumb">
                  <Link color="inherit" href={isProduction ? 'https://trafikito.com' : 'http://localhost:3000'}>
                    Trafikito
                  </Link>
                  <Link color="inherit" href={isProduction ? 'https://trafikito.com/support' : 'http://localhost:8000'}>
                    Support
                  </Link>
                  <Typography color="textPrimary">{last}</Typography>
                </Breadcrumbs>
              </div>
              <div
                style={{
                  padding: '6px 0 0',
                  height: 32,
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  style={{margin: 3}}
                  href={'https://www.youtube.com/channel/UCofioaADtesyD75204ngeoQ'}
                  target={'_blank'}
                >
                  <img
                    style={{width: 32, height: 32}}
                    src={'https://d4o5fxgxpjzlh.cloudfront.net/images/social/youtube.svg'}
                  />
                </a>
                <a
                  style={{margin: 3}}
                  href={'https://www.instagram.com/trafikito/'}
                  target={'_blank'}
                >
                  <img
                    style={{width: 32, height: 32}}
                    src={'https://d4o5fxgxpjzlh.cloudfront.net/images/social/instagram.svg'}
                  />
                </a>
                <a
                  style={{margin: 3}}
                  href={'https://twitter.com/trafikito'}
                  target={'_blank'}
                >
                  <img
                    style={{width: 32, height: 32}}
                    src={'https://d4o5fxgxpjzlh.cloudfront.net/images/social/twitter.svg'}
                  />
                </a>
                <a
                  style={{margin: 3}}
                  href={'https://www.facebook.com/Trafikito/'}
                  target={'_blank'}
                >
                  <img
                    style={{width: 32, height: 32}}
                    src={'https://d4o5fxgxpjzlh.cloudfront.net/images/social/facebook.svg'}
                  />
                </a>
                <a
                  style={{margin: 3}}
                  href={'https://www.linkedin.com/company/trafikito/'}
                  target={'_blank'}
                >
                  <img
                    style={{width: 32, height: 32}}
                    src={'https://d4o5fxgxpjzlh.cloudfront.net/images/social/linkedin.svg'}
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: '12px 0',
              borderTop: `1px solid ${blueGrey[100]}`,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography component={'div'} variant={'caption'}>
              Copyright © Trafikito.com All rights reserved.
            </Typography>
            <Breadcrumbs separator="|" arial-label="Footer links">
              <Link href={'https://trafikito.com/tos?view=tos'}>
                <Typography variant={'caption'}>Terms of Service</Typography>
              </Link>
              <Link href={'https://trafikito.com/tos?view=privacy'}>
                <Typography variant={'caption'}>Privacy Policy</Typography>
              </Link>
              <Link href={'https://trafikito.com/servers'}>
                <Typography variant={'caption'}>Dashboard</Typography>
              </Link>
              <Link href={'https://trafikito.com/user'}>
                <Typography variant={'caption'}>Your Account</Typography>
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
// export const query = graphql`
//   query CurrentBlogPostBreadcrumbs($uri: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(frontmatter: { uri: { eq: $uri } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         uri
//         tags
//       }
//     }
//   }
// `;
