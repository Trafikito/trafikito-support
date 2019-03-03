import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Link from '@material-ui/core/Link';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './../Layout/theme';
// import css from './style.module.scss';

const _get = require('lodash/get');

class Footer extends React.Component {
  static propTypes = {
    post: PropTypes.object,
  };

  render() {
    // const post = this.props.data.markdownRemark;
    // const siteTitle = this.props.data.site.siteMetadata.title;

    // console.log(`#jflkewlk ${JSON.stringify({post, siteTitle})} `);
    let last = 'Home';
    if (this.props.post) {
      last = _get(this.props.post, 'frontmatter.title');
    }

    return (
      <MuiThemeProvider theme={theme}>
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
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    padding: '6px 3px',
                  }}
                >
                  <Link color="inherit" href={'https://trafikito.com'}>Trafikito</Link>
                  <div style={{margin: '0 6px'}}>›</div>
                  <Link color="inherit" href={'https://trafikito.com/support'}>Support</Link>
                  <div style={{margin: '0 6px'}}>›</div>
                  <Typography color="textPrimary">{last}</Typography>
                </div>
                <div
                  style={{
                    padding: '6px 0 0',
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
                      alt={'YouTube'}
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
                      alt={'Instagram'}
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
                      alt={'Twitter'}
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
                      alt={'Facebook'}
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
                      alt={'LinkedIn'}
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
              <div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Link href={'https://trafikito.com/servers'}>
                    <Typography variant={'caption'} style={{whiteSpace: 'nowrap'}}>Dashboard</Typography>
                  </Link>
                  <div style={{margin: '0 3px'}}>|</div>
                  <Link href={'https://trafikito.com/user'}>
                    <Typography variant={'caption'} style={{whiteSpace: 'nowrap'}}>Your Account</Typography>
                  </Link>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Link href={'https://trafikito.com/tos?view=tos'}>
                    <Typography variant={'caption'} style={{whiteSpace: 'nowrap'}}>Terms of Service</Typography>
                  </Link>
                  <div style={{margin: '0 3px'}}>|</div>
                  <Link href={'https://trafikito.com/tos?view=privacy'}>
                    <Typography variant={'caption'} style={{whiteSpace: 'nowrap'}}>Privacy Policy</Typography>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Footer;
