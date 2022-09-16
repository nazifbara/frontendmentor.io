import { styled } from '../../stitches.config';

export const StyledNavLink = styled('a', {
  color: '$textGray',

  '&:hover': {
    textDecoration: 'none',
    color: '$textGray',
  },
});
