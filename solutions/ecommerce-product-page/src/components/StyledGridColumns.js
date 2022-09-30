import { styled } from '../stitches.config';

export const StyledGridColumns = styled('div', {
  display: 'grid',
  gridTemplateColumns: '[wrapper-start] repeat(12, 1fr) [wrapper-end]',
  alignItems: 'center',

  variants: {
    padding: {
      true: {
        px: '$4',
      },
      false: {
        px: 0,
      },
    },
  },
});
