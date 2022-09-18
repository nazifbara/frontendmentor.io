import { styled } from '../../stitches.config';

export const StyledTestimonie = styled('article', {
  gridColumn: 'wrapper',
  display: 'grid',
  rowGap: '30px',
  justifyItems: 'center',
  maxWidth: '400px',

  '@md': {
    '&:first-child': {
      gridColumn: 'wrapper / span 4',
    },

    '&:not(:first-child)': {
      gridColumn: 'span 4',
    },
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
  py: '150px',
});
