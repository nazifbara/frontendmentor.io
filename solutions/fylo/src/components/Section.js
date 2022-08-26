import { styled } from '../stitches.config';

export const Section = styled('section', {
  width: '100%',
  py: '30px',
  px: '18px',

  '@sm': {
    py: '25px',
  },
  '@md': {
    py: '50px',
  },
});
