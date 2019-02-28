import React from 'react';
import TopMenu from './partials/TopMenu';
import css from './style.module.scss';
import Typography from '@material-ui/core/Typography';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Helmet>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Helmet>
        <Typography component={'div'} className={css.main_holder}>
          <TopMenu/>
          <div className={css.content_holder}>
            <div style={{padding: '24px 6px'}}>
              <main>{this.props.children}</main>
            </div>
          </div>
        </Typography>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
