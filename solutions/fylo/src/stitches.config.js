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

      accent1: 'hsl(176, 68%, 64%)',
      accent2: 'hsl(198, 60%, 50%)',

      danger: 'hsl(0, 100%, 63%)',
    },
    fonts: {
      body: 'Open Sans',
      cta: 'Raleway',
    },
    fontSizes: {
      body: '14px',
      h1: '25px',
      h2: '19px',
      h3: '16px',

      'body-sm': '15px',
      'h1-sm': '30px',
      'h2-sm': '22px',
      'h3-sm': '17px',

      'body-md': '16px',
      'h1-md': '35px',
      'h2-md': '25px',
      'h3-md': '18px',
    },
    fontWeights: {
      regular: 400,
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
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
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
