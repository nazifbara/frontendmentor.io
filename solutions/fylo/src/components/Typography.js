import { styled } from '../stitches.config';

const StyledTypography = styled('p', {
  fontSize: '$body',
  fontWeight: '$bold',

  variants: {
    element: {
      a: {
        fontWeight: '$regular',
        color: '$contrast',
        opacity: 0.7,

        '&:hover': {
          color: '$contrast',
          opacity: 1,
        },
      },
      p: {
        fontWeight: '$regular',
        opacity: 0.7,
      },
      h1: {
        fontSize: '$h1',
      },
      h2: {
        fontSize: '$h2',
      },
      h3: {
        fontSize: '$h3',
      },
    },
  },
});

export function Typography({ element = 'p', children, ...other }) {
  return (
    <StyledTypography as={element} element={element} {...other}>
      {children}
    </StyledTypography>
  );
}
