import createTheme from '@mui/material/styles/createTheme';
import OxygenRegular from './fonts/Oxygen/Oxygen-Regular.ttf';

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export const theme = createTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    } as PaletteColor,
    secondary: {
      light: '#ffa733',
      main: '#ff9100',
      dark: '#b26500',
      contrastText: '#000',
    } as PaletteColor,
  },
  typography: {
    fontFamily: 'Raleway, Roboto, Helvetica, Arial',
    fontSize: 14,
    htmlFontSize: 18,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightRegular: 400,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src:local('Raleway'), local('Raleway-Regular'), url(${OxygenRegular});
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
