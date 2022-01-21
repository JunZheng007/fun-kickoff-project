import { createTheme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Open Sans", "sans-serif"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h1: {
      fontSize: 30,
      paddingBottom: 20,
      fontWeight: 700,
      textAlign: 'center',
    },
    label: {
      fontSize: 13,
      paddingLeft: '5px',
      fontWeight: '900',
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
