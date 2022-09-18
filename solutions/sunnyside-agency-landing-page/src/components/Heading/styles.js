import { styled } from '../../stitches.config';

export const StyledHeading = styled('h1', {
  color: '$text',
  fontSize: '$body',
  textAlign: 'left',
  textTransform: 'none',
  fontWeight: '$black',
  lineHeight: 1.4,

  variants: {
    color: {
      gray: {
        color: '$textGray',
      },
      veryGray: {
        color: '$textVeryGray',
      },
    },
    variant: {
      h1: {
        fontSize: 'calc($h1 - 15px)',

        '@sm': {
          fontSize: 'calc($h1 - 10px)',
        },

        '@md': {
          fontSize: '$h1',
        },
      },
      h2: {
        fontSize: 'calc($h2 - 13px)',

        '@sm': {
          fontSize: 'calc($h2 - 8px)',
        },

        '@md': {
          fontSize: '$h2',
        },
      },
      h3: {
        fontSize: 'calc($h3 - 5px)',

        '@sm': {
          fontSize: 'calc($h3 - 3px)',
        },

        '@md': {
          fontSize: '$h3',
        },
      },
      body: {
        fontSize: '$body',
      },
    },
    textTransform: {
      uppercase: {
        textTransform: 'uppercase',
        letterSpacing: ' 4px',
      },
    },
    textAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
    },
  },
});
