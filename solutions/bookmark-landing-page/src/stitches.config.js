import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(0, 94%, 66%)',
      secondary: 'hsl(231, 69%, 60%)',

      grayishLightContrast: 'hsl(229, 8%, 60%)',
      lightContrast: 'hsl(229, 31%, 21%)',
      lightContrastOpaque: 'rgba(37, 43, 70, 0.94)',

      darkContrast: '#fff',
    },
    shadows: {
      secondary: 'rgba(83, 104, 223, 0.2)',
    },
    fonts: {
      body: 'Rubik',
    },
    fontSizes: {
      h1: '48px',
      h2: '36px',
      h3: '24px',
      body: '18px',
      nav: '15px',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  media: {
    xm: '(min-width: 0rem)',
    sm: '(min-width: 30.063rem)',
    md: '(min-width: 48.063rem)',
    lg: '(min-width: 64.063rem)',
  },
  utils: {
    size: (value) => ({ width: value, height: value }),
    bgC: (value) => ({ backgroundColor: value }),
    m: (value) => ({ margin: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
    mt: (value) => ({ marginTop: value }),
    ml: (value) => ({ marginLeft: value }),
    mr: (value) => ({ marginRight: value }),
    mb: (value) => ({ marginBottom: value }),
    p: (value) => ({ padding: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    pt: (value) => ({ paddingTop: value }),
    pl: (value) => ({ paddingLeft: value }),
    pr: (value) => ({ paddingRight: value }),
    pb: (value) => ({ paddingBottom: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
  },
});
