import { styled } from '../../stitches.config';

export const StyledHeading = styled('h1', {
  color: '$text',
  fontSize: '$body',
  textAlign: 'left',
  textTransform: 'none',
  fontWeight: '$black',
  lineHeight: 1.4,

  variants: {
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
