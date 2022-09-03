import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(231, 69%, 60%)',
      secondary: 'hsl(0, 94%, 66%)',

      grayishLightContrast: 'hsl(229, 8%, 60%)',
      LightContrast: 'hsl(229, 31%, 21%)',

      darkContrast: '#fff',
    },
    fonts: {
      body: 'Rubik',
    },
    fontSizes: {
      body: '16px',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
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
