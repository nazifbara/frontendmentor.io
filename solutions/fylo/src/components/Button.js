import { styled } from '../stitches.config';

export const Button = styled('button', {
  border: 'none',
  borderRadius: '50px',
  py: '15px',
  px: '17px',
  fontWeight: '$bold',
  fontFamily: '$cta, sans-serif',
  color: '$contrast',
  linearGradient: 'to right, $accent1, $accent2',
  cursor: 'pointer',

  '&:hover': {
    linearGradient: 'to right, $accent1, $accent1',
  },

  '@sm': {
    fontSize: '15px',
  },
  '@md': {
    fontSize: '16px',
    py: '18px',
    px: '20px',
  },
});
