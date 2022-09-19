import { styled } from '../../stitches.config';

export const StyledLogo = styled('div', {
  gridColumn: 'wrapper / span 6',
  '& path': {
    fill: '$text',
  },
  '& svg': {
    width: '137px',
    height: '37px',

    '@md': {
      width: '167px',
      height: '67px',
    },
  },
});
