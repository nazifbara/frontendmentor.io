import { styled } from '../stitches.config';

export const Heading = ({ as, variant = 'h1', ...otherProps }) => (
  <StyledHeading as={as ?? variant} variant={variant} {...otherProps} />
);

export const StyledHeading = styled('h1', {
  fontSize: '$body',
  textAlign: 'left',
  textTransform: 'none',
  fontWeight: '$bold',

  '@lg': {
    lineHeight: 1.25,
  },

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
        fontSize: 'calc($h1 - 10px)',

        '@lg': {
          fontSize: '$h1',
        },
      },
      h2: {
        fontSize: 'calc($h2 - 10px)',

        '@lg': {
          fontSize: '$h2',
        },
      },
      h3: {
        fontSize: '$h3',
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
