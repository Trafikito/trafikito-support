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
  },
});

export default theme;
