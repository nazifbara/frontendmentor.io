import { createStitches } from '@stitches/react';

export const { styled, css, keyframes, globalCss } = createStitches({
  theme: {
    colors: {
      primary: 'hsl(5, 85%, 63%)',
      accent: 'hsl(240, 100%, 5%)',
      grayishAccent: 'hsl(236, 13%, 42%)',
      text: '$accent',
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
    media: {
      sm: '(min-width: 30.063rem)',
      md: '(min-width: 48.063rem)',
      lg: '(min-width: 75rem)',
    },
  },
});
