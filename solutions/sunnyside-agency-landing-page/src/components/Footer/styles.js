import { styled } from '../../stitches.config';
import { ColumnGrid } from '..';

export const StyledContainer = styled(ColumnGrid, {
  py: '70px',
  bgC: '$bg',
  justifyItems: 'center',

  '& > *': {
    gridColumn: 'wrapper',
  },

  '& div': {
    mb: '20px',
  },

  '& > nav': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    columnGap: '40px',
    mb: '80px',

    '@md': {
      columnGap: '60px',
    },
  },

  '& > div:last-child': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    columnGap: '40px',
    mb: '80px',
  },

  '& a span': {
    display: 'none',
  },

  '& a:hover': {
    '& path': {
      fill: '$hoverText',
    },
  },
});
