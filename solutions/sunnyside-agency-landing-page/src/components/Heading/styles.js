import { styled } from '../../stitches.config';

export const StyledHeading = styled('h1', {
  color: '$text',
  fontSize: '$body',
  textAlign: 'left',
  textTransform: 'none',

  '@md': {
    fontSize: '$h1',
  },

  variants: {
    variant: {
      h1: {
        fontSize: 'calc($h1 - 10px)',
      },
    },
    textTransform: {
      uppercase: {
        textTransform: 'uppercase',
        letterSpacing: ' 4px',
      },
    },
    textAlign: {
      center: {
        textAlign: 'center',
      },
    },
  },
});
