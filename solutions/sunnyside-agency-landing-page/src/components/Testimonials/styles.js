import { styled } from '../../stitches.config';

export const StyledTestimonie = styled('article', {
  gridColumn: 'wrapper',
  display: 'grid',
  rowGap: '30px',
  justifyItems: 'center',
  maxWidth: '400px',

  '&:not(last-child)': {
    mr: '10px',

    '@md': {
      mr: '20px',
    },
  },

  '@md': {
    gridColumn: 'span 4',
  },
});

export const StyledPhoto = styled('img', {
  size: '60px',
  borderRadius: '50%',

  '@md': {
    size: '70px',
  },
});

export const StyledContainer = styled('section', {
  py: '90px',

  '@md': {
    py: '150px',
  },
});
