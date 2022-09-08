import { styled } from '../stitches.config';

export const BgShapeBox = styled('div', {
  overflow: 'visible',
  position: 'relative',
  mb: '30px',
  '&::before': {
    position: 'absolute',
    zIndex: -1,
    display: 'block',
    content: '',
    width: '70%',
    height: '80%',
    right: '-20px',
    top: '20%',
    borderRadius: '50% 0 0 50%',
    bgC: '$secondary',

    '@md': {
      mb: 0,
      size: '90%',
      right: '-200px',
      top: '20%',
    },
  },
});
