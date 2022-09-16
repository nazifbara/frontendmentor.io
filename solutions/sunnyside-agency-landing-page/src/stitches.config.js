import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, createTheme, theme } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(51, 100%, 49%)',
      text: 'hsl(212, 27%, 19%)',
      textVeryGray: 'hsl(213, 9%, 39%)',
      textGray: 'hsl(210, 4%, 67%)',
      bg: 'white',
    },
    fonts: {
      heading: 'Fraunces',
      body: 'Barlow',
    },
    fontSizes: {
      body: '18px',
      h1: '55px',
    },
  },
  media: {
    xm: '(min-width: 0px)',
    md: '(min-width: 760px)',
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

export const headerTheme = createTheme('intro-theme', {
  colors: {
    text: 'white',
    textGray: 'white',
  },
});
