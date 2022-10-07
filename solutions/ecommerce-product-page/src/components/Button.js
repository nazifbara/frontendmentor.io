import { styled } from '../stitches.config';

export const Button = styled('button', {
  p: '$3',
  border: 'none',
  borderRadius: '10px',
  bgC: '$primary',
  color: 'white',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'opacity ease-out 0.3s',

  '&:hover': {
    opacity: 0.6,
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});
