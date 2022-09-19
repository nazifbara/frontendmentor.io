import { styled } from '../../stitches.config';

export const StyledColumnGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '[wrapper-start] repeat(12, 1fr) [wrapper-end]',
  alignItems: 'center',

  variants: {
    padding: {
      true: {
        px: '20px',
        '@lg': {
          px: '40px',
        },
      },
    },
  },
});
