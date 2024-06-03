import { createTheme } from '@mui/material/styles';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      primaryBackground: string;
      secondaryBackground: string;
      headerBackground: string;
      cardBackground: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      primaryBackground?: string;
      secondaryBackground?: string;
      headerBackground?: string;
      cardBackground?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#171719',
      paper: '#131217',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
    },
    customColors: {
     primaryBackground: '#171719',
     secondaryBackground: '#121418',
     headerBackground: '#090a11',
     cardBackground: '#131217',
   },
  },
  typography: {
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default theme;
