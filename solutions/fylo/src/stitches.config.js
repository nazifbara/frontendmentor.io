import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primaryBase: 'hsl(216, 53%, 9%)',
      primaryBgSubtle: 'hsl(217, 28%, 15%)',
      primaryBg: 'hsl(218, 28%, 13%)',
      primarySolid: 'hsl(219, 30%, 18%)',
      contrast: 'hsl(0, 0%, 100%)',
    },
    fonts: {
      body: 'Open Sans',
      cta: 'Raleway',
    },
    fontSizes: {
      body: '14px',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
  },

  media: {
    xm: '(max-width: 30rem)',
    sm: '(min-width: 30.063rem)',
    md: '(min-width: 48.063rem)',
    lg: '(min-width: 64.063rem)',
    xlg: '(min-width: 75.063rem)',
  },

  utils: {
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
    wh: (value) => ({ width: value, height: value }),
  },
});
