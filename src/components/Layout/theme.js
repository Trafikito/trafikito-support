import {createMuiTheme} from '@material-ui/core';
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
    h1: {
      fontSize: '3.56rem',
    },
    h2: {
      fontSize: '2.92rem',
    },
    h3: {
      fontSize: '2.28rem',
    },
    h4: {
      fontSize: '1.64rem',
    },
    h5: {
      fontSize: '1.15rem',
    },
    h6: {
      fontSize: '1.1rem',
    },
  },
});

export default theme;
