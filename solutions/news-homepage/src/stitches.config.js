import { createStitches } from '@stitches/react';

export const { styled, css, keyframes, globalCss } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(5, 85%, 63%)',
      accent: 'hsl(240, 100%, 5%)',
      grayishAccent: 'hsl(236, 13%, 42%)',
      text: '$grayishAccent',
      white: 'hsl(36, 100%, 99%)',
    },
    fontSizes: {
      body: '15px',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
      extraBold: 800,
    },
  },
  media: {
    sm: '(min-width: 30.063rem)',
    md: '(min-width: 48.063rem)',
    lg: '(min-width: 75rem)',
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
