import { styled } from '../stitches.config';

export function Typography({
  element = 'p',
  align = 'left',
  children,
  ...other
}) {
  return (
    <StyledTypography as={element} element={element} align={align} {...other}>
      {children}
    </StyledTypography>
  );
}

const StyledTypography = styled('p', {
  fontSize: '$body',
  fontWeight: '$bold',
  fontFamily: '$cta',

  '@sm': {
    fontSize: '$body-sm',
  },
  '@md': {
    fontSize: '$body-md',
  },

  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
    element: {
      a: {
        fontWeight: '$regular',
        fontFamily: '$body, sans-serif',
        color: '$contrast',
        opacity: 0.7,

        '&:hover': {
          color: '$contrast',
          opacity: 1,
        },
      },
      p: {
        fontWeight: '$regular',
        fontFamily: '$body, sans-serif',
        opacity: 0.7,
      },
      h1: {
        fontSize: '$h1',
        '@sm': {
          fontSize: '$h1-sm',
        },
        '@md': {
          fontSize: '$h1-md',
        },
      },
      h2: {
        fontSize: '$h2',
        '@sm': {
          fontSize: '$h2-sm',
        },
        '@md': {
          fontSize: '$h2-md',
        },
      },
      h3: {
        fontSize: '$h3',
        '@sm': {
          fontSize: '$h3-sm',
        },
        '@md': {
          fontSize: '$h3-md',
        },
      },
    },
  },
});
