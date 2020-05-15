import { red } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Create a theme instance.
export const themeBase = {
  palette: {
    primary: {
      main: '#083140',
    },
    secondary: {
      main: '#1c97c2',
    },
    error: {
      main: red.A400,
    },
  },
  background: {
    default: '#fff',
  },
};

export default createMuiTheme(themeBase);
