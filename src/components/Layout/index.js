import React from 'react';
import TopMenu from './partials/TopMenu';
import css from './style.module.scss';
import Typography from '@material-ui/core/Typography';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    secondary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

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
