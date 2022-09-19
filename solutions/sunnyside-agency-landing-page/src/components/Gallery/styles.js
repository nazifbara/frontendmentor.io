import { styled } from '../../stitches.config';

export const StyledImage = styled('figure', {
  gridColumn: 'span 6',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  aspectRatio: '1 / 1',
  m: 0,

  '@md': {
    height: '430px',
    gridColumn: 'span 3',
    aspectRatio: 'auto',
  },
});
