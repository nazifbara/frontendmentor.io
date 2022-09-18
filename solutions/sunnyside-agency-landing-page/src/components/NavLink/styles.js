import { styled } from '../../stitches.config';

export const StyledNavLink = styled('a', {
  color: '$text',

  '&:hover': {
    textDecoration: 'none',
    color: '$hoverText',
  },

  variants: {
    gray: {
      true: {
        color: '$textGray',

        '&:hover': {
          color: '$textGray',
        },
      },
    },
  },
});
