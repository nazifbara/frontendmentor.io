import { styled } from '../stitches.config';

export const BgShapeBox = styled('div', {
  overflow: 'visible',
  position: 'relative',
  mb: '20%',
  '&::before': {
    position: 'absolute',
    zIndex: -1,
    display: 'block',
    content: '',
    width: '90%',
    height: '100%',
    right: '-20px',
    top: '20%',
    borderRadius: '50% 0 0 50%',
    bgC: '$secondary',

    '@md': {
      mb: 0,
      width: '100%',
      right: '-150px',
    },
  },
  variants: {
    left: {
      true: {
        '&::before': {
          left: '-20px',
          right: 'initial',
          borderRadius: '0 50% 50% 0',

          '@md': {
            left: '-150px',
            right: '0px',
          },
        },
      },
    },
  },
});
